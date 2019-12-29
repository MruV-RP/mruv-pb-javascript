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
var google_cloud_oslogin_v1alpha_oslogin_pb = require('../../../../google/cloud/oslogin/v1alpha/oslogin_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_cloud_oslogin_common_common_pb = require('../../../../google/cloud/oslogin/common/common_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');

function serialize_google_cloud_oslogin_common_SshPublicKey(arg) {
  if (!(arg instanceof google_cloud_oslogin_common_common_pb.SshPublicKey)) {
    throw new Error('Expected argument of type google.cloud.oslogin.common.SshPublicKey');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_oslogin_common_SshPublicKey(buffer_arg) {
  return google_cloud_oslogin_common_common_pb.SshPublicKey.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_oslogin_v1alpha_DeletePosixAccountRequest(arg) {
  if (!(arg instanceof google_cloud_oslogin_v1alpha_oslogin_pb.DeletePosixAccountRequest)) {
    throw new Error('Expected argument of type google.cloud.oslogin.v1alpha.DeletePosixAccountRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_oslogin_v1alpha_DeletePosixAccountRequest(buffer_arg) {
  return google_cloud_oslogin_v1alpha_oslogin_pb.DeletePosixAccountRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_oslogin_v1alpha_DeleteSshPublicKeyRequest(arg) {
  if (!(arg instanceof google_cloud_oslogin_v1alpha_oslogin_pb.DeleteSshPublicKeyRequest)) {
    throw new Error('Expected argument of type google.cloud.oslogin.v1alpha.DeleteSshPublicKeyRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_oslogin_v1alpha_DeleteSshPublicKeyRequest(buffer_arg) {
  return google_cloud_oslogin_v1alpha_oslogin_pb.DeleteSshPublicKeyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_oslogin_v1alpha_GetLoginProfileRequest(arg) {
  if (!(arg instanceof google_cloud_oslogin_v1alpha_oslogin_pb.GetLoginProfileRequest)) {
    throw new Error('Expected argument of type google.cloud.oslogin.v1alpha.GetLoginProfileRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_oslogin_v1alpha_GetLoginProfileRequest(buffer_arg) {
  return google_cloud_oslogin_v1alpha_oslogin_pb.GetLoginProfileRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_oslogin_v1alpha_GetSshPublicKeyRequest(arg) {
  if (!(arg instanceof google_cloud_oslogin_v1alpha_oslogin_pb.GetSshPublicKeyRequest)) {
    throw new Error('Expected argument of type google.cloud.oslogin.v1alpha.GetSshPublicKeyRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_oslogin_v1alpha_GetSshPublicKeyRequest(buffer_arg) {
  return google_cloud_oslogin_v1alpha_oslogin_pb.GetSshPublicKeyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_oslogin_v1alpha_ImportSshPublicKeyRequest(arg) {
  if (!(arg instanceof google_cloud_oslogin_v1alpha_oslogin_pb.ImportSshPublicKeyRequest)) {
    throw new Error('Expected argument of type google.cloud.oslogin.v1alpha.ImportSshPublicKeyRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_oslogin_v1alpha_ImportSshPublicKeyRequest(buffer_arg) {
  return google_cloud_oslogin_v1alpha_oslogin_pb.ImportSshPublicKeyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_oslogin_v1alpha_ImportSshPublicKeyResponse(arg) {
  if (!(arg instanceof google_cloud_oslogin_v1alpha_oslogin_pb.ImportSshPublicKeyResponse)) {
    throw new Error('Expected argument of type google.cloud.oslogin.v1alpha.ImportSshPublicKeyResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_oslogin_v1alpha_ImportSshPublicKeyResponse(buffer_arg) {
  return google_cloud_oslogin_v1alpha_oslogin_pb.ImportSshPublicKeyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_oslogin_v1alpha_LoginProfile(arg) {
  if (!(arg instanceof google_cloud_oslogin_v1alpha_oslogin_pb.LoginProfile)) {
    throw new Error('Expected argument of type google.cloud.oslogin.v1alpha.LoginProfile');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_oslogin_v1alpha_LoginProfile(buffer_arg) {
  return google_cloud_oslogin_v1alpha_oslogin_pb.LoginProfile.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_oslogin_v1alpha_UpdateSshPublicKeyRequest(arg) {
  if (!(arg instanceof google_cloud_oslogin_v1alpha_oslogin_pb.UpdateSshPublicKeyRequest)) {
    throw new Error('Expected argument of type google.cloud.oslogin.v1alpha.UpdateSshPublicKeyRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_oslogin_v1alpha_UpdateSshPublicKeyRequest(buffer_arg) {
  return google_cloud_oslogin_v1alpha_oslogin_pb.UpdateSshPublicKeyRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


// Cloud OS Login API
//
// The Cloud OS Login API allows you to manage users and their associated SSH
// public keys for logging into virtual machines on Google Cloud Platform.
var OsLoginServiceService = exports.OsLoginServiceService = {
  // Deletes a POSIX account.
  deletePosixAccount: {
    path: '/google.cloud.oslogin.v1alpha.OsLoginService/DeletePosixAccount',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_oslogin_v1alpha_oslogin_pb.DeletePosixAccountRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_cloud_oslogin_v1alpha_DeletePosixAccountRequest,
    requestDeserialize: deserialize_google_cloud_oslogin_v1alpha_DeletePosixAccountRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Deletes an SSH public key.
  deleteSshPublicKey: {
    path: '/google.cloud.oslogin.v1alpha.OsLoginService/DeleteSshPublicKey',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_oslogin_v1alpha_oslogin_pb.DeleteSshPublicKeyRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_cloud_oslogin_v1alpha_DeleteSshPublicKeyRequest,
    requestDeserialize: deserialize_google_cloud_oslogin_v1alpha_DeleteSshPublicKeyRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Retrieves the profile information used for logging in to a virtual machine
  // on Google Compute Engine.
  getLoginProfile: {
    path: '/google.cloud.oslogin.v1alpha.OsLoginService/GetLoginProfile',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_oslogin_v1alpha_oslogin_pb.GetLoginProfileRequest,
    responseType: google_cloud_oslogin_v1alpha_oslogin_pb.LoginProfile,
    requestSerialize: serialize_google_cloud_oslogin_v1alpha_GetLoginProfileRequest,
    requestDeserialize: deserialize_google_cloud_oslogin_v1alpha_GetLoginProfileRequest,
    responseSerialize: serialize_google_cloud_oslogin_v1alpha_LoginProfile,
    responseDeserialize: deserialize_google_cloud_oslogin_v1alpha_LoginProfile,
  },
  // Retrieves an SSH public key.
  getSshPublicKey: {
    path: '/google.cloud.oslogin.v1alpha.OsLoginService/GetSshPublicKey',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_oslogin_v1alpha_oslogin_pb.GetSshPublicKeyRequest,
    responseType: google_cloud_oslogin_common_common_pb.SshPublicKey,
    requestSerialize: serialize_google_cloud_oslogin_v1alpha_GetSshPublicKeyRequest,
    requestDeserialize: deserialize_google_cloud_oslogin_v1alpha_GetSshPublicKeyRequest,
    responseSerialize: serialize_google_cloud_oslogin_common_SshPublicKey,
    responseDeserialize: deserialize_google_cloud_oslogin_common_SshPublicKey,
  },
  // Adds an SSH public key and returns the profile information. Default POSIX
  // account information is set when no username and UID exist as part of the
  // login profile.
  importSshPublicKey: {
    path: '/google.cloud.oslogin.v1alpha.OsLoginService/ImportSshPublicKey',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_oslogin_v1alpha_oslogin_pb.ImportSshPublicKeyRequest,
    responseType: google_cloud_oslogin_v1alpha_oslogin_pb.ImportSshPublicKeyResponse,
    requestSerialize: serialize_google_cloud_oslogin_v1alpha_ImportSshPublicKeyRequest,
    requestDeserialize: deserialize_google_cloud_oslogin_v1alpha_ImportSshPublicKeyRequest,
    responseSerialize: serialize_google_cloud_oslogin_v1alpha_ImportSshPublicKeyResponse,
    responseDeserialize: deserialize_google_cloud_oslogin_v1alpha_ImportSshPublicKeyResponse,
  },
  // Updates an SSH public key and returns the profile information. This method
  // supports patch semantics.
  updateSshPublicKey: {
    path: '/google.cloud.oslogin.v1alpha.OsLoginService/UpdateSshPublicKey',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_oslogin_v1alpha_oslogin_pb.UpdateSshPublicKeyRequest,
    responseType: google_cloud_oslogin_common_common_pb.SshPublicKey,
    requestSerialize: serialize_google_cloud_oslogin_v1alpha_UpdateSshPublicKeyRequest,
    requestDeserialize: deserialize_google_cloud_oslogin_v1alpha_UpdateSshPublicKeyRequest,
    responseSerialize: serialize_google_cloud_oslogin_common_SshPublicKey,
    responseDeserialize: deserialize_google_cloud_oslogin_common_SshPublicKey,
  },
};

exports.OsLoginServiceClient = grpc.makeGenericClientConstructor(OsLoginServiceService);
