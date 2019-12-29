// package: google.cloud.documentai.v1beta1
// file: google/cloud/documentai/v1beta1/document_understanding.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";
import * as google_api_client_pb from "../../../../google/api/client_pb";
import * as google_api_field_behavior_pb from "../../../../google/api/field_behavior_pb";
import * as google_cloud_documentai_v1beta1_geometry_pb from "../../../../google/cloud/documentai/v1beta1/geometry_pb";
import * as google_longrunning_operations_pb from "../../../../google/longrunning/operations_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class BatchProcessDocumentsRequest extends jspb.Message {
  clearRequestsList(): void;
  getRequestsList(): Array<ProcessDocumentRequest>;
  setRequestsList(value: Array<ProcessDocumentRequest>): void;
  addRequests(value?: ProcessDocumentRequest, index?: number): ProcessDocumentRequest;

  getParent(): string;
  setParent(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchProcessDocumentsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BatchProcessDocumentsRequest): BatchProcessDocumentsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BatchProcessDocumentsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchProcessDocumentsRequest;
  static deserializeBinaryFromReader(message: BatchProcessDocumentsRequest, reader: jspb.BinaryReader): BatchProcessDocumentsRequest;
}

export namespace BatchProcessDocumentsRequest {
  export type AsObject = {
    requestsList: Array<ProcessDocumentRequest.AsObject>,
    parent: string,
  }
}

export class ProcessDocumentRequest extends jspb.Message {
  hasInputConfig(): boolean;
  clearInputConfig(): void;
  getInputConfig(): InputConfig | undefined;
  setInputConfig(value?: InputConfig): void;

  hasOutputConfig(): boolean;
  clearOutputConfig(): void;
  getOutputConfig(): OutputConfig | undefined;
  setOutputConfig(value?: OutputConfig): void;

  getDocumentType(): string;
  setDocumentType(value: string): void;

  hasTableExtractionParams(): boolean;
  clearTableExtractionParams(): void;
  getTableExtractionParams(): TableExtractionParams | undefined;
  setTableExtractionParams(value?: TableExtractionParams): void;

  hasFormExtractionParams(): boolean;
  clearFormExtractionParams(): void;
  getFormExtractionParams(): FormExtractionParams | undefined;
  setFormExtractionParams(value?: FormExtractionParams): void;

  hasEntityExtractionParams(): boolean;
  clearEntityExtractionParams(): void;
  getEntityExtractionParams(): EntityExtractionParams | undefined;
  setEntityExtractionParams(value?: EntityExtractionParams): void;

  hasOcrParams(): boolean;
  clearOcrParams(): void;
  getOcrParams(): OcrParams | undefined;
  setOcrParams(value?: OcrParams): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProcessDocumentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ProcessDocumentRequest): ProcessDocumentRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProcessDocumentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProcessDocumentRequest;
  static deserializeBinaryFromReader(message: ProcessDocumentRequest, reader: jspb.BinaryReader): ProcessDocumentRequest;
}

export namespace ProcessDocumentRequest {
  export type AsObject = {
    inputConfig?: InputConfig.AsObject,
    outputConfig?: OutputConfig.AsObject,
    documentType: string,
    tableExtractionParams?: TableExtractionParams.AsObject,
    formExtractionParams?: FormExtractionParams.AsObject,
    entityExtractionParams?: EntityExtractionParams.AsObject,
    ocrParams?: OcrParams.AsObject,
  }
}

export class BatchProcessDocumentsResponse extends jspb.Message {
  clearResponsesList(): void;
  getResponsesList(): Array<ProcessDocumentResponse>;
  setResponsesList(value: Array<ProcessDocumentResponse>): void;
  addResponses(value?: ProcessDocumentResponse, index?: number): ProcessDocumentResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchProcessDocumentsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BatchProcessDocumentsResponse): BatchProcessDocumentsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BatchProcessDocumentsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchProcessDocumentsResponse;
  static deserializeBinaryFromReader(message: BatchProcessDocumentsResponse, reader: jspb.BinaryReader): BatchProcessDocumentsResponse;
}

export namespace BatchProcessDocumentsResponse {
  export type AsObject = {
    responsesList: Array<ProcessDocumentResponse.AsObject>,
  }
}

export class ProcessDocumentResponse extends jspb.Message {
  hasInputConfig(): boolean;
  clearInputConfig(): void;
  getInputConfig(): InputConfig | undefined;
  setInputConfig(value?: InputConfig): void;

  hasOutputConfig(): boolean;
  clearOutputConfig(): void;
  getOutputConfig(): OutputConfig | undefined;
  setOutputConfig(value?: OutputConfig): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProcessDocumentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ProcessDocumentResponse): ProcessDocumentResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProcessDocumentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProcessDocumentResponse;
  static deserializeBinaryFromReader(message: ProcessDocumentResponse, reader: jspb.BinaryReader): ProcessDocumentResponse;
}

export namespace ProcessDocumentResponse {
  export type AsObject = {
    inputConfig?: InputConfig.AsObject,
    outputConfig?: OutputConfig.AsObject,
  }
}

export class OcrParams extends jspb.Message {
  clearLanguageHintsList(): void;
  getLanguageHintsList(): Array<string>;
  setLanguageHintsList(value: Array<string>): void;
  addLanguageHints(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OcrParams.AsObject;
  static toObject(includeInstance: boolean, msg: OcrParams): OcrParams.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OcrParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OcrParams;
  static deserializeBinaryFromReader(message: OcrParams, reader: jspb.BinaryReader): OcrParams;
}

export namespace OcrParams {
  export type AsObject = {
    languageHintsList: Array<string>,
  }
}

export class TableExtractionParams extends jspb.Message {
  getEnabled(): boolean;
  setEnabled(value: boolean): void;

  clearTableBoundHintsList(): void;
  getTableBoundHintsList(): Array<TableBoundHint>;
  setTableBoundHintsList(value: Array<TableBoundHint>): void;
  addTableBoundHints(value?: TableBoundHint, index?: number): TableBoundHint;

  clearHeaderHintsList(): void;
  getHeaderHintsList(): Array<string>;
  setHeaderHintsList(value: Array<string>): void;
  addHeaderHints(value: string, index?: number): string;

  getModelVersion(): string;
  setModelVersion(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TableExtractionParams.AsObject;
  static toObject(includeInstance: boolean, msg: TableExtractionParams): TableExtractionParams.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TableExtractionParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TableExtractionParams;
  static deserializeBinaryFromReader(message: TableExtractionParams, reader: jspb.BinaryReader): TableExtractionParams;
}

export namespace TableExtractionParams {
  export type AsObject = {
    enabled: boolean,
    tableBoundHintsList: Array<TableBoundHint.AsObject>,
    headerHintsList: Array<string>,
    modelVersion: string,
  }
}

export class TableBoundHint extends jspb.Message {
  getPageNumber(): number;
  setPageNumber(value: number): void;

  hasBoundingBox(): boolean;
  clearBoundingBox(): void;
  getBoundingBox(): google_cloud_documentai_v1beta1_geometry_pb.BoundingPoly | undefined;
  setBoundingBox(value?: google_cloud_documentai_v1beta1_geometry_pb.BoundingPoly): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TableBoundHint.AsObject;
  static toObject(includeInstance: boolean, msg: TableBoundHint): TableBoundHint.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TableBoundHint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TableBoundHint;
  static deserializeBinaryFromReader(message: TableBoundHint, reader: jspb.BinaryReader): TableBoundHint;
}

export namespace TableBoundHint {
  export type AsObject = {
    pageNumber: number,
    boundingBox?: google_cloud_documentai_v1beta1_geometry_pb.BoundingPoly.AsObject,
  }
}

export class FormExtractionParams extends jspb.Message {
  getEnabled(): boolean;
  setEnabled(value: boolean): void;

  clearKeyValuePairHintsList(): void;
  getKeyValuePairHintsList(): Array<KeyValuePairHint>;
  setKeyValuePairHintsList(value: Array<KeyValuePairHint>): void;
  addKeyValuePairHints(value?: KeyValuePairHint, index?: number): KeyValuePairHint;

  getModelVersion(): string;
  setModelVersion(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FormExtractionParams.AsObject;
  static toObject(includeInstance: boolean, msg: FormExtractionParams): FormExtractionParams.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FormExtractionParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FormExtractionParams;
  static deserializeBinaryFromReader(message: FormExtractionParams, reader: jspb.BinaryReader): FormExtractionParams;
}

export namespace FormExtractionParams {
  export type AsObject = {
    enabled: boolean,
    keyValuePairHintsList: Array<KeyValuePairHint.AsObject>,
    modelVersion: string,
  }
}

export class KeyValuePairHint extends jspb.Message {
  getKey(): string;
  setKey(value: string): void;

  clearValueTypesList(): void;
  getValueTypesList(): Array<string>;
  setValueTypesList(value: Array<string>): void;
  addValueTypes(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KeyValuePairHint.AsObject;
  static toObject(includeInstance: boolean, msg: KeyValuePairHint): KeyValuePairHint.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: KeyValuePairHint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KeyValuePairHint;
  static deserializeBinaryFromReader(message: KeyValuePairHint, reader: jspb.BinaryReader): KeyValuePairHint;
}

export namespace KeyValuePairHint {
  export type AsObject = {
    key: string,
    valueTypesList: Array<string>,
  }
}

export class EntityExtractionParams extends jspb.Message {
  getEnabled(): boolean;
  setEnabled(value: boolean): void;

  getModelVersion(): string;
  setModelVersion(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EntityExtractionParams.AsObject;
  static toObject(includeInstance: boolean, msg: EntityExtractionParams): EntityExtractionParams.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EntityExtractionParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EntityExtractionParams;
  static deserializeBinaryFromReader(message: EntityExtractionParams, reader: jspb.BinaryReader): EntityExtractionParams;
}

export namespace EntityExtractionParams {
  export type AsObject = {
    enabled: boolean,
    modelVersion: string,
  }
}

export class InputConfig extends jspb.Message {
  hasGcsSource(): boolean;
  clearGcsSource(): void;
  getGcsSource(): GcsSource | undefined;
  setGcsSource(value?: GcsSource): void;

  getMimeType(): string;
  setMimeType(value: string): void;

  getSourceCase(): InputConfig.SourceCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InputConfig.AsObject;
  static toObject(includeInstance: boolean, msg: InputConfig): InputConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InputConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InputConfig;
  static deserializeBinaryFromReader(message: InputConfig, reader: jspb.BinaryReader): InputConfig;
}

export namespace InputConfig {
  export type AsObject = {
    gcsSource?: GcsSource.AsObject,
    mimeType: string,
  }

  export enum SourceCase {
    SOURCE_NOT_SET = 0,
    GCS_SOURCE = 1,
  }
}

export class OutputConfig extends jspb.Message {
  hasGcsDestination(): boolean;
  clearGcsDestination(): void;
  getGcsDestination(): GcsDestination | undefined;
  setGcsDestination(value?: GcsDestination): void;

  getPagesPerShard(): number;
  setPagesPerShard(value: number): void;

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
    pagesPerShard: number,
  }

  export enum DestinationCase {
    DESTINATION_NOT_SET = 0,
    GCS_DESTINATION = 1,
  }
}

export class GcsSource extends jspb.Message {
  getUri(): string;
  setUri(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GcsSource.AsObject;
  static toObject(includeInstance: boolean, msg: GcsSource): GcsSource.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GcsSource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GcsSource;
  static deserializeBinaryFromReader(message: GcsSource, reader: jspb.BinaryReader): GcsSource;
}

export namespace GcsSource {
  export type AsObject = {
    uri: string,
  }
}

export class GcsDestination extends jspb.Message {
  getUri(): string;
  setUri(value: string): void;

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
  }
}

export class OperationMetadata extends jspb.Message {
  getState(): OperationMetadata.StateMap[keyof OperationMetadata.StateMap];
  setState(value: OperationMetadata.StateMap[keyof OperationMetadata.StateMap]): void;

  getStateMessage(): string;
  setStateMessage(value: string): void;

  hasCreateTime(): boolean;
  clearCreateTime(): void;
  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdateTime(): boolean;
  clearUpdateTime(): void;
  getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OperationMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: OperationMetadata): OperationMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OperationMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OperationMetadata;
  static deserializeBinaryFromReader(message: OperationMetadata, reader: jspb.BinaryReader): OperationMetadata;
}

export namespace OperationMetadata {
  export type AsObject = {
    state: OperationMetadata.StateMap[keyof OperationMetadata.StateMap],
    stateMessage: string,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export interface StateMap {
    STATE_UNSPECIFIED: 0;
    ACCEPTED: 1;
    WAITING: 2;
    RUNNING: 3;
    SUCCEEDED: 4;
    CANCELLED: 5;
    FAILED: 6;
  }

  export const State: StateMap;
}

