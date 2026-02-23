# TradingClientsApi

All URIs are relative to */api/v2*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**tradingClientsGet**](TradingClientsApi.md#tradingclientsget) | **GET** /trading-clients | Get all trading clients |
| [**tradingClientsIdDelete**](TradingClientsApi.md#tradingclientsiddelete) | **DELETE** /trading-clients/{id} | Delete trading client |
| [**tradingClientsIdPut**](TradingClientsApi.md#tradingclientsidput) | **PUT** /trading-clients/{id} | Update trading client |
| [**tradingClientsPost**](TradingClientsApi.md#tradingclientspost) | **POST** /trading-clients | Create trading client |



## tradingClientsGet

> BaseResponseArrayTradingClientListItem tradingClientsGet(lang)

Get all trading clients

Get all active trading clients for the authenticated user

### Example

```ts
import {
  Configuration,
  TradingClientsApi,
} from '';
import type { TradingClientsGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new TradingClientsApi(config);

  const body = {
    // 'en' | 'vi' | Language code (en, vi) (optional)
    lang: lang_example,
  } satisfies TradingClientsGetRequest;

  try {
    const data = await api.tradingClientsGet(body);
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

[**BaseResponseArrayTradingClientListItem**](BaseResponseArrayTradingClientListItem.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## tradingClientsIdDelete

> BaseResponseTradingClient tradingClientsIdDelete(id, lang)

Delete trading client

Delete a trading client (soft delete by setting status to false)

### Example

```ts
import {
  Configuration,
  TradingClientsApi,
} from '';
import type { TradingClientsIdDeleteRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new TradingClientsApi(config);

  const body = {
    // number | Trading client ID
    id: 56,
    // 'en' | 'vi' | Language code (en, vi) (optional)
    lang: lang_example,
  } satisfies TradingClientsIdDeleteRequest;

  try {
    const data = await api.tradingClientsIdDelete(body);
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
| **id** | `number` | Trading client ID | [Defaults to `undefined`] |
| **lang** | `en`, `vi` | Language code (en, vi) | [Optional] [Defaults to `&#39;en&#39;`] [Enum: en, vi] |

### Return type

[**BaseResponseTradingClient**](BaseResponseTradingClient.md)

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
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## tradingClientsIdPut

> BaseResponseTradingClient tradingClientsIdPut(id, request, lang)

Update trading client

Update an existing trading client

### Example

```ts
import {
  Configuration,
  TradingClientsApi,
} from '';
import type { TradingClientsIdPutRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new TradingClientsApi(config);

  const body = {
    // number | Trading client ID
    id: 56,
    // UpdateTradingClientRequest | Request body
    request: ...,
    // 'en' | 'vi' | Language code (en, vi) (optional)
    lang: lang_example,
  } satisfies TradingClientsIdPutRequest;

  try {
    const data = await api.tradingClientsIdPut(body);
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
| **id** | `number` | Trading client ID | [Defaults to `undefined`] |
| **request** | [UpdateTradingClientRequest](UpdateTradingClientRequest.md) | Request body | |
| **lang** | `en`, `vi` | Language code (en, vi) | [Optional] [Defaults to `&#39;en&#39;`] [Enum: en, vi] |

### Return type

[**BaseResponseTradingClient**](BaseResponseTradingClient.md)

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
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## tradingClientsPost

> BaseResponseTradingClient tradingClientsPost(request, lang)

Create trading client

Create a new trading client for the authenticated user

### Example

```ts
import {
  Configuration,
  TradingClientsApi,
} from '';
import type { TradingClientsPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new TradingClientsApi(config);

  const body = {
    // CreateTradingClientRequest | Request body
    request: ...,
    // 'en' | 'vi' | Language code (en, vi) (optional)
    lang: lang_example,
  } satisfies TradingClientsPostRequest;

  try {
    const data = await api.tradingClientsPost(body);
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
| **request** | [CreateTradingClientRequest](CreateTradingClientRequest.md) | Request body | |
| **lang** | `en`, `vi` | Language code (en, vi) | [Optional] [Defaults to `&#39;en&#39;`] [Enum: en, vi] |

### Return type

[**BaseResponseTradingClient**](BaseResponseTradingClient.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Created |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

