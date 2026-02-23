
# BrokerageAccountGroup


## Properties

Name | Type
------------ | -------------
`accounts` | [Array&lt;BrokerageAccount&gt;](BrokerageAccount.md)
`currency` | string
`key` | string
`total` | number
`tradingClientId` | number
`tradingClientName` | string

## Example

```typescript
import type { BrokerageAccountGroup } from ''

// TODO: Update the object below with actual values
const example = {
  "accounts": null,
  "currency": null,
  "key": null,
  "total": null,
  "tradingClientId": null,
  "tradingClientName": null,
} satisfies BrokerageAccountGroup

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BrokerageAccountGroup
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


