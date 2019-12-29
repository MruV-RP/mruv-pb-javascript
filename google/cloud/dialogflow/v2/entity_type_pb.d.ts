// package: google.cloud.dialogflow.v2
// file: google/cloud/dialogflow/v2/entity_type.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";
import * as google_api_client_pb from "../../../../google/api/client_pb";
import * as google_api_field_behavior_pb from "../../../../google/api/field_behavior_pb";
import * as google_api_resource_pb from "../../../../google/api/resource_pb";
import * as google_longrunning_operations_pb from "../../../../google/longrunning/operations_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";

export class EntityType extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDisplayName(): string;
  setDisplayName(value: string): void;

  getKind(): EntityType.KindMap[keyof EntityType.KindMap];
  setKind(value: EntityType.KindMap[keyof EntityType.KindMap]): void;

  getAutoExpansionMode(): EntityType.AutoExpansionModeMap[keyof EntityType.AutoExpansionModeMap];
  setAutoExpansionMode(value: EntityType.AutoExpansionModeMap[keyof EntityType.AutoExpansionModeMap]): void;

  clearEntitiesList(): void;
  getEntitiesList(): Array<EntityType.Entity>;
  setEntitiesList(value: Array<EntityType.Entity>): void;
  addEntities(value?: EntityType.Entity, index?: number): EntityType.Entity;

  getEnableFuzzyExtraction(): boolean;
  setEnableFuzzyExtraction(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EntityType.AsObject;
  static toObject(includeInstance: boolean, msg: EntityType): EntityType.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EntityType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EntityType;
  static deserializeBinaryFromReader(message: EntityType, reader: jspb.BinaryReader): EntityType;
}

export namespace EntityType {
  export type AsObject = {
    name: string,
    displayName: string,
    kind: EntityType.KindMap[keyof EntityType.KindMap],
    autoExpansionMode: EntityType.AutoExpansionModeMap[keyof EntityType.AutoExpansionModeMap],
    entitiesList: Array<EntityType.Entity.AsObject>,
    enableFuzzyExtraction: boolean,
  }

  export class Entity extends jspb.Message {
    getValue(): string;
    setValue(value: string): void;

    clearSynonymsList(): void;
    getSynonymsList(): Array<string>;
    setSynonymsList(value: Array<string>): void;
    addSynonyms(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Entity.AsObject;
    static toObject(includeInstance: boolean, msg: Entity): Entity.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Entity, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Entity;
    static deserializeBinaryFromReader(message: Entity, reader: jspb.BinaryReader): Entity;
  }

  export namespace Entity {
    export type AsObject = {
      value: string,
      synonymsList: Array<string>,
    }
  }

  export interface KindMap {
    KIND_UNSPECIFIED: 0;
    KIND_MAP: 1;
    KIND_LIST: 2;
    KIND_REGEXP: 3;
  }

  export const Kind: KindMap;

  export interface AutoExpansionModeMap {
    AUTO_EXPANSION_MODE_UNSPECIFIED: 0;
    AUTO_EXPANSION_MODE_DEFAULT: 1;
  }

  export const AutoExpansionMode: AutoExpansionModeMap;
}

export class ListEntityTypesRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getLanguageCode(): string;
  setLanguageCode(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListEntityTypesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListEntityTypesRequest): ListEntityTypesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListEntityTypesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListEntityTypesRequest;
  static deserializeBinaryFromReader(message: ListEntityTypesRequest, reader: jspb.BinaryReader): ListEntityTypesRequest;
}

export namespace ListEntityTypesRequest {
  export type AsObject = {
    parent: string,
    languageCode: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListEntityTypesResponse extends jspb.Message {
  clearEntityTypesList(): void;
  getEntityTypesList(): Array<EntityType>;
  setEntityTypesList(value: Array<EntityType>): void;
  addEntityTypes(value?: EntityType, index?: number): EntityType;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListEntityTypesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListEntityTypesResponse): ListEntityTypesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListEntityTypesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListEntityTypesResponse;
  static deserializeBinaryFromReader(message: ListEntityTypesResponse, reader: jspb.BinaryReader): ListEntityTypesResponse;
}

export namespace ListEntityTypesResponse {
  export type AsObject = {
    entityTypesList: Array<EntityType.AsObject>,
    nextPageToken: string,
  }
}

export class GetEntityTypeRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getLanguageCode(): string;
  setLanguageCode(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEntityTypeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetEntityTypeRequest): GetEntityTypeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetEntityTypeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEntityTypeRequest;
  static deserializeBinaryFromReader(message: GetEntityTypeRequest, reader: jspb.BinaryReader): GetEntityTypeRequest;
}

export namespace GetEntityTypeRequest {
  export type AsObject = {
    name: string,
    languageCode: string,
  }
}

export class CreateEntityTypeRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  hasEntityType(): boolean;
  clearEntityType(): void;
  getEntityType(): EntityType | undefined;
  setEntityType(value?: EntityType): void;

  getLanguageCode(): string;
  setLanguageCode(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateEntityTypeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateEntityTypeRequest): CreateEntityTypeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateEntityTypeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateEntityTypeRequest;
  static deserializeBinaryFromReader(message: CreateEntityTypeRequest, reader: jspb.BinaryReader): CreateEntityTypeRequest;
}

export namespace CreateEntityTypeRequest {
  export type AsObject = {
    parent: string,
    entityType?: EntityType.AsObject,
    languageCode: string,
  }
}

export class UpdateEntityTypeRequest extends jspb.Message {
  hasEntityType(): boolean;
  clearEntityType(): void;
  getEntityType(): EntityType | undefined;
  setEntityType(value?: EntityType): void;

  getLanguageCode(): string;
  setLanguageCode(value: string): void;

  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateEntityTypeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateEntityTypeRequest): UpdateEntityTypeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateEntityTypeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateEntityTypeRequest;
  static deserializeBinaryFromReader(message: UpdateEntityTypeRequest, reader: jspb.BinaryReader): UpdateEntityTypeRequest;
}

export namespace UpdateEntityTypeRequest {
  export type AsObject = {
    entityType?: EntityType.AsObject,
    languageCode: string,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class DeleteEntityTypeRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteEntityTypeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteEntityTypeRequest): DeleteEntityTypeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteEntityTypeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteEntityTypeRequest;
  static deserializeBinaryFromReader(message: DeleteEntityTypeRequest, reader: jspb.BinaryReader): DeleteEntityTypeRequest;
}

export namespace DeleteEntityTypeRequest {
  export type AsObject = {
    name: string,
  }
}

export class BatchUpdateEntityTypesRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  hasEntityTypeBatchUri(): boolean;
  clearEntityTypeBatchUri(): void;
  getEntityTypeBatchUri(): string;
  setEntityTypeBatchUri(value: string): void;

  hasEntityTypeBatchInline(): boolean;
  clearEntityTypeBatchInline(): void;
  getEntityTypeBatchInline(): EntityTypeBatch | undefined;
  setEntityTypeBatchInline(value?: EntityTypeBatch): void;

  getLanguageCode(): string;
  setLanguageCode(value: string): void;

  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  getEntityTypeBatchCase(): BatchUpdateEntityTypesRequest.EntityTypeBatchCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchUpdateEntityTypesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BatchUpdateEntityTypesRequest): BatchUpdateEntityTypesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BatchUpdateEntityTypesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchUpdateEntityTypesRequest;
  static deserializeBinaryFromReader(message: BatchUpdateEntityTypesRequest, reader: jspb.BinaryReader): BatchUpdateEntityTypesRequest;
}

export namespace BatchUpdateEntityTypesRequest {
  export type AsObject = {
    parent: string,
    entityTypeBatchUri: string,
    entityTypeBatchInline?: EntityTypeBatch.AsObject,
    languageCode: string,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }

  export enum EntityTypeBatchCase {
    ENTITY_TYPE_BATCH_NOT_SET = 0,
    ENTITY_TYPE_BATCH_URI = 2,
    ENTITY_TYPE_BATCH_INLINE = 3,
  }
}

export class BatchUpdateEntityTypesResponse extends jspb.Message {
  clearEntityTypesList(): void;
  getEntityTypesList(): Array<EntityType>;
  setEntityTypesList(value: Array<EntityType>): void;
  addEntityTypes(value?: EntityType, index?: number): EntityType;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchUpdateEntityTypesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BatchUpdateEntityTypesResponse): BatchUpdateEntityTypesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BatchUpdateEntityTypesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchUpdateEntityTypesResponse;
  static deserializeBinaryFromReader(message: BatchUpdateEntityTypesResponse, reader: jspb.BinaryReader): BatchUpdateEntityTypesResponse;
}

export namespace BatchUpdateEntityTypesResponse {
  export type AsObject = {
    entityTypesList: Array<EntityType.AsObject>,
  }
}

export class BatchDeleteEntityTypesRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  clearEntityTypeNamesList(): void;
  getEntityTypeNamesList(): Array<string>;
  setEntityTypeNamesList(value: Array<string>): void;
  addEntityTypeNames(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchDeleteEntityTypesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BatchDeleteEntityTypesRequest): BatchDeleteEntityTypesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BatchDeleteEntityTypesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchDeleteEntityTypesRequest;
  static deserializeBinaryFromReader(message: BatchDeleteEntityTypesRequest, reader: jspb.BinaryReader): BatchDeleteEntityTypesRequest;
}

export namespace BatchDeleteEntityTypesRequest {
  export type AsObject = {
    parent: string,
    entityTypeNamesList: Array<string>,
  }
}

export class BatchCreateEntitiesRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  clearEntitiesList(): void;
  getEntitiesList(): Array<EntityType.Entity>;
  setEntitiesList(value: Array<EntityType.Entity>): void;
  addEntities(value?: EntityType.Entity, index?: number): EntityType.Entity;

  getLanguageCode(): string;
  setLanguageCode(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchCreateEntitiesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BatchCreateEntitiesRequest): BatchCreateEntitiesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BatchCreateEntitiesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchCreateEntitiesRequest;
  static deserializeBinaryFromReader(message: BatchCreateEntitiesRequest, reader: jspb.BinaryReader): BatchCreateEntitiesRequest;
}

export namespace BatchCreateEntitiesRequest {
  export type AsObject = {
    parent: string,
    entitiesList: Array<EntityType.Entity.AsObject>,
    languageCode: string,
  }
}

export class BatchUpdateEntitiesRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  clearEntitiesList(): void;
  getEntitiesList(): Array<EntityType.Entity>;
  setEntitiesList(value: Array<EntityType.Entity>): void;
  addEntities(value?: EntityType.Entity, index?: number): EntityType.Entity;

  getLanguageCode(): string;
  setLanguageCode(value: string): void;

  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchUpdateEntitiesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BatchUpdateEntitiesRequest): BatchUpdateEntitiesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BatchUpdateEntitiesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchUpdateEntitiesRequest;
  static deserializeBinaryFromReader(message: BatchUpdateEntitiesRequest, reader: jspb.BinaryReader): BatchUpdateEntitiesRequest;
}

export namespace BatchUpdateEntitiesRequest {
  export type AsObject = {
    parent: string,
    entitiesList: Array<EntityType.Entity.AsObject>,
    languageCode: string,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class BatchDeleteEntitiesRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  clearEntityValuesList(): void;
  getEntityValuesList(): Array<string>;
  setEntityValuesList(value: Array<string>): void;
  addEntityValues(value: string, index?: number): string;

  getLanguageCode(): string;
  setLanguageCode(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchDeleteEntitiesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BatchDeleteEntitiesRequest): BatchDeleteEntitiesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BatchDeleteEntitiesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchDeleteEntitiesRequest;
  static deserializeBinaryFromReader(message: BatchDeleteEntitiesRequest, reader: jspb.BinaryReader): BatchDeleteEntitiesRequest;
}

export namespace BatchDeleteEntitiesRequest {
  export type AsObject = {
    parent: string,
    entityValuesList: Array<string>,
    languageCode: string,
  }
}

export class EntityTypeBatch extends jspb.Message {
  clearEntityTypesList(): void;
  getEntityTypesList(): Array<EntityType>;
  setEntityTypesList(value: Array<EntityType>): void;
  addEntityTypes(value?: EntityType, index?: number): EntityType;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EntityTypeBatch.AsObject;
  static toObject(includeInstance: boolean, msg: EntityTypeBatch): EntityTypeBatch.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EntityTypeBatch, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EntityTypeBatch;
  static deserializeBinaryFromReader(message: EntityTypeBatch, reader: jspb.BinaryReader): EntityTypeBatch;
}

export namespace EntityTypeBatch {
  export type AsObject = {
    entityTypesList: Array<EntityType.AsObject>,
  }
}

