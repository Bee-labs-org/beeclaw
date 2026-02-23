
# TotalAssets


## Properties

Name | Type
------------ | -------------
`lastUpdated` | string
`list` | [Array&lt;BrokerageAssets&gt;](BrokerageAssets.md)
`percentProfitLoss` | number
`totalAssetsAll` | number
`totalBrokerage` | number

## Example

```typescript
import type { TotalAssets } from ''

// TODO: Update the object below with actual values
const example = {
  "lastUpdated": null,
  "list": null,
  "percentProfitLoss": null,
  "totalAssetsAll": null,
  "totalBrokerage": null,
} satisfies TotalAssets

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TotalAssets
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


