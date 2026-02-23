
# CreateAlertRequest


## Properties

Name | Type
------------ | -------------
`action` | string
`actionParameters` | { [key: string]: any; }
`condition` | [AlertCondition](AlertCondition.md)
`name` | string
`thresholdValue` | number
`type` | [AlertType](AlertType.md)

## Example

```typescript
import type { CreateAlertRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "action": null,
  "actionParameters": null,
  "condition": null,
  "name": null,
  "thresholdValue": null,
  "type": null,
} satisfies CreateAlertRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateAlertRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


