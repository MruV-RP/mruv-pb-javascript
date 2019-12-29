// package: google.cloud.securitycenter.v1
// file: google/cloud/securitycenter/v1/securitycenter_service.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";
import * as google_cloud_securitycenter_v1_asset_pb from "../../../../google/cloud/securitycenter/v1/asset_pb";
import * as google_cloud_securitycenter_v1_finding_pb from "../../../../google/cloud/securitycenter/v1/finding_pb";
import * as google_cloud_securitycenter_v1_organization_settings_pb from "../../../../google/cloud/securitycenter/v1/organization_settings_pb";
import * as google_cloud_securitycenter_v1_run_asset_discovery_response_pb from "../../../../google/cloud/securitycenter/v1/run_asset_discovery_response_pb";
import * as google_cloud_securitycenter_v1_security_marks_pb from "../../../../google/cloud/securitycenter/v1/security_marks_pb";
import * as google_cloud_securitycenter_v1_source_pb from "../../../../google/cloud/securitycenter/v1/source_pb";
import * as google_iam_v1_iam_policy_pb from "../../../../google/iam/v1/iam_policy_pb";
import * as google_iam_v1_policy_pb from "../../../../google/iam/v1/policy_pb";
import * as google_longrunning_operations_pb from "../../../../google/longrunning/operations_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class CreateFindingRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getFindingId(): string;
  setFindingId(value: string): void;

  hasFinding(): boolean;
  clearFinding(): void;
  getFinding(): google_cloud_securitycenter_v1_finding_pb.Finding | undefined;
  setFinding(value?: google_cloud_securitycenter_v1_finding_pb.Finding): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateFindingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateFindingRequest): CreateFindingRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateFindingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateFindingRequest;
  static deserializeBinaryFromReader(message: CreateFindingRequest, reader: jspb.BinaryReader): CreateFindingRequest;
}

export namespace CreateFindingRequest {
  export type AsObject = {
    parent: string,
    findingId: string,
    finding?: google_cloud_securitycenter_v1_finding_pb.Finding.AsObject,
  }
}

export class CreateSourceRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  hasSource(): boolean;
  clearSource(): void;
  getSource(): google_cloud_securitycenter_v1_source_pb.Source | undefined;
  setSource(value?: google_cloud_securitycenter_v1_source_pb.Source): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateSourceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateSourceRequest): CreateSourceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateSourceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateSourceRequest;
  static deserializeBinaryFromReader(message: CreateSourceRequest, reader: jspb.BinaryReader): CreateSourceRequest;
}

export namespace CreateSourceRequest {
  export type AsObject = {
    parent: string,
    source?: google_cloud_securitycenter_v1_source_pb.Source.AsObject,
  }
}

export class GetOrganizationSettingsRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOrganizationSettingsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetOrganizationSettingsRequest): GetOrganizationSettingsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetOrganizationSettingsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOrganizationSettingsRequest;
  static deserializeBinaryFromReader(message: GetOrganizationSettingsRequest, reader: jspb.BinaryReader): GetOrganizationSettingsRequest;
}

export namespace GetOrganizationSettingsRequest {
  export type AsObject = {
    name: string,
  }
}

export class GetSourceRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSourceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSourceRequest): GetSourceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSourceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSourceRequest;
  static deserializeBinaryFromReader(message: GetSourceRequest, reader: jspb.BinaryReader): GetSourceRequest;
}

export namespace GetSourceRequest {
  export type AsObject = {
    name: string,
  }
}

export class GroupAssetsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getFilter(): string;
  setFilter(value: string): void;

  getGroupBy(): string;
  setGroupBy(value: string): void;

  hasCompareDuration(): boolean;
  clearCompareDuration(): void;
  getCompareDuration(): google_protobuf_duration_pb.Duration | undefined;
  setCompareDuration(value?: google_protobuf_duration_pb.Duration): void;

  hasReadTime(): boolean;
  clearReadTime(): void;
  getReadTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setReadTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GroupAssetsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GroupAssetsRequest): GroupAssetsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GroupAssetsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GroupAssetsRequest;
  static deserializeBinaryFromReader(message: GroupAssetsRequest, reader: jspb.BinaryReader): GroupAssetsRequest;
}

export namespace GroupAssetsRequest {
  export type AsObject = {
    parent: string,
    filter: string,
    groupBy: string,
    compareDuration?: google_protobuf_duration_pb.Duration.AsObject,
    readTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    pageToken: string,
    pageSize: number,
  }
}

export class GroupAssetsResponse extends jspb.Message {
  clearGroupByResultsList(): void;
  getGroupByResultsList(): Array<GroupResult>;
  setGroupByResultsList(value: Array<GroupResult>): void;
  addGroupByResults(value?: GroupResult, index?: number): GroupResult;

  hasReadTime(): boolean;
  clearReadTime(): void;
  getReadTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setReadTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  getTotalSize(): number;
  setTotalSize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GroupAssetsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GroupAssetsResponse): GroupAssetsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GroupAssetsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GroupAssetsResponse;
  static deserializeBinaryFromReader(message: GroupAssetsResponse, reader: jspb.BinaryReader): GroupAssetsResponse;
}

export namespace GroupAssetsResponse {
  export type AsObject = {
    groupByResultsList: Array<GroupResult.AsObject>,
    readTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    nextPageToken: string,
    totalSize: number,
  }
}

export class GroupFindingsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getFilter(): string;
  setFilter(value: string): void;

  getGroupBy(): string;
  setGroupBy(value: string): void;

  hasReadTime(): boolean;
  clearReadTime(): void;
  getReadTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setReadTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasCompareDuration(): boolean;
  clearCompareDuration(): void;
  getCompareDuration(): google_protobuf_duration_pb.Duration | undefined;
  setCompareDuration(value?: google_protobuf_duration_pb.Duration): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GroupFindingsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GroupFindingsRequest): GroupFindingsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GroupFindingsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GroupFindingsRequest;
  static deserializeBinaryFromReader(message: GroupFindingsRequest, reader: jspb.BinaryReader): GroupFindingsRequest;
}

export namespace GroupFindingsRequest {
  export type AsObject = {
    parent: string,
    filter: string,
    groupBy: string,
    readTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    compareDuration?: google_protobuf_duration_pb.Duration.AsObject,
    pageToken: string,
    pageSize: number,
  }
}

export class GroupFindingsResponse extends jspb.Message {
  clearGroupByResultsList(): void;
  getGroupByResultsList(): Array<GroupResult>;
  setGroupByResultsList(value: Array<GroupResult>): void;
  addGroupByResults(value?: GroupResult, index?: number): GroupResult;

  hasReadTime(): boolean;
  clearReadTime(): void;
  getReadTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setReadTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  getTotalSize(): number;
  setTotalSize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GroupFindingsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GroupFindingsResponse): GroupFindingsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GroupFindingsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GroupFindingsResponse;
  static deserializeBinaryFromReader(message: GroupFindingsResponse, reader: jspb.BinaryReader): GroupFindingsResponse;
}

export namespace GroupFindingsResponse {
  export type AsObject = {
    groupByResultsList: Array<GroupResult.AsObject>,
    readTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    nextPageToken: string,
    totalSize: number,
  }
}

export class GroupResult extends jspb.Message {
  getPropertiesMap(): jspb.Map<string, google_protobuf_struct_pb.Value>;
  clearPropertiesMap(): void;
  getCount(): number;
  setCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GroupResult.AsObject;
  static toObject(includeInstance: boolean, msg: GroupResult): GroupResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GroupResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GroupResult;
  static deserializeBinaryFromReader(message: GroupResult, reader: jspb.BinaryReader): GroupResult;
}

export namespace GroupResult {
  export type AsObject = {
    propertiesMap: Array<[string, google_protobuf_struct_pb.Value.AsObject]>,
    count: number,
  }
}

export class ListSourcesRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSourcesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListSourcesRequest): ListSourcesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListSourcesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSourcesRequest;
  static deserializeBinaryFromReader(message: ListSourcesRequest, reader: jspb.BinaryReader): ListSourcesRequest;
}

export namespace ListSourcesRequest {
  export type AsObject = {
    parent: string,
    pageToken: string,
    pageSize: number,
  }
}

export class ListSourcesResponse extends jspb.Message {
  clearSourcesList(): void;
  getSourcesList(): Array<google_cloud_securitycenter_v1_source_pb.Source>;
  setSourcesList(value: Array<google_cloud_securitycenter_v1_source_pb.Source>): void;
  addSources(value?: google_cloud_securitycenter_v1_source_pb.Source, index?: number): google_cloud_securitycenter_v1_source_pb.Source;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSourcesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListSourcesResponse): ListSourcesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListSourcesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSourcesResponse;
  static deserializeBinaryFromReader(message: ListSourcesResponse, reader: jspb.BinaryReader): ListSourcesResponse;
}

export namespace ListSourcesResponse {
  export type AsObject = {
    sourcesList: Array<google_cloud_securitycenter_v1_source_pb.Source.AsObject>,
    nextPageToken: string,
  }
}

export class ListAssetsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getFilter(): string;
  setFilter(value: string): void;

  getOrderBy(): string;
  setOrderBy(value: string): void;

  hasReadTime(): boolean;
  clearReadTime(): void;
  getReadTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setReadTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasCompareDuration(): boolean;
  clearCompareDuration(): void;
  getCompareDuration(): google_protobuf_duration_pb.Duration | undefined;
  setCompareDuration(value?: google_protobuf_duration_pb.Duration): void;

  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAssetsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListAssetsRequest): ListAssetsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAssetsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAssetsRequest;
  static deserializeBinaryFromReader(message: ListAssetsRequest, reader: jspb.BinaryReader): ListAssetsRequest;
}

export namespace ListAssetsRequest {
  export type AsObject = {
    parent: string,
    filter: string,
    orderBy: string,
    readTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    compareDuration?: google_protobuf_duration_pb.Duration.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    pageToken: string,
    pageSize: number,
  }
}

export class ListAssetsResponse extends jspb.Message {
  clearListAssetsResultsList(): void;
  getListAssetsResultsList(): Array<ListAssetsResponse.ListAssetsResult>;
  setListAssetsResultsList(value: Array<ListAssetsResponse.ListAssetsResult>): void;
  addListAssetsResults(value?: ListAssetsResponse.ListAssetsResult, index?: number): ListAssetsResponse.ListAssetsResult;

  hasReadTime(): boolean;
  clearReadTime(): void;
  getReadTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setReadTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  getTotalSize(): number;
  setTotalSize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAssetsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListAssetsResponse): ListAssetsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAssetsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAssetsResponse;
  static deserializeBinaryFromReader(message: ListAssetsResponse, reader: jspb.BinaryReader): ListAssetsResponse;
}

export namespace ListAssetsResponse {
  export type AsObject = {
    listAssetsResultsList: Array<ListAssetsResponse.ListAssetsResult.AsObject>,
    readTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    nextPageToken: string,
    totalSize: number,
  }

  export class ListAssetsResult extends jspb.Message {
    hasAsset(): boolean;
    clearAsset(): void;
    getAsset(): google_cloud_securitycenter_v1_asset_pb.Asset | undefined;
    setAsset(value?: google_cloud_securitycenter_v1_asset_pb.Asset): void;

    getStateChange(): ListAssetsResponse.ListAssetsResult.StateChangeMap[keyof ListAssetsResponse.ListAssetsResult.StateChangeMap];
    setStateChange(value: ListAssetsResponse.ListAssetsResult.StateChangeMap[keyof ListAssetsResponse.ListAssetsResult.StateChangeMap]): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListAssetsResult.AsObject;
    static toObject(includeInstance: boolean, msg: ListAssetsResult): ListAssetsResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListAssetsResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListAssetsResult;
    static deserializeBinaryFromReader(message: ListAssetsResult, reader: jspb.BinaryReader): ListAssetsResult;
  }

  export namespace ListAssetsResult {
    export type AsObject = {
      asset?: google_cloud_securitycenter_v1_asset_pb.Asset.AsObject,
      stateChange: ListAssetsResponse.ListAssetsResult.StateChangeMap[keyof ListAssetsResponse.ListAssetsResult.StateChangeMap],
    }

    export interface StateChangeMap {
      UNUSED: 0;
      ADDED: 1;
      REMOVED: 2;
      ACTIVE: 3;
    }

    export const StateChange: StateChangeMap;
  }
}

export class ListFindingsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getFilter(): string;
  setFilter(value: string): void;

  getOrderBy(): string;
  setOrderBy(value: string): void;

  hasReadTime(): boolean;
  clearReadTime(): void;
  getReadTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setReadTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasCompareDuration(): boolean;
  clearCompareDuration(): void;
  getCompareDuration(): google_protobuf_duration_pb.Duration | undefined;
  setCompareDuration(value?: google_protobuf_duration_pb.Duration): void;

  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFindingsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListFindingsRequest): ListFindingsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListFindingsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFindingsRequest;
  static deserializeBinaryFromReader(message: ListFindingsRequest, reader: jspb.BinaryReader): ListFindingsRequest;
}

export namespace ListFindingsRequest {
  export type AsObject = {
    parent: string,
    filter: string,
    orderBy: string,
    readTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    compareDuration?: google_protobuf_duration_pb.Duration.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    pageToken: string,
    pageSize: number,
  }
}

export class ListFindingsResponse extends jspb.Message {
  clearListFindingsResultsList(): void;
  getListFindingsResultsList(): Array<ListFindingsResponse.ListFindingsResult>;
  setListFindingsResultsList(value: Array<ListFindingsResponse.ListFindingsResult>): void;
  addListFindingsResults(value?: ListFindingsResponse.ListFindingsResult, index?: number): ListFindingsResponse.ListFindingsResult;

  hasReadTime(): boolean;
  clearReadTime(): void;
  getReadTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setReadTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  getTotalSize(): number;
  setTotalSize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFindingsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListFindingsResponse): ListFindingsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListFindingsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFindingsResponse;
  static deserializeBinaryFromReader(message: ListFindingsResponse, reader: jspb.BinaryReader): ListFindingsResponse;
}

export namespace ListFindingsResponse {
  export type AsObject = {
    listFindingsResultsList: Array<ListFindingsResponse.ListFindingsResult.AsObject>,
    readTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    nextPageToken: string,
    totalSize: number,
  }

  export class ListFindingsResult extends jspb.Message {
    hasFinding(): boolean;
    clearFinding(): void;
    getFinding(): google_cloud_securitycenter_v1_finding_pb.Finding | undefined;
    setFinding(value?: google_cloud_securitycenter_v1_finding_pb.Finding): void;

    getStateChange(): ListFindingsResponse.ListFindingsResult.StateChangeMap[keyof ListFindingsResponse.ListFindingsResult.StateChangeMap];
    setStateChange(value: ListFindingsResponse.ListFindingsResult.StateChangeMap[keyof ListFindingsResponse.ListFindingsResult.StateChangeMap]): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListFindingsResult.AsObject;
    static toObject(includeInstance: boolean, msg: ListFindingsResult): ListFindingsResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListFindingsResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListFindingsResult;
    static deserializeBinaryFromReader(message: ListFindingsResult, reader: jspb.BinaryReader): ListFindingsResult;
  }

  export namespace ListFindingsResult {
    export type AsObject = {
      finding?: google_cloud_securitycenter_v1_finding_pb.Finding.AsObject,
      stateChange: ListFindingsResponse.ListFindingsResult.StateChangeMap[keyof ListFindingsResponse.ListFindingsResult.StateChangeMap],
    }

    export interface StateChangeMap {
      UNUSED: 0;
      CHANGED: 1;
      UNCHANGED: 2;
      ADDED: 3;
      REMOVED: 4;
    }

    export const StateChange: StateChangeMap;
  }
}

export class SetFindingStateRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getState(): google_cloud_securitycenter_v1_finding_pb.Finding.StateMap[keyof google_cloud_securitycenter_v1_finding_pb.Finding.StateMap];
  setState(value: google_cloud_securitycenter_v1_finding_pb.Finding.StateMap[keyof google_cloud_securitycenter_v1_finding_pb.Finding.StateMap]): void;

  hasStartTime(): boolean;
  clearStartTime(): void;
  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetFindingStateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetFindingStateRequest): SetFindingStateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetFindingStateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetFindingStateRequest;
  static deserializeBinaryFromReader(message: SetFindingStateRequest, reader: jspb.BinaryReader): SetFindingStateRequest;
}

export namespace SetFindingStateRequest {
  export type AsObject = {
    name: string,
    state: google_cloud_securitycenter_v1_finding_pb.Finding.StateMap[keyof google_cloud_securitycenter_v1_finding_pb.Finding.StateMap],
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class RunAssetDiscoveryRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RunAssetDiscoveryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RunAssetDiscoveryRequest): RunAssetDiscoveryRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RunAssetDiscoveryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RunAssetDiscoveryRequest;
  static deserializeBinaryFromReader(message: RunAssetDiscoveryRequest, reader: jspb.BinaryReader): RunAssetDiscoveryRequest;
}

export namespace RunAssetDiscoveryRequest {
  export type AsObject = {
    parent: string,
  }
}

export class UpdateFindingRequest extends jspb.Message {
  hasFinding(): boolean;
  clearFinding(): void;
  getFinding(): google_cloud_securitycenter_v1_finding_pb.Finding | undefined;
  setFinding(value?: google_cloud_securitycenter_v1_finding_pb.Finding): void;

  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateFindingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateFindingRequest): UpdateFindingRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateFindingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateFindingRequest;
  static deserializeBinaryFromReader(message: UpdateFindingRequest, reader: jspb.BinaryReader): UpdateFindingRequest;
}

export namespace UpdateFindingRequest {
  export type AsObject = {
    finding?: google_cloud_securitycenter_v1_finding_pb.Finding.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateOrganizationSettingsRequest extends jspb.Message {
  hasOrganizationSettings(): boolean;
  clearOrganizationSettings(): void;
  getOrganizationSettings(): google_cloud_securitycenter_v1_organization_settings_pb.OrganizationSettings | undefined;
  setOrganizationSettings(value?: google_cloud_securitycenter_v1_organization_settings_pb.OrganizationSettings): void;

  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateOrganizationSettingsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateOrganizationSettingsRequest): UpdateOrganizationSettingsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateOrganizationSettingsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateOrganizationSettingsRequest;
  static deserializeBinaryFromReader(message: UpdateOrganizationSettingsRequest, reader: jspb.BinaryReader): UpdateOrganizationSettingsRequest;
}

export namespace UpdateOrganizationSettingsRequest {
  export type AsObject = {
    organizationSettings?: google_cloud_securitycenter_v1_organization_settings_pb.OrganizationSettings.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateSourceRequest extends jspb.Message {
  hasSource(): boolean;
  clearSource(): void;
  getSource(): google_cloud_securitycenter_v1_source_pb.Source | undefined;
  setSource(value?: google_cloud_securitycenter_v1_source_pb.Source): void;

  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateSourceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateSourceRequest): UpdateSourceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateSourceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateSourceRequest;
  static deserializeBinaryFromReader(message: UpdateSourceRequest, reader: jspb.BinaryReader): UpdateSourceRequest;
}

export namespace UpdateSourceRequest {
  export type AsObject = {
    source?: google_cloud_securitycenter_v1_source_pb.Source.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateSecurityMarksRequest extends jspb.Message {
  hasSecurityMarks(): boolean;
  clearSecurityMarks(): void;
  getSecurityMarks(): google_cloud_securitycenter_v1_security_marks_pb.SecurityMarks | undefined;
  setSecurityMarks(value?: google_cloud_securitycenter_v1_security_marks_pb.SecurityMarks): void;

  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  hasStartTime(): boolean;
  clearStartTime(): void;
  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateSecurityMarksRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateSecurityMarksRequest): UpdateSecurityMarksRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateSecurityMarksRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateSecurityMarksRequest;
  static deserializeBinaryFromReader(message: UpdateSecurityMarksRequest, reader: jspb.BinaryReader): UpdateSecurityMarksRequest;
}

export namespace UpdateSecurityMarksRequest {
  export type AsObject = {
    securityMarks?: google_cloud_securitycenter_v1_security_marks_pb.SecurityMarks.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

