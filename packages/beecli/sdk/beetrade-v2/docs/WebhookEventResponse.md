
# WebhookEventResponse


## Properties

Name | Type
------------ | -------------
`eventType` | string
`message` | string
`newStatus` | string
`previousStatus` | string
`success` | boolean
`workloadId` | number

## Example

```typescript
import type { WebhookEventResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "eventType": POD_STATE_CHANGED,
  "message": Event processed successfully,
  "newStatus": RUNNING,
  "previousStatus": INIT,
  "success": true,
  "workloadId": 123,
} satisfies WebhookEventResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WebhookEventResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


