
# StockItemWatchList


## Properties

Name | Type
------------ | -------------
`active` | boolean
`base` | string
`brokerageId` | number
`contractMultiplier` | string
`description` | string
`displaySymbol` | string
`id` | number
`lotSize` | string
`market` | string
`marketTicker` | string
`minimumOrderSize` | string
`minimumPriceVariation` | string
`quote` | string
`quoteCurrency` | string
`securityType` | string
`symbol` | string
`symbolId` | string
`watchListId` | number

## Example

```typescript
import type { StockItemWatchList } from ''

// TODO: Update the object below with actual values
const example = {
  "active": null,
  "base": null,
  "brokerageId": null,
  "contractMultiplier": null,
  "description": null,
  "displaySymbol": null,
  "id": null,
  "lotSize": null,
  "market": null,
  "marketTicker": null,
  "minimumOrderSize": null,
  "minimumPriceVariation": null,
  "quote": null,
  "quoteCurrency": null,
  "securityType": null,
  "symbol": null,
  "symbolId": null,
  "watchListId": null,
} satisfies StockItemWatchList

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as StockItemWatchList
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


