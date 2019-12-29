// GENERATED CODE -- DO NOT EDIT!

// package: google.cloud.runtimeconfig.v1beta1
// file: google/cloud/runtimeconfig/v1beta1/runtimeconfig.proto

import * as google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb from "../../../../google/cloud/runtimeconfig/v1beta1/runtimeconfig_pb";
import * as google_cloud_runtimeconfig_v1beta1_resources_pb from "../../../../google/cloud/runtimeconfig/v1beta1/resources_pb";
import * as google_longrunning_operations_pb from "../../../../google/longrunning/operations_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "grpc";

interface IRuntimeConfigManagerService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  listConfigs: grpc.MethodDefinition<google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.ListConfigsRequest, google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.ListConfigsResponse>;
  getConfig: grpc.MethodDefinition<google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.GetConfigRequest, google_cloud_runtimeconfig_v1beta1_resources_pb.RuntimeConfig>;
  createConfig: grpc.MethodDefinition<google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.CreateConfigRequest, google_cloud_runtimeconfig_v1beta1_resources_pb.RuntimeConfig>;
  updateConfig: grpc.MethodDefinition<google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.UpdateConfigRequest, google_cloud_runtimeconfig_v1beta1_resources_pb.RuntimeConfig>;
  deleteConfig: grpc.MethodDefinition<google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.DeleteConfigRequest, google_protobuf_empty_pb.Empty>;
  listVariables: grpc.MethodDefinition<google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.ListVariablesRequest, google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.ListVariablesResponse>;
  getVariable: grpc.MethodDefinition<google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.GetVariableRequest, google_cloud_runtimeconfig_v1beta1_resources_pb.Variable>;
  watchVariable: grpc.MethodDefinition<google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.WatchVariableRequest, google_cloud_runtimeconfig_v1beta1_resources_pb.Variable>;
  createVariable: grpc.MethodDefinition<google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.CreateVariableRequest, google_cloud_runtimeconfig_v1beta1_resources_pb.Variable>;
  updateVariable: grpc.MethodDefinition<google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.UpdateVariableRequest, google_cloud_runtimeconfig_v1beta1_resources_pb.Variable>;
  deleteVariable: grpc.MethodDefinition<google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.DeleteVariableRequest, google_protobuf_empty_pb.Empty>;
  listWaiters: grpc.MethodDefinition<google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.ListWaitersRequest, google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.ListWaitersResponse>;
  getWaiter: grpc.MethodDefinition<google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.GetWaiterRequest, google_cloud_runtimeconfig_v1beta1_resources_pb.Waiter>;
  createWaiter: grpc.MethodDefinition<google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.CreateWaiterRequest, google_longrunning_operations_pb.Operation>;
  deleteWaiter: grpc.MethodDefinition<google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.DeleteWaiterRequest, google_protobuf_empty_pb.Empty>;
}

export const RuntimeConfigManagerService: IRuntimeConfigManagerService;

export class RuntimeConfigManagerClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  listConfigs(argument: google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.ListConfigsRequest, callback: grpc.requestCallback<google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.ListConfigsResponse>): grpc.ClientUnaryCall;
  listConfigs(argument: google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.ListConfigsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.ListConfigsResponse>): grpc.ClientUnaryCall;
  listConfigs(argument: google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.ListConfigsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.ListConfigsResponse>): grpc.ClientUnaryCall;
  getConfig(argument: google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.GetConfigRequest, callback: grpc.requestCallback<google_cloud_runtimeconfig_v1beta1_resources_pb.RuntimeConfig>): grpc.ClientUnaryCall;
  getConfig(argument: google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.GetConfigRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_runtimeconfig_v1beta1_resources_pb.RuntimeConfig>): grpc.ClientUnaryCall;
  getConfig(argument: google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.GetConfigRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_runtimeconfig_v1beta1_resources_pb.RuntimeConfig>): grpc.ClientUnaryCall;
  createConfig(argument: google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.CreateConfigRequest, callback: grpc.requestCallback<google_cloud_runtimeconfig_v1beta1_resources_pb.RuntimeConfig>): grpc.ClientUnaryCall;
  createConfig(argument: google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.CreateConfigRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_runtimeconfig_v1beta1_resources_pb.RuntimeConfig>): grpc.ClientUnaryCall;
  createConfig(argument: google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.CreateConfigRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_runtimeconfig_v1beta1_resources_pb.RuntimeConfig>): grpc.ClientUnaryCall;
  updateConfig(argument: google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.UpdateConfigRequest, callback: grpc.requestCallback<google_cloud_runtimeconfig_v1beta1_resources_pb.RuntimeConfig>): grpc.ClientUnaryCall;
  updateConfig(argument: google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.UpdateConfigRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_runtimeconfig_v1beta1_resources_pb.RuntimeConfig>): grpc.ClientUnaryCall;
  updateConfig(argument: google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.UpdateConfigRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_runtimeconfig_v1beta1_resources_pb.RuntimeConfig>): grpc.ClientUnaryCall;
  deleteConfig(argument: google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.DeleteConfigRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteConfig(argument: google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.DeleteConfigRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteConfig(argument: google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.DeleteConfigRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  listVariables(argument: google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.ListVariablesRequest, callback: grpc.requestCallback<google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.ListVariablesResponse>): grpc.ClientUnaryCall;
  listVariables(argument: google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.ListVariablesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.ListVariablesResponse>): grpc.ClientUnaryCall;
  listVariables(argument: google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.ListVariablesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.ListVariablesResponse>): grpc.ClientUnaryCall;
  getVariable(argument: google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.GetVariableRequest, callback: grpc.requestCallback<google_cloud_runtimeconfig_v1beta1_resources_pb.Variable>): grpc.ClientUnaryCall;
  getVariable(argument: google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.GetVariableRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_runtimeconfig_v1beta1_resources_pb.Variable>): grpc.ClientUnaryCall;
  getVariable(argument: google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.GetVariableRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_runtimeconfig_v1beta1_resources_pb.Variable>): grpc.ClientUnaryCall;
  watchVariable(argument: google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.WatchVariableRequest, callback: grpc.requestCallback<google_cloud_runtimeconfig_v1beta1_resources_pb.Variable>): grpc.ClientUnaryCall;
  watchVariable(argument: google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.WatchVariableRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_runtimeconfig_v1beta1_resources_pb.Variable>): grpc.ClientUnaryCall;
  watchVariable(argument: google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.WatchVariableRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_runtimeconfig_v1beta1_resources_pb.Variable>): grpc.ClientUnaryCall;
  createVariable(argument: google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.CreateVariableRequest, callback: grpc.requestCallback<google_cloud_runtimeconfig_v1beta1_resources_pb.Variable>): grpc.ClientUnaryCall;
  createVariable(argument: google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.CreateVariableRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_runtimeconfig_v1beta1_resources_pb.Variable>): grpc.ClientUnaryCall;
  createVariable(argument: google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.CreateVariableRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_runtimeconfig_v1beta1_resources_pb.Variable>): grpc.ClientUnaryCall;
  updateVariable(argument: google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.UpdateVariableRequest, callback: grpc.requestCallback<google_cloud_runtimeconfig_v1beta1_resources_pb.Variable>): grpc.ClientUnaryCall;
  updateVariable(argument: google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.UpdateVariableRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_runtimeconfig_v1beta1_resources_pb.Variable>): grpc.ClientUnaryCall;
  updateVariable(argument: google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.UpdateVariableRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_runtimeconfig_v1beta1_resources_pb.Variable>): grpc.ClientUnaryCall;
  deleteVariable(argument: google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.DeleteVariableRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteVariable(argument: google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.DeleteVariableRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteVariable(argument: google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.DeleteVariableRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  listWaiters(argument: google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.ListWaitersRequest, callback: grpc.requestCallback<google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.ListWaitersResponse>): grpc.ClientUnaryCall;
  listWaiters(argument: google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.ListWaitersRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.ListWaitersResponse>): grpc.ClientUnaryCall;
  listWaiters(argument: google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.ListWaitersRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.ListWaitersResponse>): grpc.ClientUnaryCall;
  getWaiter(argument: google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.GetWaiterRequest, callback: grpc.requestCallback<google_cloud_runtimeconfig_v1beta1_resources_pb.Waiter>): grpc.ClientUnaryCall;
  getWaiter(argument: google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.GetWaiterRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_runtimeconfig_v1beta1_resources_pb.Waiter>): grpc.ClientUnaryCall;
  getWaiter(argument: google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.GetWaiterRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_runtimeconfig_v1beta1_resources_pb.Waiter>): grpc.ClientUnaryCall;
  createWaiter(argument: google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.CreateWaiterRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  createWaiter(argument: google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.CreateWaiterRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  createWaiter(argument: google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.CreateWaiterRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  deleteWaiter(argument: google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.DeleteWaiterRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteWaiter(argument: google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.DeleteWaiterRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteWaiter(argument: google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.DeleteWaiterRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
}
