# MetadataApi

All URIs are relative to */api/v2*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**metadataIndicatorsGet**](MetadataApi.md#metadataindicatorsget) | **GET** /metadata/indicators | Get indicators metadata |
| [**metadataSymbolsGet**](MetadataApi.md#metadatasymbolsget) | **GET** /metadata/symbols | Get symbols metadata |



## metadataIndicatorsGet

> PaginatedResponseIndicatorMetadata metadataIndicatorsGet(page, pageSize, search, loadAll)

Get indicators metadata

Get paginated list of indicators with their field schemas

### Example

```ts
import {
  Configuration,
  MetadataApi,
} from '';
import type { MetadataIndicatorsGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new MetadataApi(config);

  const body = {
    // number | Page number (optional)
    page: 56,
    // number | Items per page (optional)
    pageSize: 56,
    // string | Search term for key/label (optional)
    search: search_example,
    // boolean | Return all records without pagination (optional)
    loadAll: true,
  } satisfies MetadataIndicatorsGetRequest;

  try {
    const data = await api.metadataIndicatorsGet(body);
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

[**PaginatedResponseIndicatorMetadata**](PaginatedResponseIndicatorMetadata.md)

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


## metadataSymbolsGet

> PaginatedResponseSymbolMetadata metadataSymbolsGet(brokerageId, page, perPage, name, sortBy, isIncludeBrokerage)

Get symbols metadata

Get paginated list of tradable symbols by brokerage

### Example

```ts
import {
  Configuration,
  MetadataApi,
} from '';
import type { MetadataSymbolsGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new MetadataApi(config);

  const body = {
    // number | Brokerage ID (optional)
    brokerageId: 56,
    // number | Page number (optional)
    page: 56,
    // number | Items per page (1-100) (optional)
    perPage: 56,
    // string | Filter by symbol name (optional)
    name: name_example,
    // string | Sort by field (optional)
    sortBy: sortBy_example,
    // boolean | Include brokerage info (optional)
    isIncludeBrokerage: true,
  } satisfies MetadataSymbolsGetRequest;

  try {
    const data = await api.metadataSymbolsGet(body);
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
| **brokerageId** | `number` | Brokerage ID | [Optional] [Defaults to `undefined`] |
| **page** | `number` | Page number | [Optional] [Defaults to `1`] |
| **perPage** | `number` | Items per page (1-100) | [Optional] [Defaults to `20`] |
| **name** | `string` | Filter by symbol name | [Optional] [Defaults to `undefined`] |
| **sortBy** | `string` | Sort by field | [Optional] [Defaults to `&#39;updated_at&#39;`] |
| **isIncludeBrokerage** | `boolean` | Include brokerage info | [Optional] [Defaults to `false`] |

### Return type

[**PaginatedResponseSymbolMetadata**](PaginatedResponseSymbolMetadata.md)

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
| **500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

