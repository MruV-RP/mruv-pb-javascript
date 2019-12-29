// GENERATED CODE -- DO NOT EDIT!

// package: google.cloud.resourcemanager.v2
// file: google/cloud/resourcemanager/v2/folders.proto

import * as google_cloud_resourcemanager_v2_folders_pb from "../../../../google/cloud/resourcemanager/v2/folders_pb";
import * as google_iam_v1_iam_policy_pb from "../../../../google/iam/v1/iam_policy_pb";
import * as google_iam_v1_policy_pb from "../../../../google/iam/v1/policy_pb";
import * as google_longrunning_operations_pb from "../../../../google/longrunning/operations_pb";
import * as grpc from "grpc";

interface IFoldersService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  listFolders: grpc.MethodDefinition<google_cloud_resourcemanager_v2_folders_pb.ListFoldersRequest, google_cloud_resourcemanager_v2_folders_pb.ListFoldersResponse>;
  searchFolders: grpc.MethodDefinition<google_cloud_resourcemanager_v2_folders_pb.SearchFoldersRequest, google_cloud_resourcemanager_v2_folders_pb.SearchFoldersResponse>;
  getFolder: grpc.MethodDefinition<google_cloud_resourcemanager_v2_folders_pb.GetFolderRequest, google_cloud_resourcemanager_v2_folders_pb.Folder>;
  createFolder: grpc.MethodDefinition<google_cloud_resourcemanager_v2_folders_pb.CreateFolderRequest, google_longrunning_operations_pb.Operation>;
  updateFolder: grpc.MethodDefinition<google_cloud_resourcemanager_v2_folders_pb.UpdateFolderRequest, google_cloud_resourcemanager_v2_folders_pb.Folder>;
  moveFolder: grpc.MethodDefinition<google_cloud_resourcemanager_v2_folders_pb.MoveFolderRequest, google_longrunning_operations_pb.Operation>;
  deleteFolder: grpc.MethodDefinition<google_cloud_resourcemanager_v2_folders_pb.DeleteFolderRequest, google_cloud_resourcemanager_v2_folders_pb.Folder>;
  undeleteFolder: grpc.MethodDefinition<google_cloud_resourcemanager_v2_folders_pb.UndeleteFolderRequest, google_cloud_resourcemanager_v2_folders_pb.Folder>;
  getIamPolicy: grpc.MethodDefinition<google_iam_v1_iam_policy_pb.GetIamPolicyRequest, google_iam_v1_policy_pb.Policy>;
  setIamPolicy: grpc.MethodDefinition<google_iam_v1_iam_policy_pb.SetIamPolicyRequest, google_iam_v1_policy_pb.Policy>;
  testIamPermissions: grpc.MethodDefinition<google_iam_v1_iam_policy_pb.TestIamPermissionsRequest, google_iam_v1_iam_policy_pb.TestIamPermissionsResponse>;
}

export const FoldersService: IFoldersService;

export class FoldersClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  listFolders(argument: google_cloud_resourcemanager_v2_folders_pb.ListFoldersRequest, callback: grpc.requestCallback<google_cloud_resourcemanager_v2_folders_pb.ListFoldersResponse>): grpc.ClientUnaryCall;
  listFolders(argument: google_cloud_resourcemanager_v2_folders_pb.ListFoldersRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_resourcemanager_v2_folders_pb.ListFoldersResponse>): grpc.ClientUnaryCall;
  listFolders(argument: google_cloud_resourcemanager_v2_folders_pb.ListFoldersRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_resourcemanager_v2_folders_pb.ListFoldersResponse>): grpc.ClientUnaryCall;
  searchFolders(argument: google_cloud_resourcemanager_v2_folders_pb.SearchFoldersRequest, callback: grpc.requestCallback<google_cloud_resourcemanager_v2_folders_pb.SearchFoldersResponse>): grpc.ClientUnaryCall;
  searchFolders(argument: google_cloud_resourcemanager_v2_folders_pb.SearchFoldersRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_resourcemanager_v2_folders_pb.SearchFoldersResponse>): grpc.ClientUnaryCall;
  searchFolders(argument: google_cloud_resourcemanager_v2_folders_pb.SearchFoldersRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_resourcemanager_v2_folders_pb.SearchFoldersResponse>): grpc.ClientUnaryCall;
  getFolder(argument: google_cloud_resourcemanager_v2_folders_pb.GetFolderRequest, callback: grpc.requestCallback<google_cloud_resourcemanager_v2_folders_pb.Folder>): grpc.ClientUnaryCall;
  getFolder(argument: google_cloud_resourcemanager_v2_folders_pb.GetFolderRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_resourcemanager_v2_folders_pb.Folder>): grpc.ClientUnaryCall;
  getFolder(argument: google_cloud_resourcemanager_v2_folders_pb.GetFolderRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_resourcemanager_v2_folders_pb.Folder>): grpc.ClientUnaryCall;
  createFolder(argument: google_cloud_resourcemanager_v2_folders_pb.CreateFolderRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  createFolder(argument: google_cloud_resourcemanager_v2_folders_pb.CreateFolderRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  createFolder(argument: google_cloud_resourcemanager_v2_folders_pb.CreateFolderRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  updateFolder(argument: google_cloud_resourcemanager_v2_folders_pb.UpdateFolderRequest, callback: grpc.requestCallback<google_cloud_resourcemanager_v2_folders_pb.Folder>): grpc.ClientUnaryCall;
  updateFolder(argument: google_cloud_resourcemanager_v2_folders_pb.UpdateFolderRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_resourcemanager_v2_folders_pb.Folder>): grpc.ClientUnaryCall;
  updateFolder(argument: google_cloud_resourcemanager_v2_folders_pb.UpdateFolderRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_resourcemanager_v2_folders_pb.Folder>): grpc.ClientUnaryCall;
  moveFolder(argument: google_cloud_resourcemanager_v2_folders_pb.MoveFolderRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  moveFolder(argument: google_cloud_resourcemanager_v2_folders_pb.MoveFolderRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  moveFolder(argument: google_cloud_resourcemanager_v2_folders_pb.MoveFolderRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  deleteFolder(argument: google_cloud_resourcemanager_v2_folders_pb.DeleteFolderRequest, callback: grpc.requestCallback<google_cloud_resourcemanager_v2_folders_pb.Folder>): grpc.ClientUnaryCall;
  deleteFolder(argument: google_cloud_resourcemanager_v2_folders_pb.DeleteFolderRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_resourcemanager_v2_folders_pb.Folder>): grpc.ClientUnaryCall;
  deleteFolder(argument: google_cloud_resourcemanager_v2_folders_pb.DeleteFolderRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_resourcemanager_v2_folders_pb.Folder>): grpc.ClientUnaryCall;
  undeleteFolder(argument: google_cloud_resourcemanager_v2_folders_pb.UndeleteFolderRequest, callback: grpc.requestCallback<google_cloud_resourcemanager_v2_folders_pb.Folder>): grpc.ClientUnaryCall;
  undeleteFolder(argument: google_cloud_resourcemanager_v2_folders_pb.UndeleteFolderRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_resourcemanager_v2_folders_pb.Folder>): grpc.ClientUnaryCall;
  undeleteFolder(argument: google_cloud_resourcemanager_v2_folders_pb.UndeleteFolderRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_resourcemanager_v2_folders_pb.Folder>): grpc.ClientUnaryCall;
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
