
# HistoryBotAdvancedOrder


## Properties

Name | Type
------------ | -------------
`botAdvancedOrderId` | number
`createdAt` | string
`id` | number
`message` | string
`mode` | [BotAdvancedOrderMode](BotAdvancedOrderMode.md)
`orderId` | number
`params` | { [key: string]: any; }
`percentPnl` | number
`status` | [BotAdvancedOrderStatus](BotAdvancedOrderStatus.md)
`totalPnl` | number
`updatedAt` | string
`workloadId` | number

## Example

```typescript
import type { HistoryBotAdvancedOrder } from ''

// TODO: Update the object below with actual values
const example = {
  "botAdvancedOrderId": null,
  "createdAt": null,
  "id": null,
  "message": null,
  "mode": null,
  "orderId": null,
  "params": null,
  "percentPnl": null,
  "status": null,
  "totalPnl": null,
  "updatedAt": null,
  "workloadId": null,
} satisfies HistoryBotAdvancedOrder

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as HistoryBotAdvancedOrder
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


