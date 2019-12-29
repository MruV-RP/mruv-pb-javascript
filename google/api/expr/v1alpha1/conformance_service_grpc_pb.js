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
var google_api_expr_v1alpha1_conformance_service_pb = require('../../../../google/api/expr/v1alpha1/conformance_service_pb.js');
var google_api_client_pb = require('../../../../google/api/client_pb.js');
var google_api_expr_v1alpha1_checked_pb = require('../../../../google/api/expr/v1alpha1/checked_pb.js');
var google_api_expr_v1alpha1_eval_pb = require('../../../../google/api/expr/v1alpha1/eval_pb.js');
var google_api_expr_v1alpha1_syntax_pb = require('../../../../google/api/expr/v1alpha1/syntax_pb.js');
var google_api_field_behavior_pb = require('../../../../google/api/field_behavior_pb.js');
var google_rpc_status_pb = require('../../../../google/rpc/status_pb.js');

function serialize_google_api_expr_v1alpha1_CheckRequest(arg) {
  if (!(arg instanceof google_api_expr_v1alpha1_conformance_service_pb.CheckRequest)) {
    throw new Error('Expected argument of type google.api.expr.v1alpha1.CheckRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_api_expr_v1alpha1_CheckRequest(buffer_arg) {
  return google_api_expr_v1alpha1_conformance_service_pb.CheckRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_api_expr_v1alpha1_CheckResponse(arg) {
  if (!(arg instanceof google_api_expr_v1alpha1_conformance_service_pb.CheckResponse)) {
    throw new Error('Expected argument of type google.api.expr.v1alpha1.CheckResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_api_expr_v1alpha1_CheckResponse(buffer_arg) {
  return google_api_expr_v1alpha1_conformance_service_pb.CheckResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_api_expr_v1alpha1_EvalRequest(arg) {
  if (!(arg instanceof google_api_expr_v1alpha1_conformance_service_pb.EvalRequest)) {
    throw new Error('Expected argument of type google.api.expr.v1alpha1.EvalRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_api_expr_v1alpha1_EvalRequest(buffer_arg) {
  return google_api_expr_v1alpha1_conformance_service_pb.EvalRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_api_expr_v1alpha1_EvalResponse(arg) {
  if (!(arg instanceof google_api_expr_v1alpha1_conformance_service_pb.EvalResponse)) {
    throw new Error('Expected argument of type google.api.expr.v1alpha1.EvalResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_api_expr_v1alpha1_EvalResponse(buffer_arg) {
  return google_api_expr_v1alpha1_conformance_service_pb.EvalResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_api_expr_v1alpha1_ParseRequest(arg) {
  if (!(arg instanceof google_api_expr_v1alpha1_conformance_service_pb.ParseRequest)) {
    throw new Error('Expected argument of type google.api.expr.v1alpha1.ParseRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_api_expr_v1alpha1_ParseRequest(buffer_arg) {
  return google_api_expr_v1alpha1_conformance_service_pb.ParseRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_api_expr_v1alpha1_ParseResponse(arg) {
  if (!(arg instanceof google_api_expr_v1alpha1_conformance_service_pb.ParseResponse)) {
    throw new Error('Expected argument of type google.api.expr.v1alpha1.ParseResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_api_expr_v1alpha1_ParseResponse(buffer_arg) {
  return google_api_expr_v1alpha1_conformance_service_pb.ParseResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Access a CEL implementation from another process or machine.
// A CEL implementation is decomposed as a parser, a static checker,
// and an evaluator.  Every CEL implementation is expected to provide
// a server for this API.  The API will be used for conformance testing
// and other utilities.
var ConformanceServiceService = exports.ConformanceServiceService = {
  // Transforms CEL source text into a parsed representation.
  parse: {
    path: '/google.api.expr.v1alpha1.ConformanceService/Parse',
    requestStream: false,
    responseStream: false,
    requestType: google_api_expr_v1alpha1_conformance_service_pb.ParseRequest,
    responseType: google_api_expr_v1alpha1_conformance_service_pb.ParseResponse,
    requestSerialize: serialize_google_api_expr_v1alpha1_ParseRequest,
    requestDeserialize: deserialize_google_api_expr_v1alpha1_ParseRequest,
    responseSerialize: serialize_google_api_expr_v1alpha1_ParseResponse,
    responseDeserialize: deserialize_google_api_expr_v1alpha1_ParseResponse,
  },
  // Runs static checks on a parsed CEL representation and return
  // an annotated representation, or a set of issues.
  check: {
    path: '/google.api.expr.v1alpha1.ConformanceService/Check',
    requestStream: false,
    responseStream: false,
    requestType: google_api_expr_v1alpha1_conformance_service_pb.CheckRequest,
    responseType: google_api_expr_v1alpha1_conformance_service_pb.CheckResponse,
    requestSerialize: serialize_google_api_expr_v1alpha1_CheckRequest,
    requestDeserialize: deserialize_google_api_expr_v1alpha1_CheckRequest,
    responseSerialize: serialize_google_api_expr_v1alpha1_CheckResponse,
    responseDeserialize: deserialize_google_api_expr_v1alpha1_CheckResponse,
  },
  // Evaluates a parsed or annotation CEL representation given
  // values of external bindings.
  eval: {
    path: '/google.api.expr.v1alpha1.ConformanceService/Eval',
    requestStream: false,
    responseStream: false,
    requestType: google_api_expr_v1alpha1_conformance_service_pb.EvalRequest,
    responseType: google_api_expr_v1alpha1_conformance_service_pb.EvalResponse,
    requestSerialize: serialize_google_api_expr_v1alpha1_EvalRequest,
    requestDeserialize: deserialize_google_api_expr_v1alpha1_EvalRequest,
    responseSerialize: serialize_google_api_expr_v1alpha1_EvalResponse,
    responseDeserialize: deserialize_google_api_expr_v1alpha1_EvalResponse,
  },
};

exports.ConformanceServiceClient = grpc.makeGenericClientConstructor(ConformanceServiceService);
