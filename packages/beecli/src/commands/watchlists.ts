import { Command } from "commander";
import {
  WatchlistsApi,
  type CoreWatchlistTransportHttpCreateWatchListRequest,
} from "../../sdk/beetrade-v2";
import { createConfig, requireAuth } from "../client";
import { json, error, success } from "../output";

export function registerWatchlistsCommand(program: Command): void {
  const watchlists = program
    .command("watchlists")
    .description("Watchlist management commands");

  watchlists
    .command("list")
    .description("List all watchlists")
    .option("-p, --page <number>", "Page number", "1")
    .option("-s, --page-size <number>", "Page size", "20")
    .action(async (options) => {
      requireAuth();
      try {
        const config = createConfig();
        const api = new WatchlistsApi(config);
        const response = await api.watchListsGet({
          page: parseInt(options.page, 10),
          pageSize: parseInt(options.pageSize, 10),
        });
        json(response);
      } catch (err) {
        error("Failed to list watchlists", err);
      }
    });

  watchlists
    .command("get")
    .description("Get watchlist details")
    .argument("<id>", "Watchlist ID")
    .action(async (id) => {
      requireAuth();
      try {
        const config = createConfig();
        const api = new WatchlistsApi(config);
        const response = await api.watchListsIdGet({ id: parseInt(id, 10) });
        json(response);
      } catch (err) {
        error("Failed to get watchlist", err);
      }
    });

  watchlists
    .command("create")
    .description("Create a new watchlist")
    .requiredOption("-n, --name <name>", "Watchlist name")
    .action(async (options) => {
      requireAuth();
      try {
        const config = createConfig();
        const api = new WatchlistsApi(config);

        const request: CoreWatchlistTransportHttpCreateWatchListRequest = {
          name: options.name,
        };

        const response = await api.watchListsPost({ request });
        success(response);
      } catch (err) {
        error("Failed to create watchlist", err);
      }
    });

  watchlists
    .command("delete")
    .description("Delete a watchlist")
    .argument("<id>", "Watchlist ID")
    .action(async (id) => {
      requireAuth();
      try {
        const config = createConfig();
        const api = new WatchlistsApi(config);
        await api.watchListsIdDelete({ id: parseInt(id, 10) });
        success({ success: true, message: `Watchlist ${id} deleted` });
      } catch (err) {
        error("Failed to delete watchlist", err);
      }
    });

  watchlists
    .command("items")
    .description("Get items in a watchlist")
    .argument("<id>", "Watchlist ID")
    .action(async (id) => {
      requireAuth();
      try {
        const config = createConfig();
        const api = new WatchlistsApi(config);
        const response = await api.watchListsIdItemsGet({ id: parseInt(id, 10) });
        json(response);
      } catch (err) {
        error("Failed to get watchlist items", err);
      }
    });
}
