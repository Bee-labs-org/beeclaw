import { Command } from "commander";
import { AuthApi, type LoginRequest } from "../../sdk/beetrade-v2";
import { createConfig } from "../client";
import { getConfig, setConfig, clearConfig } from "../config";
import { json, error, success } from "../output";

export function registerAuthCommand(program: Command): void {
  const auth = program.command("auth").description("Authentication commands");

  auth
    .command("login")
    .description("Login with email and password")
    .requiredOption("-e, --email <email>", "Email address")
    .requiredOption("-p, --password <password>", "Password")
    .option("--api-url <url>", "API base URL")
    .action(async (options) => {
      try {
        const config = createConfig(
          options.apiUrl ? { basePath: options.apiUrl } : undefined
        );
        const api = new AuthApi(config);

        const request: LoginRequest = {
          email: options.email,
          password: options.password,
        };

        const response = await api.authLoginPost({ request });

        if (!response.data?.accessToken) {
          error("Login failed: No access token received");
        }

        const data = response.data;
        setConfig({
          apiUrl: options.apiUrl || getConfig().apiUrl,
          accessToken: data!.accessToken,
          refreshToken: data!.refreshToken,
          email: options.email,
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
