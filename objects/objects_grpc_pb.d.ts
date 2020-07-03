// GENERATED CODE -- DO NOT EDIT!

// package: mruv.gates
// file: objects/objects.proto

import * as objects_objects_pb from "../objects/objects_pb";
import * as grpc from "grpc";

interface IMruVObjectsServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createObjectModel: grpc.MethodDefinition<objects_objects_pb.CreateObjectModelRequest, objects_objects_pb.CreateObjectModelResponse>;
  getObjectModel: grpc.MethodDefinition<objects_objects_pb.GetObjectModelRequest, objects_objects_pb.GetObjectModelResponse>;
  updateObjectModel: grpc.MethodDefinition<objects_objects_pb.UpdateObjectModelRequest, objects_objects_pb.UpdateObjectModelResponse>;
  deleteObjectModel: grpc.MethodDefinition<objects_objects_pb.DeleteObjectModelRequest, objects_objects_pb.DeleteObjectModelResponse>;
  createObject: grpc.MethodDefinition<objects_objects_pb.CreateObjectRequest, objects_objects_pb.CreateObjectResponse>;
  getObject: grpc.MethodDefinition<objects_objects_pb.GetObjectRequest, objects_objects_pb.GetObjectResponse>;
  updateObject: grpc.MethodDefinition<objects_objects_pb.UpdateObjectRequest, objects_objects_pb.UpdateObjectResponse>;
  deleteObject: grpc.MethodDefinition<objects_objects_pb.DeleteObjectRequest, objects_objects_pb.DeleteObjectResponse>;
}

export const MruVObjectsServiceService: IMruVObjectsServiceService;

export class MruVObjectsServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  createObjectModel(argument: objects_objects_pb.CreateObjectModelRequest, callback: grpc.requestCallback<objects_objects_pb.CreateObjectModelResponse>): grpc.ClientUnaryCall;
  createObjectModel(argument: objects_objects_pb.CreateObjectModelRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<objects_objects_pb.CreateObjectModelResponse>): grpc.ClientUnaryCall;
  createObjectModel(argument: objects_objects_pb.CreateObjectModelRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<objects_objects_pb.CreateObjectModelResponse>): grpc.ClientUnaryCall;
  getObjectModel(argument: objects_objects_pb.GetObjectModelRequest, callback: grpc.requestCallback<objects_objects_pb.GetObjectModelResponse>): grpc.ClientUnaryCall;
  getObjectModel(argument: objects_objects_pb.GetObjectModelRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<objects_objects_pb.GetObjectModelResponse>): grpc.ClientUnaryCall;
  getObjectModel(argument: objects_objects_pb.GetObjectModelRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<objects_objects_pb.GetObjectModelResponse>): grpc.ClientUnaryCall;
  updateObjectModel(argument: objects_objects_pb.UpdateObjectModelRequest, callback: grpc.requestCallback<objects_objects_pb.UpdateObjectModelResponse>): grpc.ClientUnaryCall;
  updateObjectModel(argument: objects_objects_pb.UpdateObjectModelRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<objects_objects_pb.UpdateObjectModelResponse>): grpc.ClientUnaryCall;
  updateObjectModel(argument: objects_objects_pb.UpdateObjectModelRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<objects_objects_pb.UpdateObjectModelResponse>): grpc.ClientUnaryCall;
  deleteObjectModel(argument: objects_objects_pb.DeleteObjectModelRequest, callback: grpc.requestCallback<objects_objects_pb.DeleteObjectModelResponse>): grpc.ClientUnaryCall;
  deleteObjectModel(argument: objects_objects_pb.DeleteObjectModelRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<objects_objects_pb.DeleteObjectModelResponse>): grpc.ClientUnaryCall;
  deleteObjectModel(argument: objects_objects_pb.DeleteObjectModelRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<objects_objects_pb.DeleteObjectModelResponse>): grpc.ClientUnaryCall;
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
