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
var google_monitoring_v3_group_service_pb = require('../../../google/monitoring/v3/group_service_pb.js');
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
var google_api_monitored_resource_pb = require('../../../google/api/monitored_resource_pb.js');
var google_monitoring_v3_common_pb = require('../../../google/monitoring/v3/common_pb.js');
var google_monitoring_v3_group_pb = require('../../../google/monitoring/v3/group_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_api_client_pb = require('../../../google/api/client_pb.js');

function serialize_google_monitoring_v3_CreateGroupRequest(arg) {
  if (!(arg instanceof google_monitoring_v3_group_service_pb.CreateGroupRequest)) {
    throw new Error('Expected argument of type google.monitoring.v3.CreateGroupRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_monitoring_v3_CreateGroupRequest(buffer_arg) {
  return google_monitoring_v3_group_service_pb.CreateGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_monitoring_v3_DeleteGroupRequest(arg) {
  if (!(arg instanceof google_monitoring_v3_group_service_pb.DeleteGroupRequest)) {
    throw new Error('Expected argument of type google.monitoring.v3.DeleteGroupRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_monitoring_v3_DeleteGroupRequest(buffer_arg) {
  return google_monitoring_v3_group_service_pb.DeleteGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_monitoring_v3_GetGroupRequest(arg) {
  if (!(arg instanceof google_monitoring_v3_group_service_pb.GetGroupRequest)) {
    throw new Error('Expected argument of type google.monitoring.v3.GetGroupRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_monitoring_v3_GetGroupRequest(buffer_arg) {
  return google_monitoring_v3_group_service_pb.GetGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_monitoring_v3_Group(arg) {
  if (!(arg instanceof google_monitoring_v3_group_pb.Group)) {
    throw new Error('Expected argument of type google.monitoring.v3.Group');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_monitoring_v3_Group(buffer_arg) {
  return google_monitoring_v3_group_pb.Group.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_monitoring_v3_ListGroupMembersRequest(arg) {
  if (!(arg instanceof google_monitoring_v3_group_service_pb.ListGroupMembersRequest)) {
    throw new Error('Expected argument of type google.monitoring.v3.ListGroupMembersRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_monitoring_v3_ListGroupMembersRequest(buffer_arg) {
  return google_monitoring_v3_group_service_pb.ListGroupMembersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_monitoring_v3_ListGroupMembersResponse(arg) {
  if (!(arg instanceof google_monitoring_v3_group_service_pb.ListGroupMembersResponse)) {
    throw new Error('Expected argument of type google.monitoring.v3.ListGroupMembersResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_monitoring_v3_ListGroupMembersResponse(buffer_arg) {
  return google_monitoring_v3_group_service_pb.ListGroupMembersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_monitoring_v3_ListGroupsRequest(arg) {
  if (!(arg instanceof google_monitoring_v3_group_service_pb.ListGroupsRequest)) {
    throw new Error('Expected argument of type google.monitoring.v3.ListGroupsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_monitoring_v3_ListGroupsRequest(buffer_arg) {
  return google_monitoring_v3_group_service_pb.ListGroupsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_monitoring_v3_ListGroupsResponse(arg) {
  if (!(arg instanceof google_monitoring_v3_group_service_pb.ListGroupsResponse)) {
    throw new Error('Expected argument of type google.monitoring.v3.ListGroupsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_monitoring_v3_ListGroupsResponse(buffer_arg) {
  return google_monitoring_v3_group_service_pb.ListGroupsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_monitoring_v3_UpdateGroupRequest(arg) {
  if (!(arg instanceof google_monitoring_v3_group_service_pb.UpdateGroupRequest)) {
    throw new Error('Expected argument of type google.monitoring.v3.UpdateGroupRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_monitoring_v3_UpdateGroupRequest(buffer_arg) {
  return google_monitoring_v3_group_service_pb.UpdateGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


// The Group API lets you inspect and manage your
// [groups](#google.monitoring.v3.Group).
//
// A group is a named filter that is used to identify
// a collection of monitored resources. Groups are typically used to
// mirror the physical and/or logical topology of the environment.
// Because group membership is computed dynamically, monitored
// resources that are started in the future are automatically placed
// in matching groups. By using a group to name monitored resources in,
// for example, an alert policy, the target of that alert policy is
// updated automatically as monitored resources are added and removed
// from the infrastructure.
var GroupServiceService = exports.GroupServiceService = {
  // Lists the existing groups.
  listGroups: {
    path: '/google.monitoring.v3.GroupService/ListGroups',
    requestStream: false,
    responseStream: false,
    requestType: google_monitoring_v3_group_service_pb.ListGroupsRequest,
    responseType: google_monitoring_v3_group_service_pb.ListGroupsResponse,
    requestSerialize: serialize_google_monitoring_v3_ListGroupsRequest,
    requestDeserialize: deserialize_google_monitoring_v3_ListGroupsRequest,
    responseSerialize: serialize_google_monitoring_v3_ListGroupsResponse,
    responseDeserialize: deserialize_google_monitoring_v3_ListGroupsResponse,
  },
  // Gets a single group.
  getGroup: {
    path: '/google.monitoring.v3.GroupService/GetGroup',
    requestStream: false,
    responseStream: false,
    requestType: google_monitoring_v3_group_service_pb.GetGroupRequest,
    responseType: google_monitoring_v3_group_pb.Group,
    requestSerialize: serialize_google_monitoring_v3_GetGroupRequest,
    requestDeserialize: deserialize_google_monitoring_v3_GetGroupRequest,
    responseSerialize: serialize_google_monitoring_v3_Group,
    responseDeserialize: deserialize_google_monitoring_v3_Group,
  },
  // Creates a new group.
  createGroup: {
    path: '/google.monitoring.v3.GroupService/CreateGroup',
    requestStream: false,
    responseStream: false,
    requestType: google_monitoring_v3_group_service_pb.CreateGroupRequest,
    responseType: google_monitoring_v3_group_pb.Group,
    requestSerialize: serialize_google_monitoring_v3_CreateGroupRequest,
    requestDeserialize: deserialize_google_monitoring_v3_CreateGroupRequest,
    responseSerialize: serialize_google_monitoring_v3_Group,
    responseDeserialize: deserialize_google_monitoring_v3_Group,
  },
  // Updates an existing group.
  // You can change any group attributes except `name`.
  updateGroup: {
    path: '/google.monitoring.v3.GroupService/UpdateGroup',
    requestStream: false,
    responseStream: false,
    requestType: google_monitoring_v3_group_service_pb.UpdateGroupRequest,
    responseType: google_monitoring_v3_group_pb.Group,
    requestSerialize: serialize_google_monitoring_v3_UpdateGroupRequest,
    requestDeserialize: deserialize_google_monitoring_v3_UpdateGroupRequest,
    responseSerialize: serialize_google_monitoring_v3_Group,
    responseDeserialize: deserialize_google_monitoring_v3_Group,
  },
  // Deletes an existing group.
  deleteGroup: {
    path: '/google.monitoring.v3.GroupService/DeleteGroup',
    requestStream: false,
    responseStream: false,
    requestType: google_monitoring_v3_group_service_pb.DeleteGroupRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_monitoring_v3_DeleteGroupRequest,
    requestDeserialize: deserialize_google_monitoring_v3_DeleteGroupRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Lists the monitored resources that are members of a group.
  listGroupMembers: {
    path: '/google.monitoring.v3.GroupService/ListGroupMembers',
    requestStream: false,
    responseStream: false,
    requestType: google_monitoring_v3_group_service_pb.ListGroupMembersRequest,
    responseType: google_monitoring_v3_group_service_pb.ListGroupMembersResponse,
    requestSerialize: serialize_google_monitoring_v3_ListGroupMembersRequest,
    requestDeserialize: deserialize_google_monitoring_v3_ListGroupMembersRequest,
    responseSerialize: serialize_google_monitoring_v3_ListGroupMembersResponse,
    responseDeserialize: deserialize_google_monitoring_v3_ListGroupMembersResponse,
  },
};

exports.GroupServiceClient = grpc.makeGenericClientConstructor(GroupServiceService);
