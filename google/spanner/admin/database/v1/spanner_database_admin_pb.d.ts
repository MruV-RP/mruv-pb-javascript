// package: google.spanner.admin.database.v1
// file: google/spanner/admin/database/v1/spanner_database_admin.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";
import * as google_api_client_pb from "../../../../../google/api/client_pb";
import * as google_api_field_behavior_pb from "../../../../../google/api/field_behavior_pb";
import * as google_api_resource_pb from "../../../../../google/api/resource_pb";
import * as google_iam_v1_iam_policy_pb from "../../../../../google/iam/v1/iam_policy_pb";
import * as google_iam_v1_policy_pb from "../../../../../google/iam/v1/policy_pb";
import * as google_longrunning_operations_pb from "../../../../../google/longrunning/operations_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Database extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getState(): Database.StateMap[keyof Database.StateMap];
  setState(value: Database.StateMap[keyof Database.StateMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Database.AsObject;
  static toObject(includeInstance: boolean, msg: Database): Database.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Database, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Database;
  static deserializeBinaryFromReader(message: Database, reader: jspb.BinaryReader): Database;
}

export namespace Database {
  export type AsObject = {
    name: string,
    state: Database.StateMap[keyof Database.StateMap],
  }

  export interface StateMap {
    STATE_UNSPECIFIED: 0;
    CREATING: 1;
    READY: 2;
  }

  export const State: StateMap;
}

export class ListDatabasesRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDatabasesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListDatabasesRequest): ListDatabasesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListDatabasesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDatabasesRequest;
  static deserializeBinaryFromReader(message: ListDatabasesRequest, reader: jspb.BinaryReader): ListDatabasesRequest;
}

export namespace ListDatabasesRequest {
  export type AsObject = {
    parent: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListDatabasesResponse extends jspb.Message {
  clearDatabasesList(): void;
  getDatabasesList(): Array<Database>;
  setDatabasesList(value: Array<Database>): void;
  addDatabases(value?: Database, index?: number): Database;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDatabasesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListDatabasesResponse): ListDatabasesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListDatabasesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDatabasesResponse;
  static deserializeBinaryFromReader(message: ListDatabasesResponse, reader: jspb.BinaryReader): ListDatabasesResponse;
}

export namespace ListDatabasesResponse {
  export type AsObject = {
    databasesList: Array<Database.AsObject>,
    nextPageToken: string,
  }
}

export class CreateDatabaseRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getCreateStatement(): string;
  setCreateStatement(value: string): void;

  clearExtraStatementsList(): void;
  getExtraStatementsList(): Array<string>;
  setExtraStatementsList(value: Array<string>): void;
  addExtraStatements(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDatabaseRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDatabaseRequest): CreateDatabaseRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateDatabaseRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDatabaseRequest;
  static deserializeBinaryFromReader(message: CreateDatabaseRequest, reader: jspb.BinaryReader): CreateDatabaseRequest;
}

export namespace CreateDatabaseRequest {
  export type AsObject = {
    parent: string,
    createStatement: string,
    extraStatementsList: Array<string>,
  }
}

export class CreateDatabaseMetadata extends jspb.Message {
  getDatabase(): string;
  setDatabase(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDatabaseMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDatabaseMetadata): CreateDatabaseMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateDatabaseMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDatabaseMetadata;
  static deserializeBinaryFromReader(message: CreateDatabaseMetadata, reader: jspb.BinaryReader): CreateDatabaseMetadata;
}

export namespace CreateDatabaseMetadata {
  export type AsObject = {
    database: string,
  }
}

export class GetDatabaseRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDatabaseRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDatabaseRequest): GetDatabaseRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDatabaseRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDatabaseRequest;
  static deserializeBinaryFromReader(message: GetDatabaseRequest, reader: jspb.BinaryReader): GetDatabaseRequest;
}

export namespace GetDatabaseRequest {
  export type AsObject = {
    name: string,
  }
}

export class UpdateDatabaseDdlRequest extends jspb.Message {
  getDatabase(): string;
  setDatabase(value: string): void;

  clearStatementsList(): void;
  getStatementsList(): Array<string>;
  setStatementsList(value: Array<string>): void;
  addStatements(value: string, index?: number): string;

  getOperationId(): string;
  setOperationId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateDatabaseDdlRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateDatabaseDdlRequest): UpdateDatabaseDdlRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateDatabaseDdlRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateDatabaseDdlRequest;
  static deserializeBinaryFromReader(message: UpdateDatabaseDdlRequest, reader: jspb.BinaryReader): UpdateDatabaseDdlRequest;
}

export namespace UpdateDatabaseDdlRequest {
  export type AsObject = {
    database: string,
    statementsList: Array<string>,
    operationId: string,
  }
}

export class UpdateDatabaseDdlMetadata extends jspb.Message {
  getDatabase(): string;
  setDatabase(value: string): void;

  clearStatementsList(): void;
  getStatementsList(): Array<string>;
  setStatementsList(value: Array<string>): void;
  addStatements(value: string, index?: number): string;

  clearCommitTimestampsList(): void;
  getCommitTimestampsList(): Array<google_protobuf_timestamp_pb.Timestamp>;
  setCommitTimestampsList(value: Array<google_protobuf_timestamp_pb.Timestamp>): void;
  addCommitTimestamps(value?: google_protobuf_timestamp_pb.Timestamp, index?: number): google_protobuf_timestamp_pb.Timestamp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateDatabaseDdlMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateDatabaseDdlMetadata): UpdateDatabaseDdlMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateDatabaseDdlMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateDatabaseDdlMetadata;
  static deserializeBinaryFromReader(message: UpdateDatabaseDdlMetadata, reader: jspb.BinaryReader): UpdateDatabaseDdlMetadata;
}

export namespace UpdateDatabaseDdlMetadata {
  export type AsObject = {
    database: string,
    statementsList: Array<string>,
    commitTimestampsList: Array<google_protobuf_timestamp_pb.Timestamp.AsObject>,
  }
}

export class DropDatabaseRequest extends jspb.Message {
  getDatabase(): string;
  setDatabase(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DropDatabaseRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DropDatabaseRequest): DropDatabaseRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DropDatabaseRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DropDatabaseRequest;
  static deserializeBinaryFromReader(message: DropDatabaseRequest, reader: jspb.BinaryReader): DropDatabaseRequest;
}

export namespace DropDatabaseRequest {
  export type AsObject = {
    database: string,
  }
}

export class GetDatabaseDdlRequest extends jspb.Message {
  getDatabase(): string;
  setDatabase(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDatabaseDdlRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDatabaseDdlRequest): GetDatabaseDdlRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDatabaseDdlRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDatabaseDdlRequest;
  static deserializeBinaryFromReader(message: GetDatabaseDdlRequest, reader: jspb.BinaryReader): GetDatabaseDdlRequest;
}

export namespace GetDatabaseDdlRequest {
  export type AsObject = {
    database: string,
  }
}

export class GetDatabaseDdlResponse extends jspb.Message {
  clearStatementsList(): void;
  getStatementsList(): Array<string>;
  setStatementsList(value: Array<string>): void;
  addStatements(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDatabaseDdlResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetDatabaseDdlResponse): GetDatabaseDdlResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDatabaseDdlResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDatabaseDdlResponse;
  static deserializeBinaryFromReader(message: GetDatabaseDdlResponse, reader: jspb.BinaryReader): GetDatabaseDdlResponse;
}

export namespace GetDatabaseDdlResponse {
  export type AsObject = {
    statementsList: Array<string>,
  }
}

