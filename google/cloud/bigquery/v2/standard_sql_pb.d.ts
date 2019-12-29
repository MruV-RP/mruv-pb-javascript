// package: google.cloud.bigquery.v2
// file: google/cloud/bigquery/v2/standard_sql.proto

import * as jspb from "google-protobuf";
import * as google_api_field_behavior_pb from "../../../../google/api/field_behavior_pb";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";

export class StandardSqlDataType extends jspb.Message {
  getTypeKind(): StandardSqlDataType.TypeKindMap[keyof StandardSqlDataType.TypeKindMap];
  setTypeKind(value: StandardSqlDataType.TypeKindMap[keyof StandardSqlDataType.TypeKindMap]): void;

  hasArrayElementType(): boolean;
  clearArrayElementType(): void;
  getArrayElementType(): StandardSqlDataType | undefined;
  setArrayElementType(value?: StandardSqlDataType): void;

  hasStructType(): boolean;
  clearStructType(): void;
  getStructType(): StandardSqlStructType | undefined;
  setStructType(value?: StandardSqlStructType): void;

  getSubTypeCase(): StandardSqlDataType.SubTypeCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StandardSqlDataType.AsObject;
  static toObject(includeInstance: boolean, msg: StandardSqlDataType): StandardSqlDataType.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StandardSqlDataType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StandardSqlDataType;
  static deserializeBinaryFromReader(message: StandardSqlDataType, reader: jspb.BinaryReader): StandardSqlDataType;
}

export namespace StandardSqlDataType {
  export type AsObject = {
    typeKind: StandardSqlDataType.TypeKindMap[keyof StandardSqlDataType.TypeKindMap],
    arrayElementType?: StandardSqlDataType.AsObject,
    structType?: StandardSqlStructType.AsObject,
  }

  export interface TypeKindMap {
    TYPE_KIND_UNSPECIFIED: 0;
    INT64: 2;
    BOOL: 5;
    FLOAT64: 7;
    STRING: 8;
    BYTES: 9;
    TIMESTAMP: 19;
    DATE: 10;
    TIME: 20;
    DATETIME: 21;
    GEOGRAPHY: 22;
    NUMERIC: 23;
    ARRAY: 16;
    STRUCT: 17;
  }

  export const TypeKind: TypeKindMap;

  export enum SubTypeCase {
    SUB_TYPE_NOT_SET = 0,
    ARRAY_ELEMENT_TYPE = 2,
    STRUCT_TYPE = 3,
  }
}

export class StandardSqlField extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasType(): boolean;
  clearType(): void;
  getType(): StandardSqlDataType | undefined;
  setType(value?: StandardSqlDataType): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StandardSqlField.AsObject;
  static toObject(includeInstance: boolean, msg: StandardSqlField): StandardSqlField.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StandardSqlField, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StandardSqlField;
  static deserializeBinaryFromReader(message: StandardSqlField, reader: jspb.BinaryReader): StandardSqlField;
}

export namespace StandardSqlField {
  export type AsObject = {
    name: string,
    type?: StandardSqlDataType.AsObject,
  }
}

export class StandardSqlStructType extends jspb.Message {
  clearFieldsList(): void;
  getFieldsList(): Array<StandardSqlField>;
  setFieldsList(value: Array<StandardSqlField>): void;
  addFields(value?: StandardSqlField, index?: number): StandardSqlField;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StandardSqlStructType.AsObject;
  static toObject(includeInstance: boolean, msg: StandardSqlStructType): StandardSqlStructType.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StandardSqlStructType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StandardSqlStructType;
  static deserializeBinaryFromReader(message: StandardSqlStructType, reader: jspb.BinaryReader): StandardSqlStructType;
}

export namespace StandardSqlStructType {
  export type AsObject = {
    fieldsList: Array<StandardSqlField.AsObject>,
  }
}

