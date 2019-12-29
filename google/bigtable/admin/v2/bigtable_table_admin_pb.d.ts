// package: google.bigtable.admin.v2
// file: google/bigtable/admin/v2/bigtable_table_admin.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";
import * as google_bigtable_admin_v2_table_pb from "../../../../google/bigtable/admin/v2/table_pb";
import * as google_iam_v1_iam_policy_pb from "../../../../google/iam/v1/iam_policy_pb";
import * as google_iam_v1_policy_pb from "../../../../google/iam/v1/policy_pb";
import * as google_longrunning_operations_pb from "../../../../google/longrunning/operations_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class CreateTableRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getTableId(): string;
  setTableId(value: string): void;

  hasTable(): boolean;
  clearTable(): void;
  getTable(): google_bigtable_admin_v2_table_pb.Table | undefined;
  setTable(value?: google_bigtable_admin_v2_table_pb.Table): void;

  clearInitialSplitsList(): void;
  getInitialSplitsList(): Array<CreateTableRequest.Split>;
  setInitialSplitsList(value: Array<CreateTableRequest.Split>): void;
  addInitialSplits(value?: CreateTableRequest.Split, index?: number): CreateTableRequest.Split;

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
    parent: string,
    tableId: string,
    table?: google_bigtable_admin_v2_table_pb.Table.AsObject,
    initialSplitsList: Array<CreateTableRequest.Split.AsObject>,
  }

  export class Split extends jspb.Message {
    getKey(): Uint8Array | string;
    getKey_asU8(): Uint8Array;
    getKey_asB64(): string;
    setKey(value: Uint8Array | string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Split.AsObject;
    static toObject(includeInstance: boolean, msg: Split): Split.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Split, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Split;
    static deserializeBinaryFromReader(message: Split, reader: jspb.BinaryReader): Split;
  }

  export namespace Split {
    export type AsObject = {
      key: Uint8Array | string,
    }
  }
}

export class CreateTableFromSnapshotRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getTableId(): string;
  setTableId(value: string): void;

  getSourceSnapshot(): string;
  setSourceSnapshot(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTableFromSnapshotRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTableFromSnapshotRequest): CreateTableFromSnapshotRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateTableFromSnapshotRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTableFromSnapshotRequest;
  static deserializeBinaryFromReader(message: CreateTableFromSnapshotRequest, reader: jspb.BinaryReader): CreateTableFromSnapshotRequest;
}

export namespace CreateTableFromSnapshotRequest {
  export type AsObject = {
    parent: string,
    tableId: string,
    sourceSnapshot: string,
  }
}

export class DropRowRangeRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

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

  getTargetCase(): DropRowRangeRequest.TargetCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DropRowRangeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DropRowRangeRequest): DropRowRangeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DropRowRangeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DropRowRangeRequest;
  static deserializeBinaryFromReader(message: DropRowRangeRequest, reader: jspb.BinaryReader): DropRowRangeRequest;
}

export namespace DropRowRangeRequest {
  export type AsObject = {
    name: string,
    rowKeyPrefix: Uint8Array | string,
    deleteAllDataFromTable: boolean,
  }

  export enum TargetCase {
    TARGET_NOT_SET = 0,
    ROW_KEY_PREFIX = 2,
    DELETE_ALL_DATA_FROM_TABLE = 3,
  }
}

export class ListTablesRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getView(): google_bigtable_admin_v2_table_pb.Table.ViewMap[keyof google_bigtable_admin_v2_table_pb.Table.ViewMap];
  setView(value: google_bigtable_admin_v2_table_pb.Table.ViewMap[keyof google_bigtable_admin_v2_table_pb.Table.ViewMap]): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

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
    parent: string,
    view: google_bigtable_admin_v2_table_pb.Table.ViewMap[keyof google_bigtable_admin_v2_table_pb.Table.ViewMap],
    pageSize: number,
    pageToken: string,
  }
}

export class ListTablesResponse extends jspb.Message {
  clearTablesList(): void;
  getTablesList(): Array<google_bigtable_admin_v2_table_pb.Table>;
  setTablesList(value: Array<google_bigtable_admin_v2_table_pb.Table>): void;
  addTables(value?: google_bigtable_admin_v2_table_pb.Table, index?: number): google_bigtable_admin_v2_table_pb.Table;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

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
    tablesList: Array<google_bigtable_admin_v2_table_pb.Table.AsObject>,
    nextPageToken: string,
  }
}

export class GetTableRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getView(): google_bigtable_admin_v2_table_pb.Table.ViewMap[keyof google_bigtable_admin_v2_table_pb.Table.ViewMap];
  setView(value: google_bigtable_admin_v2_table_pb.Table.ViewMap[keyof google_bigtable_admin_v2_table_pb.Table.ViewMap]): void;

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
    view: google_bigtable_admin_v2_table_pb.Table.ViewMap[keyof google_bigtable_admin_v2_table_pb.Table.ViewMap],
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

export class ModifyColumnFamiliesRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  clearModificationsList(): void;
  getModificationsList(): Array<ModifyColumnFamiliesRequest.Modification>;
  setModificationsList(value: Array<ModifyColumnFamiliesRequest.Modification>): void;
  addModifications(value?: ModifyColumnFamiliesRequest.Modification, index?: number): ModifyColumnFamiliesRequest.Modification;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModifyColumnFamiliesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ModifyColumnFamiliesRequest): ModifyColumnFamiliesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ModifyColumnFamiliesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModifyColumnFamiliesRequest;
  static deserializeBinaryFromReader(message: ModifyColumnFamiliesRequest, reader: jspb.BinaryReader): ModifyColumnFamiliesRequest;
}

export namespace ModifyColumnFamiliesRequest {
  export type AsObject = {
    name: string,
    modificationsList: Array<ModifyColumnFamiliesRequest.Modification.AsObject>,
  }

  export class Modification extends jspb.Message {
    getId(): string;
    setId(value: string): void;

    hasCreate(): boolean;
    clearCreate(): void;
    getCreate(): google_bigtable_admin_v2_table_pb.ColumnFamily | undefined;
    setCreate(value?: google_bigtable_admin_v2_table_pb.ColumnFamily): void;

    hasUpdate(): boolean;
    clearUpdate(): void;
    getUpdate(): google_bigtable_admin_v2_table_pb.ColumnFamily | undefined;
    setUpdate(value?: google_bigtable_admin_v2_table_pb.ColumnFamily): void;

    hasDrop(): boolean;
    clearDrop(): void;
    getDrop(): boolean;
    setDrop(value: boolean): void;

    getModCase(): Modification.ModCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Modification.AsObject;
    static toObject(includeInstance: boolean, msg: Modification): Modification.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Modification, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Modification;
    static deserializeBinaryFromReader(message: Modification, reader: jspb.BinaryReader): Modification;
  }

  export namespace Modification {
    export type AsObject = {
      id: string,
      create?: google_bigtable_admin_v2_table_pb.ColumnFamily.AsObject,
      update?: google_bigtable_admin_v2_table_pb.ColumnFamily.AsObject,
      drop: boolean,
    }

    export enum ModCase {
      MOD_NOT_SET = 0,
      CREATE = 2,
      UPDATE = 3,
      DROP = 4,
    }
  }
}

export class GenerateConsistencyTokenRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateConsistencyTokenRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateConsistencyTokenRequest): GenerateConsistencyTokenRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GenerateConsistencyTokenRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateConsistencyTokenRequest;
  static deserializeBinaryFromReader(message: GenerateConsistencyTokenRequest, reader: jspb.BinaryReader): GenerateConsistencyTokenRequest;
}

export namespace GenerateConsistencyTokenRequest {
  export type AsObject = {
    name: string,
  }
}

export class GenerateConsistencyTokenResponse extends jspb.Message {
  getConsistencyToken(): string;
  setConsistencyToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateConsistencyTokenResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateConsistencyTokenResponse): GenerateConsistencyTokenResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GenerateConsistencyTokenResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateConsistencyTokenResponse;
  static deserializeBinaryFromReader(message: GenerateConsistencyTokenResponse, reader: jspb.BinaryReader): GenerateConsistencyTokenResponse;
}

export namespace GenerateConsistencyTokenResponse {
  export type AsObject = {
    consistencyToken: string,
  }
}

export class CheckConsistencyRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getConsistencyToken(): string;
  setConsistencyToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckConsistencyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CheckConsistencyRequest): CheckConsistencyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CheckConsistencyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckConsistencyRequest;
  static deserializeBinaryFromReader(message: CheckConsistencyRequest, reader: jspb.BinaryReader): CheckConsistencyRequest;
}

export namespace CheckConsistencyRequest {
  export type AsObject = {
    name: string,
    consistencyToken: string,
  }
}

export class CheckConsistencyResponse extends jspb.Message {
  getConsistent(): boolean;
  setConsistent(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckConsistencyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CheckConsistencyResponse): CheckConsistencyResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CheckConsistencyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckConsistencyResponse;
  static deserializeBinaryFromReader(message: CheckConsistencyResponse, reader: jspb.BinaryReader): CheckConsistencyResponse;
}

export namespace CheckConsistencyResponse {
  export type AsObject = {
    consistent: boolean,
  }
}

export class SnapshotTableRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getCluster(): string;
  setCluster(value: string): void;

  getSnapshotId(): string;
  setSnapshotId(value: string): void;

  hasTtl(): boolean;
  clearTtl(): void;
  getTtl(): google_protobuf_duration_pb.Duration | undefined;
  setTtl(value?: google_protobuf_duration_pb.Duration): void;

  getDescription(): string;
  setDescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SnapshotTableRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SnapshotTableRequest): SnapshotTableRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SnapshotTableRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SnapshotTableRequest;
  static deserializeBinaryFromReader(message: SnapshotTableRequest, reader: jspb.BinaryReader): SnapshotTableRequest;
}

export namespace SnapshotTableRequest {
  export type AsObject = {
    name: string,
    cluster: string,
    snapshotId: string,
    ttl?: google_protobuf_duration_pb.Duration.AsObject,
    description: string,
  }
}

export class GetSnapshotRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSnapshotRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSnapshotRequest): GetSnapshotRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSnapshotRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSnapshotRequest;
  static deserializeBinaryFromReader(message: GetSnapshotRequest, reader: jspb.BinaryReader): GetSnapshotRequest;
}

export namespace GetSnapshotRequest {
  export type AsObject = {
    name: string,
  }
}

export class ListSnapshotsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSnapshotsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListSnapshotsRequest): ListSnapshotsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListSnapshotsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSnapshotsRequest;
  static deserializeBinaryFromReader(message: ListSnapshotsRequest, reader: jspb.BinaryReader): ListSnapshotsRequest;
}

export namespace ListSnapshotsRequest {
  export type AsObject = {
    parent: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListSnapshotsResponse extends jspb.Message {
  clearSnapshotsList(): void;
  getSnapshotsList(): Array<google_bigtable_admin_v2_table_pb.Snapshot>;
  setSnapshotsList(value: Array<google_bigtable_admin_v2_table_pb.Snapshot>): void;
  addSnapshots(value?: google_bigtable_admin_v2_table_pb.Snapshot, index?: number): google_bigtable_admin_v2_table_pb.Snapshot;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSnapshotsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListSnapshotsResponse): ListSnapshotsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListSnapshotsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSnapshotsResponse;
  static deserializeBinaryFromReader(message: ListSnapshotsResponse, reader: jspb.BinaryReader): ListSnapshotsResponse;
}

export namespace ListSnapshotsResponse {
  export type AsObject = {
    snapshotsList: Array<google_bigtable_admin_v2_table_pb.Snapshot.AsObject>,
    nextPageToken: string,
  }
}

export class DeleteSnapshotRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteSnapshotRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteSnapshotRequest): DeleteSnapshotRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteSnapshotRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteSnapshotRequest;
  static deserializeBinaryFromReader(message: DeleteSnapshotRequest, reader: jspb.BinaryReader): DeleteSnapshotRequest;
}

export namespace DeleteSnapshotRequest {
  export type AsObject = {
    name: string,
  }
}

export class SnapshotTableMetadata extends jspb.Message {
  hasOriginalRequest(): boolean;
  clearOriginalRequest(): void;
  getOriginalRequest(): SnapshotTableRequest | undefined;
  setOriginalRequest(value?: SnapshotTableRequest): void;

  hasRequestTime(): boolean;
  clearRequestTime(): void;
  getRequestTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setRequestTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasFinishTime(): boolean;
  clearFinishTime(): void;
  getFinishTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFinishTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SnapshotTableMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: SnapshotTableMetadata): SnapshotTableMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SnapshotTableMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SnapshotTableMetadata;
  static deserializeBinaryFromReader(message: SnapshotTableMetadata, reader: jspb.BinaryReader): SnapshotTableMetadata;
}

export namespace SnapshotTableMetadata {
  export type AsObject = {
    originalRequest?: SnapshotTableRequest.AsObject,
    requestTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    finishTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class CreateTableFromSnapshotMetadata extends jspb.Message {
  hasOriginalRequest(): boolean;
  clearOriginalRequest(): void;
  getOriginalRequest(): CreateTableFromSnapshotRequest | undefined;
  setOriginalRequest(value?: CreateTableFromSnapshotRequest): void;

  hasRequestTime(): boolean;
  clearRequestTime(): void;
  getRequestTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setRequestTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasFinishTime(): boolean;
  clearFinishTime(): void;
  getFinishTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFinishTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTableFromSnapshotMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTableFromSnapshotMetadata): CreateTableFromSnapshotMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateTableFromSnapshotMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTableFromSnapshotMetadata;
  static deserializeBinaryFromReader(message: CreateTableFromSnapshotMetadata, reader: jspb.BinaryReader): CreateTableFromSnapshotMetadata;
}

export namespace CreateTableFromSnapshotMetadata {
  export type AsObject = {
    originalRequest?: CreateTableFromSnapshotRequest.AsObject,
    requestTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    finishTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

