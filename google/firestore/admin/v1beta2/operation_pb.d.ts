// package: google.firestore.admin.v1beta2
// file: google/firestore/admin/v1beta2/operation.proto

import * as jspb from "google-protobuf";
import * as google_firestore_admin_v1beta2_index_pb from "../../../../google/firestore/admin/v1beta2/index_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";

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

  getState(): OperationStateMap[keyof OperationStateMap];
  setState(value: OperationStateMap[keyof OperationStateMap]): void;

  hasProgressDocuments(): boolean;
  clearProgressDocuments(): void;
  getProgressDocuments(): Progress | undefined;
  setProgressDocuments(value?: Progress): void;

  hasProgressBytes(): boolean;
  clearProgressBytes(): void;
  getProgressBytes(): Progress | undefined;
  setProgressBytes(value?: Progress): void;

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
    state: OperationStateMap[keyof OperationStateMap],
    progressDocuments?: Progress.AsObject,
    progressBytes?: Progress.AsObject,
  }
}

export class FieldOperationMetadata extends jspb.Message {
  hasStartTime(): boolean;
  clearStartTime(): void;
  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasEndTime(): boolean;
  clearEndTime(): void;
  getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getField(): string;
  setField(value: string): void;

  clearIndexConfigDeltasList(): void;
  getIndexConfigDeltasList(): Array<FieldOperationMetadata.IndexConfigDelta>;
  setIndexConfigDeltasList(value: Array<FieldOperationMetadata.IndexConfigDelta>): void;
  addIndexConfigDeltas(value?: FieldOperationMetadata.IndexConfigDelta, index?: number): FieldOperationMetadata.IndexConfigDelta;

  getState(): OperationStateMap[keyof OperationStateMap];
  setState(value: OperationStateMap[keyof OperationStateMap]): void;

  hasDocumentProgress(): boolean;
  clearDocumentProgress(): void;
  getDocumentProgress(): Progress | undefined;
  setDocumentProgress(value?: Progress): void;

  hasBytesProgress(): boolean;
  clearBytesProgress(): void;
  getBytesProgress(): Progress | undefined;
  setBytesProgress(value?: Progress): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FieldOperationMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: FieldOperationMetadata): FieldOperationMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FieldOperationMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FieldOperationMetadata;
  static deserializeBinaryFromReader(message: FieldOperationMetadata, reader: jspb.BinaryReader): FieldOperationMetadata;
}

export namespace FieldOperationMetadata {
  export type AsObject = {
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    field: string,
    indexConfigDeltasList: Array<FieldOperationMetadata.IndexConfigDelta.AsObject>,
    state: OperationStateMap[keyof OperationStateMap],
    documentProgress?: Progress.AsObject,
    bytesProgress?: Progress.AsObject,
  }

  export class IndexConfigDelta extends jspb.Message {
    getChangeType(): FieldOperationMetadata.IndexConfigDelta.ChangeTypeMap[keyof FieldOperationMetadata.IndexConfigDelta.ChangeTypeMap];
    setChangeType(value: FieldOperationMetadata.IndexConfigDelta.ChangeTypeMap[keyof FieldOperationMetadata.IndexConfigDelta.ChangeTypeMap]): void;

    hasIndex(): boolean;
    clearIndex(): void;
    getIndex(): google_firestore_admin_v1beta2_index_pb.Index | undefined;
    setIndex(value?: google_firestore_admin_v1beta2_index_pb.Index): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): IndexConfigDelta.AsObject;
    static toObject(includeInstance: boolean, msg: IndexConfigDelta): IndexConfigDelta.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: IndexConfigDelta, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): IndexConfigDelta;
    static deserializeBinaryFromReader(message: IndexConfigDelta, reader: jspb.BinaryReader): IndexConfigDelta;
  }

  export namespace IndexConfigDelta {
    export type AsObject = {
      changeType: FieldOperationMetadata.IndexConfigDelta.ChangeTypeMap[keyof FieldOperationMetadata.IndexConfigDelta.ChangeTypeMap],
      index?: google_firestore_admin_v1beta2_index_pb.Index.AsObject,
    }

    export interface ChangeTypeMap {
      CHANGE_TYPE_UNSPECIFIED: 0;
      ADD: 1;
      REMOVE: 2;
    }

    export const ChangeType: ChangeTypeMap;
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

export class Progress extends jspb.Message {
  getEstimatedWork(): number;
  setEstimatedWork(value: number): void;

  getCompletedWork(): number;
  setCompletedWork(value: number): void;

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
    estimatedWork: number,
    completedWork: number,
  }
}

export interface OperationStateMap {
  OPERATION_STATE_UNSPECIFIED: 0;
  INITIALIZING: 1;
  PROCESSING: 2;
  CANCELLING: 3;
  FINALIZING: 4;
  SUCCESSFUL: 5;
  FAILED: 6;
  CANCELLED: 7;
}

export const OperationState: OperationStateMap;

