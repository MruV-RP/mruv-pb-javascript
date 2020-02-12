// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var groups_groups_pb = require('../groups/groups_pb.js');
var google_api_annotations_pb = require('../google/api/annotations_pb.js');
var common_health_pb = require('../common/health_pb.js');
var groups_groups_model_pb = require('../groups/groups_model_pb.js');

function serialize_mruv_AddGroupMemberRequest(arg) {
  if (!(arg instanceof groups_groups_pb.AddGroupMemberRequest)) {
    throw new Error('Expected argument of type mruv.AddGroupMemberRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_AddGroupMemberRequest(buffer_arg) {
  return groups_groups_pb.AddGroupMemberRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_AddGroupMemberResponse(arg) {
  if (!(arg instanceof groups_groups_pb.AddGroupMemberResponse)) {
    throw new Error('Expected argument of type mruv.AddGroupMemberResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_AddGroupMemberResponse(buffer_arg) {
  return groups_groups_pb.AddGroupMemberResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_GetGroupsRequest(arg) {
  if (!(arg instanceof groups_groups_pb.GetGroupsRequest)) {
    throw new Error('Expected argument of type mruv.GetGroupsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_GetGroupsRequest(buffer_arg) {
  return groups_groups_pb.GetGroupsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_GetGroupsResponse(arg) {
  if (!(arg instanceof groups_groups_pb.GetGroupsResponse)) {
    throw new Error('Expected argument of type mruv.GetGroupsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_GetGroupsResponse(buffer_arg) {
  return groups_groups_pb.GetGroupsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_Group(arg) {
  if (!(arg instanceof groups_groups_model_pb.Group)) {
    throw new Error('Expected argument of type mruv.Group');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_Group(buffer_arg) {
  return groups_groups_model_pb.Group.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_GroupID(arg) {
  if (!(arg instanceof groups_groups_model_pb.GroupID)) {
    throw new Error('Expected argument of type mruv.GroupID');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_GroupID(buffer_arg) {
  return groups_groups_model_pb.GroupID.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_RemoveGroupMemberRequest(arg) {
  if (!(arg instanceof groups_groups_pb.RemoveGroupMemberRequest)) {
    throw new Error('Expected argument of type mruv.RemoveGroupMemberRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_RemoveGroupMemberRequest(buffer_arg) {
  return groups_groups_pb.RemoveGroupMemberRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_RemoveGroupMemberResponse(arg) {
  if (!(arg instanceof groups_groups_pb.RemoveGroupMemberResponse)) {
    throw new Error('Expected argument of type mruv.RemoveGroupMemberResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_RemoveGroupMemberResponse(buffer_arg) {
  return groups_groups_pb.RemoveGroupMemberResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_ServiceStatusRequest(arg) {
  if (!(arg instanceof common_health_pb.ServiceStatusRequest)) {
    throw new Error('Expected argument of type mruv.ServiceStatusRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_ServiceStatusRequest(buffer_arg) {
  return common_health_pb.ServiceStatusRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_ServiceStatusResponse(arg) {
  if (!(arg instanceof common_health_pb.ServiceStatusResponse)) {
    throw new Error('Expected argument of type mruv.ServiceStatusResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_ServiceStatusResponse(buffer_arg) {
  return common_health_pb.ServiceStatusResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_VersionRequest(arg) {
  if (!(arg instanceof common_health_pb.VersionRequest)) {
    throw new Error('Expected argument of type mruv.VersionRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_VersionRequest(buffer_arg) {
  return common_health_pb.VersionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_VersionResponse(arg) {
  if (!(arg instanceof common_health_pb.VersionResponse)) {
    throw new Error('Expected argument of type mruv.VersionResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_VersionResponse(buffer_arg) {
  return common_health_pb.VersionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var MruVGroupsServiceService = exports.MruVGroupsServiceService = {
  // CRUD
  createGroup: {
    path: '/mruv.MruVGroupsService/CreateGroup',
    requestStream: false,
    responseStream: false,
    requestType: groups_groups_model_pb.Group,
    responseType: groups_groups_model_pb.GroupID,
    requestSerialize: serialize_mruv_Group,
    requestDeserialize: deserialize_mruv_Group,
    responseSerialize: serialize_mruv_GroupID,
    responseDeserialize: deserialize_mruv_GroupID,
  },
  getGroup: {
    path: '/mruv.MruVGroupsService/GetGroup',
    requestStream: false,
    responseStream: false,
    requestType: groups_groups_model_pb.GroupID,
    responseType: groups_groups_model_pb.Group,
    requestSerialize: serialize_mruv_GroupID,
    requestDeserialize: deserialize_mruv_GroupID,
    responseSerialize: serialize_mruv_Group,
    responseDeserialize: deserialize_mruv_Group,
  },
  deleteGroup: {
    path: '/mruv.MruVGroupsService/DeleteGroup',
    requestStream: false,
    responseStream: false,
    requestType: groups_groups_model_pb.GroupID,
    responseType: groups_groups_model_pb.GroupID,
    requestSerialize: serialize_mruv_GroupID,
    requestDeserialize: deserialize_mruv_GroupID,
    responseSerialize: serialize_mruv_GroupID,
    responseDeserialize: deserialize_mruv_GroupID,
  },
  getGroups: {
    path: '/mruv.MruVGroupsService/GetGroups',
    requestStream: false,
    responseStream: false,
    requestType: groups_groups_pb.GetGroupsRequest,
    responseType: groups_groups_pb.GetGroupsResponse,
    requestSerialize: serialize_mruv_GetGroupsRequest,
    requestDeserialize: deserialize_mruv_GetGroupsRequest,
    responseSerialize: serialize_mruv_GetGroupsResponse,
    responseDeserialize: deserialize_mruv_GetGroupsResponse,
  },
  addGroupMember: {
    path: '/mruv.MruVGroupsService/AddGroupMember',
    requestStream: false,
    responseStream: false,
    requestType: groups_groups_pb.AddGroupMemberRequest,
    responseType: groups_groups_pb.AddGroupMemberResponse,
    requestSerialize: serialize_mruv_AddGroupMemberRequest,
    requestDeserialize: deserialize_mruv_AddGroupMemberRequest,
    responseSerialize: serialize_mruv_AddGroupMemberResponse,
    responseDeserialize: deserialize_mruv_AddGroupMemberResponse,
  },
  removeGroupMember: {
    path: '/mruv.MruVGroupsService/RemoveGroupMember',
    requestStream: false,
    responseStream: false,
    requestType: groups_groups_pb.RemoveGroupMemberRequest,
    responseType: groups_groups_pb.RemoveGroupMemberResponse,
    requestSerialize: serialize_mruv_RemoveGroupMemberRequest,
    requestDeserialize: deserialize_mruv_RemoveGroupMemberRequest,
    responseSerialize: serialize_mruv_RemoveGroupMemberResponse,
    responseDeserialize: deserialize_mruv_RemoveGroupMemberResponse,
  },
  // Service status
  getServiceStatus: {
    path: '/mruv.MruVGroupsService/GetServiceStatus',
    requestStream: false,
    responseStream: false,
    requestType: common_health_pb.ServiceStatusRequest,
    responseType: common_health_pb.ServiceStatusResponse,
    requestSerialize: serialize_mruv_ServiceStatusRequest,
    requestDeserialize: deserialize_mruv_ServiceStatusRequest,
    responseSerialize: serialize_mruv_ServiceStatusResponse,
    responseDeserialize: deserialize_mruv_ServiceStatusResponse,
  },
  getServiceVersion: {
    path: '/mruv.MruVGroupsService/GetServiceVersion',
    requestStream: false,
    responseStream: false,
    requestType: common_health_pb.VersionRequest,
    responseType: common_health_pb.VersionResponse,
    requestSerialize: serialize_mruv_VersionRequest,
    requestDeserialize: deserialize_mruv_VersionRequest,
    responseSerialize: serialize_mruv_VersionResponse,
    responseDeserialize: deserialize_mruv_VersionResponse,
  },
};

exports.MruVGroupsServiceClient = grpc.makeGenericClientConstructor(MruVGroupsServiceService);
