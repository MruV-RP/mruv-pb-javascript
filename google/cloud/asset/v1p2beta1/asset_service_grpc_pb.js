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
var google_cloud_asset_v1p2beta1_asset_service_pb = require('../../../../google/cloud/asset/v1p2beta1/asset_service_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_cloud_asset_v1p2beta1_assets_pb = require('../../../../google/cloud/asset/v1p2beta1/assets_pb.js');
var google_longrunning_operations_pb = require('../../../../google/longrunning/operations_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_api_client_pb = require('../../../../google/api/client_pb.js');

function serialize_google_cloud_asset_v1p2beta1_BatchGetAssetsHistoryRequest(arg) {
  if (!(arg instanceof google_cloud_asset_v1p2beta1_asset_service_pb.BatchGetAssetsHistoryRequest)) {
    throw new Error('Expected argument of type google.cloud.asset.v1p2beta1.BatchGetAssetsHistoryRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_asset_v1p2beta1_BatchGetAssetsHistoryRequest(buffer_arg) {
  return google_cloud_asset_v1p2beta1_asset_service_pb.BatchGetAssetsHistoryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_asset_v1p2beta1_BatchGetAssetsHistoryResponse(arg) {
  if (!(arg instanceof google_cloud_asset_v1p2beta1_asset_service_pb.BatchGetAssetsHistoryResponse)) {
    throw new Error('Expected argument of type google.cloud.asset.v1p2beta1.BatchGetAssetsHistoryResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_asset_v1p2beta1_BatchGetAssetsHistoryResponse(buffer_arg) {
  return google_cloud_asset_v1p2beta1_asset_service_pb.BatchGetAssetsHistoryResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_asset_v1p2beta1_CreateFeedRequest(arg) {
  if (!(arg instanceof google_cloud_asset_v1p2beta1_asset_service_pb.CreateFeedRequest)) {
    throw new Error('Expected argument of type google.cloud.asset.v1p2beta1.CreateFeedRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_asset_v1p2beta1_CreateFeedRequest(buffer_arg) {
  return google_cloud_asset_v1p2beta1_asset_service_pb.CreateFeedRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_asset_v1p2beta1_DeleteFeedRequest(arg) {
  if (!(arg instanceof google_cloud_asset_v1p2beta1_asset_service_pb.DeleteFeedRequest)) {
    throw new Error('Expected argument of type google.cloud.asset.v1p2beta1.DeleteFeedRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_asset_v1p2beta1_DeleteFeedRequest(buffer_arg) {
  return google_cloud_asset_v1p2beta1_asset_service_pb.DeleteFeedRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_asset_v1p2beta1_ExportAssetsRequest(arg) {
  if (!(arg instanceof google_cloud_asset_v1p2beta1_asset_service_pb.ExportAssetsRequest)) {
    throw new Error('Expected argument of type google.cloud.asset.v1p2beta1.ExportAssetsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_asset_v1p2beta1_ExportAssetsRequest(buffer_arg) {
  return google_cloud_asset_v1p2beta1_asset_service_pb.ExportAssetsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_asset_v1p2beta1_Feed(arg) {
  if (!(arg instanceof google_cloud_asset_v1p2beta1_asset_service_pb.Feed)) {
    throw new Error('Expected argument of type google.cloud.asset.v1p2beta1.Feed');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_asset_v1p2beta1_Feed(buffer_arg) {
  return google_cloud_asset_v1p2beta1_asset_service_pb.Feed.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_asset_v1p2beta1_GetFeedRequest(arg) {
  if (!(arg instanceof google_cloud_asset_v1p2beta1_asset_service_pb.GetFeedRequest)) {
    throw new Error('Expected argument of type google.cloud.asset.v1p2beta1.GetFeedRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_asset_v1p2beta1_GetFeedRequest(buffer_arg) {
  return google_cloud_asset_v1p2beta1_asset_service_pb.GetFeedRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_asset_v1p2beta1_ListFeedsRequest(arg) {
  if (!(arg instanceof google_cloud_asset_v1p2beta1_asset_service_pb.ListFeedsRequest)) {
    throw new Error('Expected argument of type google.cloud.asset.v1p2beta1.ListFeedsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_asset_v1p2beta1_ListFeedsRequest(buffer_arg) {
  return google_cloud_asset_v1p2beta1_asset_service_pb.ListFeedsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_asset_v1p2beta1_ListFeedsResponse(arg) {
  if (!(arg instanceof google_cloud_asset_v1p2beta1_asset_service_pb.ListFeedsResponse)) {
    throw new Error('Expected argument of type google.cloud.asset.v1p2beta1.ListFeedsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_asset_v1p2beta1_ListFeedsResponse(buffer_arg) {
  return google_cloud_asset_v1p2beta1_asset_service_pb.ListFeedsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_asset_v1p2beta1_UpdateFeedRequest(arg) {
  if (!(arg instanceof google_cloud_asset_v1p2beta1_asset_service_pb.UpdateFeedRequest)) {
    throw new Error('Expected argument of type google.cloud.asset.v1p2beta1.UpdateFeedRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_asset_v1p2beta1_UpdateFeedRequest(buffer_arg) {
  return google_cloud_asset_v1p2beta1_asset_service_pb.UpdateFeedRequest.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}


// Asset service definition.
var AssetServiceService = exports.AssetServiceService = {
  // Exports assets with time and resource types to a given Cloud Storage
  // location. The output format is newline-delimited JSON.
  // This API implements the [google.longrunning.Operation][google.longrunning.Operation] API allowing you
  // to keep track of the export.
  exportAssets: {
    path: '/google.cloud.asset.v1p2beta1.AssetService/ExportAssets',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_asset_v1p2beta1_asset_service_pb.ExportAssetsRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_cloud_asset_v1p2beta1_ExportAssetsRequest,
    requestDeserialize: deserialize_google_cloud_asset_v1p2beta1_ExportAssetsRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Batch gets the update history of assets that overlap a time window.
  // For RESOURCE content, this API outputs history with asset in both
  // non-delete or deleted status.
  // For IAM_POLICY content, this API outputs history when the asset and its
  // attached IAM POLICY both exist. This can create gaps in the output history.
  batchGetAssetsHistory: {
    path: '/google.cloud.asset.v1p2beta1.AssetService/BatchGetAssetsHistory',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_asset_v1p2beta1_asset_service_pb.BatchGetAssetsHistoryRequest,
    responseType: google_cloud_asset_v1p2beta1_asset_service_pb.BatchGetAssetsHistoryResponse,
    requestSerialize: serialize_google_cloud_asset_v1p2beta1_BatchGetAssetsHistoryRequest,
    requestDeserialize: deserialize_google_cloud_asset_v1p2beta1_BatchGetAssetsHistoryRequest,
    responseSerialize: serialize_google_cloud_asset_v1p2beta1_BatchGetAssetsHistoryResponse,
    responseDeserialize: deserialize_google_cloud_asset_v1p2beta1_BatchGetAssetsHistoryResponse,
  },
  // Creates a feed in a parent project/folder/organization to listen to its
  // asset updates.
  createFeed: {
    path: '/google.cloud.asset.v1p2beta1.AssetService/CreateFeed',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_asset_v1p2beta1_asset_service_pb.CreateFeedRequest,
    responseType: google_cloud_asset_v1p2beta1_asset_service_pb.Feed,
    requestSerialize: serialize_google_cloud_asset_v1p2beta1_CreateFeedRequest,
    requestDeserialize: deserialize_google_cloud_asset_v1p2beta1_CreateFeedRequest,
    responseSerialize: serialize_google_cloud_asset_v1p2beta1_Feed,
    responseDeserialize: deserialize_google_cloud_asset_v1p2beta1_Feed,
  },
  // Gets details about an asset feed.
  getFeed: {
    path: '/google.cloud.asset.v1p2beta1.AssetService/GetFeed',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_asset_v1p2beta1_asset_service_pb.GetFeedRequest,
    responseType: google_cloud_asset_v1p2beta1_asset_service_pb.Feed,
    requestSerialize: serialize_google_cloud_asset_v1p2beta1_GetFeedRequest,
    requestDeserialize: deserialize_google_cloud_asset_v1p2beta1_GetFeedRequest,
    responseSerialize: serialize_google_cloud_asset_v1p2beta1_Feed,
    responseDeserialize: deserialize_google_cloud_asset_v1p2beta1_Feed,
  },
  // Lists all asset feeds in a parent project/folder/organization.
  listFeeds: {
    path: '/google.cloud.asset.v1p2beta1.AssetService/ListFeeds',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_asset_v1p2beta1_asset_service_pb.ListFeedsRequest,
    responseType: google_cloud_asset_v1p2beta1_asset_service_pb.ListFeedsResponse,
    requestSerialize: serialize_google_cloud_asset_v1p2beta1_ListFeedsRequest,
    requestDeserialize: deserialize_google_cloud_asset_v1p2beta1_ListFeedsRequest,
    responseSerialize: serialize_google_cloud_asset_v1p2beta1_ListFeedsResponse,
    responseDeserialize: deserialize_google_cloud_asset_v1p2beta1_ListFeedsResponse,
  },
  // Updates an asset feed configuration.
  updateFeed: {
    path: '/google.cloud.asset.v1p2beta1.AssetService/UpdateFeed',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_asset_v1p2beta1_asset_service_pb.UpdateFeedRequest,
    responseType: google_cloud_asset_v1p2beta1_asset_service_pb.Feed,
    requestSerialize: serialize_google_cloud_asset_v1p2beta1_UpdateFeedRequest,
    requestDeserialize: deserialize_google_cloud_asset_v1p2beta1_UpdateFeedRequest,
    responseSerialize: serialize_google_cloud_asset_v1p2beta1_Feed,
    responseDeserialize: deserialize_google_cloud_asset_v1p2beta1_Feed,
  },
  // Deletes an asset feed.
  deleteFeed: {
    path: '/google.cloud.asset.v1p2beta1.AssetService/DeleteFeed',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_asset_v1p2beta1_asset_service_pb.DeleteFeedRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_cloud_asset_v1p2beta1_DeleteFeedRequest,
    requestDeserialize: deserialize_google_cloud_asset_v1p2beta1_DeleteFeedRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.AssetServiceClient = grpc.makeGenericClientConstructor(AssetServiceService);
