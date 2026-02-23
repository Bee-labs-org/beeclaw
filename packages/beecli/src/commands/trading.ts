import { Command } from "commander";
import { LiveTradeApi } from "../../sdk/beetrade-v2";
import { createConfig, requireAuth } from "../client";
import { json, error } from "../output";

export function registerTradingCommand(program: Command): void {
  const trading = program
    .command("trading")
    .description("Live trading commands");

  trading
    .command("status")
    .description("Get live trade status")
    .argument("<strategy-id>", "Strategy ID")
    .option("--paper", "Paper trading mode")
    .action(async (strategyId, options) => {
      requireAuth();
      try {
        const config = createConfig();
        const api = new LiveTradeApi(config);
        const response = await api.liveTradeTreeStatusStrategyIdGet({
          strategyId: parseInt(strategyId, 10),
          isPaperTrading: options.paper,
        });
        json(response);
      } catch (err) {
        error("Failed to get trading status", err);
      }
    });

  trading
    .command("detail")
    .description("Get live trade details")
    .argument("<strategy-id>", "Strategy ID")
    .option("--paper", "Paper trading mode")
    .action(async (strategyId, options) => {
      requireAuth();
      try {
        const config = createConfig();
        const api = new LiveTradeApi(config);
        const response = await api.liveTradeTreeDetailStrategyIdGet({
          strategyId: parseInt(strategyId, 10),
          isPaperTrading: options.paper,
        });
        json(response);
      } catch (err) {
        error("Failed to get trading details", err);
      }
    });

  trading
    .command("stop")
    .description("Stop a live trade")
    .argument("<strategy-id>", "Strategy ID")
    .option("--paper", "Paper trading mode")
    .action(async (strategyId, options) => {
      requireAuth();
      try {
        const config = createConfig();
        const api = new LiveTradeApi(config);
        await api.liveTradeTreeStrategyIdDelete({
          strategyId: parseInt(strategyId, 10),
          isPaperTrading: options.paper,
        });
        json({ success: true, message: `Trading stopped for strategy ${strategyId}` });
      } catch (err) {
        error("Failed to stop trading", err);
      }
    });
}
