// package: google.cloud.dialogflow.v2
// file: google/cloud/dialogflow/v2/agent.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";
import * as google_api_client_pb from "../../../../google/api/client_pb";
import * as google_api_field_behavior_pb from "../../../../google/api/field_behavior_pb";
import * as google_api_resource_pb from "../../../../google/api/resource_pb";
import * as google_longrunning_operations_pb from "../../../../google/longrunning/operations_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";

export class Agent extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getDisplayName(): string;
  setDisplayName(value: string): void;

  getDefaultLanguageCode(): string;
  setDefaultLanguageCode(value: string): void;

  clearSupportedLanguageCodesList(): void;
  getSupportedLanguageCodesList(): Array<string>;
  setSupportedLanguageCodesList(value: Array<string>): void;
  addSupportedLanguageCodes(value: string, index?: number): string;

  getTimeZone(): string;
  setTimeZone(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getAvatarUri(): string;
  setAvatarUri(value: string): void;

  getEnableLogging(): boolean;
  setEnableLogging(value: boolean): void;

  getMatchMode(): Agent.MatchModeMap[keyof Agent.MatchModeMap];
  setMatchMode(value: Agent.MatchModeMap[keyof Agent.MatchModeMap]): void;

  getClassificationThreshold(): number;
  setClassificationThreshold(value: number): void;

  getApiVersion(): Agent.ApiVersionMap[keyof Agent.ApiVersionMap];
  setApiVersion(value: Agent.ApiVersionMap[keyof Agent.ApiVersionMap]): void;

  getTier(): Agent.TierMap[keyof Agent.TierMap];
  setTier(value: Agent.TierMap[keyof Agent.TierMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Agent.AsObject;
  static toObject(includeInstance: boolean, msg: Agent): Agent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Agent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Agent;
  static deserializeBinaryFromReader(message: Agent, reader: jspb.BinaryReader): Agent;
}

export namespace Agent {
  export type AsObject = {
    parent: string,
    displayName: string,
    defaultLanguageCode: string,
    supportedLanguageCodesList: Array<string>,
    timeZone: string,
    description: string,
    avatarUri: string,
    enableLogging: boolean,
    matchMode: Agent.MatchModeMap[keyof Agent.MatchModeMap],
    classificationThreshold: number,
    apiVersion: Agent.ApiVersionMap[keyof Agent.ApiVersionMap],
    tier: Agent.TierMap[keyof Agent.TierMap],
  }

  export interface MatchModeMap {
    MATCH_MODE_UNSPECIFIED: 0;
    MATCH_MODE_HYBRID: 1;
    MATCH_MODE_ML_ONLY: 2;
  }

  export const MatchMode: MatchModeMap;

  export interface ApiVersionMap {
    API_VERSION_UNSPECIFIED: 0;
    API_VERSION_V1: 1;
    API_VERSION_V2: 2;
    API_VERSION_V2_BETA_1: 3;
  }

  export const ApiVersion: ApiVersionMap;

  export interface TierMap {
    TIER_UNSPECIFIED: 0;
    TIER_STANDARD: 1;
    TIER_ENTERPRISE: 2;
    TIER_ENTERPRISE_PLUS: 3;
  }

  export const Tier: TierMap;
}

export class GetAgentRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAgentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAgentRequest): GetAgentRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAgentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAgentRequest;
  static deserializeBinaryFromReader(message: GetAgentRequest, reader: jspb.BinaryReader): GetAgentRequest;
}

export namespace GetAgentRequest {
  export type AsObject = {
    parent: string,
  }
}

export class SetAgentRequest extends jspb.Message {
  hasAgent(): boolean;
  clearAgent(): void;
  getAgent(): Agent | undefined;
  setAgent(value?: Agent): void;

  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetAgentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetAgentRequest): SetAgentRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetAgentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetAgentRequest;
  static deserializeBinaryFromReader(message: SetAgentRequest, reader: jspb.BinaryReader): SetAgentRequest;
}

export namespace SetAgentRequest {
  export type AsObject = {
    agent?: Agent.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class DeleteAgentRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAgentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAgentRequest): DeleteAgentRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteAgentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAgentRequest;
  static deserializeBinaryFromReader(message: DeleteAgentRequest, reader: jspb.BinaryReader): DeleteAgentRequest;
}

export namespace DeleteAgentRequest {
  export type AsObject = {
    parent: string,
  }
}

export class SearchAgentsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchAgentsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SearchAgentsRequest): SearchAgentsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchAgentsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchAgentsRequest;
  static deserializeBinaryFromReader(message: SearchAgentsRequest, reader: jspb.BinaryReader): SearchAgentsRequest;
}

export namespace SearchAgentsRequest {
  export type AsObject = {
    parent: string,
    pageSize: number,
    pageToken: string,
  }
}

export class SearchAgentsResponse extends jspb.Message {
  clearAgentsList(): void;
  getAgentsList(): Array<Agent>;
  setAgentsList(value: Array<Agent>): void;
  addAgents(value?: Agent, index?: number): Agent;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchAgentsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SearchAgentsResponse): SearchAgentsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchAgentsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchAgentsResponse;
  static deserializeBinaryFromReader(message: SearchAgentsResponse, reader: jspb.BinaryReader): SearchAgentsResponse;
}

export namespace SearchAgentsResponse {
  export type AsObject = {
    agentsList: Array<Agent.AsObject>,
    nextPageToken: string,
  }
}

export class TrainAgentRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TrainAgentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TrainAgentRequest): TrainAgentRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TrainAgentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TrainAgentRequest;
  static deserializeBinaryFromReader(message: TrainAgentRequest, reader: jspb.BinaryReader): TrainAgentRequest;
}

export namespace TrainAgentRequest {
  export type AsObject = {
    parent: string,
  }
}

export class ExportAgentRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getAgentUri(): string;
  setAgentUri(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExportAgentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExportAgentRequest): ExportAgentRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExportAgentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExportAgentRequest;
  static deserializeBinaryFromReader(message: ExportAgentRequest, reader: jspb.BinaryReader): ExportAgentRequest;
}

export namespace ExportAgentRequest {
  export type AsObject = {
    parent: string,
    agentUri: string,
  }
}

export class ExportAgentResponse extends jspb.Message {
  hasAgentUri(): boolean;
  clearAgentUri(): void;
  getAgentUri(): string;
  setAgentUri(value: string): void;

  hasAgentContent(): boolean;
  clearAgentContent(): void;
  getAgentContent(): Uint8Array | string;
  getAgentContent_asU8(): Uint8Array;
  getAgentContent_asB64(): string;
  setAgentContent(value: Uint8Array | string): void;

  getAgentCase(): ExportAgentResponse.AgentCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExportAgentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ExportAgentResponse): ExportAgentResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExportAgentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExportAgentResponse;
  static deserializeBinaryFromReader(message: ExportAgentResponse, reader: jspb.BinaryReader): ExportAgentResponse;
}

export namespace ExportAgentResponse {
  export type AsObject = {
    agentUri: string,
    agentContent: Uint8Array | string,
  }

  export enum AgentCase {
    AGENT_NOT_SET = 0,
    AGENT_URI = 1,
    AGENT_CONTENT = 2,
  }
}

export class ImportAgentRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  hasAgentUri(): boolean;
  clearAgentUri(): void;
  getAgentUri(): string;
  setAgentUri(value: string): void;

  hasAgentContent(): boolean;
  clearAgentContent(): void;
  getAgentContent(): Uint8Array | string;
  getAgentContent_asU8(): Uint8Array;
  getAgentContent_asB64(): string;
  setAgentContent(value: Uint8Array | string): void;

  getAgentCase(): ImportAgentRequest.AgentCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImportAgentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ImportAgentRequest): ImportAgentRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ImportAgentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImportAgentRequest;
  static deserializeBinaryFromReader(message: ImportAgentRequest, reader: jspb.BinaryReader): ImportAgentRequest;
}

export namespace ImportAgentRequest {
  export type AsObject = {
    parent: string,
    agentUri: string,
    agentContent: Uint8Array | string,
  }

  export enum AgentCase {
    AGENT_NOT_SET = 0,
    AGENT_URI = 2,
    AGENT_CONTENT = 3,
  }
}

export class RestoreAgentRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  hasAgentUri(): boolean;
  clearAgentUri(): void;
  getAgentUri(): string;
  setAgentUri(value: string): void;

  hasAgentContent(): boolean;
  clearAgentContent(): void;
  getAgentContent(): Uint8Array | string;
  getAgentContent_asU8(): Uint8Array;
  getAgentContent_asB64(): string;
  setAgentContent(value: Uint8Array | string): void;

  getAgentCase(): RestoreAgentRequest.AgentCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RestoreAgentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RestoreAgentRequest): RestoreAgentRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RestoreAgentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RestoreAgentRequest;
  static deserializeBinaryFromReader(message: RestoreAgentRequest, reader: jspb.BinaryReader): RestoreAgentRequest;
}

export namespace RestoreAgentRequest {
  export type AsObject = {
    parent: string,
    agentUri: string,
    agentContent: Uint8Array | string,
  }

  export enum AgentCase {
    AGENT_NOT_SET = 0,
    AGENT_URI = 2,
    AGENT_CONTENT = 3,
  }
}

