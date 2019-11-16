// package: mruv
// file: items/items.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../google/api/annotations_pb";
import * as common_health_pb from "../common/health_pb";
import * as items_items_model_pb from "../items/items_model_pb";
import * as common_spatial_pb from "../common/spatial_pb";

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
  getContainerId(): items_items_model_pb.ContainerID | undefined;
  setContainerId(value?: items_items_model_pb.ContainerID): void;

  hasItemId(): boolean;
  clearItemId(): void;
  getItemId(): items_items_model_pb.ItemID | undefined;
  setItemId(value?: items_items_model_pb.ItemID): void;

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
    containerId?: items_items_model_pb.ContainerID.AsObject,
    itemId?: items_items_model_pb.ItemID.AsObject,
    slot: number,
  }

  export enum WhereCase {
    WHERE_NOT_SET = 0,
    SLOT = 3,
  }
}

export class TakeItemRequest extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): items_items_model_pb.ItemID | undefined;
  setId(value?: items_items_model_pb.ItemID): void;

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
    id?: items_items_model_pb.ItemID.AsObject,
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
  getContainerId(): items_items_model_pb.ContainerID | undefined;
  setContainerId(value?: items_items_model_pb.ContainerID): void;

  hasItemId(): boolean;
  clearItemId(): void;
  getItemId(): items_items_model_pb.ItemID | undefined;
  setItemId(value?: items_items_model_pb.ItemID): void;

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
    containerId?: items_items_model_pb.ContainerID.AsObject,
    itemId?: items_items_model_pb.ItemID.AsObject,
  }
}

export class SortItemsRequest extends jspb.Message {
  hasContainerId(): boolean;
  clearContainerId(): void;
  getContainerId(): items_items_model_pb.ContainerID | undefined;
  setContainerId(value?: items_items_model_pb.ContainerID): void;

  getSortBy(): string;
  setSortBy(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SortItemsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SortItemsRequest): SortItemsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SortItemsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SortItemsRequest;
  static deserializeBinaryFromReader(message: SortItemsRequest, reader: jspb.BinaryReader): SortItemsRequest;
}

export namespace SortItemsRequest {
  export type AsObject = {
    containerId?: items_items_model_pb.ContainerID.AsObject,
    sortBy: string,
  }
}

export class SortItemsResponse extends jspb.Message {
  clearItemsList(): void;
  getItemsList(): Array<items_items_model_pb.Item>;
  setItemsList(value: Array<items_items_model_pb.Item>): void;
  addItems(value?: items_items_model_pb.Item, index?: number): items_items_model_pb.Item;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SortItemsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SortItemsResponse): SortItemsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SortItemsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SortItemsResponse;
  static deserializeBinaryFromReader(message: SortItemsResponse, reader: jspb.BinaryReader): SortItemsResponse;
}

export namespace SortItemsResponse {
  export type AsObject = {
    itemsList: Array<items_items_model_pb.Item.AsObject>,
  }
}

export class GetNearestItemsRequest extends jspb.Message {
  hasPlayerPosition(): boolean;
  clearPlayerPosition(): void;
  getPlayerPosition(): common_spatial_pb.Position | undefined;
  setPlayerPosition(value?: common_spatial_pb.Position): void;

  hasContainerId(): boolean;
  clearContainerId(): void;
  getContainerId(): items_items_model_pb.ContainerID | undefined;
  setContainerId(value?: items_items_model_pb.ContainerID): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNearestItemsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetNearestItemsRequest): GetNearestItemsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetNearestItemsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNearestItemsRequest;
  static deserializeBinaryFromReader(message: GetNearestItemsRequest, reader: jspb.BinaryReader): GetNearestItemsRequest;
}

export namespace GetNearestItemsRequest {
  export type AsObject = {
    playerPosition?: common_spatial_pb.Position.AsObject,
    containerId?: items_items_model_pb.ContainerID.AsObject,
  }
}

export class GetNearestItemsResponse extends jspb.Message {
  clearItemList(): void;
  getItemList(): Array<items_items_model_pb.InsideItem>;
  setItemList(value: Array<items_items_model_pb.InsideItem>): void;
  addItem(value?: items_items_model_pb.InsideItem, index?: number): items_items_model_pb.InsideItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNearestItemsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetNearestItemsResponse): GetNearestItemsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetNearestItemsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNearestItemsResponse;
  static deserializeBinaryFromReader(message: GetNearestItemsResponse, reader: jspb.BinaryReader): GetNearestItemsResponse;
}

export namespace GetNearestItemsResponse {
  export type AsObject = {
    itemList: Array<items_items_model_pb.InsideItem.AsObject>,
  }
}

export class UseItemRequest extends jspb.Message {
  hasItemId(): boolean;
  clearItemId(): void;
  getItemId(): items_items_model_pb.ItemID | undefined;
  setItemId(value?: items_items_model_pb.ItemID): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UseItemRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UseItemRequest): UseItemRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UseItemRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UseItemRequest;
  static deserializeBinaryFromReader(message: UseItemRequest, reader: jspb.BinaryReader): UseItemRequest;
}

export namespace UseItemRequest {
  export type AsObject = {
    itemId?: items_items_model_pb.ItemID.AsObject,
  }
}

export class UseItemResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UseItemResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UseItemResponse): UseItemResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UseItemResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UseItemResponse;
  static deserializeBinaryFromReader(message: UseItemResponse, reader: jspb.BinaryReader): UseItemResponse;
}

export namespace UseItemResponse {
  export type AsObject = {
    success: boolean,
  }
}

