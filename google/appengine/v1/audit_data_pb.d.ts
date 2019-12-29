// package: google.appengine.v1
// file: google/appengine/v1/audit_data.proto

import * as jspb from "google-protobuf";
import * as google_appengine_v1_appengine_pb from "../../../google/appengine/v1/appengine_pb";
import * as google_iam_v1_iam_policy_pb from "../../../google/iam/v1/iam_policy_pb";

export class AuditData extends jspb.Message {
  hasUpdateService(): boolean;
  clearUpdateService(): void;
  getUpdateService(): UpdateServiceMethod | undefined;
  setUpdateService(value?: UpdateServiceMethod): void;

  hasCreateVersion(): boolean;
  clearCreateVersion(): void;
  getCreateVersion(): CreateVersionMethod | undefined;
  setCreateVersion(value?: CreateVersionMethod): void;

  getMethodCase(): AuditData.MethodCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuditData.AsObject;
  static toObject(includeInstance: boolean, msg: AuditData): AuditData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuditData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuditData;
  static deserializeBinaryFromReader(message: AuditData, reader: jspb.BinaryReader): AuditData;
}

export namespace AuditData {
  export type AsObject = {
    updateService?: UpdateServiceMethod.AsObject,
    createVersion?: CreateVersionMethod.AsObject,
  }

  export enum MethodCase {
    METHOD_NOT_SET = 0,
    UPDATE_SERVICE = 1,
    CREATE_VERSION = 2,
  }
}

export class UpdateServiceMethod extends jspb.Message {
  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): google_appengine_v1_appengine_pb.UpdateServiceRequest | undefined;
  setRequest(value?: google_appengine_v1_appengine_pb.UpdateServiceRequest): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateServiceMethod.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateServiceMethod): UpdateServiceMethod.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateServiceMethod, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateServiceMethod;
  static deserializeBinaryFromReader(message: UpdateServiceMethod, reader: jspb.BinaryReader): UpdateServiceMethod;
}

export namespace UpdateServiceMethod {
  export type AsObject = {
    request?: google_appengine_v1_appengine_pb.UpdateServiceRequest.AsObject,
  }
}

export class CreateVersionMethod extends jspb.Message {
  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): google_appengine_v1_appengine_pb.CreateVersionRequest | undefined;
  setRequest(value?: google_appengine_v1_appengine_pb.CreateVersionRequest): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateVersionMethod.AsObject;
  static toObject(includeInstance: boolean, msg: CreateVersionMethod): CreateVersionMethod.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateVersionMethod, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateVersionMethod;
  static deserializeBinaryFromReader(message: CreateVersionMethod, reader: jspb.BinaryReader): CreateVersionMethod;
}

export namespace CreateVersionMethod {
  export type AsObject = {
    request?: google_appengine_v1_appengine_pb.CreateVersionRequest.AsObject,
  }
}

