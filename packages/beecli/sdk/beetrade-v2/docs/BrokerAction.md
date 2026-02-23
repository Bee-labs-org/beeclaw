
# BrokerAction


## Properties

Name | Type
------------ | -------------
`orderType` | string
`price` | number
`quantity` | number
`side` | string
`symbol` | string
`type` | [BrokerActionType](BrokerActionType.md)
`userTradingKeyId` | number

## Example

```typescript
import type { BrokerAction } from ''

// TODO: Update the object below with actual values
const example = {
  "orderType": null,
  "price": null,
  "quantity": null,
  "side": null,
  "symbol": null,
  "type": null,
  "userTradingKeyId": null,
} satisfies BrokerAction

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BrokerAction
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


