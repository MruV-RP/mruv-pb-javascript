// package: google.genomics.v1alpha2
// file: google/genomics/v1alpha2/pipelines.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as google_longrunning_operations_pb from "../../../google/longrunning/operations_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_rpc_code_pb from "../../../google/rpc/code_pb";

export class ComputeEngine extends jspb.Message {
  getInstanceName(): string;
  setInstanceName(value: string): void;

  getZone(): string;
  setZone(value: string): void;

  getMachineType(): string;
  setMachineType(value: string): void;

  clearDiskNamesList(): void;
  getDiskNamesList(): Array<string>;
  setDiskNamesList(value: Array<string>): void;
  addDiskNames(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ComputeEngine.AsObject;
  static toObject(includeInstance: boolean, msg: ComputeEngine): ComputeEngine.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ComputeEngine, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ComputeEngine;
  static deserializeBinaryFromReader(message: ComputeEngine, reader: jspb.BinaryReader): ComputeEngine;
}

export namespace ComputeEngine {
  export type AsObject = {
    instanceName: string,
    zone: string,
    machineType: string,
    diskNamesList: Array<string>,
  }
}

export class RuntimeMetadata extends jspb.Message {
  hasComputeEngine(): boolean;
  clearComputeEngine(): void;
  getComputeEngine(): ComputeEngine | undefined;
  setComputeEngine(value?: ComputeEngine): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RuntimeMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: RuntimeMetadata): RuntimeMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RuntimeMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RuntimeMetadata;
  static deserializeBinaryFromReader(message: RuntimeMetadata, reader: jspb.BinaryReader): RuntimeMetadata;
}

export namespace RuntimeMetadata {
  export type AsObject = {
    computeEngine?: ComputeEngine.AsObject,
  }
}

export class Pipeline extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  clearInputParametersList(): void;
  getInputParametersList(): Array<PipelineParameter>;
  setInputParametersList(value: Array<PipelineParameter>): void;
  addInputParameters(value?: PipelineParameter, index?: number): PipelineParameter;

  clearOutputParametersList(): void;
  getOutputParametersList(): Array<PipelineParameter>;
  setOutputParametersList(value: Array<PipelineParameter>): void;
  addOutputParameters(value?: PipelineParameter, index?: number): PipelineParameter;

  hasDocker(): boolean;
  clearDocker(): void;
  getDocker(): DockerExecutor | undefined;
  setDocker(value?: DockerExecutor): void;

  hasResources(): boolean;
  clearResources(): void;
  getResources(): PipelineResources | undefined;
  setResources(value?: PipelineResources): void;

  getPipelineId(): string;
  setPipelineId(value: string): void;

  getExecutorCase(): Pipeline.ExecutorCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Pipeline.AsObject;
  static toObject(includeInstance: boolean, msg: Pipeline): Pipeline.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Pipeline, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Pipeline;
  static deserializeBinaryFromReader(message: Pipeline, reader: jspb.BinaryReader): Pipeline;
}

export namespace Pipeline {
  export type AsObject = {
    projectId: string,
    name: string,
    description: string,
    inputParametersList: Array<PipelineParameter.AsObject>,
    outputParametersList: Array<PipelineParameter.AsObject>,
    docker?: DockerExecutor.AsObject,
    resources?: PipelineResources.AsObject,
    pipelineId: string,
  }

  export enum ExecutorCase {
    EXECUTOR_NOT_SET = 0,
    DOCKER = 5,
  }
}

export class CreatePipelineRequest extends jspb.Message {
  hasPipeline(): boolean;
  clearPipeline(): void;
  getPipeline(): Pipeline | undefined;
  setPipeline(value?: Pipeline): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePipelineRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePipelineRequest): CreatePipelineRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreatePipelineRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePipelineRequest;
  static deserializeBinaryFromReader(message: CreatePipelineRequest, reader: jspb.BinaryReader): CreatePipelineRequest;
}

export namespace CreatePipelineRequest {
  export type AsObject = {
    pipeline?: Pipeline.AsObject,
  }
}

export class RunPipelineArgs extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getInputsMap(): jspb.Map<string, string>;
  clearInputsMap(): void;
  getOutputsMap(): jspb.Map<string, string>;
  clearOutputsMap(): void;
  hasServiceAccount(): boolean;
  clearServiceAccount(): void;
  getServiceAccount(): ServiceAccount | undefined;
  setServiceAccount(value?: ServiceAccount): void;

  getClientId(): string;
  setClientId(value: string): void;

  hasResources(): boolean;
  clearResources(): void;
  getResources(): PipelineResources | undefined;
  setResources(value?: PipelineResources): void;

  hasLogging(): boolean;
  clearLogging(): void;
  getLogging(): LoggingOptions | undefined;
  setLogging(value?: LoggingOptions): void;

  hasKeepVmAliveOnFailureDuration(): boolean;
  clearKeepVmAliveOnFailureDuration(): void;
  getKeepVmAliveOnFailureDuration(): google_protobuf_duration_pb.Duration | undefined;
  setKeepVmAliveOnFailureDuration(value?: google_protobuf_duration_pb.Duration): void;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RunPipelineArgs.AsObject;
  static toObject(includeInstance: boolean, msg: RunPipelineArgs): RunPipelineArgs.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RunPipelineArgs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RunPipelineArgs;
  static deserializeBinaryFromReader(message: RunPipelineArgs, reader: jspb.BinaryReader): RunPipelineArgs;
}

export namespace RunPipelineArgs {
  export type AsObject = {
    projectId: string,
    inputsMap: Array<[string, string]>,
    outputsMap: Array<[string, string]>,
    serviceAccount?: ServiceAccount.AsObject,
    clientId: string,
    resources?: PipelineResources.AsObject,
    logging?: LoggingOptions.AsObject,
    keepVmAliveOnFailureDuration?: google_protobuf_duration_pb.Duration.AsObject,
    labelsMap: Array<[string, string]>,
  }
}

export class RunPipelineRequest extends jspb.Message {
  hasPipelineId(): boolean;
  clearPipelineId(): void;
  getPipelineId(): string;
  setPipelineId(value: string): void;

  hasEphemeralPipeline(): boolean;
  clearEphemeralPipeline(): void;
  getEphemeralPipeline(): Pipeline | undefined;
  setEphemeralPipeline(value?: Pipeline): void;

  hasPipelineArgs(): boolean;
  clearPipelineArgs(): void;
  getPipelineArgs(): RunPipelineArgs | undefined;
  setPipelineArgs(value?: RunPipelineArgs): void;

  getPipelineCase(): RunPipelineRequest.PipelineCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RunPipelineRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RunPipelineRequest): RunPipelineRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RunPipelineRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RunPipelineRequest;
  static deserializeBinaryFromReader(message: RunPipelineRequest, reader: jspb.BinaryReader): RunPipelineRequest;
}

export namespace RunPipelineRequest {
  export type AsObject = {
    pipelineId: string,
    ephemeralPipeline?: Pipeline.AsObject,
    pipelineArgs?: RunPipelineArgs.AsObject,
  }

  export enum PipelineCase {
    PIPELINE_NOT_SET = 0,
    PIPELINE_ID = 1,
    EPHEMERAL_PIPELINE = 2,
  }
}

export class GetPipelineRequest extends jspb.Message {
  getPipelineId(): string;
  setPipelineId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPipelineRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPipelineRequest): GetPipelineRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPipelineRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPipelineRequest;
  static deserializeBinaryFromReader(message: GetPipelineRequest, reader: jspb.BinaryReader): GetPipelineRequest;
}

export namespace GetPipelineRequest {
  export type AsObject = {
    pipelineId: string,
  }
}

export class ListPipelinesRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getNamePrefix(): string;
  setNamePrefix(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPipelinesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListPipelinesRequest): ListPipelinesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListPipelinesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPipelinesRequest;
  static deserializeBinaryFromReader(message: ListPipelinesRequest, reader: jspb.BinaryReader): ListPipelinesRequest;
}

export namespace ListPipelinesRequest {
  export type AsObject = {
    projectId: string,
    namePrefix: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListPipelinesResponse extends jspb.Message {
  clearPipelinesList(): void;
  getPipelinesList(): Array<Pipeline>;
  setPipelinesList(value: Array<Pipeline>): void;
  addPipelines(value?: Pipeline, index?: number): Pipeline;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPipelinesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListPipelinesResponse): ListPipelinesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListPipelinesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPipelinesResponse;
  static deserializeBinaryFromReader(message: ListPipelinesResponse, reader: jspb.BinaryReader): ListPipelinesResponse;
}

export namespace ListPipelinesResponse {
  export type AsObject = {
    pipelinesList: Array<Pipeline.AsObject>,
    nextPageToken: string,
  }
}

export class DeletePipelineRequest extends jspb.Message {
  getPipelineId(): string;
  setPipelineId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeletePipelineRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeletePipelineRequest): DeletePipelineRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeletePipelineRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeletePipelineRequest;
  static deserializeBinaryFromReader(message: DeletePipelineRequest, reader: jspb.BinaryReader): DeletePipelineRequest;
}

export namespace DeletePipelineRequest {
  export type AsObject = {
    pipelineId: string,
  }
}

export class GetControllerConfigRequest extends jspb.Message {
  getOperationId(): string;
  setOperationId(value: string): void;

  getValidationToken(): number;
  setValidationToken(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetControllerConfigRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetControllerConfigRequest): GetControllerConfigRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetControllerConfigRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetControllerConfigRequest;
  static deserializeBinaryFromReader(message: GetControllerConfigRequest, reader: jspb.BinaryReader): GetControllerConfigRequest;
}

export namespace GetControllerConfigRequest {
  export type AsObject = {
    operationId: string,
    validationToken: number,
  }
}

export class ControllerConfig extends jspb.Message {
  getImage(): string;
  setImage(value: string): void;

  getCmd(): string;
  setCmd(value: string): void;

  getGcsLogPath(): string;
  setGcsLogPath(value: string): void;

  getMachineType(): string;
  setMachineType(value: string): void;

  getVarsMap(): jspb.Map<string, string>;
  clearVarsMap(): void;
  getDisksMap(): jspb.Map<string, string>;
  clearDisksMap(): void;
  getGcsSourcesMap(): jspb.Map<string, ControllerConfig.RepeatedString>;
  clearGcsSourcesMap(): void;
  getGcsSinksMap(): jspb.Map<string, ControllerConfig.RepeatedString>;
  clearGcsSinksMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ControllerConfig.AsObject;
  static toObject(includeInstance: boolean, msg: ControllerConfig): ControllerConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ControllerConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ControllerConfig;
  static deserializeBinaryFromReader(message: ControllerConfig, reader: jspb.BinaryReader): ControllerConfig;
}

export namespace ControllerConfig {
  export type AsObject = {
    image: string,
    cmd: string,
    gcsLogPath: string,
    machineType: string,
    varsMap: Array<[string, string]>,
    disksMap: Array<[string, string]>,
    gcsSourcesMap: Array<[string, ControllerConfig.RepeatedString.AsObject]>,
    gcsSinksMap: Array<[string, ControllerConfig.RepeatedString.AsObject]>,
  }

  export class RepeatedString extends jspb.Message {
    clearValuesList(): void;
    getValuesList(): Array<string>;
    setValuesList(value: Array<string>): void;
    addValues(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RepeatedString.AsObject;
    static toObject(includeInstance: boolean, msg: RepeatedString): RepeatedString.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RepeatedString, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RepeatedString;
    static deserializeBinaryFromReader(message: RepeatedString, reader: jspb.BinaryReader): RepeatedString;
  }

  export namespace RepeatedString {
    export type AsObject = {
      valuesList: Array<string>,
    }
  }
}

export class TimestampEvent extends jspb.Message {
  getDescription(): string;
  setDescription(value: string): void;

  hasTimestamp(): boolean;
  clearTimestamp(): void;
  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TimestampEvent.AsObject;
  static toObject(includeInstance: boolean, msg: TimestampEvent): TimestampEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TimestampEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TimestampEvent;
  static deserializeBinaryFromReader(message: TimestampEvent, reader: jspb.BinaryReader): TimestampEvent;
}

export namespace TimestampEvent {
  export type AsObject = {
    description: string,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class SetOperationStatusRequest extends jspb.Message {
  getOperationId(): string;
  setOperationId(value: string): void;

  clearTimestampEventsList(): void;
  getTimestampEventsList(): Array<TimestampEvent>;
  setTimestampEventsList(value: Array<TimestampEvent>): void;
  addTimestampEvents(value?: TimestampEvent, index?: number): TimestampEvent;

  getErrorCode(): google_rpc_code_pb.CodeMap[keyof google_rpc_code_pb.CodeMap];
  setErrorCode(value: google_rpc_code_pb.CodeMap[keyof google_rpc_code_pb.CodeMap]): void;

  getErrorMessage(): string;
  setErrorMessage(value: string): void;

  getValidationToken(): number;
  setValidationToken(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetOperationStatusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetOperationStatusRequest): SetOperationStatusRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetOperationStatusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetOperationStatusRequest;
  static deserializeBinaryFromReader(message: SetOperationStatusRequest, reader: jspb.BinaryReader): SetOperationStatusRequest;
}

export namespace SetOperationStatusRequest {
  export type AsObject = {
    operationId: string,
    timestampEventsList: Array<TimestampEvent.AsObject>,
    errorCode: google_rpc_code_pb.CodeMap[keyof google_rpc_code_pb.CodeMap],
    errorMessage: string,
    validationToken: number,
  }
}

export class ServiceAccount extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): void;

  clearScopesList(): void;
  getScopesList(): Array<string>;
  setScopesList(value: Array<string>): void;
  addScopes(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceAccount.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceAccount): ServiceAccount.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServiceAccount, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceAccount;
  static deserializeBinaryFromReader(message: ServiceAccount, reader: jspb.BinaryReader): ServiceAccount;
}

export namespace ServiceAccount {
  export type AsObject = {
    email: string,
    scopesList: Array<string>,
  }
}

export class LoggingOptions extends jspb.Message {
  getGcsPath(): string;
  setGcsPath(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoggingOptions.AsObject;
  static toObject(includeInstance: boolean, msg: LoggingOptions): LoggingOptions.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LoggingOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoggingOptions;
  static deserializeBinaryFromReader(message: LoggingOptions, reader: jspb.BinaryReader): LoggingOptions;
}

export namespace LoggingOptions {
  export type AsObject = {
    gcsPath: string,
  }
}

export class PipelineResources extends jspb.Message {
  getMinimumCpuCores(): number;
  setMinimumCpuCores(value: number): void;

  getPreemptible(): boolean;
  setPreemptible(value: boolean): void;

  getMinimumRamGb(): number;
  setMinimumRamGb(value: number): void;

  clearDisksList(): void;
  getDisksList(): Array<PipelineResources.Disk>;
  setDisksList(value: Array<PipelineResources.Disk>): void;
  addDisks(value?: PipelineResources.Disk, index?: number): PipelineResources.Disk;

  clearZonesList(): void;
  getZonesList(): Array<string>;
  setZonesList(value: Array<string>): void;
  addZones(value: string, index?: number): string;

  getBootDiskSizeGb(): number;
  setBootDiskSizeGb(value: number): void;

  getNoAddress(): boolean;
  setNoAddress(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PipelineResources.AsObject;
  static toObject(includeInstance: boolean, msg: PipelineResources): PipelineResources.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PipelineResources, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PipelineResources;
  static deserializeBinaryFromReader(message: PipelineResources, reader: jspb.BinaryReader): PipelineResources;
}

export namespace PipelineResources {
  export type AsObject = {
    minimumCpuCores: number,
    preemptible: boolean,
    minimumRamGb: number,
    disksList: Array<PipelineResources.Disk.AsObject>,
    zonesList: Array<string>,
    bootDiskSizeGb: number,
    noAddress: boolean,
  }

  export class Disk extends jspb.Message {
    getName(): string;
    setName(value: string): void;

    getType(): PipelineResources.Disk.TypeMap[keyof PipelineResources.Disk.TypeMap];
    setType(value: PipelineResources.Disk.TypeMap[keyof PipelineResources.Disk.TypeMap]): void;

    getSizeGb(): number;
    setSizeGb(value: number): void;

    getSource(): string;
    setSource(value: string): void;

    getAutoDelete(): boolean;
    setAutoDelete(value: boolean): void;

    getMountPoint(): string;
    setMountPoint(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Disk.AsObject;
    static toObject(includeInstance: boolean, msg: Disk): Disk.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Disk, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Disk;
    static deserializeBinaryFromReader(message: Disk, reader: jspb.BinaryReader): Disk;
  }

  export namespace Disk {
    export type AsObject = {
      name: string,
      type: PipelineResources.Disk.TypeMap[keyof PipelineResources.Disk.TypeMap],
      sizeGb: number,
      source: string,
      autoDelete: boolean,
      mountPoint: string,
    }

    export interface TypeMap {
      TYPE_UNSPECIFIED: 0;
      PERSISTENT_HDD: 1;
      PERSISTENT_SSD: 2;
      LOCAL_SSD: 3;
    }

    export const Type: TypeMap;
  }
}

export class PipelineParameter extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getDefaultValue(): string;
  setDefaultValue(value: string): void;

  hasLocalCopy(): boolean;
  clearLocalCopy(): void;
  getLocalCopy(): PipelineParameter.LocalCopy | undefined;
  setLocalCopy(value?: PipelineParameter.LocalCopy): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PipelineParameter.AsObject;
  static toObject(includeInstance: boolean, msg: PipelineParameter): PipelineParameter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PipelineParameter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PipelineParameter;
  static deserializeBinaryFromReader(message: PipelineParameter, reader: jspb.BinaryReader): PipelineParameter;
}

export namespace PipelineParameter {
  export type AsObject = {
    name: string,
    description: string,
    defaultValue: string,
    localCopy?: PipelineParameter.LocalCopy.AsObject,
  }

  export class LocalCopy extends jspb.Message {
    getPath(): string;
    setPath(value: string): void;

    getDisk(): string;
    setDisk(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LocalCopy.AsObject;
    static toObject(includeInstance: boolean, msg: LocalCopy): LocalCopy.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LocalCopy, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LocalCopy;
    static deserializeBinaryFromReader(message: LocalCopy, reader: jspb.BinaryReader): LocalCopy;
  }

  export namespace LocalCopy {
    export type AsObject = {
      path: string,
      disk: string,
    }
  }
}

export class DockerExecutor extends jspb.Message {
  getImageName(): string;
  setImageName(value: string): void;

  getCmd(): string;
  setCmd(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DockerExecutor.AsObject;
  static toObject(includeInstance: boolean, msg: DockerExecutor): DockerExecutor.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DockerExecutor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DockerExecutor;
  static deserializeBinaryFromReader(message: DockerExecutor, reader: jspb.BinaryReader): DockerExecutor;
}

export namespace DockerExecutor {
  export type AsObject = {
    imageName: string,
    cmd: string,
  }
}

