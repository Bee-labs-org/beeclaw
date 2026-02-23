# MarketDataApi

All URIs are relative to */api/v2*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**marketDataHistoryGet**](MarketDataApi.md#marketdatahistoryget) | **GET** /market-data/history | Get OHLCV historical data |



## marketDataHistoryGet

> BaseResponseArrayOHLCVDataPoint marketDataHistoryGet(symbol, startTime, endTime, interval, limit)

Get OHLCV historical data

Get Open, High, Low, Close, Volume historical data for a symbol

### Example

```ts
import {
  Configuration,
  MarketDataApi,
} from '';
import type { MarketDataHistoryGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new MarketDataApi(config);

  const body = {
    // string | Symbol ticker
    symbol: symbol_example,
    // string | Start time (ISO 8601 format)
    startTime: startTime_example,
    // string | End time (ISO 8601 format)
    endTime: endTime_example,
    // '1m' | '5m' | '15m' | '1h' | '4h' | '1d' | '1w' | Time interval
    interval: interval_example,
    // number | Maximum number of points (optional)
    limit: 56,
  } satisfies MarketDataHistoryGetRequest;

  try {
    const data = await api.marketDataHistoryGet(body);
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
| **symbol** | `string` | Symbol ticker | [Defaults to `undefined`] |
| **startTime** | `string` | Start time (ISO 8601 format) | [Defaults to `undefined`] |
| **endTime** | `string` | End time (ISO 8601 format) | [Defaults to `undefined`] |
| **interval** | `1m`, `5m`, `15m`, `1h`, `4h`, `1d`, `1w` | Time interval | [Defaults to `undefined`] [Enum: 1m, 5m, 15m, 1h, 4h, 1d, 1w] |
| **limit** | `number` | Maximum number of points | [Optional] [Defaults to `undefined`] |

### Return type

[**BaseResponseArrayOHLCVDataPoint**](BaseResponseArrayOHLCVDataPoint.md)

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
| **500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

