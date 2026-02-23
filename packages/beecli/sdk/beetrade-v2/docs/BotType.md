
# BotType


## Properties

Name | Type
------------ | -------------
`code` | string
`createdAt` | string
`description` | string
`id` | number
`isActive` | boolean
`isStrategy` | boolean
`levels` | [Array&lt;BotLevel&gt;](BotLevel.md)
`name` | string
`updatedAt` | string

## Example

```typescript
import type { BotType } from ''

// TODO: Update the object below with actual values
const example = {
  "code": null,
  "createdAt": null,
  "description": null,
  "id": null,
  "isActive": null,
  "isStrategy": null,
  "levels": null,
  "name": null,
  "updatedAt": null,
} satisfies BotType

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BotType
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


