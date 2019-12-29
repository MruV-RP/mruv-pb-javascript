// package: google.spanner.v1
// file: google/spanner/v1/keys.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";

export class KeyRange extends jspb.Message {
  hasStartClosed(): boolean;
  clearStartClosed(): void;
  getStartClosed(): google_protobuf_struct_pb.ListValue | undefined;
  setStartClosed(value?: google_protobuf_struct_pb.ListValue): void;

  hasStartOpen(): boolean;
  clearStartOpen(): void;
  getStartOpen(): google_protobuf_struct_pb.ListValue | undefined;
  setStartOpen(value?: google_protobuf_struct_pb.ListValue): void;

  hasEndClosed(): boolean;
  clearEndClosed(): void;
  getEndClosed(): google_protobuf_struct_pb.ListValue | undefined;
  setEndClosed(value?: google_protobuf_struct_pb.ListValue): void;

  hasEndOpen(): boolean;
  clearEndOpen(): void;
  getEndOpen(): google_protobuf_struct_pb.ListValue | undefined;
  setEndOpen(value?: google_protobuf_struct_pb.ListValue): void;

  getStartKeyTypeCase(): KeyRange.StartKeyTypeCase;
  getEndKeyTypeCase(): KeyRange.EndKeyTypeCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KeyRange.AsObject;
  static toObject(includeInstance: boolean, msg: KeyRange): KeyRange.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: KeyRange, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KeyRange;
  static deserializeBinaryFromReader(message: KeyRange, reader: jspb.BinaryReader): KeyRange;
}

export namespace KeyRange {
  export type AsObject = {
    startClosed?: google_protobuf_struct_pb.ListValue.AsObject,
    startOpen?: google_protobuf_struct_pb.ListValue.AsObject,
    endClosed?: google_protobuf_struct_pb.ListValue.AsObject,
    endOpen?: google_protobuf_struct_pb.ListValue.AsObject,
  }

  export enum StartKeyTypeCase {
    START_KEY_TYPE_NOT_SET = 0,
    START_CLOSED = 1,
    START_OPEN = 2,
  }

  export enum EndKeyTypeCase {
    END_KEY_TYPE_NOT_SET = 0,
    END_CLOSED = 3,
    END_OPEN = 4,
  }
}

export class KeySet extends jspb.Message {
  clearKeysList(): void;
  getKeysList(): Array<google_protobuf_struct_pb.ListValue>;
  setKeysList(value: Array<google_protobuf_struct_pb.ListValue>): void;
  addKeys(value?: google_protobuf_struct_pb.ListValue, index?: number): google_protobuf_struct_pb.ListValue;

  clearRangesList(): void;
  getRangesList(): Array<KeyRange>;
  setRangesList(value: Array<KeyRange>): void;
  addRanges(value?: KeyRange, index?: number): KeyRange;

  getAll(): boolean;
  setAll(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KeySet.AsObject;
  static toObject(includeInstance: boolean, msg: KeySet): KeySet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: KeySet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KeySet;
  static deserializeBinaryFromReader(message: KeySet, reader: jspb.BinaryReader): KeySet;
}

export namespace KeySet {
  export type AsObject = {
    keysList: Array<google_protobuf_struct_pb.ListValue.AsObject>,
    rangesList: Array<KeyRange.AsObject>,
    all: boolean,
  }
}

