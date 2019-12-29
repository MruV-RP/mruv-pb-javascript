// package: google.spanner.v1
// file: google/spanner/v1/result_set.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as google_spanner_v1_query_plan_pb from "../../../google/spanner/v1/query_plan_pb";
import * as google_spanner_v1_transaction_pb from "../../../google/spanner/v1/transaction_pb";
import * as google_spanner_v1_type_pb from "../../../google/spanner/v1/type_pb";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";

export class ResultSet extends jspb.Message {
  hasMetadata(): boolean;
  clearMetadata(): void;
  getMetadata(): ResultSetMetadata | undefined;
  setMetadata(value?: ResultSetMetadata): void;

  clearRowsList(): void;
  getRowsList(): Array<google_protobuf_struct_pb.ListValue>;
  setRowsList(value: Array<google_protobuf_struct_pb.ListValue>): void;
  addRows(value?: google_protobuf_struct_pb.ListValue, index?: number): google_protobuf_struct_pb.ListValue;

  hasStats(): boolean;
  clearStats(): void;
  getStats(): ResultSetStats | undefined;
  setStats(value?: ResultSetStats): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResultSet.AsObject;
  static toObject(includeInstance: boolean, msg: ResultSet): ResultSet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResultSet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResultSet;
  static deserializeBinaryFromReader(message: ResultSet, reader: jspb.BinaryReader): ResultSet;
}

export namespace ResultSet {
  export type AsObject = {
    metadata?: ResultSetMetadata.AsObject,
    rowsList: Array<google_protobuf_struct_pb.ListValue.AsObject>,
    stats?: ResultSetStats.AsObject,
  }
}

export class PartialResultSet extends jspb.Message {
  hasMetadata(): boolean;
  clearMetadata(): void;
  getMetadata(): ResultSetMetadata | undefined;
  setMetadata(value?: ResultSetMetadata): void;

  clearValuesList(): void;
  getValuesList(): Array<google_protobuf_struct_pb.Value>;
  setValuesList(value: Array<google_protobuf_struct_pb.Value>): void;
  addValues(value?: google_protobuf_struct_pb.Value, index?: number): google_protobuf_struct_pb.Value;

  getChunkedValue(): boolean;
  setChunkedValue(value: boolean): void;

  getResumeToken(): Uint8Array | string;
  getResumeToken_asU8(): Uint8Array;
  getResumeToken_asB64(): string;
  setResumeToken(value: Uint8Array | string): void;

  hasStats(): boolean;
  clearStats(): void;
  getStats(): ResultSetStats | undefined;
  setStats(value?: ResultSetStats): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PartialResultSet.AsObject;
  static toObject(includeInstance: boolean, msg: PartialResultSet): PartialResultSet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PartialResultSet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PartialResultSet;
  static deserializeBinaryFromReader(message: PartialResultSet, reader: jspb.BinaryReader): PartialResultSet;
}

export namespace PartialResultSet {
  export type AsObject = {
    metadata?: ResultSetMetadata.AsObject,
    valuesList: Array<google_protobuf_struct_pb.Value.AsObject>,
    chunkedValue: boolean,
    resumeToken: Uint8Array | string,
    stats?: ResultSetStats.AsObject,
  }
}

export class ResultSetMetadata extends jspb.Message {
  hasRowType(): boolean;
  clearRowType(): void;
  getRowType(): google_spanner_v1_type_pb.StructType | undefined;
  setRowType(value?: google_spanner_v1_type_pb.StructType): void;

  hasTransaction(): boolean;
  clearTransaction(): void;
  getTransaction(): google_spanner_v1_transaction_pb.Transaction | undefined;
  setTransaction(value?: google_spanner_v1_transaction_pb.Transaction): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResultSetMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: ResultSetMetadata): ResultSetMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResultSetMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResultSetMetadata;
  static deserializeBinaryFromReader(message: ResultSetMetadata, reader: jspb.BinaryReader): ResultSetMetadata;
}

export namespace ResultSetMetadata {
  export type AsObject = {
    rowType?: google_spanner_v1_type_pb.StructType.AsObject,
    transaction?: google_spanner_v1_transaction_pb.Transaction.AsObject,
  }
}

export class ResultSetStats extends jspb.Message {
  hasQueryPlan(): boolean;
  clearQueryPlan(): void;
  getQueryPlan(): google_spanner_v1_query_plan_pb.QueryPlan | undefined;
  setQueryPlan(value?: google_spanner_v1_query_plan_pb.QueryPlan): void;

  hasQueryStats(): boolean;
  clearQueryStats(): void;
  getQueryStats(): google_protobuf_struct_pb.Struct | undefined;
  setQueryStats(value?: google_protobuf_struct_pb.Struct): void;

  hasRowCountExact(): boolean;
  clearRowCountExact(): void;
  getRowCountExact(): number;
  setRowCountExact(value: number): void;

  hasRowCountLowerBound(): boolean;
  clearRowCountLowerBound(): void;
  getRowCountLowerBound(): number;
  setRowCountLowerBound(value: number): void;

  getRowCountCase(): ResultSetStats.RowCountCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResultSetStats.AsObject;
  static toObject(includeInstance: boolean, msg: ResultSetStats): ResultSetStats.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResultSetStats, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResultSetStats;
  static deserializeBinaryFromReader(message: ResultSetStats, reader: jspb.BinaryReader): ResultSetStats;
}

export namespace ResultSetStats {
  export type AsObject = {
    queryPlan?: google_spanner_v1_query_plan_pb.QueryPlan.AsObject,
    queryStats?: google_protobuf_struct_pb.Struct.AsObject,
    rowCountExact: number,
    rowCountLowerBound: number,
  }

  export enum RowCountCase {
    ROW_COUNT_NOT_SET = 0,
    ROW_COUNT_EXACT = 3,
    ROW_COUNT_LOWER_BOUND = 4,
  }
}

