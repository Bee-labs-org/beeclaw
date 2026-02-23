# AuthApi

All URIs are relative to */api/v2*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**authGooglePost**](AuthApi.md#authgooglepost) | **POST** /auth/google | Google OAuth Login |
| [**authLoginPost**](AuthApi.md#authloginpost) | **POST** /auth/login | User Login |
| [**authRefreshPost**](AuthApi.md#authrefreshpostoperation) | **POST** /auth/refresh | Refresh Token |
| [**authRequestPasswordResetPost**](AuthApi.md#authrequestpasswordresetpost) | **POST** /auth/request-password-reset | Request Password Reset |
| [**authResetPasswordPost**](AuthApi.md#authresetpasswordpost) | **POST** /auth/reset-password | Reset Password |
| [**authSignupPost**](AuthApi.md#authsignuppost) | **POST** /auth/signup | User Signup |



## authGooglePost

> BaseResponseLoginResponse authGooglePost(request)

Google OAuth Login

Authenticate user with Google OAuth authorization code via Auth0

### Example

```ts
import {
  Configuration,
  AuthApi,
} from '';
import type { AuthGooglePostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AuthApi();

  const body = {
    // GoogleLoginRequest | Google OAuth authorization code
    request: ...,
  } satisfies AuthGooglePostRequest;

  try {
    const data = await api.authGooglePost(body);
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
| **request** | [GoogleLoginRequest](GoogleLoginRequest.md) | Google OAuth authorization code | |

### Return type

[**BaseResponseLoginResponse**](BaseResponseLoginResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad Request |  -  |
| **409** | Conflict |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## authLoginPost

> BaseResponseLoginResponse authLoginPost(request)

User Login

Authenticate user with email and password using Auth0

### Example

```ts
import {
  Configuration,
  AuthApi,
} from '';
import type { AuthLoginPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AuthApi();

  const body = {
    // LoginRequest | Login credentials
    request: ...,
  } satisfies AuthLoginPostRequest;

  try {
    const data = await api.authLoginPost(body);
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
| **request** | [LoginRequest](LoginRequest.md) | Login credentials | |

### Return type

[**BaseResponseLoginResponse**](BaseResponseLoginResponse.md)

### Authorization

No authorization required

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


## authRefreshPost

> BaseResponseLoginResponse authRefreshPost(request)

Refresh Token

Refresh expired JWT token using refresh token

### Example

```ts
import {
  Configuration,
  AuthApi,
} from '';
import type { AuthRefreshPostOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AuthApi();

  const body = {
    // AuthRefreshPostRequest | Refresh token
    request: ...,
  } satisfies AuthRefreshPostOperationRequest;

  try {
    const data = await api.authRefreshPost(body);
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
| **request** | [AuthRefreshPostRequest](AuthRefreshPostRequest.md) | Refresh token | |

### Return type

[**BaseResponseLoginResponse**](BaseResponseLoginResponse.md)

### Authorization

No authorization required

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


## authRequestPasswordResetPost

> BaseResponseAny authRequestPasswordResetPost(request)

Request Password Reset

Request a password reset email (public endpoint)

### Example

```ts
import {
  Configuration,
  AuthApi,
} from '';
import type { AuthRequestPasswordResetPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AuthApi();

  const body = {
    // RequestPasswordResetRequest | Email address
    request: ...,
  } satisfies AuthRequestPasswordResetPostRequest;

  try {
    const data = await api.authRequestPasswordResetPost(body);
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
| **request** | [RequestPasswordResetRequest](RequestPasswordResetRequest.md) | Email address | |

### Return type

[**BaseResponseAny**](BaseResponseAny.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## authResetPasswordPost

> BaseResponseAny authResetPasswordPost(request)

Reset Password

Complete password reset with token from email (public endpoint)

### Example

```ts
import {
  Configuration,
  AuthApi,
} from '';
import type { AuthResetPasswordPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AuthApi();

  const body = {
    // ResetPasswordRequest | Reset token and new password
    request: ...,
  } satisfies AuthResetPasswordPostRequest;

  try {
    const data = await api.authResetPasswordPost(body);
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
| **request** | [ResetPasswordRequest](ResetPasswordRequest.md) | Reset token and new password | |

### Return type

[**BaseResponseAny**](BaseResponseAny.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## authSignupPost

> BaseResponseSignupResponse authSignupPost(request)

User Signup

Register a new user account using Auth0

### Example

```ts
import {
  Configuration,
  AuthApi,
} from '';
import type { AuthSignupPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AuthApi();

  const body = {
    // SignupRequest | User registration data
    request: ...,
  } satisfies AuthSignupPostRequest;

  try {
    const data = await api.authSignupPost(body);
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
| **request** | [SignupRequest](SignupRequest.md) | User registration data | |

### Return type

[**BaseResponseSignupResponse**](BaseResponseSignupResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Created |  -  |
| **400** | Bad Request |  -  |
| **409** | Conflict |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

