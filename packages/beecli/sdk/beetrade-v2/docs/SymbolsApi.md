# SymbolsApi

All URIs are relative to */api/v2*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**symbolsGet**](SymbolsApi.md#symbolsget) | **GET** /symbols | Get symbols by brokerage ID |



## symbolsGet

> PaginatedResponseSymbol symbolsGet(brokerageId, page, perPage, name, sortBy, isIncludeBrokerage, lang)

Get symbols by brokerage ID

Get symbols for a specific brokerage by querying Database 2 (secondary database) with market and security type filters. Returns symbol data from the symbols table. Supports sorting by symbol, display_symbol, market, security_type, volume, quote_volume, or updated_at (default: updated_at DESC). Optionally include brokerage information in each symbol by setting is_include_brokerage&#x3D;true.

### Example

```ts
import {
  Configuration,
  SymbolsApi,
} from '';
import type { SymbolsGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new SymbolsApi();

  const body = {
    // number | Brokerage ID
    brokerageId: 56,
    // number | Page number (optional)
    page: 56,
    // number | Items per page (1-100) (optional)
    perPage: 56,
    // string | Filter by symbol name, ticker symbol, or description (contains) (optional)
    name: name_example,
    // string | Sort by field (symbol, display_symbol, market, security_type, volume, quote_volume, updated_at) (optional)
    sortBy: sortBy_example,
    // boolean | Include brokerage information in each symbol object (optional)
    isIncludeBrokerage: true,
    // 'en' | 'vi' | Language code (en, vi) (optional)
    lang: lang_example,
  } satisfies SymbolsGetRequest;

  try {
    const data = await api.symbolsGet(body);
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
| **brokerageId** | `number` | Brokerage ID | [Defaults to `undefined`] |
| **page** | `number` | Page number | [Optional] [Defaults to `1`] |
| **perPage** | `number` | Items per page (1-100) | [Optional] [Defaults to `20`] |
| **name** | `string` | Filter by symbol name, ticker symbol, or description (contains) | [Optional] [Defaults to `undefined`] |
| **sortBy** | `string` | Sort by field (symbol, display_symbol, market, security_type, volume, quote_volume, updated_at) | [Optional] [Defaults to `&#39;updated_at&#39;`] |
| **isIncludeBrokerage** | `boolean` | Include brokerage information in each symbol object | [Optional] [Defaults to `false`] |
| **lang** | `en`, `vi` | Language code (en, vi) | [Optional] [Defaults to `&#39;en&#39;`] [Enum: en, vi] |

### Return type

[**PaginatedResponseSymbol**](PaginatedResponseSymbol.md)

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
| **404** | Not Found |  -  |
| **502** | Bad Gateway |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

