
# HttpOrder


## Properties

Name | Type
------------ | -------------
`brokerageAccountId` | number
`id` | number
`orderDetails` | [Array&lt;HttpOrderDetail&gt;](HttpOrderDetail.md)
`type` | string
`userId` | number

## Example

```typescript
import type { HttpOrder } from ''

// TODO: Update the object below with actual values
const example = {
  "brokerageAccountId": 1,
  "id": 1,
  "orderDetails": null,
  "type": MARKET,
  "userId": 1,
} satisfies HttpOrder

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as HttpOrder
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


