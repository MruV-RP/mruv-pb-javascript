// package: google.devtools.resultstore.v2
// file: google/devtools/resultstore/v2/resultstore_download.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";
import * as google_devtools_resultstore_v2_action_pb from "../../../../google/devtools/resultstore/v2/action_pb";
import * as google_devtools_resultstore_v2_configuration_pb from "../../../../google/devtools/resultstore/v2/configuration_pb";
import * as google_devtools_resultstore_v2_configured_target_pb from "../../../../google/devtools/resultstore/v2/configured_target_pb";
import * as google_devtools_resultstore_v2_download_metadata_pb from "../../../../google/devtools/resultstore/v2/download_metadata_pb";
import * as google_devtools_resultstore_v2_file_set_pb from "../../../../google/devtools/resultstore/v2/file_set_pb";
import * as google_devtools_resultstore_v2_invocation_pb from "../../../../google/devtools/resultstore/v2/invocation_pb";
import * as google_devtools_resultstore_v2_target_pb from "../../../../google/devtools/resultstore/v2/target_pb";
import * as google_api_client_pb from "../../../../google/api/client_pb";

export class GetInvocationRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetInvocationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetInvocationRequest): GetInvocationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetInvocationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetInvocationRequest;
  static deserializeBinaryFromReader(message: GetInvocationRequest, reader: jspb.BinaryReader): GetInvocationRequest;
}

export namespace GetInvocationRequest {
  export type AsObject = {
    name: string,
  }
}

export class SearchInvocationsRequest extends jspb.Message {
  getPageSize(): number;
  setPageSize(value: number): void;

  hasPageToken(): boolean;
  clearPageToken(): void;
  getPageToken(): string;
  setPageToken(value: string): void;

  hasOffset(): boolean;
  clearOffset(): void;
  getOffset(): number;
  setOffset(value: number): void;

  getQuery(): string;
  setQuery(value: string): void;

  getProjectId(): string;
  setProjectId(value: string): void;

  getExactMatch(): boolean;
  setExactMatch(value: boolean): void;

  getPageStartCase(): SearchInvocationsRequest.PageStartCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchInvocationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SearchInvocationsRequest): SearchInvocationsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchInvocationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchInvocationsRequest;
  static deserializeBinaryFromReader(message: SearchInvocationsRequest, reader: jspb.BinaryReader): SearchInvocationsRequest;
}

export namespace SearchInvocationsRequest {
  export type AsObject = {
    pageSize: number,
    pageToken: string,
    offset: number,
    query: string,
    projectId: string,
    exactMatch: boolean,
  }

  export enum PageStartCase {
    PAGE_START_NOT_SET = 0,
    PAGE_TOKEN = 2,
    OFFSET = 3,
  }
}

export class SearchInvocationsResponse extends jspb.Message {
  clearInvocationsList(): void;
  getInvocationsList(): Array<google_devtools_resultstore_v2_invocation_pb.Invocation>;
  setInvocationsList(value: Array<google_devtools_resultstore_v2_invocation_pb.Invocation>): void;
  addInvocations(value?: google_devtools_resultstore_v2_invocation_pb.Invocation, index?: number): google_devtools_resultstore_v2_invocation_pb.Invocation;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchInvocationsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SearchInvocationsResponse): SearchInvocationsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchInvocationsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchInvocationsResponse;
  static deserializeBinaryFromReader(message: SearchInvocationsResponse, reader: jspb.BinaryReader): SearchInvocationsResponse;
}

export namespace SearchInvocationsResponse {
  export type AsObject = {
    invocationsList: Array<google_devtools_resultstore_v2_invocation_pb.Invocation.AsObject>,
    nextPageToken: string,
  }
}

export class GetInvocationDownloadMetadataRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetInvocationDownloadMetadataRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetInvocationDownloadMetadataRequest): GetInvocationDownloadMetadataRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetInvocationDownloadMetadataRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetInvocationDownloadMetadataRequest;
  static deserializeBinaryFromReader(message: GetInvocationDownloadMetadataRequest, reader: jspb.BinaryReader): GetInvocationDownloadMetadataRequest;
}

export namespace GetInvocationDownloadMetadataRequest {
  export type AsObject = {
    name: string,
  }
}

export class GetConfigurationRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetConfigurationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetConfigurationRequest): GetConfigurationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetConfigurationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetConfigurationRequest;
  static deserializeBinaryFromReader(message: GetConfigurationRequest, reader: jspb.BinaryReader): GetConfigurationRequest;
}

export namespace GetConfigurationRequest {
  export type AsObject = {
    name: string,
  }
}

export class ListConfigurationsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  hasPageToken(): boolean;
  clearPageToken(): void;
  getPageToken(): string;
  setPageToken(value: string): void;

  hasOffset(): boolean;
  clearOffset(): void;
  getOffset(): number;
  setOffset(value: number): void;

  getFilter(): string;
  setFilter(value: string): void;

  getPageStartCase(): ListConfigurationsRequest.PageStartCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListConfigurationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListConfigurationsRequest): ListConfigurationsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListConfigurationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListConfigurationsRequest;
  static deserializeBinaryFromReader(message: ListConfigurationsRequest, reader: jspb.BinaryReader): ListConfigurationsRequest;
}

export namespace ListConfigurationsRequest {
  export type AsObject = {
    parent: string,
    pageSize: number,
    pageToken: string,
    offset: number,
    filter: string,
  }

  export enum PageStartCase {
    PAGE_START_NOT_SET = 0,
    PAGE_TOKEN = 3,
    OFFSET = 4,
  }
}

export class ListConfigurationsResponse extends jspb.Message {
  clearConfigurationsList(): void;
  getConfigurationsList(): Array<google_devtools_resultstore_v2_configuration_pb.Configuration>;
  setConfigurationsList(value: Array<google_devtools_resultstore_v2_configuration_pb.Configuration>): void;
  addConfigurations(value?: google_devtools_resultstore_v2_configuration_pb.Configuration, index?: number): google_devtools_resultstore_v2_configuration_pb.Configuration;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListConfigurationsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListConfigurationsResponse): ListConfigurationsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListConfigurationsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListConfigurationsResponse;
  static deserializeBinaryFromReader(message: ListConfigurationsResponse, reader: jspb.BinaryReader): ListConfigurationsResponse;
}

export namespace ListConfigurationsResponse {
  export type AsObject = {
    configurationsList: Array<google_devtools_resultstore_v2_configuration_pb.Configuration.AsObject>,
    nextPageToken: string,
  }
}

export class GetTargetRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTargetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTargetRequest): GetTargetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTargetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTargetRequest;
  static deserializeBinaryFromReader(message: GetTargetRequest, reader: jspb.BinaryReader): GetTargetRequest;
}

export namespace GetTargetRequest {
  export type AsObject = {
    name: string,
  }
}

export class ListTargetsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  hasPageToken(): boolean;
  clearPageToken(): void;
  getPageToken(): string;
  setPageToken(value: string): void;

  hasOffset(): boolean;
  clearOffset(): void;
  getOffset(): number;
  setOffset(value: number): void;

  getFilter(): string;
  setFilter(value: string): void;

  getPageStartCase(): ListTargetsRequest.PageStartCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTargetsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListTargetsRequest): ListTargetsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListTargetsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTargetsRequest;
  static deserializeBinaryFromReader(message: ListTargetsRequest, reader: jspb.BinaryReader): ListTargetsRequest;
}

export namespace ListTargetsRequest {
  export type AsObject = {
    parent: string,
    pageSize: number,
    pageToken: string,
    offset: number,
    filter: string,
  }

  export enum PageStartCase {
    PAGE_START_NOT_SET = 0,
    PAGE_TOKEN = 3,
    OFFSET = 4,
  }
}

export class ListTargetsResponse extends jspb.Message {
  clearTargetsList(): void;
  getTargetsList(): Array<google_devtools_resultstore_v2_target_pb.Target>;
  setTargetsList(value: Array<google_devtools_resultstore_v2_target_pb.Target>): void;
  addTargets(value?: google_devtools_resultstore_v2_target_pb.Target, index?: number): google_devtools_resultstore_v2_target_pb.Target;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTargetsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListTargetsResponse): ListTargetsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListTargetsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTargetsResponse;
  static deserializeBinaryFromReader(message: ListTargetsResponse, reader: jspb.BinaryReader): ListTargetsResponse;
}

export namespace ListTargetsResponse {
  export type AsObject = {
    targetsList: Array<google_devtools_resultstore_v2_target_pb.Target.AsObject>,
    nextPageToken: string,
  }
}

export class GetConfiguredTargetRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetConfiguredTargetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetConfiguredTargetRequest): GetConfiguredTargetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetConfiguredTargetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetConfiguredTargetRequest;
  static deserializeBinaryFromReader(message: GetConfiguredTargetRequest, reader: jspb.BinaryReader): GetConfiguredTargetRequest;
}

export namespace GetConfiguredTargetRequest {
  export type AsObject = {
    name: string,
  }
}

export class ListConfiguredTargetsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  hasPageToken(): boolean;
  clearPageToken(): void;
  getPageToken(): string;
  setPageToken(value: string): void;

  hasOffset(): boolean;
  clearOffset(): void;
  getOffset(): number;
  setOffset(value: number): void;

  getFilter(): string;
  setFilter(value: string): void;

  getPageStartCase(): ListConfiguredTargetsRequest.PageStartCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListConfiguredTargetsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListConfiguredTargetsRequest): ListConfiguredTargetsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListConfiguredTargetsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListConfiguredTargetsRequest;
  static deserializeBinaryFromReader(message: ListConfiguredTargetsRequest, reader: jspb.BinaryReader): ListConfiguredTargetsRequest;
}

export namespace ListConfiguredTargetsRequest {
  export type AsObject = {
    parent: string,
    pageSize: number,
    pageToken: string,
    offset: number,
    filter: string,
  }

  export enum PageStartCase {
    PAGE_START_NOT_SET = 0,
    PAGE_TOKEN = 3,
    OFFSET = 4,
  }
}

export class ListConfiguredTargetsResponse extends jspb.Message {
  clearConfiguredTargetsList(): void;
  getConfiguredTargetsList(): Array<google_devtools_resultstore_v2_configured_target_pb.ConfiguredTarget>;
  setConfiguredTargetsList(value: Array<google_devtools_resultstore_v2_configured_target_pb.ConfiguredTarget>): void;
  addConfiguredTargets(value?: google_devtools_resultstore_v2_configured_target_pb.ConfiguredTarget, index?: number): google_devtools_resultstore_v2_configured_target_pb.ConfiguredTarget;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListConfiguredTargetsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListConfiguredTargetsResponse): ListConfiguredTargetsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListConfiguredTargetsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListConfiguredTargetsResponse;
  static deserializeBinaryFromReader(message: ListConfiguredTargetsResponse, reader: jspb.BinaryReader): ListConfiguredTargetsResponse;
}

export namespace ListConfiguredTargetsResponse {
  export type AsObject = {
    configuredTargetsList: Array<google_devtools_resultstore_v2_configured_target_pb.ConfiguredTarget.AsObject>,
    nextPageToken: string,
  }
}

export class GetActionRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetActionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetActionRequest): GetActionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetActionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetActionRequest;
  static deserializeBinaryFromReader(message: GetActionRequest, reader: jspb.BinaryReader): GetActionRequest;
}

export namespace GetActionRequest {
  export type AsObject = {
    name: string,
  }
}

export class ListActionsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  hasPageToken(): boolean;
  clearPageToken(): void;
  getPageToken(): string;
  setPageToken(value: string): void;

  hasOffset(): boolean;
  clearOffset(): void;
  getOffset(): number;
  setOffset(value: number): void;

  getFilter(): string;
  setFilter(value: string): void;

  getPageStartCase(): ListActionsRequest.PageStartCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListActionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListActionsRequest): ListActionsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListActionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListActionsRequest;
  static deserializeBinaryFromReader(message: ListActionsRequest, reader: jspb.BinaryReader): ListActionsRequest;
}

export namespace ListActionsRequest {
  export type AsObject = {
    parent: string,
    pageSize: number,
    pageToken: string,
    offset: number,
    filter: string,
  }

  export enum PageStartCase {
    PAGE_START_NOT_SET = 0,
    PAGE_TOKEN = 3,
    OFFSET = 4,
  }
}

export class ListActionsResponse extends jspb.Message {
  clearActionsList(): void;
  getActionsList(): Array<google_devtools_resultstore_v2_action_pb.Action>;
  setActionsList(value: Array<google_devtools_resultstore_v2_action_pb.Action>): void;
  addActions(value?: google_devtools_resultstore_v2_action_pb.Action, index?: number): google_devtools_resultstore_v2_action_pb.Action;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListActionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListActionsResponse): ListActionsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListActionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListActionsResponse;
  static deserializeBinaryFromReader(message: ListActionsResponse, reader: jspb.BinaryReader): ListActionsResponse;
}

export namespace ListActionsResponse {
  export type AsObject = {
    actionsList: Array<google_devtools_resultstore_v2_action_pb.Action.AsObject>,
    nextPageToken: string,
  }
}

export class GetFileSetRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFileSetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetFileSetRequest): GetFileSetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetFileSetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFileSetRequest;
  static deserializeBinaryFromReader(message: GetFileSetRequest, reader: jspb.BinaryReader): GetFileSetRequest;
}

export namespace GetFileSetRequest {
  export type AsObject = {
    name: string,
  }
}

export class ListFileSetsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  hasPageToken(): boolean;
  clearPageToken(): void;
  getPageToken(): string;
  setPageToken(value: string): void;

  hasOffset(): boolean;
  clearOffset(): void;
  getOffset(): number;
  setOffset(value: number): void;

  getFilter(): string;
  setFilter(value: string): void;

  getPageStartCase(): ListFileSetsRequest.PageStartCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFileSetsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListFileSetsRequest): ListFileSetsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListFileSetsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFileSetsRequest;
  static deserializeBinaryFromReader(message: ListFileSetsRequest, reader: jspb.BinaryReader): ListFileSetsRequest;
}

export namespace ListFileSetsRequest {
  export type AsObject = {
    parent: string,
    pageSize: number,
    pageToken: string,
    offset: number,
    filter: string,
  }

  export enum PageStartCase {
    PAGE_START_NOT_SET = 0,
    PAGE_TOKEN = 3,
    OFFSET = 4,
  }
}

export class ListFileSetsResponse extends jspb.Message {
  clearFileSetsList(): void;
  getFileSetsList(): Array<google_devtools_resultstore_v2_file_set_pb.FileSet>;
  setFileSetsList(value: Array<google_devtools_resultstore_v2_file_set_pb.FileSet>): void;
  addFileSets(value?: google_devtools_resultstore_v2_file_set_pb.FileSet, index?: number): google_devtools_resultstore_v2_file_set_pb.FileSet;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFileSetsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListFileSetsResponse): ListFileSetsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListFileSetsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFileSetsResponse;
  static deserializeBinaryFromReader(message: ListFileSetsResponse, reader: jspb.BinaryReader): ListFileSetsResponse;
}

export namespace ListFileSetsResponse {
  export type AsObject = {
    fileSetsList: Array<google_devtools_resultstore_v2_file_set_pb.FileSet.AsObject>,
    nextPageToken: string,
  }
}

export class TraverseFileSetsRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  hasPageToken(): boolean;
  clearPageToken(): void;
  getPageToken(): string;
  setPageToken(value: string): void;

  hasOffset(): boolean;
  clearOffset(): void;
  getOffset(): number;
  setOffset(value: number): void;

  getPageStartCase(): TraverseFileSetsRequest.PageStartCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TraverseFileSetsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TraverseFileSetsRequest): TraverseFileSetsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TraverseFileSetsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TraverseFileSetsRequest;
  static deserializeBinaryFromReader(message: TraverseFileSetsRequest, reader: jspb.BinaryReader): TraverseFileSetsRequest;
}

export namespace TraverseFileSetsRequest {
  export type AsObject = {
    name: string,
    pageSize: number,
    pageToken: string,
    offset: number,
  }

  export enum PageStartCase {
    PAGE_START_NOT_SET = 0,
    PAGE_TOKEN = 3,
    OFFSET = 4,
  }
}

export class TraverseFileSetsResponse extends jspb.Message {
  clearFileSetsList(): void;
  getFileSetsList(): Array<google_devtools_resultstore_v2_file_set_pb.FileSet>;
  setFileSetsList(value: Array<google_devtools_resultstore_v2_file_set_pb.FileSet>): void;
  addFileSets(value?: google_devtools_resultstore_v2_file_set_pb.FileSet, index?: number): google_devtools_resultstore_v2_file_set_pb.FileSet;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TraverseFileSetsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TraverseFileSetsResponse): TraverseFileSetsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TraverseFileSetsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TraverseFileSetsResponse;
  static deserializeBinaryFromReader(message: TraverseFileSetsResponse, reader: jspb.BinaryReader): TraverseFileSetsResponse;
}

export namespace TraverseFileSetsResponse {
  export type AsObject = {
    fileSetsList: Array<google_devtools_resultstore_v2_file_set_pb.FileSet.AsObject>,
    nextPageToken: string,
  }
}

