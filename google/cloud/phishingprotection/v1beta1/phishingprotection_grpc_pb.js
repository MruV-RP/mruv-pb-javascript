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
var google_cloud_phishingprotection_v1beta1_phishingprotection_pb = require('../../../../google/cloud/phishingprotection/v1beta1/phishingprotection_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_api_client_pb = require('../../../../google/api/client_pb.js');
var google_api_field_behavior_pb = require('../../../../google/api/field_behavior_pb.js');
var google_api_resource_pb = require('../../../../google/api/resource_pb.js');

function serialize_google_cloud_phishingprotection_v1beta1_ReportPhishingRequest(arg) {
  if (!(arg instanceof google_cloud_phishingprotection_v1beta1_phishingprotection_pb.ReportPhishingRequest)) {
    throw new Error('Expected argument of type google.cloud.phishingprotection.v1beta1.ReportPhishingRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_phishingprotection_v1beta1_ReportPhishingRequest(buffer_arg) {
  return google_cloud_phishingprotection_v1beta1_phishingprotection_pb.ReportPhishingRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_phishingprotection_v1beta1_ReportPhishingResponse(arg) {
  if (!(arg instanceof google_cloud_phishingprotection_v1beta1_phishingprotection_pb.ReportPhishingResponse)) {
    throw new Error('Expected argument of type google.cloud.phishingprotection.v1beta1.ReportPhishingResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_phishingprotection_v1beta1_ReportPhishingResponse(buffer_arg) {
  return google_cloud_phishingprotection_v1beta1_phishingprotection_pb.ReportPhishingResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Service to report phishing URIs.
var PhishingProtectionServiceV1Beta1Service = exports.PhishingProtectionServiceV1Beta1Service = {
  // Reports a URI suspected of containing phishing content to be reviewed. Once
  // the report review is complete, its result can be found in the Cloud
  // Security Command Center findings dashboard for Phishing Protection. If the
  // result verifies the existence of malicious phishing content, the site will
  // be added the to [Google's Social Engineering
  // lists](https://support.google.com/webmasters/answer/6350487/) in order to
  // protect users that could get exposed to this threat in the future.
  reportPhishing: {
    path: '/google.cloud.phishingprotection.v1beta1.PhishingProtectionServiceV1Beta1/ReportPhishing',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_phishingprotection_v1beta1_phishingprotection_pb.ReportPhishingRequest,
    responseType: google_cloud_phishingprotection_v1beta1_phishingprotection_pb.ReportPhishingResponse,
    requestSerialize: serialize_google_cloud_phishingprotection_v1beta1_ReportPhishingRequest,
    requestDeserialize: deserialize_google_cloud_phishingprotection_v1beta1_ReportPhishingRequest,
    responseSerialize: serialize_google_cloud_phishingprotection_v1beta1_ReportPhishingResponse,
    responseDeserialize: deserialize_google_cloud_phishingprotection_v1beta1_ReportPhishingResponse,
  },
};

exports.PhishingProtectionServiceV1Beta1Client = grpc.makeGenericClientConstructor(PhishingProtectionServiceV1Beta1Service);
