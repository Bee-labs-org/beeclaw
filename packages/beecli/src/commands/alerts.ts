import type { Command } from "commander";
import {
  AlertsApi,
  type CoreAlertTransportHttpCreateAlertRequest,
  type CoreAlertTransportHttpUpdateAlertRequest,
  type CoreAlertTransportHttpUpdateAlertStatusRequest,
} from "../../sdk/beetrade-v2";
import { createConfig, requireAuth } from "../client";
import { json, error, success } from "../output";

export function registerAlertsCommand(program: Command): void {
  const alerts = program.command("alerts").description("Alert management commands");

  alerts
    .command("list")
    .description("List all alerts")
    .option("-p, --page <number>", "Page number", "1")
    .option("-s, --page-size <number>", "Page size", "20")
    .option("-k, --keyword <keyword>", "Search keyword")
    .option("--status <boolean>", "Filter by status (true/false)")
    .option("-b, --brokerage-id <id>", "Filter by brokerage ID")
    .action(async (options) => {
      requireAuth();
      try {
        const config = createConfig();
        const api = new AlertsApi(config);
        const response = await api.alertsGet({
          page: parseInt(options.page, 10),
          pageSize: parseInt(options.pageSize, 10),
          keyword: options.keyword,
          status: options.status !== undefined ? options.status === "true" : undefined,
          brokerageId: options.brokerageId ? parseInt(options.brokerageId, 10) : undefined,
        });
        json(response);
      } catch (err) {
        error("Failed to list alerts", err);
      }
    });

  alerts
    .command("get")
    .description("Get alert details")
    .argument("<id>", "Alert ID")
    .action(async (id) => {
      requireAuth();
      try {
        const config = createConfig();
        const api = new AlertsApi(config);
        const response = await api.alertsIdGet({ id: parseInt(id, 10) });
        json(response);
      } catch (err) {
        error("Failed to get alert", err);
      }
    });

  alerts
    .command("create")
    .description("Create a new alert")
    .requiredOption("-c, --config <json>", "Alert configuration as JSON string")
    .action(async (options) => {
      requireAuth();
      try {
        const config = createConfig();
        const api = new AlertsApi(config);

        let alertConfig: CoreAlertTransportHttpCreateAlertRequest;
        try {
          alertConfig = JSON.parse(options.config);
        } catch {
          error("Invalid JSON in --config parameter");
        }

        const response = await api.alertsPost({ request: alertConfig! });
        success(response);
      } catch (err) {
        error("Failed to create alert", err);
      }
    });

  alerts
    .command("update")
    .description("Update an alert")
    .argument("<id>", "Alert ID")
    .requiredOption("-c, --config <json>", "Alert configuration as JSON string")
    .action(async (id, options) => {
      requireAuth();
      try {
        const config = createConfig();
        const api = new AlertsApi(config);

        let alertConfig: CoreAlertTransportHttpUpdateAlertRequest;
        try {
          alertConfig = JSON.parse(options.config);
        } catch {
          error("Invalid JSON in --config parameter");
        }

        const response = await api.alertsIdPut({
          id: parseInt(id, 10),
          request: alertConfig!,
        });
        success(response);
      } catch (err) {
        error("Failed to update alert", err);
      }
    });

  alerts
    .command("delete")
    .description("Delete an alert")
    .argument("<id>", "Alert ID")
    .action(async (id) => {
      requireAuth();
      try {
        const config = createConfig();
        const api = new AlertsApi(config);
        await api.alertsIdDelete({ id: parseInt(id, 10) });
        success({ success: true, message: `Alert ${id} deleted` });
      } catch (err) {
        error("Failed to delete alert", err);
      }
    });

  alerts
    .command("toggle")
    .description("Toggle alert status (active/inactive)")
    .argument("<id>", "Alert ID")
    .requiredOption("--active <boolean>", "Set active status (true/false)")
    .action(async (id, options) => {
      requireAuth();
      try {
        const config = createConfig();
        const api = new AlertsApi(config);

        const request: CoreAlertTransportHttpUpdateAlertStatusRequest = {
          status: options.active === "true",
        };

        const response = await api.alertsIdStatusPatch({
          id: parseInt(id, 10),
          request,
        });
        success(response);
      } catch (err) {
        error("Failed to toggle alert status", err);
      }
    });
}
