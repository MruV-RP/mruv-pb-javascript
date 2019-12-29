// package: google.monitoring.v3
// file: google/monitoring/v3/metric_service.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as google_api_metric_pb from "../../../google/api/metric_pb";
import * as google_api_monitored_resource_pb from "../../../google/api/monitored_resource_pb";
import * as google_monitoring_v3_alert_pb from "../../../google/monitoring/v3/alert_pb";
import * as google_monitoring_v3_common_pb from "../../../google/monitoring/v3/common_pb";
import * as google_monitoring_v3_metric_pb from "../../../google/monitoring/v3/metric_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_rpc_status_pb from "../../../google/rpc/status_pb";
import * as google_api_client_pb from "../../../google/api/client_pb";

export class ListMonitoredResourceDescriptorsRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getFilter(): string;
  setFilter(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListMonitoredResourceDescriptorsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListMonitoredResourceDescriptorsRequest): ListMonitoredResourceDescriptorsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListMonitoredResourceDescriptorsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListMonitoredResourceDescriptorsRequest;
  static deserializeBinaryFromReader(message: ListMonitoredResourceDescriptorsRequest, reader: jspb.BinaryReader): ListMonitoredResourceDescriptorsRequest;
}

export namespace ListMonitoredResourceDescriptorsRequest {
  export type AsObject = {
    name: string,
    filter: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListMonitoredResourceDescriptorsResponse extends jspb.Message {
  clearResourceDescriptorsList(): void;
  getResourceDescriptorsList(): Array<google_api_monitored_resource_pb.MonitoredResourceDescriptor>;
  setResourceDescriptorsList(value: Array<google_api_monitored_resource_pb.MonitoredResourceDescriptor>): void;
  addResourceDescriptors(value?: google_api_monitored_resource_pb.MonitoredResourceDescriptor, index?: number): google_api_monitored_resource_pb.MonitoredResourceDescriptor;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListMonitoredResourceDescriptorsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListMonitoredResourceDescriptorsResponse): ListMonitoredResourceDescriptorsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListMonitoredResourceDescriptorsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListMonitoredResourceDescriptorsResponse;
  static deserializeBinaryFromReader(message: ListMonitoredResourceDescriptorsResponse, reader: jspb.BinaryReader): ListMonitoredResourceDescriptorsResponse;
}

export namespace ListMonitoredResourceDescriptorsResponse {
  export type AsObject = {
    resourceDescriptorsList: Array<google_api_monitored_resource_pb.MonitoredResourceDescriptor.AsObject>,
    nextPageToken: string,
  }
}

export class GetMonitoredResourceDescriptorRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMonitoredResourceDescriptorRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetMonitoredResourceDescriptorRequest): GetMonitoredResourceDescriptorRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMonitoredResourceDescriptorRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMonitoredResourceDescriptorRequest;
  static deserializeBinaryFromReader(message: GetMonitoredResourceDescriptorRequest, reader: jspb.BinaryReader): GetMonitoredResourceDescriptorRequest;
}

export namespace GetMonitoredResourceDescriptorRequest {
  export type AsObject = {
    name: string,
  }
}

export class ListMetricDescriptorsRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getFilter(): string;
  setFilter(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListMetricDescriptorsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListMetricDescriptorsRequest): ListMetricDescriptorsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListMetricDescriptorsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListMetricDescriptorsRequest;
  static deserializeBinaryFromReader(message: ListMetricDescriptorsRequest, reader: jspb.BinaryReader): ListMetricDescriptorsRequest;
}

export namespace ListMetricDescriptorsRequest {
  export type AsObject = {
    name: string,
    filter: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListMetricDescriptorsResponse extends jspb.Message {
  clearMetricDescriptorsList(): void;
  getMetricDescriptorsList(): Array<google_api_metric_pb.MetricDescriptor>;
  setMetricDescriptorsList(value: Array<google_api_metric_pb.MetricDescriptor>): void;
  addMetricDescriptors(value?: google_api_metric_pb.MetricDescriptor, index?: number): google_api_metric_pb.MetricDescriptor;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListMetricDescriptorsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListMetricDescriptorsResponse): ListMetricDescriptorsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListMetricDescriptorsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListMetricDescriptorsResponse;
  static deserializeBinaryFromReader(message: ListMetricDescriptorsResponse, reader: jspb.BinaryReader): ListMetricDescriptorsResponse;
}

export namespace ListMetricDescriptorsResponse {
  export type AsObject = {
    metricDescriptorsList: Array<google_api_metric_pb.MetricDescriptor.AsObject>,
    nextPageToken: string,
  }
}

export class GetMetricDescriptorRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMetricDescriptorRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetMetricDescriptorRequest): GetMetricDescriptorRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMetricDescriptorRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMetricDescriptorRequest;
  static deserializeBinaryFromReader(message: GetMetricDescriptorRequest, reader: jspb.BinaryReader): GetMetricDescriptorRequest;
}

export namespace GetMetricDescriptorRequest {
  export type AsObject = {
    name: string,
  }
}

export class CreateMetricDescriptorRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasMetricDescriptor(): boolean;
  clearMetricDescriptor(): void;
  getMetricDescriptor(): google_api_metric_pb.MetricDescriptor | undefined;
  setMetricDescriptor(value?: google_api_metric_pb.MetricDescriptor): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateMetricDescriptorRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateMetricDescriptorRequest): CreateMetricDescriptorRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateMetricDescriptorRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateMetricDescriptorRequest;
  static deserializeBinaryFromReader(message: CreateMetricDescriptorRequest, reader: jspb.BinaryReader): CreateMetricDescriptorRequest;
}

export namespace CreateMetricDescriptorRequest {
  export type AsObject = {
    name: string,
    metricDescriptor?: google_api_metric_pb.MetricDescriptor.AsObject,
  }
}

export class DeleteMetricDescriptorRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteMetricDescriptorRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteMetricDescriptorRequest): DeleteMetricDescriptorRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteMetricDescriptorRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteMetricDescriptorRequest;
  static deserializeBinaryFromReader(message: DeleteMetricDescriptorRequest, reader: jspb.BinaryReader): DeleteMetricDescriptorRequest;
}

export namespace DeleteMetricDescriptorRequest {
  export type AsObject = {
    name: string,
  }
}

export class ListTimeSeriesRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getFilter(): string;
  setFilter(value: string): void;

  hasInterval(): boolean;
  clearInterval(): void;
  getInterval(): google_monitoring_v3_common_pb.TimeInterval | undefined;
  setInterval(value?: google_monitoring_v3_common_pb.TimeInterval): void;

  hasAggregation(): boolean;
  clearAggregation(): void;
  getAggregation(): google_monitoring_v3_common_pb.Aggregation | undefined;
  setAggregation(value?: google_monitoring_v3_common_pb.Aggregation): void;

  getOrderBy(): string;
  setOrderBy(value: string): void;

  getView(): ListTimeSeriesRequest.TimeSeriesViewMap[keyof ListTimeSeriesRequest.TimeSeriesViewMap];
  setView(value: ListTimeSeriesRequest.TimeSeriesViewMap[keyof ListTimeSeriesRequest.TimeSeriesViewMap]): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTimeSeriesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListTimeSeriesRequest): ListTimeSeriesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListTimeSeriesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTimeSeriesRequest;
  static deserializeBinaryFromReader(message: ListTimeSeriesRequest, reader: jspb.BinaryReader): ListTimeSeriesRequest;
}

export namespace ListTimeSeriesRequest {
  export type AsObject = {
    name: string,
    filter: string,
    interval?: google_monitoring_v3_common_pb.TimeInterval.AsObject,
    aggregation?: google_monitoring_v3_common_pb.Aggregation.AsObject,
    orderBy: string,
    view: ListTimeSeriesRequest.TimeSeriesViewMap[keyof ListTimeSeriesRequest.TimeSeriesViewMap],
    pageSize: number,
    pageToken: string,
  }

  export interface TimeSeriesViewMap {
    FULL: 0;
    HEADERS: 1;
  }

  export const TimeSeriesView: TimeSeriesViewMap;
}

export class ListTimeSeriesResponse extends jspb.Message {
  clearTimeSeriesList(): void;
  getTimeSeriesList(): Array<google_monitoring_v3_metric_pb.TimeSeries>;
  setTimeSeriesList(value: Array<google_monitoring_v3_metric_pb.TimeSeries>): void;
  addTimeSeries(value?: google_monitoring_v3_metric_pb.TimeSeries, index?: number): google_monitoring_v3_metric_pb.TimeSeries;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  clearExecutionErrorsList(): void;
  getExecutionErrorsList(): Array<google_rpc_status_pb.Status>;
  setExecutionErrorsList(value: Array<google_rpc_status_pb.Status>): void;
  addExecutionErrors(value?: google_rpc_status_pb.Status, index?: number): google_rpc_status_pb.Status;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTimeSeriesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListTimeSeriesResponse): ListTimeSeriesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListTimeSeriesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTimeSeriesResponse;
  static deserializeBinaryFromReader(message: ListTimeSeriesResponse, reader: jspb.BinaryReader): ListTimeSeriesResponse;
}

export namespace ListTimeSeriesResponse {
  export type AsObject = {
    timeSeriesList: Array<google_monitoring_v3_metric_pb.TimeSeries.AsObject>,
    nextPageToken: string,
    executionErrorsList: Array<google_rpc_status_pb.Status.AsObject>,
  }
}

export class CreateTimeSeriesRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  clearTimeSeriesList(): void;
  getTimeSeriesList(): Array<google_monitoring_v3_metric_pb.TimeSeries>;
  setTimeSeriesList(value: Array<google_monitoring_v3_metric_pb.TimeSeries>): void;
  addTimeSeries(value?: google_monitoring_v3_metric_pb.TimeSeries, index?: number): google_monitoring_v3_metric_pb.TimeSeries;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTimeSeriesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTimeSeriesRequest): CreateTimeSeriesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateTimeSeriesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTimeSeriesRequest;
  static deserializeBinaryFromReader(message: CreateTimeSeriesRequest, reader: jspb.BinaryReader): CreateTimeSeriesRequest;
}

export namespace CreateTimeSeriesRequest {
  export type AsObject = {
    name: string,
    timeSeriesList: Array<google_monitoring_v3_metric_pb.TimeSeries.AsObject>,
  }
}

export class CreateTimeSeriesError extends jspb.Message {
  hasTimeSeries(): boolean;
  clearTimeSeries(): void;
  getTimeSeries(): google_monitoring_v3_metric_pb.TimeSeries | undefined;
  setTimeSeries(value?: google_monitoring_v3_metric_pb.TimeSeries): void;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): google_rpc_status_pb.Status | undefined;
  setStatus(value?: google_rpc_status_pb.Status): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTimeSeriesError.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTimeSeriesError): CreateTimeSeriesError.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateTimeSeriesError, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTimeSeriesError;
  static deserializeBinaryFromReader(message: CreateTimeSeriesError, reader: jspb.BinaryReader): CreateTimeSeriesError;
}

export namespace CreateTimeSeriesError {
  export type AsObject = {
    timeSeries?: google_monitoring_v3_metric_pb.TimeSeries.AsObject,
    status?: google_rpc_status_pb.Status.AsObject,
  }
}

export class CreateTimeSeriesSummary extends jspb.Message {
  getTotalPointCount(): number;
  setTotalPointCount(value: number): void;

  getSuccessPointCount(): number;
  setSuccessPointCount(value: number): void;

  clearErrorsList(): void;
  getErrorsList(): Array<CreateTimeSeriesSummary.Error>;
  setErrorsList(value: Array<CreateTimeSeriesSummary.Error>): void;
  addErrors(value?: CreateTimeSeriesSummary.Error, index?: number): CreateTimeSeriesSummary.Error;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTimeSeriesSummary.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTimeSeriesSummary): CreateTimeSeriesSummary.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateTimeSeriesSummary, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTimeSeriesSummary;
  static deserializeBinaryFromReader(message: CreateTimeSeriesSummary, reader: jspb.BinaryReader): CreateTimeSeriesSummary;
}

export namespace CreateTimeSeriesSummary {
  export type AsObject = {
    totalPointCount: number,
    successPointCount: number,
    errorsList: Array<CreateTimeSeriesSummary.Error.AsObject>,
  }

  export class Error extends jspb.Message {
    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): google_rpc_status_pb.Status | undefined;
    setStatus(value?: google_rpc_status_pb.Status): void;

    getPointCount(): number;
    setPointCount(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Error.AsObject;
    static toObject(includeInstance: boolean, msg: Error): Error.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Error, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Error;
    static deserializeBinaryFromReader(message: Error, reader: jspb.BinaryReader): Error;
  }

  export namespace Error {
    export type AsObject = {
      status?: google_rpc_status_pb.Status.AsObject,
      pointCount: number,
    }
  }
}

