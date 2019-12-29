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
var google_monitoring_v3_uptime_service_pb = require('../../../google/monitoring/v3/uptime_service_pb.js');
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
var google_monitoring_v3_uptime_pb = require('../../../google/monitoring/v3/uptime_pb.js');
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_api_client_pb = require('../../../google/api/client_pb.js');

function serialize_google_monitoring_v3_CreateUptimeCheckConfigRequest(arg) {
  if (!(arg instanceof google_monitoring_v3_uptime_service_pb.CreateUptimeCheckConfigRequest)) {
    throw new Error('Expected argument of type google.monitoring.v3.CreateUptimeCheckConfigRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_monitoring_v3_CreateUptimeCheckConfigRequest(buffer_arg) {
  return google_monitoring_v3_uptime_service_pb.CreateUptimeCheckConfigRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_monitoring_v3_DeleteUptimeCheckConfigRequest(arg) {
  if (!(arg instanceof google_monitoring_v3_uptime_service_pb.DeleteUptimeCheckConfigRequest)) {
    throw new Error('Expected argument of type google.monitoring.v3.DeleteUptimeCheckConfigRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_monitoring_v3_DeleteUptimeCheckConfigRequest(buffer_arg) {
  return google_monitoring_v3_uptime_service_pb.DeleteUptimeCheckConfigRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_monitoring_v3_GetUptimeCheckConfigRequest(arg) {
  if (!(arg instanceof google_monitoring_v3_uptime_service_pb.GetUptimeCheckConfigRequest)) {
    throw new Error('Expected argument of type google.monitoring.v3.GetUptimeCheckConfigRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_monitoring_v3_GetUptimeCheckConfigRequest(buffer_arg) {
  return google_monitoring_v3_uptime_service_pb.GetUptimeCheckConfigRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_monitoring_v3_ListUptimeCheckConfigsRequest(arg) {
  if (!(arg instanceof google_monitoring_v3_uptime_service_pb.ListUptimeCheckConfigsRequest)) {
    throw new Error('Expected argument of type google.monitoring.v3.ListUptimeCheckConfigsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_monitoring_v3_ListUptimeCheckConfigsRequest(buffer_arg) {
  return google_monitoring_v3_uptime_service_pb.ListUptimeCheckConfigsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_monitoring_v3_ListUptimeCheckConfigsResponse(arg) {
  if (!(arg instanceof google_monitoring_v3_uptime_service_pb.ListUptimeCheckConfigsResponse)) {
    throw new Error('Expected argument of type google.monitoring.v3.ListUptimeCheckConfigsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_monitoring_v3_ListUptimeCheckConfigsResponse(buffer_arg) {
  return google_monitoring_v3_uptime_service_pb.ListUptimeCheckConfigsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_monitoring_v3_ListUptimeCheckIpsRequest(arg) {
  if (!(arg instanceof google_monitoring_v3_uptime_service_pb.ListUptimeCheckIpsRequest)) {
    throw new Error('Expected argument of type google.monitoring.v3.ListUptimeCheckIpsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_monitoring_v3_ListUptimeCheckIpsRequest(buffer_arg) {
  return google_monitoring_v3_uptime_service_pb.ListUptimeCheckIpsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_monitoring_v3_ListUptimeCheckIpsResponse(arg) {
  if (!(arg instanceof google_monitoring_v3_uptime_service_pb.ListUptimeCheckIpsResponse)) {
    throw new Error('Expected argument of type google.monitoring.v3.ListUptimeCheckIpsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_monitoring_v3_ListUptimeCheckIpsResponse(buffer_arg) {
  return google_monitoring_v3_uptime_service_pb.ListUptimeCheckIpsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_monitoring_v3_UpdateUptimeCheckConfigRequest(arg) {
  if (!(arg instanceof google_monitoring_v3_uptime_service_pb.UpdateUptimeCheckConfigRequest)) {
    throw new Error('Expected argument of type google.monitoring.v3.UpdateUptimeCheckConfigRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_monitoring_v3_UpdateUptimeCheckConfigRequest(buffer_arg) {
  return google_monitoring_v3_uptime_service_pb.UpdateUptimeCheckConfigRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_monitoring_v3_UptimeCheckConfig(arg) {
  if (!(arg instanceof google_monitoring_v3_uptime_pb.UptimeCheckConfig)) {
    throw new Error('Expected argument of type google.monitoring.v3.UptimeCheckConfig');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_monitoring_v3_UptimeCheckConfig(buffer_arg) {
  return google_monitoring_v3_uptime_pb.UptimeCheckConfig.deserializeBinary(new Uint8Array(buffer_arg));
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


// The UptimeCheckService API is used to manage (list, create, delete, edit)
// Uptime check configurations in the Stackdriver Monitoring product. An Uptime
// check is a piece of configuration that determines which resources and
// services to monitor for availability. These configurations can also be
// configured interactively by navigating to the [Cloud Console]
// (http://console.cloud.google.com), selecting the appropriate project,
// clicking on "Monitoring" on the left-hand side to navigate to Stackdriver,
// and then clicking on "Uptime".
var UptimeCheckServiceService = exports.UptimeCheckServiceService = {
  // Lists the existing valid Uptime check configurations for the project
  // (leaving out any invalid configurations).
  listUptimeCheckConfigs: {
    path: '/google.monitoring.v3.UptimeCheckService/ListUptimeCheckConfigs',
    requestStream: false,
    responseStream: false,
    requestType: google_monitoring_v3_uptime_service_pb.ListUptimeCheckConfigsRequest,
    responseType: google_monitoring_v3_uptime_service_pb.ListUptimeCheckConfigsResponse,
    requestSerialize: serialize_google_monitoring_v3_ListUptimeCheckConfigsRequest,
    requestDeserialize: deserialize_google_monitoring_v3_ListUptimeCheckConfigsRequest,
    responseSerialize: serialize_google_monitoring_v3_ListUptimeCheckConfigsResponse,
    responseDeserialize: deserialize_google_monitoring_v3_ListUptimeCheckConfigsResponse,
  },
  // Gets a single Uptime check configuration.
  getUptimeCheckConfig: {
    path: '/google.monitoring.v3.UptimeCheckService/GetUptimeCheckConfig',
    requestStream: false,
    responseStream: false,
    requestType: google_monitoring_v3_uptime_service_pb.GetUptimeCheckConfigRequest,
    responseType: google_monitoring_v3_uptime_pb.UptimeCheckConfig,
    requestSerialize: serialize_google_monitoring_v3_GetUptimeCheckConfigRequest,
    requestDeserialize: deserialize_google_monitoring_v3_GetUptimeCheckConfigRequest,
    responseSerialize: serialize_google_monitoring_v3_UptimeCheckConfig,
    responseDeserialize: deserialize_google_monitoring_v3_UptimeCheckConfig,
  },
  // Creates a new Uptime check configuration.
  createUptimeCheckConfig: {
    path: '/google.monitoring.v3.UptimeCheckService/CreateUptimeCheckConfig',
    requestStream: false,
    responseStream: false,
    requestType: google_monitoring_v3_uptime_service_pb.CreateUptimeCheckConfigRequest,
    responseType: google_monitoring_v3_uptime_pb.UptimeCheckConfig,
    requestSerialize: serialize_google_monitoring_v3_CreateUptimeCheckConfigRequest,
    requestDeserialize: deserialize_google_monitoring_v3_CreateUptimeCheckConfigRequest,
    responseSerialize: serialize_google_monitoring_v3_UptimeCheckConfig,
    responseDeserialize: deserialize_google_monitoring_v3_UptimeCheckConfig,
  },
  // Updates an Uptime check configuration. You can either replace the entire
  // configuration with a new one or replace only certain fields in the current
  // configuration by specifying the fields to be updated via `updateMask`.
  // Returns the updated configuration.
  updateUptimeCheckConfig: {
    path: '/google.monitoring.v3.UptimeCheckService/UpdateUptimeCheckConfig',
    requestStream: false,
    responseStream: false,
    requestType: google_monitoring_v3_uptime_service_pb.UpdateUptimeCheckConfigRequest,
    responseType: google_monitoring_v3_uptime_pb.UptimeCheckConfig,
    requestSerialize: serialize_google_monitoring_v3_UpdateUptimeCheckConfigRequest,
    requestDeserialize: deserialize_google_monitoring_v3_UpdateUptimeCheckConfigRequest,
    responseSerialize: serialize_google_monitoring_v3_UptimeCheckConfig,
    responseDeserialize: deserialize_google_monitoring_v3_UptimeCheckConfig,
  },
  // Deletes an Uptime check configuration. Note that this method will fail
  // if the Uptime check configuration is referenced by an alert policy or
  // other dependent configs that would be rendered invalid by the deletion.
  deleteUptimeCheckConfig: {
    path: '/google.monitoring.v3.UptimeCheckService/DeleteUptimeCheckConfig',
    requestStream: false,
    responseStream: false,
    requestType: google_monitoring_v3_uptime_service_pb.DeleteUptimeCheckConfigRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_monitoring_v3_DeleteUptimeCheckConfigRequest,
    requestDeserialize: deserialize_google_monitoring_v3_DeleteUptimeCheckConfigRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Returns the list of IP addresses that checkers run from
  listUptimeCheckIps: {
    path: '/google.monitoring.v3.UptimeCheckService/ListUptimeCheckIps',
    requestStream: false,
    responseStream: false,
    requestType: google_monitoring_v3_uptime_service_pb.ListUptimeCheckIpsRequest,
    responseType: google_monitoring_v3_uptime_service_pb.ListUptimeCheckIpsResponse,
    requestSerialize: serialize_google_monitoring_v3_ListUptimeCheckIpsRequest,
    requestDeserialize: deserialize_google_monitoring_v3_ListUptimeCheckIpsRequest,
    responseSerialize: serialize_google_monitoring_v3_ListUptimeCheckIpsResponse,
    responseDeserialize: deserialize_google_monitoring_v3_ListUptimeCheckIpsResponse,
  },
};

exports.UptimeCheckServiceClient = grpc.makeGenericClientConstructor(UptimeCheckServiceService);
