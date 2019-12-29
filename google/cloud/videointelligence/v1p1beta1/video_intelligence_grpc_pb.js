// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright 2018 Google Inc.
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
var google_cloud_videointelligence_v1p1beta1_video_intelligence_pb = require('../../../../google/cloud/videointelligence/v1p1beta1/video_intelligence_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_longrunning_operations_pb = require('../../../../google/longrunning/operations_pb.js');
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_rpc_status_pb = require('../../../../google/rpc/status_pb.js');

function serialize_google_cloud_videointelligence_v1p1beta1_AnnotateVideoRequest(arg) {
  if (!(arg instanceof google_cloud_videointelligence_v1p1beta1_video_intelligence_pb.AnnotateVideoRequest)) {
    throw new Error('Expected argument of type google.cloud.videointelligence.v1p1beta1.AnnotateVideoRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_videointelligence_v1p1beta1_AnnotateVideoRequest(buffer_arg) {
  return google_cloud_videointelligence_v1p1beta1_video_intelligence_pb.AnnotateVideoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_longrunning_Operation(arg) {
  if (!(arg instanceof google_longrunning_operations_pb.Operation)) {
    throw new Error('Expected argument of type google.longrunning.Operation');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_longrunning_Operation(buffer_arg) {
  return google_longrunning_operations_pb.Operation.deserializeBinary(new Uint8Array(buffer_arg));
}


// Service that implements Google Cloud Video Intelligence API.
var VideoIntelligenceServiceService = exports.VideoIntelligenceServiceService = {
  // Performs asynchronous video annotation. Progress and results can be
  // retrieved through the `google.longrunning.Operations` interface.
  // `Operation.metadata` contains `AnnotateVideoProgress` (progress).
  // `Operation.response` contains `AnnotateVideoResponse` (results).
  annotateVideo: {
    path: '/google.cloud.videointelligence.v1p1beta1.VideoIntelligenceService/AnnotateVideo',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_videointelligence_v1p1beta1_video_intelligence_pb.AnnotateVideoRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_cloud_videointelligence_v1p1beta1_AnnotateVideoRequest,
    requestDeserialize: deserialize_google_cloud_videointelligence_v1p1beta1_AnnotateVideoRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
};

exports.VideoIntelligenceServiceClient = grpc.makeGenericClientConstructor(VideoIntelligenceServiceService);
