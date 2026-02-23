
# SubmitResearchResponse


## Properties

Name | Type
------------ | -------------
`algoResultId` | number
`backtestStatus` | string
`createdAt` | string
`performanceMetrics` | [BaseResponseResearchPerformanceMetrics](BaseResponseResearchPerformanceMetrics.md)
`runtimeSeconds` | number
`strategyId` | number
`validationDetails` | { [key: string]: any; }

## Example

```typescript
import type { SubmitResearchResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "algoResultId": null,
  "backtestStatus": null,
  "createdAt": null,
  "performanceMetrics": null,
  "runtimeSeconds": null,
  "strategyId": null,
  "validationDetails": null,
} satisfies SubmitResearchResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SubmitResearchResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


