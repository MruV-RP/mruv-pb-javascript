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
var google_spanner_admin_database_v1_spanner_database_admin_pb = require('../../../../../google/spanner/admin/database/v1/spanner_database_admin_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var google_api_client_pb = require('../../../../../google/api/client_pb.js');
var google_api_field_behavior_pb = require('../../../../../google/api/field_behavior_pb.js');
var google_api_resource_pb = require('../../../../../google/api/resource_pb.js');
var google_iam_v1_iam_policy_pb = require('../../../../../google/iam/v1/iam_policy_pb.js');
var google_iam_v1_policy_pb = require('../../../../../google/iam/v1/policy_pb.js');
var google_longrunning_operations_pb = require('../../../../../google/longrunning/operations_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

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

function serialize_google_spanner_admin_database_v1_CreateDatabaseRequest(arg) {
  if (!(arg instanceof google_spanner_admin_database_v1_spanner_database_admin_pb.CreateDatabaseRequest)) {
    throw new Error('Expected argument of type google.spanner.admin.database.v1.CreateDatabaseRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_spanner_admin_database_v1_CreateDatabaseRequest(buffer_arg) {
  return google_spanner_admin_database_v1_spanner_database_admin_pb.CreateDatabaseRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_spanner_admin_database_v1_Database(arg) {
  if (!(arg instanceof google_spanner_admin_database_v1_spanner_database_admin_pb.Database)) {
    throw new Error('Expected argument of type google.spanner.admin.database.v1.Database');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_spanner_admin_database_v1_Database(buffer_arg) {
  return google_spanner_admin_database_v1_spanner_database_admin_pb.Database.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_spanner_admin_database_v1_DropDatabaseRequest(arg) {
  if (!(arg instanceof google_spanner_admin_database_v1_spanner_database_admin_pb.DropDatabaseRequest)) {
    throw new Error('Expected argument of type google.spanner.admin.database.v1.DropDatabaseRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_spanner_admin_database_v1_DropDatabaseRequest(buffer_arg) {
  return google_spanner_admin_database_v1_spanner_database_admin_pb.DropDatabaseRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_spanner_admin_database_v1_GetDatabaseDdlRequest(arg) {
  if (!(arg instanceof google_spanner_admin_database_v1_spanner_database_admin_pb.GetDatabaseDdlRequest)) {
    throw new Error('Expected argument of type google.spanner.admin.database.v1.GetDatabaseDdlRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_spanner_admin_database_v1_GetDatabaseDdlRequest(buffer_arg) {
  return google_spanner_admin_database_v1_spanner_database_admin_pb.GetDatabaseDdlRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_spanner_admin_database_v1_GetDatabaseDdlResponse(arg) {
  if (!(arg instanceof google_spanner_admin_database_v1_spanner_database_admin_pb.GetDatabaseDdlResponse)) {
    throw new Error('Expected argument of type google.spanner.admin.database.v1.GetDatabaseDdlResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_spanner_admin_database_v1_GetDatabaseDdlResponse(buffer_arg) {
  return google_spanner_admin_database_v1_spanner_database_admin_pb.GetDatabaseDdlResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_spanner_admin_database_v1_GetDatabaseRequest(arg) {
  if (!(arg instanceof google_spanner_admin_database_v1_spanner_database_admin_pb.GetDatabaseRequest)) {
    throw new Error('Expected argument of type google.spanner.admin.database.v1.GetDatabaseRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_spanner_admin_database_v1_GetDatabaseRequest(buffer_arg) {
  return google_spanner_admin_database_v1_spanner_database_admin_pb.GetDatabaseRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_spanner_admin_database_v1_ListDatabasesRequest(arg) {
  if (!(arg instanceof google_spanner_admin_database_v1_spanner_database_admin_pb.ListDatabasesRequest)) {
    throw new Error('Expected argument of type google.spanner.admin.database.v1.ListDatabasesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_spanner_admin_database_v1_ListDatabasesRequest(buffer_arg) {
  return google_spanner_admin_database_v1_spanner_database_admin_pb.ListDatabasesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_spanner_admin_database_v1_ListDatabasesResponse(arg) {
  if (!(arg instanceof google_spanner_admin_database_v1_spanner_database_admin_pb.ListDatabasesResponse)) {
    throw new Error('Expected argument of type google.spanner.admin.database.v1.ListDatabasesResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_spanner_admin_database_v1_ListDatabasesResponse(buffer_arg) {
  return google_spanner_admin_database_v1_spanner_database_admin_pb.ListDatabasesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_spanner_admin_database_v1_UpdateDatabaseDdlRequest(arg) {
  if (!(arg instanceof google_spanner_admin_database_v1_spanner_database_admin_pb.UpdateDatabaseDdlRequest)) {
    throw new Error('Expected argument of type google.spanner.admin.database.v1.UpdateDatabaseDdlRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_spanner_admin_database_v1_UpdateDatabaseDdlRequest(buffer_arg) {
  return google_spanner_admin_database_v1_spanner_database_admin_pb.UpdateDatabaseDdlRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// Cloud Spanner Database Admin API
//
// The Cloud Spanner Database Admin API can be used to create, drop, and
// list databases. It also enables updating the schema of pre-existing
// databases.
var DatabaseAdminService = exports.DatabaseAdminService = {
  // Lists Cloud Spanner databases.
  listDatabases: {
    path: '/google.spanner.admin.database.v1.DatabaseAdmin/ListDatabases',
    requestStream: false,
    responseStream: false,
    requestType: google_spanner_admin_database_v1_spanner_database_admin_pb.ListDatabasesRequest,
    responseType: google_spanner_admin_database_v1_spanner_database_admin_pb.ListDatabasesResponse,
    requestSerialize: serialize_google_spanner_admin_database_v1_ListDatabasesRequest,
    requestDeserialize: deserialize_google_spanner_admin_database_v1_ListDatabasesRequest,
    responseSerialize: serialize_google_spanner_admin_database_v1_ListDatabasesResponse,
    responseDeserialize: deserialize_google_spanner_admin_database_v1_ListDatabasesResponse,
  },
  // Creates a new Cloud Spanner database and starts to prepare it for serving.
  // The returned [long-running operation][google.longrunning.Operation] will
  // have a name of the format `<database_name>/operations/<operation_id>` and
  // can be used to track preparation of the database. The
  // [metadata][google.longrunning.Operation.metadata] field type is
  // [CreateDatabaseMetadata][google.spanner.admin.database.v1.CreateDatabaseMetadata].
  // The [response][google.longrunning.Operation.response] field type is
  // [Database][google.spanner.admin.database.v1.Database], if successful.
  createDatabase: {
    path: '/google.spanner.admin.database.v1.DatabaseAdmin/CreateDatabase',
    requestStream: false,
    responseStream: false,
    requestType: google_spanner_admin_database_v1_spanner_database_admin_pb.CreateDatabaseRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_spanner_admin_database_v1_CreateDatabaseRequest,
    requestDeserialize: deserialize_google_spanner_admin_database_v1_CreateDatabaseRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Gets the state of a Cloud Spanner database.
  getDatabase: {
    path: '/google.spanner.admin.database.v1.DatabaseAdmin/GetDatabase',
    requestStream: false,
    responseStream: false,
    requestType: google_spanner_admin_database_v1_spanner_database_admin_pb.GetDatabaseRequest,
    responseType: google_spanner_admin_database_v1_spanner_database_admin_pb.Database,
    requestSerialize: serialize_google_spanner_admin_database_v1_GetDatabaseRequest,
    requestDeserialize: deserialize_google_spanner_admin_database_v1_GetDatabaseRequest,
    responseSerialize: serialize_google_spanner_admin_database_v1_Database,
    responseDeserialize: deserialize_google_spanner_admin_database_v1_Database,
  },
  // Updates the schema of a Cloud Spanner database by
  // creating/altering/dropping tables, columns, indexes, etc. The returned
  // [long-running operation][google.longrunning.Operation] will have a name of
  // the format `<database_name>/operations/<operation_id>` and can be used to
  // track execution of the schema change(s). The
  // [metadata][google.longrunning.Operation.metadata] field type is
  // [UpdateDatabaseDdlMetadata][google.spanner.admin.database.v1.UpdateDatabaseDdlMetadata].
  // The operation has no response.
  updateDatabaseDdl: {
    path: '/google.spanner.admin.database.v1.DatabaseAdmin/UpdateDatabaseDdl',
    requestStream: false,
    responseStream: false,
    requestType: google_spanner_admin_database_v1_spanner_database_admin_pb.UpdateDatabaseDdlRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_spanner_admin_database_v1_UpdateDatabaseDdlRequest,
    requestDeserialize: deserialize_google_spanner_admin_database_v1_UpdateDatabaseDdlRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Drops (aka deletes) a Cloud Spanner database.
  dropDatabase: {
    path: '/google.spanner.admin.database.v1.DatabaseAdmin/DropDatabase',
    requestStream: false,
    responseStream: false,
    requestType: google_spanner_admin_database_v1_spanner_database_admin_pb.DropDatabaseRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_spanner_admin_database_v1_DropDatabaseRequest,
    requestDeserialize: deserialize_google_spanner_admin_database_v1_DropDatabaseRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Returns the schema of a Cloud Spanner database as a list of formatted
  // DDL statements. This method does not show pending schema updates, those may
  // be queried using the [Operations][google.longrunning.Operations] API.
  getDatabaseDdl: {
    path: '/google.spanner.admin.database.v1.DatabaseAdmin/GetDatabaseDdl',
    requestStream: false,
    responseStream: false,
    requestType: google_spanner_admin_database_v1_spanner_database_admin_pb.GetDatabaseDdlRequest,
    responseType: google_spanner_admin_database_v1_spanner_database_admin_pb.GetDatabaseDdlResponse,
    requestSerialize: serialize_google_spanner_admin_database_v1_GetDatabaseDdlRequest,
    requestDeserialize: deserialize_google_spanner_admin_database_v1_GetDatabaseDdlRequest,
    responseSerialize: serialize_google_spanner_admin_database_v1_GetDatabaseDdlResponse,
    responseDeserialize: deserialize_google_spanner_admin_database_v1_GetDatabaseDdlResponse,
  },
  // Sets the access control policy on a database resource.
  // Replaces any existing policy.
  //
  // Authorization requires `spanner.databases.setIamPolicy`
  // permission on [resource][google.iam.v1.SetIamPolicyRequest.resource].
  setIamPolicy: {
    path: '/google.spanner.admin.database.v1.DatabaseAdmin/SetIamPolicy',
    requestStream: false,
    responseStream: false,
    requestType: google_iam_v1_iam_policy_pb.SetIamPolicyRequest,
    responseType: google_iam_v1_policy_pb.Policy,
    requestSerialize: serialize_google_iam_v1_SetIamPolicyRequest,
    requestDeserialize: deserialize_google_iam_v1_SetIamPolicyRequest,
    responseSerialize: serialize_google_iam_v1_Policy,
    responseDeserialize: deserialize_google_iam_v1_Policy,
  },
  // Gets the access control policy for a database resource.
  // Returns an empty policy if a database exists but does
  // not have a policy set.
  //
  // Authorization requires `spanner.databases.getIamPolicy` permission on
  // [resource][google.iam.v1.GetIamPolicyRequest.resource].
  getIamPolicy: {
    path: '/google.spanner.admin.database.v1.DatabaseAdmin/GetIamPolicy',
    requestStream: false,
    responseStream: false,
    requestType: google_iam_v1_iam_policy_pb.GetIamPolicyRequest,
    responseType: google_iam_v1_policy_pb.Policy,
    requestSerialize: serialize_google_iam_v1_GetIamPolicyRequest,
    requestDeserialize: deserialize_google_iam_v1_GetIamPolicyRequest,
    responseSerialize: serialize_google_iam_v1_Policy,
    responseDeserialize: deserialize_google_iam_v1_Policy,
  },
  // Returns permissions that the caller has on the specified database resource.
  //
  // Attempting this RPC on a non-existent Cloud Spanner database will
  // result in a NOT_FOUND error if the user has
  // `spanner.databases.list` permission on the containing Cloud
  // Spanner instance. Otherwise returns an empty set of permissions.
  testIamPermissions: {
    path: '/google.spanner.admin.database.v1.DatabaseAdmin/TestIamPermissions',
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

exports.DatabaseAdminClient = grpc.makeGenericClientConstructor(DatabaseAdminService);
