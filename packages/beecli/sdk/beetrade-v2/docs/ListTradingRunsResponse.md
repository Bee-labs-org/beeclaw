
# ListTradingRunsResponse


## Properties

Name | Type
------------ | -------------
`data` | [Array&lt;TradingRun&gt;](TradingRun.md)
`pagination` | [PaginationInfo](PaginationInfo.md)
`summary` | [TradingRunsSummary](TradingRunsSummary.md)

## Example

```typescript
import type { ListTradingRunsResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "data": null,
  "pagination": null,
  "summary": null,
} satisfies ListTradingRunsResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ListTradingRunsResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


