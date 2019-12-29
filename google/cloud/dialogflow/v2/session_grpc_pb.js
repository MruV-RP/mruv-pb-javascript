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
var google_cloud_dialogflow_v2_session_pb = require('../../../../google/cloud/dialogflow/v2/session_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_api_client_pb = require('../../../../google/api/client_pb.js');
var google_api_field_behavior_pb = require('../../../../google/api/field_behavior_pb.js');
var google_cloud_dialogflow_v2_audio_config_pb = require('../../../../google/cloud/dialogflow/v2/audio_config_pb.js');
var google_cloud_dialogflow_v2_context_pb = require('../../../../google/cloud/dialogflow/v2/context_pb.js');
var google_cloud_dialogflow_v2_intent_pb = require('../../../../google/cloud/dialogflow/v2/intent_pb.js');
var google_cloud_dialogflow_v2_session_entity_type_pb = require('../../../../google/cloud/dialogflow/v2/session_entity_type_pb.js');
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
var google_rpc_status_pb = require('../../../../google/rpc/status_pb.js');
var google_type_latlng_pb = require('../../../../google/type/latlng_pb.js');

function serialize_google_cloud_dialogflow_v2_DetectIntentRequest(arg) {
  if (!(arg instanceof google_cloud_dialogflow_v2_session_pb.DetectIntentRequest)) {
    throw new Error('Expected argument of type google.cloud.dialogflow.v2.DetectIntentRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_dialogflow_v2_DetectIntentRequest(buffer_arg) {
  return google_cloud_dialogflow_v2_session_pb.DetectIntentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_dialogflow_v2_DetectIntentResponse(arg) {
  if (!(arg instanceof google_cloud_dialogflow_v2_session_pb.DetectIntentResponse)) {
    throw new Error('Expected argument of type google.cloud.dialogflow.v2.DetectIntentResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_dialogflow_v2_DetectIntentResponse(buffer_arg) {
  return google_cloud_dialogflow_v2_session_pb.DetectIntentResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_dialogflow_v2_StreamingDetectIntentRequest(arg) {
  if (!(arg instanceof google_cloud_dialogflow_v2_session_pb.StreamingDetectIntentRequest)) {
    throw new Error('Expected argument of type google.cloud.dialogflow.v2.StreamingDetectIntentRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_dialogflow_v2_StreamingDetectIntentRequest(buffer_arg) {
  return google_cloud_dialogflow_v2_session_pb.StreamingDetectIntentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_dialogflow_v2_StreamingDetectIntentResponse(arg) {
  if (!(arg instanceof google_cloud_dialogflow_v2_session_pb.StreamingDetectIntentResponse)) {
    throw new Error('Expected argument of type google.cloud.dialogflow.v2.StreamingDetectIntentResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_dialogflow_v2_StreamingDetectIntentResponse(buffer_arg) {
  return google_cloud_dialogflow_v2_session_pb.StreamingDetectIntentResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// A session represents an interaction with a user. You retrieve user input
// and pass it to the [DetectIntent][google.cloud.dialogflow.v2.Sessions.DetectIntent] (or
// [StreamingDetectIntent][google.cloud.dialogflow.v2.Sessions.StreamingDetectIntent]) method to determine
// user intent and respond.
var SessionsService = exports.SessionsService = {
  // Processes a natural language query and returns structured, actionable data
  // as a result. This method is not idempotent, because it may cause contexts
  // and session entity types to be updated, which in turn might affect
  // results of future queries.
  detectIntent: {
    path: '/google.cloud.dialogflow.v2.Sessions/DetectIntent',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_dialogflow_v2_session_pb.DetectIntentRequest,
    responseType: google_cloud_dialogflow_v2_session_pb.DetectIntentResponse,
    requestSerialize: serialize_google_cloud_dialogflow_v2_DetectIntentRequest,
    requestDeserialize: deserialize_google_cloud_dialogflow_v2_DetectIntentRequest,
    responseSerialize: serialize_google_cloud_dialogflow_v2_DetectIntentResponse,
    responseDeserialize: deserialize_google_cloud_dialogflow_v2_DetectIntentResponse,
  },
  // Processes a natural language query in audio format in a streaming fashion
  // and returns structured, actionable data as a result. This method is only
  // available via the gRPC API (not REST).
  streamingDetectIntent: {
    path: '/google.cloud.dialogflow.v2.Sessions/StreamingDetectIntent',
    requestStream: true,
    responseStream: true,
    requestType: google_cloud_dialogflow_v2_session_pb.StreamingDetectIntentRequest,
    responseType: google_cloud_dialogflow_v2_session_pb.StreamingDetectIntentResponse,
    requestSerialize: serialize_google_cloud_dialogflow_v2_StreamingDetectIntentRequest,
    requestDeserialize: deserialize_google_cloud_dialogflow_v2_StreamingDetectIntentRequest,
    responseSerialize: serialize_google_cloud_dialogflow_v2_StreamingDetectIntentResponse,
    responseDeserialize: deserialize_google_cloud_dialogflow_v2_StreamingDetectIntentResponse,
  },
};

exports.SessionsClient = grpc.makeGenericClientConstructor(SessionsService);
