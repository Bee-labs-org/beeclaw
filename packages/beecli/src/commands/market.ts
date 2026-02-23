import { Command } from "commander";
import {
  MarketDataApi,
  MarketDataHistoryGetIntervalEnum,
  SymbolsApi,
} from "../../sdk/beetrade-v2";
import { createConfig, requireAuth } from "../client";
import { json, error } from "../output";

export function registerMarketCommand(program: Command): void {
  const market = program.command("market").description("Market data commands");

  market
    .command("symbols")
    .description("List symbols for a brokerage")
    .requiredOption("-b, --brokerage-id <id>", "Brokerage ID")
    .option("-p, --page <number>", "Page number", "1")
    .option("--per-page <number>", "Items per page", "50")
    .option("-n, --name <name>", "Filter by symbol name")
    .option("--sort-by <field>", "Sort by field")
    .option("--include-brokerage", "Include brokerage info")
    .action(async (options) => {
      try {
        const config = createConfig();
        const api = new SymbolsApi(config);
        const response = await api.symbolsGet({
          brokerageId: parseInt(options.brokerageId, 10),
          page: parseInt(options.page, 10),
          perPage: parseInt(options.perPage, 10),
          name: options.name,
          sortBy: options.sortBy,
          isIncludeBrokerage: options.includeBrokerage,
        });
        json(response);
      } catch (err) {
        error("Failed to list symbols", err);
      }
    });

  market
    .command("history")
    .description("Get OHLCV historical data for a symbol")
    .requiredOption("-s, --symbol <symbol>", "Symbol (e.g., BTCUSDT)")
    .requiredOption("--from <datetime>", "Start time (ISO 8601)")
    .requiredOption("--to <datetime>", "End time (ISO 8601)")
    .requiredOption(
      "-i, --interval <interval>",
      "Interval (1m, 5m, 15m, 1h, 4h, 1d, 1w)"
    )
    .option("-l, --limit <number>", "Limit number of results")
    .action(async (options) => {
      requireAuth();
      try {
        const config = createConfig();
        const api = new MarketDataApi(config);

        const intervalMap: Record<string, MarketDataHistoryGetIntervalEnum> = {
          "1m": MarketDataHistoryGetIntervalEnum._1m,
          "5m": MarketDataHistoryGetIntervalEnum._5m,
          "15m": MarketDataHistoryGetIntervalEnum._15m,
          "1h": MarketDataHistoryGetIntervalEnum._1h,
          "4h": MarketDataHistoryGetIntervalEnum._4h,
          "1d": MarketDataHistoryGetIntervalEnum._1d,
          "1w": MarketDataHistoryGetIntervalEnum._1w,
        };

        const interval = intervalMap[options.interval];
        if (!interval) {
          error(
            `Invalid interval. Must be one of: ${Object.keys(intervalMap).join(", ")}`
          );
        }

        const response = await api.marketDataHistoryGet({
          symbol: options.symbol,
          startTime: options.from,
          endTime: options.to,
          interval: interval!,
          limit: options.limit ? parseInt(options.limit, 10) : undefined,
        });
        json(response);
      } catch (err) {
        error("Failed to get market history", err);
      }
    });
}
