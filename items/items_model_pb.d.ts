// package: mruv
// file: items/items_model.proto

import * as jspb from "google-protobuf";
import * as validate_validate_pb from "../validate/validate_pb";

export class ItemType extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): ItemTypeID | undefined;
  setId(value?: ItemTypeID): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getBaseWeight(): number;
  setBaseWeight(value: number): void;

  getBaseVolume(): number;
  setBaseVolume(value: number): void;

  getModelName(): string;
  setModelName(value: string): void;

  getModelHash(): number;
  setModelHash(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ItemType.AsObject;
  static toObject(includeInstance: boolean, msg: ItemType): ItemType.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ItemType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ItemType;
  static deserializeBinaryFromReader(message: ItemType, reader: jspb.BinaryReader): ItemType;
}

export namespace ItemType {
  export type AsObject = {
    id?: ItemTypeID.AsObject,
    name: string,
    description: string,
    baseWeight: number,
    baseVolume: number,
    modelName: string,
    modelHash: number,
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

export class Item extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): ItemID | undefined;
  setId(value?: ItemID): void;

  hasItemTypeId(): boolean;
  clearItemTypeId(): void;
  getItemTypeId(): ItemTypeID | undefined;
  setItemTypeId(value?: ItemTypeID): void;

  getWeight(): number;
  setWeight(value: number): void;

  getVolume(): number;
  setVolume(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Item.AsObject;
  static toObject(includeInstance: boolean, msg: Item): Item.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Item, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Item;
  static deserializeBinaryFromReader(message: Item, reader: jspb.BinaryReader): Item;
}

export namespace Item {
  export type AsObject = {
    id?: ItemID.AsObject,
    itemTypeId?: ItemTypeID.AsObject,
    weight: number,
    volume: number,
  }
}

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

export class ContainerType extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): ContainerTypeID | undefined;
  setId(value?: ContainerTypeID): void;

  hasContainerItemTypeId(): boolean;
  clearContainerItemTypeId(): void;
  getContainerItemTypeId(): ItemTypeID | undefined;
  setContainerItemTypeId(value?: ItemTypeID): void;

  getMaxNumber(): number;
  setMaxNumber(value: number): void;

  getMaxVolume(): number;
  setMaxVolume(value: number): void;

  getMaxWeight(): number;
  setMaxWeight(value: number): void;

  clearValidItemTypesList(): void;
  getValidItemTypesList(): Array<ItemTypeID>;
  setValidItemTypesList(value: Array<ItemTypeID>): void;
  addValidItemTypes(value?: ItemTypeID, index?: number): ItemTypeID;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContainerType.AsObject;
  static toObject(includeInstance: boolean, msg: ContainerType): ContainerType.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContainerType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContainerType;
  static deserializeBinaryFromReader(message: ContainerType, reader: jspb.BinaryReader): ContainerType;
}

export namespace ContainerType {
  export type AsObject = {
    id?: ContainerTypeID.AsObject,
    containerItemTypeId?: ItemTypeID.AsObject,
    maxNumber: number,
    maxVolume: number,
    maxWeight: number,
    validItemTypesList: Array<ItemTypeID.AsObject>,
  }
}

export class ContainerTypeID extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContainerTypeID.AsObject;
  static toObject(includeInstance: boolean, msg: ContainerTypeID): ContainerTypeID.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContainerTypeID, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContainerTypeID;
  static deserializeBinaryFromReader(message: ContainerTypeID, reader: jspb.BinaryReader): ContainerTypeID;
}

export namespace ContainerTypeID {
  export type AsObject = {
    id: number,
  }
}

export class Container extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): ContainerID | undefined;
  setId(value?: ContainerID): void;

  hasTypeId(): boolean;
  clearTypeId(): void;
  getTypeId(): ContainerTypeID | undefined;
  setTypeId(value?: ContainerTypeID): void;

  hasItemId(): boolean;
  clearItemId(): void;
  getItemId(): ItemID | undefined;
  setItemId(value?: ItemID): void;

  getItemsInside(): number;
  setItemsInside(value: number): void;

  clearItemsList(): void;
  getItemsList(): Array<InsideItem>;
  setItemsList(value: Array<InsideItem>): void;
  addItems(value?: InsideItem, index?: number): InsideItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Container.AsObject;
  static toObject(includeInstance: boolean, msg: Container): Container.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Container, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Container;
  static deserializeBinaryFromReader(message: Container, reader: jspb.BinaryReader): Container;
}

export namespace Container {
  export type AsObject = {
    id?: ContainerID.AsObject,
    typeId?: ContainerTypeID.AsObject,
    itemId?: ItemID.AsObject,
    itemsInside: number,
    itemsList: Array<InsideItem.AsObject>,
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

export class InsideItem extends jspb.Message {
  hasContainerId(): boolean;
  clearContainerId(): void;
  getContainerId(): ContainerID | undefined;
  setContainerId(value?: ContainerID): void;

  hasItemId(): boolean;
  clearItemId(): void;
  getItemId(): ItemID | undefined;
  setItemId(value?: ItemID): void;

  hasItem(): boolean;
  clearItem(): void;
  getItem(): Item | undefined;
  setItem(value?: Item): void;

  getPosition(): number;
  setPosition(value: number): void;

  getItemOrIdCase(): InsideItem.ItemOrIdCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InsideItem.AsObject;
  static toObject(includeInstance: boolean, msg: InsideItem): InsideItem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InsideItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InsideItem;
  static deserializeBinaryFromReader(message: InsideItem, reader: jspb.BinaryReader): InsideItem;
}

export namespace InsideItem {
  export type AsObject = {
    containerId?: ContainerID.AsObject,
    itemId?: ItemID.AsObject,
    item?: Item.AsObject,
    position: number,
  }

  export enum ItemOrIdCase {
    ITEM_OR_ID_NOT_SET = 0,
    ITEM_ID = 2,
    ITEM = 3,
  }
}

