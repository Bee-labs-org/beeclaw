
# TradingRunsSummary


## Properties

Name | Type
------------ | -------------
`averagePnL` | number
`botTypesOverview` | { [key: string]: number; }
`completedRuns` | number
`failedRuns` | number
`totalRuns` | number

## Example

```typescript
import type { TradingRunsSummary } from ''

// TODO: Update the object below with actual values
const example = {
  "averagePnL": null,
  "botTypesOverview": null,
  "completedRuns": null,
  "failedRuns": null,
  "totalRuns": null,
} satisfies TradingRunsSummary

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TradingRunsSummary
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


