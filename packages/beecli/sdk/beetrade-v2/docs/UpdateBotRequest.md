
# UpdateBotRequest


## Properties

Name | Type
------------ | -------------
`configData` | { [key: string]: any; }
`name` | string
`status` | [BotStatus](BotStatus.md)

## Example

```typescript
import type { UpdateBotRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "configData": null,
  "name": null,
  "status": null,
} satisfies UpdateBotRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateBotRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


