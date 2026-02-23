
# Notification


## Properties

Name | Type
------------ | -------------
`alertId` | number
`createdAt` | string
`id` | number
`isRead` | boolean
`message` | string
`title` | string
`type` | [BaseResponseNotificationType](BaseResponseNotificationType.md)
`updatedAt` | string
`userId` | number

## Example

```typescript
import type { Notification } from ''

// TODO: Update the object below with actual values
const example = {
  "alertId": null,
  "createdAt": null,
  "id": null,
  "isRead": null,
  "message": null,
  "title": null,
  "type": null,
  "updatedAt": null,
  "userId": null,
} satisfies Notification

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Notification
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


