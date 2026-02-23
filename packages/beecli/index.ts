#!/usr/bin/env node
import { Command } from "commander";
import { registerAuthCommand } from "./src/commands/auth";
import { registerBotsCommand } from "./src/commands/bots";
import { registerMarketCommand } from "./src/commands/market";
import { registerPortfolioCommand } from "./src/commands/portfolio";
import { registerWatchlistsCommand } from "./src/commands/watchlists";
import { registerTradingCommand } from "./src/commands/trading";

const program = new Command();

program
  .name("beecli")
  .description("Beetrade CLI - Trading platform command line interface")
  .version("1.0.0");

registerAuthCommand(program);
registerBotsCommand(program);
registerMarketCommand(program);
registerPortfolioCommand(program);
registerWatchlistsCommand(program);
registerTradingCommand(program);

program.parse();
