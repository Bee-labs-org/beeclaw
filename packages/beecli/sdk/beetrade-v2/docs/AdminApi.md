# AdminApi

All URIs are relative to */api/v2*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**adminUsersUserIdPlanPost**](AdminApi.md#adminusersuseridplanpost) | **POST** /admin/users/{user_id}/plan | Admin assign plan to user |



## adminUsersUserIdPlanPost

> BaseResponseUserPlanWithDetails adminUsersUserIdPlanPost(userId, request)

Admin assign plan to user

Assign a pricing plan to a specific user (admin only)

### Example

```ts
import {
  Configuration,
  AdminApi,
} from '';
import type { AdminUsersUserIdPlanPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new AdminApi(config);

  const body = {
    // number | User ID
    userId: 56,
    // AdminAssignPlanRequest | Plan assignment data
    request: ...,
  } satisfies AdminUsersUserIdPlanPostRequest;

  try {
    const data = await api.adminUsersUserIdPlanPost(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **userId** | `number` | User ID | [Defaults to `undefined`] |
| **request** | [AdminAssignPlanRequest](AdminAssignPlanRequest.md) | Plan assignment data | |

### Return type

[**BaseResponseUserPlanWithDetails**](BaseResponseUserPlanWithDetails.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

