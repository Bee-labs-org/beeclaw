
# APIKey


## Properties

Name | Type
------------ | -------------
`createdAt` | string
`createdBy` | number
`expiresAt` | string
`id` | number
`isActive` | boolean
`lastUsedAt` | string
`name` | string
`permissions` | [Array&lt;Permission&gt;](Permission.md)
`serviceName` | string
`updatedAt` | string

## Example

```typescript
import type { APIKey } from ''

// TODO: Update the object below with actual values
const example = {
  "createdAt": null,
  "createdBy": null,
  "expiresAt": null,
  "id": null,
  "isActive": null,
  "lastUsedAt": null,
  "name": null,
  "permissions": null,
  "serviceName": null,
  "updatedAt": null,
} satisfies APIKey

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as APIKey
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


