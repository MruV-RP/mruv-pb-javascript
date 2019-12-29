// package: google.cloud.bigquery.datatransfer.v1
// file: google/cloud/bigquery/datatransfer/v1/transfer.proto

import * as jspb from "google-protobuf";
import * as google_api_field_behavior_pb from "../../../../../google/api/field_behavior_pb";
import * as google_api_resource_pb from "../../../../../google/api/resource_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_rpc_status_pb from "../../../../../google/rpc/status_pb";

export class ScheduleOptions extends jspb.Message {
  getDisableAutoScheduling(): boolean;
  setDisableAutoScheduling(value: boolean): void;

  hasStartTime(): boolean;
  clearStartTime(): void;
  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasEndTime(): boolean;
  clearEndTime(): void;
  getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScheduleOptions.AsObject;
  static toObject(includeInstance: boolean, msg: ScheduleOptions): ScheduleOptions.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScheduleOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScheduleOptions;
  static deserializeBinaryFromReader(message: ScheduleOptions, reader: jspb.BinaryReader): ScheduleOptions;
}

export namespace ScheduleOptions {
  export type AsObject = {
    disableAutoScheduling: boolean,
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class TransferConfig extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasDestinationDatasetId(): boolean;
  clearDestinationDatasetId(): void;
  getDestinationDatasetId(): string;
  setDestinationDatasetId(value: string): void;

  getDisplayName(): string;
  setDisplayName(value: string): void;

  getDataSourceId(): string;
  setDataSourceId(value: string): void;

  hasParams(): boolean;
  clearParams(): void;
  getParams(): google_protobuf_struct_pb.Struct | undefined;
  setParams(value?: google_protobuf_struct_pb.Struct): void;

  getSchedule(): string;
  setSchedule(value: string): void;

  hasScheduleOptions(): boolean;
  clearScheduleOptions(): void;
  getScheduleOptions(): ScheduleOptions | undefined;
  setScheduleOptions(value?: ScheduleOptions): void;

  getDataRefreshWindowDays(): number;
  setDataRefreshWindowDays(value: number): void;

  getDisabled(): boolean;
  setDisabled(value: boolean): void;

  hasUpdateTime(): boolean;
  clearUpdateTime(): void;
  getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasNextRunTime(): boolean;
  clearNextRunTime(): void;
  getNextRunTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setNextRunTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getState(): TransferStateMap[keyof TransferStateMap];
  setState(value: TransferStateMap[keyof TransferStateMap]): void;

  getUserId(): number;
  setUserId(value: number): void;

  getDatasetRegion(): string;
  setDatasetRegion(value: string): void;

  getDestinationCase(): TransferConfig.DestinationCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransferConfig.AsObject;
  static toObject(includeInstance: boolean, msg: TransferConfig): TransferConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransferConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransferConfig;
  static deserializeBinaryFromReader(message: TransferConfig, reader: jspb.BinaryReader): TransferConfig;
}

export namespace TransferConfig {
  export type AsObject = {
    name: string,
    destinationDatasetId: string,
    displayName: string,
    dataSourceId: string,
    params?: google_protobuf_struct_pb.Struct.AsObject,
    schedule: string,
    scheduleOptions?: ScheduleOptions.AsObject,
    dataRefreshWindowDays: number,
    disabled: boolean,
    updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    nextRunTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    state: TransferStateMap[keyof TransferStateMap],
    userId: number,
    datasetRegion: string,
  }

  export enum DestinationCase {
    DESTINATION_NOT_SET = 0,
    DESTINATION_DATASET_ID = 2,
  }
}

export class TransferRun extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasScheduleTime(): boolean;
  clearScheduleTime(): void;
  getScheduleTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setScheduleTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasRunTime(): boolean;
  clearRunTime(): void;
  getRunTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setRunTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasErrorStatus(): boolean;
  clearErrorStatus(): void;
  getErrorStatus(): google_rpc_status_pb.Status | undefined;
  setErrorStatus(value?: google_rpc_status_pb.Status): void;

  hasStartTime(): boolean;
  clearStartTime(): void;
  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasEndTime(): boolean;
  clearEndTime(): void;
  getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdateTime(): boolean;
  clearUpdateTime(): void;
  getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasParams(): boolean;
  clearParams(): void;
  getParams(): google_protobuf_struct_pb.Struct | undefined;
  setParams(value?: google_protobuf_struct_pb.Struct): void;

  hasDestinationDatasetId(): boolean;
  clearDestinationDatasetId(): void;
  getDestinationDatasetId(): string;
  setDestinationDatasetId(value: string): void;

  getDataSourceId(): string;
  setDataSourceId(value: string): void;

  getState(): TransferStateMap[keyof TransferStateMap];
  setState(value: TransferStateMap[keyof TransferStateMap]): void;

  getUserId(): number;
  setUserId(value: number): void;

  getSchedule(): string;
  setSchedule(value: string): void;

  getDestinationCase(): TransferRun.DestinationCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransferRun.AsObject;
  static toObject(includeInstance: boolean, msg: TransferRun): TransferRun.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransferRun, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransferRun;
  static deserializeBinaryFromReader(message: TransferRun, reader: jspb.BinaryReader): TransferRun;
}

export namespace TransferRun {
  export type AsObject = {
    name: string,
    scheduleTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    runTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    errorStatus?: google_rpc_status_pb.Status.AsObject,
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    params?: google_protobuf_struct_pb.Struct.AsObject,
    destinationDatasetId: string,
    dataSourceId: string,
    state: TransferStateMap[keyof TransferStateMap],
    userId: number,
    schedule: string,
  }

  export enum DestinationCase {
    DESTINATION_NOT_SET = 0,
    DESTINATION_DATASET_ID = 2,
  }
}

export class TransferMessage extends jspb.Message {
  hasMessageTime(): boolean;
  clearMessageTime(): void;
  getMessageTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setMessageTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getSeverity(): TransferMessage.MessageSeverityMap[keyof TransferMessage.MessageSeverityMap];
  setSeverity(value: TransferMessage.MessageSeverityMap[keyof TransferMessage.MessageSeverityMap]): void;

  getMessageText(): string;
  setMessageText(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransferMessage.AsObject;
  static toObject(includeInstance: boolean, msg: TransferMessage): TransferMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransferMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransferMessage;
  static deserializeBinaryFromReader(message: TransferMessage, reader: jspb.BinaryReader): TransferMessage;
}

export namespace TransferMessage {
  export type AsObject = {
    messageTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    severity: TransferMessage.MessageSeverityMap[keyof TransferMessage.MessageSeverityMap],
    messageText: string,
  }

  export interface MessageSeverityMap {
    MESSAGE_SEVERITY_UNSPECIFIED: 0;
    INFO: 1;
    WARNING: 2;
    ERROR: 3;
  }

  export const MessageSeverity: MessageSeverityMap;
}

export interface TransferTypeMap {
  TRANSFER_TYPE_UNSPECIFIED: 0;
  BATCH: 1;
  STREAMING: 2;
}

export const TransferType: TransferTypeMap;

export interface TransferStateMap {
  TRANSFER_STATE_UNSPECIFIED: 0;
  PENDING: 2;
  RUNNING: 3;
  SUCCEEDED: 4;
  FAILED: 5;
  CANCELLED: 6;
}

export const TransferState: TransferStateMap;

