# RouteApi

All URIs are relative to */api/v2*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**adminRoutesGet**](RouteApi.md#adminroutesget) | **GET** /admin/routes | Get all available routes |



## adminRoutesGet

> BaseResponseArrayRoute adminRoutesGet()

Get all available routes

Get a list of all available API routes that can be used for API key permissions

### Example

```ts
import {
  Configuration,
  RouteApi,
} from '';
import type { AdminRoutesGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new RouteApi(config);

  try {
    const data = await api.adminRoutesGet();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**BaseResponseArrayRoute**](BaseResponseArrayRoute.md)

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

