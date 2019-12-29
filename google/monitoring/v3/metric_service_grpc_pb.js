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
var google_monitoring_v3_metric_service_pb = require('../../../google/monitoring/v3/metric_service_pb.js');
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
var google_api_metric_pb = require('../../../google/api/metric_pb.js');
var google_api_monitored_resource_pb = require('../../../google/api/monitored_resource_pb.js');
var google_monitoring_v3_alert_pb = require('../../../google/monitoring/v3/alert_pb.js');
var google_monitoring_v3_common_pb = require('../../../google/monitoring/v3/common_pb.js');
var google_monitoring_v3_metric_pb = require('../../../google/monitoring/v3/metric_pb.js');
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_rpc_status_pb = require('../../../google/rpc/status_pb.js');
var google_api_client_pb = require('../../../google/api/client_pb.js');

function serialize_google_api_MetricDescriptor(arg) {
  if (!(arg instanceof google_api_metric_pb.MetricDescriptor)) {
    throw new Error('Expected argument of type google.api.MetricDescriptor');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_api_MetricDescriptor(buffer_arg) {
  return google_api_metric_pb.MetricDescriptor.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_api_MonitoredResourceDescriptor(arg) {
  if (!(arg instanceof google_api_monitored_resource_pb.MonitoredResourceDescriptor)) {
    throw new Error('Expected argument of type google.api.MonitoredResourceDescriptor');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_api_MonitoredResourceDescriptor(buffer_arg) {
  return google_api_monitored_resource_pb.MonitoredResourceDescriptor.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_monitoring_v3_CreateMetricDescriptorRequest(arg) {
  if (!(arg instanceof google_monitoring_v3_metric_service_pb.CreateMetricDescriptorRequest)) {
    throw new Error('Expected argument of type google.monitoring.v3.CreateMetricDescriptorRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_monitoring_v3_CreateMetricDescriptorRequest(buffer_arg) {
  return google_monitoring_v3_metric_service_pb.CreateMetricDescriptorRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_monitoring_v3_CreateTimeSeriesRequest(arg) {
  if (!(arg instanceof google_monitoring_v3_metric_service_pb.CreateTimeSeriesRequest)) {
    throw new Error('Expected argument of type google.monitoring.v3.CreateTimeSeriesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_monitoring_v3_CreateTimeSeriesRequest(buffer_arg) {
  return google_monitoring_v3_metric_service_pb.CreateTimeSeriesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_monitoring_v3_DeleteMetricDescriptorRequest(arg) {
  if (!(arg instanceof google_monitoring_v3_metric_service_pb.DeleteMetricDescriptorRequest)) {
    throw new Error('Expected argument of type google.monitoring.v3.DeleteMetricDescriptorRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_monitoring_v3_DeleteMetricDescriptorRequest(buffer_arg) {
  return google_monitoring_v3_metric_service_pb.DeleteMetricDescriptorRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_monitoring_v3_GetMetricDescriptorRequest(arg) {
  if (!(arg instanceof google_monitoring_v3_metric_service_pb.GetMetricDescriptorRequest)) {
    throw new Error('Expected argument of type google.monitoring.v3.GetMetricDescriptorRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_monitoring_v3_GetMetricDescriptorRequest(buffer_arg) {
  return google_monitoring_v3_metric_service_pb.GetMetricDescriptorRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_monitoring_v3_GetMonitoredResourceDescriptorRequest(arg) {
  if (!(arg instanceof google_monitoring_v3_metric_service_pb.GetMonitoredResourceDescriptorRequest)) {
    throw new Error('Expected argument of type google.monitoring.v3.GetMonitoredResourceDescriptorRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_monitoring_v3_GetMonitoredResourceDescriptorRequest(buffer_arg) {
  return google_monitoring_v3_metric_service_pb.GetMonitoredResourceDescriptorRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_monitoring_v3_ListMetricDescriptorsRequest(arg) {
  if (!(arg instanceof google_monitoring_v3_metric_service_pb.ListMetricDescriptorsRequest)) {
    throw new Error('Expected argument of type google.monitoring.v3.ListMetricDescriptorsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_monitoring_v3_ListMetricDescriptorsRequest(buffer_arg) {
  return google_monitoring_v3_metric_service_pb.ListMetricDescriptorsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_monitoring_v3_ListMetricDescriptorsResponse(arg) {
  if (!(arg instanceof google_monitoring_v3_metric_service_pb.ListMetricDescriptorsResponse)) {
    throw new Error('Expected argument of type google.monitoring.v3.ListMetricDescriptorsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_monitoring_v3_ListMetricDescriptorsResponse(buffer_arg) {
  return google_monitoring_v3_metric_service_pb.ListMetricDescriptorsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_monitoring_v3_ListMonitoredResourceDescriptorsRequest(arg) {
  if (!(arg instanceof google_monitoring_v3_metric_service_pb.ListMonitoredResourceDescriptorsRequest)) {
    throw new Error('Expected argument of type google.monitoring.v3.ListMonitoredResourceDescriptorsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_monitoring_v3_ListMonitoredResourceDescriptorsRequest(buffer_arg) {
  return google_monitoring_v3_metric_service_pb.ListMonitoredResourceDescriptorsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_monitoring_v3_ListMonitoredResourceDescriptorsResponse(arg) {
  if (!(arg instanceof google_monitoring_v3_metric_service_pb.ListMonitoredResourceDescriptorsResponse)) {
    throw new Error('Expected argument of type google.monitoring.v3.ListMonitoredResourceDescriptorsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_monitoring_v3_ListMonitoredResourceDescriptorsResponse(buffer_arg) {
  return google_monitoring_v3_metric_service_pb.ListMonitoredResourceDescriptorsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_monitoring_v3_ListTimeSeriesRequest(arg) {
  if (!(arg instanceof google_monitoring_v3_metric_service_pb.ListTimeSeriesRequest)) {
    throw new Error('Expected argument of type google.monitoring.v3.ListTimeSeriesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_monitoring_v3_ListTimeSeriesRequest(buffer_arg) {
  return google_monitoring_v3_metric_service_pb.ListTimeSeriesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_monitoring_v3_ListTimeSeriesResponse(arg) {
  if (!(arg instanceof google_monitoring_v3_metric_service_pb.ListTimeSeriesResponse)) {
    throw new Error('Expected argument of type google.monitoring.v3.ListTimeSeriesResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_monitoring_v3_ListTimeSeriesResponse(buffer_arg) {
  return google_monitoring_v3_metric_service_pb.ListTimeSeriesResponse.deserializeBinary(new Uint8Array(buffer_arg));
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


// Manages metric descriptors, monitored resource descriptors, and
// time series data.
var MetricServiceService = exports.MetricServiceService = {
  // Lists monitored resource descriptors that match a filter. This method does not require a Stackdriver account.
  listMonitoredResourceDescriptors: {
    path: '/google.monitoring.v3.MetricService/ListMonitoredResourceDescriptors',
    requestStream: false,
    responseStream: false,
    requestType: google_monitoring_v3_metric_service_pb.ListMonitoredResourceDescriptorsRequest,
    responseType: google_monitoring_v3_metric_service_pb.ListMonitoredResourceDescriptorsResponse,
    requestSerialize: serialize_google_monitoring_v3_ListMonitoredResourceDescriptorsRequest,
    requestDeserialize: deserialize_google_monitoring_v3_ListMonitoredResourceDescriptorsRequest,
    responseSerialize: serialize_google_monitoring_v3_ListMonitoredResourceDescriptorsResponse,
    responseDeserialize: deserialize_google_monitoring_v3_ListMonitoredResourceDescriptorsResponse,
  },
  // Gets a single monitored resource descriptor. This method does not require a Stackdriver account.
  getMonitoredResourceDescriptor: {
    path: '/google.monitoring.v3.MetricService/GetMonitoredResourceDescriptor',
    requestStream: false,
    responseStream: false,
    requestType: google_monitoring_v3_metric_service_pb.GetMonitoredResourceDescriptorRequest,
    responseType: google_api_monitored_resource_pb.MonitoredResourceDescriptor,
    requestSerialize: serialize_google_monitoring_v3_GetMonitoredResourceDescriptorRequest,
    requestDeserialize: deserialize_google_monitoring_v3_GetMonitoredResourceDescriptorRequest,
    responseSerialize: serialize_google_api_MonitoredResourceDescriptor,
    responseDeserialize: deserialize_google_api_MonitoredResourceDescriptor,
  },
  // Lists metric descriptors that match a filter. This method does not require a Stackdriver account.
  listMetricDescriptors: {
    path: '/google.monitoring.v3.MetricService/ListMetricDescriptors',
    requestStream: false,
    responseStream: false,
    requestType: google_monitoring_v3_metric_service_pb.ListMetricDescriptorsRequest,
    responseType: google_monitoring_v3_metric_service_pb.ListMetricDescriptorsResponse,
    requestSerialize: serialize_google_monitoring_v3_ListMetricDescriptorsRequest,
    requestDeserialize: deserialize_google_monitoring_v3_ListMetricDescriptorsRequest,
    responseSerialize: serialize_google_monitoring_v3_ListMetricDescriptorsResponse,
    responseDeserialize: deserialize_google_monitoring_v3_ListMetricDescriptorsResponse,
  },
  // Gets a single metric descriptor. This method does not require a Stackdriver account.
  getMetricDescriptor: {
    path: '/google.monitoring.v3.MetricService/GetMetricDescriptor',
    requestStream: false,
    responseStream: false,
    requestType: google_monitoring_v3_metric_service_pb.GetMetricDescriptorRequest,
    responseType: google_api_metric_pb.MetricDescriptor,
    requestSerialize: serialize_google_monitoring_v3_GetMetricDescriptorRequest,
    requestDeserialize: deserialize_google_monitoring_v3_GetMetricDescriptorRequest,
    responseSerialize: serialize_google_api_MetricDescriptor,
    responseDeserialize: deserialize_google_api_MetricDescriptor,
  },
  // Creates a new metric descriptor.
  // User-created metric descriptors define
  // [custom metrics](/monitoring/custom-metrics).
  createMetricDescriptor: {
    path: '/google.monitoring.v3.MetricService/CreateMetricDescriptor',
    requestStream: false,
    responseStream: false,
    requestType: google_monitoring_v3_metric_service_pb.CreateMetricDescriptorRequest,
    responseType: google_api_metric_pb.MetricDescriptor,
    requestSerialize: serialize_google_monitoring_v3_CreateMetricDescriptorRequest,
    requestDeserialize: deserialize_google_monitoring_v3_CreateMetricDescriptorRequest,
    responseSerialize: serialize_google_api_MetricDescriptor,
    responseDeserialize: deserialize_google_api_MetricDescriptor,
  },
  // Deletes a metric descriptor. Only user-created
  // [custom metrics](/monitoring/custom-metrics) can be deleted.
  deleteMetricDescriptor: {
    path: '/google.monitoring.v3.MetricService/DeleteMetricDescriptor',
    requestStream: false,
    responseStream: false,
    requestType: google_monitoring_v3_metric_service_pb.DeleteMetricDescriptorRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_monitoring_v3_DeleteMetricDescriptorRequest,
    requestDeserialize: deserialize_google_monitoring_v3_DeleteMetricDescriptorRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Lists time series that match a filter. This method does not require a Stackdriver account.
  listTimeSeries: {
    path: '/google.monitoring.v3.MetricService/ListTimeSeries',
    requestStream: false,
    responseStream: false,
    requestType: google_monitoring_v3_metric_service_pb.ListTimeSeriesRequest,
    responseType: google_monitoring_v3_metric_service_pb.ListTimeSeriesResponse,
    requestSerialize: serialize_google_monitoring_v3_ListTimeSeriesRequest,
    requestDeserialize: deserialize_google_monitoring_v3_ListTimeSeriesRequest,
    responseSerialize: serialize_google_monitoring_v3_ListTimeSeriesResponse,
    responseDeserialize: deserialize_google_monitoring_v3_ListTimeSeriesResponse,
  },
  // Creates or adds data to one or more time series.
  // The response is empty if all time series in the request were written.
  // If any time series could not be written, a corresponding failure message is
  // included in the error response.
  createTimeSeries: {
    path: '/google.monitoring.v3.MetricService/CreateTimeSeries',
    requestStream: false,
    responseStream: false,
    requestType: google_monitoring_v3_metric_service_pb.CreateTimeSeriesRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_monitoring_v3_CreateTimeSeriesRequest,
    requestDeserialize: deserialize_google_monitoring_v3_CreateTimeSeriesRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.MetricServiceClient = grpc.makeGenericClientConstructor(MetricServiceService);
