
# CoreBacktestTransportHttpSyncBacktestResponse


## Properties

Name | Type
------------ | -------------
`algoMaster` | [BaseResponseAlgomasterAlgoMaster](BaseResponseAlgomasterAlgoMaster.md)
`algoResult` | [BaseResponseAlgomasterAlgoResult](BaseResponseAlgomasterAlgoResult.md)
`tradingRunId` | string

## Example

```typescript
import type { CoreBacktestTransportHttpSyncBacktestResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "algoMaster": null,
  "algoResult": null,
  "tradingRunId": null,
} satisfies CoreBacktestTransportHttpSyncBacktestResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CoreBacktestTransportHttpSyncBacktestResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


