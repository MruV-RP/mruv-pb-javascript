// package: google.cloud.scheduler.v1beta1
// file: google/cloud/scheduler/v1beta1/job.proto

import * as jspb from "google-protobuf";
import * as google_api_resource_pb from "../../../../google/api/resource_pb";
import * as google_cloud_scheduler_v1beta1_target_pb from "../../../../google/cloud/scheduler/v1beta1/target_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_rpc_status_pb from "../../../../google/rpc/status_pb";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";

export class Job extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  hasPubsubTarget(): boolean;
  clearPubsubTarget(): void;
  getPubsubTarget(): google_cloud_scheduler_v1beta1_target_pb.PubsubTarget | undefined;
  setPubsubTarget(value?: google_cloud_scheduler_v1beta1_target_pb.PubsubTarget): void;

  hasAppEngineHttpTarget(): boolean;
  clearAppEngineHttpTarget(): void;
  getAppEngineHttpTarget(): google_cloud_scheduler_v1beta1_target_pb.AppEngineHttpTarget | undefined;
  setAppEngineHttpTarget(value?: google_cloud_scheduler_v1beta1_target_pb.AppEngineHttpTarget): void;

  hasHttpTarget(): boolean;
  clearHttpTarget(): void;
  getHttpTarget(): google_cloud_scheduler_v1beta1_target_pb.HttpTarget | undefined;
  setHttpTarget(value?: google_cloud_scheduler_v1beta1_target_pb.HttpTarget): void;

  getSchedule(): string;
  setSchedule(value: string): void;

  getTimeZone(): string;
  setTimeZone(value: string): void;

  hasUserUpdateTime(): boolean;
  clearUserUpdateTime(): void;
  getUserUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUserUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getState(): Job.StateMap[keyof Job.StateMap];
  setState(value: Job.StateMap[keyof Job.StateMap]): void;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): google_rpc_status_pb.Status | undefined;
  setStatus(value?: google_rpc_status_pb.Status): void;

  hasScheduleTime(): boolean;
  clearScheduleTime(): void;
  getScheduleTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setScheduleTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasLastAttemptTime(): boolean;
  clearLastAttemptTime(): void;
  getLastAttemptTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastAttemptTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasRetryConfig(): boolean;
  clearRetryConfig(): void;
  getRetryConfig(): RetryConfig | undefined;
  setRetryConfig(value?: RetryConfig): void;

  hasAttemptDeadline(): boolean;
  clearAttemptDeadline(): void;
  getAttemptDeadline(): google_protobuf_duration_pb.Duration | undefined;
  setAttemptDeadline(value?: google_protobuf_duration_pb.Duration): void;

  getTargetCase(): Job.TargetCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Job.AsObject;
  static toObject(includeInstance: boolean, msg: Job): Job.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Job, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Job;
  static deserializeBinaryFromReader(message: Job, reader: jspb.BinaryReader): Job;
}

export namespace Job {
  export type AsObject = {
    name: string,
    description: string,
    pubsubTarget?: google_cloud_scheduler_v1beta1_target_pb.PubsubTarget.AsObject,
    appEngineHttpTarget?: google_cloud_scheduler_v1beta1_target_pb.AppEngineHttpTarget.AsObject,
    httpTarget?: google_cloud_scheduler_v1beta1_target_pb.HttpTarget.AsObject,
    schedule: string,
    timeZone: string,
    userUpdateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    state: Job.StateMap[keyof Job.StateMap],
    status?: google_rpc_status_pb.Status.AsObject,
    scheduleTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    lastAttemptTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    retryConfig?: RetryConfig.AsObject,
    attemptDeadline?: google_protobuf_duration_pb.Duration.AsObject,
  }

  export interface StateMap {
    STATE_UNSPECIFIED: 0;
    ENABLED: 1;
    PAUSED: 2;
    DISABLED: 3;
    UPDATE_FAILED: 4;
  }

  export const State: StateMap;

  export enum TargetCase {
    TARGET_NOT_SET = 0,
    PUBSUB_TARGET = 4,
    APP_ENGINE_HTTP_TARGET = 5,
    HTTP_TARGET = 6,
  }
}

export class RetryConfig extends jspb.Message {
  getRetryCount(): number;
  setRetryCount(value: number): void;

  hasMaxRetryDuration(): boolean;
  clearMaxRetryDuration(): void;
  getMaxRetryDuration(): google_protobuf_duration_pb.Duration | undefined;
  setMaxRetryDuration(value?: google_protobuf_duration_pb.Duration): void;

  hasMinBackoffDuration(): boolean;
  clearMinBackoffDuration(): void;
  getMinBackoffDuration(): google_protobuf_duration_pb.Duration | undefined;
  setMinBackoffDuration(value?: google_protobuf_duration_pb.Duration): void;

  hasMaxBackoffDuration(): boolean;
  clearMaxBackoffDuration(): void;
  getMaxBackoffDuration(): google_protobuf_duration_pb.Duration | undefined;
  setMaxBackoffDuration(value?: google_protobuf_duration_pb.Duration): void;

  getMaxDoublings(): number;
  setMaxDoublings(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RetryConfig.AsObject;
  static toObject(includeInstance: boolean, msg: RetryConfig): RetryConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RetryConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RetryConfig;
  static deserializeBinaryFromReader(message: RetryConfig, reader: jspb.BinaryReader): RetryConfig;
}

export namespace RetryConfig {
  export type AsObject = {
    retryCount: number,
    maxRetryDuration?: google_protobuf_duration_pb.Duration.AsObject,
    minBackoffDuration?: google_protobuf_duration_pb.Duration.AsObject,
    maxBackoffDuration?: google_protobuf_duration_pb.Duration.AsObject,
    maxDoublings: number,
  }
}

