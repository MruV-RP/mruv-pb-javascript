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
var google_firestore_v1beta1_firestore_pb = require('../../../google/firestore/v1beta1/firestore_pb.js');
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
var google_firestore_v1beta1_common_pb = require('../../../google/firestore/v1beta1/common_pb.js');
var google_firestore_v1beta1_document_pb = require('../../../google/firestore/v1beta1/document_pb.js');
var google_firestore_v1beta1_query_pb = require('../../../google/firestore/v1beta1/query_pb.js');
var google_firestore_v1beta1_write_pb = require('../../../google/firestore/v1beta1/write_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_rpc_status_pb = require('../../../google/rpc/status_pb.js');
var google_api_client_pb = require('../../../google/api/client_pb.js');

function serialize_google_firestore_v1beta1_BatchGetDocumentsRequest(arg) {
  if (!(arg instanceof google_firestore_v1beta1_firestore_pb.BatchGetDocumentsRequest)) {
    throw new Error('Expected argument of type google.firestore.v1beta1.BatchGetDocumentsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_firestore_v1beta1_BatchGetDocumentsRequest(buffer_arg) {
  return google_firestore_v1beta1_firestore_pb.BatchGetDocumentsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_firestore_v1beta1_BatchGetDocumentsResponse(arg) {
  if (!(arg instanceof google_firestore_v1beta1_firestore_pb.BatchGetDocumentsResponse)) {
    throw new Error('Expected argument of type google.firestore.v1beta1.BatchGetDocumentsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_firestore_v1beta1_BatchGetDocumentsResponse(buffer_arg) {
  return google_firestore_v1beta1_firestore_pb.BatchGetDocumentsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_firestore_v1beta1_BeginTransactionRequest(arg) {
  if (!(arg instanceof google_firestore_v1beta1_firestore_pb.BeginTransactionRequest)) {
    throw new Error('Expected argument of type google.firestore.v1beta1.BeginTransactionRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_firestore_v1beta1_BeginTransactionRequest(buffer_arg) {
  return google_firestore_v1beta1_firestore_pb.BeginTransactionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_firestore_v1beta1_BeginTransactionResponse(arg) {
  if (!(arg instanceof google_firestore_v1beta1_firestore_pb.BeginTransactionResponse)) {
    throw new Error('Expected argument of type google.firestore.v1beta1.BeginTransactionResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_firestore_v1beta1_BeginTransactionResponse(buffer_arg) {
  return google_firestore_v1beta1_firestore_pb.BeginTransactionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_firestore_v1beta1_CommitRequest(arg) {
  if (!(arg instanceof google_firestore_v1beta1_firestore_pb.CommitRequest)) {
    throw new Error('Expected argument of type google.firestore.v1beta1.CommitRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_firestore_v1beta1_CommitRequest(buffer_arg) {
  return google_firestore_v1beta1_firestore_pb.CommitRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_firestore_v1beta1_CommitResponse(arg) {
  if (!(arg instanceof google_firestore_v1beta1_firestore_pb.CommitResponse)) {
    throw new Error('Expected argument of type google.firestore.v1beta1.CommitResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_firestore_v1beta1_CommitResponse(buffer_arg) {
  return google_firestore_v1beta1_firestore_pb.CommitResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_firestore_v1beta1_CreateDocumentRequest(arg) {
  if (!(arg instanceof google_firestore_v1beta1_firestore_pb.CreateDocumentRequest)) {
    throw new Error('Expected argument of type google.firestore.v1beta1.CreateDocumentRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_firestore_v1beta1_CreateDocumentRequest(buffer_arg) {
  return google_firestore_v1beta1_firestore_pb.CreateDocumentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_firestore_v1beta1_DeleteDocumentRequest(arg) {
  if (!(arg instanceof google_firestore_v1beta1_firestore_pb.DeleteDocumentRequest)) {
    throw new Error('Expected argument of type google.firestore.v1beta1.DeleteDocumentRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_firestore_v1beta1_DeleteDocumentRequest(buffer_arg) {
  return google_firestore_v1beta1_firestore_pb.DeleteDocumentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_firestore_v1beta1_Document(arg) {
  if (!(arg instanceof google_firestore_v1beta1_document_pb.Document)) {
    throw new Error('Expected argument of type google.firestore.v1beta1.Document');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_firestore_v1beta1_Document(buffer_arg) {
  return google_firestore_v1beta1_document_pb.Document.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_firestore_v1beta1_GetDocumentRequest(arg) {
  if (!(arg instanceof google_firestore_v1beta1_firestore_pb.GetDocumentRequest)) {
    throw new Error('Expected argument of type google.firestore.v1beta1.GetDocumentRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_firestore_v1beta1_GetDocumentRequest(buffer_arg) {
  return google_firestore_v1beta1_firestore_pb.GetDocumentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_firestore_v1beta1_ListCollectionIdsRequest(arg) {
  if (!(arg instanceof google_firestore_v1beta1_firestore_pb.ListCollectionIdsRequest)) {
    throw new Error('Expected argument of type google.firestore.v1beta1.ListCollectionIdsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_firestore_v1beta1_ListCollectionIdsRequest(buffer_arg) {
  return google_firestore_v1beta1_firestore_pb.ListCollectionIdsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_firestore_v1beta1_ListCollectionIdsResponse(arg) {
  if (!(arg instanceof google_firestore_v1beta1_firestore_pb.ListCollectionIdsResponse)) {
    throw new Error('Expected argument of type google.firestore.v1beta1.ListCollectionIdsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_firestore_v1beta1_ListCollectionIdsResponse(buffer_arg) {
  return google_firestore_v1beta1_firestore_pb.ListCollectionIdsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_firestore_v1beta1_ListDocumentsRequest(arg) {
  if (!(arg instanceof google_firestore_v1beta1_firestore_pb.ListDocumentsRequest)) {
    throw new Error('Expected argument of type google.firestore.v1beta1.ListDocumentsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_firestore_v1beta1_ListDocumentsRequest(buffer_arg) {
  return google_firestore_v1beta1_firestore_pb.ListDocumentsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_firestore_v1beta1_ListDocumentsResponse(arg) {
  if (!(arg instanceof google_firestore_v1beta1_firestore_pb.ListDocumentsResponse)) {
    throw new Error('Expected argument of type google.firestore.v1beta1.ListDocumentsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_firestore_v1beta1_ListDocumentsResponse(buffer_arg) {
  return google_firestore_v1beta1_firestore_pb.ListDocumentsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_firestore_v1beta1_ListenRequest(arg) {
  if (!(arg instanceof google_firestore_v1beta1_firestore_pb.ListenRequest)) {
    throw new Error('Expected argument of type google.firestore.v1beta1.ListenRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_firestore_v1beta1_ListenRequest(buffer_arg) {
  return google_firestore_v1beta1_firestore_pb.ListenRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_firestore_v1beta1_ListenResponse(arg) {
  if (!(arg instanceof google_firestore_v1beta1_firestore_pb.ListenResponse)) {
    throw new Error('Expected argument of type google.firestore.v1beta1.ListenResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_firestore_v1beta1_ListenResponse(buffer_arg) {
  return google_firestore_v1beta1_firestore_pb.ListenResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_firestore_v1beta1_RollbackRequest(arg) {
  if (!(arg instanceof google_firestore_v1beta1_firestore_pb.RollbackRequest)) {
    throw new Error('Expected argument of type google.firestore.v1beta1.RollbackRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_firestore_v1beta1_RollbackRequest(buffer_arg) {
  return google_firestore_v1beta1_firestore_pb.RollbackRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_firestore_v1beta1_RunQueryRequest(arg) {
  if (!(arg instanceof google_firestore_v1beta1_firestore_pb.RunQueryRequest)) {
    throw new Error('Expected argument of type google.firestore.v1beta1.RunQueryRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_firestore_v1beta1_RunQueryRequest(buffer_arg) {
  return google_firestore_v1beta1_firestore_pb.RunQueryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_firestore_v1beta1_RunQueryResponse(arg) {
  if (!(arg instanceof google_firestore_v1beta1_firestore_pb.RunQueryResponse)) {
    throw new Error('Expected argument of type google.firestore.v1beta1.RunQueryResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_firestore_v1beta1_RunQueryResponse(buffer_arg) {
  return google_firestore_v1beta1_firestore_pb.RunQueryResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_firestore_v1beta1_UpdateDocumentRequest(arg) {
  if (!(arg instanceof google_firestore_v1beta1_firestore_pb.UpdateDocumentRequest)) {
    throw new Error('Expected argument of type google.firestore.v1beta1.UpdateDocumentRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_firestore_v1beta1_UpdateDocumentRequest(buffer_arg) {
  return google_firestore_v1beta1_firestore_pb.UpdateDocumentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_firestore_v1beta1_WriteRequest(arg) {
  if (!(arg instanceof google_firestore_v1beta1_firestore_pb.WriteRequest)) {
    throw new Error('Expected argument of type google.firestore.v1beta1.WriteRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_firestore_v1beta1_WriteRequest(buffer_arg) {
  return google_firestore_v1beta1_firestore_pb.WriteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_firestore_v1beta1_WriteResponse(arg) {
  if (!(arg instanceof google_firestore_v1beta1_firestore_pb.WriteResponse)) {
    throw new Error('Expected argument of type google.firestore.v1beta1.WriteResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_firestore_v1beta1_WriteResponse(buffer_arg) {
  return google_firestore_v1beta1_firestore_pb.WriteResponse.deserializeBinary(new Uint8Array(buffer_arg));
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


// Specification of the Firestore API.
//
// The Cloud Firestore service.
//
// This service exposes several types of comparable timestamps:
//
// *    `create_time` - The time at which a document was created. Changes only
//      when a document is deleted, then re-created. Increases in a strict
//       monotonic fashion.
// *    `update_time` - The time at which a document was last updated. Changes
//      every time a document is modified. Does not change when a write results
//      in no modifications. Increases in a strict monotonic fashion.
// *    `read_time` - The time at which a particular state was observed. Used
//      to denote a consistent snapshot of the database or the time at which a
//      Document was observed to not exist.
// *    `commit_time` - The time at which the writes in a transaction were
//      committed. Any read with an equal or greater `read_time` is guaranteed
//      to see the effects of the transaction.
var FirestoreService = exports.FirestoreService = {
  // Gets a single document.
  getDocument: {
    path: '/google.firestore.v1beta1.Firestore/GetDocument',
    requestStream: false,
    responseStream: false,
    requestType: google_firestore_v1beta1_firestore_pb.GetDocumentRequest,
    responseType: google_firestore_v1beta1_document_pb.Document,
    requestSerialize: serialize_google_firestore_v1beta1_GetDocumentRequest,
    requestDeserialize: deserialize_google_firestore_v1beta1_GetDocumentRequest,
    responseSerialize: serialize_google_firestore_v1beta1_Document,
    responseDeserialize: deserialize_google_firestore_v1beta1_Document,
  },
  // Lists documents.
  listDocuments: {
    path: '/google.firestore.v1beta1.Firestore/ListDocuments',
    requestStream: false,
    responseStream: false,
    requestType: google_firestore_v1beta1_firestore_pb.ListDocumentsRequest,
    responseType: google_firestore_v1beta1_firestore_pb.ListDocumentsResponse,
    requestSerialize: serialize_google_firestore_v1beta1_ListDocumentsRequest,
    requestDeserialize: deserialize_google_firestore_v1beta1_ListDocumentsRequest,
    responseSerialize: serialize_google_firestore_v1beta1_ListDocumentsResponse,
    responseDeserialize: deserialize_google_firestore_v1beta1_ListDocumentsResponse,
  },
  // Creates a new document.
  createDocument: {
    path: '/google.firestore.v1beta1.Firestore/CreateDocument',
    requestStream: false,
    responseStream: false,
    requestType: google_firestore_v1beta1_firestore_pb.CreateDocumentRequest,
    responseType: google_firestore_v1beta1_document_pb.Document,
    requestSerialize: serialize_google_firestore_v1beta1_CreateDocumentRequest,
    requestDeserialize: deserialize_google_firestore_v1beta1_CreateDocumentRequest,
    responseSerialize: serialize_google_firestore_v1beta1_Document,
    responseDeserialize: deserialize_google_firestore_v1beta1_Document,
  },
  // Updates or inserts a document.
  updateDocument: {
    path: '/google.firestore.v1beta1.Firestore/UpdateDocument',
    requestStream: false,
    responseStream: false,
    requestType: google_firestore_v1beta1_firestore_pb.UpdateDocumentRequest,
    responseType: google_firestore_v1beta1_document_pb.Document,
    requestSerialize: serialize_google_firestore_v1beta1_UpdateDocumentRequest,
    requestDeserialize: deserialize_google_firestore_v1beta1_UpdateDocumentRequest,
    responseSerialize: serialize_google_firestore_v1beta1_Document,
    responseDeserialize: deserialize_google_firestore_v1beta1_Document,
  },
  // Deletes a document.
  deleteDocument: {
    path: '/google.firestore.v1beta1.Firestore/DeleteDocument',
    requestStream: false,
    responseStream: false,
    requestType: google_firestore_v1beta1_firestore_pb.DeleteDocumentRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_firestore_v1beta1_DeleteDocumentRequest,
    requestDeserialize: deserialize_google_firestore_v1beta1_DeleteDocumentRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Gets multiple documents.
  //
  // Documents returned by this method are not guaranteed to be returned in the
  // same order that they were requested.
  batchGetDocuments: {
    path: '/google.firestore.v1beta1.Firestore/BatchGetDocuments',
    requestStream: false,
    responseStream: true,
    requestType: google_firestore_v1beta1_firestore_pb.BatchGetDocumentsRequest,
    responseType: google_firestore_v1beta1_firestore_pb.BatchGetDocumentsResponse,
    requestSerialize: serialize_google_firestore_v1beta1_BatchGetDocumentsRequest,
    requestDeserialize: deserialize_google_firestore_v1beta1_BatchGetDocumentsRequest,
    responseSerialize: serialize_google_firestore_v1beta1_BatchGetDocumentsResponse,
    responseDeserialize: deserialize_google_firestore_v1beta1_BatchGetDocumentsResponse,
  },
  // Starts a new transaction.
  beginTransaction: {
    path: '/google.firestore.v1beta1.Firestore/BeginTransaction',
    requestStream: false,
    responseStream: false,
    requestType: google_firestore_v1beta1_firestore_pb.BeginTransactionRequest,
    responseType: google_firestore_v1beta1_firestore_pb.BeginTransactionResponse,
    requestSerialize: serialize_google_firestore_v1beta1_BeginTransactionRequest,
    requestDeserialize: deserialize_google_firestore_v1beta1_BeginTransactionRequest,
    responseSerialize: serialize_google_firestore_v1beta1_BeginTransactionResponse,
    responseDeserialize: deserialize_google_firestore_v1beta1_BeginTransactionResponse,
  },
  // Commits a transaction, while optionally updating documents.
  commit: {
    path: '/google.firestore.v1beta1.Firestore/Commit',
    requestStream: false,
    responseStream: false,
    requestType: google_firestore_v1beta1_firestore_pb.CommitRequest,
    responseType: google_firestore_v1beta1_firestore_pb.CommitResponse,
    requestSerialize: serialize_google_firestore_v1beta1_CommitRequest,
    requestDeserialize: deserialize_google_firestore_v1beta1_CommitRequest,
    responseSerialize: serialize_google_firestore_v1beta1_CommitResponse,
    responseDeserialize: deserialize_google_firestore_v1beta1_CommitResponse,
  },
  // Rolls back a transaction.
  rollback: {
    path: '/google.firestore.v1beta1.Firestore/Rollback',
    requestStream: false,
    responseStream: false,
    requestType: google_firestore_v1beta1_firestore_pb.RollbackRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_firestore_v1beta1_RollbackRequest,
    requestDeserialize: deserialize_google_firestore_v1beta1_RollbackRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Runs a query.
  runQuery: {
    path: '/google.firestore.v1beta1.Firestore/RunQuery',
    requestStream: false,
    responseStream: true,
    requestType: google_firestore_v1beta1_firestore_pb.RunQueryRequest,
    responseType: google_firestore_v1beta1_firestore_pb.RunQueryResponse,
    requestSerialize: serialize_google_firestore_v1beta1_RunQueryRequest,
    requestDeserialize: deserialize_google_firestore_v1beta1_RunQueryRequest,
    responseSerialize: serialize_google_firestore_v1beta1_RunQueryResponse,
    responseDeserialize: deserialize_google_firestore_v1beta1_RunQueryResponse,
  },
  // Streams batches of document updates and deletes, in order.
  write: {
    path: '/google.firestore.v1beta1.Firestore/Write',
    requestStream: true,
    responseStream: true,
    requestType: google_firestore_v1beta1_firestore_pb.WriteRequest,
    responseType: google_firestore_v1beta1_firestore_pb.WriteResponse,
    requestSerialize: serialize_google_firestore_v1beta1_WriteRequest,
    requestDeserialize: deserialize_google_firestore_v1beta1_WriteRequest,
    responseSerialize: serialize_google_firestore_v1beta1_WriteResponse,
    responseDeserialize: deserialize_google_firestore_v1beta1_WriteResponse,
  },
  // Listens to changes.
  listen: {
    path: '/google.firestore.v1beta1.Firestore/Listen',
    requestStream: true,
    responseStream: true,
    requestType: google_firestore_v1beta1_firestore_pb.ListenRequest,
    responseType: google_firestore_v1beta1_firestore_pb.ListenResponse,
    requestSerialize: serialize_google_firestore_v1beta1_ListenRequest,
    requestDeserialize: deserialize_google_firestore_v1beta1_ListenRequest,
    responseSerialize: serialize_google_firestore_v1beta1_ListenResponse,
    responseDeserialize: deserialize_google_firestore_v1beta1_ListenResponse,
  },
  // Lists all the collection IDs underneath a document.
  listCollectionIds: {
    path: '/google.firestore.v1beta1.Firestore/ListCollectionIds',
    requestStream: false,
    responseStream: false,
    requestType: google_firestore_v1beta1_firestore_pb.ListCollectionIdsRequest,
    responseType: google_firestore_v1beta1_firestore_pb.ListCollectionIdsResponse,
    requestSerialize: serialize_google_firestore_v1beta1_ListCollectionIdsRequest,
    requestDeserialize: deserialize_google_firestore_v1beta1_ListCollectionIdsRequest,
    responseSerialize: serialize_google_firestore_v1beta1_ListCollectionIdsResponse,
    responseDeserialize: deserialize_google_firestore_v1beta1_ListCollectionIdsResponse,
  },
};

exports.FirestoreClient = grpc.makeGenericClientConstructor(FirestoreService);
