// GENERATED CODE -- DO NOT EDIT!

// package: texture_studio
// file: texturestudio/server.proto

import * as texturestudio_server_pb from "../texturestudio/server_pb";
import * as grpc from "grpc";

interface ITextureStudioServerServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  startServer: grpc.MethodDefinition<texturestudio_server_pb.StartServerRequest, texturestudio_server_pb.StartServerResponse>;
  stopServer: grpc.MethodDefinition<texturestudio_server_pb.StopServerRequest, texturestudio_server_pb.StopServerResponse>;
  restartServer: grpc.MethodDefinition<texturestudio_server_pb.RestartServerRequest, texturestudio_server_pb.RestartServerResponse>;
  serverStatus: grpc.MethodDefinition<texturestudio_server_pb.ServerStatusRequest, texturestudio_server_pb.ServerStatusResponse>;
  uploadProject: grpc.MethodDefinition<texturestudio_server_pb.UploadProjectRequest, texturestudio_server_pb.UploadProjectResponse>;
  getProject: grpc.MethodDefinition<texturestudio_server_pb.GetProjectRequest, texturestudio_server_pb.GetProjectResponse>;
  getProjects: grpc.MethodDefinition<texturestudio_server_pb.GetProjectsRequest, texturestudio_server_pb.GetProjectsResponse>;
  subscribeToProjectsChanges: grpc.MethodDefinition<texturestudio_server_pb.SubscribeToProjectsChangesRequest, texturestudio_server_pb.SubscribeToProjectsChangesResponse>;
}

export const TextureStudioServerServiceService: ITextureStudioServerServiceService;

export class TextureStudioServerServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  startServer(argument: texturestudio_server_pb.StartServerRequest, callback: grpc.requestCallback<texturestudio_server_pb.StartServerResponse>): grpc.ClientUnaryCall;
  startServer(argument: texturestudio_server_pb.StartServerRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<texturestudio_server_pb.StartServerResponse>): grpc.ClientUnaryCall;
  startServer(argument: texturestudio_server_pb.StartServerRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<texturestudio_server_pb.StartServerResponse>): grpc.ClientUnaryCall;
  stopServer(argument: texturestudio_server_pb.StopServerRequest, callback: grpc.requestCallback<texturestudio_server_pb.StopServerResponse>): grpc.ClientUnaryCall;
  stopServer(argument: texturestudio_server_pb.StopServerRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<texturestudio_server_pb.StopServerResponse>): grpc.ClientUnaryCall;
  stopServer(argument: texturestudio_server_pb.StopServerRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<texturestudio_server_pb.StopServerResponse>): grpc.ClientUnaryCall;
  restartServer(argument: texturestudio_server_pb.RestartServerRequest, callback: grpc.requestCallback<texturestudio_server_pb.RestartServerResponse>): grpc.ClientUnaryCall;
  restartServer(argument: texturestudio_server_pb.RestartServerRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<texturestudio_server_pb.RestartServerResponse>): grpc.ClientUnaryCall;
  restartServer(argument: texturestudio_server_pb.RestartServerRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<texturestudio_server_pb.RestartServerResponse>): grpc.ClientUnaryCall;
  serverStatus(argument: texturestudio_server_pb.ServerStatusRequest, callback: grpc.requestCallback<texturestudio_server_pb.ServerStatusResponse>): grpc.ClientUnaryCall;
  serverStatus(argument: texturestudio_server_pb.ServerStatusRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<texturestudio_server_pb.ServerStatusResponse>): grpc.ClientUnaryCall;
  serverStatus(argument: texturestudio_server_pb.ServerStatusRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<texturestudio_server_pb.ServerStatusResponse>): grpc.ClientUnaryCall;
  uploadProject(argument: texturestudio_server_pb.UploadProjectRequest, callback: grpc.requestCallback<texturestudio_server_pb.UploadProjectResponse>): grpc.ClientUnaryCall;
  uploadProject(argument: texturestudio_server_pb.UploadProjectRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<texturestudio_server_pb.UploadProjectResponse>): grpc.ClientUnaryCall;
  uploadProject(argument: texturestudio_server_pb.UploadProjectRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<texturestudio_server_pb.UploadProjectResponse>): grpc.ClientUnaryCall;
  getProject(argument: texturestudio_server_pb.GetProjectRequest, callback: grpc.requestCallback<texturestudio_server_pb.GetProjectResponse>): grpc.ClientUnaryCall;
  getProject(argument: texturestudio_server_pb.GetProjectRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<texturestudio_server_pb.GetProjectResponse>): grpc.ClientUnaryCall;
  getProject(argument: texturestudio_server_pb.GetProjectRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<texturestudio_server_pb.GetProjectResponse>): grpc.ClientUnaryCall;
  getProjects(argument: texturestudio_server_pb.GetProjectsRequest, callback: grpc.requestCallback<texturestudio_server_pb.GetProjectsResponse>): grpc.ClientUnaryCall;
  getProjects(argument: texturestudio_server_pb.GetProjectsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<texturestudio_server_pb.GetProjectsResponse>): grpc.ClientUnaryCall;
  getProjects(argument: texturestudio_server_pb.GetProjectsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<texturestudio_server_pb.GetProjectsResponse>): grpc.ClientUnaryCall;
  subscribeToProjectsChanges(argument: texturestudio_server_pb.SubscribeToProjectsChangesRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<texturestudio_server_pb.SubscribeToProjectsChangesResponse>;
  subscribeToProjectsChanges(argument: texturestudio_server_pb.SubscribeToProjectsChangesRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<texturestudio_server_pb.SubscribeToProjectsChangesResponse>;
}
