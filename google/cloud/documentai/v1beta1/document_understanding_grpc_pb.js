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
var google_cloud_documentai_v1beta1_document_understanding_pb = require('../../../../google/cloud/documentai/v1beta1/document_understanding_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_api_client_pb = require('../../../../google/api/client_pb.js');
var google_api_field_behavior_pb = require('../../../../google/api/field_behavior_pb.js');
var google_cloud_documentai_v1beta1_geometry_pb = require('../../../../google/cloud/documentai/v1beta1/geometry_pb.js');
var google_longrunning_operations_pb = require('../../../../google/longrunning/operations_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_google_cloud_documentai_v1beta1_BatchProcessDocumentsRequest(arg) {
  if (!(arg instanceof google_cloud_documentai_v1beta1_document_understanding_pb.BatchProcessDocumentsRequest)) {
    throw new Error('Expected argument of type google.cloud.documentai.v1beta1.BatchProcessDocumentsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_documentai_v1beta1_BatchProcessDocumentsRequest(buffer_arg) {
  return google_cloud_documentai_v1beta1_document_understanding_pb.BatchProcessDocumentsRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


// Service to parse structured information from unstructured or semi-structured
// documents using state-of-the-art Google AI such as natural language,
// computer vision, and translation.
var DocumentUnderstandingServiceService = exports.DocumentUnderstandingServiceService = {
  // LRO endpoint to batch process many documents.
  batchProcessDocuments: {
    path: '/google.cloud.documentai.v1beta1.DocumentUnderstandingService/BatchProcessDocuments',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_documentai_v1beta1_document_understanding_pb.BatchProcessDocumentsRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_cloud_documentai_v1beta1_BatchProcessDocumentsRequest,
    requestDeserialize: deserialize_google_cloud_documentai_v1beta1_BatchProcessDocumentsRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
};

exports.DocumentUnderstandingServiceClient = grpc.makeGenericClientConstructor(DocumentUnderstandingServiceService);
