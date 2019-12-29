// package: google.cloud.tasks.v2beta2
// file: google/cloud/tasks/v2beta2/cloudtasks.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";
import * as google_api_client_pb from "../../../../google/api/client_pb";
import * as google_api_field_behavior_pb from "../../../../google/api/field_behavior_pb";
import * as google_api_resource_pb from "../../../../google/api/resource_pb";
import * as google_cloud_tasks_v2beta2_queue_pb from "../../../../google/cloud/tasks/v2beta2/queue_pb";
import * as google_cloud_tasks_v2beta2_task_pb from "../../../../google/cloud/tasks/v2beta2/task_pb";
import * as google_iam_v1_iam_policy_pb from "../../../../google/iam/v1/iam_policy_pb";
import * as google_iam_v1_policy_pb from "../../../../google/iam/v1/policy_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class ListQueuesRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getFilter(): string;
  setFilter(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListQueuesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListQueuesRequest): ListQueuesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListQueuesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListQueuesRequest;
  static deserializeBinaryFromReader(message: ListQueuesRequest, reader: jspb.BinaryReader): ListQueuesRequest;
}

export namespace ListQueuesRequest {
  export type AsObject = {
    parent: string,
    filter: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListQueuesResponse extends jspb.Message {
  clearQueuesList(): void;
  getQueuesList(): Array<google_cloud_tasks_v2beta2_queue_pb.Queue>;
  setQueuesList(value: Array<google_cloud_tasks_v2beta2_queue_pb.Queue>): void;
  addQueues(value?: google_cloud_tasks_v2beta2_queue_pb.Queue, index?: number): google_cloud_tasks_v2beta2_queue_pb.Queue;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListQueuesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListQueuesResponse): ListQueuesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListQueuesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListQueuesResponse;
  static deserializeBinaryFromReader(message: ListQueuesResponse, reader: jspb.BinaryReader): ListQueuesResponse;
}

export namespace ListQueuesResponse {
  export type AsObject = {
    queuesList: Array<google_cloud_tasks_v2beta2_queue_pb.Queue.AsObject>,
    nextPageToken: string,
  }
}

export class GetQueueRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetQueueRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetQueueRequest): GetQueueRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetQueueRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetQueueRequest;
  static deserializeBinaryFromReader(message: GetQueueRequest, reader: jspb.BinaryReader): GetQueueRequest;
}

export namespace GetQueueRequest {
  export type AsObject = {
    name: string,
  }
}

export class CreateQueueRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  hasQueue(): boolean;
  clearQueue(): void;
  getQueue(): google_cloud_tasks_v2beta2_queue_pb.Queue | undefined;
  setQueue(value?: google_cloud_tasks_v2beta2_queue_pb.Queue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateQueueRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateQueueRequest): CreateQueueRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateQueueRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateQueueRequest;
  static deserializeBinaryFromReader(message: CreateQueueRequest, reader: jspb.BinaryReader): CreateQueueRequest;
}

export namespace CreateQueueRequest {
  export type AsObject = {
    parent: string,
    queue?: google_cloud_tasks_v2beta2_queue_pb.Queue.AsObject,
  }
}

export class UpdateQueueRequest extends jspb.Message {
  hasQueue(): boolean;
  clearQueue(): void;
  getQueue(): google_cloud_tasks_v2beta2_queue_pb.Queue | undefined;
  setQueue(value?: google_cloud_tasks_v2beta2_queue_pb.Queue): void;

  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateQueueRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateQueueRequest): UpdateQueueRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateQueueRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateQueueRequest;
  static deserializeBinaryFromReader(message: UpdateQueueRequest, reader: jspb.BinaryReader): UpdateQueueRequest;
}

export namespace UpdateQueueRequest {
  export type AsObject = {
    queue?: google_cloud_tasks_v2beta2_queue_pb.Queue.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class DeleteQueueRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteQueueRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteQueueRequest): DeleteQueueRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteQueueRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteQueueRequest;
  static deserializeBinaryFromReader(message: DeleteQueueRequest, reader: jspb.BinaryReader): DeleteQueueRequest;
}

export namespace DeleteQueueRequest {
  export type AsObject = {
    name: string,
  }
}

export class PurgeQueueRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PurgeQueueRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PurgeQueueRequest): PurgeQueueRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PurgeQueueRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PurgeQueueRequest;
  static deserializeBinaryFromReader(message: PurgeQueueRequest, reader: jspb.BinaryReader): PurgeQueueRequest;
}

export namespace PurgeQueueRequest {
  export type AsObject = {
    name: string,
  }
}

export class PauseQueueRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PauseQueueRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PauseQueueRequest): PauseQueueRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PauseQueueRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PauseQueueRequest;
  static deserializeBinaryFromReader(message: PauseQueueRequest, reader: jspb.BinaryReader): PauseQueueRequest;
}

export namespace PauseQueueRequest {
  export type AsObject = {
    name: string,
  }
}

export class ResumeQueueRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResumeQueueRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ResumeQueueRequest): ResumeQueueRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResumeQueueRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResumeQueueRequest;
  static deserializeBinaryFromReader(message: ResumeQueueRequest, reader: jspb.BinaryReader): ResumeQueueRequest;
}

export namespace ResumeQueueRequest {
  export type AsObject = {
    name: string,
  }
}

export class ListTasksRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getResponseView(): google_cloud_tasks_v2beta2_task_pb.Task.ViewMap[keyof google_cloud_tasks_v2beta2_task_pb.Task.ViewMap];
  setResponseView(value: google_cloud_tasks_v2beta2_task_pb.Task.ViewMap[keyof google_cloud_tasks_v2beta2_task_pb.Task.ViewMap]): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTasksRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListTasksRequest): ListTasksRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListTasksRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTasksRequest;
  static deserializeBinaryFromReader(message: ListTasksRequest, reader: jspb.BinaryReader): ListTasksRequest;
}

export namespace ListTasksRequest {
  export type AsObject = {
    parent: string,
    responseView: google_cloud_tasks_v2beta2_task_pb.Task.ViewMap[keyof google_cloud_tasks_v2beta2_task_pb.Task.ViewMap],
    pageSize: number,
    pageToken: string,
  }
}

export class ListTasksResponse extends jspb.Message {
  clearTasksList(): void;
  getTasksList(): Array<google_cloud_tasks_v2beta2_task_pb.Task>;
  setTasksList(value: Array<google_cloud_tasks_v2beta2_task_pb.Task>): void;
  addTasks(value?: google_cloud_tasks_v2beta2_task_pb.Task, index?: number): google_cloud_tasks_v2beta2_task_pb.Task;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTasksResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListTasksResponse): ListTasksResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListTasksResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTasksResponse;
  static deserializeBinaryFromReader(message: ListTasksResponse, reader: jspb.BinaryReader): ListTasksResponse;
}

export namespace ListTasksResponse {
  export type AsObject = {
    tasksList: Array<google_cloud_tasks_v2beta2_task_pb.Task.AsObject>,
    nextPageToken: string,
  }
}

export class GetTaskRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getResponseView(): google_cloud_tasks_v2beta2_task_pb.Task.ViewMap[keyof google_cloud_tasks_v2beta2_task_pb.Task.ViewMap];
  setResponseView(value: google_cloud_tasks_v2beta2_task_pb.Task.ViewMap[keyof google_cloud_tasks_v2beta2_task_pb.Task.ViewMap]): void;

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
    responseView: google_cloud_tasks_v2beta2_task_pb.Task.ViewMap[keyof google_cloud_tasks_v2beta2_task_pb.Task.ViewMap],
  }
}

export class CreateTaskRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  hasTask(): boolean;
  clearTask(): void;
  getTask(): google_cloud_tasks_v2beta2_task_pb.Task | undefined;
  setTask(value?: google_cloud_tasks_v2beta2_task_pb.Task): void;

  getResponseView(): google_cloud_tasks_v2beta2_task_pb.Task.ViewMap[keyof google_cloud_tasks_v2beta2_task_pb.Task.ViewMap];
  setResponseView(value: google_cloud_tasks_v2beta2_task_pb.Task.ViewMap[keyof google_cloud_tasks_v2beta2_task_pb.Task.ViewMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTaskRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTaskRequest): CreateTaskRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateTaskRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTaskRequest;
  static deserializeBinaryFromReader(message: CreateTaskRequest, reader: jspb.BinaryReader): CreateTaskRequest;
}

export namespace CreateTaskRequest {
  export type AsObject = {
    parent: string,
    task?: google_cloud_tasks_v2beta2_task_pb.Task.AsObject,
    responseView: google_cloud_tasks_v2beta2_task_pb.Task.ViewMap[keyof google_cloud_tasks_v2beta2_task_pb.Task.ViewMap],
  }
}

export class DeleteTaskRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteTaskRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteTaskRequest): DeleteTaskRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteTaskRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteTaskRequest;
  static deserializeBinaryFromReader(message: DeleteTaskRequest, reader: jspb.BinaryReader): DeleteTaskRequest;
}

export namespace DeleteTaskRequest {
  export type AsObject = {
    name: string,
  }
}

export class LeaseTasksRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getMaxTasks(): number;
  setMaxTasks(value: number): void;

  hasLeaseDuration(): boolean;
  clearLeaseDuration(): void;
  getLeaseDuration(): google_protobuf_duration_pb.Duration | undefined;
  setLeaseDuration(value?: google_protobuf_duration_pb.Duration): void;

  getResponseView(): google_cloud_tasks_v2beta2_task_pb.Task.ViewMap[keyof google_cloud_tasks_v2beta2_task_pb.Task.ViewMap];
  setResponseView(value: google_cloud_tasks_v2beta2_task_pb.Task.ViewMap[keyof google_cloud_tasks_v2beta2_task_pb.Task.ViewMap]): void;

  getFilter(): string;
  setFilter(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LeaseTasksRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LeaseTasksRequest): LeaseTasksRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LeaseTasksRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LeaseTasksRequest;
  static deserializeBinaryFromReader(message: LeaseTasksRequest, reader: jspb.BinaryReader): LeaseTasksRequest;
}

export namespace LeaseTasksRequest {
  export type AsObject = {
    parent: string,
    maxTasks: number,
    leaseDuration?: google_protobuf_duration_pb.Duration.AsObject,
    responseView: google_cloud_tasks_v2beta2_task_pb.Task.ViewMap[keyof google_cloud_tasks_v2beta2_task_pb.Task.ViewMap],
    filter: string,
  }
}

export class LeaseTasksResponse extends jspb.Message {
  clearTasksList(): void;
  getTasksList(): Array<google_cloud_tasks_v2beta2_task_pb.Task>;
  setTasksList(value: Array<google_cloud_tasks_v2beta2_task_pb.Task>): void;
  addTasks(value?: google_cloud_tasks_v2beta2_task_pb.Task, index?: number): google_cloud_tasks_v2beta2_task_pb.Task;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LeaseTasksResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LeaseTasksResponse): LeaseTasksResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LeaseTasksResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LeaseTasksResponse;
  static deserializeBinaryFromReader(message: LeaseTasksResponse, reader: jspb.BinaryReader): LeaseTasksResponse;
}

export namespace LeaseTasksResponse {
  export type AsObject = {
    tasksList: Array<google_cloud_tasks_v2beta2_task_pb.Task.AsObject>,
  }
}

export class AcknowledgeTaskRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasScheduleTime(): boolean;
  clearScheduleTime(): void;
  getScheduleTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setScheduleTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AcknowledgeTaskRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AcknowledgeTaskRequest): AcknowledgeTaskRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AcknowledgeTaskRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AcknowledgeTaskRequest;
  static deserializeBinaryFromReader(message: AcknowledgeTaskRequest, reader: jspb.BinaryReader): AcknowledgeTaskRequest;
}

export namespace AcknowledgeTaskRequest {
  export type AsObject = {
    name: string,
    scheduleTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class RenewLeaseRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasScheduleTime(): boolean;
  clearScheduleTime(): void;
  getScheduleTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setScheduleTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasLeaseDuration(): boolean;
  clearLeaseDuration(): void;
  getLeaseDuration(): google_protobuf_duration_pb.Duration | undefined;
  setLeaseDuration(value?: google_protobuf_duration_pb.Duration): void;

  getResponseView(): google_cloud_tasks_v2beta2_task_pb.Task.ViewMap[keyof google_cloud_tasks_v2beta2_task_pb.Task.ViewMap];
  setResponseView(value: google_cloud_tasks_v2beta2_task_pb.Task.ViewMap[keyof google_cloud_tasks_v2beta2_task_pb.Task.ViewMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RenewLeaseRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RenewLeaseRequest): RenewLeaseRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RenewLeaseRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RenewLeaseRequest;
  static deserializeBinaryFromReader(message: RenewLeaseRequest, reader: jspb.BinaryReader): RenewLeaseRequest;
}

export namespace RenewLeaseRequest {
  export type AsObject = {
    name: string,
    scheduleTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    leaseDuration?: google_protobuf_duration_pb.Duration.AsObject,
    responseView: google_cloud_tasks_v2beta2_task_pb.Task.ViewMap[keyof google_cloud_tasks_v2beta2_task_pb.Task.ViewMap],
  }
}

export class CancelLeaseRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasScheduleTime(): boolean;
  clearScheduleTime(): void;
  getScheduleTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setScheduleTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getResponseView(): google_cloud_tasks_v2beta2_task_pb.Task.ViewMap[keyof google_cloud_tasks_v2beta2_task_pb.Task.ViewMap];
  setResponseView(value: google_cloud_tasks_v2beta2_task_pb.Task.ViewMap[keyof google_cloud_tasks_v2beta2_task_pb.Task.ViewMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelLeaseRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CancelLeaseRequest): CancelLeaseRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CancelLeaseRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelLeaseRequest;
  static deserializeBinaryFromReader(message: CancelLeaseRequest, reader: jspb.BinaryReader): CancelLeaseRequest;
}

export namespace CancelLeaseRequest {
  export type AsObject = {
    name: string,
    scheduleTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    responseView: google_cloud_tasks_v2beta2_task_pb.Task.ViewMap[keyof google_cloud_tasks_v2beta2_task_pb.Task.ViewMap],
  }
}

export class RunTaskRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getResponseView(): google_cloud_tasks_v2beta2_task_pb.Task.ViewMap[keyof google_cloud_tasks_v2beta2_task_pb.Task.ViewMap];
  setResponseView(value: google_cloud_tasks_v2beta2_task_pb.Task.ViewMap[keyof google_cloud_tasks_v2beta2_task_pb.Task.ViewMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RunTaskRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RunTaskRequest): RunTaskRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RunTaskRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RunTaskRequest;
  static deserializeBinaryFromReader(message: RunTaskRequest, reader: jspb.BinaryReader): RunTaskRequest;
}

export namespace RunTaskRequest {
  export type AsObject = {
    name: string,
    responseView: google_cloud_tasks_v2beta2_task_pb.Task.ViewMap[keyof google_cloud_tasks_v2beta2_task_pb.Task.ViewMap],
  }
}

