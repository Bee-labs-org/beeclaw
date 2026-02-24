import type { Command } from "commander";
import {
  StrategiesApi,
  type CreateStrategyRequest,
  type UpdateStrategyRequest,
  type CreateBacktestRequest,
  type CreatePaperTradingRequest,
  type CreateLiveTradingRequest,
  type ScheduleStrategyRequest,
  type CreateAlertRequest,
  type UpdateAlertRequest,
  type AdjustRulesRequest,
} from "../../sdk/beetrade-v2";
import { createConfig, requireAuth } from "../client";
import { json, error, success } from "../output";

export function registerStrategiesCommand(program: Command): void {
  const strategies = program
    .command("strategies")
    .description("Strategy management commands");

  strategies
    .command("list")
    .description("List all strategies")
    .option("-p, --page <number>", "Page number", "1")
    .option("-s, --page-size <number>", "Page size", "20")
    .option("-k, --keyword <keyword>", "Search keyword")
    .action(async (options) => {
      requireAuth();
      try {
        const config = createConfig();
        const api = new StrategiesApi(config);
        const response = await api.strategiesGet({
          page: parseInt(options.page, 10),
          pageSize: parseInt(options.pageSize, 10),
          keyword: options.keyword,
        });
        json(response);
      } catch (err) {
        error("Failed to list strategies", err);
      }
    });

  strategies
    .command("get")
    .description("Get strategy details")
    .argument("<id>", "Strategy ID")
    .action(async (id) => {
      requireAuth();
      try {
        const config = createConfig();
        const api = new StrategiesApi(config);
        const response = await api.strategiesIdGet({ id: parseInt(id, 10) });
        json(response);
      } catch (err) {
        error("Failed to get strategy", err);
      }
    });

  strategies
    .command("create")
    .description("Create a new strategy")
    .requiredOption("-n, --name <name>", "Strategy name")
    .requiredOption("-d, --data <json>", "Strategy data as JSON string")
    .option("--description <description>", "Strategy description")
    .action(async (options) => {
      requireAuth();
      try {
        const config = createConfig();
        const api = new StrategiesApi(config);

        let data: { [key: string]: unknown };
        try {
          data = JSON.parse(options.data);
        } catch {
          error("Invalid JSON in --data parameter");
          return;
        }

        const request: CreateStrategyRequest = {
          name: options.name,
          data,
          description: options.description,
        };
        const response = await api.strategiesPost({ request });
        success(response);
      } catch (err) {
        error("Failed to create strategy", err);
      }
    });

  strategies
    .command("update")
    .description("Update a strategy")
    .argument("<id>", "Strategy ID")
    .option("-n, --name <name>", "Strategy name")
    .option("-d, --data <json>", "Strategy data as JSON string")
    .option("--description <description>", "Strategy description")
    .action(async (id, options) => {
      requireAuth();
      try {
        const config = createConfig();
        const api = new StrategiesApi(config);

        const request: UpdateStrategyRequest = {};

        if (options.name) request.name = options.name;
        if (options.description) request.description = options.description;
        if (options.data) {
          try {
            request.data = JSON.parse(options.data);
          } catch {
            error("Invalid JSON in --data parameter");
            return;
          }
        }

        const response = await api.strategiesIdPut({
          id: parseInt(id, 10),
          request,
        });
        success(response);
      } catch (err) {
        error("Failed to update strategy", err);
      }
    });

  strategies
    .command("delete")
    .description("Delete a strategy")
    .argument("<id>", "Strategy ID")
    .action(async (id) => {
      requireAuth();
      try {
        const config = createConfig();
        const api = new StrategiesApi(config);
        await api.strategiesIdDelete({ id: parseInt(id, 10) });
        success({ success: true, message: `Strategy ${id} deleted` });
      } catch (err) {
        error("Failed to delete strategy", err);
      }
    });

  strategies
    .command("backtest")
    .description("Run strategy backtest")
    .argument("<id>", "Strategy ID")
    .requiredOption("-b, --brokerage-id <id>", "Brokerage ID")
    .requiredOption("-c, --cash <amount>", "Initial cash amount")
    .requiredOption("--from <date>", "Start date (YYYY-MM-DD)")
    .requiredOption("--to <date>", "End date (YYYY-MM-DD)")
    .action(async (id, options) => {
      requireAuth();
      try {
        const config = createConfig();
        const api = new StrategiesApi(config);

        const request: CreateBacktestRequest = {
          brokerageId: parseInt(options.brokerageId, 10),
          cash: parseFloat(options.cash),
          startDate: options.from,
          endDate: options.to,
        };

        const response = await api.strategiesIdBacktestPost({
          id: parseInt(id, 10),
          request,
        });
        success(response);
      } catch (err) {
        error("Failed to run backtest", err);
      }
    });

  strategies
    .command("paper")
    .description("Start paper trading")
    .argument("<id>", "Strategy ID")
    .requiredOption("-b, --brokerage-id <id>", "Brokerage ID")
    .requiredOption("-c, --cash <amount>", "Initial cash amount")
    .action(async (id, options) => {
      requireAuth();
      try {
        const config = createConfig();
        const api = new StrategiesApi(config);

        const request: CreatePaperTradingRequest = {
          brokerageId: parseInt(options.brokerageId, 10),
          cash: parseFloat(options.cash),
        };

        const response = await api.strategiesIdPaperPost({
          id: parseInt(id, 10),
          request,
        });
        success(response);
      } catch (err) {
        error("Failed to start paper trading", err);
      }
    });

  strategies
    .command("live")
    .description("Start live trading")
    .argument("<id>", "Strategy ID")
    .requiredOption("-a, --account-id <id>", "Brokerage account ID")
    .action(async (id, options) => {
      requireAuth();
      try {
        const config = createConfig();
        const api = new StrategiesApi(config);

        const request: CreateLiveTradingRequest = {
          brokerageAccountId: parseInt(options.accountId, 10),
        };

        const response = await api.strategiesIdLivePost({
          id: parseInt(id, 10),
          request,
        });
        success(response);
      } catch (err) {
        error("Failed to start live trading", err);
      }
    });

  strategies
    .command("schedule")
    .description("Schedule a strategy with a cron expression")
    .argument("<id>", "Strategy ID")
    .requiredOption("-e, --cron <expression>", "Cron expression")
    .action(async (id, options) => {
      requireAuth();
      try {
        const config = createConfig();
        const api = new StrategiesApi(config);

        const request: ScheduleStrategyRequest = {
          cronExpression: options.cron,
        };

        const response = await api.strategiesIdSchedulePost({
          id: parseInt(id, 10),
          request,
        });
        success(response);
      } catch (err) {
        error("Failed to schedule strategy", err);
      }
    });

  strategies
    .command("schedule-info")
    .description("Get strategy schedule")
    .argument("<id>", "Strategy ID")
    .action(async (id) => {
      requireAuth();
      try {
        const config = createConfig();
        const api = new StrategiesApi(config);
        const response = await api.strategiesIdScheduleGet({ id: parseInt(id, 10) });
        json(response);
      } catch (err) {
        error("Failed to get schedule", err);
      }
    });

  strategies
    .command("schedule-delete")
    .description("Delete strategy schedule")
    .argument("<schedule-id>", "Schedule ID")
    .action(async (scheduleId) => {
      requireAuth();
      try {
        const config = createConfig();
        const api = new StrategiesApi(config);
        await api.strategiesSchedulesScheduleIdDelete({
          scheduleId: parseInt(scheduleId, 10),
        });
        success({ success: true, message: `Schedule ${scheduleId} deleted` });
      } catch (err) {
        error("Failed to delete schedule", err);
      }
    });

  strategies
    .command("alerts")
    .description("List strategy alerts")
    .argument("<id>", "Strategy ID")
    .action(async (id) => {
      requireAuth();
      try {
        const config = createConfig();
        const api = new StrategiesApi(config);
        const response = await api.strategiesIdAlertsGet({ id: parseInt(id, 10) });
        json(response);
      } catch (err) {
        error("Failed to list alerts", err);
      }
    });

  strategies
    .command("create-alert")
    .description("Create strategy alert")
    .argument("<id>", "Strategy ID")
    .requiredOption("-c, --config <json>", "Alert configuration as JSON string")
    .action(async (id, options) => {
      requireAuth();
      try {
        const config = createConfig();
        const api = new StrategiesApi(config);

        let alertConfig: CreateAlertRequest;
        try {
          alertConfig = JSON.parse(options.config);
        } catch {
          error("Invalid JSON in --config parameter");
        }

        const response = await api.strategiesIdAlertsPost({
          id: parseInt(id, 10),
          request: alertConfig!,
        });
        success(response);
      } catch (err) {
        error("Failed to create alert", err);
      }
    });

  strategies
    .command("update-alert")
    .description("Update strategy alert")
    .argument("<id>", "Strategy ID")
    .argument("<alert-id>", "Alert ID")
    .requiredOption("-c, --config <json>", "Alert configuration as JSON string")
    .action(async (id, alertId, options) => {
      requireAuth();
      try {
        const config = createConfig();
        const api = new StrategiesApi(config);

        let alertConfig: UpdateAlertRequest;
        try {
          alertConfig = JSON.parse(options.config);
        } catch {
          error("Invalid JSON in --config parameter");
        }

        const response = await api.strategiesIdAlertsAlertIdPut({
          id: parseInt(id, 10),
          alertId: parseInt(alertId, 10),
          request: alertConfig!,
        });
        success(response);
      } catch (err) {
        error("Failed to update alert", err);
      }
    });

  strategies
    .command("delete-alert")
    .description("Delete strategy alert")
    .argument("<id>", "Strategy ID")
    .argument("<alert-id>", "Alert ID")
    .action(async (id, alertId) => {
      requireAuth();
      try {
        const config = createConfig();
        const api = new StrategiesApi(config);
        await api.strategiesIdAlertsAlertIdDelete({
          id: parseInt(id, 10),
          alertId: parseInt(alertId, 10),
        });
        success({ success: true, message: `Alert ${alertId} deleted` });
      } catch (err) {
        error("Failed to delete alert", err);
      }
    });

  strategies
    .command("versions")
    .description("List strategy versions")
    .argument("<id>", "Strategy ID")
    .option("-p, --page <number>", "Page number", "1")
    .option("-s, --page-size <number>", "Page size", "20")
    .action(async (id, options) => {
      requireAuth();
      try {
        const config = createConfig();
        const api = new StrategiesApi(config);
        const response = await api.strategiesIdVersionsGet({
          id: parseInt(id, 10),
          page: parseInt(options.page, 10),
          pageSize: parseInt(options.pageSize, 10),
        });
        json(response);
      } catch (err) {
        error("Failed to list versions", err);
      }
    });

  strategies
    .command("rollback")
    .description("Rollback strategy to a specific version")
    .argument("<id>", "Strategy ID")
    .argument("<version-id>", "Version ID")
    .action(async (id, versionId) => {
      requireAuth();
      try {
        const config = createConfig();
        const api = new StrategiesApi(config);
        const response = await api.strategiesIdVersionsVersionIdRollbackPost({
          id: parseInt(id, 10),
          versionId: parseInt(versionId, 10),
        });
        success(response);
      } catch (err) {
        error("Failed to rollback strategy", err);
      }
    });

  strategies
    .command("history")
    .description("Get strategy execution history")
    .argument("<id>", "Strategy ID")
    .option("-p, --page <number>", "Page number", "1")
    .option("-s, --page-size <number>", "Page size", "20")
    .option("--status <status>", "Filter by status")
    .action(async (id, options) => {
      requireAuth();
      try {
        const config = createConfig();
        const api = new StrategiesApi(config);
        const response = await api.strategiesIdExecutionHistoryGet({
          id: parseInt(id, 10),
          page: parseInt(options.page, 10),
          pageSize: parseInt(options.pageSize, 10),
          status: options.status,
        });
        json(response);
      } catch (err) {
        error("Failed to get execution history", err);
      }
    });

  strategies
    .command("optimize")
    .description("Optimize strategy parameters using ML")
    .argument("<id>", "Strategy ID")
    .requiredOption("-c, --config <json>", "Optimization config as JSON string")
    .action(async (id, options) => {
      requireAuth();
      try {
        const config = createConfig();
        const api = new StrategiesApi(config);

        let optimizeConfig: AdjustRulesRequest;
        try {
          optimizeConfig = JSON.parse(options.config);
        } catch {
          error("Invalid JSON in --config parameter");
        }

        const response = await api.strategiesIdAdjustRulesPost({
          id: parseInt(id, 10),
          request: optimizeConfig!,
        });
        success(response);
      } catch (err) {
        error("Failed to optimize strategy", err);
      }
    });
}
