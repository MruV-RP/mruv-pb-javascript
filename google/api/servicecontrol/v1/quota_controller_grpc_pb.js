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
var google_api_servicecontrol_v1_quota_controller_pb = require('../../../../google/api/servicecontrol/v1/quota_controller_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_api_servicecontrol_v1_metric_value_pb = require('../../../../google/api/servicecontrol/v1/metric_value_pb.js');

function serialize_google_api_servicecontrol_v1_AllocateQuotaRequest(arg) {
  if (!(arg instanceof google_api_servicecontrol_v1_quota_controller_pb.AllocateQuotaRequest)) {
    throw new Error('Expected argument of type google.api.servicecontrol.v1.AllocateQuotaRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_api_servicecontrol_v1_AllocateQuotaRequest(buffer_arg) {
  return google_api_servicecontrol_v1_quota_controller_pb.AllocateQuotaRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_api_servicecontrol_v1_AllocateQuotaResponse(arg) {
  if (!(arg instanceof google_api_servicecontrol_v1_quota_controller_pb.AllocateQuotaResponse)) {
    throw new Error('Expected argument of type google.api.servicecontrol.v1.AllocateQuotaResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_api_servicecontrol_v1_AllocateQuotaResponse(buffer_arg) {
  return google_api_servicecontrol_v1_quota_controller_pb.AllocateQuotaResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// [Google Quota Control API](/service-control/overview)
//
// Allows clients to allocate and release quota against a [managed
// service](https://cloud.google.com/service-management/reference/rpc/google.api/servicemanagement.v1#google.api.servicemanagement.v1.ManagedService).
var QuotaControllerService = exports.QuotaControllerService = {
  // Attempts to allocate quota for the specified consumer. It should be called
  // before the operation is executed.
  //
  // This method requires the `servicemanagement.services.quota`
  // permission on the specified service. For more information, see
  // [Cloud IAM](https://cloud.google.com/iam).
  //
  // **NOTE:** The client **must** fail-open on server errors `INTERNAL`,
  // `UNKNOWN`, `DEADLINE_EXCEEDED`, and `UNAVAILABLE`. To ensure system
  // reliability, the server may inject these errors to prohibit any hard
  // dependency on the quota functionality.
  allocateQuota: {
    path: '/google.api.servicecontrol.v1.QuotaController/AllocateQuota',
    requestStream: false,
    responseStream: false,
    requestType: google_api_servicecontrol_v1_quota_controller_pb.AllocateQuotaRequest,
    responseType: google_api_servicecontrol_v1_quota_controller_pb.AllocateQuotaResponse,
    requestSerialize: serialize_google_api_servicecontrol_v1_AllocateQuotaRequest,
    requestDeserialize: deserialize_google_api_servicecontrol_v1_AllocateQuotaRequest,
    responseSerialize: serialize_google_api_servicecontrol_v1_AllocateQuotaResponse,
    responseDeserialize: deserialize_google_api_servicecontrol_v1_AllocateQuotaResponse,
  },
};

exports.QuotaControllerClient = grpc.makeGenericClientConstructor(QuotaControllerService);
