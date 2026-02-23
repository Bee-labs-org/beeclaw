
# Bot


## Properties

Name | Type
------------ | -------------
`botType` | [BotType](BotType.md)
`botTypeId` | number
`configData` | { [key: string]: any; }
`createdAt` | string
`id` | number
`name` | string
`status` | [BotStatus](BotStatus.md)
`updatedAt` | string
`userId` | number

## Example

```typescript
import type { Bot } from ''

// TODO: Update the object below with actual values
const example = {
  "botType": null,
  "botTypeId": null,
  "configData": null,
  "createdAt": null,
  "id": null,
  "name": null,
  "status": null,
  "updatedAt": null,
  "userId": null,
} satisfies Bot

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Bot
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


