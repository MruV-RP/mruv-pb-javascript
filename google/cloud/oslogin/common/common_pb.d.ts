// package: google.cloud.oslogin.common
// file: google/cloud/oslogin/common/common.proto

import * as jspb from "google-protobuf";
import * as google_api_field_behavior_pb from "../../../../google/api/field_behavior_pb";
import * as google_api_resource_pb from "../../../../google/api/resource_pb";

export class PosixAccount extends jspb.Message {
  getPrimary(): boolean;
  setPrimary(value: boolean): void;

  getUsername(): string;
  setUsername(value: string): void;

  getUid(): number;
  setUid(value: number): void;

  getGid(): number;
  setGid(value: number): void;

  getHomeDirectory(): string;
  setHomeDirectory(value: string): void;

  getShell(): string;
  setShell(value: string): void;

  getGecos(): string;
  setGecos(value: string): void;

  getSystemId(): string;
  setSystemId(value: string): void;

  getAccountId(): string;
  setAccountId(value: string): void;

  getOperatingSystemType(): OperatingSystemTypeMap[keyof OperatingSystemTypeMap];
  setOperatingSystemType(value: OperatingSystemTypeMap[keyof OperatingSystemTypeMap]): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PosixAccount.AsObject;
  static toObject(includeInstance: boolean, msg: PosixAccount): PosixAccount.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PosixAccount, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PosixAccount;
  static deserializeBinaryFromReader(message: PosixAccount, reader: jspb.BinaryReader): PosixAccount;
}

export namespace PosixAccount {
  export type AsObject = {
    primary: boolean,
    username: string,
    uid: number,
    gid: number,
    homeDirectory: string,
    shell: string,
    gecos: string,
    systemId: string,
    accountId: string,
    operatingSystemType: OperatingSystemTypeMap[keyof OperatingSystemTypeMap],
    name: string,
  }
}

export class SshPublicKey extends jspb.Message {
  getKey(): string;
  setKey(value: string): void;

  getExpirationTimeUsec(): number;
  setExpirationTimeUsec(value: number): void;

  getFingerprint(): string;
  setFingerprint(value: string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SshPublicKey.AsObject;
  static toObject(includeInstance: boolean, msg: SshPublicKey): SshPublicKey.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SshPublicKey, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SshPublicKey;
  static deserializeBinaryFromReader(message: SshPublicKey, reader: jspb.BinaryReader): SshPublicKey;
}

export namespace SshPublicKey {
  export type AsObject = {
    key: string,
    expirationTimeUsec: number,
    fingerprint: string,
    name: string,
  }
}

export interface OperatingSystemTypeMap {
  OPERATING_SYSTEM_TYPE_UNSPECIFIED: 0;
  LINUX: 1;
  WINDOWS: 2;
}

export const OperatingSystemType: OperatingSystemTypeMap;

