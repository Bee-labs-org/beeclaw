# PricingPlansApi

All URIs are relative to */api/v2*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**billingPeriodsGet**](PricingPlansApi.md#billingperiodsget) | **GET** /billing-periods | Get billing periods |
| [**marketplaceCheckPlanGet**](PricingPlansApi.md#marketplacecheckplanget) | **GET** /marketplace/check-plan | Check marketplace plan eligibility |
| [**pricingPlansGet**](PricingPlansApi.md#pricingplansget) | **GET** /pricing-plans | Get all pricing plans with pricings |
| [**pricingPlansGroupedGet**](PricingPlansApi.md#pricingplansgroupedget) | **GET** /pricing-plans-grouped | Get pricing plans grouped by billing period |
| [**pricingPlansIdGet**](PricingPlansApi.md#pricingplansidget) | **GET** /pricing-plans/{id} | Get pricing plan by ID |



## billingPeriodsGet

> BaseResponseArrayBillingPeriod billingPeriodsGet()

Get billing periods

Get all available billing periods (monthly, quarterly, annual, etc.)

### Example

```ts
import {
  Configuration,
  PricingPlansApi,
} from '';
import type { BillingPeriodsGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new PricingPlansApi(config);

  try {
    const data = await api.billingPeriodsGet();
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

[**BaseResponseArrayBillingPeriod**](BaseResponseArrayBillingPeriod.md)

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


## marketplaceCheckPlanGet

> CorePricingplanTransportHttpMarketplacePlanCheckResponse marketplaceCheckPlanGet()

Check marketplace plan eligibility

Check if current plan supports marketplace features and get upgrade information

### Example

```ts
import {
  Configuration,
  PricingPlansApi,
} from '';
import type { MarketplaceCheckPlanGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new PricingPlansApi(config);

  try {
    const data = await api.marketplaceCheckPlanGet();
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

[**CorePricingplanTransportHttpMarketplacePlanCheckResponse**](CorePricingplanTransportHttpMarketplacePlanCheckResponse.md)

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


## pricingPlansGet

> BaseResponseArrayPricingPlanWithPricings pricingPlansGet(isActive, lang)

Get all pricing plans with pricings

Get all available pricing plans with their pricing options for different billing periods

### Example

```ts
import {
  Configuration,
  PricingPlansApi,
} from '';
import type { PricingPlansGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new PricingPlansApi(config);

  const body = {
    // boolean | Filter by active status (optional)
    isActive: true,
    // 'en' | 'vi' | Language code (en, vi) (optional)
    lang: lang_example,
  } satisfies PricingPlansGetRequest;

  try {
    const data = await api.pricingPlansGet(body);
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
| **isActive** | `boolean` | Filter by active status | [Optional] [Defaults to `undefined`] |
| **lang** | `en`, `vi` | Language code (en, vi) | [Optional] [Defaults to `&#39;en&#39;`] [Enum: en, vi] |

### Return type

[**BaseResponseArrayPricingPlanWithPricings**](BaseResponseArrayPricingPlanWithPricings.md)

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


## pricingPlansGroupedGet

> BaseResponseArrayPricingPlansGroupedItem pricingPlansGroupedGet()

Get pricing plans grouped by billing period

Get all pricing plans grouped by billing period for landing page display

### Example

```ts
import {
  Configuration,
  PricingPlansApi,
} from '';
import type { PricingPlansGroupedGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new PricingPlansApi();

  try {
    const data = await api.pricingPlansGroupedGet();
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

[**BaseResponseArrayPricingPlansGroupedItem**](BaseResponseArrayPricingPlansGroupedItem.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## pricingPlansIdGet

> BaseResponsePricingPlanWithPricings pricingPlansIdGet(id, lang)

Get pricing plan by ID

Get a specific pricing plan with all its pricing options

### Example

```ts
import {
  Configuration,
  PricingPlansApi,
} from '';
import type { PricingPlansIdGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new PricingPlansApi(config);

  const body = {
    // number | Plan ID
    id: 56,
    // 'en' | 'vi' | Language code (en, vi) (optional)
    lang: lang_example,
  } satisfies PricingPlansIdGetRequest;

  try {
    const data = await api.pricingPlansIdGet(body);
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
| **id** | `number` | Plan ID | [Defaults to `undefined`] |
| **lang** | `en`, `vi` | Language code (en, vi) | [Optional] [Defaults to `&#39;en&#39;`] [Enum: en, vi] |

### Return type

[**BaseResponsePricingPlanWithPricings**](BaseResponsePricingPlanWithPricings.md)

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

