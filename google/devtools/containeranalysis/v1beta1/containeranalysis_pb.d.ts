// package: google.devtools.containeranalysis.v1beta1
// file: google/devtools/containeranalysis/v1beta1/containeranalysis.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";
import * as google_iam_v1_iam_policy_pb from "../../../../google/iam/v1/iam_policy_pb";
import * as google_iam_v1_policy_pb from "../../../../google/iam/v1/policy_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class ScanConfig extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getEnabled(): boolean;
  setEnabled(value: boolean): void;

  hasCreateTime(): boolean;
  clearCreateTime(): void;
  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdateTime(): boolean;
  clearUpdateTime(): void;
  getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScanConfig.AsObject;
  static toObject(includeInstance: boolean, msg: ScanConfig): ScanConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScanConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScanConfig;
  static deserializeBinaryFromReader(message: ScanConfig, reader: jspb.BinaryReader): ScanConfig;
}

export namespace ScanConfig {
  export type AsObject = {
    name: string,
    description: string,
    enabled: boolean,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class GetScanConfigRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetScanConfigRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetScanConfigRequest): GetScanConfigRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetScanConfigRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetScanConfigRequest;
  static deserializeBinaryFromReader(message: GetScanConfigRequest, reader: jspb.BinaryReader): GetScanConfigRequest;
}

export namespace GetScanConfigRequest {
  export type AsObject = {
    name: string,
  }
}

export class ListScanConfigsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getFilter(): string;
  setFilter(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListScanConfigsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListScanConfigsRequest): ListScanConfigsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListScanConfigsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListScanConfigsRequest;
  static deserializeBinaryFromReader(message: ListScanConfigsRequest, reader: jspb.BinaryReader): ListScanConfigsRequest;
}

export namespace ListScanConfigsRequest {
  export type AsObject = {
    parent: string,
    filter: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListScanConfigsResponse extends jspb.Message {
  clearScanConfigsList(): void;
  getScanConfigsList(): Array<ScanConfig>;
  setScanConfigsList(value: Array<ScanConfig>): void;
  addScanConfigs(value?: ScanConfig, index?: number): ScanConfig;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListScanConfigsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListScanConfigsResponse): ListScanConfigsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListScanConfigsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListScanConfigsResponse;
  static deserializeBinaryFromReader(message: ListScanConfigsResponse, reader: jspb.BinaryReader): ListScanConfigsResponse;
}

export namespace ListScanConfigsResponse {
  export type AsObject = {
    scanConfigsList: Array<ScanConfig.AsObject>,
    nextPageToken: string,
  }
}

export class UpdateScanConfigRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasScanConfig(): boolean;
  clearScanConfig(): void;
  getScanConfig(): ScanConfig | undefined;
  setScanConfig(value?: ScanConfig): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateScanConfigRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateScanConfigRequest): UpdateScanConfigRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateScanConfigRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateScanConfigRequest;
  static deserializeBinaryFromReader(message: UpdateScanConfigRequest, reader: jspb.BinaryReader): UpdateScanConfigRequest;
}

export namespace UpdateScanConfigRequest {
  export type AsObject = {
    name: string,
    scanConfig?: ScanConfig.AsObject,
  }
}

