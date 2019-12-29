// GENERATED CODE -- DO NOT EDIT!

// package: google.devtools.cloudbuild.v1
// file: google/devtools/cloudbuild/v1/cloudbuild.proto

import * as google_devtools_cloudbuild_v1_cloudbuild_pb from "../../../../google/devtools/cloudbuild/v1/cloudbuild_pb";
import * as google_longrunning_operations_pb from "../../../../google/longrunning/operations_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "grpc";

interface ICloudBuildService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createBuild: grpc.MethodDefinition<google_devtools_cloudbuild_v1_cloudbuild_pb.CreateBuildRequest, google_longrunning_operations_pb.Operation>;
  getBuild: grpc.MethodDefinition<google_devtools_cloudbuild_v1_cloudbuild_pb.GetBuildRequest, google_devtools_cloudbuild_v1_cloudbuild_pb.Build>;
  listBuilds: grpc.MethodDefinition<google_devtools_cloudbuild_v1_cloudbuild_pb.ListBuildsRequest, google_devtools_cloudbuild_v1_cloudbuild_pb.ListBuildsResponse>;
  cancelBuild: grpc.MethodDefinition<google_devtools_cloudbuild_v1_cloudbuild_pb.CancelBuildRequest, google_devtools_cloudbuild_v1_cloudbuild_pb.Build>;
  retryBuild: grpc.MethodDefinition<google_devtools_cloudbuild_v1_cloudbuild_pb.RetryBuildRequest, google_longrunning_operations_pb.Operation>;
  createBuildTrigger: grpc.MethodDefinition<google_devtools_cloudbuild_v1_cloudbuild_pb.CreateBuildTriggerRequest, google_devtools_cloudbuild_v1_cloudbuild_pb.BuildTrigger>;
  getBuildTrigger: grpc.MethodDefinition<google_devtools_cloudbuild_v1_cloudbuild_pb.GetBuildTriggerRequest, google_devtools_cloudbuild_v1_cloudbuild_pb.BuildTrigger>;
  listBuildTriggers: grpc.MethodDefinition<google_devtools_cloudbuild_v1_cloudbuild_pb.ListBuildTriggersRequest, google_devtools_cloudbuild_v1_cloudbuild_pb.ListBuildTriggersResponse>;
  deleteBuildTrigger: grpc.MethodDefinition<google_devtools_cloudbuild_v1_cloudbuild_pb.DeleteBuildTriggerRequest, google_protobuf_empty_pb.Empty>;
  updateBuildTrigger: grpc.MethodDefinition<google_devtools_cloudbuild_v1_cloudbuild_pb.UpdateBuildTriggerRequest, google_devtools_cloudbuild_v1_cloudbuild_pb.BuildTrigger>;
  runBuildTrigger: grpc.MethodDefinition<google_devtools_cloudbuild_v1_cloudbuild_pb.RunBuildTriggerRequest, google_longrunning_operations_pb.Operation>;
  createWorkerPool: grpc.MethodDefinition<google_devtools_cloudbuild_v1_cloudbuild_pb.CreateWorkerPoolRequest, google_devtools_cloudbuild_v1_cloudbuild_pb.WorkerPool>;
  getWorkerPool: grpc.MethodDefinition<google_devtools_cloudbuild_v1_cloudbuild_pb.GetWorkerPoolRequest, google_devtools_cloudbuild_v1_cloudbuild_pb.WorkerPool>;
  deleteWorkerPool: grpc.MethodDefinition<google_devtools_cloudbuild_v1_cloudbuild_pb.DeleteWorkerPoolRequest, google_protobuf_empty_pb.Empty>;
  updateWorkerPool: grpc.MethodDefinition<google_devtools_cloudbuild_v1_cloudbuild_pb.UpdateWorkerPoolRequest, google_devtools_cloudbuild_v1_cloudbuild_pb.WorkerPool>;
  listWorkerPools: grpc.MethodDefinition<google_devtools_cloudbuild_v1_cloudbuild_pb.ListWorkerPoolsRequest, google_devtools_cloudbuild_v1_cloudbuild_pb.ListWorkerPoolsResponse>;
}

export const CloudBuildService: ICloudBuildService;

export class CloudBuildClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  createBuild(argument: google_devtools_cloudbuild_v1_cloudbuild_pb.CreateBuildRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  createBuild(argument: google_devtools_cloudbuild_v1_cloudbuild_pb.CreateBuildRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  createBuild(argument: google_devtools_cloudbuild_v1_cloudbuild_pb.CreateBuildRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  getBuild(argument: google_devtools_cloudbuild_v1_cloudbuild_pb.GetBuildRequest, callback: grpc.requestCallback<google_devtools_cloudbuild_v1_cloudbuild_pb.Build>): grpc.ClientUnaryCall;
  getBuild(argument: google_devtools_cloudbuild_v1_cloudbuild_pb.GetBuildRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_cloudbuild_v1_cloudbuild_pb.Build>): grpc.ClientUnaryCall;
  getBuild(argument: google_devtools_cloudbuild_v1_cloudbuild_pb.GetBuildRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_cloudbuild_v1_cloudbuild_pb.Build>): grpc.ClientUnaryCall;
  listBuilds(argument: google_devtools_cloudbuild_v1_cloudbuild_pb.ListBuildsRequest, callback: grpc.requestCallback<google_devtools_cloudbuild_v1_cloudbuild_pb.ListBuildsResponse>): grpc.ClientUnaryCall;
  listBuilds(argument: google_devtools_cloudbuild_v1_cloudbuild_pb.ListBuildsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_cloudbuild_v1_cloudbuild_pb.ListBuildsResponse>): grpc.ClientUnaryCall;
  listBuilds(argument: google_devtools_cloudbuild_v1_cloudbuild_pb.ListBuildsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_cloudbuild_v1_cloudbuild_pb.ListBuildsResponse>): grpc.ClientUnaryCall;
  cancelBuild(argument: google_devtools_cloudbuild_v1_cloudbuild_pb.CancelBuildRequest, callback: grpc.requestCallback<google_devtools_cloudbuild_v1_cloudbuild_pb.Build>): grpc.ClientUnaryCall;
  cancelBuild(argument: google_devtools_cloudbuild_v1_cloudbuild_pb.CancelBuildRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_cloudbuild_v1_cloudbuild_pb.Build>): grpc.ClientUnaryCall;
  cancelBuild(argument: google_devtools_cloudbuild_v1_cloudbuild_pb.CancelBuildRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_cloudbuild_v1_cloudbuild_pb.Build>): grpc.ClientUnaryCall;
  retryBuild(argument: google_devtools_cloudbuild_v1_cloudbuild_pb.RetryBuildRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  retryBuild(argument: google_devtools_cloudbuild_v1_cloudbuild_pb.RetryBuildRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  retryBuild(argument: google_devtools_cloudbuild_v1_cloudbuild_pb.RetryBuildRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  createBuildTrigger(argument: google_devtools_cloudbuild_v1_cloudbuild_pb.CreateBuildTriggerRequest, callback: grpc.requestCallback<google_devtools_cloudbuild_v1_cloudbuild_pb.BuildTrigger>): grpc.ClientUnaryCall;
  createBuildTrigger(argument: google_devtools_cloudbuild_v1_cloudbuild_pb.CreateBuildTriggerRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_cloudbuild_v1_cloudbuild_pb.BuildTrigger>): grpc.ClientUnaryCall;
  createBuildTrigger(argument: google_devtools_cloudbuild_v1_cloudbuild_pb.CreateBuildTriggerRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_cloudbuild_v1_cloudbuild_pb.BuildTrigger>): grpc.ClientUnaryCall;
  getBuildTrigger(argument: google_devtools_cloudbuild_v1_cloudbuild_pb.GetBuildTriggerRequest, callback: grpc.requestCallback<google_devtools_cloudbuild_v1_cloudbuild_pb.BuildTrigger>): grpc.ClientUnaryCall;
  getBuildTrigger(argument: google_devtools_cloudbuild_v1_cloudbuild_pb.GetBuildTriggerRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_cloudbuild_v1_cloudbuild_pb.BuildTrigger>): grpc.ClientUnaryCall;
  getBuildTrigger(argument: google_devtools_cloudbuild_v1_cloudbuild_pb.GetBuildTriggerRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_cloudbuild_v1_cloudbuild_pb.BuildTrigger>): grpc.ClientUnaryCall;
  listBuildTriggers(argument: google_devtools_cloudbuild_v1_cloudbuild_pb.ListBuildTriggersRequest, callback: grpc.requestCallback<google_devtools_cloudbuild_v1_cloudbuild_pb.ListBuildTriggersResponse>): grpc.ClientUnaryCall;
  listBuildTriggers(argument: google_devtools_cloudbuild_v1_cloudbuild_pb.ListBuildTriggersRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_cloudbuild_v1_cloudbuild_pb.ListBuildTriggersResponse>): grpc.ClientUnaryCall;
  listBuildTriggers(argument: google_devtools_cloudbuild_v1_cloudbuild_pb.ListBuildTriggersRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_cloudbuild_v1_cloudbuild_pb.ListBuildTriggersResponse>): grpc.ClientUnaryCall;
  deleteBuildTrigger(argument: google_devtools_cloudbuild_v1_cloudbuild_pb.DeleteBuildTriggerRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteBuildTrigger(argument: google_devtools_cloudbuild_v1_cloudbuild_pb.DeleteBuildTriggerRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteBuildTrigger(argument: google_devtools_cloudbuild_v1_cloudbuild_pb.DeleteBuildTriggerRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  updateBuildTrigger(argument: google_devtools_cloudbuild_v1_cloudbuild_pb.UpdateBuildTriggerRequest, callback: grpc.requestCallback<google_devtools_cloudbuild_v1_cloudbuild_pb.BuildTrigger>): grpc.ClientUnaryCall;
  updateBuildTrigger(argument: google_devtools_cloudbuild_v1_cloudbuild_pb.UpdateBuildTriggerRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_cloudbuild_v1_cloudbuild_pb.BuildTrigger>): grpc.ClientUnaryCall;
  updateBuildTrigger(argument: google_devtools_cloudbuild_v1_cloudbuild_pb.UpdateBuildTriggerRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_cloudbuild_v1_cloudbuild_pb.BuildTrigger>): grpc.ClientUnaryCall;
  runBuildTrigger(argument: google_devtools_cloudbuild_v1_cloudbuild_pb.RunBuildTriggerRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  runBuildTrigger(argument: google_devtools_cloudbuild_v1_cloudbuild_pb.RunBuildTriggerRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  runBuildTrigger(argument: google_devtools_cloudbuild_v1_cloudbuild_pb.RunBuildTriggerRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  createWorkerPool(argument: google_devtools_cloudbuild_v1_cloudbuild_pb.CreateWorkerPoolRequest, callback: grpc.requestCallback<google_devtools_cloudbuild_v1_cloudbuild_pb.WorkerPool>): grpc.ClientUnaryCall;
  createWorkerPool(argument: google_devtools_cloudbuild_v1_cloudbuild_pb.CreateWorkerPoolRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_cloudbuild_v1_cloudbuild_pb.WorkerPool>): grpc.ClientUnaryCall;
  createWorkerPool(argument: google_devtools_cloudbuild_v1_cloudbuild_pb.CreateWorkerPoolRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_cloudbuild_v1_cloudbuild_pb.WorkerPool>): grpc.ClientUnaryCall;
  getWorkerPool(argument: google_devtools_cloudbuild_v1_cloudbuild_pb.GetWorkerPoolRequest, callback: grpc.requestCallback<google_devtools_cloudbuild_v1_cloudbuild_pb.WorkerPool>): grpc.ClientUnaryCall;
  getWorkerPool(argument: google_devtools_cloudbuild_v1_cloudbuild_pb.GetWorkerPoolRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_cloudbuild_v1_cloudbuild_pb.WorkerPool>): grpc.ClientUnaryCall;
  getWorkerPool(argument: google_devtools_cloudbuild_v1_cloudbuild_pb.GetWorkerPoolRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_cloudbuild_v1_cloudbuild_pb.WorkerPool>): grpc.ClientUnaryCall;
  deleteWorkerPool(argument: google_devtools_cloudbuild_v1_cloudbuild_pb.DeleteWorkerPoolRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteWorkerPool(argument: google_devtools_cloudbuild_v1_cloudbuild_pb.DeleteWorkerPoolRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteWorkerPool(argument: google_devtools_cloudbuild_v1_cloudbuild_pb.DeleteWorkerPoolRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  updateWorkerPool(argument: google_devtools_cloudbuild_v1_cloudbuild_pb.UpdateWorkerPoolRequest, callback: grpc.requestCallback<google_devtools_cloudbuild_v1_cloudbuild_pb.WorkerPool>): grpc.ClientUnaryCall;
  updateWorkerPool(argument: google_devtools_cloudbuild_v1_cloudbuild_pb.UpdateWorkerPoolRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_cloudbuild_v1_cloudbuild_pb.WorkerPool>): grpc.ClientUnaryCall;
  updateWorkerPool(argument: google_devtools_cloudbuild_v1_cloudbuild_pb.UpdateWorkerPoolRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_cloudbuild_v1_cloudbuild_pb.WorkerPool>): grpc.ClientUnaryCall;
  listWorkerPools(argument: google_devtools_cloudbuild_v1_cloudbuild_pb.ListWorkerPoolsRequest, callback: grpc.requestCallback<google_devtools_cloudbuild_v1_cloudbuild_pb.ListWorkerPoolsResponse>): grpc.ClientUnaryCall;
  listWorkerPools(argument: google_devtools_cloudbuild_v1_cloudbuild_pb.ListWorkerPoolsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_cloudbuild_v1_cloudbuild_pb.ListWorkerPoolsResponse>): grpc.ClientUnaryCall;
  listWorkerPools(argument: google_devtools_cloudbuild_v1_cloudbuild_pb.ListWorkerPoolsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_cloudbuild_v1_cloudbuild_pb.ListWorkerPoolsResponse>): grpc.ClientUnaryCall;
}
