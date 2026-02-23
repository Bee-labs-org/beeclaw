
# StopTradingRunResponse


## Properties

Name | Type
------------ | -------------
`message` | string
`status` | string
`tradingRunId` | string

## Example

```typescript
import type { StopTradingRunResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "message": BACKTEST run stopped successfully,
  "status": STOPPED,
  "tradingRunId": 550e8400-e29b-41d4-a716-446655440000,
} satisfies StopTradingRunResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as StopTradingRunResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


