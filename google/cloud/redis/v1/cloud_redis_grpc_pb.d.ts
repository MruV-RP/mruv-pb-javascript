// GENERATED CODE -- DO NOT EDIT!

// package: google.cloud.redis.v1
// file: google/cloud/redis/v1/cloud_redis.proto

import * as google_cloud_redis_v1_cloud_redis_pb from "../../../../google/cloud/redis/v1/cloud_redis_pb";
import * as google_longrunning_operations_pb from "../../../../google/longrunning/operations_pb";
import * as grpc from "grpc";

interface ICloudRedisService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  listInstances: grpc.MethodDefinition<google_cloud_redis_v1_cloud_redis_pb.ListInstancesRequest, google_cloud_redis_v1_cloud_redis_pb.ListInstancesResponse>;
  getInstance: grpc.MethodDefinition<google_cloud_redis_v1_cloud_redis_pb.GetInstanceRequest, google_cloud_redis_v1_cloud_redis_pb.Instance>;
  createInstance: grpc.MethodDefinition<google_cloud_redis_v1_cloud_redis_pb.CreateInstanceRequest, google_longrunning_operations_pb.Operation>;
  updateInstance: grpc.MethodDefinition<google_cloud_redis_v1_cloud_redis_pb.UpdateInstanceRequest, google_longrunning_operations_pb.Operation>;
  importInstance: grpc.MethodDefinition<google_cloud_redis_v1_cloud_redis_pb.ImportInstanceRequest, google_longrunning_operations_pb.Operation>;
  exportInstance: grpc.MethodDefinition<google_cloud_redis_v1_cloud_redis_pb.ExportInstanceRequest, google_longrunning_operations_pb.Operation>;
  failoverInstance: grpc.MethodDefinition<google_cloud_redis_v1_cloud_redis_pb.FailoverInstanceRequest, google_longrunning_operations_pb.Operation>;
  deleteInstance: grpc.MethodDefinition<google_cloud_redis_v1_cloud_redis_pb.DeleteInstanceRequest, google_longrunning_operations_pb.Operation>;
}

export const CloudRedisService: ICloudRedisService;

export class CloudRedisClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  listInstances(argument: google_cloud_redis_v1_cloud_redis_pb.ListInstancesRequest, callback: grpc.requestCallback<google_cloud_redis_v1_cloud_redis_pb.ListInstancesResponse>): grpc.ClientUnaryCall;
  listInstances(argument: google_cloud_redis_v1_cloud_redis_pb.ListInstancesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_redis_v1_cloud_redis_pb.ListInstancesResponse>): grpc.ClientUnaryCall;
  listInstances(argument: google_cloud_redis_v1_cloud_redis_pb.ListInstancesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_redis_v1_cloud_redis_pb.ListInstancesResponse>): grpc.ClientUnaryCall;
  getInstance(argument: google_cloud_redis_v1_cloud_redis_pb.GetInstanceRequest, callback: grpc.requestCallback<google_cloud_redis_v1_cloud_redis_pb.Instance>): grpc.ClientUnaryCall;
  getInstance(argument: google_cloud_redis_v1_cloud_redis_pb.GetInstanceRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_redis_v1_cloud_redis_pb.Instance>): grpc.ClientUnaryCall;
  getInstance(argument: google_cloud_redis_v1_cloud_redis_pb.GetInstanceRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_redis_v1_cloud_redis_pb.Instance>): grpc.ClientUnaryCall;
  createInstance(argument: google_cloud_redis_v1_cloud_redis_pb.CreateInstanceRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  createInstance(argument: google_cloud_redis_v1_cloud_redis_pb.CreateInstanceRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  createInstance(argument: google_cloud_redis_v1_cloud_redis_pb.CreateInstanceRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  updateInstance(argument: google_cloud_redis_v1_cloud_redis_pb.UpdateInstanceRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  updateInstance(argument: google_cloud_redis_v1_cloud_redis_pb.UpdateInstanceRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  updateInstance(argument: google_cloud_redis_v1_cloud_redis_pb.UpdateInstanceRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  importInstance(argument: google_cloud_redis_v1_cloud_redis_pb.ImportInstanceRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  importInstance(argument: google_cloud_redis_v1_cloud_redis_pb.ImportInstanceRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  importInstance(argument: google_cloud_redis_v1_cloud_redis_pb.ImportInstanceRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  exportInstance(argument: google_cloud_redis_v1_cloud_redis_pb.ExportInstanceRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  exportInstance(argument: google_cloud_redis_v1_cloud_redis_pb.ExportInstanceRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  exportInstance(argument: google_cloud_redis_v1_cloud_redis_pb.ExportInstanceRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  failoverInstance(argument: google_cloud_redis_v1_cloud_redis_pb.FailoverInstanceRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  failoverInstance(argument: google_cloud_redis_v1_cloud_redis_pb.FailoverInstanceRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  failoverInstance(argument: google_cloud_redis_v1_cloud_redis_pb.FailoverInstanceRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  deleteInstance(argument: google_cloud_redis_v1_cloud_redis_pb.DeleteInstanceRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  deleteInstance(argument: google_cloud_redis_v1_cloud_redis_pb.DeleteInstanceRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  deleteInstance(argument: google_cloud_redis_v1_cloud_redis_pb.DeleteInstanceRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
}
