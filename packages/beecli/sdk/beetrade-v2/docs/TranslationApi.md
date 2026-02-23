# TranslationApi

All URIs are relative to */api/v2*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**languagesGet**](TranslationApi.md#languagesget) | **GET** /languages | Get all languages |



## languagesGet

> BaseResponseArrayLanguage languagesGet(lang)

Get all languages

Get all active languages in the system

### Example

```ts
import {
  Configuration,
  TranslationApi,
} from '';
import type { LanguagesGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new TranslationApi(config);

  const body = {
    // 'en' | 'vi' | Language code (en, vi) (optional)
    lang: lang_example,
  } satisfies LanguagesGetRequest;

  try {
    const data = await api.languagesGet(body);
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

[**BaseResponseArrayLanguage**](BaseResponseArrayLanguage.md)

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

