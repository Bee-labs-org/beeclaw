# WatchlistsApi

All URIs are relative to */api/v2*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**watchListsGet**](WatchlistsApi.md#watchlistsget) | **GET** /watch-lists | List Watch Lists |
| [**watchListsIdDelete**](WatchlistsApi.md#watchlistsiddelete) | **DELETE** /watch-lists/{id} | Delete Watch List |
| [**watchListsIdGet**](WatchlistsApi.md#watchlistsidget) | **GET** /watch-lists/{id} | Get Watch List by ID |
| [**watchListsIdItemsBulkPost**](WatchlistsApi.md#watchlistsiditemsbulkpost) | **POST** /watch-lists/{id}/items/bulk | Bulk Add Stock Items |
| [**watchListsIdItemsDeletePost**](WatchlistsApi.md#watchlistsiditemsdeletepost) | **POST** /watch-lists/{id}/items/delete | Bulk Delete Stock Items |
| [**watchListsIdItemsGet**](WatchlistsApi.md#watchlistsiditemsget) | **GET** /watch-lists/{id}/items | Get Watch List Items |
| [**watchListsIdItemsItemIdDelete**](WatchlistsApi.md#watchlistsiditemsitemiddelete) | **DELETE** /watch-lists/{id}/items/{itemId} | Delete Stock Item |
| [**watchListsIdItemsItemIdGet**](WatchlistsApi.md#watchlistsiditemsitemidget) | **GET** /watch-lists/{id}/items/{itemId} | Get Stock Item by ID |
| [**watchListsIdItemsItemIdPut**](WatchlistsApi.md#watchlistsiditemsitemidput) | **PUT** /watch-lists/{id}/items/{itemId} | Update Stock Item |
| [**watchListsIdItemsPost**](WatchlistsApi.md#watchlistsiditemspost) | **POST** /watch-lists/{id}/items | Add Stock Item to Watch List |
| [**watchListsIdItemsReorderPut**](WatchlistsApi.md#watchlistsiditemsreorderput) | **PUT** /watch-lists/{id}/items/reorder | Reorder Stock Items |
| [**watchListsIdPut**](WatchlistsApi.md#watchlistsidput) | **PUT** /watch-lists/{id} | Update Watch List |
| [**watchListsPost**](WatchlistsApi.md#watchlistspost) | **POST** /watch-lists | Create Watch List |



## watchListsGet

> CoreWatchlistTransportHttpListWatchListsResponse watchListsGet(page, pageSize)

List Watch Lists

Get paginated list of watch lists for the authenticated user

### Example

```ts
import {
  Configuration,
  WatchlistsApi,
} from '';
import type { WatchListsGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new WatchlistsApi(config);

  const body = {
    // number | Page number (optional)
    page: 56,
    // number | Items per page (optional)
    pageSize: 56,
  } satisfies WatchListsGetRequest;

  try {
    const data = await api.watchListsGet(body);
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

### Return type

[**CoreWatchlistTransportHttpListWatchListsResponse**](CoreWatchlistTransportHttpListWatchListsResponse.md)

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


## watchListsIdDelete

> watchListsIdDelete(id)

Delete Watch List

Delete a watch list

### Example

```ts
import {
  Configuration,
  WatchlistsApi,
} from '';
import type { WatchListsIdDeleteRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new WatchlistsApi(config);

  const body = {
    // number | Watch List ID
    id: 56,
  } satisfies WatchListsIdDeleteRequest;

  try {
    const data = await api.watchListsIdDelete(body);
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
| **id** | `number` | Watch List ID | [Defaults to `undefined`] |

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
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## watchListsIdGet

> CoreWatchlistTransportHttpGetWatchListResponse watchListsIdGet(id)

Get Watch List by ID

Get a specific watch list by ID

### Example

```ts
import {
  Configuration,
  WatchlistsApi,
} from '';
import type { WatchListsIdGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new WatchlistsApi(config);

  const body = {
    // number | Watch List ID
    id: 56,
  } satisfies WatchListsIdGetRequest;

  try {
    const data = await api.watchListsIdGet(body);
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
| **id** | `number` | Watch List ID | [Defaults to `undefined`] |

### Return type

[**CoreWatchlistTransportHttpGetWatchListResponse**](CoreWatchlistTransportHttpGetWatchListResponse.md)

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


## watchListsIdItemsBulkPost

> CoreWatchlistTransportHttpBulkCreateItemsResponse watchListsIdItemsBulkPost(id, request)

Bulk Add Stock Items

Add multiple stock items to a watch list

### Example

```ts
import {
  Configuration,
  WatchlistsApi,
} from '';
import type { WatchListsIdItemsBulkPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new WatchlistsApi(config);

  const body = {
    // number | Watch List ID
    id: 56,
    // CoreWatchlistTransportHttpBulkCreateItemsRequest | Bulk stock items request
    request: ...,
  } satisfies WatchListsIdItemsBulkPostRequest;

  try {
    const data = await api.watchListsIdItemsBulkPost(body);
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
| **id** | `number` | Watch List ID | [Defaults to `undefined`] |
| **request** | [CoreWatchlistTransportHttpBulkCreateItemsRequest](CoreWatchlistTransportHttpBulkCreateItemsRequest.md) | Bulk stock items request | |

### Return type

[**CoreWatchlistTransportHttpBulkCreateItemsResponse**](CoreWatchlistTransportHttpBulkCreateItemsResponse.md)

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


## watchListsIdItemsDeletePost

> watchListsIdItemsDeletePost(id, request)

Bulk Delete Stock Items

Delete multiple items from a watch list

### Example

```ts
import {
  Configuration,
  WatchlistsApi,
} from '';
import type { WatchListsIdItemsDeletePostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new WatchlistsApi(config);

  const body = {
    // number | Watch List ID
    id: 56,
    // CoreWatchlistTransportHttpBulkDeleteItemsRequest | Bulk delete items request
    request: ...,
  } satisfies WatchListsIdItemsDeletePostRequest;

  try {
    const data = await api.watchListsIdItemsDeletePost(body);
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
| **id** | `number` | Watch List ID | [Defaults to `undefined`] |
| **request** | [CoreWatchlistTransportHttpBulkDeleteItemsRequest](CoreWatchlistTransportHttpBulkDeleteItemsRequest.md) | Bulk delete items request | |

### Return type

`void` (Empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## watchListsIdItemsGet

> BaseResponseArrayStockItemWatchList watchListsIdItemsGet(id)

Get Watch List Items

Get all items in a watch list

### Example

```ts
import {
  Configuration,
  WatchlistsApi,
} from '';
import type { WatchListsIdItemsGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new WatchlistsApi(config);

  const body = {
    // number | Watch List ID
    id: 56,
  } satisfies WatchListsIdItemsGetRequest;

  try {
    const data = await api.watchListsIdItemsGet(body);
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
| **id** | `number` | Watch List ID | [Defaults to `undefined`] |

### Return type

[**BaseResponseArrayStockItemWatchList**](BaseResponseArrayStockItemWatchList.md)

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


## watchListsIdItemsItemIdDelete

> watchListsIdItemsItemIdDelete(id, itemId)

Delete Stock Item

Remove a stock item from watch list

### Example

```ts
import {
  Configuration,
  WatchlistsApi,
} from '';
import type { WatchListsIdItemsItemIdDeleteRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new WatchlistsApi(config);

  const body = {
    // number | Watch List ID
    id: 56,
    // number | Stock Item ID
    itemId: 56,
  } satisfies WatchListsIdItemsItemIdDeleteRequest;

  try {
    const data = await api.watchListsIdItemsItemIdDelete(body);
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
| **id** | `number` | Watch List ID | [Defaults to `undefined`] |
| **itemId** | `number` | Stock Item ID | [Defaults to `undefined`] |

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
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## watchListsIdItemsItemIdGet

> CoreWatchlistTransportHttpGetStockItemResponse watchListsIdItemsItemIdGet(id, itemId)

Get Stock Item by ID

Get a specific stock item by ID

### Example

```ts
import {
  Configuration,
  WatchlistsApi,
} from '';
import type { WatchListsIdItemsItemIdGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new WatchlistsApi(config);

  const body = {
    // number | Watch List ID
    id: 56,
    // number | Stock Item ID
    itemId: 56,
  } satisfies WatchListsIdItemsItemIdGetRequest;

  try {
    const data = await api.watchListsIdItemsItemIdGet(body);
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
| **id** | `number` | Watch List ID | [Defaults to `undefined`] |
| **itemId** | `number` | Stock Item ID | [Defaults to `undefined`] |

### Return type

[**CoreWatchlistTransportHttpGetStockItemResponse**](CoreWatchlistTransportHttpGetStockItemResponse.md)

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


## watchListsIdItemsItemIdPut

> CoreWatchlistTransportHttpUpdateItemResponse watchListsIdItemsItemIdPut(id, itemId, request)

Update Stock Item

Update an existing stock item

### Example

```ts
import {
  Configuration,
  WatchlistsApi,
} from '';
import type { WatchListsIdItemsItemIdPutRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new WatchlistsApi(config);

  const body = {
    // number | Watch List ID
    id: 56,
    // number | Stock Item ID
    itemId: 56,
    // CoreWatchlistTransportHttpUpdateItemRequest | Stock item update request
    request: ...,
  } satisfies WatchListsIdItemsItemIdPutRequest;

  try {
    const data = await api.watchListsIdItemsItemIdPut(body);
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
| **id** | `number` | Watch List ID | [Defaults to `undefined`] |
| **itemId** | `number` | Stock Item ID | [Defaults to `undefined`] |
| **request** | [CoreWatchlistTransportHttpUpdateItemRequest](CoreWatchlistTransportHttpUpdateItemRequest.md) | Stock item update request | |

### Return type

[**CoreWatchlistTransportHttpUpdateItemResponse**](CoreWatchlistTransportHttpUpdateItemResponse.md)

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


## watchListsIdItemsPost

> CoreWatchlistTransportHttpCreateItemResponse watchListsIdItemsPost(id, request)

Add Stock Item to Watch List

Add a new stock item to a watch list

### Example

```ts
import {
  Configuration,
  WatchlistsApi,
} from '';
import type { WatchListsIdItemsPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new WatchlistsApi(config);

  const body = {
    // number | Watch List ID
    id: 56,
    // CoreWatchlistTransportHttpCreateItemRequest | Stock item creation request
    request: ...,
  } satisfies WatchListsIdItemsPostRequest;

  try {
    const data = await api.watchListsIdItemsPost(body);
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
| **id** | `number` | Watch List ID | [Defaults to `undefined`] |
| **request** | [CoreWatchlistTransportHttpCreateItemRequest](CoreWatchlistTransportHttpCreateItemRequest.md) | Stock item creation request | |

### Return type

[**CoreWatchlistTransportHttpCreateItemResponse**](CoreWatchlistTransportHttpCreateItemResponse.md)

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


## watchListsIdItemsReorderPut

> watchListsIdItemsReorderPut(id, request)

Reorder Stock Items

Reorder items in a watch list

### Example

```ts
import {
  Configuration,
  WatchlistsApi,
} from '';
import type { WatchListsIdItemsReorderPutRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new WatchlistsApi(config);

  const body = {
    // number | Watch List ID
    id: 56,
    // CoreWatchlistTransportHttpReorderItemsRequest | Reorder items request
    request: ...,
  } satisfies WatchListsIdItemsReorderPutRequest;

  try {
    const data = await api.watchListsIdItemsReorderPut(body);
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
| **id** | `number` | Watch List ID | [Defaults to `undefined`] |
| **request** | [CoreWatchlistTransportHttpReorderItemsRequest](CoreWatchlistTransportHttpReorderItemsRequest.md) | Reorder items request | |

### Return type

`void` (Empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## watchListsIdPut

> CoreWatchlistTransportHttpUpdateWatchListResponse watchListsIdPut(id, request)

Update Watch List

Update an existing watch list

### Example

```ts
import {
  Configuration,
  WatchlistsApi,
} from '';
import type { WatchListsIdPutRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new WatchlistsApi(config);

  const body = {
    // number | Watch List ID
    id: 56,
    // CoreWatchlistTransportHttpUpdateWatchListRequest | Watch list update request
    request: ...,
  } satisfies WatchListsIdPutRequest;

  try {
    const data = await api.watchListsIdPut(body);
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
| **id** | `number` | Watch List ID | [Defaults to `undefined`] |
| **request** | [CoreWatchlistTransportHttpUpdateWatchListRequest](CoreWatchlistTransportHttpUpdateWatchListRequest.md) | Watch list update request | |

### Return type

[**CoreWatchlistTransportHttpUpdateWatchListResponse**](CoreWatchlistTransportHttpUpdateWatchListResponse.md)

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


## watchListsPost

> CoreWatchlistTransportHttpCreateWatchListResponse watchListsPost(request)

Create Watch List

Create a new watch list for the authenticated user

### Example

```ts
import {
  Configuration,
  WatchlistsApi,
} from '';
import type { WatchListsPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new WatchlistsApi(config);

  const body = {
    // CoreWatchlistTransportHttpCreateWatchListRequest | Watch list creation request
    request: ...,
  } satisfies WatchListsPostRequest;

  try {
    const data = await api.watchListsPost(body);
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
| **request** | [CoreWatchlistTransportHttpCreateWatchListRequest](CoreWatchlistTransportHttpCreateWatchListRequest.md) | Watch list creation request | |

### Return type

[**CoreWatchlistTransportHttpCreateWatchListResponse**](CoreWatchlistTransportHttpCreateWatchListResponse.md)

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

