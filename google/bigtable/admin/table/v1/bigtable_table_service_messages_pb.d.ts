// package: google.bigtable.admin.table.v1
// file: google/bigtable/admin/table/v1/bigtable_table_service_messages.proto

import * as jspb from "google-protobuf";
import * as google_bigtable_admin_table_v1_bigtable_table_data_pb from "../../../../../google/bigtable/admin/table/v1/bigtable_table_data_pb";

export class CreateTableRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getTableId(): string;
  setTableId(value: string): void;

  hasTable(): boolean;
  clearTable(): void;
  getTable(): google_bigtable_admin_table_v1_bigtable_table_data_pb.Table | undefined;
  setTable(value?: google_bigtable_admin_table_v1_bigtable_table_data_pb.Table): void;

  clearInitialSplitKeysList(): void;
  getInitialSplitKeysList(): Array<string>;
  setInitialSplitKeysList(value: Array<string>): void;
  addInitialSplitKeys(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTableRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTableRequest): CreateTableRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateTableRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTableRequest;
  static deserializeBinaryFromReader(message: CreateTableRequest, reader: jspb.BinaryReader): CreateTableRequest;
}

export namespace CreateTableRequest {
  export type AsObject = {
    name: string,
    tableId: string,
    table?: google_bigtable_admin_table_v1_bigtable_table_data_pb.Table.AsObject,
    initialSplitKeysList: Array<string>,
  }
}

export class ListTablesRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTablesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListTablesRequest): ListTablesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListTablesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTablesRequest;
  static deserializeBinaryFromReader(message: ListTablesRequest, reader: jspb.BinaryReader): ListTablesRequest;
}

export namespace ListTablesRequest {
  export type AsObject = {
    name: string,
  }
}

export class ListTablesResponse extends jspb.Message {
  clearTablesList(): void;
  getTablesList(): Array<google_bigtable_admin_table_v1_bigtable_table_data_pb.Table>;
  setTablesList(value: Array<google_bigtable_admin_table_v1_bigtable_table_data_pb.Table>): void;
  addTables(value?: google_bigtable_admin_table_v1_bigtable_table_data_pb.Table, index?: number): google_bigtable_admin_table_v1_bigtable_table_data_pb.Table;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTablesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListTablesResponse): ListTablesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListTablesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTablesResponse;
  static deserializeBinaryFromReader(message: ListTablesResponse, reader: jspb.BinaryReader): ListTablesResponse;
}

export namespace ListTablesResponse {
  export type AsObject = {
    tablesList: Array<google_bigtable_admin_table_v1_bigtable_table_data_pb.Table.AsObject>,
  }
}

export class GetTableRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTableRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTableRequest): GetTableRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTableRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTableRequest;
  static deserializeBinaryFromReader(message: GetTableRequest, reader: jspb.BinaryReader): GetTableRequest;
}

export namespace GetTableRequest {
  export type AsObject = {
    name: string,
  }
}

export class DeleteTableRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteTableRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteTableRequest): DeleteTableRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteTableRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteTableRequest;
  static deserializeBinaryFromReader(message: DeleteTableRequest, reader: jspb.BinaryReader): DeleteTableRequest;
}

export namespace DeleteTableRequest {
  export type AsObject = {
    name: string,
  }
}

export class RenameTableRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getNewId(): string;
  setNewId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RenameTableRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RenameTableRequest): RenameTableRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RenameTableRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RenameTableRequest;
  static deserializeBinaryFromReader(message: RenameTableRequest, reader: jspb.BinaryReader): RenameTableRequest;
}

export namespace RenameTableRequest {
  export type AsObject = {
    name: string,
    newId: string,
  }
}

export class CreateColumnFamilyRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getColumnFamilyId(): string;
  setColumnFamilyId(value: string): void;

  hasColumnFamily(): boolean;
  clearColumnFamily(): void;
  getColumnFamily(): google_bigtable_admin_table_v1_bigtable_table_data_pb.ColumnFamily | undefined;
  setColumnFamily(value?: google_bigtable_admin_table_v1_bigtable_table_data_pb.ColumnFamily): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateColumnFamilyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateColumnFamilyRequest): CreateColumnFamilyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateColumnFamilyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateColumnFamilyRequest;
  static deserializeBinaryFromReader(message: CreateColumnFamilyRequest, reader: jspb.BinaryReader): CreateColumnFamilyRequest;
}

export namespace CreateColumnFamilyRequest {
  export type AsObject = {
    name: string,
    columnFamilyId: string,
    columnFamily?: google_bigtable_admin_table_v1_bigtable_table_data_pb.ColumnFamily.AsObject,
  }
}

export class DeleteColumnFamilyRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteColumnFamilyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteColumnFamilyRequest): DeleteColumnFamilyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteColumnFamilyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteColumnFamilyRequest;
  static deserializeBinaryFromReader(message: DeleteColumnFamilyRequest, reader: jspb.BinaryReader): DeleteColumnFamilyRequest;
}

export namespace DeleteColumnFamilyRequest {
  export type AsObject = {
    name: string,
  }
}

export class BulkDeleteRowsRequest extends jspb.Message {
  getTableName(): string;
  setTableName(value: string): void;

  hasRowKeyPrefix(): boolean;
  clearRowKeyPrefix(): void;
  getRowKeyPrefix(): Uint8Array | string;
  getRowKeyPrefix_asU8(): Uint8Array;
  getRowKeyPrefix_asB64(): string;
  setRowKeyPrefix(value: Uint8Array | string): void;

  hasDeleteAllDataFromTable(): boolean;
  clearDeleteAllDataFromTable(): void;
  getDeleteAllDataFromTable(): boolean;
  setDeleteAllDataFromTable(value: boolean): void;

  getTargetCase(): BulkDeleteRowsRequest.TargetCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BulkDeleteRowsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BulkDeleteRowsRequest): BulkDeleteRowsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BulkDeleteRowsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BulkDeleteRowsRequest;
  static deserializeBinaryFromReader(message: BulkDeleteRowsRequest, reader: jspb.BinaryReader): BulkDeleteRowsRequest;
}

export namespace BulkDeleteRowsRequest {
  export type AsObject = {
    tableName: string,
    rowKeyPrefix: Uint8Array | string,
    deleteAllDataFromTable: boolean,
  }

  export enum TargetCase {
    TARGET_NOT_SET = 0,
    ROW_KEY_PREFIX = 2,
    DELETE_ALL_DATA_FROM_TABLE = 3,
  }
}

