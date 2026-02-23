# WorkloadsApi

All URIs are relative to */api/v2*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**workloadsGet**](WorkloadsApi.md#workloadsget) | **GET** /workloads | List Workloads |
| [**workloadsIdGet**](WorkloadsApi.md#workloadsidget) | **GET** /workloads/{id} | Get Workload by ID |
| [**workloadsIdStopPost**](WorkloadsApi.md#workloadsidstoppost) | **POST** /workloads/{id}/stop | Stop Workload |



## workloadsGet

> BaseResponseStopWorkloadResponse workloadsGet(type, status, page, limit)

List Workloads

Get all workloads for the authenticated user with optional filters

### Example

```ts
import {
  Configuration,
  WorkloadsApi,
} from '';
import type { WorkloadsGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new WorkloadsApi(config);

  const body = {
    // 'LIVE_TRADING' | 'BACKTEST' | 'ADVANCE_ORDER' | 'LOAD_DATA' | 'ALERT' | 'BOT_ADVANCED_ORDER' | Filter by workload type (optional)
    type: type_example,
    // 'INIT' | 'RUNNING' | 'STOPPED' | 'FAILED' | Filter by status (optional)
    status: status_example,
    // number | Page number (optional)
    page: 56,
    // number | Page size (optional)
    limit: 56,
  } satisfies WorkloadsGetRequest;

  try {
    const data = await api.workloadsGet(body);
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
| **type** | `LIVE_TRADING`, `BACKTEST`, `ADVANCE_ORDER`, `LOAD_DATA`, `ALERT`, `BOT_ADVANCED_ORDER` | Filter by workload type | [Optional] [Defaults to `undefined`] [Enum: LIVE_TRADING, BACKTEST, ADVANCE_ORDER, LOAD_DATA, ALERT, BOT_ADVANCED_ORDER] |
| **status** | `INIT`, `RUNNING`, `STOPPED`, `FAILED` | Filter by status | [Optional] [Defaults to `undefined`] [Enum: INIT, RUNNING, STOPPED, FAILED] |
| **page** | `number` | Page number | [Optional] [Defaults to `1`] |
| **limit** | `number` | Page size | [Optional] [Defaults to `20`] |

### Return type

[**BaseResponseStopWorkloadResponse**](BaseResponseStopWorkloadResponse.md)

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


## workloadsIdGet

> BaseResponseWorkload workloadsIdGet(id)

Get Workload by ID

Get workload details by ID

### Example

```ts
import {
  Configuration,
  WorkloadsApi,
} from '';
import type { WorkloadsIdGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new WorkloadsApi(config);

  const body = {
    // number | Workload ID
    id: 56,
  } satisfies WorkloadsIdGetRequest;

  try {
    const data = await api.workloadsIdGet(body);
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
| **id** | `number` | Workload ID | [Defaults to `undefined`] |

### Return type

[**BaseResponseWorkload**](BaseResponseWorkload.md)

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


## workloadsIdStopPost

> BaseResponseStopWorkloadResponse workloadsIdStopPost(id)

Stop Workload

Stop a running workload by ID

### Example

```ts
import {
  Configuration,
  WorkloadsApi,
} from '';
import type { WorkloadsIdStopPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new WorkloadsApi(config);

  const body = {
    // number | Workload ID
    id: 56,
  } satisfies WorkloadsIdStopPostRequest;

  try {
    const data = await api.workloadsIdStopPost(body);
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
| **id** | `number` | Workload ID | [Defaults to `undefined`] |

### Return type

[**BaseResponseStopWorkloadResponse**](BaseResponseStopWorkloadResponse.md)

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

