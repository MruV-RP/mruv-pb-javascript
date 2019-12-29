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
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var google_bigtable_admin_table_v1_bigtable_table_data_pb = require('../../../../../google/bigtable/admin/table/v1/bigtable_table_data_pb.js');
var google_bigtable_admin_table_v1_bigtable_table_service_messages_pb = require('../../../../../google/bigtable/admin/table/v1/bigtable_table_service_messages_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_google_bigtable_admin_table_v1_BulkDeleteRowsRequest(arg) {
  if (!(arg instanceof google_bigtable_admin_table_v1_bigtable_table_service_messages_pb.BulkDeleteRowsRequest)) {
    throw new Error('Expected argument of type google.bigtable.admin.table.v1.BulkDeleteRowsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_bigtable_admin_table_v1_BulkDeleteRowsRequest(buffer_arg) {
  return google_bigtable_admin_table_v1_bigtable_table_service_messages_pb.BulkDeleteRowsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_bigtable_admin_table_v1_ColumnFamily(arg) {
  if (!(arg instanceof google_bigtable_admin_table_v1_bigtable_table_data_pb.ColumnFamily)) {
    throw new Error('Expected argument of type google.bigtable.admin.table.v1.ColumnFamily');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_bigtable_admin_table_v1_ColumnFamily(buffer_arg) {
  return google_bigtable_admin_table_v1_bigtable_table_data_pb.ColumnFamily.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_bigtable_admin_table_v1_CreateColumnFamilyRequest(arg) {
  if (!(arg instanceof google_bigtable_admin_table_v1_bigtable_table_service_messages_pb.CreateColumnFamilyRequest)) {
    throw new Error('Expected argument of type google.bigtable.admin.table.v1.CreateColumnFamilyRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_bigtable_admin_table_v1_CreateColumnFamilyRequest(buffer_arg) {
  return google_bigtable_admin_table_v1_bigtable_table_service_messages_pb.CreateColumnFamilyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_bigtable_admin_table_v1_CreateTableRequest(arg) {
  if (!(arg instanceof google_bigtable_admin_table_v1_bigtable_table_service_messages_pb.CreateTableRequest)) {
    throw new Error('Expected argument of type google.bigtable.admin.table.v1.CreateTableRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_bigtable_admin_table_v1_CreateTableRequest(buffer_arg) {
  return google_bigtable_admin_table_v1_bigtable_table_service_messages_pb.CreateTableRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_bigtable_admin_table_v1_DeleteColumnFamilyRequest(arg) {
  if (!(arg instanceof google_bigtable_admin_table_v1_bigtable_table_service_messages_pb.DeleteColumnFamilyRequest)) {
    throw new Error('Expected argument of type google.bigtable.admin.table.v1.DeleteColumnFamilyRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_bigtable_admin_table_v1_DeleteColumnFamilyRequest(buffer_arg) {
  return google_bigtable_admin_table_v1_bigtable_table_service_messages_pb.DeleteColumnFamilyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_bigtable_admin_table_v1_DeleteTableRequest(arg) {
  if (!(arg instanceof google_bigtable_admin_table_v1_bigtable_table_service_messages_pb.DeleteTableRequest)) {
    throw new Error('Expected argument of type google.bigtable.admin.table.v1.DeleteTableRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_bigtable_admin_table_v1_DeleteTableRequest(buffer_arg) {
  return google_bigtable_admin_table_v1_bigtable_table_service_messages_pb.DeleteTableRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_bigtable_admin_table_v1_GetTableRequest(arg) {
  if (!(arg instanceof google_bigtable_admin_table_v1_bigtable_table_service_messages_pb.GetTableRequest)) {
    throw new Error('Expected argument of type google.bigtable.admin.table.v1.GetTableRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_bigtable_admin_table_v1_GetTableRequest(buffer_arg) {
  return google_bigtable_admin_table_v1_bigtable_table_service_messages_pb.GetTableRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_bigtable_admin_table_v1_ListTablesRequest(arg) {
  if (!(arg instanceof google_bigtable_admin_table_v1_bigtable_table_service_messages_pb.ListTablesRequest)) {
    throw new Error('Expected argument of type google.bigtable.admin.table.v1.ListTablesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_bigtable_admin_table_v1_ListTablesRequest(buffer_arg) {
  return google_bigtable_admin_table_v1_bigtable_table_service_messages_pb.ListTablesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_bigtable_admin_table_v1_ListTablesResponse(arg) {
  if (!(arg instanceof google_bigtable_admin_table_v1_bigtable_table_service_messages_pb.ListTablesResponse)) {
    throw new Error('Expected argument of type google.bigtable.admin.table.v1.ListTablesResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_bigtable_admin_table_v1_ListTablesResponse(buffer_arg) {
  return google_bigtable_admin_table_v1_bigtable_table_service_messages_pb.ListTablesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_bigtable_admin_table_v1_RenameTableRequest(arg) {
  if (!(arg instanceof google_bigtable_admin_table_v1_bigtable_table_service_messages_pb.RenameTableRequest)) {
    throw new Error('Expected argument of type google.bigtable.admin.table.v1.RenameTableRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_bigtable_admin_table_v1_RenameTableRequest(buffer_arg) {
  return google_bigtable_admin_table_v1_bigtable_table_service_messages_pb.RenameTableRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_bigtable_admin_table_v1_Table(arg) {
  if (!(arg instanceof google_bigtable_admin_table_v1_bigtable_table_data_pb.Table)) {
    throw new Error('Expected argument of type google.bigtable.admin.table.v1.Table');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_bigtable_admin_table_v1_Table(buffer_arg) {
  return google_bigtable_admin_table_v1_bigtable_table_data_pb.Table.deserializeBinary(new Uint8Array(buffer_arg));
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


// Service for creating, configuring, and deleting Cloud Bigtable tables.
// Provides access to the table schemas only, not the data stored within the
// tables.
var BigtableTableServiceService = exports.BigtableTableServiceService = {
  // Creates a new table, to be served from a specified cluster.
  // The table can be created with a full set of initial column families,
  // specified in the request.
  createTable: {
    path: '/google.bigtable.admin.table.v1.BigtableTableService/CreateTable',
    requestStream: false,
    responseStream: false,
    requestType: google_bigtable_admin_table_v1_bigtable_table_service_messages_pb.CreateTableRequest,
    responseType: google_bigtable_admin_table_v1_bigtable_table_data_pb.Table,
    requestSerialize: serialize_google_bigtable_admin_table_v1_CreateTableRequest,
    requestDeserialize: deserialize_google_bigtable_admin_table_v1_CreateTableRequest,
    responseSerialize: serialize_google_bigtable_admin_table_v1_Table,
    responseDeserialize: deserialize_google_bigtable_admin_table_v1_Table,
  },
  // Lists the names of all tables served from a specified cluster.
  listTables: {
    path: '/google.bigtable.admin.table.v1.BigtableTableService/ListTables',
    requestStream: false,
    responseStream: false,
    requestType: google_bigtable_admin_table_v1_bigtable_table_service_messages_pb.ListTablesRequest,
    responseType: google_bigtable_admin_table_v1_bigtable_table_service_messages_pb.ListTablesResponse,
    requestSerialize: serialize_google_bigtable_admin_table_v1_ListTablesRequest,
    requestDeserialize: deserialize_google_bigtable_admin_table_v1_ListTablesRequest,
    responseSerialize: serialize_google_bigtable_admin_table_v1_ListTablesResponse,
    responseDeserialize: deserialize_google_bigtable_admin_table_v1_ListTablesResponse,
  },
  // Gets the schema of the specified table, including its column families.
  getTable: {
    path: '/google.bigtable.admin.table.v1.BigtableTableService/GetTable',
    requestStream: false,
    responseStream: false,
    requestType: google_bigtable_admin_table_v1_bigtable_table_service_messages_pb.GetTableRequest,
    responseType: google_bigtable_admin_table_v1_bigtable_table_data_pb.Table,
    requestSerialize: serialize_google_bigtable_admin_table_v1_GetTableRequest,
    requestDeserialize: deserialize_google_bigtable_admin_table_v1_GetTableRequest,
    responseSerialize: serialize_google_bigtable_admin_table_v1_Table,
    responseDeserialize: deserialize_google_bigtable_admin_table_v1_Table,
  },
  // Permanently deletes a specified table and all of its data.
  deleteTable: {
    path: '/google.bigtable.admin.table.v1.BigtableTableService/DeleteTable',
    requestStream: false,
    responseStream: false,
    requestType: google_bigtable_admin_table_v1_bigtable_table_service_messages_pb.DeleteTableRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_bigtable_admin_table_v1_DeleteTableRequest,
    requestDeserialize: deserialize_google_bigtable_admin_table_v1_DeleteTableRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Changes the name of a specified table.
  // Cannot be used to move tables between clusters, zones, or projects.
  renameTable: {
    path: '/google.bigtable.admin.table.v1.BigtableTableService/RenameTable',
    requestStream: false,
    responseStream: false,
    requestType: google_bigtable_admin_table_v1_bigtable_table_service_messages_pb.RenameTableRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_bigtable_admin_table_v1_RenameTableRequest,
    requestDeserialize: deserialize_google_bigtable_admin_table_v1_RenameTableRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Creates a new column family within a specified table.
  createColumnFamily: {
    path: '/google.bigtable.admin.table.v1.BigtableTableService/CreateColumnFamily',
    requestStream: false,
    responseStream: false,
    requestType: google_bigtable_admin_table_v1_bigtable_table_service_messages_pb.CreateColumnFamilyRequest,
    responseType: google_bigtable_admin_table_v1_bigtable_table_data_pb.ColumnFamily,
    requestSerialize: serialize_google_bigtable_admin_table_v1_CreateColumnFamilyRequest,
    requestDeserialize: deserialize_google_bigtable_admin_table_v1_CreateColumnFamilyRequest,
    responseSerialize: serialize_google_bigtable_admin_table_v1_ColumnFamily,
    responseDeserialize: deserialize_google_bigtable_admin_table_v1_ColumnFamily,
  },
  // Changes the configuration of a specified column family.
  updateColumnFamily: {
    path: '/google.bigtable.admin.table.v1.BigtableTableService/UpdateColumnFamily',
    requestStream: false,
    responseStream: false,
    requestType: google_bigtable_admin_table_v1_bigtable_table_data_pb.ColumnFamily,
    responseType: google_bigtable_admin_table_v1_bigtable_table_data_pb.ColumnFamily,
    requestSerialize: serialize_google_bigtable_admin_table_v1_ColumnFamily,
    requestDeserialize: deserialize_google_bigtable_admin_table_v1_ColumnFamily,
    responseSerialize: serialize_google_bigtable_admin_table_v1_ColumnFamily,
    responseDeserialize: deserialize_google_bigtable_admin_table_v1_ColumnFamily,
  },
  // Permanently deletes a specified column family and all of its data.
  deleteColumnFamily: {
    path: '/google.bigtable.admin.table.v1.BigtableTableService/DeleteColumnFamily',
    requestStream: false,
    responseStream: false,
    requestType: google_bigtable_admin_table_v1_bigtable_table_service_messages_pb.DeleteColumnFamilyRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_bigtable_admin_table_v1_DeleteColumnFamilyRequest,
    requestDeserialize: deserialize_google_bigtable_admin_table_v1_DeleteColumnFamilyRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Delete all rows in a table corresponding to a particular prefix
  bulkDeleteRows: {
    path: '/google.bigtable.admin.table.v1.BigtableTableService/BulkDeleteRows',
    requestStream: false,
    responseStream: false,
    requestType: google_bigtable_admin_table_v1_bigtable_table_service_messages_pb.BulkDeleteRowsRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_bigtable_admin_table_v1_BulkDeleteRowsRequest,
    requestDeserialize: deserialize_google_bigtable_admin_table_v1_BulkDeleteRowsRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.BigtableTableServiceClient = grpc.makeGenericClientConstructor(BigtableTableServiceService);
