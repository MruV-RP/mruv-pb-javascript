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
var google_firestore_admin_v1beta2_firestore_admin_pb = require('../../../../google/firestore/admin/v1beta2/firestore_admin_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_firestore_admin_v1beta2_field_pb = require('../../../../google/firestore/admin/v1beta2/field_pb.js');
var google_firestore_admin_v1beta2_index_pb = require('../../../../google/firestore/admin/v1beta2/index_pb.js');
var google_longrunning_operations_pb = require('../../../../google/longrunning/operations_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_api_client_pb = require('../../../../google/api/client_pb.js');

function serialize_google_firestore_admin_v1beta2_CreateIndexRequest(arg) {
  if (!(arg instanceof google_firestore_admin_v1beta2_firestore_admin_pb.CreateIndexRequest)) {
    throw new Error('Expected argument of type google.firestore.admin.v1beta2.CreateIndexRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_firestore_admin_v1beta2_CreateIndexRequest(buffer_arg) {
  return google_firestore_admin_v1beta2_firestore_admin_pb.CreateIndexRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_firestore_admin_v1beta2_DeleteIndexRequest(arg) {
  if (!(arg instanceof google_firestore_admin_v1beta2_firestore_admin_pb.DeleteIndexRequest)) {
    throw new Error('Expected argument of type google.firestore.admin.v1beta2.DeleteIndexRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_firestore_admin_v1beta2_DeleteIndexRequest(buffer_arg) {
  return google_firestore_admin_v1beta2_firestore_admin_pb.DeleteIndexRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_firestore_admin_v1beta2_ExportDocumentsRequest(arg) {
  if (!(arg instanceof google_firestore_admin_v1beta2_firestore_admin_pb.ExportDocumentsRequest)) {
    throw new Error('Expected argument of type google.firestore.admin.v1beta2.ExportDocumentsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_firestore_admin_v1beta2_ExportDocumentsRequest(buffer_arg) {
  return google_firestore_admin_v1beta2_firestore_admin_pb.ExportDocumentsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_firestore_admin_v1beta2_Field(arg) {
  if (!(arg instanceof google_firestore_admin_v1beta2_field_pb.Field)) {
    throw new Error('Expected argument of type google.firestore.admin.v1beta2.Field');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_firestore_admin_v1beta2_Field(buffer_arg) {
  return google_firestore_admin_v1beta2_field_pb.Field.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_firestore_admin_v1beta2_GetFieldRequest(arg) {
  if (!(arg instanceof google_firestore_admin_v1beta2_firestore_admin_pb.GetFieldRequest)) {
    throw new Error('Expected argument of type google.firestore.admin.v1beta2.GetFieldRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_firestore_admin_v1beta2_GetFieldRequest(buffer_arg) {
  return google_firestore_admin_v1beta2_firestore_admin_pb.GetFieldRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_firestore_admin_v1beta2_GetIndexRequest(arg) {
  if (!(arg instanceof google_firestore_admin_v1beta2_firestore_admin_pb.GetIndexRequest)) {
    throw new Error('Expected argument of type google.firestore.admin.v1beta2.GetIndexRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_firestore_admin_v1beta2_GetIndexRequest(buffer_arg) {
  return google_firestore_admin_v1beta2_firestore_admin_pb.GetIndexRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_firestore_admin_v1beta2_ImportDocumentsRequest(arg) {
  if (!(arg instanceof google_firestore_admin_v1beta2_firestore_admin_pb.ImportDocumentsRequest)) {
    throw new Error('Expected argument of type google.firestore.admin.v1beta2.ImportDocumentsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_firestore_admin_v1beta2_ImportDocumentsRequest(buffer_arg) {
  return google_firestore_admin_v1beta2_firestore_admin_pb.ImportDocumentsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_firestore_admin_v1beta2_Index(arg) {
  if (!(arg instanceof google_firestore_admin_v1beta2_index_pb.Index)) {
    throw new Error('Expected argument of type google.firestore.admin.v1beta2.Index');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_firestore_admin_v1beta2_Index(buffer_arg) {
  return google_firestore_admin_v1beta2_index_pb.Index.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_firestore_admin_v1beta2_ListFieldsRequest(arg) {
  if (!(arg instanceof google_firestore_admin_v1beta2_firestore_admin_pb.ListFieldsRequest)) {
    throw new Error('Expected argument of type google.firestore.admin.v1beta2.ListFieldsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_firestore_admin_v1beta2_ListFieldsRequest(buffer_arg) {
  return google_firestore_admin_v1beta2_firestore_admin_pb.ListFieldsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_firestore_admin_v1beta2_ListFieldsResponse(arg) {
  if (!(arg instanceof google_firestore_admin_v1beta2_firestore_admin_pb.ListFieldsResponse)) {
    throw new Error('Expected argument of type google.firestore.admin.v1beta2.ListFieldsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_firestore_admin_v1beta2_ListFieldsResponse(buffer_arg) {
  return google_firestore_admin_v1beta2_firestore_admin_pb.ListFieldsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_firestore_admin_v1beta2_ListIndexesRequest(arg) {
  if (!(arg instanceof google_firestore_admin_v1beta2_firestore_admin_pb.ListIndexesRequest)) {
    throw new Error('Expected argument of type google.firestore.admin.v1beta2.ListIndexesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_firestore_admin_v1beta2_ListIndexesRequest(buffer_arg) {
  return google_firestore_admin_v1beta2_firestore_admin_pb.ListIndexesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_firestore_admin_v1beta2_ListIndexesResponse(arg) {
  if (!(arg instanceof google_firestore_admin_v1beta2_firestore_admin_pb.ListIndexesResponse)) {
    throw new Error('Expected argument of type google.firestore.admin.v1beta2.ListIndexesResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_firestore_admin_v1beta2_ListIndexesResponse(buffer_arg) {
  return google_firestore_admin_v1beta2_firestore_admin_pb.ListIndexesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_firestore_admin_v1beta2_UpdateFieldRequest(arg) {
  if (!(arg instanceof google_firestore_admin_v1beta2_firestore_admin_pb.UpdateFieldRequest)) {
    throw new Error('Expected argument of type google.firestore.admin.v1beta2.UpdateFieldRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_firestore_admin_v1beta2_UpdateFieldRequest(buffer_arg) {
  return google_firestore_admin_v1beta2_firestore_admin_pb.UpdateFieldRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


// Operations are created by service `FirestoreAdmin`, but are accessed via
// service `google.longrunning.Operations`.
var FirestoreAdminService = exports.FirestoreAdminService = {
  // Creates a composite index. This returns a [google.longrunning.Operation][google.longrunning.Operation]
  // which may be used to track the status of the creation. The metadata for
  // the operation will be the type [IndexOperationMetadata][google.firestore.admin.v1beta2.IndexOperationMetadata].
  createIndex: {
    path: '/google.firestore.admin.v1beta2.FirestoreAdmin/CreateIndex',
    requestStream: false,
    responseStream: false,
    requestType: google_firestore_admin_v1beta2_firestore_admin_pb.CreateIndexRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_firestore_admin_v1beta2_CreateIndexRequest,
    requestDeserialize: deserialize_google_firestore_admin_v1beta2_CreateIndexRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Lists composite indexes.
  listIndexes: {
    path: '/google.firestore.admin.v1beta2.FirestoreAdmin/ListIndexes',
    requestStream: false,
    responseStream: false,
    requestType: google_firestore_admin_v1beta2_firestore_admin_pb.ListIndexesRequest,
    responseType: google_firestore_admin_v1beta2_firestore_admin_pb.ListIndexesResponse,
    requestSerialize: serialize_google_firestore_admin_v1beta2_ListIndexesRequest,
    requestDeserialize: deserialize_google_firestore_admin_v1beta2_ListIndexesRequest,
    responseSerialize: serialize_google_firestore_admin_v1beta2_ListIndexesResponse,
    responseDeserialize: deserialize_google_firestore_admin_v1beta2_ListIndexesResponse,
  },
  // Gets a composite index.
  getIndex: {
    path: '/google.firestore.admin.v1beta2.FirestoreAdmin/GetIndex',
    requestStream: false,
    responseStream: false,
    requestType: google_firestore_admin_v1beta2_firestore_admin_pb.GetIndexRequest,
    responseType: google_firestore_admin_v1beta2_index_pb.Index,
    requestSerialize: serialize_google_firestore_admin_v1beta2_GetIndexRequest,
    requestDeserialize: deserialize_google_firestore_admin_v1beta2_GetIndexRequest,
    responseSerialize: serialize_google_firestore_admin_v1beta2_Index,
    responseDeserialize: deserialize_google_firestore_admin_v1beta2_Index,
  },
  // Deletes a composite index.
  deleteIndex: {
    path: '/google.firestore.admin.v1beta2.FirestoreAdmin/DeleteIndex',
    requestStream: false,
    responseStream: false,
    requestType: google_firestore_admin_v1beta2_firestore_admin_pb.DeleteIndexRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_firestore_admin_v1beta2_DeleteIndexRequest,
    requestDeserialize: deserialize_google_firestore_admin_v1beta2_DeleteIndexRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Gets the metadata and configuration for a Field.
  getField: {
    path: '/google.firestore.admin.v1beta2.FirestoreAdmin/GetField',
    requestStream: false,
    responseStream: false,
    requestType: google_firestore_admin_v1beta2_firestore_admin_pb.GetFieldRequest,
    responseType: google_firestore_admin_v1beta2_field_pb.Field,
    requestSerialize: serialize_google_firestore_admin_v1beta2_GetFieldRequest,
    requestDeserialize: deserialize_google_firestore_admin_v1beta2_GetFieldRequest,
    responseSerialize: serialize_google_firestore_admin_v1beta2_Field,
    responseDeserialize: deserialize_google_firestore_admin_v1beta2_Field,
  },
  // Updates a field configuration. Currently, field updates apply only to
  // single field index configuration. However, calls to
  // [FirestoreAdmin.UpdateField][google.firestore.admin.v1beta2.FirestoreAdmin.UpdateField] should provide a field mask to avoid
  // changing any configuration that the caller isn't aware of. The field mask
  // should be specified as: `{ paths: "index_config" }`.
  //
  // This call returns a [google.longrunning.Operation][google.longrunning.Operation] which may be used to
  // track the status of the field update. The metadata for
  // the operation will be the type [FieldOperationMetadata][google.firestore.admin.v1beta2.FieldOperationMetadata].
  //
  // To configure the default field settings for the database, use
  // the special `Field` with resource name:
  // `projects/{project_id}/databases/{database_id}/collectionGroups/__default__/fields/*`.
  updateField: {
    path: '/google.firestore.admin.v1beta2.FirestoreAdmin/UpdateField',
    requestStream: false,
    responseStream: false,
    requestType: google_firestore_admin_v1beta2_firestore_admin_pb.UpdateFieldRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_firestore_admin_v1beta2_UpdateFieldRequest,
    requestDeserialize: deserialize_google_firestore_admin_v1beta2_UpdateFieldRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Lists the field configuration and metadata for this database.
  //
  // Currently, [FirestoreAdmin.ListFields][google.firestore.admin.v1beta2.FirestoreAdmin.ListFields] only supports listing fields
  // that have been explicitly overridden. To issue this query, call
  // [FirestoreAdmin.ListFields][google.firestore.admin.v1beta2.FirestoreAdmin.ListFields] with the filter set to
  // `indexConfig.usesAncestorConfig:false`.
  listFields: {
    path: '/google.firestore.admin.v1beta2.FirestoreAdmin/ListFields',
    requestStream: false,
    responseStream: false,
    requestType: google_firestore_admin_v1beta2_firestore_admin_pb.ListFieldsRequest,
    responseType: google_firestore_admin_v1beta2_firestore_admin_pb.ListFieldsResponse,
    requestSerialize: serialize_google_firestore_admin_v1beta2_ListFieldsRequest,
    requestDeserialize: deserialize_google_firestore_admin_v1beta2_ListFieldsRequest,
    responseSerialize: serialize_google_firestore_admin_v1beta2_ListFieldsResponse,
    responseDeserialize: deserialize_google_firestore_admin_v1beta2_ListFieldsResponse,
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
    path: '/google.firestore.admin.v1beta2.FirestoreAdmin/ExportDocuments',
    requestStream: false,
    responseStream: false,
    requestType: google_firestore_admin_v1beta2_firestore_admin_pb.ExportDocumentsRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_firestore_admin_v1beta2_ExportDocumentsRequest,
    requestDeserialize: deserialize_google_firestore_admin_v1beta2_ExportDocumentsRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Imports documents into Google Cloud Firestore. Existing documents with the
  // same name are overwritten. The import occurs in the background and its
  // progress can be monitored and managed via the Operation resource that is
  // created. If an ImportDocuments operation is cancelled, it is possible
  // that a subset of the data has already been imported to Cloud Firestore.
  importDocuments: {
    path: '/google.firestore.admin.v1beta2.FirestoreAdmin/ImportDocuments',
    requestStream: false,
    responseStream: false,
    requestType: google_firestore_admin_v1beta2_firestore_admin_pb.ImportDocumentsRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_firestore_admin_v1beta2_ImportDocumentsRequest,
    requestDeserialize: deserialize_google_firestore_admin_v1beta2_ImportDocumentsRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
};

exports.FirestoreAdminClient = grpc.makeGenericClientConstructor(FirestoreAdminService);
