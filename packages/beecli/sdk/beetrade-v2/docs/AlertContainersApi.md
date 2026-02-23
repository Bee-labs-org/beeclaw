# AlertContainersApi

All URIs are relative to */api/v2*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**adminAlertsForceStopContainersPost**](AlertContainersApi.md#adminalertsforcestopcontainerspost) | **POST** /admin/alerts/force-stop-containers | Force Stop All Alert Containers (Admin) |
| [**adminAlertsInitContainersPost**](AlertContainersApi.md#adminalertsinitcontainerspost) | **POST** /admin/alerts/init-containers | Initialize All Alert Containers (Admin) |
| [**alertsContainersGet**](AlertContainersApi.md#alertscontainersget) | **GET** /alerts/containers | List Alert Containers |
| [**alertsContainersIdGet**](AlertContainersApi.md#alertscontainersidget) | **GET** /alerts/containers/{id} | Get Alert Container |
| [**alertsContainersPost**](AlertContainersApi.md#alertscontainerspost) | **POST** /alerts/containers | Create Alert Container |
| [**alertsTestPost**](AlertContainersApi.md#alertstestpost) | **POST** /alerts/test | Test Alert |



## adminAlertsForceStopContainersPost

> CoreAlertcontainerTransportHttpForceStopContainersResponse adminAlertsForceStopContainersPost()

Force Stop All Alert Containers (Admin)

Force stop all currently running alert containers across all brokerage accounts

### Example

```ts
import {
  Configuration,
  AlertContainersApi,
} from '';
import type { AdminAlertsForceStopContainersPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new AlertContainersApi(config);

  try {
    const data = await api.adminAlertsForceStopContainersPost();
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

[**CoreAlertcontainerTransportHttpForceStopContainersResponse**](CoreAlertcontainerTransportHttpForceStopContainersResponse.md)

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
| **403** | Forbidden |  -  |
| **500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## adminAlertsInitContainersPost

> CoreAlertcontainerTransportHttpInitializeContainersResponse adminAlertsInitContainersPost()

Initialize All Alert Containers (Admin)

Initialize alert containers for all brokerage accounts that don\&#39;t have active containers

### Example

```ts
import {
  Configuration,
  AlertContainersApi,
} from '';
import type { AdminAlertsInitContainersPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new AlertContainersApi(config);

  try {
    const data = await api.adminAlertsInitContainersPost();
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

[**CoreAlertcontainerTransportHttpInitializeContainersResponse**](CoreAlertcontainerTransportHttpInitializeContainersResponse.md)

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
| **403** | Forbidden |  -  |
| **500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## alertsContainersGet

> CoreAlertcontainerTransportHttpListContainersResponse alertsContainersGet(page, limit, status, brokerageId)

List Alert Containers

Get a paginated list of alert containers with optional filtering by status and brokerage ID

### Example

```ts
import {
  Configuration,
  AlertContainersApi,
} from '';
import type { AlertsContainersGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new AlertContainersApi(config);

  const body = {
    // number | Page number (optional)
    page: 56,
    // number | Number of items per page (optional)
    limit: 56,
    // 'NOT_STARTED' | 'INITIALIZING' | 'RUNNING' | 'STOPPING' | 'STOPPED' | 'FAILED' | Filter by container status (optional)
    status: status_example,
    // number | Filter by brokerage ID (optional)
    brokerageId: 56,
  } satisfies AlertsContainersGetRequest;

  try {
    const data = await api.alertsContainersGet(body);
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
| **page** | `number` | Page number | [Optional] [Defaults to `0`] |
| **limit** | `number` | Number of items per page | [Optional] [Defaults to `20`] |
| **status** | `NOT_STARTED`, `INITIALIZING`, `RUNNING`, `STOPPING`, `STOPPED`, `FAILED` | Filter by container status | [Optional] [Defaults to `undefined`] [Enum: NOT_STARTED, INITIALIZING, RUNNING, STOPPING, STOPPED, FAILED] |
| **brokerageId** | `number` | Filter by brokerage ID | [Optional] [Defaults to `undefined`] |

### Return type

[**CoreAlertcontainerTransportHttpListContainersResponse**](CoreAlertcontainerTransportHttpListContainersResponse.md)

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
| **500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## alertsContainersIdGet

> CoreAlertcontainerTransportHttpGetContainerResponse alertsContainersIdGet(id)

Get Alert Container

Get detailed information about a specific alert container by its ID

### Example

```ts
import {
  Configuration,
  AlertContainersApi,
} from '';
import type { AlertsContainersIdGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new AlertContainersApi(config);

  const body = {
    // number | Container ID
    id: 56,
  } satisfies AlertsContainersIdGetRequest;

  try {
    const data = await api.alertsContainersIdGet(body);
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
| **id** | `number` | Container ID | [Defaults to `undefined`] |

### Return type

[**CoreAlertcontainerTransportHttpGetContainerResponse**](CoreAlertcontainerTransportHttpGetContainerResponse.md)

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
| **500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## alertsContainersPost

> CoreAlertcontainerTransportHttpCreateContainerResponse alertsContainersPost(request)

Create Alert Container

Create a new alert container for specified brokerage account to monitor and manage alerts

### Example

```ts
import {
  Configuration,
  AlertContainersApi,
} from '';
import type { AlertsContainersPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new AlertContainersApi(config);

  const body = {
    // CreateContainerRequest | Container creation request
    request: ...,
  } satisfies AlertsContainersPostRequest;

  try {
    const data = await api.alertsContainersPost(body);
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
| **request** | [CreateContainerRequest](CreateContainerRequest.md) | Container creation request | |

### Return type

[**CoreAlertcontainerTransportHttpCreateContainerResponse**](CoreAlertcontainerTransportHttpCreateContainerResponse.md)

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
| **500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## alertsTestPost

> CoreAlertcontainerTransportHttpTestAlertResponse alertsTestPost(request)

Test Alert

Test alert data by retrieving cached alerts for specified brokerage account\&#39;s container

### Example

```ts
import {
  Configuration,
  AlertContainersApi,
} from '';
import type { AlertsTestPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new AlertContainersApi(config);

  const body = {
    // TestAlertRequest | Test alert request
    request: ...,
  } satisfies AlertsTestPostRequest;

  try {
    const data = await api.alertsTestPost(body);
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
| **request** | [TestAlertRequest](TestAlertRequest.md) | Test alert request | |

### Return type

[**CoreAlertcontainerTransportHttpTestAlertResponse**](CoreAlertcontainerTransportHttpTestAlertResponse.md)

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
| **500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

