
# BaseResponseTradingRunPerformanceMetrics


## Properties

Name | Type
------------ | -------------
`averageLoss` | number
`averageTradeDuration` | number
`averageWin` | number
`bestTrade` | number
`drawdownCurve` | Array&lt;number&gt;
`equityCurve` | Array&lt;number&gt;
`losingTrades` | number
`maxDrawdown` | number
`profitFactor` | number
`_return` | number
`sharpeRatio` | number
`sortinoRatio` | number
`totalPnL` | number
`totalTrades` | number
`volatility` | number
`winRate` | number
`winningTrades` | number
`worstTrade` | number

## Example

```typescript
import type { BaseResponseTradingRunPerformanceMetrics } from ''

// TODO: Update the object below with actual values
const example = {
  "averageLoss": -45.2,
  "averageTradeDuration": 240.0,
  "averageWin": 89.3,
  "bestTrade": 250.0,
  "drawdownCurve": null,
  "equityCurve": null,
  "losingTrades": 15,
  "maxDrawdown": -5.2,
  "profitFactor": 1.8,
  "_return": 12.5,
  "sharpeRatio": 1.5,
  "sortinoRatio": 2.0,
  "totalPnL": 1250.5,
  "totalTrades": 42,
  "volatility": 0.18,
  "winRate": 0.65,
  "winningTrades": 27,
  "worstTrade": -120.0,
} satisfies BaseResponseTradingRunPerformanceMetrics

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BaseResponseTradingRunPerformanceMetrics
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


