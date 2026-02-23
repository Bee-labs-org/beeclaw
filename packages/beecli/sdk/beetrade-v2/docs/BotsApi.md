# BotsApi

All URIs are relative to */api/v2*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**botsGet**](BotsApi.md#botsget) | **GET** /bots | List bots |
| [**botsIdBacktestPost**](BotsApi.md#botsidbacktestpost) | **POST** /bots/{id}/backtest | Start bot backtest |
| [**botsIdDelete**](BotsApi.md#botsiddelete) | **DELETE** /bots/{id} | Delete bot |
| [**botsIdGet**](BotsApi.md#botsidget) | **GET** /bots/{id} | Get bot details |
| [**botsIdLivePost**](BotsApi.md#botsidlivepost) | **POST** /bots/{id}/live | Start bot live trading |
| [**botsIdPaperPost**](BotsApi.md#botsidpaperpost) | **POST** /bots/{id}/paper | Start bot paper trading |
| [**botsIdPut**](BotsApi.md#botsidput) | **PUT** /bots/{id} | Update bot |
| [**botsIdStatusGet**](BotsApi.md#botsidstatusget) | **GET** /bots/{id}/status | Get bot status |
| [**botsPost**](BotsApi.md#botspost) | **POST** /bots | Create a new bot |
| [**botsTestTelegramPost**](BotsApi.md#botstesttelegrampost) | **POST** /bots/test-telegram | Test Telegram connection |
| [**botsTypesGet**](BotsApi.md#botstypesget) | **GET** /bots/types | Get all bot types |
| [**botsTypesIdConfigFieldsGet**](BotsApi.md#botstypesidconfigfieldsget) | **GET** /bots/types/{id}/config-fields | Get bot configuration fields |



## botsGet

> PaginatedResponseBot botsGet(page, pageSize, status, botTypeId)

List bots

Get a paginated list of bots for the authenticated user

### Example

```ts
import {
  Configuration,
  BotsApi,
} from '';
import type { BotsGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new BotsApi(config);

  const body = {
    // number | Page number (default: 1) (optional)
    page: 56,
    // number | Page size (default: 20) (optional)
    pageSize: 56,
    // 'ACTIVE' | 'INACTIVE' | 'ERROR' | 'PENDING' | Filter by status (optional)
    status: status_example,
    // number | Filter by bot type ID (optional)
    botTypeId: 56,
  } satisfies BotsGetRequest;

  try {
    const data = await api.botsGet(body);
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
| **pageSize** | `number` | Page size (default: 20) | [Optional] [Defaults to `20`] |
| **status** | `ACTIVE`, `INACTIVE`, `ERROR`, `PENDING` | Filter by status | [Optional] [Defaults to `undefined`] [Enum: ACTIVE, INACTIVE, ERROR, PENDING] |
| **botTypeId** | `number` | Filter by bot type ID | [Optional] [Defaults to `undefined`] |

### Return type

[**PaginatedResponseBot**](PaginatedResponseBot.md)

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


## botsIdBacktestPost

> BaseResponseBotRunResponse botsIdBacktestPost(id, request)

Start bot backtest

Start a bot backtest with the specified configuration

### Example

```ts
import {
  Configuration,
  BotsApi,
} from '';
import type { BotsIdBacktestPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new BotsApi(config);

  const body = {
    // number | Bot ID
    id: 56,
    // BotBacktestRequest | Bot backtest request
    request: ...,
  } satisfies BotsIdBacktestPostRequest;

  try {
    const data = await api.botsIdBacktestPost(body);
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
| **id** | `number` | Bot ID | [Defaults to `undefined`] |
| **request** | [BotBacktestRequest](BotBacktestRequest.md) | Bot backtest request | |

### Return type

[**BaseResponseBotRunResponse**](BaseResponseBotRunResponse.md)

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


## botsIdDelete

> botsIdDelete(id)

Delete bot

Delete a bot

### Example

```ts
import {
  Configuration,
  BotsApi,
} from '';
import type { BotsIdDeleteRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new BotsApi(config);

  const body = {
    // number | Bot ID
    id: 56,
  } satisfies BotsIdDeleteRequest;

  try {
    const data = await api.botsIdDelete(body);
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
| **id** | `number` | Bot ID | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content |  -  |
| **400** | Bad Request |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## botsIdGet

> BaseResponseBot botsIdGet(id)

Get bot details

Get detailed information about a specific bot

### Example

```ts
import {
  Configuration,
  BotsApi,
} from '';
import type { BotsIdGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new BotsApi(config);

  const body = {
    // number | Bot ID
    id: 56,
  } satisfies BotsIdGetRequest;

  try {
    const data = await api.botsIdGet(body);
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
| **id** | `number` | Bot ID | [Defaults to `undefined`] |

### Return type

[**BaseResponseBot**](BaseResponseBot.md)

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
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## botsIdLivePost

> BaseResponseBotRunResponse botsIdLivePost(id, request)

Start bot live trading

Start a bot live trading run with the specified configuration

### Example

```ts
import {
  Configuration,
  BotsApi,
} from '';
import type { BotsIdLivePostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new BotsApi(config);

  const body = {
    // number | Bot ID
    id: 56,
    // BotLiveTradingRequest | Bot live trading request
    request: ...,
  } satisfies BotsIdLivePostRequest;

  try {
    const data = await api.botsIdLivePost(body);
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
| **id** | `number` | Bot ID | [Defaults to `undefined`] |
| **request** | [BotLiveTradingRequest](BotLiveTradingRequest.md) | Bot live trading request | |

### Return type

[**BaseResponseBotRunResponse**](BaseResponseBotRunResponse.md)

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


## botsIdPaperPost

> BaseResponseBotRunResponse botsIdPaperPost(id, request)

Start bot paper trading

Start a bot paper trading run with the specified configuration

### Example

```ts
import {
  Configuration,
  BotsApi,
} from '';
import type { BotsIdPaperPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new BotsApi(config);

  const body = {
    // number | Bot ID
    id: 56,
    // BotPaperTradingRequest | Bot paper trading request
    request: ...,
  } satisfies BotsIdPaperPostRequest;

  try {
    const data = await api.botsIdPaperPost(body);
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
| **id** | `number` | Bot ID | [Defaults to `undefined`] |
| **request** | [BotPaperTradingRequest](BotPaperTradingRequest.md) | Bot paper trading request | |

### Return type

[**BaseResponseBotRunResponse**](BaseResponseBotRunResponse.md)

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


## botsIdPut

> BaseResponseBot botsIdPut(id, request)

Update bot

Update bot configuration

### Example

```ts
import {
  Configuration,
  BotsApi,
} from '';
import type { BotsIdPutRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new BotsApi(config);

  const body = {
    // number | Bot ID
    id: 56,
    // UpdateBotRequest | Bot update request
    request: ...,
  } satisfies BotsIdPutRequest;

  try {
    const data = await api.botsIdPut(body);
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
| **id** | `number` | Bot ID | [Defaults to `undefined`] |
| **request** | [UpdateBotRequest](UpdateBotRequest.md) | Bot update request | |

### Return type

[**BaseResponseBot**](BaseResponseBot.md)

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
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## botsIdStatusGet

> BaseResponseGetBotStatusResponse botsIdStatusGet(id)

Get bot status

Get the current runtime status of a bot

### Example

```ts
import {
  Configuration,
  BotsApi,
} from '';
import type { BotsIdStatusGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new BotsApi(config);

  const body = {
    // number | Bot ID
    id: 56,
  } satisfies BotsIdStatusGetRequest;

  try {
    const data = await api.botsIdStatusGet(body);
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
| **id** | `number` | Bot ID | [Defaults to `undefined`] |

### Return type

[**BaseResponseGetBotStatusResponse**](BaseResponseGetBotStatusResponse.md)

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


## botsPost

> BaseResponseBot botsPost(request)

Create a new bot

Create a new bot with the provided configuration

### Example

```ts
import {
  Configuration,
  BotsApi,
} from '';
import type { BotsPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new BotsApi(config);

  const body = {
    // CreateBotRequest | Bot creation request
    request: ...,
  } satisfies BotsPostRequest;

  try {
    const data = await api.botsPost(body);
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
| **request** | [CreateBotRequest](CreateBotRequest.md) | Bot creation request | |

### Return type

[**BaseResponseBot**](BaseResponseBot.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## botsTestTelegramPost

> BaseResponseTestTelegramResponse botsTestTelegramPost(request)

Test Telegram connection

Test connection to Telegram Bot API with provided credentials

### Example

```ts
import {
  Configuration,
  BotsApi,
} from '';
import type { BotsTestTelegramPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new BotsApi(config);

  const body = {
    // TestTelegramRequest | Telegram test request
    request: ...,
  } satisfies BotsTestTelegramPostRequest;

  try {
    const data = await api.botsTestTelegramPost(body);
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
| **request** | [TestTelegramRequest](TestTelegramRequest.md) | Telegram test request | |

### Return type

[**BaseResponseTestTelegramResponse**](BaseResponseTestTelegramResponse.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## botsTypesGet

> BaseResponseArrayBotType botsTypesGet()

Get all bot types

Get all active bot types

### Example

```ts
import {
  Configuration,
  BotsApi,
} from '';
import type { BotsTypesGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new BotsApi();

  try {
    const data = await api.botsTypesGet();
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

[**BaseResponseArrayBotType**](BaseResponseArrayBotType.md)

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


## botsTypesIdConfigFieldsGet

> BaseResponseBotJSONSchemaResponse1 botsTypesIdConfigFieldsGet(id, lang)

Get bot configuration fields

Get configuration fields for a bot type in JSON Schema format

### Example

```ts
import {
  Configuration,
  BotsApi,
} from '';
import type { BotsTypesIdConfigFieldsGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new BotsApi();

  const body = {
    // number | Bot type ID
    id: 56,
    // 'en' | 'vi' | Language code (en, vi) (optional)
    lang: lang_example,
  } satisfies BotsTypesIdConfigFieldsGetRequest;

  try {
    const data = await api.botsTypesIdConfigFieldsGet(body);
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
| **id** | `number` | Bot type ID | [Defaults to `undefined`] |
| **lang** | `en`, `vi` | Language code (en, vi) | [Optional] [Defaults to `&#39;en&#39;`] [Enum: en, vi] |

### Return type

[**BaseResponseBotJSONSchemaResponse1**](BaseResponseBotJSONSchemaResponse1.md)

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

