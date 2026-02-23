# LiveTradeApi

All URIs are relative to */api/v2*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**liveTradeTreeDetailStrategyIdGet**](LiveTradeApi.md#livetradetreedetailstrategyidget) | **GET** /live-trade/tree/detail/{strategyId} | Get Live Trade Detail |
| [**liveTradeTreeStatusStrategyIdGet**](LiveTradeApi.md#livetradetreestatusstrategyidget) | **GET** /live-trade/tree/status/{strategyId} | Get Live Trade Status |
| [**liveTradeTreeStrategyIdDelete**](LiveTradeApi.md#livetradetreestrategyiddelete) | **DELETE** /live-trade/tree/{strategyId} | Delete Live Trade Session |
| [**liveTradeTreeTradingIdPost**](LiveTradeApi.md#livetradetreetradingidpost) | **POST** /live-trade/tree/{tradingId} | Create Live Trade Session [DEPRECATED] |



## liveTradeTreeDetailStrategyIdGet

> BaseResponseLiveTradeDetailResponse liveTradeTreeDetailStrategyIdGet(strategyId, isPaperTrading)

Get Live Trade Detail

Get detailed information about a live trade session

### Example

```ts
import {
  Configuration,
  LiveTradeApi,
} from '';
import type { LiveTradeTreeDetailStrategyIdGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new LiveTradeApi(config);

  const body = {
    // number | Strategy ID
    strategyId: 789,
    // boolean | Paper trading mode (optional)
    isPaperTrading: true,
  } satisfies LiveTradeTreeDetailStrategyIdGetRequest;

  try {
    const data = await api.liveTradeTreeDetailStrategyIdGet(body);
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
| **strategyId** | `number` | Strategy ID | [Defaults to `undefined`] |
| **isPaperTrading** | `boolean` | Paper trading mode | [Optional] [Defaults to `false`] |

### Return type

[**BaseResponseLiveTradeDetailResponse**](BaseResponseLiveTradeDetailResponse.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## liveTradeTreeStatusStrategyIdGet

> BaseResponseLiveTradeStatusResponse liveTradeTreeStatusStrategyIdGet(strategyId, isPaperTrading)

Get Live Trade Status

Check if a live trade is currently running for a strategy

### Example

```ts
import {
  Configuration,
  LiveTradeApi,
} from '';
import type { LiveTradeTreeStatusStrategyIdGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new LiveTradeApi(config);

  const body = {
    // number | Strategy ID
    strategyId: 789,
    // boolean | Paper trading mode (optional)
    isPaperTrading: true,
  } satisfies LiveTradeTreeStatusStrategyIdGetRequest;

  try {
    const data = await api.liveTradeTreeStatusStrategyIdGet(body);
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
| **strategyId** | `number` | Strategy ID | [Defaults to `undefined`] |
| **isPaperTrading** | `boolean` | Paper trading mode | [Optional] [Defaults to `false`] |

### Return type

[**BaseResponseLiveTradeStatusResponse**](BaseResponseLiveTradeStatusResponse.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## liveTradeTreeStrategyIdDelete

> BaseResponseAny liveTradeTreeStrategyIdDelete(strategyId, isPaperTrading)

Delete Live Trade Session

Stop and delete a running live trade session

### Example

```ts
import {
  Configuration,
  LiveTradeApi,
} from '';
import type { LiveTradeTreeStrategyIdDeleteRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new LiveTradeApi(config);

  const body = {
    // number | Strategy ID
    strategyId: 789,
    // boolean | Paper trading mode (optional)
    isPaperTrading: true,
  } satisfies LiveTradeTreeStrategyIdDeleteRequest;

  try {
    const data = await api.liveTradeTreeStrategyIdDelete(body);
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
| **strategyId** | `number` | Strategy ID | [Defaults to `undefined`] |
| **isPaperTrading** | `boolean` | Paper trading mode | [Optional] [Defaults to `false`] |

### Return type

[**BaseResponseAny**](BaseResponseAny.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## liveTradeTreeTradingIdPost

> BaseResponseLiveTrade liveTradeTreeTradingIdPost(tradingId, request)

Create Live Trade Session [DEPRECATED]

**DEPRECATED**: Use POST /strategies/{id}/live-trading or POST /strategies/{id}/paper-trading instead.

### Example

```ts
import {
  Configuration,
  LiveTradeApi,
} from '';
import type { LiveTradeTreeTradingIdPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new LiveTradeApi(config);

  const body = {
    // number | Trading Account ID
    tradingId: 789,
    // HttpCreateLiveTradeRequest | Live trade creation request
    request: ...,
  } satisfies LiveTradeTreeTradingIdPostRequest;

  try {
    const data = await api.liveTradeTreeTradingIdPost(body);
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
| **tradingId** | `number` | Trading Account ID | [Defaults to `undefined`] |
| **request** | [HttpCreateLiveTradeRequest](HttpCreateLiveTradeRequest.md) | Live trade creation request | |

### Return type

[**BaseResponseLiveTrade**](BaseResponseLiveTrade.md)

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

