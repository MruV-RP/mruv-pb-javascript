// GENERATED CODE -- DO NOT EDIT!

// package: google.cloud.talent.v4beta1
// file: google/cloud/talent/v4beta1/tenant_service.proto

import * as google_cloud_talent_v4beta1_tenant_service_pb from "../../../../google/cloud/talent/v4beta1/tenant_service_pb";
import * as google_cloud_talent_v4beta1_tenant_pb from "../../../../google/cloud/talent/v4beta1/tenant_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "grpc";

interface ITenantServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createTenant: grpc.MethodDefinition<google_cloud_talent_v4beta1_tenant_service_pb.CreateTenantRequest, google_cloud_talent_v4beta1_tenant_pb.Tenant>;
  getTenant: grpc.MethodDefinition<google_cloud_talent_v4beta1_tenant_service_pb.GetTenantRequest, google_cloud_talent_v4beta1_tenant_pb.Tenant>;
  updateTenant: grpc.MethodDefinition<google_cloud_talent_v4beta1_tenant_service_pb.UpdateTenantRequest, google_cloud_talent_v4beta1_tenant_pb.Tenant>;
  deleteTenant: grpc.MethodDefinition<google_cloud_talent_v4beta1_tenant_service_pb.DeleteTenantRequest, google_protobuf_empty_pb.Empty>;
  listTenants: grpc.MethodDefinition<google_cloud_talent_v4beta1_tenant_service_pb.ListTenantsRequest, google_cloud_talent_v4beta1_tenant_service_pb.ListTenantsResponse>;
}

export const TenantServiceService: ITenantServiceService;

export class TenantServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  createTenant(argument: google_cloud_talent_v4beta1_tenant_service_pb.CreateTenantRequest, callback: grpc.requestCallback<google_cloud_talent_v4beta1_tenant_pb.Tenant>): grpc.ClientUnaryCall;
  createTenant(argument: google_cloud_talent_v4beta1_tenant_service_pb.CreateTenantRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_talent_v4beta1_tenant_pb.Tenant>): grpc.ClientUnaryCall;
  createTenant(argument: google_cloud_talent_v4beta1_tenant_service_pb.CreateTenantRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_talent_v4beta1_tenant_pb.Tenant>): grpc.ClientUnaryCall;
  getTenant(argument: google_cloud_talent_v4beta1_tenant_service_pb.GetTenantRequest, callback: grpc.requestCallback<google_cloud_talent_v4beta1_tenant_pb.Tenant>): grpc.ClientUnaryCall;
  getTenant(argument: google_cloud_talent_v4beta1_tenant_service_pb.GetTenantRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_talent_v4beta1_tenant_pb.Tenant>): grpc.ClientUnaryCall;
  getTenant(argument: google_cloud_talent_v4beta1_tenant_service_pb.GetTenantRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_talent_v4beta1_tenant_pb.Tenant>): grpc.ClientUnaryCall;
  updateTenant(argument: google_cloud_talent_v4beta1_tenant_service_pb.UpdateTenantRequest, callback: grpc.requestCallback<google_cloud_talent_v4beta1_tenant_pb.Tenant>): grpc.ClientUnaryCall;
  updateTenant(argument: google_cloud_talent_v4beta1_tenant_service_pb.UpdateTenantRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_talent_v4beta1_tenant_pb.Tenant>): grpc.ClientUnaryCall;
  updateTenant(argument: google_cloud_talent_v4beta1_tenant_service_pb.UpdateTenantRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_talent_v4beta1_tenant_pb.Tenant>): grpc.ClientUnaryCall;
  deleteTenant(argument: google_cloud_talent_v4beta1_tenant_service_pb.DeleteTenantRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteTenant(argument: google_cloud_talent_v4beta1_tenant_service_pb.DeleteTenantRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteTenant(argument: google_cloud_talent_v4beta1_tenant_service_pb.DeleteTenantRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  listTenants(argument: google_cloud_talent_v4beta1_tenant_service_pb.ListTenantsRequest, callback: grpc.requestCallback<google_cloud_talent_v4beta1_tenant_service_pb.ListTenantsResponse>): grpc.ClientUnaryCall;
  listTenants(argument: google_cloud_talent_v4beta1_tenant_service_pb.ListTenantsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_talent_v4beta1_tenant_service_pb.ListTenantsResponse>): grpc.ClientUnaryCall;
  listTenants(argument: google_cloud_talent_v4beta1_tenant_service_pb.ListTenantsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_talent_v4beta1_tenant_service_pb.ListTenantsResponse>): grpc.ClientUnaryCall;
}
