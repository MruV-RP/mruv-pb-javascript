// package: mruv
// file: server/server_model.proto

import * as jspb from "google-protobuf";

export class ServerID extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerID.AsObject;
  static toObject(includeInstance: boolean, msg: ServerID): ServerID.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerID, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerID;
  static deserializeBinaryFromReader(message: ServerID, reader: jspb.BinaryReader): ServerID;
}

export namespace ServerID {
  export type AsObject = {
    id: number,
  }
}

export class ServerInfo extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getHost(): string;
  setHost(value: string): void;

  getPort(): string;
  setPort(value: string): void;

  getPlatform(): string;
  setPlatform(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ServerInfo): ServerInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerInfo;
  static deserializeBinaryFromReader(message: ServerInfo, reader: jspb.BinaryReader): ServerInfo;
}

export namespace ServerInfo {
  export type AsObject = {
    name: string,
    host: string,
    port: string,
    platform: string,
  }
}

export class ServerStatus extends jspb.Message {
  getActive(): boolean;
  setActive(value: boolean): void;

  getPlayers(): number;
  setPlayers(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerStatus.AsObject;
  static toObject(includeInstance: boolean, msg: ServerStatus): ServerStatus.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerStatus;
  static deserializeBinaryFromReader(message: ServerStatus, reader: jspb.BinaryReader): ServerStatus;
}

export namespace ServerStatus {
  export type AsObject = {
    active: boolean,
    players: number,
  }
}

