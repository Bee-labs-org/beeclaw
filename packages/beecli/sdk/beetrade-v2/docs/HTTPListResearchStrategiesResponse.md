
# HTTPListResearchStrategiesResponse


## Properties

Name | Type
------------ | -------------
`pagination` | [HTTPPaginationResponse](HTTPPaginationResponse.md)
`strategies` | [Array&lt;ResearchStrategy&gt;](ResearchStrategy.md)

## Example

```typescript
import type { HTTPListResearchStrategiesResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "pagination": null,
  "strategies": null,
} satisfies HTTPListResearchStrategiesResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as HTTPListResearchStrategiesResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


