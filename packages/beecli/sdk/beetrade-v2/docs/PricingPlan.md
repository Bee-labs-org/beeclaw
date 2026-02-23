
# PricingPlan


## Properties

Name | Type
------------ | -------------
`code` | string
`createdAt` | string
`description` | string
`features` | { [key: string]: any; }
`id` | number
`isActive` | boolean
`isDefault` | boolean
`name` | string
`sortOrder` | number
`updatedAt` | string

## Example

```typescript
import type { PricingPlan } from ''

// TODO: Update the object below with actual values
const example = {
  "code": null,
  "createdAt": null,
  "description": null,
  "features": null,
  "id": null,
  "isActive": null,
  "isDefault": null,
  "name": null,
  "sortOrder": null,
  "updatedAt": null,
} satisfies PricingPlan

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PricingPlan
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


