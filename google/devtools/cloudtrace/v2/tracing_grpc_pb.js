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
var google_devtools_cloudtrace_v2_tracing_pb = require('../../../../google/devtools/cloudtrace/v2/tracing_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_api_client_pb = require('../../../../google/api/client_pb.js');
var google_api_field_behavior_pb = require('../../../../google/api/field_behavior_pb.js');
var google_api_resource_pb = require('../../../../google/api/resource_pb.js');
var google_devtools_cloudtrace_v2_trace_pb = require('../../../../google/devtools/cloudtrace/v2/trace_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_google_devtools_cloudtrace_v2_BatchWriteSpansRequest(arg) {
  if (!(arg instanceof google_devtools_cloudtrace_v2_tracing_pb.BatchWriteSpansRequest)) {
    throw new Error('Expected argument of type google.devtools.cloudtrace.v2.BatchWriteSpansRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_cloudtrace_v2_BatchWriteSpansRequest(buffer_arg) {
  return google_devtools_cloudtrace_v2_tracing_pb.BatchWriteSpansRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_cloudtrace_v2_Span(arg) {
  if (!(arg instanceof google_devtools_cloudtrace_v2_trace_pb.Span)) {
    throw new Error('Expected argument of type google.devtools.cloudtrace.v2.Span');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_cloudtrace_v2_Span(buffer_arg) {
  return google_devtools_cloudtrace_v2_trace_pb.Span.deserializeBinary(new Uint8Array(buffer_arg));
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
// timed event which forms a node of the trace tree. A single trace may
// contain span(s) from multiple services.
var TraceServiceService = exports.TraceServiceService = {
  // Sends new spans to new or existing traces. You cannot update
  // existing spans.
  batchWriteSpans: {
    path: '/google.devtools.cloudtrace.v2.TraceService/BatchWriteSpans',
    requestStream: false,
    responseStream: false,
    requestType: google_devtools_cloudtrace_v2_tracing_pb.BatchWriteSpansRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_devtools_cloudtrace_v2_BatchWriteSpansRequest,
    requestDeserialize: deserialize_google_devtools_cloudtrace_v2_BatchWriteSpansRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Creates a new span.
  createSpan: {
    path: '/google.devtools.cloudtrace.v2.TraceService/CreateSpan',
    requestStream: false,
    responseStream: false,
    requestType: google_devtools_cloudtrace_v2_trace_pb.Span,
    responseType: google_devtools_cloudtrace_v2_trace_pb.Span,
    requestSerialize: serialize_google_devtools_cloudtrace_v2_Span,
    requestDeserialize: deserialize_google_devtools_cloudtrace_v2_Span,
    responseSerialize: serialize_google_devtools_cloudtrace_v2_Span,
    responseDeserialize: deserialize_google_devtools_cloudtrace_v2_Span,
  },
};

exports.TraceServiceClient = grpc.makeGenericClientConstructor(TraceServiceService);
