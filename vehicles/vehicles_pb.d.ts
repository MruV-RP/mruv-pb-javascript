// package: mruv.vehicles
// file: vehicles/vehicles.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../google/api/annotations_pb";

export class CreateVehicleRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateVehicleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateVehicleRequest): CreateVehicleRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateVehicleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateVehicleRequest;
  static deserializeBinaryFromReader(message: CreateVehicleRequest, reader: jspb.BinaryReader): CreateVehicleRequest;
}

export namespace CreateVehicleRequest {
  export type AsObject = {
  }
}

export class CreateVehicleResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateVehicleResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateVehicleResponse): CreateVehicleResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateVehicleResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateVehicleResponse;
  static deserializeBinaryFromReader(message: CreateVehicleResponse, reader: jspb.BinaryReader): CreateVehicleResponse;
}

export namespace CreateVehicleResponse {
  export type AsObject = {
  }
}

export class GetVehicleRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVehicleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetVehicleRequest): GetVehicleRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetVehicleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetVehicleRequest;
  static deserializeBinaryFromReader(message: GetVehicleRequest, reader: jspb.BinaryReader): GetVehicleRequest;
}

export namespace GetVehicleRequest {
  export type AsObject = {
    id: number,
  }
}

export class GetVehicleResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVehicleResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetVehicleResponse): GetVehicleResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetVehicleResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetVehicleResponse;
  static deserializeBinaryFromReader(message: GetVehicleResponse, reader: jspb.BinaryReader): GetVehicleResponse;
}

export namespace GetVehicleResponse {
  export type AsObject = {
  }
}

export class UpdateVehicleRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateVehicleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateVehicleRequest): UpdateVehicleRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateVehicleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateVehicleRequest;
  static deserializeBinaryFromReader(message: UpdateVehicleRequest, reader: jspb.BinaryReader): UpdateVehicleRequest;
}

export namespace UpdateVehicleRequest {
  export type AsObject = {
    id: number,
  }
}

export class UpdateVehicleResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateVehicleResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateVehicleResponse): UpdateVehicleResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateVehicleResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateVehicleResponse;
  static deserializeBinaryFromReader(message: UpdateVehicleResponse, reader: jspb.BinaryReader): UpdateVehicleResponse;
}

export namespace UpdateVehicleResponse {
  export type AsObject = {
  }
}

export class DeleteVehicleRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteVehicleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteVehicleRequest): DeleteVehicleRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteVehicleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteVehicleRequest;
  static deserializeBinaryFromReader(message: DeleteVehicleRequest, reader: jspb.BinaryReader): DeleteVehicleRequest;
}

export namespace DeleteVehicleRequest {
  export type AsObject = {
    id: number,
  }
}

export class DeleteVehicleResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteVehicleResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteVehicleResponse): DeleteVehicleResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteVehicleResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteVehicleResponse;
  static deserializeBinaryFromReader(message: DeleteVehicleResponse, reader: jspb.BinaryReader): DeleteVehicleResponse;
}

export namespace DeleteVehicleResponse {
  export type AsObject = {
  }
}

