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
var google_cloud_bigquery_v2_model_pb = require('../../../../google/cloud/bigquery/v2/model_pb.js');
var google_api_client_pb = require('../../../../google/api/client_pb.js');
var google_api_field_behavior_pb = require('../../../../google/api/field_behavior_pb.js');
var google_cloud_bigquery_v2_encryption_config_pb = require('../../../../google/cloud/bigquery/v2/encryption_config_pb.js');
var google_cloud_bigquery_v2_model_reference_pb = require('../../../../google/cloud/bigquery/v2/model_reference_pb.js');
var google_cloud_bigquery_v2_standard_sql_pb = require('../../../../google/cloud/bigquery/v2/standard_sql_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');

function serialize_google_cloud_bigquery_v2_DeleteModelRequest(arg) {
  if (!(arg instanceof google_cloud_bigquery_v2_model_pb.DeleteModelRequest)) {
    throw new Error('Expected argument of type google.cloud.bigquery.v2.DeleteModelRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_bigquery_v2_DeleteModelRequest(buffer_arg) {
  return google_cloud_bigquery_v2_model_pb.DeleteModelRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_bigquery_v2_GetModelRequest(arg) {
  if (!(arg instanceof google_cloud_bigquery_v2_model_pb.GetModelRequest)) {
    throw new Error('Expected argument of type google.cloud.bigquery.v2.GetModelRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_bigquery_v2_GetModelRequest(buffer_arg) {
  return google_cloud_bigquery_v2_model_pb.GetModelRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_bigquery_v2_ListModelsRequest(arg) {
  if (!(arg instanceof google_cloud_bigquery_v2_model_pb.ListModelsRequest)) {
    throw new Error('Expected argument of type google.cloud.bigquery.v2.ListModelsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_bigquery_v2_ListModelsRequest(buffer_arg) {
  return google_cloud_bigquery_v2_model_pb.ListModelsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_bigquery_v2_ListModelsResponse(arg) {
  if (!(arg instanceof google_cloud_bigquery_v2_model_pb.ListModelsResponse)) {
    throw new Error('Expected argument of type google.cloud.bigquery.v2.ListModelsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_bigquery_v2_ListModelsResponse(buffer_arg) {
  return google_cloud_bigquery_v2_model_pb.ListModelsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_bigquery_v2_Model(arg) {
  if (!(arg instanceof google_cloud_bigquery_v2_model_pb.Model)) {
    throw new Error('Expected argument of type google.cloud.bigquery.v2.Model');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_bigquery_v2_Model(buffer_arg) {
  return google_cloud_bigquery_v2_model_pb.Model.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_bigquery_v2_PatchModelRequest(arg) {
  if (!(arg instanceof google_cloud_bigquery_v2_model_pb.PatchModelRequest)) {
    throw new Error('Expected argument of type google.cloud.bigquery.v2.PatchModelRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_bigquery_v2_PatchModelRequest(buffer_arg) {
  return google_cloud_bigquery_v2_model_pb.PatchModelRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


var ModelServiceService = exports.ModelServiceService = {
  // Gets the specified model resource by model ID.
  getModel: {
    path: '/google.cloud.bigquery.v2.ModelService/GetModel',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_bigquery_v2_model_pb.GetModelRequest,
    responseType: google_cloud_bigquery_v2_model_pb.Model,
    requestSerialize: serialize_google_cloud_bigquery_v2_GetModelRequest,
    requestDeserialize: deserialize_google_cloud_bigquery_v2_GetModelRequest,
    responseSerialize: serialize_google_cloud_bigquery_v2_Model,
    responseDeserialize: deserialize_google_cloud_bigquery_v2_Model,
  },
  // Lists all models in the specified dataset. Requires the READER dataset
  // role.
  listModels: {
    path: '/google.cloud.bigquery.v2.ModelService/ListModels',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_bigquery_v2_model_pb.ListModelsRequest,
    responseType: google_cloud_bigquery_v2_model_pb.ListModelsResponse,
    requestSerialize: serialize_google_cloud_bigquery_v2_ListModelsRequest,
    requestDeserialize: deserialize_google_cloud_bigquery_v2_ListModelsRequest,
    responseSerialize: serialize_google_cloud_bigquery_v2_ListModelsResponse,
    responseDeserialize: deserialize_google_cloud_bigquery_v2_ListModelsResponse,
  },
  // Patch specific fields in the specified model.
  patchModel: {
    path: '/google.cloud.bigquery.v2.ModelService/PatchModel',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_bigquery_v2_model_pb.PatchModelRequest,
    responseType: google_cloud_bigquery_v2_model_pb.Model,
    requestSerialize: serialize_google_cloud_bigquery_v2_PatchModelRequest,
    requestDeserialize: deserialize_google_cloud_bigquery_v2_PatchModelRequest,
    responseSerialize: serialize_google_cloud_bigquery_v2_Model,
    responseDeserialize: deserialize_google_cloud_bigquery_v2_Model,
  },
  // Deletes the model specified by modelId from the dataset.
  deleteModel: {
    path: '/google.cloud.bigquery.v2.ModelService/DeleteModel',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_bigquery_v2_model_pb.DeleteModelRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_cloud_bigquery_v2_DeleteModelRequest,
    requestDeserialize: deserialize_google_cloud_bigquery_v2_DeleteModelRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.ModelServiceClient = grpc.makeGenericClientConstructor(ModelServiceService);
