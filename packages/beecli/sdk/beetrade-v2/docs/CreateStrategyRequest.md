
# CreateStrategyRequest


## Properties

Name | Type
------------ | -------------
`data` | { [key: string]: any; }
`description` | string
`indicators` | Array&lt;string&gt;
`name` | string

## Example

```typescript
import type { CreateStrategyRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "data": null,
  "description": null,
  "indicators": null,
  "name": null,
} satisfies CreateStrategyRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateStrategyRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


