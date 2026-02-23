# Beecli

Command line interface for the Beetrade trading platform.

## Installation

```bash
bun install
```

## Usage

```bash
bun run packages/beecli/index.ts [command]
```

Or create an alias:

```bash
alias beecli="bun run packages/beecli/index.ts"
beecli --help
```

## Configuration

The CLI stores configuration in `~/.beecli/config.json`:

- `apiUrl` - API base URL (default: `https://api.beetrade.com/api/v2`)
- `accessToken` - Authentication token
- `refreshToken` - Token refresh credential
- `email` - Logged in user email

## Commands

### Authentication

```bash
# Login with email and password
beecli auth login -e <email> -p <password>

# Login with custom API URL
beecli auth login -e <email> -p <password> --api-url <url>

# Logout and clear credentials
beecli auth logout

# Show authentication status
beecli auth status
```

### Bots

```bash
# List all bots
beecli bots list [--page 1] [--page-size 20] [--status <status>] [--type-id <id>]

# Get bot details
beecli bots get <id>

# Create a new bot
beecli bots create -t <type-id> -c '<json-config>'

# Update a bot
beecli bots update <id> [-n <name>] [-s <status>] [-c '<json-config>']

# Delete a bot
beecli bots delete <id>

# Get bot runtime status
beecli bots status <id>

# Start paper trading
beecli bots run paper <id> -b <brokerage-id> -c <cash>

# Start live trading
beecli bots run live <id> -a <brokerage-account-id>

# Run backtest
beecli bots backtest <id> -b <brokerage-id> -c <cash> --from <YYYY-MM-DD> --to <YYYY-MM-DD>

# List available bot types
beecli bots types
```

### Market Data

```bash
# List symbols for a brokerage
beecli market symbols -b <brokerage-id> [--page 1] [--per-page 50] [-n <name>]

# Get OHLCV historical data
beecli market history -s <symbol> --from <iso-datetime> --to <iso-datetime> -i <interval>

# Intervals: 1m, 5m, 15m, 1h, 4h, 1d, 1w
beecli market history -s BTCUSDT --from 2024-01-01T00:00:00Z --to 2024-01-31T23:59:59Z -i 1h
```

### Portfolio

```bash
# Get portfolio summary
beecli portfolio summary -c <currency> [-p <provider>] [-t <trading-client-id>]

# Get portfolio analysis
beecli portfolio analysis

# Get total assets
beecli portfolio total-assets -c <currency>

# Get assets summary over time
beecli portfolio assets-summary -c <currency> -p <days> [--provider <provider>]
```

### Watchlists

```bash
# List all watchlists
beecli watchlists list [--page 1] [--page-size 20]

# Get watchlist details
beecli watchlists get <id>

# Create a new watchlist
beecli watchlists create -n <name>

# Delete a watchlist
beecli watchlists delete <id>

# Get items in a watchlist
beecli watchlists items <id>
```

### Trading

```bash
# Get live trade status
beecli trading status <strategy-id> [--paper]

# Get live trade details
beecli trading detail <strategy-id> [--paper]

# Stop a live trade
beecli trading stop <strategy-id> [--paper]
```

## Output Format

All commands output JSON for easy scripting and integration:

```bash
beecli auth status
# {"authenticated": true, "email": "user@example.com", "apiUrl": "https://api.beetrade.com/api/v2"}

beecli bots list
# {"data": [...], "page": 1, "pageSize": 20, "total": 100}
```

## SDK

The CLI uses an auto-generated TypeScript SDK from OpenAPI specifications located in `sdk/beetrade-v2/`. To regenerate the SDK:

```bash
cd packages/beecli && bun run sdk:v2
```

## Development

```bash
# Run CLI
bun run packages/beecli/index.ts --help

# Type check
bunx tsc --noEmit --project packages/beecli/tsconfig.json
```
