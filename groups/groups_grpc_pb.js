// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var groups_groups_pb = require('../groups/groups_pb.js');
var google_api_annotations_pb = require('../google/api/annotations_pb.js');
var common_health_pb = require('../common/health_pb.js');

function serialize_mruv_common_ServiceStatusRequest(arg) {
  if (!(arg instanceof common_health_pb.ServiceStatusRequest)) {
    throw new Error('Expected argument of type mruv.common.ServiceStatusRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_common_ServiceStatusRequest(buffer_arg) {
  return common_health_pb.ServiceStatusRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_common_ServiceStatusResponse(arg) {
  if (!(arg instanceof common_health_pb.ServiceStatusResponse)) {
    throw new Error('Expected argument of type mruv.common.ServiceStatusResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_common_ServiceStatusResponse(buffer_arg) {
  return common_health_pb.ServiceStatusResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_common_VersionRequest(arg) {
  if (!(arg instanceof common_health_pb.VersionRequest)) {
    throw new Error('Expected argument of type mruv.common.VersionRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_common_VersionRequest(buffer_arg) {
  return common_health_pb.VersionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_common_VersionResponse(arg) {
  if (!(arg instanceof common_health_pb.VersionResponse)) {
    throw new Error('Expected argument of type mruv.common.VersionResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_common_VersionResponse(buffer_arg) {
  return common_health_pb.VersionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_groups_AddMemberRequest(arg) {
  if (!(arg instanceof groups_groups_pb.AddMemberRequest)) {
    throw new Error('Expected argument of type mruv.groups.AddMemberRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_groups_AddMemberRequest(buffer_arg) {
  return groups_groups_pb.AddMemberRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_groups_AddMemberResponse(arg) {
  if (!(arg instanceof groups_groups_pb.AddMemberResponse)) {
    throw new Error('Expected argument of type mruv.groups.AddMemberResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_groups_AddMemberResponse(buffer_arg) {
  return groups_groups_pb.AddMemberResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_groups_AddPermissionRequest(arg) {
  if (!(arg instanceof groups_groups_pb.AddPermissionRequest)) {
    throw new Error('Expected argument of type mruv.groups.AddPermissionRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_groups_AddPermissionRequest(buffer_arg) {
  return groups_groups_pb.AddPermissionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_groups_AddPermissionResponse(arg) {
  if (!(arg instanceof groups_groups_pb.AddPermissionResponse)) {
    throw new Error('Expected argument of type mruv.groups.AddPermissionResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_groups_AddPermissionResponse(buffer_arg) {
  return groups_groups_pb.AddPermissionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_groups_AddSubgroupRequest(arg) {
  if (!(arg instanceof groups_groups_pb.AddSubgroupRequest)) {
    throw new Error('Expected argument of type mruv.groups.AddSubgroupRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_groups_AddSubgroupRequest(buffer_arg) {
  return groups_groups_pb.AddSubgroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_groups_AddSubgroupResponse(arg) {
  if (!(arg instanceof groups_groups_pb.AddSubgroupResponse)) {
    throw new Error('Expected argument of type mruv.groups.AddSubgroupResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_groups_AddSubgroupResponse(buffer_arg) {
  return groups_groups_pb.AddSubgroupResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_groups_AssignOwnerRequest(arg) {
  if (!(arg instanceof groups_groups_pb.AssignOwnerRequest)) {
    throw new Error('Expected argument of type mruv.groups.AssignOwnerRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_groups_AssignOwnerRequest(buffer_arg) {
  return groups_groups_pb.AssignOwnerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_groups_AssignOwnerResponse(arg) {
  if (!(arg instanceof groups_groups_pb.AssignOwnerResponse)) {
    throw new Error('Expected argument of type mruv.groups.AssignOwnerResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_groups_AssignOwnerResponse(buffer_arg) {
  return groups_groups_pb.AssignOwnerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_groups_CreateGroupRequest(arg) {
  if (!(arg instanceof groups_groups_pb.CreateGroupRequest)) {
    throw new Error('Expected argument of type mruv.groups.CreateGroupRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_groups_CreateGroupRequest(buffer_arg) {
  return groups_groups_pb.CreateGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_groups_CreateGroupResponse(arg) {
  if (!(arg instanceof groups_groups_pb.CreateGroupResponse)) {
    throw new Error('Expected argument of type mruv.groups.CreateGroupResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_groups_CreateGroupResponse(buffer_arg) {
  return groups_groups_pb.CreateGroupResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_groups_DeleteGroupRequest(arg) {
  if (!(arg instanceof groups_groups_pb.DeleteGroupRequest)) {
    throw new Error('Expected argument of type mruv.groups.DeleteGroupRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_groups_DeleteGroupRequest(buffer_arg) {
  return groups_groups_pb.DeleteGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_groups_DeleteGroupResponse(arg) {
  if (!(arg instanceof groups_groups_pb.DeleteGroupResponse)) {
    throw new Error('Expected argument of type mruv.groups.DeleteGroupResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_groups_DeleteGroupResponse(buffer_arg) {
  return groups_groups_pb.DeleteGroupResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_groups_GetGroupRequest(arg) {
  if (!(arg instanceof groups_groups_pb.GetGroupRequest)) {
    throw new Error('Expected argument of type mruv.groups.GetGroupRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_groups_GetGroupRequest(buffer_arg) {
  return groups_groups_pb.GetGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_groups_GetGroupResponse(arg) {
  if (!(arg instanceof groups_groups_pb.GetGroupResponse)) {
    throw new Error('Expected argument of type mruv.groups.GetGroupResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_groups_GetGroupResponse(buffer_arg) {
  return groups_groups_pb.GetGroupResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_groups_GetGroupsRequest(arg) {
  if (!(arg instanceof groups_groups_pb.GetGroupsRequest)) {
    throw new Error('Expected argument of type mruv.groups.GetGroupsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_groups_GetGroupsRequest(buffer_arg) {
  return groups_groups_pb.GetGroupsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_groups_GetGroupsResponse(arg) {
  if (!(arg instanceof groups_groups_pb.GetGroupsResponse)) {
    throw new Error('Expected argument of type mruv.groups.GetGroupsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_groups_GetGroupsResponse(buffer_arg) {
  return groups_groups_pb.GetGroupsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_groups_GetMembersRequest(arg) {
  if (!(arg instanceof groups_groups_pb.GetMembersRequest)) {
    throw new Error('Expected argument of type mruv.groups.GetMembersRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_groups_GetMembersRequest(buffer_arg) {
  return groups_groups_pb.GetMembersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_groups_GetMembersResponse(arg) {
  if (!(arg instanceof groups_groups_pb.GetMembersResponse)) {
    throw new Error('Expected argument of type mruv.groups.GetMembersResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_groups_GetMembersResponse(buffer_arg) {
  return groups_groups_pb.GetMembersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_groups_GetOwnerRequest(arg) {
  if (!(arg instanceof groups_groups_pb.GetOwnerRequest)) {
    throw new Error('Expected argument of type mruv.groups.GetOwnerRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_groups_GetOwnerRequest(buffer_arg) {
  return groups_groups_pb.GetOwnerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_groups_GetOwnerResponse(arg) {
  if (!(arg instanceof groups_groups_pb.GetOwnerResponse)) {
    throw new Error('Expected argument of type mruv.groups.GetOwnerResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_groups_GetOwnerResponse(buffer_arg) {
  return groups_groups_pb.GetOwnerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_groups_GetPermissionsRequest(arg) {
  if (!(arg instanceof groups_groups_pb.GetPermissionsRequest)) {
    throw new Error('Expected argument of type mruv.groups.GetPermissionsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_groups_GetPermissionsRequest(buffer_arg) {
  return groups_groups_pb.GetPermissionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_groups_GetPermissionsResponse(arg) {
  if (!(arg instanceof groups_groups_pb.GetPermissionsResponse)) {
    throw new Error('Expected argument of type mruv.groups.GetPermissionsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_groups_GetPermissionsResponse(buffer_arg) {
  return groups_groups_pb.GetPermissionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_groups_GetSubgroupsRequest(arg) {
  if (!(arg instanceof groups_groups_pb.GetSubgroupsRequest)) {
    throw new Error('Expected argument of type mruv.groups.GetSubgroupsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_groups_GetSubgroupsRequest(buffer_arg) {
  return groups_groups_pb.GetSubgroupsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_groups_GetSubgroupsResponse(arg) {
  if (!(arg instanceof groups_groups_pb.GetSubgroupsResponse)) {
    throw new Error('Expected argument of type mruv.groups.GetSubgroupsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_groups_GetSubgroupsResponse(buffer_arg) {
  return groups_groups_pb.GetSubgroupsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_groups_IsPermittedRequest(arg) {
  if (!(arg instanceof groups_groups_pb.IsPermittedRequest)) {
    throw new Error('Expected argument of type mruv.groups.IsPermittedRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_groups_IsPermittedRequest(buffer_arg) {
  return groups_groups_pb.IsPermittedRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_groups_IsPermittedResponse(arg) {
  if (!(arg instanceof groups_groups_pb.IsPermittedResponse)) {
    throw new Error('Expected argument of type mruv.groups.IsPermittedResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_groups_IsPermittedResponse(buffer_arg) {
  return groups_groups_pb.IsPermittedResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_groups_RemoveMemberRequest(arg) {
  if (!(arg instanceof groups_groups_pb.RemoveMemberRequest)) {
    throw new Error('Expected argument of type mruv.groups.RemoveMemberRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_groups_RemoveMemberRequest(buffer_arg) {
  return groups_groups_pb.RemoveMemberRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_groups_RemoveMemberResponse(arg) {
  if (!(arg instanceof groups_groups_pb.RemoveMemberResponse)) {
    throw new Error('Expected argument of type mruv.groups.RemoveMemberResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_groups_RemoveMemberResponse(buffer_arg) {
  return groups_groups_pb.RemoveMemberResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_groups_RemovePermissionRequest(arg) {
  if (!(arg instanceof groups_groups_pb.RemovePermissionRequest)) {
    throw new Error('Expected argument of type mruv.groups.RemovePermissionRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_groups_RemovePermissionRequest(buffer_arg) {
  return groups_groups_pb.RemovePermissionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_groups_RemovePermissionResponse(arg) {
  if (!(arg instanceof groups_groups_pb.RemovePermissionResponse)) {
    throw new Error('Expected argument of type mruv.groups.RemovePermissionResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_groups_RemovePermissionResponse(buffer_arg) {
  return groups_groups_pb.RemovePermissionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_groups_RemoveSubgroupRequest(arg) {
  if (!(arg instanceof groups_groups_pb.RemoveSubgroupRequest)) {
    throw new Error('Expected argument of type mruv.groups.RemoveSubgroupRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_groups_RemoveSubgroupRequest(buffer_arg) {
  return groups_groups_pb.RemoveSubgroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_groups_RemoveSubgroupResponse(arg) {
  if (!(arg instanceof groups_groups_pb.RemoveSubgroupResponse)) {
    throw new Error('Expected argument of type mruv.groups.RemoveSubgroupResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_groups_RemoveSubgroupResponse(buffer_arg) {
  return groups_groups_pb.RemoveSubgroupResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_groups_UpdateGroupRequest(arg) {
  if (!(arg instanceof groups_groups_pb.UpdateGroupRequest)) {
    throw new Error('Expected argument of type mruv.groups.UpdateGroupRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_groups_UpdateGroupRequest(buffer_arg) {
  return groups_groups_pb.UpdateGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_groups_UpdateGroupResponse(arg) {
  if (!(arg instanceof groups_groups_pb.UpdateGroupResponse)) {
    throw new Error('Expected argument of type mruv.groups.UpdateGroupResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_groups_UpdateGroupResponse(buffer_arg) {
  return groups_groups_pb.UpdateGroupResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// The MruV groups service provides procedures for managing groups.
var MruVGroupsServiceService = exports.MruVGroupsServiceService = {
  // Create a group.
  createGroup: {
    path: '/mruv.groups.MruVGroupsService/CreateGroup',
    requestStream: false,
    responseStream: false,
    requestType: groups_groups_pb.CreateGroupRequest,
    responseType: groups_groups_pb.CreateGroupResponse,
    requestSerialize: serialize_mruv_groups_CreateGroupRequest,
    requestDeserialize: deserialize_mruv_groups_CreateGroupRequest,
    responseSerialize: serialize_mruv_groups_CreateGroupResponse,
    responseDeserialize: deserialize_mruv_groups_CreateGroupResponse,
  },
  // Get a  group.
  getGroup: {
    path: '/mruv.groups.MruVGroupsService/GetGroup',
    requestStream: false,
    responseStream: false,
    requestType: groups_groups_pb.GetGroupRequest,
    responseType: groups_groups_pb.GetGroupResponse,
    requestSerialize: serialize_mruv_groups_GetGroupRequest,
    requestDeserialize: deserialize_mruv_groups_GetGroupRequest,
    responseSerialize: serialize_mruv_groups_GetGroupResponse,
    responseDeserialize: deserialize_mruv_groups_GetGroupResponse,
  },
  // Update a group.
  updateGroup: {
    path: '/mruv.groups.MruVGroupsService/UpdateGroup',
    requestStream: false,
    responseStream: false,
    requestType: groups_groups_pb.UpdateGroupRequest,
    responseType: groups_groups_pb.UpdateGroupResponse,
    requestSerialize: serialize_mruv_groups_UpdateGroupRequest,
    requestDeserialize: deserialize_mruv_groups_UpdateGroupRequest,
    responseSerialize: serialize_mruv_groups_UpdateGroupResponse,
    responseDeserialize: deserialize_mruv_groups_UpdateGroupResponse,
  },
  // Delete a group.
  deleteGroup: {
    path: '/mruv.groups.MruVGroupsService/DeleteGroup',
    requestStream: false,
    responseStream: false,
    requestType: groups_groups_pb.DeleteGroupRequest,
    responseType: groups_groups_pb.DeleteGroupResponse,
    requestSerialize: serialize_mruv_groups_DeleteGroupRequest,
    requestDeserialize: deserialize_mruv_groups_DeleteGroupRequest,
    responseSerialize: serialize_mruv_groups_DeleteGroupResponse,
    responseDeserialize: deserialize_mruv_groups_DeleteGroupResponse,
  },
  // Get all groups.
  getGroups: {
    path: '/mruv.groups.MruVGroupsService/GetGroups',
    requestStream: false,
    responseStream: false,
    requestType: groups_groups_pb.GetGroupsRequest,
    responseType: groups_groups_pb.GetGroupsResponse,
    requestSerialize: serialize_mruv_groups_GetGroupsRequest,
    requestDeserialize: deserialize_mruv_groups_GetGroupsRequest,
    responseSerialize: serialize_mruv_groups_GetGroupsResponse,
    responseDeserialize: deserialize_mruv_groups_GetGroupsResponse,
  },
  // Assign an owner. Group can have only one owner. Owner can be a player, a group or an account.
  assignOwner: {
    path: '/mruv.groups.MruVGroupsService/AssignOwner',
    requestStream: false,
    responseStream: false,
    requestType: groups_groups_pb.AssignOwnerRequest,
    responseType: groups_groups_pb.AssignOwnerResponse,
    requestSerialize: serialize_mruv_groups_AssignOwnerRequest,
    requestDeserialize: deserialize_mruv_groups_AssignOwnerRequest,
    responseSerialize: serialize_mruv_groups_AssignOwnerResponse,
    responseDeserialize: deserialize_mruv_groups_AssignOwnerResponse,
  },
  // Get group owner.
  getOwner: {
    path: '/mruv.groups.MruVGroupsService/GetOwner',
    requestStream: false,
    responseStream: false,
    requestType: groups_groups_pb.GetOwnerRequest,
    responseType: groups_groups_pb.GetOwnerResponse,
    requestSerialize: serialize_mruv_groups_GetOwnerRequest,
    requestDeserialize: deserialize_mruv_groups_GetOwnerRequest,
    responseSerialize: serialize_mruv_groups_GetOwnerResponse,
    responseDeserialize: deserialize_mruv_groups_GetOwnerResponse,
  },
  // Add a group member.
  addMember: {
    path: '/mruv.groups.MruVGroupsService/AddMember',
    requestStream: false,
    responseStream: false,
    requestType: groups_groups_pb.AddMemberRequest,
    responseType: groups_groups_pb.AddMemberResponse,
    requestSerialize: serialize_mruv_groups_AddMemberRequest,
    requestDeserialize: deserialize_mruv_groups_AddMemberRequest,
    responseSerialize: serialize_mruv_groups_AddMemberResponse,
    responseDeserialize: deserialize_mruv_groups_AddMemberResponse,
  },
  // Get a group member.
  getMembers: {
    path: '/mruv.groups.MruVGroupsService/GetMembers',
    requestStream: false,
    responseStream: false,
    requestType: groups_groups_pb.GetMembersRequest,
    responseType: groups_groups_pb.GetMembersResponse,
    requestSerialize: serialize_mruv_groups_GetMembersRequest,
    requestDeserialize: deserialize_mruv_groups_GetMembersRequest,
    responseSerialize: serialize_mruv_groups_GetMembersResponse,
    responseDeserialize: deserialize_mruv_groups_GetMembersResponse,
  },
  // Remove a group member.
  removeMember: {
    path: '/mruv.groups.MruVGroupsService/RemoveMember',
    requestStream: false,
    responseStream: false,
    requestType: groups_groups_pb.RemoveMemberRequest,
    responseType: groups_groups_pb.RemoveMemberResponse,
    requestSerialize: serialize_mruv_groups_RemoveMemberRequest,
    requestDeserialize: deserialize_mruv_groups_RemoveMemberRequest,
    responseSerialize: serialize_mruv_groups_RemoveMemberResponse,
    responseDeserialize: deserialize_mruv_groups_RemoveMemberResponse,
  },
  // Add a permission to a group.
  addPermission: {
    path: '/mruv.groups.MruVGroupsService/AddPermission',
    requestStream: false,
    responseStream: false,
    requestType: groups_groups_pb.AddPermissionRequest,
    responseType: groups_groups_pb.AddPermissionResponse,
    requestSerialize: serialize_mruv_groups_AddPermissionRequest,
    requestDeserialize: deserialize_mruv_groups_AddPermissionRequest,
    responseSerialize: serialize_mruv_groups_AddPermissionResponse,
    responseDeserialize: deserialize_mruv_groups_AddPermissionResponse,
  },
  // Get all group permissions.
  getPermissions: {
    path: '/mruv.groups.MruVGroupsService/GetPermissions',
    requestStream: false,
    responseStream: false,
    requestType: groups_groups_pb.GetPermissionsRequest,
    responseType: groups_groups_pb.GetPermissionsResponse,
    requestSerialize: serialize_mruv_groups_GetPermissionsRequest,
    requestDeserialize: deserialize_mruv_groups_GetPermissionsRequest,
    responseSerialize: serialize_mruv_groups_GetPermissionsResponse,
    responseDeserialize: deserialize_mruv_groups_GetPermissionsResponse,
  },
  // Remove group permission.
  removePermission: {
    path: '/mruv.groups.MruVGroupsService/RemovePermission',
    requestStream: false,
    responseStream: false,
    requestType: groups_groups_pb.RemovePermissionRequest,
    responseType: groups_groups_pb.RemovePermissionResponse,
    requestSerialize: serialize_mruv_groups_RemovePermissionRequest,
    requestDeserialize: deserialize_mruv_groups_RemovePermissionRequest,
    responseSerialize: serialize_mruv_groups_RemovePermissionResponse,
    responseDeserialize: deserialize_mruv_groups_RemovePermissionResponse,
  },
  // Add a subgroup to a group.
  addSubgroup: {
    path: '/mruv.groups.MruVGroupsService/AddSubgroup',
    requestStream: false,
    responseStream: false,
    requestType: groups_groups_pb.AddSubgroupRequest,
    responseType: groups_groups_pb.AddSubgroupResponse,
    requestSerialize: serialize_mruv_groups_AddSubgroupRequest,
    requestDeserialize: deserialize_mruv_groups_AddSubgroupRequest,
    responseSerialize: serialize_mruv_groups_AddSubgroupResponse,
    responseDeserialize: deserialize_mruv_groups_AddSubgroupResponse,
  },
  // Get all subgroups.
  getSubgroups: {
    path: '/mruv.groups.MruVGroupsService/GetSubgroups',
    requestStream: false,
    responseStream: false,
    requestType: groups_groups_pb.GetSubgroupsRequest,
    responseType: groups_groups_pb.GetSubgroupsResponse,
    requestSerialize: serialize_mruv_groups_GetSubgroupsRequest,
    requestDeserialize: deserialize_mruv_groups_GetSubgroupsRequest,
    responseSerialize: serialize_mruv_groups_GetSubgroupsResponse,
    responseDeserialize: deserialize_mruv_groups_GetSubgroupsResponse,
  },
  // Remove a subgroup from group.
  removeSubgroup: {
    path: '/mruv.groups.MruVGroupsService/RemoveSubgroup',
    requestStream: false,
    responseStream: false,
    requestType: groups_groups_pb.RemoveSubgroupRequest,
    responseType: groups_groups_pb.RemoveSubgroupResponse,
    requestSerialize: serialize_mruv_groups_RemoveSubgroupRequest,
    requestDeserialize: deserialize_mruv_groups_RemoveSubgroupRequest,
    responseSerialize: serialize_mruv_groups_RemoveSubgroupResponse,
    responseDeserialize: deserialize_mruv_groups_RemoveSubgroupResponse,
  },
  // Check is member of a group is permitted to do specific action.
  isPermitted: {
    path: '/mruv.groups.MruVGroupsService/IsPermitted',
    requestStream: false,
    responseStream: false,
    requestType: groups_groups_pb.IsPermittedRequest,
    responseType: groups_groups_pb.IsPermittedResponse,
    requestSerialize: serialize_mruv_groups_IsPermittedRequest,
    requestDeserialize: deserialize_mruv_groups_IsPermittedRequest,
    responseSerialize: serialize_mruv_groups_IsPermittedResponse,
    responseDeserialize: deserialize_mruv_groups_IsPermittedResponse,
  },
  // Service status
  getServiceStatus: {
    path: '/mruv.groups.MruVGroupsService/GetServiceStatus',
    requestStream: false,
    responseStream: false,
    requestType: common_health_pb.ServiceStatusRequest,
    responseType: common_health_pb.ServiceStatusResponse,
    requestSerialize: serialize_mruv_common_ServiceStatusRequest,
    requestDeserialize: deserialize_mruv_common_ServiceStatusRequest,
    responseSerialize: serialize_mruv_common_ServiceStatusResponse,
    responseDeserialize: deserialize_mruv_common_ServiceStatusResponse,
  },
  getServiceVersion: {
    path: '/mruv.groups.MruVGroupsService/GetServiceVersion',
    requestStream: false,
    responseStream: false,
    requestType: common_health_pb.VersionRequest,
    responseType: common_health_pb.VersionResponse,
    requestSerialize: serialize_mruv_common_VersionRequest,
    requestDeserialize: deserialize_mruv_common_VersionRequest,
    responseSerialize: serialize_mruv_common_VersionResponse,
    responseDeserialize: deserialize_mruv_common_VersionResponse,
  },
};

exports.MruVGroupsServiceClient = grpc.makeGenericClientConstructor(MruVGroupsServiceService);
