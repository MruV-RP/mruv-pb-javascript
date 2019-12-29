// package: google.firestore.admin.v1beta1
// file: google/firestore/admin/v1beta1/firestore_admin.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";
import * as google_firestore_admin_v1beta1_index_pb from "../../../../google/firestore/admin/v1beta1/index_pb";
import * as google_longrunning_operations_pb from "../../../../google/longrunning/operations_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_api_client_pb from "../../../../google/api/client_pb";

export class IndexOperationMetadata extends jspb.Message {
  hasStartTime(): boolean;
  clearStartTime(): void;
  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasEndTime(): boolean;
  clearEndTime(): void;
  getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getIndex(): string;
  setIndex(value: string): void;

  getOperationType(): IndexOperationMetadata.OperationTypeMap[keyof IndexOperationMetadata.OperationTypeMap];
  setOperationType(value: IndexOperationMetadata.OperationTypeMap[keyof IndexOperationMetadata.OperationTypeMap]): void;

  getCancelled(): boolean;
  setCancelled(value: boolean): void;

  hasDocumentProgress(): boolean;
  clearDocumentProgress(): void;
  getDocumentProgress(): Progress | undefined;
  setDocumentProgress(value?: Progress): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IndexOperationMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: IndexOperationMetadata): IndexOperationMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IndexOperationMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IndexOperationMetadata;
  static deserializeBinaryFromReader(message: IndexOperationMetadata, reader: jspb.BinaryReader): IndexOperationMetadata;
}

export namespace IndexOperationMetadata {
  export type AsObject = {
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    index: string,
    operationType: IndexOperationMetadata.OperationTypeMap[keyof IndexOperationMetadata.OperationTypeMap],
    cancelled: boolean,
    documentProgress?: Progress.AsObject,
  }

  export interface OperationTypeMap {
    OPERATION_TYPE_UNSPECIFIED: 0;
    CREATING_INDEX: 1;
  }

  export const OperationType: OperationTypeMap;
}

export class Progress extends jspb.Message {
  getWorkCompleted(): number;
  setWorkCompleted(value: number): void;

  getWorkEstimated(): number;
  setWorkEstimated(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Progress.AsObject;
  static toObject(includeInstance: boolean, msg: Progress): Progress.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Progress, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Progress;
  static deserializeBinaryFromReader(message: Progress, reader: jspb.BinaryReader): Progress;
}

export namespace Progress {
  export type AsObject = {
    workCompleted: number,
    workEstimated: number,
  }
}

export class CreateIndexRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  hasIndex(): boolean;
  clearIndex(): void;
  getIndex(): google_firestore_admin_v1beta1_index_pb.Index | undefined;
  setIndex(value?: google_firestore_admin_v1beta1_index_pb.Index): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateIndexRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateIndexRequest): CreateIndexRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateIndexRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateIndexRequest;
  static deserializeBinaryFromReader(message: CreateIndexRequest, reader: jspb.BinaryReader): CreateIndexRequest;
}

export namespace CreateIndexRequest {
  export type AsObject = {
    parent: string,
    index?: google_firestore_admin_v1beta1_index_pb.Index.AsObject,
  }
}

export class GetIndexRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetIndexRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetIndexRequest): GetIndexRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetIndexRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetIndexRequest;
  static deserializeBinaryFromReader(message: GetIndexRequest, reader: jspb.BinaryReader): GetIndexRequest;
}

export namespace GetIndexRequest {
  export type AsObject = {
    name: string,
  }
}

export class ListIndexesRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getFilter(): string;
  setFilter(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListIndexesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListIndexesRequest): ListIndexesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListIndexesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListIndexesRequest;
  static deserializeBinaryFromReader(message: ListIndexesRequest, reader: jspb.BinaryReader): ListIndexesRequest;
}

export namespace ListIndexesRequest {
  export type AsObject = {
    parent: string,
    filter: string,
    pageSize: number,
    pageToken: string,
  }
}

export class DeleteIndexRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteIndexRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteIndexRequest): DeleteIndexRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteIndexRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteIndexRequest;
  static deserializeBinaryFromReader(message: DeleteIndexRequest, reader: jspb.BinaryReader): DeleteIndexRequest;
}

export namespace DeleteIndexRequest {
  export type AsObject = {
    name: string,
  }
}

export class ListIndexesResponse extends jspb.Message {
  clearIndexesList(): void;
  getIndexesList(): Array<google_firestore_admin_v1beta1_index_pb.Index>;
  setIndexesList(value: Array<google_firestore_admin_v1beta1_index_pb.Index>): void;
  addIndexes(value?: google_firestore_admin_v1beta1_index_pb.Index, index?: number): google_firestore_admin_v1beta1_index_pb.Index;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListIndexesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListIndexesResponse): ListIndexesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListIndexesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListIndexesResponse;
  static deserializeBinaryFromReader(message: ListIndexesResponse, reader: jspb.BinaryReader): ListIndexesResponse;
}

export namespace ListIndexesResponse {
  export type AsObject = {
    indexesList: Array<google_firestore_admin_v1beta1_index_pb.Index.AsObject>,
    nextPageToken: string,
  }
}

export class ExportDocumentsRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  clearCollectionIdsList(): void;
  getCollectionIdsList(): Array<string>;
  setCollectionIdsList(value: Array<string>): void;
  addCollectionIds(value: string, index?: number): string;

  getOutputUriPrefix(): string;
  setOutputUriPrefix(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExportDocumentsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExportDocumentsRequest): ExportDocumentsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExportDocumentsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExportDocumentsRequest;
  static deserializeBinaryFromReader(message: ExportDocumentsRequest, reader: jspb.BinaryReader): ExportDocumentsRequest;
}

export namespace ExportDocumentsRequest {
  export type AsObject = {
    name: string,
    collectionIdsList: Array<string>,
    outputUriPrefix: string,
  }
}

export class ImportDocumentsRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  clearCollectionIdsList(): void;
  getCollectionIdsList(): Array<string>;
  setCollectionIdsList(value: Array<string>): void;
  addCollectionIds(value: string, index?: number): string;

  getInputUriPrefix(): string;
  setInputUriPrefix(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImportDocumentsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ImportDocumentsRequest): ImportDocumentsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ImportDocumentsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImportDocumentsRequest;
  static deserializeBinaryFromReader(message: ImportDocumentsRequest, reader: jspb.BinaryReader): ImportDocumentsRequest;
}

export namespace ImportDocumentsRequest {
  export type AsObject = {
    name: string,
    collectionIdsList: Array<string>,
    inputUriPrefix: string,
  }
}

export class ExportDocumentsResponse extends jspb.Message {
  getOutputUriPrefix(): string;
  setOutputUriPrefix(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExportDocumentsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ExportDocumentsResponse): ExportDocumentsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExportDocumentsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExportDocumentsResponse;
  static deserializeBinaryFromReader(message: ExportDocumentsResponse, reader: jspb.BinaryReader): ExportDocumentsResponse;
}

export namespace ExportDocumentsResponse {
  export type AsObject = {
    outputUriPrefix: string,
  }
}

export class ExportDocumentsMetadata extends jspb.Message {
  hasStartTime(): boolean;
  clearStartTime(): void;
  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasEndTime(): boolean;
  clearEndTime(): void;
  getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getOperationState(): OperationStateMap[keyof OperationStateMap];
  setOperationState(value: OperationStateMap[keyof OperationStateMap]): void;

  hasProgressDocuments(): boolean;
  clearProgressDocuments(): void;
  getProgressDocuments(): Progress | undefined;
  setProgressDocuments(value?: Progress): void;

  hasProgressBytes(): boolean;
  clearProgressBytes(): void;
  getProgressBytes(): Progress | undefined;
  setProgressBytes(value?: Progress): void;

  clearCollectionIdsList(): void;
  getCollectionIdsList(): Array<string>;
  setCollectionIdsList(value: Array<string>): void;
  addCollectionIds(value: string, index?: number): string;

  getOutputUriPrefix(): string;
  setOutputUriPrefix(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExportDocumentsMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: ExportDocumentsMetadata): ExportDocumentsMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExportDocumentsMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExportDocumentsMetadata;
  static deserializeBinaryFromReader(message: ExportDocumentsMetadata, reader: jspb.BinaryReader): ExportDocumentsMetadata;
}

export namespace ExportDocumentsMetadata {
  export type AsObject = {
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    operationState: OperationStateMap[keyof OperationStateMap],
    progressDocuments?: Progress.AsObject,
    progressBytes?: Progress.AsObject,
    collectionIdsList: Array<string>,
    outputUriPrefix: string,
  }
}

export class ImportDocumentsMetadata extends jspb.Message {
  hasStartTime(): boolean;
  clearStartTime(): void;
  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasEndTime(): boolean;
  clearEndTime(): void;
  getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getOperationState(): OperationStateMap[keyof OperationStateMap];
  setOperationState(value: OperationStateMap[keyof OperationStateMap]): void;

  hasProgressDocuments(): boolean;
  clearProgressDocuments(): void;
  getProgressDocuments(): Progress | undefined;
  setProgressDocuments(value?: Progress): void;

  hasProgressBytes(): boolean;
  clearProgressBytes(): void;
  getProgressBytes(): Progress | undefined;
  setProgressBytes(value?: Progress): void;

  clearCollectionIdsList(): void;
  getCollectionIdsList(): Array<string>;
  setCollectionIdsList(value: Array<string>): void;
  addCollectionIds(value: string, index?: number): string;

  getInputUriPrefix(): string;
  setInputUriPrefix(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImportDocumentsMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: ImportDocumentsMetadata): ImportDocumentsMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ImportDocumentsMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImportDocumentsMetadata;
  static deserializeBinaryFromReader(message: ImportDocumentsMetadata, reader: jspb.BinaryReader): ImportDocumentsMetadata;
}

export namespace ImportDocumentsMetadata {
  export type AsObject = {
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    operationState: OperationStateMap[keyof OperationStateMap],
    progressDocuments?: Progress.AsObject,
    progressBytes?: Progress.AsObject,
    collectionIdsList: Array<string>,
    inputUriPrefix: string,
  }
}

export interface OperationStateMap {
  STATE_UNSPECIFIED: 0;
  INITIALIZING: 1;
  PROCESSING: 2;
  CANCELLING: 3;
  FINALIZING: 4;
  SUCCESSFUL: 5;
  FAILED: 6;
  CANCELLED: 7;
}

export const OperationState: OperationStateMap;

