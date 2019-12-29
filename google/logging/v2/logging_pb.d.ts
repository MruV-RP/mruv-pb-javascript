// package: google.logging.v2
// file: google/logging/v2/logging.proto

import * as jspb from "google-protobuf";
import * as google_api_monitored_resource_pb from "../../../google/api/monitored_resource_pb";
import * as google_logging_v2_log_entry_pb from "../../../google/logging/v2/log_entry_pb";
import * as google_logging_v2_logging_config_pb from "../../../google/logging/v2/logging_config_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_rpc_status_pb from "../../../google/rpc/status_pb";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as google_api_client_pb from "../../../google/api/client_pb";

export class DeleteLogRequest extends jspb.Message {
  getLogName(): string;
  setLogName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteLogRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteLogRequest): DeleteLogRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteLogRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteLogRequest;
  static deserializeBinaryFromReader(message: DeleteLogRequest, reader: jspb.BinaryReader): DeleteLogRequest;
}

export namespace DeleteLogRequest {
  export type AsObject = {
    logName: string,
  }
}

export class WriteLogEntriesRequest extends jspb.Message {
  getLogName(): string;
  setLogName(value: string): void;

  hasResource(): boolean;
  clearResource(): void;
  getResource(): google_api_monitored_resource_pb.MonitoredResource | undefined;
  setResource(value?: google_api_monitored_resource_pb.MonitoredResource): void;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): void;
  clearEntriesList(): void;
  getEntriesList(): Array<google_logging_v2_log_entry_pb.LogEntry>;
  setEntriesList(value: Array<google_logging_v2_log_entry_pb.LogEntry>): void;
  addEntries(value?: google_logging_v2_log_entry_pb.LogEntry, index?: number): google_logging_v2_log_entry_pb.LogEntry;

  getPartialSuccess(): boolean;
  setPartialSuccess(value: boolean): void;

  getDryRun(): boolean;
  setDryRun(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WriteLogEntriesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WriteLogEntriesRequest): WriteLogEntriesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WriteLogEntriesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WriteLogEntriesRequest;
  static deserializeBinaryFromReader(message: WriteLogEntriesRequest, reader: jspb.BinaryReader): WriteLogEntriesRequest;
}

export namespace WriteLogEntriesRequest {
  export type AsObject = {
    logName: string,
    resource?: google_api_monitored_resource_pb.MonitoredResource.AsObject,
    labelsMap: Array<[string, string]>,
    entriesList: Array<google_logging_v2_log_entry_pb.LogEntry.AsObject>,
    partialSuccess: boolean,
    dryRun: boolean,
  }
}

export class WriteLogEntriesResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WriteLogEntriesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WriteLogEntriesResponse): WriteLogEntriesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WriteLogEntriesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WriteLogEntriesResponse;
  static deserializeBinaryFromReader(message: WriteLogEntriesResponse, reader: jspb.BinaryReader): WriteLogEntriesResponse;
}

export namespace WriteLogEntriesResponse {
  export type AsObject = {
  }
}

export class WriteLogEntriesPartialErrors extends jspb.Message {
  getLogEntryErrorsMap(): jspb.Map<number, google_rpc_status_pb.Status>;
  clearLogEntryErrorsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WriteLogEntriesPartialErrors.AsObject;
  static toObject(includeInstance: boolean, msg: WriteLogEntriesPartialErrors): WriteLogEntriesPartialErrors.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WriteLogEntriesPartialErrors, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WriteLogEntriesPartialErrors;
  static deserializeBinaryFromReader(message: WriteLogEntriesPartialErrors, reader: jspb.BinaryReader): WriteLogEntriesPartialErrors;
}

export namespace WriteLogEntriesPartialErrors {
  export type AsObject = {
    logEntryErrorsMap: Array<[number, google_rpc_status_pb.Status.AsObject]>,
  }
}

export class ListLogEntriesRequest extends jspb.Message {
  clearProjectIdsList(): void;
  getProjectIdsList(): Array<string>;
  setProjectIdsList(value: Array<string>): void;
  addProjectIds(value: string, index?: number): string;

  clearResourceNamesList(): void;
  getResourceNamesList(): Array<string>;
  setResourceNamesList(value: Array<string>): void;
  addResourceNames(value: string, index?: number): string;

  getFilter(): string;
  setFilter(value: string): void;

  getOrderBy(): string;
  setOrderBy(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListLogEntriesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListLogEntriesRequest): ListLogEntriesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListLogEntriesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListLogEntriesRequest;
  static deserializeBinaryFromReader(message: ListLogEntriesRequest, reader: jspb.BinaryReader): ListLogEntriesRequest;
}

export namespace ListLogEntriesRequest {
  export type AsObject = {
    projectIdsList: Array<string>,
    resourceNamesList: Array<string>,
    filter: string,
    orderBy: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListLogEntriesResponse extends jspb.Message {
  clearEntriesList(): void;
  getEntriesList(): Array<google_logging_v2_log_entry_pb.LogEntry>;
  setEntriesList(value: Array<google_logging_v2_log_entry_pb.LogEntry>): void;
  addEntries(value?: google_logging_v2_log_entry_pb.LogEntry, index?: number): google_logging_v2_log_entry_pb.LogEntry;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListLogEntriesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListLogEntriesResponse): ListLogEntriesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListLogEntriesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListLogEntriesResponse;
  static deserializeBinaryFromReader(message: ListLogEntriesResponse, reader: jspb.BinaryReader): ListLogEntriesResponse;
}

export namespace ListLogEntriesResponse {
  export type AsObject = {
    entriesList: Array<google_logging_v2_log_entry_pb.LogEntry.AsObject>,
    nextPageToken: string,
  }
}

export class ListMonitoredResourceDescriptorsRequest extends jspb.Message {
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

export class ListLogsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListLogsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListLogsRequest): ListLogsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListLogsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListLogsRequest;
  static deserializeBinaryFromReader(message: ListLogsRequest, reader: jspb.BinaryReader): ListLogsRequest;
}

export namespace ListLogsRequest {
  export type AsObject = {
    parent: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListLogsResponse extends jspb.Message {
  clearLogNamesList(): void;
  getLogNamesList(): Array<string>;
  setLogNamesList(value: Array<string>): void;
  addLogNames(value: string, index?: number): string;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListLogsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListLogsResponse): ListLogsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListLogsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListLogsResponse;
  static deserializeBinaryFromReader(message: ListLogsResponse, reader: jspb.BinaryReader): ListLogsResponse;
}

export namespace ListLogsResponse {
  export type AsObject = {
    logNamesList: Array<string>,
    nextPageToken: string,
  }
}

