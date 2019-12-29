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
var google_cloud_bigquery_datatransfer_v1_datatransfer_pb = require('../../../../../google/cloud/bigquery/datatransfer/v1/datatransfer_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var google_api_client_pb = require('../../../../../google/api/client_pb.js');
var google_api_field_behavior_pb = require('../../../../../google/api/field_behavior_pb.js');
var google_api_resource_pb = require('../../../../../google/api/resource_pb.js');
var google_cloud_bigquery_datatransfer_v1_transfer_pb = require('../../../../../google/cloud/bigquery/datatransfer/v1/transfer_pb.js');
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');

function serialize_google_cloud_bigquery_datatransfer_v1_CheckValidCredsRequest(arg) {
  if (!(arg instanceof google_cloud_bigquery_datatransfer_v1_datatransfer_pb.CheckValidCredsRequest)) {
    throw new Error('Expected argument of type google.cloud.bigquery.datatransfer.v1.CheckValidCredsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_bigquery_datatransfer_v1_CheckValidCredsRequest(buffer_arg) {
  return google_cloud_bigquery_datatransfer_v1_datatransfer_pb.CheckValidCredsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_bigquery_datatransfer_v1_CheckValidCredsResponse(arg) {
  if (!(arg instanceof google_cloud_bigquery_datatransfer_v1_datatransfer_pb.CheckValidCredsResponse)) {
    throw new Error('Expected argument of type google.cloud.bigquery.datatransfer.v1.CheckValidCredsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_bigquery_datatransfer_v1_CheckValidCredsResponse(buffer_arg) {
  return google_cloud_bigquery_datatransfer_v1_datatransfer_pb.CheckValidCredsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_bigquery_datatransfer_v1_CreateTransferConfigRequest(arg) {
  if (!(arg instanceof google_cloud_bigquery_datatransfer_v1_datatransfer_pb.CreateTransferConfigRequest)) {
    throw new Error('Expected argument of type google.cloud.bigquery.datatransfer.v1.CreateTransferConfigRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_bigquery_datatransfer_v1_CreateTransferConfigRequest(buffer_arg) {
  return google_cloud_bigquery_datatransfer_v1_datatransfer_pb.CreateTransferConfigRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_bigquery_datatransfer_v1_DataSource(arg) {
  if (!(arg instanceof google_cloud_bigquery_datatransfer_v1_datatransfer_pb.DataSource)) {
    throw new Error('Expected argument of type google.cloud.bigquery.datatransfer.v1.DataSource');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_bigquery_datatransfer_v1_DataSource(buffer_arg) {
  return google_cloud_bigquery_datatransfer_v1_datatransfer_pb.DataSource.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_bigquery_datatransfer_v1_DeleteTransferConfigRequest(arg) {
  if (!(arg instanceof google_cloud_bigquery_datatransfer_v1_datatransfer_pb.DeleteTransferConfigRequest)) {
    throw new Error('Expected argument of type google.cloud.bigquery.datatransfer.v1.DeleteTransferConfigRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_bigquery_datatransfer_v1_DeleteTransferConfigRequest(buffer_arg) {
  return google_cloud_bigquery_datatransfer_v1_datatransfer_pb.DeleteTransferConfigRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_bigquery_datatransfer_v1_DeleteTransferRunRequest(arg) {
  if (!(arg instanceof google_cloud_bigquery_datatransfer_v1_datatransfer_pb.DeleteTransferRunRequest)) {
    throw new Error('Expected argument of type google.cloud.bigquery.datatransfer.v1.DeleteTransferRunRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_bigquery_datatransfer_v1_DeleteTransferRunRequest(buffer_arg) {
  return google_cloud_bigquery_datatransfer_v1_datatransfer_pb.DeleteTransferRunRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_bigquery_datatransfer_v1_GetDataSourceRequest(arg) {
  if (!(arg instanceof google_cloud_bigquery_datatransfer_v1_datatransfer_pb.GetDataSourceRequest)) {
    throw new Error('Expected argument of type google.cloud.bigquery.datatransfer.v1.GetDataSourceRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_bigquery_datatransfer_v1_GetDataSourceRequest(buffer_arg) {
  return google_cloud_bigquery_datatransfer_v1_datatransfer_pb.GetDataSourceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_bigquery_datatransfer_v1_GetTransferConfigRequest(arg) {
  if (!(arg instanceof google_cloud_bigquery_datatransfer_v1_datatransfer_pb.GetTransferConfigRequest)) {
    throw new Error('Expected argument of type google.cloud.bigquery.datatransfer.v1.GetTransferConfigRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_bigquery_datatransfer_v1_GetTransferConfigRequest(buffer_arg) {
  return google_cloud_bigquery_datatransfer_v1_datatransfer_pb.GetTransferConfigRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_bigquery_datatransfer_v1_GetTransferRunRequest(arg) {
  if (!(arg instanceof google_cloud_bigquery_datatransfer_v1_datatransfer_pb.GetTransferRunRequest)) {
    throw new Error('Expected argument of type google.cloud.bigquery.datatransfer.v1.GetTransferRunRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_bigquery_datatransfer_v1_GetTransferRunRequest(buffer_arg) {
  return google_cloud_bigquery_datatransfer_v1_datatransfer_pb.GetTransferRunRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_bigquery_datatransfer_v1_ListDataSourcesRequest(arg) {
  if (!(arg instanceof google_cloud_bigquery_datatransfer_v1_datatransfer_pb.ListDataSourcesRequest)) {
    throw new Error('Expected argument of type google.cloud.bigquery.datatransfer.v1.ListDataSourcesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_bigquery_datatransfer_v1_ListDataSourcesRequest(buffer_arg) {
  return google_cloud_bigquery_datatransfer_v1_datatransfer_pb.ListDataSourcesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_bigquery_datatransfer_v1_ListDataSourcesResponse(arg) {
  if (!(arg instanceof google_cloud_bigquery_datatransfer_v1_datatransfer_pb.ListDataSourcesResponse)) {
    throw new Error('Expected argument of type google.cloud.bigquery.datatransfer.v1.ListDataSourcesResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_bigquery_datatransfer_v1_ListDataSourcesResponse(buffer_arg) {
  return google_cloud_bigquery_datatransfer_v1_datatransfer_pb.ListDataSourcesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_bigquery_datatransfer_v1_ListTransferConfigsRequest(arg) {
  if (!(arg instanceof google_cloud_bigquery_datatransfer_v1_datatransfer_pb.ListTransferConfigsRequest)) {
    throw new Error('Expected argument of type google.cloud.bigquery.datatransfer.v1.ListTransferConfigsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_bigquery_datatransfer_v1_ListTransferConfigsRequest(buffer_arg) {
  return google_cloud_bigquery_datatransfer_v1_datatransfer_pb.ListTransferConfigsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_bigquery_datatransfer_v1_ListTransferConfigsResponse(arg) {
  if (!(arg instanceof google_cloud_bigquery_datatransfer_v1_datatransfer_pb.ListTransferConfigsResponse)) {
    throw new Error('Expected argument of type google.cloud.bigquery.datatransfer.v1.ListTransferConfigsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_bigquery_datatransfer_v1_ListTransferConfigsResponse(buffer_arg) {
  return google_cloud_bigquery_datatransfer_v1_datatransfer_pb.ListTransferConfigsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_bigquery_datatransfer_v1_ListTransferLogsRequest(arg) {
  if (!(arg instanceof google_cloud_bigquery_datatransfer_v1_datatransfer_pb.ListTransferLogsRequest)) {
    throw new Error('Expected argument of type google.cloud.bigquery.datatransfer.v1.ListTransferLogsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_bigquery_datatransfer_v1_ListTransferLogsRequest(buffer_arg) {
  return google_cloud_bigquery_datatransfer_v1_datatransfer_pb.ListTransferLogsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_bigquery_datatransfer_v1_ListTransferLogsResponse(arg) {
  if (!(arg instanceof google_cloud_bigquery_datatransfer_v1_datatransfer_pb.ListTransferLogsResponse)) {
    throw new Error('Expected argument of type google.cloud.bigquery.datatransfer.v1.ListTransferLogsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_bigquery_datatransfer_v1_ListTransferLogsResponse(buffer_arg) {
  return google_cloud_bigquery_datatransfer_v1_datatransfer_pb.ListTransferLogsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_bigquery_datatransfer_v1_ListTransferRunsRequest(arg) {
  if (!(arg instanceof google_cloud_bigquery_datatransfer_v1_datatransfer_pb.ListTransferRunsRequest)) {
    throw new Error('Expected argument of type google.cloud.bigquery.datatransfer.v1.ListTransferRunsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_bigquery_datatransfer_v1_ListTransferRunsRequest(buffer_arg) {
  return google_cloud_bigquery_datatransfer_v1_datatransfer_pb.ListTransferRunsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_bigquery_datatransfer_v1_ListTransferRunsResponse(arg) {
  if (!(arg instanceof google_cloud_bigquery_datatransfer_v1_datatransfer_pb.ListTransferRunsResponse)) {
    throw new Error('Expected argument of type google.cloud.bigquery.datatransfer.v1.ListTransferRunsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_bigquery_datatransfer_v1_ListTransferRunsResponse(buffer_arg) {
  return google_cloud_bigquery_datatransfer_v1_datatransfer_pb.ListTransferRunsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_bigquery_datatransfer_v1_ScheduleTransferRunsRequest(arg) {
  if (!(arg instanceof google_cloud_bigquery_datatransfer_v1_datatransfer_pb.ScheduleTransferRunsRequest)) {
    throw new Error('Expected argument of type google.cloud.bigquery.datatransfer.v1.ScheduleTransferRunsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_bigquery_datatransfer_v1_ScheduleTransferRunsRequest(buffer_arg) {
  return google_cloud_bigquery_datatransfer_v1_datatransfer_pb.ScheduleTransferRunsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_bigquery_datatransfer_v1_ScheduleTransferRunsResponse(arg) {
  if (!(arg instanceof google_cloud_bigquery_datatransfer_v1_datatransfer_pb.ScheduleTransferRunsResponse)) {
    throw new Error('Expected argument of type google.cloud.bigquery.datatransfer.v1.ScheduleTransferRunsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_bigquery_datatransfer_v1_ScheduleTransferRunsResponse(buffer_arg) {
  return google_cloud_bigquery_datatransfer_v1_datatransfer_pb.ScheduleTransferRunsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_bigquery_datatransfer_v1_StartManualTransferRunsRequest(arg) {
  if (!(arg instanceof google_cloud_bigquery_datatransfer_v1_datatransfer_pb.StartManualTransferRunsRequest)) {
    throw new Error('Expected argument of type google.cloud.bigquery.datatransfer.v1.StartManualTransferRunsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_bigquery_datatransfer_v1_StartManualTransferRunsRequest(buffer_arg) {
  return google_cloud_bigquery_datatransfer_v1_datatransfer_pb.StartManualTransferRunsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_bigquery_datatransfer_v1_StartManualTransferRunsResponse(arg) {
  if (!(arg instanceof google_cloud_bigquery_datatransfer_v1_datatransfer_pb.StartManualTransferRunsResponse)) {
    throw new Error('Expected argument of type google.cloud.bigquery.datatransfer.v1.StartManualTransferRunsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_bigquery_datatransfer_v1_StartManualTransferRunsResponse(buffer_arg) {
  return google_cloud_bigquery_datatransfer_v1_datatransfer_pb.StartManualTransferRunsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_bigquery_datatransfer_v1_TransferConfig(arg) {
  if (!(arg instanceof google_cloud_bigquery_datatransfer_v1_transfer_pb.TransferConfig)) {
    throw new Error('Expected argument of type google.cloud.bigquery.datatransfer.v1.TransferConfig');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_bigquery_datatransfer_v1_TransferConfig(buffer_arg) {
  return google_cloud_bigquery_datatransfer_v1_transfer_pb.TransferConfig.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_bigquery_datatransfer_v1_TransferRun(arg) {
  if (!(arg instanceof google_cloud_bigquery_datatransfer_v1_transfer_pb.TransferRun)) {
    throw new Error('Expected argument of type google.cloud.bigquery.datatransfer.v1.TransferRun');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_bigquery_datatransfer_v1_TransferRun(buffer_arg) {
  return google_cloud_bigquery_datatransfer_v1_transfer_pb.TransferRun.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_bigquery_datatransfer_v1_UpdateTransferConfigRequest(arg) {
  if (!(arg instanceof google_cloud_bigquery_datatransfer_v1_datatransfer_pb.UpdateTransferConfigRequest)) {
    throw new Error('Expected argument of type google.cloud.bigquery.datatransfer.v1.UpdateTransferConfigRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_bigquery_datatransfer_v1_UpdateTransferConfigRequest(buffer_arg) {
  return google_cloud_bigquery_datatransfer_v1_datatransfer_pb.UpdateTransferConfigRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


// The Google BigQuery Data Transfer Service API enables BigQuery users to
// configure the transfer of their data from other Google Products into
// BigQuery. This service contains methods that are end user exposed. It backs
// up the frontend.
var DataTransferServiceService = exports.DataTransferServiceService = {
  // Retrieves a supported data source and returns its settings,
  // which can be used for UI rendering.
  getDataSource: {
    path: '/google.cloud.bigquery.datatransfer.v1.DataTransferService/GetDataSource',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_bigquery_datatransfer_v1_datatransfer_pb.GetDataSourceRequest,
    responseType: google_cloud_bigquery_datatransfer_v1_datatransfer_pb.DataSource,
    requestSerialize: serialize_google_cloud_bigquery_datatransfer_v1_GetDataSourceRequest,
    requestDeserialize: deserialize_google_cloud_bigquery_datatransfer_v1_GetDataSourceRequest,
    responseSerialize: serialize_google_cloud_bigquery_datatransfer_v1_DataSource,
    responseDeserialize: deserialize_google_cloud_bigquery_datatransfer_v1_DataSource,
  },
  // Lists supported data sources and returns their settings,
  // which can be used for UI rendering.
  listDataSources: {
    path: '/google.cloud.bigquery.datatransfer.v1.DataTransferService/ListDataSources',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_bigquery_datatransfer_v1_datatransfer_pb.ListDataSourcesRequest,
    responseType: google_cloud_bigquery_datatransfer_v1_datatransfer_pb.ListDataSourcesResponse,
    requestSerialize: serialize_google_cloud_bigquery_datatransfer_v1_ListDataSourcesRequest,
    requestDeserialize: deserialize_google_cloud_bigquery_datatransfer_v1_ListDataSourcesRequest,
    responseSerialize: serialize_google_cloud_bigquery_datatransfer_v1_ListDataSourcesResponse,
    responseDeserialize: deserialize_google_cloud_bigquery_datatransfer_v1_ListDataSourcesResponse,
  },
  // Creates a new data transfer configuration.
  createTransferConfig: {
    path: '/google.cloud.bigquery.datatransfer.v1.DataTransferService/CreateTransferConfig',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_bigquery_datatransfer_v1_datatransfer_pb.CreateTransferConfigRequest,
    responseType: google_cloud_bigquery_datatransfer_v1_transfer_pb.TransferConfig,
    requestSerialize: serialize_google_cloud_bigquery_datatransfer_v1_CreateTransferConfigRequest,
    requestDeserialize: deserialize_google_cloud_bigquery_datatransfer_v1_CreateTransferConfigRequest,
    responseSerialize: serialize_google_cloud_bigquery_datatransfer_v1_TransferConfig,
    responseDeserialize: deserialize_google_cloud_bigquery_datatransfer_v1_TransferConfig,
  },
  // Updates a data transfer configuration.
  // All fields must be set, even if they are not updated.
  updateTransferConfig: {
    path: '/google.cloud.bigquery.datatransfer.v1.DataTransferService/UpdateTransferConfig',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_bigquery_datatransfer_v1_datatransfer_pb.UpdateTransferConfigRequest,
    responseType: google_cloud_bigquery_datatransfer_v1_transfer_pb.TransferConfig,
    requestSerialize: serialize_google_cloud_bigquery_datatransfer_v1_UpdateTransferConfigRequest,
    requestDeserialize: deserialize_google_cloud_bigquery_datatransfer_v1_UpdateTransferConfigRequest,
    responseSerialize: serialize_google_cloud_bigquery_datatransfer_v1_TransferConfig,
    responseDeserialize: deserialize_google_cloud_bigquery_datatransfer_v1_TransferConfig,
  },
  // Deletes a data transfer configuration,
  // including any associated transfer runs and logs.
  deleteTransferConfig: {
    path: '/google.cloud.bigquery.datatransfer.v1.DataTransferService/DeleteTransferConfig',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_bigquery_datatransfer_v1_datatransfer_pb.DeleteTransferConfigRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_cloud_bigquery_datatransfer_v1_DeleteTransferConfigRequest,
    requestDeserialize: deserialize_google_cloud_bigquery_datatransfer_v1_DeleteTransferConfigRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Returns information about a data transfer config.
  getTransferConfig: {
    path: '/google.cloud.bigquery.datatransfer.v1.DataTransferService/GetTransferConfig',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_bigquery_datatransfer_v1_datatransfer_pb.GetTransferConfigRequest,
    responseType: google_cloud_bigquery_datatransfer_v1_transfer_pb.TransferConfig,
    requestSerialize: serialize_google_cloud_bigquery_datatransfer_v1_GetTransferConfigRequest,
    requestDeserialize: deserialize_google_cloud_bigquery_datatransfer_v1_GetTransferConfigRequest,
    responseSerialize: serialize_google_cloud_bigquery_datatransfer_v1_TransferConfig,
    responseDeserialize: deserialize_google_cloud_bigquery_datatransfer_v1_TransferConfig,
  },
  // Returns information about all data transfers in the project.
  listTransferConfigs: {
    path: '/google.cloud.bigquery.datatransfer.v1.DataTransferService/ListTransferConfigs',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_bigquery_datatransfer_v1_datatransfer_pb.ListTransferConfigsRequest,
    responseType: google_cloud_bigquery_datatransfer_v1_datatransfer_pb.ListTransferConfigsResponse,
    requestSerialize: serialize_google_cloud_bigquery_datatransfer_v1_ListTransferConfigsRequest,
    requestDeserialize: deserialize_google_cloud_bigquery_datatransfer_v1_ListTransferConfigsRequest,
    responseSerialize: serialize_google_cloud_bigquery_datatransfer_v1_ListTransferConfigsResponse,
    responseDeserialize: deserialize_google_cloud_bigquery_datatransfer_v1_ListTransferConfigsResponse,
  },
  // Creates transfer runs for a time range [start_time, end_time].
  // For each date - or whatever granularity the data source supports - in the
  // range, one transfer run is created.
  // Note that runs are created per UTC time in the time range.
  // DEPRECATED: use StartManualTransferRuns instead.
  scheduleTransferRuns: {
    path: '/google.cloud.bigquery.datatransfer.v1.DataTransferService/ScheduleTransferRuns',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_bigquery_datatransfer_v1_datatransfer_pb.ScheduleTransferRunsRequest,
    responseType: google_cloud_bigquery_datatransfer_v1_datatransfer_pb.ScheduleTransferRunsResponse,
    requestSerialize: serialize_google_cloud_bigquery_datatransfer_v1_ScheduleTransferRunsRequest,
    requestDeserialize: deserialize_google_cloud_bigquery_datatransfer_v1_ScheduleTransferRunsRequest,
    responseSerialize: serialize_google_cloud_bigquery_datatransfer_v1_ScheduleTransferRunsResponse,
    responseDeserialize: deserialize_google_cloud_bigquery_datatransfer_v1_ScheduleTransferRunsResponse,
  },
  // Start manual transfer runs to be executed now with schedule_time equal to
  // current time. The transfer runs can be created for a time range where the
  // run_time is between start_time (inclusive) and end_time (exclusive), or for
  // a specific run_time.
  startManualTransferRuns: {
    path: '/google.cloud.bigquery.datatransfer.v1.DataTransferService/StartManualTransferRuns',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_bigquery_datatransfer_v1_datatransfer_pb.StartManualTransferRunsRequest,
    responseType: google_cloud_bigquery_datatransfer_v1_datatransfer_pb.StartManualTransferRunsResponse,
    requestSerialize: serialize_google_cloud_bigquery_datatransfer_v1_StartManualTransferRunsRequest,
    requestDeserialize: deserialize_google_cloud_bigquery_datatransfer_v1_StartManualTransferRunsRequest,
    responseSerialize: serialize_google_cloud_bigquery_datatransfer_v1_StartManualTransferRunsResponse,
    responseDeserialize: deserialize_google_cloud_bigquery_datatransfer_v1_StartManualTransferRunsResponse,
  },
  // Returns information about the particular transfer run.
  getTransferRun: {
    path: '/google.cloud.bigquery.datatransfer.v1.DataTransferService/GetTransferRun',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_bigquery_datatransfer_v1_datatransfer_pb.GetTransferRunRequest,
    responseType: google_cloud_bigquery_datatransfer_v1_transfer_pb.TransferRun,
    requestSerialize: serialize_google_cloud_bigquery_datatransfer_v1_GetTransferRunRequest,
    requestDeserialize: deserialize_google_cloud_bigquery_datatransfer_v1_GetTransferRunRequest,
    responseSerialize: serialize_google_cloud_bigquery_datatransfer_v1_TransferRun,
    responseDeserialize: deserialize_google_cloud_bigquery_datatransfer_v1_TransferRun,
  },
  // Deletes the specified transfer run.
  deleteTransferRun: {
    path: '/google.cloud.bigquery.datatransfer.v1.DataTransferService/DeleteTransferRun',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_bigquery_datatransfer_v1_datatransfer_pb.DeleteTransferRunRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_cloud_bigquery_datatransfer_v1_DeleteTransferRunRequest,
    requestDeserialize: deserialize_google_cloud_bigquery_datatransfer_v1_DeleteTransferRunRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Returns information about running and completed jobs.
  listTransferRuns: {
    path: '/google.cloud.bigquery.datatransfer.v1.DataTransferService/ListTransferRuns',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_bigquery_datatransfer_v1_datatransfer_pb.ListTransferRunsRequest,
    responseType: google_cloud_bigquery_datatransfer_v1_datatransfer_pb.ListTransferRunsResponse,
    requestSerialize: serialize_google_cloud_bigquery_datatransfer_v1_ListTransferRunsRequest,
    requestDeserialize: deserialize_google_cloud_bigquery_datatransfer_v1_ListTransferRunsRequest,
    responseSerialize: serialize_google_cloud_bigquery_datatransfer_v1_ListTransferRunsResponse,
    responseDeserialize: deserialize_google_cloud_bigquery_datatransfer_v1_ListTransferRunsResponse,
  },
  // Returns user facing log messages for the data transfer run.
  listTransferLogs: {
    path: '/google.cloud.bigquery.datatransfer.v1.DataTransferService/ListTransferLogs',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_bigquery_datatransfer_v1_datatransfer_pb.ListTransferLogsRequest,
    responseType: google_cloud_bigquery_datatransfer_v1_datatransfer_pb.ListTransferLogsResponse,
    requestSerialize: serialize_google_cloud_bigquery_datatransfer_v1_ListTransferLogsRequest,
    requestDeserialize: deserialize_google_cloud_bigquery_datatransfer_v1_ListTransferLogsRequest,
    responseSerialize: serialize_google_cloud_bigquery_datatransfer_v1_ListTransferLogsResponse,
    responseDeserialize: deserialize_google_cloud_bigquery_datatransfer_v1_ListTransferLogsResponse,
  },
  // Returns true if valid credentials exist for the given data source and
  // requesting user.
  // Some data sources doesn't support service account, so we need to talk to
  // them on behalf of the end user. This API just checks whether we have OAuth
  // token for the particular user, which is a pre-requisite before user can
  // create a transfer config.
  checkValidCreds: {
    path: '/google.cloud.bigquery.datatransfer.v1.DataTransferService/CheckValidCreds',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_bigquery_datatransfer_v1_datatransfer_pb.CheckValidCredsRequest,
    responseType: google_cloud_bigquery_datatransfer_v1_datatransfer_pb.CheckValidCredsResponse,
    requestSerialize: serialize_google_cloud_bigquery_datatransfer_v1_CheckValidCredsRequest,
    requestDeserialize: deserialize_google_cloud_bigquery_datatransfer_v1_CheckValidCredsRequest,
    responseSerialize: serialize_google_cloud_bigquery_datatransfer_v1_CheckValidCredsResponse,
    responseDeserialize: deserialize_google_cloud_bigquery_datatransfer_v1_CheckValidCredsResponse,
  },
};

exports.DataTransferServiceClient = grpc.makeGenericClientConstructor(DataTransferServiceService);
