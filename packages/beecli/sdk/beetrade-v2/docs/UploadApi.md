# UploadApi

All URIs are relative to */api/v2*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**uploadPresignedUrlPost**](UploadApi.md#uploadpresignedurlpost) | **POST** /upload/presigned-url | Get presigned upload URL |



## uploadPresignedUrlPost

> CoreUploadTransportHttpGetPresignedUploadURLResponse uploadPresignedUrlPost(request)

Get presigned upload URL

Get a presigned URL for uploading files to S3. The folder parameter determines upload path.

### Example

```ts
import {
  Configuration,
  UploadApi,
} from '';
import type { UploadPresignedUrlPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new UploadApi(config);

  const body = {
    // GetPresignedUploadURLRequest | Get presigned upload URL request
    request: ...,
  } satisfies UploadPresignedUrlPostRequest;

  try {
    const data = await api.uploadPresignedUrlPost(body);
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
| **request** | [GetPresignedUploadURLRequest](GetPresignedUploadURLRequest.md) | Get presigned upload URL request | |

### Return type

[**CoreUploadTransportHttpGetPresignedUploadURLResponse**](CoreUploadTransportHttpGetPresignedUploadURLResponse.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

