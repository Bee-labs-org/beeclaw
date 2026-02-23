# PaymentsApi

All URIs are relative to */api/v2*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**paymentsCheckoutPost**](PaymentsApi.md#paymentscheckoutpost) | **POST** /payments/checkout | Create checkout session |
| [**paymentsGet**](PaymentsApi.md#paymentsget) | **GET** /payments | Get payment history |
| [**paymentsIdGet**](PaymentsApi.md#paymentsidget) | **GET** /payments/{id} | Get payment by ID |



## paymentsCheckoutPost

> BaseResponseCreateCheckoutSessionResponse paymentsCheckoutPost(request)

Create checkout session

Creates a Stripe checkout session for specified plan pricing

### Example

```ts
import {
  Configuration,
  PaymentsApi,
} from '';
import type { PaymentsCheckoutPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new PaymentsApi(config);

  const body = {
    // CreateCheckoutSessionRequest | Checkout session request
    request: ...,
  } satisfies PaymentsCheckoutPostRequest;

  try {
    const data = await api.paymentsCheckoutPost(body);
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
| **request** | [CreateCheckoutSessionRequest](CreateCheckoutSessionRequest.md) | Checkout session request | |

### Return type

[**BaseResponseCreateCheckoutSessionResponse**](BaseResponseCreateCheckoutSessionResponse.md)

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


## paymentsGet

> GithubComBeeLabsOrgBeetradeApiInternalHandlerBaseResponsePaginationPaginatedResponseGithubComBeeLabsOrgBeetradeApiInternalCorePaymentPaymentWithDetails paymentsGet(userId, planId, status, startDate, endDate, page, pageSize)

Get payment history

Retrieves payment history for authenticated user

### Example

```ts
import {
  Configuration,
  PaymentsApi,
} from '';
import type { PaymentsGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new PaymentsApi(config);

  const body = {
    // number | User ID (admin only) (optional)
    userId: 56,
    // number | Filter by plan ID (optional)
    planId: 56,
    // string | Filter by status (SUCCESS, FAILED, CANCELLED, PENDING) (optional)
    status: status_example,
    // string | Filter by start date (YYYY-MM-DD) (optional)
    startDate: startDate_example,
    // string | Filter by end date (YYYY-MM-DD) (optional)
    endDate: endDate_example,
    // number | Page number (optional)
    page: 56,
    // number | Page size (optional)
    pageSize: 56,
  } satisfies PaymentsGetRequest;

  try {
    const data = await api.paymentsGet(body);
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
| **userId** | `number` | User ID (admin only) | [Optional] [Defaults to `undefined`] |
| **planId** | `number` | Filter by plan ID | [Optional] [Defaults to `undefined`] |
| **status** | `string` | Filter by status (SUCCESS, FAILED, CANCELLED, PENDING) | [Optional] [Defaults to `undefined`] |
| **startDate** | `string` | Filter by start date (YYYY-MM-DD) | [Optional] [Defaults to `undefined`] |
| **endDate** | `string` | Filter by end date (YYYY-MM-DD) | [Optional] [Defaults to `undefined`] |
| **page** | `number` | Page number | [Optional] [Defaults to `1`] |
| **pageSize** | `number` | Page size | [Optional] [Defaults to `20`] |

### Return type

[**GithubComBeeLabsOrgBeetradeApiInternalHandlerBaseResponsePaginationPaginatedResponseGithubComBeeLabsOrgBeetradeApiInternalCorePaymentPaymentWithDetails**](GithubComBeeLabsOrgBeetradeApiInternalHandlerBaseResponsePaginationPaginatedResponseGithubComBeeLabsOrgBeetradeApiInternalCorePaymentPaymentWithDetails.md)

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


## paymentsIdGet

> BaseResponsePaymentWithDetails paymentsIdGet(id)

Get payment by ID

Retrieves detailed information about a specific payment

### Example

```ts
import {
  Configuration,
  PaymentsApi,
} from '';
import type { PaymentsIdGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new PaymentsApi(config);

  const body = {
    // number | Payment ID
    id: 56,
  } satisfies PaymentsIdGetRequest;

  try {
    const data = await api.paymentsIdGet(body);
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
| **id** | `number` | Payment ID | [Defaults to `undefined`] |

### Return type

[**BaseResponsePaymentWithDetails**](BaseResponsePaymentWithDetails.md)

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
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

