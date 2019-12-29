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
var google_cloud_texttospeech_v1_cloud_tts_pb = require('../../../../google/cloud/texttospeech/v1/cloud_tts_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_api_client_pb = require('../../../../google/api/client_pb.js');
var google_api_field_behavior_pb = require('../../../../google/api/field_behavior_pb.js');

function serialize_google_cloud_texttospeech_v1_ListVoicesRequest(arg) {
  if (!(arg instanceof google_cloud_texttospeech_v1_cloud_tts_pb.ListVoicesRequest)) {
    throw new Error('Expected argument of type google.cloud.texttospeech.v1.ListVoicesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_texttospeech_v1_ListVoicesRequest(buffer_arg) {
  return google_cloud_texttospeech_v1_cloud_tts_pb.ListVoicesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_texttospeech_v1_ListVoicesResponse(arg) {
  if (!(arg instanceof google_cloud_texttospeech_v1_cloud_tts_pb.ListVoicesResponse)) {
    throw new Error('Expected argument of type google.cloud.texttospeech.v1.ListVoicesResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_texttospeech_v1_ListVoicesResponse(buffer_arg) {
  return google_cloud_texttospeech_v1_cloud_tts_pb.ListVoicesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_texttospeech_v1_SynthesizeSpeechRequest(arg) {
  if (!(arg instanceof google_cloud_texttospeech_v1_cloud_tts_pb.SynthesizeSpeechRequest)) {
    throw new Error('Expected argument of type google.cloud.texttospeech.v1.SynthesizeSpeechRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_texttospeech_v1_SynthesizeSpeechRequest(buffer_arg) {
  return google_cloud_texttospeech_v1_cloud_tts_pb.SynthesizeSpeechRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_texttospeech_v1_SynthesizeSpeechResponse(arg) {
  if (!(arg instanceof google_cloud_texttospeech_v1_cloud_tts_pb.SynthesizeSpeechResponse)) {
    throw new Error('Expected argument of type google.cloud.texttospeech.v1.SynthesizeSpeechResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_texttospeech_v1_SynthesizeSpeechResponse(buffer_arg) {
  return google_cloud_texttospeech_v1_cloud_tts_pb.SynthesizeSpeechResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Service that implements Google Cloud Text-to-Speech API.
var TextToSpeechService = exports.TextToSpeechService = {
  // Returns a list of Voice supported for synthesis.
  listVoices: {
    path: '/google.cloud.texttospeech.v1.TextToSpeech/ListVoices',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_texttospeech_v1_cloud_tts_pb.ListVoicesRequest,
    responseType: google_cloud_texttospeech_v1_cloud_tts_pb.ListVoicesResponse,
    requestSerialize: serialize_google_cloud_texttospeech_v1_ListVoicesRequest,
    requestDeserialize: deserialize_google_cloud_texttospeech_v1_ListVoicesRequest,
    responseSerialize: serialize_google_cloud_texttospeech_v1_ListVoicesResponse,
    responseDeserialize: deserialize_google_cloud_texttospeech_v1_ListVoicesResponse,
  },
  // Synthesizes speech synchronously: receive results after all text input
  // has been processed.
  synthesizeSpeech: {
    path: '/google.cloud.texttospeech.v1.TextToSpeech/SynthesizeSpeech',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_texttospeech_v1_cloud_tts_pb.SynthesizeSpeechRequest,
    responseType: google_cloud_texttospeech_v1_cloud_tts_pb.SynthesizeSpeechResponse,
    requestSerialize: serialize_google_cloud_texttospeech_v1_SynthesizeSpeechRequest,
    requestDeserialize: deserialize_google_cloud_texttospeech_v1_SynthesizeSpeechRequest,
    responseSerialize: serialize_google_cloud_texttospeech_v1_SynthesizeSpeechResponse,
    responseDeserialize: deserialize_google_cloud_texttospeech_v1_SynthesizeSpeechResponse,
  },
};

exports.TextToSpeechClient = grpc.makeGenericClientConstructor(TextToSpeechService);
