// GENERATED CODE -- DO NOT EDIT!

// package: mruv
// file: characters/characters.proto

import * as characters_characters_pb from "../characters/characters_pb";
import * as common_health_pb from "../common/health_pb";
import * as characters_characters_model_pb from "../characters/characters_model_pb";
import * as grpc from "grpc";

interface IMruVCharactersServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  create: grpc.MethodDefinition<characters_characters_model_pb.Character, characters_characters_model_pb.CharacterID>;
  get: grpc.MethodDefinition<characters_characters_model_pb.CharacterID, characters_characters_model_pb.Character>;
  update: grpc.MethodDefinition<characters_characters_model_pb.Character, characters_characters_model_pb.CharacterID>;
  destroy: grpc.MethodDefinition<characters_characters_model_pb.CharacterID, characters_characters_model_pb.CharacterID>;
  killCharacter: grpc.MethodDefinition<characters_characters_model_pb.CharacterID, characters_characters_model_pb.CharacterID>;
  deathsStream: grpc.MethodDefinition<characters_characters_pb.DeathStreamRequest, characters_characters_pb.DeathStreamResponse>;
  getServiceStatus: grpc.MethodDefinition<common_health_pb.ServiceStatusRequest, common_health_pb.ServiceStatusResponse>;
  getServiceVersion: grpc.MethodDefinition<common_health_pb.VersionRequest, common_health_pb.VersionResponse>;
}

export const MruVCharactersServiceService: IMruVCharactersServiceService;

export class MruVCharactersServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  create(argument: characters_characters_model_pb.Character, callback: grpc.requestCallback<characters_characters_model_pb.CharacterID>): grpc.ClientUnaryCall;
  create(argument: characters_characters_model_pb.Character, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<characters_characters_model_pb.CharacterID>): grpc.ClientUnaryCall;
  create(argument: characters_characters_model_pb.Character, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<characters_characters_model_pb.CharacterID>): grpc.ClientUnaryCall;
  get(argument: characters_characters_model_pb.CharacterID, callback: grpc.requestCallback<characters_characters_model_pb.Character>): grpc.ClientUnaryCall;
  get(argument: characters_characters_model_pb.CharacterID, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<characters_characters_model_pb.Character>): grpc.ClientUnaryCall;
  get(argument: characters_characters_model_pb.CharacterID, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<characters_characters_model_pb.Character>): grpc.ClientUnaryCall;
  update(argument: characters_characters_model_pb.Character, callback: grpc.requestCallback<characters_characters_model_pb.CharacterID>): grpc.ClientUnaryCall;
  update(argument: characters_characters_model_pb.Character, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<characters_characters_model_pb.CharacterID>): grpc.ClientUnaryCall;
  update(argument: characters_characters_model_pb.Character, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<characters_characters_model_pb.CharacterID>): grpc.ClientUnaryCall;
  destroy(argument: characters_characters_model_pb.CharacterID, callback: grpc.requestCallback<characters_characters_model_pb.CharacterID>): grpc.ClientUnaryCall;
  destroy(argument: characters_characters_model_pb.CharacterID, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<characters_characters_model_pb.CharacterID>): grpc.ClientUnaryCall;
  destroy(argument: characters_characters_model_pb.CharacterID, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<characters_characters_model_pb.CharacterID>): grpc.ClientUnaryCall;
  killCharacter(argument: characters_characters_model_pb.CharacterID, callback: grpc.requestCallback<characters_characters_model_pb.CharacterID>): grpc.ClientUnaryCall;
  killCharacter(argument: characters_characters_model_pb.CharacterID, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<characters_characters_model_pb.CharacterID>): grpc.ClientUnaryCall;
  killCharacter(argument: characters_characters_model_pb.CharacterID, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<characters_characters_model_pb.CharacterID>): grpc.ClientUnaryCall;
  deathsStream(argument: characters_characters_pb.DeathStreamRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<characters_characters_pb.DeathStreamResponse>;
  deathsStream(argument: characters_characters_pb.DeathStreamRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<characters_characters_pb.DeathStreamResponse>;
  getServiceStatus(argument: common_health_pb.ServiceStatusRequest, callback: grpc.requestCallback<common_health_pb.ServiceStatusResponse>): grpc.ClientUnaryCall;
  getServiceStatus(argument: common_health_pb.ServiceStatusRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<common_health_pb.ServiceStatusResponse>): grpc.ClientUnaryCall;
  getServiceStatus(argument: common_health_pb.ServiceStatusRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<common_health_pb.ServiceStatusResponse>): grpc.ClientUnaryCall;
  getServiceVersion(argument: common_health_pb.VersionRequest, callback: grpc.requestCallback<common_health_pb.VersionResponse>): grpc.ClientUnaryCall;
  getServiceVersion(argument: common_health_pb.VersionRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<common_health_pb.VersionResponse>): grpc.ClientUnaryCall;
  getServiceVersion(argument: common_health_pb.VersionRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<common_health_pb.VersionResponse>): grpc.ClientUnaryCall;
}
