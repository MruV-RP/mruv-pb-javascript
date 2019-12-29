// package: google.cloud.oslogin.v1beta
// file: google/cloud/oslogin/v1beta/oslogin.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";
import * as google_api_client_pb from "../../../../google/api/client_pb";
import * as google_api_field_behavior_pb from "../../../../google/api/field_behavior_pb";
import * as google_api_resource_pb from "../../../../google/api/resource_pb";
import * as google_cloud_oslogin_common_common_pb from "../../../../google/cloud/oslogin/common/common_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";

export class LoginProfile extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  clearPosixAccountsList(): void;
  getPosixAccountsList(): Array<google_cloud_oslogin_common_common_pb.PosixAccount>;
  setPosixAccountsList(value: Array<google_cloud_oslogin_common_common_pb.PosixAccount>): void;
  addPosixAccounts(value?: google_cloud_oslogin_common_common_pb.PosixAccount, index?: number): google_cloud_oslogin_common_common_pb.PosixAccount;

  getSshPublicKeysMap(): jspb.Map<string, google_cloud_oslogin_common_common_pb.SshPublicKey>;
  clearSshPublicKeysMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginProfile.AsObject;
  static toObject(includeInstance: boolean, msg: LoginProfile): LoginProfile.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LoginProfile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginProfile;
  static deserializeBinaryFromReader(message: LoginProfile, reader: jspb.BinaryReader): LoginProfile;
}

export namespace LoginProfile {
  export type AsObject = {
    name: string,
    posixAccountsList: Array<google_cloud_oslogin_common_common_pb.PosixAccount.AsObject>,
    sshPublicKeysMap: Array<[string, google_cloud_oslogin_common_common_pb.SshPublicKey.AsObject]>,
  }
}

export class DeletePosixAccountRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeletePosixAccountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeletePosixAccountRequest): DeletePosixAccountRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeletePosixAccountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeletePosixAccountRequest;
  static deserializeBinaryFromReader(message: DeletePosixAccountRequest, reader: jspb.BinaryReader): DeletePosixAccountRequest;
}

export namespace DeletePosixAccountRequest {
  export type AsObject = {
    name: string,
  }
}

export class DeleteSshPublicKeyRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteSshPublicKeyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteSshPublicKeyRequest): DeleteSshPublicKeyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteSshPublicKeyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteSshPublicKeyRequest;
  static deserializeBinaryFromReader(message: DeleteSshPublicKeyRequest, reader: jspb.BinaryReader): DeleteSshPublicKeyRequest;
}

export namespace DeleteSshPublicKeyRequest {
  export type AsObject = {
    name: string,
  }
}

export class GetLoginProfileRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getProjectId(): string;
  setProjectId(value: string): void;

  getSystemId(): string;
  setSystemId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLoginProfileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetLoginProfileRequest): GetLoginProfileRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetLoginProfileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLoginProfileRequest;
  static deserializeBinaryFromReader(message: GetLoginProfileRequest, reader: jspb.BinaryReader): GetLoginProfileRequest;
}

export namespace GetLoginProfileRequest {
  export type AsObject = {
    name: string,
    projectId: string,
    systemId: string,
  }
}

export class GetSshPublicKeyRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSshPublicKeyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSshPublicKeyRequest): GetSshPublicKeyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSshPublicKeyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSshPublicKeyRequest;
  static deserializeBinaryFromReader(message: GetSshPublicKeyRequest, reader: jspb.BinaryReader): GetSshPublicKeyRequest;
}

export namespace GetSshPublicKeyRequest {
  export type AsObject = {
    name: string,
  }
}

export class ImportSshPublicKeyRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  hasSshPublicKey(): boolean;
  clearSshPublicKey(): void;
  getSshPublicKey(): google_cloud_oslogin_common_common_pb.SshPublicKey | undefined;
  setSshPublicKey(value?: google_cloud_oslogin_common_common_pb.SshPublicKey): void;

  getProjectId(): string;
  setProjectId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImportSshPublicKeyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ImportSshPublicKeyRequest): ImportSshPublicKeyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ImportSshPublicKeyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImportSshPublicKeyRequest;
  static deserializeBinaryFromReader(message: ImportSshPublicKeyRequest, reader: jspb.BinaryReader): ImportSshPublicKeyRequest;
}

export namespace ImportSshPublicKeyRequest {
  export type AsObject = {
    parent: string,
    sshPublicKey?: google_cloud_oslogin_common_common_pb.SshPublicKey.AsObject,
    projectId: string,
  }
}

export class ImportSshPublicKeyResponse extends jspb.Message {
  hasLoginProfile(): boolean;
  clearLoginProfile(): void;
  getLoginProfile(): LoginProfile | undefined;
  setLoginProfile(value?: LoginProfile): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImportSshPublicKeyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ImportSshPublicKeyResponse): ImportSshPublicKeyResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ImportSshPublicKeyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImportSshPublicKeyResponse;
  static deserializeBinaryFromReader(message: ImportSshPublicKeyResponse, reader: jspb.BinaryReader): ImportSshPublicKeyResponse;
}

export namespace ImportSshPublicKeyResponse {
  export type AsObject = {
    loginProfile?: LoginProfile.AsObject,
  }
}

export class UpdateSshPublicKeyRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasSshPublicKey(): boolean;
  clearSshPublicKey(): void;
  getSshPublicKey(): google_cloud_oslogin_common_common_pb.SshPublicKey | undefined;
  setSshPublicKey(value?: google_cloud_oslogin_common_common_pb.SshPublicKey): void;

  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateSshPublicKeyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateSshPublicKeyRequest): UpdateSshPublicKeyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateSshPublicKeyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateSshPublicKeyRequest;
  static deserializeBinaryFromReader(message: UpdateSshPublicKeyRequest, reader: jspb.BinaryReader): UpdateSshPublicKeyRequest;
}

export namespace UpdateSshPublicKeyRequest {
  export type AsObject = {
    name: string,
    sshPublicKey?: google_cloud_oslogin_common_common_pb.SshPublicKey.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

