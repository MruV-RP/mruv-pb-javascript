// package: google.cloud.talent.v4beta1
// file: google/cloud/talent/v4beta1/job_service.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";
import * as google_api_client_pb from "../../../../google/api/client_pb";
import * as google_api_field_behavior_pb from "../../../../google/api/field_behavior_pb";
import * as google_cloud_talent_v4beta1_common_pb from "../../../../google/cloud/talent/v4beta1/common_pb";
import * as google_cloud_talent_v4beta1_filters_pb from "../../../../google/cloud/talent/v4beta1/filters_pb";
import * as google_cloud_talent_v4beta1_histogram_pb from "../../../../google/cloud/talent/v4beta1/histogram_pb";
import * as google_cloud_talent_v4beta1_job_pb from "../../../../google/cloud/talent/v4beta1/job_pb";
import * as google_longrunning_operations_pb from "../../../../google/longrunning/operations_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_rpc_status_pb from "../../../../google/rpc/status_pb";

export class CreateJobRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  hasJob(): boolean;
  clearJob(): void;
  getJob(): google_cloud_talent_v4beta1_job_pb.Job | undefined;
  setJob(value?: google_cloud_talent_v4beta1_job_pb.Job): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateJobRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateJobRequest): CreateJobRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateJobRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateJobRequest;
  static deserializeBinaryFromReader(message: CreateJobRequest, reader: jspb.BinaryReader): CreateJobRequest;
}

export namespace CreateJobRequest {
  export type AsObject = {
    parent: string,
    job?: google_cloud_talent_v4beta1_job_pb.Job.AsObject,
  }
}

export class GetJobRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetJobRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetJobRequest): GetJobRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetJobRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetJobRequest;
  static deserializeBinaryFromReader(message: GetJobRequest, reader: jspb.BinaryReader): GetJobRequest;
}

export namespace GetJobRequest {
  export type AsObject = {
    name: string,
  }
}

export class UpdateJobRequest extends jspb.Message {
  hasJob(): boolean;
  clearJob(): void;
  getJob(): google_cloud_talent_v4beta1_job_pb.Job | undefined;
  setJob(value?: google_cloud_talent_v4beta1_job_pb.Job): void;

  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateJobRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateJobRequest): UpdateJobRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateJobRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateJobRequest;
  static deserializeBinaryFromReader(message: UpdateJobRequest, reader: jspb.BinaryReader): UpdateJobRequest;
}

export namespace UpdateJobRequest {
  export type AsObject = {
    job?: google_cloud_talent_v4beta1_job_pb.Job.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class DeleteJobRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteJobRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteJobRequest): DeleteJobRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteJobRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteJobRequest;
  static deserializeBinaryFromReader(message: DeleteJobRequest, reader: jspb.BinaryReader): DeleteJobRequest;
}

export namespace DeleteJobRequest {
  export type AsObject = {
    name: string,
  }
}

export class BatchDeleteJobsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getFilter(): string;
  setFilter(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchDeleteJobsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BatchDeleteJobsRequest): BatchDeleteJobsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BatchDeleteJobsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchDeleteJobsRequest;
  static deserializeBinaryFromReader(message: BatchDeleteJobsRequest, reader: jspb.BinaryReader): BatchDeleteJobsRequest;
}

export namespace BatchDeleteJobsRequest {
  export type AsObject = {
    parent: string,
    filter: string,
  }
}

export class ListJobsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getFilter(): string;
  setFilter(value: string): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getJobView(): JobViewMap[keyof JobViewMap];
  setJobView(value: JobViewMap[keyof JobViewMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListJobsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListJobsRequest): ListJobsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListJobsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListJobsRequest;
  static deserializeBinaryFromReader(message: ListJobsRequest, reader: jspb.BinaryReader): ListJobsRequest;
}

export namespace ListJobsRequest {
  export type AsObject = {
    parent: string,
    filter: string,
    pageToken: string,
    pageSize: number,
    jobView: JobViewMap[keyof JobViewMap],
  }
}

export class ListJobsResponse extends jspb.Message {
  clearJobsList(): void;
  getJobsList(): Array<google_cloud_talent_v4beta1_job_pb.Job>;
  setJobsList(value: Array<google_cloud_talent_v4beta1_job_pb.Job>): void;
  addJobs(value?: google_cloud_talent_v4beta1_job_pb.Job, index?: number): google_cloud_talent_v4beta1_job_pb.Job;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  hasMetadata(): boolean;
  clearMetadata(): void;
  getMetadata(): google_cloud_talent_v4beta1_common_pb.ResponseMetadata | undefined;
  setMetadata(value?: google_cloud_talent_v4beta1_common_pb.ResponseMetadata): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListJobsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListJobsResponse): ListJobsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListJobsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListJobsResponse;
  static deserializeBinaryFromReader(message: ListJobsResponse, reader: jspb.BinaryReader): ListJobsResponse;
}

export namespace ListJobsResponse {
  export type AsObject = {
    jobsList: Array<google_cloud_talent_v4beta1_job_pb.Job.AsObject>,
    nextPageToken: string,
    metadata?: google_cloud_talent_v4beta1_common_pb.ResponseMetadata.AsObject,
  }
}

export class SearchJobsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getSearchMode(): SearchJobsRequest.SearchModeMap[keyof SearchJobsRequest.SearchModeMap];
  setSearchMode(value: SearchJobsRequest.SearchModeMap[keyof SearchJobsRequest.SearchModeMap]): void;

  hasRequestMetadata(): boolean;
  clearRequestMetadata(): void;
  getRequestMetadata(): google_cloud_talent_v4beta1_common_pb.RequestMetadata | undefined;
  setRequestMetadata(value?: google_cloud_talent_v4beta1_common_pb.RequestMetadata): void;

  hasJobQuery(): boolean;
  clearJobQuery(): void;
  getJobQuery(): google_cloud_talent_v4beta1_filters_pb.JobQuery | undefined;
  setJobQuery(value?: google_cloud_talent_v4beta1_filters_pb.JobQuery): void;

  getEnableBroadening(): boolean;
  setEnableBroadening(value: boolean): void;

  getRequirePreciseResultSize(): boolean;
  setRequirePreciseResultSize(value: boolean): void;

  clearHistogramQueriesList(): void;
  getHistogramQueriesList(): Array<google_cloud_talent_v4beta1_histogram_pb.HistogramQuery>;
  setHistogramQueriesList(value: Array<google_cloud_talent_v4beta1_histogram_pb.HistogramQuery>): void;
  addHistogramQueries(value?: google_cloud_talent_v4beta1_histogram_pb.HistogramQuery, index?: number): google_cloud_talent_v4beta1_histogram_pb.HistogramQuery;

  getJobView(): JobViewMap[keyof JobViewMap];
  setJobView(value: JobViewMap[keyof JobViewMap]): void;

  getOffset(): number;
  setOffset(value: number): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  getOrderBy(): string;
  setOrderBy(value: string): void;

  getDiversificationLevel(): SearchJobsRequest.DiversificationLevelMap[keyof SearchJobsRequest.DiversificationLevelMap];
  setDiversificationLevel(value: SearchJobsRequest.DiversificationLevelMap[keyof SearchJobsRequest.DiversificationLevelMap]): void;

  hasCustomRankingInfo(): boolean;
  clearCustomRankingInfo(): void;
  getCustomRankingInfo(): SearchJobsRequest.CustomRankingInfo | undefined;
  setCustomRankingInfo(value?: SearchJobsRequest.CustomRankingInfo): void;

  getDisableKeywordMatch(): boolean;
  setDisableKeywordMatch(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchJobsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SearchJobsRequest): SearchJobsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchJobsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchJobsRequest;
  static deserializeBinaryFromReader(message: SearchJobsRequest, reader: jspb.BinaryReader): SearchJobsRequest;
}

export namespace SearchJobsRequest {
  export type AsObject = {
    parent: string,
    searchMode: SearchJobsRequest.SearchModeMap[keyof SearchJobsRequest.SearchModeMap],
    requestMetadata?: google_cloud_talent_v4beta1_common_pb.RequestMetadata.AsObject,
    jobQuery?: google_cloud_talent_v4beta1_filters_pb.JobQuery.AsObject,
    enableBroadening: boolean,
    requirePreciseResultSize: boolean,
    histogramQueriesList: Array<google_cloud_talent_v4beta1_histogram_pb.HistogramQuery.AsObject>,
    jobView: JobViewMap[keyof JobViewMap],
    offset: number,
    pageSize: number,
    pageToken: string,
    orderBy: string,
    diversificationLevel: SearchJobsRequest.DiversificationLevelMap[keyof SearchJobsRequest.DiversificationLevelMap],
    customRankingInfo?: SearchJobsRequest.CustomRankingInfo.AsObject,
    disableKeywordMatch: boolean,
  }

  export class CustomRankingInfo extends jspb.Message {
    getImportanceLevel(): SearchJobsRequest.CustomRankingInfo.ImportanceLevelMap[keyof SearchJobsRequest.CustomRankingInfo.ImportanceLevelMap];
    setImportanceLevel(value: SearchJobsRequest.CustomRankingInfo.ImportanceLevelMap[keyof SearchJobsRequest.CustomRankingInfo.ImportanceLevelMap]): void;

    getRankingExpression(): string;
    setRankingExpression(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CustomRankingInfo.AsObject;
    static toObject(includeInstance: boolean, msg: CustomRankingInfo): CustomRankingInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CustomRankingInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CustomRankingInfo;
    static deserializeBinaryFromReader(message: CustomRankingInfo, reader: jspb.BinaryReader): CustomRankingInfo;
  }

  export namespace CustomRankingInfo {
    export type AsObject = {
      importanceLevel: SearchJobsRequest.CustomRankingInfo.ImportanceLevelMap[keyof SearchJobsRequest.CustomRankingInfo.ImportanceLevelMap],
      rankingExpression: string,
    }

    export interface ImportanceLevelMap {
      IMPORTANCE_LEVEL_UNSPECIFIED: 0;
      NONE: 1;
      LOW: 2;
      MILD: 3;
      MEDIUM: 4;
      HIGH: 5;
      EXTREME: 6;
    }

    export const ImportanceLevel: ImportanceLevelMap;
  }

  export interface SearchModeMap {
    SEARCH_MODE_UNSPECIFIED: 0;
    JOB_SEARCH: 1;
    FEATURED_JOB_SEARCH: 2;
  }

  export const SearchMode: SearchModeMap;

  export interface DiversificationLevelMap {
    DIVERSIFICATION_LEVEL_UNSPECIFIED: 0;
    DISABLED: 1;
    SIMPLE: 2;
  }

  export const DiversificationLevel: DiversificationLevelMap;
}

export class SearchJobsResponse extends jspb.Message {
  clearMatchingJobsList(): void;
  getMatchingJobsList(): Array<SearchJobsResponse.MatchingJob>;
  setMatchingJobsList(value: Array<SearchJobsResponse.MatchingJob>): void;
  addMatchingJobs(value?: SearchJobsResponse.MatchingJob, index?: number): SearchJobsResponse.MatchingJob;

  clearHistogramQueryResultsList(): void;
  getHistogramQueryResultsList(): Array<google_cloud_talent_v4beta1_histogram_pb.HistogramQueryResult>;
  setHistogramQueryResultsList(value: Array<google_cloud_talent_v4beta1_histogram_pb.HistogramQueryResult>): void;
  addHistogramQueryResults(value?: google_cloud_talent_v4beta1_histogram_pb.HistogramQueryResult, index?: number): google_cloud_talent_v4beta1_histogram_pb.HistogramQueryResult;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  clearLocationFiltersList(): void;
  getLocationFiltersList(): Array<google_cloud_talent_v4beta1_common_pb.Location>;
  setLocationFiltersList(value: Array<google_cloud_talent_v4beta1_common_pb.Location>): void;
  addLocationFilters(value?: google_cloud_talent_v4beta1_common_pb.Location, index?: number): google_cloud_talent_v4beta1_common_pb.Location;

  getEstimatedTotalSize(): number;
  setEstimatedTotalSize(value: number): void;

  getTotalSize(): number;
  setTotalSize(value: number): void;

  hasMetadata(): boolean;
  clearMetadata(): void;
  getMetadata(): google_cloud_talent_v4beta1_common_pb.ResponseMetadata | undefined;
  setMetadata(value?: google_cloud_talent_v4beta1_common_pb.ResponseMetadata): void;

  getBroadenedQueryJobsCount(): number;
  setBroadenedQueryJobsCount(value: number): void;

  hasSpellCorrection(): boolean;
  clearSpellCorrection(): void;
  getSpellCorrection(): google_cloud_talent_v4beta1_common_pb.SpellingCorrection | undefined;
  setSpellCorrection(value?: google_cloud_talent_v4beta1_common_pb.SpellingCorrection): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchJobsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SearchJobsResponse): SearchJobsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchJobsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchJobsResponse;
  static deserializeBinaryFromReader(message: SearchJobsResponse, reader: jspb.BinaryReader): SearchJobsResponse;
}

export namespace SearchJobsResponse {
  export type AsObject = {
    matchingJobsList: Array<SearchJobsResponse.MatchingJob.AsObject>,
    histogramQueryResultsList: Array<google_cloud_talent_v4beta1_histogram_pb.HistogramQueryResult.AsObject>,
    nextPageToken: string,
    locationFiltersList: Array<google_cloud_talent_v4beta1_common_pb.Location.AsObject>,
    estimatedTotalSize: number,
    totalSize: number,
    metadata?: google_cloud_talent_v4beta1_common_pb.ResponseMetadata.AsObject,
    broadenedQueryJobsCount: number,
    spellCorrection?: google_cloud_talent_v4beta1_common_pb.SpellingCorrection.AsObject,
  }

  export class MatchingJob extends jspb.Message {
    hasJob(): boolean;
    clearJob(): void;
    getJob(): google_cloud_talent_v4beta1_job_pb.Job | undefined;
    setJob(value?: google_cloud_talent_v4beta1_job_pb.Job): void;

    getJobSummary(): string;
    setJobSummary(value: string): void;

    getJobTitleSnippet(): string;
    setJobTitleSnippet(value: string): void;

    getSearchTextSnippet(): string;
    setSearchTextSnippet(value: string): void;

    hasCommuteInfo(): boolean;
    clearCommuteInfo(): void;
    getCommuteInfo(): SearchJobsResponse.CommuteInfo | undefined;
    setCommuteInfo(value?: SearchJobsResponse.CommuteInfo): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MatchingJob.AsObject;
    static toObject(includeInstance: boolean, msg: MatchingJob): MatchingJob.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MatchingJob, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MatchingJob;
    static deserializeBinaryFromReader(message: MatchingJob, reader: jspb.BinaryReader): MatchingJob;
  }

  export namespace MatchingJob {
    export type AsObject = {
      job?: google_cloud_talent_v4beta1_job_pb.Job.AsObject,
      jobSummary: string,
      jobTitleSnippet: string,
      searchTextSnippet: string,
      commuteInfo?: SearchJobsResponse.CommuteInfo.AsObject,
    }
  }

  export class CommuteInfo extends jspb.Message {
    hasJobLocation(): boolean;
    clearJobLocation(): void;
    getJobLocation(): google_cloud_talent_v4beta1_common_pb.Location | undefined;
    setJobLocation(value?: google_cloud_talent_v4beta1_common_pb.Location): void;

    hasTravelDuration(): boolean;
    clearTravelDuration(): void;
    getTravelDuration(): google_protobuf_duration_pb.Duration | undefined;
    setTravelDuration(value?: google_protobuf_duration_pb.Duration): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CommuteInfo.AsObject;
    static toObject(includeInstance: boolean, msg: CommuteInfo): CommuteInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CommuteInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CommuteInfo;
    static deserializeBinaryFromReader(message: CommuteInfo, reader: jspb.BinaryReader): CommuteInfo;
  }

  export namespace CommuteInfo {
    export type AsObject = {
      jobLocation?: google_cloud_talent_v4beta1_common_pb.Location.AsObject,
      travelDuration?: google_protobuf_duration_pb.Duration.AsObject,
    }
  }
}

export class BatchCreateJobsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  clearJobsList(): void;
  getJobsList(): Array<google_cloud_talent_v4beta1_job_pb.Job>;
  setJobsList(value: Array<google_cloud_talent_v4beta1_job_pb.Job>): void;
  addJobs(value?: google_cloud_talent_v4beta1_job_pb.Job, index?: number): google_cloud_talent_v4beta1_job_pb.Job;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchCreateJobsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BatchCreateJobsRequest): BatchCreateJobsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BatchCreateJobsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchCreateJobsRequest;
  static deserializeBinaryFromReader(message: BatchCreateJobsRequest, reader: jspb.BinaryReader): BatchCreateJobsRequest;
}

export namespace BatchCreateJobsRequest {
  export type AsObject = {
    parent: string,
    jobsList: Array<google_cloud_talent_v4beta1_job_pb.Job.AsObject>,
  }
}

export class BatchUpdateJobsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  clearJobsList(): void;
  getJobsList(): Array<google_cloud_talent_v4beta1_job_pb.Job>;
  setJobsList(value: Array<google_cloud_talent_v4beta1_job_pb.Job>): void;
  addJobs(value?: google_cloud_talent_v4beta1_job_pb.Job, index?: number): google_cloud_talent_v4beta1_job_pb.Job;

  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchUpdateJobsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BatchUpdateJobsRequest): BatchUpdateJobsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BatchUpdateJobsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchUpdateJobsRequest;
  static deserializeBinaryFromReader(message: BatchUpdateJobsRequest, reader: jspb.BinaryReader): BatchUpdateJobsRequest;
}

export namespace BatchUpdateJobsRequest {
  export type AsObject = {
    parent: string,
    jobsList: Array<google_cloud_talent_v4beta1_job_pb.Job.AsObject>,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class JobOperationResult extends jspb.Message {
  clearJobResultsList(): void;
  getJobResultsList(): Array<JobOperationResult.JobResult>;
  setJobResultsList(value: Array<JobOperationResult.JobResult>): void;
  addJobResults(value?: JobOperationResult.JobResult, index?: number): JobOperationResult.JobResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JobOperationResult.AsObject;
  static toObject(includeInstance: boolean, msg: JobOperationResult): JobOperationResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: JobOperationResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JobOperationResult;
  static deserializeBinaryFromReader(message: JobOperationResult, reader: jspb.BinaryReader): JobOperationResult;
}

export namespace JobOperationResult {
  export type AsObject = {
    jobResultsList: Array<JobOperationResult.JobResult.AsObject>,
  }

  export class JobResult extends jspb.Message {
    hasJob(): boolean;
    clearJob(): void;
    getJob(): google_cloud_talent_v4beta1_job_pb.Job | undefined;
    setJob(value?: google_cloud_talent_v4beta1_job_pb.Job): void;

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): google_rpc_status_pb.Status | undefined;
    setStatus(value?: google_rpc_status_pb.Status): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): JobResult.AsObject;
    static toObject(includeInstance: boolean, msg: JobResult): JobResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: JobResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): JobResult;
    static deserializeBinaryFromReader(message: JobResult, reader: jspb.BinaryReader): JobResult;
  }

  export namespace JobResult {
    export type AsObject = {
      job?: google_cloud_talent_v4beta1_job_pb.Job.AsObject,
      status?: google_rpc_status_pb.Status.AsObject,
    }
  }
}

export interface JobViewMap {
  JOB_VIEW_UNSPECIFIED: 0;
  JOB_VIEW_ID_ONLY: 1;
  JOB_VIEW_MINIMAL: 2;
  JOB_VIEW_SMALL: 3;
  JOB_VIEW_FULL: 4;
}

export const JobView: JobViewMap;

