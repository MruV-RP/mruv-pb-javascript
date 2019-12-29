// package: google.cloud
// file: google/cloud/common_resources.proto

import * as jspb from "google-protobuf";
import * as google_api_resource_pb from "../../google/api/resource_pb";

export class Project extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Project.AsObject;
  static toObject(includeInstance: boolean, msg: Project): Project.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Project, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Project;
  static deserializeBinaryFromReader(message: Project, reader: jspb.BinaryReader): Project;
}

export namespace Project {
  export type AsObject = {
    name: string,
  }
}

export class Organization extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Organization.AsObject;
  static toObject(includeInstance: boolean, msg: Organization): Organization.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Organization, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Organization;
  static deserializeBinaryFromReader(message: Organization, reader: jspb.BinaryReader): Organization;
}

export namespace Organization {
  export type AsObject = {
    name: string,
  }
}

export class Folder extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Folder.AsObject;
  static toObject(includeInstance: boolean, msg: Folder): Folder.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Folder, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Folder;
  static deserializeBinaryFromReader(message: Folder, reader: jspb.BinaryReader): Folder;
}

export namespace Folder {
  export type AsObject = {
    name: string,
  }
}

export class BillingAccount extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BillingAccount.AsObject;
  static toObject(includeInstance: boolean, msg: BillingAccount): BillingAccount.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BillingAccount, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BillingAccount;
  static deserializeBinaryFromReader(message: BillingAccount, reader: jspb.BinaryReader): BillingAccount;
}

export namespace BillingAccount {
  export type AsObject = {
    name: string,
  }
}

export class Location extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Location.AsObject;
  static toObject(includeInstance: boolean, msg: Location): Location.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Location, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Location;
  static deserializeBinaryFromReader(message: Location, reader: jspb.BinaryReader): Location;
}

export namespace Location {
  export type AsObject = {
    name: string,
  }
}

