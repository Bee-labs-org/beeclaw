
# ListAlertContainersResponse


## Properties

Name | Type
------------ | -------------
`containers` | [Array&lt;AlertContainer&gt;](AlertContainer.md)
`limit` | number
`page` | number
`total` | number

## Example

```typescript
import type { ListAlertContainersResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "containers": null,
  "limit": null,
  "page": null,
  "total": null,
} satisfies ListAlertContainersResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ListAlertContainersResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


