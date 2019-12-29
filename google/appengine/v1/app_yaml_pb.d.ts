// package: google.appengine.v1
// file: google/appengine/v1/app_yaml.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";

export class ApiConfigHandler extends jspb.Message {
  getAuthFailAction(): AuthFailActionMap[keyof AuthFailActionMap];
  setAuthFailAction(value: AuthFailActionMap[keyof AuthFailActionMap]): void;

  getLogin(): LoginRequirementMap[keyof LoginRequirementMap];
  setLogin(value: LoginRequirementMap[keyof LoginRequirementMap]): void;

  getScript(): string;
  setScript(value: string): void;

  getSecurityLevel(): SecurityLevelMap[keyof SecurityLevelMap];
  setSecurityLevel(value: SecurityLevelMap[keyof SecurityLevelMap]): void;

  getUrl(): string;
  setUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApiConfigHandler.AsObject;
  static toObject(includeInstance: boolean, msg: ApiConfigHandler): ApiConfigHandler.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ApiConfigHandler, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApiConfigHandler;
  static deserializeBinaryFromReader(message: ApiConfigHandler, reader: jspb.BinaryReader): ApiConfigHandler;
}

export namespace ApiConfigHandler {
  export type AsObject = {
    authFailAction: AuthFailActionMap[keyof AuthFailActionMap],
    login: LoginRequirementMap[keyof LoginRequirementMap],
    script: string,
    securityLevel: SecurityLevelMap[keyof SecurityLevelMap],
    url: string,
  }
}

export class ErrorHandler extends jspb.Message {
  getErrorCode(): ErrorHandler.ErrorCodeMap[keyof ErrorHandler.ErrorCodeMap];
  setErrorCode(value: ErrorHandler.ErrorCodeMap[keyof ErrorHandler.ErrorCodeMap]): void;

  getStaticFile(): string;
  setStaticFile(value: string): void;

  getMimeType(): string;
  setMimeType(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ErrorHandler.AsObject;
  static toObject(includeInstance: boolean, msg: ErrorHandler): ErrorHandler.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ErrorHandler, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ErrorHandler;
  static deserializeBinaryFromReader(message: ErrorHandler, reader: jspb.BinaryReader): ErrorHandler;
}

export namespace ErrorHandler {
  export type AsObject = {
    errorCode: ErrorHandler.ErrorCodeMap[keyof ErrorHandler.ErrorCodeMap],
    staticFile: string,
    mimeType: string,
  }

  export interface ErrorCodeMap {
    ERROR_CODE_UNSPECIFIED: 0;
    ERROR_CODE_DEFAULT: 0;
    ERROR_CODE_OVER_QUOTA: 1;
    ERROR_CODE_DOS_API_DENIAL: 2;
    ERROR_CODE_TIMEOUT: 3;
  }

  export const ErrorCode: ErrorCodeMap;
}

export class UrlMap extends jspb.Message {
  getUrlRegex(): string;
  setUrlRegex(value: string): void;

  hasStaticFiles(): boolean;
  clearStaticFiles(): void;
  getStaticFiles(): StaticFilesHandler | undefined;
  setStaticFiles(value?: StaticFilesHandler): void;

  hasScript(): boolean;
  clearScript(): void;
  getScript(): ScriptHandler | undefined;
  setScript(value?: ScriptHandler): void;

  hasApiEndpoint(): boolean;
  clearApiEndpoint(): void;
  getApiEndpoint(): ApiEndpointHandler | undefined;
  setApiEndpoint(value?: ApiEndpointHandler): void;

  getSecurityLevel(): SecurityLevelMap[keyof SecurityLevelMap];
  setSecurityLevel(value: SecurityLevelMap[keyof SecurityLevelMap]): void;

  getLogin(): LoginRequirementMap[keyof LoginRequirementMap];
  setLogin(value: LoginRequirementMap[keyof LoginRequirementMap]): void;

  getAuthFailAction(): AuthFailActionMap[keyof AuthFailActionMap];
  setAuthFailAction(value: AuthFailActionMap[keyof AuthFailActionMap]): void;

  getRedirectHttpResponseCode(): UrlMap.RedirectHttpResponseCodeMap[keyof UrlMap.RedirectHttpResponseCodeMap];
  setRedirectHttpResponseCode(value: UrlMap.RedirectHttpResponseCodeMap[keyof UrlMap.RedirectHttpResponseCodeMap]): void;

  getHandlerTypeCase(): UrlMap.HandlerTypeCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UrlMap.AsObject;
  static toObject(includeInstance: boolean, msg: UrlMap): UrlMap.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UrlMap, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UrlMap;
  static deserializeBinaryFromReader(message: UrlMap, reader: jspb.BinaryReader): UrlMap;
}

export namespace UrlMap {
  export type AsObject = {
    urlRegex: string,
    staticFiles?: StaticFilesHandler.AsObject,
    script?: ScriptHandler.AsObject,
    apiEndpoint?: ApiEndpointHandler.AsObject,
    securityLevel: SecurityLevelMap[keyof SecurityLevelMap],
    login: LoginRequirementMap[keyof LoginRequirementMap],
    authFailAction: AuthFailActionMap[keyof AuthFailActionMap],
    redirectHttpResponseCode: UrlMap.RedirectHttpResponseCodeMap[keyof UrlMap.RedirectHttpResponseCodeMap],
  }

  export interface RedirectHttpResponseCodeMap {
    REDIRECT_HTTP_RESPONSE_CODE_UNSPECIFIED: 0;
    REDIRECT_HTTP_RESPONSE_CODE_301: 1;
    REDIRECT_HTTP_RESPONSE_CODE_302: 2;
    REDIRECT_HTTP_RESPONSE_CODE_303: 3;
    REDIRECT_HTTP_RESPONSE_CODE_307: 4;
  }

  export const RedirectHttpResponseCode: RedirectHttpResponseCodeMap;

  export enum HandlerTypeCase {
    HANDLER_TYPE_NOT_SET = 0,
    STATIC_FILES = 2,
    SCRIPT = 3,
    API_ENDPOINT = 4,
  }
}

export class StaticFilesHandler extends jspb.Message {
  getPath(): string;
  setPath(value: string): void;

  getUploadPathRegex(): string;
  setUploadPathRegex(value: string): void;

  getHttpHeadersMap(): jspb.Map<string, string>;
  clearHttpHeadersMap(): void;
  getMimeType(): string;
  setMimeType(value: string): void;

  hasExpiration(): boolean;
  clearExpiration(): void;
  getExpiration(): google_protobuf_duration_pb.Duration | undefined;
  setExpiration(value?: google_protobuf_duration_pb.Duration): void;

  getRequireMatchingFile(): boolean;
  setRequireMatchingFile(value: boolean): void;

  getApplicationReadable(): boolean;
  setApplicationReadable(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StaticFilesHandler.AsObject;
  static toObject(includeInstance: boolean, msg: StaticFilesHandler): StaticFilesHandler.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StaticFilesHandler, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StaticFilesHandler;
  static deserializeBinaryFromReader(message: StaticFilesHandler, reader: jspb.BinaryReader): StaticFilesHandler;
}

export namespace StaticFilesHandler {
  export type AsObject = {
    path: string,
    uploadPathRegex: string,
    httpHeadersMap: Array<[string, string]>,
    mimeType: string,
    expiration?: google_protobuf_duration_pb.Duration.AsObject,
    requireMatchingFile: boolean,
    applicationReadable: boolean,
  }
}

export class ScriptHandler extends jspb.Message {
  getScriptPath(): string;
  setScriptPath(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScriptHandler.AsObject;
  static toObject(includeInstance: boolean, msg: ScriptHandler): ScriptHandler.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScriptHandler, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScriptHandler;
  static deserializeBinaryFromReader(message: ScriptHandler, reader: jspb.BinaryReader): ScriptHandler;
}

export namespace ScriptHandler {
  export type AsObject = {
    scriptPath: string,
  }
}

export class ApiEndpointHandler extends jspb.Message {
  getScriptPath(): string;
  setScriptPath(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApiEndpointHandler.AsObject;
  static toObject(includeInstance: boolean, msg: ApiEndpointHandler): ApiEndpointHandler.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ApiEndpointHandler, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApiEndpointHandler;
  static deserializeBinaryFromReader(message: ApiEndpointHandler, reader: jspb.BinaryReader): ApiEndpointHandler;
}

export namespace ApiEndpointHandler {
  export type AsObject = {
    scriptPath: string,
  }
}

export class HealthCheck extends jspb.Message {
  getDisableHealthCheck(): boolean;
  setDisableHealthCheck(value: boolean): void;

  getHost(): string;
  setHost(value: string): void;

  getHealthyThreshold(): number;
  setHealthyThreshold(value: number): void;

  getUnhealthyThreshold(): number;
  setUnhealthyThreshold(value: number): void;

  getRestartThreshold(): number;
  setRestartThreshold(value: number): void;

  hasCheckInterval(): boolean;
  clearCheckInterval(): void;
  getCheckInterval(): google_protobuf_duration_pb.Duration | undefined;
  setCheckInterval(value?: google_protobuf_duration_pb.Duration): void;

  hasTimeout(): boolean;
  clearTimeout(): void;
  getTimeout(): google_protobuf_duration_pb.Duration | undefined;
  setTimeout(value?: google_protobuf_duration_pb.Duration): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HealthCheck.AsObject;
  static toObject(includeInstance: boolean, msg: HealthCheck): HealthCheck.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HealthCheck, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HealthCheck;
  static deserializeBinaryFromReader(message: HealthCheck, reader: jspb.BinaryReader): HealthCheck;
}

export namespace HealthCheck {
  export type AsObject = {
    disableHealthCheck: boolean,
    host: string,
    healthyThreshold: number,
    unhealthyThreshold: number,
    restartThreshold: number,
    checkInterval?: google_protobuf_duration_pb.Duration.AsObject,
    timeout?: google_protobuf_duration_pb.Duration.AsObject,
  }
}

export class Library extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getVersion(): string;
  setVersion(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Library.AsObject;
  static toObject(includeInstance: boolean, msg: Library): Library.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Library, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Library;
  static deserializeBinaryFromReader(message: Library, reader: jspb.BinaryReader): Library;
}

export namespace Library {
  export type AsObject = {
    name: string,
    version: string,
  }
}

export interface AuthFailActionMap {
  AUTH_FAIL_ACTION_UNSPECIFIED: 0;
  AUTH_FAIL_ACTION_REDIRECT: 1;
  AUTH_FAIL_ACTION_UNAUTHORIZED: 2;
}

export const AuthFailAction: AuthFailActionMap;

export interface LoginRequirementMap {
  LOGIN_UNSPECIFIED: 0;
  LOGIN_OPTIONAL: 1;
  LOGIN_ADMIN: 2;
  LOGIN_REQUIRED: 3;
}

export const LoginRequirement: LoginRequirementMap;

export interface SecurityLevelMap {
  SECURE_UNSPECIFIED: 0;
  SECURE_DEFAULT: 0;
  SECURE_NEVER: 1;
  SECURE_OPTIONAL: 2;
  SECURE_ALWAYS: 3;
}

export const SecurityLevel: SecurityLevelMap;

