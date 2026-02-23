
# Alert


## Properties

Name | Type
------------ | -------------
`brokerAction` | [BrokerAction](BrokerAction.md)
`brokerageId` | number
`conditionSummary` | string
`createdAt` | string
`data` | { [key: string]: any; }
`description` | string
`expiresAt` | string
`id` | number
`name` | string
`status` | boolean
`strategyId` | number
`types` | [Array&lt;NotificationType&gt;](NotificationType.md)
`updatedAt` | string
`userId` | number
`version` | string

## Example

```typescript
import type { Alert } from ''

// TODO: Update the object below with actual values
const example = {
  "brokerAction": null,
  "brokerageId": null,
  "conditionSummary": null,
  "createdAt": null,
  "data": null,
  "description": null,
  "expiresAt": null,
  "id": null,
  "name": null,
  "status": null,
  "strategyId": null,
  "types": null,
  "updatedAt": null,
  "userId": null,
  "version": null,
} satisfies Alert

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Alert
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


