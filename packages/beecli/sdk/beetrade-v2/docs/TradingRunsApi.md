# TradingRunsApi

All URIs are relative to */api/v2*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**tradingRunsGet**](TradingRunsApi.md#tradingrunsget) | **GET** /trading-runs | List trading runs |
| [**tradingRunsIdDelete**](TradingRunsApi.md#tradingrunsiddelete) | **DELETE** /trading-runs/{id} | Delete trading run |
| [**tradingRunsIdGet**](TradingRunsApi.md#tradingrunsidget) | **GET** /trading-runs/{id} | Get trading run by ID |
| [**tradingRunsIdPerformanceGet**](TradingRunsApi.md#tradingrunsidperformanceget) | **GET** /trading-runs/{id}/performance | Get trading run performance metrics |
| [**tradingRunsIdPut**](TradingRunsApi.md#tradingrunsidput) | **PUT** /trading-runs/{id} | Update trading run |
| [**tradingRunsIdStopPost**](TradingRunsApi.md#tradingrunsidstoppost) | **POST** /trading-runs/{id}/stop | Stop trading run |
| [**tradingRunsStopTypesGet**](TradingRunsApi.md#tradingrunsstoptypesget) | **GET** /trading-runs/stop-types | Get Trading Run Stop Types |



## tradingRunsGet

> ListTradingRunsResponse tradingRunsGet(sourceType, strategyId, brokerageAccountId, brokerageId, botTypeId, runType, status, startDate, endDate, page, pageSize, orderBy, orderDirection)

List trading runs

Get paginated list of trading runs for the authenticated user

### Example

```ts
import {
  Configuration,
  TradingRunsApi,
} from '';
import type { TradingRunsGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new TradingRunsApi(config);

  const body = {
    // string | Filter by source type (STRATEGY, BOT) (optional)
    sourceType: sourceType_example,
    // number | Filter by strategy ID (optional)
    strategyId: 56,
    // number | Filter by brokerage account (NULL for BACKTEST/PAPER, required for LIVE) (optional)
    brokerageAccountId: 56,
    // number | Filter by brokerage ID (optional)
    brokerageId: 56,
    // number | Filter by bot type ID (optional)
    botTypeId: 56,
    // 'BACKTEST' | 'LIVE' | 'PAPER' | Filter by run type (optional)
    runType: runType_example,
    // 'PENDING' | 'INIT' | 'RUNNING' | 'STOPPED' | 'COMPLETED' | 'FAILED' | 'CANCELLED' | 'TIMEOUT' | 'PENDING' | 'INIT' | 'RUNNING' | 'STOPPING' | 'COMPLETED' | 'FAILED' | 'CANCELLED' | 'TIMEOUT' | Filter by status (optional)
    status: status_example,
    // string | Filter by start date (optional)
    startDate: startDate_example,
    // string | Filter by end date (optional)
    endDate: endDate_example,
    // number | Page number (default: 1) (optional)
    page: 56,
    // number | Items per page (default: 20) (optional)
    pageSize: 56,
    // 'created_at' | 'started_at' | 'total_pnl' | Sort field (optional)
    orderBy: orderBy_example,
    // 'asc' | 'desc' | Sort direction (optional)
    orderDirection: orderDirection_example,
  } satisfies TradingRunsGetRequest;

  try {
    const data = await api.tradingRunsGet(body);
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
| **sourceType** | `string` | Filter by source type (STRATEGY, BOT) | [Optional] [Defaults to `undefined`] |
| **strategyId** | `number` | Filter by strategy ID | [Optional] [Defaults to `undefined`] |
| **brokerageAccountId** | `number` | Filter by brokerage account (NULL for BACKTEST/PAPER, required for LIVE) | [Optional] [Defaults to `undefined`] |
| **brokerageId** | `number` | Filter by brokerage ID | [Optional] [Defaults to `undefined`] |
| **botTypeId** | `number` | Filter by bot type ID | [Optional] [Defaults to `undefined`] |
| **runType** | `BACKTEST`, `LIVE`, `PAPER` | Filter by run type | [Optional] [Defaults to `undefined`] [Enum: BACKTEST, LIVE, PAPER] |
| **status** | `PENDING`, `INIT`, `RUNNING`, `STOPPED`, `COMPLETED`, `FAILED`, `CANCELLED`, `TIMEOUT`, `PENDING`, `INIT`, `RUNNING`, `STOPPING`, `COMPLETED`, `FAILED`, `CANCELLED`, `TIMEOUT` | Filter by status | [Optional] [Defaults to `undefined`] [Enum: PENDING, INIT, RUNNING, STOPPED, COMPLETED, FAILED, CANCELLED, TIMEOUT, PENDING, INIT, RUNNING, STOPPING, COMPLETED, FAILED, CANCELLED, TIMEOUT] |
| **startDate** | `string` | Filter by start date | [Optional] [Defaults to `undefined`] |
| **endDate** | `string` | Filter by end date | [Optional] [Defaults to `undefined`] |
| **page** | `number` | Page number (default: 1) | [Optional] [Defaults to `1`] |
| **pageSize** | `number` | Items per page (default: 20) | [Optional] [Defaults to `20`] |
| **orderBy** | `created_at`, `started_at`, `total_pnl` | Sort field | [Optional] [Defaults to `undefined`] [Enum: created_at, started_at, total_pnl] |
| **orderDirection** | `asc`, `desc` | Sort direction | [Optional] [Defaults to `&#39;desc&#39;`] [Enum: asc, desc] |

### Return type

[**ListTradingRunsResponse**](ListTradingRunsResponse.md)

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


## tradingRunsIdDelete

> tradingRunsIdDelete(id)

Delete trading run

Delete a specific trading run by UUID

### Example

```ts
import {
  Configuration,
  TradingRunsApi,
} from '';
import type { TradingRunsIdDeleteRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new TradingRunsApi(config);

  const body = {
    // string | Trading Run UUID
    id: id_example,
  } satisfies TradingRunsIdDeleteRequest;

  try {
    const data = await api.tradingRunsIdDelete(body);
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
| **id** | `string` | Trading Run UUID | [Defaults to `undefined`] |

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
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## tradingRunsIdGet

> BaseResponseTradingRun tradingRunsIdGet(id)

Get trading run by ID

Get a specific trading run by UUID for the authenticated user

### Example

```ts
import {
  Configuration,
  TradingRunsApi,
} from '';
import type { TradingRunsIdGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new TradingRunsApi(config);

  const body = {
    // string | Trading Run UUID
    id: id_example,
  } satisfies TradingRunsIdGetRequest;

  try {
    const data = await api.tradingRunsIdGet(body);
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
| **id** | `string` | Trading Run UUID | [Defaults to `undefined`] |

### Return type

[**BaseResponseTradingRun**](BaseResponseTradingRun.md)

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


## tradingRunsIdPerformanceGet

> BaseResponsePerformanceMetrics tradingRunsIdPerformanceGet(id)

Get trading run performance metrics

Get detailed performance metrics for a specific trading run including PnL, Sharpe ratio, drawdown, etc.

### Example

```ts
import {
  Configuration,
  TradingRunsApi,
} from '';
import type { TradingRunsIdPerformanceGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new TradingRunsApi(config);

  const body = {
    // string | Trading Run UUID
    id: id_example,
  } satisfies TradingRunsIdPerformanceGetRequest;

  try {
    const data = await api.tradingRunsIdPerformanceGet(body);
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
| **id** | `string` | Trading Run UUID | [Defaults to `undefined`] |

### Return type

[**BaseResponsePerformanceMetrics**](BaseResponsePerformanceMetrics.md)

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


## tradingRunsIdPut

> BaseResponseTradingRun tradingRunsIdPut(id, request)

Update trading run

Update a specific trading run by UUID

### Example

```ts
import {
  Configuration,
  TradingRunsApi,
} from '';
import type { TradingRunsIdPutRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new TradingRunsApi(config);

  const body = {
    // string | Trading Run UUID
    id: id_example,
    // { [key: string]: any; } | Trading run update request
    request: Object,
  } satisfies TradingRunsIdPutRequest;

  try {
    const data = await api.tradingRunsIdPut(body);
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
| **id** | `string` | Trading Run UUID | [Defaults to `undefined`] |
| **request** | `{ [key: string]: any; }` | Trading run update request | |

### Return type

[**BaseResponseTradingRun**](BaseResponseTradingRun.md)

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


## tradingRunsIdStopPost

> BaseResponseStopTradingRunResponse tradingRunsIdStopPost(id)

Stop trading run

Stop a running trading run (backtest, paper, or live) by trading run ID. Works for both strategies and bots.

### Example

```ts
import {
  Configuration,
  TradingRunsApi,
} from '';
import type { TradingRunsIdStopPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new TradingRunsApi(config);

  const body = {
    // string | Trading Run UUID
    id: id_example,
  } satisfies TradingRunsIdStopPostRequest;

  try {
    const data = await api.tradingRunsIdStopPost(body);
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
| **id** | `string` | Trading Run UUID | [Defaults to `undefined`] |

### Return type

[**BaseResponseStopTradingRunResponse**](BaseResponseStopTradingRunResponse.md)

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


## tradingRunsStopTypesGet

> BaseResponseStopTypesResponse tradingRunsStopTypesGet()

Get Trading Run Stop Types

Get all available LEAN command types with support status

### Example

```ts
import {
  Configuration,
  TradingRunsApi,
} from '';
import type { TradingRunsStopTypesGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new TradingRunsApi(config);

  try {
    const data = await api.tradingRunsStopTypesGet();
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

[**BaseResponseStopTypesResponse**](BaseResponseStopTypesResponse.md)

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

