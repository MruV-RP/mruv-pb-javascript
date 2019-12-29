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
var google_devtools_clouderrorreporting_v1beta1_error_stats_service_pb = require('../../../../google/devtools/clouderrorreporting/v1beta1/error_stats_service_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_api_client_pb = require('../../../../google/api/client_pb.js');
var google_api_field_behavior_pb = require('../../../../google/api/field_behavior_pb.js');
var google_api_resource_pb = require('../../../../google/api/resource_pb.js');
var google_devtools_clouderrorreporting_v1beta1_common_pb = require('../../../../google/devtools/clouderrorreporting/v1beta1/common_pb.js');
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_google_devtools_clouderrorreporting_v1beta1_DeleteEventsRequest(arg) {
  if (!(arg instanceof google_devtools_clouderrorreporting_v1beta1_error_stats_service_pb.DeleteEventsRequest)) {
    throw new Error('Expected argument of type google.devtools.clouderrorreporting.v1beta1.DeleteEventsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_clouderrorreporting_v1beta1_DeleteEventsRequest(buffer_arg) {
  return google_devtools_clouderrorreporting_v1beta1_error_stats_service_pb.DeleteEventsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_clouderrorreporting_v1beta1_DeleteEventsResponse(arg) {
  if (!(arg instanceof google_devtools_clouderrorreporting_v1beta1_error_stats_service_pb.DeleteEventsResponse)) {
    throw new Error('Expected argument of type google.devtools.clouderrorreporting.v1beta1.DeleteEventsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_clouderrorreporting_v1beta1_DeleteEventsResponse(buffer_arg) {
  return google_devtools_clouderrorreporting_v1beta1_error_stats_service_pb.DeleteEventsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_clouderrorreporting_v1beta1_ListEventsRequest(arg) {
  if (!(arg instanceof google_devtools_clouderrorreporting_v1beta1_error_stats_service_pb.ListEventsRequest)) {
    throw new Error('Expected argument of type google.devtools.clouderrorreporting.v1beta1.ListEventsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_clouderrorreporting_v1beta1_ListEventsRequest(buffer_arg) {
  return google_devtools_clouderrorreporting_v1beta1_error_stats_service_pb.ListEventsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_clouderrorreporting_v1beta1_ListEventsResponse(arg) {
  if (!(arg instanceof google_devtools_clouderrorreporting_v1beta1_error_stats_service_pb.ListEventsResponse)) {
    throw new Error('Expected argument of type google.devtools.clouderrorreporting.v1beta1.ListEventsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_clouderrorreporting_v1beta1_ListEventsResponse(buffer_arg) {
  return google_devtools_clouderrorreporting_v1beta1_error_stats_service_pb.ListEventsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_clouderrorreporting_v1beta1_ListGroupStatsRequest(arg) {
  if (!(arg instanceof google_devtools_clouderrorreporting_v1beta1_error_stats_service_pb.ListGroupStatsRequest)) {
    throw new Error('Expected argument of type google.devtools.clouderrorreporting.v1beta1.ListGroupStatsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_clouderrorreporting_v1beta1_ListGroupStatsRequest(buffer_arg) {
  return google_devtools_clouderrorreporting_v1beta1_error_stats_service_pb.ListGroupStatsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_clouderrorreporting_v1beta1_ListGroupStatsResponse(arg) {
  if (!(arg instanceof google_devtools_clouderrorreporting_v1beta1_error_stats_service_pb.ListGroupStatsResponse)) {
    throw new Error('Expected argument of type google.devtools.clouderrorreporting.v1beta1.ListGroupStatsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_clouderrorreporting_v1beta1_ListGroupStatsResponse(buffer_arg) {
  return google_devtools_clouderrorreporting_v1beta1_error_stats_service_pb.ListGroupStatsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// An API for retrieving and managing error statistics as well as data for
// individual events.
var ErrorStatsServiceService = exports.ErrorStatsServiceService = {
  // Lists the specified groups.
  listGroupStats: {
    path: '/google.devtools.clouderrorreporting.v1beta1.ErrorStatsService/ListGroupStats',
    requestStream: false,
    responseStream: false,
    requestType: google_devtools_clouderrorreporting_v1beta1_error_stats_service_pb.ListGroupStatsRequest,
    responseType: google_devtools_clouderrorreporting_v1beta1_error_stats_service_pb.ListGroupStatsResponse,
    requestSerialize: serialize_google_devtools_clouderrorreporting_v1beta1_ListGroupStatsRequest,
    requestDeserialize: deserialize_google_devtools_clouderrorreporting_v1beta1_ListGroupStatsRequest,
    responseSerialize: serialize_google_devtools_clouderrorreporting_v1beta1_ListGroupStatsResponse,
    responseDeserialize: deserialize_google_devtools_clouderrorreporting_v1beta1_ListGroupStatsResponse,
  },
  // Lists the specified events.
  listEvents: {
    path: '/google.devtools.clouderrorreporting.v1beta1.ErrorStatsService/ListEvents',
    requestStream: false,
    responseStream: false,
    requestType: google_devtools_clouderrorreporting_v1beta1_error_stats_service_pb.ListEventsRequest,
    responseType: google_devtools_clouderrorreporting_v1beta1_error_stats_service_pb.ListEventsResponse,
    requestSerialize: serialize_google_devtools_clouderrorreporting_v1beta1_ListEventsRequest,
    requestDeserialize: deserialize_google_devtools_clouderrorreporting_v1beta1_ListEventsRequest,
    responseSerialize: serialize_google_devtools_clouderrorreporting_v1beta1_ListEventsResponse,
    responseDeserialize: deserialize_google_devtools_clouderrorreporting_v1beta1_ListEventsResponse,
  },
  // Deletes all error events of a given project.
  deleteEvents: {
    path: '/google.devtools.clouderrorreporting.v1beta1.ErrorStatsService/DeleteEvents',
    requestStream: false,
    responseStream: false,
    requestType: google_devtools_clouderrorreporting_v1beta1_error_stats_service_pb.DeleteEventsRequest,
    responseType: google_devtools_clouderrorreporting_v1beta1_error_stats_service_pb.DeleteEventsResponse,
    requestSerialize: serialize_google_devtools_clouderrorreporting_v1beta1_DeleteEventsRequest,
    requestDeserialize: deserialize_google_devtools_clouderrorreporting_v1beta1_DeleteEventsRequest,
    responseSerialize: serialize_google_devtools_clouderrorreporting_v1beta1_DeleteEventsResponse,
    responseDeserialize: deserialize_google_devtools_clouderrorreporting_v1beta1_DeleteEventsResponse,
  },
};

exports.ErrorStatsServiceClient = grpc.makeGenericClientConstructor(ErrorStatsServiceService);
