# MarketplaceApi

All URIs are relative to */api/v2*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**marketplaceClonePost**](MarketplaceApi.md#marketplaceclonepost) | **POST** /marketplace/clone | Clone marketplace strategy |
| [**marketplaceCreatePost**](MarketplaceApi.md#marketplacecreatepost) | **POST** /marketplace/create | Create marketplace item |
| [**marketplaceIdDelete**](MarketplaceApi.md#marketplaceiddelete) | **DELETE** /marketplace/{id} | Delete marketplace item |
| [**marketplaceIdGet**](MarketplaceApi.md#marketplaceidget) | **GET** /marketplace/{id} | Get marketplace item by ID |
| [**marketplaceIdPut**](MarketplaceApi.md#marketplaceidput) | **PUT** /marketplace/{id} | Update marketplace item |
| [**marketplaceKeySearchGet**](MarketplaceApi.md#marketplacekeysearchget) | **GET** /marketplace/key-search | Get marketplace search keys |
| [**marketplaceMyStrategiesGet**](MarketplaceApi.md#marketplacemystrategiesget) | **GET** /marketplace/my-strategies | Get my marketplace strategies |
| [**marketplacePost**](MarketplaceApi.md#marketplacepost) | **POST** /marketplace | List marketplace strategies |



## marketplaceClonePost

> CoreMarketplaceTransportHttpCloneStrategyResponse marketplaceClonePost(request)

Clone marketplace strategy

Clone a marketplace strategy to user\&#39;s own strategies

### Example

```ts
import {
  Configuration,
  MarketplaceApi,
} from '';
import type { MarketplaceClonePostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new MarketplaceApi(config);

  const body = {
    // CloneMarketplaceRequest | Clone strategy request
    request: ...,
  } satisfies MarketplaceClonePostRequest;

  try {
    const data = await api.marketplaceClonePost(body);
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
| **request** | [CloneMarketplaceRequest](CloneMarketplaceRequest.md) | Clone strategy request | |

### Return type

[**CoreMarketplaceTransportHttpCloneStrategyResponse**](CoreMarketplaceTransportHttpCloneStrategyResponse.md)

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
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## marketplaceCreatePost

> CoreMarketplaceTransportHttpCreateMarketplaceItemResponse marketplaceCreatePost(request)

Create marketplace item

Publish a strategy to marketplace with backtest results (using trading run ID)

### Example

```ts
import {
  Configuration,
  MarketplaceApi,
} from '';
import type { MarketplaceCreatePostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new MarketplaceApi(config);

  const body = {
    // CreateMarketplaceRequest | Create marketplace item request
    request: ...,
  } satisfies MarketplaceCreatePostRequest;

  try {
    const data = await api.marketplaceCreatePost(body);
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
| **request** | [CreateMarketplaceRequest](CreateMarketplaceRequest.md) | Create marketplace item request | |

### Return type

[**CoreMarketplaceTransportHttpCreateMarketplaceItemResponse**](CoreMarketplaceTransportHttpCreateMarketplaceItemResponse.md)

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
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## marketplaceIdDelete

> object marketplaceIdDelete(id)

Delete marketplace item

Soft delete a marketplace item (owner only)

### Example

```ts
import {
  Configuration,
  MarketplaceApi,
} from '';
import type { MarketplaceIdDeleteRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new MarketplaceApi(config);

  const body = {
    // number | Marketplace item ID
    id: 56,
  } satisfies MarketplaceIdDeleteRequest;

  try {
    const data = await api.marketplaceIdDelete(body);
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
| **id** | `number` | Marketplace item ID | [Defaults to `undefined`] |

### Return type

**object**

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
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## marketplaceIdGet

> CoreMarketplaceTransportHttpGetMarketplaceStrategyResponse marketplaceIdGet(id)

Get marketplace item by ID

Get detailed information about a marketplace item

### Example

```ts
import {
  Configuration,
  MarketplaceApi,
} from '';
import type { MarketplaceIdGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new MarketplaceApi(config);

  const body = {
    // number | Marketplace item ID
    id: 56,
  } satisfies MarketplaceIdGetRequest;

  try {
    const data = await api.marketplaceIdGet(body);
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
| **id** | `number` | Marketplace item ID | [Defaults to `undefined`] |

### Return type

[**CoreMarketplaceTransportHttpGetMarketplaceStrategyResponse**](CoreMarketplaceTransportHttpGetMarketplaceStrategyResponse.md)

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
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## marketplaceIdPut

> CoreMarketplaceTransportHttpUpdateMarketplaceItemResponse marketplaceIdPut(id, request)

Update marketplace item

Update a published marketplace item (owner only)

### Example

```ts
import {
  Configuration,
  MarketplaceApi,
} from '';
import type { MarketplaceIdPutRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new MarketplaceApi(config);

  const body = {
    // number | Marketplace item ID
    id: 56,
    // UpdateMarketplaceRequest | Update marketplace item request
    request: ...,
  } satisfies MarketplaceIdPutRequest;

  try {
    const data = await api.marketplaceIdPut(body);
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
| **id** | `number` | Marketplace item ID | [Defaults to `undefined`] |
| **request** | [UpdateMarketplaceRequest](UpdateMarketplaceRequest.md) | Update marketplace item request | |

### Return type

[**CoreMarketplaceTransportHttpUpdateMarketplaceItemResponse**](CoreMarketplaceTransportHttpUpdateMarketplaceItemResponse.md)

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
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## marketplaceKeySearchGet

> CoreMarketplaceTransportHttpGetSearchKeysResponse marketplaceKeySearchGet()

Get marketplace search keys

Get available search keys for filtering marketplace strategies by performance metrics and algorithm terms

### Example

```ts
import {
  Configuration,
  MarketplaceApi,
} from '';
import type { MarketplaceKeySearchGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new MarketplaceApi(config);

  try {
    const data = await api.marketplaceKeySearchGet();
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

[**CoreMarketplaceTransportHttpGetSearchKeysResponse**](CoreMarketplaceTransportHttpGetSearchKeysResponse.md)

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


## marketplaceMyStrategiesGet

> CoreMarketplaceTransportHttpGetMyListingsResponse marketplaceMyStrategiesGet()

Get my marketplace strategies

Get all marketplace strategies published by authenticated user

### Example

```ts
import {
  Configuration,
  MarketplaceApi,
} from '';
import type { MarketplaceMyStrategiesGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new MarketplaceApi(config);

  try {
    const data = await api.marketplaceMyStrategiesGet();
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

[**CoreMarketplaceTransportHttpGetMyListingsResponse**](CoreMarketplaceTransportHttpGetMyListingsResponse.md)

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
| **403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## marketplacePost

> CoreMarketplaceTransportHttpListMarketplaceStrategiesResponse marketplacePost(request)

List marketplace strategies

List marketplace strategies with filters and pagination

### Example

```ts
import {
  Configuration,
  MarketplaceApi,
} from '';
import type { MarketplacePostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new MarketplaceApi(config);

  const body = {
    // ListMarketplaceRequest | List marketplace request
    request: ...,
  } satisfies MarketplacePostRequest;

  try {
    const data = await api.marketplacePost(body);
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
| **request** | [ListMarketplaceRequest](ListMarketplaceRequest.md) | List marketplace request | |

### Return type

[**CoreMarketplaceTransportHttpListMarketplaceStrategiesResponse**](CoreMarketplaceTransportHttpListMarketplaceStrategiesResponse.md)

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
| **403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

