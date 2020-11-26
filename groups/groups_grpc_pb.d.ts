// GENERATED CODE -- DO NOT EDIT!

// package: mruv.groups
// file: groups/groups.proto

import * as groups_groups_pb from "../groups/groups_pb";
import * as common_health_pb from "../common/health_pb";
import * as grpc from "grpc";

interface IMruVGroupsServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createGroup: grpc.MethodDefinition<groups_groups_pb.CreateGroupRequest, groups_groups_pb.CreateGroupResponse>;
  getGroup: grpc.MethodDefinition<groups_groups_pb.GetGroupRequest, groups_groups_pb.GetGroupResponse>;
  updateGroup: grpc.MethodDefinition<groups_groups_pb.UpdateGroupRequest, groups_groups_pb.UpdateGroupResponse>;
  deleteGroup: grpc.MethodDefinition<groups_groups_pb.DeleteGroupRequest, groups_groups_pb.DeleteGroupResponse>;
  getGroups: grpc.MethodDefinition<groups_groups_pb.GetGroupsRequest, groups_groups_pb.GetGroupsResponse>;
  assignOwner: grpc.MethodDefinition<groups_groups_pb.AssignOwnerRequest, groups_groups_pb.AssignOwnerResponse>;
  getOwner: grpc.MethodDefinition<groups_groups_pb.GetOwnerRequest, groups_groups_pb.GetOwnerResponse>;
  addMember: grpc.MethodDefinition<groups_groups_pb.AddMemberRequest, groups_groups_pb.AddMemberResponse>;
  getMembers: grpc.MethodDefinition<groups_groups_pb.GetMembersRequest, groups_groups_pb.GetMembersResponse>;
  removeMember: grpc.MethodDefinition<groups_groups_pb.RemoveMemberRequest, groups_groups_pb.RemoveMemberResponse>;
  addPermission: grpc.MethodDefinition<groups_groups_pb.AddPermissionRequest, groups_groups_pb.AddPermissionResponse>;
  getPermissions: grpc.MethodDefinition<groups_groups_pb.GetPermissionsRequest, groups_groups_pb.GetPermissionsResponse>;
  removePermission: grpc.MethodDefinition<groups_groups_pb.RemovePermissionRequest, groups_groups_pb.RemovePermissionResponse>;
  addSubgroup: grpc.MethodDefinition<groups_groups_pb.AddSubgroupRequest, groups_groups_pb.AddSubgroupResponse>;
  getSubgroups: grpc.MethodDefinition<groups_groups_pb.GetSubgroupsRequest, groups_groups_pb.GetSubgroupsResponse>;
  removeSubgroup: grpc.MethodDefinition<groups_groups_pb.RemoveSubgroupRequest, groups_groups_pb.RemoveSubgroupResponse>;
  isPermitted: grpc.MethodDefinition<groups_groups_pb.IsPermittedRequest, groups_groups_pb.IsPermittedResponse>;
  getServiceStatus: grpc.MethodDefinition<common_health_pb.ServiceStatusRequest, common_health_pb.ServiceStatusResponse>;
  getServiceVersion: grpc.MethodDefinition<common_health_pb.VersionRequest, common_health_pb.VersionResponse>;
}

export const MruVGroupsServiceService: IMruVGroupsServiceService;

export class MruVGroupsServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  createGroup(argument: groups_groups_pb.CreateGroupRequest, callback: grpc.requestCallback<groups_groups_pb.CreateGroupResponse>): grpc.ClientUnaryCall;
  createGroup(argument: groups_groups_pb.CreateGroupRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<groups_groups_pb.CreateGroupResponse>): grpc.ClientUnaryCall;
  createGroup(argument: groups_groups_pb.CreateGroupRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<groups_groups_pb.CreateGroupResponse>): grpc.ClientUnaryCall;
  getGroup(argument: groups_groups_pb.GetGroupRequest, callback: grpc.requestCallback<groups_groups_pb.GetGroupResponse>): grpc.ClientUnaryCall;
  getGroup(argument: groups_groups_pb.GetGroupRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<groups_groups_pb.GetGroupResponse>): grpc.ClientUnaryCall;
  getGroup(argument: groups_groups_pb.GetGroupRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<groups_groups_pb.GetGroupResponse>): grpc.ClientUnaryCall;
  updateGroup(argument: groups_groups_pb.UpdateGroupRequest, callback: grpc.requestCallback<groups_groups_pb.UpdateGroupResponse>): grpc.ClientUnaryCall;
  updateGroup(argument: groups_groups_pb.UpdateGroupRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<groups_groups_pb.UpdateGroupResponse>): grpc.ClientUnaryCall;
  updateGroup(argument: groups_groups_pb.UpdateGroupRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<groups_groups_pb.UpdateGroupResponse>): grpc.ClientUnaryCall;
  deleteGroup(argument: groups_groups_pb.DeleteGroupRequest, callback: grpc.requestCallback<groups_groups_pb.DeleteGroupResponse>): grpc.ClientUnaryCall;
  deleteGroup(argument: groups_groups_pb.DeleteGroupRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<groups_groups_pb.DeleteGroupResponse>): grpc.ClientUnaryCall;
  deleteGroup(argument: groups_groups_pb.DeleteGroupRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<groups_groups_pb.DeleteGroupResponse>): grpc.ClientUnaryCall;
  getGroups(argument: groups_groups_pb.GetGroupsRequest, callback: grpc.requestCallback<groups_groups_pb.GetGroupsResponse>): grpc.ClientUnaryCall;
  getGroups(argument: groups_groups_pb.GetGroupsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<groups_groups_pb.GetGroupsResponse>): grpc.ClientUnaryCall;
  getGroups(argument: groups_groups_pb.GetGroupsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<groups_groups_pb.GetGroupsResponse>): grpc.ClientUnaryCall;
  assignOwner(argument: groups_groups_pb.AssignOwnerRequest, callback: grpc.requestCallback<groups_groups_pb.AssignOwnerResponse>): grpc.ClientUnaryCall;
  assignOwner(argument: groups_groups_pb.AssignOwnerRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<groups_groups_pb.AssignOwnerResponse>): grpc.ClientUnaryCall;
  assignOwner(argument: groups_groups_pb.AssignOwnerRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<groups_groups_pb.AssignOwnerResponse>): grpc.ClientUnaryCall;
  getOwner(argument: groups_groups_pb.GetOwnerRequest, callback: grpc.requestCallback<groups_groups_pb.GetOwnerResponse>): grpc.ClientUnaryCall;
  getOwner(argument: groups_groups_pb.GetOwnerRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<groups_groups_pb.GetOwnerResponse>): grpc.ClientUnaryCall;
  getOwner(argument: groups_groups_pb.GetOwnerRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<groups_groups_pb.GetOwnerResponse>): grpc.ClientUnaryCall;
  addMember(argument: groups_groups_pb.AddMemberRequest, callback: grpc.requestCallback<groups_groups_pb.AddMemberResponse>): grpc.ClientUnaryCall;
  addMember(argument: groups_groups_pb.AddMemberRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<groups_groups_pb.AddMemberResponse>): grpc.ClientUnaryCall;
  addMember(argument: groups_groups_pb.AddMemberRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<groups_groups_pb.AddMemberResponse>): grpc.ClientUnaryCall;
  getMembers(argument: groups_groups_pb.GetMembersRequest, callback: grpc.requestCallback<groups_groups_pb.GetMembersResponse>): grpc.ClientUnaryCall;
  getMembers(argument: groups_groups_pb.GetMembersRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<groups_groups_pb.GetMembersResponse>): grpc.ClientUnaryCall;
  getMembers(argument: groups_groups_pb.GetMembersRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<groups_groups_pb.GetMembersResponse>): grpc.ClientUnaryCall;
  removeMember(argument: groups_groups_pb.RemoveMemberRequest, callback: grpc.requestCallback<groups_groups_pb.RemoveMemberResponse>): grpc.ClientUnaryCall;
  removeMember(argument: groups_groups_pb.RemoveMemberRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<groups_groups_pb.RemoveMemberResponse>): grpc.ClientUnaryCall;
  removeMember(argument: groups_groups_pb.RemoveMemberRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<groups_groups_pb.RemoveMemberResponse>): grpc.ClientUnaryCall;
  addPermission(argument: groups_groups_pb.AddPermissionRequest, callback: grpc.requestCallback<groups_groups_pb.AddPermissionResponse>): grpc.ClientUnaryCall;
  addPermission(argument: groups_groups_pb.AddPermissionRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<groups_groups_pb.AddPermissionResponse>): grpc.ClientUnaryCall;
  addPermission(argument: groups_groups_pb.AddPermissionRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<groups_groups_pb.AddPermissionResponse>): grpc.ClientUnaryCall;
  getPermissions(argument: groups_groups_pb.GetPermissionsRequest, callback: grpc.requestCallback<groups_groups_pb.GetPermissionsResponse>): grpc.ClientUnaryCall;
  getPermissions(argument: groups_groups_pb.GetPermissionsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<groups_groups_pb.GetPermissionsResponse>): grpc.ClientUnaryCall;
  getPermissions(argument: groups_groups_pb.GetPermissionsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<groups_groups_pb.GetPermissionsResponse>): grpc.ClientUnaryCall;
  removePermission(argument: groups_groups_pb.RemovePermissionRequest, callback: grpc.requestCallback<groups_groups_pb.RemovePermissionResponse>): grpc.ClientUnaryCall;
  removePermission(argument: groups_groups_pb.RemovePermissionRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<groups_groups_pb.RemovePermissionResponse>): grpc.ClientUnaryCall;
  removePermission(argument: groups_groups_pb.RemovePermissionRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<groups_groups_pb.RemovePermissionResponse>): grpc.ClientUnaryCall;
  addSubgroup(argument: groups_groups_pb.AddSubgroupRequest, callback: grpc.requestCallback<groups_groups_pb.AddSubgroupResponse>): grpc.ClientUnaryCall;
  addSubgroup(argument: groups_groups_pb.AddSubgroupRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<groups_groups_pb.AddSubgroupResponse>): grpc.ClientUnaryCall;
  addSubgroup(argument: groups_groups_pb.AddSubgroupRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<groups_groups_pb.AddSubgroupResponse>): grpc.ClientUnaryCall;
  getSubgroups(argument: groups_groups_pb.GetSubgroupsRequest, callback: grpc.requestCallback<groups_groups_pb.GetSubgroupsResponse>): grpc.ClientUnaryCall;
  getSubgroups(argument: groups_groups_pb.GetSubgroupsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<groups_groups_pb.GetSubgroupsResponse>): grpc.ClientUnaryCall;
  getSubgroups(argument: groups_groups_pb.GetSubgroupsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<groups_groups_pb.GetSubgroupsResponse>): grpc.ClientUnaryCall;
  removeSubgroup(argument: groups_groups_pb.RemoveSubgroupRequest, callback: grpc.requestCallback<groups_groups_pb.RemoveSubgroupResponse>): grpc.ClientUnaryCall;
  removeSubgroup(argument: groups_groups_pb.RemoveSubgroupRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<groups_groups_pb.RemoveSubgroupResponse>): grpc.ClientUnaryCall;
  removeSubgroup(argument: groups_groups_pb.RemoveSubgroupRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<groups_groups_pb.RemoveSubgroupResponse>): grpc.ClientUnaryCall;
  isPermitted(argument: groups_groups_pb.IsPermittedRequest, callback: grpc.requestCallback<groups_groups_pb.IsPermittedResponse>): grpc.ClientUnaryCall;
  isPermitted(argument: groups_groups_pb.IsPermittedRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<groups_groups_pb.IsPermittedResponse>): grpc.ClientUnaryCall;
  isPermitted(argument: groups_groups_pb.IsPermittedRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<groups_groups_pb.IsPermittedResponse>): grpc.ClientUnaryCall;
  getServiceStatus(argument: common_health_pb.ServiceStatusRequest, callback: grpc.requestCallback<common_health_pb.ServiceStatusResponse>): grpc.ClientUnaryCall;
  getServiceStatus(argument: common_health_pb.ServiceStatusRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<common_health_pb.ServiceStatusResponse>): grpc.ClientUnaryCall;
  getServiceStatus(argument: common_health_pb.ServiceStatusRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<common_health_pb.ServiceStatusResponse>): grpc.ClientUnaryCall;
  getServiceVersion(argument: common_health_pb.VersionRequest, callback: grpc.requestCallback<common_health_pb.VersionResponse>): grpc.ClientUnaryCall;
  getServiceVersion(argument: common_health_pb.VersionRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<common_health_pb.VersionResponse>): grpc.ClientUnaryCall;
  getServiceVersion(argument: common_health_pb.VersionRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<common_health_pb.VersionResponse>): grpc.ClientUnaryCall;
}
