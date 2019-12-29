// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright 2017 Google Inc.
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
var google_api_servicecontrol_v1_service_controller_pb = require('../../../../google/api/servicecontrol/v1/service_controller_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_api_servicecontrol_v1_check_error_pb = require('../../../../google/api/servicecontrol/v1/check_error_pb.js');
var google_api_servicecontrol_v1_operation_pb = require('../../../../google/api/servicecontrol/v1/operation_pb.js');
var google_rpc_status_pb = require('../../../../google/rpc/status_pb.js');

function serialize_google_api_servicecontrol_v1_CheckRequest(arg) {
  if (!(arg instanceof google_api_servicecontrol_v1_service_controller_pb.CheckRequest)) {
    throw new Error('Expected argument of type google.api.servicecontrol.v1.CheckRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_api_servicecontrol_v1_CheckRequest(buffer_arg) {
  return google_api_servicecontrol_v1_service_controller_pb.CheckRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_api_servicecontrol_v1_CheckResponse(arg) {
  if (!(arg instanceof google_api_servicecontrol_v1_service_controller_pb.CheckResponse)) {
    throw new Error('Expected argument of type google.api.servicecontrol.v1.CheckResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_api_servicecontrol_v1_CheckResponse(buffer_arg) {
  return google_api_servicecontrol_v1_service_controller_pb.CheckResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_api_servicecontrol_v1_ReportRequest(arg) {
  if (!(arg instanceof google_api_servicecontrol_v1_service_controller_pb.ReportRequest)) {
    throw new Error('Expected argument of type google.api.servicecontrol.v1.ReportRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_api_servicecontrol_v1_ReportRequest(buffer_arg) {
  return google_api_servicecontrol_v1_service_controller_pb.ReportRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_api_servicecontrol_v1_ReportResponse(arg) {
  if (!(arg instanceof google_api_servicecontrol_v1_service_controller_pb.ReportResponse)) {
    throw new Error('Expected argument of type google.api.servicecontrol.v1.ReportResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_api_servicecontrol_v1_ReportResponse(buffer_arg) {
  return google_api_servicecontrol_v1_service_controller_pb.ReportResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// [Google Service Control API](/service-control/overview)
//
// Lets clients check and report operations against a [managed
// service](https://cloud.google.com/service-management/reference/rpc/google.api/servicemanagement.v1#google.api.servicemanagement.v1.ManagedService).
var ServiceControllerService = exports.ServiceControllerService = {
  // Checks an operation with Google Service Control to decide whether
  // the given operation should proceed. It should be called before the
  // operation is executed.
  //
  // If feasible, the client should cache the check results and reuse them for
  // 60 seconds. In case of server errors, the client can rely on the cached
  // results for longer time.
  //
  // NOTE: the [CheckRequest][google.api.servicecontrol.v1.CheckRequest] has the
  // size limit of 64KB.
  //
  // This method requires the `servicemanagement.services.check` permission
  // on the specified service. For more information, see
  // [Google Cloud IAM](https://cloud.google.com/iam).
  check: {
    path: '/google.api.servicecontrol.v1.ServiceController/Check',
    requestStream: false,
    responseStream: false,
    requestType: google_api_servicecontrol_v1_service_controller_pb.CheckRequest,
    responseType: google_api_servicecontrol_v1_service_controller_pb.CheckResponse,
    requestSerialize: serialize_google_api_servicecontrol_v1_CheckRequest,
    requestDeserialize: deserialize_google_api_servicecontrol_v1_CheckRequest,
    responseSerialize: serialize_google_api_servicecontrol_v1_CheckResponse,
    responseDeserialize: deserialize_google_api_servicecontrol_v1_CheckResponse,
  },
  // Reports operation results to Google Service Control, such as logs and
  // metrics. It should be called after an operation is completed.
  //
  // If feasible, the client should aggregate reporting data for up to 5
  // seconds to reduce API traffic. Limiting aggregation to 5 seconds is to
  // reduce data loss during client crashes. Clients should carefully choose
  // the aggregation time window to avoid data loss risk more than 0.01%
  // for business and compliance reasons.
  //
  // NOTE: the [ReportRequest][google.api.servicecontrol.v1.ReportRequest] has
  // the size limit of 1MB.
  //
  // This method requires the `servicemanagement.services.report` permission
  // on the specified service. For more information, see
  // [Google Cloud IAM](https://cloud.google.com/iam).
  report: {
    path: '/google.api.servicecontrol.v1.ServiceController/Report',
    requestStream: false,
    responseStream: false,
    requestType: google_api_servicecontrol_v1_service_controller_pb.ReportRequest,
    responseType: google_api_servicecontrol_v1_service_controller_pb.ReportResponse,
    requestSerialize: serialize_google_api_servicecontrol_v1_ReportRequest,
    requestDeserialize: deserialize_google_api_servicecontrol_v1_ReportRequest,
    responseSerialize: serialize_google_api_servicecontrol_v1_ReportResponse,
    responseDeserialize: deserialize_google_api_servicecontrol_v1_ReportResponse,
  },
};

exports.ServiceControllerClient = grpc.makeGenericClientConstructor(ServiceControllerService);
