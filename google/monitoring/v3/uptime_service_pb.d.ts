// package: google.monitoring.v3
// file: google/monitoring/v3/uptime_service.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as google_monitoring_v3_uptime_pb from "../../../google/monitoring/v3/uptime_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_api_client_pb from "../../../google/api/client_pb";

export class ListUptimeCheckConfigsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListUptimeCheckConfigsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListUptimeCheckConfigsRequest): ListUptimeCheckConfigsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListUptimeCheckConfigsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListUptimeCheckConfigsRequest;
  static deserializeBinaryFromReader(message: ListUptimeCheckConfigsRequest, reader: jspb.BinaryReader): ListUptimeCheckConfigsRequest;
}

export namespace ListUptimeCheckConfigsRequest {
  export type AsObject = {
    parent: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListUptimeCheckConfigsResponse extends jspb.Message {
  clearUptimeCheckConfigsList(): void;
  getUptimeCheckConfigsList(): Array<google_monitoring_v3_uptime_pb.UptimeCheckConfig>;
  setUptimeCheckConfigsList(value: Array<google_monitoring_v3_uptime_pb.UptimeCheckConfig>): void;
  addUptimeCheckConfigs(value?: google_monitoring_v3_uptime_pb.UptimeCheckConfig, index?: number): google_monitoring_v3_uptime_pb.UptimeCheckConfig;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  getTotalSize(): number;
  setTotalSize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListUptimeCheckConfigsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListUptimeCheckConfigsResponse): ListUptimeCheckConfigsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListUptimeCheckConfigsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListUptimeCheckConfigsResponse;
  static deserializeBinaryFromReader(message: ListUptimeCheckConfigsResponse, reader: jspb.BinaryReader): ListUptimeCheckConfigsResponse;
}

export namespace ListUptimeCheckConfigsResponse {
  export type AsObject = {
    uptimeCheckConfigsList: Array<google_monitoring_v3_uptime_pb.UptimeCheckConfig.AsObject>,
    nextPageToken: string,
    totalSize: number,
  }
}

export class GetUptimeCheckConfigRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUptimeCheckConfigRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUptimeCheckConfigRequest): GetUptimeCheckConfigRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUptimeCheckConfigRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUptimeCheckConfigRequest;
  static deserializeBinaryFromReader(message: GetUptimeCheckConfigRequest, reader: jspb.BinaryReader): GetUptimeCheckConfigRequest;
}

export namespace GetUptimeCheckConfigRequest {
  export type AsObject = {
    name: string,
  }
}

export class CreateUptimeCheckConfigRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  hasUptimeCheckConfig(): boolean;
  clearUptimeCheckConfig(): void;
  getUptimeCheckConfig(): google_monitoring_v3_uptime_pb.UptimeCheckConfig | undefined;
  setUptimeCheckConfig(value?: google_monitoring_v3_uptime_pb.UptimeCheckConfig): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateUptimeCheckConfigRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateUptimeCheckConfigRequest): CreateUptimeCheckConfigRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateUptimeCheckConfigRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateUptimeCheckConfigRequest;
  static deserializeBinaryFromReader(message: CreateUptimeCheckConfigRequest, reader: jspb.BinaryReader): CreateUptimeCheckConfigRequest;
}

export namespace CreateUptimeCheckConfigRequest {
  export type AsObject = {
    parent: string,
    uptimeCheckConfig?: google_monitoring_v3_uptime_pb.UptimeCheckConfig.AsObject,
  }
}

export class UpdateUptimeCheckConfigRequest extends jspb.Message {
  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  hasUptimeCheckConfig(): boolean;
  clearUptimeCheckConfig(): void;
  getUptimeCheckConfig(): google_monitoring_v3_uptime_pb.UptimeCheckConfig | undefined;
  setUptimeCheckConfig(value?: google_monitoring_v3_uptime_pb.UptimeCheckConfig): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUptimeCheckConfigRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUptimeCheckConfigRequest): UpdateUptimeCheckConfigRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateUptimeCheckConfigRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUptimeCheckConfigRequest;
  static deserializeBinaryFromReader(message: UpdateUptimeCheckConfigRequest, reader: jspb.BinaryReader): UpdateUptimeCheckConfigRequest;
}

export namespace UpdateUptimeCheckConfigRequest {
  export type AsObject = {
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    uptimeCheckConfig?: google_monitoring_v3_uptime_pb.UptimeCheckConfig.AsObject,
  }
}

export class DeleteUptimeCheckConfigRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteUptimeCheckConfigRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteUptimeCheckConfigRequest): DeleteUptimeCheckConfigRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteUptimeCheckConfigRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteUptimeCheckConfigRequest;
  static deserializeBinaryFromReader(message: DeleteUptimeCheckConfigRequest, reader: jspb.BinaryReader): DeleteUptimeCheckConfigRequest;
}

export namespace DeleteUptimeCheckConfigRequest {
  export type AsObject = {
    name: string,
  }
}

export class ListUptimeCheckIpsRequest extends jspb.Message {
  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListUptimeCheckIpsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListUptimeCheckIpsRequest): ListUptimeCheckIpsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListUptimeCheckIpsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListUptimeCheckIpsRequest;
  static deserializeBinaryFromReader(message: ListUptimeCheckIpsRequest, reader: jspb.BinaryReader): ListUptimeCheckIpsRequest;
}

export namespace ListUptimeCheckIpsRequest {
  export type AsObject = {
    pageSize: number,
    pageToken: string,
  }
}

export class ListUptimeCheckIpsResponse extends jspb.Message {
  clearUptimeCheckIpsList(): void;
  getUptimeCheckIpsList(): Array<google_monitoring_v3_uptime_pb.UptimeCheckIp>;
  setUptimeCheckIpsList(value: Array<google_monitoring_v3_uptime_pb.UptimeCheckIp>): void;
  addUptimeCheckIps(value?: google_monitoring_v3_uptime_pb.UptimeCheckIp, index?: number): google_monitoring_v3_uptime_pb.UptimeCheckIp;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListUptimeCheckIpsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListUptimeCheckIpsResponse): ListUptimeCheckIpsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListUptimeCheckIpsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListUptimeCheckIpsResponse;
  static deserializeBinaryFromReader(message: ListUptimeCheckIpsResponse, reader: jspb.BinaryReader): ListUptimeCheckIpsResponse;
}

export namespace ListUptimeCheckIpsResponse {
  export type AsObject = {
    uptimeCheckIpsList: Array<google_monitoring_v3_uptime_pb.UptimeCheckIp.AsObject>,
    nextPageToken: string,
  }
}

