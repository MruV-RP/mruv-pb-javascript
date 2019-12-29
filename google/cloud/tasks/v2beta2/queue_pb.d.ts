// package: google.cloud.tasks.v2beta2
// file: google/cloud/tasks/v2beta2/queue.proto

import * as jspb from "google-protobuf";
import * as google_api_resource_pb from "../../../../google/api/resource_pb";
import * as google_cloud_tasks_v2beta2_target_pb from "../../../../google/cloud/tasks/v2beta2/target_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";

export class Queue extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasAppEngineHttpTarget(): boolean;
  clearAppEngineHttpTarget(): void;
  getAppEngineHttpTarget(): google_cloud_tasks_v2beta2_target_pb.AppEngineHttpTarget | undefined;
  setAppEngineHttpTarget(value?: google_cloud_tasks_v2beta2_target_pb.AppEngineHttpTarget): void;

  hasPullTarget(): boolean;
  clearPullTarget(): void;
  getPullTarget(): google_cloud_tasks_v2beta2_target_pb.PullTarget | undefined;
  setPullTarget(value?: google_cloud_tasks_v2beta2_target_pb.PullTarget): void;

  hasRateLimits(): boolean;
  clearRateLimits(): void;
  getRateLimits(): RateLimits | undefined;
  setRateLimits(value?: RateLimits): void;

  hasRetryConfig(): boolean;
  clearRetryConfig(): void;
  getRetryConfig(): RetryConfig | undefined;
  setRetryConfig(value?: RetryConfig): void;

  getState(): Queue.StateMap[keyof Queue.StateMap];
  setState(value: Queue.StateMap[keyof Queue.StateMap]): void;

  hasPurgeTime(): boolean;
  clearPurgeTime(): void;
  getPurgeTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setPurgeTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getTargetTypeCase(): Queue.TargetTypeCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Queue.AsObject;
  static toObject(includeInstance: boolean, msg: Queue): Queue.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Queue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Queue;
  static deserializeBinaryFromReader(message: Queue, reader: jspb.BinaryReader): Queue;
}

export namespace Queue {
  export type AsObject = {
    name: string,
    appEngineHttpTarget?: google_cloud_tasks_v2beta2_target_pb.AppEngineHttpTarget.AsObject,
    pullTarget?: google_cloud_tasks_v2beta2_target_pb.PullTarget.AsObject,
    rateLimits?: RateLimits.AsObject,
    retryConfig?: RetryConfig.AsObject,
    state: Queue.StateMap[keyof Queue.StateMap],
    purgeTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export interface StateMap {
    STATE_UNSPECIFIED: 0;
    RUNNING: 1;
    PAUSED: 2;
    DISABLED: 3;
  }

  export const State: StateMap;

  export enum TargetTypeCase {
    TARGET_TYPE_NOT_SET = 0,
    APP_ENGINE_HTTP_TARGET = 3,
    PULL_TARGET = 4,
  }
}

export class RateLimits extends jspb.Message {
  getMaxTasksDispatchedPerSecond(): number;
  setMaxTasksDispatchedPerSecond(value: number): void;

  getMaxBurstSize(): number;
  setMaxBurstSize(value: number): void;

  getMaxConcurrentTasks(): number;
  setMaxConcurrentTasks(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RateLimits.AsObject;
  static toObject(includeInstance: boolean, msg: RateLimits): RateLimits.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RateLimits, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RateLimits;
  static deserializeBinaryFromReader(message: RateLimits, reader: jspb.BinaryReader): RateLimits;
}

export namespace RateLimits {
  export type AsObject = {
    maxTasksDispatchedPerSecond: number,
    maxBurstSize: number,
    maxConcurrentTasks: number,
  }
}

export class RetryConfig extends jspb.Message {
  hasMaxAttempts(): boolean;
  clearMaxAttempts(): void;
  getMaxAttempts(): number;
  setMaxAttempts(value: number): void;

  hasUnlimitedAttempts(): boolean;
  clearUnlimitedAttempts(): void;
  getUnlimitedAttempts(): boolean;
  setUnlimitedAttempts(value: boolean): void;

  hasMaxRetryDuration(): boolean;
  clearMaxRetryDuration(): void;
  getMaxRetryDuration(): google_protobuf_duration_pb.Duration | undefined;
  setMaxRetryDuration(value?: google_protobuf_duration_pb.Duration): void;

  hasMinBackoff(): boolean;
  clearMinBackoff(): void;
  getMinBackoff(): google_protobuf_duration_pb.Duration | undefined;
  setMinBackoff(value?: google_protobuf_duration_pb.Duration): void;

  hasMaxBackoff(): boolean;
  clearMaxBackoff(): void;
  getMaxBackoff(): google_protobuf_duration_pb.Duration | undefined;
  setMaxBackoff(value?: google_protobuf_duration_pb.Duration): void;

  getMaxDoublings(): number;
  setMaxDoublings(value: number): void;

  getNumAttemptsCase(): RetryConfig.NumAttemptsCase;
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
    maxAttempts: number,
    unlimitedAttempts: boolean,
    maxRetryDuration?: google_protobuf_duration_pb.Duration.AsObject,
    minBackoff?: google_protobuf_duration_pb.Duration.AsObject,
    maxBackoff?: google_protobuf_duration_pb.Duration.AsObject,
    maxDoublings: number,
  }

  export enum NumAttemptsCase {
    NUM_ATTEMPTS_NOT_SET = 0,
    MAX_ATTEMPTS = 1,
    UNLIMITED_ATTEMPTS = 2,
  }
}

