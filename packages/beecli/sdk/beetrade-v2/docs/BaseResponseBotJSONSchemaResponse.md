
# BaseResponseBotJSONSchemaResponse


## Properties

Name | Type
------------ | -------------
`$schema` | string
`allOf` | [Array&lt;BaseResponseBotJSONSchemaResponse&gt;](BaseResponseBotJSONSchemaResponse.md)
`_else` | [BaseResponseBotJSONSchemaResponse](BaseResponseBotJSONSchemaResponse.md)
`_if` | [JSONSchemaCondition](JSONSchemaCondition.md)
`properties` | object
`propertyOrder` | Array&lt;string&gt;
`required` | Array&lt;string&gt;
`then` | [BaseResponseBotJSONSchemaResponse](BaseResponseBotJSONSchemaResponse.md)
`type` | string

## Example

```typescript
import type { BaseResponseBotJSONSchemaResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "$schema": null,
  "allOf": null,
  "_else": null,
  "_if": null,
  "properties": null,
  "propertyOrder": null,
  "required": null,
  "then": null,
  "type": null,
} satisfies BaseResponseBotJSONSchemaResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BaseResponseBotJSONSchemaResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


