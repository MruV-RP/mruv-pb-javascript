// package: mruv
// file: items/items.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../google/api/annotations_pb";
import * as common_health_pb from "../common/health_pb";
import * as items_items_model_pb from "../items/items_model_pb";

export class ItemID extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ItemID.AsObject;
  static toObject(includeInstance: boolean, msg: ItemID): ItemID.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ItemID, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ItemID;
  static deserializeBinaryFromReader(message: ItemID, reader: jspb.BinaryReader): ItemID;
}

export namespace ItemID {
  export type AsObject = {
    id: number,
  }
}

export class ItemTypeID extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ItemTypeID.AsObject;
  static toObject(includeInstance: boolean, msg: ItemTypeID): ItemTypeID.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ItemTypeID, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ItemTypeID;
  static deserializeBinaryFromReader(message: ItemTypeID, reader: jspb.BinaryReader): ItemTypeID;
}

export namespace ItemTypeID {
  export type AsObject = {
    id: number,
  }
}

export class ContainerID extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContainerID.AsObject;
  static toObject(includeInstance: boolean, msg: ContainerID): ContainerID.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContainerID, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContainerID;
  static deserializeBinaryFromReader(message: ContainerID, reader: jspb.BinaryReader): ContainerID;
}

export namespace ContainerID {
  export type AsObject = {
    id: number,
  }
}

export class GetItemsRequest extends jspb.Message {
  getLimit(): number;
  setLimit(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetItemsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetItemsRequest): GetItemsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetItemsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetItemsRequest;
  static deserializeBinaryFromReader(message: GetItemsRequest, reader: jspb.BinaryReader): GetItemsRequest;
}

export namespace GetItemsRequest {
  export type AsObject = {
    limit: number,
  }
}

export class GetItemsResponse extends jspb.Message {
  clearItemsList(): void;
  getItemsList(): Array<items_items_model_pb.Item>;
  setItemsList(value: Array<items_items_model_pb.Item>): void;
  addItems(value?: items_items_model_pb.Item, index?: number): items_items_model_pb.Item;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetItemsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetItemsResponse): GetItemsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetItemsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetItemsResponse;
  static deserializeBinaryFromReader(message: GetItemsResponse, reader: jspb.BinaryReader): GetItemsResponse;
}

export namespace GetItemsResponse {
  export type AsObject = {
    itemsList: Array<items_items_model_pb.Item.AsObject>,
  }
}

export class GetItemTypesRequest extends jspb.Message {
  getLimit(): number;
  setLimit(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetItemTypesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetItemTypesRequest): GetItemTypesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetItemTypesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetItemTypesRequest;
  static deserializeBinaryFromReader(message: GetItemTypesRequest, reader: jspb.BinaryReader): GetItemTypesRequest;
}

export namespace GetItemTypesRequest {
  export type AsObject = {
    limit: number,
  }
}

export class GetItemTypesResponse extends jspb.Message {
  clearItemTypesList(): void;
  getItemTypesList(): Array<items_items_model_pb.ItemType>;
  setItemTypesList(value: Array<items_items_model_pb.ItemType>): void;
  addItemTypes(value?: items_items_model_pb.ItemType, index?: number): items_items_model_pb.ItemType;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetItemTypesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetItemTypesResponse): GetItemTypesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetItemTypesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetItemTypesResponse;
  static deserializeBinaryFromReader(message: GetItemTypesResponse, reader: jspb.BinaryReader): GetItemTypesResponse;
}

export namespace GetItemTypesResponse {
  export type AsObject = {
    itemTypesList: Array<items_items_model_pb.ItemType.AsObject>,
  }
}

export class GetContainersRequest extends jspb.Message {
  getLimit(): number;
  setLimit(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetContainersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetContainersRequest): GetContainersRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetContainersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetContainersRequest;
  static deserializeBinaryFromReader(message: GetContainersRequest, reader: jspb.BinaryReader): GetContainersRequest;
}

export namespace GetContainersRequest {
  export type AsObject = {
    limit: number,
  }
}

export class GetContainersResponse extends jspb.Message {
  clearContainersList(): void;
  getContainersList(): Array<items_items_model_pb.Container>;
  setContainersList(value: Array<items_items_model_pb.Container>): void;
  addContainers(value?: items_items_model_pb.Container, index?: number): items_items_model_pb.Container;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetContainersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetContainersResponse): GetContainersResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetContainersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetContainersResponse;
  static deserializeBinaryFromReader(message: GetContainersResponse, reader: jspb.BinaryReader): GetContainersResponse;
}

export namespace GetContainersResponse {
  export type AsObject = {
    containersList: Array<items_items_model_pb.Container.AsObject>,
  }
}

export class PutItemRequest extends jspb.Message {
  hasContainerId(): boolean;
  clearContainerId(): void;
  getContainerId(): ContainerID | undefined;
  setContainerId(value?: ContainerID): void;

  hasItemId(): boolean;
  clearItemId(): void;
  getItemId(): ItemID | undefined;
  setItemId(value?: ItemID): void;

  hasPosition(): boolean;
  clearPosition(): void;
  getPosition(): items_items_model_pb.Position | undefined;
  setPosition(value?: items_items_model_pb.Position): void;

  hasSlot(): boolean;
  clearSlot(): void;
  getSlot(): number;
  setSlot(value: number): void;

  getWhereCase(): PutItemRequest.WhereCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PutItemRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PutItemRequest): PutItemRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PutItemRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PutItemRequest;
  static deserializeBinaryFromReader(message: PutItemRequest, reader: jspb.BinaryReader): PutItemRequest;
}

export namespace PutItemRequest {
  export type AsObject = {
    containerId?: ContainerID.AsObject,
    itemId?: ItemID.AsObject,
    position?: items_items_model_pb.Position.AsObject,
    slot: number,
  }

  export enum WhereCase {
    WHERE_NOT_SET = 0,
    POSITION = 3,
    SLOT = 4,
  }
}

export class TakeItemRequest extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): ItemID | undefined;
  setId(value?: ItemID): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TakeItemRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TakeItemRequest): TakeItemRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TakeItemRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TakeItemRequest;
  static deserializeBinaryFromReader(message: TakeItemRequest, reader: jspb.BinaryReader): TakeItemRequest;
}

export namespace TakeItemRequest {
  export type AsObject = {
    id?: ItemID.AsObject,
  }
}

export class TakeItemResponse extends jspb.Message {
  hasItem(): boolean;
  clearItem(): void;
  getItem(): items_items_model_pb.Item | undefined;
  setItem(value?: items_items_model_pb.Item): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TakeItemResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TakeItemResponse): TakeItemResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TakeItemResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TakeItemResponse;
  static deserializeBinaryFromReader(message: TakeItemResponse, reader: jspb.BinaryReader): TakeItemResponse;
}

export namespace TakeItemResponse {
  export type AsObject = {
    item?: items_items_model_pb.Item.AsObject,
  }
}

export class GetContainerItemsResponse extends jspb.Message {
  clearItemsList(): void;
  getItemsList(): Array<items_items_model_pb.Item>;
  setItemsList(value: Array<items_items_model_pb.Item>): void;
  addItems(value?: items_items_model_pb.Item, index?: number): items_items_model_pb.Item;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetContainerItemsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetContainerItemsResponse): GetContainerItemsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetContainerItemsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetContainerItemsResponse;
  static deserializeBinaryFromReader(message: GetContainerItemsResponse, reader: jspb.BinaryReader): GetContainerItemsResponse;
}

export namespace GetContainerItemsResponse {
  export type AsObject = {
    itemsList: Array<items_items_model_pb.Item.AsObject>,
  }
}

export class RemoveItemRequest extends jspb.Message {
  hasContainerId(): boolean;
  clearContainerId(): void;
  getContainerId(): ContainerID | undefined;
  setContainerId(value?: ContainerID): void;

  hasItemId(): boolean;
  clearItemId(): void;
  getItemId(): ItemID | undefined;
  setItemId(value?: ItemID): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveItemRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveItemRequest): RemoveItemRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveItemRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveItemRequest;
  static deserializeBinaryFromReader(message: RemoveItemRequest, reader: jspb.BinaryReader): RemoveItemRequest;
}

export namespace RemoveItemRequest {
  export type AsObject = {
    containerId?: ContainerID.AsObject,
    itemId?: ItemID.AsObject,
  }
}

