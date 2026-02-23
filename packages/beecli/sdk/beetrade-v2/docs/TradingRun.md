
# TradingRun


## Properties

Name | Type
------------ | -------------
`algoResultId` | number
`botId` | number
`brokerageAccountId` | number
`brokerageId` | number
`configSnapshot` | { [key: string]: any; }
`createdAt` | string
`currency` | string
`description` | string
`endDate` | string
`equity` | number
`errorMessage` | string
`holdings` | number
`id` | string
`metrics` | { [key: string]: any; }
`name` | string
`_return` | number
`runType` | [RunType](RunType.md)
`sourceType` | [SourceType](SourceType.md)
`startDate` | string
`startedAt` | string
`status` | [RunStatus](RunStatus.md)
`stoppedAt` | string
`strategyId` | number
`totalPnL` | number
`updatedAt` | string
`userId` | number
`workloadId` | number

## Example

```typescript
import type { TradingRun } from ''

// TODO: Update the object below with actual values
const example = {
  "algoResultId": 111,
  "botId": 456,
  "brokerageAccountId": 10,
  "brokerageId": 1,
  "configSnapshot": null,
  "createdAt": 2024-01-01T00:00:00Z,
  "currency": USD,
  "description": Test strategy on BTCUSDT,
  "endDate": 2024-01-31T23:59:59Z,
  "equity": 201.52,
  "errorMessage": ,
  "holdings": 31.73,
  "id": 550e8400-e29b-41d4-a716-446655440000,
  "metrics": null,
  "name": BTC Backtest Strategy,
  "_return": 12.5,
  "runType": null,
  "sourceType": null,
  "startDate": 2024-01-01T00:00:00Z,
  "startedAt": 2024-01-01T00:00:00Z,
  "status": null,
  "stoppedAt": 2024-01-02T12:30:00Z,
  "strategyId": 123,
  "totalPnL": 1250.5,
  "updatedAt": 2024-01-02T12:30:00Z,
  "userId": 1,
  "workloadId": 789,
} satisfies TradingRun

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TradingRun
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


