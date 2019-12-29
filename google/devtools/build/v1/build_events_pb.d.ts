// package: google.devtools.build.v1
// file: google/devtools/build/v1/build_events.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";
import * as google_devtools_build_v1_build_status_pb from "../../../../google/devtools/build/v1/build_status_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class BuildEvent extends jspb.Message {
  hasEventTime(): boolean;
  clearEventTime(): void;
  getEventTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEventTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasInvocationAttemptStarted(): boolean;
  clearInvocationAttemptStarted(): void;
  getInvocationAttemptStarted(): BuildEvent.InvocationAttemptStarted | undefined;
  setInvocationAttemptStarted(value?: BuildEvent.InvocationAttemptStarted): void;

  hasInvocationAttemptFinished(): boolean;
  clearInvocationAttemptFinished(): void;
  getInvocationAttemptFinished(): BuildEvent.InvocationAttemptFinished | undefined;
  setInvocationAttemptFinished(value?: BuildEvent.InvocationAttemptFinished): void;

  hasBuildEnqueued(): boolean;
  clearBuildEnqueued(): void;
  getBuildEnqueued(): BuildEvent.BuildEnqueued | undefined;
  setBuildEnqueued(value?: BuildEvent.BuildEnqueued): void;

  hasBuildFinished(): boolean;
  clearBuildFinished(): void;
  getBuildFinished(): BuildEvent.BuildFinished | undefined;
  setBuildFinished(value?: BuildEvent.BuildFinished): void;

  hasConsoleOutput(): boolean;
  clearConsoleOutput(): void;
  getConsoleOutput(): BuildEvent.ConsoleOutput | undefined;
  setConsoleOutput(value?: BuildEvent.ConsoleOutput): void;

  hasComponentStreamFinished(): boolean;
  clearComponentStreamFinished(): void;
  getComponentStreamFinished(): BuildEvent.BuildComponentStreamFinished | undefined;
  setComponentStreamFinished(value?: BuildEvent.BuildComponentStreamFinished): void;

  hasBazelEvent(): boolean;
  clearBazelEvent(): void;
  getBazelEvent(): google_protobuf_any_pb.Any | undefined;
  setBazelEvent(value?: google_protobuf_any_pb.Any): void;

  hasBuildExecutionEvent(): boolean;
  clearBuildExecutionEvent(): void;
  getBuildExecutionEvent(): google_protobuf_any_pb.Any | undefined;
  setBuildExecutionEvent(value?: google_protobuf_any_pb.Any): void;

  hasSourceFetchEvent(): boolean;
  clearSourceFetchEvent(): void;
  getSourceFetchEvent(): google_protobuf_any_pb.Any | undefined;
  setSourceFetchEvent(value?: google_protobuf_any_pb.Any): void;

  getEventCase(): BuildEvent.EventCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BuildEvent.AsObject;
  static toObject(includeInstance: boolean, msg: BuildEvent): BuildEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BuildEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BuildEvent;
  static deserializeBinaryFromReader(message: BuildEvent, reader: jspb.BinaryReader): BuildEvent;
}

export namespace BuildEvent {
  export type AsObject = {
    eventTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    invocationAttemptStarted?: BuildEvent.InvocationAttemptStarted.AsObject,
    invocationAttemptFinished?: BuildEvent.InvocationAttemptFinished.AsObject,
    buildEnqueued?: BuildEvent.BuildEnqueued.AsObject,
    buildFinished?: BuildEvent.BuildFinished.AsObject,
    consoleOutput?: BuildEvent.ConsoleOutput.AsObject,
    componentStreamFinished?: BuildEvent.BuildComponentStreamFinished.AsObject,
    bazelEvent?: google_protobuf_any_pb.Any.AsObject,
    buildExecutionEvent?: google_protobuf_any_pb.Any.AsObject,
    sourceFetchEvent?: google_protobuf_any_pb.Any.AsObject,
  }

  export class InvocationAttemptStarted extends jspb.Message {
    getAttemptNumber(): number;
    setAttemptNumber(value: number): void;

    hasDetails(): boolean;
    clearDetails(): void;
    getDetails(): google_protobuf_any_pb.Any | undefined;
    setDetails(value?: google_protobuf_any_pb.Any): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InvocationAttemptStarted.AsObject;
    static toObject(includeInstance: boolean, msg: InvocationAttemptStarted): InvocationAttemptStarted.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InvocationAttemptStarted, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InvocationAttemptStarted;
    static deserializeBinaryFromReader(message: InvocationAttemptStarted, reader: jspb.BinaryReader): InvocationAttemptStarted;
  }

  export namespace InvocationAttemptStarted {
    export type AsObject = {
      attemptNumber: number,
      details?: google_protobuf_any_pb.Any.AsObject,
    }
  }

  export class InvocationAttemptFinished extends jspb.Message {
    hasInvocationStatus(): boolean;
    clearInvocationStatus(): void;
    getInvocationStatus(): google_devtools_build_v1_build_status_pb.BuildStatus | undefined;
    setInvocationStatus(value?: google_devtools_build_v1_build_status_pb.BuildStatus): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InvocationAttemptFinished.AsObject;
    static toObject(includeInstance: boolean, msg: InvocationAttemptFinished): InvocationAttemptFinished.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InvocationAttemptFinished, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InvocationAttemptFinished;
    static deserializeBinaryFromReader(message: InvocationAttemptFinished, reader: jspb.BinaryReader): InvocationAttemptFinished;
  }

  export namespace InvocationAttemptFinished {
    export type AsObject = {
      invocationStatus?: google_devtools_build_v1_build_status_pb.BuildStatus.AsObject,
    }
  }

  export class BuildEnqueued extends jspb.Message {
    hasDetails(): boolean;
    clearDetails(): void;
    getDetails(): google_protobuf_any_pb.Any | undefined;
    setDetails(value?: google_protobuf_any_pb.Any): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BuildEnqueued.AsObject;
    static toObject(includeInstance: boolean, msg: BuildEnqueued): BuildEnqueued.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BuildEnqueued, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BuildEnqueued;
    static deserializeBinaryFromReader(message: BuildEnqueued, reader: jspb.BinaryReader): BuildEnqueued;
  }

  export namespace BuildEnqueued {
    export type AsObject = {
      details?: google_protobuf_any_pb.Any.AsObject,
    }
  }

  export class BuildFinished extends jspb.Message {
    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): google_devtools_build_v1_build_status_pb.BuildStatus | undefined;
    setStatus(value?: google_devtools_build_v1_build_status_pb.BuildStatus): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BuildFinished.AsObject;
    static toObject(includeInstance: boolean, msg: BuildFinished): BuildFinished.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BuildFinished, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BuildFinished;
    static deserializeBinaryFromReader(message: BuildFinished, reader: jspb.BinaryReader): BuildFinished;
  }

  export namespace BuildFinished {
    export type AsObject = {
      status?: google_devtools_build_v1_build_status_pb.BuildStatus.AsObject,
    }
  }

  export class ConsoleOutput extends jspb.Message {
    getType(): ConsoleOutputStreamMap[keyof ConsoleOutputStreamMap];
    setType(value: ConsoleOutputStreamMap[keyof ConsoleOutputStreamMap]): void;

    hasTextOutput(): boolean;
    clearTextOutput(): void;
    getTextOutput(): string;
    setTextOutput(value: string): void;

    hasBinaryOutput(): boolean;
    clearBinaryOutput(): void;
    getBinaryOutput(): Uint8Array | string;
    getBinaryOutput_asU8(): Uint8Array;
    getBinaryOutput_asB64(): string;
    setBinaryOutput(value: Uint8Array | string): void;

    getOutputCase(): ConsoleOutput.OutputCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ConsoleOutput.AsObject;
    static toObject(includeInstance: boolean, msg: ConsoleOutput): ConsoleOutput.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ConsoleOutput, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ConsoleOutput;
    static deserializeBinaryFromReader(message: ConsoleOutput, reader: jspb.BinaryReader): ConsoleOutput;
  }

  export namespace ConsoleOutput {
    export type AsObject = {
      type: ConsoleOutputStreamMap[keyof ConsoleOutputStreamMap],
      textOutput: string,
      binaryOutput: Uint8Array | string,
    }

    export enum OutputCase {
      OUTPUT_NOT_SET = 0,
      TEXT_OUTPUT = 2,
      BINARY_OUTPUT = 3,
    }
  }

  export class BuildComponentStreamFinished extends jspb.Message {
    getType(): BuildEvent.BuildComponentStreamFinished.FinishTypeMap[keyof BuildEvent.BuildComponentStreamFinished.FinishTypeMap];
    setType(value: BuildEvent.BuildComponentStreamFinished.FinishTypeMap[keyof BuildEvent.BuildComponentStreamFinished.FinishTypeMap]): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BuildComponentStreamFinished.AsObject;
    static toObject(includeInstance: boolean, msg: BuildComponentStreamFinished): BuildComponentStreamFinished.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BuildComponentStreamFinished, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BuildComponentStreamFinished;
    static deserializeBinaryFromReader(message: BuildComponentStreamFinished, reader: jspb.BinaryReader): BuildComponentStreamFinished;
  }

  export namespace BuildComponentStreamFinished {
    export type AsObject = {
      type: BuildEvent.BuildComponentStreamFinished.FinishTypeMap[keyof BuildEvent.BuildComponentStreamFinished.FinishTypeMap],
    }

    export interface FinishTypeMap {
      FINISH_TYPE_UNSPECIFIED: 0;
      FINISHED: 1;
      EXPIRED: 2;
    }

    export const FinishType: FinishTypeMap;
  }

  export enum EventCase {
    EVENT_NOT_SET = 0,
    INVOCATION_ATTEMPT_STARTED = 51,
    INVOCATION_ATTEMPT_FINISHED = 52,
    BUILD_ENQUEUED = 53,
    BUILD_FINISHED = 55,
    CONSOLE_OUTPUT = 56,
    COMPONENT_STREAM_FINISHED = 59,
    BAZEL_EVENT = 60,
    BUILD_EXECUTION_EVENT = 61,
    SOURCE_FETCH_EVENT = 62,
  }
}

export class StreamId extends jspb.Message {
  getBuildId(): string;
  setBuildId(value: string): void;

  getInvocationId(): string;
  setInvocationId(value: string): void;

  getComponent(): StreamId.BuildComponentMap[keyof StreamId.BuildComponentMap];
  setComponent(value: StreamId.BuildComponentMap[keyof StreamId.BuildComponentMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamId.AsObject;
  static toObject(includeInstance: boolean, msg: StreamId): StreamId.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StreamId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamId;
  static deserializeBinaryFromReader(message: StreamId, reader: jspb.BinaryReader): StreamId;
}

export namespace StreamId {
  export type AsObject = {
    buildId: string,
    invocationId: string,
    component: StreamId.BuildComponentMap[keyof StreamId.BuildComponentMap],
  }

  export interface BuildComponentMap {
    UNKNOWN_COMPONENT: 0;
    CONTROLLER: 1;
    WORKER: 2;
    TOOL: 3;
  }

  export const BuildComponent: BuildComponentMap;
}

export interface ConsoleOutputStreamMap {
  UNKNOWN: 0;
  STDOUT: 1;
  STDERR: 2;
}

export const ConsoleOutputStream: ConsoleOutputStreamMap;

