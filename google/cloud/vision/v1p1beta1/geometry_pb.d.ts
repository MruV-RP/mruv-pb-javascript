// package: google.cloud.vision.v1p1beta1
// file: google/cloud/vision/v1p1beta1/geometry.proto

import * as jspb from "google-protobuf";

export class Vertex extends jspb.Message {
  getX(): number;
  setX(value: number): void;

  getY(): number;
  setY(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Vertex.AsObject;
  static toObject(includeInstance: boolean, msg: Vertex): Vertex.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Vertex, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Vertex;
  static deserializeBinaryFromReader(message: Vertex, reader: jspb.BinaryReader): Vertex;
}

export namespace Vertex {
  export type AsObject = {
    x: number,
    y: number,
  }
}

export class BoundingPoly extends jspb.Message {
  clearVerticesList(): void;
  getVerticesList(): Array<Vertex>;
  setVerticesList(value: Array<Vertex>): void;
  addVertices(value?: Vertex, index?: number): Vertex;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BoundingPoly.AsObject;
  static toObject(includeInstance: boolean, msg: BoundingPoly): BoundingPoly.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BoundingPoly, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BoundingPoly;
  static deserializeBinaryFromReader(message: BoundingPoly, reader: jspb.BinaryReader): BoundingPoly;
}

export namespace BoundingPoly {
  export type AsObject = {
    verticesList: Array<Vertex.AsObject>,
  }
}

export class Position extends jspb.Message {
  getX(): number;
  setX(value: number): void;

  getY(): number;
  setY(value: number): void;

  getZ(): number;
  setZ(value: number): void;

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
  }
}

