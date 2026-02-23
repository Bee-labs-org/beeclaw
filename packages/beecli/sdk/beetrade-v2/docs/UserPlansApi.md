# UserPlansApi

All URIs are relative to */api/v2*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**myPlanGet**](UserPlansApi.md#myplanget) | **GET** /my-plan | Get my current plan |



## myPlanGet

> BaseResponseUserPlanWithDetails myPlanGet(lang)

Get my current plan

Get the current user\&#39;s plan details (including free plan)

### Example

```ts
import {
  Configuration,
  UserPlansApi,
} from '';
import type { MyPlanGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new UserPlansApi(config);

  const body = {
    // 'en' | 'vi' | Language code (en, vi) (optional)
    lang: lang_example,
  } satisfies MyPlanGetRequest;

  try {
    const data = await api.myPlanGet(body);
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
| **lang** | `en`, `vi` | Language code (en, vi) | [Optional] [Defaults to `&#39;en&#39;`] [Enum: en, vi] |

### Return type

[**BaseResponseUserPlanWithDetails**](BaseResponseUserPlanWithDetails.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

