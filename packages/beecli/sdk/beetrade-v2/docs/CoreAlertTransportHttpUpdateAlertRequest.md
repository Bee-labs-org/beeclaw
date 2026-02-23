
# CoreAlertTransportHttpUpdateAlertRequest


## Properties

Name | Type
------------ | -------------
`brokerAction` | [BrokerAction](BrokerAction.md)
`brokerageId` | number
`conditionSummary` | string
`data` | { [key: string]: any; }
`description` | string
`expiresAt` | string
`name` | string
`strategyId` | number
`types` | [Array&lt;NotificationType&gt;](NotificationType.md)

## Example

```typescript
import type { CoreAlertTransportHttpUpdateAlertRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "brokerAction": null,
  "brokerageId": null,
  "conditionSummary": null,
  "data": null,
  "description": null,
  "expiresAt": null,
  "name": null,
  "strategyId": null,
  "types": null,
} satisfies CoreAlertTransportHttpUpdateAlertRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CoreAlertTransportHttpUpdateAlertRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


