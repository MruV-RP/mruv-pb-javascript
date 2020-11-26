// GENERATED CODE -- DO NOT EDIT!

// package: mruv.objects
// file: objects/models.proto

import * as objects_models_pb from "../objects/models_pb";
import * as grpc from "grpc";

interface IMruVObjectModelsServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createObjectModel: grpc.MethodDefinition<objects_models_pb.CreateObjectModelRequest, objects_models_pb.CreateObjectModelResponse>;
  getObjectModel: grpc.MethodDefinition<objects_models_pb.GetObjectModelRequest, objects_models_pb.GetObjectModelResponse>;
  updateObjectModel: grpc.MethodDefinition<objects_models_pb.UpdateObjectModelRequest, objects_models_pb.UpdateObjectModelResponse>;
  deleteObjectModel: grpc.MethodDefinition<objects_models_pb.DeleteObjectModelRequest, objects_models_pb.DeleteObjectModelResponse>;
  fetchAllModels: grpc.MethodDefinition<objects_models_pb.FetchAllModelsRequest, objects_models_pb.FetchAllModelsResponse>;
}

export const MruVObjectModelsServiceService: IMruVObjectModelsServiceService;

export class MruVObjectModelsServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  createObjectModel(argument: objects_models_pb.CreateObjectModelRequest, callback: grpc.requestCallback<objects_models_pb.CreateObjectModelResponse>): grpc.ClientUnaryCall;
  createObjectModel(argument: objects_models_pb.CreateObjectModelRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<objects_models_pb.CreateObjectModelResponse>): grpc.ClientUnaryCall;
  createObjectModel(argument: objects_models_pb.CreateObjectModelRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<objects_models_pb.CreateObjectModelResponse>): grpc.ClientUnaryCall;
  getObjectModel(argument: objects_models_pb.GetObjectModelRequest, callback: grpc.requestCallback<objects_models_pb.GetObjectModelResponse>): grpc.ClientUnaryCall;
  getObjectModel(argument: objects_models_pb.GetObjectModelRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<objects_models_pb.GetObjectModelResponse>): grpc.ClientUnaryCall;
  getObjectModel(argument: objects_models_pb.GetObjectModelRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<objects_models_pb.GetObjectModelResponse>): grpc.ClientUnaryCall;
  updateObjectModel(argument: objects_models_pb.UpdateObjectModelRequest, callback: grpc.requestCallback<objects_models_pb.UpdateObjectModelResponse>): grpc.ClientUnaryCall;
  updateObjectModel(argument: objects_models_pb.UpdateObjectModelRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<objects_models_pb.UpdateObjectModelResponse>): grpc.ClientUnaryCall;
  updateObjectModel(argument: objects_models_pb.UpdateObjectModelRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<objects_models_pb.UpdateObjectModelResponse>): grpc.ClientUnaryCall;
  deleteObjectModel(argument: objects_models_pb.DeleteObjectModelRequest, callback: grpc.requestCallback<objects_models_pb.DeleteObjectModelResponse>): grpc.ClientUnaryCall;
  deleteObjectModel(argument: objects_models_pb.DeleteObjectModelRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<objects_models_pb.DeleteObjectModelResponse>): grpc.ClientUnaryCall;
  deleteObjectModel(argument: objects_models_pb.DeleteObjectModelRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<objects_models_pb.DeleteObjectModelResponse>): grpc.ClientUnaryCall;
  fetchAllModels(argument: objects_models_pb.FetchAllModelsRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<objects_models_pb.FetchAllModelsResponse>;
  fetchAllModels(argument: objects_models_pb.FetchAllModelsRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<objects_models_pb.FetchAllModelsResponse>;
}
