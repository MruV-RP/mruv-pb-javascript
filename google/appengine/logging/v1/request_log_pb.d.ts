// package: google.appengine.logging.v1
// file: google/appengine/logging/v1/request_log.proto

import * as jspb from "google-protobuf";
import * as google_logging_type_log_severity_pb from "../../../../google/logging/type/log_severity_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class LogLine extends jspb.Message {
  hasTime(): boolean;
  clearTime(): void;
  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getSeverity(): google_logging_type_log_severity_pb.LogSeverityMap[keyof google_logging_type_log_severity_pb.LogSeverityMap];
  setSeverity(value: google_logging_type_log_severity_pb.LogSeverityMap[keyof google_logging_type_log_severity_pb.LogSeverityMap]): void;

  getLogMessage(): string;
  setLogMessage(value: string): void;

  hasSourceLocation(): boolean;
  clearSourceLocation(): void;
  getSourceLocation(): SourceLocation | undefined;
  setSourceLocation(value?: SourceLocation): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LogLine.AsObject;
  static toObject(includeInstance: boolean, msg: LogLine): LogLine.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LogLine, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LogLine;
  static deserializeBinaryFromReader(message: LogLine, reader: jspb.BinaryReader): LogLine;
}

export namespace LogLine {
  export type AsObject = {
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    severity: google_logging_type_log_severity_pb.LogSeverityMap[keyof google_logging_type_log_severity_pb.LogSeverityMap],
    logMessage: string,
    sourceLocation?: SourceLocation.AsObject,
  }
}

export class SourceLocation extends jspb.Message {
  getFile(): string;
  setFile(value: string): void;

  getLine(): number;
  setLine(value: number): void;

  getFunctionName(): string;
  setFunctionName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SourceLocation.AsObject;
  static toObject(includeInstance: boolean, msg: SourceLocation): SourceLocation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SourceLocation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SourceLocation;
  static deserializeBinaryFromReader(message: SourceLocation, reader: jspb.BinaryReader): SourceLocation;
}

export namespace SourceLocation {
  export type AsObject = {
    file: string,
    line: number,
    functionName: string,
  }
}

export class SourceReference extends jspb.Message {
  getRepository(): string;
  setRepository(value: string): void;

  getRevisionId(): string;
  setRevisionId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SourceReference.AsObject;
  static toObject(includeInstance: boolean, msg: SourceReference): SourceReference.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SourceReference, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SourceReference;
  static deserializeBinaryFromReader(message: SourceReference, reader: jspb.BinaryReader): SourceReference;
}

export namespace SourceReference {
  export type AsObject = {
    repository: string,
    revisionId: string,
  }
}

export class RequestLog extends jspb.Message {
  getAppId(): string;
  setAppId(value: string): void;

  getModuleId(): string;
  setModuleId(value: string): void;

  getVersionId(): string;
  setVersionId(value: string): void;

  getRequestId(): string;
  setRequestId(value: string): void;

  getIp(): string;
  setIp(value: string): void;

  hasStartTime(): boolean;
  clearStartTime(): void;
  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasEndTime(): boolean;
  clearEndTime(): void;
  getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasLatency(): boolean;
  clearLatency(): void;
  getLatency(): google_protobuf_duration_pb.Duration | undefined;
  setLatency(value?: google_protobuf_duration_pb.Duration): void;

  getMegaCycles(): number;
  setMegaCycles(value: number): void;

  getMethod(): string;
  setMethod(value: string): void;

  getResource(): string;
  setResource(value: string): void;

  getHttpVersion(): string;
  setHttpVersion(value: string): void;

  getStatus(): number;
  setStatus(value: number): void;

  getResponseSize(): number;
  setResponseSize(value: number): void;

  getReferrer(): string;
  setReferrer(value: string): void;

  getUserAgent(): string;
  setUserAgent(value: string): void;

  getNickname(): string;
  setNickname(value: string): void;

  getUrlMapEntry(): string;
  setUrlMapEntry(value: string): void;

  getHost(): string;
  setHost(value: string): void;

  getCost(): number;
  setCost(value: number): void;

  getTaskQueueName(): string;
  setTaskQueueName(value: string): void;

  getTaskName(): string;
  setTaskName(value: string): void;

  getWasLoadingRequest(): boolean;
  setWasLoadingRequest(value: boolean): void;

  hasPendingTime(): boolean;
  clearPendingTime(): void;
  getPendingTime(): google_protobuf_duration_pb.Duration | undefined;
  setPendingTime(value?: google_protobuf_duration_pb.Duration): void;

  getInstanceIndex(): number;
  setInstanceIndex(value: number): void;

  getFinished(): boolean;
  setFinished(value: boolean): void;

  getFirst(): boolean;
  setFirst(value: boolean): void;

  getInstanceId(): string;
  setInstanceId(value: string): void;

  clearLineList(): void;
  getLineList(): Array<LogLine>;
  setLineList(value: Array<LogLine>): void;
  addLine(value?: LogLine, index?: number): LogLine;

  getAppEngineRelease(): string;
  setAppEngineRelease(value: string): void;

  getTraceId(): string;
  setTraceId(value: string): void;

  clearSourceReferenceList(): void;
  getSourceReferenceList(): Array<SourceReference>;
  setSourceReferenceList(value: Array<SourceReference>): void;
  addSourceReference(value?: SourceReference, index?: number): SourceReference;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestLog.AsObject;
  static toObject(includeInstance: boolean, msg: RequestLog): RequestLog.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequestLog, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestLog;
  static deserializeBinaryFromReader(message: RequestLog, reader: jspb.BinaryReader): RequestLog;
}

export namespace RequestLog {
  export type AsObject = {
    appId: string,
    moduleId: string,
    versionId: string,
    requestId: string,
    ip: string,
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    latency?: google_protobuf_duration_pb.Duration.AsObject,
    megaCycles: number,
    method: string,
    resource: string,
    httpVersion: string,
    status: number,
    responseSize: number,
    referrer: string,
    userAgent: string,
    nickname: string,
    urlMapEntry: string,
    host: string,
    cost: number,
    taskQueueName: string,
    taskName: string,
    wasLoadingRequest: boolean,
    pendingTime?: google_protobuf_duration_pb.Duration.AsObject,
    instanceIndex: number,
    finished: boolean,
    first: boolean,
    instanceId: string,
    lineList: Array<LogLine.AsObject>,
    appEngineRelease: string,
    traceId: string,
    sourceReferenceList: Array<SourceReference.AsObject>,
  }
}

