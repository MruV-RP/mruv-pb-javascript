// package: google.cloud.bigquery.storage.v1beta1
// file: google/cloud/bigquery/storage/v1beta1/storage.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";
import * as google_api_client_pb from "../../../../../google/api/client_pb";
import * as google_api_field_behavior_pb from "../../../../../google/api/field_behavior_pb";
import * as google_api_resource_pb from "../../../../../google/api/resource_pb";
import * as google_cloud_bigquery_storage_v1beta1_arrow_pb from "../../../../../google/cloud/bigquery/storage/v1beta1/arrow_pb";
import * as google_cloud_bigquery_storage_v1beta1_avro_pb from "../../../../../google/cloud/bigquery/storage/v1beta1/avro_pb";
import * as google_cloud_bigquery_storage_v1beta1_read_options_pb from "../../../../../google/cloud/bigquery/storage/v1beta1/read_options_pb";
import * as google_cloud_bigquery_storage_v1beta1_table_reference_pb from "../../../../../google/cloud/bigquery/storage/v1beta1/table_reference_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Stream extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Stream.AsObject;
  static toObject(includeInstance: boolean, msg: Stream): Stream.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Stream, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Stream;
  static deserializeBinaryFromReader(message: Stream, reader: jspb.BinaryReader): Stream;
}

export namespace Stream {
  export type AsObject = {
    name: string,
  }
}

export class StreamPosition extends jspb.Message {
  hasStream(): boolean;
  clearStream(): void;
  getStream(): Stream | undefined;
  setStream(value?: Stream): void;

  getOffset(): number;
  setOffset(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamPosition.AsObject;
  static toObject(includeInstance: boolean, msg: StreamPosition): StreamPosition.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StreamPosition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamPosition;
  static deserializeBinaryFromReader(message: StreamPosition, reader: jspb.BinaryReader): StreamPosition;
}

export namespace StreamPosition {
  export type AsObject = {
    stream?: Stream.AsObject,
    offset: number,
  }
}

export class ReadSession extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasExpireTime(): boolean;
  clearExpireTime(): void;
  getExpireTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpireTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasAvroSchema(): boolean;
  clearAvroSchema(): void;
  getAvroSchema(): google_cloud_bigquery_storage_v1beta1_avro_pb.AvroSchema | undefined;
  setAvroSchema(value?: google_cloud_bigquery_storage_v1beta1_avro_pb.AvroSchema): void;

  hasArrowSchema(): boolean;
  clearArrowSchema(): void;
  getArrowSchema(): google_cloud_bigquery_storage_v1beta1_arrow_pb.ArrowSchema | undefined;
  setArrowSchema(value?: google_cloud_bigquery_storage_v1beta1_arrow_pb.ArrowSchema): void;

  clearStreamsList(): void;
  getStreamsList(): Array<Stream>;
  setStreamsList(value: Array<Stream>): void;
  addStreams(value?: Stream, index?: number): Stream;

  hasTableReference(): boolean;
  clearTableReference(): void;
  getTableReference(): google_cloud_bigquery_storage_v1beta1_table_reference_pb.TableReference | undefined;
  setTableReference(value?: google_cloud_bigquery_storage_v1beta1_table_reference_pb.TableReference): void;

  hasTableModifiers(): boolean;
  clearTableModifiers(): void;
  getTableModifiers(): google_cloud_bigquery_storage_v1beta1_table_reference_pb.TableModifiers | undefined;
  setTableModifiers(value?: google_cloud_bigquery_storage_v1beta1_table_reference_pb.TableModifiers): void;

  getShardingStrategy(): ShardingStrategyMap[keyof ShardingStrategyMap];
  setShardingStrategy(value: ShardingStrategyMap[keyof ShardingStrategyMap]): void;

  getSchemaCase(): ReadSession.SchemaCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReadSession.AsObject;
  static toObject(includeInstance: boolean, msg: ReadSession): ReadSession.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReadSession, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReadSession;
  static deserializeBinaryFromReader(message: ReadSession, reader: jspb.BinaryReader): ReadSession;
}

export namespace ReadSession {
  export type AsObject = {
    name: string,
    expireTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    avroSchema?: google_cloud_bigquery_storage_v1beta1_avro_pb.AvroSchema.AsObject,
    arrowSchema?: google_cloud_bigquery_storage_v1beta1_arrow_pb.ArrowSchema.AsObject,
    streamsList: Array<Stream.AsObject>,
    tableReference?: google_cloud_bigquery_storage_v1beta1_table_reference_pb.TableReference.AsObject,
    tableModifiers?: google_cloud_bigquery_storage_v1beta1_table_reference_pb.TableModifiers.AsObject,
    shardingStrategy: ShardingStrategyMap[keyof ShardingStrategyMap],
  }

  export enum SchemaCase {
    SCHEMA_NOT_SET = 0,
    AVRO_SCHEMA = 5,
    ARROW_SCHEMA = 6,
  }
}

export class CreateReadSessionRequest extends jspb.Message {
  hasTableReference(): boolean;
  clearTableReference(): void;
  getTableReference(): google_cloud_bigquery_storage_v1beta1_table_reference_pb.TableReference | undefined;
  setTableReference(value?: google_cloud_bigquery_storage_v1beta1_table_reference_pb.TableReference): void;

  getParent(): string;
  setParent(value: string): void;

  hasTableModifiers(): boolean;
  clearTableModifiers(): void;
  getTableModifiers(): google_cloud_bigquery_storage_v1beta1_table_reference_pb.TableModifiers | undefined;
  setTableModifiers(value?: google_cloud_bigquery_storage_v1beta1_table_reference_pb.TableModifiers): void;

  getRequestedStreams(): number;
  setRequestedStreams(value: number): void;

  hasReadOptions(): boolean;
  clearReadOptions(): void;
  getReadOptions(): google_cloud_bigquery_storage_v1beta1_read_options_pb.TableReadOptions | undefined;
  setReadOptions(value?: google_cloud_bigquery_storage_v1beta1_read_options_pb.TableReadOptions): void;

  getFormat(): DataFormatMap[keyof DataFormatMap];
  setFormat(value: DataFormatMap[keyof DataFormatMap]): void;

  getShardingStrategy(): ShardingStrategyMap[keyof ShardingStrategyMap];
  setShardingStrategy(value: ShardingStrategyMap[keyof ShardingStrategyMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateReadSessionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateReadSessionRequest): CreateReadSessionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateReadSessionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateReadSessionRequest;
  static deserializeBinaryFromReader(message: CreateReadSessionRequest, reader: jspb.BinaryReader): CreateReadSessionRequest;
}

export namespace CreateReadSessionRequest {
  export type AsObject = {
    tableReference?: google_cloud_bigquery_storage_v1beta1_table_reference_pb.TableReference.AsObject,
    parent: string,
    tableModifiers?: google_cloud_bigquery_storage_v1beta1_table_reference_pb.TableModifiers.AsObject,
    requestedStreams: number,
    readOptions?: google_cloud_bigquery_storage_v1beta1_read_options_pb.TableReadOptions.AsObject,
    format: DataFormatMap[keyof DataFormatMap],
    shardingStrategy: ShardingStrategyMap[keyof ShardingStrategyMap],
  }
}

export class ReadRowsRequest extends jspb.Message {
  hasReadPosition(): boolean;
  clearReadPosition(): void;
  getReadPosition(): StreamPosition | undefined;
  setReadPosition(value?: StreamPosition): void;

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
    readPosition?: StreamPosition.AsObject,
  }
}

export class StreamStatus extends jspb.Message {
  getEstimatedRowCount(): number;
  setEstimatedRowCount(value: number): void;

  getFractionConsumed(): number;
  setFractionConsumed(value: number): void;

  hasProgress(): boolean;
  clearProgress(): void;
  getProgress(): Progress | undefined;
  setProgress(value?: Progress): void;

  getIsSplittable(): boolean;
  setIsSplittable(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamStatus.AsObject;
  static toObject(includeInstance: boolean, msg: StreamStatus): StreamStatus.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StreamStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamStatus;
  static deserializeBinaryFromReader(message: StreamStatus, reader: jspb.BinaryReader): StreamStatus;
}

export namespace StreamStatus {
  export type AsObject = {
    estimatedRowCount: number,
    fractionConsumed: number,
    progress?: Progress.AsObject,
    isSplittable: boolean,
  }
}

export class Progress extends jspb.Message {
  getAtResponseStart(): number;
  setAtResponseStart(value: number): void;

  getAtResponseEnd(): number;
  setAtResponseEnd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Progress.AsObject;
  static toObject(includeInstance: boolean, msg: Progress): Progress.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Progress, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Progress;
  static deserializeBinaryFromReader(message: Progress, reader: jspb.BinaryReader): Progress;
}

export namespace Progress {
  export type AsObject = {
    atResponseStart: number,
    atResponseEnd: number,
  }
}

export class ThrottleStatus extends jspb.Message {
  getThrottlePercent(): number;
  setThrottlePercent(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ThrottleStatus.AsObject;
  static toObject(includeInstance: boolean, msg: ThrottleStatus): ThrottleStatus.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ThrottleStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ThrottleStatus;
  static deserializeBinaryFromReader(message: ThrottleStatus, reader: jspb.BinaryReader): ThrottleStatus;
}

export namespace ThrottleStatus {
  export type AsObject = {
    throttlePercent: number,
  }
}

export class ReadRowsResponse extends jspb.Message {
  hasAvroRows(): boolean;
  clearAvroRows(): void;
  getAvroRows(): google_cloud_bigquery_storage_v1beta1_avro_pb.AvroRows | undefined;
  setAvroRows(value?: google_cloud_bigquery_storage_v1beta1_avro_pb.AvroRows): void;

  hasArrowRecordBatch(): boolean;
  clearArrowRecordBatch(): void;
  getArrowRecordBatch(): google_cloud_bigquery_storage_v1beta1_arrow_pb.ArrowRecordBatch | undefined;
  setArrowRecordBatch(value?: google_cloud_bigquery_storage_v1beta1_arrow_pb.ArrowRecordBatch): void;

  getRowCount(): number;
  setRowCount(value: number): void;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): StreamStatus | undefined;
  setStatus(value?: StreamStatus): void;

  hasThrottleStatus(): boolean;
  clearThrottleStatus(): void;
  getThrottleStatus(): ThrottleStatus | undefined;
  setThrottleStatus(value?: ThrottleStatus): void;

  getRowsCase(): ReadRowsResponse.RowsCase;
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
    avroRows?: google_cloud_bigquery_storage_v1beta1_avro_pb.AvroRows.AsObject,
    arrowRecordBatch?: google_cloud_bigquery_storage_v1beta1_arrow_pb.ArrowRecordBatch.AsObject,
    rowCount: number,
    status?: StreamStatus.AsObject,
    throttleStatus?: ThrottleStatus.AsObject,
  }

  export enum RowsCase {
    ROWS_NOT_SET = 0,
    AVRO_ROWS = 3,
    ARROW_RECORD_BATCH = 4,
  }
}

export class BatchCreateReadSessionStreamsRequest extends jspb.Message {
  hasSession(): boolean;
  clearSession(): void;
  getSession(): ReadSession | undefined;
  setSession(value?: ReadSession): void;

  getRequestedStreams(): number;
  setRequestedStreams(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchCreateReadSessionStreamsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BatchCreateReadSessionStreamsRequest): BatchCreateReadSessionStreamsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BatchCreateReadSessionStreamsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchCreateReadSessionStreamsRequest;
  static deserializeBinaryFromReader(message: BatchCreateReadSessionStreamsRequest, reader: jspb.BinaryReader): BatchCreateReadSessionStreamsRequest;
}

export namespace BatchCreateReadSessionStreamsRequest {
  export type AsObject = {
    session?: ReadSession.AsObject,
    requestedStreams: number,
  }
}

export class BatchCreateReadSessionStreamsResponse extends jspb.Message {
  clearStreamsList(): void;
  getStreamsList(): Array<Stream>;
  setStreamsList(value: Array<Stream>): void;
  addStreams(value?: Stream, index?: number): Stream;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchCreateReadSessionStreamsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BatchCreateReadSessionStreamsResponse): BatchCreateReadSessionStreamsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BatchCreateReadSessionStreamsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchCreateReadSessionStreamsResponse;
  static deserializeBinaryFromReader(message: BatchCreateReadSessionStreamsResponse, reader: jspb.BinaryReader): BatchCreateReadSessionStreamsResponse;
}

export namespace BatchCreateReadSessionStreamsResponse {
  export type AsObject = {
    streamsList: Array<Stream.AsObject>,
  }
}

export class FinalizeStreamRequest extends jspb.Message {
  hasStream(): boolean;
  clearStream(): void;
  getStream(): Stream | undefined;
  setStream(value?: Stream): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FinalizeStreamRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FinalizeStreamRequest): FinalizeStreamRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FinalizeStreamRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FinalizeStreamRequest;
  static deserializeBinaryFromReader(message: FinalizeStreamRequest, reader: jspb.BinaryReader): FinalizeStreamRequest;
}

export namespace FinalizeStreamRequest {
  export type AsObject = {
    stream?: Stream.AsObject,
  }
}

export class SplitReadStreamRequest extends jspb.Message {
  hasOriginalStream(): boolean;
  clearOriginalStream(): void;
  getOriginalStream(): Stream | undefined;
  setOriginalStream(value?: Stream): void;

  getFraction(): number;
  setFraction(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SplitReadStreamRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SplitReadStreamRequest): SplitReadStreamRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SplitReadStreamRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SplitReadStreamRequest;
  static deserializeBinaryFromReader(message: SplitReadStreamRequest, reader: jspb.BinaryReader): SplitReadStreamRequest;
}

export namespace SplitReadStreamRequest {
  export type AsObject = {
    originalStream?: Stream.AsObject,
    fraction: number,
  }
}

export class SplitReadStreamResponse extends jspb.Message {
  hasPrimaryStream(): boolean;
  clearPrimaryStream(): void;
  getPrimaryStream(): Stream | undefined;
  setPrimaryStream(value?: Stream): void;

  hasRemainderStream(): boolean;
  clearRemainderStream(): void;
  getRemainderStream(): Stream | undefined;
  setRemainderStream(value?: Stream): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SplitReadStreamResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SplitReadStreamResponse): SplitReadStreamResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SplitReadStreamResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SplitReadStreamResponse;
  static deserializeBinaryFromReader(message: SplitReadStreamResponse, reader: jspb.BinaryReader): SplitReadStreamResponse;
}

export namespace SplitReadStreamResponse {
  export type AsObject = {
    primaryStream?: Stream.AsObject,
    remainderStream?: Stream.AsObject,
  }
}

export interface DataFormatMap {
  DATA_FORMAT_UNSPECIFIED: 0;
  AVRO: 1;
  ARROW: 3;
}

export const DataFormat: DataFormatMap;

export interface ShardingStrategyMap {
  SHARDING_STRATEGY_UNSPECIFIED: 0;
  LIQUID: 1;
  BALANCED: 2;
}

export const ShardingStrategy: ShardingStrategyMap;

