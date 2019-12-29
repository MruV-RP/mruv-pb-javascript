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
var google_devtools_clouderrorreporting_v1beta1_report_errors_service_pb = require('../../../../google/devtools/clouderrorreporting/v1beta1/report_errors_service_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_api_client_pb = require('../../../../google/api/client_pb.js');
var google_api_field_behavior_pb = require('../../../../google/api/field_behavior_pb.js');
var google_api_resource_pb = require('../../../../google/api/resource_pb.js');
var google_devtools_clouderrorreporting_v1beta1_common_pb = require('../../../../google/devtools/clouderrorreporting/v1beta1/common_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_google_devtools_clouderrorreporting_v1beta1_ReportErrorEventRequest(arg) {
  if (!(arg instanceof google_devtools_clouderrorreporting_v1beta1_report_errors_service_pb.ReportErrorEventRequest)) {
    throw new Error('Expected argument of type google.devtools.clouderrorreporting.v1beta1.ReportErrorEventRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_clouderrorreporting_v1beta1_ReportErrorEventRequest(buffer_arg) {
  return google_devtools_clouderrorreporting_v1beta1_report_errors_service_pb.ReportErrorEventRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_clouderrorreporting_v1beta1_ReportErrorEventResponse(arg) {
  if (!(arg instanceof google_devtools_clouderrorreporting_v1beta1_report_errors_service_pb.ReportErrorEventResponse)) {
    throw new Error('Expected argument of type google.devtools.clouderrorreporting.v1beta1.ReportErrorEventResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_clouderrorreporting_v1beta1_ReportErrorEventResponse(buffer_arg) {
  return google_devtools_clouderrorreporting_v1beta1_report_errors_service_pb.ReportErrorEventResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// An API for reporting error events.
var ReportErrorsServiceService = exports.ReportErrorsServiceService = {
  // Report an individual error event.
  //
  // This endpoint accepts **either** an OAuth token,
  // **or** an [API key](https://support.google.com/cloud/answer/6158862)
  // for authentication. To use an API key, append it to the URL as the value of
  // a `key` parameter. For example:
  //
  // `POST
  // https://clouderrorreporting.googleapis.com/v1beta1/projects/example-project/events:report?key=123ABC456`
  reportErrorEvent: {
    path: '/google.devtools.clouderrorreporting.v1beta1.ReportErrorsService/ReportErrorEvent',
    requestStream: false,
    responseStream: false,
    requestType: google_devtools_clouderrorreporting_v1beta1_report_errors_service_pb.ReportErrorEventRequest,
    responseType: google_devtools_clouderrorreporting_v1beta1_report_errors_service_pb.ReportErrorEventResponse,
    requestSerialize: serialize_google_devtools_clouderrorreporting_v1beta1_ReportErrorEventRequest,
    requestDeserialize: deserialize_google_devtools_clouderrorreporting_v1beta1_ReportErrorEventRequest,
    responseSerialize: serialize_google_devtools_clouderrorreporting_v1beta1_ReportErrorEventResponse,
    responseDeserialize: deserialize_google_devtools_clouderrorreporting_v1beta1_ReportErrorEventResponse,
  },
};

exports.ReportErrorsServiceClient = grpc.makeGenericClientConstructor(ReportErrorsServiceService);
