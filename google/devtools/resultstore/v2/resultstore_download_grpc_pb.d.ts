// GENERATED CODE -- DO NOT EDIT!

// package: google.devtools.resultstore.v2
// file: google/devtools/resultstore/v2/resultstore_download.proto

import * as google_devtools_resultstore_v2_resultstore_download_pb from "../../../../google/devtools/resultstore/v2/resultstore_download_pb";
import * as google_devtools_resultstore_v2_action_pb from "../../../../google/devtools/resultstore/v2/action_pb";
import * as google_devtools_resultstore_v2_configuration_pb from "../../../../google/devtools/resultstore/v2/configuration_pb";
import * as google_devtools_resultstore_v2_configured_target_pb from "../../../../google/devtools/resultstore/v2/configured_target_pb";
import * as google_devtools_resultstore_v2_download_metadata_pb from "../../../../google/devtools/resultstore/v2/download_metadata_pb";
import * as google_devtools_resultstore_v2_file_set_pb from "../../../../google/devtools/resultstore/v2/file_set_pb";
import * as google_devtools_resultstore_v2_invocation_pb from "../../../../google/devtools/resultstore/v2/invocation_pb";
import * as google_devtools_resultstore_v2_target_pb from "../../../../google/devtools/resultstore/v2/target_pb";
import * as grpc from "grpc";

interface IResultStoreDownloadService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getInvocation: grpc.MethodDefinition<google_devtools_resultstore_v2_resultstore_download_pb.GetInvocationRequest, google_devtools_resultstore_v2_invocation_pb.Invocation>;
  searchInvocations: grpc.MethodDefinition<google_devtools_resultstore_v2_resultstore_download_pb.SearchInvocationsRequest, google_devtools_resultstore_v2_resultstore_download_pb.SearchInvocationsResponse>;
  getInvocationDownloadMetadata: grpc.MethodDefinition<google_devtools_resultstore_v2_resultstore_download_pb.GetInvocationDownloadMetadataRequest, google_devtools_resultstore_v2_download_metadata_pb.DownloadMetadata>;
  getConfiguration: grpc.MethodDefinition<google_devtools_resultstore_v2_resultstore_download_pb.GetConfigurationRequest, google_devtools_resultstore_v2_configuration_pb.Configuration>;
  listConfigurations: grpc.MethodDefinition<google_devtools_resultstore_v2_resultstore_download_pb.ListConfigurationsRequest, google_devtools_resultstore_v2_resultstore_download_pb.ListConfigurationsResponse>;
  getTarget: grpc.MethodDefinition<google_devtools_resultstore_v2_resultstore_download_pb.GetTargetRequest, google_devtools_resultstore_v2_target_pb.Target>;
  listTargets: grpc.MethodDefinition<google_devtools_resultstore_v2_resultstore_download_pb.ListTargetsRequest, google_devtools_resultstore_v2_resultstore_download_pb.ListTargetsResponse>;
  getConfiguredTarget: grpc.MethodDefinition<google_devtools_resultstore_v2_resultstore_download_pb.GetConfiguredTargetRequest, google_devtools_resultstore_v2_configured_target_pb.ConfiguredTarget>;
  listConfiguredTargets: grpc.MethodDefinition<google_devtools_resultstore_v2_resultstore_download_pb.ListConfiguredTargetsRequest, google_devtools_resultstore_v2_resultstore_download_pb.ListConfiguredTargetsResponse>;
  getAction: grpc.MethodDefinition<google_devtools_resultstore_v2_resultstore_download_pb.GetActionRequest, google_devtools_resultstore_v2_action_pb.Action>;
  listActions: grpc.MethodDefinition<google_devtools_resultstore_v2_resultstore_download_pb.ListActionsRequest, google_devtools_resultstore_v2_resultstore_download_pb.ListActionsResponse>;
  getFileSet: grpc.MethodDefinition<google_devtools_resultstore_v2_resultstore_download_pb.GetFileSetRequest, google_devtools_resultstore_v2_file_set_pb.FileSet>;
  listFileSets: grpc.MethodDefinition<google_devtools_resultstore_v2_resultstore_download_pb.ListFileSetsRequest, google_devtools_resultstore_v2_resultstore_download_pb.ListFileSetsResponse>;
  traverseFileSets: grpc.MethodDefinition<google_devtools_resultstore_v2_resultstore_download_pb.TraverseFileSetsRequest, google_devtools_resultstore_v2_resultstore_download_pb.TraverseFileSetsResponse>;
}

export const ResultStoreDownloadService: IResultStoreDownloadService;

export class ResultStoreDownloadClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getInvocation(argument: google_devtools_resultstore_v2_resultstore_download_pb.GetInvocationRequest, callback: grpc.requestCallback<google_devtools_resultstore_v2_invocation_pb.Invocation>): grpc.ClientUnaryCall;
  getInvocation(argument: google_devtools_resultstore_v2_resultstore_download_pb.GetInvocationRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_resultstore_v2_invocation_pb.Invocation>): grpc.ClientUnaryCall;
  getInvocation(argument: google_devtools_resultstore_v2_resultstore_download_pb.GetInvocationRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_resultstore_v2_invocation_pb.Invocation>): grpc.ClientUnaryCall;
  searchInvocations(argument: google_devtools_resultstore_v2_resultstore_download_pb.SearchInvocationsRequest, callback: grpc.requestCallback<google_devtools_resultstore_v2_resultstore_download_pb.SearchInvocationsResponse>): grpc.ClientUnaryCall;
  searchInvocations(argument: google_devtools_resultstore_v2_resultstore_download_pb.SearchInvocationsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_resultstore_v2_resultstore_download_pb.SearchInvocationsResponse>): grpc.ClientUnaryCall;
  searchInvocations(argument: google_devtools_resultstore_v2_resultstore_download_pb.SearchInvocationsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_resultstore_v2_resultstore_download_pb.SearchInvocationsResponse>): grpc.ClientUnaryCall;
  getInvocationDownloadMetadata(argument: google_devtools_resultstore_v2_resultstore_download_pb.GetInvocationDownloadMetadataRequest, callback: grpc.requestCallback<google_devtools_resultstore_v2_download_metadata_pb.DownloadMetadata>): grpc.ClientUnaryCall;
  getInvocationDownloadMetadata(argument: google_devtools_resultstore_v2_resultstore_download_pb.GetInvocationDownloadMetadataRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_resultstore_v2_download_metadata_pb.DownloadMetadata>): grpc.ClientUnaryCall;
  getInvocationDownloadMetadata(argument: google_devtools_resultstore_v2_resultstore_download_pb.GetInvocationDownloadMetadataRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_resultstore_v2_download_metadata_pb.DownloadMetadata>): grpc.ClientUnaryCall;
  getConfiguration(argument: google_devtools_resultstore_v2_resultstore_download_pb.GetConfigurationRequest, callback: grpc.requestCallback<google_devtools_resultstore_v2_configuration_pb.Configuration>): grpc.ClientUnaryCall;
  getConfiguration(argument: google_devtools_resultstore_v2_resultstore_download_pb.GetConfigurationRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_resultstore_v2_configuration_pb.Configuration>): grpc.ClientUnaryCall;
  getConfiguration(argument: google_devtools_resultstore_v2_resultstore_download_pb.GetConfigurationRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_resultstore_v2_configuration_pb.Configuration>): grpc.ClientUnaryCall;
  listConfigurations(argument: google_devtools_resultstore_v2_resultstore_download_pb.ListConfigurationsRequest, callback: grpc.requestCallback<google_devtools_resultstore_v2_resultstore_download_pb.ListConfigurationsResponse>): grpc.ClientUnaryCall;
  listConfigurations(argument: google_devtools_resultstore_v2_resultstore_download_pb.ListConfigurationsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_resultstore_v2_resultstore_download_pb.ListConfigurationsResponse>): grpc.ClientUnaryCall;
  listConfigurations(argument: google_devtools_resultstore_v2_resultstore_download_pb.ListConfigurationsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_resultstore_v2_resultstore_download_pb.ListConfigurationsResponse>): grpc.ClientUnaryCall;
  getTarget(argument: google_devtools_resultstore_v2_resultstore_download_pb.GetTargetRequest, callback: grpc.requestCallback<google_devtools_resultstore_v2_target_pb.Target>): grpc.ClientUnaryCall;
  getTarget(argument: google_devtools_resultstore_v2_resultstore_download_pb.GetTargetRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_resultstore_v2_target_pb.Target>): grpc.ClientUnaryCall;
  getTarget(argument: google_devtools_resultstore_v2_resultstore_download_pb.GetTargetRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_resultstore_v2_target_pb.Target>): grpc.ClientUnaryCall;
  listTargets(argument: google_devtools_resultstore_v2_resultstore_download_pb.ListTargetsRequest, callback: grpc.requestCallback<google_devtools_resultstore_v2_resultstore_download_pb.ListTargetsResponse>): grpc.ClientUnaryCall;
  listTargets(argument: google_devtools_resultstore_v2_resultstore_download_pb.ListTargetsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_resultstore_v2_resultstore_download_pb.ListTargetsResponse>): grpc.ClientUnaryCall;
  listTargets(argument: google_devtools_resultstore_v2_resultstore_download_pb.ListTargetsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_resultstore_v2_resultstore_download_pb.ListTargetsResponse>): grpc.ClientUnaryCall;
  getConfiguredTarget(argument: google_devtools_resultstore_v2_resultstore_download_pb.GetConfiguredTargetRequest, callback: grpc.requestCallback<google_devtools_resultstore_v2_configured_target_pb.ConfiguredTarget>): grpc.ClientUnaryCall;
  getConfiguredTarget(argument: google_devtools_resultstore_v2_resultstore_download_pb.GetConfiguredTargetRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_resultstore_v2_configured_target_pb.ConfiguredTarget>): grpc.ClientUnaryCall;
  getConfiguredTarget(argument: google_devtools_resultstore_v2_resultstore_download_pb.GetConfiguredTargetRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_resultstore_v2_configured_target_pb.ConfiguredTarget>): grpc.ClientUnaryCall;
  listConfiguredTargets(argument: google_devtools_resultstore_v2_resultstore_download_pb.ListConfiguredTargetsRequest, callback: grpc.requestCallback<google_devtools_resultstore_v2_resultstore_download_pb.ListConfiguredTargetsResponse>): grpc.ClientUnaryCall;
  listConfiguredTargets(argument: google_devtools_resultstore_v2_resultstore_download_pb.ListConfiguredTargetsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_resultstore_v2_resultstore_download_pb.ListConfiguredTargetsResponse>): grpc.ClientUnaryCall;
  listConfiguredTargets(argument: google_devtools_resultstore_v2_resultstore_download_pb.ListConfiguredTargetsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_resultstore_v2_resultstore_download_pb.ListConfiguredTargetsResponse>): grpc.ClientUnaryCall;
  getAction(argument: google_devtools_resultstore_v2_resultstore_download_pb.GetActionRequest, callback: grpc.requestCallback<google_devtools_resultstore_v2_action_pb.Action>): grpc.ClientUnaryCall;
  getAction(argument: google_devtools_resultstore_v2_resultstore_download_pb.GetActionRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_resultstore_v2_action_pb.Action>): grpc.ClientUnaryCall;
  getAction(argument: google_devtools_resultstore_v2_resultstore_download_pb.GetActionRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_resultstore_v2_action_pb.Action>): grpc.ClientUnaryCall;
  listActions(argument: google_devtools_resultstore_v2_resultstore_download_pb.ListActionsRequest, callback: grpc.requestCallback<google_devtools_resultstore_v2_resultstore_download_pb.ListActionsResponse>): grpc.ClientUnaryCall;
  listActions(argument: google_devtools_resultstore_v2_resultstore_download_pb.ListActionsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_resultstore_v2_resultstore_download_pb.ListActionsResponse>): grpc.ClientUnaryCall;
  listActions(argument: google_devtools_resultstore_v2_resultstore_download_pb.ListActionsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_resultstore_v2_resultstore_download_pb.ListActionsResponse>): grpc.ClientUnaryCall;
  getFileSet(argument: google_devtools_resultstore_v2_resultstore_download_pb.GetFileSetRequest, callback: grpc.requestCallback<google_devtools_resultstore_v2_file_set_pb.FileSet>): grpc.ClientUnaryCall;
  getFileSet(argument: google_devtools_resultstore_v2_resultstore_download_pb.GetFileSetRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_resultstore_v2_file_set_pb.FileSet>): grpc.ClientUnaryCall;
  getFileSet(argument: google_devtools_resultstore_v2_resultstore_download_pb.GetFileSetRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_resultstore_v2_file_set_pb.FileSet>): grpc.ClientUnaryCall;
  listFileSets(argument: google_devtools_resultstore_v2_resultstore_download_pb.ListFileSetsRequest, callback: grpc.requestCallback<google_devtools_resultstore_v2_resultstore_download_pb.ListFileSetsResponse>): grpc.ClientUnaryCall;
  listFileSets(argument: google_devtools_resultstore_v2_resultstore_download_pb.ListFileSetsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_resultstore_v2_resultstore_download_pb.ListFileSetsResponse>): grpc.ClientUnaryCall;
  listFileSets(argument: google_devtools_resultstore_v2_resultstore_download_pb.ListFileSetsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_resultstore_v2_resultstore_download_pb.ListFileSetsResponse>): grpc.ClientUnaryCall;
  traverseFileSets(argument: google_devtools_resultstore_v2_resultstore_download_pb.TraverseFileSetsRequest, callback: grpc.requestCallback<google_devtools_resultstore_v2_resultstore_download_pb.TraverseFileSetsResponse>): grpc.ClientUnaryCall;
  traverseFileSets(argument: google_devtools_resultstore_v2_resultstore_download_pb.TraverseFileSetsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_resultstore_v2_resultstore_download_pb.TraverseFileSetsResponse>): grpc.ClientUnaryCall;
  traverseFileSets(argument: google_devtools_resultstore_v2_resultstore_download_pb.TraverseFileSetsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_resultstore_v2_resultstore_download_pb.TraverseFileSetsResponse>): grpc.ClientUnaryCall;
}
