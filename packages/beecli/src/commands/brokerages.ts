import type { Command } from "commander";
import { BrokerageApi } from "../../sdk/beetrade-v2";
import { createConfig, requireAuth } from "../client";
import { json, error } from "../output";

export function registerBrokeragesCommand(program: Command): void {
  const brokerages = program
    .command("brokerages")
    .description("Brokerage management commands");

  brokerages
    .command("list")
    .description("List all brokerages")
    .option("-p, --page <number>", "Page number", "1")
    .option("-s, --page-size <number>", "Page size", "20")
    .option("--search <keyword>", "Search keyword")
    .option("--all", "Load all brokerages without pagination")
    .option("-l, --lang <lang>", "Language (en/vi)", "en")
    .action(async (options) => {
      try {
        const config = createConfig();
        const api = new BrokerageApi(config);
        const response = await api.brokeragesGet({
          page: parseInt(options.page, 10),
          pageSize: parseInt(options.pageSize, 10),
          search: options.search,
          loadAll: options.all ? "ALL" : undefined,
          lang: options.lang,
        });
        json(response);
      } catch (err) {
        error("Failed to list brokerages", err);
      }
    });

  brokerages
    .command("get")
    .description("Get brokerage by code")
    .argument("<code>", "Brokerage code")
    .option("-l, --lang <lang>", "Language (en/vi)", "en")
    .action(async (code, options) => {
      try {
        const config = createConfig();
        const api = new BrokerageApi(config);
        const response = await api.brokeragesCodeGet({
          code,
          lang: options.lang,
        });
        json(response);
      } catch (err) {
        error("Failed to get brokerage", err);
      }
    });

  brokerages
    .command("live-trade")
    .description("Get brokerages available for live trading based on user's plan")
    .option("-l, --lang <lang>", "Language (en/vi)", "en")
    .action(async (options) => {
      requireAuth();
      try {
        const config = createConfig();
        const api = new BrokerageApi(config);
        const response = await api.brokeragesLiveTradeGet({
          lang: options.lang,
        });
        json(response);
      } catch (err) {
        error("Failed to get live trade brokerages", err);
      }
    });
}
