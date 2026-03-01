import type { Command } from "commander";
import { createInterface } from "node:readline/promises";
import { Writable } from "node:stream";
import { AuthApi, type LoginRequest } from "../../sdk/beetrade-v2";
import { createConfig } from "../client";
import { getConfig, setConfig, clearConfig } from "../config";
import { json, error, success } from "../output";

async function resolveLoginCredentials(options: {
  email?: string;
  password?: string;
}): Promise<{ email: string; password: string }> {
  if (options.email && options.password) {
    return { email: options.email, password: options.password };
  }

  if (!process.stdin.isTTY || !process.stdout.isTTY) {
    error(
      "Missing credentials: use --email and --password in non-interactive mode"
    );
  }

  let muted = false;
  const mutedOutput = new Writable({
    write(chunk: string | Uint8Array, _encoding, callback): void {
      if (!muted) {
        process.stdout.write(chunk);
      }
      callback();
    },
  });

  const rl = createInterface({
    input: process.stdin,
    output: mutedOutput,
    terminal: true,
  });

  try {
    const email =
      options.email ??
      (await rl.question("Email: ")).trim();
    let password: string;
    if (options.password) {
      password = options.password;
    } else {
      process.stdout.write("Password: ");
      muted = true;
      password = await rl.question("");
    }

    if (!options.password) {
      muted = false;
      process.stdout.write("\n");
    }

    if (!email || !password) {
      error("Both email and password are required");
    }

    return { email, password };
  } finally {
    rl.close();
  }
}

export function registerAuthCommand(program: Command): void {
  const auth = program.command("auth").description("Authentication commands");

  auth
    .command("login")
    .description("Login with email and password")
    .option("-e, --email <email>", "Email address")
    .option("-p, --password <password>", "Password")
    .action(async (options) => {
      try {
        const credentials = await resolveLoginCredentials(options);
        const config = createConfig();
        const api = new AuthApi(config);

        const request: LoginRequest = {
          email: credentials.email,
          password: credentials.password,
        };

        const response = await api.authLoginPost({ request });

        if (!response.data?.accessToken) {
          error("Login failed: No access token received");
        }

        const data = response.data;
        setConfig({
          apiUrl: getConfig().apiUrl,
          accessToken: data!.accessToken,
          refreshToken: data!.refreshToken,
          email: credentials.email,
        });

        success({
          success: true,
          message: "Login successful",
          user: data!.user,
        });
      } catch (err) {
        error("Login failed", err);
      }
    });

  auth
    .command("logout")
    .description("Logout and clear stored credentials")
    .action(() => {
      clearConfig();
      success({ success: true, message: "Logged out successfully" });
    });

  auth
    .command("status")
    .description("Show current authentication status")
    .action(() => {
      const config = getConfig();
      json({
        authenticated: !!config.accessToken,
        email: config.email || null,
        apiUrl: config.apiUrl,
      });
    });
}
