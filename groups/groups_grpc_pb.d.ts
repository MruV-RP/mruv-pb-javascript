// GENERATED CODE -- DO NOT EDIT!

// package: mruv
// file: groups/groups.proto

import * as groups_groups_pb from "../groups/groups_pb";
import * as common_health_pb from "../common/health_pb";
import * as groups_groups_model_pb from "../groups/groups_model_pb";
import * as grpc from "grpc";

interface IMruVGroupsServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createGroup: grpc.MethodDefinition<groups_groups_model_pb.Group, groups_groups_model_pb.GroupID>;
  getGroup: grpc.MethodDefinition<groups_groups_model_pb.GroupID, groups_groups_model_pb.Group>;
  updateGroup: grpc.MethodDefinition<groups_groups_model_pb.Group, groups_groups_model_pb.GroupID>;
  deleteGroup: grpc.MethodDefinition<groups_groups_model_pb.GroupID, groups_groups_model_pb.GroupID>;
  getGroups: grpc.MethodDefinition<groups_groups_pb.GetGroupsRequest, groups_groups_pb.GetGroupsResponse>;
  getServiceStatus: grpc.MethodDefinition<common_health_pb.ServiceStatusRequest, common_health_pb.ServiceStatusResponse>;
  getServiceVersion: grpc.MethodDefinition<common_health_pb.VersionRequest, common_health_pb.VersionResponse>;
}

export const MruVGroupsServiceService: IMruVGroupsServiceService;

export class MruVGroupsServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  createGroup(argument: groups_groups_model_pb.Group, callback: grpc.requestCallback<groups_groups_model_pb.GroupID>): grpc.ClientUnaryCall;
  createGroup(argument: groups_groups_model_pb.Group, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<groups_groups_model_pb.GroupID>): grpc.ClientUnaryCall;
  createGroup(argument: groups_groups_model_pb.Group, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<groups_groups_model_pb.GroupID>): grpc.ClientUnaryCall;
  getGroup(argument: groups_groups_model_pb.GroupID, callback: grpc.requestCallback<groups_groups_model_pb.Group>): grpc.ClientUnaryCall;
  getGroup(argument: groups_groups_model_pb.GroupID, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<groups_groups_model_pb.Group>): grpc.ClientUnaryCall;
  getGroup(argument: groups_groups_model_pb.GroupID, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<groups_groups_model_pb.Group>): grpc.ClientUnaryCall;
  updateGroup(argument: groups_groups_model_pb.Group, callback: grpc.requestCallback<groups_groups_model_pb.GroupID>): grpc.ClientUnaryCall;
  updateGroup(argument: groups_groups_model_pb.Group, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<groups_groups_model_pb.GroupID>): grpc.ClientUnaryCall;
  updateGroup(argument: groups_groups_model_pb.Group, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<groups_groups_model_pb.GroupID>): grpc.ClientUnaryCall;
  deleteGroup(argument: groups_groups_model_pb.GroupID, callback: grpc.requestCallback<groups_groups_model_pb.GroupID>): grpc.ClientUnaryCall;
  deleteGroup(argument: groups_groups_model_pb.GroupID, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<groups_groups_model_pb.GroupID>): grpc.ClientUnaryCall;
  deleteGroup(argument: groups_groups_model_pb.GroupID, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<groups_groups_model_pb.GroupID>): grpc.ClientUnaryCall;
  getGroups(argument: groups_groups_pb.GetGroupsRequest, callback: grpc.requestCallback<groups_groups_pb.GetGroupsResponse>): grpc.ClientUnaryCall;
  getGroups(argument: groups_groups_pb.GetGroupsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<groups_groups_pb.GetGroupsResponse>): grpc.ClientUnaryCall;
  getGroups(argument: groups_groups_pb.GetGroupsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<groups_groups_pb.GetGroupsResponse>): grpc.ClientUnaryCall;
  getServiceStatus(argument: common_health_pb.ServiceStatusRequest, callback: grpc.requestCallback<common_health_pb.ServiceStatusResponse>): grpc.ClientUnaryCall;
  getServiceStatus(argument: common_health_pb.ServiceStatusRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<common_health_pb.ServiceStatusResponse>): grpc.ClientUnaryCall;
  getServiceStatus(argument: common_health_pb.ServiceStatusRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<common_health_pb.ServiceStatusResponse>): grpc.ClientUnaryCall;
  getServiceVersion(argument: common_health_pb.VersionRequest, callback: grpc.requestCallback<common_health_pb.VersionResponse>): grpc.ClientUnaryCall;
  getServiceVersion(argument: common_health_pb.VersionRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<common_health_pb.VersionResponse>): grpc.ClientUnaryCall;
  getServiceVersion(argument: common_health_pb.VersionRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<common_health_pb.VersionResponse>): grpc.ClientUnaryCall;
}
