
# BrokerageAccountRequestExample


## Properties

Name | Type
------------ | -------------
`accountId` | string
`apiKey` | string
`apiPassPhase` | string
`apiSecretKey` | string
`providerUserId` | string
`tags` | Array&lt;string&gt;
`tradingClientId` | string

## Example

```typescript
import type { BrokerageAccountRequestExample } from ''

// TODO: Update the object below with actual values
const example = {
  "accountId": 123456,
  "apiKey": abc123456789,
  "apiPassPhase": passphrase123,
  "apiSecretKey": secret123456,
  "providerUserId": 123456,
  "tags": [trading, binance, active],
  "tradingClientId": 1,
} satisfies BrokerageAccountRequestExample

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BrokerageAccountRequestExample
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


