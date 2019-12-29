// GENERATED CODE -- DO NOT EDIT!

// package: google.cloud.support.v1alpha1
// file: google/cloud/support/v1alpha1/cloud_support.proto

import * as google_cloud_support_v1alpha1_cloud_support_pb from "../../../../google/cloud/support/v1alpha1/cloud_support_pb";
import * as google_cloud_support_common_pb from "../../../../google/cloud/support/common_pb";
import * as grpc from "grpc";

interface ICloudSupportService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getSupportAccount: grpc.MethodDefinition<google_cloud_support_v1alpha1_cloud_support_pb.GetSupportAccountRequest, google_cloud_support_common_pb.SupportAccount>;
  listSupportAccounts: grpc.MethodDefinition<google_cloud_support_v1alpha1_cloud_support_pb.ListSupportAccountsRequest, google_cloud_support_v1alpha1_cloud_support_pb.ListSupportAccountsResponse>;
  getCase: grpc.MethodDefinition<google_cloud_support_v1alpha1_cloud_support_pb.GetCaseRequest, google_cloud_support_common_pb.Case>;
  listCases: grpc.MethodDefinition<google_cloud_support_v1alpha1_cloud_support_pb.ListCasesRequest, google_cloud_support_v1alpha1_cloud_support_pb.ListCasesResponse>;
  listComments: grpc.MethodDefinition<google_cloud_support_v1alpha1_cloud_support_pb.ListCommentsRequest, google_cloud_support_v1alpha1_cloud_support_pb.ListCommentsResponse>;
  createCase: grpc.MethodDefinition<google_cloud_support_v1alpha1_cloud_support_pb.CreateCaseRequest, google_cloud_support_common_pb.Case>;
  updateCase: grpc.MethodDefinition<google_cloud_support_v1alpha1_cloud_support_pb.UpdateCaseRequest, google_cloud_support_common_pb.Case>;
  createComment: grpc.MethodDefinition<google_cloud_support_v1alpha1_cloud_support_pb.CreateCommentRequest, google_cloud_support_common_pb.Comment>;
  getIssueTaxonomy: grpc.MethodDefinition<google_cloud_support_v1alpha1_cloud_support_pb.GetIssueTaxonomyRequest, google_cloud_support_common_pb.IssueTaxonomy>;
}

export const CloudSupportService: ICloudSupportService;

export class CloudSupportClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getSupportAccount(argument: google_cloud_support_v1alpha1_cloud_support_pb.GetSupportAccountRequest, callback: grpc.requestCallback<google_cloud_support_common_pb.SupportAccount>): grpc.ClientUnaryCall;
  getSupportAccount(argument: google_cloud_support_v1alpha1_cloud_support_pb.GetSupportAccountRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_support_common_pb.SupportAccount>): grpc.ClientUnaryCall;
  getSupportAccount(argument: google_cloud_support_v1alpha1_cloud_support_pb.GetSupportAccountRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_support_common_pb.SupportAccount>): grpc.ClientUnaryCall;
  listSupportAccounts(argument: google_cloud_support_v1alpha1_cloud_support_pb.ListSupportAccountsRequest, callback: grpc.requestCallback<google_cloud_support_v1alpha1_cloud_support_pb.ListSupportAccountsResponse>): grpc.ClientUnaryCall;
  listSupportAccounts(argument: google_cloud_support_v1alpha1_cloud_support_pb.ListSupportAccountsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_support_v1alpha1_cloud_support_pb.ListSupportAccountsResponse>): grpc.ClientUnaryCall;
  listSupportAccounts(argument: google_cloud_support_v1alpha1_cloud_support_pb.ListSupportAccountsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_support_v1alpha1_cloud_support_pb.ListSupportAccountsResponse>): grpc.ClientUnaryCall;
  getCase(argument: google_cloud_support_v1alpha1_cloud_support_pb.GetCaseRequest, callback: grpc.requestCallback<google_cloud_support_common_pb.Case>): grpc.ClientUnaryCall;
  getCase(argument: google_cloud_support_v1alpha1_cloud_support_pb.GetCaseRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_support_common_pb.Case>): grpc.ClientUnaryCall;
  getCase(argument: google_cloud_support_v1alpha1_cloud_support_pb.GetCaseRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_support_common_pb.Case>): grpc.ClientUnaryCall;
  listCases(argument: google_cloud_support_v1alpha1_cloud_support_pb.ListCasesRequest, callback: grpc.requestCallback<google_cloud_support_v1alpha1_cloud_support_pb.ListCasesResponse>): grpc.ClientUnaryCall;
  listCases(argument: google_cloud_support_v1alpha1_cloud_support_pb.ListCasesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_support_v1alpha1_cloud_support_pb.ListCasesResponse>): grpc.ClientUnaryCall;
  listCases(argument: google_cloud_support_v1alpha1_cloud_support_pb.ListCasesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_support_v1alpha1_cloud_support_pb.ListCasesResponse>): grpc.ClientUnaryCall;
  listComments(argument: google_cloud_support_v1alpha1_cloud_support_pb.ListCommentsRequest, callback: grpc.requestCallback<google_cloud_support_v1alpha1_cloud_support_pb.ListCommentsResponse>): grpc.ClientUnaryCall;
  listComments(argument: google_cloud_support_v1alpha1_cloud_support_pb.ListCommentsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_support_v1alpha1_cloud_support_pb.ListCommentsResponse>): grpc.ClientUnaryCall;
  listComments(argument: google_cloud_support_v1alpha1_cloud_support_pb.ListCommentsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_support_v1alpha1_cloud_support_pb.ListCommentsResponse>): grpc.ClientUnaryCall;
  createCase(argument: google_cloud_support_v1alpha1_cloud_support_pb.CreateCaseRequest, callback: grpc.requestCallback<google_cloud_support_common_pb.Case>): grpc.ClientUnaryCall;
  createCase(argument: google_cloud_support_v1alpha1_cloud_support_pb.CreateCaseRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_support_common_pb.Case>): grpc.ClientUnaryCall;
  createCase(argument: google_cloud_support_v1alpha1_cloud_support_pb.CreateCaseRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_support_common_pb.Case>): grpc.ClientUnaryCall;
  updateCase(argument: google_cloud_support_v1alpha1_cloud_support_pb.UpdateCaseRequest, callback: grpc.requestCallback<google_cloud_support_common_pb.Case>): grpc.ClientUnaryCall;
  updateCase(argument: google_cloud_support_v1alpha1_cloud_support_pb.UpdateCaseRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_support_common_pb.Case>): grpc.ClientUnaryCall;
  updateCase(argument: google_cloud_support_v1alpha1_cloud_support_pb.UpdateCaseRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_support_common_pb.Case>): grpc.ClientUnaryCall;
  createComment(argument: google_cloud_support_v1alpha1_cloud_support_pb.CreateCommentRequest, callback: grpc.requestCallback<google_cloud_support_common_pb.Comment>): grpc.ClientUnaryCall;
  createComment(argument: google_cloud_support_v1alpha1_cloud_support_pb.CreateCommentRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_support_common_pb.Comment>): grpc.ClientUnaryCall;
  createComment(argument: google_cloud_support_v1alpha1_cloud_support_pb.CreateCommentRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_support_common_pb.Comment>): grpc.ClientUnaryCall;
  getIssueTaxonomy(argument: google_cloud_support_v1alpha1_cloud_support_pb.GetIssueTaxonomyRequest, callback: grpc.requestCallback<google_cloud_support_common_pb.IssueTaxonomy>): grpc.ClientUnaryCall;
  getIssueTaxonomy(argument: google_cloud_support_v1alpha1_cloud_support_pb.GetIssueTaxonomyRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_support_common_pb.IssueTaxonomy>): grpc.ClientUnaryCall;
  getIssueTaxonomy(argument: google_cloud_support_v1alpha1_cloud_support_pb.GetIssueTaxonomyRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_support_common_pb.IssueTaxonomy>): grpc.ClientUnaryCall;
}
