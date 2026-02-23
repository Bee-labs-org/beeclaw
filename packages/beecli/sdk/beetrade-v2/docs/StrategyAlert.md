
# StrategyAlert


## Properties

Name | Type
------------ | -------------
`action` | string
`actionParameters` | { [key: string]: any; }
`condition` | [AlertCondition](AlertCondition.md)
`createdAt` | string
`id` | number
`lastTriggeredAt` | string
`name` | string
`status` | [AlertStatus](AlertStatus.md)
`strategyId` | number
`thresholdValue` | number
`triggerCount` | number
`type` | [AlertType](AlertType.md)
`updatedAt` | string
`userId` | number

## Example

```typescript
import type { StrategyAlert } from ''

// TODO: Update the object below with actual values
const example = {
  "action": null,
  "actionParameters": null,
  "condition": null,
  "createdAt": null,
  "id": null,
  "lastTriggeredAt": null,
  "name": null,
  "status": null,
  "strategyId": null,
  "thresholdValue": null,
  "triggerCount": null,
  "type": null,
  "updatedAt": null,
  "userId": null,
} satisfies StrategyAlert

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as StrategyAlert
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


