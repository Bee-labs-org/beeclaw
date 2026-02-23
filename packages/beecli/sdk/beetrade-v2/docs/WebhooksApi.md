# WebhooksApi

All URIs are relative to */api/v2*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**webhookPost**](WebhooksApi.md#webhookpost) | **POST** /webhook | Handle Webhook Event |



## webhookPost

> BaseResponseWebhookEventResponse webhookPost(event)

Handle Webhook Event

Receive and process workload status events from workload server

### Example

```ts
import {
  Configuration,
  WebhooksApi,
} from '';
import type { WebhookPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new WebhooksApi(config);

  const body = {
    // WebhookEvent | Webhook event payload
    event: ...,
  } satisfies WebhookPostRequest;

  try {
    const data = await api.webhookPost(body);
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
| **event** | [WebhookEvent](WebhookEvent.md) | Webhook event payload | |

### Return type

[**BaseResponseWebhookEventResponse**](BaseResponseWebhookEventResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **202** | Accepted |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

