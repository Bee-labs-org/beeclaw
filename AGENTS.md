# AGENTS.md

Coding agent guidelines for the Beeclaw repository.

## Project Overview

Beeclaw is a Bun-based monorepo containing CLI tools and SDKs for the Beetrade trading platform. The main package is `beecli`, which includes an auto-generated TypeScript SDK from OpenAPI specifications.

## Build/Lint/Test Commands

### Installation

```bash
bun install
```

### Running the CLI

```bash
bun run packages/beecli/index.ts
```

### SDK Generation

Generate the TypeScript SDK from OpenAPI spec:

```bash
cd packages/beecli && bun run sdk:v2
```

### Type Checking

```bash
bunx tsc --noEmit --project packages/beecli/tsconfig.json
```

### Testing

No test framework is currently configured. When tests are added, use:

```bash
bun test                           # Run all tests
bun test path/to/test.test.ts      # Run a single test file
bun test --watch                   # Run tests in watch mode
```

### Linting

No linter is currently configured. When adding one, consider Biome or ESLint.

## Project Structure

```
beeclaw/
├── packages/
│   └── beecli/
│       ├── index.ts              # CLI entry point
│       ├── package.json          # Package configuration
│       ├── tsconfig.json         # TypeScript configuration
│       ├── openapitools.json     # OpenAPI generator config
│       └── sdk/
│           └── beetrade-v2/      # Auto-generated SDK (do not edit)
│               ├── apis/         # API client classes
│               ├── models/       # TypeScript interfaces/types
│               ├── runtime.ts    # HTTP runtime utilities
│               └── index.ts      # SDK exports
└── package.json                  # Root workspace config
```

## Code Style Guidelines

### TypeScript Configuration

The project uses strict TypeScript with these key settings:

- Target: ESNext
- Module: Preserve (bundler mode)
- Module resolution: bundler
- `verbatimModuleSyntax`: true - use explicit type imports
- `strict`: true
- `noUncheckedIndexedAccess`: true
- `noFallthroughCasesInSwitch`: true
- `noImplicitOverride`: true

### Imports

```typescript
import { something } from "package";
import type { SomeType } from "./types";
import { concrete, type TypeOnly } from "./mixed";
```

### Naming Conventions

- **Files**: kebab-case (e.g., `trading-client.ts`)
- **Interfaces/Types**: PascalCase (e.g., `TradingClient`, `AlertConfig`)
- **Functions/Variables**: camelCase (e.g., `fetchOrders`, `clientConfig`)
- **Constants**: UPPER_SNAKE_CASE for globals, camelCase for locals
- **Enums**: PascalCase for enum names, UPPER_CASE for values

### Types

- Prefer `interface` for object shapes
- Use `type` for unions, intersections, and mapped types
- Always define return types for exported functions
- Use `type` keyword for explicit type-only imports

```typescript
export interface ClientConfig {
  baseUrl: string;
  apiKey: string;
}

export type Status = "active" | "inactive" | "pending";

export function createClient(config: ClientConfig): ApiClient {
  // ...
}
```

### Error Handling

- Use custom error classes extending `Error`
- Throw descriptive error messages
- Handle async errors with try/catch

```typescript
export class ApiError extends Error {
  constructor(
    public statusCode: number,
    message: string
  ) {
    super(message);
    this.name = "ApiError";
  }
}

async function fetchData<T>(url: string): Promise<T> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new ApiError(response.status, `Request failed: ${response.statusText}`);
    }
    return response.json();
  } catch (error) {
    if (error instanceof ApiError) throw error;
    throw new Error(`Network error: ${error}`);
  }
}
```

### Async Code

- Prefer async/await over raw Promises
- Use top-level await when appropriate (supported in ESM)

```typescript
export async function processOrders(orderIds: string[]): Promise<void> {
  for (const id of orderIds) {
    const order = await fetchOrder(id);
    await processOrder(order);
  }
}
```

### Validation with Zod

The project uses Zod v4 for runtime validation:

```typescript
import { z } from "zod";

const OrderSchema = z.object({
  id: z.string(),
  symbol: z.string(),
  quantity: z.number().positive(),
  side: z.enum(["buy", "sell"]),
});

type Order = z.infer<typeof OrderSchema>;

function validateOrder(data: unknown): Order {
  return OrderSchema.parse(data);
}
```

### CLI with Commander

Use Commander for CLI argument parsing:

```typescript
import { Command } from "commander";

const program = new Command();

program
  .name("beecli")
  .description("Beetrade CLI tool")
  .version("1.0.0");

program
  .command("trade")
  .description("Execute a trade")
  .option("-s, --symbol <symbol>", "Trading symbol")
  .option("-q, --quantity <n>", "Quantity", parseFloat)
  .action(async (options) => {
    console.log(`Trading ${options.quantity} of ${options.symbol}`);
  });

program.parse();
```

## SDK Usage Guidelines

The SDK in `packages/beecli/sdk/beetrade-v2/` is auto-generated. Do not edit these files directly.

### Using the SDK

```typescript
import { Configuration, BotsApi } from "./sdk/beetrade-v2";

const config = new Configuration({
  basePath: "https://api.prod.beetrade.com/api/v2",
  accessToken: "your-token",
});

const botsApi = new BotsApi(config);
const bots = await botsApi.listBots();
```

### Regenerating the SDK

When the API spec changes, regenerate the SDK:

```bash
cd packages/beecli && bun run sdk:v2
```

## Notes

- The SDK files have `/* tslint:disable */` and `/* eslint-disable */` headers - do not lint them
- Use Bun's built-in test runner when adding tests
- Prefer native fetch over external HTTP libraries
- Keep dependencies minimal; Bun provides most built-in utilities
