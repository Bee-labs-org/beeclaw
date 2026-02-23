
# PaymentWithDetails


## Properties

Name | Type
------------ | -------------
`amountPaid` | number
`billingReason` | [BillingReason](BillingReason.md)
`createdAt` | string
`currency` | string
`id` | number
`invoiceId` | string
`invoiceNumber` | string
`invoicePdf` | string
`invoiceUrl` | string
`isFirstPayment` | boolean
`isRenewal` | boolean
`last4Digits` | string
`paymentIntentId` | string
`paymentMethodId` | string
`paymentMethodType` | string
`planId` | number
`planName` | string
`planPricingId` | number
`status` | [PaymentStatus](PaymentStatus.md)
`subscriptionId` | string
`updatedAt` | string
`userEmail` | string
`userId` | number

## Example

```typescript
import type { PaymentWithDetails } from ''

// TODO: Update the object below with actual values
const example = {
  "amountPaid": null,
  "billingReason": null,
  "createdAt": null,
  "currency": null,
  "id": null,
  "invoiceId": null,
  "invoiceNumber": null,
  "invoicePdf": null,
  "invoiceUrl": null,
  "isFirstPayment": null,
  "isRenewal": null,
  "last4Digits": null,
  "paymentIntentId": null,
  "paymentMethodId": null,
  "paymentMethodType": null,
  "planId": null,
  "planName": null,
  "planPricingId": null,
  "status": null,
  "subscriptionId": null,
  "updatedAt": null,
  "userEmail": null,
  "userId": null,
} satisfies PaymentWithDetails

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PaymentWithDetails
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


