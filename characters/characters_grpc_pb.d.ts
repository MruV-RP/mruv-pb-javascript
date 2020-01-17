// GENERATED CODE -- DO NOT EDIT!

// package: mruv
// file: characters/characters.proto

import * as characters_characters_pb from "../characters/characters_pb";
import * as common_health_pb from "../common/health_pb";
import * as characters_characters_model_pb from "../characters/characters_model_pb";
import * as grpc from "grpc";

interface IMruVCharactersServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createCharacter: grpc.MethodDefinition<characters_characters_model_pb.Character, characters_characters_model_pb.CharacterID>;
  getCharacter: grpc.MethodDefinition<characters_characters_model_pb.CharacterID, characters_characters_model_pb.Character>;
  removeCharacter: grpc.MethodDefinition<characters_characters_model_pb.CharacterID, characters_characters_model_pb.CharacterID>;
  permanentCharacterKill: grpc.MethodDefinition<characters_characters_model_pb.CharacterID, characters_characters_model_pb.CharacterID>;
  deathsStream: grpc.MethodDefinition<characters_characters_pb.DeathStreamRequest, characters_characters_pb.DeathStreamResponse>;
  getServiceStatus: grpc.MethodDefinition<common_health_pb.ServiceStatusRequest, common_health_pb.ServiceStatusResponse>;
  getServiceVersion: grpc.MethodDefinition<common_health_pb.VersionRequest, common_health_pb.VersionResponse>;
}

export const MruVCharactersServiceService: IMruVCharactersServiceService;

export class MruVCharactersServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  createCharacter(argument: characters_characters_model_pb.Character, callback: grpc.requestCallback<characters_characters_model_pb.CharacterID>): grpc.ClientUnaryCall;
  createCharacter(argument: characters_characters_model_pb.Character, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<characters_characters_model_pb.CharacterID>): grpc.ClientUnaryCall;
  createCharacter(argument: characters_characters_model_pb.Character, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<characters_characters_model_pb.CharacterID>): grpc.ClientUnaryCall;
  getCharacter(argument: characters_characters_model_pb.CharacterID, callback: grpc.requestCallback<characters_characters_model_pb.Character>): grpc.ClientUnaryCall;
  getCharacter(argument: characters_characters_model_pb.CharacterID, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<characters_characters_model_pb.Character>): grpc.ClientUnaryCall;
  getCharacter(argument: characters_characters_model_pb.CharacterID, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<characters_characters_model_pb.Character>): grpc.ClientUnaryCall;
  removeCharacter(argument: characters_characters_model_pb.CharacterID, callback: grpc.requestCallback<characters_characters_model_pb.CharacterID>): grpc.ClientUnaryCall;
  removeCharacter(argument: characters_characters_model_pb.CharacterID, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<characters_characters_model_pb.CharacterID>): grpc.ClientUnaryCall;
  removeCharacter(argument: characters_characters_model_pb.CharacterID, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<characters_characters_model_pb.CharacterID>): grpc.ClientUnaryCall;
  permanentCharacterKill(argument: characters_characters_model_pb.CharacterID, callback: grpc.requestCallback<characters_characters_model_pb.CharacterID>): grpc.ClientUnaryCall;
  permanentCharacterKill(argument: characters_characters_model_pb.CharacterID, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<characters_characters_model_pb.CharacterID>): grpc.ClientUnaryCall;
  permanentCharacterKill(argument: characters_characters_model_pb.CharacterID, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<characters_characters_model_pb.CharacterID>): grpc.ClientUnaryCall;
  deathsStream(argument: characters_characters_pb.DeathStreamRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<characters_characters_pb.DeathStreamResponse>;
  deathsStream(argument: characters_characters_pb.DeathStreamRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<characters_characters_pb.DeathStreamResponse>;
  getServiceStatus(argument: common_health_pb.ServiceStatusRequest, callback: grpc.requestCallback<common_health_pb.ServiceStatusResponse>): grpc.ClientUnaryCall;
  getServiceStatus(argument: common_health_pb.ServiceStatusRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<common_health_pb.ServiceStatusResponse>): grpc.ClientUnaryCall;
  getServiceStatus(argument: common_health_pb.ServiceStatusRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<common_health_pb.ServiceStatusResponse>): grpc.ClientUnaryCall;
  getServiceVersion(argument: common_health_pb.VersionRequest, callback: grpc.requestCallback<common_health_pb.VersionResponse>): grpc.ClientUnaryCall;
  getServiceVersion(argument: common_health_pb.VersionRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<common_health_pb.VersionResponse>): grpc.ClientUnaryCall;
  getServiceVersion(argument: common_health_pb.VersionRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<common_health_pb.VersionResponse>): grpc.ClientUnaryCall;
}
