// package: google.devtools.remoteworkers.v1test2
// file: google/devtools/remoteworkers/v1test2/tasks.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";
import * as google_api_client_pb from "../../../../google/api/client_pb";
import * as google_api_field_behavior_pb from "../../../../google/api/field_behavior_pb";
import * as google_api_resource_pb from "../../../../google/api/resource_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_rpc_status_pb from "../../../../google/rpc/status_pb";

export class Task extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasDescription(): boolean;
  clearDescription(): void;
  getDescription(): google_protobuf_any_pb.Any | undefined;
  setDescription(value?: google_protobuf_any_pb.Any): void;

  getLogsMap(): jspb.Map<string, string>;
  clearLogsMap(): void;
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
    name: string,
    description?: google_protobuf_any_pb.Any.AsObject,
    logsMap: Array<[string, string]>,
  }
}

export class TaskResult extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getComplete(): boolean;
  setComplete(value: boolean): void;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): google_rpc_status_pb.Status | undefined;
  setStatus(value?: google_rpc_status_pb.Status): void;

  hasOutput(): boolean;
  clearOutput(): void;
  getOutput(): google_protobuf_any_pb.Any | undefined;
  setOutput(value?: google_protobuf_any_pb.Any): void;

  hasMeta(): boolean;
  clearMeta(): void;
  getMeta(): google_protobuf_any_pb.Any | undefined;
  setMeta(value?: google_protobuf_any_pb.Any): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskResult.AsObject;
  static toObject(includeInstance: boolean, msg: TaskResult): TaskResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TaskResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskResult;
  static deserializeBinaryFromReader(message: TaskResult, reader: jspb.BinaryReader): TaskResult;
}

export namespace TaskResult {
  export type AsObject = {
    name: string,
    complete: boolean,
    status?: google_rpc_status_pb.Status.AsObject,
    output?: google_protobuf_any_pb.Any.AsObject,
    meta?: google_protobuf_any_pb.Any.AsObject,
  }
}

export class GetTaskRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTaskRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTaskRequest): GetTaskRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTaskRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTaskRequest;
  static deserializeBinaryFromReader(message: GetTaskRequest, reader: jspb.BinaryReader): GetTaskRequest;
}

export namespace GetTaskRequest {
  export type AsObject = {
    name: string,
  }
}

export class UpdateTaskResultRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasResult(): boolean;
  clearResult(): void;
  getResult(): TaskResult | undefined;
  setResult(value?: TaskResult): void;

  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  getSource(): string;
  setSource(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateTaskResultRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateTaskResultRequest): UpdateTaskResultRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateTaskResultRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateTaskResultRequest;
  static deserializeBinaryFromReader(message: UpdateTaskResultRequest, reader: jspb.BinaryReader): UpdateTaskResultRequest;
}

export namespace UpdateTaskResultRequest {
  export type AsObject = {
    name: string,
    result?: TaskResult.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    source: string,
  }
}

export class AddTaskLogRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getLogId(): string;
  setLogId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddTaskLogRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddTaskLogRequest): AddTaskLogRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddTaskLogRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddTaskLogRequest;
  static deserializeBinaryFromReader(message: AddTaskLogRequest, reader: jspb.BinaryReader): AddTaskLogRequest;
}

export namespace AddTaskLogRequest {
  export type AsObject = {
    name: string,
    logId: string,
  }
}

export class AddTaskLogResponse extends jspb.Message {
  getHandle(): string;
  setHandle(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddTaskLogResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddTaskLogResponse): AddTaskLogResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddTaskLogResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddTaskLogResponse;
  static deserializeBinaryFromReader(message: AddTaskLogResponse, reader: jspb.BinaryReader): AddTaskLogResponse;
}

export namespace AddTaskLogResponse {
  export type AsObject = {
    handle: string,
  }
}

