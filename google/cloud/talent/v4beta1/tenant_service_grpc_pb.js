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
var google_cloud_talent_v4beta1_tenant_service_pb = require('../../../../google/cloud/talent/v4beta1/tenant_service_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_api_client_pb = require('../../../../google/api/client_pb.js');
var google_api_field_behavior_pb = require('../../../../google/api/field_behavior_pb.js');
var google_cloud_talent_v4beta1_common_pb = require('../../../../google/cloud/talent/v4beta1/common_pb.js');
var google_cloud_talent_v4beta1_tenant_pb = require('../../../../google/cloud/talent/v4beta1/tenant_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');

function serialize_google_cloud_talent_v4beta1_CreateTenantRequest(arg) {
  if (!(arg instanceof google_cloud_talent_v4beta1_tenant_service_pb.CreateTenantRequest)) {
    throw new Error('Expected argument of type google.cloud.talent.v4beta1.CreateTenantRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_talent_v4beta1_CreateTenantRequest(buffer_arg) {
  return google_cloud_talent_v4beta1_tenant_service_pb.CreateTenantRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_talent_v4beta1_DeleteTenantRequest(arg) {
  if (!(arg instanceof google_cloud_talent_v4beta1_tenant_service_pb.DeleteTenantRequest)) {
    throw new Error('Expected argument of type google.cloud.talent.v4beta1.DeleteTenantRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_talent_v4beta1_DeleteTenantRequest(buffer_arg) {
  return google_cloud_talent_v4beta1_tenant_service_pb.DeleteTenantRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_talent_v4beta1_GetTenantRequest(arg) {
  if (!(arg instanceof google_cloud_talent_v4beta1_tenant_service_pb.GetTenantRequest)) {
    throw new Error('Expected argument of type google.cloud.talent.v4beta1.GetTenantRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_talent_v4beta1_GetTenantRequest(buffer_arg) {
  return google_cloud_talent_v4beta1_tenant_service_pb.GetTenantRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_talent_v4beta1_ListTenantsRequest(arg) {
  if (!(arg instanceof google_cloud_talent_v4beta1_tenant_service_pb.ListTenantsRequest)) {
    throw new Error('Expected argument of type google.cloud.talent.v4beta1.ListTenantsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_talent_v4beta1_ListTenantsRequest(buffer_arg) {
  return google_cloud_talent_v4beta1_tenant_service_pb.ListTenantsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_talent_v4beta1_ListTenantsResponse(arg) {
  if (!(arg instanceof google_cloud_talent_v4beta1_tenant_service_pb.ListTenantsResponse)) {
    throw new Error('Expected argument of type google.cloud.talent.v4beta1.ListTenantsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_talent_v4beta1_ListTenantsResponse(buffer_arg) {
  return google_cloud_talent_v4beta1_tenant_service_pb.ListTenantsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_talent_v4beta1_Tenant(arg) {
  if (!(arg instanceof google_cloud_talent_v4beta1_tenant_pb.Tenant)) {
    throw new Error('Expected argument of type google.cloud.talent.v4beta1.Tenant');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_talent_v4beta1_Tenant(buffer_arg) {
  return google_cloud_talent_v4beta1_tenant_pb.Tenant.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_talent_v4beta1_UpdateTenantRequest(arg) {
  if (!(arg instanceof google_cloud_talent_v4beta1_tenant_service_pb.UpdateTenantRequest)) {
    throw new Error('Expected argument of type google.cloud.talent.v4beta1.UpdateTenantRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_talent_v4beta1_UpdateTenantRequest(buffer_arg) {
  return google_cloud_talent_v4beta1_tenant_service_pb.UpdateTenantRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


// A service that handles tenant management, including CRUD and enumeration.
var TenantServiceService = exports.TenantServiceService = {
  // Creates a new tenant entity.
  createTenant: {
    path: '/google.cloud.talent.v4beta1.TenantService/CreateTenant',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_talent_v4beta1_tenant_service_pb.CreateTenantRequest,
    responseType: google_cloud_talent_v4beta1_tenant_pb.Tenant,
    requestSerialize: serialize_google_cloud_talent_v4beta1_CreateTenantRequest,
    requestDeserialize: deserialize_google_cloud_talent_v4beta1_CreateTenantRequest,
    responseSerialize: serialize_google_cloud_talent_v4beta1_Tenant,
    responseDeserialize: deserialize_google_cloud_talent_v4beta1_Tenant,
  },
  // Retrieves specified tenant.
  getTenant: {
    path: '/google.cloud.talent.v4beta1.TenantService/GetTenant',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_talent_v4beta1_tenant_service_pb.GetTenantRequest,
    responseType: google_cloud_talent_v4beta1_tenant_pb.Tenant,
    requestSerialize: serialize_google_cloud_talent_v4beta1_GetTenantRequest,
    requestDeserialize: deserialize_google_cloud_talent_v4beta1_GetTenantRequest,
    responseSerialize: serialize_google_cloud_talent_v4beta1_Tenant,
    responseDeserialize: deserialize_google_cloud_talent_v4beta1_Tenant,
  },
  // Updates specified tenant.
  updateTenant: {
    path: '/google.cloud.talent.v4beta1.TenantService/UpdateTenant',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_talent_v4beta1_tenant_service_pb.UpdateTenantRequest,
    responseType: google_cloud_talent_v4beta1_tenant_pb.Tenant,
    requestSerialize: serialize_google_cloud_talent_v4beta1_UpdateTenantRequest,
    requestDeserialize: deserialize_google_cloud_talent_v4beta1_UpdateTenantRequest,
    responseSerialize: serialize_google_cloud_talent_v4beta1_Tenant,
    responseDeserialize: deserialize_google_cloud_talent_v4beta1_Tenant,
  },
  // Deletes specified tenant.
  deleteTenant: {
    path: '/google.cloud.talent.v4beta1.TenantService/DeleteTenant',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_talent_v4beta1_tenant_service_pb.DeleteTenantRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_cloud_talent_v4beta1_DeleteTenantRequest,
    requestDeserialize: deserialize_google_cloud_talent_v4beta1_DeleteTenantRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Lists all tenants associated with the project.
  listTenants: {
    path: '/google.cloud.talent.v4beta1.TenantService/ListTenants',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_talent_v4beta1_tenant_service_pb.ListTenantsRequest,
    responseType: google_cloud_talent_v4beta1_tenant_service_pb.ListTenantsResponse,
    requestSerialize: serialize_google_cloud_talent_v4beta1_ListTenantsRequest,
    requestDeserialize: deserialize_google_cloud_talent_v4beta1_ListTenantsRequest,
    responseSerialize: serialize_google_cloud_talent_v4beta1_ListTenantsResponse,
    responseDeserialize: deserialize_google_cloud_talent_v4beta1_ListTenantsResponse,
  },
};

exports.TenantServiceClient = grpc.makeGenericClientConstructor(TenantServiceService);
