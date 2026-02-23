# BrokerageApi

All URIs are relative to */api/v2*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**brokeragesCodeGet**](BrokerageApi.md#brokeragescodeget) | **GET** /brokerages/{code} | Get a brokerage by code |
| [**brokeragesGet**](BrokerageApi.md#brokeragesget) | **GET** /brokerages | Get all brokerages |
| [**brokeragesLiveTradeGet**](BrokerageApi.md#brokerageslivetradeget) | **GET** /brokerages/live-trade | Get brokerages available for live trading based on user\&#39;s plan |



## brokeragesCodeGet

> BaseResponseBrokerage brokeragesCodeGet(code, lang)

Get a brokerage by code

Get a brokerage by code

### Example

```ts
import {
  Configuration,
  BrokerageApi,
} from '';
import type { BrokeragesCodeGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new BrokerageApi();

  const body = {
    // string | Code
    code: code_example,
    // 'en' | 'vi' | Language code (en, vi) (optional)
    lang: lang_example,
  } satisfies BrokeragesCodeGetRequest;

  try {
    const data = await api.brokeragesCodeGet(body);
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
| **code** | `string` | Code | [Defaults to `undefined`] |
| **lang** | `en`, `vi` | Language code (en, vi) | [Optional] [Defaults to `&#39;en&#39;`] [Enum: en, vi] |

### Return type

[**BaseResponseBrokerage**](BaseResponseBrokerage.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## brokeragesGet

> PaginatedResponseBrokerage brokeragesGet(page, pageSize, search, loadAll, lang)

Get all brokerages

Get all brokerages with pagination and search, including market and security type information from joined tables. Returns all market/security type combinations for each brokerage in the market_security_types array. Security types are loaded from the security_types table, providing both code (security_type_code) and display_name (security_type_display_name) fields. Use load_all&#x3D;true or load_all&#x3D;ALL to get all brokerages without pagination.

### Example

```ts
import {
  Configuration,
  BrokerageApi,
} from '';
import type { BrokeragesGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new BrokerageApi();

  const body = {
    // number | Page number (default: 1) (optional)
    page: 56,
    // number | Page size (default: 20, max: 100) (optional)
    pageSize: 56,
    // string | Search term for code or name (optional)
    search: search_example,
    // string | Load all brokerages without pagination (true or ALL) (optional)
    loadAll: loadAll_example,
    // 'en' | 'vi' | Language code (en, vi) (optional)
    lang: lang_example,
  } satisfies BrokeragesGetRequest;

  try {
    const data = await api.brokeragesGet(body);
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
| **page** | `number` | Page number (default: 1) | [Optional] [Defaults to `1`] |
| **pageSize** | `number` | Page size (default: 20, max: 100) | [Optional] [Defaults to `20`] |
| **search** | `string` | Search term for code or name | [Optional] [Defaults to `undefined`] |
| **loadAll** | `string` | Load all brokerages without pagination (true or ALL) | [Optional] [Defaults to `undefined`] |
| **lang** | `en`, `vi` | Language code (en, vi) | [Optional] [Defaults to `&#39;en&#39;`] [Enum: en, vi] |

### Return type

[**PaginatedResponseBrokerage**](PaginatedResponseBrokerage.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## brokeragesLiveTradeGet

> BaseResponseArrayBrokerage brokeragesLiveTradeGet(lang)

Get brokerages available for live trading based on user\&#39;s plan

Get brokerages that the current user can use for live trading based on their pricing plan. Returns filtered list of brokerages based on allowed_exchanges feature in the user\&#39;s plan.

### Example

```ts
import {
  Configuration,
  BrokerageApi,
} from '';
import type { BrokeragesLiveTradeGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new BrokerageApi(config);

  const body = {
    // 'en' | 'vi' | Language code (en, vi) (optional)
    lang: lang_example,
  } satisfies BrokeragesLiveTradeGetRequest;

  try {
    const data = await api.brokeragesLiveTradeGet(body);
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

[**BaseResponseArrayBrokerage**](BaseResponseArrayBrokerage.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **401** | Unauthorized |  -  |
| **500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

