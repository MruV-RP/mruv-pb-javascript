// GENERATED CODE -- DO NOT EDIT!

// package: texture_studio
// file: texturestudio/texturestudio_manage.proto

import * as texturestudio_texturestudio_manage_pb from "../texturestudio/texturestudio_manage_pb";
import * as grpc from "grpc";

interface ITextureStudioManagerServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createServer: grpc.MethodDefinition<texturestudio_texturestudio_manage_pb.CreateServerRequest, texturestudio_texturestudio_manage_pb.CreateServerResponse>;
  getServers: grpc.MethodDefinition<texturestudio_texturestudio_manage_pb.GetServersRequest, texturestudio_texturestudio_manage_pb.GetServersResponse>;
  myServer: grpc.MethodDefinition<texturestudio_texturestudio_manage_pb.MyServerRequest, texturestudio_texturestudio_manage_pb.MyServerResponse>;
  transferOwnership: grpc.MethodDefinition<texturestudio_texturestudio_manage_pb.TransferOwnershipRequest, texturestudio_texturestudio_manage_pb.TransferOwnershipResponse>;
  deleteServer: grpc.MethodDefinition<texturestudio_texturestudio_manage_pb.DeleteServerRequest, texturestudio_texturestudio_manage_pb.DeleteServerResponse>;
}

export const TextureStudioManagerServiceService: ITextureStudioManagerServiceService;

export class TextureStudioManagerServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  createServer(argument: texturestudio_texturestudio_manage_pb.CreateServerRequest, callback: grpc.requestCallback<texturestudio_texturestudio_manage_pb.CreateServerResponse>): grpc.ClientUnaryCall;
  createServer(argument: texturestudio_texturestudio_manage_pb.CreateServerRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<texturestudio_texturestudio_manage_pb.CreateServerResponse>): grpc.ClientUnaryCall;
  createServer(argument: texturestudio_texturestudio_manage_pb.CreateServerRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<texturestudio_texturestudio_manage_pb.CreateServerResponse>): grpc.ClientUnaryCall;
  getServers(argument: texturestudio_texturestudio_manage_pb.GetServersRequest, callback: grpc.requestCallback<texturestudio_texturestudio_manage_pb.GetServersResponse>): grpc.ClientUnaryCall;
  getServers(argument: texturestudio_texturestudio_manage_pb.GetServersRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<texturestudio_texturestudio_manage_pb.GetServersResponse>): grpc.ClientUnaryCall;
  getServers(argument: texturestudio_texturestudio_manage_pb.GetServersRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<texturestudio_texturestudio_manage_pb.GetServersResponse>): grpc.ClientUnaryCall;
  myServer(argument: texturestudio_texturestudio_manage_pb.MyServerRequest, callback: grpc.requestCallback<texturestudio_texturestudio_manage_pb.MyServerResponse>): grpc.ClientUnaryCall;
  myServer(argument: texturestudio_texturestudio_manage_pb.MyServerRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<texturestudio_texturestudio_manage_pb.MyServerResponse>): grpc.ClientUnaryCall;
  myServer(argument: texturestudio_texturestudio_manage_pb.MyServerRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<texturestudio_texturestudio_manage_pb.MyServerResponse>): grpc.ClientUnaryCall;
  transferOwnership(argument: texturestudio_texturestudio_manage_pb.TransferOwnershipRequest, callback: grpc.requestCallback<texturestudio_texturestudio_manage_pb.TransferOwnershipResponse>): grpc.ClientUnaryCall;
  transferOwnership(argument: texturestudio_texturestudio_manage_pb.TransferOwnershipRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<texturestudio_texturestudio_manage_pb.TransferOwnershipResponse>): grpc.ClientUnaryCall;
  transferOwnership(argument: texturestudio_texturestudio_manage_pb.TransferOwnershipRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<texturestudio_texturestudio_manage_pb.TransferOwnershipResponse>): grpc.ClientUnaryCall;
  deleteServer(argument: texturestudio_texturestudio_manage_pb.DeleteServerRequest, callback: grpc.requestCallback<texturestudio_texturestudio_manage_pb.DeleteServerResponse>): grpc.ClientUnaryCall;
  deleteServer(argument: texturestudio_texturestudio_manage_pb.DeleteServerRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<texturestudio_texturestudio_manage_pb.DeleteServerResponse>): grpc.ClientUnaryCall;
  deleteServer(argument: texturestudio_texturestudio_manage_pb.DeleteServerRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<texturestudio_texturestudio_manage_pb.DeleteServerResponse>): grpc.ClientUnaryCall;
}
