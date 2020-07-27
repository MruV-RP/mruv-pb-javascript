// GENERATED CODE -- DO NOT EDIT!

// package: texture_studio
// file: texturestudio/texturestudio.proto

import * as texturestudio_texturestudio_pb from "../texturestudio/texturestudio_pb";
import * as grpc from "grpc";

interface ITextureStudioServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createServer: grpc.MethodDefinition<texturestudio_texturestudio_pb.CreateServerRequest, texturestudio_texturestudio_pb.CreateServerResponse>;
  myServer: grpc.MethodDefinition<texturestudio_texturestudio_pb.MyServerRequest, texturestudio_texturestudio_pb.MyServerResponse>;
  deleteServer: grpc.MethodDefinition<texturestudio_texturestudio_pb.DeleteServerRequest, texturestudio_texturestudio_pb.DeleteServerResponse>;
  startServer: grpc.MethodDefinition<texturestudio_texturestudio_pb.StartServerRequest, texturestudio_texturestudio_pb.StartServerResponse>;
  stopServer: grpc.MethodDefinition<texturestudio_texturestudio_pb.StopServerRequest, texturestudio_texturestudio_pb.StopServerResponse>;
  restartServer: grpc.MethodDefinition<texturestudio_texturestudio_pb.RestartServerRequest, texturestudio_texturestudio_pb.RestartServerResponse>;
  serverStatus: grpc.MethodDefinition<texturestudio_texturestudio_pb.ServerStatusRequest, texturestudio_texturestudio_pb.ServerStatusResponse>;
  uploadProject: grpc.MethodDefinition<texturestudio_texturestudio_pb.UploadProjectRequest, texturestudio_texturestudio_pb.UploadProjectResponse>;
  getProject: grpc.MethodDefinition<texturestudio_texturestudio_pb.GetProjectRequest, texturestudio_texturestudio_pb.GetProjectResponse>;
  getProjects: grpc.MethodDefinition<texturestudio_texturestudio_pb.GetProjectsRequest, texturestudio_texturestudio_pb.GetProjectsResponse>;
  subscribeToProjectsChanges: grpc.MethodDefinition<texturestudio_texturestudio_pb.SubscribeToProjectsChangesRequest, texturestudio_texturestudio_pb.SubscribeToProjectsChangesResponse>;
}

export const TextureStudioServiceService: ITextureStudioServiceService;

export class TextureStudioServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  createServer(argument: texturestudio_texturestudio_pb.CreateServerRequest, callback: grpc.requestCallback<texturestudio_texturestudio_pb.CreateServerResponse>): grpc.ClientUnaryCall;
  createServer(argument: texturestudio_texturestudio_pb.CreateServerRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<texturestudio_texturestudio_pb.CreateServerResponse>): grpc.ClientUnaryCall;
  createServer(argument: texturestudio_texturestudio_pb.CreateServerRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<texturestudio_texturestudio_pb.CreateServerResponse>): grpc.ClientUnaryCall;
  myServer(argument: texturestudio_texturestudio_pb.MyServerRequest, callback: grpc.requestCallback<texturestudio_texturestudio_pb.MyServerResponse>): grpc.ClientUnaryCall;
  myServer(argument: texturestudio_texturestudio_pb.MyServerRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<texturestudio_texturestudio_pb.MyServerResponse>): grpc.ClientUnaryCall;
  myServer(argument: texturestudio_texturestudio_pb.MyServerRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<texturestudio_texturestudio_pb.MyServerResponse>): grpc.ClientUnaryCall;
  deleteServer(argument: texturestudio_texturestudio_pb.DeleteServerRequest, callback: grpc.requestCallback<texturestudio_texturestudio_pb.DeleteServerResponse>): grpc.ClientUnaryCall;
  deleteServer(argument: texturestudio_texturestudio_pb.DeleteServerRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<texturestudio_texturestudio_pb.DeleteServerResponse>): grpc.ClientUnaryCall;
  deleteServer(argument: texturestudio_texturestudio_pb.DeleteServerRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<texturestudio_texturestudio_pb.DeleteServerResponse>): grpc.ClientUnaryCall;
  startServer(argument: texturestudio_texturestudio_pb.StartServerRequest, callback: grpc.requestCallback<texturestudio_texturestudio_pb.StartServerResponse>): grpc.ClientUnaryCall;
  startServer(argument: texturestudio_texturestudio_pb.StartServerRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<texturestudio_texturestudio_pb.StartServerResponse>): grpc.ClientUnaryCall;
  startServer(argument: texturestudio_texturestudio_pb.StartServerRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<texturestudio_texturestudio_pb.StartServerResponse>): grpc.ClientUnaryCall;
  stopServer(argument: texturestudio_texturestudio_pb.StopServerRequest, callback: grpc.requestCallback<texturestudio_texturestudio_pb.StopServerResponse>): grpc.ClientUnaryCall;
  stopServer(argument: texturestudio_texturestudio_pb.StopServerRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<texturestudio_texturestudio_pb.StopServerResponse>): grpc.ClientUnaryCall;
  stopServer(argument: texturestudio_texturestudio_pb.StopServerRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<texturestudio_texturestudio_pb.StopServerResponse>): grpc.ClientUnaryCall;
  restartServer(argument: texturestudio_texturestudio_pb.RestartServerRequest, callback: grpc.requestCallback<texturestudio_texturestudio_pb.RestartServerResponse>): grpc.ClientUnaryCall;
  restartServer(argument: texturestudio_texturestudio_pb.RestartServerRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<texturestudio_texturestudio_pb.RestartServerResponse>): grpc.ClientUnaryCall;
  restartServer(argument: texturestudio_texturestudio_pb.RestartServerRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<texturestudio_texturestudio_pb.RestartServerResponse>): grpc.ClientUnaryCall;
  serverStatus(argument: texturestudio_texturestudio_pb.ServerStatusRequest, callback: grpc.requestCallback<texturestudio_texturestudio_pb.ServerStatusResponse>): grpc.ClientUnaryCall;
  serverStatus(argument: texturestudio_texturestudio_pb.ServerStatusRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<texturestudio_texturestudio_pb.ServerStatusResponse>): grpc.ClientUnaryCall;
  serverStatus(argument: texturestudio_texturestudio_pb.ServerStatusRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<texturestudio_texturestudio_pb.ServerStatusResponse>): grpc.ClientUnaryCall;
  uploadProject(argument: texturestudio_texturestudio_pb.UploadProjectRequest, callback: grpc.requestCallback<texturestudio_texturestudio_pb.UploadProjectResponse>): grpc.ClientUnaryCall;
  uploadProject(argument: texturestudio_texturestudio_pb.UploadProjectRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<texturestudio_texturestudio_pb.UploadProjectResponse>): grpc.ClientUnaryCall;
  uploadProject(argument: texturestudio_texturestudio_pb.UploadProjectRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<texturestudio_texturestudio_pb.UploadProjectResponse>): grpc.ClientUnaryCall;
  getProject(argument: texturestudio_texturestudio_pb.GetProjectRequest, callback: grpc.requestCallback<texturestudio_texturestudio_pb.GetProjectResponse>): grpc.ClientUnaryCall;
  getProject(argument: texturestudio_texturestudio_pb.GetProjectRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<texturestudio_texturestudio_pb.GetProjectResponse>): grpc.ClientUnaryCall;
  getProject(argument: texturestudio_texturestudio_pb.GetProjectRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<texturestudio_texturestudio_pb.GetProjectResponse>): grpc.ClientUnaryCall;
  getProjects(argument: texturestudio_texturestudio_pb.GetProjectsRequest, callback: grpc.requestCallback<texturestudio_texturestudio_pb.GetProjectsResponse>): grpc.ClientUnaryCall;
  getProjects(argument: texturestudio_texturestudio_pb.GetProjectsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<texturestudio_texturestudio_pb.GetProjectsResponse>): grpc.ClientUnaryCall;
  getProjects(argument: texturestudio_texturestudio_pb.GetProjectsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<texturestudio_texturestudio_pb.GetProjectsResponse>): grpc.ClientUnaryCall;
  subscribeToProjectsChanges(argument: texturestudio_texturestudio_pb.SubscribeToProjectsChangesRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<texturestudio_texturestudio_pb.SubscribeToProjectsChangesResponse>;
  subscribeToProjectsChanges(argument: texturestudio_texturestudio_pb.SubscribeToProjectsChangesRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<texturestudio_texturestudio_pb.SubscribeToProjectsChangesResponse>;
}
