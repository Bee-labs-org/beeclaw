
# GroupedPlanInfo


## Properties

Name | Type
------------ | -------------
`code` | string
`currency` | string
`description` | string
`discount` | number
`features` | { [key: string]: any; }
`id` | number
`isDefault` | boolean
`name` | string
`price` | number

## Example

```typescript
import type { GroupedPlanInfo } from ''

// TODO: Update the object below with actual values
const example = {
  "code": null,
  "currency": null,
  "description": null,
  "discount": null,
  "features": null,
  "id": null,
  "isDefault": null,
  "name": null,
  "price": null,
} satisfies GroupedPlanInfo

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GroupedPlanInfo
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


