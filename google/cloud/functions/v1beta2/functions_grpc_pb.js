// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright 2019 Google LLC.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
//
'use strict';
var grpc = require('grpc');
var google_cloud_functions_v1beta2_functions_pb = require('../../../../google/cloud/functions/v1beta2/functions_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_api_client_pb = require('../../../../google/api/client_pb.js');
var google_api_field_behavior_pb = require('../../../../google/api/field_behavior_pb.js');
var google_api_resource_pb = require('../../../../google/api/resource_pb.js');
var google_longrunning_operations_pb = require('../../../../google/longrunning/operations_pb.js');
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_google_cloud_functions_v1beta2_CallFunctionRequest(arg) {
  if (!(arg instanceof google_cloud_functions_v1beta2_functions_pb.CallFunctionRequest)) {
    throw new Error('Expected argument of type google.cloud.functions.v1beta2.CallFunctionRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_functions_v1beta2_CallFunctionRequest(buffer_arg) {
  return google_cloud_functions_v1beta2_functions_pb.CallFunctionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_functions_v1beta2_CallFunctionResponse(arg) {
  if (!(arg instanceof google_cloud_functions_v1beta2_functions_pb.CallFunctionResponse)) {
    throw new Error('Expected argument of type google.cloud.functions.v1beta2.CallFunctionResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_functions_v1beta2_CallFunctionResponse(buffer_arg) {
  return google_cloud_functions_v1beta2_functions_pb.CallFunctionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_functions_v1beta2_CloudFunction(arg) {
  if (!(arg instanceof google_cloud_functions_v1beta2_functions_pb.CloudFunction)) {
    throw new Error('Expected argument of type google.cloud.functions.v1beta2.CloudFunction');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_functions_v1beta2_CloudFunction(buffer_arg) {
  return google_cloud_functions_v1beta2_functions_pb.CloudFunction.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_functions_v1beta2_CreateFunctionRequest(arg) {
  if (!(arg instanceof google_cloud_functions_v1beta2_functions_pb.CreateFunctionRequest)) {
    throw new Error('Expected argument of type google.cloud.functions.v1beta2.CreateFunctionRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_functions_v1beta2_CreateFunctionRequest(buffer_arg) {
  return google_cloud_functions_v1beta2_functions_pb.CreateFunctionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_functions_v1beta2_DeleteFunctionRequest(arg) {
  if (!(arg instanceof google_cloud_functions_v1beta2_functions_pb.DeleteFunctionRequest)) {
    throw new Error('Expected argument of type google.cloud.functions.v1beta2.DeleteFunctionRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_functions_v1beta2_DeleteFunctionRequest(buffer_arg) {
  return google_cloud_functions_v1beta2_functions_pb.DeleteFunctionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_functions_v1beta2_GenerateDownloadUrlRequest(arg) {
  if (!(arg instanceof google_cloud_functions_v1beta2_functions_pb.GenerateDownloadUrlRequest)) {
    throw new Error('Expected argument of type google.cloud.functions.v1beta2.GenerateDownloadUrlRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_functions_v1beta2_GenerateDownloadUrlRequest(buffer_arg) {
  return google_cloud_functions_v1beta2_functions_pb.GenerateDownloadUrlRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_functions_v1beta2_GenerateDownloadUrlResponse(arg) {
  if (!(arg instanceof google_cloud_functions_v1beta2_functions_pb.GenerateDownloadUrlResponse)) {
    throw new Error('Expected argument of type google.cloud.functions.v1beta2.GenerateDownloadUrlResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_functions_v1beta2_GenerateDownloadUrlResponse(buffer_arg) {
  return google_cloud_functions_v1beta2_functions_pb.GenerateDownloadUrlResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_functions_v1beta2_GenerateUploadUrlRequest(arg) {
  if (!(arg instanceof google_cloud_functions_v1beta2_functions_pb.GenerateUploadUrlRequest)) {
    throw new Error('Expected argument of type google.cloud.functions.v1beta2.GenerateUploadUrlRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_functions_v1beta2_GenerateUploadUrlRequest(buffer_arg) {
  return google_cloud_functions_v1beta2_functions_pb.GenerateUploadUrlRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_functions_v1beta2_GenerateUploadUrlResponse(arg) {
  if (!(arg instanceof google_cloud_functions_v1beta2_functions_pb.GenerateUploadUrlResponse)) {
    throw new Error('Expected argument of type google.cloud.functions.v1beta2.GenerateUploadUrlResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_functions_v1beta2_GenerateUploadUrlResponse(buffer_arg) {
  return google_cloud_functions_v1beta2_functions_pb.GenerateUploadUrlResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_functions_v1beta2_GetFunctionRequest(arg) {
  if (!(arg instanceof google_cloud_functions_v1beta2_functions_pb.GetFunctionRequest)) {
    throw new Error('Expected argument of type google.cloud.functions.v1beta2.GetFunctionRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_functions_v1beta2_GetFunctionRequest(buffer_arg) {
  return google_cloud_functions_v1beta2_functions_pb.GetFunctionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_functions_v1beta2_ListFunctionsRequest(arg) {
  if (!(arg instanceof google_cloud_functions_v1beta2_functions_pb.ListFunctionsRequest)) {
    throw new Error('Expected argument of type google.cloud.functions.v1beta2.ListFunctionsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_functions_v1beta2_ListFunctionsRequest(buffer_arg) {
  return google_cloud_functions_v1beta2_functions_pb.ListFunctionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_functions_v1beta2_ListFunctionsResponse(arg) {
  if (!(arg instanceof google_cloud_functions_v1beta2_functions_pb.ListFunctionsResponse)) {
    throw new Error('Expected argument of type google.cloud.functions.v1beta2.ListFunctionsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_functions_v1beta2_ListFunctionsResponse(buffer_arg) {
  return google_cloud_functions_v1beta2_functions_pb.ListFunctionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_functions_v1beta2_UpdateFunctionRequest(arg) {
  if (!(arg instanceof google_cloud_functions_v1beta2_functions_pb.UpdateFunctionRequest)) {
    throw new Error('Expected argument of type google.cloud.functions.v1beta2.UpdateFunctionRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_functions_v1beta2_UpdateFunctionRequest(buffer_arg) {
  return google_cloud_functions_v1beta2_functions_pb.UpdateFunctionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_longrunning_Operation(arg) {
  if (!(arg instanceof google_longrunning_operations_pb.Operation)) {
    throw new Error('Expected argument of type google.longrunning.Operation');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_longrunning_Operation(buffer_arg) {
  return google_longrunning_operations_pb.Operation.deserializeBinary(new Uint8Array(buffer_arg));
}


// A service that application uses to manipulate triggers and functions.
var CloudFunctionsServiceService = exports.CloudFunctionsServiceService = {
  // Returns a list of functions that belong to the requested project.
  listFunctions: {
    path: '/google.cloud.functions.v1beta2.CloudFunctionsService/ListFunctions',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_functions_v1beta2_functions_pb.ListFunctionsRequest,
    responseType: google_cloud_functions_v1beta2_functions_pb.ListFunctionsResponse,
    requestSerialize: serialize_google_cloud_functions_v1beta2_ListFunctionsRequest,
    requestDeserialize: deserialize_google_cloud_functions_v1beta2_ListFunctionsRequest,
    responseSerialize: serialize_google_cloud_functions_v1beta2_ListFunctionsResponse,
    responseDeserialize: deserialize_google_cloud_functions_v1beta2_ListFunctionsResponse,
  },
  // Returns a function with the given name from the requested project.
  getFunction: {
    path: '/google.cloud.functions.v1beta2.CloudFunctionsService/GetFunction',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_functions_v1beta2_functions_pb.GetFunctionRequest,
    responseType: google_cloud_functions_v1beta2_functions_pb.CloudFunction,
    requestSerialize: serialize_google_cloud_functions_v1beta2_GetFunctionRequest,
    requestDeserialize: deserialize_google_cloud_functions_v1beta2_GetFunctionRequest,
    responseSerialize: serialize_google_cloud_functions_v1beta2_CloudFunction,
    responseDeserialize: deserialize_google_cloud_functions_v1beta2_CloudFunction,
  },
  // Creates a new function. If a function with the given name already exists in
  // the specified project, the long running operation will return
  // `ALREADY_EXISTS` error.
  createFunction: {
    path: '/google.cloud.functions.v1beta2.CloudFunctionsService/CreateFunction',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_functions_v1beta2_functions_pb.CreateFunctionRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_cloud_functions_v1beta2_CreateFunctionRequest,
    requestDeserialize: deserialize_google_cloud_functions_v1beta2_CreateFunctionRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Updates existing function.
  updateFunction: {
    path: '/google.cloud.functions.v1beta2.CloudFunctionsService/UpdateFunction',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_functions_v1beta2_functions_pb.UpdateFunctionRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_cloud_functions_v1beta2_UpdateFunctionRequest,
    requestDeserialize: deserialize_google_cloud_functions_v1beta2_UpdateFunctionRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Deletes a function with the given name from the specified project. If the
  // given function is used by some trigger, the trigger will be updated to
  // remove this function.
  deleteFunction: {
    path: '/google.cloud.functions.v1beta2.CloudFunctionsService/DeleteFunction',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_functions_v1beta2_functions_pb.DeleteFunctionRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_cloud_functions_v1beta2_DeleteFunctionRequest,
    requestDeserialize: deserialize_google_cloud_functions_v1beta2_DeleteFunctionRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Synchronously invokes a deployed Cloud Function. To be used for testing
  // purposes as very limited traffic is allowed. For more information on
  // the actual limits refer to [API Calls](
  // https://cloud.google.com/functions/quotas#rate_limits).
  callFunction: {
    path: '/google.cloud.functions.v1beta2.CloudFunctionsService/CallFunction',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_functions_v1beta2_functions_pb.CallFunctionRequest,
    responseType: google_cloud_functions_v1beta2_functions_pb.CallFunctionResponse,
    requestSerialize: serialize_google_cloud_functions_v1beta2_CallFunctionRequest,
    requestDeserialize: deserialize_google_cloud_functions_v1beta2_CallFunctionRequest,
    responseSerialize: serialize_google_cloud_functions_v1beta2_CallFunctionResponse,
    responseDeserialize: deserialize_google_cloud_functions_v1beta2_CallFunctionResponse,
  },
  // Returns a signed URL for uploading a function source code.
  // For more information about the signed URL usage see:
  // https://cloud.google.com/storage/docs/access-control/signed-urls
  // Once the function source code upload is complete, the used signed
  // URL should be provided in CreateFunction or UpdateFunction request
  // as a reference to the function source code.
  //
  // When uploading source code to the generated signed URL, please follow
  // these restrictions:
  //
  // * Source file type should be a zip file.
  // * Source file size should not exceed 100MB limit.
  // * No credentials should be attached - the signed URLs provide access to the
  //   target bucket using internal service identity; if credentials were
  //   attached, the identity from the credentials would be used, but that
  //   identity does not have permissions to upload files to the URL.
  //
  // When making a HTTP PUT request, these two headers need to be specified:
  //
  // * `content-type: application/zip`
  // * `x-goog-content-length-range: 0,104857600`
  //
  // And this header SHOULD NOT be specified:
  //
  // * `Authorization: Bearer YOUR_TOKEN`
  generateUploadUrl: {
    path: '/google.cloud.functions.v1beta2.CloudFunctionsService/GenerateUploadUrl',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_functions_v1beta2_functions_pb.GenerateUploadUrlRequest,
    responseType: google_cloud_functions_v1beta2_functions_pb.GenerateUploadUrlResponse,
    requestSerialize: serialize_google_cloud_functions_v1beta2_GenerateUploadUrlRequest,
    requestDeserialize: deserialize_google_cloud_functions_v1beta2_GenerateUploadUrlRequest,
    responseSerialize: serialize_google_cloud_functions_v1beta2_GenerateUploadUrlResponse,
    responseDeserialize: deserialize_google_cloud_functions_v1beta2_GenerateUploadUrlResponse,
  },
  // Returns a signed URL for downloading deployed function source code.
  // The URL is only valid for a limited period and should be used within
  // minutes after generation.
  // For more information about the signed URL usage see:
  // https://cloud.google.com/storage/docs/access-control/signed-urls
  generateDownloadUrl: {
    path: '/google.cloud.functions.v1beta2.CloudFunctionsService/GenerateDownloadUrl',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_functions_v1beta2_functions_pb.GenerateDownloadUrlRequest,
    responseType: google_cloud_functions_v1beta2_functions_pb.GenerateDownloadUrlResponse,
    requestSerialize: serialize_google_cloud_functions_v1beta2_GenerateDownloadUrlRequest,
    requestDeserialize: deserialize_google_cloud_functions_v1beta2_GenerateDownloadUrlRequest,
    responseSerialize: serialize_google_cloud_functions_v1beta2_GenerateDownloadUrlResponse,
    responseDeserialize: deserialize_google_cloud_functions_v1beta2_GenerateDownloadUrlResponse,
  },
};

exports.CloudFunctionsServiceClient = grpc.makeGenericClientConstructor(CloudFunctionsServiceService);
