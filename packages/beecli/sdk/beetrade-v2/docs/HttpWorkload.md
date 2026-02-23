
# HttpWorkload


## Properties

Name | Type
------------ | -------------
`id` | number
`status` | [HttpWorkloadStatus](HttpWorkloadStatus.md)
`type` | [HttpWorkloadType](HttpWorkloadType.md)

## Example

```typescript
import type { HttpWorkload } from ''

// TODO: Update the object below with actual values
const example = {
  "id": 1,
  "status": null,
  "type": null,
} satisfies HttpWorkload

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as HttpWorkload
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


