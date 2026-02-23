# APIKeyApi

All URIs are relative to */api/v2*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**adminApiKeysGet**](APIKeyApi.md#adminapikeysget) | **GET** /admin/api-keys | List all API keys |
| [**adminApiKeysIdDeactivatePost**](APIKeyApi.md#adminapikeysiddeactivatepost) | **POST** /admin/api-keys/{id}/deactivate | Deactivate an API key |
| [**adminApiKeysPost**](APIKeyApi.md#adminapikeyspost) | **POST** /admin/api-keys | Create a new API key |



## adminApiKeysGet

> BaseResponseArrayAPIKey adminApiKeysGet()

List all API keys

Get a list of all API keys (for admin purposes). Plaintext keys are never returned.

### Example

```ts
import {
  Configuration,
  APIKeyApi,
} from '';
import type { AdminApiKeysGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new APIKeyApi(config);

  try {
    const data = await api.adminApiKeysGet();
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

[**BaseResponseArrayAPIKey**](BaseResponseArrayAPIKey.md)

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


## adminApiKeysIdDeactivatePost

> BaseResponseAny adminApiKeysIdDeactivatePost(id)

Deactivate an API key

Deactivate an API key by ID. The key will no longer be usable for authentication.

### Example

```ts
import {
  Configuration,
  APIKeyApi,
} from '';
import type { AdminApiKeysIdDeactivatePostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new APIKeyApi(config);

  const body = {
    // number | API Key ID
    id: 56,
  } satisfies AdminApiKeysIdDeactivatePostRequest;

  try {
    const data = await api.adminApiKeysIdDeactivatePost(body);
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
| **id** | `number` | API Key ID | [Defaults to `undefined`] |

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
| **400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## adminApiKeysPost

> BaseResponseCreateAPIKeyResponse adminApiKeysPost(request)

Create a new API key

Create a new API key for internal service authentication. The plaintext key is only returned once during creation. The &#x60;created_by&#x60; field is automatically set from the authenticated user.

### Example

```ts
import {
  Configuration,
  APIKeyApi,
} from '';
import type { AdminApiKeysPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new APIKeyApi(config);

  const body = {
    // CreateAPIKeyRequest | API Key creation request
    request: ...,
  } satisfies AdminApiKeysPostRequest;

  try {
    const data = await api.adminApiKeysPost(body);
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
| **request** | [CreateAPIKeyRequest](CreateAPIKeyRequest.md) | API Key creation request | |

### Return type

[**BaseResponseCreateAPIKeyResponse**](BaseResponseCreateAPIKeyResponse.md)

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

