
# JSONSchemaCondition


## Properties

Name | Type
------------ | -------------
`properties` | [{ [key: string]: JSONSchemaProperty; }](JSONSchemaProperty.md)
`required` | Array&lt;string&gt;

## Example

```typescript
import type { JSONSchemaCondition } from ''

// TODO: Update the object below with actual values
const example = {
  "properties": null,
  "required": null,
} satisfies JSONSchemaCondition

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as JSONSchemaCondition
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


