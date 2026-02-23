# BrokerageAccountConfigApi

All URIs are relative to */api/v2*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**brokerageConfigFieldsBrokerageIdGet**](BrokerageAccountConfigApi.md#brokerageconfigfieldsbrokerageidget) | **GET** /brokerage-config-fields/{brokerage_id} | Get configuration fields for a brokerage by ID |
| [**brokeragesCodeConfigFieldsGet**](BrokerageAccountConfigApi.md#brokeragescodeconfigfieldsget) | **GET** /brokerages/{code}/config-fields | Get configuration fields for a brokerage |



## brokerageConfigFieldsBrokerageIdGet

> BaseResponseBrokerageaccountconfigJSONSchemaResponse1 brokerageConfigFieldsBrokerageIdGet(brokerageId, lang)

Get configuration fields for a brokerage by ID

Get all configuration fields (form fields) required to create an account for a specific brokerage using brokerage ID. Returns JSON Schema format for easy FE validation. Returns translated content based on lang header.

### Example

```ts
import {
  Configuration,
  BrokerageAccountConfigApi,
} from '';
import type { BrokerageConfigFieldsBrokerageIdGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new BrokerageAccountConfigApi(config);

  const body = {
    // number | Brokerage ID
    brokerageId: 56,
    // 'en' | 'vi' | Language code (en, vi) (optional)
    lang: lang_example,
  } satisfies BrokerageConfigFieldsBrokerageIdGetRequest;

  try {
    const data = await api.brokerageConfigFieldsBrokerageIdGet(body);
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
| **brokerageId** | `number` | Brokerage ID | [Defaults to `undefined`] |
| **lang** | `en`, `vi` | Language code (en, vi) | [Optional] [Defaults to `&#39;en&#39;`] [Enum: en, vi] |

### Return type

[**BaseResponseBrokerageaccountconfigJSONSchemaResponse1**](BaseResponseBrokerageaccountconfigJSONSchemaResponse1.md)

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


## brokeragesCodeConfigFieldsGet

> BaseResponseBrokerageaccountconfigJSONSchemaResponse1 brokeragesCodeConfigFieldsGet(code, lang)

Get configuration fields for a brokerage

Get all configuration fields (form fields) required to create an account for a specific brokerage. Returns JSON Schema format for easy FE validation. Returns translated content based on lang header.

### Example

```ts
import {
  Configuration,
  BrokerageAccountConfigApi,
} from '';
import type { BrokeragesCodeConfigFieldsGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new BrokerageAccountConfigApi(config);

  const body = {
    // string | Brokerage Code (e.g., BINANCE, OKX)
    code: code_example,
    // 'en' | 'vi' | Language code (en, vi) (optional)
    lang: lang_example,
  } satisfies BrokeragesCodeConfigFieldsGetRequest;

  try {
    const data = await api.brokeragesCodeConfigFieldsGet(body);
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
| **code** | `string` | Brokerage Code (e.g., BINANCE, OKX) | [Defaults to `undefined`] |
| **lang** | `en`, `vi` | Language code (en, vi) | [Optional] [Defaults to `&#39;en&#39;`] [Enum: en, vi] |

### Return type

[**BaseResponseBrokerageaccountconfigJSONSchemaResponse1**](BaseResponseBrokerageaccountconfigJSONSchemaResponse1.md)

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

