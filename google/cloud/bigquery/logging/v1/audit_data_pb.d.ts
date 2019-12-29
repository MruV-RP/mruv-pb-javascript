// package: google.cloud.bigquery.logging.v1
// file: google/cloud/bigquery/logging/v1/audit_data.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_rpc_status_pb from "../../../../../google/rpc/status_pb";

export class AuditData extends jspb.Message {
  hasTableInsertRequest(): boolean;
  clearTableInsertRequest(): void;
  getTableInsertRequest(): TableInsertRequest | undefined;
  setTableInsertRequest(value?: TableInsertRequest): void;

  hasTableUpdateRequest(): boolean;
  clearTableUpdateRequest(): void;
  getTableUpdateRequest(): TableUpdateRequest | undefined;
  setTableUpdateRequest(value?: TableUpdateRequest): void;

  hasDatasetListRequest(): boolean;
  clearDatasetListRequest(): void;
  getDatasetListRequest(): DatasetListRequest | undefined;
  setDatasetListRequest(value?: DatasetListRequest): void;

  hasDatasetInsertRequest(): boolean;
  clearDatasetInsertRequest(): void;
  getDatasetInsertRequest(): DatasetInsertRequest | undefined;
  setDatasetInsertRequest(value?: DatasetInsertRequest): void;

  hasDatasetUpdateRequest(): boolean;
  clearDatasetUpdateRequest(): void;
  getDatasetUpdateRequest(): DatasetUpdateRequest | undefined;
  setDatasetUpdateRequest(value?: DatasetUpdateRequest): void;

  hasJobInsertRequest(): boolean;
  clearJobInsertRequest(): void;
  getJobInsertRequest(): JobInsertRequest | undefined;
  setJobInsertRequest(value?: JobInsertRequest): void;

  hasJobQueryRequest(): boolean;
  clearJobQueryRequest(): void;
  getJobQueryRequest(): JobQueryRequest | undefined;
  setJobQueryRequest(value?: JobQueryRequest): void;

  hasJobGetQueryResultsRequest(): boolean;
  clearJobGetQueryResultsRequest(): void;
  getJobGetQueryResultsRequest(): JobGetQueryResultsRequest | undefined;
  setJobGetQueryResultsRequest(value?: JobGetQueryResultsRequest): void;

  hasTableDataListRequest(): boolean;
  clearTableDataListRequest(): void;
  getTableDataListRequest(): TableDataListRequest | undefined;
  setTableDataListRequest(value?: TableDataListRequest): void;

  hasTableInsertResponse(): boolean;
  clearTableInsertResponse(): void;
  getTableInsertResponse(): TableInsertResponse | undefined;
  setTableInsertResponse(value?: TableInsertResponse): void;

  hasTableUpdateResponse(): boolean;
  clearTableUpdateResponse(): void;
  getTableUpdateResponse(): TableUpdateResponse | undefined;
  setTableUpdateResponse(value?: TableUpdateResponse): void;

  hasDatasetInsertResponse(): boolean;
  clearDatasetInsertResponse(): void;
  getDatasetInsertResponse(): DatasetInsertResponse | undefined;
  setDatasetInsertResponse(value?: DatasetInsertResponse): void;

  hasDatasetUpdateResponse(): boolean;
  clearDatasetUpdateResponse(): void;
  getDatasetUpdateResponse(): DatasetUpdateResponse | undefined;
  setDatasetUpdateResponse(value?: DatasetUpdateResponse): void;

  hasJobInsertResponse(): boolean;
  clearJobInsertResponse(): void;
  getJobInsertResponse(): JobInsertResponse | undefined;
  setJobInsertResponse(value?: JobInsertResponse): void;

  hasJobQueryResponse(): boolean;
  clearJobQueryResponse(): void;
  getJobQueryResponse(): JobQueryResponse | undefined;
  setJobQueryResponse(value?: JobQueryResponse): void;

  hasJobGetQueryResultsResponse(): boolean;
  clearJobGetQueryResultsResponse(): void;
  getJobGetQueryResultsResponse(): JobGetQueryResultsResponse | undefined;
  setJobGetQueryResultsResponse(value?: JobGetQueryResultsResponse): void;

  hasJobQueryDoneResponse(): boolean;
  clearJobQueryDoneResponse(): void;
  getJobQueryDoneResponse(): JobQueryDoneResponse | undefined;
  setJobQueryDoneResponse(value?: JobQueryDoneResponse): void;

  hasJobCompletedEvent(): boolean;
  clearJobCompletedEvent(): void;
  getJobCompletedEvent(): JobCompletedEvent | undefined;
  setJobCompletedEvent(value?: JobCompletedEvent): void;

  getRequestCase(): AuditData.RequestCase;
  getResponseCase(): AuditData.ResponseCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuditData.AsObject;
  static toObject(includeInstance: boolean, msg: AuditData): AuditData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuditData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuditData;
  static deserializeBinaryFromReader(message: AuditData, reader: jspb.BinaryReader): AuditData;
}

export namespace AuditData {
  export type AsObject = {
    tableInsertRequest?: TableInsertRequest.AsObject,
    tableUpdateRequest?: TableUpdateRequest.AsObject,
    datasetListRequest?: DatasetListRequest.AsObject,
    datasetInsertRequest?: DatasetInsertRequest.AsObject,
    datasetUpdateRequest?: DatasetUpdateRequest.AsObject,
    jobInsertRequest?: JobInsertRequest.AsObject,
    jobQueryRequest?: JobQueryRequest.AsObject,
    jobGetQueryResultsRequest?: JobGetQueryResultsRequest.AsObject,
    tableDataListRequest?: TableDataListRequest.AsObject,
    tableInsertResponse?: TableInsertResponse.AsObject,
    tableUpdateResponse?: TableUpdateResponse.AsObject,
    datasetInsertResponse?: DatasetInsertResponse.AsObject,
    datasetUpdateResponse?: DatasetUpdateResponse.AsObject,
    jobInsertResponse?: JobInsertResponse.AsObject,
    jobQueryResponse?: JobQueryResponse.AsObject,
    jobGetQueryResultsResponse?: JobGetQueryResultsResponse.AsObject,
    jobQueryDoneResponse?: JobQueryDoneResponse.AsObject,
    jobCompletedEvent?: JobCompletedEvent.AsObject,
  }

  export enum RequestCase {
    REQUEST_NOT_SET = 0,
    TABLE_INSERT_REQUEST = 1,
    TABLE_UPDATE_REQUEST = 16,
    DATASET_LIST_REQUEST = 2,
    DATASET_INSERT_REQUEST = 3,
    DATASET_UPDATE_REQUEST = 4,
    JOB_INSERT_REQUEST = 5,
    JOB_QUERY_REQUEST = 6,
    JOB_GET_QUERY_RESULTS_REQUEST = 7,
    TABLE_DATA_LIST_REQUEST = 8,
  }

  export enum ResponseCase {
    RESPONSE_NOT_SET = 0,
    TABLE_INSERT_RESPONSE = 9,
    TABLE_UPDATE_RESPONSE = 10,
    DATASET_INSERT_RESPONSE = 11,
    DATASET_UPDATE_RESPONSE = 12,
    JOB_INSERT_RESPONSE = 18,
    JOB_QUERY_RESPONSE = 13,
    JOB_GET_QUERY_RESULTS_RESPONSE = 14,
    JOB_QUERY_DONE_RESPONSE = 15,
  }
}

export class TableInsertRequest extends jspb.Message {
  hasResource(): boolean;
  clearResource(): void;
  getResource(): Table | undefined;
  setResource(value?: Table): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TableInsertRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TableInsertRequest): TableInsertRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TableInsertRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TableInsertRequest;
  static deserializeBinaryFromReader(message: TableInsertRequest, reader: jspb.BinaryReader): TableInsertRequest;
}

export namespace TableInsertRequest {
  export type AsObject = {
    resource?: Table.AsObject,
  }
}

export class TableUpdateRequest extends jspb.Message {
  hasResource(): boolean;
  clearResource(): void;
  getResource(): Table | undefined;
  setResource(value?: Table): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TableUpdateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TableUpdateRequest): TableUpdateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TableUpdateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TableUpdateRequest;
  static deserializeBinaryFromReader(message: TableUpdateRequest, reader: jspb.BinaryReader): TableUpdateRequest;
}

export namespace TableUpdateRequest {
  export type AsObject = {
    resource?: Table.AsObject,
  }
}

export class TableInsertResponse extends jspb.Message {
  hasResource(): boolean;
  clearResource(): void;
  getResource(): Table | undefined;
  setResource(value?: Table): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TableInsertResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TableInsertResponse): TableInsertResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TableInsertResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TableInsertResponse;
  static deserializeBinaryFromReader(message: TableInsertResponse, reader: jspb.BinaryReader): TableInsertResponse;
}

export namespace TableInsertResponse {
  export type AsObject = {
    resource?: Table.AsObject,
  }
}

export class TableUpdateResponse extends jspb.Message {
  hasResource(): boolean;
  clearResource(): void;
  getResource(): Table | undefined;
  setResource(value?: Table): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TableUpdateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TableUpdateResponse): TableUpdateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TableUpdateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TableUpdateResponse;
  static deserializeBinaryFromReader(message: TableUpdateResponse, reader: jspb.BinaryReader): TableUpdateResponse;
}

export namespace TableUpdateResponse {
  export type AsObject = {
    resource?: Table.AsObject,
  }
}

export class DatasetListRequest extends jspb.Message {
  getListAll(): boolean;
  setListAll(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DatasetListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DatasetListRequest): DatasetListRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DatasetListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DatasetListRequest;
  static deserializeBinaryFromReader(message: DatasetListRequest, reader: jspb.BinaryReader): DatasetListRequest;
}

export namespace DatasetListRequest {
  export type AsObject = {
    listAll: boolean,
  }
}

export class DatasetInsertRequest extends jspb.Message {
  hasResource(): boolean;
  clearResource(): void;
  getResource(): Dataset | undefined;
  setResource(value?: Dataset): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DatasetInsertRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DatasetInsertRequest): DatasetInsertRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DatasetInsertRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DatasetInsertRequest;
  static deserializeBinaryFromReader(message: DatasetInsertRequest, reader: jspb.BinaryReader): DatasetInsertRequest;
}

export namespace DatasetInsertRequest {
  export type AsObject = {
    resource?: Dataset.AsObject,
  }
}

export class DatasetInsertResponse extends jspb.Message {
  hasResource(): boolean;
  clearResource(): void;
  getResource(): Dataset | undefined;
  setResource(value?: Dataset): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DatasetInsertResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DatasetInsertResponse): DatasetInsertResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DatasetInsertResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DatasetInsertResponse;
  static deserializeBinaryFromReader(message: DatasetInsertResponse, reader: jspb.BinaryReader): DatasetInsertResponse;
}

export namespace DatasetInsertResponse {
  export type AsObject = {
    resource?: Dataset.AsObject,
  }
}

export class DatasetUpdateRequest extends jspb.Message {
  hasResource(): boolean;
  clearResource(): void;
  getResource(): Dataset | undefined;
  setResource(value?: Dataset): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DatasetUpdateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DatasetUpdateRequest): DatasetUpdateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DatasetUpdateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DatasetUpdateRequest;
  static deserializeBinaryFromReader(message: DatasetUpdateRequest, reader: jspb.BinaryReader): DatasetUpdateRequest;
}

export namespace DatasetUpdateRequest {
  export type AsObject = {
    resource?: Dataset.AsObject,
  }
}

export class DatasetUpdateResponse extends jspb.Message {
  hasResource(): boolean;
  clearResource(): void;
  getResource(): Dataset | undefined;
  setResource(value?: Dataset): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DatasetUpdateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DatasetUpdateResponse): DatasetUpdateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DatasetUpdateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DatasetUpdateResponse;
  static deserializeBinaryFromReader(message: DatasetUpdateResponse, reader: jspb.BinaryReader): DatasetUpdateResponse;
}

export namespace DatasetUpdateResponse {
  export type AsObject = {
    resource?: Dataset.AsObject,
  }
}

export class JobInsertRequest extends jspb.Message {
  hasResource(): boolean;
  clearResource(): void;
  getResource(): Job | undefined;
  setResource(value?: Job): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JobInsertRequest.AsObject;
  static toObject(includeInstance: boolean, msg: JobInsertRequest): JobInsertRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: JobInsertRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JobInsertRequest;
  static deserializeBinaryFromReader(message: JobInsertRequest, reader: jspb.BinaryReader): JobInsertRequest;
}

export namespace JobInsertRequest {
  export type AsObject = {
    resource?: Job.AsObject,
  }
}

export class JobInsertResponse extends jspb.Message {
  hasResource(): boolean;
  clearResource(): void;
  getResource(): Job | undefined;
  setResource(value?: Job): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JobInsertResponse.AsObject;
  static toObject(includeInstance: boolean, msg: JobInsertResponse): JobInsertResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: JobInsertResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JobInsertResponse;
  static deserializeBinaryFromReader(message: JobInsertResponse, reader: jspb.BinaryReader): JobInsertResponse;
}

export namespace JobInsertResponse {
  export type AsObject = {
    resource?: Job.AsObject,
  }
}

export class JobQueryRequest extends jspb.Message {
  getQuery(): string;
  setQuery(value: string): void;

  getMaxResults(): number;
  setMaxResults(value: number): void;

  hasDefaultDataset(): boolean;
  clearDefaultDataset(): void;
  getDefaultDataset(): DatasetName | undefined;
  setDefaultDataset(value?: DatasetName): void;

  getProjectId(): string;
  setProjectId(value: string): void;

  getDryRun(): boolean;
  setDryRun(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JobQueryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: JobQueryRequest): JobQueryRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: JobQueryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JobQueryRequest;
  static deserializeBinaryFromReader(message: JobQueryRequest, reader: jspb.BinaryReader): JobQueryRequest;
}

export namespace JobQueryRequest {
  export type AsObject = {
    query: string,
    maxResults: number,
    defaultDataset?: DatasetName.AsObject,
    projectId: string,
    dryRun: boolean,
  }
}

export class JobQueryResponse extends jspb.Message {
  getTotalResults(): number;
  setTotalResults(value: number): void;

  hasJob(): boolean;
  clearJob(): void;
  getJob(): Job | undefined;
  setJob(value?: Job): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JobQueryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: JobQueryResponse): JobQueryResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: JobQueryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JobQueryResponse;
  static deserializeBinaryFromReader(message: JobQueryResponse, reader: jspb.BinaryReader): JobQueryResponse;
}

export namespace JobQueryResponse {
  export type AsObject = {
    totalResults: number,
    job?: Job.AsObject,
  }
}

export class JobGetQueryResultsRequest extends jspb.Message {
  getMaxResults(): number;
  setMaxResults(value: number): void;

  getStartRow(): number;
  setStartRow(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JobGetQueryResultsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: JobGetQueryResultsRequest): JobGetQueryResultsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: JobGetQueryResultsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JobGetQueryResultsRequest;
  static deserializeBinaryFromReader(message: JobGetQueryResultsRequest, reader: jspb.BinaryReader): JobGetQueryResultsRequest;
}

export namespace JobGetQueryResultsRequest {
  export type AsObject = {
    maxResults: number,
    startRow: number,
  }
}

export class JobGetQueryResultsResponse extends jspb.Message {
  getTotalResults(): number;
  setTotalResults(value: number): void;

  hasJob(): boolean;
  clearJob(): void;
  getJob(): Job | undefined;
  setJob(value?: Job): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JobGetQueryResultsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: JobGetQueryResultsResponse): JobGetQueryResultsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: JobGetQueryResultsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JobGetQueryResultsResponse;
  static deserializeBinaryFromReader(message: JobGetQueryResultsResponse, reader: jspb.BinaryReader): JobGetQueryResultsResponse;
}

export namespace JobGetQueryResultsResponse {
  export type AsObject = {
    totalResults: number,
    job?: Job.AsObject,
  }
}

export class JobQueryDoneResponse extends jspb.Message {
  hasJob(): boolean;
  clearJob(): void;
  getJob(): Job | undefined;
  setJob(value?: Job): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JobQueryDoneResponse.AsObject;
  static toObject(includeInstance: boolean, msg: JobQueryDoneResponse): JobQueryDoneResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: JobQueryDoneResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JobQueryDoneResponse;
  static deserializeBinaryFromReader(message: JobQueryDoneResponse, reader: jspb.BinaryReader): JobQueryDoneResponse;
}

export namespace JobQueryDoneResponse {
  export type AsObject = {
    job?: Job.AsObject,
  }
}

export class JobCompletedEvent extends jspb.Message {
  getEventName(): string;
  setEventName(value: string): void;

  hasJob(): boolean;
  clearJob(): void;
  getJob(): Job | undefined;
  setJob(value?: Job): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JobCompletedEvent.AsObject;
  static toObject(includeInstance: boolean, msg: JobCompletedEvent): JobCompletedEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: JobCompletedEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JobCompletedEvent;
  static deserializeBinaryFromReader(message: JobCompletedEvent, reader: jspb.BinaryReader): JobCompletedEvent;
}

export namespace JobCompletedEvent {
  export type AsObject = {
    eventName: string,
    job?: Job.AsObject,
  }
}

export class TableDataListRequest extends jspb.Message {
  getStartRow(): number;
  setStartRow(value: number): void;

  getMaxResults(): number;
  setMaxResults(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TableDataListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TableDataListRequest): TableDataListRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TableDataListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TableDataListRequest;
  static deserializeBinaryFromReader(message: TableDataListRequest, reader: jspb.BinaryReader): TableDataListRequest;
}

export namespace TableDataListRequest {
  export type AsObject = {
    startRow: number,
    maxResults: number,
  }
}

export class Table extends jspb.Message {
  hasTableName(): boolean;
  clearTableName(): void;
  getTableName(): TableName | undefined;
  setTableName(value?: TableName): void;

  hasInfo(): boolean;
  clearInfo(): void;
  getInfo(): TableInfo | undefined;
  setInfo(value?: TableInfo): void;

  getSchemaJson(): string;
  setSchemaJson(value: string): void;

  hasView(): boolean;
  clearView(): void;
  getView(): TableViewDefinition | undefined;
  setView(value?: TableViewDefinition): void;

  hasExpireTime(): boolean;
  clearExpireTime(): void;
  getExpireTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpireTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasCreateTime(): boolean;
  clearCreateTime(): void;
  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasTruncateTime(): boolean;
  clearTruncateTime(): void;
  getTruncateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTruncateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Table.AsObject;
  static toObject(includeInstance: boolean, msg: Table): Table.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Table, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Table;
  static deserializeBinaryFromReader(message: Table, reader: jspb.BinaryReader): Table;
}

export namespace Table {
  export type AsObject = {
    tableName?: TableName.AsObject,
    info?: TableInfo.AsObject,
    schemaJson: string,
    view?: TableViewDefinition.AsObject,
    expireTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    truncateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class TableInfo extends jspb.Message {
  getFriendlyName(): string;
  setFriendlyName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TableInfo.AsObject;
  static toObject(includeInstance: boolean, msg: TableInfo): TableInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TableInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TableInfo;
  static deserializeBinaryFromReader(message: TableInfo, reader: jspb.BinaryReader): TableInfo;
}

export namespace TableInfo {
  export type AsObject = {
    friendlyName: string,
    description: string,
  }
}

export class TableViewDefinition extends jspb.Message {
  getQuery(): string;
  setQuery(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TableViewDefinition.AsObject;
  static toObject(includeInstance: boolean, msg: TableViewDefinition): TableViewDefinition.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TableViewDefinition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TableViewDefinition;
  static deserializeBinaryFromReader(message: TableViewDefinition, reader: jspb.BinaryReader): TableViewDefinition;
}

export namespace TableViewDefinition {
  export type AsObject = {
    query: string,
  }
}

export class Dataset extends jspb.Message {
  hasDatasetName(): boolean;
  clearDatasetName(): void;
  getDatasetName(): DatasetName | undefined;
  setDatasetName(value?: DatasetName): void;

  hasInfo(): boolean;
  clearInfo(): void;
  getInfo(): DatasetInfo | undefined;
  setInfo(value?: DatasetInfo): void;

  hasCreateTime(): boolean;
  clearCreateTime(): void;
  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdateTime(): boolean;
  clearUpdateTime(): void;
  getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasAcl(): boolean;
  clearAcl(): void;
  getAcl(): BigQueryAcl | undefined;
  setAcl(value?: BigQueryAcl): void;

  hasDefaultTableExpireDuration(): boolean;
  clearDefaultTableExpireDuration(): void;
  getDefaultTableExpireDuration(): google_protobuf_duration_pb.Duration | undefined;
  setDefaultTableExpireDuration(value?: google_protobuf_duration_pb.Duration): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dataset.AsObject;
  static toObject(includeInstance: boolean, msg: Dataset): Dataset.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Dataset, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dataset;
  static deserializeBinaryFromReader(message: Dataset, reader: jspb.BinaryReader): Dataset;
}

export namespace Dataset {
  export type AsObject = {
    datasetName?: DatasetName.AsObject,
    info?: DatasetInfo.AsObject,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    acl?: BigQueryAcl.AsObject,
    defaultTableExpireDuration?: google_protobuf_duration_pb.Duration.AsObject,
  }
}

export class DatasetInfo extends jspb.Message {
  getFriendlyName(): string;
  setFriendlyName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DatasetInfo.AsObject;
  static toObject(includeInstance: boolean, msg: DatasetInfo): DatasetInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DatasetInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DatasetInfo;
  static deserializeBinaryFromReader(message: DatasetInfo, reader: jspb.BinaryReader): DatasetInfo;
}

export namespace DatasetInfo {
  export type AsObject = {
    friendlyName: string,
    description: string,
  }
}

export class BigQueryAcl extends jspb.Message {
  clearEntriesList(): void;
  getEntriesList(): Array<BigQueryAcl.Entry>;
  setEntriesList(value: Array<BigQueryAcl.Entry>): void;
  addEntries(value?: BigQueryAcl.Entry, index?: number): BigQueryAcl.Entry;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BigQueryAcl.AsObject;
  static toObject(includeInstance: boolean, msg: BigQueryAcl): BigQueryAcl.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BigQueryAcl, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BigQueryAcl;
  static deserializeBinaryFromReader(message: BigQueryAcl, reader: jspb.BinaryReader): BigQueryAcl;
}

export namespace BigQueryAcl {
  export type AsObject = {
    entriesList: Array<BigQueryAcl.Entry.AsObject>,
  }

  export class Entry extends jspb.Message {
    getRole(): string;
    setRole(value: string): void;

    getGroupEmail(): string;
    setGroupEmail(value: string): void;

    getUserEmail(): string;
    setUserEmail(value: string): void;

    getDomain(): string;
    setDomain(value: string): void;

    getSpecialGroup(): string;
    setSpecialGroup(value: string): void;

    hasViewName(): boolean;
    clearViewName(): void;
    getViewName(): TableName | undefined;
    setViewName(value?: TableName): void;

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
      role: string,
      groupEmail: string,
      userEmail: string,
      domain: string,
      specialGroup: string,
      viewName?: TableName.AsObject,
    }
  }
}

export class Job extends jspb.Message {
  hasJobName(): boolean;
  clearJobName(): void;
  getJobName(): JobName | undefined;
  setJobName(value?: JobName): void;

  hasJobConfiguration(): boolean;
  clearJobConfiguration(): void;
  getJobConfiguration(): JobConfiguration | undefined;
  setJobConfiguration(value?: JobConfiguration): void;

  hasJobStatus(): boolean;
  clearJobStatus(): void;
  getJobStatus(): JobStatus | undefined;
  setJobStatus(value?: JobStatus): void;

  hasJobStatistics(): boolean;
  clearJobStatistics(): void;
  getJobStatistics(): JobStatistics | undefined;
  setJobStatistics(value?: JobStatistics): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Job.AsObject;
  static toObject(includeInstance: boolean, msg: Job): Job.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Job, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Job;
  static deserializeBinaryFromReader(message: Job, reader: jspb.BinaryReader): Job;
}

export namespace Job {
  export type AsObject = {
    jobName?: JobName.AsObject,
    jobConfiguration?: JobConfiguration.AsObject,
    jobStatus?: JobStatus.AsObject,
    jobStatistics?: JobStatistics.AsObject,
  }
}

export class JobConfiguration extends jspb.Message {
  hasQuery(): boolean;
  clearQuery(): void;
  getQuery(): JobConfiguration.Query | undefined;
  setQuery(value?: JobConfiguration.Query): void;

  hasLoad(): boolean;
  clearLoad(): void;
  getLoad(): JobConfiguration.Load | undefined;
  setLoad(value?: JobConfiguration.Load): void;

  hasExtract(): boolean;
  clearExtract(): void;
  getExtract(): JobConfiguration.Extract | undefined;
  setExtract(value?: JobConfiguration.Extract): void;

  hasTableCopy(): boolean;
  clearTableCopy(): void;
  getTableCopy(): JobConfiguration.TableCopy | undefined;
  setTableCopy(value?: JobConfiguration.TableCopy): void;

  getDryRun(): boolean;
  setDryRun(value: boolean): void;

  getConfigurationCase(): JobConfiguration.ConfigurationCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JobConfiguration.AsObject;
  static toObject(includeInstance: boolean, msg: JobConfiguration): JobConfiguration.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: JobConfiguration, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JobConfiguration;
  static deserializeBinaryFromReader(message: JobConfiguration, reader: jspb.BinaryReader): JobConfiguration;
}

export namespace JobConfiguration {
  export type AsObject = {
    query?: JobConfiguration.Query.AsObject,
    load?: JobConfiguration.Load.AsObject,
    extract?: JobConfiguration.Extract.AsObject,
    tableCopy?: JobConfiguration.TableCopy.AsObject,
    dryRun: boolean,
  }

  export class Query extends jspb.Message {
    getQuery(): string;
    setQuery(value: string): void;

    hasDestinationTable(): boolean;
    clearDestinationTable(): void;
    getDestinationTable(): TableName | undefined;
    setDestinationTable(value?: TableName): void;

    getCreateDisposition(): string;
    setCreateDisposition(value: string): void;

    getWriteDisposition(): string;
    setWriteDisposition(value: string): void;

    hasDefaultDataset(): boolean;
    clearDefaultDataset(): void;
    getDefaultDataset(): DatasetName | undefined;
    setDefaultDataset(value?: DatasetName): void;

    clearTableDefinitionsList(): void;
    getTableDefinitionsList(): Array<TableDefinition>;
    setTableDefinitionsList(value: Array<TableDefinition>): void;
    addTableDefinitions(value?: TableDefinition, index?: number): TableDefinition;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Query.AsObject;
    static toObject(includeInstance: boolean, msg: Query): Query.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Query, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Query;
    static deserializeBinaryFromReader(message: Query, reader: jspb.BinaryReader): Query;
  }

  export namespace Query {
    export type AsObject = {
      query: string,
      destinationTable?: TableName.AsObject,
      createDisposition: string,
      writeDisposition: string,
      defaultDataset?: DatasetName.AsObject,
      tableDefinitionsList: Array<TableDefinition.AsObject>,
    }
  }

  export class Load extends jspb.Message {
    clearSourceUrisList(): void;
    getSourceUrisList(): Array<string>;
    setSourceUrisList(value: Array<string>): void;
    addSourceUris(value: string, index?: number): string;

    getSchemaJson(): string;
    setSchemaJson(value: string): void;

    hasDestinationTable(): boolean;
    clearDestinationTable(): void;
    getDestinationTable(): TableName | undefined;
    setDestinationTable(value?: TableName): void;

    getCreateDisposition(): string;
    setCreateDisposition(value: string): void;

    getWriteDisposition(): string;
    setWriteDisposition(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Load.AsObject;
    static toObject(includeInstance: boolean, msg: Load): Load.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Load, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Load;
    static deserializeBinaryFromReader(message: Load, reader: jspb.BinaryReader): Load;
  }

  export namespace Load {
    export type AsObject = {
      sourceUrisList: Array<string>,
      schemaJson: string,
      destinationTable?: TableName.AsObject,
      createDisposition: string,
      writeDisposition: string,
    }
  }

  export class Extract extends jspb.Message {
    clearDestinationUrisList(): void;
    getDestinationUrisList(): Array<string>;
    setDestinationUrisList(value: Array<string>): void;
    addDestinationUris(value: string, index?: number): string;

    hasSourceTable(): boolean;
    clearSourceTable(): void;
    getSourceTable(): TableName | undefined;
    setSourceTable(value?: TableName): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Extract.AsObject;
    static toObject(includeInstance: boolean, msg: Extract): Extract.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Extract, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Extract;
    static deserializeBinaryFromReader(message: Extract, reader: jspb.BinaryReader): Extract;
  }

  export namespace Extract {
    export type AsObject = {
      destinationUrisList: Array<string>,
      sourceTable?: TableName.AsObject,
    }
  }

  export class TableCopy extends jspb.Message {
    clearSourceTablesList(): void;
    getSourceTablesList(): Array<TableName>;
    setSourceTablesList(value: Array<TableName>): void;
    addSourceTables(value?: TableName, index?: number): TableName;

    hasDestinationTable(): boolean;
    clearDestinationTable(): void;
    getDestinationTable(): TableName | undefined;
    setDestinationTable(value?: TableName): void;

    getCreateDisposition(): string;
    setCreateDisposition(value: string): void;

    getWriteDisposition(): string;
    setWriteDisposition(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TableCopy.AsObject;
    static toObject(includeInstance: boolean, msg: TableCopy): TableCopy.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TableCopy, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TableCopy;
    static deserializeBinaryFromReader(message: TableCopy, reader: jspb.BinaryReader): TableCopy;
  }

  export namespace TableCopy {
    export type AsObject = {
      sourceTablesList: Array<TableName.AsObject>,
      destinationTable?: TableName.AsObject,
      createDisposition: string,
      writeDisposition: string,
    }
  }

  export enum ConfigurationCase {
    CONFIGURATION_NOT_SET = 0,
    QUERY = 5,
    LOAD = 6,
    EXTRACT = 7,
    TABLE_COPY = 8,
  }
}

export class TableDefinition extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  clearSourceUrisList(): void;
  getSourceUrisList(): Array<string>;
  setSourceUrisList(value: Array<string>): void;
  addSourceUris(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TableDefinition.AsObject;
  static toObject(includeInstance: boolean, msg: TableDefinition): TableDefinition.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TableDefinition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TableDefinition;
  static deserializeBinaryFromReader(message: TableDefinition, reader: jspb.BinaryReader): TableDefinition;
}

export namespace TableDefinition {
  export type AsObject = {
    name: string,
    sourceUrisList: Array<string>,
  }
}

export class JobStatus extends jspb.Message {
  getState(): string;
  setState(value: string): void;

  hasError(): boolean;
  clearError(): void;
  getError(): google_rpc_status_pb.Status | undefined;
  setError(value?: google_rpc_status_pb.Status): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JobStatus.AsObject;
  static toObject(includeInstance: boolean, msg: JobStatus): JobStatus.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: JobStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JobStatus;
  static deserializeBinaryFromReader(message: JobStatus, reader: jspb.BinaryReader): JobStatus;
}

export namespace JobStatus {
  export type AsObject = {
    state: string,
    error?: google_rpc_status_pb.Status.AsObject,
  }
}

export class JobStatistics extends jspb.Message {
  hasCreateTime(): boolean;
  clearCreateTime(): void;
  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasStartTime(): boolean;
  clearStartTime(): void;
  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasEndTime(): boolean;
  clearEndTime(): void;
  getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getTotalProcessedBytes(): number;
  setTotalProcessedBytes(value: number): void;

  getTotalBilledBytes(): number;
  setTotalBilledBytes(value: number): void;

  getBillingTier(): number;
  setBillingTier(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JobStatistics.AsObject;
  static toObject(includeInstance: boolean, msg: JobStatistics): JobStatistics.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: JobStatistics, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JobStatistics;
  static deserializeBinaryFromReader(message: JobStatistics, reader: jspb.BinaryReader): JobStatistics;
}

export namespace JobStatistics {
  export type AsObject = {
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    totalProcessedBytes: number,
    totalBilledBytes: number,
    billingTier: number,
  }
}

export class DatasetName extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getDatasetId(): string;
  setDatasetId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DatasetName.AsObject;
  static toObject(includeInstance: boolean, msg: DatasetName): DatasetName.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DatasetName, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DatasetName;
  static deserializeBinaryFromReader(message: DatasetName, reader: jspb.BinaryReader): DatasetName;
}

export namespace DatasetName {
  export type AsObject = {
    projectId: string,
    datasetId: string,
  }
}

export class TableName extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getDatasetId(): string;
  setDatasetId(value: string): void;

  getTableId(): string;
  setTableId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TableName.AsObject;
  static toObject(includeInstance: boolean, msg: TableName): TableName.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TableName, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TableName;
  static deserializeBinaryFromReader(message: TableName, reader: jspb.BinaryReader): TableName;
}

export namespace TableName {
  export type AsObject = {
    projectId: string,
    datasetId: string,
    tableId: string,
  }
}

export class JobName extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getJobId(): string;
  setJobId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JobName.AsObject;
  static toObject(includeInstance: boolean, msg: JobName): JobName.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: JobName, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JobName;
  static deserializeBinaryFromReader(message: JobName, reader: jspb.BinaryReader): JobName;
}

export namespace JobName {
  export type AsObject = {
    projectId: string,
    jobId: string,
  }
}

