
# WebhookEvent


## Properties

Name | Type
------------ | -------------
`podName` | string
`status` | string
`timestamp` | number
`type` | [WebhookEventType](WebhookEventType.md)
`workloadId` | number

## Example

```typescript
import type { WebhookEvent } from ''

// TODO: Update the object below with actual values
const example = {
  "podName": null,
  "status": null,
  "timestamp": null,
  "type": null,
  "workloadId": null,
} satisfies WebhookEvent

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WebhookEvent
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


