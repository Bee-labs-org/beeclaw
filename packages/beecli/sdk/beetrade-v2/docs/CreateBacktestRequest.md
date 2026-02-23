
# CreateBacktestRequest


## Properties

Name | Type
------------ | -------------
`brokerageId` | number
`cash` | number
`endDate` | string
`startDate` | string

## Example

```typescript
import type { CreateBacktestRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "brokerageId": 1,
  "cash": 10000.0,
  "endDate": 2023-12-31,
  "startDate": 2023-01-01,
} satisfies CreateBacktestRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateBacktestRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


