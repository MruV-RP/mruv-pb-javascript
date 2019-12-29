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
var google_cloud_dialogflow_v2beta1_document_pb = require('../../../../google/cloud/dialogflow/v2beta1/document_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_cloud_dialogflow_v2beta1_gcs_pb = require('../../../../google/cloud/dialogflow/v2beta1/gcs_pb.js');
var google_longrunning_operations_pb = require('../../../../google/longrunning/operations_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_rpc_status_pb = require('../../../../google/rpc/status_pb.js');
var google_api_client_pb = require('../../../../google/api/client_pb.js');

function serialize_google_cloud_dialogflow_v2beta1_CreateDocumentRequest(arg) {
  if (!(arg instanceof google_cloud_dialogflow_v2beta1_document_pb.CreateDocumentRequest)) {
    throw new Error('Expected argument of type google.cloud.dialogflow.v2beta1.CreateDocumentRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_dialogflow_v2beta1_CreateDocumentRequest(buffer_arg) {
  return google_cloud_dialogflow_v2beta1_document_pb.CreateDocumentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_dialogflow_v2beta1_DeleteDocumentRequest(arg) {
  if (!(arg instanceof google_cloud_dialogflow_v2beta1_document_pb.DeleteDocumentRequest)) {
    throw new Error('Expected argument of type google.cloud.dialogflow.v2beta1.DeleteDocumentRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_dialogflow_v2beta1_DeleteDocumentRequest(buffer_arg) {
  return google_cloud_dialogflow_v2beta1_document_pb.DeleteDocumentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_dialogflow_v2beta1_Document(arg) {
  if (!(arg instanceof google_cloud_dialogflow_v2beta1_document_pb.Document)) {
    throw new Error('Expected argument of type google.cloud.dialogflow.v2beta1.Document');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_dialogflow_v2beta1_Document(buffer_arg) {
  return google_cloud_dialogflow_v2beta1_document_pb.Document.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_dialogflow_v2beta1_GetDocumentRequest(arg) {
  if (!(arg instanceof google_cloud_dialogflow_v2beta1_document_pb.GetDocumentRequest)) {
    throw new Error('Expected argument of type google.cloud.dialogflow.v2beta1.GetDocumentRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_dialogflow_v2beta1_GetDocumentRequest(buffer_arg) {
  return google_cloud_dialogflow_v2beta1_document_pb.GetDocumentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_dialogflow_v2beta1_ListDocumentsRequest(arg) {
  if (!(arg instanceof google_cloud_dialogflow_v2beta1_document_pb.ListDocumentsRequest)) {
    throw new Error('Expected argument of type google.cloud.dialogflow.v2beta1.ListDocumentsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_dialogflow_v2beta1_ListDocumentsRequest(buffer_arg) {
  return google_cloud_dialogflow_v2beta1_document_pb.ListDocumentsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_dialogflow_v2beta1_ListDocumentsResponse(arg) {
  if (!(arg instanceof google_cloud_dialogflow_v2beta1_document_pb.ListDocumentsResponse)) {
    throw new Error('Expected argument of type google.cloud.dialogflow.v2beta1.ListDocumentsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_dialogflow_v2beta1_ListDocumentsResponse(buffer_arg) {
  return google_cloud_dialogflow_v2beta1_document_pb.ListDocumentsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_dialogflow_v2beta1_ReloadDocumentRequest(arg) {
  if (!(arg instanceof google_cloud_dialogflow_v2beta1_document_pb.ReloadDocumentRequest)) {
    throw new Error('Expected argument of type google.cloud.dialogflow.v2beta1.ReloadDocumentRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_dialogflow_v2beta1_ReloadDocumentRequest(buffer_arg) {
  return google_cloud_dialogflow_v2beta1_document_pb.ReloadDocumentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_dialogflow_v2beta1_UpdateDocumentRequest(arg) {
  if (!(arg instanceof google_cloud_dialogflow_v2beta1_document_pb.UpdateDocumentRequest)) {
    throw new Error('Expected argument of type google.cloud.dialogflow.v2beta1.UpdateDocumentRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_dialogflow_v2beta1_UpdateDocumentRequest(buffer_arg) {
  return google_cloud_dialogflow_v2beta1_document_pb.UpdateDocumentRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


// Manages documents of a knowledge base.
var DocumentsService = exports.DocumentsService = {
  // Returns the list of all documents of the knowledge base.
  //
  // Note: The `projects.agent.knowledgeBases.documents` resource is deprecated;
  // only use `projects.knowledgeBases.documents`.
  listDocuments: {
    path: '/google.cloud.dialogflow.v2beta1.Documents/ListDocuments',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_dialogflow_v2beta1_document_pb.ListDocumentsRequest,
    responseType: google_cloud_dialogflow_v2beta1_document_pb.ListDocumentsResponse,
    requestSerialize: serialize_google_cloud_dialogflow_v2beta1_ListDocumentsRequest,
    requestDeserialize: deserialize_google_cloud_dialogflow_v2beta1_ListDocumentsRequest,
    responseSerialize: serialize_google_cloud_dialogflow_v2beta1_ListDocumentsResponse,
    responseDeserialize: deserialize_google_cloud_dialogflow_v2beta1_ListDocumentsResponse,
  },
  // Retrieves the specified document.
  //
  // Note: The `projects.agent.knowledgeBases.documents` resource is deprecated;
  // only use `projects.knowledgeBases.documents`.
  getDocument: {
    path: '/google.cloud.dialogflow.v2beta1.Documents/GetDocument',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_dialogflow_v2beta1_document_pb.GetDocumentRequest,
    responseType: google_cloud_dialogflow_v2beta1_document_pb.Document,
    requestSerialize: serialize_google_cloud_dialogflow_v2beta1_GetDocumentRequest,
    requestDeserialize: deserialize_google_cloud_dialogflow_v2beta1_GetDocumentRequest,
    responseSerialize: serialize_google_cloud_dialogflow_v2beta1_Document,
    responseDeserialize: deserialize_google_cloud_dialogflow_v2beta1_Document,
  },
  // Creates a new document.
  //
  // Note: The `projects.agent.knowledgeBases.documents` resource is deprecated;
  // only use `projects.knowledgeBases.documents`.
  //
  // Operation <response: [Document][google.cloud.dialogflow.v2beta1.Document],
  //            metadata: [KnowledgeOperationMetadata][google.cloud.dialogflow.v2beta1.KnowledgeOperationMetadata]>
  createDocument: {
    path: '/google.cloud.dialogflow.v2beta1.Documents/CreateDocument',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_dialogflow_v2beta1_document_pb.CreateDocumentRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_cloud_dialogflow_v2beta1_CreateDocumentRequest,
    requestDeserialize: deserialize_google_cloud_dialogflow_v2beta1_CreateDocumentRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Deletes the specified document.
  //
  // Note: The `projects.agent.knowledgeBases.documents` resource is deprecated;
  // only use `projects.knowledgeBases.documents`.
  //
  // Operation <response: [google.protobuf.Empty][google.protobuf.Empty],
  //            metadata: [KnowledgeOperationMetadata][google.cloud.dialogflow.v2beta1.KnowledgeOperationMetadata]>
  deleteDocument: {
    path: '/google.cloud.dialogflow.v2beta1.Documents/DeleteDocument',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_dialogflow_v2beta1_document_pb.DeleteDocumentRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_cloud_dialogflow_v2beta1_DeleteDocumentRequest,
    requestDeserialize: deserialize_google_cloud_dialogflow_v2beta1_DeleteDocumentRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Updates the specified document.
  //
  // Note: The `projects.agent.knowledgeBases.documents` resource is deprecated;
  // only use `projects.knowledgeBases.documents`.
  //
  // Operation <response: [Document][google.cloud.dialogflow.v2beta1.Document],
  //            metadata: [KnowledgeOperationMetadata][google.cloud.dialogflow.v2beta1.KnowledgeOperationMetadata]>
  updateDocument: {
    path: '/google.cloud.dialogflow.v2beta1.Documents/UpdateDocument',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_dialogflow_v2beta1_document_pb.UpdateDocumentRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_cloud_dialogflow_v2beta1_UpdateDocumentRequest,
    requestDeserialize: deserialize_google_cloud_dialogflow_v2beta1_UpdateDocumentRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Reloads the specified document from its specified source, content_uri or
  // content. The previously loaded content of the document will be deleted.
  // Note: Even when the content of the document has not changed, there still
  // may be side effects because of internal implementation changes.
  //
  // Note: The `projects.agent.knowledgeBases.documents` resource is deprecated;
  // only use `projects.knowledgeBases.documents`.
  //
  // Operation <response: [Document][google.cloud.dialogflow.v2beta1.Document],
  //            metadata: [KnowledgeOperationMetadata][google.cloud.dialogflow.v2beta1.KnowledgeOperationMetadata]>
  reloadDocument: {
    path: '/google.cloud.dialogflow.v2beta1.Documents/ReloadDocument',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_dialogflow_v2beta1_document_pb.ReloadDocumentRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_cloud_dialogflow_v2beta1_ReloadDocumentRequest,
    requestDeserialize: deserialize_google_cloud_dialogflow_v2beta1_ReloadDocumentRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
};

exports.DocumentsClient = grpc.makeGenericClientConstructor(DocumentsService);
