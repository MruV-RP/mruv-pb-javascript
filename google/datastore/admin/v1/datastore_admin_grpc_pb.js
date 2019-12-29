// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright 2018 Google LLC
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
var google_datastore_admin_v1_datastore_admin_pb = require('../../../../google/datastore/admin/v1/datastore_admin_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_datastore_admin_v1_index_pb = require('../../../../google/datastore/admin/v1/index_pb.js');
var google_longrunning_operations_pb = require('../../../../google/longrunning/operations_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_google_datastore_admin_v1_ExportEntitiesRequest(arg) {
  if (!(arg instanceof google_datastore_admin_v1_datastore_admin_pb.ExportEntitiesRequest)) {
    throw new Error('Expected argument of type google.datastore.admin.v1.ExportEntitiesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_datastore_admin_v1_ExportEntitiesRequest(buffer_arg) {
  return google_datastore_admin_v1_datastore_admin_pb.ExportEntitiesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_datastore_admin_v1_GetIndexRequest(arg) {
  if (!(arg instanceof google_datastore_admin_v1_datastore_admin_pb.GetIndexRequest)) {
    throw new Error('Expected argument of type google.datastore.admin.v1.GetIndexRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_datastore_admin_v1_GetIndexRequest(buffer_arg) {
  return google_datastore_admin_v1_datastore_admin_pb.GetIndexRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_datastore_admin_v1_ImportEntitiesRequest(arg) {
  if (!(arg instanceof google_datastore_admin_v1_datastore_admin_pb.ImportEntitiesRequest)) {
    throw new Error('Expected argument of type google.datastore.admin.v1.ImportEntitiesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_datastore_admin_v1_ImportEntitiesRequest(buffer_arg) {
  return google_datastore_admin_v1_datastore_admin_pb.ImportEntitiesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_datastore_admin_v1_Index(arg) {
  if (!(arg instanceof google_datastore_admin_v1_index_pb.Index)) {
    throw new Error('Expected argument of type google.datastore.admin.v1.Index');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_datastore_admin_v1_Index(buffer_arg) {
  return google_datastore_admin_v1_index_pb.Index.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_datastore_admin_v1_ListIndexesRequest(arg) {
  if (!(arg instanceof google_datastore_admin_v1_datastore_admin_pb.ListIndexesRequest)) {
    throw new Error('Expected argument of type google.datastore.admin.v1.ListIndexesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_datastore_admin_v1_ListIndexesRequest(buffer_arg) {
  return google_datastore_admin_v1_datastore_admin_pb.ListIndexesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_datastore_admin_v1_ListIndexesResponse(arg) {
  if (!(arg instanceof google_datastore_admin_v1_datastore_admin_pb.ListIndexesResponse)) {
    throw new Error('Expected argument of type google.datastore.admin.v1.ListIndexesResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_datastore_admin_v1_ListIndexesResponse(buffer_arg) {
  return google_datastore_admin_v1_datastore_admin_pb.ListIndexesResponse.deserializeBinary(new Uint8Array(buffer_arg));
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


// Google Cloud Datastore Admin API
//
// The Datastore Admin API provides several admin services for Cloud Datastore.
//
// -----------------------------------------------------------------------------
// ## Concepts
//
// Project, namespace, kind, and entity as defined in the Google Cloud Datastore
// API.
//
// Operation: An Operation represents work being performed in the background.
//
// EntityFilter: Allows specifying a subset of entities in a project. This is
// specified as a combination of kinds and namespaces (either or both of which
// may be all).
//
// -----------------------------------------------------------------------------
// ## Services
//
// # Export/Import
//
// The Export/Import service provides the ability to copy all or a subset of
// entities to/from Google Cloud Storage.
//
// Exported data may be imported into Cloud Datastore for any Google Cloud
// Platform project. It is not restricted to the export source project. It is
// possible to export from one project and then import into another.
//
// Exported data can also be loaded into Google BigQuery for analysis.
//
// Exports and imports are performed asynchronously. An Operation resource is
// created for each export/import. The state (including any errors encountered)
// of the export/import may be queried via the Operation resource.
//
// # Index
//
// The index service manages Cloud Datastore composite indexes.
//
// Index creation and deletion are performed asynchronously.
// An Operation resource is created for each such asynchronous operation.
// The state of the operation (including any errors encountered)
// may be queried via the Operation resource.
//
// # Operation
//
// The Operations collection provides a record of actions performed for the
// specified project (including any operations in progress). Operations are not
// created directly but through calls on other collections or resources.
//
// An operation that is not yet done may be cancelled. The request to cancel is
// asynchronous and the operation may continue to run for some time after the
// request to cancel is made.
//
// An operation that is done may be deleted so that it is no longer listed as
// part of the Operation collection.
//
// ListOperations returns all pending operations, but not completed operations.
//
// Operations are created by service DatastoreAdmin,
// but are accessed via service google.longrunning.Operations.
var DatastoreAdminService = exports.DatastoreAdminService = {
  // Exports a copy of all or a subset of entities from Google Cloud Datastore
  // to another storage system, such as Google Cloud Storage. Recent updates to
  // entities may not be reflected in the export. The export occurs in the
  // background and its progress can be monitored and managed via the
  // Operation resource that is created. The output of an export may only be
  // used once the associated operation is done. If an export operation is
  // cancelled before completion it may leave partial data behind in Google
  // Cloud Storage.
  exportEntities: {
    path: '/google.datastore.admin.v1.DatastoreAdmin/ExportEntities',
    requestStream: false,
    responseStream: false,
    requestType: google_datastore_admin_v1_datastore_admin_pb.ExportEntitiesRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_datastore_admin_v1_ExportEntitiesRequest,
    requestDeserialize: deserialize_google_datastore_admin_v1_ExportEntitiesRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Imports entities into Google Cloud Datastore. Existing entities with the
  // same key are overwritten. The import occurs in the background and its
  // progress can be monitored and managed via the Operation resource that is
  // created. If an ImportEntities operation is cancelled, it is possible
  // that a subset of the data has already been imported to Cloud Datastore.
  importEntities: {
    path: '/google.datastore.admin.v1.DatastoreAdmin/ImportEntities',
    requestStream: false,
    responseStream: false,
    requestType: google_datastore_admin_v1_datastore_admin_pb.ImportEntitiesRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_datastore_admin_v1_ImportEntitiesRequest,
    requestDeserialize: deserialize_google_datastore_admin_v1_ImportEntitiesRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Gets an index.
  getIndex: {
    path: '/google.datastore.admin.v1.DatastoreAdmin/GetIndex',
    requestStream: false,
    responseStream: false,
    requestType: google_datastore_admin_v1_datastore_admin_pb.GetIndexRequest,
    responseType: google_datastore_admin_v1_index_pb.Index,
    requestSerialize: serialize_google_datastore_admin_v1_GetIndexRequest,
    requestDeserialize: deserialize_google_datastore_admin_v1_GetIndexRequest,
    responseSerialize: serialize_google_datastore_admin_v1_Index,
    responseDeserialize: deserialize_google_datastore_admin_v1_Index,
  },
  // Lists the indexes that match the specified filters.  Datastore uses an
  // eventually consistent query to fetch the list of indexes and may
  // occasionally return stale results.
  listIndexes: {
    path: '/google.datastore.admin.v1.DatastoreAdmin/ListIndexes',
    requestStream: false,
    responseStream: false,
    requestType: google_datastore_admin_v1_datastore_admin_pb.ListIndexesRequest,
    responseType: google_datastore_admin_v1_datastore_admin_pb.ListIndexesResponse,
    requestSerialize: serialize_google_datastore_admin_v1_ListIndexesRequest,
    requestDeserialize: deserialize_google_datastore_admin_v1_ListIndexesRequest,
    responseSerialize: serialize_google_datastore_admin_v1_ListIndexesResponse,
    responseDeserialize: deserialize_google_datastore_admin_v1_ListIndexesResponse,
  },
};

exports.DatastoreAdminClient = grpc.makeGenericClientConstructor(DatastoreAdminService);
