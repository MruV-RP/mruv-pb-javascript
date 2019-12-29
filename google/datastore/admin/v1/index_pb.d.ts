// package: google.datastore.admin.v1
// file: google/datastore/admin/v1/index.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";

export class Index extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getIndexId(): string;
  setIndexId(value: string): void;

  getKind(): string;
  setKind(value: string): void;

  getAncestor(): Index.AncestorModeMap[keyof Index.AncestorModeMap];
  setAncestor(value: Index.AncestorModeMap[keyof Index.AncestorModeMap]): void;

  clearPropertiesList(): void;
  getPropertiesList(): Array<Index.IndexedProperty>;
  setPropertiesList(value: Array<Index.IndexedProperty>): void;
  addProperties(value?: Index.IndexedProperty, index?: number): Index.IndexedProperty;

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
    projectId: string,
    indexId: string,
    kind: string,
    ancestor: Index.AncestorModeMap[keyof Index.AncestorModeMap],
    propertiesList: Array<Index.IndexedProperty.AsObject>,
    state: Index.StateMap[keyof Index.StateMap],
  }

  export class IndexedProperty extends jspb.Message {
    getName(): string;
    setName(value: string): void;

    getDirection(): Index.DirectionMap[keyof Index.DirectionMap];
    setDirection(value: Index.DirectionMap[keyof Index.DirectionMap]): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): IndexedProperty.AsObject;
    static toObject(includeInstance: boolean, msg: IndexedProperty): IndexedProperty.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: IndexedProperty, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): IndexedProperty;
    static deserializeBinaryFromReader(message: IndexedProperty, reader: jspb.BinaryReader): IndexedProperty;
  }

  export namespace IndexedProperty {
    export type AsObject = {
      name: string,
      direction: Index.DirectionMap[keyof Index.DirectionMap],
    }
  }

  export interface AncestorModeMap {
    ANCESTOR_MODE_UNSPECIFIED: 0;
    NONE: 1;
    ALL_ANCESTORS: 2;
  }

  export const AncestorMode: AncestorModeMap;

  export interface DirectionMap {
    DIRECTION_UNSPECIFIED: 0;
    ASCENDING: 1;
    DESCENDING: 2;
  }

  export const Direction: DirectionMap;

  export interface StateMap {
    STATE_UNSPECIFIED: 0;
    CREATING: 1;
    READY: 2;
    DELETING: 3;
    ERROR: 4;
  }

  export const State: StateMap;
}

