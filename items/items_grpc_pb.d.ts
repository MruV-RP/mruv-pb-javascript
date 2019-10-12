// GENERATED CODE -- DO NOT EDIT!

// package: mruv
// file: items/items.proto

import * as items_items_pb from "../items/items_pb";
import * as common_health_pb from "../common/health_pb";
import * as grpc from "grpc";

interface IMruVItemServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  create: grpc.MethodDefinition<items_items_pb.CreateItemRequest, items_items_pb.CreateItemResponse>;
  destroy: grpc.MethodDefinition<items_items_pb.DestroyItemRequest, items_items_pb.DestroyItemResponse>;
  update: grpc.MethodDefinition<items_items_pb.UpdateItemRequest, items_items_pb.UpdateItemResponse>;
  get: grpc.MethodDefinition<items_items_pb.GetItemRequest, items_items_pb.GetItemResponse>;
  getServiceStatus: grpc.MethodDefinition<common_health_pb.ServiceStatusRequest, common_health_pb.ServiceStatusResponse>;
  getServiceVersion: grpc.MethodDefinition<common_health_pb.VersionRequest, common_health_pb.VersionResponse>;
}

export const MruVItemServiceService: IMruVItemServiceService;

export class MruVItemServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  create(argument: items_items_pb.CreateItemRequest, callback: grpc.requestCallback<items_items_pb.CreateItemResponse>): grpc.ClientUnaryCall;
  create(argument: items_items_pb.CreateItemRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<items_items_pb.CreateItemResponse>): grpc.ClientUnaryCall;
  create(argument: items_items_pb.CreateItemRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<items_items_pb.CreateItemResponse>): grpc.ClientUnaryCall;
  destroy(argument: items_items_pb.DestroyItemRequest, callback: grpc.requestCallback<items_items_pb.DestroyItemResponse>): grpc.ClientUnaryCall;
  destroy(argument: items_items_pb.DestroyItemRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<items_items_pb.DestroyItemResponse>): grpc.ClientUnaryCall;
  destroy(argument: items_items_pb.DestroyItemRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<items_items_pb.DestroyItemResponse>): grpc.ClientUnaryCall;
  update(argument: items_items_pb.UpdateItemRequest, callback: grpc.requestCallback<items_items_pb.UpdateItemResponse>): grpc.ClientUnaryCall;
  update(argument: items_items_pb.UpdateItemRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<items_items_pb.UpdateItemResponse>): grpc.ClientUnaryCall;
  update(argument: items_items_pb.UpdateItemRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<items_items_pb.UpdateItemResponse>): grpc.ClientUnaryCall;
  get(argument: items_items_pb.GetItemRequest, callback: grpc.requestCallback<items_items_pb.GetItemResponse>): grpc.ClientUnaryCall;
  get(argument: items_items_pb.GetItemRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<items_items_pb.GetItemResponse>): grpc.ClientUnaryCall;
  get(argument: items_items_pb.GetItemRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<items_items_pb.GetItemResponse>): grpc.ClientUnaryCall;
  getServiceStatus(argument: common_health_pb.ServiceStatusRequest, callback: grpc.requestCallback<common_health_pb.ServiceStatusResponse>): grpc.ClientUnaryCall;
  getServiceStatus(argument: common_health_pb.ServiceStatusRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<common_health_pb.ServiceStatusResponse>): grpc.ClientUnaryCall;
  getServiceStatus(argument: common_health_pb.ServiceStatusRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<common_health_pb.ServiceStatusResponse>): grpc.ClientUnaryCall;
  getServiceVersion(argument: common_health_pb.VersionRequest, callback: grpc.requestCallback<common_health_pb.VersionResponse>): grpc.ClientUnaryCall;
  getServiceVersion(argument: common_health_pb.VersionRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<common_health_pb.VersionResponse>): grpc.ClientUnaryCall;
  getServiceVersion(argument: common_health_pb.VersionRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<common_health_pb.VersionResponse>): grpc.ClientUnaryCall;
}
