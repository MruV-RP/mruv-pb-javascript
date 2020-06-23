// package: mruv.elevators
// file: estates/elevators.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../google/api/annotations_pb";

export class CreateElevatorRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateElevatorRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateElevatorRequest): CreateElevatorRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateElevatorRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateElevatorRequest;
  static deserializeBinaryFromReader(message: CreateElevatorRequest, reader: jspb.BinaryReader): CreateElevatorRequest;
}

export namespace CreateElevatorRequest {
  export type AsObject = {
  }
}

export class CreateElevatorResponse extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateElevatorResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateElevatorResponse): CreateElevatorResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateElevatorResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateElevatorResponse;
  static deserializeBinaryFromReader(message: CreateElevatorResponse, reader: jspb.BinaryReader): CreateElevatorResponse;
}

export namespace CreateElevatorResponse {
  export type AsObject = {
    id: number,
  }
}

export class GetElevatorRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetElevatorRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetElevatorRequest): GetElevatorRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetElevatorRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetElevatorRequest;
  static deserializeBinaryFromReader(message: GetElevatorRequest, reader: jspb.BinaryReader): GetElevatorRequest;
}

export namespace GetElevatorRequest {
  export type AsObject = {
    id: number,
  }
}

export class GetElevatorResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetElevatorResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetElevatorResponse): GetElevatorResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetElevatorResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetElevatorResponse;
  static deserializeBinaryFromReader(message: GetElevatorResponse, reader: jspb.BinaryReader): GetElevatorResponse;
}

export namespace GetElevatorResponse {
  export type AsObject = {
  }
}

export class UpdateElevatorRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateElevatorRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateElevatorRequest): UpdateElevatorRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateElevatorRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateElevatorRequest;
  static deserializeBinaryFromReader(message: UpdateElevatorRequest, reader: jspb.BinaryReader): UpdateElevatorRequest;
}

export namespace UpdateElevatorRequest {
  export type AsObject = {
    id: number,
  }
}

export class UpdateElevatorResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateElevatorResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateElevatorResponse): UpdateElevatorResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateElevatorResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateElevatorResponse;
  static deserializeBinaryFromReader(message: UpdateElevatorResponse, reader: jspb.BinaryReader): UpdateElevatorResponse;
}

export namespace UpdateElevatorResponse {
  export type AsObject = {
  }
}

export class DeleteElevatorRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteElevatorRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteElevatorRequest): DeleteElevatorRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteElevatorRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteElevatorRequest;
  static deserializeBinaryFromReader(message: DeleteElevatorRequest, reader: jspb.BinaryReader): DeleteElevatorRequest;
}

export namespace DeleteElevatorRequest {
  export type AsObject = {
    id: number,
  }
}

export class DeleteElevatorResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteElevatorResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteElevatorResponse): DeleteElevatorResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteElevatorResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteElevatorResponse;
  static deserializeBinaryFromReader(message: DeleteElevatorResponse, reader: jspb.BinaryReader): DeleteElevatorResponse;
}

export namespace DeleteElevatorResponse {
  export type AsObject = {
  }
}

export class GetElevatorFloorsRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetElevatorFloorsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetElevatorFloorsRequest): GetElevatorFloorsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetElevatorFloorsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetElevatorFloorsRequest;
  static deserializeBinaryFromReader(message: GetElevatorFloorsRequest, reader: jspb.BinaryReader): GetElevatorFloorsRequest;
}

export namespace GetElevatorFloorsRequest {
  export type AsObject = {
    id: number,
  }
}

export class GetElevatorFloorsResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetElevatorFloorsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetElevatorFloorsResponse): GetElevatorFloorsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetElevatorFloorsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetElevatorFloorsResponse;
  static deserializeBinaryFromReader(message: GetElevatorFloorsResponse, reader: jspb.BinaryReader): GetElevatorFloorsResponse;
}

export namespace GetElevatorFloorsResponse {
  export type AsObject = {
  }
}

