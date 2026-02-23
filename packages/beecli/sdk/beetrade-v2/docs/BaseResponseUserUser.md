
# BaseResponseUserUser


## Properties

Name | Type
------------ | -------------
`auth0Id` | string
`avatar` | string
`createdAt` | string
`datePlanEnd` | string
`email` | string
`emailVerified` | boolean
`firstName` | string
`gender` | string
`id` | number
`lastName` | string
`phone` | string
`planId` | number
`provider` | [Provider](Provider.md)
`providerId` | string
`region` | string
`role` | [Role](Role.md)
`status` | [BaseResponseUserStatus](BaseResponseUserStatus.md)
`type` | [BaseResponseUserType](BaseResponseUserType.md)
`updatedAt` | string
`userName` | string

## Example

```typescript
import type { BaseResponseUserUser } from ''

// TODO: Update the object below with actual values
const example = {
  "auth0Id": null,
  "avatar": null,
  "createdAt": null,
  "datePlanEnd": null,
  "email": null,
  "emailVerified": null,
  "firstName": null,
  "gender": null,
  "id": null,
  "lastName": null,
  "phone": null,
  "planId": null,
  "provider": null,
  "providerId": null,
  "region": null,
  "role": null,
  "status": null,
  "type": null,
  "updatedAt": null,
  "userName": null,
} satisfies BaseResponseUserUser

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BaseResponseUserUser
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


