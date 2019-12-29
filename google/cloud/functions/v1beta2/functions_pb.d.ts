// package: google.cloud.functions.v1beta2
// file: google/cloud/functions/v1beta2/functions.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";
import * as google_api_client_pb from "../../../../google/api/client_pb";
import * as google_api_field_behavior_pb from "../../../../google/api/field_behavior_pb";
import * as google_api_resource_pb from "../../../../google/api/resource_pb";
import * as google_longrunning_operations_pb from "../../../../google/longrunning/operations_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class CloudFunction extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasSourceArchiveUrl(): boolean;
  clearSourceArchiveUrl(): void;
  getSourceArchiveUrl(): string;
  setSourceArchiveUrl(value: string): void;

  hasSourceRepository(): boolean;
  clearSourceRepository(): void;
  getSourceRepository(): SourceRepository | undefined;
  setSourceRepository(value?: SourceRepository): void;

  hasSourceRepositoryUrl(): boolean;
  clearSourceRepositoryUrl(): void;
  getSourceRepositoryUrl(): string;
  setSourceRepositoryUrl(value: string): void;

  hasSourceUploadUrl(): boolean;
  clearSourceUploadUrl(): void;
  getSourceUploadUrl(): string;
  setSourceUploadUrl(value: string): void;

  hasHttpsTrigger(): boolean;
  clearHttpsTrigger(): void;
  getHttpsTrigger(): HTTPSTrigger | undefined;
  setHttpsTrigger(value?: HTTPSTrigger): void;

  hasEventTrigger(): boolean;
  clearEventTrigger(): void;
  getEventTrigger(): EventTrigger | undefined;
  setEventTrigger(value?: EventTrigger): void;

  getStatus(): CloudFunctionStatusMap[keyof CloudFunctionStatusMap];
  setStatus(value: CloudFunctionStatusMap[keyof CloudFunctionStatusMap]): void;

  getLatestOperation(): string;
  setLatestOperation(value: string): void;

  getEntryPoint(): string;
  setEntryPoint(value: string): void;

  getRuntime(): string;
  setRuntime(value: string): void;

  hasTimeout(): boolean;
  clearTimeout(): void;
  getTimeout(): google_protobuf_duration_pb.Duration | undefined;
  setTimeout(value?: google_protobuf_duration_pb.Duration): void;

  getAvailableMemoryMb(): number;
  setAvailableMemoryMb(value: number): void;

  getServiceAccount(): string;
  setServiceAccount(value: string): void;

  hasUpdateTime(): boolean;
  clearUpdateTime(): void;
  getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getVersionId(): number;
  setVersionId(value: number): void;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): void;
  getEnvironmentVariablesMap(): jspb.Map<string, string>;
  clearEnvironmentVariablesMap(): void;
  getMaxInstances(): number;
  setMaxInstances(value: number): void;

  getNetwork(): string;
  setNetwork(value: string): void;

  getVpcConnector(): string;
  setVpcConnector(value: string): void;

  getSourceCodeCase(): CloudFunction.SourceCodeCase;
  getTriggerCase(): CloudFunction.TriggerCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CloudFunction.AsObject;
  static toObject(includeInstance: boolean, msg: CloudFunction): CloudFunction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CloudFunction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CloudFunction;
  static deserializeBinaryFromReader(message: CloudFunction, reader: jspb.BinaryReader): CloudFunction;
}

export namespace CloudFunction {
  export type AsObject = {
    name: string,
    sourceArchiveUrl: string,
    sourceRepository?: SourceRepository.AsObject,
    sourceRepositoryUrl: string,
    sourceUploadUrl: string,
    httpsTrigger?: HTTPSTrigger.AsObject,
    eventTrigger?: EventTrigger.AsObject,
    status: CloudFunctionStatusMap[keyof CloudFunctionStatusMap],
    latestOperation: string,
    entryPoint: string,
    runtime: string,
    timeout?: google_protobuf_duration_pb.Duration.AsObject,
    availableMemoryMb: number,
    serviceAccount: string,
    updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    versionId: number,
    labelsMap: Array<[string, string]>,
    environmentVariablesMap: Array<[string, string]>,
    maxInstances: number,
    network: string,
    vpcConnector: string,
  }

  export enum SourceCodeCase {
    SOURCE_CODE_NOT_SET = 0,
    SOURCE_ARCHIVE_URL = 14,
    SOURCE_REPOSITORY = 3,
    SOURCE_REPOSITORY_URL = 18,
    SOURCE_UPLOAD_URL = 16,
  }

  export enum TriggerCase {
    TRIGGER_NOT_SET = 0,
    HTTPS_TRIGGER = 6,
    EVENT_TRIGGER = 12,
  }
}

export class HTTPSTrigger extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HTTPSTrigger.AsObject;
  static toObject(includeInstance: boolean, msg: HTTPSTrigger): HTTPSTrigger.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HTTPSTrigger, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HTTPSTrigger;
  static deserializeBinaryFromReader(message: HTTPSTrigger, reader: jspb.BinaryReader): HTTPSTrigger;
}

export namespace HTTPSTrigger {
  export type AsObject = {
    url: string,
  }
}

export class EventTrigger extends jspb.Message {
  getEventType(): string;
  setEventType(value: string): void;

  getResource(): string;
  setResource(value: string): void;

  getService(): string;
  setService(value: string): void;

  hasFailurePolicy(): boolean;
  clearFailurePolicy(): void;
  getFailurePolicy(): FailurePolicy | undefined;
  setFailurePolicy(value?: FailurePolicy): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventTrigger.AsObject;
  static toObject(includeInstance: boolean, msg: EventTrigger): EventTrigger.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventTrigger, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventTrigger;
  static deserializeBinaryFromReader(message: EventTrigger, reader: jspb.BinaryReader): EventTrigger;
}

export namespace EventTrigger {
  export type AsObject = {
    eventType: string,
    resource: string,
    service: string,
    failurePolicy?: FailurePolicy.AsObject,
  }
}

export class SourceRepository extends jspb.Message {
  getRepositoryUrl(): string;
  setRepositoryUrl(value: string): void;

  getSourcePath(): string;
  setSourcePath(value: string): void;

  hasBranch(): boolean;
  clearBranch(): void;
  getBranch(): string;
  setBranch(value: string): void;

  hasTag(): boolean;
  clearTag(): void;
  getTag(): string;
  setTag(value: string): void;

  hasRevision(): boolean;
  clearRevision(): void;
  getRevision(): string;
  setRevision(value: string): void;

  getDeployedRevision(): string;
  setDeployedRevision(value: string): void;

  getVersionCase(): SourceRepository.VersionCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SourceRepository.AsObject;
  static toObject(includeInstance: boolean, msg: SourceRepository): SourceRepository.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SourceRepository, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SourceRepository;
  static deserializeBinaryFromReader(message: SourceRepository, reader: jspb.BinaryReader): SourceRepository;
}

export namespace SourceRepository {
  export type AsObject = {
    repositoryUrl: string,
    sourcePath: string,
    branch: string,
    tag: string,
    revision: string,
    deployedRevision: string,
  }

  export enum VersionCase {
    VERSION_NOT_SET = 0,
    BRANCH = 3,
    TAG = 4,
    REVISION = 5,
  }
}

export class FailurePolicy extends jspb.Message {
  hasRetry(): boolean;
  clearRetry(): void;
  getRetry(): FailurePolicy.Retry | undefined;
  setRetry(value?: FailurePolicy.Retry): void;

  getActionCase(): FailurePolicy.ActionCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FailurePolicy.AsObject;
  static toObject(includeInstance: boolean, msg: FailurePolicy): FailurePolicy.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FailurePolicy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FailurePolicy;
  static deserializeBinaryFromReader(message: FailurePolicy, reader: jspb.BinaryReader): FailurePolicy;
}

export namespace FailurePolicy {
  export type AsObject = {
    retry?: FailurePolicy.Retry.AsObject,
  }

  export class Retry extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Retry.AsObject;
    static toObject(includeInstance: boolean, msg: Retry): Retry.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Retry, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Retry;
    static deserializeBinaryFromReader(message: Retry, reader: jspb.BinaryReader): Retry;
  }

  export namespace Retry {
    export type AsObject = {
    }
  }

  export enum ActionCase {
    ACTION_NOT_SET = 0,
    RETRY = 1,
  }
}

export class CreateFunctionRequest extends jspb.Message {
  getLocation(): string;
  setLocation(value: string): void;

  hasFunction(): boolean;
  clearFunction(): void;
  getFunction(): CloudFunction | undefined;
  setFunction(value?: CloudFunction): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateFunctionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateFunctionRequest): CreateFunctionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateFunctionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateFunctionRequest;
  static deserializeBinaryFromReader(message: CreateFunctionRequest, reader: jspb.BinaryReader): CreateFunctionRequest;
}

export namespace CreateFunctionRequest {
  export type AsObject = {
    location: string,
    pb_function?: CloudFunction.AsObject,
  }
}

export class UpdateFunctionRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasFunction(): boolean;
  clearFunction(): void;
  getFunction(): CloudFunction | undefined;
  setFunction(value?: CloudFunction): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateFunctionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateFunctionRequest): UpdateFunctionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateFunctionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateFunctionRequest;
  static deserializeBinaryFromReader(message: UpdateFunctionRequest, reader: jspb.BinaryReader): UpdateFunctionRequest;
}

export namespace UpdateFunctionRequest {
  export type AsObject = {
    name: string,
    pb_function?: CloudFunction.AsObject,
  }
}

export class GetFunctionRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFunctionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetFunctionRequest): GetFunctionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetFunctionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFunctionRequest;
  static deserializeBinaryFromReader(message: GetFunctionRequest, reader: jspb.BinaryReader): GetFunctionRequest;
}

export namespace GetFunctionRequest {
  export type AsObject = {
    name: string,
  }
}

export class ListFunctionsRequest extends jspb.Message {
  getLocation(): string;
  setLocation(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFunctionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListFunctionsRequest): ListFunctionsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListFunctionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFunctionsRequest;
  static deserializeBinaryFromReader(message: ListFunctionsRequest, reader: jspb.BinaryReader): ListFunctionsRequest;
}

export namespace ListFunctionsRequest {
  export type AsObject = {
    location: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListFunctionsResponse extends jspb.Message {
  clearFunctionsList(): void;
  getFunctionsList(): Array<CloudFunction>;
  setFunctionsList(value: Array<CloudFunction>): void;
  addFunctions(value?: CloudFunction, index?: number): CloudFunction;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  clearUnreachableList(): void;
  getUnreachableList(): Array<string>;
  setUnreachableList(value: Array<string>): void;
  addUnreachable(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFunctionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListFunctionsResponse): ListFunctionsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListFunctionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFunctionsResponse;
  static deserializeBinaryFromReader(message: ListFunctionsResponse, reader: jspb.BinaryReader): ListFunctionsResponse;
}

export namespace ListFunctionsResponse {
  export type AsObject = {
    functionsList: Array<CloudFunction.AsObject>,
    nextPageToken: string,
    unreachableList: Array<string>,
  }
}

export class DeleteFunctionRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteFunctionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteFunctionRequest): DeleteFunctionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteFunctionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteFunctionRequest;
  static deserializeBinaryFromReader(message: DeleteFunctionRequest, reader: jspb.BinaryReader): DeleteFunctionRequest;
}

export namespace DeleteFunctionRequest {
  export type AsObject = {
    name: string,
  }
}

export class CallFunctionRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getData(): string;
  setData(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CallFunctionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CallFunctionRequest): CallFunctionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CallFunctionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CallFunctionRequest;
  static deserializeBinaryFromReader(message: CallFunctionRequest, reader: jspb.BinaryReader): CallFunctionRequest;
}

export namespace CallFunctionRequest {
  export type AsObject = {
    name: string,
    data: string,
  }
}

export class CallFunctionResponse extends jspb.Message {
  getExecutionId(): string;
  setExecutionId(value: string): void;

  getResult(): string;
  setResult(value: string): void;

  getError(): string;
  setError(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CallFunctionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CallFunctionResponse): CallFunctionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CallFunctionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CallFunctionResponse;
  static deserializeBinaryFromReader(message: CallFunctionResponse, reader: jspb.BinaryReader): CallFunctionResponse;
}

export namespace CallFunctionResponse {
  export type AsObject = {
    executionId: string,
    result: string,
    error: string,
  }
}

export class GenerateUploadUrlRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateUploadUrlRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateUploadUrlRequest): GenerateUploadUrlRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GenerateUploadUrlRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateUploadUrlRequest;
  static deserializeBinaryFromReader(message: GenerateUploadUrlRequest, reader: jspb.BinaryReader): GenerateUploadUrlRequest;
}

export namespace GenerateUploadUrlRequest {
  export type AsObject = {
    parent: string,
  }
}

export class GenerateUploadUrlResponse extends jspb.Message {
  getUploadUrl(): string;
  setUploadUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateUploadUrlResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateUploadUrlResponse): GenerateUploadUrlResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GenerateUploadUrlResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateUploadUrlResponse;
  static deserializeBinaryFromReader(message: GenerateUploadUrlResponse, reader: jspb.BinaryReader): GenerateUploadUrlResponse;
}

export namespace GenerateUploadUrlResponse {
  export type AsObject = {
    uploadUrl: string,
  }
}

export class GenerateDownloadUrlRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getVersionId(): number;
  setVersionId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateDownloadUrlRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateDownloadUrlRequest): GenerateDownloadUrlRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GenerateDownloadUrlRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateDownloadUrlRequest;
  static deserializeBinaryFromReader(message: GenerateDownloadUrlRequest, reader: jspb.BinaryReader): GenerateDownloadUrlRequest;
}

export namespace GenerateDownloadUrlRequest {
  export type AsObject = {
    name: string,
    versionId: number,
  }
}

export class GenerateDownloadUrlResponse extends jspb.Message {
  getDownloadUrl(): string;
  setDownloadUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateDownloadUrlResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateDownloadUrlResponse): GenerateDownloadUrlResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GenerateDownloadUrlResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateDownloadUrlResponse;
  static deserializeBinaryFromReader(message: GenerateDownloadUrlResponse, reader: jspb.BinaryReader): GenerateDownloadUrlResponse;
}

export namespace GenerateDownloadUrlResponse {
  export type AsObject = {
    downloadUrl: string,
  }
}

export interface CloudFunctionStatusMap {
  STATUS_UNSPECIFIED: 0;
  READY: 1;
  FAILED: 2;
  DEPLOYING: 3;
  DELETING: 4;
}

export const CloudFunctionStatus: CloudFunctionStatusMap;

