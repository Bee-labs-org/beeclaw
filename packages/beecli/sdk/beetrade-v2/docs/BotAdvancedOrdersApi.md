# BotAdvancedOrdersApi

All URIs are relative to */api/v2*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**botAdvancedOrdersGet**](BotAdvancedOrdersApi.md#botadvancedordersget) | **GET** /bot-advanced-orders | List Bot Advanced Orders |
| [**botAdvancedOrdersIdGet**](BotAdvancedOrdersApi.md#botadvancedordersidget) | **GET** /bot-advanced-orders/{id} | Get Bot Advanced Order by ID |
| [**botAdvancedOrdersPost**](BotAdvancedOrdersApi.md#botadvancedorderspost) | **POST** /bot-advanced-orders | Create Bot Advanced Order |



## botAdvancedOrdersGet

> BaseResponseArrayBotAdvancedOrder botAdvancedOrdersGet()

List Bot Advanced Orders

Get all bot advanced orders for authenticated user

### Example

```ts
import {
  Configuration,
  BotAdvancedOrdersApi,
} from '';
import type { BotAdvancedOrdersGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new BotAdvancedOrdersApi(config);

  try {
    const data = await api.botAdvancedOrdersGet();
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

[**BaseResponseArrayBotAdvancedOrder**](BaseResponseArrayBotAdvancedOrder.md)

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


## botAdvancedOrdersIdGet

> BaseResponseBotAdvancedOrder botAdvancedOrdersIdGet(id)

Get Bot Advanced Order by ID

Get bot advanced order details by ID

### Example

```ts
import {
  Configuration,
  BotAdvancedOrdersApi,
} from '';
import type { BotAdvancedOrdersIdGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new BotAdvancedOrdersApi(config);

  const body = {
    // number | Bot advanced order ID
    id: 56,
  } satisfies BotAdvancedOrdersIdGetRequest;

  try {
    const data = await api.botAdvancedOrdersIdGet(body);
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
| **id** | `number` | Bot advanced order ID | [Defaults to `undefined`] |

### Return type

[**BaseResponseBotAdvancedOrder**](BaseResponseBotAdvancedOrder.md)

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


## botAdvancedOrdersPost

> BaseResponseBotAdvancedOrder botAdvancedOrdersPost(request)

Create Bot Advanced Order

Create a new bot advanced order configuration

### Example

```ts
import {
  Configuration,
  BotAdvancedOrdersApi,
} from '';
import type { BotAdvancedOrdersPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new BotAdvancedOrdersApi(config);

  const body = {
    // BotAdvancedOrder | Bot advanced order creation request
    request: ...,
  } satisfies BotAdvancedOrdersPostRequest;

  try {
    const data = await api.botAdvancedOrdersPost(body);
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
| **request** | [BotAdvancedOrder](BotAdvancedOrder.md) | Bot advanced order creation request | |

### Return type

[**BaseResponseBotAdvancedOrder**](BaseResponseBotAdvancedOrder.md)

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
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

