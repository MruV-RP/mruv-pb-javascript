// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright 2018 Google LLC.
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
var google_bigtable_admin_v2_bigtable_table_admin_pb = require('../../../../google/bigtable/admin/v2/bigtable_table_admin_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_bigtable_admin_v2_table_pb = require('../../../../google/bigtable/admin/v2/table_pb.js');
var google_iam_v1_iam_policy_pb = require('../../../../google/iam/v1/iam_policy_pb.js');
var google_iam_v1_policy_pb = require('../../../../google/iam/v1/policy_pb.js');
var google_longrunning_operations_pb = require('../../../../google/longrunning/operations_pb.js');
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_google_bigtable_admin_v2_CheckConsistencyRequest(arg) {
  if (!(arg instanceof google_bigtable_admin_v2_bigtable_table_admin_pb.CheckConsistencyRequest)) {
    throw new Error('Expected argument of type google.bigtable.admin.v2.CheckConsistencyRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_bigtable_admin_v2_CheckConsistencyRequest(buffer_arg) {
  return google_bigtable_admin_v2_bigtable_table_admin_pb.CheckConsistencyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_bigtable_admin_v2_CheckConsistencyResponse(arg) {
  if (!(arg instanceof google_bigtable_admin_v2_bigtable_table_admin_pb.CheckConsistencyResponse)) {
    throw new Error('Expected argument of type google.bigtable.admin.v2.CheckConsistencyResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_bigtable_admin_v2_CheckConsistencyResponse(buffer_arg) {
  return google_bigtable_admin_v2_bigtable_table_admin_pb.CheckConsistencyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_bigtable_admin_v2_CreateTableFromSnapshotRequest(arg) {
  if (!(arg instanceof google_bigtable_admin_v2_bigtable_table_admin_pb.CreateTableFromSnapshotRequest)) {
    throw new Error('Expected argument of type google.bigtable.admin.v2.CreateTableFromSnapshotRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_bigtable_admin_v2_CreateTableFromSnapshotRequest(buffer_arg) {
  return google_bigtable_admin_v2_bigtable_table_admin_pb.CreateTableFromSnapshotRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_bigtable_admin_v2_CreateTableRequest(arg) {
  if (!(arg instanceof google_bigtable_admin_v2_bigtable_table_admin_pb.CreateTableRequest)) {
    throw new Error('Expected argument of type google.bigtable.admin.v2.CreateTableRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_bigtable_admin_v2_CreateTableRequest(buffer_arg) {
  return google_bigtable_admin_v2_bigtable_table_admin_pb.CreateTableRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_bigtable_admin_v2_DeleteSnapshotRequest(arg) {
  if (!(arg instanceof google_bigtable_admin_v2_bigtable_table_admin_pb.DeleteSnapshotRequest)) {
    throw new Error('Expected argument of type google.bigtable.admin.v2.DeleteSnapshotRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_bigtable_admin_v2_DeleteSnapshotRequest(buffer_arg) {
  return google_bigtable_admin_v2_bigtable_table_admin_pb.DeleteSnapshotRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_bigtable_admin_v2_DeleteTableRequest(arg) {
  if (!(arg instanceof google_bigtable_admin_v2_bigtable_table_admin_pb.DeleteTableRequest)) {
    throw new Error('Expected argument of type google.bigtable.admin.v2.DeleteTableRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_bigtable_admin_v2_DeleteTableRequest(buffer_arg) {
  return google_bigtable_admin_v2_bigtable_table_admin_pb.DeleteTableRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_bigtable_admin_v2_DropRowRangeRequest(arg) {
  if (!(arg instanceof google_bigtable_admin_v2_bigtable_table_admin_pb.DropRowRangeRequest)) {
    throw new Error('Expected argument of type google.bigtable.admin.v2.DropRowRangeRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_bigtable_admin_v2_DropRowRangeRequest(buffer_arg) {
  return google_bigtable_admin_v2_bigtable_table_admin_pb.DropRowRangeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_bigtable_admin_v2_GenerateConsistencyTokenRequest(arg) {
  if (!(arg instanceof google_bigtable_admin_v2_bigtable_table_admin_pb.GenerateConsistencyTokenRequest)) {
    throw new Error('Expected argument of type google.bigtable.admin.v2.GenerateConsistencyTokenRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_bigtable_admin_v2_GenerateConsistencyTokenRequest(buffer_arg) {
  return google_bigtable_admin_v2_bigtable_table_admin_pb.GenerateConsistencyTokenRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_bigtable_admin_v2_GenerateConsistencyTokenResponse(arg) {
  if (!(arg instanceof google_bigtable_admin_v2_bigtable_table_admin_pb.GenerateConsistencyTokenResponse)) {
    throw new Error('Expected argument of type google.bigtable.admin.v2.GenerateConsistencyTokenResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_bigtable_admin_v2_GenerateConsistencyTokenResponse(buffer_arg) {
  return google_bigtable_admin_v2_bigtable_table_admin_pb.GenerateConsistencyTokenResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_bigtable_admin_v2_GetSnapshotRequest(arg) {
  if (!(arg instanceof google_bigtable_admin_v2_bigtable_table_admin_pb.GetSnapshotRequest)) {
    throw new Error('Expected argument of type google.bigtable.admin.v2.GetSnapshotRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_bigtable_admin_v2_GetSnapshotRequest(buffer_arg) {
  return google_bigtable_admin_v2_bigtable_table_admin_pb.GetSnapshotRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_bigtable_admin_v2_GetTableRequest(arg) {
  if (!(arg instanceof google_bigtable_admin_v2_bigtable_table_admin_pb.GetTableRequest)) {
    throw new Error('Expected argument of type google.bigtable.admin.v2.GetTableRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_bigtable_admin_v2_GetTableRequest(buffer_arg) {
  return google_bigtable_admin_v2_bigtable_table_admin_pb.GetTableRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_bigtable_admin_v2_ListSnapshotsRequest(arg) {
  if (!(arg instanceof google_bigtable_admin_v2_bigtable_table_admin_pb.ListSnapshotsRequest)) {
    throw new Error('Expected argument of type google.bigtable.admin.v2.ListSnapshotsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_bigtable_admin_v2_ListSnapshotsRequest(buffer_arg) {
  return google_bigtable_admin_v2_bigtable_table_admin_pb.ListSnapshotsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_bigtable_admin_v2_ListSnapshotsResponse(arg) {
  if (!(arg instanceof google_bigtable_admin_v2_bigtable_table_admin_pb.ListSnapshotsResponse)) {
    throw new Error('Expected argument of type google.bigtable.admin.v2.ListSnapshotsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_bigtable_admin_v2_ListSnapshotsResponse(buffer_arg) {
  return google_bigtable_admin_v2_bigtable_table_admin_pb.ListSnapshotsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_bigtable_admin_v2_ListTablesRequest(arg) {
  if (!(arg instanceof google_bigtable_admin_v2_bigtable_table_admin_pb.ListTablesRequest)) {
    throw new Error('Expected argument of type google.bigtable.admin.v2.ListTablesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_bigtable_admin_v2_ListTablesRequest(buffer_arg) {
  return google_bigtable_admin_v2_bigtable_table_admin_pb.ListTablesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_bigtable_admin_v2_ListTablesResponse(arg) {
  if (!(arg instanceof google_bigtable_admin_v2_bigtable_table_admin_pb.ListTablesResponse)) {
    throw new Error('Expected argument of type google.bigtable.admin.v2.ListTablesResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_bigtable_admin_v2_ListTablesResponse(buffer_arg) {
  return google_bigtable_admin_v2_bigtable_table_admin_pb.ListTablesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_bigtable_admin_v2_ModifyColumnFamiliesRequest(arg) {
  if (!(arg instanceof google_bigtable_admin_v2_bigtable_table_admin_pb.ModifyColumnFamiliesRequest)) {
    throw new Error('Expected argument of type google.bigtable.admin.v2.ModifyColumnFamiliesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_bigtable_admin_v2_ModifyColumnFamiliesRequest(buffer_arg) {
  return google_bigtable_admin_v2_bigtable_table_admin_pb.ModifyColumnFamiliesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_bigtable_admin_v2_Snapshot(arg) {
  if (!(arg instanceof google_bigtable_admin_v2_table_pb.Snapshot)) {
    throw new Error('Expected argument of type google.bigtable.admin.v2.Snapshot');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_bigtable_admin_v2_Snapshot(buffer_arg) {
  return google_bigtable_admin_v2_table_pb.Snapshot.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_bigtable_admin_v2_SnapshotTableRequest(arg) {
  if (!(arg instanceof google_bigtable_admin_v2_bigtable_table_admin_pb.SnapshotTableRequest)) {
    throw new Error('Expected argument of type google.bigtable.admin.v2.SnapshotTableRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_bigtable_admin_v2_SnapshotTableRequest(buffer_arg) {
  return google_bigtable_admin_v2_bigtable_table_admin_pb.SnapshotTableRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_bigtable_admin_v2_Table(arg) {
  if (!(arg instanceof google_bigtable_admin_v2_table_pb.Table)) {
    throw new Error('Expected argument of type google.bigtable.admin.v2.Table');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_bigtable_admin_v2_Table(buffer_arg) {
  return google_bigtable_admin_v2_table_pb.Table.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_v1_GetIamPolicyRequest(arg) {
  if (!(arg instanceof google_iam_v1_iam_policy_pb.GetIamPolicyRequest)) {
    throw new Error('Expected argument of type google.iam.v1.GetIamPolicyRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_iam_v1_GetIamPolicyRequest(buffer_arg) {
  return google_iam_v1_iam_policy_pb.GetIamPolicyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_v1_Policy(arg) {
  if (!(arg instanceof google_iam_v1_policy_pb.Policy)) {
    throw new Error('Expected argument of type google.iam.v1.Policy');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_iam_v1_Policy(buffer_arg) {
  return google_iam_v1_policy_pb.Policy.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_v1_SetIamPolicyRequest(arg) {
  if (!(arg instanceof google_iam_v1_iam_policy_pb.SetIamPolicyRequest)) {
    throw new Error('Expected argument of type google.iam.v1.SetIamPolicyRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_iam_v1_SetIamPolicyRequest(buffer_arg) {
  return google_iam_v1_iam_policy_pb.SetIamPolicyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_v1_TestIamPermissionsRequest(arg) {
  if (!(arg instanceof google_iam_v1_iam_policy_pb.TestIamPermissionsRequest)) {
    throw new Error('Expected argument of type google.iam.v1.TestIamPermissionsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_iam_v1_TestIamPermissionsRequest(buffer_arg) {
  return google_iam_v1_iam_policy_pb.TestIamPermissionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_v1_TestIamPermissionsResponse(arg) {
  if (!(arg instanceof google_iam_v1_iam_policy_pb.TestIamPermissionsResponse)) {
    throw new Error('Expected argument of type google.iam.v1.TestIamPermissionsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_iam_v1_TestIamPermissionsResponse(buffer_arg) {
  return google_iam_v1_iam_policy_pb.TestIamPermissionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
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


// Service for creating, configuring, and deleting Cloud Bigtable tables.
//
//
// Provides access to the table schemas only, not the data stored within
// the tables.
var BigtableTableAdminService = exports.BigtableTableAdminService = {
  // Creates a new table in the specified instance.
  // The table can be created with a full set of initial column families,
  // specified in the request.
  createTable: {
    path: '/google.bigtable.admin.v2.BigtableTableAdmin/CreateTable',
    requestStream: false,
    responseStream: false,
    requestType: google_bigtable_admin_v2_bigtable_table_admin_pb.CreateTableRequest,
    responseType: google_bigtable_admin_v2_table_pb.Table,
    requestSerialize: serialize_google_bigtable_admin_v2_CreateTableRequest,
    requestDeserialize: deserialize_google_bigtable_admin_v2_CreateTableRequest,
    responseSerialize: serialize_google_bigtable_admin_v2_Table,
    responseDeserialize: deserialize_google_bigtable_admin_v2_Table,
  },
  // Creates a new table from the specified snapshot. The target table must
  // not exist. The snapshot and the table must be in the same instance.
  //
  // Note: This is a private alpha release of Cloud Bigtable snapshots. This
  // feature is not currently available to most Cloud Bigtable customers. This
  // feature might be changed in backward-incompatible ways and is not
  // recommended for production use. It is not subject to any SLA or deprecation
  // policy.
  createTableFromSnapshot: {
    path: '/google.bigtable.admin.v2.BigtableTableAdmin/CreateTableFromSnapshot',
    requestStream: false,
    responseStream: false,
    requestType: google_bigtable_admin_v2_bigtable_table_admin_pb.CreateTableFromSnapshotRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_bigtable_admin_v2_CreateTableFromSnapshotRequest,
    requestDeserialize: deserialize_google_bigtable_admin_v2_CreateTableFromSnapshotRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Lists all tables served from a specified instance.
  listTables: {
    path: '/google.bigtable.admin.v2.BigtableTableAdmin/ListTables',
    requestStream: false,
    responseStream: false,
    requestType: google_bigtable_admin_v2_bigtable_table_admin_pb.ListTablesRequest,
    responseType: google_bigtable_admin_v2_bigtable_table_admin_pb.ListTablesResponse,
    requestSerialize: serialize_google_bigtable_admin_v2_ListTablesRequest,
    requestDeserialize: deserialize_google_bigtable_admin_v2_ListTablesRequest,
    responseSerialize: serialize_google_bigtable_admin_v2_ListTablesResponse,
    responseDeserialize: deserialize_google_bigtable_admin_v2_ListTablesResponse,
  },
  // Gets metadata information about the specified table.
  getTable: {
    path: '/google.bigtable.admin.v2.BigtableTableAdmin/GetTable',
    requestStream: false,
    responseStream: false,
    requestType: google_bigtable_admin_v2_bigtable_table_admin_pb.GetTableRequest,
    responseType: google_bigtable_admin_v2_table_pb.Table,
    requestSerialize: serialize_google_bigtable_admin_v2_GetTableRequest,
    requestDeserialize: deserialize_google_bigtable_admin_v2_GetTableRequest,
    responseSerialize: serialize_google_bigtable_admin_v2_Table,
    responseDeserialize: deserialize_google_bigtable_admin_v2_Table,
  },
  // Permanently deletes a specified table and all of its data.
  deleteTable: {
    path: '/google.bigtable.admin.v2.BigtableTableAdmin/DeleteTable',
    requestStream: false,
    responseStream: false,
    requestType: google_bigtable_admin_v2_bigtable_table_admin_pb.DeleteTableRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_bigtable_admin_v2_DeleteTableRequest,
    requestDeserialize: deserialize_google_bigtable_admin_v2_DeleteTableRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Performs a series of column family modifications on the specified table.
  // Either all or none of the modifications will occur before this method
  // returns, but data requests received prior to that point may see a table
  // where only some modifications have taken effect.
  modifyColumnFamilies: {
    path: '/google.bigtable.admin.v2.BigtableTableAdmin/ModifyColumnFamilies',
    requestStream: false,
    responseStream: false,
    requestType: google_bigtable_admin_v2_bigtable_table_admin_pb.ModifyColumnFamiliesRequest,
    responseType: google_bigtable_admin_v2_table_pb.Table,
    requestSerialize: serialize_google_bigtable_admin_v2_ModifyColumnFamiliesRequest,
    requestDeserialize: deserialize_google_bigtable_admin_v2_ModifyColumnFamiliesRequest,
    responseSerialize: serialize_google_bigtable_admin_v2_Table,
    responseDeserialize: deserialize_google_bigtable_admin_v2_Table,
  },
  // Permanently drop/delete a row range from a specified table. The request can
  // specify whether to delete all rows in a table, or only those that match a
  // particular prefix.
  dropRowRange: {
    path: '/google.bigtable.admin.v2.BigtableTableAdmin/DropRowRange',
    requestStream: false,
    responseStream: false,
    requestType: google_bigtable_admin_v2_bigtable_table_admin_pb.DropRowRangeRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_bigtable_admin_v2_DropRowRangeRequest,
    requestDeserialize: deserialize_google_bigtable_admin_v2_DropRowRangeRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Generates a consistency token for a Table, which can be used in
  // CheckConsistency to check whether mutations to the table that finished
  // before this call started have been replicated. The tokens will be available
  // for 90 days.
  generateConsistencyToken: {
    path: '/google.bigtable.admin.v2.BigtableTableAdmin/GenerateConsistencyToken',
    requestStream: false,
    responseStream: false,
    requestType: google_bigtable_admin_v2_bigtable_table_admin_pb.GenerateConsistencyTokenRequest,
    responseType: google_bigtable_admin_v2_bigtable_table_admin_pb.GenerateConsistencyTokenResponse,
    requestSerialize: serialize_google_bigtable_admin_v2_GenerateConsistencyTokenRequest,
    requestDeserialize: deserialize_google_bigtable_admin_v2_GenerateConsistencyTokenRequest,
    responseSerialize: serialize_google_bigtable_admin_v2_GenerateConsistencyTokenResponse,
    responseDeserialize: deserialize_google_bigtable_admin_v2_GenerateConsistencyTokenResponse,
  },
  // Checks replication consistency based on a consistency token, that is, if
  // replication has caught up based on the conditions specified in the token
  // and the check request.
  checkConsistency: {
    path: '/google.bigtable.admin.v2.BigtableTableAdmin/CheckConsistency',
    requestStream: false,
    responseStream: false,
    requestType: google_bigtable_admin_v2_bigtable_table_admin_pb.CheckConsistencyRequest,
    responseType: google_bigtable_admin_v2_bigtable_table_admin_pb.CheckConsistencyResponse,
    requestSerialize: serialize_google_bigtable_admin_v2_CheckConsistencyRequest,
    requestDeserialize: deserialize_google_bigtable_admin_v2_CheckConsistencyRequest,
    responseSerialize: serialize_google_bigtable_admin_v2_CheckConsistencyResponse,
    responseDeserialize: deserialize_google_bigtable_admin_v2_CheckConsistencyResponse,
  },
  // Creates a new snapshot in the specified cluster from the specified
  // source table. The cluster and the table must be in the same instance.
  //
  // Note: This is a private alpha release of Cloud Bigtable snapshots. This
  // feature is not currently available to most Cloud Bigtable customers. This
  // feature might be changed in backward-incompatible ways and is not
  // recommended for production use. It is not subject to any SLA or deprecation
  // policy.
  snapshotTable: {
    path: '/google.bigtable.admin.v2.BigtableTableAdmin/SnapshotTable',
    requestStream: false,
    responseStream: false,
    requestType: google_bigtable_admin_v2_bigtable_table_admin_pb.SnapshotTableRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_bigtable_admin_v2_SnapshotTableRequest,
    requestDeserialize: deserialize_google_bigtable_admin_v2_SnapshotTableRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Gets metadata information about the specified snapshot.
  //
  // Note: This is a private alpha release of Cloud Bigtable snapshots. This
  // feature is not currently available to most Cloud Bigtable customers. This
  // feature might be changed in backward-incompatible ways and is not
  // recommended for production use. It is not subject to any SLA or deprecation
  // policy.
  getSnapshot: {
    path: '/google.bigtable.admin.v2.BigtableTableAdmin/GetSnapshot',
    requestStream: false,
    responseStream: false,
    requestType: google_bigtable_admin_v2_bigtable_table_admin_pb.GetSnapshotRequest,
    responseType: google_bigtable_admin_v2_table_pb.Snapshot,
    requestSerialize: serialize_google_bigtable_admin_v2_GetSnapshotRequest,
    requestDeserialize: deserialize_google_bigtable_admin_v2_GetSnapshotRequest,
    responseSerialize: serialize_google_bigtable_admin_v2_Snapshot,
    responseDeserialize: deserialize_google_bigtable_admin_v2_Snapshot,
  },
  // Lists all snapshots associated with the specified cluster.
  //
  // Note: This is a private alpha release of Cloud Bigtable snapshots. This
  // feature is not currently available to most Cloud Bigtable customers. This
  // feature might be changed in backward-incompatible ways and is not
  // recommended for production use. It is not subject to any SLA or deprecation
  // policy.
  listSnapshots: {
    path: '/google.bigtable.admin.v2.BigtableTableAdmin/ListSnapshots',
    requestStream: false,
    responseStream: false,
    requestType: google_bigtable_admin_v2_bigtable_table_admin_pb.ListSnapshotsRequest,
    responseType: google_bigtable_admin_v2_bigtable_table_admin_pb.ListSnapshotsResponse,
    requestSerialize: serialize_google_bigtable_admin_v2_ListSnapshotsRequest,
    requestDeserialize: deserialize_google_bigtable_admin_v2_ListSnapshotsRequest,
    responseSerialize: serialize_google_bigtable_admin_v2_ListSnapshotsResponse,
    responseDeserialize: deserialize_google_bigtable_admin_v2_ListSnapshotsResponse,
  },
  // Permanently deletes the specified snapshot.
  //
  // Note: This is a private alpha release of Cloud Bigtable snapshots. This
  // feature is not currently available to most Cloud Bigtable customers. This
  // feature might be changed in backward-incompatible ways and is not
  // recommended for production use. It is not subject to any SLA or deprecation
  // policy.
  deleteSnapshot: {
    path: '/google.bigtable.admin.v2.BigtableTableAdmin/DeleteSnapshot',
    requestStream: false,
    responseStream: false,
    requestType: google_bigtable_admin_v2_bigtable_table_admin_pb.DeleteSnapshotRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_bigtable_admin_v2_DeleteSnapshotRequest,
    requestDeserialize: deserialize_google_bigtable_admin_v2_DeleteSnapshotRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Gets the access control policy for an instance resource. Returns an empty
  // policy if an table exists but does not have a policy set.
  getIamPolicy: {
    path: '/google.bigtable.admin.v2.BigtableTableAdmin/GetIamPolicy',
    requestStream: false,
    responseStream: false,
    requestType: google_iam_v1_iam_policy_pb.GetIamPolicyRequest,
    responseType: google_iam_v1_policy_pb.Policy,
    requestSerialize: serialize_google_iam_v1_GetIamPolicyRequest,
    requestDeserialize: deserialize_google_iam_v1_GetIamPolicyRequest,
    responseSerialize: serialize_google_iam_v1_Policy,
    responseDeserialize: deserialize_google_iam_v1_Policy,
  },
  // Sets the access control policy on a table resource. Replaces any existing
  // policy.
  setIamPolicy: {
    path: '/google.bigtable.admin.v2.BigtableTableAdmin/SetIamPolicy',
    requestStream: false,
    responseStream: false,
    requestType: google_iam_v1_iam_policy_pb.SetIamPolicyRequest,
    responseType: google_iam_v1_policy_pb.Policy,
    requestSerialize: serialize_google_iam_v1_SetIamPolicyRequest,
    requestDeserialize: deserialize_google_iam_v1_SetIamPolicyRequest,
    responseSerialize: serialize_google_iam_v1_Policy,
    responseDeserialize: deserialize_google_iam_v1_Policy,
  },
  // Returns permissions that the caller has on the specified table resource.
  testIamPermissions: {
    path: '/google.bigtable.admin.v2.BigtableTableAdmin/TestIamPermissions',
    requestStream: false,
    responseStream: false,
    requestType: google_iam_v1_iam_policy_pb.TestIamPermissionsRequest,
    responseType: google_iam_v1_iam_policy_pb.TestIamPermissionsResponse,
    requestSerialize: serialize_google_iam_v1_TestIamPermissionsRequest,
    requestDeserialize: deserialize_google_iam_v1_TestIamPermissionsRequest,
    responseSerialize: serialize_google_iam_v1_TestIamPermissionsResponse,
    responseDeserialize: deserialize_google_iam_v1_TestIamPermissionsResponse,
  },
};

exports.BigtableTableAdminClient = grpc.makeGenericClientConstructor(BigtableTableAdminService);
