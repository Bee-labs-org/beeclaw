
# CreateCheckoutSessionRequest


## Properties

Name | Type
------------ | -------------
`billingPeriodId` | number
`cancelUrl` | string
`planId` | number
`successUrl` | string

## Example

```typescript
import type { CreateCheckoutSessionRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "billingPeriodId": 2,
  "cancelUrl": https://example.com/cancel,
  "planId": 2,
  "successUrl": https://example.com/success,
} satisfies CreateCheckoutSessionRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateCheckoutSessionRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


