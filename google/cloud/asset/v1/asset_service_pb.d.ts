// package: google.cloud.asset.v1
// file: google/cloud/asset/v1/asset_service.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";
import * as google_api_client_pb from "../../../../google/api/client_pb";
import * as google_api_field_behavior_pb from "../../../../google/api/field_behavior_pb";
import * as google_api_resource_pb from "../../../../google/api/resource_pb";
import * as google_cloud_asset_v1_assets_pb from "../../../../google/cloud/asset/v1/assets_pb";
import * as google_longrunning_operations_pb from "../../../../google/longrunning/operations_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class ExportAssetsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  hasReadTime(): boolean;
  clearReadTime(): void;
  getReadTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setReadTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  clearAssetTypesList(): void;
  getAssetTypesList(): Array<string>;
  setAssetTypesList(value: Array<string>): void;
  addAssetTypes(value: string, index?: number): string;

  getContentType(): ContentTypeMap[keyof ContentTypeMap];
  setContentType(value: ContentTypeMap[keyof ContentTypeMap]): void;

  hasOutputConfig(): boolean;
  clearOutputConfig(): void;
  getOutputConfig(): OutputConfig | undefined;
  setOutputConfig(value?: OutputConfig): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExportAssetsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExportAssetsRequest): ExportAssetsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExportAssetsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExportAssetsRequest;
  static deserializeBinaryFromReader(message: ExportAssetsRequest, reader: jspb.BinaryReader): ExportAssetsRequest;
}

export namespace ExportAssetsRequest {
  export type AsObject = {
    parent: string,
    readTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    assetTypesList: Array<string>,
    contentType: ContentTypeMap[keyof ContentTypeMap],
    outputConfig?: OutputConfig.AsObject,
  }
}

export class ExportAssetsResponse extends jspb.Message {
  hasReadTime(): boolean;
  clearReadTime(): void;
  getReadTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setReadTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasOutputConfig(): boolean;
  clearOutputConfig(): void;
  getOutputConfig(): OutputConfig | undefined;
  setOutputConfig(value?: OutputConfig): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExportAssetsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ExportAssetsResponse): ExportAssetsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExportAssetsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExportAssetsResponse;
  static deserializeBinaryFromReader(message: ExportAssetsResponse, reader: jspb.BinaryReader): ExportAssetsResponse;
}

export namespace ExportAssetsResponse {
  export type AsObject = {
    readTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    outputConfig?: OutputConfig.AsObject,
  }
}

export class BatchGetAssetsHistoryRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  clearAssetNamesList(): void;
  getAssetNamesList(): Array<string>;
  setAssetNamesList(value: Array<string>): void;
  addAssetNames(value: string, index?: number): string;

  getContentType(): ContentTypeMap[keyof ContentTypeMap];
  setContentType(value: ContentTypeMap[keyof ContentTypeMap]): void;

  hasReadTimeWindow(): boolean;
  clearReadTimeWindow(): void;
  getReadTimeWindow(): google_cloud_asset_v1_assets_pb.TimeWindow | undefined;
  setReadTimeWindow(value?: google_cloud_asset_v1_assets_pb.TimeWindow): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchGetAssetsHistoryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BatchGetAssetsHistoryRequest): BatchGetAssetsHistoryRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BatchGetAssetsHistoryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchGetAssetsHistoryRequest;
  static deserializeBinaryFromReader(message: BatchGetAssetsHistoryRequest, reader: jspb.BinaryReader): BatchGetAssetsHistoryRequest;
}

export namespace BatchGetAssetsHistoryRequest {
  export type AsObject = {
    parent: string,
    assetNamesList: Array<string>,
    contentType: ContentTypeMap[keyof ContentTypeMap],
    readTimeWindow?: google_cloud_asset_v1_assets_pb.TimeWindow.AsObject,
  }
}

export class BatchGetAssetsHistoryResponse extends jspb.Message {
  clearAssetsList(): void;
  getAssetsList(): Array<google_cloud_asset_v1_assets_pb.TemporalAsset>;
  setAssetsList(value: Array<google_cloud_asset_v1_assets_pb.TemporalAsset>): void;
  addAssets(value?: google_cloud_asset_v1_assets_pb.TemporalAsset, index?: number): google_cloud_asset_v1_assets_pb.TemporalAsset;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchGetAssetsHistoryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BatchGetAssetsHistoryResponse): BatchGetAssetsHistoryResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BatchGetAssetsHistoryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchGetAssetsHistoryResponse;
  static deserializeBinaryFromReader(message: BatchGetAssetsHistoryResponse, reader: jspb.BinaryReader): BatchGetAssetsHistoryResponse;
}

export namespace BatchGetAssetsHistoryResponse {
  export type AsObject = {
    assetsList: Array<google_cloud_asset_v1_assets_pb.TemporalAsset.AsObject>,
  }
}

export class OutputConfig extends jspb.Message {
  hasGcsDestination(): boolean;
  clearGcsDestination(): void;
  getGcsDestination(): GcsDestination | undefined;
  setGcsDestination(value?: GcsDestination): void;

  hasBigqueryDestination(): boolean;
  clearBigqueryDestination(): void;
  getBigqueryDestination(): BigQueryDestination | undefined;
  setBigqueryDestination(value?: BigQueryDestination): void;

  getDestinationCase(): OutputConfig.DestinationCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OutputConfig.AsObject;
  static toObject(includeInstance: boolean, msg: OutputConfig): OutputConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OutputConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OutputConfig;
  static deserializeBinaryFromReader(message: OutputConfig, reader: jspb.BinaryReader): OutputConfig;
}

export namespace OutputConfig {
  export type AsObject = {
    gcsDestination?: GcsDestination.AsObject,
    bigqueryDestination?: BigQueryDestination.AsObject,
  }

  export enum DestinationCase {
    DESTINATION_NOT_SET = 0,
    GCS_DESTINATION = 1,
    BIGQUERY_DESTINATION = 2,
  }
}

export class GcsDestination extends jspb.Message {
  hasUri(): boolean;
  clearUri(): void;
  getUri(): string;
  setUri(value: string): void;

  hasUriPrefix(): boolean;
  clearUriPrefix(): void;
  getUriPrefix(): string;
  setUriPrefix(value: string): void;

  getObjectUriCase(): GcsDestination.ObjectUriCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GcsDestination.AsObject;
  static toObject(includeInstance: boolean, msg: GcsDestination): GcsDestination.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GcsDestination, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GcsDestination;
  static deserializeBinaryFromReader(message: GcsDestination, reader: jspb.BinaryReader): GcsDestination;
}

export namespace GcsDestination {
  export type AsObject = {
    uri: string,
    uriPrefix: string,
  }

  export enum ObjectUriCase {
    OBJECT_URI_NOT_SET = 0,
    URI = 1,
    URI_PREFIX = 2,
  }
}

export class BigQueryDestination extends jspb.Message {
  getDataset(): string;
  setDataset(value: string): void;

  getTable(): string;
  setTable(value: string): void;

  getForce(): boolean;
  setForce(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BigQueryDestination.AsObject;
  static toObject(includeInstance: boolean, msg: BigQueryDestination): BigQueryDestination.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BigQueryDestination, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BigQueryDestination;
  static deserializeBinaryFromReader(message: BigQueryDestination, reader: jspb.BinaryReader): BigQueryDestination;
}

export namespace BigQueryDestination {
  export type AsObject = {
    dataset: string,
    table: string,
    force: boolean,
  }
}

export interface ContentTypeMap {
  CONTENT_TYPE_UNSPECIFIED: 0;
  RESOURCE: 1;
  IAM_POLICY: 2;
  ORG_POLICY: 4;
  ACCESS_POLICY: 5;
}

export const ContentType: ContentTypeMap;

