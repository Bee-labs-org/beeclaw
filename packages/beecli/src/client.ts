import type { ConfigurationParameters } from "../sdk/beetrade-v2";
import { Configuration } from "../sdk/beetrade-v2";
import { getConfig } from "./config";

export function createConfig(overrides?: Partial<ConfigurationParameters>): Configuration {
  const cliConfig = getConfig();
  const params: ConfigurationParameters = {
    basePath: cliConfig.apiUrl,
    apiKey: () => `Bearer ${cliConfig.accessToken}`,
    ...overrides,
  };
  return new Configuration(params);
}

export function requireAuth(): string {
  const config = getConfig();
  if (!config.accessToken) {
    console.error(JSON.stringify({ error: "Not authenticated. Run 'beecli auth login' first." }));
    process.exit(1);
  }
  return config.accessToken;
}
