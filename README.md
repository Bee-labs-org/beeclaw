# Beeclaw

A Bun-based monorepo containing CLI tools and SDKs for the Beetrade trading platform.

## Overview

Beeclaw provides `beecli`, a command-line interface for interacting with the Beetrade trading platform. It includes an auto-generated TypeScript SDK from OpenAPI specifications, giving you programmatic access to all Beetrade v2 API endpoints.

## Features

- **CLI Tool** (`beecli`) - Interact with Beetrade from your terminal
- **Auto-generated SDK** - TypeScript SDK with full type safety
- **AI Agent Skills** - Extend AI agents with Beetrade capabilities
- **Multiple Command Categories**:
  - Authentication & API keys
  - Trading bots management
  - Market data & quotes
  - Portfolio tracking
  - Watchlists
  - Order execution
  - Trading strategies
  - Price alerts
  - Brokerage accounts
  - Client management

## Installation

```bash
# Clone the repository
git clone https://github.com/beelabs/beeclaw.git
cd beeclaw

# Install dependencies
bun install
```

## Usage

### Running the CLI

```bash
# Run directly
bun run packages/beecli/index.ts

# Or build and use the binary
bun run build
node packages/beecli/bin/beecli.js --help
```

### CLI Commands

```bash
beecli auth          # Manage authentication
beecli bots          # Manage trading bots
beecli market        # Get market data and quotes
beecli portfolio     # View portfolio information
beecli watchlists    # Manage watchlists
beecli trading       # Execute trades
beecli strategies    # Manage trading strategies
beecli alerts        # Set up price alerts
beecli brokerages    # Manage connected brokerages
beecli accounts      # Manage brokerage accounts
beecli clients       # Manage API clients
```

Each command has its own subcommands. Use `--help` to explore:

```bash
beecli trading --help
beecli bots --help
```

## Development

### Project Structure

```
beeclaw/
├── packages/
│   └── beecli/
│       ├── index.ts              # CLI entry point
│       ├── package.json          # Package configuration
│       ├── tsconfig.json         # TypeScript configuration
│       ├── openapitools.json     # OpenAPI generator config
│       ├── src/
│       │   └── commands/         # CLI command implementations
│       └── sdk/
│           └── beetrade-v2/      # Auto-generated SDK (do not edit)
│               ├── apis/         # API client classes
│               ├── models/       # TypeScript interfaces/types
│               ├── runtime.ts    # HTTP runtime utilities
│               └── index.ts      # SDK exports
├── skills/
│   └── beetrade/
│       └── SKILL.md              # AI agent skill for Beetrade
├── AGENTS.md                     # Coding guidelines for AI agents
├── SKILL.md                      # Agent skill format specification
└── package.json                  # Root workspace config
```

### Regenerating the SDK

When the Beetrade API spec changes, regenerate the SDK:

```bash
cd packages/beecli && bun run sdk:v2
```

### Type Checking

```bash
bunx tsc --noEmit --project packages/beecli/tsconfig.json
```

### Building

```bash
bun run build
```

### Testing

```bash
bun test                           # Run all tests
bun test path/to/test.test.ts      # Run a single test file
bun test --watch                   # Run tests in watch mode
```

## Using the SDK Programmatically

You can also use the generated SDK directly in your TypeScript projects:

```typescript
import { Configuration, BotsApi } from "@beelabs/beetrade-cli/sdk/beetrade-v2";

const config = new Configuration({
  basePath: "https://api.prod.beetrade.com/api/v2",
  accessToken: "your-api-token",
});

const botsApi = new BotsApi(config);
const bots = await botsApi.listBots();
console.log(bots);
```

## AI Agent Skills

Beeclaw includes an AI agent skill that enables AI assistants (like Claude Code) to interact with the Beetrade platform using natural language.

### Included Skill: Beetrade

Located in `skills/beetrade/SKILL.md`, this skill provides AI agents with the ability to:

- Manage authentication and API keys
- Create, configure, and control trading bots
- Fetch market data and historical prices
- Analyze portfolios and track performance
- Manage watchlists and alerts
- Execute trades and manage orders
- Backtest trading strategies
- Manage brokerage accounts and connections

### Using the Skill

When integrated with an AI agent, the skill automatically triggers on relevant requests:

```
User: "Create a trading bot for Bitcoin with a momentum strategy"
AI: [Activates Beetrade skill, executes beecli commands]

User: "Show me my portfolio performance"
AI: [Activates Beetrade skill, fetches portfolio data]
```

### Skill Format

Skills follow a lightweight, open format documented in [SKILL.md](./SKILL.md). Each skill includes:

- **Metadata** - Name, description, version
- **Triggers** - Keywords and patterns for activation
- **Capabilities** - Available commands and operations
- **Instructions** - Guidelines for AI agents
- **Resources** - Documentation and examples

### Creating Custom Skills

You can create custom skills by adding a new `SKILL.md` file in the `skills/` directory. See [SKILL.md](./SKILL.md) for the complete specification.

## Tech Stack

- **Runtime**: [Bun](https://bun.sh/)
- **Language**: TypeScript (strict mode)
- **CLI Framework**: Commander
- **Validation**: Zod v4
- **SDK Generation**: OpenAPI Generator

## Package

- **Name**: `@beelabs/beetrade-cli`
- **Version**: 0.0.3
- **Binary**: `beecli`

## Contributing

Contributions are welcome! Please see:
- [AGENTS.md](./AGENTS.md) - Coding guidelines and development practices
- [SKILL.md](./SKILL.md) - Agent skill format specification
