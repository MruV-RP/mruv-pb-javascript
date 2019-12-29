// GENERATED CODE -- DO NOT EDIT!

// package: google.cloud.billing.v1
// file: google/cloud/billing/v1/cloud_billing.proto

import * as google_cloud_billing_v1_cloud_billing_pb from "../../../../google/cloud/billing/v1/cloud_billing_pb";
import * as grpc from "grpc";

interface ICloudBillingService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getBillingAccount: grpc.MethodDefinition<google_cloud_billing_v1_cloud_billing_pb.GetBillingAccountRequest, google_cloud_billing_v1_cloud_billing_pb.BillingAccount>;
  listBillingAccounts: grpc.MethodDefinition<google_cloud_billing_v1_cloud_billing_pb.ListBillingAccountsRequest, google_cloud_billing_v1_cloud_billing_pb.ListBillingAccountsResponse>;
  listProjectBillingInfo: grpc.MethodDefinition<google_cloud_billing_v1_cloud_billing_pb.ListProjectBillingInfoRequest, google_cloud_billing_v1_cloud_billing_pb.ListProjectBillingInfoResponse>;
  getProjectBillingInfo: grpc.MethodDefinition<google_cloud_billing_v1_cloud_billing_pb.GetProjectBillingInfoRequest, google_cloud_billing_v1_cloud_billing_pb.ProjectBillingInfo>;
  updateProjectBillingInfo: grpc.MethodDefinition<google_cloud_billing_v1_cloud_billing_pb.UpdateProjectBillingInfoRequest, google_cloud_billing_v1_cloud_billing_pb.ProjectBillingInfo>;
}

export const CloudBillingService: ICloudBillingService;

export class CloudBillingClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getBillingAccount(argument: google_cloud_billing_v1_cloud_billing_pb.GetBillingAccountRequest, callback: grpc.requestCallback<google_cloud_billing_v1_cloud_billing_pb.BillingAccount>): grpc.ClientUnaryCall;
  getBillingAccount(argument: google_cloud_billing_v1_cloud_billing_pb.GetBillingAccountRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_billing_v1_cloud_billing_pb.BillingAccount>): grpc.ClientUnaryCall;
  getBillingAccount(argument: google_cloud_billing_v1_cloud_billing_pb.GetBillingAccountRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_billing_v1_cloud_billing_pb.BillingAccount>): grpc.ClientUnaryCall;
  listBillingAccounts(argument: google_cloud_billing_v1_cloud_billing_pb.ListBillingAccountsRequest, callback: grpc.requestCallback<google_cloud_billing_v1_cloud_billing_pb.ListBillingAccountsResponse>): grpc.ClientUnaryCall;
  listBillingAccounts(argument: google_cloud_billing_v1_cloud_billing_pb.ListBillingAccountsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_billing_v1_cloud_billing_pb.ListBillingAccountsResponse>): grpc.ClientUnaryCall;
  listBillingAccounts(argument: google_cloud_billing_v1_cloud_billing_pb.ListBillingAccountsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_billing_v1_cloud_billing_pb.ListBillingAccountsResponse>): grpc.ClientUnaryCall;
  listProjectBillingInfo(argument: google_cloud_billing_v1_cloud_billing_pb.ListProjectBillingInfoRequest, callback: grpc.requestCallback<google_cloud_billing_v1_cloud_billing_pb.ListProjectBillingInfoResponse>): grpc.ClientUnaryCall;
  listProjectBillingInfo(argument: google_cloud_billing_v1_cloud_billing_pb.ListProjectBillingInfoRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_billing_v1_cloud_billing_pb.ListProjectBillingInfoResponse>): grpc.ClientUnaryCall;
  listProjectBillingInfo(argument: google_cloud_billing_v1_cloud_billing_pb.ListProjectBillingInfoRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_billing_v1_cloud_billing_pb.ListProjectBillingInfoResponse>): grpc.ClientUnaryCall;
  getProjectBillingInfo(argument: google_cloud_billing_v1_cloud_billing_pb.GetProjectBillingInfoRequest, callback: grpc.requestCallback<google_cloud_billing_v1_cloud_billing_pb.ProjectBillingInfo>): grpc.ClientUnaryCall;
  getProjectBillingInfo(argument: google_cloud_billing_v1_cloud_billing_pb.GetProjectBillingInfoRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_billing_v1_cloud_billing_pb.ProjectBillingInfo>): grpc.ClientUnaryCall;
  getProjectBillingInfo(argument: google_cloud_billing_v1_cloud_billing_pb.GetProjectBillingInfoRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_billing_v1_cloud_billing_pb.ProjectBillingInfo>): grpc.ClientUnaryCall;
  updateProjectBillingInfo(argument: google_cloud_billing_v1_cloud_billing_pb.UpdateProjectBillingInfoRequest, callback: grpc.requestCallback<google_cloud_billing_v1_cloud_billing_pb.ProjectBillingInfo>): grpc.ClientUnaryCall;
  updateProjectBillingInfo(argument: google_cloud_billing_v1_cloud_billing_pb.UpdateProjectBillingInfoRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_billing_v1_cloud_billing_pb.ProjectBillingInfo>): grpc.ClientUnaryCall;
  updateProjectBillingInfo(argument: google_cloud_billing_v1_cloud_billing_pb.UpdateProjectBillingInfoRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_billing_v1_cloud_billing_pb.ProjectBillingInfo>): grpc.ClientUnaryCall;
}
