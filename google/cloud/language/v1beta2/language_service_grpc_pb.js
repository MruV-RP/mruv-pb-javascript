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
var google_cloud_language_v1beta2_language_service_pb = require('../../../../google/cloud/language/v1beta2/language_service_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_api_client_pb = require('../../../../google/api/client_pb.js');
var google_api_field_behavior_pb = require('../../../../google/api/field_behavior_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_google_cloud_language_v1beta2_AnalyzeEntitiesRequest(arg) {
  if (!(arg instanceof google_cloud_language_v1beta2_language_service_pb.AnalyzeEntitiesRequest)) {
    throw new Error('Expected argument of type google.cloud.language.v1beta2.AnalyzeEntitiesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_language_v1beta2_AnalyzeEntitiesRequest(buffer_arg) {
  return google_cloud_language_v1beta2_language_service_pb.AnalyzeEntitiesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_language_v1beta2_AnalyzeEntitiesResponse(arg) {
  if (!(arg instanceof google_cloud_language_v1beta2_language_service_pb.AnalyzeEntitiesResponse)) {
    throw new Error('Expected argument of type google.cloud.language.v1beta2.AnalyzeEntitiesResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_language_v1beta2_AnalyzeEntitiesResponse(buffer_arg) {
  return google_cloud_language_v1beta2_language_service_pb.AnalyzeEntitiesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_language_v1beta2_AnalyzeEntitySentimentRequest(arg) {
  if (!(arg instanceof google_cloud_language_v1beta2_language_service_pb.AnalyzeEntitySentimentRequest)) {
    throw new Error('Expected argument of type google.cloud.language.v1beta2.AnalyzeEntitySentimentRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_language_v1beta2_AnalyzeEntitySentimentRequest(buffer_arg) {
  return google_cloud_language_v1beta2_language_service_pb.AnalyzeEntitySentimentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_language_v1beta2_AnalyzeEntitySentimentResponse(arg) {
  if (!(arg instanceof google_cloud_language_v1beta2_language_service_pb.AnalyzeEntitySentimentResponse)) {
    throw new Error('Expected argument of type google.cloud.language.v1beta2.AnalyzeEntitySentimentResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_language_v1beta2_AnalyzeEntitySentimentResponse(buffer_arg) {
  return google_cloud_language_v1beta2_language_service_pb.AnalyzeEntitySentimentResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_language_v1beta2_AnalyzeSentimentRequest(arg) {
  if (!(arg instanceof google_cloud_language_v1beta2_language_service_pb.AnalyzeSentimentRequest)) {
    throw new Error('Expected argument of type google.cloud.language.v1beta2.AnalyzeSentimentRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_language_v1beta2_AnalyzeSentimentRequest(buffer_arg) {
  return google_cloud_language_v1beta2_language_service_pb.AnalyzeSentimentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_language_v1beta2_AnalyzeSentimentResponse(arg) {
  if (!(arg instanceof google_cloud_language_v1beta2_language_service_pb.AnalyzeSentimentResponse)) {
    throw new Error('Expected argument of type google.cloud.language.v1beta2.AnalyzeSentimentResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_language_v1beta2_AnalyzeSentimentResponse(buffer_arg) {
  return google_cloud_language_v1beta2_language_service_pb.AnalyzeSentimentResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_language_v1beta2_AnalyzeSyntaxRequest(arg) {
  if (!(arg instanceof google_cloud_language_v1beta2_language_service_pb.AnalyzeSyntaxRequest)) {
    throw new Error('Expected argument of type google.cloud.language.v1beta2.AnalyzeSyntaxRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_language_v1beta2_AnalyzeSyntaxRequest(buffer_arg) {
  return google_cloud_language_v1beta2_language_service_pb.AnalyzeSyntaxRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_language_v1beta2_AnalyzeSyntaxResponse(arg) {
  if (!(arg instanceof google_cloud_language_v1beta2_language_service_pb.AnalyzeSyntaxResponse)) {
    throw new Error('Expected argument of type google.cloud.language.v1beta2.AnalyzeSyntaxResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_language_v1beta2_AnalyzeSyntaxResponse(buffer_arg) {
  return google_cloud_language_v1beta2_language_service_pb.AnalyzeSyntaxResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_language_v1beta2_AnnotateTextRequest(arg) {
  if (!(arg instanceof google_cloud_language_v1beta2_language_service_pb.AnnotateTextRequest)) {
    throw new Error('Expected argument of type google.cloud.language.v1beta2.AnnotateTextRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_language_v1beta2_AnnotateTextRequest(buffer_arg) {
  return google_cloud_language_v1beta2_language_service_pb.AnnotateTextRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_language_v1beta2_AnnotateTextResponse(arg) {
  if (!(arg instanceof google_cloud_language_v1beta2_language_service_pb.AnnotateTextResponse)) {
    throw new Error('Expected argument of type google.cloud.language.v1beta2.AnnotateTextResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_language_v1beta2_AnnotateTextResponse(buffer_arg) {
  return google_cloud_language_v1beta2_language_service_pb.AnnotateTextResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_language_v1beta2_ClassifyTextRequest(arg) {
  if (!(arg instanceof google_cloud_language_v1beta2_language_service_pb.ClassifyTextRequest)) {
    throw new Error('Expected argument of type google.cloud.language.v1beta2.ClassifyTextRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_language_v1beta2_ClassifyTextRequest(buffer_arg) {
  return google_cloud_language_v1beta2_language_service_pb.ClassifyTextRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_language_v1beta2_ClassifyTextResponse(arg) {
  if (!(arg instanceof google_cloud_language_v1beta2_language_service_pb.ClassifyTextResponse)) {
    throw new Error('Expected argument of type google.cloud.language.v1beta2.ClassifyTextResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_language_v1beta2_ClassifyTextResponse(buffer_arg) {
  return google_cloud_language_v1beta2_language_service_pb.ClassifyTextResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Provides text analysis operations such as sentiment analysis and entity
// recognition.
var LanguageServiceService = exports.LanguageServiceService = {
  // Analyzes the sentiment of the provided text.
  analyzeSentiment: {
    path: '/google.cloud.language.v1beta2.LanguageService/AnalyzeSentiment',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_language_v1beta2_language_service_pb.AnalyzeSentimentRequest,
    responseType: google_cloud_language_v1beta2_language_service_pb.AnalyzeSentimentResponse,
    requestSerialize: serialize_google_cloud_language_v1beta2_AnalyzeSentimentRequest,
    requestDeserialize: deserialize_google_cloud_language_v1beta2_AnalyzeSentimentRequest,
    responseSerialize: serialize_google_cloud_language_v1beta2_AnalyzeSentimentResponse,
    responseDeserialize: deserialize_google_cloud_language_v1beta2_AnalyzeSentimentResponse,
  },
  // Finds named entities (currently proper names and common nouns) in the text
  // along with entity types, salience, mentions for each entity, and
  // other properties.
  analyzeEntities: {
    path: '/google.cloud.language.v1beta2.LanguageService/AnalyzeEntities',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_language_v1beta2_language_service_pb.AnalyzeEntitiesRequest,
    responseType: google_cloud_language_v1beta2_language_service_pb.AnalyzeEntitiesResponse,
    requestSerialize: serialize_google_cloud_language_v1beta2_AnalyzeEntitiesRequest,
    requestDeserialize: deserialize_google_cloud_language_v1beta2_AnalyzeEntitiesRequest,
    responseSerialize: serialize_google_cloud_language_v1beta2_AnalyzeEntitiesResponse,
    responseDeserialize: deserialize_google_cloud_language_v1beta2_AnalyzeEntitiesResponse,
  },
  // Finds entities, similar to [AnalyzeEntities][google.cloud.language.v1beta2.LanguageService.AnalyzeEntities] in the text and analyzes
  // sentiment associated with each entity and its mentions.
  analyzeEntitySentiment: {
    path: '/google.cloud.language.v1beta2.LanguageService/AnalyzeEntitySentiment',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_language_v1beta2_language_service_pb.AnalyzeEntitySentimentRequest,
    responseType: google_cloud_language_v1beta2_language_service_pb.AnalyzeEntitySentimentResponse,
    requestSerialize: serialize_google_cloud_language_v1beta2_AnalyzeEntitySentimentRequest,
    requestDeserialize: deserialize_google_cloud_language_v1beta2_AnalyzeEntitySentimentRequest,
    responseSerialize: serialize_google_cloud_language_v1beta2_AnalyzeEntitySentimentResponse,
    responseDeserialize: deserialize_google_cloud_language_v1beta2_AnalyzeEntitySentimentResponse,
  },
  // Analyzes the syntax of the text and provides sentence boundaries and
  // tokenization along with part of speech tags, dependency trees, and other
  // properties.
  analyzeSyntax: {
    path: '/google.cloud.language.v1beta2.LanguageService/AnalyzeSyntax',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_language_v1beta2_language_service_pb.AnalyzeSyntaxRequest,
    responseType: google_cloud_language_v1beta2_language_service_pb.AnalyzeSyntaxResponse,
    requestSerialize: serialize_google_cloud_language_v1beta2_AnalyzeSyntaxRequest,
    requestDeserialize: deserialize_google_cloud_language_v1beta2_AnalyzeSyntaxRequest,
    responseSerialize: serialize_google_cloud_language_v1beta2_AnalyzeSyntaxResponse,
    responseDeserialize: deserialize_google_cloud_language_v1beta2_AnalyzeSyntaxResponse,
  },
  // Classifies a document into categories.
  classifyText: {
    path: '/google.cloud.language.v1beta2.LanguageService/ClassifyText',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_language_v1beta2_language_service_pb.ClassifyTextRequest,
    responseType: google_cloud_language_v1beta2_language_service_pb.ClassifyTextResponse,
    requestSerialize: serialize_google_cloud_language_v1beta2_ClassifyTextRequest,
    requestDeserialize: deserialize_google_cloud_language_v1beta2_ClassifyTextRequest,
    responseSerialize: serialize_google_cloud_language_v1beta2_ClassifyTextResponse,
    responseDeserialize: deserialize_google_cloud_language_v1beta2_ClassifyTextResponse,
  },
  // A convenience method that provides all syntax, sentiment, entity, and
  // classification features in one call.
  annotateText: {
    path: '/google.cloud.language.v1beta2.LanguageService/AnnotateText',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_language_v1beta2_language_service_pb.AnnotateTextRequest,
    responseType: google_cloud_language_v1beta2_language_service_pb.AnnotateTextResponse,
    requestSerialize: serialize_google_cloud_language_v1beta2_AnnotateTextRequest,
    requestDeserialize: deserialize_google_cloud_language_v1beta2_AnnotateTextRequest,
    responseSerialize: serialize_google_cloud_language_v1beta2_AnnotateTextResponse,
    responseDeserialize: deserialize_google_cloud_language_v1beta2_AnnotateTextResponse,
  },
};

exports.LanguageServiceClient = grpc.makeGenericClientConstructor(LanguageServiceService);
