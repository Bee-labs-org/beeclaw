# IndicatorFieldsApi

All URIs are relative to */api/v2*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**indicatorFieldsGet**](IndicatorFieldsApi.md#indicatorfieldsget) | **GET** /indicator-fields | List indicator fields |



## indicatorFieldsGet

> PaginatedResponseIndicatorField indicatorFieldsGet(page, pageSize, search, loadAll)

List indicator fields

Get paginated list of indicator fields filtered by user\&#39;s plan

### Example

```ts
import {
  Configuration,
  IndicatorFieldsApi,
} from '';
import type { IndicatorFieldsGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new IndicatorFieldsApi(config);

  const body = {
    // number | Page number (optional)
    page: 56,
    // number | Items per page (optional)
    pageSize: 56,
    // string | Search term for key/label (optional)
    search: search_example,
    // boolean | Return all records without pagination (optional)
    loadAll: true,
  } satisfies IndicatorFieldsGetRequest;

  try {
    const data = await api.indicatorFieldsGet(body);
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

[**PaginatedResponseIndicatorField**](PaginatedResponseIndicatorField.md)

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
| **401** | Unauthorized |  -  |
| **500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

