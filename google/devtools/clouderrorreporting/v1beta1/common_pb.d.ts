// package: google.devtools.clouderrorreporting.v1beta1
// file: google/devtools/clouderrorreporting/v1beta1/common.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";
import * as google_api_resource_pb from "../../../../google/api/resource_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class ErrorGroup extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getGroupId(): string;
  setGroupId(value: string): void;

  clearTrackingIssuesList(): void;
  getTrackingIssuesList(): Array<TrackingIssue>;
  setTrackingIssuesList(value: Array<TrackingIssue>): void;
  addTrackingIssues(value?: TrackingIssue, index?: number): TrackingIssue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ErrorGroup.AsObject;
  static toObject(includeInstance: boolean, msg: ErrorGroup): ErrorGroup.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ErrorGroup, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ErrorGroup;
  static deserializeBinaryFromReader(message: ErrorGroup, reader: jspb.BinaryReader): ErrorGroup;
}

export namespace ErrorGroup {
  export type AsObject = {
    name: string,
    groupId: string,
    trackingIssuesList: Array<TrackingIssue.AsObject>,
  }
}

export class TrackingIssue extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TrackingIssue.AsObject;
  static toObject(includeInstance: boolean, msg: TrackingIssue): TrackingIssue.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TrackingIssue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TrackingIssue;
  static deserializeBinaryFromReader(message: TrackingIssue, reader: jspb.BinaryReader): TrackingIssue;
}

export namespace TrackingIssue {
  export type AsObject = {
    url: string,
  }
}

export class ErrorEvent extends jspb.Message {
  hasEventTime(): boolean;
  clearEventTime(): void;
  getEventTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEventTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasServiceContext(): boolean;
  clearServiceContext(): void;
  getServiceContext(): ServiceContext | undefined;
  setServiceContext(value?: ServiceContext): void;

  getMessage(): string;
  setMessage(value: string): void;

  hasContext(): boolean;
  clearContext(): void;
  getContext(): ErrorContext | undefined;
  setContext(value?: ErrorContext): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ErrorEvent.AsObject;
  static toObject(includeInstance: boolean, msg: ErrorEvent): ErrorEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ErrorEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ErrorEvent;
  static deserializeBinaryFromReader(message: ErrorEvent, reader: jspb.BinaryReader): ErrorEvent;
}

export namespace ErrorEvent {
  export type AsObject = {
    eventTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    serviceContext?: ServiceContext.AsObject,
    message: string,
    context?: ErrorContext.AsObject,
  }
}

export class ServiceContext extends jspb.Message {
  getService(): string;
  setService(value: string): void;

  getVersion(): string;
  setVersion(value: string): void;

  getResourceType(): string;
  setResourceType(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceContext.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceContext): ServiceContext.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServiceContext, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceContext;
  static deserializeBinaryFromReader(message: ServiceContext, reader: jspb.BinaryReader): ServiceContext;
}

export namespace ServiceContext {
  export type AsObject = {
    service: string,
    version: string,
    resourceType: string,
  }
}

export class ErrorContext extends jspb.Message {
  hasHttpRequest(): boolean;
  clearHttpRequest(): void;
  getHttpRequest(): HttpRequestContext | undefined;
  setHttpRequest(value?: HttpRequestContext): void;

  getUser(): string;
  setUser(value: string): void;

  hasReportLocation(): boolean;
  clearReportLocation(): void;
  getReportLocation(): SourceLocation | undefined;
  setReportLocation(value?: SourceLocation): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ErrorContext.AsObject;
  static toObject(includeInstance: boolean, msg: ErrorContext): ErrorContext.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ErrorContext, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ErrorContext;
  static deserializeBinaryFromReader(message: ErrorContext, reader: jspb.BinaryReader): ErrorContext;
}

export namespace ErrorContext {
  export type AsObject = {
    httpRequest?: HttpRequestContext.AsObject,
    user: string,
    reportLocation?: SourceLocation.AsObject,
  }
}

export class HttpRequestContext extends jspb.Message {
  getMethod(): string;
  setMethod(value: string): void;

  getUrl(): string;
  setUrl(value: string): void;

  getUserAgent(): string;
  setUserAgent(value: string): void;

  getReferrer(): string;
  setReferrer(value: string): void;

  getResponseStatusCode(): number;
  setResponseStatusCode(value: number): void;

  getRemoteIp(): string;
  setRemoteIp(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HttpRequestContext.AsObject;
  static toObject(includeInstance: boolean, msg: HttpRequestContext): HttpRequestContext.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HttpRequestContext, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HttpRequestContext;
  static deserializeBinaryFromReader(message: HttpRequestContext, reader: jspb.BinaryReader): HttpRequestContext;
}

export namespace HttpRequestContext {
  export type AsObject = {
    method: string,
    url: string,
    userAgent: string,
    referrer: string,
    responseStatusCode: number,
    remoteIp: string,
  }
}

export class SourceLocation extends jspb.Message {
  getFilePath(): string;
  setFilePath(value: string): void;

  getLineNumber(): number;
  setLineNumber(value: number): void;

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
    filePath: string,
    lineNumber: number,
    functionName: string,
  }
}

