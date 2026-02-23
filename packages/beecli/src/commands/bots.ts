import type { Command } from "commander";
import {
  BotsApi,
  type CreateBotRequest,
  type UpdateBotRequest,
  type BotBacktestRequest,
  type BotPaperTradingRequest,
  type BotLiveTradingRequest,
} from "../../sdk/beetrade-v2";
import { createConfig, requireAuth } from "../client";
import { json, error, success } from "../output";

export function registerBotsCommand(program: Command): void {
  const bots = program.command("bots").description("Bot management commands");

  bots
    .command("list")
    .description("List all bots")
    .option("-p, --page <number>", "Page number", "1")
    .option("-s, --page-size <number>", "Page size", "20")
    .option("--status <status>", "Filter by status")
    .option("--type-id <id>", "Filter by bot type ID")
    .action(async (options) => {
      requireAuth();
      try {
        const config = createConfig();
        const api = new BotsApi(config);
        const response = await api.botsGet({
          page: parseInt(options.page, 10),
          pageSize: parseInt(options.pageSize, 10),
          status: options.status,
          botTypeId: options.typeId ? parseInt(options.typeId, 10) : undefined,
        });
        json(response);
      } catch (err) {
        error("Failed to list bots", err);
      }
    });

  bots
    .command("get")
    .description("Get bot details")
    .argument("<id>", "Bot ID")
    .action(async (id) => {
      requireAuth();
      try {
        const config = createConfig();
        const api = new BotsApi(config);
        const response = await api.botsIdGet({ id: parseInt(id, 10) });
        json(response);
      } catch (err) {
        error("Failed to get bot", err);
      }
    });

  bots
    .command("create")
    .description("Create a new bot")
    .requiredOption("-t, --type-id <id>", "Bot type ID")
    .requiredOption("-c, --config <json>", "Bot configuration as JSON string")
    .action(async (options) => {
      requireAuth();
      try {
        const config = createConfig();
        const api = new BotsApi(config);

        let configData: Record<string, unknown> | undefined;
        try {
          configData = JSON.parse(options.config);
        } catch {
          error("Invalid JSON in --config parameter");
        }

        const request: CreateBotRequest = {
          botTypeId: parseInt(options.typeId, 10),
          configData: configData!,
        };

        const response = await api.botsPost({ request });
        success(response);
      } catch (err) {
        error("Failed to create bot", err);
      }
    });

  bots
    .command("update")
    .description("Update a bot")
    .argument("<id>", "Bot ID")
    .option("-n, --name <name>", "Bot name")
    .option("-s, --status <status>", "Bot status")
    .option("-c, --config <json>", "Bot configuration as JSON string")
    .action(async (id, options) => {
      requireAuth();
      try {
        const config = createConfig();
        const api = new BotsApi(config);

        const request: UpdateBotRequest = {};

        if (options.name) request.name = options.name;
        if (options.status) request.status = options.status;
        if (options.config) {
          try {
            request.configData = JSON.parse(options.config);
          } catch {
            error("Invalid JSON in --config parameter");
          }
        }

        const response = await api.botsIdPut({
          id: parseInt(id, 10),
          request,
        });
        success(response);
      } catch (err) {
        error("Failed to update bot", err);
      }
    });

  bots
    .command("delete")
    .description("Delete a bot")
    .argument("<id>", "Bot ID")
    .action(async (id) => {
      requireAuth();
      try {
        const config = createConfig();
        const api = new BotsApi(config);
        await api.botsIdDelete({ id: parseInt(id, 10) });
        success({ success: true, message: `Bot ${id} deleted` });
      } catch (err) {
        error("Failed to delete bot", err);
      }
    });

  bots
    .command("status")
    .description("Get bot runtime status")
    .argument("<id>", "Bot ID")
    .action(async (id) => {
      requireAuth();
      try {
        const config = createConfig();
        const api = new BotsApi(config);
        const response = await api.botsIdStatusGet({ id: parseInt(id, 10) });
        json(response);
      } catch (err) {
        error("Failed to get bot status", err);
      }
    });

  const run = bots.command("run").description("Run bot commands");

  run
    .command("paper")
    .description("Start paper trading")
    .argument("<id>", "Bot ID")
    .requiredOption("-b, --brokerage-id <id>", "Brokerage ID")
    .requiredOption("-c, --cash <amount>", "Initial cash amount")
    .action(async (id, options) => {
      requireAuth();
      try {
        const config = createConfig();
        const api = new BotsApi(config);

        const request: BotPaperTradingRequest = {
          brokerageId: parseInt(options.brokerageId, 10),
          cash: parseFloat(options.cash),
        };

        const response = await api.botsIdPaperPost({
          id: parseInt(id, 10),
          request,
        });
        success(response);
      } catch (err) {
        error("Failed to start paper trading", err);
      }
    });

  run
    .command("live")
    .description("Start live trading")
    .argument("<id>", "Bot ID")
    .requiredOption("-a, --account-id <id>", "Brokerage account ID")
    .action(async (id, options) => {
      requireAuth();
      try {
        const config = createConfig();
        const api = new BotsApi(config);

        const request: BotLiveTradingRequest = {
          brokerageAccountId: parseInt(options.accountId, 10),
        };

        const response = await api.botsIdLivePost({
          id: parseInt(id, 10),
          request,
        });
        success(response);
      } catch (err) {
        error("Failed to start live trading", err);
      }
    });

  bots
    .command("backtest")
    .description("Run bot backtest")
    .argument("<id>", "Bot ID")
    .requiredOption("-b, --brokerage-id <id>", "Brokerage ID")
    .requiredOption("-c, --cash <amount>", "Initial cash amount")
    .requiredOption("--from <date>", "Start date (YYYY-MM-DD)")
    .requiredOption("--to <date>", "End date (YYYY-MM-DD)")
    .action(async (id, options) => {
      requireAuth();
      try {
        const config = createConfig();
        const api = new BotsApi(config);

        const request: BotBacktestRequest = {
          brokerageId: parseInt(options.brokerageId, 10),
          cash: parseFloat(options.cash),
          startDate: options.from,
          endDate: options.to,
        };

        const response = await api.botsIdBacktestPost({
          id: parseInt(id, 10),
          request,
        });
        success(response);
      } catch (err) {
        error("Failed to run backtest", err);
      }
    });

  bots
    .command("types")
    .description("List available bot types")
    .action(async () => {
      try {
        const config = createConfig();
        const api = new BotsApi(config);
        const response = await api.botsTypesGet();
        json(response);
      } catch (err) {
        error("Failed to list bot types", err);
      }
    });
}
