// package: google.cloud.osconfig.agentendpoint.v1beta
// file: google/cloud/osconfig/agentendpoint/v1beta/agentendpoint.proto

import * as jspb from "google-protobuf";
import * as google_api_field_behavior_pb from "../../../../../google/api/field_behavior_pb";
import * as google_cloud_osconfig_agentendpoint_v1beta_tasks_pb from "../../../../../google/cloud/osconfig/agentendpoint/v1beta/tasks_pb";
import * as google_api_client_pb from "../../../../../google/api/client_pb";

export class ReceiveTaskNotificationRequest extends jspb.Message {
  getInstanceIdToken(): string;
  setInstanceIdToken(value: string): void;

  getAgentVersion(): string;
  setAgentVersion(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReceiveTaskNotificationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReceiveTaskNotificationRequest): ReceiveTaskNotificationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReceiveTaskNotificationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReceiveTaskNotificationRequest;
  static deserializeBinaryFromReader(message: ReceiveTaskNotificationRequest, reader: jspb.BinaryReader): ReceiveTaskNotificationRequest;
}

export namespace ReceiveTaskNotificationRequest {
  export type AsObject = {
    instanceIdToken: string,
    agentVersion: string,
  }
}

export class ReceiveTaskNotificationResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReceiveTaskNotificationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ReceiveTaskNotificationResponse): ReceiveTaskNotificationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReceiveTaskNotificationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReceiveTaskNotificationResponse;
  static deserializeBinaryFromReader(message: ReceiveTaskNotificationResponse, reader: jspb.BinaryReader): ReceiveTaskNotificationResponse;
}

export namespace ReceiveTaskNotificationResponse {
  export type AsObject = {
  }
}

export class StartNextTaskRequest extends jspb.Message {
  getInstanceIdToken(): string;
  setInstanceIdToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StartNextTaskRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StartNextTaskRequest): StartNextTaskRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StartNextTaskRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StartNextTaskRequest;
  static deserializeBinaryFromReader(message: StartNextTaskRequest, reader: jspb.BinaryReader): StartNextTaskRequest;
}

export namespace StartNextTaskRequest {
  export type AsObject = {
    instanceIdToken: string,
  }
}

export class StartNextTaskResponse extends jspb.Message {
  hasTask(): boolean;
  clearTask(): void;
  getTask(): google_cloud_osconfig_agentendpoint_v1beta_tasks_pb.Task | undefined;
  setTask(value?: google_cloud_osconfig_agentendpoint_v1beta_tasks_pb.Task): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StartNextTaskResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StartNextTaskResponse): StartNextTaskResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StartNextTaskResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StartNextTaskResponse;
  static deserializeBinaryFromReader(message: StartNextTaskResponse, reader: jspb.BinaryReader): StartNextTaskResponse;
}

export namespace StartNextTaskResponse {
  export type AsObject = {
    task?: google_cloud_osconfig_agentendpoint_v1beta_tasks_pb.Task.AsObject,
  }
}

export class ReportTaskProgressRequest extends jspb.Message {
  getInstanceIdToken(): string;
  setInstanceIdToken(value: string): void;

  getTaskId(): string;
  setTaskId(value: string): void;

  getTaskType(): google_cloud_osconfig_agentendpoint_v1beta_tasks_pb.TaskTypeMap[keyof google_cloud_osconfig_agentendpoint_v1beta_tasks_pb.TaskTypeMap];
  setTaskType(value: google_cloud_osconfig_agentendpoint_v1beta_tasks_pb.TaskTypeMap[keyof google_cloud_osconfig_agentendpoint_v1beta_tasks_pb.TaskTypeMap]): void;

  hasApplyPatchesTaskProgress(): boolean;
  clearApplyPatchesTaskProgress(): void;
  getApplyPatchesTaskProgress(): google_cloud_osconfig_agentendpoint_v1beta_tasks_pb.ApplyPatchesTaskProgress | undefined;
  setApplyPatchesTaskProgress(value?: google_cloud_osconfig_agentendpoint_v1beta_tasks_pb.ApplyPatchesTaskProgress): void;

  hasExecStepTaskProgress(): boolean;
  clearExecStepTaskProgress(): void;
  getExecStepTaskProgress(): google_cloud_osconfig_agentendpoint_v1beta_tasks_pb.ExecStepTaskProgress | undefined;
  setExecStepTaskProgress(value?: google_cloud_osconfig_agentendpoint_v1beta_tasks_pb.ExecStepTaskProgress): void;

  getProgressCase(): ReportTaskProgressRequest.ProgressCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReportTaskProgressRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReportTaskProgressRequest): ReportTaskProgressRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReportTaskProgressRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReportTaskProgressRequest;
  static deserializeBinaryFromReader(message: ReportTaskProgressRequest, reader: jspb.BinaryReader): ReportTaskProgressRequest;
}

export namespace ReportTaskProgressRequest {
  export type AsObject = {
    instanceIdToken: string,
    taskId: string,
    taskType: google_cloud_osconfig_agentendpoint_v1beta_tasks_pb.TaskTypeMap[keyof google_cloud_osconfig_agentendpoint_v1beta_tasks_pb.TaskTypeMap],
    applyPatchesTaskProgress?: google_cloud_osconfig_agentendpoint_v1beta_tasks_pb.ApplyPatchesTaskProgress.AsObject,
    execStepTaskProgress?: google_cloud_osconfig_agentendpoint_v1beta_tasks_pb.ExecStepTaskProgress.AsObject,
  }

  export enum ProgressCase {
    PROGRESS_NOT_SET = 0,
    APPLY_PATCHES_TASK_PROGRESS = 4,
    EXEC_STEP_TASK_PROGRESS = 5,
  }
}

export class ReportTaskProgressResponse extends jspb.Message {
  getTaskDirective(): google_cloud_osconfig_agentendpoint_v1beta_tasks_pb.TaskDirectiveMap[keyof google_cloud_osconfig_agentendpoint_v1beta_tasks_pb.TaskDirectiveMap];
  setTaskDirective(value: google_cloud_osconfig_agentendpoint_v1beta_tasks_pb.TaskDirectiveMap[keyof google_cloud_osconfig_agentendpoint_v1beta_tasks_pb.TaskDirectiveMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReportTaskProgressResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ReportTaskProgressResponse): ReportTaskProgressResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReportTaskProgressResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReportTaskProgressResponse;
  static deserializeBinaryFromReader(message: ReportTaskProgressResponse, reader: jspb.BinaryReader): ReportTaskProgressResponse;
}

export namespace ReportTaskProgressResponse {
  export type AsObject = {
    taskDirective: google_cloud_osconfig_agentendpoint_v1beta_tasks_pb.TaskDirectiveMap[keyof google_cloud_osconfig_agentendpoint_v1beta_tasks_pb.TaskDirectiveMap],
  }
}

export class ReportTaskCompleteRequest extends jspb.Message {
  getInstanceIdToken(): string;
  setInstanceIdToken(value: string): void;

  getTaskId(): string;
  setTaskId(value: string): void;

  getTaskType(): google_cloud_osconfig_agentendpoint_v1beta_tasks_pb.TaskTypeMap[keyof google_cloud_osconfig_agentendpoint_v1beta_tasks_pb.TaskTypeMap];
  setTaskType(value: google_cloud_osconfig_agentendpoint_v1beta_tasks_pb.TaskTypeMap[keyof google_cloud_osconfig_agentendpoint_v1beta_tasks_pb.TaskTypeMap]): void;

  getErrorMessage(): string;
  setErrorMessage(value: string): void;

  hasApplyPatchesTaskOutput(): boolean;
  clearApplyPatchesTaskOutput(): void;
  getApplyPatchesTaskOutput(): google_cloud_osconfig_agentendpoint_v1beta_tasks_pb.ApplyPatchesTaskOutput | undefined;
  setApplyPatchesTaskOutput(value?: google_cloud_osconfig_agentendpoint_v1beta_tasks_pb.ApplyPatchesTaskOutput): void;

  hasExecStepTaskOutput(): boolean;
  clearExecStepTaskOutput(): void;
  getExecStepTaskOutput(): google_cloud_osconfig_agentendpoint_v1beta_tasks_pb.ExecStepTaskOutput | undefined;
  setExecStepTaskOutput(value?: google_cloud_osconfig_agentendpoint_v1beta_tasks_pb.ExecStepTaskOutput): void;

  getOutputCase(): ReportTaskCompleteRequest.OutputCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReportTaskCompleteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReportTaskCompleteRequest): ReportTaskCompleteRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReportTaskCompleteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReportTaskCompleteRequest;
  static deserializeBinaryFromReader(message: ReportTaskCompleteRequest, reader: jspb.BinaryReader): ReportTaskCompleteRequest;
}

export namespace ReportTaskCompleteRequest {
  export type AsObject = {
    instanceIdToken: string,
    taskId: string,
    taskType: google_cloud_osconfig_agentendpoint_v1beta_tasks_pb.TaskTypeMap[keyof google_cloud_osconfig_agentendpoint_v1beta_tasks_pb.TaskTypeMap],
    errorMessage: string,
    applyPatchesTaskOutput?: google_cloud_osconfig_agentendpoint_v1beta_tasks_pb.ApplyPatchesTaskOutput.AsObject,
    execStepTaskOutput?: google_cloud_osconfig_agentendpoint_v1beta_tasks_pb.ExecStepTaskOutput.AsObject,
  }

  export enum OutputCase {
    OUTPUT_NOT_SET = 0,
    APPLY_PATCHES_TASK_OUTPUT = 5,
    EXEC_STEP_TASK_OUTPUT = 6,
  }
}

export class ReportTaskCompleteResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReportTaskCompleteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ReportTaskCompleteResponse): ReportTaskCompleteResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReportTaskCompleteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReportTaskCompleteResponse;
  static deserializeBinaryFromReader(message: ReportTaskCompleteResponse, reader: jspb.BinaryReader): ReportTaskCompleteResponse;
}

export namespace ReportTaskCompleteResponse {
  export type AsObject = {
  }
}

