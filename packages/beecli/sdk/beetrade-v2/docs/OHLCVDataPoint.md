
# OHLCVDataPoint


## Properties

Name | Type
------------ | -------------
`close` | number
`high` | number
`low` | number
`open` | number
`timestamp` | number
`volume` | number

## Example

```typescript
import type { OHLCVDataPoint } from ''

// TODO: Update the object below with actual values
const example = {
  "close": null,
  "high": null,
  "low": null,
  "open": null,
  "timestamp": null,
  "volume": null,
} satisfies OHLCVDataPoint

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OHLCVDataPoint
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


