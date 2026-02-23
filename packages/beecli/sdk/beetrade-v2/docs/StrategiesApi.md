# StrategiesApi

All URIs are relative to */api/v2*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**strategiesGet**](StrategiesApi.md#strategiesget) | **GET** /strategies | List strategies |
| [**strategiesIdAdjustRulesPost**](StrategiesApi.md#strategiesidadjustrulespost) | **POST** /strategies/{id}/adjust-rules | Optimize strategy parameters |
| [**strategiesIdAlertsAlertIdDelete**](StrategiesApi.md#strategiesidalertsalertiddelete) | **DELETE** /strategies/{id}/alerts/{alertId} | Delete strategy alert |
| [**strategiesIdAlertsAlertIdPut**](StrategiesApi.md#strategiesidalertsalertidput) | **PUT** /strategies/{id}/alerts/{alertId} | Update strategy alert |
| [**strategiesIdAlertsGet**](StrategiesApi.md#strategiesidalertsget) | **GET** /strategies/{id}/alerts | Get strategy alerts |
| [**strategiesIdAlertsPost**](StrategiesApi.md#strategiesidalertspost) | **POST** /strategies/{id}/alerts | Create strategy alert |
| [**strategiesIdBacktestPost**](StrategiesApi.md#strategiesidbacktestpost) | **POST** /strategies/{id}/backtest | Create Backtest for Strategy |
| [**strategiesIdDelete**](StrategiesApi.md#strategiesiddelete) | **DELETE** /strategies/{id} | Delete strategy |
| [**strategiesIdExecutionHistoryGet**](StrategiesApi.md#strategiesidexecutionhistoryget) | **GET** /strategies/{id}/execution-history | Get execution history |
| [**strategiesIdGet**](StrategiesApi.md#strategiesidget) | **GET** /strategies/{id} | Get strategy by ID |
| [**strategiesIdLivePost**](StrategiesApi.md#strategiesidlivepost) | **POST** /strategies/{id}/live | Create Live Trading for Strategy |
| [**strategiesIdPaperPost**](StrategiesApi.md#strategiesidpaperpost) | **POST** /strategies/{id}/paper | Create Paper Trading for Strategy |
| [**strategiesIdPut**](StrategiesApi.md#strategiesidput) | **PUT** /strategies/{id} | Update strategy |
| [**strategiesIdScheduleGet**](StrategiesApi.md#strategiesidscheduleget) | **GET** /strategies/{id}/schedule | Get strategy schedule |
| [**strategiesIdSchedulePost**](StrategiesApi.md#strategiesidschedulepost) | **POST** /strategies/{id}/schedule | Schedule a strategy |
| [**strategiesIdVersionsGet**](StrategiesApi.md#strategiesidversionsget) | **GET** /strategies/{id}/versions | List strategy versions |
| [**strategiesIdVersionsVersionIdRollbackPost**](StrategiesApi.md#strategiesidversionsversionidrollbackpost) | **POST** /strategies/{id}/versions/{versionId}/rollback | Rollback strategy to version |
| [**strategiesPost**](StrategiesApi.md#strategiespost) | **POST** /strategies | Create a new strategy |
| [**strategiesSchedulesScheduleIdDelete**](StrategiesApi.md#strategiesschedulesscheduleiddelete) | **DELETE** /strategies/schedules/{scheduleId} | Delete strategy schedule |
| [**strategiesSchedulesScheduleIdPut**](StrategiesApi.md#strategiesschedulesscheduleidput) | **PUT** /strategies/schedules/{scheduleId} | Update strategy schedule |



## strategiesGet

> BaseResponseAny strategiesGet(page, pageSize, keyword)

List strategies

Get paginated list of strategies for the authenticated user

### Example

```ts
import {
  Configuration,
  StrategiesApi,
} from '';
import type { StrategiesGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new StrategiesApi(config);

  const body = {
    // number | Page number (optional)
    page: 56,
    // number | Items per page (optional)
    pageSize: 56,
    // string | Search keyword (optional)
    keyword: keyword_example,
  } satisfies StrategiesGetRequest;

  try {
    const data = await api.strategiesGet(body);
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
| **keyword** | `string` | Search keyword | [Optional] [Defaults to `undefined`] |

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


## strategiesIdAdjustRulesPost

> BaseResponseAdjustRulesResponse strategiesIdAdjustRulesPost(id, request)

Optimize strategy parameters

Optimize strategy parameters using machine learning (shadow mode recommended for safety)

### Example

```ts
import {
  Configuration,
  StrategiesApi,
} from '';
import type { StrategiesIdAdjustRulesPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new StrategiesApi(config);

  const body = {
    // number | Strategy ID
    id: 56,
    // AdjustRulesRequest | Rules adjustment request
    request: ...,
  } satisfies StrategiesIdAdjustRulesPostRequest;

  try {
    const data = await api.strategiesIdAdjustRulesPost(body);
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
| **id** | `number` | Strategy ID | [Defaults to `undefined`] |
| **request** | [AdjustRulesRequest](AdjustRulesRequest.md) | Rules adjustment request | |

### Return type

[**BaseResponseAdjustRulesResponse**](BaseResponseAdjustRulesResponse.md)

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


## strategiesIdAlertsAlertIdDelete

> BaseResponseAny strategiesIdAlertsAlertIdDelete(id, alertId)

Delete strategy alert

Delete a risk management alert for a strategy

### Example

```ts
import {
  Configuration,
  StrategiesApi,
} from '';
import type { StrategiesIdAlertsAlertIdDeleteRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new StrategiesApi(config);

  const body = {
    // number | Strategy ID
    id: 56,
    // number | Alert ID
    alertId: 56,
  } satisfies StrategiesIdAlertsAlertIdDeleteRequest;

  try {
    const data = await api.strategiesIdAlertsAlertIdDelete(body);
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
| **id** | `number` | Strategy ID | [Defaults to `undefined`] |
| **alertId** | `number` | Alert ID | [Defaults to `undefined`] |

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
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## strategiesIdAlertsAlertIdPut

> BaseResponseStrategyAlert strategiesIdAlertsAlertIdPut(id, alertId, request)

Update strategy alert

Update a risk management alert for a strategy

### Example

```ts
import {
  Configuration,
  StrategiesApi,
} from '';
import type { StrategiesIdAlertsAlertIdPutRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new StrategiesApi(config);

  const body = {
    // number | Strategy ID
    id: 56,
    // number | Alert ID
    alertId: 56,
    // UpdateAlertRequest | Alert update request
    request: ...,
  } satisfies StrategiesIdAlertsAlertIdPutRequest;

  try {
    const data = await api.strategiesIdAlertsAlertIdPut(body);
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
| **id** | `number` | Strategy ID | [Defaults to `undefined`] |
| **alertId** | `number` | Alert ID | [Defaults to `undefined`] |
| **request** | [UpdateAlertRequest](UpdateAlertRequest.md) | Alert update request | |

### Return type

[**BaseResponseStrategyAlert**](BaseResponseStrategyAlert.md)

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


## strategiesIdAlertsGet

> BaseResponseArrayStrategyAlert strategiesIdAlertsGet(id)

Get strategy alerts

Get all risk management alerts for a specific strategy

### Example

```ts
import {
  Configuration,
  StrategiesApi,
} from '';
import type { StrategiesIdAlertsGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new StrategiesApi(config);

  const body = {
    // number | Strategy ID
    id: 56,
  } satisfies StrategiesIdAlertsGetRequest;

  try {
    const data = await api.strategiesIdAlertsGet(body);
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
| **id** | `number` | Strategy ID | [Defaults to `undefined`] |

### Return type

[**BaseResponseArrayStrategyAlert**](BaseResponseArrayStrategyAlert.md)

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
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## strategiesIdAlertsPost

> BaseResponseCreateAlertResponse strategiesIdAlertsPost(id, request)

Create strategy alert

Create a risk management alert (circuit breaker) for a strategy

### Example

```ts
import {
  Configuration,
  StrategiesApi,
} from '';
import type { StrategiesIdAlertsPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new StrategiesApi(config);

  const body = {
    // number | Strategy ID
    id: 56,
    // CreateAlertRequest | Alert creation request
    request: ...,
  } satisfies StrategiesIdAlertsPostRequest;

  try {
    const data = await api.strategiesIdAlertsPost(body);
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
| **id** | `number` | Strategy ID | [Defaults to `undefined`] |
| **request** | [CreateAlertRequest](CreateAlertRequest.md) | Alert creation request | |

### Return type

[**BaseResponseCreateAlertResponse**](BaseResponseCreateAlertResponse.md)

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


## strategiesIdBacktestPost

> BaseResponseString strategiesIdBacktestPost(id, request)

Create Backtest for Strategy

Create and execute a backtest for a specific strategy

### Example

```ts
import {
  Configuration,
  StrategiesApi,
} from '';
import type { StrategiesIdBacktestPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new StrategiesApi(config);

  const body = {
    // number | Strategy ID
    id: 56,
    // CreateBacktestRequest | Backtest creation request
    request: ...,
  } satisfies StrategiesIdBacktestPostRequest;

  try {
    const data = await api.strategiesIdBacktestPost(body);
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
| **id** | `number` | Strategy ID | [Defaults to `undefined`] |
| **request** | [CreateBacktestRequest](CreateBacktestRequest.md) | Backtest creation request | |

### Return type

[**BaseResponseString**](BaseResponseString.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Backtest ID |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## strategiesIdDelete

> BaseResponseAny strategiesIdDelete(id)

Delete strategy

Delete a specific strategy by ID for authenticated user

### Example

```ts
import {
  Configuration,
  StrategiesApi,
} from '';
import type { StrategiesIdDeleteRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new StrategiesApi(config);

  const body = {
    // number | Strategy ID
    id: 56,
  } satisfies StrategiesIdDeleteRequest;

  try {
    const data = await api.strategiesIdDelete(body);
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
| **id** | `number` | Strategy ID | [Defaults to `undefined`] |

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
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## strategiesIdExecutionHistoryGet

> BaseResponseAny strategiesIdExecutionHistoryGet(id, page, pageSize, status)

Get execution history

Get the execution history for a specific strategy

### Example

```ts
import {
  Configuration,
  StrategiesApi,
} from '';
import type { StrategiesIdExecutionHistoryGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new StrategiesApi(config);

  const body = {
    // number | Strategy ID
    id: 56,
    // number | Page number (optional)
    page: 56,
    // number | Items per page (optional)
    pageSize: 56,
    // string | Filter by status (optional)
    status: status_example,
  } satisfies StrategiesIdExecutionHistoryGetRequest;

  try {
    const data = await api.strategiesIdExecutionHistoryGet(body);
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
| **id** | `number` | Strategy ID | [Defaults to `undefined`] |
| **page** | `number` | Page number | [Optional] [Defaults to `1`] |
| **pageSize** | `number` | Items per page | [Optional] [Defaults to `20`] |
| **status** | `string` | Filter by status | [Optional] [Defaults to `undefined`] |

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
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## strategiesIdGet

> BaseResponseStrategy strategiesIdGet(id)

Get strategy by ID

Get a specific strategy by ID for the authenticated user

### Example

```ts
import {
  Configuration,
  StrategiesApi,
} from '';
import type { StrategiesIdGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new StrategiesApi(config);

  const body = {
    // number | Strategy ID
    id: 56,
  } satisfies StrategiesIdGetRequest;

  try {
    const data = await api.strategiesIdGet(body);
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
| **id** | `number` | Strategy ID | [Defaults to `undefined`] |

### Return type

[**BaseResponseStrategy**](BaseResponseStrategy.md)

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
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## strategiesIdLivePost

> BaseResponseCreateBacktestResponse strategiesIdLivePost(id, request)

Create Live Trading for Strategy

Create and execute a live trading run for a specific strategy

### Example

```ts
import {
  Configuration,
  StrategiesApi,
} from '';
import type { StrategiesIdLivePostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new StrategiesApi(config);

  const body = {
    // number | Strategy ID
    id: 56,
    // CreateLiveTradingRequest | Live trading creation request
    request: ...,
  } satisfies StrategiesIdLivePostRequest;

  try {
    const data = await api.strategiesIdLivePost(body);
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
| **id** | `number` | Strategy ID | [Defaults to `undefined`] |
| **request** | [CreateLiveTradingRequest](CreateLiveTradingRequest.md) | Live trading creation request | |

### Return type

[**BaseResponseCreateBacktestResponse**](BaseResponseCreateBacktestResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Trading Run ID |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## strategiesIdPaperPost

> BaseResponseCreateBacktestResponse strategiesIdPaperPost(id, request)

Create Paper Trading for Strategy

Create and execute a paper trading run for a specific strategy

### Example

```ts
import {
  Configuration,
  StrategiesApi,
} from '';
import type { StrategiesIdPaperPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new StrategiesApi(config);

  const body = {
    // number | Strategy ID
    id: 56,
    // CreatePaperTradingRequest | Paper trading creation request
    request: ...,
  } satisfies StrategiesIdPaperPostRequest;

  try {
    const data = await api.strategiesIdPaperPost(body);
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
| **id** | `number` | Strategy ID | [Defaults to `undefined`] |
| **request** | [CreatePaperTradingRequest](CreatePaperTradingRequest.md) | Paper trading creation request | |

### Return type

[**BaseResponseCreateBacktestResponse**](BaseResponseCreateBacktestResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Trading Run ID |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## strategiesIdPut

> BaseResponseStrategy strategiesIdPut(id, request)

Update strategy

Update a specific strategy by ID for the authenticated user

### Example

```ts
import {
  Configuration,
  StrategiesApi,
} from '';
import type { StrategiesIdPutRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new StrategiesApi(config);

  const body = {
    // number | Strategy ID
    id: 56,
    // UpdateStrategyRequest | Strategy update request
    request: ...,
  } satisfies StrategiesIdPutRequest;

  try {
    const data = await api.strategiesIdPut(body);
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
| **id** | `number` | Strategy ID | [Defaults to `undefined`] |
| **request** | [UpdateStrategyRequest](UpdateStrategyRequest.md) | Strategy update request | |

### Return type

[**BaseResponseStrategy**](BaseResponseStrategy.md)

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


## strategiesIdScheduleGet

> BaseResponseStrategySchedule strategiesIdScheduleGet(id)

Get strategy schedule

Get the schedule configuration for a specific strategy

### Example

```ts
import {
  Configuration,
  StrategiesApi,
} from '';
import type { StrategiesIdScheduleGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new StrategiesApi(config);

  const body = {
    // number | Strategy ID
    id: 56,
  } satisfies StrategiesIdScheduleGetRequest;

  try {
    const data = await api.strategiesIdScheduleGet(body);
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
| **id** | `number` | Strategy ID | [Defaults to `undefined`] |

### Return type

[**BaseResponseStrategySchedule**](BaseResponseStrategySchedule.md)

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
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## strategiesIdSchedulePost

> BaseResponseStrategySchedule strategiesIdSchedulePost(id, request)

Schedule a strategy

Schedule a strategy to run automatically with a cron expression

### Example

```ts
import {
  Configuration,
  StrategiesApi,
} from '';
import type { StrategiesIdSchedulePostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new StrategiesApi(config);

  const body = {
    // number | Strategy ID
    id: 56,
    // ScheduleStrategyRequest | Schedule request
    request: ...,
  } satisfies StrategiesIdSchedulePostRequest;

  try {
    const data = await api.strategiesIdSchedulePost(body);
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
| **id** | `number` | Strategy ID | [Defaults to `undefined`] |
| **request** | [ScheduleStrategyRequest](ScheduleStrategyRequest.md) | Schedule request | |

### Return type

[**BaseResponseStrategySchedule**](BaseResponseStrategySchedule.md)

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


## strategiesIdVersionsGet

> BaseResponseAny strategiesIdVersionsGet(id, page, pageSize)

List strategy versions

Get paginated list of versions for a specific strategy

### Example

```ts
import {
  Configuration,
  StrategiesApi,
} from '';
import type { StrategiesIdVersionsGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new StrategiesApi(config);

  const body = {
    // number | Strategy ID
    id: 56,
    // number | Page number (optional)
    page: 56,
    // number | Items per page (optional)
    pageSize: 56,
  } satisfies StrategiesIdVersionsGetRequest;

  try {
    const data = await api.strategiesIdVersionsGet(body);
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
| **id** | `number` | Strategy ID | [Defaults to `undefined`] |
| **page** | `number` | Page number | [Optional] [Defaults to `1`] |
| **pageSize** | `number` | Items per page | [Optional] [Defaults to `20`] |

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
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## strategiesIdVersionsVersionIdRollbackPost

> BaseResponseRollbackToVersionResponse strategiesIdVersionsVersionIdRollbackPost(id, versionId)

Rollback strategy to version

Rollback a strategy to a specific version

### Example

```ts
import {
  Configuration,
  StrategiesApi,
} from '';
import type { StrategiesIdVersionsVersionIdRollbackPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new StrategiesApi(config);

  const body = {
    // number | Strategy ID
    id: 56,
    // number | Version ID
    versionId: 56,
  } satisfies StrategiesIdVersionsVersionIdRollbackPostRequest;

  try {
    const data = await api.strategiesIdVersionsVersionIdRollbackPost(body);
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
| **id** | `number` | Strategy ID | [Defaults to `undefined`] |
| **versionId** | `number` | Version ID | [Defaults to `undefined`] |

### Return type

[**BaseResponseRollbackToVersionResponse**](BaseResponseRollbackToVersionResponse.md)

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


## strategiesPost

> BaseResponseStrategy strategiesPost(request)

Create a new strategy

Create a new strategy for the authenticated user

### Example

```ts
import {
  Configuration,
  StrategiesApi,
} from '';
import type { StrategiesPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new StrategiesApi(config);

  const body = {
    // CreateStrategyRequest | Strategy creation request
    request: ...,
  } satisfies StrategiesPostRequest;

  try {
    const data = await api.strategiesPost(body);
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
| **request** | [CreateStrategyRequest](CreateStrategyRequest.md) | Strategy creation request | |

### Return type

[**BaseResponseStrategy**](BaseResponseStrategy.md)

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


## strategiesSchedulesScheduleIdDelete

> BaseResponseAny strategiesSchedulesScheduleIdDelete(scheduleId)

Delete strategy schedule

Delete the schedule configuration for a specific strategy

### Example

```ts
import {
  Configuration,
  StrategiesApi,
} from '';
import type { StrategiesSchedulesScheduleIdDeleteRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new StrategiesApi(config);

  const body = {
    // number | Schedule ID
    scheduleId: 56,
  } satisfies StrategiesSchedulesScheduleIdDeleteRequest;

  try {
    const data = await api.strategiesSchedulesScheduleIdDelete(body);
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
| **scheduleId** | `number` | Schedule ID | [Defaults to `undefined`] |

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
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## strategiesSchedulesScheduleIdPut

> BaseResponseStrategySchedule strategiesSchedulesScheduleIdPut(scheduleId, request)

Update strategy schedule

Update the schedule configuration for a specific strategy

### Example

```ts
import {
  Configuration,
  StrategiesApi,
} from '';
import type { StrategiesSchedulesScheduleIdPutRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new StrategiesApi(config);

  const body = {
    // number | Schedule ID
    scheduleId: 56,
    // ScheduleStrategyRequest | Update schedule request
    request: ...,
  } satisfies StrategiesSchedulesScheduleIdPutRequest;

  try {
    const data = await api.strategiesSchedulesScheduleIdPut(body);
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
| **scheduleId** | `number` | Schedule ID | [Defaults to `undefined`] |
| **request** | [ScheduleStrategyRequest](ScheduleStrategyRequest.md) | Update schedule request | |

### Return type

[**BaseResponseStrategySchedule**](BaseResponseStrategySchedule.md)

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

