
# GetNotificationsResponse


## Properties

Name | Type
------------ | -------------
`data` | [Array&lt;Notification&gt;](Notification.md)
`pagination` | [BaseResponseNotificationPaginationInfo](BaseResponseNotificationPaginationInfo.md)

## Example

```typescript
import type { GetNotificationsResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "data": null,
  "pagination": null,
} satisfies GetNotificationsResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetNotificationsResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


