# NotificationsApi

All URIs are relative to */api/v2*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**notificationsGet**](NotificationsApi.md#notificationsget) | **GET** /notifications | Get notifications |
| [**notificationsMarkAsReadPatch**](NotificationsApi.md#notificationsmarkasreadpatch) | **PATCH** /notifications/mark-as-read | Mark all notifications as read |
| [**notificationsTestPushNotificationPost**](NotificationsApi.md#notificationstestpushnotificationpost) | **POST** /notifications/test-push-notification | Send test push notification |



## notificationsGet

> GetNotificationsResponse notificationsGet(page, pageSize, keyword, isRead, type, tradingId)

Get notifications

Get paginated notifications for the authenticated user

### Example

```ts
import {
  Configuration,
  NotificationsApi,
} from '';
import type { NotificationsGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new NotificationsApi(config);

  const body = {
    // number | Page number (optional)
    page: 56,
    // number | Items per page (optional)
    pageSize: 56,
    // string | Search keyword (optional)
    keyword: keyword_example,
    // boolean | Filter by read status (optional)
    isRead: true,
    // 'ALERT' | 'BACKTEST' | 'CUSTOM_BACKTEST' | 'CUSTOM_LIVE_TRADE' | Notification type (optional)
    type: type_example,
    // number | Filter by trading ID (optional)
    tradingId: 56,
  } satisfies NotificationsGetRequest;

  try {
    const data = await api.notificationsGet(body);
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
| **keyword** | `string` | Search keyword | [Optional] [Defaults to `undefined`] |
| **isRead** | `boolean` | Filter by read status | [Optional] [Defaults to `undefined`] |
| **type** | `ALERT`, `BACKTEST`, `CUSTOM_BACKTEST`, `CUSTOM_LIVE_TRADE` | Notification type | [Optional] [Defaults to `undefined`] [Enum: ALERT, BACKTEST, CUSTOM_BACKTEST, CUSTOM_LIVE_TRADE] |
| **tradingId** | `number` | Filter by trading ID | [Optional] [Defaults to `undefined`] |

### Return type

[**GetNotificationsResponse**](GetNotificationsResponse.md)

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


## notificationsMarkAsReadPatch

> MarkAsReadResponse notificationsMarkAsReadPatch()

Mark all notifications as read

Mark all unread notifications for the authenticated user as read

### Example

```ts
import {
  Configuration,
  NotificationsApi,
} from '';
import type { NotificationsMarkAsReadPatchRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new NotificationsApi(config);

  try {
    const data = await api.notificationsMarkAsReadPatch();
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

[**MarkAsReadResponse**](MarkAsReadResponse.md)

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


## notificationsTestPushNotificationPost

> { [key: string]: string; } notificationsTestPushNotificationPost(request)

Send test push notification

Send a test FCM push notification to the authenticated user\&#39;s devices

### Example

```ts
import {
  Configuration,
  NotificationsApi,
} from '';
import type { NotificationsTestPushNotificationPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new NotificationsApi(config);

  const body = {
    // TestPushNotificationRequest | Test push notification request
    request: ...,
  } satisfies NotificationsTestPushNotificationPostRequest;

  try {
    const data = await api.notificationsTestPushNotificationPost(body);
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
| **request** | [TestPushNotificationRequest](TestPushNotificationRequest.md) | Test push notification request | |

### Return type

**{ [key: string]: string; }**

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

