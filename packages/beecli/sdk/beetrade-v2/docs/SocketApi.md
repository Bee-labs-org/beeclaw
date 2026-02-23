# SocketApi

All URIs are relative to */api/v2*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**wsBroadcastPost**](SocketApi.md#wsbroadcastpost) | **POST** /ws/broadcast | Broadcast to Room |
| [**wsGet**](SocketApi.md#wsget) | **GET** /ws | WebSocket Connection |



## wsBroadcastPost

> BaseResponseAny wsBroadcastPost(request)

Broadcast to Room

Broadcast a message to all clients in a specific WebSocket room (for testing/admin)

### Example

```ts
import {
  Configuration,
  SocketApi,
} from '';
import type { WsBroadcastPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new SocketApi(config);

  const body = {
    // CoreSocketTransportHttpBroadcastRequest | Broadcast request
    request: ...,
  } satisfies WsBroadcastPostRequest;

  try {
    const data = await api.wsBroadcastPost(body);
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
| **request** | [CoreSocketTransportHttpBroadcastRequest](CoreSocketTransportHttpBroadcastRequest.md) | Broadcast request | |

### Return type

[**BaseResponseAny**](BaseResponseAny.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## wsGet

> wsGet(token)

WebSocket Connection

Establish WebSocket connection for real-time updates

### Example

```ts
import {
  Configuration,
  SocketApi,
} from '';
import type { WsGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new SocketApi();

  const body = {
    // string | JWT authentication token (optional)
    token: token_example,
  } satisfies WsGetRequest;

  try {
    const data = await api.wsGet(body);
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
| **token** | `string` | JWT authentication token | [Optional] [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `*/*`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **101** | Switching Protocols |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

