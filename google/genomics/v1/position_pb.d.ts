// package: google.genomics.v1
// file: google/genomics/v1/position.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";

export class Position extends jspb.Message {
  getReferenceName(): string;
  setReferenceName(value: string): void;

  getPosition(): number;
  setPosition(value: number): void;

  getReverseStrand(): boolean;
  setReverseStrand(value: boolean): void;

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
    referenceName: string,
    position: number,
    reverseStrand: boolean,
  }
}

