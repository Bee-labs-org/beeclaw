
# SymbolMetadata


## Properties

Name | Type
------------ | -------------
`active` | boolean
`base` | string
`contractMultiplier` | string
`description` | string
`displaySymbol` | string
`expiryDate` | string
`hiveTicker` | string
`id` | string
`lotSize` | string
`market` | string
`marketTicker` | string
`minimumOrderSize` | string
`minimumPriceVariation` | string
`priceMagnifier` | string
`quote` | string
`quoteCurrency` | string
`securityType` | string
`strikeMultiplier` | string
`symbol` | string

## Example

```typescript
import type { SymbolMetadata } from ''

// TODO: Update the object below with actual values
const example = {
  "active": null,
  "base": null,
  "contractMultiplier": null,
  "description": null,
  "displaySymbol": null,
  "expiryDate": null,
  "hiveTicker": null,
  "id": null,
  "lotSize": null,
  "market": null,
  "marketTicker": null,
  "minimumOrderSize": null,
  "minimumPriceVariation": null,
  "priceMagnifier": null,
  "quote": null,
  "quoteCurrency": null,
  "securityType": null,
  "strikeMultiplier": null,
  "symbol": null,
} satisfies SymbolMetadata

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SymbolMetadata
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


