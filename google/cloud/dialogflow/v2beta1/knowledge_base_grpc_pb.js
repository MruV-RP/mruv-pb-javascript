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
var google_cloud_dialogflow_v2beta1_knowledge_base_pb = require('../../../../google/cloud/dialogflow/v2beta1/knowledge_base_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_api_client_pb = require('../../../../google/api/client_pb.js');

function serialize_google_cloud_dialogflow_v2beta1_CreateKnowledgeBaseRequest(arg) {
  if (!(arg instanceof google_cloud_dialogflow_v2beta1_knowledge_base_pb.CreateKnowledgeBaseRequest)) {
    throw new Error('Expected argument of type google.cloud.dialogflow.v2beta1.CreateKnowledgeBaseRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_dialogflow_v2beta1_CreateKnowledgeBaseRequest(buffer_arg) {
  return google_cloud_dialogflow_v2beta1_knowledge_base_pb.CreateKnowledgeBaseRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_dialogflow_v2beta1_DeleteKnowledgeBaseRequest(arg) {
  if (!(arg instanceof google_cloud_dialogflow_v2beta1_knowledge_base_pb.DeleteKnowledgeBaseRequest)) {
    throw new Error('Expected argument of type google.cloud.dialogflow.v2beta1.DeleteKnowledgeBaseRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_dialogflow_v2beta1_DeleteKnowledgeBaseRequest(buffer_arg) {
  return google_cloud_dialogflow_v2beta1_knowledge_base_pb.DeleteKnowledgeBaseRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_dialogflow_v2beta1_GetKnowledgeBaseRequest(arg) {
  if (!(arg instanceof google_cloud_dialogflow_v2beta1_knowledge_base_pb.GetKnowledgeBaseRequest)) {
    throw new Error('Expected argument of type google.cloud.dialogflow.v2beta1.GetKnowledgeBaseRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_dialogflow_v2beta1_GetKnowledgeBaseRequest(buffer_arg) {
  return google_cloud_dialogflow_v2beta1_knowledge_base_pb.GetKnowledgeBaseRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_dialogflow_v2beta1_KnowledgeBase(arg) {
  if (!(arg instanceof google_cloud_dialogflow_v2beta1_knowledge_base_pb.KnowledgeBase)) {
    throw new Error('Expected argument of type google.cloud.dialogflow.v2beta1.KnowledgeBase');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_dialogflow_v2beta1_KnowledgeBase(buffer_arg) {
  return google_cloud_dialogflow_v2beta1_knowledge_base_pb.KnowledgeBase.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_dialogflow_v2beta1_ListKnowledgeBasesRequest(arg) {
  if (!(arg instanceof google_cloud_dialogflow_v2beta1_knowledge_base_pb.ListKnowledgeBasesRequest)) {
    throw new Error('Expected argument of type google.cloud.dialogflow.v2beta1.ListKnowledgeBasesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_dialogflow_v2beta1_ListKnowledgeBasesRequest(buffer_arg) {
  return google_cloud_dialogflow_v2beta1_knowledge_base_pb.ListKnowledgeBasesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_dialogflow_v2beta1_ListKnowledgeBasesResponse(arg) {
  if (!(arg instanceof google_cloud_dialogflow_v2beta1_knowledge_base_pb.ListKnowledgeBasesResponse)) {
    throw new Error('Expected argument of type google.cloud.dialogflow.v2beta1.ListKnowledgeBasesResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_dialogflow_v2beta1_ListKnowledgeBasesResponse(buffer_arg) {
  return google_cloud_dialogflow_v2beta1_knowledge_base_pb.ListKnowledgeBasesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_dialogflow_v2beta1_UpdateKnowledgeBaseRequest(arg) {
  if (!(arg instanceof google_cloud_dialogflow_v2beta1_knowledge_base_pb.UpdateKnowledgeBaseRequest)) {
    throw new Error('Expected argument of type google.cloud.dialogflow.v2beta1.UpdateKnowledgeBaseRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_dialogflow_v2beta1_UpdateKnowledgeBaseRequest(buffer_arg) {
  return google_cloud_dialogflow_v2beta1_knowledge_base_pb.UpdateKnowledgeBaseRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}


// Manages knowledge bases.
//
// Allows users to setup and maintain knowledge bases with their knowledge data.
var KnowledgeBasesService = exports.KnowledgeBasesService = {
  // Returns the list of all knowledge bases of the specified agent.
  //
  // Note: The `projects.agent.knowledgeBases` resource is deprecated;
  // only use `projects.knowledgeBases`.
  listKnowledgeBases: {
    path: '/google.cloud.dialogflow.v2beta1.KnowledgeBases/ListKnowledgeBases',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_dialogflow_v2beta1_knowledge_base_pb.ListKnowledgeBasesRequest,
    responseType: google_cloud_dialogflow_v2beta1_knowledge_base_pb.ListKnowledgeBasesResponse,
    requestSerialize: serialize_google_cloud_dialogflow_v2beta1_ListKnowledgeBasesRequest,
    requestDeserialize: deserialize_google_cloud_dialogflow_v2beta1_ListKnowledgeBasesRequest,
    responseSerialize: serialize_google_cloud_dialogflow_v2beta1_ListKnowledgeBasesResponse,
    responseDeserialize: deserialize_google_cloud_dialogflow_v2beta1_ListKnowledgeBasesResponse,
  },
  // Retrieves the specified knowledge base.
  //
  // Note: The `projects.agent.knowledgeBases` resource is deprecated;
  // only use `projects.knowledgeBases`.
  getKnowledgeBase: {
    path: '/google.cloud.dialogflow.v2beta1.KnowledgeBases/GetKnowledgeBase',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_dialogflow_v2beta1_knowledge_base_pb.GetKnowledgeBaseRequest,
    responseType: google_cloud_dialogflow_v2beta1_knowledge_base_pb.KnowledgeBase,
    requestSerialize: serialize_google_cloud_dialogflow_v2beta1_GetKnowledgeBaseRequest,
    requestDeserialize: deserialize_google_cloud_dialogflow_v2beta1_GetKnowledgeBaseRequest,
    responseSerialize: serialize_google_cloud_dialogflow_v2beta1_KnowledgeBase,
    responseDeserialize: deserialize_google_cloud_dialogflow_v2beta1_KnowledgeBase,
  },
  // Creates a knowledge base.
  //
  // Note: The `projects.agent.knowledgeBases` resource is deprecated;
  // only use `projects.knowledgeBases`.
  createKnowledgeBase: {
    path: '/google.cloud.dialogflow.v2beta1.KnowledgeBases/CreateKnowledgeBase',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_dialogflow_v2beta1_knowledge_base_pb.CreateKnowledgeBaseRequest,
    responseType: google_cloud_dialogflow_v2beta1_knowledge_base_pb.KnowledgeBase,
    requestSerialize: serialize_google_cloud_dialogflow_v2beta1_CreateKnowledgeBaseRequest,
    requestDeserialize: deserialize_google_cloud_dialogflow_v2beta1_CreateKnowledgeBaseRequest,
    responseSerialize: serialize_google_cloud_dialogflow_v2beta1_KnowledgeBase,
    responseDeserialize: deserialize_google_cloud_dialogflow_v2beta1_KnowledgeBase,
  },
  // Deletes the specified knowledge base.
  //
  // Note: The `projects.agent.knowledgeBases` resource is deprecated;
  // only use `projects.knowledgeBases`.
  deleteKnowledgeBase: {
    path: '/google.cloud.dialogflow.v2beta1.KnowledgeBases/DeleteKnowledgeBase',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_dialogflow_v2beta1_knowledge_base_pb.DeleteKnowledgeBaseRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_cloud_dialogflow_v2beta1_DeleteKnowledgeBaseRequest,
    requestDeserialize: deserialize_google_cloud_dialogflow_v2beta1_DeleteKnowledgeBaseRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Updates the specified knowledge base.
  //
  // Note: The `projects.agent.knowledgeBases` resource is deprecated;
  // only use `projects.knowledgeBases`.
  updateKnowledgeBase: {
    path: '/google.cloud.dialogflow.v2beta1.KnowledgeBases/UpdateKnowledgeBase',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_dialogflow_v2beta1_knowledge_base_pb.UpdateKnowledgeBaseRequest,
    responseType: google_cloud_dialogflow_v2beta1_knowledge_base_pb.KnowledgeBase,
    requestSerialize: serialize_google_cloud_dialogflow_v2beta1_UpdateKnowledgeBaseRequest,
    requestDeserialize: deserialize_google_cloud_dialogflow_v2beta1_UpdateKnowledgeBaseRequest,
    responseSerialize: serialize_google_cloud_dialogflow_v2beta1_KnowledgeBase,
    responseDeserialize: deserialize_google_cloud_dialogflow_v2beta1_KnowledgeBase,
  },
};

exports.KnowledgeBasesClient = grpc.makeGenericClientConstructor(KnowledgeBasesService);
