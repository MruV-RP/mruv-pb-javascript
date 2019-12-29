// package: google.cloud.talent.v4beta1
// file: google/cloud/talent/v4beta1/profile_service.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";
import * as google_api_client_pb from "../../../../google/api/client_pb";
import * as google_api_field_behavior_pb from "../../../../google/api/field_behavior_pb";
import * as google_cloud_talent_v4beta1_common_pb from "../../../../google/cloud/talent/v4beta1/common_pb";
import * as google_cloud_talent_v4beta1_filters_pb from "../../../../google/cloud/talent/v4beta1/filters_pb";
import * as google_cloud_talent_v4beta1_histogram_pb from "../../../../google/cloud/talent/v4beta1/histogram_pb";
import * as google_cloud_talent_v4beta1_profile_pb from "../../../../google/cloud/talent/v4beta1/profile_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";

export class ListProfilesRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getFilter(): string;
  setFilter(value: string): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  hasReadMask(): boolean;
  clearReadMask(): void;
  getReadMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setReadMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListProfilesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListProfilesRequest): ListProfilesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListProfilesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListProfilesRequest;
  static deserializeBinaryFromReader(message: ListProfilesRequest, reader: jspb.BinaryReader): ListProfilesRequest;
}

export namespace ListProfilesRequest {
  export type AsObject = {
    parent: string,
    filter: string,
    pageToken: string,
    pageSize: number,
    readMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class ListProfilesResponse extends jspb.Message {
  clearProfilesList(): void;
  getProfilesList(): Array<google_cloud_talent_v4beta1_profile_pb.Profile>;
  setProfilesList(value: Array<google_cloud_talent_v4beta1_profile_pb.Profile>): void;
  addProfiles(value?: google_cloud_talent_v4beta1_profile_pb.Profile, index?: number): google_cloud_talent_v4beta1_profile_pb.Profile;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListProfilesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListProfilesResponse): ListProfilesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListProfilesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListProfilesResponse;
  static deserializeBinaryFromReader(message: ListProfilesResponse, reader: jspb.BinaryReader): ListProfilesResponse;
}

export namespace ListProfilesResponse {
  export type AsObject = {
    profilesList: Array<google_cloud_talent_v4beta1_profile_pb.Profile.AsObject>,
    nextPageToken: string,
  }
}

export class CreateProfileRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  hasProfile(): boolean;
  clearProfile(): void;
  getProfile(): google_cloud_talent_v4beta1_profile_pb.Profile | undefined;
  setProfile(value?: google_cloud_talent_v4beta1_profile_pb.Profile): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateProfileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateProfileRequest): CreateProfileRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateProfileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateProfileRequest;
  static deserializeBinaryFromReader(message: CreateProfileRequest, reader: jspb.BinaryReader): CreateProfileRequest;
}

export namespace CreateProfileRequest {
  export type AsObject = {
    parent: string,
    profile?: google_cloud_talent_v4beta1_profile_pb.Profile.AsObject,
  }
}

export class GetProfileRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetProfileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetProfileRequest): GetProfileRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetProfileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetProfileRequest;
  static deserializeBinaryFromReader(message: GetProfileRequest, reader: jspb.BinaryReader): GetProfileRequest;
}

export namespace GetProfileRequest {
  export type AsObject = {
    name: string,
  }
}

export class UpdateProfileRequest extends jspb.Message {
  hasProfile(): boolean;
  clearProfile(): void;
  getProfile(): google_cloud_talent_v4beta1_profile_pb.Profile | undefined;
  setProfile(value?: google_cloud_talent_v4beta1_profile_pb.Profile): void;

  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateProfileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateProfileRequest): UpdateProfileRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateProfileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateProfileRequest;
  static deserializeBinaryFromReader(message: UpdateProfileRequest, reader: jspb.BinaryReader): UpdateProfileRequest;
}

export namespace UpdateProfileRequest {
  export type AsObject = {
    profile?: google_cloud_talent_v4beta1_profile_pb.Profile.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class DeleteProfileRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteProfileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteProfileRequest): DeleteProfileRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteProfileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteProfileRequest;
  static deserializeBinaryFromReader(message: DeleteProfileRequest, reader: jspb.BinaryReader): DeleteProfileRequest;
}

export namespace DeleteProfileRequest {
  export type AsObject = {
    name: string,
  }
}

export class SearchProfilesRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  hasRequestMetadata(): boolean;
  clearRequestMetadata(): void;
  getRequestMetadata(): google_cloud_talent_v4beta1_common_pb.RequestMetadata | undefined;
  setRequestMetadata(value?: google_cloud_talent_v4beta1_common_pb.RequestMetadata): void;

  hasProfileQuery(): boolean;
  clearProfileQuery(): void;
  getProfileQuery(): google_cloud_talent_v4beta1_filters_pb.ProfileQuery | undefined;
  setProfileQuery(value?: google_cloud_talent_v4beta1_filters_pb.ProfileQuery): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  getOffset(): number;
  setOffset(value: number): void;

  getDisableSpellCheck(): boolean;
  setDisableSpellCheck(value: boolean): void;

  getOrderBy(): string;
  setOrderBy(value: string): void;

  getCaseSensitiveSort(): boolean;
  setCaseSensitiveSort(value: boolean): void;

  clearHistogramQueriesList(): void;
  getHistogramQueriesList(): Array<google_cloud_talent_v4beta1_histogram_pb.HistogramQuery>;
  setHistogramQueriesList(value: Array<google_cloud_talent_v4beta1_histogram_pb.HistogramQuery>): void;
  addHistogramQueries(value?: google_cloud_talent_v4beta1_histogram_pb.HistogramQuery, index?: number): google_cloud_talent_v4beta1_histogram_pb.HistogramQuery;

  getResultSetId(): string;
  setResultSetId(value: string): void;

  getStrictKeywordsSearch(): boolean;
  setStrictKeywordsSearch(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchProfilesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SearchProfilesRequest): SearchProfilesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchProfilesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchProfilesRequest;
  static deserializeBinaryFromReader(message: SearchProfilesRequest, reader: jspb.BinaryReader): SearchProfilesRequest;
}

export namespace SearchProfilesRequest {
  export type AsObject = {
    parent: string,
    requestMetadata?: google_cloud_talent_v4beta1_common_pb.RequestMetadata.AsObject,
    profileQuery?: google_cloud_talent_v4beta1_filters_pb.ProfileQuery.AsObject,
    pageSize: number,
    pageToken: string,
    offset: number,
    disableSpellCheck: boolean,
    orderBy: string,
    caseSensitiveSort: boolean,
    histogramQueriesList: Array<google_cloud_talent_v4beta1_histogram_pb.HistogramQuery.AsObject>,
    resultSetId: string,
    strictKeywordsSearch: boolean,
  }
}

export class SearchProfilesResponse extends jspb.Message {
  getEstimatedTotalSize(): number;
  setEstimatedTotalSize(value: number): void;

  hasSpellCorrection(): boolean;
  clearSpellCorrection(): void;
  getSpellCorrection(): google_cloud_talent_v4beta1_common_pb.SpellingCorrection | undefined;
  setSpellCorrection(value?: google_cloud_talent_v4beta1_common_pb.SpellingCorrection): void;

  hasMetadata(): boolean;
  clearMetadata(): void;
  getMetadata(): google_cloud_talent_v4beta1_common_pb.ResponseMetadata | undefined;
  setMetadata(value?: google_cloud_talent_v4beta1_common_pb.ResponseMetadata): void;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  clearHistogramQueryResultsList(): void;
  getHistogramQueryResultsList(): Array<google_cloud_talent_v4beta1_histogram_pb.HistogramQueryResult>;
  setHistogramQueryResultsList(value: Array<google_cloud_talent_v4beta1_histogram_pb.HistogramQueryResult>): void;
  addHistogramQueryResults(value?: google_cloud_talent_v4beta1_histogram_pb.HistogramQueryResult, index?: number): google_cloud_talent_v4beta1_histogram_pb.HistogramQueryResult;

  clearSummarizedProfilesList(): void;
  getSummarizedProfilesList(): Array<SummarizedProfile>;
  setSummarizedProfilesList(value: Array<SummarizedProfile>): void;
  addSummarizedProfiles(value?: SummarizedProfile, index?: number): SummarizedProfile;

  getResultSetId(): string;
  setResultSetId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchProfilesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SearchProfilesResponse): SearchProfilesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchProfilesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchProfilesResponse;
  static deserializeBinaryFromReader(message: SearchProfilesResponse, reader: jspb.BinaryReader): SearchProfilesResponse;
}

export namespace SearchProfilesResponse {
  export type AsObject = {
    estimatedTotalSize: number,
    spellCorrection?: google_cloud_talent_v4beta1_common_pb.SpellingCorrection.AsObject,
    metadata?: google_cloud_talent_v4beta1_common_pb.ResponseMetadata.AsObject,
    nextPageToken: string,
    histogramQueryResultsList: Array<google_cloud_talent_v4beta1_histogram_pb.HistogramQueryResult.AsObject>,
    summarizedProfilesList: Array<SummarizedProfile.AsObject>,
    resultSetId: string,
  }
}

export class SummarizedProfile extends jspb.Message {
  clearProfilesList(): void;
  getProfilesList(): Array<google_cloud_talent_v4beta1_profile_pb.Profile>;
  setProfilesList(value: Array<google_cloud_talent_v4beta1_profile_pb.Profile>): void;
  addProfiles(value?: google_cloud_talent_v4beta1_profile_pb.Profile, index?: number): google_cloud_talent_v4beta1_profile_pb.Profile;

  hasSummary(): boolean;
  clearSummary(): void;
  getSummary(): google_cloud_talent_v4beta1_profile_pb.Profile | undefined;
  setSummary(value?: google_cloud_talent_v4beta1_profile_pb.Profile): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SummarizedProfile.AsObject;
  static toObject(includeInstance: boolean, msg: SummarizedProfile): SummarizedProfile.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SummarizedProfile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SummarizedProfile;
  static deserializeBinaryFromReader(message: SummarizedProfile, reader: jspb.BinaryReader): SummarizedProfile;
}

export namespace SummarizedProfile {
  export type AsObject = {
    profilesList: Array<google_cloud_talent_v4beta1_profile_pb.Profile.AsObject>,
    summary?: google_cloud_talent_v4beta1_profile_pb.Profile.AsObject,
  }
}

