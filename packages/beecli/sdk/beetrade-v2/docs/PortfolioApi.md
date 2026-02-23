# PortfolioApi

All URIs are relative to */api/v2*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**portfoliosAnalysisGet**](PortfolioApi.md#portfoliosanalysisget) | **GET** /portfolios/analysis | Get portfolio analysis |
| [**portfoliosAssetsSummaryGet**](PortfolioApi.md#portfoliosassetssummaryget) | **GET** /portfolios/assets-summary | Get assets summary |
| [**portfoliosSummaryGet**](PortfolioApi.md#portfoliossummaryget) | **GET** /portfolios/summary | Get portfolio summary |
| [**portfoliosSyncPost**](PortfolioApi.md#portfoliossyncpost) | **POST** /portfolios/sync | Sync portfolio manually |
| [**portfoliosTotalAssetsGet**](PortfolioApi.md#portfoliostotalassetsget) | **GET** /portfolios/total-assets | Get total assets |



## portfoliosAnalysisGet

> BaseResponseArrayPortfolioAnalysis portfoliosAnalysisGet()

Get portfolio analysis

Get detailed portfolio analysis including asset distribution and profit/loss metrics. Analysis is grouped by brokerage account.

### Example

```ts
import {
  Configuration,
  PortfolioApi,
} from '';
import type { PortfoliosAnalysisGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new PortfolioApi(config);

  try {
    const data = await api.portfoliosAnalysisGet();
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

[**BaseResponseArrayPortfolioAnalysis**](BaseResponseArrayPortfolioAnalysis.md)

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


## portfoliosAssetsSummaryGet

> BaseResponseArrayAssetsSummaryPoint portfoliosAssetsSummaryGet(currency, period, provider, tradingClientId)

Get assets summary

Get time series of total assets over a period. Returns array of daily totals for the requested period.

### Example

```ts
import {
  Configuration,
  PortfolioApi,
} from '';
import type { PortfoliosAssetsSummaryGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new PortfolioApi(config);

  const body = {
    // 'USD' | 'VND' | 'USDT' | Currency to display assets in
    currency: currency_example,
    // number | Number of days (1-100)
    period: 56,
    // string | Filter by provider code (optional)
    provider: provider_example,
    // number | Filter by trading client ID (optional)
    tradingClientId: 56,
  } satisfies PortfoliosAssetsSummaryGetRequest;

  try {
    const data = await api.portfoliosAssetsSummaryGet(body);
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
| **currency** | `USD`, `VND`, `USDT` | Currency to display assets in | [Defaults to `&#39;USD&#39;`] [Enum: USD, VND, USDT] |
| **period** | `number` | Number of days (1-100) | [Defaults to `30`] |
| **provider** | `string` | Filter by provider code | [Optional] [Defaults to `undefined`] |
| **tradingClientId** | `number` | Filter by trading client ID | [Optional] [Defaults to `undefined`] |

### Return type

[**BaseResponseArrayAssetsSummaryPoint**](BaseResponseArrayAssetsSummaryPoint.md)

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


## portfoliosSummaryGet

> BaseResponseArrayPortfolioSummaryItem portfoliosSummaryGet(currency, provider, tradingClientId)

Get portfolio summary

Get summary of all holdings across portfolio sorted by value. All values are converted to the requested currency.

### Example

```ts
import {
  Configuration,
  PortfolioApi,
} from '';
import type { PortfoliosSummaryGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new PortfolioApi(config);

  const body = {
    // 'USD' | 'VND' | 'USDT' | Currency to display holdings in
    currency: currency_example,
    // string | Filter by provider code (optional)
    provider: provider_example,
    // number | Filter by trading client ID (optional)
    tradingClientId: 56,
  } satisfies PortfoliosSummaryGetRequest;

  try {
    const data = await api.portfoliosSummaryGet(body);
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
| **currency** | `USD`, `VND`, `USDT` | Currency to display holdings in | [Defaults to `&#39;USD&#39;`] [Enum: USD, VND, USDT] |
| **provider** | `string` | Filter by provider code | [Optional] [Defaults to `undefined`] |
| **tradingClientId** | `number` | Filter by trading client ID | [Optional] [Defaults to `undefined`] |

### Return type

[**BaseResponseArrayPortfolioSummaryItem**](BaseResponseArrayPortfolioSummaryItem.md)

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


## portfoliosSyncPost

> BaseResponseSyncPortfolioResponse portfoliosSyncPost()

Sync portfolio manually

Manually sync portfolio data from all connected brokerage accounts. Creates a new portfolio history with type MANUAL. Rate limited to prevent too frequent syncs.

### Example

```ts
import {
  Configuration,
  PortfolioApi,
} from '';
import type { PortfoliosSyncPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new PortfolioApi(config);

  try {
    const data = await api.portfoliosSyncPost();
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

[**BaseResponseSyncPortfolioResponse**](BaseResponseSyncPortfolioResponse.md)

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
| **429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## portfoliosTotalAssetsGet

> BaseResponseTotalAssets portfoliosTotalAssetsGet(currency)

Get total assets

Get total assets across all brokerage accounts, grouped by brokerage. All values are converted to the requested currency.

### Example

```ts
import {
  Configuration,
  PortfolioApi,
} from '';
import type { PortfoliosTotalAssetsGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new PortfolioApi(config);

  const body = {
    // 'USD' | 'VND' | 'USDT' | Currency to display total assets in
    currency: currency_example,
  } satisfies PortfoliosTotalAssetsGetRequest;

  try {
    const data = await api.portfoliosTotalAssetsGet(body);
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
| **currency** | `USD`, `VND`, `USDT` | Currency to display total assets in | [Defaults to `&#39;USD&#39;`] [Enum: USD, VND, USDT] |

### Return type

[**BaseResponseTotalAssets**](BaseResponseTotalAssets.md)

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

