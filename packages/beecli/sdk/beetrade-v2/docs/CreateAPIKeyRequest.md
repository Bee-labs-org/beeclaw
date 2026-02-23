
# CreateAPIKeyRequest


## Properties

Name | Type
------------ | -------------
`expiresAt` | Date
`name` | string
`permissions` | [Array&lt;PermissionRequest&gt;](PermissionRequest.md)
`serviceName` | string

## Example

```typescript
import type { CreateAPIKeyRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "expiresAt": 2025-12-31T23:59:59Z,
  "name": Internal Service Key,
  "permissions": null,
  "serviceName": portfolio-service,
} satisfies CreateAPIKeyRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateAPIKeyRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


