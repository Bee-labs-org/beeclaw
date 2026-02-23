
# AlertContainer


## Properties

Name | Type
------------ | -------------
`brokerageId` | number
`createdAt` | string
`id` | number
`startedAt` | string
`status` | [BaseResponseAlertcontainerStatus](BaseResponseAlertcontainerStatus.md)
`stoppedAt` | string
`updatedAt` | string
`workloadId` | number

## Example

```typescript
import type { AlertContainer } from ''

// TODO: Update the object below with actual values
const example = {
  "brokerageId": null,
  "createdAt": null,
  "id": null,
  "startedAt": null,
  "status": null,
  "stoppedAt": null,
  "updatedAt": null,
  "workloadId": null,
} satisfies AlertContainer

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AlertContainer
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


