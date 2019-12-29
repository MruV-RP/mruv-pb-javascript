// package: google.cloud.dialogflow.v2beta1
// file: google/cloud/dialogflow/v2beta1/knowledge_base.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_api_client_pb from "../../../../google/api/client_pb";

export class KnowledgeBase extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDisplayName(): string;
  setDisplayName(value: string): void;

  getLanguageCode(): string;
  setLanguageCode(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KnowledgeBase.AsObject;
  static toObject(includeInstance: boolean, msg: KnowledgeBase): KnowledgeBase.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: KnowledgeBase, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KnowledgeBase;
  static deserializeBinaryFromReader(message: KnowledgeBase, reader: jspb.BinaryReader): KnowledgeBase;
}

export namespace KnowledgeBase {
  export type AsObject = {
    name: string,
    displayName: string,
    languageCode: string,
  }
}

export class ListKnowledgeBasesRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListKnowledgeBasesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListKnowledgeBasesRequest): ListKnowledgeBasesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListKnowledgeBasesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListKnowledgeBasesRequest;
  static deserializeBinaryFromReader(message: ListKnowledgeBasesRequest, reader: jspb.BinaryReader): ListKnowledgeBasesRequest;
}

export namespace ListKnowledgeBasesRequest {
  export type AsObject = {
    parent: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListKnowledgeBasesResponse extends jspb.Message {
  clearKnowledgeBasesList(): void;
  getKnowledgeBasesList(): Array<KnowledgeBase>;
  setKnowledgeBasesList(value: Array<KnowledgeBase>): void;
  addKnowledgeBases(value?: KnowledgeBase, index?: number): KnowledgeBase;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListKnowledgeBasesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListKnowledgeBasesResponse): ListKnowledgeBasesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListKnowledgeBasesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListKnowledgeBasesResponse;
  static deserializeBinaryFromReader(message: ListKnowledgeBasesResponse, reader: jspb.BinaryReader): ListKnowledgeBasesResponse;
}

export namespace ListKnowledgeBasesResponse {
  export type AsObject = {
    knowledgeBasesList: Array<KnowledgeBase.AsObject>,
    nextPageToken: string,
  }
}

export class GetKnowledgeBaseRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetKnowledgeBaseRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetKnowledgeBaseRequest): GetKnowledgeBaseRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetKnowledgeBaseRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetKnowledgeBaseRequest;
  static deserializeBinaryFromReader(message: GetKnowledgeBaseRequest, reader: jspb.BinaryReader): GetKnowledgeBaseRequest;
}

export namespace GetKnowledgeBaseRequest {
  export type AsObject = {
    name: string,
  }
}

export class CreateKnowledgeBaseRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  hasKnowledgeBase(): boolean;
  clearKnowledgeBase(): void;
  getKnowledgeBase(): KnowledgeBase | undefined;
  setKnowledgeBase(value?: KnowledgeBase): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateKnowledgeBaseRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateKnowledgeBaseRequest): CreateKnowledgeBaseRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateKnowledgeBaseRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateKnowledgeBaseRequest;
  static deserializeBinaryFromReader(message: CreateKnowledgeBaseRequest, reader: jspb.BinaryReader): CreateKnowledgeBaseRequest;
}

export namespace CreateKnowledgeBaseRequest {
  export type AsObject = {
    parent: string,
    knowledgeBase?: KnowledgeBase.AsObject,
  }
}

export class DeleteKnowledgeBaseRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getForce(): boolean;
  setForce(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteKnowledgeBaseRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteKnowledgeBaseRequest): DeleteKnowledgeBaseRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteKnowledgeBaseRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteKnowledgeBaseRequest;
  static deserializeBinaryFromReader(message: DeleteKnowledgeBaseRequest, reader: jspb.BinaryReader): DeleteKnowledgeBaseRequest;
}

export namespace DeleteKnowledgeBaseRequest {
  export type AsObject = {
    name: string,
    force: boolean,
  }
}

export class UpdateKnowledgeBaseRequest extends jspb.Message {
  hasKnowledgeBase(): boolean;
  clearKnowledgeBase(): void;
  getKnowledgeBase(): KnowledgeBase | undefined;
  setKnowledgeBase(value?: KnowledgeBase): void;

  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateKnowledgeBaseRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateKnowledgeBaseRequest): UpdateKnowledgeBaseRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateKnowledgeBaseRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateKnowledgeBaseRequest;
  static deserializeBinaryFromReader(message: UpdateKnowledgeBaseRequest, reader: jspb.BinaryReader): UpdateKnowledgeBaseRequest;
}

export namespace UpdateKnowledgeBaseRequest {
  export type AsObject = {
    knowledgeBase?: KnowledgeBase.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

