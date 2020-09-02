// GENERATED CODE -- DO NOT EDIT!

// package: mruv.objects
// file: objects/movable.proto

import * as objects_movable_pb from "../objects/movable_pb";
import * as grpc from "grpc";

interface IMruVMovableObjectsServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createMovableObject: grpc.MethodDefinition<objects_movable_pb.CreateMovableObjectRequest, objects_movable_pb.CreateMovableObjectResponse>;
  getMovableObject: grpc.MethodDefinition<objects_movable_pb.GetMovableObjectRequest, objects_movable_pb.GetMovableObjectResponse>;
  updateMovableObject: grpc.MethodDefinition<objects_movable_pb.UpdateMovableObjectRequest, objects_movable_pb.UpdateMovableObjectResponse>;
  deleteMovableObject: grpc.MethodDefinition<objects_movable_pb.DeleteMovableObjectRequest, objects_movable_pb.DeleteMovableObjectResponse>;
  moveObject: grpc.MethodDefinition<objects_movable_pb.MoveObjectRequest, objects_movable_pb.MoveObjectResponse>;
  moveObjectNext: grpc.MethodDefinition<objects_movable_pb.MoveObjectNextRequest, objects_movable_pb.MoveObjectNextResponse>;
  moveObjectPrevious: grpc.MethodDefinition<objects_movable_pb.MoveObjectPreviousRequest, objects_movable_pb.MoveObjectPreviousResponse>;
  fetchAll: grpc.MethodDefinition<objects_movable_pb.FetchAllMovableObjectsRequest, objects_movable_pb.FetchAllMovableObjectsResponse>;
}

export const MruVMovableObjectsServiceService: IMruVMovableObjectsServiceService;

export class MruVMovableObjectsServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  createMovableObject(argument: objects_movable_pb.CreateMovableObjectRequest, callback: grpc.requestCallback<objects_movable_pb.CreateMovableObjectResponse>): grpc.ClientUnaryCall;
  createMovableObject(argument: objects_movable_pb.CreateMovableObjectRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<objects_movable_pb.CreateMovableObjectResponse>): grpc.ClientUnaryCall;
  createMovableObject(argument: objects_movable_pb.CreateMovableObjectRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<objects_movable_pb.CreateMovableObjectResponse>): grpc.ClientUnaryCall;
  getMovableObject(argument: objects_movable_pb.GetMovableObjectRequest, callback: grpc.requestCallback<objects_movable_pb.GetMovableObjectResponse>): grpc.ClientUnaryCall;
  getMovableObject(argument: objects_movable_pb.GetMovableObjectRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<objects_movable_pb.GetMovableObjectResponse>): grpc.ClientUnaryCall;
  getMovableObject(argument: objects_movable_pb.GetMovableObjectRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<objects_movable_pb.GetMovableObjectResponse>): grpc.ClientUnaryCall;
  updateMovableObject(argument: objects_movable_pb.UpdateMovableObjectRequest, callback: grpc.requestCallback<objects_movable_pb.UpdateMovableObjectResponse>): grpc.ClientUnaryCall;
  updateMovableObject(argument: objects_movable_pb.UpdateMovableObjectRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<objects_movable_pb.UpdateMovableObjectResponse>): grpc.ClientUnaryCall;
  updateMovableObject(argument: objects_movable_pb.UpdateMovableObjectRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<objects_movable_pb.UpdateMovableObjectResponse>): grpc.ClientUnaryCall;
  deleteMovableObject(argument: objects_movable_pb.DeleteMovableObjectRequest, callback: grpc.requestCallback<objects_movable_pb.DeleteMovableObjectResponse>): grpc.ClientUnaryCall;
  deleteMovableObject(argument: objects_movable_pb.DeleteMovableObjectRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<objects_movable_pb.DeleteMovableObjectResponse>): grpc.ClientUnaryCall;
  deleteMovableObject(argument: objects_movable_pb.DeleteMovableObjectRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<objects_movable_pb.DeleteMovableObjectResponse>): grpc.ClientUnaryCall;
  moveObject(argument: objects_movable_pb.MoveObjectRequest, callback: grpc.requestCallback<objects_movable_pb.MoveObjectResponse>): grpc.ClientUnaryCall;
  moveObject(argument: objects_movable_pb.MoveObjectRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<objects_movable_pb.MoveObjectResponse>): grpc.ClientUnaryCall;
  moveObject(argument: objects_movable_pb.MoveObjectRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<objects_movable_pb.MoveObjectResponse>): grpc.ClientUnaryCall;
  moveObjectNext(argument: objects_movable_pb.MoveObjectNextRequest, callback: grpc.requestCallback<objects_movable_pb.MoveObjectNextResponse>): grpc.ClientUnaryCall;
  moveObjectNext(argument: objects_movable_pb.MoveObjectNextRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<objects_movable_pb.MoveObjectNextResponse>): grpc.ClientUnaryCall;
  moveObjectNext(argument: objects_movable_pb.MoveObjectNextRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<objects_movable_pb.MoveObjectNextResponse>): grpc.ClientUnaryCall;
  moveObjectPrevious(argument: objects_movable_pb.MoveObjectPreviousRequest, callback: grpc.requestCallback<objects_movable_pb.MoveObjectPreviousResponse>): grpc.ClientUnaryCall;
  moveObjectPrevious(argument: objects_movable_pb.MoveObjectPreviousRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<objects_movable_pb.MoveObjectPreviousResponse>): grpc.ClientUnaryCall;
  moveObjectPrevious(argument: objects_movable_pb.MoveObjectPreviousRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<objects_movable_pb.MoveObjectPreviousResponse>): grpc.ClientUnaryCall;
  fetchAll(argument: objects_movable_pb.FetchAllMovableObjectsRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<objects_movable_pb.FetchAllMovableObjectsResponse>;
  fetchAll(argument: objects_movable_pb.FetchAllMovableObjectsRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<objects_movable_pb.FetchAllMovableObjectsResponse>;
}
