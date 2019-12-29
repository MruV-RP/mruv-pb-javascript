// GENERATED CODE -- DO NOT EDIT!

// package: google.monitoring.v3
// file: google/monitoring/v3/group_service.proto

import * as google_monitoring_v3_group_service_pb from "../../../google/monitoring/v3/group_service_pb";
import * as google_monitoring_v3_group_pb from "../../../google/monitoring/v3/group_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "grpc";

interface IGroupServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  listGroups: grpc.MethodDefinition<google_monitoring_v3_group_service_pb.ListGroupsRequest, google_monitoring_v3_group_service_pb.ListGroupsResponse>;
  getGroup: grpc.MethodDefinition<google_monitoring_v3_group_service_pb.GetGroupRequest, google_monitoring_v3_group_pb.Group>;
  createGroup: grpc.MethodDefinition<google_monitoring_v3_group_service_pb.CreateGroupRequest, google_monitoring_v3_group_pb.Group>;
  updateGroup: grpc.MethodDefinition<google_monitoring_v3_group_service_pb.UpdateGroupRequest, google_monitoring_v3_group_pb.Group>;
  deleteGroup: grpc.MethodDefinition<google_monitoring_v3_group_service_pb.DeleteGroupRequest, google_protobuf_empty_pb.Empty>;
  listGroupMembers: grpc.MethodDefinition<google_monitoring_v3_group_service_pb.ListGroupMembersRequest, google_monitoring_v3_group_service_pb.ListGroupMembersResponse>;
}

export const GroupServiceService: IGroupServiceService;

export class GroupServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  listGroups(argument: google_monitoring_v3_group_service_pb.ListGroupsRequest, callback: grpc.requestCallback<google_monitoring_v3_group_service_pb.ListGroupsResponse>): grpc.ClientUnaryCall;
  listGroups(argument: google_monitoring_v3_group_service_pb.ListGroupsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_monitoring_v3_group_service_pb.ListGroupsResponse>): grpc.ClientUnaryCall;
  listGroups(argument: google_monitoring_v3_group_service_pb.ListGroupsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_monitoring_v3_group_service_pb.ListGroupsResponse>): grpc.ClientUnaryCall;
  getGroup(argument: google_monitoring_v3_group_service_pb.GetGroupRequest, callback: grpc.requestCallback<google_monitoring_v3_group_pb.Group>): grpc.ClientUnaryCall;
  getGroup(argument: google_monitoring_v3_group_service_pb.GetGroupRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_monitoring_v3_group_pb.Group>): grpc.ClientUnaryCall;
  getGroup(argument: google_monitoring_v3_group_service_pb.GetGroupRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_monitoring_v3_group_pb.Group>): grpc.ClientUnaryCall;
  createGroup(argument: google_monitoring_v3_group_service_pb.CreateGroupRequest, callback: grpc.requestCallback<google_monitoring_v3_group_pb.Group>): grpc.ClientUnaryCall;
  createGroup(argument: google_monitoring_v3_group_service_pb.CreateGroupRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_monitoring_v3_group_pb.Group>): grpc.ClientUnaryCall;
  createGroup(argument: google_monitoring_v3_group_service_pb.CreateGroupRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_monitoring_v3_group_pb.Group>): grpc.ClientUnaryCall;
  updateGroup(argument: google_monitoring_v3_group_service_pb.UpdateGroupRequest, callback: grpc.requestCallback<google_monitoring_v3_group_pb.Group>): grpc.ClientUnaryCall;
  updateGroup(argument: google_monitoring_v3_group_service_pb.UpdateGroupRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_monitoring_v3_group_pb.Group>): grpc.ClientUnaryCall;
  updateGroup(argument: google_monitoring_v3_group_service_pb.UpdateGroupRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_monitoring_v3_group_pb.Group>): grpc.ClientUnaryCall;
  deleteGroup(argument: google_monitoring_v3_group_service_pb.DeleteGroupRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteGroup(argument: google_monitoring_v3_group_service_pb.DeleteGroupRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteGroup(argument: google_monitoring_v3_group_service_pb.DeleteGroupRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  listGroupMembers(argument: google_monitoring_v3_group_service_pb.ListGroupMembersRequest, callback: grpc.requestCallback<google_monitoring_v3_group_service_pb.ListGroupMembersResponse>): grpc.ClientUnaryCall;
  listGroupMembers(argument: google_monitoring_v3_group_service_pb.ListGroupMembersRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_monitoring_v3_group_service_pb.ListGroupMembersResponse>): grpc.ClientUnaryCall;
  listGroupMembers(argument: google_monitoring_v3_group_service_pb.ListGroupMembersRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_monitoring_v3_group_service_pb.ListGroupMembersResponse>): grpc.ClientUnaryCall;
}
