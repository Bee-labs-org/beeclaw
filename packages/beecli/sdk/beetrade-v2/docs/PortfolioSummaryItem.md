
# PortfolioSummaryItem


## Properties

Name | Type
------------ | -------------
`percent` | number
`priceClose` | number
`quantity` | number
`symbol` | string
`totalByCustomCurrency` | number

## Example

```typescript
import type { PortfolioSummaryItem } from ''

// TODO: Update the object below with actual values
const example = {
  "percent": null,
  "priceClose": null,
  "quantity": null,
  "symbol": null,
  "totalByCustomCurrency": null,
} satisfies PortfolioSummaryItem

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PortfolioSummaryItem
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


