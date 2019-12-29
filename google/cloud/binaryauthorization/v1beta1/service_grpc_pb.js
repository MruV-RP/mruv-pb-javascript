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
var google_cloud_binaryauthorization_v1beta1_service_pb = require('../../../../google/cloud/binaryauthorization/v1beta1/service_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_api_client_pb = require('../../../../google/api/client_pb.js');
var google_api_field_behavior_pb = require('../../../../google/api/field_behavior_pb.js');
var google_api_resource_pb = require('../../../../google/api/resource_pb.js');
var google_cloud_binaryauthorization_v1beta1_resources_pb = require('../../../../google/cloud/binaryauthorization/v1beta1/resources_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_google_cloud_binaryauthorization_v1beta1_Attestor(arg) {
  if (!(arg instanceof google_cloud_binaryauthorization_v1beta1_resources_pb.Attestor)) {
    throw new Error('Expected argument of type google.cloud.binaryauthorization.v1beta1.Attestor');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_binaryauthorization_v1beta1_Attestor(buffer_arg) {
  return google_cloud_binaryauthorization_v1beta1_resources_pb.Attestor.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_binaryauthorization_v1beta1_CreateAttestorRequest(arg) {
  if (!(arg instanceof google_cloud_binaryauthorization_v1beta1_service_pb.CreateAttestorRequest)) {
    throw new Error('Expected argument of type google.cloud.binaryauthorization.v1beta1.CreateAttestorRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_binaryauthorization_v1beta1_CreateAttestorRequest(buffer_arg) {
  return google_cloud_binaryauthorization_v1beta1_service_pb.CreateAttestorRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_binaryauthorization_v1beta1_DeleteAttestorRequest(arg) {
  if (!(arg instanceof google_cloud_binaryauthorization_v1beta1_service_pb.DeleteAttestorRequest)) {
    throw new Error('Expected argument of type google.cloud.binaryauthorization.v1beta1.DeleteAttestorRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_binaryauthorization_v1beta1_DeleteAttestorRequest(buffer_arg) {
  return google_cloud_binaryauthorization_v1beta1_service_pb.DeleteAttestorRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_binaryauthorization_v1beta1_GetAttestorRequest(arg) {
  if (!(arg instanceof google_cloud_binaryauthorization_v1beta1_service_pb.GetAttestorRequest)) {
    throw new Error('Expected argument of type google.cloud.binaryauthorization.v1beta1.GetAttestorRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_binaryauthorization_v1beta1_GetAttestorRequest(buffer_arg) {
  return google_cloud_binaryauthorization_v1beta1_service_pb.GetAttestorRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_binaryauthorization_v1beta1_GetPolicyRequest(arg) {
  if (!(arg instanceof google_cloud_binaryauthorization_v1beta1_service_pb.GetPolicyRequest)) {
    throw new Error('Expected argument of type google.cloud.binaryauthorization.v1beta1.GetPolicyRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_binaryauthorization_v1beta1_GetPolicyRequest(buffer_arg) {
  return google_cloud_binaryauthorization_v1beta1_service_pb.GetPolicyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_binaryauthorization_v1beta1_ListAttestorsRequest(arg) {
  if (!(arg instanceof google_cloud_binaryauthorization_v1beta1_service_pb.ListAttestorsRequest)) {
    throw new Error('Expected argument of type google.cloud.binaryauthorization.v1beta1.ListAttestorsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_binaryauthorization_v1beta1_ListAttestorsRequest(buffer_arg) {
  return google_cloud_binaryauthorization_v1beta1_service_pb.ListAttestorsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_binaryauthorization_v1beta1_ListAttestorsResponse(arg) {
  if (!(arg instanceof google_cloud_binaryauthorization_v1beta1_service_pb.ListAttestorsResponse)) {
    throw new Error('Expected argument of type google.cloud.binaryauthorization.v1beta1.ListAttestorsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_binaryauthorization_v1beta1_ListAttestorsResponse(buffer_arg) {
  return google_cloud_binaryauthorization_v1beta1_service_pb.ListAttestorsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_binaryauthorization_v1beta1_Policy(arg) {
  if (!(arg instanceof google_cloud_binaryauthorization_v1beta1_resources_pb.Policy)) {
    throw new Error('Expected argument of type google.cloud.binaryauthorization.v1beta1.Policy');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_binaryauthorization_v1beta1_Policy(buffer_arg) {
  return google_cloud_binaryauthorization_v1beta1_resources_pb.Policy.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_binaryauthorization_v1beta1_UpdateAttestorRequest(arg) {
  if (!(arg instanceof google_cloud_binaryauthorization_v1beta1_service_pb.UpdateAttestorRequest)) {
    throw new Error('Expected argument of type google.cloud.binaryauthorization.v1beta1.UpdateAttestorRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_binaryauthorization_v1beta1_UpdateAttestorRequest(buffer_arg) {
  return google_cloud_binaryauthorization_v1beta1_service_pb.UpdateAttestorRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_binaryauthorization_v1beta1_UpdatePolicyRequest(arg) {
  if (!(arg instanceof google_cloud_binaryauthorization_v1beta1_service_pb.UpdatePolicyRequest)) {
    throw new Error('Expected argument of type google.cloud.binaryauthorization.v1beta1.UpdatePolicyRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_binaryauthorization_v1beta1_UpdatePolicyRequest(buffer_arg) {
  return google_cloud_binaryauthorization_v1beta1_service_pb.UpdatePolicyRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


// Customer-facing API for Cloud Binary Authorization.
//
// Google Cloud Management Service for Binary Authorization admission policies
// and attestation authorities.
//
// This API implements a REST model with the following objects:
//
// * [Policy][google.cloud.binaryauthorization.v1beta1.Policy]
// * [Attestor][google.cloud.binaryauthorization.v1beta1.Attestor]
var BinauthzManagementServiceV1Beta1Service = exports.BinauthzManagementServiceV1Beta1Service = {
  // A [policy][google.cloud.binaryauthorization.v1beta1.Policy] specifies the [attestors][google.cloud.binaryauthorization.v1beta1.Attestor] that must attest to
  // a container image, before the project is allowed to deploy that
  // image. There is at most one policy per project. All image admission
  // requests are permitted if a project has no policy.
  //
  // Gets the [policy][google.cloud.binaryauthorization.v1beta1.Policy] for this project. Returns a default
  // [policy][google.cloud.binaryauthorization.v1beta1.Policy] if the project does not have one.
  getPolicy: {
    path: '/google.cloud.binaryauthorization.v1beta1.BinauthzManagementServiceV1Beta1/GetPolicy',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_binaryauthorization_v1beta1_service_pb.GetPolicyRequest,
    responseType: google_cloud_binaryauthorization_v1beta1_resources_pb.Policy,
    requestSerialize: serialize_google_cloud_binaryauthorization_v1beta1_GetPolicyRequest,
    requestDeserialize: deserialize_google_cloud_binaryauthorization_v1beta1_GetPolicyRequest,
    responseSerialize: serialize_google_cloud_binaryauthorization_v1beta1_Policy,
    responseDeserialize: deserialize_google_cloud_binaryauthorization_v1beta1_Policy,
  },
  // Creates or updates a project's [policy][google.cloud.binaryauthorization.v1beta1.Policy], and returns a copy of the
  // new [policy][google.cloud.binaryauthorization.v1beta1.Policy]. A policy is always updated as a whole, to avoid race
  // conditions with concurrent policy enforcement (or management!)
  // requests. Returns NOT_FOUND if the project does not exist, INVALID_ARGUMENT
  // if the request is malformed.
  updatePolicy: {
    path: '/google.cloud.binaryauthorization.v1beta1.BinauthzManagementServiceV1Beta1/UpdatePolicy',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_binaryauthorization_v1beta1_service_pb.UpdatePolicyRequest,
    responseType: google_cloud_binaryauthorization_v1beta1_resources_pb.Policy,
    requestSerialize: serialize_google_cloud_binaryauthorization_v1beta1_UpdatePolicyRequest,
    requestDeserialize: deserialize_google_cloud_binaryauthorization_v1beta1_UpdatePolicyRequest,
    responseSerialize: serialize_google_cloud_binaryauthorization_v1beta1_Policy,
    responseDeserialize: deserialize_google_cloud_binaryauthorization_v1beta1_Policy,
  },
  // Creates an [attestor][google.cloud.binaryauthorization.v1beta1.Attestor], and returns a copy of the new
  // [attestor][google.cloud.binaryauthorization.v1beta1.Attestor]. Returns NOT_FOUND if the project does not exist,
  // INVALID_ARGUMENT if the request is malformed, ALREADY_EXISTS if the
  // [attestor][google.cloud.binaryauthorization.v1beta1.Attestor] already exists.
  createAttestor: {
    path: '/google.cloud.binaryauthorization.v1beta1.BinauthzManagementServiceV1Beta1/CreateAttestor',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_binaryauthorization_v1beta1_service_pb.CreateAttestorRequest,
    responseType: google_cloud_binaryauthorization_v1beta1_resources_pb.Attestor,
    requestSerialize: serialize_google_cloud_binaryauthorization_v1beta1_CreateAttestorRequest,
    requestDeserialize: deserialize_google_cloud_binaryauthorization_v1beta1_CreateAttestorRequest,
    responseSerialize: serialize_google_cloud_binaryauthorization_v1beta1_Attestor,
    responseDeserialize: deserialize_google_cloud_binaryauthorization_v1beta1_Attestor,
  },
  // Gets an [attestor][google.cloud.binaryauthorization.v1beta1.Attestor].
  // Returns NOT_FOUND if the [attestor][google.cloud.binaryauthorization.v1beta1.Attestor] does not exist.
  getAttestor: {
    path: '/google.cloud.binaryauthorization.v1beta1.BinauthzManagementServiceV1Beta1/GetAttestor',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_binaryauthorization_v1beta1_service_pb.GetAttestorRequest,
    responseType: google_cloud_binaryauthorization_v1beta1_resources_pb.Attestor,
    requestSerialize: serialize_google_cloud_binaryauthorization_v1beta1_GetAttestorRequest,
    requestDeserialize: deserialize_google_cloud_binaryauthorization_v1beta1_GetAttestorRequest,
    responseSerialize: serialize_google_cloud_binaryauthorization_v1beta1_Attestor,
    responseDeserialize: deserialize_google_cloud_binaryauthorization_v1beta1_Attestor,
  },
  // Updates an [attestor][google.cloud.binaryauthorization.v1beta1.Attestor].
  // Returns NOT_FOUND if the [attestor][google.cloud.binaryauthorization.v1beta1.Attestor] does not exist.
  updateAttestor: {
    path: '/google.cloud.binaryauthorization.v1beta1.BinauthzManagementServiceV1Beta1/UpdateAttestor',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_binaryauthorization_v1beta1_service_pb.UpdateAttestorRequest,
    responseType: google_cloud_binaryauthorization_v1beta1_resources_pb.Attestor,
    requestSerialize: serialize_google_cloud_binaryauthorization_v1beta1_UpdateAttestorRequest,
    requestDeserialize: deserialize_google_cloud_binaryauthorization_v1beta1_UpdateAttestorRequest,
    responseSerialize: serialize_google_cloud_binaryauthorization_v1beta1_Attestor,
    responseDeserialize: deserialize_google_cloud_binaryauthorization_v1beta1_Attestor,
  },
  // Lists [attestors][google.cloud.binaryauthorization.v1beta1.Attestor].
  // Returns INVALID_ARGUMENT if the project does not exist.
  listAttestors: {
    path: '/google.cloud.binaryauthorization.v1beta1.BinauthzManagementServiceV1Beta1/ListAttestors',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_binaryauthorization_v1beta1_service_pb.ListAttestorsRequest,
    responseType: google_cloud_binaryauthorization_v1beta1_service_pb.ListAttestorsResponse,
    requestSerialize: serialize_google_cloud_binaryauthorization_v1beta1_ListAttestorsRequest,
    requestDeserialize: deserialize_google_cloud_binaryauthorization_v1beta1_ListAttestorsRequest,
    responseSerialize: serialize_google_cloud_binaryauthorization_v1beta1_ListAttestorsResponse,
    responseDeserialize: deserialize_google_cloud_binaryauthorization_v1beta1_ListAttestorsResponse,
  },
  // Deletes an [attestor][google.cloud.binaryauthorization.v1beta1.Attestor]. Returns NOT_FOUND if the
  // [attestor][google.cloud.binaryauthorization.v1beta1.Attestor] does not exist.
  deleteAttestor: {
    path: '/google.cloud.binaryauthorization.v1beta1.BinauthzManagementServiceV1Beta1/DeleteAttestor',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_binaryauthorization_v1beta1_service_pb.DeleteAttestorRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_cloud_binaryauthorization_v1beta1_DeleteAttestorRequest,
    requestDeserialize: deserialize_google_cloud_binaryauthorization_v1beta1_DeleteAttestorRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.BinauthzManagementServiceV1Beta1Client = grpc.makeGenericClientConstructor(BinauthzManagementServiceV1Beta1Service);
