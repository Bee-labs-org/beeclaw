
# AdjustRulesRequest


## Properties

Name | Type
------------ | -------------
`confidenceThreshold` | number
`maxIterations` | number
`mode` | [OptimizationMode](OptimizationMode.md)
`optimizationGoal` | string
`parameters` | { [key: string]: any; }

## Example

```typescript
import type { AdjustRulesRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "confidenceThreshold": null,
  "maxIterations": null,
  "mode": null,
  "optimizationGoal": null,
  "parameters": null,
} satisfies AdjustRulesRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdjustRulesRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


