// package: google.spanner.v1
// file: google/spanner/v1/spanner.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as google_api_client_pb from "../../../google/api/client_pb";
import * as google_api_field_behavior_pb from "../../../google/api/field_behavior_pb";
import * as google_api_resource_pb from "../../../google/api/resource_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_rpc_status_pb from "../../../google/rpc/status_pb";
import * as google_spanner_v1_keys_pb from "../../../google/spanner/v1/keys_pb";
import * as google_spanner_v1_mutation_pb from "../../../google/spanner/v1/mutation_pb";
import * as google_spanner_v1_result_set_pb from "../../../google/spanner/v1/result_set_pb";
import * as google_spanner_v1_transaction_pb from "../../../google/spanner/v1/transaction_pb";
import * as google_spanner_v1_type_pb from "../../../google/spanner/v1/type_pb";

export class CreateSessionRequest extends jspb.Message {
  getDatabase(): string;
  setDatabase(value: string): void;

  hasSession(): boolean;
  clearSession(): void;
  getSession(): Session | undefined;
  setSession(value?: Session): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateSessionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateSessionRequest): CreateSessionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateSessionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateSessionRequest;
  static deserializeBinaryFromReader(message: CreateSessionRequest, reader: jspb.BinaryReader): CreateSessionRequest;
}

export namespace CreateSessionRequest {
  export type AsObject = {
    database: string,
    session?: Session.AsObject,
  }
}

export class BatchCreateSessionsRequest extends jspb.Message {
  getDatabase(): string;
  setDatabase(value: string): void;

  hasSessionTemplate(): boolean;
  clearSessionTemplate(): void;
  getSessionTemplate(): Session | undefined;
  setSessionTemplate(value?: Session): void;

  getSessionCount(): number;
  setSessionCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchCreateSessionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BatchCreateSessionsRequest): BatchCreateSessionsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BatchCreateSessionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchCreateSessionsRequest;
  static deserializeBinaryFromReader(message: BatchCreateSessionsRequest, reader: jspb.BinaryReader): BatchCreateSessionsRequest;
}

export namespace BatchCreateSessionsRequest {
  export type AsObject = {
    database: string,
    sessionTemplate?: Session.AsObject,
    sessionCount: number,
  }
}

export class BatchCreateSessionsResponse extends jspb.Message {
  clearSessionList(): void;
  getSessionList(): Array<Session>;
  setSessionList(value: Array<Session>): void;
  addSession(value?: Session, index?: number): Session;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchCreateSessionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BatchCreateSessionsResponse): BatchCreateSessionsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BatchCreateSessionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchCreateSessionsResponse;
  static deserializeBinaryFromReader(message: BatchCreateSessionsResponse, reader: jspb.BinaryReader): BatchCreateSessionsResponse;
}

export namespace BatchCreateSessionsResponse {
  export type AsObject = {
    sessionList: Array<Session.AsObject>,
  }
}

export class Session extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): void;
  hasCreateTime(): boolean;
  clearCreateTime(): void;
  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasApproximateLastUseTime(): boolean;
  clearApproximateLastUseTime(): void;
  getApproximateLastUseTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setApproximateLastUseTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Session.AsObject;
  static toObject(includeInstance: boolean, msg: Session): Session.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Session, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Session;
  static deserializeBinaryFromReader(message: Session, reader: jspb.BinaryReader): Session;
}

export namespace Session {
  export type AsObject = {
    name: string,
    labelsMap: Array<[string, string]>,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    approximateLastUseTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class GetSessionRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSessionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSessionRequest): GetSessionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSessionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSessionRequest;
  static deserializeBinaryFromReader(message: GetSessionRequest, reader: jspb.BinaryReader): GetSessionRequest;
}

export namespace GetSessionRequest {
  export type AsObject = {
    name: string,
  }
}

export class ListSessionsRequest extends jspb.Message {
  getDatabase(): string;
  setDatabase(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  getFilter(): string;
  setFilter(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSessionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListSessionsRequest): ListSessionsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListSessionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSessionsRequest;
  static deserializeBinaryFromReader(message: ListSessionsRequest, reader: jspb.BinaryReader): ListSessionsRequest;
}

export namespace ListSessionsRequest {
  export type AsObject = {
    database: string,
    pageSize: number,
    pageToken: string,
    filter: string,
  }
}

export class ListSessionsResponse extends jspb.Message {
  clearSessionsList(): void;
  getSessionsList(): Array<Session>;
  setSessionsList(value: Array<Session>): void;
  addSessions(value?: Session, index?: number): Session;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSessionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListSessionsResponse): ListSessionsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListSessionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSessionsResponse;
  static deserializeBinaryFromReader(message: ListSessionsResponse, reader: jspb.BinaryReader): ListSessionsResponse;
}

export namespace ListSessionsResponse {
  export type AsObject = {
    sessionsList: Array<Session.AsObject>,
    nextPageToken: string,
  }
}

export class DeleteSessionRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteSessionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteSessionRequest): DeleteSessionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteSessionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteSessionRequest;
  static deserializeBinaryFromReader(message: DeleteSessionRequest, reader: jspb.BinaryReader): DeleteSessionRequest;
}

export namespace DeleteSessionRequest {
  export type AsObject = {
    name: string,
  }
}

export class ExecuteSqlRequest extends jspb.Message {
  getSession(): string;
  setSession(value: string): void;

  hasTransaction(): boolean;
  clearTransaction(): void;
  getTransaction(): google_spanner_v1_transaction_pb.TransactionSelector | undefined;
  setTransaction(value?: google_spanner_v1_transaction_pb.TransactionSelector): void;

  getSql(): string;
  setSql(value: string): void;

  hasParams(): boolean;
  clearParams(): void;
  getParams(): google_protobuf_struct_pb.Struct | undefined;
  setParams(value?: google_protobuf_struct_pb.Struct): void;

  getParamTypesMap(): jspb.Map<string, google_spanner_v1_type_pb.Type>;
  clearParamTypesMap(): void;
  getResumeToken(): Uint8Array | string;
  getResumeToken_asU8(): Uint8Array;
  getResumeToken_asB64(): string;
  setResumeToken(value: Uint8Array | string): void;

  getQueryMode(): ExecuteSqlRequest.QueryModeMap[keyof ExecuteSqlRequest.QueryModeMap];
  setQueryMode(value: ExecuteSqlRequest.QueryModeMap[keyof ExecuteSqlRequest.QueryModeMap]): void;

  getPartitionToken(): Uint8Array | string;
  getPartitionToken_asU8(): Uint8Array;
  getPartitionToken_asB64(): string;
  setPartitionToken(value: Uint8Array | string): void;

  getSeqno(): number;
  setSeqno(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteSqlRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteSqlRequest): ExecuteSqlRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteSqlRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteSqlRequest;
  static deserializeBinaryFromReader(message: ExecuteSqlRequest, reader: jspb.BinaryReader): ExecuteSqlRequest;
}

export namespace ExecuteSqlRequest {
  export type AsObject = {
    session: string,
    transaction?: google_spanner_v1_transaction_pb.TransactionSelector.AsObject,
    sql: string,
    params?: google_protobuf_struct_pb.Struct.AsObject,
    paramTypesMap: Array<[string, google_spanner_v1_type_pb.Type.AsObject]>,
    resumeToken: Uint8Array | string,
    queryMode: ExecuteSqlRequest.QueryModeMap[keyof ExecuteSqlRequest.QueryModeMap],
    partitionToken: Uint8Array | string,
    seqno: number,
  }

  export interface QueryModeMap {
    NORMAL: 0;
    PLAN: 1;
    PROFILE: 2;
  }

  export const QueryMode: QueryModeMap;
}

export class ExecuteBatchDmlRequest extends jspb.Message {
  getSession(): string;
  setSession(value: string): void;

  hasTransaction(): boolean;
  clearTransaction(): void;
  getTransaction(): google_spanner_v1_transaction_pb.TransactionSelector | undefined;
  setTransaction(value?: google_spanner_v1_transaction_pb.TransactionSelector): void;

  clearStatementsList(): void;
  getStatementsList(): Array<ExecuteBatchDmlRequest.Statement>;
  setStatementsList(value: Array<ExecuteBatchDmlRequest.Statement>): void;
  addStatements(value?: ExecuteBatchDmlRequest.Statement, index?: number): ExecuteBatchDmlRequest.Statement;

  getSeqno(): number;
  setSeqno(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteBatchDmlRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteBatchDmlRequest): ExecuteBatchDmlRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteBatchDmlRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteBatchDmlRequest;
  static deserializeBinaryFromReader(message: ExecuteBatchDmlRequest, reader: jspb.BinaryReader): ExecuteBatchDmlRequest;
}

export namespace ExecuteBatchDmlRequest {
  export type AsObject = {
    session: string,
    transaction?: google_spanner_v1_transaction_pb.TransactionSelector.AsObject,
    statementsList: Array<ExecuteBatchDmlRequest.Statement.AsObject>,
    seqno: number,
  }

  export class Statement extends jspb.Message {
    getSql(): string;
    setSql(value: string): void;

    hasParams(): boolean;
    clearParams(): void;
    getParams(): google_protobuf_struct_pb.Struct | undefined;
    setParams(value?: google_protobuf_struct_pb.Struct): void;

    getParamTypesMap(): jspb.Map<string, google_spanner_v1_type_pb.Type>;
    clearParamTypesMap(): void;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Statement.AsObject;
    static toObject(includeInstance: boolean, msg: Statement): Statement.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Statement, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Statement;
    static deserializeBinaryFromReader(message: Statement, reader: jspb.BinaryReader): Statement;
  }

  export namespace Statement {
    export type AsObject = {
      sql: string,
      params?: google_protobuf_struct_pb.Struct.AsObject,
      paramTypesMap: Array<[string, google_spanner_v1_type_pb.Type.AsObject]>,
    }
  }
}

export class ExecuteBatchDmlResponse extends jspb.Message {
  clearResultSetsList(): void;
  getResultSetsList(): Array<google_spanner_v1_result_set_pb.ResultSet>;
  setResultSetsList(value: Array<google_spanner_v1_result_set_pb.ResultSet>): void;
  addResultSets(value?: google_spanner_v1_result_set_pb.ResultSet, index?: number): google_spanner_v1_result_set_pb.ResultSet;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): google_rpc_status_pb.Status | undefined;
  setStatus(value?: google_rpc_status_pb.Status): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteBatchDmlResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteBatchDmlResponse): ExecuteBatchDmlResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteBatchDmlResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteBatchDmlResponse;
  static deserializeBinaryFromReader(message: ExecuteBatchDmlResponse, reader: jspb.BinaryReader): ExecuteBatchDmlResponse;
}

export namespace ExecuteBatchDmlResponse {
  export type AsObject = {
    resultSetsList: Array<google_spanner_v1_result_set_pb.ResultSet.AsObject>,
    status?: google_rpc_status_pb.Status.AsObject,
  }
}

export class PartitionOptions extends jspb.Message {
  getPartitionSizeBytes(): number;
  setPartitionSizeBytes(value: number): void;

  getMaxPartitions(): number;
  setMaxPartitions(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PartitionOptions.AsObject;
  static toObject(includeInstance: boolean, msg: PartitionOptions): PartitionOptions.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PartitionOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PartitionOptions;
  static deserializeBinaryFromReader(message: PartitionOptions, reader: jspb.BinaryReader): PartitionOptions;
}

export namespace PartitionOptions {
  export type AsObject = {
    partitionSizeBytes: number,
    maxPartitions: number,
  }
}

export class PartitionQueryRequest extends jspb.Message {
  getSession(): string;
  setSession(value: string): void;

  hasTransaction(): boolean;
  clearTransaction(): void;
  getTransaction(): google_spanner_v1_transaction_pb.TransactionSelector | undefined;
  setTransaction(value?: google_spanner_v1_transaction_pb.TransactionSelector): void;

  getSql(): string;
  setSql(value: string): void;

  hasParams(): boolean;
  clearParams(): void;
  getParams(): google_protobuf_struct_pb.Struct | undefined;
  setParams(value?: google_protobuf_struct_pb.Struct): void;

  getParamTypesMap(): jspb.Map<string, google_spanner_v1_type_pb.Type>;
  clearParamTypesMap(): void;
  hasPartitionOptions(): boolean;
  clearPartitionOptions(): void;
  getPartitionOptions(): PartitionOptions | undefined;
  setPartitionOptions(value?: PartitionOptions): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PartitionQueryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PartitionQueryRequest): PartitionQueryRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PartitionQueryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PartitionQueryRequest;
  static deserializeBinaryFromReader(message: PartitionQueryRequest, reader: jspb.BinaryReader): PartitionQueryRequest;
}

export namespace PartitionQueryRequest {
  export type AsObject = {
    session: string,
    transaction?: google_spanner_v1_transaction_pb.TransactionSelector.AsObject,
    sql: string,
    params?: google_protobuf_struct_pb.Struct.AsObject,
    paramTypesMap: Array<[string, google_spanner_v1_type_pb.Type.AsObject]>,
    partitionOptions?: PartitionOptions.AsObject,
  }
}

export class PartitionReadRequest extends jspb.Message {
  getSession(): string;
  setSession(value: string): void;

  hasTransaction(): boolean;
  clearTransaction(): void;
  getTransaction(): google_spanner_v1_transaction_pb.TransactionSelector | undefined;
  setTransaction(value?: google_spanner_v1_transaction_pb.TransactionSelector): void;

  getTable(): string;
  setTable(value: string): void;

  getIndex(): string;
  setIndex(value: string): void;

  clearColumnsList(): void;
  getColumnsList(): Array<string>;
  setColumnsList(value: Array<string>): void;
  addColumns(value: string, index?: number): string;

  hasKeySet(): boolean;
  clearKeySet(): void;
  getKeySet(): google_spanner_v1_keys_pb.KeySet | undefined;
  setKeySet(value?: google_spanner_v1_keys_pb.KeySet): void;

  hasPartitionOptions(): boolean;
  clearPartitionOptions(): void;
  getPartitionOptions(): PartitionOptions | undefined;
  setPartitionOptions(value?: PartitionOptions): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PartitionReadRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PartitionReadRequest): PartitionReadRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PartitionReadRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PartitionReadRequest;
  static deserializeBinaryFromReader(message: PartitionReadRequest, reader: jspb.BinaryReader): PartitionReadRequest;
}

export namespace PartitionReadRequest {
  export type AsObject = {
    session: string,
    transaction?: google_spanner_v1_transaction_pb.TransactionSelector.AsObject,
    table: string,
    index: string,
    columnsList: Array<string>,
    keySet?: google_spanner_v1_keys_pb.KeySet.AsObject,
    partitionOptions?: PartitionOptions.AsObject,
  }
}

export class Partition extends jspb.Message {
  getPartitionToken(): Uint8Array | string;
  getPartitionToken_asU8(): Uint8Array;
  getPartitionToken_asB64(): string;
  setPartitionToken(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Partition.AsObject;
  static toObject(includeInstance: boolean, msg: Partition): Partition.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Partition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Partition;
  static deserializeBinaryFromReader(message: Partition, reader: jspb.BinaryReader): Partition;
}

export namespace Partition {
  export type AsObject = {
    partitionToken: Uint8Array | string,
  }
}

export class PartitionResponse extends jspb.Message {
  clearPartitionsList(): void;
  getPartitionsList(): Array<Partition>;
  setPartitionsList(value: Array<Partition>): void;
  addPartitions(value?: Partition, index?: number): Partition;

  hasTransaction(): boolean;
  clearTransaction(): void;
  getTransaction(): google_spanner_v1_transaction_pb.Transaction | undefined;
  setTransaction(value?: google_spanner_v1_transaction_pb.Transaction): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PartitionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PartitionResponse): PartitionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PartitionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PartitionResponse;
  static deserializeBinaryFromReader(message: PartitionResponse, reader: jspb.BinaryReader): PartitionResponse;
}

export namespace PartitionResponse {
  export type AsObject = {
    partitionsList: Array<Partition.AsObject>,
    transaction?: google_spanner_v1_transaction_pb.Transaction.AsObject,
  }
}

export class ReadRequest extends jspb.Message {
  getSession(): string;
  setSession(value: string): void;

  hasTransaction(): boolean;
  clearTransaction(): void;
  getTransaction(): google_spanner_v1_transaction_pb.TransactionSelector | undefined;
  setTransaction(value?: google_spanner_v1_transaction_pb.TransactionSelector): void;

  getTable(): string;
  setTable(value: string): void;

  getIndex(): string;
  setIndex(value: string): void;

  clearColumnsList(): void;
  getColumnsList(): Array<string>;
  setColumnsList(value: Array<string>): void;
  addColumns(value: string, index?: number): string;

  hasKeySet(): boolean;
  clearKeySet(): void;
  getKeySet(): google_spanner_v1_keys_pb.KeySet | undefined;
  setKeySet(value?: google_spanner_v1_keys_pb.KeySet): void;

  getLimit(): number;
  setLimit(value: number): void;

  getResumeToken(): Uint8Array | string;
  getResumeToken_asU8(): Uint8Array;
  getResumeToken_asB64(): string;
  setResumeToken(value: Uint8Array | string): void;

  getPartitionToken(): Uint8Array | string;
  getPartitionToken_asU8(): Uint8Array;
  getPartitionToken_asB64(): string;
  setPartitionToken(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReadRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReadRequest): ReadRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReadRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReadRequest;
  static deserializeBinaryFromReader(message: ReadRequest, reader: jspb.BinaryReader): ReadRequest;
}

export namespace ReadRequest {
  export type AsObject = {
    session: string,
    transaction?: google_spanner_v1_transaction_pb.TransactionSelector.AsObject,
    table: string,
    index: string,
    columnsList: Array<string>,
    keySet?: google_spanner_v1_keys_pb.KeySet.AsObject,
    limit: number,
    resumeToken: Uint8Array | string,
    partitionToken: Uint8Array | string,
  }
}

export class BeginTransactionRequest extends jspb.Message {
  getSession(): string;
  setSession(value: string): void;

  hasOptions(): boolean;
  clearOptions(): void;
  getOptions(): google_spanner_v1_transaction_pb.TransactionOptions | undefined;
  setOptions(value?: google_spanner_v1_transaction_pb.TransactionOptions): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BeginTransactionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BeginTransactionRequest): BeginTransactionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BeginTransactionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BeginTransactionRequest;
  static deserializeBinaryFromReader(message: BeginTransactionRequest, reader: jspb.BinaryReader): BeginTransactionRequest;
}

export namespace BeginTransactionRequest {
  export type AsObject = {
    session: string,
    options?: google_spanner_v1_transaction_pb.TransactionOptions.AsObject,
  }
}

export class CommitRequest extends jspb.Message {
  getSession(): string;
  setSession(value: string): void;

  hasTransactionId(): boolean;
  clearTransactionId(): void;
  getTransactionId(): Uint8Array | string;
  getTransactionId_asU8(): Uint8Array;
  getTransactionId_asB64(): string;
  setTransactionId(value: Uint8Array | string): void;

  hasSingleUseTransaction(): boolean;
  clearSingleUseTransaction(): void;
  getSingleUseTransaction(): google_spanner_v1_transaction_pb.TransactionOptions | undefined;
  setSingleUseTransaction(value?: google_spanner_v1_transaction_pb.TransactionOptions): void;

  clearMutationsList(): void;
  getMutationsList(): Array<google_spanner_v1_mutation_pb.Mutation>;
  setMutationsList(value: Array<google_spanner_v1_mutation_pb.Mutation>): void;
  addMutations(value?: google_spanner_v1_mutation_pb.Mutation, index?: number): google_spanner_v1_mutation_pb.Mutation;

  getTransactionCase(): CommitRequest.TransactionCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommitRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CommitRequest): CommitRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CommitRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommitRequest;
  static deserializeBinaryFromReader(message: CommitRequest, reader: jspb.BinaryReader): CommitRequest;
}

export namespace CommitRequest {
  export type AsObject = {
    session: string,
    transactionId: Uint8Array | string,
    singleUseTransaction?: google_spanner_v1_transaction_pb.TransactionOptions.AsObject,
    mutationsList: Array<google_spanner_v1_mutation_pb.Mutation.AsObject>,
  }

  export enum TransactionCase {
    TRANSACTION_NOT_SET = 0,
    TRANSACTION_ID = 2,
    SINGLE_USE_TRANSACTION = 3,
  }
}

export class CommitResponse extends jspb.Message {
  hasCommitTimestamp(): boolean;
  clearCommitTimestamp(): void;
  getCommitTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCommitTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommitResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CommitResponse): CommitResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CommitResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommitResponse;
  static deserializeBinaryFromReader(message: CommitResponse, reader: jspb.BinaryReader): CommitResponse;
}

export namespace CommitResponse {
  export type AsObject = {
    commitTimestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class RollbackRequest extends jspb.Message {
  getSession(): string;
  setSession(value: string): void;

  getTransactionId(): Uint8Array | string;
  getTransactionId_asU8(): Uint8Array;
  getTransactionId_asB64(): string;
  setTransactionId(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RollbackRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RollbackRequest): RollbackRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RollbackRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RollbackRequest;
  static deserializeBinaryFromReader(message: RollbackRequest, reader: jspb.BinaryReader): RollbackRequest;
}

export namespace RollbackRequest {
  export type AsObject = {
    session: string,
    transactionId: Uint8Array | string,
  }
}

