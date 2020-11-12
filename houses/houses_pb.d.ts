// package: mruv.houses
// file: houses/houses.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../google/api/annotations_pb";

export class CreateHouseRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateHouseRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateHouseRequest): CreateHouseRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateHouseRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateHouseRequest;
  static deserializeBinaryFromReader(message: CreateHouseRequest, reader: jspb.BinaryReader): CreateHouseRequest;
}

export namespace CreateHouseRequest {
  export type AsObject = {
  }
}

export class CreateHouseResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateHouseResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateHouseResponse): CreateHouseResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateHouseResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateHouseResponse;
  static deserializeBinaryFromReader(message: CreateHouseResponse, reader: jspb.BinaryReader): CreateHouseResponse;
}

export namespace CreateHouseResponse {
  export type AsObject = {
  }
}

export class GetHouseRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetHouseRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetHouseRequest): GetHouseRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetHouseRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetHouseRequest;
  static deserializeBinaryFromReader(message: GetHouseRequest, reader: jspb.BinaryReader): GetHouseRequest;
}

export namespace GetHouseRequest {
  export type AsObject = {
    id: number,
  }
}

export class GetHouseResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetHouseResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetHouseResponse): GetHouseResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetHouseResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetHouseResponse;
  static deserializeBinaryFromReader(message: GetHouseResponse, reader: jspb.BinaryReader): GetHouseResponse;
}

export namespace GetHouseResponse {
  export type AsObject = {
  }
}

export class UpdateHouseRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateHouseRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateHouseRequest): UpdateHouseRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateHouseRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateHouseRequest;
  static deserializeBinaryFromReader(message: UpdateHouseRequest, reader: jspb.BinaryReader): UpdateHouseRequest;
}

export namespace UpdateHouseRequest {
  export type AsObject = {
    id: number,
  }
}

export class UpdateHouseResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateHouseResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateHouseResponse): UpdateHouseResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateHouseResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateHouseResponse;
  static deserializeBinaryFromReader(message: UpdateHouseResponse, reader: jspb.BinaryReader): UpdateHouseResponse;
}

export namespace UpdateHouseResponse {
  export type AsObject = {
  }
}

export class DeleteHouseRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteHouseRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteHouseRequest): DeleteHouseRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteHouseRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteHouseRequest;
  static deserializeBinaryFromReader(message: DeleteHouseRequest, reader: jspb.BinaryReader): DeleteHouseRequest;
}

export namespace DeleteHouseRequest {
  export type AsObject = {
    id: number,
  }
}

export class DeleteHouseResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteHouseResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteHouseResponse): DeleteHouseResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteHouseResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteHouseResponse;
  static deserializeBinaryFromReader(message: DeleteHouseResponse, reader: jspb.BinaryReader): DeleteHouseResponse;
}

export namespace DeleteHouseResponse {
  export type AsObject = {
  }
}

