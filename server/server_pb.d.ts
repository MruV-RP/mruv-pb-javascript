// package: mruv.server
// file: server/server.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../google/api/annotations_pb";
import * as server_server_model_pb from "../server/server_model_pb";

export class GetRegisteredServersRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRegisteredServersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRegisteredServersRequest): GetRegisteredServersRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRegisteredServersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRegisteredServersRequest;
  static deserializeBinaryFromReader(message: GetRegisteredServersRequest, reader: jspb.BinaryReader): GetRegisteredServersRequest;
}

export namespace GetRegisteredServersRequest {
  export type AsObject = {
  }
}

export class GetRegisteredServersResponse extends jspb.Message {
  clearServersList(): void;
  getServersList(): Array<server_server_model_pb.ServerInfo>;
  setServersList(value: Array<server_server_model_pb.ServerInfo>): void;
  addServers(value?: server_server_model_pb.ServerInfo, index?: number): server_server_model_pb.ServerInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRegisteredServersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetRegisteredServersResponse): GetRegisteredServersResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRegisteredServersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRegisteredServersResponse;
  static deserializeBinaryFromReader(message: GetRegisteredServersResponse, reader: jspb.BinaryReader): GetRegisteredServersResponse;
}

export namespace GetRegisteredServersResponse {
  export type AsObject = {
    serversList: Array<server_server_model_pb.ServerInfo.AsObject>,
  }
}

export class UpdateServerStatusRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getStatus(): server_server_model_pb.ServerStatusMap[keyof server_server_model_pb.ServerStatusMap];
  setStatus(value: server_server_model_pb.ServerStatusMap[keyof server_server_model_pb.ServerStatusMap]): void;

  getPlayers(): number;
  setPlayers(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateServerStatusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateServerStatusRequest): UpdateServerStatusRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateServerStatusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateServerStatusRequest;
  static deserializeBinaryFromReader(message: UpdateServerStatusRequest, reader: jspb.BinaryReader): UpdateServerStatusRequest;
}

export namespace UpdateServerStatusRequest {
  export type AsObject = {
    id: number,
    status: server_server_model_pb.ServerStatusMap[keyof server_server_model_pb.ServerStatusMap],
    players: number,
  }
}

export class UpdateServerStatusResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateServerStatusResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateServerStatusResponse): UpdateServerStatusResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateServerStatusResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateServerStatusResponse;
  static deserializeBinaryFromReader(message: UpdateServerStatusResponse, reader: jspb.BinaryReader): UpdateServerStatusResponse;
}

export namespace UpdateServerStatusResponse {
  export type AsObject = {
  }
}

export class ServerEventsStreamRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerEventsStreamRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ServerEventsStreamRequest): ServerEventsStreamRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerEventsStreamRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerEventsStreamRequest;
  static deserializeBinaryFromReader(message: ServerEventsStreamRequest, reader: jspb.BinaryReader): ServerEventsStreamRequest;
}

export namespace ServerEventsStreamRequest {
  export type AsObject = {
    id: number,
  }
}

export class ServerEvent extends jspb.Message {
  getType(): ServerEvent.ServerEventTypeMap[keyof ServerEvent.ServerEventTypeMap];
  setType(value: ServerEvent.ServerEventTypeMap[keyof ServerEvent.ServerEventTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerEvent.AsObject;
  static toObject(includeInstance: boolean, msg: ServerEvent): ServerEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerEvent;
  static deserializeBinaryFromReader(message: ServerEvent, reader: jspb.BinaryReader): ServerEvent;
}

export namespace ServerEvent {
  export type AsObject = {
    type: ServerEvent.ServerEventTypeMap[keyof ServerEvent.ServerEventTypeMap],
  }

  export interface ServerEventTypeMap {
    UNKNOWN: 0;
    REGISTERED: 1;
    SERVER_DOWN: 2;
    SERVER_UP: 3;
    PLAYERS_CHANGED: 4;
  }

  export const ServerEventType: ServerEventTypeMap;
}

