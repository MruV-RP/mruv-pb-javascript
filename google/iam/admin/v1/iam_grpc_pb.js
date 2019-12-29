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
var google_iam_admin_v1_iam_pb = require('../../../../google/iam/admin/v1/iam_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_iam_v1_iam_policy_pb = require('../../../../google/iam/v1/iam_policy_pb.js');
var google_iam_v1_policy_pb = require('../../../../google/iam/v1/policy_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_google_iam_admin_v1_CreateRoleRequest(arg) {
  if (!(arg instanceof google_iam_admin_v1_iam_pb.CreateRoleRequest)) {
    throw new Error('Expected argument of type google.iam.admin.v1.CreateRoleRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_iam_admin_v1_CreateRoleRequest(buffer_arg) {
  return google_iam_admin_v1_iam_pb.CreateRoleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_admin_v1_CreateServiceAccountKeyRequest(arg) {
  if (!(arg instanceof google_iam_admin_v1_iam_pb.CreateServiceAccountKeyRequest)) {
    throw new Error('Expected argument of type google.iam.admin.v1.CreateServiceAccountKeyRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_iam_admin_v1_CreateServiceAccountKeyRequest(buffer_arg) {
  return google_iam_admin_v1_iam_pb.CreateServiceAccountKeyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_admin_v1_CreateServiceAccountRequest(arg) {
  if (!(arg instanceof google_iam_admin_v1_iam_pb.CreateServiceAccountRequest)) {
    throw new Error('Expected argument of type google.iam.admin.v1.CreateServiceAccountRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_iam_admin_v1_CreateServiceAccountRequest(buffer_arg) {
  return google_iam_admin_v1_iam_pb.CreateServiceAccountRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_admin_v1_DeleteRoleRequest(arg) {
  if (!(arg instanceof google_iam_admin_v1_iam_pb.DeleteRoleRequest)) {
    throw new Error('Expected argument of type google.iam.admin.v1.DeleteRoleRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_iam_admin_v1_DeleteRoleRequest(buffer_arg) {
  return google_iam_admin_v1_iam_pb.DeleteRoleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_admin_v1_DeleteServiceAccountKeyRequest(arg) {
  if (!(arg instanceof google_iam_admin_v1_iam_pb.DeleteServiceAccountKeyRequest)) {
    throw new Error('Expected argument of type google.iam.admin.v1.DeleteServiceAccountKeyRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_iam_admin_v1_DeleteServiceAccountKeyRequest(buffer_arg) {
  return google_iam_admin_v1_iam_pb.DeleteServiceAccountKeyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_admin_v1_DeleteServiceAccountRequest(arg) {
  if (!(arg instanceof google_iam_admin_v1_iam_pb.DeleteServiceAccountRequest)) {
    throw new Error('Expected argument of type google.iam.admin.v1.DeleteServiceAccountRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_iam_admin_v1_DeleteServiceAccountRequest(buffer_arg) {
  return google_iam_admin_v1_iam_pb.DeleteServiceAccountRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_admin_v1_GetRoleRequest(arg) {
  if (!(arg instanceof google_iam_admin_v1_iam_pb.GetRoleRequest)) {
    throw new Error('Expected argument of type google.iam.admin.v1.GetRoleRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_iam_admin_v1_GetRoleRequest(buffer_arg) {
  return google_iam_admin_v1_iam_pb.GetRoleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_admin_v1_GetServiceAccountKeyRequest(arg) {
  if (!(arg instanceof google_iam_admin_v1_iam_pb.GetServiceAccountKeyRequest)) {
    throw new Error('Expected argument of type google.iam.admin.v1.GetServiceAccountKeyRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_iam_admin_v1_GetServiceAccountKeyRequest(buffer_arg) {
  return google_iam_admin_v1_iam_pb.GetServiceAccountKeyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_admin_v1_GetServiceAccountRequest(arg) {
  if (!(arg instanceof google_iam_admin_v1_iam_pb.GetServiceAccountRequest)) {
    throw new Error('Expected argument of type google.iam.admin.v1.GetServiceAccountRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_iam_admin_v1_GetServiceAccountRequest(buffer_arg) {
  return google_iam_admin_v1_iam_pb.GetServiceAccountRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_admin_v1_ListRolesRequest(arg) {
  if (!(arg instanceof google_iam_admin_v1_iam_pb.ListRolesRequest)) {
    throw new Error('Expected argument of type google.iam.admin.v1.ListRolesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_iam_admin_v1_ListRolesRequest(buffer_arg) {
  return google_iam_admin_v1_iam_pb.ListRolesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_admin_v1_ListRolesResponse(arg) {
  if (!(arg instanceof google_iam_admin_v1_iam_pb.ListRolesResponse)) {
    throw new Error('Expected argument of type google.iam.admin.v1.ListRolesResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_iam_admin_v1_ListRolesResponse(buffer_arg) {
  return google_iam_admin_v1_iam_pb.ListRolesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_admin_v1_ListServiceAccountKeysRequest(arg) {
  if (!(arg instanceof google_iam_admin_v1_iam_pb.ListServiceAccountKeysRequest)) {
    throw new Error('Expected argument of type google.iam.admin.v1.ListServiceAccountKeysRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_iam_admin_v1_ListServiceAccountKeysRequest(buffer_arg) {
  return google_iam_admin_v1_iam_pb.ListServiceAccountKeysRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_admin_v1_ListServiceAccountKeysResponse(arg) {
  if (!(arg instanceof google_iam_admin_v1_iam_pb.ListServiceAccountKeysResponse)) {
    throw new Error('Expected argument of type google.iam.admin.v1.ListServiceAccountKeysResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_iam_admin_v1_ListServiceAccountKeysResponse(buffer_arg) {
  return google_iam_admin_v1_iam_pb.ListServiceAccountKeysResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_admin_v1_ListServiceAccountsRequest(arg) {
  if (!(arg instanceof google_iam_admin_v1_iam_pb.ListServiceAccountsRequest)) {
    throw new Error('Expected argument of type google.iam.admin.v1.ListServiceAccountsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_iam_admin_v1_ListServiceAccountsRequest(buffer_arg) {
  return google_iam_admin_v1_iam_pb.ListServiceAccountsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_admin_v1_ListServiceAccountsResponse(arg) {
  if (!(arg instanceof google_iam_admin_v1_iam_pb.ListServiceAccountsResponse)) {
    throw new Error('Expected argument of type google.iam.admin.v1.ListServiceAccountsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_iam_admin_v1_ListServiceAccountsResponse(buffer_arg) {
  return google_iam_admin_v1_iam_pb.ListServiceAccountsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_admin_v1_QueryGrantableRolesRequest(arg) {
  if (!(arg instanceof google_iam_admin_v1_iam_pb.QueryGrantableRolesRequest)) {
    throw new Error('Expected argument of type google.iam.admin.v1.QueryGrantableRolesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_iam_admin_v1_QueryGrantableRolesRequest(buffer_arg) {
  return google_iam_admin_v1_iam_pb.QueryGrantableRolesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_admin_v1_QueryGrantableRolesResponse(arg) {
  if (!(arg instanceof google_iam_admin_v1_iam_pb.QueryGrantableRolesResponse)) {
    throw new Error('Expected argument of type google.iam.admin.v1.QueryGrantableRolesResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_iam_admin_v1_QueryGrantableRolesResponse(buffer_arg) {
  return google_iam_admin_v1_iam_pb.QueryGrantableRolesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_admin_v1_QueryTestablePermissionsRequest(arg) {
  if (!(arg instanceof google_iam_admin_v1_iam_pb.QueryTestablePermissionsRequest)) {
    throw new Error('Expected argument of type google.iam.admin.v1.QueryTestablePermissionsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_iam_admin_v1_QueryTestablePermissionsRequest(buffer_arg) {
  return google_iam_admin_v1_iam_pb.QueryTestablePermissionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_admin_v1_QueryTestablePermissionsResponse(arg) {
  if (!(arg instanceof google_iam_admin_v1_iam_pb.QueryTestablePermissionsResponse)) {
    throw new Error('Expected argument of type google.iam.admin.v1.QueryTestablePermissionsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_iam_admin_v1_QueryTestablePermissionsResponse(buffer_arg) {
  return google_iam_admin_v1_iam_pb.QueryTestablePermissionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_admin_v1_Role(arg) {
  if (!(arg instanceof google_iam_admin_v1_iam_pb.Role)) {
    throw new Error('Expected argument of type google.iam.admin.v1.Role');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_iam_admin_v1_Role(buffer_arg) {
  return google_iam_admin_v1_iam_pb.Role.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_admin_v1_ServiceAccount(arg) {
  if (!(arg instanceof google_iam_admin_v1_iam_pb.ServiceAccount)) {
    throw new Error('Expected argument of type google.iam.admin.v1.ServiceAccount');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_iam_admin_v1_ServiceAccount(buffer_arg) {
  return google_iam_admin_v1_iam_pb.ServiceAccount.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_admin_v1_ServiceAccountKey(arg) {
  if (!(arg instanceof google_iam_admin_v1_iam_pb.ServiceAccountKey)) {
    throw new Error('Expected argument of type google.iam.admin.v1.ServiceAccountKey');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_iam_admin_v1_ServiceAccountKey(buffer_arg) {
  return google_iam_admin_v1_iam_pb.ServiceAccountKey.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_admin_v1_SignBlobRequest(arg) {
  if (!(arg instanceof google_iam_admin_v1_iam_pb.SignBlobRequest)) {
    throw new Error('Expected argument of type google.iam.admin.v1.SignBlobRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_iam_admin_v1_SignBlobRequest(buffer_arg) {
  return google_iam_admin_v1_iam_pb.SignBlobRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_admin_v1_SignBlobResponse(arg) {
  if (!(arg instanceof google_iam_admin_v1_iam_pb.SignBlobResponse)) {
    throw new Error('Expected argument of type google.iam.admin.v1.SignBlobResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_iam_admin_v1_SignBlobResponse(buffer_arg) {
  return google_iam_admin_v1_iam_pb.SignBlobResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_admin_v1_SignJwtRequest(arg) {
  if (!(arg instanceof google_iam_admin_v1_iam_pb.SignJwtRequest)) {
    throw new Error('Expected argument of type google.iam.admin.v1.SignJwtRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_iam_admin_v1_SignJwtRequest(buffer_arg) {
  return google_iam_admin_v1_iam_pb.SignJwtRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_admin_v1_SignJwtResponse(arg) {
  if (!(arg instanceof google_iam_admin_v1_iam_pb.SignJwtResponse)) {
    throw new Error('Expected argument of type google.iam.admin.v1.SignJwtResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_iam_admin_v1_SignJwtResponse(buffer_arg) {
  return google_iam_admin_v1_iam_pb.SignJwtResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_admin_v1_UndeleteRoleRequest(arg) {
  if (!(arg instanceof google_iam_admin_v1_iam_pb.UndeleteRoleRequest)) {
    throw new Error('Expected argument of type google.iam.admin.v1.UndeleteRoleRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_iam_admin_v1_UndeleteRoleRequest(buffer_arg) {
  return google_iam_admin_v1_iam_pb.UndeleteRoleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_admin_v1_UpdateRoleRequest(arg) {
  if (!(arg instanceof google_iam_admin_v1_iam_pb.UpdateRoleRequest)) {
    throw new Error('Expected argument of type google.iam.admin.v1.UpdateRoleRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_iam_admin_v1_UpdateRoleRequest(buffer_arg) {
  return google_iam_admin_v1_iam_pb.UpdateRoleRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


// Creates and manages service account objects.
//
// Service account is an account that belongs to your project instead
// of to an individual end user. It is used to authenticate calls
// to a Google API.
//
// To create a service account, specify the `project_id` and `account_id`
// for the account.  The `account_id` is unique within the project, and used
// to generate the service account email address and a stable
// `unique_id`.
//
// All other methods can identify accounts using the format
// `projects/{PROJECT_ID}/serviceAccounts/{SERVICE_ACCOUNT_EMAIL}`.
// Using `-` as a wildcard for the project will infer the project from
// the account. The `account` value can be the `email` address or the
// `unique_id` of the service account.
var IAMService = exports.IAMService = {
  // Lists [ServiceAccounts][google.iam.admin.v1.ServiceAccount] for a project.
  listServiceAccounts: {
    path: '/google.iam.admin.v1.IAM/ListServiceAccounts',
    requestStream: false,
    responseStream: false,
    requestType: google_iam_admin_v1_iam_pb.ListServiceAccountsRequest,
    responseType: google_iam_admin_v1_iam_pb.ListServiceAccountsResponse,
    requestSerialize: serialize_google_iam_admin_v1_ListServiceAccountsRequest,
    requestDeserialize: deserialize_google_iam_admin_v1_ListServiceAccountsRequest,
    responseSerialize: serialize_google_iam_admin_v1_ListServiceAccountsResponse,
    responseDeserialize: deserialize_google_iam_admin_v1_ListServiceAccountsResponse,
  },
  // Gets a [ServiceAccount][google.iam.admin.v1.ServiceAccount].
  getServiceAccount: {
    path: '/google.iam.admin.v1.IAM/GetServiceAccount',
    requestStream: false,
    responseStream: false,
    requestType: google_iam_admin_v1_iam_pb.GetServiceAccountRequest,
    responseType: google_iam_admin_v1_iam_pb.ServiceAccount,
    requestSerialize: serialize_google_iam_admin_v1_GetServiceAccountRequest,
    requestDeserialize: deserialize_google_iam_admin_v1_GetServiceAccountRequest,
    responseSerialize: serialize_google_iam_admin_v1_ServiceAccount,
    responseDeserialize: deserialize_google_iam_admin_v1_ServiceAccount,
  },
  // Creates a [ServiceAccount][google.iam.admin.v1.ServiceAccount]
  // and returns it.
  createServiceAccount: {
    path: '/google.iam.admin.v1.IAM/CreateServiceAccount',
    requestStream: false,
    responseStream: false,
    requestType: google_iam_admin_v1_iam_pb.CreateServiceAccountRequest,
    responseType: google_iam_admin_v1_iam_pb.ServiceAccount,
    requestSerialize: serialize_google_iam_admin_v1_CreateServiceAccountRequest,
    requestDeserialize: deserialize_google_iam_admin_v1_CreateServiceAccountRequest,
    responseSerialize: serialize_google_iam_admin_v1_ServiceAccount,
    responseDeserialize: deserialize_google_iam_admin_v1_ServiceAccount,
  },
  // Updates a [ServiceAccount][google.iam.admin.v1.ServiceAccount].
  //
  // Currently, only the following fields are updatable:
  // `display_name` .
  // The `etag` is mandatory.
  updateServiceAccount: {
    path: '/google.iam.admin.v1.IAM/UpdateServiceAccount',
    requestStream: false,
    responseStream: false,
    requestType: google_iam_admin_v1_iam_pb.ServiceAccount,
    responseType: google_iam_admin_v1_iam_pb.ServiceAccount,
    requestSerialize: serialize_google_iam_admin_v1_ServiceAccount,
    requestDeserialize: deserialize_google_iam_admin_v1_ServiceAccount,
    responseSerialize: serialize_google_iam_admin_v1_ServiceAccount,
    responseDeserialize: deserialize_google_iam_admin_v1_ServiceAccount,
  },
  // Deletes a [ServiceAccount][google.iam.admin.v1.ServiceAccount].
  deleteServiceAccount: {
    path: '/google.iam.admin.v1.IAM/DeleteServiceAccount',
    requestStream: false,
    responseStream: false,
    requestType: google_iam_admin_v1_iam_pb.DeleteServiceAccountRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_iam_admin_v1_DeleteServiceAccountRequest,
    requestDeserialize: deserialize_google_iam_admin_v1_DeleteServiceAccountRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Lists [ServiceAccountKeys][google.iam.admin.v1.ServiceAccountKey].
  listServiceAccountKeys: {
    path: '/google.iam.admin.v1.IAM/ListServiceAccountKeys',
    requestStream: false,
    responseStream: false,
    requestType: google_iam_admin_v1_iam_pb.ListServiceAccountKeysRequest,
    responseType: google_iam_admin_v1_iam_pb.ListServiceAccountKeysResponse,
    requestSerialize: serialize_google_iam_admin_v1_ListServiceAccountKeysRequest,
    requestDeserialize: deserialize_google_iam_admin_v1_ListServiceAccountKeysRequest,
    responseSerialize: serialize_google_iam_admin_v1_ListServiceAccountKeysResponse,
    responseDeserialize: deserialize_google_iam_admin_v1_ListServiceAccountKeysResponse,
  },
  // Gets the [ServiceAccountKey][google.iam.admin.v1.ServiceAccountKey]
  // by key id.
  getServiceAccountKey: {
    path: '/google.iam.admin.v1.IAM/GetServiceAccountKey',
    requestStream: false,
    responseStream: false,
    requestType: google_iam_admin_v1_iam_pb.GetServiceAccountKeyRequest,
    responseType: google_iam_admin_v1_iam_pb.ServiceAccountKey,
    requestSerialize: serialize_google_iam_admin_v1_GetServiceAccountKeyRequest,
    requestDeserialize: deserialize_google_iam_admin_v1_GetServiceAccountKeyRequest,
    responseSerialize: serialize_google_iam_admin_v1_ServiceAccountKey,
    responseDeserialize: deserialize_google_iam_admin_v1_ServiceAccountKey,
  },
  // Creates a [ServiceAccountKey][google.iam.admin.v1.ServiceAccountKey]
  // and returns it.
  createServiceAccountKey: {
    path: '/google.iam.admin.v1.IAM/CreateServiceAccountKey',
    requestStream: false,
    responseStream: false,
    requestType: google_iam_admin_v1_iam_pb.CreateServiceAccountKeyRequest,
    responseType: google_iam_admin_v1_iam_pb.ServiceAccountKey,
    requestSerialize: serialize_google_iam_admin_v1_CreateServiceAccountKeyRequest,
    requestDeserialize: deserialize_google_iam_admin_v1_CreateServiceAccountKeyRequest,
    responseSerialize: serialize_google_iam_admin_v1_ServiceAccountKey,
    responseDeserialize: deserialize_google_iam_admin_v1_ServiceAccountKey,
  },
  // Deletes a [ServiceAccountKey][google.iam.admin.v1.ServiceAccountKey].
  deleteServiceAccountKey: {
    path: '/google.iam.admin.v1.IAM/DeleteServiceAccountKey',
    requestStream: false,
    responseStream: false,
    requestType: google_iam_admin_v1_iam_pb.DeleteServiceAccountKeyRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_iam_admin_v1_DeleteServiceAccountKeyRequest,
    requestDeserialize: deserialize_google_iam_admin_v1_DeleteServiceAccountKeyRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Signs a blob using a service account's system-managed private key.
  signBlob: {
    path: '/google.iam.admin.v1.IAM/SignBlob',
    requestStream: false,
    responseStream: false,
    requestType: google_iam_admin_v1_iam_pb.SignBlobRequest,
    responseType: google_iam_admin_v1_iam_pb.SignBlobResponse,
    requestSerialize: serialize_google_iam_admin_v1_SignBlobRequest,
    requestDeserialize: deserialize_google_iam_admin_v1_SignBlobRequest,
    responseSerialize: serialize_google_iam_admin_v1_SignBlobResponse,
    responseDeserialize: deserialize_google_iam_admin_v1_SignBlobResponse,
  },
  // Signs a JWT using a service account's system-managed private key.
  //
  // If no expiry time (`exp`) is provided in the `SignJwtRequest`, IAM sets an
  // an expiry time of one hour by default. If you request an expiry time of
  // more than one hour, the request will fail.
  signJwt: {
    path: '/google.iam.admin.v1.IAM/SignJwt',
    requestStream: false,
    responseStream: false,
    requestType: google_iam_admin_v1_iam_pb.SignJwtRequest,
    responseType: google_iam_admin_v1_iam_pb.SignJwtResponse,
    requestSerialize: serialize_google_iam_admin_v1_SignJwtRequest,
    requestDeserialize: deserialize_google_iam_admin_v1_SignJwtRequest,
    responseSerialize: serialize_google_iam_admin_v1_SignJwtResponse,
    responseDeserialize: deserialize_google_iam_admin_v1_SignJwtResponse,
  },
  // Returns the IAM access control policy for a
  // [ServiceAccount][google.iam.admin.v1.ServiceAccount].
  getIamPolicy: {
    path: '/google.iam.admin.v1.IAM/GetIamPolicy',
    requestStream: false,
    responseStream: false,
    requestType: google_iam_v1_iam_policy_pb.GetIamPolicyRequest,
    responseType: google_iam_v1_policy_pb.Policy,
    requestSerialize: serialize_google_iam_v1_GetIamPolicyRequest,
    requestDeserialize: deserialize_google_iam_v1_GetIamPolicyRequest,
    responseSerialize: serialize_google_iam_v1_Policy,
    responseDeserialize: deserialize_google_iam_v1_Policy,
  },
  // Sets the IAM access control policy for a
  // [ServiceAccount][google.iam.admin.v1.ServiceAccount].
  setIamPolicy: {
    path: '/google.iam.admin.v1.IAM/SetIamPolicy',
    requestStream: false,
    responseStream: false,
    requestType: google_iam_v1_iam_policy_pb.SetIamPolicyRequest,
    responseType: google_iam_v1_policy_pb.Policy,
    requestSerialize: serialize_google_iam_v1_SetIamPolicyRequest,
    requestDeserialize: deserialize_google_iam_v1_SetIamPolicyRequest,
    responseSerialize: serialize_google_iam_v1_Policy,
    responseDeserialize: deserialize_google_iam_v1_Policy,
  },
  // Tests the specified permissions against the IAM access control policy
  // for a [ServiceAccount][google.iam.admin.v1.ServiceAccount].
  testIamPermissions: {
    path: '/google.iam.admin.v1.IAM/TestIamPermissions',
    requestStream: false,
    responseStream: false,
    requestType: google_iam_v1_iam_policy_pb.TestIamPermissionsRequest,
    responseType: google_iam_v1_iam_policy_pb.TestIamPermissionsResponse,
    requestSerialize: serialize_google_iam_v1_TestIamPermissionsRequest,
    requestDeserialize: deserialize_google_iam_v1_TestIamPermissionsRequest,
    responseSerialize: serialize_google_iam_v1_TestIamPermissionsResponse,
    responseDeserialize: deserialize_google_iam_v1_TestIamPermissionsResponse,
  },
  // Queries roles that can be granted on a particular resource.
  // A role is grantable if it can be used as the role in a binding for a policy
  // for that resource.
  queryGrantableRoles: {
    path: '/google.iam.admin.v1.IAM/QueryGrantableRoles',
    requestStream: false,
    responseStream: false,
    requestType: google_iam_admin_v1_iam_pb.QueryGrantableRolesRequest,
    responseType: google_iam_admin_v1_iam_pb.QueryGrantableRolesResponse,
    requestSerialize: serialize_google_iam_admin_v1_QueryGrantableRolesRequest,
    requestDeserialize: deserialize_google_iam_admin_v1_QueryGrantableRolesRequest,
    responseSerialize: serialize_google_iam_admin_v1_QueryGrantableRolesResponse,
    responseDeserialize: deserialize_google_iam_admin_v1_QueryGrantableRolesResponse,
  },
  // Lists the Roles defined on a resource.
  listRoles: {
    path: '/google.iam.admin.v1.IAM/ListRoles',
    requestStream: false,
    responseStream: false,
    requestType: google_iam_admin_v1_iam_pb.ListRolesRequest,
    responseType: google_iam_admin_v1_iam_pb.ListRolesResponse,
    requestSerialize: serialize_google_iam_admin_v1_ListRolesRequest,
    requestDeserialize: deserialize_google_iam_admin_v1_ListRolesRequest,
    responseSerialize: serialize_google_iam_admin_v1_ListRolesResponse,
    responseDeserialize: deserialize_google_iam_admin_v1_ListRolesResponse,
  },
  // Gets a Role definition.
  getRole: {
    path: '/google.iam.admin.v1.IAM/GetRole',
    requestStream: false,
    responseStream: false,
    requestType: google_iam_admin_v1_iam_pb.GetRoleRequest,
    responseType: google_iam_admin_v1_iam_pb.Role,
    requestSerialize: serialize_google_iam_admin_v1_GetRoleRequest,
    requestDeserialize: deserialize_google_iam_admin_v1_GetRoleRequest,
    responseSerialize: serialize_google_iam_admin_v1_Role,
    responseDeserialize: deserialize_google_iam_admin_v1_Role,
  },
  // Creates a new Role.
  createRole: {
    path: '/google.iam.admin.v1.IAM/CreateRole',
    requestStream: false,
    responseStream: false,
    requestType: google_iam_admin_v1_iam_pb.CreateRoleRequest,
    responseType: google_iam_admin_v1_iam_pb.Role,
    requestSerialize: serialize_google_iam_admin_v1_CreateRoleRequest,
    requestDeserialize: deserialize_google_iam_admin_v1_CreateRoleRequest,
    responseSerialize: serialize_google_iam_admin_v1_Role,
    responseDeserialize: deserialize_google_iam_admin_v1_Role,
  },
  // Updates a Role definition.
  updateRole: {
    path: '/google.iam.admin.v1.IAM/UpdateRole',
    requestStream: false,
    responseStream: false,
    requestType: google_iam_admin_v1_iam_pb.UpdateRoleRequest,
    responseType: google_iam_admin_v1_iam_pb.Role,
    requestSerialize: serialize_google_iam_admin_v1_UpdateRoleRequest,
    requestDeserialize: deserialize_google_iam_admin_v1_UpdateRoleRequest,
    responseSerialize: serialize_google_iam_admin_v1_Role,
    responseDeserialize: deserialize_google_iam_admin_v1_Role,
  },
  // Soft deletes a role. The role is suspended and cannot be used to create new
  // IAM Policy Bindings.
  // The Role will not be included in `ListRoles()` unless `show_deleted` is set
  // in the `ListRolesRequest`. The Role contains the deleted boolean set.
  // Existing Bindings remains, but are inactive. The Role can be undeleted
  // within 7 days. After 7 days the Role is deleted and all Bindings associated
  // with the role are removed.
  deleteRole: {
    path: '/google.iam.admin.v1.IAM/DeleteRole',
    requestStream: false,
    responseStream: false,
    requestType: google_iam_admin_v1_iam_pb.DeleteRoleRequest,
    responseType: google_iam_admin_v1_iam_pb.Role,
    requestSerialize: serialize_google_iam_admin_v1_DeleteRoleRequest,
    requestDeserialize: deserialize_google_iam_admin_v1_DeleteRoleRequest,
    responseSerialize: serialize_google_iam_admin_v1_Role,
    responseDeserialize: deserialize_google_iam_admin_v1_Role,
  },
  // Undelete a Role, bringing it back in its previous state.
  undeleteRole: {
    path: '/google.iam.admin.v1.IAM/UndeleteRole',
    requestStream: false,
    responseStream: false,
    requestType: google_iam_admin_v1_iam_pb.UndeleteRoleRequest,
    responseType: google_iam_admin_v1_iam_pb.Role,
    requestSerialize: serialize_google_iam_admin_v1_UndeleteRoleRequest,
    requestDeserialize: deserialize_google_iam_admin_v1_UndeleteRoleRequest,
    responseSerialize: serialize_google_iam_admin_v1_Role,
    responseDeserialize: deserialize_google_iam_admin_v1_Role,
  },
  // Lists the permissions testable on a resource.
  // A permission is testable if it can be tested for an identity on a resource.
  queryTestablePermissions: {
    path: '/google.iam.admin.v1.IAM/QueryTestablePermissions',
    requestStream: false,
    responseStream: false,
    requestType: google_iam_admin_v1_iam_pb.QueryTestablePermissionsRequest,
    responseType: google_iam_admin_v1_iam_pb.QueryTestablePermissionsResponse,
    requestSerialize: serialize_google_iam_admin_v1_QueryTestablePermissionsRequest,
    requestDeserialize: deserialize_google_iam_admin_v1_QueryTestablePermissionsRequest,
    responseSerialize: serialize_google_iam_admin_v1_QueryTestablePermissionsResponse,
    responseDeserialize: deserialize_google_iam_admin_v1_QueryTestablePermissionsResponse,
  },
};

exports.IAMClient = grpc.makeGenericClientConstructor(IAMService);
