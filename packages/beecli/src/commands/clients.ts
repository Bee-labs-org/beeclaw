import type { Command } from "commander";
import {
  TradingClientsApi,
  type CreateTradingClientRequest,
  type UpdateTradingClientRequest,
} from "../../sdk/beetrade-v2";
import { createConfig, requireAuth } from "../client";
import { json, error, success } from "../output";

export function registerClientsCommand(program: Command): void {
  const clients = program
    .command("clients")
    .description("Trading client management commands");

  clients
    .command("list")
    .description("List all trading clients")
    .option("-l, --lang <lang>", "Language (en/vi)", "en")
    .action(async (options) => {
      requireAuth();
      try {
        const config = createConfig();
        const api = new TradingClientsApi(config);
        const response = await api.tradingClientsGet({
          lang: options.lang,
        });
        json(response);
      } catch (err) {
        error("Failed to list trading clients", err);
      }
    });

  clients
    .command("create")
    .description("Create a new trading client")
    .requiredOption("-n, --name <name>", "Trading client name")
    .option("-d, --description <description>", "Description")
    .option("-l, --lang <lang>", "Language (en/vi)", "en")
    .action(async (options) => {
      requireAuth();
      try {
        const config = createConfig();
        const api = new TradingClientsApi(config);

        const request: CreateTradingClientRequest = {
          name: options.name,
          description: options.description,
        };

        const response = await api.tradingClientsPost({
          request,
          lang: options.lang,
        });
        success(response);
      } catch (err) {
        error("Failed to create trading client", err);
      }
    });

  clients
    .command("update")
    .description("Update a trading client")
    .argument("<id>", "Trading client ID")
    .option("-n, --name <name>", "Trading client name")
    .option("-d, --description <description>", "Description")
    .option("-l, --lang <lang>", "Language (en/vi)", "en")
    .action(async (id, options) => {
      requireAuth();
      try {
        const config = createConfig();
        const api = new TradingClientsApi(config);

        const request: UpdateTradingClientRequest = {};

        if (options.name) request.name = options.name;
        if (options.description !== undefined) {
          request.description = options.description;
        }

        const response = await api.tradingClientsIdPut({
          id: parseInt(id, 10),
          request,
          lang: options.lang,
        });
        success(response);
      } catch (err) {
        error("Failed to update trading client", err);
      }
    });

  clients
    .command("delete")
    .description("Delete a trading client")
    .argument("<id>", "Trading client ID")
    .option("-l, --lang <lang>", "Language (en/vi)", "en")
    .action(async (id, options) => {
      requireAuth();
      try {
        const config = createConfig();
        const api = new TradingClientsApi(config);
        const response = await api.tradingClientsIdDelete({
          id: parseInt(id, 10),
          lang: options.lang,
        });
        success({ success: true, message: `Trading client ${id} deleted`, data: response });
      } catch (err) {
        error("Failed to delete trading client", err);
      }
    });
}
