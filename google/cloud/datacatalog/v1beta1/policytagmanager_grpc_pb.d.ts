// GENERATED CODE -- DO NOT EDIT!

// package: google.cloud.datacatalog.v1beta1
// file: google/cloud/datacatalog/v1beta1/policytagmanager.proto

import * as google_cloud_datacatalog_v1beta1_policytagmanager_pb from "../../../../google/cloud/datacatalog/v1beta1/policytagmanager_pb";
import * as google_iam_v1_iam_policy_pb from "../../../../google/iam/v1/iam_policy_pb";
import * as google_iam_v1_policy_pb from "../../../../google/iam/v1/policy_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "grpc";

interface IPolicyTagManagerService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createTaxonomy: grpc.MethodDefinition<google_cloud_datacatalog_v1beta1_policytagmanager_pb.CreateTaxonomyRequest, google_cloud_datacatalog_v1beta1_policytagmanager_pb.Taxonomy>;
  deleteTaxonomy: grpc.MethodDefinition<google_cloud_datacatalog_v1beta1_policytagmanager_pb.DeleteTaxonomyRequest, google_protobuf_empty_pb.Empty>;
  updateTaxonomy: grpc.MethodDefinition<google_cloud_datacatalog_v1beta1_policytagmanager_pb.UpdateTaxonomyRequest, google_cloud_datacatalog_v1beta1_policytagmanager_pb.Taxonomy>;
  listTaxonomies: grpc.MethodDefinition<google_cloud_datacatalog_v1beta1_policytagmanager_pb.ListTaxonomiesRequest, google_cloud_datacatalog_v1beta1_policytagmanager_pb.ListTaxonomiesResponse>;
  getTaxonomy: grpc.MethodDefinition<google_cloud_datacatalog_v1beta1_policytagmanager_pb.GetTaxonomyRequest, google_cloud_datacatalog_v1beta1_policytagmanager_pb.Taxonomy>;
  createPolicyTag: grpc.MethodDefinition<google_cloud_datacatalog_v1beta1_policytagmanager_pb.CreatePolicyTagRequest, google_cloud_datacatalog_v1beta1_policytagmanager_pb.PolicyTag>;
  deletePolicyTag: grpc.MethodDefinition<google_cloud_datacatalog_v1beta1_policytagmanager_pb.DeletePolicyTagRequest, google_protobuf_empty_pb.Empty>;
  updatePolicyTag: grpc.MethodDefinition<google_cloud_datacatalog_v1beta1_policytagmanager_pb.UpdatePolicyTagRequest, google_cloud_datacatalog_v1beta1_policytagmanager_pb.PolicyTag>;
  listPolicyTags: grpc.MethodDefinition<google_cloud_datacatalog_v1beta1_policytagmanager_pb.ListPolicyTagsRequest, google_cloud_datacatalog_v1beta1_policytagmanager_pb.ListPolicyTagsResponse>;
  getPolicyTag: grpc.MethodDefinition<google_cloud_datacatalog_v1beta1_policytagmanager_pb.GetPolicyTagRequest, google_cloud_datacatalog_v1beta1_policytagmanager_pb.PolicyTag>;
  getIamPolicy: grpc.MethodDefinition<google_iam_v1_iam_policy_pb.GetIamPolicyRequest, google_iam_v1_policy_pb.Policy>;
  setIamPolicy: grpc.MethodDefinition<google_iam_v1_iam_policy_pb.SetIamPolicyRequest, google_iam_v1_policy_pb.Policy>;
  testIamPermissions: grpc.MethodDefinition<google_iam_v1_iam_policy_pb.TestIamPermissionsRequest, google_iam_v1_iam_policy_pb.TestIamPermissionsResponse>;
}

export const PolicyTagManagerService: IPolicyTagManagerService;

export class PolicyTagManagerClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  createTaxonomy(argument: google_cloud_datacatalog_v1beta1_policytagmanager_pb.CreateTaxonomyRequest, callback: grpc.requestCallback<google_cloud_datacatalog_v1beta1_policytagmanager_pb.Taxonomy>): grpc.ClientUnaryCall;
  createTaxonomy(argument: google_cloud_datacatalog_v1beta1_policytagmanager_pb.CreateTaxonomyRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_datacatalog_v1beta1_policytagmanager_pb.Taxonomy>): grpc.ClientUnaryCall;
  createTaxonomy(argument: google_cloud_datacatalog_v1beta1_policytagmanager_pb.CreateTaxonomyRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_datacatalog_v1beta1_policytagmanager_pb.Taxonomy>): grpc.ClientUnaryCall;
  deleteTaxonomy(argument: google_cloud_datacatalog_v1beta1_policytagmanager_pb.DeleteTaxonomyRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteTaxonomy(argument: google_cloud_datacatalog_v1beta1_policytagmanager_pb.DeleteTaxonomyRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteTaxonomy(argument: google_cloud_datacatalog_v1beta1_policytagmanager_pb.DeleteTaxonomyRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  updateTaxonomy(argument: google_cloud_datacatalog_v1beta1_policytagmanager_pb.UpdateTaxonomyRequest, callback: grpc.requestCallback<google_cloud_datacatalog_v1beta1_policytagmanager_pb.Taxonomy>): grpc.ClientUnaryCall;
  updateTaxonomy(argument: google_cloud_datacatalog_v1beta1_policytagmanager_pb.UpdateTaxonomyRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_datacatalog_v1beta1_policytagmanager_pb.Taxonomy>): grpc.ClientUnaryCall;
  updateTaxonomy(argument: google_cloud_datacatalog_v1beta1_policytagmanager_pb.UpdateTaxonomyRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_datacatalog_v1beta1_policytagmanager_pb.Taxonomy>): grpc.ClientUnaryCall;
  listTaxonomies(argument: google_cloud_datacatalog_v1beta1_policytagmanager_pb.ListTaxonomiesRequest, callback: grpc.requestCallback<google_cloud_datacatalog_v1beta1_policytagmanager_pb.ListTaxonomiesResponse>): grpc.ClientUnaryCall;
  listTaxonomies(argument: google_cloud_datacatalog_v1beta1_policytagmanager_pb.ListTaxonomiesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_datacatalog_v1beta1_policytagmanager_pb.ListTaxonomiesResponse>): grpc.ClientUnaryCall;
  listTaxonomies(argument: google_cloud_datacatalog_v1beta1_policytagmanager_pb.ListTaxonomiesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_datacatalog_v1beta1_policytagmanager_pb.ListTaxonomiesResponse>): grpc.ClientUnaryCall;
  getTaxonomy(argument: google_cloud_datacatalog_v1beta1_policytagmanager_pb.GetTaxonomyRequest, callback: grpc.requestCallback<google_cloud_datacatalog_v1beta1_policytagmanager_pb.Taxonomy>): grpc.ClientUnaryCall;
  getTaxonomy(argument: google_cloud_datacatalog_v1beta1_policytagmanager_pb.GetTaxonomyRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_datacatalog_v1beta1_policytagmanager_pb.Taxonomy>): grpc.ClientUnaryCall;
  getTaxonomy(argument: google_cloud_datacatalog_v1beta1_policytagmanager_pb.GetTaxonomyRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_datacatalog_v1beta1_policytagmanager_pb.Taxonomy>): grpc.ClientUnaryCall;
  createPolicyTag(argument: google_cloud_datacatalog_v1beta1_policytagmanager_pb.CreatePolicyTagRequest, callback: grpc.requestCallback<google_cloud_datacatalog_v1beta1_policytagmanager_pb.PolicyTag>): grpc.ClientUnaryCall;
  createPolicyTag(argument: google_cloud_datacatalog_v1beta1_policytagmanager_pb.CreatePolicyTagRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_datacatalog_v1beta1_policytagmanager_pb.PolicyTag>): grpc.ClientUnaryCall;
  createPolicyTag(argument: google_cloud_datacatalog_v1beta1_policytagmanager_pb.CreatePolicyTagRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_datacatalog_v1beta1_policytagmanager_pb.PolicyTag>): grpc.ClientUnaryCall;
  deletePolicyTag(argument: google_cloud_datacatalog_v1beta1_policytagmanager_pb.DeletePolicyTagRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deletePolicyTag(argument: google_cloud_datacatalog_v1beta1_policytagmanager_pb.DeletePolicyTagRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deletePolicyTag(argument: google_cloud_datacatalog_v1beta1_policytagmanager_pb.DeletePolicyTagRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  updatePolicyTag(argument: google_cloud_datacatalog_v1beta1_policytagmanager_pb.UpdatePolicyTagRequest, callback: grpc.requestCallback<google_cloud_datacatalog_v1beta1_policytagmanager_pb.PolicyTag>): grpc.ClientUnaryCall;
  updatePolicyTag(argument: google_cloud_datacatalog_v1beta1_policytagmanager_pb.UpdatePolicyTagRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_datacatalog_v1beta1_policytagmanager_pb.PolicyTag>): grpc.ClientUnaryCall;
  updatePolicyTag(argument: google_cloud_datacatalog_v1beta1_policytagmanager_pb.UpdatePolicyTagRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_datacatalog_v1beta1_policytagmanager_pb.PolicyTag>): grpc.ClientUnaryCall;
  listPolicyTags(argument: google_cloud_datacatalog_v1beta1_policytagmanager_pb.ListPolicyTagsRequest, callback: grpc.requestCallback<google_cloud_datacatalog_v1beta1_policytagmanager_pb.ListPolicyTagsResponse>): grpc.ClientUnaryCall;
  listPolicyTags(argument: google_cloud_datacatalog_v1beta1_policytagmanager_pb.ListPolicyTagsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_datacatalog_v1beta1_policytagmanager_pb.ListPolicyTagsResponse>): grpc.ClientUnaryCall;
  listPolicyTags(argument: google_cloud_datacatalog_v1beta1_policytagmanager_pb.ListPolicyTagsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_datacatalog_v1beta1_policytagmanager_pb.ListPolicyTagsResponse>): grpc.ClientUnaryCall;
  getPolicyTag(argument: google_cloud_datacatalog_v1beta1_policytagmanager_pb.GetPolicyTagRequest, callback: grpc.requestCallback<google_cloud_datacatalog_v1beta1_policytagmanager_pb.PolicyTag>): grpc.ClientUnaryCall;
  getPolicyTag(argument: google_cloud_datacatalog_v1beta1_policytagmanager_pb.GetPolicyTagRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_datacatalog_v1beta1_policytagmanager_pb.PolicyTag>): grpc.ClientUnaryCall;
  getPolicyTag(argument: google_cloud_datacatalog_v1beta1_policytagmanager_pb.GetPolicyTagRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_datacatalog_v1beta1_policytagmanager_pb.PolicyTag>): grpc.ClientUnaryCall;
  getIamPolicy(argument: google_iam_v1_iam_policy_pb.GetIamPolicyRequest, callback: grpc.requestCallback<google_iam_v1_policy_pb.Policy>): grpc.ClientUnaryCall;
  getIamPolicy(argument: google_iam_v1_iam_policy_pb.GetIamPolicyRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_v1_policy_pb.Policy>): grpc.ClientUnaryCall;
  getIamPolicy(argument: google_iam_v1_iam_policy_pb.GetIamPolicyRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_v1_policy_pb.Policy>): grpc.ClientUnaryCall;
  setIamPolicy(argument: google_iam_v1_iam_policy_pb.SetIamPolicyRequest, callback: grpc.requestCallback<google_iam_v1_policy_pb.Policy>): grpc.ClientUnaryCall;
  setIamPolicy(argument: google_iam_v1_iam_policy_pb.SetIamPolicyRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_v1_policy_pb.Policy>): grpc.ClientUnaryCall;
  setIamPolicy(argument: google_iam_v1_iam_policy_pb.SetIamPolicyRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_v1_policy_pb.Policy>): grpc.ClientUnaryCall;
  testIamPermissions(argument: google_iam_v1_iam_policy_pb.TestIamPermissionsRequest, callback: grpc.requestCallback<google_iam_v1_iam_policy_pb.TestIamPermissionsResponse>): grpc.ClientUnaryCall;
  testIamPermissions(argument: google_iam_v1_iam_policy_pb.TestIamPermissionsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_v1_iam_policy_pb.TestIamPermissionsResponse>): grpc.ClientUnaryCall;
  testIamPermissions(argument: google_iam_v1_iam_policy_pb.TestIamPermissionsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_v1_iam_policy_pb.TestIamPermissionsResponse>): grpc.ClientUnaryCall;
}
