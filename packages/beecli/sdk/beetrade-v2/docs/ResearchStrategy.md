
# ResearchStrategy


## Properties

Name | Type
------------ | -------------
`createdAt` | string
`description` | string
`id` | number
`isPrivate` | boolean
`name` | string
`status` | [ResearchStrategyStatus](ResearchStrategyStatus.md)
`strategyId` | number
`tags` | Array&lt;string&gt;
`treeJson` | string
`updatedAt` | string
`userId` | number

## Example

```typescript
import type { ResearchStrategy } from ''

// TODO: Update the object below with actual values
const example = {
  "createdAt": null,
  "description": null,
  "id": null,
  "isPrivate": null,
  "name": null,
  "status": null,
  "strategyId": null,
  "tags": null,
  "treeJson": null,
  "updatedAt": null,
  "userId": null,
} satisfies ResearchStrategy

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ResearchStrategy
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


