# AlertsApi

All URIs are relative to */api/v2*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**alertsGet**](AlertsApi.md#alertsget) | **GET** /alerts | Get Alerts |
| [**alertsIdDelete**](AlertsApi.md#alertsiddelete) | **DELETE** /alerts/{id} | Delete Alert |
| [**alertsIdGet**](AlertsApi.md#alertsidget) | **GET** /alerts/{id} | Get Alert by ID |
| [**alertsIdPut**](AlertsApi.md#alertsidput) | **PUT** /alerts/{id} | Update Alert |
| [**alertsIdStatusPatch**](AlertsApi.md#alertsidstatuspatch) | **PATCH** /alerts/{id}/status | Update Alert Status |
| [**alertsPost**](AlertsApi.md#alertspost) | **POST** /alerts | Create Alert |
| [**alertsTriggerPost**](AlertsApi.md#alertstriggerpost) | **POST** /alerts/trigger | Trigger Alert |



## alertsGet

> CoreAlertTransportHttpAlertListResponse alertsGet(keyword, page, pageSize, status, brokerageId)

Get Alerts

Get list of alerts for the authenticated user with pagination

### Example

```ts
import {
  Configuration,
  AlertsApi,
} from '';
import type { AlertsGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new AlertsApi(config);

  const body = {
    // string | Search keyword (optional)
    keyword: keyword_example,
    // number | Page number (optional)
    page: 56,
    // number | Page size (optional)
    pageSize: 56,
    // boolean | Filter by status (optional)
    status: true,
    // number | Filter by brokerage ID (optional)
    brokerageId: 56,
  } satisfies AlertsGetRequest;

  try {
    const data = await api.alertsGet(body);
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
| **keyword** | `string` | Search keyword | [Optional] [Defaults to `undefined`] |
| **page** | `number` | Page number | [Optional] [Defaults to `1`] |
| **pageSize** | `number` | Page size | [Optional] [Defaults to `20`] |
| **status** | `boolean` | Filter by status | [Optional] [Defaults to `undefined`] |
| **brokerageId** | `number` | Filter by brokerage ID | [Optional] [Defaults to `undefined`] |

### Return type

[**CoreAlertTransportHttpAlertListResponse**](CoreAlertTransportHttpAlertListResponse.md)

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


## alertsIdDelete

> CoreAlertTransportHttpDeleteAlertResponse alertsIdDelete(id)

Delete Alert

Delete a specific alert for the authenticated user

### Example

```ts
import {
  Configuration,
  AlertsApi,
} from '';
import type { AlertsIdDeleteRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new AlertsApi(config);

  const body = {
    // number | Alert ID
    id: 56,
  } satisfies AlertsIdDeleteRequest;

  try {
    const data = await api.alertsIdDelete(body);
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
| **id** | `number` | Alert ID | [Defaults to `undefined`] |

### Return type

[**CoreAlertTransportHttpDeleteAlertResponse**](CoreAlertTransportHttpDeleteAlertResponse.md)

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


## alertsIdGet

> CoreAlertTransportHttpGetAlertResponse alertsIdGet(id)

Get Alert by ID

Get a specific alert by ID for the authenticated user

### Example

```ts
import {
  Configuration,
  AlertsApi,
} from '';
import type { AlertsIdGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new AlertsApi(config);

  const body = {
    // number | Alert ID
    id: 56,
  } satisfies AlertsIdGetRequest;

  try {
    const data = await api.alertsIdGet(body);
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
| **id** | `number` | Alert ID | [Defaults to `undefined`] |

### Return type

[**CoreAlertTransportHttpGetAlertResponse**](CoreAlertTransportHttpGetAlertResponse.md)

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


## alertsIdPut

> CoreAlertTransportHttpUpdateAlertResponse alertsIdPut(id, request)

Update Alert

Update a specific alert for the authenticated user

### Example

```ts
import {
  Configuration,
  AlertsApi,
} from '';
import type { AlertsIdPutRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new AlertsApi(config);

  const body = {
    // number | Alert ID
    id: 56,
    // CoreAlertTransportHttpUpdateAlertRequest | Update alert request
    request: ...,
  } satisfies AlertsIdPutRequest;

  try {
    const data = await api.alertsIdPut(body);
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
| **id** | `number` | Alert ID | [Defaults to `undefined`] |
| **request** | [CoreAlertTransportHttpUpdateAlertRequest](CoreAlertTransportHttpUpdateAlertRequest.md) | Update alert request | |

### Return type

[**CoreAlertTransportHttpUpdateAlertResponse**](CoreAlertTransportHttpUpdateAlertResponse.md)

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


## alertsIdStatusPatch

> CoreAlertTransportHttpUpdateAlertStatusResponse alertsIdStatusPatch(id, request)

Update Alert Status

Update the status (active/inactive) of a specific alert

### Example

```ts
import {
  Configuration,
  AlertsApi,
} from '';
import type { AlertsIdStatusPatchRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new AlertsApi(config);

  const body = {
    // number | Alert ID
    id: 56,
    // CoreAlertTransportHttpUpdateAlertStatusRequest | Update status request
    request: ...,
  } satisfies AlertsIdStatusPatchRequest;

  try {
    const data = await api.alertsIdStatusPatch(body);
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
| **id** | `number` | Alert ID | [Defaults to `undefined`] |
| **request** | [CoreAlertTransportHttpUpdateAlertStatusRequest](CoreAlertTransportHttpUpdateAlertStatusRequest.md) | Update status request | |

### Return type

[**CoreAlertTransportHttpUpdateAlertStatusResponse**](CoreAlertTransportHttpUpdateAlertStatusResponse.md)

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


## alertsPost

> CoreAlertTransportHttpCreateAlertResponse alertsPost(request)

Create Alert

Create a new alert for authenticated user

### Example

```ts
import {
  Configuration,
  AlertsApi,
} from '';
import type { AlertsPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new AlertsApi(config);

  const body = {
    // CoreAlertTransportHttpCreateAlertRequest | Alert creation request (brokerageId required)
    request: ...,
  } satisfies AlertsPostRequest;

  try {
    const data = await api.alertsPost(body);
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
| **request** | [CoreAlertTransportHttpCreateAlertRequest](CoreAlertTransportHttpCreateAlertRequest.md) | Alert creation request (brokerageId required) | |

### Return type

[**CoreAlertTransportHttpCreateAlertResponse**](CoreAlertTransportHttpCreateAlertResponse.md)

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


## alertsTriggerPost

> alertsTriggerPost(request)

Trigger Alert

Handle alert trigger from webhook (internal use)

### Example

```ts
import {
  Configuration,
  AlertsApi,
} from '';
import type { AlertsTriggerPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AlertsApi();

  const body = {
    // CoreAlertTransportHttpTriggerAlertRequest | Trigger alert request
    request: ...,
  } satisfies AlertsTriggerPostRequest;

  try {
    const data = await api.alertsTriggerPost(body);
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
| **request** | [CoreAlertTransportHttpTriggerAlertRequest](CoreAlertTransportHttpTriggerAlertRequest.md) | Trigger alert request | |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content |  -  |
| **400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

