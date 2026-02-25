import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { homedir } from "node:os";
import { join } from "node:path";

export interface CliConfig {
  apiUrl: string;
  accessToken?: string;
  refreshToken?: string;
  email?: string;
}

const CONFIG_DIR = join(homedir(), ".beecli");
const CONFIG_FILE = join(CONFIG_DIR, "config.json");

const DEFAULT_API_URL = "https://api.prod.beetrade.com/api/v2";

export function getConfig(): CliConfig {
  const defaults: CliConfig = { apiUrl: DEFAULT_API_URL };
  if (!existsSync(CONFIG_FILE)) {
    return defaults;
  }
  try {
    const content = readFileSync(CONFIG_FILE, "utf-8");
    const config = JSON.parse(content) as CliConfig;
    return { ...defaults, ...config };
  } catch {
    return defaults;
  }
}

export function setConfig(config: Partial<CliConfig>): CliConfig {
  const current = getConfig();
  const updated = { ...current, ...config };
  if (!existsSync(CONFIG_DIR)) {
    mkdirSync(CONFIG_DIR, { recursive: true });
  }
  writeFileSync(CONFIG_FILE, JSON.stringify(updated, null, 2));
  return updated;
}

export function clearConfig(): void {
  if (existsSync(CONFIG_FILE)) {
    writeFileSync(CONFIG_FILE, JSON.stringify({ apiUrl: DEFAULT_API_URL }, null, 2));
  }
}
