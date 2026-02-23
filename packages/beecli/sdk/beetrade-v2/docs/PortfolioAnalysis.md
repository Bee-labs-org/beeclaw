
# PortfolioAnalysis


## Properties

Name | Type
------------ | -------------
`currency` | string
`id` | number
`list` | [Array&lt;AssetDistribution&gt;](AssetDistribution.md)
`numberStock` | number
`percentageProfitLossRecentMonth` | number
`percentageProfitLossStartDay` | number
`profitLossRecentMonth` | number
`profitLossStartDay` | number
`provider` | string
`totalAssets` | number
`totalPayable` | number

## Example

```typescript
import type { PortfolioAnalysis } from ''

// TODO: Update the object below with actual values
const example = {
  "currency": null,
  "id": null,
  "list": null,
  "numberStock": null,
  "percentageProfitLossRecentMonth": null,
  "percentageProfitLossStartDay": null,
  "profitLossRecentMonth": null,
  "profitLossStartDay": null,
  "provider": null,
  "totalAssets": null,
  "totalPayable": null,
} satisfies PortfolioAnalysis

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PortfolioAnalysis
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


