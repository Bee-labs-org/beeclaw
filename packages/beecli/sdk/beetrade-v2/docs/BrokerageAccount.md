
# BrokerageAccount


## Properties

Name | Type
------------ | -------------
`brokerage` | [BaseResponseBrokerageaccountBrokerageInfo](BaseResponseBrokerageaccountBrokerageInfo.md)
`brokerageId` | number
`createdAt` | string
`credentials` | [Array&lt;Credential&gt;](Credential.md)
`freeAssets` | number
`id` | number
`label` | string
`providerUserId` | string
`status` | [AccountStatus](AccountStatus.md)
`tags` | Array&lt;string&gt;
`tradingClient` | object
`tradingClientId` | number
`updatedAt` | string
`userId` | number

## Example

```typescript
import type { BrokerageAccount } from ''

// TODO: Update the object below with actual values
const example = {
  "brokerage": null,
  "brokerageId": null,
  "createdAt": null,
  "credentials": null,
  "freeAssets": null,
  "id": null,
  "label": null,
  "providerUserId": null,
  "status": null,
  "tags": null,
  "tradingClient": null,
  "tradingClientId": null,
  "updatedAt": null,
  "userId": null,
} satisfies BrokerageAccount

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BrokerageAccount
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


