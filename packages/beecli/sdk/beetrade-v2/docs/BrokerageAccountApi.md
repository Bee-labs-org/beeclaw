# BrokerageAccountApi

All URIs are relative to */api/v2*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**brokerageAccountsBrokerageIdPost**](BrokerageAccountApi.md#brokerageaccountsbrokerageidpost) | **POST** /brokerage-accounts/{brokerage_id} | Create a new brokerage account with config field validation |
| [**brokerageAccountsGet**](BrokerageAccountApi.md#brokerageaccountsget) | **GET** /brokerage-accounts | Get all brokerage accounts |
| [**brokerageAccountsGroupedGet**](BrokerageAccountApi.md#brokerageaccountsgroupedget) | **GET** /brokerage-accounts/grouped | Get brokerage accounts grouped by trading client |
| [**brokerageAccountsIdBalanceGet**](BrokerageAccountApi.md#brokerageaccountsidbalanceget) | **GET** /brokerage-accounts/{id}/balance | Get account balance |
| [**brokerageAccountsIdDelete**](BrokerageAccountApi.md#brokerageaccountsiddelete) | **DELETE** /brokerage-accounts/{id} | Delete brokerage account |
| [**brokerageAccountsIdGet**](BrokerageAccountApi.md#brokerageaccountsidget) | **GET** /brokerage-accounts/{id} | Get brokerage account by ID |
| [**brokerageAccountsIdPut**](BrokerageAccountApi.md#brokerageaccountsidput) | **PUT** /brokerage-accounts/{id} | Update brokerage account credentials |



## brokerageAccountsBrokerageIdPost

> BaseResponseBrokerageAccount brokerageAccountsBrokerageIdPost(brokerageId, lang)

Create a new brokerage account with config field validation

Create a new brokerage account for the authenticated user by providing brokerage_id as path parameter and config field values in request body. The system will validate all required fields and validation rules before creating the account. Credentials will be validated via portfolio service API to ensure they are valid before account creation. If credentials cannot be validated (400/500 response), account creation will fail. Credentials will be encrypted based on the config field\&#39;s is_encrypted setting. If accountId is provided, it will be used as provider_user_id. Otherwise, if provider_user_id is provided, it will be used. If neither is provided, a random 6-digit unique ID will be generated automatically. tradingClientId is required to link the account to a trading client. The account will be created with CONNECTED status. **Important**: OTP, accessToken, orderToken, isSaveOtp, loanPackageId, and otpType fields are NOT accepted in this endpoint - they must be collected AFTER account creation via PUT /credentials endpoint.

### Example

```ts
import {
  Configuration,
  BrokerageAccountApi,
} from '';
import type { BrokerageAccountsBrokerageIdPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new BrokerageAccountApi(config);

  const body = {
    // number | ID of the brokerage to create account for
    brokerageId: 56,
    // 'en' | 'vi' | Language code (en, vi) (optional)
    lang: lang_example,
  } satisfies BrokerageAccountsBrokerageIdPostRequest;

  try {
    const data = await api.brokerageAccountsBrokerageIdPost(body);
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
| **brokerageId** | `number` | ID of the brokerage to create account for | [Defaults to `undefined`] |
| **lang** | `en`, `vi` | Language code (en, vi) | [Optional] [Defaults to `&#39;en&#39;`] [Enum: en, vi] |

### Return type

[**BaseResponseBrokerageAccount**](BaseResponseBrokerageAccount.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Brokerage account created successfully |  -  |
| **400** | Bad request - validation error, duplicate credential value, invalid credentials (portfolio service validation failed), or missing/invalid tradingClientId\&quot; example({\&quot;error\&quot;:\&quot;Invalid API keys: the provided credentials could not be validated with the brokerage service\&quot;,\&quot;code\&quot;:400,\&quot;data\&quot;:null}) |  -  |
| **401** | Unauthorized - missing or invalid token |  -  |
| **404** | Not found - brokerage ID does not exist or trading client not found\&quot;                      example({\&quot;error\&quot;:\&quot;Brokerage with id \&#39;999\&#39; not found\&quot;,\&quot;code\&quot;:404,\&quot;data\&quot;:null}) |  -  |
| **503** | Service unavailable - portfolio service is temporarily unavailable\&quot;                      example({\&quot;error\&quot;:\&quot;Unable to validate credentials: the validation service is temporarily unavailable. Please try again later.\&quot;,\&quot;code\&quot;:503,\&quot;data\&quot;:null}) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## brokerageAccountsGet

> BaseResponseArrayBrokerageAccount brokerageAccountsGet(tradingClientId, lang)

Get all brokerage accounts

Get all brokerage accounts for the authenticated user without credentials. Optionally filter by trading_client_id.

### Example

```ts
import {
  Configuration,
  BrokerageAccountApi,
} from '';
import type { BrokerageAccountsGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new BrokerageAccountApi(config);

  const body = {
    // number | Filter by trading client ID (optional)
    tradingClientId: 56,
    // 'en' | 'vi' | Language code (en, vi) (optional)
    lang: lang_example,
  } satisfies BrokerageAccountsGetRequest;

  try {
    const data = await api.brokerageAccountsGet(body);
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
| **tradingClientId** | `number` | Filter by trading client ID | [Optional] [Defaults to `undefined`] |
| **lang** | `en`, `vi` | Language code (en, vi) | [Optional] [Defaults to `&#39;en&#39;`] [Enum: en, vi] |

### Return type

[**BaseResponseArrayBrokerageAccount**](BaseResponseArrayBrokerageAccount.md)

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


## brokerageAccountsGroupedGet

> BaseResponseArrayBrokerageAccountGroup brokerageAccountsGroupedGet(lang)

Get brokerage accounts grouped by trading client

Retrieve all brokerage accounts for the authenticated user, grouped by their trading client relationship. Accounts without a trading client are grouped under the \&quot;DEFAULT\&quot; key. Accounts linked to trading clients are grouped by trading client ID with the trading client name included.

### Example

```ts
import {
  Configuration,
  BrokerageAccountApi,
} from '';
import type { BrokerageAccountsGroupedGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new BrokerageAccountApi(config);

  const body = {
    // 'en' | 'vi' | Language code (en, vi) (optional)
    lang: lang_example,
  } satisfies BrokerageAccountsGroupedGetRequest;

  try {
    const data = await api.brokerageAccountsGroupedGet(body);
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
| **lang** | `en`, `vi` | Language code (en, vi) | [Optional] [Defaults to `&#39;en&#39;`] [Enum: en, vi] |

### Return type

[**BaseResponseArrayBrokerageAccountGroup**](BaseResponseArrayBrokerageAccountGroup.md)

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


## brokerageAccountsIdBalanceGet

> BaseResponseBalanceResponse brokerageAccountsIdBalanceGet(id)

Get account balance

Get current account balance for a specific brokerage account

### Example

```ts
import {
  Configuration,
  BrokerageAccountApi,
} from '';
import type { BrokerageAccountsIdBalanceGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new BrokerageAccountApi(config);

  const body = {
    // number | Brokerage Account ID
    id: 56,
  } satisfies BrokerageAccountsIdBalanceGetRequest;

  try {
    const data = await api.brokerageAccountsIdBalanceGet(body);
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
| **id** | `number` | Brokerage Account ID | [Defaults to `undefined`] |

### Return type

[**BaseResponseBalanceResponse**](BaseResponseBalanceResponse.md)

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


## brokerageAccountsIdDelete

> brokerageAccountsIdDelete(id, lang)

Delete brokerage account

Delete a brokerage account and all its credentials. Only the account owner can delete their account. All associated credentials will be automatically deleted via cascade delete.

### Example

```ts
import {
  Configuration,
  BrokerageAccountApi,
} from '';
import type { BrokerageAccountsIdDeleteRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new BrokerageAccountApi(config);

  const body = {
    // number | Brokerage Account ID
    id: 56,
    // 'en' | 'vi' | Language code (en, vi) (optional)
    lang: lang_example,
  } satisfies BrokerageAccountsIdDeleteRequest;

  try {
    const data = await api.brokerageAccountsIdDelete(body);
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
| **id** | `number` | Brokerage Account ID | [Defaults to `undefined`] |
| **lang** | `en`, `vi` | Language code (en, vi) | [Optional] [Defaults to `&#39;en&#39;`] [Enum: en, vi] |

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
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## brokerageAccountsIdGet

> BaseResponseBrokerageAccount brokerageAccountsIdGet(id, lang)

Get brokerage account by ID

Get a brokerage account by ID with credentials (decrypted)

### Example

```ts
import {
  Configuration,
  BrokerageAccountApi,
} from '';
import type { BrokerageAccountsIdGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new BrokerageAccountApi(config);

  const body = {
    // number | Brokerage Account ID
    id: 56,
    // 'en' | 'vi' | Language code (en, vi) (optional)
    lang: lang_example,
  } satisfies BrokerageAccountsIdGetRequest;

  try {
    const data = await api.brokerageAccountsIdGet(body);
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
| **id** | `number` | Brokerage Account ID | [Defaults to `undefined`] |
| **lang** | `en`, `vi` | Language code (en, vi) | [Optional] [Defaults to `&#39;en&#39;`] [Enum: en, vi] |

### Return type

[**BaseResponseBrokerageAccount**](BaseResponseBrokerageAccount.md)

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


## brokerageAccountsIdPut

> BaseResponseBrokerageAccount brokerageAccountsIdPut(id, credentials, lang)

Update brokerage account credentials

Update credentials (keys) for an existing brokerage account. Only provided fields will be updated (partial update). The system will validate all provided fields against config field rules and check uniqueness where required. Updated credentials will be validated via portfolio service API to ensure they are valid before updating. If credentials cannot be validated (400/500 response), the update will fail. New credentials can be added if the config field doesn\&#39;t exist yet. If accountId is provided, it will be used to update provider_user_id. Otherwise, if provider_user_id is provided, it will be used to update provider_user_id. Optionally, provide tradingClientId to link/unlink the account to/from a trading client (set to \&quot;null\&quot; to unlink). Only the authenticated user who owns the account can update credentials. **Limited field support**: This endpoint ONLY accepts &#x60;loanPackageId&#x60; and &#x60;otpType&#x60; (SELECT with SMART_OTP/SMS_OTP options) for brokerages that have these config fields defined. **Note**: OTP, accessToken, orderToken, and isSaveOtp fields are NOT accepted in this endpoint - they have separate dedicated update endpoints/forms. Field availability is determined dynamically based on config fields, not hardcoded brokerage codes.

### Example

```ts
import {
  Configuration,
  BrokerageAccountApi,
} from '';
import type { BrokerageAccountsIdPutRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new BrokerageAccountApi(config);

  const body = {
    // number | Brokerage Account ID
    id: 56,
    // BrokerageAccountRequestExample | Request body with config field values (partial update). Keys must match key_name from brokerage_account_config_fields. May include optional \'accountId\' (string) - if provided, will be used to update provider_user_id (priority over provider_user_id), optional \'provider_user_id\' (string) - if accountId is not provided and this is provided, will be used to update provider_user_id, optional \'tradingClientId\' (string) to link/unlink account to/from a trading client (use \'null\' to unlink), and optional \'tags\' (array of strings) for categorization.
    credentials: ...,
    // 'en' | 'vi' | Language code (en, vi) (optional)
    lang: lang_example,
  } satisfies BrokerageAccountsIdPutRequest;

  try {
    const data = await api.brokerageAccountsIdPut(body);
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
| **id** | `number` | Brokerage Account ID | [Defaults to `undefined`] |
| **credentials** | [BrokerageAccountRequestExample](BrokerageAccountRequestExample.md) | Request body with config field values (partial update). Keys must match key_name from brokerage_account_config_fields. May include optional \&#39;accountId\&#39; (string) - if provided, will be used to update provider_user_id (priority over provider_user_id), optional \&#39;provider_user_id\&#39; (string) - if accountId is not provided and this is provided, will be used to update provider_user_id, optional \&#39;tradingClientId\&#39; (string) to link/unlink account to/from a trading client (use \&#39;null\&#39; to unlink), and optional \&#39;tags\&#39; (array of strings) for categorization. | |
| **lang** | `en`, `vi` | Language code (en, vi) | [Optional] [Defaults to `&#39;en&#39;`] [Enum: en, vi] |

### Return type

[**BaseResponseBrokerageAccount**](BaseResponseBrokerageAccount.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Credentials updated successfully |  -  |
| **400** | Bad request - validation error, duplicate credential value, invalid credentials (portfolio service validation failed), or invalid tradingClientId\&quot; example({\&quot;error\&quot;:\&quot;Invalid API keys: the provided credentials could not be validated with the brokerage service\&quot;,\&quot;code\&quot;:400,\&quot;data\&quot;:null}) |  -  |
| **401** | Unauthorized - missing or invalid token |  -  |
| **404** | Not found - account not found, access denied, or trading client not found\&quot;                   example({\&quot;error\&quot;:\&quot;Brokerage account not found or access denied\&quot;,\&quot;code\&quot;:404,\&quot;data\&quot;:null}) |  -  |
| **503** | Service unavailable - portfolio service is temporarily unavailable\&quot;                    example({\&quot;error\&quot;:\&quot;Unable to validate credentials: the validation service is temporarily unavailable. Please try again later.\&quot;,\&quot;code\&quot;:503,\&quot;data\&quot;:null}) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

