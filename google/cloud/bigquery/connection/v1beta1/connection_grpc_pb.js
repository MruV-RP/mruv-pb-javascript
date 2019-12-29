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
var google_cloud_bigquery_connection_v1beta1_connection_pb = require('../../../../../google/cloud/bigquery/connection/v1beta1/connection_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var google_iam_v1_iam_policy_pb = require('../../../../../google/iam/v1/iam_policy_pb.js');
var google_iam_v1_policy_pb = require('../../../../../google/iam/v1/policy_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
var google_api_client_pb = require('../../../../../google/api/client_pb.js');

function serialize_google_cloud_bigquery_connection_v1beta1_Connection(arg) {
  if (!(arg instanceof google_cloud_bigquery_connection_v1beta1_connection_pb.Connection)) {
    throw new Error('Expected argument of type google.cloud.bigquery.connection.v1beta1.Connection');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_bigquery_connection_v1beta1_Connection(buffer_arg) {
  return google_cloud_bigquery_connection_v1beta1_connection_pb.Connection.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_bigquery_connection_v1beta1_CreateConnectionRequest(arg) {
  if (!(arg instanceof google_cloud_bigquery_connection_v1beta1_connection_pb.CreateConnectionRequest)) {
    throw new Error('Expected argument of type google.cloud.bigquery.connection.v1beta1.CreateConnectionRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_bigquery_connection_v1beta1_CreateConnectionRequest(buffer_arg) {
  return google_cloud_bigquery_connection_v1beta1_connection_pb.CreateConnectionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_bigquery_connection_v1beta1_DeleteConnectionRequest(arg) {
  if (!(arg instanceof google_cloud_bigquery_connection_v1beta1_connection_pb.DeleteConnectionRequest)) {
    throw new Error('Expected argument of type google.cloud.bigquery.connection.v1beta1.DeleteConnectionRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_bigquery_connection_v1beta1_DeleteConnectionRequest(buffer_arg) {
  return google_cloud_bigquery_connection_v1beta1_connection_pb.DeleteConnectionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_bigquery_connection_v1beta1_GetConnectionRequest(arg) {
  if (!(arg instanceof google_cloud_bigquery_connection_v1beta1_connection_pb.GetConnectionRequest)) {
    throw new Error('Expected argument of type google.cloud.bigquery.connection.v1beta1.GetConnectionRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_bigquery_connection_v1beta1_GetConnectionRequest(buffer_arg) {
  return google_cloud_bigquery_connection_v1beta1_connection_pb.GetConnectionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_bigquery_connection_v1beta1_ListConnectionsRequest(arg) {
  if (!(arg instanceof google_cloud_bigquery_connection_v1beta1_connection_pb.ListConnectionsRequest)) {
    throw new Error('Expected argument of type google.cloud.bigquery.connection.v1beta1.ListConnectionsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_bigquery_connection_v1beta1_ListConnectionsRequest(buffer_arg) {
  return google_cloud_bigquery_connection_v1beta1_connection_pb.ListConnectionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_bigquery_connection_v1beta1_ListConnectionsResponse(arg) {
  if (!(arg instanceof google_cloud_bigquery_connection_v1beta1_connection_pb.ListConnectionsResponse)) {
    throw new Error('Expected argument of type google.cloud.bigquery.connection.v1beta1.ListConnectionsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_bigquery_connection_v1beta1_ListConnectionsResponse(buffer_arg) {
  return google_cloud_bigquery_connection_v1beta1_connection_pb.ListConnectionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_bigquery_connection_v1beta1_UpdateConnectionCredentialRequest(arg) {
  if (!(arg instanceof google_cloud_bigquery_connection_v1beta1_connection_pb.UpdateConnectionCredentialRequest)) {
    throw new Error('Expected argument of type google.cloud.bigquery.connection.v1beta1.UpdateConnectionCredentialRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_bigquery_connection_v1beta1_UpdateConnectionCredentialRequest(buffer_arg) {
  return google_cloud_bigquery_connection_v1beta1_connection_pb.UpdateConnectionCredentialRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_bigquery_connection_v1beta1_UpdateConnectionRequest(arg) {
  if (!(arg instanceof google_cloud_bigquery_connection_v1beta1_connection_pb.UpdateConnectionRequest)) {
    throw new Error('Expected argument of type google.cloud.bigquery.connection.v1beta1.UpdateConnectionRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_bigquery_connection_v1beta1_UpdateConnectionRequest(buffer_arg) {
  return google_cloud_bigquery_connection_v1beta1_connection_pb.UpdateConnectionRequest.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}


// Manages external data source connections and credentials.
var ConnectionServiceService = exports.ConnectionServiceService = {
  // Creates a new connection.
  createConnection: {
    path: '/google.cloud.bigquery.connection.v1beta1.ConnectionService/CreateConnection',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_bigquery_connection_v1beta1_connection_pb.CreateConnectionRequest,
    responseType: google_cloud_bigquery_connection_v1beta1_connection_pb.Connection,
    requestSerialize: serialize_google_cloud_bigquery_connection_v1beta1_CreateConnectionRequest,
    requestDeserialize: deserialize_google_cloud_bigquery_connection_v1beta1_CreateConnectionRequest,
    responseSerialize: serialize_google_cloud_bigquery_connection_v1beta1_Connection,
    responseDeserialize: deserialize_google_cloud_bigquery_connection_v1beta1_Connection,
  },
  // Returns specified connection.
  getConnection: {
    path: '/google.cloud.bigquery.connection.v1beta1.ConnectionService/GetConnection',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_bigquery_connection_v1beta1_connection_pb.GetConnectionRequest,
    responseType: google_cloud_bigquery_connection_v1beta1_connection_pb.Connection,
    requestSerialize: serialize_google_cloud_bigquery_connection_v1beta1_GetConnectionRequest,
    requestDeserialize: deserialize_google_cloud_bigquery_connection_v1beta1_GetConnectionRequest,
    responseSerialize: serialize_google_cloud_bigquery_connection_v1beta1_Connection,
    responseDeserialize: deserialize_google_cloud_bigquery_connection_v1beta1_Connection,
  },
  // Returns a list of connections in the given project.
  listConnections: {
    path: '/google.cloud.bigquery.connection.v1beta1.ConnectionService/ListConnections',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_bigquery_connection_v1beta1_connection_pb.ListConnectionsRequest,
    responseType: google_cloud_bigquery_connection_v1beta1_connection_pb.ListConnectionsResponse,
    requestSerialize: serialize_google_cloud_bigquery_connection_v1beta1_ListConnectionsRequest,
    requestDeserialize: deserialize_google_cloud_bigquery_connection_v1beta1_ListConnectionsRequest,
    responseSerialize: serialize_google_cloud_bigquery_connection_v1beta1_ListConnectionsResponse,
    responseDeserialize: deserialize_google_cloud_bigquery_connection_v1beta1_ListConnectionsResponse,
  },
  // Updates the specified connection. For security reasons, also resets
  // credential if connection properties are in the update field mask.
  updateConnection: {
    path: '/google.cloud.bigquery.connection.v1beta1.ConnectionService/UpdateConnection',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_bigquery_connection_v1beta1_connection_pb.UpdateConnectionRequest,
    responseType: google_cloud_bigquery_connection_v1beta1_connection_pb.Connection,
    requestSerialize: serialize_google_cloud_bigquery_connection_v1beta1_UpdateConnectionRequest,
    requestDeserialize: deserialize_google_cloud_bigquery_connection_v1beta1_UpdateConnectionRequest,
    responseSerialize: serialize_google_cloud_bigquery_connection_v1beta1_Connection,
    responseDeserialize: deserialize_google_cloud_bigquery_connection_v1beta1_Connection,
  },
  // Sets the credential for the specified connection.
  updateConnectionCredential: {
    path: '/google.cloud.bigquery.connection.v1beta1.ConnectionService/UpdateConnectionCredential',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_bigquery_connection_v1beta1_connection_pb.UpdateConnectionCredentialRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_cloud_bigquery_connection_v1beta1_UpdateConnectionCredentialRequest,
    requestDeserialize: deserialize_google_cloud_bigquery_connection_v1beta1_UpdateConnectionCredentialRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Deletes connection and associated credential.
  deleteConnection: {
    path: '/google.cloud.bigquery.connection.v1beta1.ConnectionService/DeleteConnection',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_bigquery_connection_v1beta1_connection_pb.DeleteConnectionRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_cloud_bigquery_connection_v1beta1_DeleteConnectionRequest,
    requestDeserialize: deserialize_google_cloud_bigquery_connection_v1beta1_DeleteConnectionRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Gets the access control policy for a resource.
  // Returns an empty policy if the resource exists and does not have a policy
  // set.
  getIamPolicy: {
    path: '/google.cloud.bigquery.connection.v1beta1.ConnectionService/GetIamPolicy',
    requestStream: false,
    responseStream: false,
    requestType: google_iam_v1_iam_policy_pb.GetIamPolicyRequest,
    responseType: google_iam_v1_policy_pb.Policy,
    requestSerialize: serialize_google_iam_v1_GetIamPolicyRequest,
    requestDeserialize: deserialize_google_iam_v1_GetIamPolicyRequest,
    responseSerialize: serialize_google_iam_v1_Policy,
    responseDeserialize: deserialize_google_iam_v1_Policy,
  },
  // Sets the access control policy on the specified resource. Replaces any
  // existing policy.
  //
  // Can return Public Errors: NOT_FOUND, INVALID_ARGUMENT and PERMISSION_DENIED
  setIamPolicy: {
    path: '/google.cloud.bigquery.connection.v1beta1.ConnectionService/SetIamPolicy',
    requestStream: false,
    responseStream: false,
    requestType: google_iam_v1_iam_policy_pb.SetIamPolicyRequest,
    responseType: google_iam_v1_policy_pb.Policy,
    requestSerialize: serialize_google_iam_v1_SetIamPolicyRequest,
    requestDeserialize: deserialize_google_iam_v1_SetIamPolicyRequest,
    responseSerialize: serialize_google_iam_v1_Policy,
    responseDeserialize: deserialize_google_iam_v1_Policy,
  },
  // Returns permissions that a caller has on the specified resource.
  // If the resource does not exist, this will return an empty set of
  // permissions, not a NOT_FOUND error.
  //
  // Note: This operation is designed to be used for building permission-aware
  // UIs and command-line tools, not for authorization checking. This operation
  // may "fail open" without warning.
  testIamPermissions: {
    path: '/google.cloud.bigquery.connection.v1beta1.ConnectionService/TestIamPermissions',
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

exports.ConnectionServiceClient = grpc.makeGenericClientConstructor(ConnectionServiceService);
