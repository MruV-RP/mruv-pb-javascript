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
var google_cloud_talent_v4beta1_completion_service_pb = require('../../../../google/cloud/talent/v4beta1/completion_service_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_api_client_pb = require('../../../../google/api/client_pb.js');
var google_api_field_behavior_pb = require('../../../../google/api/field_behavior_pb.js');
var google_cloud_talent_v4beta1_common_pb = require('../../../../google/cloud/talent/v4beta1/common_pb.js');

function serialize_google_cloud_talent_v4beta1_CompleteQueryRequest(arg) {
  if (!(arg instanceof google_cloud_talent_v4beta1_completion_service_pb.CompleteQueryRequest)) {
    throw new Error('Expected argument of type google.cloud.talent.v4beta1.CompleteQueryRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_talent_v4beta1_CompleteQueryRequest(buffer_arg) {
  return google_cloud_talent_v4beta1_completion_service_pb.CompleteQueryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_talent_v4beta1_CompleteQueryResponse(arg) {
  if (!(arg instanceof google_cloud_talent_v4beta1_completion_service_pb.CompleteQueryResponse)) {
    throw new Error('Expected argument of type google.cloud.talent.v4beta1.CompleteQueryResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_talent_v4beta1_CompleteQueryResponse(buffer_arg) {
  return google_cloud_talent_v4beta1_completion_service_pb.CompleteQueryResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// A service handles auto completion.
var CompletionService = exports.CompletionService = {
  // Completes the specified prefix with keyword suggestions.
  // Intended for use by a job search auto-complete search box.
  completeQuery: {
    path: '/google.cloud.talent.v4beta1.Completion/CompleteQuery',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_talent_v4beta1_completion_service_pb.CompleteQueryRequest,
    responseType: google_cloud_talent_v4beta1_completion_service_pb.CompleteQueryResponse,
    requestSerialize: serialize_google_cloud_talent_v4beta1_CompleteQueryRequest,
    requestDeserialize: deserialize_google_cloud_talent_v4beta1_CompleteQueryRequest,
    responseSerialize: serialize_google_cloud_talent_v4beta1_CompleteQueryResponse,
    responseDeserialize: deserialize_google_cloud_talent_v4beta1_CompleteQueryResponse,
  },
};

exports.CompletionClient = grpc.makeGenericClientConstructor(CompletionService);
