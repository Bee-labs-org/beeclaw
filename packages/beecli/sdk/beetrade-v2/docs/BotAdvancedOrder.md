
# BotAdvancedOrder


## Properties

Name | Type
------------ | -------------
`createdAt` | string
`id` | number
`params` | { [key: string]: any; }
`tradingKeyId` | number
`type` | [BotAdvancedOrderType](BotAdvancedOrderType.md)
`updatedAt` | string
`userId` | number

## Example

```typescript
import type { BotAdvancedOrder } from ''

// TODO: Update the object below with actual values
const example = {
  "createdAt": null,
  "id": null,
  "params": null,
  "tradingKeyId": null,
  "type": null,
  "updatedAt": null,
  "userId": null,
} satisfies BotAdvancedOrder

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BotAdvancedOrder
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


