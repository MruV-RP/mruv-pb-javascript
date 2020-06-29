// package: mruv.entrances
// file: entrances/entrances.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../google/api/annotations_pb";

export class Entrance extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getEstateId(): number;
  setEstateId(value: number): void;

  hasOut(): boolean;
  clearOut(): void;
  getOut(): Entrance.EntranceDoor | undefined;
  setOut(value?: Entrance.EntranceDoor): void;

  hasIn(): boolean;
  clearIn(): void;
  getIn(): Entrance.EntranceDoor | undefined;
  setIn(value?: Entrance.EntranceDoor): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Entrance.AsObject;
  static toObject(includeInstance: boolean, msg: Entrance): Entrance.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Entrance, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Entrance;
  static deserializeBinaryFromReader(message: Entrance, reader: jspb.BinaryReader): Entrance;
}

export namespace Entrance {
  export type AsObject = {
    id: number,
    estateId: number,
    out?: Entrance.EntranceDoor.AsObject,
    pb_in?: Entrance.EntranceDoor.AsObject,
  }

  export class EntranceDoor extends jspb.Message {
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

    getEstateId(): number;
    setEstateId(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EntranceDoor.AsObject;
    static toObject(includeInstance: boolean, msg: EntranceDoor): EntranceDoor.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EntranceDoor, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EntranceDoor;
    static deserializeBinaryFromReader(message: EntranceDoor, reader: jspb.BinaryReader): EntranceDoor;
  }

  export namespace EntranceDoor {
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
      estateId: number,
    }
  }
}

export class CreateEntranceRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateEntranceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateEntranceRequest): CreateEntranceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateEntranceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateEntranceRequest;
  static deserializeBinaryFromReader(message: CreateEntranceRequest, reader: jspb.BinaryReader): CreateEntranceRequest;
}

export namespace CreateEntranceRequest {
  export type AsObject = {
  }
}

export class CreateEntranceResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateEntranceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateEntranceResponse): CreateEntranceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateEntranceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateEntranceResponse;
  static deserializeBinaryFromReader(message: CreateEntranceResponse, reader: jspb.BinaryReader): CreateEntranceResponse;
}

export namespace CreateEntranceResponse {
  export type AsObject = {
  }
}

export class GetEntranceRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEntranceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetEntranceRequest): GetEntranceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetEntranceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEntranceRequest;
  static deserializeBinaryFromReader(message: GetEntranceRequest, reader: jspb.BinaryReader): GetEntranceRequest;
}

export namespace GetEntranceRequest {
  export type AsObject = {
    id: number,
  }
}

export class GetEntranceResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEntranceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetEntranceResponse): GetEntranceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetEntranceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEntranceResponse;
  static deserializeBinaryFromReader(message: GetEntranceResponse, reader: jspb.BinaryReader): GetEntranceResponse;
}

export namespace GetEntranceResponse {
  export type AsObject = {
  }
}

export class UpdateEntranceRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateEntranceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateEntranceRequest): UpdateEntranceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateEntranceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateEntranceRequest;
  static deserializeBinaryFromReader(message: UpdateEntranceRequest, reader: jspb.BinaryReader): UpdateEntranceRequest;
}

export namespace UpdateEntranceRequest {
  export type AsObject = {
    id: number,
  }
}

export class UpdateEntranceResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateEntranceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateEntranceResponse): UpdateEntranceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateEntranceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateEntranceResponse;
  static deserializeBinaryFromReader(message: UpdateEntranceResponse, reader: jspb.BinaryReader): UpdateEntranceResponse;
}

export namespace UpdateEntranceResponse {
  export type AsObject = {
  }
}

export class DeleteEntranceRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteEntranceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteEntranceRequest): DeleteEntranceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteEntranceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteEntranceRequest;
  static deserializeBinaryFromReader(message: DeleteEntranceRequest, reader: jspb.BinaryReader): DeleteEntranceRequest;
}

export namespace DeleteEntranceRequest {
  export type AsObject = {
    id: number,
  }
}

export class DeleteEntranceResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteEntranceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteEntranceResponse): DeleteEntranceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteEntranceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteEntranceResponse;
  static deserializeBinaryFromReader(message: DeleteEntranceResponse, reader: jspb.BinaryReader): DeleteEntranceResponse;
}

export namespace DeleteEntranceResponse {
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

export class FindNearestEntranceRequest extends jspb.Message {
  getX(): number;
  setX(value: number): void;

  getY(): number;
  setY(value: number): void;

  getZ(): number;
  setZ(value: number): void;

  getMaxDistance(): number;
  setMaxDistance(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindNearestEntranceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FindNearestEntranceRequest): FindNearestEntranceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FindNearestEntranceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindNearestEntranceRequest;
  static deserializeBinaryFromReader(message: FindNearestEntranceRequest, reader: jspb.BinaryReader): FindNearestEntranceRequest;
}

export namespace FindNearestEntranceRequest {
  export type AsObject = {
    x: number,
    y: number,
    z: number,
    maxDistance: number,
  }
}

export class FindNearestEntranceResponse extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getDistance(): number;
  setDistance(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindNearestEntranceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FindNearestEntranceResponse): FindNearestEntranceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FindNearestEntranceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindNearestEntranceResponse;
  static deserializeBinaryFromReader(message: FindNearestEntranceResponse, reader: jspb.BinaryReader): FindNearestEntranceResponse;
}

export namespace FindNearestEntranceResponse {
  export type AsObject = {
    id: number,
    distance: number,
  }
}

export class EnterRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EnterRequest): EnterRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EnterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnterRequest;
  static deserializeBinaryFromReader(message: EnterRequest, reader: jspb.BinaryReader): EnterRequest;
}

export namespace EnterRequest {
  export type AsObject = {
    id: number,
  }
}

export class EnterResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnterResponse.AsObject;
  static toObject(includeInstance: boolean, msg: EnterResponse): EnterResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EnterResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnterResponse;
  static deserializeBinaryFromReader(message: EnterResponse, reader: jspb.BinaryReader): EnterResponse;
}

export namespace EnterResponse {
  export type AsObject = {
  }
}

