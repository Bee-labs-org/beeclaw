
# WatchList


## Properties

Name | Type
------------ | -------------
`createdAt` | string
`createdById` | number
`description` | string
`id` | number
`isDefault` | boolean
`items` | [Array&lt;StockItemWatchList&gt;](StockItemWatchList.md)
`name` | string
`order` | number
`updatedAt` | string

## Example

```typescript
import type { WatchList } from ''

// TODO: Update the object below with actual values
const example = {
  "createdAt": null,
  "createdById": null,
  "description": null,
  "id": null,
  "isDefault": null,
  "items": null,
  "name": null,
  "order": null,
  "updatedAt": null,
} satisfies WatchList

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WatchList
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


