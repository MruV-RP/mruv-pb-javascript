// package: google.firestore.admin.v1beta2
// file: google/firestore/admin/v1beta2/index.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";

export class Index extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getQueryScope(): Index.QueryScopeMap[keyof Index.QueryScopeMap];
  setQueryScope(value: Index.QueryScopeMap[keyof Index.QueryScopeMap]): void;

  clearFieldsList(): void;
  getFieldsList(): Array<Index.IndexField>;
  setFieldsList(value: Array<Index.IndexField>): void;
  addFields(value?: Index.IndexField, index?: number): Index.IndexField;

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
    queryScope: Index.QueryScopeMap[keyof Index.QueryScopeMap],
    fieldsList: Array<Index.IndexField.AsObject>,
    state: Index.StateMap[keyof Index.StateMap],
  }

  export class IndexField extends jspb.Message {
    getFieldPath(): string;
    setFieldPath(value: string): void;

    hasOrder(): boolean;
    clearOrder(): void;
    getOrder(): Index.IndexField.OrderMap[keyof Index.IndexField.OrderMap];
    setOrder(value: Index.IndexField.OrderMap[keyof Index.IndexField.OrderMap]): void;

    hasArrayConfig(): boolean;
    clearArrayConfig(): void;
    getArrayConfig(): Index.IndexField.ArrayConfigMap[keyof Index.IndexField.ArrayConfigMap];
    setArrayConfig(value: Index.IndexField.ArrayConfigMap[keyof Index.IndexField.ArrayConfigMap]): void;

    getValueModeCase(): IndexField.ValueModeCase;
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
      order: Index.IndexField.OrderMap[keyof Index.IndexField.OrderMap],
      arrayConfig: Index.IndexField.ArrayConfigMap[keyof Index.IndexField.ArrayConfigMap],
    }

    export interface OrderMap {
      ORDER_UNSPECIFIED: 0;
      ASCENDING: 1;
      DESCENDING: 2;
    }

    export const Order: OrderMap;

    export interface ArrayConfigMap {
      ARRAY_CONFIG_UNSPECIFIED: 0;
      CONTAINS: 1;
    }

    export const ArrayConfig: ArrayConfigMap;

    export enum ValueModeCase {
      VALUE_MODE_NOT_SET = 0,
      ORDER = 2,
      ARRAY_CONFIG = 3,
    }
  }

  export interface QueryScopeMap {
    QUERY_SCOPE_UNSPECIFIED: 0;
    COLLECTION: 1;
    COLLECTION_GROUP: 2;
  }

  export const QueryScope: QueryScopeMap;

  export interface StateMap {
    STATE_UNSPECIFIED: 0;
    CREATING: 1;
    READY: 2;
    NEEDS_REPAIR: 3;
  }

  export const State: StateMap;
}

