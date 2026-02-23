import type { Command } from "commander";
import { PortfolioApi } from "../../sdk/beetrade-v2";
import { createConfig, requireAuth } from "../client";
import { json, error } from "../output";

export function registerPortfolioCommand(program: Command): void {
  const portfolio = program
    .command("portfolio")
    .description("Portfolio management commands");

  portfolio
    .command("summary")
    .description("Get portfolio summary")
    .requiredOption("-c, --currency <currency>", "Currency (e.g., USD)")
    .option("-p, --provider <provider>", "Provider filter")
    .option("-t, --trading-client-id <id>", "Trading client ID")
    .action(async (options) => {
      requireAuth();
      try {
        const config = createConfig();
        const api = new PortfolioApi(config);
        const response = await api.portfoliosSummaryGet({
          currency: options.currency,
          provider: options.provider,
          tradingClientId: options.tradingClientId
            ? parseInt(options.tradingClientId, 10)
            : undefined,
        });
        json(response);
      } catch (err) {
        error("Failed to get portfolio summary", err);
      }
    });

  portfolio
    .command("analysis")
    .description("Get portfolio analysis")
    .action(async () => {
      requireAuth();
      try {
        const config = createConfig();
        const api = new PortfolioApi(config);
        const response = await api.portfoliosAnalysisGet();
        json(response);
      } catch (err) {
        error("Failed to get portfolio analysis", err);
      }
    });

  portfolio
    .command("total-assets")
    .description("Get total assets")
    .requiredOption("-c, --currency <currency>", "Currency (e.g., USD)")
    .action(async (options) => {
      requireAuth();
      try {
        const config = createConfig();
        const api = new PortfolioApi(config);
        const response = await api.portfoliosTotalAssetsGet({
          currency: options.currency,
        });
        json(response);
      } catch (err) {
        error("Failed to get total assets", err);
      }
    });

  portfolio
    .command("assets-summary")
    .description("Get assets summary over time")
    .requiredOption("-c, --currency <currency>", "Currency (e.g., USD)")
    .requiredOption("-p, --period <days>", "Period in days")
    .option("--provider <provider>", "Provider filter")
    .option("-t, --trading-client-id <id>", "Trading client ID")
    .action(async (options) => {
      requireAuth();
      try {
        const config = createConfig();
        const api = new PortfolioApi(config);
        const response = await api.portfoliosAssetsSummaryGet({
          currency: options.currency,
          period: parseInt(options.period, 10),
          provider: options.provider,
          tradingClientId: options.tradingClientId
            ? parseInt(options.tradingClientId, 10)
            : undefined,
        });
        json(response);
      } catch (err) {
        error("Failed to get assets summary", err);
      }
    });
}
