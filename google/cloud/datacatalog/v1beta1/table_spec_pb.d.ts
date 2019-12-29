// package: google.cloud.datacatalog.v1beta1
// file: google/cloud/datacatalog/v1beta1/table_spec.proto

import * as jspb from "google-protobuf";
import * as google_api_field_behavior_pb from "../../../../google/api/field_behavior_pb";
import * as google_api_resource_pb from "../../../../google/api/resource_pb";

export class BigQueryTableSpec extends jspb.Message {
  getTableSourceType(): TableSourceTypeMap[keyof TableSourceTypeMap];
  setTableSourceType(value: TableSourceTypeMap[keyof TableSourceTypeMap]): void;

  hasViewSpec(): boolean;
  clearViewSpec(): void;
  getViewSpec(): ViewSpec | undefined;
  setViewSpec(value?: ViewSpec): void;

  hasTableSpec(): boolean;
  clearTableSpec(): void;
  getTableSpec(): TableSpec | undefined;
  setTableSpec(value?: TableSpec): void;

  getTypeSpecCase(): BigQueryTableSpec.TypeSpecCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BigQueryTableSpec.AsObject;
  static toObject(includeInstance: boolean, msg: BigQueryTableSpec): BigQueryTableSpec.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BigQueryTableSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BigQueryTableSpec;
  static deserializeBinaryFromReader(message: BigQueryTableSpec, reader: jspb.BinaryReader): BigQueryTableSpec;
}

export namespace BigQueryTableSpec {
  export type AsObject = {
    tableSourceType: TableSourceTypeMap[keyof TableSourceTypeMap],
    viewSpec?: ViewSpec.AsObject,
    tableSpec?: TableSpec.AsObject,
  }

  export enum TypeSpecCase {
    TYPE_SPEC_NOT_SET = 0,
    VIEW_SPEC = 2,
    TABLE_SPEC = 3,
  }
}

export class ViewSpec extends jspb.Message {
  getViewQuery(): string;
  setViewQuery(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ViewSpec.AsObject;
  static toObject(includeInstance: boolean, msg: ViewSpec): ViewSpec.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ViewSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ViewSpec;
  static deserializeBinaryFromReader(message: ViewSpec, reader: jspb.BinaryReader): ViewSpec;
}

export namespace ViewSpec {
  export type AsObject = {
    viewQuery: string,
  }
}

export class TableSpec extends jspb.Message {
  getGroupedEntry(): string;
  setGroupedEntry(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TableSpec.AsObject;
  static toObject(includeInstance: boolean, msg: TableSpec): TableSpec.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TableSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TableSpec;
  static deserializeBinaryFromReader(message: TableSpec, reader: jspb.BinaryReader): TableSpec;
}

export namespace TableSpec {
  export type AsObject = {
    groupedEntry: string,
  }
}

export class BigQueryDateShardedSpec extends jspb.Message {
  getDataset(): string;
  setDataset(value: string): void;

  getTablePrefix(): string;
  setTablePrefix(value: string): void;

  getShardCount(): number;
  setShardCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BigQueryDateShardedSpec.AsObject;
  static toObject(includeInstance: boolean, msg: BigQueryDateShardedSpec): BigQueryDateShardedSpec.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BigQueryDateShardedSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BigQueryDateShardedSpec;
  static deserializeBinaryFromReader(message: BigQueryDateShardedSpec, reader: jspb.BinaryReader): BigQueryDateShardedSpec;
}

export namespace BigQueryDateShardedSpec {
  export type AsObject = {
    dataset: string,
    tablePrefix: string,
    shardCount: number,
  }
}

export interface TableSourceTypeMap {
  TABLE_SOURCE_TYPE_UNSPECIFIED: 0;
  BIGQUERY_VIEW: 2;
  BIGQUERY_TABLE: 5;
}

export const TableSourceType: TableSourceTypeMap;

