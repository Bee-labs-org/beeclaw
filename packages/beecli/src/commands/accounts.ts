import type { Command } from "commander";
import {
  BrokerageAccountApi,
  type BrokerageAccountRequestExample,
} from "../../sdk/beetrade-v2";
import { createConfig, requireAuth } from "../client";
import { json, error, success } from "../output";

export function registerAccountsCommand(program: Command): void {
  const accounts = program
    .command("accounts")
    .description("Brokerage account management commands");

  accounts
    .command("list")
    .description("List all brokerage accounts")
    .option("-t, --trading-client-id <id>", "Filter by trading client ID")
    .option("-l, --lang <lang>", "Language (en/vi)", "en")
    .action(async (options) => {
      requireAuth();
      try {
        const config = createConfig();
        const api = new BrokerageAccountApi(config);
        const response = await api.brokerageAccountsGet({
          tradingClientId: options.tradingClientId
            ? parseInt(options.tradingClientId, 10)
            : undefined,
          lang: options.lang,
        });
        json(response);
      } catch (err) {
        error("Failed to list brokerage accounts", err);
      }
    });

  accounts
    .command("grouped")
    .description("Get brokerage accounts grouped by trading client")
    .option("-l, --lang <lang>", "Language (en/vi)", "en")
    .action(async (options) => {
      requireAuth();
      try {
        const config = createConfig();
        const api = new BrokerageAccountApi(config);
        const response = await api.brokerageAccountsGroupedGet({
          lang: options.lang,
        });
        json(response);
      } catch (err) {
        error("Failed to get grouped accounts", err);
      }
    });

  accounts
    .command("get")
    .description("Get brokerage account details")
    .argument("<id>", "Account ID")
    .option("-l, --lang <lang>", "Language (en/vi)", "en")
    .action(async (id, options) => {
      requireAuth();
      try {
        const config = createConfig();
        const api = new BrokerageAccountApi(config);
        const response = await api.brokerageAccountsIdGet({
          id: parseInt(id, 10),
          lang: options.lang,
        });
        json(response);
      } catch (err) {
        error("Failed to get brokerage account", err);
      }
    });

  accounts
    .command("create")
    .description("Create a new brokerage account")
    .argument("<brokerage-id>", "Brokerage ID")
    .option("-l, --lang <lang>", "Language (en/vi)", "en")
    .action(async (brokerageId, options) => {
      requireAuth();
      try {
        const config = createConfig();
        const api = new BrokerageAccountApi(config);
        const response = await api.brokerageAccountsBrokerageIdPost({
          brokerageId: parseInt(brokerageId, 10),
          lang: options.lang,
        });
        success(response);
      } catch (err) {
        error("Failed to create brokerage account", err);
      }
    });

  accounts
    .command("update")
    .description("Update brokerage account credentials")
    .argument("<id>", "Account ID")
    .requiredOption("-c, --credentials <json>", "Credentials as JSON string")
    .option("-l, --lang <lang>", "Language (en/vi)", "en")
    .action(async (id, options) => {
      requireAuth();
      try {
        const config = createConfig();
        const api = new BrokerageAccountApi(config);

        let credentials: BrokerageAccountRequestExample;
        try {
          credentials = JSON.parse(options.credentials);
        } catch {
          error("Invalid JSON in --credentials parameter");
        }

        const response = await api.brokerageAccountsIdPut({
          id: parseInt(id, 10),
          credentials: credentials!,
          lang: options.lang,
        });
        success(response);
      } catch (err) {
        error("Failed to update brokerage account", err);
      }
    });

  accounts
    .command("delete")
    .description("Delete a brokerage account")
    .argument("<id>", "Account ID")
    .option("-l, --lang <lang>", "Language (en/vi)", "en")
    .action(async (id, options) => {
      requireAuth();
      try {
        const config = createConfig();
        const api = new BrokerageAccountApi(config);
        await api.brokerageAccountsIdDelete({
          id: parseInt(id, 10),
          lang: options.lang,
        });
        success({ success: true, message: `Account ${id} deleted` });
      } catch (err) {
        error("Failed to delete brokerage account", err);
      }
    });

  accounts
    .command("balance")
    .description("Get account balance")
    .argument("<id>", "Account ID")
    .action(async (id) => {
      requireAuth();
      try {
        const config = createConfig();
        const api = new BrokerageAccountApi(config);
        const response = await api.brokerageAccountsIdBalanceGet({
          id: parseInt(id, 10),
        });
        json(response);
      } catch (err) {
        error("Failed to get account balance", err);
      }
    });
}
