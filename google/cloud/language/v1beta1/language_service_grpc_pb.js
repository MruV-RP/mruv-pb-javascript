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
var google_cloud_language_v1beta1_language_service_pb = require('../../../../google/cloud/language/v1beta1/language_service_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');

function serialize_google_cloud_language_v1beta1_AnalyzeEntitiesRequest(arg) {
  if (!(arg instanceof google_cloud_language_v1beta1_language_service_pb.AnalyzeEntitiesRequest)) {
    throw new Error('Expected argument of type google.cloud.language.v1beta1.AnalyzeEntitiesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_language_v1beta1_AnalyzeEntitiesRequest(buffer_arg) {
  return google_cloud_language_v1beta1_language_service_pb.AnalyzeEntitiesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_language_v1beta1_AnalyzeEntitiesResponse(arg) {
  if (!(arg instanceof google_cloud_language_v1beta1_language_service_pb.AnalyzeEntitiesResponse)) {
    throw new Error('Expected argument of type google.cloud.language.v1beta1.AnalyzeEntitiesResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_language_v1beta1_AnalyzeEntitiesResponse(buffer_arg) {
  return google_cloud_language_v1beta1_language_service_pb.AnalyzeEntitiesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_language_v1beta1_AnalyzeSentimentRequest(arg) {
  if (!(arg instanceof google_cloud_language_v1beta1_language_service_pb.AnalyzeSentimentRequest)) {
    throw new Error('Expected argument of type google.cloud.language.v1beta1.AnalyzeSentimentRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_language_v1beta1_AnalyzeSentimentRequest(buffer_arg) {
  return google_cloud_language_v1beta1_language_service_pb.AnalyzeSentimentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_language_v1beta1_AnalyzeSentimentResponse(arg) {
  if (!(arg instanceof google_cloud_language_v1beta1_language_service_pb.AnalyzeSentimentResponse)) {
    throw new Error('Expected argument of type google.cloud.language.v1beta1.AnalyzeSentimentResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_language_v1beta1_AnalyzeSentimentResponse(buffer_arg) {
  return google_cloud_language_v1beta1_language_service_pb.AnalyzeSentimentResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_language_v1beta1_AnalyzeSyntaxRequest(arg) {
  if (!(arg instanceof google_cloud_language_v1beta1_language_service_pb.AnalyzeSyntaxRequest)) {
    throw new Error('Expected argument of type google.cloud.language.v1beta1.AnalyzeSyntaxRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_language_v1beta1_AnalyzeSyntaxRequest(buffer_arg) {
  return google_cloud_language_v1beta1_language_service_pb.AnalyzeSyntaxRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_language_v1beta1_AnalyzeSyntaxResponse(arg) {
  if (!(arg instanceof google_cloud_language_v1beta1_language_service_pb.AnalyzeSyntaxResponse)) {
    throw new Error('Expected argument of type google.cloud.language.v1beta1.AnalyzeSyntaxResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_language_v1beta1_AnalyzeSyntaxResponse(buffer_arg) {
  return google_cloud_language_v1beta1_language_service_pb.AnalyzeSyntaxResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_language_v1beta1_AnnotateTextRequest(arg) {
  if (!(arg instanceof google_cloud_language_v1beta1_language_service_pb.AnnotateTextRequest)) {
    throw new Error('Expected argument of type google.cloud.language.v1beta1.AnnotateTextRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_language_v1beta1_AnnotateTextRequest(buffer_arg) {
  return google_cloud_language_v1beta1_language_service_pb.AnnotateTextRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_language_v1beta1_AnnotateTextResponse(arg) {
  if (!(arg instanceof google_cloud_language_v1beta1_language_service_pb.AnnotateTextResponse)) {
    throw new Error('Expected argument of type google.cloud.language.v1beta1.AnnotateTextResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_language_v1beta1_AnnotateTextResponse(buffer_arg) {
  return google_cloud_language_v1beta1_language_service_pb.AnnotateTextResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Provides text analysis operations such as sentiment analysis and entity
// recognition.
var LanguageServiceService = exports.LanguageServiceService = {
  // Analyzes the sentiment of the provided text.
  analyzeSentiment: {
    path: '/google.cloud.language.v1beta1.LanguageService/AnalyzeSentiment',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_language_v1beta1_language_service_pb.AnalyzeSentimentRequest,
    responseType: google_cloud_language_v1beta1_language_service_pb.AnalyzeSentimentResponse,
    requestSerialize: serialize_google_cloud_language_v1beta1_AnalyzeSentimentRequest,
    requestDeserialize: deserialize_google_cloud_language_v1beta1_AnalyzeSentimentRequest,
    responseSerialize: serialize_google_cloud_language_v1beta1_AnalyzeSentimentResponse,
    responseDeserialize: deserialize_google_cloud_language_v1beta1_AnalyzeSentimentResponse,
  },
  // Finds named entities (currently proper names and common nouns) in the text
  // along with entity types, salience, mentions for each entity, and
  // other properties.
  analyzeEntities: {
    path: '/google.cloud.language.v1beta1.LanguageService/AnalyzeEntities',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_language_v1beta1_language_service_pb.AnalyzeEntitiesRequest,
    responseType: google_cloud_language_v1beta1_language_service_pb.AnalyzeEntitiesResponse,
    requestSerialize: serialize_google_cloud_language_v1beta1_AnalyzeEntitiesRequest,
    requestDeserialize: deserialize_google_cloud_language_v1beta1_AnalyzeEntitiesRequest,
    responseSerialize: serialize_google_cloud_language_v1beta1_AnalyzeEntitiesResponse,
    responseDeserialize: deserialize_google_cloud_language_v1beta1_AnalyzeEntitiesResponse,
  },
  // Analyzes the syntax of the text and provides sentence boundaries and
  // tokenization along with part of speech tags, dependency trees, and other
  // properties.
  analyzeSyntax: {
    path: '/google.cloud.language.v1beta1.LanguageService/AnalyzeSyntax',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_language_v1beta1_language_service_pb.AnalyzeSyntaxRequest,
    responseType: google_cloud_language_v1beta1_language_service_pb.AnalyzeSyntaxResponse,
    requestSerialize: serialize_google_cloud_language_v1beta1_AnalyzeSyntaxRequest,
    requestDeserialize: deserialize_google_cloud_language_v1beta1_AnalyzeSyntaxRequest,
    responseSerialize: serialize_google_cloud_language_v1beta1_AnalyzeSyntaxResponse,
    responseDeserialize: deserialize_google_cloud_language_v1beta1_AnalyzeSyntaxResponse,
  },
  // A convenience method that provides all the features that analyzeSentiment,
  // analyzeEntities, and analyzeSyntax provide in one call.
  annotateText: {
    path: '/google.cloud.language.v1beta1.LanguageService/AnnotateText',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_language_v1beta1_language_service_pb.AnnotateTextRequest,
    responseType: google_cloud_language_v1beta1_language_service_pb.AnnotateTextResponse,
    requestSerialize: serialize_google_cloud_language_v1beta1_AnnotateTextRequest,
    requestDeserialize: deserialize_google_cloud_language_v1beta1_AnnotateTextRequest,
    responseSerialize: serialize_google_cloud_language_v1beta1_AnnotateTextResponse,
    responseDeserialize: deserialize_google_cloud_language_v1beta1_AnnotateTextResponse,
  },
};

exports.LanguageServiceClient = grpc.makeGenericClientConstructor(LanguageServiceService);
