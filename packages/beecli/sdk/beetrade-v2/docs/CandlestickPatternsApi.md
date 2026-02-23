# CandlestickPatternsApi

All URIs are relative to */api/v2*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**candlestickPatternsGet**](CandlestickPatternsApi.md#candlestickpatternsget) | **GET** /candlestick-patterns | List candlestick patterns |



## candlestickPatternsGet

> PaginatedResponseCandlestickPattern candlestickPatternsGet(page, pageSize, search, loadAll)

List candlestick patterns

Get paginated list of candlestick patterns with optional search

### Example

```ts
import {
  Configuration,
  CandlestickPatternsApi,
} from '';
import type { CandlestickPatternsGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new CandlestickPatternsApi();

  const body = {
    // number | Page number (optional)
    page: 56,
    // number | Items per page (optional)
    pageSize: 56,
    // string | Search term for key/label (optional)
    search: search_example,
    // boolean | Return all records without pagination (optional)
    loadAll: true,
  } satisfies CandlestickPatternsGetRequest;

  try {
    const data = await api.candlestickPatternsGet(body);
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
| **page** | `number` | Page number | [Optional] [Defaults to `1`] |
| **pageSize** | `number` | Items per page | [Optional] [Defaults to `20`] |
| **search** | `string` | Search term for key/label | [Optional] [Defaults to `undefined`] |
| **loadAll** | `boolean` | Return all records without pagination | [Optional] [Defaults to `undefined`] |

### Return type

[**PaginatedResponseCandlestickPattern**](PaginatedResponseCandlestickPattern.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad Request |  -  |
| **500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

