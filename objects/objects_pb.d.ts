// package: mruv.objects
// file: objects/objects.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../google/api/annotations_pb";

export class Object extends jspb.Message {
  getModel(): number;
  setModel(value: number): void;

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

  getEstateId(): number;
  setEstateId(value: number): void;

  getMaterialsMap(): jspb.Map<number, Material>;
  clearMaterialsMap(): void;
  getMaterialTextsMap(): jspb.Map<number, MaterialText>;
  clearMaterialTextsMap(): void;
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
    estateId: number,
    materialsMap: Array<[number, Material.AsObject]>,
    materialTextsMap: Array<[number, MaterialText.AsObject]>,
  }
}

export class Material extends jspb.Message {
  getModelId(): number;
  setModelId(value: number): void;

  getTxdName(): string;
  setTxdName(value: string): void;

  getTextureName(): string;
  setTextureName(value: string): void;

  getMaterialColor(): number;
  setMaterialColor(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Material.AsObject;
  static toObject(includeInstance: boolean, msg: Material): Material.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Material, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Material;
  static deserializeBinaryFromReader(message: Material, reader: jspb.BinaryReader): Material;
}

export namespace Material {
  export type AsObject = {
    modelId: number,
    txdName: string,
    textureName: string,
    materialColor: number,
  }
}

export class MaterialText extends jspb.Message {
  getText(): string;
  setText(value: string): void;

  getMaterialSize(): MaterialSizeMap[keyof MaterialSizeMap];
  setMaterialSize(value: MaterialSizeMap[keyof MaterialSizeMap]): void;

  getFontFace(): string;
  setFontFace(value: string): void;

  getFontSize(): number;
  setFontSize(value: number): void;

  getBold(): boolean;
  setBold(value: boolean): void;

  getFontColor(): number;
  setFontColor(value: number): void;

  getBackColor(): number;
  setBackColor(value: number): void;

  getTextAlignment(): number;
  setTextAlignment(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MaterialText.AsObject;
  static toObject(includeInstance: boolean, msg: MaterialText): MaterialText.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MaterialText, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MaterialText;
  static deserializeBinaryFromReader(message: MaterialText, reader: jspb.BinaryReader): MaterialText;
}

export namespace MaterialText {
  export type AsObject = {
    text: string,
    materialSize: MaterialSizeMap[keyof MaterialSizeMap],
    fontFace: string,
    fontSize: number,
    bold: boolean,
    fontColor: number,
    backColor: number,
    textAlignment: number,
  }
}

export class RemovedBuilding extends jspb.Message {
  getModel(): number;
  setModel(value: number): void;

  getX(): number;
  setX(value: number): void;

  getY(): number;
  setY(value: number): void;

  getZ(): number;
  setZ(value: number): void;

  getRadius(): number;
  setRadius(value: number): void;

  getEstateId(): number;
  setEstateId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemovedBuilding.AsObject;
  static toObject(includeInstance: boolean, msg: RemovedBuilding): RemovedBuilding.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemovedBuilding, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemovedBuilding;
  static deserializeBinaryFromReader(message: RemovedBuilding, reader: jspb.BinaryReader): RemovedBuilding;
}

export namespace RemovedBuilding {
  export type AsObject = {
    model: number,
    x: number,
    y: number,
    z: number,
    radius: number,
    estateId: number,
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

export class AddObjectMaterialRequest extends jspb.Message {
  getObjectId(): number;
  setObjectId(value: number): void;

  getIndex(): number;
  setIndex(value: number): void;

  hasMaterial(): boolean;
  clearMaterial(): void;
  getMaterial(): Material | undefined;
  setMaterial(value?: Material): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddObjectMaterialRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddObjectMaterialRequest): AddObjectMaterialRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddObjectMaterialRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddObjectMaterialRequest;
  static deserializeBinaryFromReader(message: AddObjectMaterialRequest, reader: jspb.BinaryReader): AddObjectMaterialRequest;
}

export namespace AddObjectMaterialRequest {
  export type AsObject = {
    objectId: number,
    index: number,
    material?: Material.AsObject,
  }
}

export class AddObjectMaterialResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddObjectMaterialResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddObjectMaterialResponse): AddObjectMaterialResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddObjectMaterialResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddObjectMaterialResponse;
  static deserializeBinaryFromReader(message: AddObjectMaterialResponse, reader: jspb.BinaryReader): AddObjectMaterialResponse;
}

export namespace AddObjectMaterialResponse {
  export type AsObject = {
  }
}

export class GetObjectMaterialsRequest extends jspb.Message {
  getObjectId(): number;
  setObjectId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetObjectMaterialsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetObjectMaterialsRequest): GetObjectMaterialsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetObjectMaterialsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetObjectMaterialsRequest;
  static deserializeBinaryFromReader(message: GetObjectMaterialsRequest, reader: jspb.BinaryReader): GetObjectMaterialsRequest;
}

export namespace GetObjectMaterialsRequest {
  export type AsObject = {
    objectId: number,
  }
}

export class GetObjectMaterialsResponse extends jspb.Message {
  getMaterialsMap(): jspb.Map<number, Material>;
  clearMaterialsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetObjectMaterialsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetObjectMaterialsResponse): GetObjectMaterialsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetObjectMaterialsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetObjectMaterialsResponse;
  static deserializeBinaryFromReader(message: GetObjectMaterialsResponse, reader: jspb.BinaryReader): GetObjectMaterialsResponse;
}

export namespace GetObjectMaterialsResponse {
  export type AsObject = {
    materialsMap: Array<[number, Material.AsObject]>,
  }
}

export class DeleteObjectMaterialRequest extends jspb.Message {
  getObjectId(): number;
  setObjectId(value: number): void;

  getIndex(): number;
  setIndex(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteObjectMaterialRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteObjectMaterialRequest): DeleteObjectMaterialRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteObjectMaterialRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteObjectMaterialRequest;
  static deserializeBinaryFromReader(message: DeleteObjectMaterialRequest, reader: jspb.BinaryReader): DeleteObjectMaterialRequest;
}

export namespace DeleteObjectMaterialRequest {
  export type AsObject = {
    objectId: number,
    index: number,
  }
}

export class DeleteObjectMaterialResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteObjectMaterialResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteObjectMaterialResponse): DeleteObjectMaterialResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteObjectMaterialResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteObjectMaterialResponse;
  static deserializeBinaryFromReader(message: DeleteObjectMaterialResponse, reader: jspb.BinaryReader): DeleteObjectMaterialResponse;
}

export namespace DeleteObjectMaterialResponse {
  export type AsObject = {
  }
}

export class AddObjectMaterialTextRequest extends jspb.Message {
  getObjectId(): number;
  setObjectId(value: number): void;

  getIndex(): number;
  setIndex(value: number): void;

  hasMaterialText(): boolean;
  clearMaterialText(): void;
  getMaterialText(): MaterialText | undefined;
  setMaterialText(value?: MaterialText): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddObjectMaterialTextRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddObjectMaterialTextRequest): AddObjectMaterialTextRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddObjectMaterialTextRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddObjectMaterialTextRequest;
  static deserializeBinaryFromReader(message: AddObjectMaterialTextRequest, reader: jspb.BinaryReader): AddObjectMaterialTextRequest;
}

export namespace AddObjectMaterialTextRequest {
  export type AsObject = {
    objectId: number,
    index: number,
    materialText?: MaterialText.AsObject,
  }
}

export class AddObjectMaterialTextResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddObjectMaterialTextResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddObjectMaterialTextResponse): AddObjectMaterialTextResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddObjectMaterialTextResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddObjectMaterialTextResponse;
  static deserializeBinaryFromReader(message: AddObjectMaterialTextResponse, reader: jspb.BinaryReader): AddObjectMaterialTextResponse;
}

export namespace AddObjectMaterialTextResponse {
  export type AsObject = {
  }
}

export class GetObjectMaterialTextsRequest extends jspb.Message {
  getObjectId(): number;
  setObjectId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetObjectMaterialTextsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetObjectMaterialTextsRequest): GetObjectMaterialTextsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetObjectMaterialTextsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetObjectMaterialTextsRequest;
  static deserializeBinaryFromReader(message: GetObjectMaterialTextsRequest, reader: jspb.BinaryReader): GetObjectMaterialTextsRequest;
}

export namespace GetObjectMaterialTextsRequest {
  export type AsObject = {
    objectId: number,
  }
}

export class GetObjectMaterialTextsResponse extends jspb.Message {
  getMaterialTextsMap(): jspb.Map<number, MaterialText>;
  clearMaterialTextsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetObjectMaterialTextsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetObjectMaterialTextsResponse): GetObjectMaterialTextsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetObjectMaterialTextsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetObjectMaterialTextsResponse;
  static deserializeBinaryFromReader(message: GetObjectMaterialTextsResponse, reader: jspb.BinaryReader): GetObjectMaterialTextsResponse;
}

export namespace GetObjectMaterialTextsResponse {
  export type AsObject = {
    materialTextsMap: Array<[number, MaterialText.AsObject]>,
  }
}

export class DeleteObjectMaterialTextRequest extends jspb.Message {
  getObjectId(): number;
  setObjectId(value: number): void;

  getIndex(): number;
  setIndex(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteObjectMaterialTextRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteObjectMaterialTextRequest): DeleteObjectMaterialTextRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteObjectMaterialTextRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteObjectMaterialTextRequest;
  static deserializeBinaryFromReader(message: DeleteObjectMaterialTextRequest, reader: jspb.BinaryReader): DeleteObjectMaterialTextRequest;
}

export namespace DeleteObjectMaterialTextRequest {
  export type AsObject = {
    objectId: number,
    index: number,
  }
}

export class DeleteObjectMaterialTextResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteObjectMaterialTextResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteObjectMaterialTextResponse): DeleteObjectMaterialTextResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteObjectMaterialTextResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteObjectMaterialTextResponse;
  static deserializeBinaryFromReader(message: DeleteObjectMaterialTextResponse, reader: jspb.BinaryReader): DeleteObjectMaterialTextResponse;
}

export namespace DeleteObjectMaterialTextResponse {
  export type AsObject = {
  }
}

export class AddRemoveBuildingRequest extends jspb.Message {
  hasRemovedBuilding(): boolean;
  clearRemovedBuilding(): void;
  getRemovedBuilding(): RemovedBuilding | undefined;
  setRemovedBuilding(value?: RemovedBuilding): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddRemoveBuildingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddRemoveBuildingRequest): AddRemoveBuildingRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddRemoveBuildingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddRemoveBuildingRequest;
  static deserializeBinaryFromReader(message: AddRemoveBuildingRequest, reader: jspb.BinaryReader): AddRemoveBuildingRequest;
}

export namespace AddRemoveBuildingRequest {
  export type AsObject = {
    removedBuilding?: RemovedBuilding.AsObject,
  }
}

export class AddRemoveBuildingResponse extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddRemoveBuildingResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddRemoveBuildingResponse): AddRemoveBuildingResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddRemoveBuildingResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddRemoveBuildingResponse;
  static deserializeBinaryFromReader(message: AddRemoveBuildingResponse, reader: jspb.BinaryReader): AddRemoveBuildingResponse;
}

export namespace AddRemoveBuildingResponse {
  export type AsObject = {
    id: number,
  }
}

export class GetRemovedBuildingsRequest extends jspb.Message {
  getEstateId(): number;
  setEstateId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRemovedBuildingsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRemovedBuildingsRequest): GetRemovedBuildingsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRemovedBuildingsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRemovedBuildingsRequest;
  static deserializeBinaryFromReader(message: GetRemovedBuildingsRequest, reader: jspb.BinaryReader): GetRemovedBuildingsRequest;
}

export namespace GetRemovedBuildingsRequest {
  export type AsObject = {
    estateId: number,
  }
}

export class GetRemovedBuildingsResponse extends jspb.Message {
  clearRemovedBuildingList(): void;
  getRemovedBuildingList(): Array<RemovedBuilding>;
  setRemovedBuildingList(value: Array<RemovedBuilding>): void;
  addRemovedBuilding(value?: RemovedBuilding, index?: number): RemovedBuilding;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRemovedBuildingsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetRemovedBuildingsResponse): GetRemovedBuildingsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRemovedBuildingsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRemovedBuildingsResponse;
  static deserializeBinaryFromReader(message: GetRemovedBuildingsResponse, reader: jspb.BinaryReader): GetRemovedBuildingsResponse;
}

export namespace GetRemovedBuildingsResponse {
  export type AsObject = {
    removedBuildingList: Array<RemovedBuilding.AsObject>,
  }
}

export class DeleteRemoveBuildingRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRemoveBuildingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRemoveBuildingRequest): DeleteRemoveBuildingRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteRemoveBuildingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRemoveBuildingRequest;
  static deserializeBinaryFromReader(message: DeleteRemoveBuildingRequest, reader: jspb.BinaryReader): DeleteRemoveBuildingRequest;
}

export namespace DeleteRemoveBuildingRequest {
  export type AsObject = {
    id: number,
  }
}

export class DeleteRemoveBuildingResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRemoveBuildingResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRemoveBuildingResponse): DeleteRemoveBuildingResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteRemoveBuildingResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRemoveBuildingResponse;
  static deserializeBinaryFromReader(message: DeleteRemoveBuildingResponse, reader: jspb.BinaryReader): DeleteRemoveBuildingResponse;
}

export namespace DeleteRemoveBuildingResponse {
  export type AsObject = {
  }
}

export class FetchAllRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FetchAllRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FetchAllRequest): FetchAllRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FetchAllRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FetchAllRequest;
  static deserializeBinaryFromReader(message: FetchAllRequest, reader: jspb.BinaryReader): FetchAllRequest;
}

export namespace FetchAllRequest {
  export type AsObject = {
  }
}

export class FetchAllResponse extends jspb.Message {
  clearObjectsList(): void;
  getObjectsList(): Array<Object>;
  setObjectsList(value: Array<Object>): void;
  addObjects(value?: Object, index?: number): Object;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FetchAllResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FetchAllResponse): FetchAllResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FetchAllResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FetchAllResponse;
  static deserializeBinaryFromReader(message: FetchAllResponse, reader: jspb.BinaryReader): FetchAllResponse;
}

export namespace FetchAllResponse {
  export type AsObject = {
    objectsList: Array<Object.AsObject>,
  }
}

export interface MaterialSizeMap {
  OBJECT_MATERIAL_SIZE_0: 0;
  OBJECT_MATERIAL_SIZE_32X32: 10;
  OBJECT_MATERIAL_SIZE_64X32: 20;
  OBJECT_MATERIAL_SIZE_64X64: 30;
  OBJECT_MATERIAL_SIZE_128X32: 40;
  OBJECT_MATERIAL_SIZE_128X64: 50;
  OBJECT_MATERIAL_SIZE_128X128: 60;
  OBJECT_MATERIAL_SIZE_256X32: 70;
  OBJECT_MATERIAL_SIZE_256X64: 80;
  OBJECT_MATERIAL_SIZE_256X128: 90;
  OBJECT_MATERIAL_SIZE_256X256: 100;
  OBJECT_MATERIAL_SIZE_512X64: 110;
  OBJECT_MATERIAL_SIZE_512X128: 120;
  OBJECT_MATERIAL_SIZE_512X256: 130;
  OBJECT_MATERIAL_SIZE_512X512: 140;
}

export const MaterialSize: MaterialSizeMap;

