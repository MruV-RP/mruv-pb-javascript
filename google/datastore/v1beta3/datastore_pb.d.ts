// package: google.datastore.v1beta3
// file: google/datastore/v1beta3/datastore.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as google_datastore_v1beta3_entity_pb from "../../../google/datastore/v1beta3/entity_pb";
import * as google_datastore_v1beta3_query_pb from "../../../google/datastore/v1beta3/query_pb";

export class LookupRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  hasReadOptions(): boolean;
  clearReadOptions(): void;
  getReadOptions(): ReadOptions | undefined;
  setReadOptions(value?: ReadOptions): void;

  clearKeysList(): void;
  getKeysList(): Array<google_datastore_v1beta3_entity_pb.Key>;
  setKeysList(value: Array<google_datastore_v1beta3_entity_pb.Key>): void;
  addKeys(value?: google_datastore_v1beta3_entity_pb.Key, index?: number): google_datastore_v1beta3_entity_pb.Key;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LookupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LookupRequest): LookupRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LookupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LookupRequest;
  static deserializeBinaryFromReader(message: LookupRequest, reader: jspb.BinaryReader): LookupRequest;
}

export namespace LookupRequest {
  export type AsObject = {
    projectId: string,
    readOptions?: ReadOptions.AsObject,
    keysList: Array<google_datastore_v1beta3_entity_pb.Key.AsObject>,
  }
}

export class LookupResponse extends jspb.Message {
  clearFoundList(): void;
  getFoundList(): Array<google_datastore_v1beta3_query_pb.EntityResult>;
  setFoundList(value: Array<google_datastore_v1beta3_query_pb.EntityResult>): void;
  addFound(value?: google_datastore_v1beta3_query_pb.EntityResult, index?: number): google_datastore_v1beta3_query_pb.EntityResult;

  clearMissingList(): void;
  getMissingList(): Array<google_datastore_v1beta3_query_pb.EntityResult>;
  setMissingList(value: Array<google_datastore_v1beta3_query_pb.EntityResult>): void;
  addMissing(value?: google_datastore_v1beta3_query_pb.EntityResult, index?: number): google_datastore_v1beta3_query_pb.EntityResult;

  clearDeferredList(): void;
  getDeferredList(): Array<google_datastore_v1beta3_entity_pb.Key>;
  setDeferredList(value: Array<google_datastore_v1beta3_entity_pb.Key>): void;
  addDeferred(value?: google_datastore_v1beta3_entity_pb.Key, index?: number): google_datastore_v1beta3_entity_pb.Key;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LookupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LookupResponse): LookupResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LookupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LookupResponse;
  static deserializeBinaryFromReader(message: LookupResponse, reader: jspb.BinaryReader): LookupResponse;
}

export namespace LookupResponse {
  export type AsObject = {
    foundList: Array<google_datastore_v1beta3_query_pb.EntityResult.AsObject>,
    missingList: Array<google_datastore_v1beta3_query_pb.EntityResult.AsObject>,
    deferredList: Array<google_datastore_v1beta3_entity_pb.Key.AsObject>,
  }
}

export class RunQueryRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  hasPartitionId(): boolean;
  clearPartitionId(): void;
  getPartitionId(): google_datastore_v1beta3_entity_pb.PartitionId | undefined;
  setPartitionId(value?: google_datastore_v1beta3_entity_pb.PartitionId): void;

  hasReadOptions(): boolean;
  clearReadOptions(): void;
  getReadOptions(): ReadOptions | undefined;
  setReadOptions(value?: ReadOptions): void;

  hasQuery(): boolean;
  clearQuery(): void;
  getQuery(): google_datastore_v1beta3_query_pb.Query | undefined;
  setQuery(value?: google_datastore_v1beta3_query_pb.Query): void;

  hasGqlQuery(): boolean;
  clearGqlQuery(): void;
  getGqlQuery(): google_datastore_v1beta3_query_pb.GqlQuery | undefined;
  setGqlQuery(value?: google_datastore_v1beta3_query_pb.GqlQuery): void;

  getQueryTypeCase(): RunQueryRequest.QueryTypeCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RunQueryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RunQueryRequest): RunQueryRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RunQueryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RunQueryRequest;
  static deserializeBinaryFromReader(message: RunQueryRequest, reader: jspb.BinaryReader): RunQueryRequest;
}

export namespace RunQueryRequest {
  export type AsObject = {
    projectId: string,
    partitionId?: google_datastore_v1beta3_entity_pb.PartitionId.AsObject,
    readOptions?: ReadOptions.AsObject,
    query?: google_datastore_v1beta3_query_pb.Query.AsObject,
    gqlQuery?: google_datastore_v1beta3_query_pb.GqlQuery.AsObject,
  }

  export enum QueryTypeCase {
    QUERY_TYPE_NOT_SET = 0,
    QUERY = 3,
    GQL_QUERY = 7,
  }
}

export class RunQueryResponse extends jspb.Message {
  hasBatch(): boolean;
  clearBatch(): void;
  getBatch(): google_datastore_v1beta3_query_pb.QueryResultBatch | undefined;
  setBatch(value?: google_datastore_v1beta3_query_pb.QueryResultBatch): void;

  hasQuery(): boolean;
  clearQuery(): void;
  getQuery(): google_datastore_v1beta3_query_pb.Query | undefined;
  setQuery(value?: google_datastore_v1beta3_query_pb.Query): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RunQueryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RunQueryResponse): RunQueryResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RunQueryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RunQueryResponse;
  static deserializeBinaryFromReader(message: RunQueryResponse, reader: jspb.BinaryReader): RunQueryResponse;
}

export namespace RunQueryResponse {
  export type AsObject = {
    batch?: google_datastore_v1beta3_query_pb.QueryResultBatch.AsObject,
    query?: google_datastore_v1beta3_query_pb.Query.AsObject,
  }
}

export class BeginTransactionRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  hasTransactionOptions(): boolean;
  clearTransactionOptions(): void;
  getTransactionOptions(): TransactionOptions | undefined;
  setTransactionOptions(value?: TransactionOptions): void;

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
    projectId: string,
    transactionOptions?: TransactionOptions.AsObject,
  }
}

export class BeginTransactionResponse extends jspb.Message {
  getTransaction(): Uint8Array | string;
  getTransaction_asU8(): Uint8Array;
  getTransaction_asB64(): string;
  setTransaction(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BeginTransactionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BeginTransactionResponse): BeginTransactionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BeginTransactionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BeginTransactionResponse;
  static deserializeBinaryFromReader(message: BeginTransactionResponse, reader: jspb.BinaryReader): BeginTransactionResponse;
}

export namespace BeginTransactionResponse {
  export type AsObject = {
    transaction: Uint8Array | string,
  }
}

export class RollbackRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getTransaction(): Uint8Array | string;
  getTransaction_asU8(): Uint8Array;
  getTransaction_asB64(): string;
  setTransaction(value: Uint8Array | string): void;

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
    projectId: string,
    transaction: Uint8Array | string,
  }
}

export class RollbackResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RollbackResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RollbackResponse): RollbackResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RollbackResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RollbackResponse;
  static deserializeBinaryFromReader(message: RollbackResponse, reader: jspb.BinaryReader): RollbackResponse;
}

export namespace RollbackResponse {
  export type AsObject = {
  }
}

export class CommitRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getMode(): CommitRequest.ModeMap[keyof CommitRequest.ModeMap];
  setMode(value: CommitRequest.ModeMap[keyof CommitRequest.ModeMap]): void;

  hasTransaction(): boolean;
  clearTransaction(): void;
  getTransaction(): Uint8Array | string;
  getTransaction_asU8(): Uint8Array;
  getTransaction_asB64(): string;
  setTransaction(value: Uint8Array | string): void;

  clearMutationsList(): void;
  getMutationsList(): Array<Mutation>;
  setMutationsList(value: Array<Mutation>): void;
  addMutations(value?: Mutation, index?: number): Mutation;

  getTransactionSelectorCase(): CommitRequest.TransactionSelectorCase;
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
    projectId: string,
    mode: CommitRequest.ModeMap[keyof CommitRequest.ModeMap],
    transaction: Uint8Array | string,
    mutationsList: Array<Mutation.AsObject>,
  }

  export interface ModeMap {
    MODE_UNSPECIFIED: 0;
    TRANSACTIONAL: 1;
    NON_TRANSACTIONAL: 2;
  }

  export const Mode: ModeMap;

  export enum TransactionSelectorCase {
    TRANSACTION_SELECTOR_NOT_SET = 0,
    TRANSACTION = 1,
  }
}

export class CommitResponse extends jspb.Message {
  clearMutationResultsList(): void;
  getMutationResultsList(): Array<MutationResult>;
  setMutationResultsList(value: Array<MutationResult>): void;
  addMutationResults(value?: MutationResult, index?: number): MutationResult;

  getIndexUpdates(): number;
  setIndexUpdates(value: number): void;

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
    mutationResultsList: Array<MutationResult.AsObject>,
    indexUpdates: number,
  }
}

export class AllocateIdsRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  clearKeysList(): void;
  getKeysList(): Array<google_datastore_v1beta3_entity_pb.Key>;
  setKeysList(value: Array<google_datastore_v1beta3_entity_pb.Key>): void;
  addKeys(value?: google_datastore_v1beta3_entity_pb.Key, index?: number): google_datastore_v1beta3_entity_pb.Key;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AllocateIdsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AllocateIdsRequest): AllocateIdsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AllocateIdsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AllocateIdsRequest;
  static deserializeBinaryFromReader(message: AllocateIdsRequest, reader: jspb.BinaryReader): AllocateIdsRequest;
}

export namespace AllocateIdsRequest {
  export type AsObject = {
    projectId: string,
    keysList: Array<google_datastore_v1beta3_entity_pb.Key.AsObject>,
  }
}

export class AllocateIdsResponse extends jspb.Message {
  clearKeysList(): void;
  getKeysList(): Array<google_datastore_v1beta3_entity_pb.Key>;
  setKeysList(value: Array<google_datastore_v1beta3_entity_pb.Key>): void;
  addKeys(value?: google_datastore_v1beta3_entity_pb.Key, index?: number): google_datastore_v1beta3_entity_pb.Key;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AllocateIdsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AllocateIdsResponse): AllocateIdsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AllocateIdsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AllocateIdsResponse;
  static deserializeBinaryFromReader(message: AllocateIdsResponse, reader: jspb.BinaryReader): AllocateIdsResponse;
}

export namespace AllocateIdsResponse {
  export type AsObject = {
    keysList: Array<google_datastore_v1beta3_entity_pb.Key.AsObject>,
  }
}

export class ReserveIdsRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getDatabaseId(): string;
  setDatabaseId(value: string): void;

  clearKeysList(): void;
  getKeysList(): Array<google_datastore_v1beta3_entity_pb.Key>;
  setKeysList(value: Array<google_datastore_v1beta3_entity_pb.Key>): void;
  addKeys(value?: google_datastore_v1beta3_entity_pb.Key, index?: number): google_datastore_v1beta3_entity_pb.Key;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReserveIdsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReserveIdsRequest): ReserveIdsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReserveIdsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReserveIdsRequest;
  static deserializeBinaryFromReader(message: ReserveIdsRequest, reader: jspb.BinaryReader): ReserveIdsRequest;
}

export namespace ReserveIdsRequest {
  export type AsObject = {
    projectId: string,
    databaseId: string,
    keysList: Array<google_datastore_v1beta3_entity_pb.Key.AsObject>,
  }
}

export class ReserveIdsResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReserveIdsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ReserveIdsResponse): ReserveIdsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReserveIdsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReserveIdsResponse;
  static deserializeBinaryFromReader(message: ReserveIdsResponse, reader: jspb.BinaryReader): ReserveIdsResponse;
}

export namespace ReserveIdsResponse {
  export type AsObject = {
  }
}

export class Mutation extends jspb.Message {
  hasInsert(): boolean;
  clearInsert(): void;
  getInsert(): google_datastore_v1beta3_entity_pb.Entity | undefined;
  setInsert(value?: google_datastore_v1beta3_entity_pb.Entity): void;

  hasUpdate(): boolean;
  clearUpdate(): void;
  getUpdate(): google_datastore_v1beta3_entity_pb.Entity | undefined;
  setUpdate(value?: google_datastore_v1beta3_entity_pb.Entity): void;

  hasUpsert(): boolean;
  clearUpsert(): void;
  getUpsert(): google_datastore_v1beta3_entity_pb.Entity | undefined;
  setUpsert(value?: google_datastore_v1beta3_entity_pb.Entity): void;

  hasDelete(): boolean;
  clearDelete(): void;
  getDelete(): google_datastore_v1beta3_entity_pb.Key | undefined;
  setDelete(value?: google_datastore_v1beta3_entity_pb.Key): void;

  hasBaseVersion(): boolean;
  clearBaseVersion(): void;
  getBaseVersion(): number;
  setBaseVersion(value: number): void;

  getOperationCase(): Mutation.OperationCase;
  getConflictDetectionStrategyCase(): Mutation.ConflictDetectionStrategyCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Mutation.AsObject;
  static toObject(includeInstance: boolean, msg: Mutation): Mutation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Mutation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Mutation;
  static deserializeBinaryFromReader(message: Mutation, reader: jspb.BinaryReader): Mutation;
}

export namespace Mutation {
  export type AsObject = {
    insert?: google_datastore_v1beta3_entity_pb.Entity.AsObject,
    update?: google_datastore_v1beta3_entity_pb.Entity.AsObject,
    upsert?: google_datastore_v1beta3_entity_pb.Entity.AsObject,
    pb_delete?: google_datastore_v1beta3_entity_pb.Key.AsObject,
    baseVersion: number,
  }

  export enum OperationCase {
    OPERATION_NOT_SET = 0,
    INSERT = 4,
    UPDATE = 5,
    UPSERT = 6,
    DELETE = 7,
  }

  export enum ConflictDetectionStrategyCase {
    CONFLICT_DETECTION_STRATEGY_NOT_SET = 0,
    BASE_VERSION = 8,
  }
}

export class MutationResult extends jspb.Message {
  hasKey(): boolean;
  clearKey(): void;
  getKey(): google_datastore_v1beta3_entity_pb.Key | undefined;
  setKey(value?: google_datastore_v1beta3_entity_pb.Key): void;

  getVersion(): number;
  setVersion(value: number): void;

  getConflictDetected(): boolean;
  setConflictDetected(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutationResult.AsObject;
  static toObject(includeInstance: boolean, msg: MutationResult): MutationResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutationResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutationResult;
  static deserializeBinaryFromReader(message: MutationResult, reader: jspb.BinaryReader): MutationResult;
}

export namespace MutationResult {
  export type AsObject = {
    key?: google_datastore_v1beta3_entity_pb.Key.AsObject,
    version: number,
    conflictDetected: boolean,
  }
}

export class ReadOptions extends jspb.Message {
  hasReadConsistency(): boolean;
  clearReadConsistency(): void;
  getReadConsistency(): ReadOptions.ReadConsistencyMap[keyof ReadOptions.ReadConsistencyMap];
  setReadConsistency(value: ReadOptions.ReadConsistencyMap[keyof ReadOptions.ReadConsistencyMap]): void;

  hasTransaction(): boolean;
  clearTransaction(): void;
  getTransaction(): Uint8Array | string;
  getTransaction_asU8(): Uint8Array;
  getTransaction_asB64(): string;
  setTransaction(value: Uint8Array | string): void;

  getConsistencyTypeCase(): ReadOptions.ConsistencyTypeCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReadOptions.AsObject;
  static toObject(includeInstance: boolean, msg: ReadOptions): ReadOptions.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReadOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReadOptions;
  static deserializeBinaryFromReader(message: ReadOptions, reader: jspb.BinaryReader): ReadOptions;
}

export namespace ReadOptions {
  export type AsObject = {
    readConsistency: ReadOptions.ReadConsistencyMap[keyof ReadOptions.ReadConsistencyMap],
    transaction: Uint8Array | string,
  }

  export interface ReadConsistencyMap {
    READ_CONSISTENCY_UNSPECIFIED: 0;
    STRONG: 1;
    EVENTUAL: 2;
  }

  export const ReadConsistency: ReadConsistencyMap;

  export enum ConsistencyTypeCase {
    CONSISTENCY_TYPE_NOT_SET = 0,
    READ_CONSISTENCY = 1,
    TRANSACTION = 2,
  }
}

export class TransactionOptions extends jspb.Message {
  hasReadWrite(): boolean;
  clearReadWrite(): void;
  getReadWrite(): TransactionOptions.ReadWrite | undefined;
  setReadWrite(value?: TransactionOptions.ReadWrite): void;

  hasReadOnly(): boolean;
  clearReadOnly(): void;
  getReadOnly(): TransactionOptions.ReadOnly | undefined;
  setReadOnly(value?: TransactionOptions.ReadOnly): void;

  getModeCase(): TransactionOptions.ModeCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransactionOptions.AsObject;
  static toObject(includeInstance: boolean, msg: TransactionOptions): TransactionOptions.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransactionOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransactionOptions;
  static deserializeBinaryFromReader(message: TransactionOptions, reader: jspb.BinaryReader): TransactionOptions;
}

export namespace TransactionOptions {
  export type AsObject = {
    readWrite?: TransactionOptions.ReadWrite.AsObject,
    readOnly?: TransactionOptions.ReadOnly.AsObject,
  }

  export class ReadWrite extends jspb.Message {
    getPreviousTransaction(): Uint8Array | string;
    getPreviousTransaction_asU8(): Uint8Array;
    getPreviousTransaction_asB64(): string;
    setPreviousTransaction(value: Uint8Array | string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReadWrite.AsObject;
    static toObject(includeInstance: boolean, msg: ReadWrite): ReadWrite.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReadWrite, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReadWrite;
    static deserializeBinaryFromReader(message: ReadWrite, reader: jspb.BinaryReader): ReadWrite;
  }

  export namespace ReadWrite {
    export type AsObject = {
      previousTransaction: Uint8Array | string,
    }
  }

  export class ReadOnly extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReadOnly.AsObject;
    static toObject(includeInstance: boolean, msg: ReadOnly): ReadOnly.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReadOnly, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReadOnly;
    static deserializeBinaryFromReader(message: ReadOnly, reader: jspb.BinaryReader): ReadOnly;
  }

  export namespace ReadOnly {
    export type AsObject = {
    }
  }

  export enum ModeCase {
    MODE_NOT_SET = 0,
    READ_WRITE = 1,
    READ_ONLY = 2,
  }
}

