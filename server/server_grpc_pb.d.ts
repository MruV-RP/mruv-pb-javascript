// GENERATED CODE -- DO NOT EDIT!

// package: mruv.server
// file: server/server.proto

import * as server_server_pb from "../server/server_pb";
import * as server_server_model_pb from "../server/server_model_pb";
import * as grpc from "grpc";

interface IMruVServerServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  registerServer: grpc.MethodDefinition<server_server_model_pb.ServerInfo, server_server_model_pb.ServerID>;
  getRegisteredServers: grpc.MethodDefinition<server_server_pb.GetRegisteredServersRequest, server_server_pb.GetRegisteredServersResponse>;
  getServerInfo: grpc.MethodDefinition<server_server_model_pb.ServerID, server_server_model_pb.ServerInfo>;
  updateServerStatus: grpc.MethodDefinition<server_server_pb.UpdateServerStatusRequest, server_server_pb.UpdateServerStatusResponse>;
  serverEventsStream: grpc.MethodDefinition<server_server_pb.ServerEventsStreamRequest, server_server_pb.ServerEvent>;
}

export const MruVServerServiceService: IMruVServerServiceService;

export class MruVServerServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  registerServer(argument: server_server_model_pb.ServerInfo, callback: grpc.requestCallback<server_server_model_pb.ServerID>): grpc.ClientUnaryCall;
  registerServer(argument: server_server_model_pb.ServerInfo, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<server_server_model_pb.ServerID>): grpc.ClientUnaryCall;
  registerServer(argument: server_server_model_pb.ServerInfo, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<server_server_model_pb.ServerID>): grpc.ClientUnaryCall;
  getRegisteredServers(argument: server_server_pb.GetRegisteredServersRequest, callback: grpc.requestCallback<server_server_pb.GetRegisteredServersResponse>): grpc.ClientUnaryCall;
  getRegisteredServers(argument: server_server_pb.GetRegisteredServersRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<server_server_pb.GetRegisteredServersResponse>): grpc.ClientUnaryCall;
  getRegisteredServers(argument: server_server_pb.GetRegisteredServersRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<server_server_pb.GetRegisteredServersResponse>): grpc.ClientUnaryCall;
  getServerInfo(argument: server_server_model_pb.ServerID, callback: grpc.requestCallback<server_server_model_pb.ServerInfo>): grpc.ClientUnaryCall;
  getServerInfo(argument: server_server_model_pb.ServerID, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<server_server_model_pb.ServerInfo>): grpc.ClientUnaryCall;
  getServerInfo(argument: server_server_model_pb.ServerID, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<server_server_model_pb.ServerInfo>): grpc.ClientUnaryCall;
  updateServerStatus(argument: server_server_pb.UpdateServerStatusRequest, callback: grpc.requestCallback<server_server_pb.UpdateServerStatusResponse>): grpc.ClientUnaryCall;
  updateServerStatus(argument: server_server_pb.UpdateServerStatusRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<server_server_pb.UpdateServerStatusResponse>): grpc.ClientUnaryCall;
  updateServerStatus(argument: server_server_pb.UpdateServerStatusRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<server_server_pb.UpdateServerStatusResponse>): grpc.ClientUnaryCall;
  serverEventsStream(argument: server_server_pb.ServerEventsStreamRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<server_server_pb.ServerEvent>;
  serverEventsStream(argument: server_server_pb.ServerEventsStreamRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<server_server_pb.ServerEvent>;
}
