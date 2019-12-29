// package: google.spanner.v1
// file: google/spanner/v1/transaction.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";

export class TransactionOptions extends jspb.Message {
  hasReadWrite(): boolean;
  clearReadWrite(): void;
  getReadWrite(): TransactionOptions.ReadWrite | undefined;
  setReadWrite(value?: TransactionOptions.ReadWrite): void;

  hasPartitionedDml(): boolean;
  clearPartitionedDml(): void;
  getPartitionedDml(): TransactionOptions.PartitionedDml | undefined;
  setPartitionedDml(value?: TransactionOptions.PartitionedDml): void;

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
    partitionedDml?: TransactionOptions.PartitionedDml.AsObject,
    readOnly?: TransactionOptions.ReadOnly.AsObject,
  }

  export class ReadWrite extends jspb.Message {
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
    }
  }

  export class PartitionedDml extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PartitionedDml.AsObject;
    static toObject(includeInstance: boolean, msg: PartitionedDml): PartitionedDml.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PartitionedDml, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PartitionedDml;
    static deserializeBinaryFromReader(message: PartitionedDml, reader: jspb.BinaryReader): PartitionedDml;
  }

  export namespace PartitionedDml {
    export type AsObject = {
    }
  }

  export class ReadOnly extends jspb.Message {
    hasStrong(): boolean;
    clearStrong(): void;
    getStrong(): boolean;
    setStrong(value: boolean): void;

    hasMinReadTimestamp(): boolean;
    clearMinReadTimestamp(): void;
    getMinReadTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setMinReadTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

    hasMaxStaleness(): boolean;
    clearMaxStaleness(): void;
    getMaxStaleness(): google_protobuf_duration_pb.Duration | undefined;
    setMaxStaleness(value?: google_protobuf_duration_pb.Duration): void;

    hasReadTimestamp(): boolean;
    clearReadTimestamp(): void;
    getReadTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setReadTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

    hasExactStaleness(): boolean;
    clearExactStaleness(): void;
    getExactStaleness(): google_protobuf_duration_pb.Duration | undefined;
    setExactStaleness(value?: google_protobuf_duration_pb.Duration): void;

    getReturnReadTimestamp(): boolean;
    setReturnReadTimestamp(value: boolean): void;

    getTimestampBoundCase(): ReadOnly.TimestampBoundCase;
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
      strong: boolean,
      minReadTimestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      maxStaleness?: google_protobuf_duration_pb.Duration.AsObject,
      readTimestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      exactStaleness?: google_protobuf_duration_pb.Duration.AsObject,
      returnReadTimestamp: boolean,
    }

    export enum TimestampBoundCase {
      TIMESTAMP_BOUND_NOT_SET = 0,
      STRONG = 1,
      MIN_READ_TIMESTAMP = 2,
      MAX_STALENESS = 3,
      READ_TIMESTAMP = 4,
      EXACT_STALENESS = 5,
    }
  }

  export enum ModeCase {
    MODE_NOT_SET = 0,
    READ_WRITE = 1,
    PARTITIONED_DML = 3,
    READ_ONLY = 2,
  }
}

export class Transaction extends jspb.Message {
  getId(): Uint8Array | string;
  getId_asU8(): Uint8Array;
  getId_asB64(): string;
  setId(value: Uint8Array | string): void;

  hasReadTimestamp(): boolean;
  clearReadTimestamp(): void;
  getReadTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setReadTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Transaction.AsObject;
  static toObject(includeInstance: boolean, msg: Transaction): Transaction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Transaction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Transaction;
  static deserializeBinaryFromReader(message: Transaction, reader: jspb.BinaryReader): Transaction;
}

export namespace Transaction {
  export type AsObject = {
    id: Uint8Array | string,
    readTimestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class TransactionSelector extends jspb.Message {
  hasSingleUse(): boolean;
  clearSingleUse(): void;
  getSingleUse(): TransactionOptions | undefined;
  setSingleUse(value?: TransactionOptions): void;

  hasId(): boolean;
  clearId(): void;
  getId(): Uint8Array | string;
  getId_asU8(): Uint8Array;
  getId_asB64(): string;
  setId(value: Uint8Array | string): void;

  hasBegin(): boolean;
  clearBegin(): void;
  getBegin(): TransactionOptions | undefined;
  setBegin(value?: TransactionOptions): void;

  getSelectorCase(): TransactionSelector.SelectorCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransactionSelector.AsObject;
  static toObject(includeInstance: boolean, msg: TransactionSelector): TransactionSelector.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransactionSelector, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransactionSelector;
  static deserializeBinaryFromReader(message: TransactionSelector, reader: jspb.BinaryReader): TransactionSelector;
}

export namespace TransactionSelector {
  export type AsObject = {
    singleUse?: TransactionOptions.AsObject,
    id: Uint8Array | string,
    begin?: TransactionOptions.AsObject,
  }

  export enum SelectorCase {
    SELECTOR_NOT_SET = 0,
    SINGLE_USE = 1,
    ID = 2,
    BEGIN = 3,
  }
}

