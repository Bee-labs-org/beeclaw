
# UpdateTradingClientRequest


## Properties

Name | Type
------------ | -------------
`dateOfBirth` | Date
`description` | string
`name` | string

## Example

```typescript
import type { UpdateTradingClientRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "dateOfBirth": 1990-01-15T00:00Z,
  "description": Main trading account,
  "name": John Doe,
} satisfies UpdateTradingClientRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateTradingClientRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


