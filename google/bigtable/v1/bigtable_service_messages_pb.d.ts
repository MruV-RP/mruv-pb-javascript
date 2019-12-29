// package: google.bigtable.v1
// file: google/bigtable/v1/bigtable_service_messages.proto

import * as jspb from "google-protobuf";
import * as google_bigtable_v1_bigtable_data_pb from "../../../google/bigtable/v1/bigtable_data_pb";
import * as google_rpc_status_pb from "../../../google/rpc/status_pb";

export class ReadRowsRequest extends jspb.Message {
  getTableName(): string;
  setTableName(value: string): void;

  hasRowKey(): boolean;
  clearRowKey(): void;
  getRowKey(): Uint8Array | string;
  getRowKey_asU8(): Uint8Array;
  getRowKey_asB64(): string;
  setRowKey(value: Uint8Array | string): void;

  hasRowRange(): boolean;
  clearRowRange(): void;
  getRowRange(): google_bigtable_v1_bigtable_data_pb.RowRange | undefined;
  setRowRange(value?: google_bigtable_v1_bigtable_data_pb.RowRange): void;

  hasRowSet(): boolean;
  clearRowSet(): void;
  getRowSet(): google_bigtable_v1_bigtable_data_pb.RowSet | undefined;
  setRowSet(value?: google_bigtable_v1_bigtable_data_pb.RowSet): void;

  hasFilter(): boolean;
  clearFilter(): void;
  getFilter(): google_bigtable_v1_bigtable_data_pb.RowFilter | undefined;
  setFilter(value?: google_bigtable_v1_bigtable_data_pb.RowFilter): void;

  getAllowRowInterleaving(): boolean;
  setAllowRowInterleaving(value: boolean): void;

  getNumRowsLimit(): number;
  setNumRowsLimit(value: number): void;

  getTargetCase(): ReadRowsRequest.TargetCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReadRowsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReadRowsRequest): ReadRowsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReadRowsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReadRowsRequest;
  static deserializeBinaryFromReader(message: ReadRowsRequest, reader: jspb.BinaryReader): ReadRowsRequest;
}

export namespace ReadRowsRequest {
  export type AsObject = {
    tableName: string,
    rowKey: Uint8Array | string,
    rowRange?: google_bigtable_v1_bigtable_data_pb.RowRange.AsObject,
    rowSet?: google_bigtable_v1_bigtable_data_pb.RowSet.AsObject,
    filter?: google_bigtable_v1_bigtable_data_pb.RowFilter.AsObject,
    allowRowInterleaving: boolean,
    numRowsLimit: number,
  }

  export enum TargetCase {
    TARGET_NOT_SET = 0,
    ROW_KEY = 2,
    ROW_RANGE = 3,
    ROW_SET = 8,
  }
}

export class ReadRowsResponse extends jspb.Message {
  getRowKey(): Uint8Array | string;
  getRowKey_asU8(): Uint8Array;
  getRowKey_asB64(): string;
  setRowKey(value: Uint8Array | string): void;

  clearChunksList(): void;
  getChunksList(): Array<ReadRowsResponse.Chunk>;
  setChunksList(value: Array<ReadRowsResponse.Chunk>): void;
  addChunks(value?: ReadRowsResponse.Chunk, index?: number): ReadRowsResponse.Chunk;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReadRowsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ReadRowsResponse): ReadRowsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReadRowsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReadRowsResponse;
  static deserializeBinaryFromReader(message: ReadRowsResponse, reader: jspb.BinaryReader): ReadRowsResponse;
}

export namespace ReadRowsResponse {
  export type AsObject = {
    rowKey: Uint8Array | string,
    chunksList: Array<ReadRowsResponse.Chunk.AsObject>,
  }

  export class Chunk extends jspb.Message {
    hasRowContents(): boolean;
    clearRowContents(): void;
    getRowContents(): google_bigtable_v1_bigtable_data_pb.Family | undefined;
    setRowContents(value?: google_bigtable_v1_bigtable_data_pb.Family): void;

    hasResetRow(): boolean;
    clearResetRow(): void;
    getResetRow(): boolean;
    setResetRow(value: boolean): void;

    hasCommitRow(): boolean;
    clearCommitRow(): void;
    getCommitRow(): boolean;
    setCommitRow(value: boolean): void;

    getChunkCase(): Chunk.ChunkCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Chunk.AsObject;
    static toObject(includeInstance: boolean, msg: Chunk): Chunk.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Chunk, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Chunk;
    static deserializeBinaryFromReader(message: Chunk, reader: jspb.BinaryReader): Chunk;
  }

  export namespace Chunk {
    export type AsObject = {
      rowContents?: google_bigtable_v1_bigtable_data_pb.Family.AsObject,
      resetRow: boolean,
      commitRow: boolean,
    }

    export enum ChunkCase {
      CHUNK_NOT_SET = 0,
      ROW_CONTENTS = 1,
      RESET_ROW = 2,
      COMMIT_ROW = 3,
    }
  }
}

export class SampleRowKeysRequest extends jspb.Message {
  getTableName(): string;
  setTableName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SampleRowKeysRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SampleRowKeysRequest): SampleRowKeysRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SampleRowKeysRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SampleRowKeysRequest;
  static deserializeBinaryFromReader(message: SampleRowKeysRequest, reader: jspb.BinaryReader): SampleRowKeysRequest;
}

export namespace SampleRowKeysRequest {
  export type AsObject = {
    tableName: string,
  }
}

export class SampleRowKeysResponse extends jspb.Message {
  getRowKey(): Uint8Array | string;
  getRowKey_asU8(): Uint8Array;
  getRowKey_asB64(): string;
  setRowKey(value: Uint8Array | string): void;

  getOffsetBytes(): number;
  setOffsetBytes(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SampleRowKeysResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SampleRowKeysResponse): SampleRowKeysResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SampleRowKeysResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SampleRowKeysResponse;
  static deserializeBinaryFromReader(message: SampleRowKeysResponse, reader: jspb.BinaryReader): SampleRowKeysResponse;
}

export namespace SampleRowKeysResponse {
  export type AsObject = {
    rowKey: Uint8Array | string,
    offsetBytes: number,
  }
}

export class MutateRowRequest extends jspb.Message {
  getTableName(): string;
  setTableName(value: string): void;

  getRowKey(): Uint8Array | string;
  getRowKey_asU8(): Uint8Array;
  getRowKey_asB64(): string;
  setRowKey(value: Uint8Array | string): void;

  clearMutationsList(): void;
  getMutationsList(): Array<google_bigtable_v1_bigtable_data_pb.Mutation>;
  setMutationsList(value: Array<google_bigtable_v1_bigtable_data_pb.Mutation>): void;
  addMutations(value?: google_bigtable_v1_bigtable_data_pb.Mutation, index?: number): google_bigtable_v1_bigtable_data_pb.Mutation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateRowRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MutateRowRequest): MutateRowRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateRowRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateRowRequest;
  static deserializeBinaryFromReader(message: MutateRowRequest, reader: jspb.BinaryReader): MutateRowRequest;
}

export namespace MutateRowRequest {
  export type AsObject = {
    tableName: string,
    rowKey: Uint8Array | string,
    mutationsList: Array<google_bigtable_v1_bigtable_data_pb.Mutation.AsObject>,
  }
}

export class MutateRowsRequest extends jspb.Message {
  getTableName(): string;
  setTableName(value: string): void;

  clearEntriesList(): void;
  getEntriesList(): Array<MutateRowsRequest.Entry>;
  setEntriesList(value: Array<MutateRowsRequest.Entry>): void;
  addEntries(value?: MutateRowsRequest.Entry, index?: number): MutateRowsRequest.Entry;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateRowsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MutateRowsRequest): MutateRowsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateRowsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateRowsRequest;
  static deserializeBinaryFromReader(message: MutateRowsRequest, reader: jspb.BinaryReader): MutateRowsRequest;
}

export namespace MutateRowsRequest {
  export type AsObject = {
    tableName: string,
    entriesList: Array<MutateRowsRequest.Entry.AsObject>,
  }

  export class Entry extends jspb.Message {
    getRowKey(): Uint8Array | string;
    getRowKey_asU8(): Uint8Array;
    getRowKey_asB64(): string;
    setRowKey(value: Uint8Array | string): void;

    clearMutationsList(): void;
    getMutationsList(): Array<google_bigtable_v1_bigtable_data_pb.Mutation>;
    setMutationsList(value: Array<google_bigtable_v1_bigtable_data_pb.Mutation>): void;
    addMutations(value?: google_bigtable_v1_bigtable_data_pb.Mutation, index?: number): google_bigtable_v1_bigtable_data_pb.Mutation;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Entry.AsObject;
    static toObject(includeInstance: boolean, msg: Entry): Entry.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Entry, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Entry;
    static deserializeBinaryFromReader(message: Entry, reader: jspb.BinaryReader): Entry;
  }

  export namespace Entry {
    export type AsObject = {
      rowKey: Uint8Array | string,
      mutationsList: Array<google_bigtable_v1_bigtable_data_pb.Mutation.AsObject>,
    }
  }
}

export class MutateRowsResponse extends jspb.Message {
  clearStatusesList(): void;
  getStatusesList(): Array<google_rpc_status_pb.Status>;
  setStatusesList(value: Array<google_rpc_status_pb.Status>): void;
  addStatuses(value?: google_rpc_status_pb.Status, index?: number): google_rpc_status_pb.Status;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateRowsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MutateRowsResponse): MutateRowsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateRowsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateRowsResponse;
  static deserializeBinaryFromReader(message: MutateRowsResponse, reader: jspb.BinaryReader): MutateRowsResponse;
}

export namespace MutateRowsResponse {
  export type AsObject = {
    statusesList: Array<google_rpc_status_pb.Status.AsObject>,
  }
}

export class CheckAndMutateRowRequest extends jspb.Message {
  getTableName(): string;
  setTableName(value: string): void;

  getRowKey(): Uint8Array | string;
  getRowKey_asU8(): Uint8Array;
  getRowKey_asB64(): string;
  setRowKey(value: Uint8Array | string): void;

  hasPredicateFilter(): boolean;
  clearPredicateFilter(): void;
  getPredicateFilter(): google_bigtable_v1_bigtable_data_pb.RowFilter | undefined;
  setPredicateFilter(value?: google_bigtable_v1_bigtable_data_pb.RowFilter): void;

  clearTrueMutationsList(): void;
  getTrueMutationsList(): Array<google_bigtable_v1_bigtable_data_pb.Mutation>;
  setTrueMutationsList(value: Array<google_bigtable_v1_bigtable_data_pb.Mutation>): void;
  addTrueMutations(value?: google_bigtable_v1_bigtable_data_pb.Mutation, index?: number): google_bigtable_v1_bigtable_data_pb.Mutation;

  clearFalseMutationsList(): void;
  getFalseMutationsList(): Array<google_bigtable_v1_bigtable_data_pb.Mutation>;
  setFalseMutationsList(value: Array<google_bigtable_v1_bigtable_data_pb.Mutation>): void;
  addFalseMutations(value?: google_bigtable_v1_bigtable_data_pb.Mutation, index?: number): google_bigtable_v1_bigtable_data_pb.Mutation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckAndMutateRowRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CheckAndMutateRowRequest): CheckAndMutateRowRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CheckAndMutateRowRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckAndMutateRowRequest;
  static deserializeBinaryFromReader(message: CheckAndMutateRowRequest, reader: jspb.BinaryReader): CheckAndMutateRowRequest;
}

export namespace CheckAndMutateRowRequest {
  export type AsObject = {
    tableName: string,
    rowKey: Uint8Array | string,
    predicateFilter?: google_bigtable_v1_bigtable_data_pb.RowFilter.AsObject,
    trueMutationsList: Array<google_bigtable_v1_bigtable_data_pb.Mutation.AsObject>,
    falseMutationsList: Array<google_bigtable_v1_bigtable_data_pb.Mutation.AsObject>,
  }
}

export class CheckAndMutateRowResponse extends jspb.Message {
  getPredicateMatched(): boolean;
  setPredicateMatched(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckAndMutateRowResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CheckAndMutateRowResponse): CheckAndMutateRowResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CheckAndMutateRowResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckAndMutateRowResponse;
  static deserializeBinaryFromReader(message: CheckAndMutateRowResponse, reader: jspb.BinaryReader): CheckAndMutateRowResponse;
}

export namespace CheckAndMutateRowResponse {
  export type AsObject = {
    predicateMatched: boolean,
  }
}

export class ReadModifyWriteRowRequest extends jspb.Message {
  getTableName(): string;
  setTableName(value: string): void;

  getRowKey(): Uint8Array | string;
  getRowKey_asU8(): Uint8Array;
  getRowKey_asB64(): string;
  setRowKey(value: Uint8Array | string): void;

  clearRulesList(): void;
  getRulesList(): Array<google_bigtable_v1_bigtable_data_pb.ReadModifyWriteRule>;
  setRulesList(value: Array<google_bigtable_v1_bigtable_data_pb.ReadModifyWriteRule>): void;
  addRules(value?: google_bigtable_v1_bigtable_data_pb.ReadModifyWriteRule, index?: number): google_bigtable_v1_bigtable_data_pb.ReadModifyWriteRule;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReadModifyWriteRowRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReadModifyWriteRowRequest): ReadModifyWriteRowRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReadModifyWriteRowRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReadModifyWriteRowRequest;
  static deserializeBinaryFromReader(message: ReadModifyWriteRowRequest, reader: jspb.BinaryReader): ReadModifyWriteRowRequest;
}

export namespace ReadModifyWriteRowRequest {
  export type AsObject = {
    tableName: string,
    rowKey: Uint8Array | string,
    rulesList: Array<google_bigtable_v1_bigtable_data_pb.ReadModifyWriteRule.AsObject>,
  }
}

