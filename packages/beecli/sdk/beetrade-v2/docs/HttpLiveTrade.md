
# HttpLiveTrade


## Properties

Name | Type
------------ | -------------
`brokerageAccountId` | number
`id` | number
`isPaperTrading` | boolean
`order` | [HttpOrder](HttpOrder.md)
`orderId` | number
`strategyId` | number
`type` | [HttpTradeType](HttpTradeType.md)
`userId` | number
`workload` | [HttpWorkload](HttpWorkload.md)
`workloadId` | number

## Example

```typescript
import type { HttpLiveTrade } from ''

// TODO: Update the object below with actual values
const example = {
  "brokerageAccountId": 1,
  "id": 1,
  "isPaperTrading": false,
  "order": null,
  "orderId": 1,
  "strategyId": 1,
  "type": null,
  "userId": 1,
  "workload": null,
  "workloadId": 1,
} satisfies HttpLiveTrade

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as HttpLiveTrade
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


