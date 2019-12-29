// package: google.cloud.osconfig.agentendpoint.v1beta
// file: google/cloud/osconfig/agentendpoint/v1beta/tasks.proto

import * as jspb from "google-protobuf";
import * as google_api_field_behavior_pb from "../../../../../google/api/field_behavior_pb";
import * as google_cloud_osconfig_agentendpoint_v1beta_patch_jobs_pb from "../../../../../google/cloud/osconfig/agentendpoint/v1beta/patch_jobs_pb";

export class Task extends jspb.Message {
  getTaskId(): string;
  setTaskId(value: string): void;

  getTaskType(): TaskTypeMap[keyof TaskTypeMap];
  setTaskType(value: TaskTypeMap[keyof TaskTypeMap]): void;

  getTaskDirective(): TaskDirectiveMap[keyof TaskDirectiveMap];
  setTaskDirective(value: TaskDirectiveMap[keyof TaskDirectiveMap]): void;

  hasApplyPatchesTask(): boolean;
  clearApplyPatchesTask(): void;
  getApplyPatchesTask(): ApplyPatchesTask | undefined;
  setApplyPatchesTask(value?: ApplyPatchesTask): void;

  hasExecStepTask(): boolean;
  clearExecStepTask(): void;
  getExecStepTask(): ExecStepTask | undefined;
  setExecStepTask(value?: ExecStepTask): void;

  getServiceLabelsMap(): jspb.Map<string, string>;
  clearServiceLabelsMap(): void;
  getTaskDetailsCase(): Task.TaskDetailsCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Task.AsObject;
  static toObject(includeInstance: boolean, msg: Task): Task.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Task, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Task;
  static deserializeBinaryFromReader(message: Task, reader: jspb.BinaryReader): Task;
}

export namespace Task {
  export type AsObject = {
    taskId: string,
    taskType: TaskTypeMap[keyof TaskTypeMap],
    taskDirective: TaskDirectiveMap[keyof TaskDirectiveMap],
    applyPatchesTask?: ApplyPatchesTask.AsObject,
    execStepTask?: ExecStepTask.AsObject,
    serviceLabelsMap: Array<[string, string]>,
  }

  export enum TaskDetailsCase {
    TASK_DETAILS_NOT_SET = 0,
    APPLY_PATCHES_TASK = 4,
    EXEC_STEP_TASK = 5,
  }
}

export class ApplyPatchesTask extends jspb.Message {
  hasPatchConfig(): boolean;
  clearPatchConfig(): void;
  getPatchConfig(): google_cloud_osconfig_agentendpoint_v1beta_patch_jobs_pb.PatchConfig | undefined;
  setPatchConfig(value?: google_cloud_osconfig_agentendpoint_v1beta_patch_jobs_pb.PatchConfig): void;

  getDryRun(): boolean;
  setDryRun(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApplyPatchesTask.AsObject;
  static toObject(includeInstance: boolean, msg: ApplyPatchesTask): ApplyPatchesTask.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ApplyPatchesTask, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApplyPatchesTask;
  static deserializeBinaryFromReader(message: ApplyPatchesTask, reader: jspb.BinaryReader): ApplyPatchesTask;
}

export namespace ApplyPatchesTask {
  export type AsObject = {
    patchConfig?: google_cloud_osconfig_agentendpoint_v1beta_patch_jobs_pb.PatchConfig.AsObject,
    dryRun: boolean,
  }
}

export class ApplyPatchesTaskProgress extends jspb.Message {
  getState(): ApplyPatchesTaskProgress.StateMap[keyof ApplyPatchesTaskProgress.StateMap];
  setState(value: ApplyPatchesTaskProgress.StateMap[keyof ApplyPatchesTaskProgress.StateMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApplyPatchesTaskProgress.AsObject;
  static toObject(includeInstance: boolean, msg: ApplyPatchesTaskProgress): ApplyPatchesTaskProgress.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ApplyPatchesTaskProgress, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApplyPatchesTaskProgress;
  static deserializeBinaryFromReader(message: ApplyPatchesTaskProgress, reader: jspb.BinaryReader): ApplyPatchesTaskProgress;
}

export namespace ApplyPatchesTaskProgress {
  export type AsObject = {
    state: ApplyPatchesTaskProgress.StateMap[keyof ApplyPatchesTaskProgress.StateMap],
  }

  export interface StateMap {
    STATE_UNSPECIFIED: 0;
    STARTED: 4;
    DOWNLOADING_PATCHES: 1;
    APPLYING_PATCHES: 2;
    REBOOTING: 3;
  }

  export const State: StateMap;
}

export class ApplyPatchesTaskOutput extends jspb.Message {
  getState(): ApplyPatchesTaskOutput.StateMap[keyof ApplyPatchesTaskOutput.StateMap];
  setState(value: ApplyPatchesTaskOutput.StateMap[keyof ApplyPatchesTaskOutput.StateMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApplyPatchesTaskOutput.AsObject;
  static toObject(includeInstance: boolean, msg: ApplyPatchesTaskOutput): ApplyPatchesTaskOutput.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ApplyPatchesTaskOutput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApplyPatchesTaskOutput;
  static deserializeBinaryFromReader(message: ApplyPatchesTaskOutput, reader: jspb.BinaryReader): ApplyPatchesTaskOutput;
}

export namespace ApplyPatchesTaskOutput {
  export type AsObject = {
    state: ApplyPatchesTaskOutput.StateMap[keyof ApplyPatchesTaskOutput.StateMap],
  }

  export interface StateMap {
    STATE_UNSPECIFIED: 0;
    SUCCEEDED: 1;
    SUCCEEDED_REBOOT_REQUIRED: 2;
    FAILED: 3;
  }

  export const State: StateMap;
}

export class ExecStepTask extends jspb.Message {
  hasExecStep(): boolean;
  clearExecStep(): void;
  getExecStep(): google_cloud_osconfig_agentendpoint_v1beta_patch_jobs_pb.ExecStep | undefined;
  setExecStep(value?: google_cloud_osconfig_agentendpoint_v1beta_patch_jobs_pb.ExecStep): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecStepTask.AsObject;
  static toObject(includeInstance: boolean, msg: ExecStepTask): ExecStepTask.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecStepTask, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecStepTask;
  static deserializeBinaryFromReader(message: ExecStepTask, reader: jspb.BinaryReader): ExecStepTask;
}

export namespace ExecStepTask {
  export type AsObject = {
    execStep?: google_cloud_osconfig_agentendpoint_v1beta_patch_jobs_pb.ExecStep.AsObject,
  }
}

export class ExecStepTaskProgress extends jspb.Message {
  getState(): ExecStepTaskProgress.StateMap[keyof ExecStepTaskProgress.StateMap];
  setState(value: ExecStepTaskProgress.StateMap[keyof ExecStepTaskProgress.StateMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecStepTaskProgress.AsObject;
  static toObject(includeInstance: boolean, msg: ExecStepTaskProgress): ExecStepTaskProgress.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecStepTaskProgress, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecStepTaskProgress;
  static deserializeBinaryFromReader(message: ExecStepTaskProgress, reader: jspb.BinaryReader): ExecStepTaskProgress;
}

export namespace ExecStepTaskProgress {
  export type AsObject = {
    state: ExecStepTaskProgress.StateMap[keyof ExecStepTaskProgress.StateMap],
  }

  export interface StateMap {
    STATE_UNSPECIFIED: 0;
    STARTED: 1;
  }

  export const State: StateMap;
}

export class ExecStepTaskOutput extends jspb.Message {
  getState(): ExecStepTaskOutput.StateMap[keyof ExecStepTaskOutput.StateMap];
  setState(value: ExecStepTaskOutput.StateMap[keyof ExecStepTaskOutput.StateMap]): void;

  getExitCode(): number;
  setExitCode(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecStepTaskOutput.AsObject;
  static toObject(includeInstance: boolean, msg: ExecStepTaskOutput): ExecStepTaskOutput.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecStepTaskOutput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecStepTaskOutput;
  static deserializeBinaryFromReader(message: ExecStepTaskOutput, reader: jspb.BinaryReader): ExecStepTaskOutput;
}

export namespace ExecStepTaskOutput {
  export type AsObject = {
    state: ExecStepTaskOutput.StateMap[keyof ExecStepTaskOutput.StateMap],
    exitCode: number,
  }

  export interface StateMap {
    STATE_UNSPECIFIED: 0;
    COMPLETED: 1;
    TIMED_OUT: 2;
    CANCELLED: 3;
  }

  export const State: StateMap;
}

export interface TaskDirectiveMap {
  TASK_DIRECTIVE_UNSPECIFIED: 0;
  CONTINUE: 1;
  STOP: 2;
}

export const TaskDirective: TaskDirectiveMap;

export interface TaskTypeMap {
  TASK_TYPE_UNSPECIFIED: 0;
  APPLY_PATCHES: 1;
  EXEC_STEP_TASK: 2;
}

export const TaskType: TaskTypeMap;

