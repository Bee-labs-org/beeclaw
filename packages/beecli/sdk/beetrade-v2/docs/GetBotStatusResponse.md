
# GetBotStatusResponse


## Properties

Name | Type
------------ | -------------
`botId` | number
`isRunning` | boolean
`message` | string
`status` | [RunStatus](RunStatus.md)
`tradingRun` | [TradingRun](TradingRun.md)
`updatedAt` | string
`userId` | number

## Example

```typescript
import type { GetBotStatusResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "botId": null,
  "isRunning": null,
  "message": null,
  "status": null,
  "tradingRun": null,
  "updatedAt": null,
  "userId": null,
} satisfies GetBotStatusResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetBotStatusResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


