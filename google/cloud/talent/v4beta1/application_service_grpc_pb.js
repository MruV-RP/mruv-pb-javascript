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
var google_cloud_talent_v4beta1_application_service_pb = require('../../../../google/cloud/talent/v4beta1/application_service_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_api_client_pb = require('../../../../google/api/client_pb.js');
var google_api_field_behavior_pb = require('../../../../google/api/field_behavior_pb.js');
var google_cloud_talent_v4beta1_application_pb = require('../../../../google/cloud/talent/v4beta1/application_pb.js');
var google_cloud_talent_v4beta1_common_pb = require('../../../../google/cloud/talent/v4beta1/common_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');

function serialize_google_cloud_talent_v4beta1_Application(arg) {
  if (!(arg instanceof google_cloud_talent_v4beta1_application_pb.Application)) {
    throw new Error('Expected argument of type google.cloud.talent.v4beta1.Application');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_talent_v4beta1_Application(buffer_arg) {
  return google_cloud_talent_v4beta1_application_pb.Application.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_talent_v4beta1_CreateApplicationRequest(arg) {
  if (!(arg instanceof google_cloud_talent_v4beta1_application_service_pb.CreateApplicationRequest)) {
    throw new Error('Expected argument of type google.cloud.talent.v4beta1.CreateApplicationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_talent_v4beta1_CreateApplicationRequest(buffer_arg) {
  return google_cloud_talent_v4beta1_application_service_pb.CreateApplicationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_talent_v4beta1_DeleteApplicationRequest(arg) {
  if (!(arg instanceof google_cloud_talent_v4beta1_application_service_pb.DeleteApplicationRequest)) {
    throw new Error('Expected argument of type google.cloud.talent.v4beta1.DeleteApplicationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_talent_v4beta1_DeleteApplicationRequest(buffer_arg) {
  return google_cloud_talent_v4beta1_application_service_pb.DeleteApplicationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_talent_v4beta1_GetApplicationRequest(arg) {
  if (!(arg instanceof google_cloud_talent_v4beta1_application_service_pb.GetApplicationRequest)) {
    throw new Error('Expected argument of type google.cloud.talent.v4beta1.GetApplicationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_talent_v4beta1_GetApplicationRequest(buffer_arg) {
  return google_cloud_talent_v4beta1_application_service_pb.GetApplicationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_talent_v4beta1_ListApplicationsRequest(arg) {
  if (!(arg instanceof google_cloud_talent_v4beta1_application_service_pb.ListApplicationsRequest)) {
    throw new Error('Expected argument of type google.cloud.talent.v4beta1.ListApplicationsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_talent_v4beta1_ListApplicationsRequest(buffer_arg) {
  return google_cloud_talent_v4beta1_application_service_pb.ListApplicationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_talent_v4beta1_ListApplicationsResponse(arg) {
  if (!(arg instanceof google_cloud_talent_v4beta1_application_service_pb.ListApplicationsResponse)) {
    throw new Error('Expected argument of type google.cloud.talent.v4beta1.ListApplicationsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_talent_v4beta1_ListApplicationsResponse(buffer_arg) {
  return google_cloud_talent_v4beta1_application_service_pb.ListApplicationsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_talent_v4beta1_UpdateApplicationRequest(arg) {
  if (!(arg instanceof google_cloud_talent_v4beta1_application_service_pb.UpdateApplicationRequest)) {
    throw new Error('Expected argument of type google.cloud.talent.v4beta1.UpdateApplicationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_talent_v4beta1_UpdateApplicationRequest(buffer_arg) {
  return google_cloud_talent_v4beta1_application_service_pb.UpdateApplicationRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


// A service that handles application management, including CRUD and
// enumeration.
var ApplicationServiceService = exports.ApplicationServiceService = {
  // Creates a new application entity.
  createApplication: {
    path: '/google.cloud.talent.v4beta1.ApplicationService/CreateApplication',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_talent_v4beta1_application_service_pb.CreateApplicationRequest,
    responseType: google_cloud_talent_v4beta1_application_pb.Application,
    requestSerialize: serialize_google_cloud_talent_v4beta1_CreateApplicationRequest,
    requestDeserialize: deserialize_google_cloud_talent_v4beta1_CreateApplicationRequest,
    responseSerialize: serialize_google_cloud_talent_v4beta1_Application,
    responseDeserialize: deserialize_google_cloud_talent_v4beta1_Application,
  },
  // Retrieves specified application.
  getApplication: {
    path: '/google.cloud.talent.v4beta1.ApplicationService/GetApplication',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_talent_v4beta1_application_service_pb.GetApplicationRequest,
    responseType: google_cloud_talent_v4beta1_application_pb.Application,
    requestSerialize: serialize_google_cloud_talent_v4beta1_GetApplicationRequest,
    requestDeserialize: deserialize_google_cloud_talent_v4beta1_GetApplicationRequest,
    responseSerialize: serialize_google_cloud_talent_v4beta1_Application,
    responseDeserialize: deserialize_google_cloud_talent_v4beta1_Application,
  },
  // Updates specified application.
  updateApplication: {
    path: '/google.cloud.talent.v4beta1.ApplicationService/UpdateApplication',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_talent_v4beta1_application_service_pb.UpdateApplicationRequest,
    responseType: google_cloud_talent_v4beta1_application_pb.Application,
    requestSerialize: serialize_google_cloud_talent_v4beta1_UpdateApplicationRequest,
    requestDeserialize: deserialize_google_cloud_talent_v4beta1_UpdateApplicationRequest,
    responseSerialize: serialize_google_cloud_talent_v4beta1_Application,
    responseDeserialize: deserialize_google_cloud_talent_v4beta1_Application,
  },
  // Deletes specified application.
  deleteApplication: {
    path: '/google.cloud.talent.v4beta1.ApplicationService/DeleteApplication',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_talent_v4beta1_application_service_pb.DeleteApplicationRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_cloud_talent_v4beta1_DeleteApplicationRequest,
    requestDeserialize: deserialize_google_cloud_talent_v4beta1_DeleteApplicationRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Lists all applications associated with the profile.
  listApplications: {
    path: '/google.cloud.talent.v4beta1.ApplicationService/ListApplications',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_talent_v4beta1_application_service_pb.ListApplicationsRequest,
    responseType: google_cloud_talent_v4beta1_application_service_pb.ListApplicationsResponse,
    requestSerialize: serialize_google_cloud_talent_v4beta1_ListApplicationsRequest,
    requestDeserialize: deserialize_google_cloud_talent_v4beta1_ListApplicationsRequest,
    responseSerialize: serialize_google_cloud_talent_v4beta1_ListApplicationsResponse,
    responseDeserialize: deserialize_google_cloud_talent_v4beta1_ListApplicationsResponse,
  },
};

exports.ApplicationServiceClient = grpc.makeGenericClientConstructor(ApplicationServiceService);
