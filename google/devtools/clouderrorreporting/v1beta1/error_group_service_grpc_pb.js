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
var google_devtools_clouderrorreporting_v1beta1_error_group_service_pb = require('../../../../google/devtools/clouderrorreporting/v1beta1/error_group_service_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_api_client_pb = require('../../../../google/api/client_pb.js');
var google_api_field_behavior_pb = require('../../../../google/api/field_behavior_pb.js');
var google_api_resource_pb = require('../../../../google/api/resource_pb.js');
var google_devtools_clouderrorreporting_v1beta1_common_pb = require('../../../../google/devtools/clouderrorreporting/v1beta1/common_pb.js');

function serialize_google_devtools_clouderrorreporting_v1beta1_ErrorGroup(arg) {
  if (!(arg instanceof google_devtools_clouderrorreporting_v1beta1_common_pb.ErrorGroup)) {
    throw new Error('Expected argument of type google.devtools.clouderrorreporting.v1beta1.ErrorGroup');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_clouderrorreporting_v1beta1_ErrorGroup(buffer_arg) {
  return google_devtools_clouderrorreporting_v1beta1_common_pb.ErrorGroup.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_clouderrorreporting_v1beta1_GetGroupRequest(arg) {
  if (!(arg instanceof google_devtools_clouderrorreporting_v1beta1_error_group_service_pb.GetGroupRequest)) {
    throw new Error('Expected argument of type google.devtools.clouderrorreporting.v1beta1.GetGroupRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_clouderrorreporting_v1beta1_GetGroupRequest(buffer_arg) {
  return google_devtools_clouderrorreporting_v1beta1_error_group_service_pb.GetGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_clouderrorreporting_v1beta1_UpdateGroupRequest(arg) {
  if (!(arg instanceof google_devtools_clouderrorreporting_v1beta1_error_group_service_pb.UpdateGroupRequest)) {
    throw new Error('Expected argument of type google.devtools.clouderrorreporting.v1beta1.UpdateGroupRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_clouderrorreporting_v1beta1_UpdateGroupRequest(buffer_arg) {
  return google_devtools_clouderrorreporting_v1beta1_error_group_service_pb.UpdateGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// Service for retrieving and updating individual error groups.
var ErrorGroupServiceService = exports.ErrorGroupServiceService = {
  // Get the specified group.
  getGroup: {
    path: '/google.devtools.clouderrorreporting.v1beta1.ErrorGroupService/GetGroup',
    requestStream: false,
    responseStream: false,
    requestType: google_devtools_clouderrorreporting_v1beta1_error_group_service_pb.GetGroupRequest,
    responseType: google_devtools_clouderrorreporting_v1beta1_common_pb.ErrorGroup,
    requestSerialize: serialize_google_devtools_clouderrorreporting_v1beta1_GetGroupRequest,
    requestDeserialize: deserialize_google_devtools_clouderrorreporting_v1beta1_GetGroupRequest,
    responseSerialize: serialize_google_devtools_clouderrorreporting_v1beta1_ErrorGroup,
    responseDeserialize: deserialize_google_devtools_clouderrorreporting_v1beta1_ErrorGroup,
  },
  // Replace the data for the specified group.
  // Fails if the group does not exist.
  updateGroup: {
    path: '/google.devtools.clouderrorreporting.v1beta1.ErrorGroupService/UpdateGroup',
    requestStream: false,
    responseStream: false,
    requestType: google_devtools_clouderrorreporting_v1beta1_error_group_service_pb.UpdateGroupRequest,
    responseType: google_devtools_clouderrorreporting_v1beta1_common_pb.ErrorGroup,
    requestSerialize: serialize_google_devtools_clouderrorreporting_v1beta1_UpdateGroupRequest,
    requestDeserialize: deserialize_google_devtools_clouderrorreporting_v1beta1_UpdateGroupRequest,
    responseSerialize: serialize_google_devtools_clouderrorreporting_v1beta1_ErrorGroup,
    responseDeserialize: deserialize_google_devtools_clouderrorreporting_v1beta1_ErrorGroup,
  },
};

exports.ErrorGroupServiceClient = grpc.makeGenericClientConstructor(ErrorGroupServiceService);
