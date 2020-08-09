// package: mruv.objects
// file: objects/movable.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../google/api/annotations_pb";
import * as objects_objects_pb from "../objects/objects_pb";

export class State extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getX(): number;
  setX(value: number): void;

  getY(): number;
  setY(value: number): void;

  getZ(): number;
  setZ(value: number): void;

  getRx(): number;
  setRx(value: number): void;

  getRy(): number;
  setRy(value: number): void;

  getRz(): number;
  setRz(value: number): void;

  getTransitionSpeed(): number;
  setTransitionSpeed(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): State.AsObject;
  static toObject(includeInstance: boolean, msg: State): State.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: State, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): State;
  static deserializeBinaryFromReader(message: State, reader: jspb.BinaryReader): State;
}

export namespace State {
  export type AsObject = {
    name: string,
    x: number,
    y: number,
    z: number,
    rx: number,
    ry: number,
    rz: number,
    transitionSpeed: number,
  }
}

export class MovableObject extends jspb.Message {
  hasObject(): boolean;
  clearObject(): void;
  getObject(): objects_objects_pb.Object | undefined;
  setObject(value?: objects_objects_pb.Object): void;

  clearStatesList(): void;
  getStatesList(): Array<State>;
  setStatesList(value: Array<State>): void;
  addStates(value?: State, index?: number): State;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MovableObject.AsObject;
  static toObject(includeInstance: boolean, msg: MovableObject): MovableObject.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MovableObject, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MovableObject;
  static deserializeBinaryFromReader(message: MovableObject, reader: jspb.BinaryReader): MovableObject;
}

export namespace MovableObject {
  export type AsObject = {
    object?: objects_objects_pb.Object.AsObject,
    statesList: Array<State.AsObject>,
  }
}

export class CreateMovableObjectRequest extends jspb.Message {
  hasObject(): boolean;
  clearObject(): void;
  getObject(): objects_objects_pb.Object | undefined;
  setObject(value?: objects_objects_pb.Object): void;

  clearStatesList(): void;
  getStatesList(): Array<State>;
  setStatesList(value: Array<State>): void;
  addStates(value?: State, index?: number): State;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateMovableObjectRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateMovableObjectRequest): CreateMovableObjectRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateMovableObjectRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateMovableObjectRequest;
  static deserializeBinaryFromReader(message: CreateMovableObjectRequest, reader: jspb.BinaryReader): CreateMovableObjectRequest;
}

export namespace CreateMovableObjectRequest {
  export type AsObject = {
    object?: objects_objects_pb.Object.AsObject,
    statesList: Array<State.AsObject>,
  }
}

export class CreateMovableObjectResponse extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateMovableObjectResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateMovableObjectResponse): CreateMovableObjectResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateMovableObjectResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateMovableObjectResponse;
  static deserializeBinaryFromReader(message: CreateMovableObjectResponse, reader: jspb.BinaryReader): CreateMovableObjectResponse;
}

export namespace CreateMovableObjectResponse {
  export type AsObject = {
    id: number,
  }
}

export class GetMovableObjectRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMovableObjectRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetMovableObjectRequest): GetMovableObjectRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMovableObjectRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMovableObjectRequest;
  static deserializeBinaryFromReader(message: GetMovableObjectRequest, reader: jspb.BinaryReader): GetMovableObjectRequest;
}

export namespace GetMovableObjectRequest {
  export type AsObject = {
    id: number,
  }
}

export class GetMovableObjectResponse extends jspb.Message {
  hasObject(): boolean;
  clearObject(): void;
  getObject(): objects_objects_pb.Object | undefined;
  setObject(value?: objects_objects_pb.Object): void;

  clearStatesList(): void;
  getStatesList(): Array<State>;
  setStatesList(value: Array<State>): void;
  addStates(value?: State, index?: number): State;

  getCurrentStateId(): number;
  setCurrentStateId(value: number): void;

  getCurrentStateName(): string;
  setCurrentStateName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMovableObjectResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetMovableObjectResponse): GetMovableObjectResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMovableObjectResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMovableObjectResponse;
  static deserializeBinaryFromReader(message: GetMovableObjectResponse, reader: jspb.BinaryReader): GetMovableObjectResponse;
}

export namespace GetMovableObjectResponse {
  export type AsObject = {
    object?: objects_objects_pb.Object.AsObject,
    statesList: Array<State.AsObject>,
    currentStateId: number,
    currentStateName: string,
  }
}

export class UpdateMovableObjectRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getObjectId(): number;
  setObjectId(value: number): void;

  clearStatesList(): void;
  getStatesList(): Array<State>;
  setStatesList(value: Array<State>): void;
  addStates(value?: State, index?: number): State;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateMovableObjectRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateMovableObjectRequest): UpdateMovableObjectRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateMovableObjectRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateMovableObjectRequest;
  static deserializeBinaryFromReader(message: UpdateMovableObjectRequest, reader: jspb.BinaryReader): UpdateMovableObjectRequest;
}

export namespace UpdateMovableObjectRequest {
  export type AsObject = {
    id: number,
    objectId: number,
    statesList: Array<State.AsObject>,
  }
}

export class UpdateMovableObjectResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateMovableObjectResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateMovableObjectResponse): UpdateMovableObjectResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateMovableObjectResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateMovableObjectResponse;
  static deserializeBinaryFromReader(message: UpdateMovableObjectResponse, reader: jspb.BinaryReader): UpdateMovableObjectResponse;
}

export namespace UpdateMovableObjectResponse {
  export type AsObject = {
  }
}

export class DeleteMovableObjectRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteMovableObjectRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteMovableObjectRequest): DeleteMovableObjectRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteMovableObjectRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteMovableObjectRequest;
  static deserializeBinaryFromReader(message: DeleteMovableObjectRequest, reader: jspb.BinaryReader): DeleteMovableObjectRequest;
}

export namespace DeleteMovableObjectRequest {
  export type AsObject = {
    id: number,
  }
}

export class DeleteMovableObjectResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteMovableObjectResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteMovableObjectResponse): DeleteMovableObjectResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteMovableObjectResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteMovableObjectResponse;
  static deserializeBinaryFromReader(message: DeleteMovableObjectResponse, reader: jspb.BinaryReader): DeleteMovableObjectResponse;
}

export namespace DeleteMovableObjectResponse {
  export type AsObject = {
  }
}

export class MoveObjectRequest extends jspb.Message {
  getState(): number;
  setState(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MoveObjectRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MoveObjectRequest): MoveObjectRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MoveObjectRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MoveObjectRequest;
  static deserializeBinaryFromReader(message: MoveObjectRequest, reader: jspb.BinaryReader): MoveObjectRequest;
}

export namespace MoveObjectRequest {
  export type AsObject = {
    state: number,
  }
}

export class MoveObjectResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MoveObjectResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MoveObjectResponse): MoveObjectResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MoveObjectResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MoveObjectResponse;
  static deserializeBinaryFromReader(message: MoveObjectResponse, reader: jspb.BinaryReader): MoveObjectResponse;
}

export namespace MoveObjectResponse {
  export type AsObject = {
  }
}

export class MoveObjectNextRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MoveObjectNextRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MoveObjectNextRequest): MoveObjectNextRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MoveObjectNextRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MoveObjectNextRequest;
  static deserializeBinaryFromReader(message: MoveObjectNextRequest, reader: jspb.BinaryReader): MoveObjectNextRequest;
}

export namespace MoveObjectNextRequest {
  export type AsObject = {
    id: number,
  }
}

export class MoveObjectNextResponse extends jspb.Message {
  getStateId(): number;
  setStateId(value: number): void;

  getStateName(): string;
  setStateName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MoveObjectNextResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MoveObjectNextResponse): MoveObjectNextResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MoveObjectNextResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MoveObjectNextResponse;
  static deserializeBinaryFromReader(message: MoveObjectNextResponse, reader: jspb.BinaryReader): MoveObjectNextResponse;
}

export namespace MoveObjectNextResponse {
  export type AsObject = {
    stateId: number,
    stateName: string,
  }
}

export class MoveObjectPreviousRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MoveObjectPreviousRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MoveObjectPreviousRequest): MoveObjectPreviousRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MoveObjectPreviousRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MoveObjectPreviousRequest;
  static deserializeBinaryFromReader(message: MoveObjectPreviousRequest, reader: jspb.BinaryReader): MoveObjectPreviousRequest;
}

export namespace MoveObjectPreviousRequest {
  export type AsObject = {
    id: number,
  }
}

export class MoveObjectPreviousResponse extends jspb.Message {
  getStateId(): number;
  setStateId(value: number): void;

  getStateName(): string;
  setStateName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MoveObjectPreviousResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MoveObjectPreviousResponse): MoveObjectPreviousResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MoveObjectPreviousResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MoveObjectPreviousResponse;
  static deserializeBinaryFromReader(message: MoveObjectPreviousResponse, reader: jspb.BinaryReader): MoveObjectPreviousResponse;
}

export namespace MoveObjectPreviousResponse {
  export type AsObject = {
    stateId: number,
    stateName: string,
  }
}

