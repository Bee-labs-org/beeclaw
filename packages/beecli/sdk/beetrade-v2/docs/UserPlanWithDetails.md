
# UserPlanWithDetails


## Properties

Name | Type
------------ | -------------
`createdAt` | string
`endDate` | string
`id` | number
`plan` | [PricingPlan](PricingPlan.md)
`planId` | number
`planPricingId` | number
`pricing` | [PlanPricingWithDetails](PlanPricingWithDetails.md)
`startDate` | string
`status` | [UserPlanStatus](UserPlanStatus.md)
`updatedAt` | string
`userId` | number

## Example

```typescript
import type { UserPlanWithDetails } from ''

// TODO: Update the object below with actual values
const example = {
  "createdAt": null,
  "endDate": null,
  "id": null,
  "plan": null,
  "planId": null,
  "planPricingId": null,
  "pricing": null,
  "startDate": null,
  "status": null,
  "updatedAt": null,
  "userId": null,
} satisfies UserPlanWithDetails

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UserPlanWithDetails
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


