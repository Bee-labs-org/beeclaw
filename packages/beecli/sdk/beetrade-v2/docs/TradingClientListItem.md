
# TradingClientListItem


## Properties

Name | Type
------------ | -------------
`dateOfBirth` | string
`description` | string
`id` | number
`isDefault` | boolean
`name` | string

## Example

```typescript
import type { TradingClientListItem } from ''

// TODO: Update the object below with actual values
const example = {
  "dateOfBirth": null,
  "description": Main trading account,
  "id": null,
  "isDefault": null,
  "name": null,
} satisfies TradingClientListItem

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TradingClientListItem
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


