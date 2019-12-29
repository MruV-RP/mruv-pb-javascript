// GENERATED CODE -- DO NOT EDIT!

// package: google.devtools.sourcerepo.v1
// file: google/devtools/sourcerepo/v1/sourcerepo.proto

import * as google_devtools_sourcerepo_v1_sourcerepo_pb from "../../../../google/devtools/sourcerepo/v1/sourcerepo_pb";
import * as google_iam_v1_iam_policy_pb from "../../../../google/iam/v1/iam_policy_pb";
import * as google_iam_v1_policy_pb from "../../../../google/iam/v1/policy_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "grpc";

interface ISourceRepoService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  listRepos: grpc.MethodDefinition<google_devtools_sourcerepo_v1_sourcerepo_pb.ListReposRequest, google_devtools_sourcerepo_v1_sourcerepo_pb.ListReposResponse>;
  getRepo: grpc.MethodDefinition<google_devtools_sourcerepo_v1_sourcerepo_pb.GetRepoRequest, google_devtools_sourcerepo_v1_sourcerepo_pb.Repo>;
  createRepo: grpc.MethodDefinition<google_devtools_sourcerepo_v1_sourcerepo_pb.CreateRepoRequest, google_devtools_sourcerepo_v1_sourcerepo_pb.Repo>;
  deleteRepo: grpc.MethodDefinition<google_devtools_sourcerepo_v1_sourcerepo_pb.DeleteRepoRequest, google_protobuf_empty_pb.Empty>;
  setIamPolicy: grpc.MethodDefinition<google_iam_v1_iam_policy_pb.SetIamPolicyRequest, google_iam_v1_policy_pb.Policy>;
  getIamPolicy: grpc.MethodDefinition<google_iam_v1_iam_policy_pb.GetIamPolicyRequest, google_iam_v1_policy_pb.Policy>;
  testIamPermissions: grpc.MethodDefinition<google_iam_v1_iam_policy_pb.TestIamPermissionsRequest, google_iam_v1_iam_policy_pb.TestIamPermissionsResponse>;
}

export const SourceRepoService: ISourceRepoService;

export class SourceRepoClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  listRepos(argument: google_devtools_sourcerepo_v1_sourcerepo_pb.ListReposRequest, callback: grpc.requestCallback<google_devtools_sourcerepo_v1_sourcerepo_pb.ListReposResponse>): grpc.ClientUnaryCall;
  listRepos(argument: google_devtools_sourcerepo_v1_sourcerepo_pb.ListReposRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_sourcerepo_v1_sourcerepo_pb.ListReposResponse>): grpc.ClientUnaryCall;
  listRepos(argument: google_devtools_sourcerepo_v1_sourcerepo_pb.ListReposRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_sourcerepo_v1_sourcerepo_pb.ListReposResponse>): grpc.ClientUnaryCall;
  getRepo(argument: google_devtools_sourcerepo_v1_sourcerepo_pb.GetRepoRequest, callback: grpc.requestCallback<google_devtools_sourcerepo_v1_sourcerepo_pb.Repo>): grpc.ClientUnaryCall;
  getRepo(argument: google_devtools_sourcerepo_v1_sourcerepo_pb.GetRepoRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_sourcerepo_v1_sourcerepo_pb.Repo>): grpc.ClientUnaryCall;
  getRepo(argument: google_devtools_sourcerepo_v1_sourcerepo_pb.GetRepoRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_sourcerepo_v1_sourcerepo_pb.Repo>): grpc.ClientUnaryCall;
  createRepo(argument: google_devtools_sourcerepo_v1_sourcerepo_pb.CreateRepoRequest, callback: grpc.requestCallback<google_devtools_sourcerepo_v1_sourcerepo_pb.Repo>): grpc.ClientUnaryCall;
  createRepo(argument: google_devtools_sourcerepo_v1_sourcerepo_pb.CreateRepoRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_sourcerepo_v1_sourcerepo_pb.Repo>): grpc.ClientUnaryCall;
  createRepo(argument: google_devtools_sourcerepo_v1_sourcerepo_pb.CreateRepoRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_sourcerepo_v1_sourcerepo_pb.Repo>): grpc.ClientUnaryCall;
  deleteRepo(argument: google_devtools_sourcerepo_v1_sourcerepo_pb.DeleteRepoRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteRepo(argument: google_devtools_sourcerepo_v1_sourcerepo_pb.DeleteRepoRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteRepo(argument: google_devtools_sourcerepo_v1_sourcerepo_pb.DeleteRepoRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  setIamPolicy(argument: google_iam_v1_iam_policy_pb.SetIamPolicyRequest, callback: grpc.requestCallback<google_iam_v1_policy_pb.Policy>): grpc.ClientUnaryCall;
  setIamPolicy(argument: google_iam_v1_iam_policy_pb.SetIamPolicyRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_v1_policy_pb.Policy>): grpc.ClientUnaryCall;
  setIamPolicy(argument: google_iam_v1_iam_policy_pb.SetIamPolicyRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_v1_policy_pb.Policy>): grpc.ClientUnaryCall;
  getIamPolicy(argument: google_iam_v1_iam_policy_pb.GetIamPolicyRequest, callback: grpc.requestCallback<google_iam_v1_policy_pb.Policy>): grpc.ClientUnaryCall;
  getIamPolicy(argument: google_iam_v1_iam_policy_pb.GetIamPolicyRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_v1_policy_pb.Policy>): grpc.ClientUnaryCall;
  getIamPolicy(argument: google_iam_v1_iam_policy_pb.GetIamPolicyRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_v1_policy_pb.Policy>): grpc.ClientUnaryCall;
  testIamPermissions(argument: google_iam_v1_iam_policy_pb.TestIamPermissionsRequest, callback: grpc.requestCallback<google_iam_v1_iam_policy_pb.TestIamPermissionsResponse>): grpc.ClientUnaryCall;
  testIamPermissions(argument: google_iam_v1_iam_policy_pb.TestIamPermissionsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_v1_iam_policy_pb.TestIamPermissionsResponse>): grpc.ClientUnaryCall;
  testIamPermissions(argument: google_iam_v1_iam_policy_pb.TestIamPermissionsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_v1_iam_policy_pb.TestIamPermissionsResponse>): grpc.ClientUnaryCall;
}
