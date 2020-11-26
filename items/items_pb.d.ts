// package: mruv.items
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

export class GetContainerTypesRequest extends jspb.Message {
  getLimit(): number;
  setLimit(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetContainerTypesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetContainerTypesRequest): GetContainerTypesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetContainerTypesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetContainerTypesRequest;
  static deserializeBinaryFromReader(message: GetContainerTypesRequest, reader: jspb.BinaryReader): GetContainerTypesRequest;
}

export namespace GetContainerTypesRequest {
  export type AsObject = {
    limit: number,
  }
}

export class GetContainerTypesResponse extends jspb.Message {
  clearContainerTypesList(): void;
  getContainerTypesList(): Array<items_items_model_pb.ContainerType>;
  setContainerTypesList(value: Array<items_items_model_pb.ContainerType>): void;
  addContainerTypes(value?: items_items_model_pb.ContainerType, index?: number): items_items_model_pb.ContainerType;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetContainerTypesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetContainerTypesResponse): GetContainerTypesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetContainerTypesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetContainerTypesResponse;
  static deserializeBinaryFromReader(message: GetContainerTypesResponse, reader: jspb.BinaryReader): GetContainerTypesResponse;
}

export namespace GetContainerTypesResponse {
  export type AsObject = {
    containerTypesList: Array<items_items_model_pb.ContainerType.AsObject>,
  }
}

export class PutItemRequest extends jspb.Message {
  getContainerId(): number;
  setContainerId(value: number): void;

  getItemId(): number;
  setItemId(value: number): void;

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
    containerId: number,
    itemId: number,
    slot: number,
  }

  export enum WhereCase {
    WHERE_NOT_SET = 0,
    SLOT = 3,
  }
}

export class PutItemResponse extends jspb.Message {
  hasInsideItem(): boolean;
  clearInsideItem(): void;
  getInsideItem(): items_items_model_pb.InsideItem | undefined;
  setInsideItem(value?: items_items_model_pb.InsideItem): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PutItemResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PutItemResponse): PutItemResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PutItemResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PutItemResponse;
  static deserializeBinaryFromReader(message: PutItemResponse, reader: jspb.BinaryReader): PutItemResponse;
}

export namespace PutItemResponse {
  export type AsObject = {
    insideItem?: items_items_model_pb.InsideItem.AsObject,
  }
}

export class GetContainerItemsRequest extends jspb.Message {
  getContainerId(): number;
  setContainerId(value: number): void;

  getLimit(): number;
  setLimit(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetContainerItemsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetContainerItemsRequest): GetContainerItemsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetContainerItemsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetContainerItemsRequest;
  static deserializeBinaryFromReader(message: GetContainerItemsRequest, reader: jspb.BinaryReader): GetContainerItemsRequest;
}

export namespace GetContainerItemsRequest {
  export type AsObject = {
    containerId: number,
    limit: number,
  }
}

export class GetContainerItemsResponse extends jspb.Message {
  clearItemsList(): void;
  getItemsList(): Array<items_items_model_pb.InsideItem>;
  setItemsList(value: Array<items_items_model_pb.InsideItem>): void;
  addItems(value?: items_items_model_pb.InsideItem, index?: number): items_items_model_pb.InsideItem;

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
    itemsList: Array<items_items_model_pb.InsideItem.AsObject>,
  }
}

export class PullItemRequest extends jspb.Message {
  getContainerId(): number;
  setContainerId(value: number): void;

  getItemId(): number;
  setItemId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PullItemRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PullItemRequest): PullItemRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PullItemRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PullItemRequest;
  static deserializeBinaryFromReader(message: PullItemRequest, reader: jspb.BinaryReader): PullItemRequest;
}

export namespace PullItemRequest {
  export type AsObject = {
    containerId: number,
    itemId: number,
  }
}

export class SortItemsRequest extends jspb.Message {
  getContainerId(): number;
  setContainerId(value: number): void;

  getSortBy(): items_items_model_pb.SortingModeMap[keyof items_items_model_pb.SortingModeMap];
  setSortBy(value: items_items_model_pb.SortingModeMap[keyof items_items_model_pb.SortingModeMap]): void;

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
    containerId: number,
    sortBy: items_items_model_pb.SortingModeMap[keyof items_items_model_pb.SortingModeMap],
  }
}

export class SortItemsResponse extends jspb.Message {
  hasContainer(): boolean;
  clearContainer(): void;
  getContainer(): items_items_model_pb.Container | undefined;
  setContainer(value?: items_items_model_pb.Container): void;

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
    container?: items_items_model_pb.Container.AsObject,
  }
}

export class GetNearestItemsRequest extends jspb.Message {
  hasPosition(): boolean;
  clearPosition(): void;
  getPosition(): common_spatial_pb.Position | undefined;
  setPosition(value?: common_spatial_pb.Position): void;

  getContainerId(): number;
  setContainerId(value: number): void;

  getDistanceLimit(): number;
  setDistanceLimit(value: number): void;

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
    position?: common_spatial_pb.Position.AsObject,
    containerId: number,
    distanceLimit: number,
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
  getItemId(): number;
  setItemId(value: number): void;

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
    itemId: number,
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

