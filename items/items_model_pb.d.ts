// package: mruv
// file: items/items_model.proto

import * as jspb from "google-protobuf";

export class ItemType extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getBaseWeight(): number;
  setBaseWeight(value: number): void;

  getBaseVolume(): number;
  setBaseVolume(value: number): void;

  getStacks(): number;
  setStacks(value: number): void;

  getIconUri(): string;
  setIconUri(value: string): void;

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
    id: number,
    name: string,
    description: string,
    baseWeight: number,
    baseVolume: number,
    stacks: number,
    iconUri: string,
  }
}

export class Item extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  hasItemType(): boolean;
  clearItemType(): void;
  getItemType(): ItemType | undefined;
  setItemType(value?: ItemType): void;

  getName(): string;
  setName(value: string): void;

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
    id: number,
    itemType?: ItemType.AsObject,
    name: string,
    weight: number,
    volume: number,
  }
}

export class Container extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  hasContainerItem(): boolean;
  clearContainerItem(): void;
  getContainerItem(): Item | undefined;
  setContainerItem(value?: Item): void;

  hasSizeLimit(): boolean;
  clearSizeLimit(): void;
  getSizeLimit(): SizeLimit | undefined;
  setSizeLimit(value?: SizeLimit): void;

  hasVolumeLimit(): boolean;
  clearVolumeLimit(): void;
  getVolumeLimit(): VolumeLimit | undefined;
  setVolumeLimit(value?: VolumeLimit): void;

  hasWeightLimit(): boolean;
  clearWeightLimit(): void;
  getWeightLimit(): WeightLimit | undefined;
  setWeightLimit(value?: WeightLimit): void;

  hasNumberLimit(): boolean;
  clearNumberLimit(): void;
  getNumberLimit(): NumberLimit | undefined;
  setNumberLimit(value?: NumberLimit): void;

  hasItemTypeValidation(): boolean;
  clearItemTypeValidation(): void;
  getItemTypeValidation(): ItemTypeConstraint | undefined;
  setItemTypeValidation(value?: ItemTypeConstraint): void;

  clearItemsList(): void;
  getItemsList(): Array<Item>;
  setItemsList(value: Array<Item>): void;
  addItems(value?: Item, index?: number): Item;

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
    id: number,
    containerItem?: Item.AsObject,
    sizeLimit?: SizeLimit.AsObject,
    volumeLimit?: VolumeLimit.AsObject,
    weightLimit?: WeightLimit.AsObject,
    numberLimit?: NumberLimit.AsObject,
    itemTypeValidation?: ItemTypeConstraint.AsObject,
    itemsList: Array<Item.AsObject>,
  }
}

export class SizeLimit extends jspb.Message {
  getMaxX(): number;
  setMaxX(value: number): void;

  getMaxY(): number;
  setMaxY(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SizeLimit.AsObject;
  static toObject(includeInstance: boolean, msg: SizeLimit): SizeLimit.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SizeLimit, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SizeLimit;
  static deserializeBinaryFromReader(message: SizeLimit, reader: jspb.BinaryReader): SizeLimit;
}

export namespace SizeLimit {
  export type AsObject = {
    maxX: number,
    maxY: number,
  }
}

export class VolumeLimit extends jspb.Message {
  getMaxVolume(): number;
  setMaxVolume(value: number): void;

  getCurrentVolume(): number;
  setCurrentVolume(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VolumeLimit.AsObject;
  static toObject(includeInstance: boolean, msg: VolumeLimit): VolumeLimit.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VolumeLimit, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VolumeLimit;
  static deserializeBinaryFromReader(message: VolumeLimit, reader: jspb.BinaryReader): VolumeLimit;
}

export namespace VolumeLimit {
  export type AsObject = {
    maxVolume: number,
    currentVolume: number,
  }
}

export class WeightLimit extends jspb.Message {
  getMaxWeight(): number;
  setMaxWeight(value: number): void;

  getCurrentWeight(): number;
  setCurrentWeight(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WeightLimit.AsObject;
  static toObject(includeInstance: boolean, msg: WeightLimit): WeightLimit.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WeightLimit, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WeightLimit;
  static deserializeBinaryFromReader(message: WeightLimit, reader: jspb.BinaryReader): WeightLimit;
}

export namespace WeightLimit {
  export type AsObject = {
    maxWeight: number,
    currentWeight: number,
  }
}

export class NumberLimit extends jspb.Message {
  getMaxNumber(): number;
  setMaxNumber(value: number): void;

  getCurrentNumber(): number;
  setCurrentNumber(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NumberLimit.AsObject;
  static toObject(includeInstance: boolean, msg: NumberLimit): NumberLimit.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NumberLimit, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NumberLimit;
  static deserializeBinaryFromReader(message: NumberLimit, reader: jspb.BinaryReader): NumberLimit;
}

export namespace NumberLimit {
  export type AsObject = {
    maxNumber: number,
    currentNumber: number,
  }
}

export class ItemTypeConstraint extends jspb.Message {
  clearValidItemTypesList(): void;
  getValidItemTypesList(): Array<ItemType>;
  setValidItemTypesList(value: Array<ItemType>): void;
  addValidItemTypes(value?: ItemType, index?: number): ItemType;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ItemTypeConstraint.AsObject;
  static toObject(includeInstance: boolean, msg: ItemTypeConstraint): ItemTypeConstraint.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ItemTypeConstraint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ItemTypeConstraint;
  static deserializeBinaryFromReader(message: ItemTypeConstraint, reader: jspb.BinaryReader): ItemTypeConstraint;
}

export namespace ItemTypeConstraint {
  export type AsObject = {
    validItemTypesList: Array<ItemType.AsObject>,
  }
}

export class Position extends jspb.Message {
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

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Position.AsObject;
  static toObject(includeInstance: boolean, msg: Position): Position.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Position, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Position;
  static deserializeBinaryFromReader(message: Position, reader: jspb.BinaryReader): Position;
}

export namespace Position {
  export type AsObject = {
    x: number,
    y: number,
    z: number,
    rx: number,
    ry: number,
    rz: number,
  }
}

