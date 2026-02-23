# HistoryBotAdvancedOrdersApi

All URIs are relative to */api/v2*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**historyBotAdvancedOrdersGet**](HistoryBotAdvancedOrdersApi.md#historybotadvancedordersget) | **GET** /history-bot-advanced-orders | List History Bot Advanced Orders |
| [**historyBotAdvancedOrdersIdGet**](HistoryBotAdvancedOrdersApi.md#historybotadvancedordersidget) | **GET** /history-bot-advanced-orders/{id} | Get History Bot Advanced Order by ID |
| [**historyBotAdvancedOrdersPost**](HistoryBotAdvancedOrdersApi.md#historybotadvancedorderspost) | **POST** /history-bot-advanced-orders | Create History Bot Advanced Order |



## historyBotAdvancedOrdersGet

> BaseResponseArrayHistoryBotAdvancedOrder historyBotAdvancedOrdersGet(id)

List History Bot Advanced Orders

Get all history records for a specific bot advanced order

### Example

```ts
import {
  Configuration,
  HistoryBotAdvancedOrdersApi,
} from '';
import type { HistoryBotAdvancedOrdersGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new HistoryBotAdvancedOrdersApi(config);

  const body = {
    // number | Bot advanced order ID
    id: 56,
  } satisfies HistoryBotAdvancedOrdersGetRequest;

  try {
    const data = await api.historyBotAdvancedOrdersGet(body);
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

[**BaseResponseArrayHistoryBotAdvancedOrder**](BaseResponseArrayHistoryBotAdvancedOrder.md)

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


## historyBotAdvancedOrdersIdGet

> BaseResponseHistoryBotAdvancedOrder historyBotAdvancedOrdersIdGet(id)

Get History Bot Advanced Order by ID

Get history bot advanced order details by ID

### Example

```ts
import {
  Configuration,
  HistoryBotAdvancedOrdersApi,
} from '';
import type { HistoryBotAdvancedOrdersIdGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new HistoryBotAdvancedOrdersApi(config);

  const body = {
    // number | History bot advanced order ID
    id: 56,
  } satisfies HistoryBotAdvancedOrdersIdGetRequest;

  try {
    const data = await api.historyBotAdvancedOrdersIdGet(body);
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
| **id** | `number` | History bot advanced order ID | [Defaults to `undefined`] |

### Return type

[**BaseResponseHistoryBotAdvancedOrder**](BaseResponseHistoryBotAdvancedOrder.md)

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


## historyBotAdvancedOrdersPost

> BaseResponseHistoryBotAdvancedOrder historyBotAdvancedOrdersPost(request)

Create History Bot Advanced Order

Create a new history record for bot advanced order execution

### Example

```ts
import {
  Configuration,
  HistoryBotAdvancedOrdersApi,
} from '';
import type { HistoryBotAdvancedOrdersPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new HistoryBotAdvancedOrdersApi(config);

  const body = {
    // HistoryBotAdvancedOrder | History bot advanced order creation request
    request: ...,
  } satisfies HistoryBotAdvancedOrdersPostRequest;

  try {
    const data = await api.historyBotAdvancedOrdersPost(body);
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
| **request** | [HistoryBotAdvancedOrder](HistoryBotAdvancedOrder.md) | History bot advanced order creation request | |

### Return type

[**BaseResponseHistoryBotAdvancedOrder**](BaseResponseHistoryBotAdvancedOrder.md)

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

