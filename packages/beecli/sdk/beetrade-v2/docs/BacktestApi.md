# BacktestApi

All URIs are relative to */api/v2*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**apiV2BacktestSyncPost**](BacktestApi.md#apiv2backtestsyncpost) | **POST** /api/v2/backtest/sync | Sync Backtest Result |



## apiV2BacktestSyncPost

> BaseResponseSyncBacktestResponse apiV2BacktestSyncPost(request)

Sync Backtest Result

Manually trigger backtest result sync from S3 for a specific trading run

### Example

```ts
import {
  Configuration,
  BacktestApi,
} from '';
import type { ApiV2BacktestSyncPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new BacktestApi(config);

  const body = {
    // CoreBacktestTransportHttpSyncBacktestRequest | Sync backtest request
    request: ...,
  } satisfies ApiV2BacktestSyncPostRequest;

  try {
    const data = await api.apiV2BacktestSyncPost(body);
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
| **request** | [CoreBacktestTransportHttpSyncBacktestRequest](CoreBacktestTransportHttpSyncBacktestRequest.md) | Sync backtest request | |

### Return type

[**BaseResponseSyncBacktestResponse**](BaseResponseSyncBacktestResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Sync result |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

