# UsersApi

All URIs are relative to */api/v2*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**usersChangePasswordPost**](UsersApi.md#userschangepasswordpost) | **POST** /users/change-password | Change Password |
| [**usersDeviceTokenDelete**](UsersApi.md#usersdevicetokendelete) | **DELETE** /users/device-token | Remove Device Token |
| [**usersDeviceTokenPut**](UsersApi.md#usersdevicetokenputoperation) | **PUT** /users/device-token | Add Device Token |
| [**usersDeviceTokensGet**](UsersApi.md#usersdevicetokensget) | **GET** /users/device-tokens | Get Device Tokens |
| [**usersMeGet**](UsersApi.md#usersmeget) | **GET** /users/me | Get Current User |
| [**usersMePut**](UsersApi.md#usersmeput) | **PUT** /users/me | Update User Profile |



## usersChangePasswordPost

> BaseResponseAny usersChangePasswordPost(request)

Change Password

Change the logged-in user\&#39;s password via Auth0

### Example

```ts
import {
  Configuration,
  UsersApi,
} from '';
import type { UsersChangePasswordPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new UsersApi(config);

  const body = {
    // ChangePasswordRequest | Password change data
    request: ...,
  } satisfies UsersChangePasswordPostRequest;

  try {
    const data = await api.usersChangePasswordPost(body);
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
| **request** | [ChangePasswordRequest](ChangePasswordRequest.md) | Password change data | |

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
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## usersDeviceTokenDelete

> BaseResponseAny usersDeviceTokenDelete(request)

Remove Device Token

Remove a device token for push notifications

### Example

```ts
import {
  Configuration,
  UsersApi,
} from '';
import type { UsersDeviceTokenDeleteRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new UsersApi(config);

  const body = {
    // UsersDeviceTokenPutRequest | Device token
    request: ...,
  } satisfies UsersDeviceTokenDeleteRequest;

  try {
    const data = await api.usersDeviceTokenDelete(body);
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
| **request** | [UsersDeviceTokenPutRequest](UsersDeviceTokenPutRequest.md) | Device token | |

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
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## usersDeviceTokenPut

> BaseResponseAny usersDeviceTokenPut(request)

Add Device Token

Add a new device token for push notifications

### Example

```ts
import {
  Configuration,
  UsersApi,
} from '';
import type { UsersDeviceTokenPutOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new UsersApi(config);

  const body = {
    // UsersDeviceTokenPutRequest | Device token
    request: ...,
  } satisfies UsersDeviceTokenPutOperationRequest;

  try {
    const data = await api.usersDeviceTokenPut(body);
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
| **request** | [UsersDeviceTokenPutRequest](UsersDeviceTokenPutRequest.md) | Device token | |

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
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## usersDeviceTokensGet

> BaseResponseArrayDeviceToken usersDeviceTokensGet()

Get Device Tokens

Get all device tokens for current user

### Example

```ts
import {
  Configuration,
  UsersApi,
} from '';
import type { UsersDeviceTokensGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new UsersApi(config);

  try {
    const data = await api.usersDeviceTokensGet();
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

[**BaseResponseArrayDeviceToken**](BaseResponseArrayDeviceToken.md)

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


## usersMeGet

> BaseResponseUserWithConfiguration usersMeGet()

Get Current User

Retrieve the logged-in user\&#39;s profile information with plan and billing period

### Example

```ts
import {
  Configuration,
  UsersApi,
} from '';
import type { UsersMeGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new UsersApi(config);

  try {
    const data = await api.usersMeGet();
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

[**BaseResponseUserWithConfiguration**](BaseResponseUserWithConfiguration.md)

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


## usersMePut

> BaseResponseUser usersMePut(request)

Update User Profile

Update the logged-in user\&#39;s profile information

### Example

```ts
import {
  Configuration,
  UsersApi,
} from '';
import type { UsersMePutRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new UsersApi(config);

  const body = {
    // UpdateProfileRequest | Profile update data
    request: ...,
  } satisfies UsersMePutRequest;

  try {
    const data = await api.usersMePut(body);
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
| **request** | [UpdateProfileRequest](UpdateProfileRequest.md) | Profile update data | |

### Return type

[**BaseResponseUser**](BaseResponseUser.md)

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

