// GENERATED CODE -- DO NOT EDIT!

// package: mruv
// file: server/server.proto

import * as server_server_pb from "../server/server_pb";
import * as server_server_model_pb from "../server/server_model_pb";
import * as grpc from "grpc";

interface IMruVServerServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  registerServer: grpc.MethodDefinition<server_server_pb.RegisterServerRequest, server_server_pb.RegisterServerResponse>;
  getServerStatus: grpc.MethodDefinition<server_server_model_pb.ServerID, server_server_model_pb.ServerStatus>;
}

export const MruVServerServiceService: IMruVServerServiceService;

export class MruVServerServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  registerServer(argument: server_server_pb.RegisterServerRequest, callback: grpc.requestCallback<server_server_pb.RegisterServerResponse>): grpc.ClientUnaryCall;
  registerServer(argument: server_server_pb.RegisterServerRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<server_server_pb.RegisterServerResponse>): grpc.ClientUnaryCall;
  registerServer(argument: server_server_pb.RegisterServerRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<server_server_pb.RegisterServerResponse>): grpc.ClientUnaryCall;
  getServerStatus(argument: server_server_model_pb.ServerID, callback: grpc.requestCallback<server_server_model_pb.ServerStatus>): grpc.ClientUnaryCall;
  getServerStatus(argument: server_server_model_pb.ServerID, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<server_server_model_pb.ServerStatus>): grpc.ClientUnaryCall;
  getServerStatus(argument: server_server_model_pb.ServerID, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<server_server_model_pb.ServerStatus>): grpc.ClientUnaryCall;
}
