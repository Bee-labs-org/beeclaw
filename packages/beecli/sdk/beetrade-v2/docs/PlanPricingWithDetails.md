
# PlanPricingWithDetails


## Properties

Name | Type
------------ | -------------
`billingPeriod` | [BillingPeriod](BillingPeriod.md)
`billingPeriodId` | number
`createdAt` | string
`currency` | string
`discountPercentage` | number
`id` | number
`isActive` | boolean
`planId` | number
`price` | number
`updatedAt` | string

## Example

```typescript
import type { PlanPricingWithDetails } from ''

// TODO: Update the object below with actual values
const example = {
  "billingPeriod": null,
  "billingPeriodId": null,
  "createdAt": null,
  "currency": null,
  "discountPercentage": null,
  "id": null,
  "isActive": null,
  "planId": null,
  "price": null,
  "updatedAt": null,
} satisfies PlanPricingWithDetails

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PlanPricingWithDetails
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


