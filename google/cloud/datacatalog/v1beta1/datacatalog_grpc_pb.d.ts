// GENERATED CODE -- DO NOT EDIT!

// package: google.cloud.datacatalog.v1beta1
// file: google/cloud/datacatalog/v1beta1/datacatalog.proto

import * as google_cloud_datacatalog_v1beta1_datacatalog_pb from "../../../../google/cloud/datacatalog/v1beta1/datacatalog_pb";
import * as google_cloud_datacatalog_v1beta1_tags_pb from "../../../../google/cloud/datacatalog/v1beta1/tags_pb";
import * as google_iam_v1_iam_policy_pb from "../../../../google/iam/v1/iam_policy_pb";
import * as google_iam_v1_policy_pb from "../../../../google/iam/v1/policy_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "grpc";

interface IDataCatalogService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  searchCatalog: grpc.MethodDefinition<google_cloud_datacatalog_v1beta1_datacatalog_pb.SearchCatalogRequest, google_cloud_datacatalog_v1beta1_datacatalog_pb.SearchCatalogResponse>;
  createEntryGroup: grpc.MethodDefinition<google_cloud_datacatalog_v1beta1_datacatalog_pb.CreateEntryGroupRequest, google_cloud_datacatalog_v1beta1_datacatalog_pb.EntryGroup>;
  getEntryGroup: grpc.MethodDefinition<google_cloud_datacatalog_v1beta1_datacatalog_pb.GetEntryGroupRequest, google_cloud_datacatalog_v1beta1_datacatalog_pb.EntryGroup>;
  deleteEntryGroup: grpc.MethodDefinition<google_cloud_datacatalog_v1beta1_datacatalog_pb.DeleteEntryGroupRequest, google_protobuf_empty_pb.Empty>;
  createEntry: grpc.MethodDefinition<google_cloud_datacatalog_v1beta1_datacatalog_pb.CreateEntryRequest, google_cloud_datacatalog_v1beta1_datacatalog_pb.Entry>;
  updateEntry: grpc.MethodDefinition<google_cloud_datacatalog_v1beta1_datacatalog_pb.UpdateEntryRequest, google_cloud_datacatalog_v1beta1_datacatalog_pb.Entry>;
  deleteEntry: grpc.MethodDefinition<google_cloud_datacatalog_v1beta1_datacatalog_pb.DeleteEntryRequest, google_protobuf_empty_pb.Empty>;
  getEntry: grpc.MethodDefinition<google_cloud_datacatalog_v1beta1_datacatalog_pb.GetEntryRequest, google_cloud_datacatalog_v1beta1_datacatalog_pb.Entry>;
  lookupEntry: grpc.MethodDefinition<google_cloud_datacatalog_v1beta1_datacatalog_pb.LookupEntryRequest, google_cloud_datacatalog_v1beta1_datacatalog_pb.Entry>;
  createTagTemplate: grpc.MethodDefinition<google_cloud_datacatalog_v1beta1_datacatalog_pb.CreateTagTemplateRequest, google_cloud_datacatalog_v1beta1_tags_pb.TagTemplate>;
  getTagTemplate: grpc.MethodDefinition<google_cloud_datacatalog_v1beta1_datacatalog_pb.GetTagTemplateRequest, google_cloud_datacatalog_v1beta1_tags_pb.TagTemplate>;
  updateTagTemplate: grpc.MethodDefinition<google_cloud_datacatalog_v1beta1_datacatalog_pb.UpdateTagTemplateRequest, google_cloud_datacatalog_v1beta1_tags_pb.TagTemplate>;
  deleteTagTemplate: grpc.MethodDefinition<google_cloud_datacatalog_v1beta1_datacatalog_pb.DeleteTagTemplateRequest, google_protobuf_empty_pb.Empty>;
  createTagTemplateField: grpc.MethodDefinition<google_cloud_datacatalog_v1beta1_datacatalog_pb.CreateTagTemplateFieldRequest, google_cloud_datacatalog_v1beta1_tags_pb.TagTemplateField>;
  updateTagTemplateField: grpc.MethodDefinition<google_cloud_datacatalog_v1beta1_datacatalog_pb.UpdateTagTemplateFieldRequest, google_cloud_datacatalog_v1beta1_tags_pb.TagTemplateField>;
  renameTagTemplateField: grpc.MethodDefinition<google_cloud_datacatalog_v1beta1_datacatalog_pb.RenameTagTemplateFieldRequest, google_cloud_datacatalog_v1beta1_tags_pb.TagTemplateField>;
  deleteTagTemplateField: grpc.MethodDefinition<google_cloud_datacatalog_v1beta1_datacatalog_pb.DeleteTagTemplateFieldRequest, google_protobuf_empty_pb.Empty>;
  createTag: grpc.MethodDefinition<google_cloud_datacatalog_v1beta1_datacatalog_pb.CreateTagRequest, google_cloud_datacatalog_v1beta1_tags_pb.Tag>;
  updateTag: grpc.MethodDefinition<google_cloud_datacatalog_v1beta1_datacatalog_pb.UpdateTagRequest, google_cloud_datacatalog_v1beta1_tags_pb.Tag>;
  deleteTag: grpc.MethodDefinition<google_cloud_datacatalog_v1beta1_datacatalog_pb.DeleteTagRequest, google_protobuf_empty_pb.Empty>;
  listTags: grpc.MethodDefinition<google_cloud_datacatalog_v1beta1_datacatalog_pb.ListTagsRequest, google_cloud_datacatalog_v1beta1_datacatalog_pb.ListTagsResponse>;
  setIamPolicy: grpc.MethodDefinition<google_iam_v1_iam_policy_pb.SetIamPolicyRequest, google_iam_v1_policy_pb.Policy>;
  getIamPolicy: grpc.MethodDefinition<google_iam_v1_iam_policy_pb.GetIamPolicyRequest, google_iam_v1_policy_pb.Policy>;
  testIamPermissions: grpc.MethodDefinition<google_iam_v1_iam_policy_pb.TestIamPermissionsRequest, google_iam_v1_iam_policy_pb.TestIamPermissionsResponse>;
}

export const DataCatalogService: IDataCatalogService;

export class DataCatalogClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  searchCatalog(argument: google_cloud_datacatalog_v1beta1_datacatalog_pb.SearchCatalogRequest, callback: grpc.requestCallback<google_cloud_datacatalog_v1beta1_datacatalog_pb.SearchCatalogResponse>): grpc.ClientUnaryCall;
  searchCatalog(argument: google_cloud_datacatalog_v1beta1_datacatalog_pb.SearchCatalogRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_datacatalog_v1beta1_datacatalog_pb.SearchCatalogResponse>): grpc.ClientUnaryCall;
  searchCatalog(argument: google_cloud_datacatalog_v1beta1_datacatalog_pb.SearchCatalogRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_datacatalog_v1beta1_datacatalog_pb.SearchCatalogResponse>): grpc.ClientUnaryCall;
  createEntryGroup(argument: google_cloud_datacatalog_v1beta1_datacatalog_pb.CreateEntryGroupRequest, callback: grpc.requestCallback<google_cloud_datacatalog_v1beta1_datacatalog_pb.EntryGroup>): grpc.ClientUnaryCall;
  createEntryGroup(argument: google_cloud_datacatalog_v1beta1_datacatalog_pb.CreateEntryGroupRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_datacatalog_v1beta1_datacatalog_pb.EntryGroup>): grpc.ClientUnaryCall;
  createEntryGroup(argument: google_cloud_datacatalog_v1beta1_datacatalog_pb.CreateEntryGroupRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_datacatalog_v1beta1_datacatalog_pb.EntryGroup>): grpc.ClientUnaryCall;
  getEntryGroup(argument: google_cloud_datacatalog_v1beta1_datacatalog_pb.GetEntryGroupRequest, callback: grpc.requestCallback<google_cloud_datacatalog_v1beta1_datacatalog_pb.EntryGroup>): grpc.ClientUnaryCall;
  getEntryGroup(argument: google_cloud_datacatalog_v1beta1_datacatalog_pb.GetEntryGroupRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_datacatalog_v1beta1_datacatalog_pb.EntryGroup>): grpc.ClientUnaryCall;
  getEntryGroup(argument: google_cloud_datacatalog_v1beta1_datacatalog_pb.GetEntryGroupRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_datacatalog_v1beta1_datacatalog_pb.EntryGroup>): grpc.ClientUnaryCall;
  deleteEntryGroup(argument: google_cloud_datacatalog_v1beta1_datacatalog_pb.DeleteEntryGroupRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteEntryGroup(argument: google_cloud_datacatalog_v1beta1_datacatalog_pb.DeleteEntryGroupRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteEntryGroup(argument: google_cloud_datacatalog_v1beta1_datacatalog_pb.DeleteEntryGroupRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  createEntry(argument: google_cloud_datacatalog_v1beta1_datacatalog_pb.CreateEntryRequest, callback: grpc.requestCallback<google_cloud_datacatalog_v1beta1_datacatalog_pb.Entry>): grpc.ClientUnaryCall;
  createEntry(argument: google_cloud_datacatalog_v1beta1_datacatalog_pb.CreateEntryRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_datacatalog_v1beta1_datacatalog_pb.Entry>): grpc.ClientUnaryCall;
  createEntry(argument: google_cloud_datacatalog_v1beta1_datacatalog_pb.CreateEntryRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_datacatalog_v1beta1_datacatalog_pb.Entry>): grpc.ClientUnaryCall;
  updateEntry(argument: google_cloud_datacatalog_v1beta1_datacatalog_pb.UpdateEntryRequest, callback: grpc.requestCallback<google_cloud_datacatalog_v1beta1_datacatalog_pb.Entry>): grpc.ClientUnaryCall;
  updateEntry(argument: google_cloud_datacatalog_v1beta1_datacatalog_pb.UpdateEntryRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_datacatalog_v1beta1_datacatalog_pb.Entry>): grpc.ClientUnaryCall;
  updateEntry(argument: google_cloud_datacatalog_v1beta1_datacatalog_pb.UpdateEntryRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_datacatalog_v1beta1_datacatalog_pb.Entry>): grpc.ClientUnaryCall;
  deleteEntry(argument: google_cloud_datacatalog_v1beta1_datacatalog_pb.DeleteEntryRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteEntry(argument: google_cloud_datacatalog_v1beta1_datacatalog_pb.DeleteEntryRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteEntry(argument: google_cloud_datacatalog_v1beta1_datacatalog_pb.DeleteEntryRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  getEntry(argument: google_cloud_datacatalog_v1beta1_datacatalog_pb.GetEntryRequest, callback: grpc.requestCallback<google_cloud_datacatalog_v1beta1_datacatalog_pb.Entry>): grpc.ClientUnaryCall;
  getEntry(argument: google_cloud_datacatalog_v1beta1_datacatalog_pb.GetEntryRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_datacatalog_v1beta1_datacatalog_pb.Entry>): grpc.ClientUnaryCall;
  getEntry(argument: google_cloud_datacatalog_v1beta1_datacatalog_pb.GetEntryRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_datacatalog_v1beta1_datacatalog_pb.Entry>): grpc.ClientUnaryCall;
  lookupEntry(argument: google_cloud_datacatalog_v1beta1_datacatalog_pb.LookupEntryRequest, callback: grpc.requestCallback<google_cloud_datacatalog_v1beta1_datacatalog_pb.Entry>): grpc.ClientUnaryCall;
  lookupEntry(argument: google_cloud_datacatalog_v1beta1_datacatalog_pb.LookupEntryRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_datacatalog_v1beta1_datacatalog_pb.Entry>): grpc.ClientUnaryCall;
  lookupEntry(argument: google_cloud_datacatalog_v1beta1_datacatalog_pb.LookupEntryRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_datacatalog_v1beta1_datacatalog_pb.Entry>): grpc.ClientUnaryCall;
  createTagTemplate(argument: google_cloud_datacatalog_v1beta1_datacatalog_pb.CreateTagTemplateRequest, callback: grpc.requestCallback<google_cloud_datacatalog_v1beta1_tags_pb.TagTemplate>): grpc.ClientUnaryCall;
  createTagTemplate(argument: google_cloud_datacatalog_v1beta1_datacatalog_pb.CreateTagTemplateRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_datacatalog_v1beta1_tags_pb.TagTemplate>): grpc.ClientUnaryCall;
  createTagTemplate(argument: google_cloud_datacatalog_v1beta1_datacatalog_pb.CreateTagTemplateRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_datacatalog_v1beta1_tags_pb.TagTemplate>): grpc.ClientUnaryCall;
  getTagTemplate(argument: google_cloud_datacatalog_v1beta1_datacatalog_pb.GetTagTemplateRequest, callback: grpc.requestCallback<google_cloud_datacatalog_v1beta1_tags_pb.TagTemplate>): grpc.ClientUnaryCall;
  getTagTemplate(argument: google_cloud_datacatalog_v1beta1_datacatalog_pb.GetTagTemplateRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_datacatalog_v1beta1_tags_pb.TagTemplate>): grpc.ClientUnaryCall;
  getTagTemplate(argument: google_cloud_datacatalog_v1beta1_datacatalog_pb.GetTagTemplateRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_datacatalog_v1beta1_tags_pb.TagTemplate>): grpc.ClientUnaryCall;
  updateTagTemplate(argument: google_cloud_datacatalog_v1beta1_datacatalog_pb.UpdateTagTemplateRequest, callback: grpc.requestCallback<google_cloud_datacatalog_v1beta1_tags_pb.TagTemplate>): grpc.ClientUnaryCall;
  updateTagTemplate(argument: google_cloud_datacatalog_v1beta1_datacatalog_pb.UpdateTagTemplateRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_datacatalog_v1beta1_tags_pb.TagTemplate>): grpc.ClientUnaryCall;
  updateTagTemplate(argument: google_cloud_datacatalog_v1beta1_datacatalog_pb.UpdateTagTemplateRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_datacatalog_v1beta1_tags_pb.TagTemplate>): grpc.ClientUnaryCall;
  deleteTagTemplate(argument: google_cloud_datacatalog_v1beta1_datacatalog_pb.DeleteTagTemplateRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteTagTemplate(argument: google_cloud_datacatalog_v1beta1_datacatalog_pb.DeleteTagTemplateRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteTagTemplate(argument: google_cloud_datacatalog_v1beta1_datacatalog_pb.DeleteTagTemplateRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  createTagTemplateField(argument: google_cloud_datacatalog_v1beta1_datacatalog_pb.CreateTagTemplateFieldRequest, callback: grpc.requestCallback<google_cloud_datacatalog_v1beta1_tags_pb.TagTemplateField>): grpc.ClientUnaryCall;
  createTagTemplateField(argument: google_cloud_datacatalog_v1beta1_datacatalog_pb.CreateTagTemplateFieldRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_datacatalog_v1beta1_tags_pb.TagTemplateField>): grpc.ClientUnaryCall;
  createTagTemplateField(argument: google_cloud_datacatalog_v1beta1_datacatalog_pb.CreateTagTemplateFieldRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_datacatalog_v1beta1_tags_pb.TagTemplateField>): grpc.ClientUnaryCall;
  updateTagTemplateField(argument: google_cloud_datacatalog_v1beta1_datacatalog_pb.UpdateTagTemplateFieldRequest, callback: grpc.requestCallback<google_cloud_datacatalog_v1beta1_tags_pb.TagTemplateField>): grpc.ClientUnaryCall;
  updateTagTemplateField(argument: google_cloud_datacatalog_v1beta1_datacatalog_pb.UpdateTagTemplateFieldRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_datacatalog_v1beta1_tags_pb.TagTemplateField>): grpc.ClientUnaryCall;
  updateTagTemplateField(argument: google_cloud_datacatalog_v1beta1_datacatalog_pb.UpdateTagTemplateFieldRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_datacatalog_v1beta1_tags_pb.TagTemplateField>): grpc.ClientUnaryCall;
  renameTagTemplateField(argument: google_cloud_datacatalog_v1beta1_datacatalog_pb.RenameTagTemplateFieldRequest, callback: grpc.requestCallback<google_cloud_datacatalog_v1beta1_tags_pb.TagTemplateField>): grpc.ClientUnaryCall;
  renameTagTemplateField(argument: google_cloud_datacatalog_v1beta1_datacatalog_pb.RenameTagTemplateFieldRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_datacatalog_v1beta1_tags_pb.TagTemplateField>): grpc.ClientUnaryCall;
  renameTagTemplateField(argument: google_cloud_datacatalog_v1beta1_datacatalog_pb.RenameTagTemplateFieldRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_datacatalog_v1beta1_tags_pb.TagTemplateField>): grpc.ClientUnaryCall;
  deleteTagTemplateField(argument: google_cloud_datacatalog_v1beta1_datacatalog_pb.DeleteTagTemplateFieldRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteTagTemplateField(argument: google_cloud_datacatalog_v1beta1_datacatalog_pb.DeleteTagTemplateFieldRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteTagTemplateField(argument: google_cloud_datacatalog_v1beta1_datacatalog_pb.DeleteTagTemplateFieldRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  createTag(argument: google_cloud_datacatalog_v1beta1_datacatalog_pb.CreateTagRequest, callback: grpc.requestCallback<google_cloud_datacatalog_v1beta1_tags_pb.Tag>): grpc.ClientUnaryCall;
  createTag(argument: google_cloud_datacatalog_v1beta1_datacatalog_pb.CreateTagRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_datacatalog_v1beta1_tags_pb.Tag>): grpc.ClientUnaryCall;
  createTag(argument: google_cloud_datacatalog_v1beta1_datacatalog_pb.CreateTagRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_datacatalog_v1beta1_tags_pb.Tag>): grpc.ClientUnaryCall;
  updateTag(argument: google_cloud_datacatalog_v1beta1_datacatalog_pb.UpdateTagRequest, callback: grpc.requestCallback<google_cloud_datacatalog_v1beta1_tags_pb.Tag>): grpc.ClientUnaryCall;
  updateTag(argument: google_cloud_datacatalog_v1beta1_datacatalog_pb.UpdateTagRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_datacatalog_v1beta1_tags_pb.Tag>): grpc.ClientUnaryCall;
  updateTag(argument: google_cloud_datacatalog_v1beta1_datacatalog_pb.UpdateTagRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_datacatalog_v1beta1_tags_pb.Tag>): grpc.ClientUnaryCall;
  deleteTag(argument: google_cloud_datacatalog_v1beta1_datacatalog_pb.DeleteTagRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteTag(argument: google_cloud_datacatalog_v1beta1_datacatalog_pb.DeleteTagRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteTag(argument: google_cloud_datacatalog_v1beta1_datacatalog_pb.DeleteTagRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  listTags(argument: google_cloud_datacatalog_v1beta1_datacatalog_pb.ListTagsRequest, callback: grpc.requestCallback<google_cloud_datacatalog_v1beta1_datacatalog_pb.ListTagsResponse>): grpc.ClientUnaryCall;
  listTags(argument: google_cloud_datacatalog_v1beta1_datacatalog_pb.ListTagsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_datacatalog_v1beta1_datacatalog_pb.ListTagsResponse>): grpc.ClientUnaryCall;
  listTags(argument: google_cloud_datacatalog_v1beta1_datacatalog_pb.ListTagsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_datacatalog_v1beta1_datacatalog_pb.ListTagsResponse>): grpc.ClientUnaryCall;
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
