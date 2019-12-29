// package: google.firestore.admin.v1
// file: google/firestore/admin/v1/firestore_admin.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";
import * as google_firestore_admin_v1_field_pb from "../../../../google/firestore/admin/v1/field_pb";
import * as google_firestore_admin_v1_index_pb from "../../../../google/firestore/admin/v1/index_pb";
import * as google_longrunning_operations_pb from "../../../../google/longrunning/operations_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_api_client_pb from "../../../../google/api/client_pb";

export class CreateIndexRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  hasIndex(): boolean;
  clearIndex(): void;
  getIndex(): google_firestore_admin_v1_index_pb.Index | undefined;
  setIndex(value?: google_firestore_admin_v1_index_pb.Index): void;

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
    index?: google_firestore_admin_v1_index_pb.Index.AsObject,
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

export class ListIndexesResponse extends jspb.Message {
  clearIndexesList(): void;
  getIndexesList(): Array<google_firestore_admin_v1_index_pb.Index>;
  setIndexesList(value: Array<google_firestore_admin_v1_index_pb.Index>): void;
  addIndexes(value?: google_firestore_admin_v1_index_pb.Index, index?: number): google_firestore_admin_v1_index_pb.Index;

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
    indexesList: Array<google_firestore_admin_v1_index_pb.Index.AsObject>,
    nextPageToken: string,
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

export class UpdateFieldRequest extends jspb.Message {
  hasField(): boolean;
  clearField(): void;
  getField(): google_firestore_admin_v1_field_pb.Field | undefined;
  setField(value?: google_firestore_admin_v1_field_pb.Field): void;

  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateFieldRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateFieldRequest): UpdateFieldRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateFieldRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateFieldRequest;
  static deserializeBinaryFromReader(message: UpdateFieldRequest, reader: jspb.BinaryReader): UpdateFieldRequest;
}

export namespace UpdateFieldRequest {
  export type AsObject = {
    field?: google_firestore_admin_v1_field_pb.Field.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class GetFieldRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFieldRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetFieldRequest): GetFieldRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetFieldRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFieldRequest;
  static deserializeBinaryFromReader(message: GetFieldRequest, reader: jspb.BinaryReader): GetFieldRequest;
}

export namespace GetFieldRequest {
  export type AsObject = {
    name: string,
  }
}

export class ListFieldsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getFilter(): string;
  setFilter(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFieldsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListFieldsRequest): ListFieldsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListFieldsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFieldsRequest;
  static deserializeBinaryFromReader(message: ListFieldsRequest, reader: jspb.BinaryReader): ListFieldsRequest;
}

export namespace ListFieldsRequest {
  export type AsObject = {
    parent: string,
    filter: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListFieldsResponse extends jspb.Message {
  clearFieldsList(): void;
  getFieldsList(): Array<google_firestore_admin_v1_field_pb.Field>;
  setFieldsList(value: Array<google_firestore_admin_v1_field_pb.Field>): void;
  addFields(value?: google_firestore_admin_v1_field_pb.Field, index?: number): google_firestore_admin_v1_field_pb.Field;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFieldsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListFieldsResponse): ListFieldsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListFieldsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFieldsResponse;
  static deserializeBinaryFromReader(message: ListFieldsResponse, reader: jspb.BinaryReader): ListFieldsResponse;
}

export namespace ListFieldsResponse {
  export type AsObject = {
    fieldsList: Array<google_firestore_admin_v1_field_pb.Field.AsObject>,
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

