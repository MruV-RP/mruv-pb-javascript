// package: texture_studio
// file: texturestudio/manage.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../google/api/annotations_pb";

export class CreateServerRequest extends jspb.Message {
  getOwnerId(): number;
  setOwnerId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateServerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateServerRequest): CreateServerRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateServerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateServerRequest;
  static deserializeBinaryFromReader(message: CreateServerRequest, reader: jspb.BinaryReader): CreateServerRequest;
}

export namespace CreateServerRequest {
  export type AsObject = {
    ownerId: number,
  }
}

export class CreateServerResponse extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getPort(): number;
  setPort(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateServerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateServerResponse): CreateServerResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateServerResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateServerResponse;
  static deserializeBinaryFromReader(message: CreateServerResponse, reader: jspb.BinaryReader): CreateServerResponse;
}

export namespace CreateServerResponse {
  export type AsObject = {
    id: number,
    port: number,
  }
}

export class GetServersRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetServersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetServersRequest): GetServersRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetServersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetServersRequest;
  static deserializeBinaryFromReader(message: GetServersRequest, reader: jspb.BinaryReader): GetServersRequest;
}

export namespace GetServersRequest {
  export type AsObject = {
  }
}

export class GetServersResponse extends jspb.Message {
  clearIdList(): void;
  getIdList(): Array<number>;
  setIdList(value: Array<number>): void;
  addId(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetServersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetServersResponse): GetServersResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetServersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetServersResponse;
  static deserializeBinaryFromReader(message: GetServersResponse, reader: jspb.BinaryReader): GetServersResponse;
}

export namespace GetServersResponse {
  export type AsObject = {
    idList: Array<number>,
  }
}

export class MyServerRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MyServerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MyServerRequest): MyServerRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MyServerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MyServerRequest;
  static deserializeBinaryFromReader(message: MyServerRequest, reader: jspb.BinaryReader): MyServerRequest;
}

export namespace MyServerRequest {
  export type AsObject = {
  }
}

export class MyServerResponse extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MyServerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MyServerResponse): MyServerResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MyServerResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MyServerResponse;
  static deserializeBinaryFromReader(message: MyServerResponse, reader: jspb.BinaryReader): MyServerResponse;
}

export namespace MyServerResponse {
  export type AsObject = {
    id: number,
  }
}

export class TransferOwnershipRequest extends jspb.Message {
  getServerId(): number;
  setServerId(value: number): void;

  getOwnerId(): number;
  setOwnerId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransferOwnershipRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TransferOwnershipRequest): TransferOwnershipRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransferOwnershipRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransferOwnershipRequest;
  static deserializeBinaryFromReader(message: TransferOwnershipRequest, reader: jspb.BinaryReader): TransferOwnershipRequest;
}

export namespace TransferOwnershipRequest {
  export type AsObject = {
    serverId: number,
    ownerId: number,
  }
}

export class TransferOwnershipResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransferOwnershipResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TransferOwnershipResponse): TransferOwnershipResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransferOwnershipResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransferOwnershipResponse;
  static deserializeBinaryFromReader(message: TransferOwnershipResponse, reader: jspb.BinaryReader): TransferOwnershipResponse;
}

export namespace TransferOwnershipResponse {
  export type AsObject = {
  }
}

export class DeleteServerRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteServerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteServerRequest): DeleteServerRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteServerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteServerRequest;
  static deserializeBinaryFromReader(message: DeleteServerRequest, reader: jspb.BinaryReader): DeleteServerRequest;
}

export namespace DeleteServerRequest {
  export type AsObject = {
    id: number,
  }
}

export class DeleteServerResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteServerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteServerResponse): DeleteServerResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteServerResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteServerResponse;
  static deserializeBinaryFromReader(message: DeleteServerResponse, reader: jspb.BinaryReader): DeleteServerResponse;
}

export namespace DeleteServerResponse {
  export type AsObject = {
  }
}

