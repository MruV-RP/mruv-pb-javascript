// GENERATED CODE -- DO NOT EDIT!

// package: google.devtools.remoteworkers.v1test2
// file: google/devtools/remoteworkers/v1test2/bots.proto

import * as google_devtools_remoteworkers_v1test2_bots_pb from "../../../../google/devtools/remoteworkers/v1test2/bots_pb";
import * as grpc from "grpc";

interface IBotsService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createBotSession: grpc.MethodDefinition<google_devtools_remoteworkers_v1test2_bots_pb.CreateBotSessionRequest, google_devtools_remoteworkers_v1test2_bots_pb.BotSession>;
  updateBotSession: grpc.MethodDefinition<google_devtools_remoteworkers_v1test2_bots_pb.UpdateBotSessionRequest, google_devtools_remoteworkers_v1test2_bots_pb.BotSession>;
}

export const BotsService: IBotsService;

export class BotsClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  createBotSession(argument: google_devtools_remoteworkers_v1test2_bots_pb.CreateBotSessionRequest, callback: grpc.requestCallback<google_devtools_remoteworkers_v1test2_bots_pb.BotSession>): grpc.ClientUnaryCall;
  createBotSession(argument: google_devtools_remoteworkers_v1test2_bots_pb.CreateBotSessionRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_remoteworkers_v1test2_bots_pb.BotSession>): grpc.ClientUnaryCall;
  createBotSession(argument: google_devtools_remoteworkers_v1test2_bots_pb.CreateBotSessionRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_remoteworkers_v1test2_bots_pb.BotSession>): grpc.ClientUnaryCall;
  updateBotSession(argument: google_devtools_remoteworkers_v1test2_bots_pb.UpdateBotSessionRequest, callback: grpc.requestCallback<google_devtools_remoteworkers_v1test2_bots_pb.BotSession>): grpc.ClientUnaryCall;
  updateBotSession(argument: google_devtools_remoteworkers_v1test2_bots_pb.UpdateBotSessionRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_remoteworkers_v1test2_bots_pb.BotSession>): grpc.ClientUnaryCall;
  updateBotSession(argument: google_devtools_remoteworkers_v1test2_bots_pb.UpdateBotSessionRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_remoteworkers_v1test2_bots_pb.BotSession>): grpc.ClientUnaryCall;
}
