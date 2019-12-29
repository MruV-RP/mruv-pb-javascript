// package: google.datastore.admin.v1beta1
// file: google/datastore/admin/v1beta1/datastore_admin.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";
import * as google_longrunning_operations_pb from "../../../../google/longrunning/operations_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class CommonMetadata extends jspb.Message {
  hasStartTime(): boolean;
  clearStartTime(): void;
  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasEndTime(): boolean;
  clearEndTime(): void;
  getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getOperationType(): OperationTypeMap[keyof OperationTypeMap];
  setOperationType(value: OperationTypeMap[keyof OperationTypeMap]): void;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): void;
  getState(): CommonMetadata.StateMap[keyof CommonMetadata.StateMap];
  setState(value: CommonMetadata.StateMap[keyof CommonMetadata.StateMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommonMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: CommonMetadata): CommonMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CommonMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommonMetadata;
  static deserializeBinaryFromReader(message: CommonMetadata, reader: jspb.BinaryReader): CommonMetadata;
}

export namespace CommonMetadata {
  export type AsObject = {
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    operationType: OperationTypeMap[keyof OperationTypeMap],
    labelsMap: Array<[string, string]>,
    state: CommonMetadata.StateMap[keyof CommonMetadata.StateMap],
  }

  export interface StateMap {
    STATE_UNSPECIFIED: 0;
    INITIALIZING: 1;
    PROCESSING: 2;
    CANCELLING: 3;
    FINALIZING: 4;
    SUCCESSFUL: 5;
    FAILED: 6;
    CANCELLED: 7;
  }

  export const State: StateMap;
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

export class ExportEntitiesRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): void;
  hasEntityFilter(): boolean;
  clearEntityFilter(): void;
  getEntityFilter(): EntityFilter | undefined;
  setEntityFilter(value?: EntityFilter): void;

  getOutputUrlPrefix(): string;
  setOutputUrlPrefix(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExportEntitiesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExportEntitiesRequest): ExportEntitiesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExportEntitiesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExportEntitiesRequest;
  static deserializeBinaryFromReader(message: ExportEntitiesRequest, reader: jspb.BinaryReader): ExportEntitiesRequest;
}

export namespace ExportEntitiesRequest {
  export type AsObject = {
    projectId: string,
    labelsMap: Array<[string, string]>,
    entityFilter?: EntityFilter.AsObject,
    outputUrlPrefix: string,
  }
}

export class ImportEntitiesRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): void;
  getInputUrl(): string;
  setInputUrl(value: string): void;

  hasEntityFilter(): boolean;
  clearEntityFilter(): void;
  getEntityFilter(): EntityFilter | undefined;
  setEntityFilter(value?: EntityFilter): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImportEntitiesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ImportEntitiesRequest): ImportEntitiesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ImportEntitiesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImportEntitiesRequest;
  static deserializeBinaryFromReader(message: ImportEntitiesRequest, reader: jspb.BinaryReader): ImportEntitiesRequest;
}

export namespace ImportEntitiesRequest {
  export type AsObject = {
    projectId: string,
    labelsMap: Array<[string, string]>,
    inputUrl: string,
    entityFilter?: EntityFilter.AsObject,
  }
}

export class ExportEntitiesResponse extends jspb.Message {
  getOutputUrl(): string;
  setOutputUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExportEntitiesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ExportEntitiesResponse): ExportEntitiesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExportEntitiesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExportEntitiesResponse;
  static deserializeBinaryFromReader(message: ExportEntitiesResponse, reader: jspb.BinaryReader): ExportEntitiesResponse;
}

export namespace ExportEntitiesResponse {
  export type AsObject = {
    outputUrl: string,
  }
}

export class ExportEntitiesMetadata extends jspb.Message {
  hasCommon(): boolean;
  clearCommon(): void;
  getCommon(): CommonMetadata | undefined;
  setCommon(value?: CommonMetadata): void;

  hasProgressEntities(): boolean;
  clearProgressEntities(): void;
  getProgressEntities(): Progress | undefined;
  setProgressEntities(value?: Progress): void;

  hasProgressBytes(): boolean;
  clearProgressBytes(): void;
  getProgressBytes(): Progress | undefined;
  setProgressBytes(value?: Progress): void;

  hasEntityFilter(): boolean;
  clearEntityFilter(): void;
  getEntityFilter(): EntityFilter | undefined;
  setEntityFilter(value?: EntityFilter): void;

  getOutputUrlPrefix(): string;
  setOutputUrlPrefix(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExportEntitiesMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: ExportEntitiesMetadata): ExportEntitiesMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExportEntitiesMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExportEntitiesMetadata;
  static deserializeBinaryFromReader(message: ExportEntitiesMetadata, reader: jspb.BinaryReader): ExportEntitiesMetadata;
}

export namespace ExportEntitiesMetadata {
  export type AsObject = {
    common?: CommonMetadata.AsObject,
    progressEntities?: Progress.AsObject,
    progressBytes?: Progress.AsObject,
    entityFilter?: EntityFilter.AsObject,
    outputUrlPrefix: string,
  }
}

export class ImportEntitiesMetadata extends jspb.Message {
  hasCommon(): boolean;
  clearCommon(): void;
  getCommon(): CommonMetadata | undefined;
  setCommon(value?: CommonMetadata): void;

  hasProgressEntities(): boolean;
  clearProgressEntities(): void;
  getProgressEntities(): Progress | undefined;
  setProgressEntities(value?: Progress): void;

  hasProgressBytes(): boolean;
  clearProgressBytes(): void;
  getProgressBytes(): Progress | undefined;
  setProgressBytes(value?: Progress): void;

  hasEntityFilter(): boolean;
  clearEntityFilter(): void;
  getEntityFilter(): EntityFilter | undefined;
  setEntityFilter(value?: EntityFilter): void;

  getInputUrl(): string;
  setInputUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImportEntitiesMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: ImportEntitiesMetadata): ImportEntitiesMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ImportEntitiesMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImportEntitiesMetadata;
  static deserializeBinaryFromReader(message: ImportEntitiesMetadata, reader: jspb.BinaryReader): ImportEntitiesMetadata;
}

export namespace ImportEntitiesMetadata {
  export type AsObject = {
    common?: CommonMetadata.AsObject,
    progressEntities?: Progress.AsObject,
    progressBytes?: Progress.AsObject,
    entityFilter?: EntityFilter.AsObject,
    inputUrl: string,
  }
}

export class EntityFilter extends jspb.Message {
  clearKindsList(): void;
  getKindsList(): Array<string>;
  setKindsList(value: Array<string>): void;
  addKinds(value: string, index?: number): string;

  clearNamespaceIdsList(): void;
  getNamespaceIdsList(): Array<string>;
  setNamespaceIdsList(value: Array<string>): void;
  addNamespaceIds(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EntityFilter.AsObject;
  static toObject(includeInstance: boolean, msg: EntityFilter): EntityFilter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EntityFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EntityFilter;
  static deserializeBinaryFromReader(message: EntityFilter, reader: jspb.BinaryReader): EntityFilter;
}

export namespace EntityFilter {
  export type AsObject = {
    kindsList: Array<string>,
    namespaceIdsList: Array<string>,
  }
}

export interface OperationTypeMap {
  OPERATION_TYPE_UNSPECIFIED: 0;
  EXPORT_ENTITIES: 1;
  IMPORT_ENTITIES: 2;
}

export const OperationType: OperationTypeMap;

