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
var google_firestore_admin_v1beta1_firestore_admin_pb = require('../../../../google/firestore/admin/v1beta1/firestore_admin_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_firestore_admin_v1beta1_index_pb = require('../../../../google/firestore/admin/v1beta1/index_pb.js');
var google_longrunning_operations_pb = require('../../../../google/longrunning/operations_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_api_client_pb = require('../../../../google/api/client_pb.js');

function serialize_google_firestore_admin_v1beta1_CreateIndexRequest(arg) {
  if (!(arg instanceof google_firestore_admin_v1beta1_firestore_admin_pb.CreateIndexRequest)) {
    throw new Error('Expected argument of type google.firestore.admin.v1beta1.CreateIndexRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_firestore_admin_v1beta1_CreateIndexRequest(buffer_arg) {
  return google_firestore_admin_v1beta1_firestore_admin_pb.CreateIndexRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_firestore_admin_v1beta1_DeleteIndexRequest(arg) {
  if (!(arg instanceof google_firestore_admin_v1beta1_firestore_admin_pb.DeleteIndexRequest)) {
    throw new Error('Expected argument of type google.firestore.admin.v1beta1.DeleteIndexRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_firestore_admin_v1beta1_DeleteIndexRequest(buffer_arg) {
  return google_firestore_admin_v1beta1_firestore_admin_pb.DeleteIndexRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_firestore_admin_v1beta1_ExportDocumentsRequest(arg) {
  if (!(arg instanceof google_firestore_admin_v1beta1_firestore_admin_pb.ExportDocumentsRequest)) {
    throw new Error('Expected argument of type google.firestore.admin.v1beta1.ExportDocumentsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_firestore_admin_v1beta1_ExportDocumentsRequest(buffer_arg) {
  return google_firestore_admin_v1beta1_firestore_admin_pb.ExportDocumentsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_firestore_admin_v1beta1_GetIndexRequest(arg) {
  if (!(arg instanceof google_firestore_admin_v1beta1_firestore_admin_pb.GetIndexRequest)) {
    throw new Error('Expected argument of type google.firestore.admin.v1beta1.GetIndexRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_firestore_admin_v1beta1_GetIndexRequest(buffer_arg) {
  return google_firestore_admin_v1beta1_firestore_admin_pb.GetIndexRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_firestore_admin_v1beta1_ImportDocumentsRequest(arg) {
  if (!(arg instanceof google_firestore_admin_v1beta1_firestore_admin_pb.ImportDocumentsRequest)) {
    throw new Error('Expected argument of type google.firestore.admin.v1beta1.ImportDocumentsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_firestore_admin_v1beta1_ImportDocumentsRequest(buffer_arg) {
  return google_firestore_admin_v1beta1_firestore_admin_pb.ImportDocumentsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_firestore_admin_v1beta1_Index(arg) {
  if (!(arg instanceof google_firestore_admin_v1beta1_index_pb.Index)) {
    throw new Error('Expected argument of type google.firestore.admin.v1beta1.Index');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_firestore_admin_v1beta1_Index(buffer_arg) {
  return google_firestore_admin_v1beta1_index_pb.Index.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_firestore_admin_v1beta1_ListIndexesRequest(arg) {
  if (!(arg instanceof google_firestore_admin_v1beta1_firestore_admin_pb.ListIndexesRequest)) {
    throw new Error('Expected argument of type google.firestore.admin.v1beta1.ListIndexesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_firestore_admin_v1beta1_ListIndexesRequest(buffer_arg) {
  return google_firestore_admin_v1beta1_firestore_admin_pb.ListIndexesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_firestore_admin_v1beta1_ListIndexesResponse(arg) {
  if (!(arg instanceof google_firestore_admin_v1beta1_firestore_admin_pb.ListIndexesResponse)) {
    throw new Error('Expected argument of type google.firestore.admin.v1beta1.ListIndexesResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_firestore_admin_v1beta1_ListIndexesResponse(buffer_arg) {
  return google_firestore_admin_v1beta1_firestore_admin_pb.ListIndexesResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}


// The Cloud Firestore Admin API.
//
// This API provides several administrative services for Cloud Firestore.
//
// # Concepts
//
// Project, Database, Namespace, Collection, and Document are used as defined in
// the Google Cloud Firestore API.
//
// Operation: An Operation represents work being performed in the background.
//
//
// # Services
//
// ## Index
//
// The index service manages Cloud Firestore indexes.
//
// Index creation is performed asynchronously.
// An Operation resource is created for each such asynchronous operation.
// The state of the operation (including any errors encountered)
// may be queried via the Operation resource.
//
// ## Metadata
//
// Provides metadata and statistical information about data in Cloud Firestore.
// The data provided as part of this API may be stale.
//
// ## Operation
//
// The Operations collection provides a record of actions performed for the
// specified Project (including any Operations in progress). Operations are not
// created directly but through calls on other collections or resources.
//
// An Operation that is not yet done may be cancelled. The request to cancel is
// asynchronous and the Operation may continue to run for some time after the
// request to cancel is made.
//
// An Operation that is done may be deleted so that it is no longer listed as
// part of the Operation collection.
//
// Operations are created by service `FirestoreAdmin`, but are accessed via
// service `google.longrunning.Operations`.
var FirestoreAdminService = exports.FirestoreAdminService = {
  // Creates the specified index.
  // A newly created index's initial state is `CREATING`. On completion of the
  // returned [google.longrunning.Operation][google.longrunning.Operation], the state will be `READY`.
  // If the index already exists, the call will return an `ALREADY_EXISTS`
  // status.
  //
  // During creation, the process could result in an error, in which case the
  // index will move to the `ERROR` state. The process can be recovered by
  // fixing the data that caused the error, removing the index with
  // [delete][google.firestore.admin.v1beta1.FirestoreAdmin.DeleteIndex], then re-creating the index with
  // [create][google.firestore.admin.v1beta1.FirestoreAdmin.CreateIndex].
  //
  // Indexes with a single field cannot be created.
  createIndex: {
    path: '/google.firestore.admin.v1beta1.FirestoreAdmin/CreateIndex',
    requestStream: false,
    responseStream: false,
    requestType: google_firestore_admin_v1beta1_firestore_admin_pb.CreateIndexRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_firestore_admin_v1beta1_CreateIndexRequest,
    requestDeserialize: deserialize_google_firestore_admin_v1beta1_CreateIndexRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Lists the indexes that match the specified filters.
  listIndexes: {
    path: '/google.firestore.admin.v1beta1.FirestoreAdmin/ListIndexes',
    requestStream: false,
    responseStream: false,
    requestType: google_firestore_admin_v1beta1_firestore_admin_pb.ListIndexesRequest,
    responseType: google_firestore_admin_v1beta1_firestore_admin_pb.ListIndexesResponse,
    requestSerialize: serialize_google_firestore_admin_v1beta1_ListIndexesRequest,
    requestDeserialize: deserialize_google_firestore_admin_v1beta1_ListIndexesRequest,
    responseSerialize: serialize_google_firestore_admin_v1beta1_ListIndexesResponse,
    responseDeserialize: deserialize_google_firestore_admin_v1beta1_ListIndexesResponse,
  },
  // Gets an index.
  getIndex: {
    path: '/google.firestore.admin.v1beta1.FirestoreAdmin/GetIndex',
    requestStream: false,
    responseStream: false,
    requestType: google_firestore_admin_v1beta1_firestore_admin_pb.GetIndexRequest,
    responseType: google_firestore_admin_v1beta1_index_pb.Index,
    requestSerialize: serialize_google_firestore_admin_v1beta1_GetIndexRequest,
    requestDeserialize: deserialize_google_firestore_admin_v1beta1_GetIndexRequest,
    responseSerialize: serialize_google_firestore_admin_v1beta1_Index,
    responseDeserialize: deserialize_google_firestore_admin_v1beta1_Index,
  },
  // Deletes an index.
  deleteIndex: {
    path: '/google.firestore.admin.v1beta1.FirestoreAdmin/DeleteIndex',
    requestStream: false,
    responseStream: false,
    requestType: google_firestore_admin_v1beta1_firestore_admin_pb.DeleteIndexRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_firestore_admin_v1beta1_DeleteIndexRequest,
    requestDeserialize: deserialize_google_firestore_admin_v1beta1_DeleteIndexRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Exports a copy of all or a subset of documents from Google Cloud Firestore
  // to another storage system, such as Google Cloud Storage. Recent updates to
  // documents may not be reflected in the export. The export occurs in the
  // background and its progress can be monitored and managed via the
  // Operation resource that is created. The output of an export may only be
  // used once the associated operation is done. If an export operation is
  // cancelled before completion it may leave partial data behind in Google
  // Cloud Storage.
  exportDocuments: {
    path: '/google.firestore.admin.v1beta1.FirestoreAdmin/ExportDocuments',
    requestStream: false,
    responseStream: false,
    requestType: google_firestore_admin_v1beta1_firestore_admin_pb.ExportDocumentsRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_firestore_admin_v1beta1_ExportDocumentsRequest,
    requestDeserialize: deserialize_google_firestore_admin_v1beta1_ExportDocumentsRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Imports documents into Google Cloud Firestore. Existing documents with the
  // same name are overwritten. The import occurs in the background and its
  // progress can be monitored and managed via the Operation resource that is
  // created. If an ImportDocuments operation is cancelled, it is possible
  // that a subset of the data has already been imported to Cloud Firestore.
  importDocuments: {
    path: '/google.firestore.admin.v1beta1.FirestoreAdmin/ImportDocuments',
    requestStream: false,
    responseStream: false,
    requestType: google_firestore_admin_v1beta1_firestore_admin_pb.ImportDocumentsRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_firestore_admin_v1beta1_ImportDocumentsRequest,
    requestDeserialize: deserialize_google_firestore_admin_v1beta1_ImportDocumentsRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
};

exports.FirestoreAdminClient = grpc.makeGenericClientConstructor(FirestoreAdminService);
