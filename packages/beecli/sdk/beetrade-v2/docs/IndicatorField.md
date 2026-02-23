
# IndicatorField


## Properties

Name | Type
------------ | -------------
`createdAt` | string
`fields` | [Array&lt;BaseResponseIndicatorfieldIndicatorConfig&gt;](BaseResponseIndicatorfieldIndicatorConfig.md)
`id` | number
`key` | string
`label` | string
`level` | string
`shortLabel` | string
`updatedAt` | string

## Example

```typescript
import type { IndicatorField } from ''

// TODO: Update the object below with actual values
const example = {
  "createdAt": 2024-01-15T10:30:00Z,
  "fields": null,
  "id": 1,
  "key": sma,
  "label": Simple Moving Average,
  "level": basic,
  "shortLabel": SMA,
  "updatedAt": 2024-01-15T10:30:00Z,
} satisfies IndicatorField

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as IndicatorField
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


