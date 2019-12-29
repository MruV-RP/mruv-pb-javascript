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
'use strict';
var grpc = require('grpc');
var google_devtools_cloudtrace_v1_trace_pb = require('../../../../google/devtools/cloudtrace/v1/trace_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_api_client_pb = require('../../../../google/api/client_pb.js');
var google_api_field_behavior_pb = require('../../../../google/api/field_behavior_pb.js');
var google_api_resource_pb = require('../../../../google/api/resource_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_google_devtools_cloudtrace_v1_GetTraceRequest(arg) {
  if (!(arg instanceof google_devtools_cloudtrace_v1_trace_pb.GetTraceRequest)) {
    throw new Error('Expected argument of type google.devtools.cloudtrace.v1.GetTraceRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_cloudtrace_v1_GetTraceRequest(buffer_arg) {
  return google_devtools_cloudtrace_v1_trace_pb.GetTraceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_cloudtrace_v1_ListTracesRequest(arg) {
  if (!(arg instanceof google_devtools_cloudtrace_v1_trace_pb.ListTracesRequest)) {
    throw new Error('Expected argument of type google.devtools.cloudtrace.v1.ListTracesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_cloudtrace_v1_ListTracesRequest(buffer_arg) {
  return google_devtools_cloudtrace_v1_trace_pb.ListTracesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_cloudtrace_v1_ListTracesResponse(arg) {
  if (!(arg instanceof google_devtools_cloudtrace_v1_trace_pb.ListTracesResponse)) {
    throw new Error('Expected argument of type google.devtools.cloudtrace.v1.ListTracesResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_cloudtrace_v1_ListTracesResponse(buffer_arg) {
  return google_devtools_cloudtrace_v1_trace_pb.ListTracesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_cloudtrace_v1_PatchTracesRequest(arg) {
  if (!(arg instanceof google_devtools_cloudtrace_v1_trace_pb.PatchTracesRequest)) {
    throw new Error('Expected argument of type google.devtools.cloudtrace.v1.PatchTracesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_cloudtrace_v1_PatchTracesRequest(buffer_arg) {
  return google_devtools_cloudtrace_v1_trace_pb.PatchTracesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_cloudtrace_v1_Trace(arg) {
  if (!(arg instanceof google_devtools_cloudtrace_v1_trace_pb.Trace)) {
    throw new Error('Expected argument of type google.devtools.cloudtrace.v1.Trace');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_cloudtrace_v1_Trace(buffer_arg) {
  return google_devtools_cloudtrace_v1_trace_pb.Trace.deserializeBinary(new Uint8Array(buffer_arg));
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


// This file describes an API for collecting and viewing traces and spans
// within a trace.  A Trace is a collection of spans corresponding to a single
// operation or set of operations for an application. A span is an individual
// timed event which forms a node of the trace tree. Spans for a single trace
// may span multiple services.
var TraceServiceService = exports.TraceServiceService = {
  // Returns of a list of traces that match the specified filter conditions.
  listTraces: {
    path: '/google.devtools.cloudtrace.v1.TraceService/ListTraces',
    requestStream: false,
    responseStream: false,
    requestType: google_devtools_cloudtrace_v1_trace_pb.ListTracesRequest,
    responseType: google_devtools_cloudtrace_v1_trace_pb.ListTracesResponse,
    requestSerialize: serialize_google_devtools_cloudtrace_v1_ListTracesRequest,
    requestDeserialize: deserialize_google_devtools_cloudtrace_v1_ListTracesRequest,
    responseSerialize: serialize_google_devtools_cloudtrace_v1_ListTracesResponse,
    responseDeserialize: deserialize_google_devtools_cloudtrace_v1_ListTracesResponse,
  },
  // Gets a single trace by its ID.
  getTrace: {
    path: '/google.devtools.cloudtrace.v1.TraceService/GetTrace',
    requestStream: false,
    responseStream: false,
    requestType: google_devtools_cloudtrace_v1_trace_pb.GetTraceRequest,
    responseType: google_devtools_cloudtrace_v1_trace_pb.Trace,
    requestSerialize: serialize_google_devtools_cloudtrace_v1_GetTraceRequest,
    requestDeserialize: deserialize_google_devtools_cloudtrace_v1_GetTraceRequest,
    responseSerialize: serialize_google_devtools_cloudtrace_v1_Trace,
    responseDeserialize: deserialize_google_devtools_cloudtrace_v1_Trace,
  },
  // Sends new traces to Stackdriver Trace or updates existing traces. If the ID
  // of a trace that you send matches that of an existing trace, any fields
  // in the existing trace and its spans are overwritten by the provided values,
  // and any new fields provided are merged with the existing trace data. If the
  // ID does not match, a new trace is created.
  patchTraces: {
    path: '/google.devtools.cloudtrace.v1.TraceService/PatchTraces',
    requestStream: false,
    responseStream: false,
    requestType: google_devtools_cloudtrace_v1_trace_pb.PatchTracesRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_devtools_cloudtrace_v1_PatchTracesRequest,
    requestDeserialize: deserialize_google_devtools_cloudtrace_v1_PatchTracesRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.TraceServiceClient = grpc.makeGenericClientConstructor(TraceServiceService);
