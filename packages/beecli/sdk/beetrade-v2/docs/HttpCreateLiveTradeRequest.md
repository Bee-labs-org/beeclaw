
# HttpCreateLiveTradeRequest


## Properties

Name | Type
------------ | -------------
`isPaperTrading` | boolean
`isSave` | boolean
`otp` | string
`strategyId` | number

## Example

```typescript
import type { HttpCreateLiveTradeRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "isPaperTrading": false,
  "isSave": true,
  "otp": 123456,
  "strategyId": 1,
} satisfies HttpCreateLiveTradeRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as HttpCreateLiveTradeRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


