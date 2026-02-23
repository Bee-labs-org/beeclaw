
# UpdateAlertRequest


## Properties

Name | Type
------------ | -------------
`action` | string
`actionParameters` | { [key: string]: any; }
`condition` | [AlertCondition](AlertCondition.md)
`name` | string
`status` | [AlertStatus](AlertStatus.md)
`thresholdValue` | number

## Example

```typescript
import type { UpdateAlertRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "action": null,
  "actionParameters": null,
  "condition": null,
  "name": null,
  "status": null,
  "thresholdValue": null,
} satisfies UpdateAlertRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateAlertRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


