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
var google_logging_v2_logging_metrics_pb = require('../../../google/logging/v2/logging_metrics_pb.js');
var google_api_distribution_pb = require('../../../google/api/distribution_pb.js');
var google_api_metric_pb = require('../../../google/api/metric_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
var google_api_client_pb = require('../../../google/api/client_pb.js');

function serialize_google_logging_v2_CreateLogMetricRequest(arg) {
  if (!(arg instanceof google_logging_v2_logging_metrics_pb.CreateLogMetricRequest)) {
    throw new Error('Expected argument of type google.logging.v2.CreateLogMetricRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_logging_v2_CreateLogMetricRequest(buffer_arg) {
  return google_logging_v2_logging_metrics_pb.CreateLogMetricRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_logging_v2_DeleteLogMetricRequest(arg) {
  if (!(arg instanceof google_logging_v2_logging_metrics_pb.DeleteLogMetricRequest)) {
    throw new Error('Expected argument of type google.logging.v2.DeleteLogMetricRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_logging_v2_DeleteLogMetricRequest(buffer_arg) {
  return google_logging_v2_logging_metrics_pb.DeleteLogMetricRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_logging_v2_GetLogMetricRequest(arg) {
  if (!(arg instanceof google_logging_v2_logging_metrics_pb.GetLogMetricRequest)) {
    throw new Error('Expected argument of type google.logging.v2.GetLogMetricRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_logging_v2_GetLogMetricRequest(buffer_arg) {
  return google_logging_v2_logging_metrics_pb.GetLogMetricRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_logging_v2_ListLogMetricsRequest(arg) {
  if (!(arg instanceof google_logging_v2_logging_metrics_pb.ListLogMetricsRequest)) {
    throw new Error('Expected argument of type google.logging.v2.ListLogMetricsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_logging_v2_ListLogMetricsRequest(buffer_arg) {
  return google_logging_v2_logging_metrics_pb.ListLogMetricsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_logging_v2_ListLogMetricsResponse(arg) {
  if (!(arg instanceof google_logging_v2_logging_metrics_pb.ListLogMetricsResponse)) {
    throw new Error('Expected argument of type google.logging.v2.ListLogMetricsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_logging_v2_ListLogMetricsResponse(buffer_arg) {
  return google_logging_v2_logging_metrics_pb.ListLogMetricsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_logging_v2_LogMetric(arg) {
  if (!(arg instanceof google_logging_v2_logging_metrics_pb.LogMetric)) {
    throw new Error('Expected argument of type google.logging.v2.LogMetric');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_logging_v2_LogMetric(buffer_arg) {
  return google_logging_v2_logging_metrics_pb.LogMetric.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_logging_v2_UpdateLogMetricRequest(arg) {
  if (!(arg instanceof google_logging_v2_logging_metrics_pb.UpdateLogMetricRequest)) {
    throw new Error('Expected argument of type google.logging.v2.UpdateLogMetricRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_logging_v2_UpdateLogMetricRequest(buffer_arg) {
  return google_logging_v2_logging_metrics_pb.UpdateLogMetricRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


// Service for configuring logs-based metrics.
var MetricsServiceV2Service = exports.MetricsServiceV2Service = {
  // Lists logs-based metrics.
  listLogMetrics: {
    path: '/google.logging.v2.MetricsServiceV2/ListLogMetrics',
    requestStream: false,
    responseStream: false,
    requestType: google_logging_v2_logging_metrics_pb.ListLogMetricsRequest,
    responseType: google_logging_v2_logging_metrics_pb.ListLogMetricsResponse,
    requestSerialize: serialize_google_logging_v2_ListLogMetricsRequest,
    requestDeserialize: deserialize_google_logging_v2_ListLogMetricsRequest,
    responseSerialize: serialize_google_logging_v2_ListLogMetricsResponse,
    responseDeserialize: deserialize_google_logging_v2_ListLogMetricsResponse,
  },
  // Gets a logs-based metric.
  getLogMetric: {
    path: '/google.logging.v2.MetricsServiceV2/GetLogMetric',
    requestStream: false,
    responseStream: false,
    requestType: google_logging_v2_logging_metrics_pb.GetLogMetricRequest,
    responseType: google_logging_v2_logging_metrics_pb.LogMetric,
    requestSerialize: serialize_google_logging_v2_GetLogMetricRequest,
    requestDeserialize: deserialize_google_logging_v2_GetLogMetricRequest,
    responseSerialize: serialize_google_logging_v2_LogMetric,
    responseDeserialize: deserialize_google_logging_v2_LogMetric,
  },
  // Creates a logs-based metric.
  createLogMetric: {
    path: '/google.logging.v2.MetricsServiceV2/CreateLogMetric',
    requestStream: false,
    responseStream: false,
    requestType: google_logging_v2_logging_metrics_pb.CreateLogMetricRequest,
    responseType: google_logging_v2_logging_metrics_pb.LogMetric,
    requestSerialize: serialize_google_logging_v2_CreateLogMetricRequest,
    requestDeserialize: deserialize_google_logging_v2_CreateLogMetricRequest,
    responseSerialize: serialize_google_logging_v2_LogMetric,
    responseDeserialize: deserialize_google_logging_v2_LogMetric,
  },
  // Creates or updates a logs-based metric.
  updateLogMetric: {
    path: '/google.logging.v2.MetricsServiceV2/UpdateLogMetric',
    requestStream: false,
    responseStream: false,
    requestType: google_logging_v2_logging_metrics_pb.UpdateLogMetricRequest,
    responseType: google_logging_v2_logging_metrics_pb.LogMetric,
    requestSerialize: serialize_google_logging_v2_UpdateLogMetricRequest,
    requestDeserialize: deserialize_google_logging_v2_UpdateLogMetricRequest,
    responseSerialize: serialize_google_logging_v2_LogMetric,
    responseDeserialize: deserialize_google_logging_v2_LogMetric,
  },
  // Deletes a logs-based metric.
  deleteLogMetric: {
    path: '/google.logging.v2.MetricsServiceV2/DeleteLogMetric',
    requestStream: false,
    responseStream: false,
    requestType: google_logging_v2_logging_metrics_pb.DeleteLogMetricRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_logging_v2_DeleteLogMetricRequest,
    requestDeserialize: deserialize_google_logging_v2_DeleteLogMetricRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.MetricsServiceV2Client = grpc.makeGenericClientConstructor(MetricsServiceV2Service);
