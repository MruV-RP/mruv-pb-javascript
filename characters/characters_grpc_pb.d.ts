// GENERATED CODE -- DO NOT EDIT!

// package: mruv
// file: characters/characters.proto

import * as characters_characters_pb from "../characters/characters_pb";
import * as common_health_pb from "../common/health_pb";
import * as grpc from "grpc";

interface IMruVCharactersServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createCharacter: grpc.MethodDefinition<characters_characters_pb.CreateCharacterRequest, characters_characters_pb.CreateCharacterResponse>;
  getCharacter: grpc.MethodDefinition<characters_characters_pb.GetCharacterRequest, characters_characters_pb.GetCharacterResponse>;
  updateCharacter: grpc.MethodDefinition<characters_characters_pb.UpdateCharacterRequest, characters_characters_pb.UpdateCharacterResponse>;
  deleteCharacter: grpc.MethodDefinition<characters_characters_pb.DeleteCharacterRequest, characters_characters_pb.DeleteCharacterResponse>;
  permanentCharacterKill: grpc.MethodDefinition<characters_characters_pb.CharacterID, characters_characters_pb.CharacterID>;
  deathsStream: grpc.MethodDefinition<characters_characters_pb.DeathStreamRequest, characters_characters_pb.DeathStreamResponse>;
  getServiceStatus: grpc.MethodDefinition<common_health_pb.ServiceStatusRequest, common_health_pb.ServiceStatusResponse>;
  getServiceVersion: grpc.MethodDefinition<common_health_pb.VersionRequest, common_health_pb.VersionResponse>;
}

export const MruVCharactersServiceService: IMruVCharactersServiceService;

export class MruVCharactersServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  createCharacter(argument: characters_characters_pb.CreateCharacterRequest, callback: grpc.requestCallback<characters_characters_pb.CreateCharacterResponse>): grpc.ClientUnaryCall;
  createCharacter(argument: characters_characters_pb.CreateCharacterRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<characters_characters_pb.CreateCharacterResponse>): grpc.ClientUnaryCall;
  createCharacter(argument: characters_characters_pb.CreateCharacterRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<characters_characters_pb.CreateCharacterResponse>): grpc.ClientUnaryCall;
  getCharacter(argument: characters_characters_pb.GetCharacterRequest, callback: grpc.requestCallback<characters_characters_pb.GetCharacterResponse>): grpc.ClientUnaryCall;
  getCharacter(argument: characters_characters_pb.GetCharacterRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<characters_characters_pb.GetCharacterResponse>): grpc.ClientUnaryCall;
  getCharacter(argument: characters_characters_pb.GetCharacterRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<characters_characters_pb.GetCharacterResponse>): grpc.ClientUnaryCall;
  updateCharacter(argument: characters_characters_pb.UpdateCharacterRequest, callback: grpc.requestCallback<characters_characters_pb.UpdateCharacterResponse>): grpc.ClientUnaryCall;
  updateCharacter(argument: characters_characters_pb.UpdateCharacterRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<characters_characters_pb.UpdateCharacterResponse>): grpc.ClientUnaryCall;
  updateCharacter(argument: characters_characters_pb.UpdateCharacterRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<characters_characters_pb.UpdateCharacterResponse>): grpc.ClientUnaryCall;
  deleteCharacter(argument: characters_characters_pb.DeleteCharacterRequest, callback: grpc.requestCallback<characters_characters_pb.DeleteCharacterResponse>): grpc.ClientUnaryCall;
  deleteCharacter(argument: characters_characters_pb.DeleteCharacterRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<characters_characters_pb.DeleteCharacterResponse>): grpc.ClientUnaryCall;
  deleteCharacter(argument: characters_characters_pb.DeleteCharacterRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<characters_characters_pb.DeleteCharacterResponse>): grpc.ClientUnaryCall;
  permanentCharacterKill(argument: characters_characters_pb.CharacterID, callback: grpc.requestCallback<characters_characters_pb.CharacterID>): grpc.ClientUnaryCall;
  permanentCharacterKill(argument: characters_characters_pb.CharacterID, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<characters_characters_pb.CharacterID>): grpc.ClientUnaryCall;
  permanentCharacterKill(argument: characters_characters_pb.CharacterID, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<characters_characters_pb.CharacterID>): grpc.ClientUnaryCall;
  deathsStream(argument: characters_characters_pb.DeathStreamRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<characters_characters_pb.DeathStreamResponse>;
  deathsStream(argument: characters_characters_pb.DeathStreamRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<characters_characters_pb.DeathStreamResponse>;
  getServiceStatus(argument: common_health_pb.ServiceStatusRequest, callback: grpc.requestCallback<common_health_pb.ServiceStatusResponse>): grpc.ClientUnaryCall;
  getServiceStatus(argument: common_health_pb.ServiceStatusRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<common_health_pb.ServiceStatusResponse>): grpc.ClientUnaryCall;
  getServiceStatus(argument: common_health_pb.ServiceStatusRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<common_health_pb.ServiceStatusResponse>): grpc.ClientUnaryCall;
  getServiceVersion(argument: common_health_pb.VersionRequest, callback: grpc.requestCallback<common_health_pb.VersionResponse>): grpc.ClientUnaryCall;
  getServiceVersion(argument: common_health_pb.VersionRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<common_health_pb.VersionResponse>): grpc.ClientUnaryCall;
  getServiceVersion(argument: common_health_pb.VersionRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<common_health_pb.VersionResponse>): grpc.ClientUnaryCall;
}
