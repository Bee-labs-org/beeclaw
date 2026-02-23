# ResearchApi

All URIs are relative to */api/v2*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**strategiesResearchMineGet**](ResearchApi.md#strategiesresearchmineget) | **GET** /strategies/research/mine | List My Research Strategies |
| [**strategiesResearchSubmitAndBacktestPost**](ResearchApi.md#strategiesresearchsubmitandbacktestpost) | **POST** /strategies/research/submit-and-backtest | Submit Research and Backtest |



## strategiesResearchMineGet

> HTTPListResearchStrategiesResponse strategiesResearchMineGet(tags, status, startDate, endDate, minReturn, maxReturn, page, limit)

List My Research Strategies

Get paginated list of research strategies for the authenticated user with filtering options

### Example

```ts
import {
  Configuration,
  ResearchApi,
} from '';
import type { StrategiesResearchMineGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new ResearchApi(config);

  const body = {
    // Array<string> | Filter by tags (optional)
    tags: ...,
    // string | Filter by status (optional)
    status: status_example,
    // string | Filter by start date (ISO 8601) (optional)
    startDate: startDate_example,
    // string | Filter by end date (ISO 8601) (optional)
    endDate: endDate_example,
    // number | Filter by minimum return (optional)
    minReturn: 8.14,
    // number | Filter by maximum return (optional)
    maxReturn: 8.14,
    // number | Page number (optional)
    page: 56,
    // number | Items per page (optional)
    limit: 56,
  } satisfies StrategiesResearchMineGetRequest;

  try {
    const data = await api.strategiesResearchMineGet(body);
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
| **tags** | `Array<string>` | Filter by tags | [Optional] |
| **status** | `string` | Filter by status | [Optional] [Defaults to `undefined`] |
| **startDate** | `string` | Filter by start date (ISO 8601) | [Optional] [Defaults to `undefined`] |
| **endDate** | `string` | Filter by end date (ISO 8601) | [Optional] [Defaults to `undefined`] |
| **minReturn** | `number` | Filter by minimum return | [Optional] [Defaults to `undefined`] |
| **maxReturn** | `number` | Filter by maximum return | [Optional] [Defaults to `undefined`] |
| **page** | `number` | Page number | [Optional] [Defaults to `1`] |
| **limit** | `number` | Items per page | [Optional] [Defaults to `20`] |

### Return type

[**HTTPListResearchStrategiesResponse**](HTTPListResearchStrategiesResponse.md)

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
| **500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## strategiesResearchSubmitAndBacktestPost

> SubmitResearchResponse strategiesResearchSubmitAndBacktestPost(request)

Submit Research and Backtest

Submit a new research strategy and automatically run a backtest on it

### Example

```ts
import {
  Configuration,
  ResearchApi,
} from '';
import type { StrategiesResearchSubmitAndBacktestPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new ResearchApi(config);

  const body = {
    // HTTPSubmitResearchRequest | Research submission request
    request: ...,
  } satisfies StrategiesResearchSubmitAndBacktestPostRequest;

  try {
    const data = await api.strategiesResearchSubmitAndBacktestPost(body);
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
| **request** | [HTTPSubmitResearchRequest](HTTPSubmitResearchRequest.md) | Research submission request | |

### Return type

[**SubmitResearchResponse**](SubmitResearchResponse.md)

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
| **500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

