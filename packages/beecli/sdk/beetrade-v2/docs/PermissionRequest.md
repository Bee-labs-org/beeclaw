
# PermissionRequest


## Properties

Name | Type
------------ | -------------
`method` | string
`routePattern` | string

## Example

```typescript
import type { PermissionRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "method": GET,
  "routePattern": /api/v2/brokerages,
} satisfies PermissionRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PermissionRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


