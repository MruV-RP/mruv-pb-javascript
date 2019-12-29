// package: google.logging.v2
// file: google/logging/v2/logging_metrics.proto

import * as jspb from "google-protobuf";
import * as google_api_distribution_pb from "../../../google/api/distribution_pb";
import * as google_api_metric_pb from "../../../google/api/metric_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as google_api_client_pb from "../../../google/api/client_pb";

export class LogMetric extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getFilter(): string;
  setFilter(value: string): void;

  hasMetricDescriptor(): boolean;
  clearMetricDescriptor(): void;
  getMetricDescriptor(): google_api_metric_pb.MetricDescriptor | undefined;
  setMetricDescriptor(value?: google_api_metric_pb.MetricDescriptor): void;

  getValueExtractor(): string;
  setValueExtractor(value: string): void;

  getLabelExtractorsMap(): jspb.Map<string, string>;
  clearLabelExtractorsMap(): void;
  hasBucketOptions(): boolean;
  clearBucketOptions(): void;
  getBucketOptions(): google_api_distribution_pb.Distribution.BucketOptions | undefined;
  setBucketOptions(value?: google_api_distribution_pb.Distribution.BucketOptions): void;

  hasCreateTime(): boolean;
  clearCreateTime(): void;
  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdateTime(): boolean;
  clearUpdateTime(): void;
  getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getVersion(): LogMetric.ApiVersionMap[keyof LogMetric.ApiVersionMap];
  setVersion(value: LogMetric.ApiVersionMap[keyof LogMetric.ApiVersionMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LogMetric.AsObject;
  static toObject(includeInstance: boolean, msg: LogMetric): LogMetric.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LogMetric, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LogMetric;
  static deserializeBinaryFromReader(message: LogMetric, reader: jspb.BinaryReader): LogMetric;
}

export namespace LogMetric {
  export type AsObject = {
    name: string,
    description: string,
    filter: string,
    metricDescriptor?: google_api_metric_pb.MetricDescriptor.AsObject,
    valueExtractor: string,
    labelExtractorsMap: Array<[string, string]>,
    bucketOptions?: google_api_distribution_pb.Distribution.BucketOptions.AsObject,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    version: LogMetric.ApiVersionMap[keyof LogMetric.ApiVersionMap],
  }

  export interface ApiVersionMap {
    V2: 0;
    V1: 1;
  }

  export const ApiVersion: ApiVersionMap;
}

export class ListLogMetricsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListLogMetricsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListLogMetricsRequest): ListLogMetricsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListLogMetricsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListLogMetricsRequest;
  static deserializeBinaryFromReader(message: ListLogMetricsRequest, reader: jspb.BinaryReader): ListLogMetricsRequest;
}

export namespace ListLogMetricsRequest {
  export type AsObject = {
    parent: string,
    pageToken: string,
    pageSize: number,
  }
}

export class ListLogMetricsResponse extends jspb.Message {
  clearMetricsList(): void;
  getMetricsList(): Array<LogMetric>;
  setMetricsList(value: Array<LogMetric>): void;
  addMetrics(value?: LogMetric, index?: number): LogMetric;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListLogMetricsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListLogMetricsResponse): ListLogMetricsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListLogMetricsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListLogMetricsResponse;
  static deserializeBinaryFromReader(message: ListLogMetricsResponse, reader: jspb.BinaryReader): ListLogMetricsResponse;
}

export namespace ListLogMetricsResponse {
  export type AsObject = {
    metricsList: Array<LogMetric.AsObject>,
    nextPageToken: string,
  }
}

export class GetLogMetricRequest extends jspb.Message {
  getMetricName(): string;
  setMetricName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLogMetricRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetLogMetricRequest): GetLogMetricRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetLogMetricRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLogMetricRequest;
  static deserializeBinaryFromReader(message: GetLogMetricRequest, reader: jspb.BinaryReader): GetLogMetricRequest;
}

export namespace GetLogMetricRequest {
  export type AsObject = {
    metricName: string,
  }
}

export class CreateLogMetricRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  hasMetric(): boolean;
  clearMetric(): void;
  getMetric(): LogMetric | undefined;
  setMetric(value?: LogMetric): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateLogMetricRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateLogMetricRequest): CreateLogMetricRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateLogMetricRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateLogMetricRequest;
  static deserializeBinaryFromReader(message: CreateLogMetricRequest, reader: jspb.BinaryReader): CreateLogMetricRequest;
}

export namespace CreateLogMetricRequest {
  export type AsObject = {
    parent: string,
    metric?: LogMetric.AsObject,
  }
}

export class UpdateLogMetricRequest extends jspb.Message {
  getMetricName(): string;
  setMetricName(value: string): void;

  hasMetric(): boolean;
  clearMetric(): void;
  getMetric(): LogMetric | undefined;
  setMetric(value?: LogMetric): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateLogMetricRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateLogMetricRequest): UpdateLogMetricRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateLogMetricRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateLogMetricRequest;
  static deserializeBinaryFromReader(message: UpdateLogMetricRequest, reader: jspb.BinaryReader): UpdateLogMetricRequest;
}

export namespace UpdateLogMetricRequest {
  export type AsObject = {
    metricName: string,
    metric?: LogMetric.AsObject,
  }
}

export class DeleteLogMetricRequest extends jspb.Message {
  getMetricName(): string;
  setMetricName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteLogMetricRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteLogMetricRequest): DeleteLogMetricRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteLogMetricRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteLogMetricRequest;
  static deserializeBinaryFromReader(message: DeleteLogMetricRequest, reader: jspb.BinaryReader): DeleteLogMetricRequest;
}

export namespace DeleteLogMetricRequest {
  export type AsObject = {
    metricName: string,
  }
}

