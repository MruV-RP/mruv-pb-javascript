// package: google.cloud.asset.v1p2beta1
// file: google/cloud/asset/v1p2beta1/asset_service.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";
import * as google_cloud_asset_v1p2beta1_assets_pb from "../../../../google/cloud/asset/v1p2beta1/assets_pb";
import * as google_longrunning_operations_pb from "../../../../google/longrunning/operations_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_api_client_pb from "../../../../google/api/client_pb";

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
  getReadTimeWindow(): google_cloud_asset_v1p2beta1_assets_pb.TimeWindow | undefined;
  setReadTimeWindow(value?: google_cloud_asset_v1p2beta1_assets_pb.TimeWindow): void;

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
    readTimeWindow?: google_cloud_asset_v1p2beta1_assets_pb.TimeWindow.AsObject,
  }
}

export class BatchGetAssetsHistoryResponse extends jspb.Message {
  clearAssetsList(): void;
  getAssetsList(): Array<google_cloud_asset_v1p2beta1_assets_pb.TemporalAsset>;
  setAssetsList(value: Array<google_cloud_asset_v1p2beta1_assets_pb.TemporalAsset>): void;
  addAssets(value?: google_cloud_asset_v1p2beta1_assets_pb.TemporalAsset, index?: number): google_cloud_asset_v1p2beta1_assets_pb.TemporalAsset;

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
    assetsList: Array<google_cloud_asset_v1p2beta1_assets_pb.TemporalAsset.AsObject>,
  }
}

export class CreateFeedRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getFeedId(): string;
  setFeedId(value: string): void;

  hasFeed(): boolean;
  clearFeed(): void;
  getFeed(): Feed | undefined;
  setFeed(value?: Feed): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateFeedRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateFeedRequest): CreateFeedRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateFeedRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateFeedRequest;
  static deserializeBinaryFromReader(message: CreateFeedRequest, reader: jspb.BinaryReader): CreateFeedRequest;
}

export namespace CreateFeedRequest {
  export type AsObject = {
    parent: string,
    feedId: string,
    feed?: Feed.AsObject,
  }
}

export class GetFeedRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFeedRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetFeedRequest): GetFeedRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetFeedRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFeedRequest;
  static deserializeBinaryFromReader(message: GetFeedRequest, reader: jspb.BinaryReader): GetFeedRequest;
}

export namespace GetFeedRequest {
  export type AsObject = {
    name: string,
  }
}

export class ListFeedsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFeedsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListFeedsRequest): ListFeedsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListFeedsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFeedsRequest;
  static deserializeBinaryFromReader(message: ListFeedsRequest, reader: jspb.BinaryReader): ListFeedsRequest;
}

export namespace ListFeedsRequest {
  export type AsObject = {
    parent: string,
  }
}

export class ListFeedsResponse extends jspb.Message {
  clearFeedsList(): void;
  getFeedsList(): Array<Feed>;
  setFeedsList(value: Array<Feed>): void;
  addFeeds(value?: Feed, index?: number): Feed;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFeedsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListFeedsResponse): ListFeedsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListFeedsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFeedsResponse;
  static deserializeBinaryFromReader(message: ListFeedsResponse, reader: jspb.BinaryReader): ListFeedsResponse;
}

export namespace ListFeedsResponse {
  export type AsObject = {
    feedsList: Array<Feed.AsObject>,
  }
}

export class UpdateFeedRequest extends jspb.Message {
  hasFeed(): boolean;
  clearFeed(): void;
  getFeed(): Feed | undefined;
  setFeed(value?: Feed): void;

  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateFeedRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateFeedRequest): UpdateFeedRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateFeedRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateFeedRequest;
  static deserializeBinaryFromReader(message: UpdateFeedRequest, reader: jspb.BinaryReader): UpdateFeedRequest;
}

export namespace UpdateFeedRequest {
  export type AsObject = {
    feed?: Feed.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class DeleteFeedRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteFeedRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteFeedRequest): DeleteFeedRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteFeedRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteFeedRequest;
  static deserializeBinaryFromReader(message: DeleteFeedRequest, reader: jspb.BinaryReader): DeleteFeedRequest;
}

export namespace DeleteFeedRequest {
  export type AsObject = {
    name: string,
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

export class PubsubDestination extends jspb.Message {
  getTopic(): string;
  setTopic(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PubsubDestination.AsObject;
  static toObject(includeInstance: boolean, msg: PubsubDestination): PubsubDestination.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PubsubDestination, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PubsubDestination;
  static deserializeBinaryFromReader(message: PubsubDestination, reader: jspb.BinaryReader): PubsubDestination;
}

export namespace PubsubDestination {
  export type AsObject = {
    topic: string,
  }
}

export class FeedOutputConfig extends jspb.Message {
  hasPubsubDestination(): boolean;
  clearPubsubDestination(): void;
  getPubsubDestination(): PubsubDestination | undefined;
  setPubsubDestination(value?: PubsubDestination): void;

  getDestinationCase(): FeedOutputConfig.DestinationCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeedOutputConfig.AsObject;
  static toObject(includeInstance: boolean, msg: FeedOutputConfig): FeedOutputConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FeedOutputConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeedOutputConfig;
  static deserializeBinaryFromReader(message: FeedOutputConfig, reader: jspb.BinaryReader): FeedOutputConfig;
}

export namespace FeedOutputConfig {
  export type AsObject = {
    pubsubDestination?: PubsubDestination.AsObject,
  }

  export enum DestinationCase {
    DESTINATION_NOT_SET = 0,
    PUBSUB_DESTINATION = 1,
  }
}

export class Feed extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  clearAssetNamesList(): void;
  getAssetNamesList(): Array<string>;
  setAssetNamesList(value: Array<string>): void;
  addAssetNames(value: string, index?: number): string;

  clearAssetTypesList(): void;
  getAssetTypesList(): Array<string>;
  setAssetTypesList(value: Array<string>): void;
  addAssetTypes(value: string, index?: number): string;

  getContentType(): ContentTypeMap[keyof ContentTypeMap];
  setContentType(value: ContentTypeMap[keyof ContentTypeMap]): void;

  hasFeedOutputConfig(): boolean;
  clearFeedOutputConfig(): void;
  getFeedOutputConfig(): FeedOutputConfig | undefined;
  setFeedOutputConfig(value?: FeedOutputConfig): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Feed.AsObject;
  static toObject(includeInstance: boolean, msg: Feed): Feed.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Feed, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Feed;
  static deserializeBinaryFromReader(message: Feed, reader: jspb.BinaryReader): Feed;
}

export namespace Feed {
  export type AsObject = {
    name: string,
    assetNamesList: Array<string>,
    assetTypesList: Array<string>,
    contentType: ContentTypeMap[keyof ContentTypeMap],
    feedOutputConfig?: FeedOutputConfig.AsObject,
  }
}

export interface ContentTypeMap {
  CONTENT_TYPE_UNSPECIFIED: 0;
  RESOURCE: 1;
  IAM_POLICY: 2;
  IAM_POLICY_NAME: 3;
  ORG_POLICY: 4;
  ACCESS_POLICY: 5;
}

export const ContentType: ContentTypeMap;

