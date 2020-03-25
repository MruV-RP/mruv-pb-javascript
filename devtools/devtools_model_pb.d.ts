// package: mruv.devtools
// file: devtools/devtools_model.proto

import * as jspb from "google-protobuf";

export class Position extends jspb.Message {
  getX(): number;
  setX(value: number): void;

  getY(): number;
  setY(value: number): void;

  getZ(): number;
  setZ(value: number): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

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
    name: string,
    description: string,
  }
}

export class Outfit extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getCategory(): string;
  setCategory(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Outfit.AsObject;
  static toObject(includeInstance: boolean, msg: Outfit): Outfit.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Outfit, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Outfit;
  static deserializeBinaryFromReader(message: Outfit, reader: jspb.BinaryReader): Outfit;
}

export namespace Outfit {
  export type AsObject = {
    name: string,
    category: string,
  }
}

export class Animation extends jspb.Message {
  getDict(): string;
  setDict(value: string): void;

  getName(): string;
  setName(value: string): void;

  getReadableCategory(): string;
  setReadableCategory(value: string): void;

  getCategory(): string;
  setCategory(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Animation.AsObject;
  static toObject(includeInstance: boolean, msg: Animation): Animation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Animation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Animation;
  static deserializeBinaryFromReader(message: Animation, reader: jspb.BinaryReader): Animation;
}

export namespace Animation {
  export type AsObject = {
    dict: string,
    name: string,
    readableCategory: string,
    category: string,
  }
}

export class Player extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getName(): string;
  setName(value: string): void;

  getHash(): string;
  setHash(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Player.AsObject;
  static toObject(includeInstance: boolean, msg: Player): Player.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Player, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Player;
  static deserializeBinaryFromReader(message: Player, reader: jspb.BinaryReader): Player;
}

export namespace Player {
  export type AsObject = {
    id: number,
    name: string,
    hash: string,
  }
}

