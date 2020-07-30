// package: texture_studio
// file: texturestudio/server.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../google/api/annotations_pb";

export class StartServerRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StartServerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StartServerRequest): StartServerRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StartServerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StartServerRequest;
  static deserializeBinaryFromReader(message: StartServerRequest, reader: jspb.BinaryReader): StartServerRequest;
}

export namespace StartServerRequest {
  export type AsObject = {
    id: number,
  }
}

export class StartServerResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StartServerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StartServerResponse): StartServerResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StartServerResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StartServerResponse;
  static deserializeBinaryFromReader(message: StartServerResponse, reader: jspb.BinaryReader): StartServerResponse;
}

export namespace StartServerResponse {
  export type AsObject = {
  }
}

export class StopServerRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StopServerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StopServerRequest): StopServerRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StopServerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StopServerRequest;
  static deserializeBinaryFromReader(message: StopServerRequest, reader: jspb.BinaryReader): StopServerRequest;
}

export namespace StopServerRequest {
  export type AsObject = {
    id: number,
  }
}

export class StopServerResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StopServerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StopServerResponse): StopServerResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StopServerResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StopServerResponse;
  static deserializeBinaryFromReader(message: StopServerResponse, reader: jspb.BinaryReader): StopServerResponse;
}

export namespace StopServerResponse {
  export type AsObject = {
  }
}

export class RestartServerRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RestartServerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RestartServerRequest): RestartServerRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RestartServerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RestartServerRequest;
  static deserializeBinaryFromReader(message: RestartServerRequest, reader: jspb.BinaryReader): RestartServerRequest;
}

export namespace RestartServerRequest {
  export type AsObject = {
    id: number,
  }
}

export class RestartServerResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RestartServerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RestartServerResponse): RestartServerResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RestartServerResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RestartServerResponse;
  static deserializeBinaryFromReader(message: RestartServerResponse, reader: jspb.BinaryReader): RestartServerResponse;
}

export namespace RestartServerResponse {
  export type AsObject = {
  }
}

export class ServerStatusRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerStatusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ServerStatusRequest): ServerStatusRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerStatusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerStatusRequest;
  static deserializeBinaryFromReader(message: ServerStatusRequest, reader: jspb.BinaryReader): ServerStatusRequest;
}

export namespace ServerStatusRequest {
  export type AsObject = {
    id: number,
  }
}

export class ServerStatusResponse extends jspb.Message {
  getPort(): number;
  setPort(value: number): void;

  getStatus(): ServerStatusMap[keyof ServerStatusMap];
  setStatus(value: ServerStatusMap[keyof ServerStatusMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerStatusResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ServerStatusResponse): ServerStatusResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerStatusResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerStatusResponse;
  static deserializeBinaryFromReader(message: ServerStatusResponse, reader: jspb.BinaryReader): ServerStatusResponse;
}

export namespace ServerStatusResponse {
  export type AsObject = {
    port: number,
    status: ServerStatusMap[keyof ServerStatusMap],
  }
}

export class UploadProjectRequest extends jspb.Message {
  getServerId(): number;
  setServerId(value: number): void;

  getProjectName(): string;
  setProjectName(value: string): void;

  hasCode(): boolean;
  clearCode(): void;
  getCode(): string;
  setCode(value: string): void;

  hasFile(): boolean;
  clearFile(): void;
  getFile(): Uint8Array | string;
  getFile_asU8(): Uint8Array;
  getFile_asB64(): string;
  setFile(value: Uint8Array | string): void;

  getProjectCase(): UploadProjectRequest.ProjectCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UploadProjectRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UploadProjectRequest): UploadProjectRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UploadProjectRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UploadProjectRequest;
  static deserializeBinaryFromReader(message: UploadProjectRequest, reader: jspb.BinaryReader): UploadProjectRequest;
}

export namespace UploadProjectRequest {
  export type AsObject = {
    serverId: number,
    projectName: string,
    code: string,
    file: Uint8Array | string,
  }

  export enum ProjectCase {
    PROJECT_NOT_SET = 0,
    CODE = 4,
    FILE = 5,
  }
}

export class UploadProjectResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UploadProjectResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UploadProjectResponse): UploadProjectResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UploadProjectResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UploadProjectResponse;
  static deserializeBinaryFromReader(message: UploadProjectResponse, reader: jspb.BinaryReader): UploadProjectResponse;
}

export namespace UploadProjectResponse {
  export type AsObject = {
  }
}

export class GetProjectRequest extends jspb.Message {
  getServerId(): number;
  setServerId(value: number): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetProjectRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetProjectRequest): GetProjectRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetProjectRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetProjectRequest;
  static deserializeBinaryFromReader(message: GetProjectRequest, reader: jspb.BinaryReader): GetProjectRequest;
}

export namespace GetProjectRequest {
  export type AsObject = {
    serverId: number,
    name: string,
  }
}

export class GetProjectResponse extends jspb.Message {
  getCode(): string;
  setCode(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetProjectResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetProjectResponse): GetProjectResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetProjectResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetProjectResponse;
  static deserializeBinaryFromReader(message: GetProjectResponse, reader: jspb.BinaryReader): GetProjectResponse;
}

export namespace GetProjectResponse {
  export type AsObject = {
    code: string,
  }
}

export class GetProjectsRequest extends jspb.Message {
  getServerId(): number;
  setServerId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetProjectsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetProjectsRequest): GetProjectsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetProjectsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetProjectsRequest;
  static deserializeBinaryFromReader(message: GetProjectsRequest, reader: jspb.BinaryReader): GetProjectsRequest;
}

export namespace GetProjectsRequest {
  export type AsObject = {
    serverId: number,
  }
}

export class GetProjectsResponse extends jspb.Message {
  clearNamesList(): void;
  getNamesList(): Array<string>;
  setNamesList(value: Array<string>): void;
  addNames(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetProjectsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetProjectsResponse): GetProjectsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetProjectsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetProjectsResponse;
  static deserializeBinaryFromReader(message: GetProjectsResponse, reader: jspb.BinaryReader): GetProjectsResponse;
}

export namespace GetProjectsResponse {
  export type AsObject = {
    namesList: Array<string>,
  }
}

export class SubscribeToProjectsChangesRequest extends jspb.Message {
  getServerId(): number;
  setServerId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscribeToProjectsChangesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SubscribeToProjectsChangesRequest): SubscribeToProjectsChangesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubscribeToProjectsChangesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscribeToProjectsChangesRequest;
  static deserializeBinaryFromReader(message: SubscribeToProjectsChangesRequest, reader: jspb.BinaryReader): SubscribeToProjectsChangesRequest;
}

export namespace SubscribeToProjectsChangesRequest {
  export type AsObject = {
    serverId: number,
  }
}

export class SubscribeToProjectsChangesResponse extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscribeToProjectsChangesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SubscribeToProjectsChangesResponse): SubscribeToProjectsChangesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubscribeToProjectsChangesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscribeToProjectsChangesResponse;
  static deserializeBinaryFromReader(message: SubscribeToProjectsChangesResponse, reader: jspb.BinaryReader): SubscribeToProjectsChangesResponse;
}

export namespace SubscribeToProjectsChangesResponse {
  export type AsObject = {
    name: string,
  }
}

export interface ServerStatusMap {
  UNKNOWN_STATUS: 0;
  ON: 1;
  OFF: 2;
}

export const ServerStatus: ServerStatusMap;

