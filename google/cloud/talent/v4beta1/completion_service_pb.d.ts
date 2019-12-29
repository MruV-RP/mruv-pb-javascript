// package: google.cloud.talent.v4beta1
// file: google/cloud/talent/v4beta1/completion_service.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";
import * as google_api_client_pb from "../../../../google/api/client_pb";
import * as google_api_field_behavior_pb from "../../../../google/api/field_behavior_pb";
import * as google_cloud_talent_v4beta1_common_pb from "../../../../google/cloud/talent/v4beta1/common_pb";

export class CompleteQueryRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getQuery(): string;
  setQuery(value: string): void;

  clearLanguageCodesList(): void;
  getLanguageCodesList(): Array<string>;
  setLanguageCodesList(value: Array<string>): void;
  addLanguageCodes(value: string, index?: number): string;

  getPageSize(): number;
  setPageSize(value: number): void;

  getCompany(): string;
  setCompany(value: string): void;

  getScope(): CompleteQueryRequest.CompletionScopeMap[keyof CompleteQueryRequest.CompletionScopeMap];
  setScope(value: CompleteQueryRequest.CompletionScopeMap[keyof CompleteQueryRequest.CompletionScopeMap]): void;

  getType(): CompleteQueryRequest.CompletionTypeMap[keyof CompleteQueryRequest.CompletionTypeMap];
  setType(value: CompleteQueryRequest.CompletionTypeMap[keyof CompleteQueryRequest.CompletionTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompleteQueryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CompleteQueryRequest): CompleteQueryRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CompleteQueryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompleteQueryRequest;
  static deserializeBinaryFromReader(message: CompleteQueryRequest, reader: jspb.BinaryReader): CompleteQueryRequest;
}

export namespace CompleteQueryRequest {
  export type AsObject = {
    parent: string,
    query: string,
    languageCodesList: Array<string>,
    pageSize: number,
    company: string,
    scope: CompleteQueryRequest.CompletionScopeMap[keyof CompleteQueryRequest.CompletionScopeMap],
    type: CompleteQueryRequest.CompletionTypeMap[keyof CompleteQueryRequest.CompletionTypeMap],
  }

  export interface CompletionScopeMap {
    COMPLETION_SCOPE_UNSPECIFIED: 0;
    TENANT: 1;
    PUBLIC: 2;
  }

  export const CompletionScope: CompletionScopeMap;

  export interface CompletionTypeMap {
    COMPLETION_TYPE_UNSPECIFIED: 0;
    JOB_TITLE: 1;
    COMPANY_NAME: 2;
    COMBINED: 3;
  }

  export const CompletionType: CompletionTypeMap;
}

export class CompleteQueryResponse extends jspb.Message {
  clearCompletionResultsList(): void;
  getCompletionResultsList(): Array<CompleteQueryResponse.CompletionResult>;
  setCompletionResultsList(value: Array<CompleteQueryResponse.CompletionResult>): void;
  addCompletionResults(value?: CompleteQueryResponse.CompletionResult, index?: number): CompleteQueryResponse.CompletionResult;

  hasMetadata(): boolean;
  clearMetadata(): void;
  getMetadata(): google_cloud_talent_v4beta1_common_pb.ResponseMetadata | undefined;
  setMetadata(value?: google_cloud_talent_v4beta1_common_pb.ResponseMetadata): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompleteQueryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CompleteQueryResponse): CompleteQueryResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CompleteQueryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompleteQueryResponse;
  static deserializeBinaryFromReader(message: CompleteQueryResponse, reader: jspb.BinaryReader): CompleteQueryResponse;
}

export namespace CompleteQueryResponse {
  export type AsObject = {
    completionResultsList: Array<CompleteQueryResponse.CompletionResult.AsObject>,
    metadata?: google_cloud_talent_v4beta1_common_pb.ResponseMetadata.AsObject,
  }

  export class CompletionResult extends jspb.Message {
    getSuggestion(): string;
    setSuggestion(value: string): void;

    getType(): CompleteQueryRequest.CompletionTypeMap[keyof CompleteQueryRequest.CompletionTypeMap];
    setType(value: CompleteQueryRequest.CompletionTypeMap[keyof CompleteQueryRequest.CompletionTypeMap]): void;

    getImageUri(): string;
    setImageUri(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CompletionResult.AsObject;
    static toObject(includeInstance: boolean, msg: CompletionResult): CompletionResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CompletionResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CompletionResult;
    static deserializeBinaryFromReader(message: CompletionResult, reader: jspb.BinaryReader): CompletionResult;
  }

  export namespace CompletionResult {
    export type AsObject = {
      suggestion: string,
      type: CompleteQueryRequest.CompletionTypeMap[keyof CompleteQueryRequest.CompletionTypeMap],
      imageUri: string,
    }
  }
}

