
# StrategySchedule


## Properties

Name | Type
------------ | -------------
`createdAt` | string
`cronExpression` | string
`id` | number
`isActive` | boolean
`lastRunAt` | string
`nextRunAt` | string
`strategyId` | number
`updatedAt` | string
`userId` | number

## Example

```typescript
import type { StrategySchedule } from ''

// TODO: Update the object below with actual values
const example = {
  "createdAt": null,
  "cronExpression": null,
  "id": null,
  "isActive": null,
  "lastRunAt": null,
  "nextRunAt": null,
  "strategyId": null,
  "updatedAt": null,
  "userId": null,
} satisfies StrategySchedule

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as StrategySchedule
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


