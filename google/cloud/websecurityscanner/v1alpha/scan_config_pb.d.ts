// package: google.cloud.websecurityscanner.v1alpha
// file: google/cloud/websecurityscanner/v1alpha/scan_config.proto

import * as jspb from "google-protobuf";
import * as google_api_field_behavior_pb from "../../../../google/api/field_behavior_pb";
import * as google_api_resource_pb from "../../../../google/api/resource_pb";
import * as google_cloud_websecurityscanner_v1alpha_scan_run_pb from "../../../../google/cloud/websecurityscanner/v1alpha/scan_run_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class ScanConfig extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDisplayName(): string;
  setDisplayName(value: string): void;

  getMaxQps(): number;
  setMaxQps(value: number): void;

  clearStartingUrlsList(): void;
  getStartingUrlsList(): Array<string>;
  setStartingUrlsList(value: Array<string>): void;
  addStartingUrls(value: string, index?: number): string;

  hasAuthentication(): boolean;
  clearAuthentication(): void;
  getAuthentication(): ScanConfig.Authentication | undefined;
  setAuthentication(value?: ScanConfig.Authentication): void;

  getUserAgent(): ScanConfig.UserAgentMap[keyof ScanConfig.UserAgentMap];
  setUserAgent(value: ScanConfig.UserAgentMap[keyof ScanConfig.UserAgentMap]): void;

  clearBlacklistPatternsList(): void;
  getBlacklistPatternsList(): Array<string>;
  setBlacklistPatternsList(value: Array<string>): void;
  addBlacklistPatterns(value: string, index?: number): string;

  hasSchedule(): boolean;
  clearSchedule(): void;
  getSchedule(): ScanConfig.Schedule | undefined;
  setSchedule(value?: ScanConfig.Schedule): void;

  clearTargetPlatformsList(): void;
  getTargetPlatformsList(): Array<ScanConfig.TargetPlatformMap[keyof ScanConfig.TargetPlatformMap]>;
  setTargetPlatformsList(value: Array<ScanConfig.TargetPlatformMap[keyof ScanConfig.TargetPlatformMap]>): void;
  addTargetPlatforms(value: ScanConfig.TargetPlatformMap[keyof ScanConfig.TargetPlatformMap], index?: number): ScanConfig.TargetPlatformMap[keyof ScanConfig.TargetPlatformMap];

  hasLatestRun(): boolean;
  clearLatestRun(): void;
  getLatestRun(): google_cloud_websecurityscanner_v1alpha_scan_run_pb.ScanRun | undefined;
  setLatestRun(value?: google_cloud_websecurityscanner_v1alpha_scan_run_pb.ScanRun): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScanConfig.AsObject;
  static toObject(includeInstance: boolean, msg: ScanConfig): ScanConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScanConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScanConfig;
  static deserializeBinaryFromReader(message: ScanConfig, reader: jspb.BinaryReader): ScanConfig;
}

export namespace ScanConfig {
  export type AsObject = {
    name: string,
    displayName: string,
    maxQps: number,
    startingUrlsList: Array<string>,
    authentication?: ScanConfig.Authentication.AsObject,
    userAgent: ScanConfig.UserAgentMap[keyof ScanConfig.UserAgentMap],
    blacklistPatternsList: Array<string>,
    schedule?: ScanConfig.Schedule.AsObject,
    targetPlatformsList: Array<ScanConfig.TargetPlatformMap[keyof ScanConfig.TargetPlatformMap]>,
    latestRun?: google_cloud_websecurityscanner_v1alpha_scan_run_pb.ScanRun.AsObject,
  }

  export class Authentication extends jspb.Message {
    hasGoogleAccount(): boolean;
    clearGoogleAccount(): void;
    getGoogleAccount(): ScanConfig.Authentication.GoogleAccount | undefined;
    setGoogleAccount(value?: ScanConfig.Authentication.GoogleAccount): void;

    hasCustomAccount(): boolean;
    clearCustomAccount(): void;
    getCustomAccount(): ScanConfig.Authentication.CustomAccount | undefined;
    setCustomAccount(value?: ScanConfig.Authentication.CustomAccount): void;

    getAuthenticationCase(): Authentication.AuthenticationCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Authentication.AsObject;
    static toObject(includeInstance: boolean, msg: Authentication): Authentication.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Authentication, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Authentication;
    static deserializeBinaryFromReader(message: Authentication, reader: jspb.BinaryReader): Authentication;
  }

  export namespace Authentication {
    export type AsObject = {
      googleAccount?: ScanConfig.Authentication.GoogleAccount.AsObject,
      customAccount?: ScanConfig.Authentication.CustomAccount.AsObject,
    }

    export class GoogleAccount extends jspb.Message {
      getUsername(): string;
      setUsername(value: string): void;

      getPassword(): string;
      setPassword(value: string): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): GoogleAccount.AsObject;
      static toObject(includeInstance: boolean, msg: GoogleAccount): GoogleAccount.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: GoogleAccount, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): GoogleAccount;
      static deserializeBinaryFromReader(message: GoogleAccount, reader: jspb.BinaryReader): GoogleAccount;
    }

    export namespace GoogleAccount {
      export type AsObject = {
        username: string,
        password: string,
      }
    }

    export class CustomAccount extends jspb.Message {
      getUsername(): string;
      setUsername(value: string): void;

      getPassword(): string;
      setPassword(value: string): void;

      getLoginUrl(): string;
      setLoginUrl(value: string): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): CustomAccount.AsObject;
      static toObject(includeInstance: boolean, msg: CustomAccount): CustomAccount.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: CustomAccount, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): CustomAccount;
      static deserializeBinaryFromReader(message: CustomAccount, reader: jspb.BinaryReader): CustomAccount;
    }

    export namespace CustomAccount {
      export type AsObject = {
        username: string,
        password: string,
        loginUrl: string,
      }
    }

    export enum AuthenticationCase {
      AUTHENTICATION_NOT_SET = 0,
      GOOGLE_ACCOUNT = 1,
      CUSTOM_ACCOUNT = 2,
    }
  }

  export class Schedule extends jspb.Message {
    hasScheduleTime(): boolean;
    clearScheduleTime(): void;
    getScheduleTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setScheduleTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

    getIntervalDurationDays(): number;
    setIntervalDurationDays(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Schedule.AsObject;
    static toObject(includeInstance: boolean, msg: Schedule): Schedule.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Schedule, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Schedule;
    static deserializeBinaryFromReader(message: Schedule, reader: jspb.BinaryReader): Schedule;
  }

  export namespace Schedule {
    export type AsObject = {
      scheduleTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      intervalDurationDays: number,
    }
  }

  export interface UserAgentMap {
    USER_AGENT_UNSPECIFIED: 0;
    CHROME_LINUX: 1;
    CHROME_ANDROID: 2;
    SAFARI_IPHONE: 3;
  }

  export const UserAgent: UserAgentMap;

  export interface TargetPlatformMap {
    TARGET_PLATFORM_UNSPECIFIED: 0;
    APP_ENGINE: 1;
    COMPUTE: 2;
  }

  export const TargetPlatform: TargetPlatformMap;
}

