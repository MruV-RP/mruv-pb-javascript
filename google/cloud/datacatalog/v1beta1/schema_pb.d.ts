// package: google.cloud.datacatalog.v1beta1
// file: google/cloud/datacatalog/v1beta1/schema.proto

import * as jspb from "google-protobuf";
import * as google_api_field_behavior_pb from "../../../../google/api/field_behavior_pb";

export class Schema extends jspb.Message {
  clearColumnsList(): void;
  getColumnsList(): Array<ColumnSchema>;
  setColumnsList(value: Array<ColumnSchema>): void;
  addColumns(value?: ColumnSchema, index?: number): ColumnSchema;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Schema.AsObject;
  static toObject(includeInstance: boolean, msg: Schema): Schema.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Schema, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Schema;
  static deserializeBinaryFromReader(message: Schema, reader: jspb.BinaryReader): Schema;
}

export namespace Schema {
  export type AsObject = {
    columnsList: Array<ColumnSchema.AsObject>,
  }
}

export class ColumnSchema extends jspb.Message {
  getColumn(): string;
  setColumn(value: string): void;

  getType(): string;
  setType(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getMode(): string;
  setMode(value: string): void;

  clearSubcolumnsList(): void;
  getSubcolumnsList(): Array<ColumnSchema>;
  setSubcolumnsList(value: Array<ColumnSchema>): void;
  addSubcolumns(value?: ColumnSchema, index?: number): ColumnSchema;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ColumnSchema.AsObject;
  static toObject(includeInstance: boolean, msg: ColumnSchema): ColumnSchema.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ColumnSchema, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ColumnSchema;
  static deserializeBinaryFromReader(message: ColumnSchema, reader: jspb.BinaryReader): ColumnSchema;
}

export namespace ColumnSchema {
  export type AsObject = {
    column: string,
    type: string,
    description: string,
    mode: string,
    subcolumnsList: Array<ColumnSchema.AsObject>,
  }
}

