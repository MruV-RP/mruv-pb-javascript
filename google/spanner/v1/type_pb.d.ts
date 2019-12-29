// package: google.spanner.v1
// file: google/spanner/v1/type.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";

export class Type extends jspb.Message {
  getCode(): TypeCodeMap[keyof TypeCodeMap];
  setCode(value: TypeCodeMap[keyof TypeCodeMap]): void;

  hasArrayElementType(): boolean;
  clearArrayElementType(): void;
  getArrayElementType(): Type | undefined;
  setArrayElementType(value?: Type): void;

  hasStructType(): boolean;
  clearStructType(): void;
  getStructType(): StructType | undefined;
  setStructType(value?: StructType): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Type.AsObject;
  static toObject(includeInstance: boolean, msg: Type): Type.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Type, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Type;
  static deserializeBinaryFromReader(message: Type, reader: jspb.BinaryReader): Type;
}

export namespace Type {
  export type AsObject = {
    code: TypeCodeMap[keyof TypeCodeMap],
    arrayElementType?: Type.AsObject,
    structType?: StructType.AsObject,
  }
}

export class StructType extends jspb.Message {
  clearFieldsList(): void;
  getFieldsList(): Array<StructType.Field>;
  setFieldsList(value: Array<StructType.Field>): void;
  addFields(value?: StructType.Field, index?: number): StructType.Field;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StructType.AsObject;
  static toObject(includeInstance: boolean, msg: StructType): StructType.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StructType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StructType;
  static deserializeBinaryFromReader(message: StructType, reader: jspb.BinaryReader): StructType;
}

export namespace StructType {
  export type AsObject = {
    fieldsList: Array<StructType.Field.AsObject>,
  }

  export class Field extends jspb.Message {
    getName(): string;
    setName(value: string): void;

    hasType(): boolean;
    clearType(): void;
    getType(): Type | undefined;
    setType(value?: Type): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Field.AsObject;
    static toObject(includeInstance: boolean, msg: Field): Field.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Field, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Field;
    static deserializeBinaryFromReader(message: Field, reader: jspb.BinaryReader): Field;
  }

  export namespace Field {
    export type AsObject = {
      name: string,
      type?: Type.AsObject,
    }
  }
}

export interface TypeCodeMap {
  TYPE_CODE_UNSPECIFIED: 0;
  BOOL: 1;
  INT64: 2;
  FLOAT64: 3;
  TIMESTAMP: 4;
  DATE: 5;
  STRING: 6;
  BYTES: 7;
  ARRAY: 8;
  STRUCT: 9;
}

export const TypeCode: TypeCodeMap;

