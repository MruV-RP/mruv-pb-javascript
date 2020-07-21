// package: mruv.spots
// file: spots/spots.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../google/api/annotations_pb";

export class Spot extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getMessage(): string;
  setMessage(value: string): void;

  getIcon(): number;
  setIcon(value: number): void;

  getMarker(): number;
  setMarker(value: number): void;

  getX(): number;
  setX(value: number): void;

  getY(): number;
  setY(value: number): void;

  getZ(): number;
  setZ(value: number): void;

  getVw(): number;
  setVw(value: number): void;

  getInt(): number;
  setInt(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Spot.AsObject;
  static toObject(includeInstance: boolean, msg: Spot): Spot.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Spot, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Spot;
  static deserializeBinaryFromReader(message: Spot, reader: jspb.BinaryReader): Spot;
}

export namespace Spot {
  export type AsObject = {
    name: string,
    message: string,
    icon: number,
    marker: number,
    x: number,
    y: number,
    z: number,
    vw: number,
    pb_int: number,
  }
}

export class CreateSpotRequest extends jspb.Message {
  hasSpot(): boolean;
  clearSpot(): void;
  getSpot(): Spot | undefined;
  setSpot(value?: Spot): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateSpotRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateSpotRequest): CreateSpotRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateSpotRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateSpotRequest;
  static deserializeBinaryFromReader(message: CreateSpotRequest, reader: jspb.BinaryReader): CreateSpotRequest;
}

export namespace CreateSpotRequest {
  export type AsObject = {
    spot?: Spot.AsObject,
  }
}

export class CreateSpotResponse extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateSpotResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateSpotResponse): CreateSpotResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateSpotResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateSpotResponse;
  static deserializeBinaryFromReader(message: CreateSpotResponse, reader: jspb.BinaryReader): CreateSpotResponse;
}

export namespace CreateSpotResponse {
  export type AsObject = {
    id: number,
  }
}

export class GetSpotRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSpotRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSpotRequest): GetSpotRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSpotRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSpotRequest;
  static deserializeBinaryFromReader(message: GetSpotRequest, reader: jspb.BinaryReader): GetSpotRequest;
}

export namespace GetSpotRequest {
  export type AsObject = {
    id: number,
  }
}

export class GetSpotResponse extends jspb.Message {
  hasSpot(): boolean;
  clearSpot(): void;
  getSpot(): Spot | undefined;
  setSpot(value?: Spot): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSpotResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetSpotResponse): GetSpotResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSpotResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSpotResponse;
  static deserializeBinaryFromReader(message: GetSpotResponse, reader: jspb.BinaryReader): GetSpotResponse;
}

export namespace GetSpotResponse {
  export type AsObject = {
    spot?: Spot.AsObject,
  }
}

export class UpdateSpotRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  hasSpot(): boolean;
  clearSpot(): void;
  getSpot(): Spot | undefined;
  setSpot(value?: Spot): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateSpotRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateSpotRequest): UpdateSpotRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateSpotRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateSpotRequest;
  static deserializeBinaryFromReader(message: UpdateSpotRequest, reader: jspb.BinaryReader): UpdateSpotRequest;
}

export namespace UpdateSpotRequest {
  export type AsObject = {
    id: number,
    spot?: Spot.AsObject,
  }
}

export class UpdateSpotResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateSpotResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateSpotResponse): UpdateSpotResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateSpotResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateSpotResponse;
  static deserializeBinaryFromReader(message: UpdateSpotResponse, reader: jspb.BinaryReader): UpdateSpotResponse;
}

export namespace UpdateSpotResponse {
  export type AsObject = {
  }
}

export class DeleteSpotRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteSpotRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteSpotRequest): DeleteSpotRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteSpotRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteSpotRequest;
  static deserializeBinaryFromReader(message: DeleteSpotRequest, reader: jspb.BinaryReader): DeleteSpotRequest;
}

export namespace DeleteSpotRequest {
  export type AsObject = {
    id: number,
  }
}

export class DeleteSpotResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteSpotResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteSpotResponse): DeleteSpotResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteSpotResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteSpotResponse;
  static deserializeBinaryFromReader(message: DeleteSpotResponse, reader: jspb.BinaryReader): DeleteSpotResponse;
}

export namespace DeleteSpotResponse {
  export type AsObject = {
  }
}

