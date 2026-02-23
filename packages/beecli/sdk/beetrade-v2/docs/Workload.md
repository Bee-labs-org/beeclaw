
# Workload


## Properties

Name | Type
------------ | -------------
`createdAt` | string
`data` | { [key: string]: any; }
`id` | number
`status` | [WorkloadStatus](WorkloadStatus.md)
`type` | [WorkloadType](WorkloadType.md)
`updatedAt` | string
`userId` | number
`workloadId` | number

## Example

```typescript
import type { Workload } from ''

// TODO: Update the object below with actual values
const example = {
  "createdAt": null,
  "data": null,
  "id": null,
  "status": null,
  "type": null,
  "updatedAt": null,
  "userId": null,
  "workloadId": null,
} satisfies Workload

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Workload
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


