// package: google.cloud.datacatalog.v1beta1
// file: google/cloud/datacatalog/v1beta1/datacatalog.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";
import * as google_api_client_pb from "../../../../google/api/client_pb";
import * as google_api_field_behavior_pb from "../../../../google/api/field_behavior_pb";
import * as google_api_resource_pb from "../../../../google/api/resource_pb";
import * as google_cloud_datacatalog_v1beta1_gcs_fileset_spec_pb from "../../../../google/cloud/datacatalog/v1beta1/gcs_fileset_spec_pb";
import * as google_cloud_datacatalog_v1beta1_schema_pb from "../../../../google/cloud/datacatalog/v1beta1/schema_pb";
import * as google_cloud_datacatalog_v1beta1_search_pb from "../../../../google/cloud/datacatalog/v1beta1/search_pb";
import * as google_cloud_datacatalog_v1beta1_table_spec_pb from "../../../../google/cloud/datacatalog/v1beta1/table_spec_pb";
import * as google_cloud_datacatalog_v1beta1_tags_pb from "../../../../google/cloud/datacatalog/v1beta1/tags_pb";
import * as google_cloud_datacatalog_v1beta1_timestamps_pb from "../../../../google/cloud/datacatalog/v1beta1/timestamps_pb";
import * as google_iam_v1_iam_policy_pb from "../../../../google/iam/v1/iam_policy_pb";
import * as google_iam_v1_policy_pb from "../../../../google/iam/v1/policy_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";

export class SearchCatalogRequest extends jspb.Message {
  hasScope(): boolean;
  clearScope(): void;
  getScope(): SearchCatalogRequest.Scope | undefined;
  setScope(value?: SearchCatalogRequest.Scope): void;

  getQuery(): string;
  setQuery(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  getOrderBy(): string;
  setOrderBy(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchCatalogRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SearchCatalogRequest): SearchCatalogRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchCatalogRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchCatalogRequest;
  static deserializeBinaryFromReader(message: SearchCatalogRequest, reader: jspb.BinaryReader): SearchCatalogRequest;
}

export namespace SearchCatalogRequest {
  export type AsObject = {
    scope?: SearchCatalogRequest.Scope.AsObject,
    query: string,
    pageSize: number,
    pageToken: string,
    orderBy: string,
  }

  export class Scope extends jspb.Message {
    clearIncludeOrgIdsList(): void;
    getIncludeOrgIdsList(): Array<string>;
    setIncludeOrgIdsList(value: Array<string>): void;
    addIncludeOrgIds(value: string, index?: number): string;

    clearIncludeProjectIdsList(): void;
    getIncludeProjectIdsList(): Array<string>;
    setIncludeProjectIdsList(value: Array<string>): void;
    addIncludeProjectIds(value: string, index?: number): string;

    getIncludeGcpPublicDatasets(): boolean;
    setIncludeGcpPublicDatasets(value: boolean): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Scope.AsObject;
    static toObject(includeInstance: boolean, msg: Scope): Scope.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Scope, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Scope;
    static deserializeBinaryFromReader(message: Scope, reader: jspb.BinaryReader): Scope;
  }

  export namespace Scope {
    export type AsObject = {
      includeOrgIdsList: Array<string>,
      includeProjectIdsList: Array<string>,
      includeGcpPublicDatasets: boolean,
    }
  }
}

export class SearchCatalogResponse extends jspb.Message {
  clearResultsList(): void;
  getResultsList(): Array<google_cloud_datacatalog_v1beta1_search_pb.SearchCatalogResult>;
  setResultsList(value: Array<google_cloud_datacatalog_v1beta1_search_pb.SearchCatalogResult>): void;
  addResults(value?: google_cloud_datacatalog_v1beta1_search_pb.SearchCatalogResult, index?: number): google_cloud_datacatalog_v1beta1_search_pb.SearchCatalogResult;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchCatalogResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SearchCatalogResponse): SearchCatalogResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchCatalogResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchCatalogResponse;
  static deserializeBinaryFromReader(message: SearchCatalogResponse, reader: jspb.BinaryReader): SearchCatalogResponse;
}

export namespace SearchCatalogResponse {
  export type AsObject = {
    resultsList: Array<google_cloud_datacatalog_v1beta1_search_pb.SearchCatalogResult.AsObject>,
    nextPageToken: string,
  }
}

export class CreateEntryGroupRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getEntryGroupId(): string;
  setEntryGroupId(value: string): void;

  hasEntryGroup(): boolean;
  clearEntryGroup(): void;
  getEntryGroup(): EntryGroup | undefined;
  setEntryGroup(value?: EntryGroup): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateEntryGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateEntryGroupRequest): CreateEntryGroupRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateEntryGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateEntryGroupRequest;
  static deserializeBinaryFromReader(message: CreateEntryGroupRequest, reader: jspb.BinaryReader): CreateEntryGroupRequest;
}

export namespace CreateEntryGroupRequest {
  export type AsObject = {
    parent: string,
    entryGroupId: string,
    entryGroup?: EntryGroup.AsObject,
  }
}

export class GetEntryGroupRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasReadMask(): boolean;
  clearReadMask(): void;
  getReadMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setReadMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEntryGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetEntryGroupRequest): GetEntryGroupRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetEntryGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEntryGroupRequest;
  static deserializeBinaryFromReader(message: GetEntryGroupRequest, reader: jspb.BinaryReader): GetEntryGroupRequest;
}

export namespace GetEntryGroupRequest {
  export type AsObject = {
    name: string,
    readMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class DeleteEntryGroupRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteEntryGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteEntryGroupRequest): DeleteEntryGroupRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteEntryGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteEntryGroupRequest;
  static deserializeBinaryFromReader(message: DeleteEntryGroupRequest, reader: jspb.BinaryReader): DeleteEntryGroupRequest;
}

export namespace DeleteEntryGroupRequest {
  export type AsObject = {
    name: string,
  }
}

export class CreateEntryRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getEntryId(): string;
  setEntryId(value: string): void;

  hasEntry(): boolean;
  clearEntry(): void;
  getEntry(): Entry | undefined;
  setEntry(value?: Entry): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateEntryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateEntryRequest): CreateEntryRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateEntryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateEntryRequest;
  static deserializeBinaryFromReader(message: CreateEntryRequest, reader: jspb.BinaryReader): CreateEntryRequest;
}

export namespace CreateEntryRequest {
  export type AsObject = {
    parent: string,
    entryId: string,
    entry?: Entry.AsObject,
  }
}

export class UpdateEntryRequest extends jspb.Message {
  hasEntry(): boolean;
  clearEntry(): void;
  getEntry(): Entry | undefined;
  setEntry(value?: Entry): void;

  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateEntryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateEntryRequest): UpdateEntryRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateEntryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateEntryRequest;
  static deserializeBinaryFromReader(message: UpdateEntryRequest, reader: jspb.BinaryReader): UpdateEntryRequest;
}

export namespace UpdateEntryRequest {
  export type AsObject = {
    entry?: Entry.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class DeleteEntryRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteEntryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteEntryRequest): DeleteEntryRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteEntryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteEntryRequest;
  static deserializeBinaryFromReader(message: DeleteEntryRequest, reader: jspb.BinaryReader): DeleteEntryRequest;
}

export namespace DeleteEntryRequest {
  export type AsObject = {
    name: string,
  }
}

export class GetEntryRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEntryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetEntryRequest): GetEntryRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetEntryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEntryRequest;
  static deserializeBinaryFromReader(message: GetEntryRequest, reader: jspb.BinaryReader): GetEntryRequest;
}

export namespace GetEntryRequest {
  export type AsObject = {
    name: string,
  }
}

export class LookupEntryRequest extends jspb.Message {
  hasLinkedResource(): boolean;
  clearLinkedResource(): void;
  getLinkedResource(): string;
  setLinkedResource(value: string): void;

  hasSqlResource(): boolean;
  clearSqlResource(): void;
  getSqlResource(): string;
  setSqlResource(value: string): void;

  getTargetNameCase(): LookupEntryRequest.TargetNameCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LookupEntryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LookupEntryRequest): LookupEntryRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LookupEntryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LookupEntryRequest;
  static deserializeBinaryFromReader(message: LookupEntryRequest, reader: jspb.BinaryReader): LookupEntryRequest;
}

export namespace LookupEntryRequest {
  export type AsObject = {
    linkedResource: string,
    sqlResource: string,
  }

  export enum TargetNameCase {
    TARGET_NAME_NOT_SET = 0,
    LINKED_RESOURCE = 1,
    SQL_RESOURCE = 3,
  }
}

export class Entry extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getLinkedResource(): string;
  setLinkedResource(value: string): void;

  hasType(): boolean;
  clearType(): void;
  getType(): EntryTypeMap[keyof EntryTypeMap];
  setType(value: EntryTypeMap[keyof EntryTypeMap]): void;

  hasGcsFilesetSpec(): boolean;
  clearGcsFilesetSpec(): void;
  getGcsFilesetSpec(): google_cloud_datacatalog_v1beta1_gcs_fileset_spec_pb.GcsFilesetSpec | undefined;
  setGcsFilesetSpec(value?: google_cloud_datacatalog_v1beta1_gcs_fileset_spec_pb.GcsFilesetSpec): void;

  hasBigqueryTableSpec(): boolean;
  clearBigqueryTableSpec(): void;
  getBigqueryTableSpec(): google_cloud_datacatalog_v1beta1_table_spec_pb.BigQueryTableSpec | undefined;
  setBigqueryTableSpec(value?: google_cloud_datacatalog_v1beta1_table_spec_pb.BigQueryTableSpec): void;

  hasBigqueryDateShardedSpec(): boolean;
  clearBigqueryDateShardedSpec(): void;
  getBigqueryDateShardedSpec(): google_cloud_datacatalog_v1beta1_table_spec_pb.BigQueryDateShardedSpec | undefined;
  setBigqueryDateShardedSpec(value?: google_cloud_datacatalog_v1beta1_table_spec_pb.BigQueryDateShardedSpec): void;

  getDisplayName(): string;
  setDisplayName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  hasSchema(): boolean;
  clearSchema(): void;
  getSchema(): google_cloud_datacatalog_v1beta1_schema_pb.Schema | undefined;
  setSchema(value?: google_cloud_datacatalog_v1beta1_schema_pb.Schema): void;

  hasSourceSystemTimestamps(): boolean;
  clearSourceSystemTimestamps(): void;
  getSourceSystemTimestamps(): google_cloud_datacatalog_v1beta1_timestamps_pb.SystemTimestamps | undefined;
  setSourceSystemTimestamps(value?: google_cloud_datacatalog_v1beta1_timestamps_pb.SystemTimestamps): void;

  getEntryTypeCase(): Entry.EntryTypeCase;
  getTypeSpecCase(): Entry.TypeSpecCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Entry.AsObject;
  static toObject(includeInstance: boolean, msg: Entry): Entry.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Entry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Entry;
  static deserializeBinaryFromReader(message: Entry, reader: jspb.BinaryReader): Entry;
}

export namespace Entry {
  export type AsObject = {
    name: string,
    linkedResource: string,
    type: EntryTypeMap[keyof EntryTypeMap],
    gcsFilesetSpec?: google_cloud_datacatalog_v1beta1_gcs_fileset_spec_pb.GcsFilesetSpec.AsObject,
    bigqueryTableSpec?: google_cloud_datacatalog_v1beta1_table_spec_pb.BigQueryTableSpec.AsObject,
    bigqueryDateShardedSpec?: google_cloud_datacatalog_v1beta1_table_spec_pb.BigQueryDateShardedSpec.AsObject,
    displayName: string,
    description: string,
    schema?: google_cloud_datacatalog_v1beta1_schema_pb.Schema.AsObject,
    sourceSystemTimestamps?: google_cloud_datacatalog_v1beta1_timestamps_pb.SystemTimestamps.AsObject,
  }

  export enum EntryTypeCase {
    ENTRY_TYPE_NOT_SET = 0,
    TYPE = 2,
  }

  export enum TypeSpecCase {
    TYPE_SPEC_NOT_SET = 0,
    GCS_FILESET_SPEC = 6,
    BIGQUERY_TABLE_SPEC = 12,
    BIGQUERY_DATE_SHARDED_SPEC = 15,
  }
}

export class EntryGroup extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDisplayName(): string;
  setDisplayName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  hasDataCatalogTimestamps(): boolean;
  clearDataCatalogTimestamps(): void;
  getDataCatalogTimestamps(): google_cloud_datacatalog_v1beta1_timestamps_pb.SystemTimestamps | undefined;
  setDataCatalogTimestamps(value?: google_cloud_datacatalog_v1beta1_timestamps_pb.SystemTimestamps): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EntryGroup.AsObject;
  static toObject(includeInstance: boolean, msg: EntryGroup): EntryGroup.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EntryGroup, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EntryGroup;
  static deserializeBinaryFromReader(message: EntryGroup, reader: jspb.BinaryReader): EntryGroup;
}

export namespace EntryGroup {
  export type AsObject = {
    name: string,
    displayName: string,
    description: string,
    dataCatalogTimestamps?: google_cloud_datacatalog_v1beta1_timestamps_pb.SystemTimestamps.AsObject,
  }
}

export class CreateTagTemplateRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getTagTemplateId(): string;
  setTagTemplateId(value: string): void;

  hasTagTemplate(): boolean;
  clearTagTemplate(): void;
  getTagTemplate(): google_cloud_datacatalog_v1beta1_tags_pb.TagTemplate | undefined;
  setTagTemplate(value?: google_cloud_datacatalog_v1beta1_tags_pb.TagTemplate): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTagTemplateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTagTemplateRequest): CreateTagTemplateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateTagTemplateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTagTemplateRequest;
  static deserializeBinaryFromReader(message: CreateTagTemplateRequest, reader: jspb.BinaryReader): CreateTagTemplateRequest;
}

export namespace CreateTagTemplateRequest {
  export type AsObject = {
    parent: string,
    tagTemplateId: string,
    tagTemplate?: google_cloud_datacatalog_v1beta1_tags_pb.TagTemplate.AsObject,
  }
}

export class GetTagTemplateRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTagTemplateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTagTemplateRequest): GetTagTemplateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTagTemplateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTagTemplateRequest;
  static deserializeBinaryFromReader(message: GetTagTemplateRequest, reader: jspb.BinaryReader): GetTagTemplateRequest;
}

export namespace GetTagTemplateRequest {
  export type AsObject = {
    name: string,
  }
}

export class UpdateTagTemplateRequest extends jspb.Message {
  hasTagTemplate(): boolean;
  clearTagTemplate(): void;
  getTagTemplate(): google_cloud_datacatalog_v1beta1_tags_pb.TagTemplate | undefined;
  setTagTemplate(value?: google_cloud_datacatalog_v1beta1_tags_pb.TagTemplate): void;

  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateTagTemplateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateTagTemplateRequest): UpdateTagTemplateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateTagTemplateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateTagTemplateRequest;
  static deserializeBinaryFromReader(message: UpdateTagTemplateRequest, reader: jspb.BinaryReader): UpdateTagTemplateRequest;
}

export namespace UpdateTagTemplateRequest {
  export type AsObject = {
    tagTemplate?: google_cloud_datacatalog_v1beta1_tags_pb.TagTemplate.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class DeleteTagTemplateRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getForce(): boolean;
  setForce(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteTagTemplateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteTagTemplateRequest): DeleteTagTemplateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteTagTemplateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteTagTemplateRequest;
  static deserializeBinaryFromReader(message: DeleteTagTemplateRequest, reader: jspb.BinaryReader): DeleteTagTemplateRequest;
}

export namespace DeleteTagTemplateRequest {
  export type AsObject = {
    name: string,
    force: boolean,
  }
}

export class CreateTagRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  hasTag(): boolean;
  clearTag(): void;
  getTag(): google_cloud_datacatalog_v1beta1_tags_pb.Tag | undefined;
  setTag(value?: google_cloud_datacatalog_v1beta1_tags_pb.Tag): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTagRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTagRequest): CreateTagRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateTagRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTagRequest;
  static deserializeBinaryFromReader(message: CreateTagRequest, reader: jspb.BinaryReader): CreateTagRequest;
}

export namespace CreateTagRequest {
  export type AsObject = {
    parent: string,
    tag?: google_cloud_datacatalog_v1beta1_tags_pb.Tag.AsObject,
  }
}

export class UpdateTagRequest extends jspb.Message {
  hasTag(): boolean;
  clearTag(): void;
  getTag(): google_cloud_datacatalog_v1beta1_tags_pb.Tag | undefined;
  setTag(value?: google_cloud_datacatalog_v1beta1_tags_pb.Tag): void;

  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateTagRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateTagRequest): UpdateTagRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateTagRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateTagRequest;
  static deserializeBinaryFromReader(message: UpdateTagRequest, reader: jspb.BinaryReader): UpdateTagRequest;
}

export namespace UpdateTagRequest {
  export type AsObject = {
    tag?: google_cloud_datacatalog_v1beta1_tags_pb.Tag.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class DeleteTagRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteTagRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteTagRequest): DeleteTagRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteTagRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteTagRequest;
  static deserializeBinaryFromReader(message: DeleteTagRequest, reader: jspb.BinaryReader): DeleteTagRequest;
}

export namespace DeleteTagRequest {
  export type AsObject = {
    name: string,
  }
}

export class CreateTagTemplateFieldRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getTagTemplateFieldId(): string;
  setTagTemplateFieldId(value: string): void;

  hasTagTemplateField(): boolean;
  clearTagTemplateField(): void;
  getTagTemplateField(): google_cloud_datacatalog_v1beta1_tags_pb.TagTemplateField | undefined;
  setTagTemplateField(value?: google_cloud_datacatalog_v1beta1_tags_pb.TagTemplateField): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTagTemplateFieldRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTagTemplateFieldRequest): CreateTagTemplateFieldRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateTagTemplateFieldRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTagTemplateFieldRequest;
  static deserializeBinaryFromReader(message: CreateTagTemplateFieldRequest, reader: jspb.BinaryReader): CreateTagTemplateFieldRequest;
}

export namespace CreateTagTemplateFieldRequest {
  export type AsObject = {
    parent: string,
    tagTemplateFieldId: string,
    tagTemplateField?: google_cloud_datacatalog_v1beta1_tags_pb.TagTemplateField.AsObject,
  }
}

export class UpdateTagTemplateFieldRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasTagTemplateField(): boolean;
  clearTagTemplateField(): void;
  getTagTemplateField(): google_cloud_datacatalog_v1beta1_tags_pb.TagTemplateField | undefined;
  setTagTemplateField(value?: google_cloud_datacatalog_v1beta1_tags_pb.TagTemplateField): void;

  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateTagTemplateFieldRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateTagTemplateFieldRequest): UpdateTagTemplateFieldRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateTagTemplateFieldRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateTagTemplateFieldRequest;
  static deserializeBinaryFromReader(message: UpdateTagTemplateFieldRequest, reader: jspb.BinaryReader): UpdateTagTemplateFieldRequest;
}

export namespace UpdateTagTemplateFieldRequest {
  export type AsObject = {
    name: string,
    tagTemplateField?: google_cloud_datacatalog_v1beta1_tags_pb.TagTemplateField.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class RenameTagTemplateFieldRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getNewTagTemplateFieldId(): string;
  setNewTagTemplateFieldId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RenameTagTemplateFieldRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RenameTagTemplateFieldRequest): RenameTagTemplateFieldRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RenameTagTemplateFieldRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RenameTagTemplateFieldRequest;
  static deserializeBinaryFromReader(message: RenameTagTemplateFieldRequest, reader: jspb.BinaryReader): RenameTagTemplateFieldRequest;
}

export namespace RenameTagTemplateFieldRequest {
  export type AsObject = {
    name: string,
    newTagTemplateFieldId: string,
  }
}

export class DeleteTagTemplateFieldRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getForce(): boolean;
  setForce(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteTagTemplateFieldRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteTagTemplateFieldRequest): DeleteTagTemplateFieldRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteTagTemplateFieldRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteTagTemplateFieldRequest;
  static deserializeBinaryFromReader(message: DeleteTagTemplateFieldRequest, reader: jspb.BinaryReader): DeleteTagTemplateFieldRequest;
}

export namespace DeleteTagTemplateFieldRequest {
  export type AsObject = {
    name: string,
    force: boolean,
  }
}

export class ListTagsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTagsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListTagsRequest): ListTagsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListTagsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTagsRequest;
  static deserializeBinaryFromReader(message: ListTagsRequest, reader: jspb.BinaryReader): ListTagsRequest;
}

export namespace ListTagsRequest {
  export type AsObject = {
    parent: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListTagsResponse extends jspb.Message {
  clearTagsList(): void;
  getTagsList(): Array<google_cloud_datacatalog_v1beta1_tags_pb.Tag>;
  setTagsList(value: Array<google_cloud_datacatalog_v1beta1_tags_pb.Tag>): void;
  addTags(value?: google_cloud_datacatalog_v1beta1_tags_pb.Tag, index?: number): google_cloud_datacatalog_v1beta1_tags_pb.Tag;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTagsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListTagsResponse): ListTagsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListTagsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTagsResponse;
  static deserializeBinaryFromReader(message: ListTagsResponse, reader: jspb.BinaryReader): ListTagsResponse;
}

export namespace ListTagsResponse {
  export type AsObject = {
    tagsList: Array<google_cloud_datacatalog_v1beta1_tags_pb.Tag.AsObject>,
    nextPageToken: string,
  }
}

export interface EntryTypeMap {
  ENTRY_TYPE_UNSPECIFIED: 0;
  TABLE: 2;
  DATA_STREAM: 3;
  FILESET: 4;
}

export const EntryType: EntryTypeMap;

