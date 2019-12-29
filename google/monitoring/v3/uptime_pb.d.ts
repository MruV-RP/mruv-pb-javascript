// package: google.monitoring.v3
// file: google/monitoring/v3/uptime.proto

import * as jspb from "google-protobuf";
import * as google_api_monitored_resource_pb from "../../../google/api/monitored_resource_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";

export class InternalChecker extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDisplayName(): string;
  setDisplayName(value: string): void;

  getNetwork(): string;
  setNetwork(value: string): void;

  getGcpZone(): string;
  setGcpZone(value: string): void;

  getPeerProjectId(): string;
  setPeerProjectId(value: string): void;

  getState(): InternalChecker.StateMap[keyof InternalChecker.StateMap];
  setState(value: InternalChecker.StateMap[keyof InternalChecker.StateMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InternalChecker.AsObject;
  static toObject(includeInstance: boolean, msg: InternalChecker): InternalChecker.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InternalChecker, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InternalChecker;
  static deserializeBinaryFromReader(message: InternalChecker, reader: jspb.BinaryReader): InternalChecker;
}

export namespace InternalChecker {
  export type AsObject = {
    name: string,
    displayName: string,
    network: string,
    gcpZone: string,
    peerProjectId: string,
    state: InternalChecker.StateMap[keyof InternalChecker.StateMap],
  }

  export interface StateMap {
    UNSPECIFIED: 0;
    CREATING: 1;
    RUNNING: 2;
  }

  export const State: StateMap;
}

export class UptimeCheckConfig extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDisplayName(): string;
  setDisplayName(value: string): void;

  hasMonitoredResource(): boolean;
  clearMonitoredResource(): void;
  getMonitoredResource(): google_api_monitored_resource_pb.MonitoredResource | undefined;
  setMonitoredResource(value?: google_api_monitored_resource_pb.MonitoredResource): void;

  hasResourceGroup(): boolean;
  clearResourceGroup(): void;
  getResourceGroup(): UptimeCheckConfig.ResourceGroup | undefined;
  setResourceGroup(value?: UptimeCheckConfig.ResourceGroup): void;

  hasHttpCheck(): boolean;
  clearHttpCheck(): void;
  getHttpCheck(): UptimeCheckConfig.HttpCheck | undefined;
  setHttpCheck(value?: UptimeCheckConfig.HttpCheck): void;

  hasTcpCheck(): boolean;
  clearTcpCheck(): void;
  getTcpCheck(): UptimeCheckConfig.TcpCheck | undefined;
  setTcpCheck(value?: UptimeCheckConfig.TcpCheck): void;

  hasPeriod(): boolean;
  clearPeriod(): void;
  getPeriod(): google_protobuf_duration_pb.Duration | undefined;
  setPeriod(value?: google_protobuf_duration_pb.Duration): void;

  hasTimeout(): boolean;
  clearTimeout(): void;
  getTimeout(): google_protobuf_duration_pb.Duration | undefined;
  setTimeout(value?: google_protobuf_duration_pb.Duration): void;

  clearContentMatchersList(): void;
  getContentMatchersList(): Array<UptimeCheckConfig.ContentMatcher>;
  setContentMatchersList(value: Array<UptimeCheckConfig.ContentMatcher>): void;
  addContentMatchers(value?: UptimeCheckConfig.ContentMatcher, index?: number): UptimeCheckConfig.ContentMatcher;

  clearSelectedRegionsList(): void;
  getSelectedRegionsList(): Array<UptimeCheckRegionMap[keyof UptimeCheckRegionMap]>;
  setSelectedRegionsList(value: Array<UptimeCheckRegionMap[keyof UptimeCheckRegionMap]>): void;
  addSelectedRegions(value: UptimeCheckRegionMap[keyof UptimeCheckRegionMap], index?: number): UptimeCheckRegionMap[keyof UptimeCheckRegionMap];

  getIsInternal(): boolean;
  setIsInternal(value: boolean): void;

  clearInternalCheckersList(): void;
  getInternalCheckersList(): Array<InternalChecker>;
  setInternalCheckersList(value: Array<InternalChecker>): void;
  addInternalCheckers(value?: InternalChecker, index?: number): InternalChecker;

  getResourceCase(): UptimeCheckConfig.ResourceCase;
  getCheckRequestTypeCase(): UptimeCheckConfig.CheckRequestTypeCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UptimeCheckConfig.AsObject;
  static toObject(includeInstance: boolean, msg: UptimeCheckConfig): UptimeCheckConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UptimeCheckConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UptimeCheckConfig;
  static deserializeBinaryFromReader(message: UptimeCheckConfig, reader: jspb.BinaryReader): UptimeCheckConfig;
}

export namespace UptimeCheckConfig {
  export type AsObject = {
    name: string,
    displayName: string,
    monitoredResource?: google_api_monitored_resource_pb.MonitoredResource.AsObject,
    resourceGroup?: UptimeCheckConfig.ResourceGroup.AsObject,
    httpCheck?: UptimeCheckConfig.HttpCheck.AsObject,
    tcpCheck?: UptimeCheckConfig.TcpCheck.AsObject,
    period?: google_protobuf_duration_pb.Duration.AsObject,
    timeout?: google_protobuf_duration_pb.Duration.AsObject,
    contentMatchersList: Array<UptimeCheckConfig.ContentMatcher.AsObject>,
    selectedRegionsList: Array<UptimeCheckRegionMap[keyof UptimeCheckRegionMap]>,
    isInternal: boolean,
    internalCheckersList: Array<InternalChecker.AsObject>,
  }

  export class ResourceGroup extends jspb.Message {
    getGroupId(): string;
    setGroupId(value: string): void;

    getResourceType(): GroupResourceTypeMap[keyof GroupResourceTypeMap];
    setResourceType(value: GroupResourceTypeMap[keyof GroupResourceTypeMap]): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ResourceGroup.AsObject;
    static toObject(includeInstance: boolean, msg: ResourceGroup): ResourceGroup.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ResourceGroup, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ResourceGroup;
    static deserializeBinaryFromReader(message: ResourceGroup, reader: jspb.BinaryReader): ResourceGroup;
  }

  export namespace ResourceGroup {
    export type AsObject = {
      groupId: string,
      resourceType: GroupResourceTypeMap[keyof GroupResourceTypeMap],
    }
  }

  export class HttpCheck extends jspb.Message {
    getUseSsl(): boolean;
    setUseSsl(value: boolean): void;

    getPath(): string;
    setPath(value: string): void;

    getPort(): number;
    setPort(value: number): void;

    hasAuthInfo(): boolean;
    clearAuthInfo(): void;
    getAuthInfo(): UptimeCheckConfig.HttpCheck.BasicAuthentication | undefined;
    setAuthInfo(value?: UptimeCheckConfig.HttpCheck.BasicAuthentication): void;

    getMaskHeaders(): boolean;
    setMaskHeaders(value: boolean): void;

    getHeadersMap(): jspb.Map<string, string>;
    clearHeadersMap(): void;
    getValidateSsl(): boolean;
    setValidateSsl(value: boolean): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HttpCheck.AsObject;
    static toObject(includeInstance: boolean, msg: HttpCheck): HttpCheck.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HttpCheck, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HttpCheck;
    static deserializeBinaryFromReader(message: HttpCheck, reader: jspb.BinaryReader): HttpCheck;
  }

  export namespace HttpCheck {
    export type AsObject = {
      useSsl: boolean,
      path: string,
      port: number,
      authInfo?: UptimeCheckConfig.HttpCheck.BasicAuthentication.AsObject,
      maskHeaders: boolean,
      headersMap: Array<[string, string]>,
      validateSsl: boolean,
    }

    export class BasicAuthentication extends jspb.Message {
      getUsername(): string;
      setUsername(value: string): void;

      getPassword(): string;
      setPassword(value: string): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): BasicAuthentication.AsObject;
      static toObject(includeInstance: boolean, msg: BasicAuthentication): BasicAuthentication.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: BasicAuthentication, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): BasicAuthentication;
      static deserializeBinaryFromReader(message: BasicAuthentication, reader: jspb.BinaryReader): BasicAuthentication;
    }

    export namespace BasicAuthentication {
      export type AsObject = {
        username: string,
        password: string,
      }
    }
  }

  export class TcpCheck extends jspb.Message {
    getPort(): number;
    setPort(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TcpCheck.AsObject;
    static toObject(includeInstance: boolean, msg: TcpCheck): TcpCheck.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TcpCheck, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TcpCheck;
    static deserializeBinaryFromReader(message: TcpCheck, reader: jspb.BinaryReader): TcpCheck;
  }

  export namespace TcpCheck {
    export type AsObject = {
      port: number,
    }
  }

  export class ContentMatcher extends jspb.Message {
    getContent(): string;
    setContent(value: string): void;

    getMatcher(): UptimeCheckConfig.ContentMatcher.ContentMatcherOptionMap[keyof UptimeCheckConfig.ContentMatcher.ContentMatcherOptionMap];
    setMatcher(value: UptimeCheckConfig.ContentMatcher.ContentMatcherOptionMap[keyof UptimeCheckConfig.ContentMatcher.ContentMatcherOptionMap]): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ContentMatcher.AsObject;
    static toObject(includeInstance: boolean, msg: ContentMatcher): ContentMatcher.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ContentMatcher, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ContentMatcher;
    static deserializeBinaryFromReader(message: ContentMatcher, reader: jspb.BinaryReader): ContentMatcher;
  }

  export namespace ContentMatcher {
    export type AsObject = {
      content: string,
      matcher: UptimeCheckConfig.ContentMatcher.ContentMatcherOptionMap[keyof UptimeCheckConfig.ContentMatcher.ContentMatcherOptionMap],
    }

    export interface ContentMatcherOptionMap {
      CONTENT_MATCHER_OPTION_UNSPECIFIED: 0;
      CONTAINS_STRING: 1;
      NOT_CONTAINS_STRING: 2;
      MATCHES_REGEX: 3;
      NOT_MATCHES_REGEX: 4;
    }

    export const ContentMatcherOption: ContentMatcherOptionMap;
  }

  export enum ResourceCase {
    RESOURCE_NOT_SET = 0,
    MONITORED_RESOURCE = 3,
    RESOURCE_GROUP = 4,
  }

  export enum CheckRequestTypeCase {
    CHECK_REQUEST_TYPE_NOT_SET = 0,
    HTTP_CHECK = 5,
    TCP_CHECK = 6,
  }
}

export class UptimeCheckIp extends jspb.Message {
  getRegion(): UptimeCheckRegionMap[keyof UptimeCheckRegionMap];
  setRegion(value: UptimeCheckRegionMap[keyof UptimeCheckRegionMap]): void;

  getLocation(): string;
  setLocation(value: string): void;

  getIpAddress(): string;
  setIpAddress(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UptimeCheckIp.AsObject;
  static toObject(includeInstance: boolean, msg: UptimeCheckIp): UptimeCheckIp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UptimeCheckIp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UptimeCheckIp;
  static deserializeBinaryFromReader(message: UptimeCheckIp, reader: jspb.BinaryReader): UptimeCheckIp;
}

export namespace UptimeCheckIp {
  export type AsObject = {
    region: UptimeCheckRegionMap[keyof UptimeCheckRegionMap],
    location: string,
    ipAddress: string,
  }
}

export interface UptimeCheckRegionMap {
  REGION_UNSPECIFIED: 0;
  USA: 1;
  EUROPE: 2;
  SOUTH_AMERICA: 3;
  ASIA_PACIFIC: 4;
}

export const UptimeCheckRegion: UptimeCheckRegionMap;

export interface GroupResourceTypeMap {
  RESOURCE_TYPE_UNSPECIFIED: 0;
  INSTANCE: 1;
  AWS_ELB_LOAD_BALANCER: 2;
}

export const GroupResourceType: GroupResourceTypeMap;

