// GENERATED CODE -- DO NOT EDIT!

// package: google.bigtable.admin.v2
// file: google/bigtable/admin/v2/bigtable_instance_admin.proto

import * as google_bigtable_admin_v2_bigtable_instance_admin_pb from "../../../../google/bigtable/admin/v2/bigtable_instance_admin_pb";
import * as google_bigtable_admin_v2_instance_pb from "../../../../google/bigtable/admin/v2/instance_pb";
import * as google_iam_v1_iam_policy_pb from "../../../../google/iam/v1/iam_policy_pb";
import * as google_iam_v1_policy_pb from "../../../../google/iam/v1/policy_pb";
import * as google_longrunning_operations_pb from "../../../../google/longrunning/operations_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "grpc";

interface IBigtableInstanceAdminService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createInstance: grpc.MethodDefinition<google_bigtable_admin_v2_bigtable_instance_admin_pb.CreateInstanceRequest, google_longrunning_operations_pb.Operation>;
  getInstance: grpc.MethodDefinition<google_bigtable_admin_v2_bigtable_instance_admin_pb.GetInstanceRequest, google_bigtable_admin_v2_instance_pb.Instance>;
  listInstances: grpc.MethodDefinition<google_bigtable_admin_v2_bigtable_instance_admin_pb.ListInstancesRequest, google_bigtable_admin_v2_bigtable_instance_admin_pb.ListInstancesResponse>;
  updateInstance: grpc.MethodDefinition<google_bigtable_admin_v2_instance_pb.Instance, google_bigtable_admin_v2_instance_pb.Instance>;
  partialUpdateInstance: grpc.MethodDefinition<google_bigtable_admin_v2_bigtable_instance_admin_pb.PartialUpdateInstanceRequest, google_longrunning_operations_pb.Operation>;
  deleteInstance: grpc.MethodDefinition<google_bigtable_admin_v2_bigtable_instance_admin_pb.DeleteInstanceRequest, google_protobuf_empty_pb.Empty>;
  createCluster: grpc.MethodDefinition<google_bigtable_admin_v2_bigtable_instance_admin_pb.CreateClusterRequest, google_longrunning_operations_pb.Operation>;
  getCluster: grpc.MethodDefinition<google_bigtable_admin_v2_bigtable_instance_admin_pb.GetClusterRequest, google_bigtable_admin_v2_instance_pb.Cluster>;
  listClusters: grpc.MethodDefinition<google_bigtable_admin_v2_bigtable_instance_admin_pb.ListClustersRequest, google_bigtable_admin_v2_bigtable_instance_admin_pb.ListClustersResponse>;
  updateCluster: grpc.MethodDefinition<google_bigtable_admin_v2_instance_pb.Cluster, google_longrunning_operations_pb.Operation>;
  deleteCluster: grpc.MethodDefinition<google_bigtable_admin_v2_bigtable_instance_admin_pb.DeleteClusterRequest, google_protobuf_empty_pb.Empty>;
  createAppProfile: grpc.MethodDefinition<google_bigtable_admin_v2_bigtable_instance_admin_pb.CreateAppProfileRequest, google_bigtable_admin_v2_instance_pb.AppProfile>;
  getAppProfile: grpc.MethodDefinition<google_bigtable_admin_v2_bigtable_instance_admin_pb.GetAppProfileRequest, google_bigtable_admin_v2_instance_pb.AppProfile>;
  listAppProfiles: grpc.MethodDefinition<google_bigtable_admin_v2_bigtable_instance_admin_pb.ListAppProfilesRequest, google_bigtable_admin_v2_bigtable_instance_admin_pb.ListAppProfilesResponse>;
  updateAppProfile: grpc.MethodDefinition<google_bigtable_admin_v2_bigtable_instance_admin_pb.UpdateAppProfileRequest, google_longrunning_operations_pb.Operation>;
  deleteAppProfile: grpc.MethodDefinition<google_bigtable_admin_v2_bigtable_instance_admin_pb.DeleteAppProfileRequest, google_protobuf_empty_pb.Empty>;
  getIamPolicy: grpc.MethodDefinition<google_iam_v1_iam_policy_pb.GetIamPolicyRequest, google_iam_v1_policy_pb.Policy>;
  setIamPolicy: grpc.MethodDefinition<google_iam_v1_iam_policy_pb.SetIamPolicyRequest, google_iam_v1_policy_pb.Policy>;
  testIamPermissions: grpc.MethodDefinition<google_iam_v1_iam_policy_pb.TestIamPermissionsRequest, google_iam_v1_iam_policy_pb.TestIamPermissionsResponse>;
}

export const BigtableInstanceAdminService: IBigtableInstanceAdminService;

export class BigtableInstanceAdminClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  createInstance(argument: google_bigtable_admin_v2_bigtable_instance_admin_pb.CreateInstanceRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  createInstance(argument: google_bigtable_admin_v2_bigtable_instance_admin_pb.CreateInstanceRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  createInstance(argument: google_bigtable_admin_v2_bigtable_instance_admin_pb.CreateInstanceRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  getInstance(argument: google_bigtable_admin_v2_bigtable_instance_admin_pb.GetInstanceRequest, callback: grpc.requestCallback<google_bigtable_admin_v2_instance_pb.Instance>): grpc.ClientUnaryCall;
  getInstance(argument: google_bigtable_admin_v2_bigtable_instance_admin_pb.GetInstanceRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_bigtable_admin_v2_instance_pb.Instance>): grpc.ClientUnaryCall;
  getInstance(argument: google_bigtable_admin_v2_bigtable_instance_admin_pb.GetInstanceRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_bigtable_admin_v2_instance_pb.Instance>): grpc.ClientUnaryCall;
  listInstances(argument: google_bigtable_admin_v2_bigtable_instance_admin_pb.ListInstancesRequest, callback: grpc.requestCallback<google_bigtable_admin_v2_bigtable_instance_admin_pb.ListInstancesResponse>): grpc.ClientUnaryCall;
  listInstances(argument: google_bigtable_admin_v2_bigtable_instance_admin_pb.ListInstancesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_bigtable_admin_v2_bigtable_instance_admin_pb.ListInstancesResponse>): grpc.ClientUnaryCall;
  listInstances(argument: google_bigtable_admin_v2_bigtable_instance_admin_pb.ListInstancesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_bigtable_admin_v2_bigtable_instance_admin_pb.ListInstancesResponse>): grpc.ClientUnaryCall;
  updateInstance(argument: google_bigtable_admin_v2_instance_pb.Instance, callback: grpc.requestCallback<google_bigtable_admin_v2_instance_pb.Instance>): grpc.ClientUnaryCall;
  updateInstance(argument: google_bigtable_admin_v2_instance_pb.Instance, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_bigtable_admin_v2_instance_pb.Instance>): grpc.ClientUnaryCall;
  updateInstance(argument: google_bigtable_admin_v2_instance_pb.Instance, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_bigtable_admin_v2_instance_pb.Instance>): grpc.ClientUnaryCall;
  partialUpdateInstance(argument: google_bigtable_admin_v2_bigtable_instance_admin_pb.PartialUpdateInstanceRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  partialUpdateInstance(argument: google_bigtable_admin_v2_bigtable_instance_admin_pb.PartialUpdateInstanceRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  partialUpdateInstance(argument: google_bigtable_admin_v2_bigtable_instance_admin_pb.PartialUpdateInstanceRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  deleteInstance(argument: google_bigtable_admin_v2_bigtable_instance_admin_pb.DeleteInstanceRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteInstance(argument: google_bigtable_admin_v2_bigtable_instance_admin_pb.DeleteInstanceRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteInstance(argument: google_bigtable_admin_v2_bigtable_instance_admin_pb.DeleteInstanceRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  createCluster(argument: google_bigtable_admin_v2_bigtable_instance_admin_pb.CreateClusterRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  createCluster(argument: google_bigtable_admin_v2_bigtable_instance_admin_pb.CreateClusterRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  createCluster(argument: google_bigtable_admin_v2_bigtable_instance_admin_pb.CreateClusterRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  getCluster(argument: google_bigtable_admin_v2_bigtable_instance_admin_pb.GetClusterRequest, callback: grpc.requestCallback<google_bigtable_admin_v2_instance_pb.Cluster>): grpc.ClientUnaryCall;
  getCluster(argument: google_bigtable_admin_v2_bigtable_instance_admin_pb.GetClusterRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_bigtable_admin_v2_instance_pb.Cluster>): grpc.ClientUnaryCall;
  getCluster(argument: google_bigtable_admin_v2_bigtable_instance_admin_pb.GetClusterRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_bigtable_admin_v2_instance_pb.Cluster>): grpc.ClientUnaryCall;
  listClusters(argument: google_bigtable_admin_v2_bigtable_instance_admin_pb.ListClustersRequest, callback: grpc.requestCallback<google_bigtable_admin_v2_bigtable_instance_admin_pb.ListClustersResponse>): grpc.ClientUnaryCall;
  listClusters(argument: google_bigtable_admin_v2_bigtable_instance_admin_pb.ListClustersRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_bigtable_admin_v2_bigtable_instance_admin_pb.ListClustersResponse>): grpc.ClientUnaryCall;
  listClusters(argument: google_bigtable_admin_v2_bigtable_instance_admin_pb.ListClustersRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_bigtable_admin_v2_bigtable_instance_admin_pb.ListClustersResponse>): grpc.ClientUnaryCall;
  updateCluster(argument: google_bigtable_admin_v2_instance_pb.Cluster, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  updateCluster(argument: google_bigtable_admin_v2_instance_pb.Cluster, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  updateCluster(argument: google_bigtable_admin_v2_instance_pb.Cluster, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  deleteCluster(argument: google_bigtable_admin_v2_bigtable_instance_admin_pb.DeleteClusterRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteCluster(argument: google_bigtable_admin_v2_bigtable_instance_admin_pb.DeleteClusterRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteCluster(argument: google_bigtable_admin_v2_bigtable_instance_admin_pb.DeleteClusterRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  createAppProfile(argument: google_bigtable_admin_v2_bigtable_instance_admin_pb.CreateAppProfileRequest, callback: grpc.requestCallback<google_bigtable_admin_v2_instance_pb.AppProfile>): grpc.ClientUnaryCall;
  createAppProfile(argument: google_bigtable_admin_v2_bigtable_instance_admin_pb.CreateAppProfileRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_bigtable_admin_v2_instance_pb.AppProfile>): grpc.ClientUnaryCall;
  createAppProfile(argument: google_bigtable_admin_v2_bigtable_instance_admin_pb.CreateAppProfileRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_bigtable_admin_v2_instance_pb.AppProfile>): grpc.ClientUnaryCall;
  getAppProfile(argument: google_bigtable_admin_v2_bigtable_instance_admin_pb.GetAppProfileRequest, callback: grpc.requestCallback<google_bigtable_admin_v2_instance_pb.AppProfile>): grpc.ClientUnaryCall;
  getAppProfile(argument: google_bigtable_admin_v2_bigtable_instance_admin_pb.GetAppProfileRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_bigtable_admin_v2_instance_pb.AppProfile>): grpc.ClientUnaryCall;
  getAppProfile(argument: google_bigtable_admin_v2_bigtable_instance_admin_pb.GetAppProfileRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_bigtable_admin_v2_instance_pb.AppProfile>): grpc.ClientUnaryCall;
  listAppProfiles(argument: google_bigtable_admin_v2_bigtable_instance_admin_pb.ListAppProfilesRequest, callback: grpc.requestCallback<google_bigtable_admin_v2_bigtable_instance_admin_pb.ListAppProfilesResponse>): grpc.ClientUnaryCall;
  listAppProfiles(argument: google_bigtable_admin_v2_bigtable_instance_admin_pb.ListAppProfilesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_bigtable_admin_v2_bigtable_instance_admin_pb.ListAppProfilesResponse>): grpc.ClientUnaryCall;
  listAppProfiles(argument: google_bigtable_admin_v2_bigtable_instance_admin_pb.ListAppProfilesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_bigtable_admin_v2_bigtable_instance_admin_pb.ListAppProfilesResponse>): grpc.ClientUnaryCall;
  updateAppProfile(argument: google_bigtable_admin_v2_bigtable_instance_admin_pb.UpdateAppProfileRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  updateAppProfile(argument: google_bigtable_admin_v2_bigtable_instance_admin_pb.UpdateAppProfileRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  updateAppProfile(argument: google_bigtable_admin_v2_bigtable_instance_admin_pb.UpdateAppProfileRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  deleteAppProfile(argument: google_bigtable_admin_v2_bigtable_instance_admin_pb.DeleteAppProfileRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteAppProfile(argument: google_bigtable_admin_v2_bigtable_instance_admin_pb.DeleteAppProfileRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteAppProfile(argument: google_bigtable_admin_v2_bigtable_instance_admin_pb.DeleteAppProfileRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
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
