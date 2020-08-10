// package: mruv.gates
// file: gates/gates.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../google/api/annotations_pb";
import * as objects_movable_pb from "../objects/movable_pb";
import * as spots_spots_pb from "../spots/spots_pb";

export class Gate extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  clearGateObjectsList(): void;
  getGateObjectsList(): Array<objects_movable_pb.MovableObject>;
  setGateObjectsList(value: Array<objects_movable_pb.MovableObject>): void;
  addGateObjects(value?: objects_movable_pb.MovableObject, index?: number): objects_movable_pb.MovableObject;

  hasSpot(): boolean;
  clearSpot(): void;
  getSpot(): spots_spots_pb.Spot | undefined;
  setSpot(value?: spots_spots_pb.Spot): void;

  getOpened(): boolean;
  setOpened(value: boolean): void;

  getLocked(): boolean;
  setLocked(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Gate.AsObject;
  static toObject(includeInstance: boolean, msg: Gate): Gate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Gate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Gate;
  static deserializeBinaryFromReader(message: Gate, reader: jspb.BinaryReader): Gate;
}

export namespace Gate {
  export type AsObject = {
    name: string,
    gateObjectsList: Array<objects_movable_pb.MovableObject.AsObject>,
    spot?: spots_spots_pb.Spot.AsObject,
    opened: boolean,
    locked: boolean,
  }
}

export class CreateGateRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  clearGateObjectsList(): void;
  getGateObjectsList(): Array<objects_movable_pb.MovableObject>;
  setGateObjectsList(value: Array<objects_movable_pb.MovableObject>): void;
  addGateObjects(value?: objects_movable_pb.MovableObject, index?: number): objects_movable_pb.MovableObject;

  hasSpot(): boolean;
  clearSpot(): void;
  getSpot(): spots_spots_pb.Spot | undefined;
  setSpot(value?: spots_spots_pb.Spot): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateGateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateGateRequest): CreateGateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateGateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateGateRequest;
  static deserializeBinaryFromReader(message: CreateGateRequest, reader: jspb.BinaryReader): CreateGateRequest;
}

export namespace CreateGateRequest {
  export type AsObject = {
    name: string,
    gateObjectsList: Array<objects_movable_pb.MovableObject.AsObject>,
    spot?: spots_spots_pb.Spot.AsObject,
  }
}

export class CreateGateResponse extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateGateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateGateResponse): CreateGateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateGateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateGateResponse;
  static deserializeBinaryFromReader(message: CreateGateResponse, reader: jspb.BinaryReader): CreateGateResponse;
}

export namespace CreateGateResponse {
  export type AsObject = {
    id: number,
  }
}

export class GetGateRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetGateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetGateRequest): GetGateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetGateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetGateRequest;
  static deserializeBinaryFromReader(message: GetGateRequest, reader: jspb.BinaryReader): GetGateRequest;
}

export namespace GetGateRequest {
  export type AsObject = {
    id: number,
  }
}

export class GetGateResponse extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  clearGateMovableObjectsList(): void;
  getGateMovableObjectsList(): Array<number>;
  setGateMovableObjectsList(value: Array<number>): void;
  addGateMovableObjects(value: number, index?: number): number;

  hasSpot(): boolean;
  clearSpot(): void;
  getSpot(): spots_spots_pb.Spot | undefined;
  setSpot(value?: spots_spots_pb.Spot): void;

  getOpened(): boolean;
  setOpened(value: boolean): void;

  getLocked(): boolean;
  setLocked(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetGateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetGateResponse): GetGateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetGateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetGateResponse;
  static deserializeBinaryFromReader(message: GetGateResponse, reader: jspb.BinaryReader): GetGateResponse;
}

export namespace GetGateResponse {
  export type AsObject = {
    name: string,
    gateMovableObjectsList: Array<number>,
    spot?: spots_spots_pb.Spot.AsObject,
    opened: boolean,
    locked: boolean,
  }
}

export class UpdateGateRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getName(): string;
  setName(value: string): void;

  getSpotId(): number;
  setSpotId(value: number): void;

  clearGateMovableObjectsList(): void;
  getGateMovableObjectsList(): Array<number>;
  setGateMovableObjectsList(value: Array<number>): void;
  addGateMovableObjects(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateGateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateGateRequest): UpdateGateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateGateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateGateRequest;
  static deserializeBinaryFromReader(message: UpdateGateRequest, reader: jspb.BinaryReader): UpdateGateRequest;
}

export namespace UpdateGateRequest {
  export type AsObject = {
    id: number,
    name: string,
    spotId: number,
    gateMovableObjectsList: Array<number>,
  }
}

export class UpdateGateResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateGateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateGateResponse): UpdateGateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateGateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateGateResponse;
  static deserializeBinaryFromReader(message: UpdateGateResponse, reader: jspb.BinaryReader): UpdateGateResponse;
}

export namespace UpdateGateResponse {
  export type AsObject = {
  }
}

export class DeleteGateRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteGateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteGateRequest): DeleteGateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteGateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteGateRequest;
  static deserializeBinaryFromReader(message: DeleteGateRequest, reader: jspb.BinaryReader): DeleteGateRequest;
}

export namespace DeleteGateRequest {
  export type AsObject = {
    id: number,
  }
}

export class DeleteGateResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteGateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteGateResponse): DeleteGateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteGateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteGateResponse;
  static deserializeBinaryFromReader(message: DeleteGateResponse, reader: jspb.BinaryReader): DeleteGateResponse;
}

export namespace DeleteGateResponse {
  export type AsObject = {
  }
}

export class LockRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LockRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LockRequest): LockRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LockRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LockRequest;
  static deserializeBinaryFromReader(message: LockRequest, reader: jspb.BinaryReader): LockRequest;
}

export namespace LockRequest {
  export type AsObject = {
    id: number,
  }
}

export class LockResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LockResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LockResponse): LockResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LockResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LockResponse;
  static deserializeBinaryFromReader(message: LockResponse, reader: jspb.BinaryReader): LockResponse;
}

export namespace LockResponse {
  export type AsObject = {
  }
}

export class UnlockRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnlockRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UnlockRequest): UnlockRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UnlockRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnlockRequest;
  static deserializeBinaryFromReader(message: UnlockRequest, reader: jspb.BinaryReader): UnlockRequest;
}

export namespace UnlockRequest {
  export type AsObject = {
    id: number,
  }
}

export class UnlockResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnlockResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UnlockResponse): UnlockResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UnlockResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnlockResponse;
  static deserializeBinaryFromReader(message: UnlockResponse, reader: jspb.BinaryReader): UnlockResponse;
}

export namespace UnlockResponse {
  export type AsObject = {
  }
}

export class OpenRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OpenRequest.AsObject;
  static toObject(includeInstance: boolean, msg: OpenRequest): OpenRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OpenRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OpenRequest;
  static deserializeBinaryFromReader(message: OpenRequest, reader: jspb.BinaryReader): OpenRequest;
}

export namespace OpenRequest {
  export type AsObject = {
    id: number,
  }
}

export class OpenResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OpenResponse.AsObject;
  static toObject(includeInstance: boolean, msg: OpenResponse): OpenResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OpenResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OpenResponse;
  static deserializeBinaryFromReader(message: OpenResponse, reader: jspb.BinaryReader): OpenResponse;
}

export namespace OpenResponse {
  export type AsObject = {
  }
}

export class CloseRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CloseRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CloseRequest): CloseRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CloseRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CloseRequest;
  static deserializeBinaryFromReader(message: CloseRequest, reader: jspb.BinaryReader): CloseRequest;
}

export namespace CloseRequest {
  export type AsObject = {
    id: number,
  }
}

export class CloseResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CloseResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CloseResponse): CloseResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CloseResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CloseResponse;
  static deserializeBinaryFromReader(message: CloseResponse, reader: jspb.BinaryReader): CloseResponse;
}

export namespace CloseResponse {
  export type AsObject = {
  }
}

export class FindNearestGateRequest extends jspb.Message {
  getX(): number;
  setX(value: number): void;

  getY(): number;
  setY(value: number): void;

  getZ(): number;
  setZ(value: number): void;

  getMaxDistance(): number;
  setMaxDistance(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindNearestGateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FindNearestGateRequest): FindNearestGateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FindNearestGateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindNearestGateRequest;
  static deserializeBinaryFromReader(message: FindNearestGateRequest, reader: jspb.BinaryReader): FindNearestGateRequest;
}

export namespace FindNearestGateRequest {
  export type AsObject = {
    x: number,
    y: number,
    z: number,
    maxDistance: number,
  }
}

export class FindNearestGateResponse extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getDistance(): number;
  setDistance(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindNearestGateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FindNearestGateResponse): FindNearestGateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FindNearestGateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindNearestGateResponse;
  static deserializeBinaryFromReader(message: FindNearestGateResponse, reader: jspb.BinaryReader): FindNearestGateResponse;
}

export namespace FindNearestGateResponse {
  export type AsObject = {
    id: number,
    distance: number,
  }
}

