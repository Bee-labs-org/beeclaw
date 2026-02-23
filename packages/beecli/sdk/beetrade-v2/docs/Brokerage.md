
# Brokerage


## Properties

Name | Type
------------ | -------------
`baseApiUrl` | string
`code` | string
`createdAt` | string
`id` | number
`logoFullDark` | string
`logoFullLight` | string
`logoShortDark` | string
`logoShortLight` | string
`marketSecurityTypes` | [Array&lt;BrokerageMarketSecurityType&gt;](BrokerageMarketSecurityType.md)
`name` | string
`status` | string
`updatedAt` | string
`upgradeRequired` | boolean

## Example

```typescript
import type { Brokerage } from ''

// TODO: Update the object below with actual values
const example = {
  "baseApiUrl": null,
  "code": null,
  "createdAt": null,
  "id": null,
  "logoFullDark": null,
  "logoFullLight": null,
  "logoShortDark": null,
  "logoShortLight": null,
  "marketSecurityTypes": null,
  "name": null,
  "status": null,
  "updatedAt": null,
  "upgradeRequired": null,
} satisfies Brokerage

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Brokerage
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


