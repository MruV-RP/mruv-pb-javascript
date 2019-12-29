// package: google.cloud.tasks.v2beta2
// file: google/cloud/tasks/v2beta2/target.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";

export class PullTarget extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PullTarget.AsObject;
  static toObject(includeInstance: boolean, msg: PullTarget): PullTarget.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PullTarget, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PullTarget;
  static deserializeBinaryFromReader(message: PullTarget, reader: jspb.BinaryReader): PullTarget;
}

export namespace PullTarget {
  export type AsObject = {
  }
}

export class PullMessage extends jspb.Message {
  getPayload(): Uint8Array | string;
  getPayload_asU8(): Uint8Array;
  getPayload_asB64(): string;
  setPayload(value: Uint8Array | string): void;

  getTag(): string;
  setTag(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PullMessage.AsObject;
  static toObject(includeInstance: boolean, msg: PullMessage): PullMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PullMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PullMessage;
  static deserializeBinaryFromReader(message: PullMessage, reader: jspb.BinaryReader): PullMessage;
}

export namespace PullMessage {
  export type AsObject = {
    payload: Uint8Array | string,
    tag: string,
  }
}

export class AppEngineHttpTarget extends jspb.Message {
  hasAppEngineRoutingOverride(): boolean;
  clearAppEngineRoutingOverride(): void;
  getAppEngineRoutingOverride(): AppEngineRouting | undefined;
  setAppEngineRoutingOverride(value?: AppEngineRouting): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AppEngineHttpTarget.AsObject;
  static toObject(includeInstance: boolean, msg: AppEngineHttpTarget): AppEngineHttpTarget.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AppEngineHttpTarget, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AppEngineHttpTarget;
  static deserializeBinaryFromReader(message: AppEngineHttpTarget, reader: jspb.BinaryReader): AppEngineHttpTarget;
}

export namespace AppEngineHttpTarget {
  export type AsObject = {
    appEngineRoutingOverride?: AppEngineRouting.AsObject,
  }
}

export class AppEngineHttpRequest extends jspb.Message {
  getHttpMethod(): HttpMethodMap[keyof HttpMethodMap];
  setHttpMethod(value: HttpMethodMap[keyof HttpMethodMap]): void;

  hasAppEngineRouting(): boolean;
  clearAppEngineRouting(): void;
  getAppEngineRouting(): AppEngineRouting | undefined;
  setAppEngineRouting(value?: AppEngineRouting): void;

  getRelativeUrl(): string;
  setRelativeUrl(value: string): void;

  getHeadersMap(): jspb.Map<string, string>;
  clearHeadersMap(): void;
  getPayload(): Uint8Array | string;
  getPayload_asU8(): Uint8Array;
  getPayload_asB64(): string;
  setPayload(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AppEngineHttpRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AppEngineHttpRequest): AppEngineHttpRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AppEngineHttpRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AppEngineHttpRequest;
  static deserializeBinaryFromReader(message: AppEngineHttpRequest, reader: jspb.BinaryReader): AppEngineHttpRequest;
}

export namespace AppEngineHttpRequest {
  export type AsObject = {
    httpMethod: HttpMethodMap[keyof HttpMethodMap],
    appEngineRouting?: AppEngineRouting.AsObject,
    relativeUrl: string,
    headersMap: Array<[string, string]>,
    payload: Uint8Array | string,
  }
}

export class AppEngineRouting extends jspb.Message {
  getService(): string;
  setService(value: string): void;

  getVersion(): string;
  setVersion(value: string): void;

  getInstance(): string;
  setInstance(value: string): void;

  getHost(): string;
  setHost(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AppEngineRouting.AsObject;
  static toObject(includeInstance: boolean, msg: AppEngineRouting): AppEngineRouting.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AppEngineRouting, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AppEngineRouting;
  static deserializeBinaryFromReader(message: AppEngineRouting, reader: jspb.BinaryReader): AppEngineRouting;
}

export namespace AppEngineRouting {
  export type AsObject = {
    service: string,
    version: string,
    instance: string,
    host: string,
  }
}

export interface HttpMethodMap {
  HTTP_METHOD_UNSPECIFIED: 0;
  POST: 1;
  GET: 2;
  HEAD: 3;
  PUT: 4;
  DELETE: 5;
}

export const HttpMethod: HttpMethodMap;

