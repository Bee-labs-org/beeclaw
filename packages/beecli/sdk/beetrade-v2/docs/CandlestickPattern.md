
# CandlestickPattern


## Properties

Name | Type
------------ | -------------
`createdAt` | string
`description` | string
`id` | number
`key` | string
`label` | string
`updatedAt` | string

## Example

```typescript
import type { CandlestickPattern } from ''

// TODO: Update the object below with actual values
const example = {
  "createdAt": 2024-01-15T10:30:00Z,
  "description": A candlestick pattern where the opening and closing prices are virtually equal,
  "id": 1,
  "key": doji,
  "label": Doji,
  "updatedAt": 2024-01-15T10:30:00Z,
} satisfies CandlestickPattern

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CandlestickPattern
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


