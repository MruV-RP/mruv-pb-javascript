// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var groups_groups_pb = require('../groups/groups_pb.js');
var google_api_annotations_pb = require('../google/api/annotations_pb.js');
var common_health_pb = require('../common/health_pb.js');

function serialize_mruv_AddMemberRequest(arg) {
  if (!(arg instanceof groups_groups_pb.AddMemberRequest)) {
    throw new Error('Expected argument of type mruv.AddMemberRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_AddMemberRequest(buffer_arg) {
  return groups_groups_pb.AddMemberRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_AddMemberResponse(arg) {
  if (!(arg instanceof groups_groups_pb.AddMemberResponse)) {
    throw new Error('Expected argument of type mruv.AddMemberResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_AddMemberResponse(buffer_arg) {
  return groups_groups_pb.AddMemberResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_AddPermissionRequest(arg) {
  if (!(arg instanceof groups_groups_pb.AddPermissionRequest)) {
    throw new Error('Expected argument of type mruv.AddPermissionRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_AddPermissionRequest(buffer_arg) {
  return groups_groups_pb.AddPermissionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_AddPermissionResponse(arg) {
  if (!(arg instanceof groups_groups_pb.AddPermissionResponse)) {
    throw new Error('Expected argument of type mruv.AddPermissionResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_AddPermissionResponse(buffer_arg) {
  return groups_groups_pb.AddPermissionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_AddSubgroupRequest(arg) {
  if (!(arg instanceof groups_groups_pb.AddSubgroupRequest)) {
    throw new Error('Expected argument of type mruv.AddSubgroupRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_AddSubgroupRequest(buffer_arg) {
  return groups_groups_pb.AddSubgroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_AddSubgroupResponse(arg) {
  if (!(arg instanceof groups_groups_pb.AddSubgroupResponse)) {
    throw new Error('Expected argument of type mruv.AddSubgroupResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_AddSubgroupResponse(buffer_arg) {
  return groups_groups_pb.AddSubgroupResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_AssignOwnerRequest(arg) {
  if (!(arg instanceof groups_groups_pb.AssignOwnerRequest)) {
    throw new Error('Expected argument of type mruv.AssignOwnerRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_AssignOwnerRequest(buffer_arg) {
  return groups_groups_pb.AssignOwnerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_AssignOwnerResponse(arg) {
  if (!(arg instanceof groups_groups_pb.AssignOwnerResponse)) {
    throw new Error('Expected argument of type mruv.AssignOwnerResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_AssignOwnerResponse(buffer_arg) {
  return groups_groups_pb.AssignOwnerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_CreateGroupRequest(arg) {
  if (!(arg instanceof groups_groups_pb.CreateGroupRequest)) {
    throw new Error('Expected argument of type mruv.CreateGroupRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_CreateGroupRequest(buffer_arg) {
  return groups_groups_pb.CreateGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_CreateGroupResponse(arg) {
  if (!(arg instanceof groups_groups_pb.CreateGroupResponse)) {
    throw new Error('Expected argument of type mruv.CreateGroupResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_CreateGroupResponse(buffer_arg) {
  return groups_groups_pb.CreateGroupResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_DeleteGroupRequest(arg) {
  if (!(arg instanceof groups_groups_pb.DeleteGroupRequest)) {
    throw new Error('Expected argument of type mruv.DeleteGroupRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_DeleteGroupRequest(buffer_arg) {
  return groups_groups_pb.DeleteGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_DeleteGroupResponse(arg) {
  if (!(arg instanceof groups_groups_pb.DeleteGroupResponse)) {
    throw new Error('Expected argument of type mruv.DeleteGroupResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_DeleteGroupResponse(buffer_arg) {
  return groups_groups_pb.DeleteGroupResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_GetGroupRequest(arg) {
  if (!(arg instanceof groups_groups_pb.GetGroupRequest)) {
    throw new Error('Expected argument of type mruv.GetGroupRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_GetGroupRequest(buffer_arg) {
  return groups_groups_pb.GetGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_GetGroupResponse(arg) {
  if (!(arg instanceof groups_groups_pb.GetGroupResponse)) {
    throw new Error('Expected argument of type mruv.GetGroupResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_GetGroupResponse(buffer_arg) {
  return groups_groups_pb.GetGroupResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_mruv_GetMembersRequest(arg) {
  if (!(arg instanceof groups_groups_pb.GetMembersRequest)) {
    throw new Error('Expected argument of type mruv.GetMembersRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_GetMembersRequest(buffer_arg) {
  return groups_groups_pb.GetMembersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_GetMembersResponse(arg) {
  if (!(arg instanceof groups_groups_pb.GetMembersResponse)) {
    throw new Error('Expected argument of type mruv.GetMembersResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_GetMembersResponse(buffer_arg) {
  return groups_groups_pb.GetMembersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_GetOwnerRequest(arg) {
  if (!(arg instanceof groups_groups_pb.GetOwnerRequest)) {
    throw new Error('Expected argument of type mruv.GetOwnerRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_GetOwnerRequest(buffer_arg) {
  return groups_groups_pb.GetOwnerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_GetOwnerResponse(arg) {
  if (!(arg instanceof groups_groups_pb.GetOwnerResponse)) {
    throw new Error('Expected argument of type mruv.GetOwnerResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_GetOwnerResponse(buffer_arg) {
  return groups_groups_pb.GetOwnerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_GetPermissionsRequest(arg) {
  if (!(arg instanceof groups_groups_pb.GetPermissionsRequest)) {
    throw new Error('Expected argument of type mruv.GetPermissionsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_GetPermissionsRequest(buffer_arg) {
  return groups_groups_pb.GetPermissionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_GetPermissionsResponse(arg) {
  if (!(arg instanceof groups_groups_pb.GetPermissionsResponse)) {
    throw new Error('Expected argument of type mruv.GetPermissionsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_GetPermissionsResponse(buffer_arg) {
  return groups_groups_pb.GetPermissionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_GetSubgroupsRequest(arg) {
  if (!(arg instanceof groups_groups_pb.GetSubgroupsRequest)) {
    throw new Error('Expected argument of type mruv.GetSubgroupsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_GetSubgroupsRequest(buffer_arg) {
  return groups_groups_pb.GetSubgroupsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_GetSubgroupsResponse(arg) {
  if (!(arg instanceof groups_groups_pb.GetSubgroupsResponse)) {
    throw new Error('Expected argument of type mruv.GetSubgroupsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_GetSubgroupsResponse(buffer_arg) {
  return groups_groups_pb.GetSubgroupsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_IsPermittedRequest(arg) {
  if (!(arg instanceof groups_groups_pb.IsPermittedRequest)) {
    throw new Error('Expected argument of type mruv.IsPermittedRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_IsPermittedRequest(buffer_arg) {
  return groups_groups_pb.IsPermittedRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_IsPermittedResponse(arg) {
  if (!(arg instanceof groups_groups_pb.IsPermittedResponse)) {
    throw new Error('Expected argument of type mruv.IsPermittedResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_IsPermittedResponse(buffer_arg) {
  return groups_groups_pb.IsPermittedResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_RemoveMemberRequest(arg) {
  if (!(arg instanceof groups_groups_pb.RemoveMemberRequest)) {
    throw new Error('Expected argument of type mruv.RemoveMemberRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_RemoveMemberRequest(buffer_arg) {
  return groups_groups_pb.RemoveMemberRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_RemoveMemberResponse(arg) {
  if (!(arg instanceof groups_groups_pb.RemoveMemberResponse)) {
    throw new Error('Expected argument of type mruv.RemoveMemberResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_RemoveMemberResponse(buffer_arg) {
  return groups_groups_pb.RemoveMemberResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_RemovePermissionRequest(arg) {
  if (!(arg instanceof groups_groups_pb.RemovePermissionRequest)) {
    throw new Error('Expected argument of type mruv.RemovePermissionRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_RemovePermissionRequest(buffer_arg) {
  return groups_groups_pb.RemovePermissionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_RemovePermissionResponse(arg) {
  if (!(arg instanceof groups_groups_pb.RemovePermissionResponse)) {
    throw new Error('Expected argument of type mruv.RemovePermissionResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_RemovePermissionResponse(buffer_arg) {
  return groups_groups_pb.RemovePermissionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_RemoveSubgroupRequest(arg) {
  if (!(arg instanceof groups_groups_pb.RemoveSubgroupRequest)) {
    throw new Error('Expected argument of type mruv.RemoveSubgroupRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_RemoveSubgroupRequest(buffer_arg) {
  return groups_groups_pb.RemoveSubgroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_RemoveSubgroupResponse(arg) {
  if (!(arg instanceof groups_groups_pb.RemoveSubgroupResponse)) {
    throw new Error('Expected argument of type mruv.RemoveSubgroupResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_RemoveSubgroupResponse(buffer_arg) {
  return groups_groups_pb.RemoveSubgroupResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_mruv_UpdateGroupRequest(arg) {
  if (!(arg instanceof groups_groups_pb.UpdateGroupRequest)) {
    throw new Error('Expected argument of type mruv.UpdateGroupRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_UpdateGroupRequest(buffer_arg) {
  return groups_groups_pb.UpdateGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_UpdateGroupResponse(arg) {
  if (!(arg instanceof groups_groups_pb.UpdateGroupResponse)) {
    throw new Error('Expected argument of type mruv.UpdateGroupResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_UpdateGroupResponse(buffer_arg) {
  return groups_groups_pb.UpdateGroupResponse.deserializeBinary(new Uint8Array(buffer_arg));
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


// The MruV groups service provides procedures for managing groups.
var MruVGroupsServiceService = exports.MruVGroupsServiceService = {
  // Create a group.
  createGroup: {
    path: '/mruv.MruVGroupsService/CreateGroup',
    requestStream: false,
    responseStream: false,
    requestType: groups_groups_pb.CreateGroupRequest,
    responseType: groups_groups_pb.CreateGroupResponse,
    requestSerialize: serialize_mruv_CreateGroupRequest,
    requestDeserialize: deserialize_mruv_CreateGroupRequest,
    responseSerialize: serialize_mruv_CreateGroupResponse,
    responseDeserialize: deserialize_mruv_CreateGroupResponse,
  },
  // Get a  group.
  getGroup: {
    path: '/mruv.MruVGroupsService/GetGroup',
    requestStream: false,
    responseStream: false,
    requestType: groups_groups_pb.GetGroupRequest,
    responseType: groups_groups_pb.GetGroupResponse,
    requestSerialize: serialize_mruv_GetGroupRequest,
    requestDeserialize: deserialize_mruv_GetGroupRequest,
    responseSerialize: serialize_mruv_GetGroupResponse,
    responseDeserialize: deserialize_mruv_GetGroupResponse,
  },
  // Update a group.
  updateGroup: {
    path: '/mruv.MruVGroupsService/UpdateGroup',
    requestStream: false,
    responseStream: false,
    requestType: groups_groups_pb.UpdateGroupRequest,
    responseType: groups_groups_pb.UpdateGroupResponse,
    requestSerialize: serialize_mruv_UpdateGroupRequest,
    requestDeserialize: deserialize_mruv_UpdateGroupRequest,
    responseSerialize: serialize_mruv_UpdateGroupResponse,
    responseDeserialize: deserialize_mruv_UpdateGroupResponse,
  },
  // Delete a group.
  deleteGroup: {
    path: '/mruv.MruVGroupsService/DeleteGroup',
    requestStream: false,
    responseStream: false,
    requestType: groups_groups_pb.DeleteGroupRequest,
    responseType: groups_groups_pb.DeleteGroupResponse,
    requestSerialize: serialize_mruv_DeleteGroupRequest,
    requestDeserialize: deserialize_mruv_DeleteGroupRequest,
    responseSerialize: serialize_mruv_DeleteGroupResponse,
    responseDeserialize: deserialize_mruv_DeleteGroupResponse,
  },
  // Get all groups.
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
  // Assign an owner. Group can have only one owner. Owner can be a player, a group or an account.
  assignOwner: {
    path: '/mruv.MruVGroupsService/AssignOwner',
    requestStream: false,
    responseStream: false,
    requestType: groups_groups_pb.AssignOwnerRequest,
    responseType: groups_groups_pb.AssignOwnerResponse,
    requestSerialize: serialize_mruv_AssignOwnerRequest,
    requestDeserialize: deserialize_mruv_AssignOwnerRequest,
    responseSerialize: serialize_mruv_AssignOwnerResponse,
    responseDeserialize: deserialize_mruv_AssignOwnerResponse,
  },
  // Get group owner.
  getOwner: {
    path: '/mruv.MruVGroupsService/GetOwner',
    requestStream: false,
    responseStream: false,
    requestType: groups_groups_pb.GetOwnerRequest,
    responseType: groups_groups_pb.GetOwnerResponse,
    requestSerialize: serialize_mruv_GetOwnerRequest,
    requestDeserialize: deserialize_mruv_GetOwnerRequest,
    responseSerialize: serialize_mruv_GetOwnerResponse,
    responseDeserialize: deserialize_mruv_GetOwnerResponse,
  },
  // Add a group member.
  addMember: {
    path: '/mruv.MruVGroupsService/AddMember',
    requestStream: false,
    responseStream: false,
    requestType: groups_groups_pb.AddMemberRequest,
    responseType: groups_groups_pb.AddMemberResponse,
    requestSerialize: serialize_mruv_AddMemberRequest,
    requestDeserialize: deserialize_mruv_AddMemberRequest,
    responseSerialize: serialize_mruv_AddMemberResponse,
    responseDeserialize: deserialize_mruv_AddMemberResponse,
  },
  // Get a group member.
  getMembers: {
    path: '/mruv.MruVGroupsService/GetMembers',
    requestStream: false,
    responseStream: false,
    requestType: groups_groups_pb.GetMembersRequest,
    responseType: groups_groups_pb.GetMembersResponse,
    requestSerialize: serialize_mruv_GetMembersRequest,
    requestDeserialize: deserialize_mruv_GetMembersRequest,
    responseSerialize: serialize_mruv_GetMembersResponse,
    responseDeserialize: deserialize_mruv_GetMembersResponse,
  },
  // Remove a group member.
  removeMember: {
    path: '/mruv.MruVGroupsService/RemoveMember',
    requestStream: false,
    responseStream: false,
    requestType: groups_groups_pb.RemoveMemberRequest,
    responseType: groups_groups_pb.RemoveMemberResponse,
    requestSerialize: serialize_mruv_RemoveMemberRequest,
    requestDeserialize: deserialize_mruv_RemoveMemberRequest,
    responseSerialize: serialize_mruv_RemoveMemberResponse,
    responseDeserialize: deserialize_mruv_RemoveMemberResponse,
  },
  // Add a permission to a group.
  addPermission: {
    path: '/mruv.MruVGroupsService/AddPermission',
    requestStream: false,
    responseStream: false,
    requestType: groups_groups_pb.AddPermissionRequest,
    responseType: groups_groups_pb.AddPermissionResponse,
    requestSerialize: serialize_mruv_AddPermissionRequest,
    requestDeserialize: deserialize_mruv_AddPermissionRequest,
    responseSerialize: serialize_mruv_AddPermissionResponse,
    responseDeserialize: deserialize_mruv_AddPermissionResponse,
  },
  // Get all group permissions.
  getPermissions: {
    path: '/mruv.MruVGroupsService/GetPermissions',
    requestStream: false,
    responseStream: false,
    requestType: groups_groups_pb.GetPermissionsRequest,
    responseType: groups_groups_pb.GetPermissionsResponse,
    requestSerialize: serialize_mruv_GetPermissionsRequest,
    requestDeserialize: deserialize_mruv_GetPermissionsRequest,
    responseSerialize: serialize_mruv_GetPermissionsResponse,
    responseDeserialize: deserialize_mruv_GetPermissionsResponse,
  },
  // Remove group permission.
  removePermission: {
    path: '/mruv.MruVGroupsService/RemovePermission',
    requestStream: false,
    responseStream: false,
    requestType: groups_groups_pb.RemovePermissionRequest,
    responseType: groups_groups_pb.RemovePermissionResponse,
    requestSerialize: serialize_mruv_RemovePermissionRequest,
    requestDeserialize: deserialize_mruv_RemovePermissionRequest,
    responseSerialize: serialize_mruv_RemovePermissionResponse,
    responseDeserialize: deserialize_mruv_RemovePermissionResponse,
  },
  // Add a subgroup to a group.
  addSubgroup: {
    path: '/mruv.MruVGroupsService/AddSubgroup',
    requestStream: false,
    responseStream: false,
    requestType: groups_groups_pb.AddSubgroupRequest,
    responseType: groups_groups_pb.AddSubgroupResponse,
    requestSerialize: serialize_mruv_AddSubgroupRequest,
    requestDeserialize: deserialize_mruv_AddSubgroupRequest,
    responseSerialize: serialize_mruv_AddSubgroupResponse,
    responseDeserialize: deserialize_mruv_AddSubgroupResponse,
  },
  // Get all subgroups.
  getSubgroups: {
    path: '/mruv.MruVGroupsService/GetSubgroups',
    requestStream: false,
    responseStream: false,
    requestType: groups_groups_pb.GetSubgroupsRequest,
    responseType: groups_groups_pb.GetSubgroupsResponse,
    requestSerialize: serialize_mruv_GetSubgroupsRequest,
    requestDeserialize: deserialize_mruv_GetSubgroupsRequest,
    responseSerialize: serialize_mruv_GetSubgroupsResponse,
    responseDeserialize: deserialize_mruv_GetSubgroupsResponse,
  },
  // Remove a subgroup from group.
  removeSubgroup: {
    path: '/mruv.MruVGroupsService/RemoveSubgroup',
    requestStream: false,
    responseStream: false,
    requestType: groups_groups_pb.RemoveSubgroupRequest,
    responseType: groups_groups_pb.RemoveSubgroupResponse,
    requestSerialize: serialize_mruv_RemoveSubgroupRequest,
    requestDeserialize: deserialize_mruv_RemoveSubgroupRequest,
    responseSerialize: serialize_mruv_RemoveSubgroupResponse,
    responseDeserialize: deserialize_mruv_RemoveSubgroupResponse,
  },
  // Check is member of a group is permitted to do specific action.
  isPermitted: {
    path: '/mruv.MruVGroupsService/IsPermitted',
    requestStream: false,
    responseStream: false,
    requestType: groups_groups_pb.IsPermittedRequest,
    responseType: groups_groups_pb.IsPermittedResponse,
    requestSerialize: serialize_mruv_IsPermittedRequest,
    requestDeserialize: deserialize_mruv_IsPermittedRequest,
    responseSerialize: serialize_mruv_IsPermittedResponse,
    responseDeserialize: deserialize_mruv_IsPermittedResponse,
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
