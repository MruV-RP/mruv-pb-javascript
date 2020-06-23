// GENERATED CODE -- DO NOT EDIT!

// package: mruv.organizations
// file: organizations/organizations.proto

import * as organizations_organizations_pb from "../organizations/organizations_pb";
import * as grpc from "grpc";

interface IMruVOrganizationsServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createOrganization: grpc.MethodDefinition<organizations_organizations_pb.CreateOrganizationRequest, organizations_organizations_pb.CreateOrganizationResponse>;
  getOrganization: grpc.MethodDefinition<organizations_organizations_pb.GetOrganizationRequest, organizations_organizations_pb.GetOrganizationResponse>;
  updateOrganization: grpc.MethodDefinition<organizations_organizations_pb.UpdateOrganizationRequest, organizations_organizations_pb.UpdateOrganizationResponse>;
  deleteOrganization: grpc.MethodDefinition<organizations_organizations_pb.DeleteOrganizationRequest, organizations_organizations_pb.DeleteOrganizationResponse>;
  assignLeader: grpc.MethodDefinition<organizations_organizations_pb.AssignLeaderRequest, organizations_organizations_pb.AssignLeaderResponse>;
  unassignLeader: grpc.MethodDefinition<organizations_organizations_pb.UnassignLeaderRequest, organizations_organizations_pb.UnassignLeaderResponse>;
}

export const MruVOrganizationsServiceService: IMruVOrganizationsServiceService;

export class MruVOrganizationsServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  createOrganization(argument: organizations_organizations_pb.CreateOrganizationRequest, callback: grpc.requestCallback<organizations_organizations_pb.CreateOrganizationResponse>): grpc.ClientUnaryCall;
  createOrganization(argument: organizations_organizations_pb.CreateOrganizationRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<organizations_organizations_pb.CreateOrganizationResponse>): grpc.ClientUnaryCall;
  createOrganization(argument: organizations_organizations_pb.CreateOrganizationRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<organizations_organizations_pb.CreateOrganizationResponse>): grpc.ClientUnaryCall;
  getOrganization(argument: organizations_organizations_pb.GetOrganizationRequest, callback: grpc.requestCallback<organizations_organizations_pb.GetOrganizationResponse>): grpc.ClientUnaryCall;
  getOrganization(argument: organizations_organizations_pb.GetOrganizationRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<organizations_organizations_pb.GetOrganizationResponse>): grpc.ClientUnaryCall;
  getOrganization(argument: organizations_organizations_pb.GetOrganizationRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<organizations_organizations_pb.GetOrganizationResponse>): grpc.ClientUnaryCall;
  updateOrganization(argument: organizations_organizations_pb.UpdateOrganizationRequest, callback: grpc.requestCallback<organizations_organizations_pb.UpdateOrganizationResponse>): grpc.ClientUnaryCall;
  updateOrganization(argument: organizations_organizations_pb.UpdateOrganizationRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<organizations_organizations_pb.UpdateOrganizationResponse>): grpc.ClientUnaryCall;
  updateOrganization(argument: organizations_organizations_pb.UpdateOrganizationRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<organizations_organizations_pb.UpdateOrganizationResponse>): grpc.ClientUnaryCall;
  deleteOrganization(argument: organizations_organizations_pb.DeleteOrganizationRequest, callback: grpc.requestCallback<organizations_organizations_pb.DeleteOrganizationResponse>): grpc.ClientUnaryCall;
  deleteOrganization(argument: organizations_organizations_pb.DeleteOrganizationRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<organizations_organizations_pb.DeleteOrganizationResponse>): grpc.ClientUnaryCall;
  deleteOrganization(argument: organizations_organizations_pb.DeleteOrganizationRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<organizations_organizations_pb.DeleteOrganizationResponse>): grpc.ClientUnaryCall;
  assignLeader(argument: organizations_organizations_pb.AssignLeaderRequest, callback: grpc.requestCallback<organizations_organizations_pb.AssignLeaderResponse>): grpc.ClientUnaryCall;
  assignLeader(argument: organizations_organizations_pb.AssignLeaderRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<organizations_organizations_pb.AssignLeaderResponse>): grpc.ClientUnaryCall;
  assignLeader(argument: organizations_organizations_pb.AssignLeaderRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<organizations_organizations_pb.AssignLeaderResponse>): grpc.ClientUnaryCall;
  unassignLeader(argument: organizations_organizations_pb.UnassignLeaderRequest, callback: grpc.requestCallback<organizations_organizations_pb.UnassignLeaderResponse>): grpc.ClientUnaryCall;
  unassignLeader(argument: organizations_organizations_pb.UnassignLeaderRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<organizations_organizations_pb.UnassignLeaderResponse>): grpc.ClientUnaryCall;
  unassignLeader(argument: organizations_organizations_pb.UnassignLeaderRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<organizations_organizations_pb.UnassignLeaderResponse>): grpc.ClientUnaryCall;
}
