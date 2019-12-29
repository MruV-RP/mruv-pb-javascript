// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright 2018 Google LLC.
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
var google_cloud_asset_v1beta1_asset_service_pb = require('../../../../google/cloud/asset/v1beta1/asset_service_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_cloud_asset_v1beta1_assets_pb = require('../../../../google/cloud/asset/v1beta1/assets_pb.js');
var google_longrunning_operations_pb = require('../../../../google/longrunning/operations_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_google_cloud_asset_v1beta1_BatchGetAssetsHistoryRequest(arg) {
  if (!(arg instanceof google_cloud_asset_v1beta1_asset_service_pb.BatchGetAssetsHistoryRequest)) {
    throw new Error('Expected argument of type google.cloud.asset.v1beta1.BatchGetAssetsHistoryRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_asset_v1beta1_BatchGetAssetsHistoryRequest(buffer_arg) {
  return google_cloud_asset_v1beta1_asset_service_pb.BatchGetAssetsHistoryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_asset_v1beta1_BatchGetAssetsHistoryResponse(arg) {
  if (!(arg instanceof google_cloud_asset_v1beta1_asset_service_pb.BatchGetAssetsHistoryResponse)) {
    throw new Error('Expected argument of type google.cloud.asset.v1beta1.BatchGetAssetsHistoryResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_asset_v1beta1_BatchGetAssetsHistoryResponse(buffer_arg) {
  return google_cloud_asset_v1beta1_asset_service_pb.BatchGetAssetsHistoryResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_asset_v1beta1_ExportAssetsRequest(arg) {
  if (!(arg instanceof google_cloud_asset_v1beta1_asset_service_pb.ExportAssetsRequest)) {
    throw new Error('Expected argument of type google.cloud.asset.v1beta1.ExportAssetsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_asset_v1beta1_ExportAssetsRequest(buffer_arg) {
  return google_cloud_asset_v1beta1_asset_service_pb.ExportAssetsRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


// Asset service definition.
var AssetServiceService = exports.AssetServiceService = {
  // Exports assets with time and resource types to a given Cloud Storage
  // location. The output format is newline-delimited JSON.
  // This API implements the
  // [google.longrunning.Operation][google.longrunning.Operation] API allowing
  // you to keep track of the export.
  exportAssets: {
    path: '/google.cloud.asset.v1beta1.AssetService/ExportAssets',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_asset_v1beta1_asset_service_pb.ExportAssetsRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_cloud_asset_v1beta1_ExportAssetsRequest,
    requestDeserialize: deserialize_google_cloud_asset_v1beta1_ExportAssetsRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Batch gets the update history of assets that overlap a time window.
  // For RESOURCE content, this API outputs history with asset in both
  // non-delete or deleted status.
  // For IAM_POLICY content, this API outputs history when the asset and its
  // attached IAM POLICY both exist. This can create gaps in the output history.
  batchGetAssetsHistory: {
    path: '/google.cloud.asset.v1beta1.AssetService/BatchGetAssetsHistory',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_asset_v1beta1_asset_service_pb.BatchGetAssetsHistoryRequest,
    responseType: google_cloud_asset_v1beta1_asset_service_pb.BatchGetAssetsHistoryResponse,
    requestSerialize: serialize_google_cloud_asset_v1beta1_BatchGetAssetsHistoryRequest,
    requestDeserialize: deserialize_google_cloud_asset_v1beta1_BatchGetAssetsHistoryRequest,
    responseSerialize: serialize_google_cloud_asset_v1beta1_BatchGetAssetsHistoryResponse,
    responseDeserialize: deserialize_google_cloud_asset_v1beta1_BatchGetAssetsHistoryResponse,
  },
};

exports.AssetServiceClient = grpc.makeGenericClientConstructor(AssetServiceService);
