
# TestTelegramRequest


## Properties

Name | Type
------------ | -------------
`telegramBotToken` | string
`telegramChatId` | string

## Example

```typescript
import type { TestTelegramRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "telegramBotToken": YOUR_BOT_TOKEN,
  "telegramChatId": @your_channel,
} satisfies TestTelegramRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TestTelegramRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


