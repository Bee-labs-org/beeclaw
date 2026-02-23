
# JSONSchemaProperty


## Properties

Name | Type
------------ | -------------
`_default` | object
`description` | string
`_enum` | Array&lt;string&gt;
`format` | string
`items` | [JSONSchemaProperty](JSONSchemaProperty.md)
`maxItems` | number
`maxLength` | number
`maximum` | number
`minItems` | number
`minLength` | number
`minimum` | number
`pattern` | string
`properties` | [{ [key: string]: JSONSchemaProperty; }](JSONSchemaProperty.md)
`title` | string
`type` | string

## Example

```typescript
import type { JSONSchemaProperty } from ''

// TODO: Update the object below with actual values
const example = {
  "_default": null,
  "description": null,
  "_enum": null,
  "format": null,
  "items": null,
  "maxItems": null,
  "maxLength": null,
  "maximum": null,
  "minItems": null,
  "minLength": null,
  "minimum": null,
  "pattern": null,
  "properties": null,
  "title": null,
  "type": null,
} satisfies JSONSchemaProperty

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as JSONSchemaProperty
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


