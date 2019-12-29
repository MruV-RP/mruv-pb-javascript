// package: google.genomics.v1
// file: google/genomics/v1/reads.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as google_genomics_v1_range_pb from "../../../google/genomics/v1/range_pb";
import * as google_genomics_v1_readalignment_pb from "../../../google/genomics/v1/readalignment_pb";
import * as google_genomics_v1_readgroupset_pb from "../../../google/genomics/v1/readgroupset_pb";
import * as google_longrunning_operations_pb from "../../../google/longrunning/operations_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";

export class SearchReadGroupSetsRequest extends jspb.Message {
  clearDatasetIdsList(): void;
  getDatasetIdsList(): Array<string>;
  setDatasetIdsList(value: Array<string>): void;
  addDatasetIds(value: string, index?: number): string;

  getName(): string;
  setName(value: string): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchReadGroupSetsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SearchReadGroupSetsRequest): SearchReadGroupSetsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchReadGroupSetsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchReadGroupSetsRequest;
  static deserializeBinaryFromReader(message: SearchReadGroupSetsRequest, reader: jspb.BinaryReader): SearchReadGroupSetsRequest;
}

export namespace SearchReadGroupSetsRequest {
  export type AsObject = {
    datasetIdsList: Array<string>,
    name: string,
    pageToken: string,
    pageSize: number,
  }
}

export class SearchReadGroupSetsResponse extends jspb.Message {
  clearReadGroupSetsList(): void;
  getReadGroupSetsList(): Array<google_genomics_v1_readgroupset_pb.ReadGroupSet>;
  setReadGroupSetsList(value: Array<google_genomics_v1_readgroupset_pb.ReadGroupSet>): void;
  addReadGroupSets(value?: google_genomics_v1_readgroupset_pb.ReadGroupSet, index?: number): google_genomics_v1_readgroupset_pb.ReadGroupSet;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchReadGroupSetsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SearchReadGroupSetsResponse): SearchReadGroupSetsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchReadGroupSetsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchReadGroupSetsResponse;
  static deserializeBinaryFromReader(message: SearchReadGroupSetsResponse, reader: jspb.BinaryReader): SearchReadGroupSetsResponse;
}

export namespace SearchReadGroupSetsResponse {
  export type AsObject = {
    readGroupSetsList: Array<google_genomics_v1_readgroupset_pb.ReadGroupSet.AsObject>,
    nextPageToken: string,
  }
}

export class ImportReadGroupSetsRequest extends jspb.Message {
  getDatasetId(): string;
  setDatasetId(value: string): void;

  getReferenceSetId(): string;
  setReferenceSetId(value: string): void;

  clearSourceUrisList(): void;
  getSourceUrisList(): Array<string>;
  setSourceUrisList(value: Array<string>): void;
  addSourceUris(value: string, index?: number): string;

  getPartitionStrategy(): ImportReadGroupSetsRequest.PartitionStrategyMap[keyof ImportReadGroupSetsRequest.PartitionStrategyMap];
  setPartitionStrategy(value: ImportReadGroupSetsRequest.PartitionStrategyMap[keyof ImportReadGroupSetsRequest.PartitionStrategyMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImportReadGroupSetsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ImportReadGroupSetsRequest): ImportReadGroupSetsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ImportReadGroupSetsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImportReadGroupSetsRequest;
  static deserializeBinaryFromReader(message: ImportReadGroupSetsRequest, reader: jspb.BinaryReader): ImportReadGroupSetsRequest;
}

export namespace ImportReadGroupSetsRequest {
  export type AsObject = {
    datasetId: string,
    referenceSetId: string,
    sourceUrisList: Array<string>,
    partitionStrategy: ImportReadGroupSetsRequest.PartitionStrategyMap[keyof ImportReadGroupSetsRequest.PartitionStrategyMap],
  }

  export interface PartitionStrategyMap {
    PARTITION_STRATEGY_UNSPECIFIED: 0;
    PER_FILE_PER_SAMPLE: 1;
    MERGE_ALL: 2;
  }

  export const PartitionStrategy: PartitionStrategyMap;
}

export class ImportReadGroupSetsResponse extends jspb.Message {
  clearReadGroupSetIdsList(): void;
  getReadGroupSetIdsList(): Array<string>;
  setReadGroupSetIdsList(value: Array<string>): void;
  addReadGroupSetIds(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImportReadGroupSetsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ImportReadGroupSetsResponse): ImportReadGroupSetsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ImportReadGroupSetsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImportReadGroupSetsResponse;
  static deserializeBinaryFromReader(message: ImportReadGroupSetsResponse, reader: jspb.BinaryReader): ImportReadGroupSetsResponse;
}

export namespace ImportReadGroupSetsResponse {
  export type AsObject = {
    readGroupSetIdsList: Array<string>,
  }
}

export class ExportReadGroupSetRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getExportUri(): string;
  setExportUri(value: string): void;

  getReadGroupSetId(): string;
  setReadGroupSetId(value: string): void;

  clearReferenceNamesList(): void;
  getReferenceNamesList(): Array<string>;
  setReferenceNamesList(value: Array<string>): void;
  addReferenceNames(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExportReadGroupSetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExportReadGroupSetRequest): ExportReadGroupSetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExportReadGroupSetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExportReadGroupSetRequest;
  static deserializeBinaryFromReader(message: ExportReadGroupSetRequest, reader: jspb.BinaryReader): ExportReadGroupSetRequest;
}

export namespace ExportReadGroupSetRequest {
  export type AsObject = {
    projectId: string,
    exportUri: string,
    readGroupSetId: string,
    referenceNamesList: Array<string>,
  }
}

export class UpdateReadGroupSetRequest extends jspb.Message {
  getReadGroupSetId(): string;
  setReadGroupSetId(value: string): void;

  hasReadGroupSet(): boolean;
  clearReadGroupSet(): void;
  getReadGroupSet(): google_genomics_v1_readgroupset_pb.ReadGroupSet | undefined;
  setReadGroupSet(value?: google_genomics_v1_readgroupset_pb.ReadGroupSet): void;

  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateReadGroupSetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateReadGroupSetRequest): UpdateReadGroupSetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateReadGroupSetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateReadGroupSetRequest;
  static deserializeBinaryFromReader(message: UpdateReadGroupSetRequest, reader: jspb.BinaryReader): UpdateReadGroupSetRequest;
}

export namespace UpdateReadGroupSetRequest {
  export type AsObject = {
    readGroupSetId: string,
    readGroupSet?: google_genomics_v1_readgroupset_pb.ReadGroupSet.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class DeleteReadGroupSetRequest extends jspb.Message {
  getReadGroupSetId(): string;
  setReadGroupSetId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteReadGroupSetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteReadGroupSetRequest): DeleteReadGroupSetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteReadGroupSetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteReadGroupSetRequest;
  static deserializeBinaryFromReader(message: DeleteReadGroupSetRequest, reader: jspb.BinaryReader): DeleteReadGroupSetRequest;
}

export namespace DeleteReadGroupSetRequest {
  export type AsObject = {
    readGroupSetId: string,
  }
}

export class GetReadGroupSetRequest extends jspb.Message {
  getReadGroupSetId(): string;
  setReadGroupSetId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetReadGroupSetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetReadGroupSetRequest): GetReadGroupSetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetReadGroupSetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetReadGroupSetRequest;
  static deserializeBinaryFromReader(message: GetReadGroupSetRequest, reader: jspb.BinaryReader): GetReadGroupSetRequest;
}

export namespace GetReadGroupSetRequest {
  export type AsObject = {
    readGroupSetId: string,
  }
}

export class ListCoverageBucketsRequest extends jspb.Message {
  getReadGroupSetId(): string;
  setReadGroupSetId(value: string): void;

  getReferenceName(): string;
  setReferenceName(value: string): void;

  getStart(): number;
  setStart(value: number): void;

  getEnd(): number;
  setEnd(value: number): void;

  getTargetBucketWidth(): number;
  setTargetBucketWidth(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCoverageBucketsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListCoverageBucketsRequest): ListCoverageBucketsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListCoverageBucketsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCoverageBucketsRequest;
  static deserializeBinaryFromReader(message: ListCoverageBucketsRequest, reader: jspb.BinaryReader): ListCoverageBucketsRequest;
}

export namespace ListCoverageBucketsRequest {
  export type AsObject = {
    readGroupSetId: string,
    referenceName: string,
    start: number,
    end: number,
    targetBucketWidth: number,
    pageToken: string,
    pageSize: number,
  }
}

export class CoverageBucket extends jspb.Message {
  hasRange(): boolean;
  clearRange(): void;
  getRange(): google_genomics_v1_range_pb.Range | undefined;
  setRange(value?: google_genomics_v1_range_pb.Range): void;

  getMeanCoverage(): number;
  setMeanCoverage(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CoverageBucket.AsObject;
  static toObject(includeInstance: boolean, msg: CoverageBucket): CoverageBucket.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CoverageBucket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CoverageBucket;
  static deserializeBinaryFromReader(message: CoverageBucket, reader: jspb.BinaryReader): CoverageBucket;
}

export namespace CoverageBucket {
  export type AsObject = {
    range?: google_genomics_v1_range_pb.Range.AsObject,
    meanCoverage: number,
  }
}

export class ListCoverageBucketsResponse extends jspb.Message {
  getBucketWidth(): number;
  setBucketWidth(value: number): void;

  clearCoverageBucketsList(): void;
  getCoverageBucketsList(): Array<CoverageBucket>;
  setCoverageBucketsList(value: Array<CoverageBucket>): void;
  addCoverageBuckets(value?: CoverageBucket, index?: number): CoverageBucket;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCoverageBucketsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListCoverageBucketsResponse): ListCoverageBucketsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListCoverageBucketsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCoverageBucketsResponse;
  static deserializeBinaryFromReader(message: ListCoverageBucketsResponse, reader: jspb.BinaryReader): ListCoverageBucketsResponse;
}

export namespace ListCoverageBucketsResponse {
  export type AsObject = {
    bucketWidth: number,
    coverageBucketsList: Array<CoverageBucket.AsObject>,
    nextPageToken: string,
  }
}

export class SearchReadsRequest extends jspb.Message {
  clearReadGroupSetIdsList(): void;
  getReadGroupSetIdsList(): Array<string>;
  setReadGroupSetIdsList(value: Array<string>): void;
  addReadGroupSetIds(value: string, index?: number): string;

  clearReadGroupIdsList(): void;
  getReadGroupIdsList(): Array<string>;
  setReadGroupIdsList(value: Array<string>): void;
  addReadGroupIds(value: string, index?: number): string;

  getReferenceName(): string;
  setReferenceName(value: string): void;

  getStart(): number;
  setStart(value: number): void;

  getEnd(): number;
  setEnd(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchReadsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SearchReadsRequest): SearchReadsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchReadsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchReadsRequest;
  static deserializeBinaryFromReader(message: SearchReadsRequest, reader: jspb.BinaryReader): SearchReadsRequest;
}

export namespace SearchReadsRequest {
  export type AsObject = {
    readGroupSetIdsList: Array<string>,
    readGroupIdsList: Array<string>,
    referenceName: string,
    start: number,
    end: number,
    pageToken: string,
    pageSize: number,
  }
}

export class SearchReadsResponse extends jspb.Message {
  clearAlignmentsList(): void;
  getAlignmentsList(): Array<google_genomics_v1_readalignment_pb.Read>;
  setAlignmentsList(value: Array<google_genomics_v1_readalignment_pb.Read>): void;
  addAlignments(value?: google_genomics_v1_readalignment_pb.Read, index?: number): google_genomics_v1_readalignment_pb.Read;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchReadsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SearchReadsResponse): SearchReadsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchReadsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchReadsResponse;
  static deserializeBinaryFromReader(message: SearchReadsResponse, reader: jspb.BinaryReader): SearchReadsResponse;
}

export namespace SearchReadsResponse {
  export type AsObject = {
    alignmentsList: Array<google_genomics_v1_readalignment_pb.Read.AsObject>,
    nextPageToken: string,
  }
}

export class StreamReadsRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getReadGroupSetId(): string;
  setReadGroupSetId(value: string): void;

  getReferenceName(): string;
  setReferenceName(value: string): void;

  getStart(): number;
  setStart(value: number): void;

  getEnd(): number;
  setEnd(value: number): void;

  getShard(): number;
  setShard(value: number): void;

  getTotalShards(): number;
  setTotalShards(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamReadsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StreamReadsRequest): StreamReadsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StreamReadsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamReadsRequest;
  static deserializeBinaryFromReader(message: StreamReadsRequest, reader: jspb.BinaryReader): StreamReadsRequest;
}

export namespace StreamReadsRequest {
  export type AsObject = {
    projectId: string,
    readGroupSetId: string,
    referenceName: string,
    start: number,
    end: number,
    shard: number,
    totalShards: number,
  }
}

export class StreamReadsResponse extends jspb.Message {
  clearAlignmentsList(): void;
  getAlignmentsList(): Array<google_genomics_v1_readalignment_pb.Read>;
  setAlignmentsList(value: Array<google_genomics_v1_readalignment_pb.Read>): void;
  addAlignments(value?: google_genomics_v1_readalignment_pb.Read, index?: number): google_genomics_v1_readalignment_pb.Read;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamReadsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StreamReadsResponse): StreamReadsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StreamReadsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamReadsResponse;
  static deserializeBinaryFromReader(message: StreamReadsResponse, reader: jspb.BinaryReader): StreamReadsResponse;
}

export namespace StreamReadsResponse {
  export type AsObject = {
    alignmentsList: Array<google_genomics_v1_readalignment_pb.Read.AsObject>,
  }
}

