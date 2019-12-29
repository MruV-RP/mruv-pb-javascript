// GENERATED CODE -- DO NOT EDIT!

// package: google.spanner.admin.instance.v1
// file: google/spanner/admin/instance/v1/spanner_instance_admin.proto

import * as google_spanner_admin_instance_v1_spanner_instance_admin_pb from "../../../../../google/spanner/admin/instance/v1/spanner_instance_admin_pb";
import * as google_iam_v1_iam_policy_pb from "../../../../../google/iam/v1/iam_policy_pb";
import * as google_iam_v1_policy_pb from "../../../../../google/iam/v1/policy_pb";
import * as google_longrunning_operations_pb from "../../../../../google/longrunning/operations_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "grpc";

interface IInstanceAdminService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  listInstanceConfigs: grpc.MethodDefinition<google_spanner_admin_instance_v1_spanner_instance_admin_pb.ListInstanceConfigsRequest, google_spanner_admin_instance_v1_spanner_instance_admin_pb.ListInstanceConfigsResponse>;
  getInstanceConfig: grpc.MethodDefinition<google_spanner_admin_instance_v1_spanner_instance_admin_pb.GetInstanceConfigRequest, google_spanner_admin_instance_v1_spanner_instance_admin_pb.InstanceConfig>;
  listInstances: grpc.MethodDefinition<google_spanner_admin_instance_v1_spanner_instance_admin_pb.ListInstancesRequest, google_spanner_admin_instance_v1_spanner_instance_admin_pb.ListInstancesResponse>;
  getInstance: grpc.MethodDefinition<google_spanner_admin_instance_v1_spanner_instance_admin_pb.GetInstanceRequest, google_spanner_admin_instance_v1_spanner_instance_admin_pb.Instance>;
  createInstance: grpc.MethodDefinition<google_spanner_admin_instance_v1_spanner_instance_admin_pb.CreateInstanceRequest, google_longrunning_operations_pb.Operation>;
  updateInstance: grpc.MethodDefinition<google_spanner_admin_instance_v1_spanner_instance_admin_pb.UpdateInstanceRequest, google_longrunning_operations_pb.Operation>;
  deleteInstance: grpc.MethodDefinition<google_spanner_admin_instance_v1_spanner_instance_admin_pb.DeleteInstanceRequest, google_protobuf_empty_pb.Empty>;
  setIamPolicy: grpc.MethodDefinition<google_iam_v1_iam_policy_pb.SetIamPolicyRequest, google_iam_v1_policy_pb.Policy>;
  getIamPolicy: grpc.MethodDefinition<google_iam_v1_iam_policy_pb.GetIamPolicyRequest, google_iam_v1_policy_pb.Policy>;
  testIamPermissions: grpc.MethodDefinition<google_iam_v1_iam_policy_pb.TestIamPermissionsRequest, google_iam_v1_iam_policy_pb.TestIamPermissionsResponse>;
}

export const InstanceAdminService: IInstanceAdminService;

export class InstanceAdminClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  listInstanceConfigs(argument: google_spanner_admin_instance_v1_spanner_instance_admin_pb.ListInstanceConfigsRequest, callback: grpc.requestCallback<google_spanner_admin_instance_v1_spanner_instance_admin_pb.ListInstanceConfigsResponse>): grpc.ClientUnaryCall;
  listInstanceConfigs(argument: google_spanner_admin_instance_v1_spanner_instance_admin_pb.ListInstanceConfigsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_spanner_admin_instance_v1_spanner_instance_admin_pb.ListInstanceConfigsResponse>): grpc.ClientUnaryCall;
  listInstanceConfigs(argument: google_spanner_admin_instance_v1_spanner_instance_admin_pb.ListInstanceConfigsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_spanner_admin_instance_v1_spanner_instance_admin_pb.ListInstanceConfigsResponse>): grpc.ClientUnaryCall;
  getInstanceConfig(argument: google_spanner_admin_instance_v1_spanner_instance_admin_pb.GetInstanceConfigRequest, callback: grpc.requestCallback<google_spanner_admin_instance_v1_spanner_instance_admin_pb.InstanceConfig>): grpc.ClientUnaryCall;
  getInstanceConfig(argument: google_spanner_admin_instance_v1_spanner_instance_admin_pb.GetInstanceConfigRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_spanner_admin_instance_v1_spanner_instance_admin_pb.InstanceConfig>): grpc.ClientUnaryCall;
  getInstanceConfig(argument: google_spanner_admin_instance_v1_spanner_instance_admin_pb.GetInstanceConfigRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_spanner_admin_instance_v1_spanner_instance_admin_pb.InstanceConfig>): grpc.ClientUnaryCall;
  listInstances(argument: google_spanner_admin_instance_v1_spanner_instance_admin_pb.ListInstancesRequest, callback: grpc.requestCallback<google_spanner_admin_instance_v1_spanner_instance_admin_pb.ListInstancesResponse>): grpc.ClientUnaryCall;
  listInstances(argument: google_spanner_admin_instance_v1_spanner_instance_admin_pb.ListInstancesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_spanner_admin_instance_v1_spanner_instance_admin_pb.ListInstancesResponse>): grpc.ClientUnaryCall;
  listInstances(argument: google_spanner_admin_instance_v1_spanner_instance_admin_pb.ListInstancesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_spanner_admin_instance_v1_spanner_instance_admin_pb.ListInstancesResponse>): grpc.ClientUnaryCall;
  getInstance(argument: google_spanner_admin_instance_v1_spanner_instance_admin_pb.GetInstanceRequest, callback: grpc.requestCallback<google_spanner_admin_instance_v1_spanner_instance_admin_pb.Instance>): grpc.ClientUnaryCall;
  getInstance(argument: google_spanner_admin_instance_v1_spanner_instance_admin_pb.GetInstanceRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_spanner_admin_instance_v1_spanner_instance_admin_pb.Instance>): grpc.ClientUnaryCall;
  getInstance(argument: google_spanner_admin_instance_v1_spanner_instance_admin_pb.GetInstanceRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_spanner_admin_instance_v1_spanner_instance_admin_pb.Instance>): grpc.ClientUnaryCall;
  createInstance(argument: google_spanner_admin_instance_v1_spanner_instance_admin_pb.CreateInstanceRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  createInstance(argument: google_spanner_admin_instance_v1_spanner_instance_admin_pb.CreateInstanceRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  createInstance(argument: google_spanner_admin_instance_v1_spanner_instance_admin_pb.CreateInstanceRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  updateInstance(argument: google_spanner_admin_instance_v1_spanner_instance_admin_pb.UpdateInstanceRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  updateInstance(argument: google_spanner_admin_instance_v1_spanner_instance_admin_pb.UpdateInstanceRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  updateInstance(argument: google_spanner_admin_instance_v1_spanner_instance_admin_pb.UpdateInstanceRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  deleteInstance(argument: google_spanner_admin_instance_v1_spanner_instance_admin_pb.DeleteInstanceRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteInstance(argument: google_spanner_admin_instance_v1_spanner_instance_admin_pb.DeleteInstanceRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteInstance(argument: google_spanner_admin_instance_v1_spanner_instance_admin_pb.DeleteInstanceRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
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
