// GENERATED CODE -- DO NOT EDIT!

// package: mruv.objects
// file: objects/objects.proto

import * as objects_objects_pb from "../objects/objects_pb";
import * as grpc from "grpc";

interface IMruVObjectsServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createObject: grpc.MethodDefinition<objects_objects_pb.CreateObjectRequest, objects_objects_pb.CreateObjectResponse>;
  getObject: grpc.MethodDefinition<objects_objects_pb.GetObjectRequest, objects_objects_pb.GetObjectResponse>;
  updateObject: grpc.MethodDefinition<objects_objects_pb.UpdateObjectRequest, objects_objects_pb.UpdateObjectResponse>;
  deleteObject: grpc.MethodDefinition<objects_objects_pb.DeleteObjectRequest, objects_objects_pb.DeleteObjectResponse>;
}

export const MruVObjectsServiceService: IMruVObjectsServiceService;

export class MruVObjectsServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  createObject(argument: objects_objects_pb.CreateObjectRequest, callback: grpc.requestCallback<objects_objects_pb.CreateObjectResponse>): grpc.ClientUnaryCall;
  createObject(argument: objects_objects_pb.CreateObjectRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<objects_objects_pb.CreateObjectResponse>): grpc.ClientUnaryCall;
  createObject(argument: objects_objects_pb.CreateObjectRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<objects_objects_pb.CreateObjectResponse>): grpc.ClientUnaryCall;
  getObject(argument: objects_objects_pb.GetObjectRequest, callback: grpc.requestCallback<objects_objects_pb.GetObjectResponse>): grpc.ClientUnaryCall;
  getObject(argument: objects_objects_pb.GetObjectRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<objects_objects_pb.GetObjectResponse>): grpc.ClientUnaryCall;
  getObject(argument: objects_objects_pb.GetObjectRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<objects_objects_pb.GetObjectResponse>): grpc.ClientUnaryCall;
  updateObject(argument: objects_objects_pb.UpdateObjectRequest, callback: grpc.requestCallback<objects_objects_pb.UpdateObjectResponse>): grpc.ClientUnaryCall;
  updateObject(argument: objects_objects_pb.UpdateObjectRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<objects_objects_pb.UpdateObjectResponse>): grpc.ClientUnaryCall;
  updateObject(argument: objects_objects_pb.UpdateObjectRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<objects_objects_pb.UpdateObjectResponse>): grpc.ClientUnaryCall;
  deleteObject(argument: objects_objects_pb.DeleteObjectRequest, callback: grpc.requestCallback<objects_objects_pb.DeleteObjectResponse>): grpc.ClientUnaryCall;
  deleteObject(argument: objects_objects_pb.DeleteObjectRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<objects_objects_pb.DeleteObjectResponse>): grpc.ClientUnaryCall;
  deleteObject(argument: objects_objects_pb.DeleteObjectRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<objects_objects_pb.DeleteObjectResponse>): grpc.ClientUnaryCall;
}
