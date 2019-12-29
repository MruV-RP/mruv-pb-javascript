// package: google.firestore.admin.v1beta1
// file: google/firestore/admin/v1beta1/index.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";

export class IndexField extends jspb.Message {
  getFieldPath(): string;
  setFieldPath(value: string): void;

  getMode(): IndexField.ModeMap[keyof IndexField.ModeMap];
  setMode(value: IndexField.ModeMap[keyof IndexField.ModeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IndexField.AsObject;
  static toObject(includeInstance: boolean, msg: IndexField): IndexField.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IndexField, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IndexField;
  static deserializeBinaryFromReader(message: IndexField, reader: jspb.BinaryReader): IndexField;
}

export namespace IndexField {
  export type AsObject = {
    fieldPath: string,
    mode: IndexField.ModeMap[keyof IndexField.ModeMap],
  }

  export interface ModeMap {
    MODE_UNSPECIFIED: 0;
    ASCENDING: 2;
    DESCENDING: 3;
    ARRAY_CONTAINS: 4;
  }

  export const Mode: ModeMap;
}

export class Index extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getCollectionId(): string;
  setCollectionId(value: string): void;

  clearFieldsList(): void;
  getFieldsList(): Array<IndexField>;
  setFieldsList(value: Array<IndexField>): void;
  addFields(value?: IndexField, index?: number): IndexField;

  getState(): Index.StateMap[keyof Index.StateMap];
  setState(value: Index.StateMap[keyof Index.StateMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Index.AsObject;
  static toObject(includeInstance: boolean, msg: Index): Index.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Index, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Index;
  static deserializeBinaryFromReader(message: Index, reader: jspb.BinaryReader): Index;
}

export namespace Index {
  export type AsObject = {
    name: string,
    collectionId: string,
    fieldsList: Array<IndexField.AsObject>,
    state: Index.StateMap[keyof Index.StateMap],
  }

  export interface StateMap {
    STATE_UNSPECIFIED: 0;
    CREATING: 3;
    READY: 2;
    ERROR: 5;
  }

  export const State: StateMap;
}

