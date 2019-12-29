// package: google.cloud.dialogflow.v2
// file: google/cloud/dialogflow/v2/context.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";
import * as google_api_client_pb from "../../../../google/api/client_pb";
import * as google_api_field_behavior_pb from "../../../../google/api/field_behavior_pb";
import * as google_api_resource_pb from "../../../../google/api/resource_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";

export class Context extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getLifespanCount(): number;
  setLifespanCount(value: number): void;

  hasParameters(): boolean;
  clearParameters(): void;
  getParameters(): google_protobuf_struct_pb.Struct | undefined;
  setParameters(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Context.AsObject;
  static toObject(includeInstance: boolean, msg: Context): Context.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Context, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Context;
  static deserializeBinaryFromReader(message: Context, reader: jspb.BinaryReader): Context;
}

export namespace Context {
  export type AsObject = {
    name: string,
    lifespanCount: number,
    parameters?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class ListContextsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListContextsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListContextsRequest): ListContextsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListContextsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListContextsRequest;
  static deserializeBinaryFromReader(message: ListContextsRequest, reader: jspb.BinaryReader): ListContextsRequest;
}

export namespace ListContextsRequest {
  export type AsObject = {
    parent: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListContextsResponse extends jspb.Message {
  clearContextsList(): void;
  getContextsList(): Array<Context>;
  setContextsList(value: Array<Context>): void;
  addContexts(value?: Context, index?: number): Context;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListContextsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListContextsResponse): ListContextsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListContextsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListContextsResponse;
  static deserializeBinaryFromReader(message: ListContextsResponse, reader: jspb.BinaryReader): ListContextsResponse;
}

export namespace ListContextsResponse {
  export type AsObject = {
    contextsList: Array<Context.AsObject>,
    nextPageToken: string,
  }
}

export class GetContextRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetContextRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetContextRequest): GetContextRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetContextRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetContextRequest;
  static deserializeBinaryFromReader(message: GetContextRequest, reader: jspb.BinaryReader): GetContextRequest;
}

export namespace GetContextRequest {
  export type AsObject = {
    name: string,
  }
}

export class CreateContextRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  hasContext(): boolean;
  clearContext(): void;
  getContext(): Context | undefined;
  setContext(value?: Context): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateContextRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateContextRequest): CreateContextRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateContextRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateContextRequest;
  static deserializeBinaryFromReader(message: CreateContextRequest, reader: jspb.BinaryReader): CreateContextRequest;
}

export namespace CreateContextRequest {
  export type AsObject = {
    parent: string,
    context?: Context.AsObject,
  }
}

export class UpdateContextRequest extends jspb.Message {
  hasContext(): boolean;
  clearContext(): void;
  getContext(): Context | undefined;
  setContext(value?: Context): void;

  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateContextRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateContextRequest): UpdateContextRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateContextRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateContextRequest;
  static deserializeBinaryFromReader(message: UpdateContextRequest, reader: jspb.BinaryReader): UpdateContextRequest;
}

export namespace UpdateContextRequest {
  export type AsObject = {
    context?: Context.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class DeleteContextRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteContextRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteContextRequest): DeleteContextRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteContextRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteContextRequest;
  static deserializeBinaryFromReader(message: DeleteContextRequest, reader: jspb.BinaryReader): DeleteContextRequest;
}

export namespace DeleteContextRequest {
  export type AsObject = {
    name: string,
  }
}

export class DeleteAllContextsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAllContextsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAllContextsRequest): DeleteAllContextsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteAllContextsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAllContextsRequest;
  static deserializeBinaryFromReader(message: DeleteAllContextsRequest, reader: jspb.BinaryReader): DeleteAllContextsRequest;
}

export namespace DeleteAllContextsRequest {
  export type AsObject = {
    parent: string,
  }
}

