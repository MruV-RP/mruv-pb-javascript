// package: mruv.gates
// file: objects/objects.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../google/api/annotations_pb";

export class ObjectModel extends jspb.Message {
  getModel(): number;
  setModel(value: number): void;

  getModelName(): string;
  setModelName(value: string): void;

  getName(): string;
  setName(value: string): void;

  getCategory(): string;
  setCategory(value: string): void;

  getProductId(): number;
  setProductId(value: number): void;

  getLength(): number;
  setLength(value: number): void;

  getWidth(): number;
  setWidth(value: number): void;

  getHeight(): number;
  setHeight(value: number): void;

  getSize(): number;
  setSize(value: number): void;

  clearTagsList(): void;
  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): void;
  addTags(value: string, index?: number): string;

  getHasCollision(): boolean;
  setHasCollision(value: boolean): void;

  getBreaksOnHit(): boolean;
  setBreaksOnHit(value: boolean): void;

  getHasAnimation(): boolean;
  setHasAnimation(value: boolean): void;

  getVisibleByTime(): boolean;
  setVisibleByTime(value: boolean): void;

  getVisibleFrom(): number;
  setVisibleFrom(value: number): void;

  getVisibleTo(): number;
  setVisibleTo(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ObjectModel.AsObject;
  static toObject(includeInstance: boolean, msg: ObjectModel): ObjectModel.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ObjectModel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ObjectModel;
  static deserializeBinaryFromReader(message: ObjectModel, reader: jspb.BinaryReader): ObjectModel;
}

export namespace ObjectModel {
  export type AsObject = {
    model: number,
    modelName: string,
    name: string,
    category: string,
    productId: number,
    length: number,
    width: number,
    height: number,
    size: number,
    tagsList: Array<string>,
    hasCollision: boolean,
    breaksOnHit: boolean,
    hasAnimation: boolean,
    visibleByTime: boolean,
    visibleFrom: number,
    visibleTo: number,
  }
}

export class Object extends jspb.Message {
  getModel(): number;
  setModel(value: number): void;

  getEstateId(): number;
  setEstateId(value: number): void;

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

  getWorldId(): number;
  setWorldId(value: number): void;

  getInteriorId(): number;
  setInteriorId(value: number): void;

  getPlayerId(): number;
  setPlayerId(value: number): void;

  getAreaId(): number;
  setAreaId(value: number): void;

  getStreamDistance(): number;
  setStreamDistance(value: number): void;

  getDrawDistance(): number;
  setDrawDistance(value: number): void;

  getPriority(): number;
  setPriority(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Object.AsObject;
  static toObject(includeInstance: boolean, msg: Object): Object.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Object, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Object;
  static deserializeBinaryFromReader(message: Object, reader: jspb.BinaryReader): Object;
}

export namespace Object {
  export type AsObject = {
    model: number,
    estateId: number,
    x: number,
    y: number,
    z: number,
    rx: number,
    ry: number,
    rz: number,
    worldId: number,
    interiorId: number,
    playerId: number,
    areaId: number,
    streamDistance: number,
    drawDistance: number,
    priority: number,
  }
}

export class CreateObjectModelRequest extends jspb.Message {
  hasObjectType(): boolean;
  clearObjectType(): void;
  getObjectType(): ObjectModel | undefined;
  setObjectType(value?: ObjectModel): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateObjectModelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateObjectModelRequest): CreateObjectModelRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateObjectModelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateObjectModelRequest;
  static deserializeBinaryFromReader(message: CreateObjectModelRequest, reader: jspb.BinaryReader): CreateObjectModelRequest;
}

export namespace CreateObjectModelRequest {
  export type AsObject = {
    objectType?: ObjectModel.AsObject,
  }
}

export class CreateObjectModelResponse extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateObjectModelResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateObjectModelResponse): CreateObjectModelResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateObjectModelResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateObjectModelResponse;
  static deserializeBinaryFromReader(message: CreateObjectModelResponse, reader: jspb.BinaryReader): CreateObjectModelResponse;
}

export namespace CreateObjectModelResponse {
  export type AsObject = {
    id: number,
  }
}

export class GetObjectModelRequest extends jspb.Message {
  getModel(): number;
  setModel(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetObjectModelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetObjectModelRequest): GetObjectModelRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetObjectModelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetObjectModelRequest;
  static deserializeBinaryFromReader(message: GetObjectModelRequest, reader: jspb.BinaryReader): GetObjectModelRequest;
}

export namespace GetObjectModelRequest {
  export type AsObject = {
    model: number,
  }
}

export class GetObjectModelResponse extends jspb.Message {
  hasObjectType(): boolean;
  clearObjectType(): void;
  getObjectType(): ObjectModel | undefined;
  setObjectType(value?: ObjectModel): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetObjectModelResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetObjectModelResponse): GetObjectModelResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetObjectModelResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetObjectModelResponse;
  static deserializeBinaryFromReader(message: GetObjectModelResponse, reader: jspb.BinaryReader): GetObjectModelResponse;
}

export namespace GetObjectModelResponse {
  export type AsObject = {
    objectType?: ObjectModel.AsObject,
  }
}

export class UpdateObjectModelRequest extends jspb.Message {
  hasObjectType(): boolean;
  clearObjectType(): void;
  getObjectType(): ObjectModel | undefined;
  setObjectType(value?: ObjectModel): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateObjectModelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateObjectModelRequest): UpdateObjectModelRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateObjectModelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateObjectModelRequest;
  static deserializeBinaryFromReader(message: UpdateObjectModelRequest, reader: jspb.BinaryReader): UpdateObjectModelRequest;
}

export namespace UpdateObjectModelRequest {
  export type AsObject = {
    objectType?: ObjectModel.AsObject,
  }
}

export class UpdateObjectModelResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateObjectModelResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateObjectModelResponse): UpdateObjectModelResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateObjectModelResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateObjectModelResponse;
  static deserializeBinaryFromReader(message: UpdateObjectModelResponse, reader: jspb.BinaryReader): UpdateObjectModelResponse;
}

export namespace UpdateObjectModelResponse {
  export type AsObject = {
  }
}

export class DeleteObjectModelRequest extends jspb.Message {
  getModel(): number;
  setModel(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteObjectModelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteObjectModelRequest): DeleteObjectModelRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteObjectModelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteObjectModelRequest;
  static deserializeBinaryFromReader(message: DeleteObjectModelRequest, reader: jspb.BinaryReader): DeleteObjectModelRequest;
}

export namespace DeleteObjectModelRequest {
  export type AsObject = {
    model: number,
  }
}

export class DeleteObjectModelResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteObjectModelResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteObjectModelResponse): DeleteObjectModelResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteObjectModelResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteObjectModelResponse;
  static deserializeBinaryFromReader(message: DeleteObjectModelResponse, reader: jspb.BinaryReader): DeleteObjectModelResponse;
}

export namespace DeleteObjectModelResponse {
  export type AsObject = {
  }
}

export class CreateObjectRequest extends jspb.Message {
  hasObject(): boolean;
  clearObject(): void;
  getObject(): Object | undefined;
  setObject(value?: Object): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateObjectRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateObjectRequest): CreateObjectRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateObjectRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateObjectRequest;
  static deserializeBinaryFromReader(message: CreateObjectRequest, reader: jspb.BinaryReader): CreateObjectRequest;
}

export namespace CreateObjectRequest {
  export type AsObject = {
    object?: Object.AsObject,
  }
}

export class CreateObjectResponse extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateObjectResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateObjectResponse): CreateObjectResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateObjectResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateObjectResponse;
  static deserializeBinaryFromReader(message: CreateObjectResponse, reader: jspb.BinaryReader): CreateObjectResponse;
}

export namespace CreateObjectResponse {
  export type AsObject = {
    id: number,
  }
}

export class GetObjectRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetObjectRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetObjectRequest): GetObjectRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetObjectRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetObjectRequest;
  static deserializeBinaryFromReader(message: GetObjectRequest, reader: jspb.BinaryReader): GetObjectRequest;
}

export namespace GetObjectRequest {
  export type AsObject = {
    id: number,
  }
}

export class GetObjectResponse extends jspb.Message {
  hasObject(): boolean;
  clearObject(): void;
  getObject(): Object | undefined;
  setObject(value?: Object): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetObjectResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetObjectResponse): GetObjectResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetObjectResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetObjectResponse;
  static deserializeBinaryFromReader(message: GetObjectResponse, reader: jspb.BinaryReader): GetObjectResponse;
}

export namespace GetObjectResponse {
  export type AsObject = {
    object?: Object.AsObject,
  }
}

export class UpdateObjectRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  hasObject(): boolean;
  clearObject(): void;
  getObject(): Object | undefined;
  setObject(value?: Object): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateObjectRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateObjectRequest): UpdateObjectRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateObjectRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateObjectRequest;
  static deserializeBinaryFromReader(message: UpdateObjectRequest, reader: jspb.BinaryReader): UpdateObjectRequest;
}

export namespace UpdateObjectRequest {
  export type AsObject = {
    id: number,
    object?: Object.AsObject,
  }
}

export class UpdateObjectResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateObjectResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateObjectResponse): UpdateObjectResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateObjectResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateObjectResponse;
  static deserializeBinaryFromReader(message: UpdateObjectResponse, reader: jspb.BinaryReader): UpdateObjectResponse;
}

export namespace UpdateObjectResponse {
  export type AsObject = {
  }
}

export class DeleteObjectRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteObjectRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteObjectRequest): DeleteObjectRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteObjectRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteObjectRequest;
  static deserializeBinaryFromReader(message: DeleteObjectRequest, reader: jspb.BinaryReader): DeleteObjectRequest;
}

export namespace DeleteObjectRequest {
  export type AsObject = {
    id: number,
  }
}

export class DeleteObjectResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteObjectResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteObjectResponse): DeleteObjectResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteObjectResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteObjectResponse;
  static deserializeBinaryFromReader(message: DeleteObjectResponse, reader: jspb.BinaryReader): DeleteObjectResponse;
}

export namespace DeleteObjectResponse {
  export type AsObject = {
  }
}

