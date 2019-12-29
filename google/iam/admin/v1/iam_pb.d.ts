// package: google.iam.admin.v1
// file: google/iam/admin/v1/iam.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";
import * as google_iam_v1_iam_policy_pb from "../../../../google/iam/v1/iam_policy_pb";
import * as google_iam_v1_policy_pb from "../../../../google/iam/v1/policy_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class ServiceAccount extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getProjectId(): string;
  setProjectId(value: string): void;

  getUniqueId(): string;
  setUniqueId(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  getDisplayName(): string;
  setDisplayName(value: string): void;

  getEtag(): Uint8Array | string;
  getEtag_asU8(): Uint8Array;
  getEtag_asB64(): string;
  setEtag(value: Uint8Array | string): void;

  getOauth2ClientId(): string;
  setOauth2ClientId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceAccount.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceAccount): ServiceAccount.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServiceAccount, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceAccount;
  static deserializeBinaryFromReader(message: ServiceAccount, reader: jspb.BinaryReader): ServiceAccount;
}

export namespace ServiceAccount {
  export type AsObject = {
    name: string,
    projectId: string,
    uniqueId: string,
    email: string,
    displayName: string,
    etag: Uint8Array | string,
    oauth2ClientId: string,
  }
}

export class CreateServiceAccountRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getAccountId(): string;
  setAccountId(value: string): void;

  hasServiceAccount(): boolean;
  clearServiceAccount(): void;
  getServiceAccount(): ServiceAccount | undefined;
  setServiceAccount(value?: ServiceAccount): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateServiceAccountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateServiceAccountRequest): CreateServiceAccountRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateServiceAccountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateServiceAccountRequest;
  static deserializeBinaryFromReader(message: CreateServiceAccountRequest, reader: jspb.BinaryReader): CreateServiceAccountRequest;
}

export namespace CreateServiceAccountRequest {
  export type AsObject = {
    name: string,
    accountId: string,
    serviceAccount?: ServiceAccount.AsObject,
  }
}

export class ListServiceAccountsRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListServiceAccountsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListServiceAccountsRequest): ListServiceAccountsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListServiceAccountsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListServiceAccountsRequest;
  static deserializeBinaryFromReader(message: ListServiceAccountsRequest, reader: jspb.BinaryReader): ListServiceAccountsRequest;
}

export namespace ListServiceAccountsRequest {
  export type AsObject = {
    name: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListServiceAccountsResponse extends jspb.Message {
  clearAccountsList(): void;
  getAccountsList(): Array<ServiceAccount>;
  setAccountsList(value: Array<ServiceAccount>): void;
  addAccounts(value?: ServiceAccount, index?: number): ServiceAccount;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListServiceAccountsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListServiceAccountsResponse): ListServiceAccountsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListServiceAccountsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListServiceAccountsResponse;
  static deserializeBinaryFromReader(message: ListServiceAccountsResponse, reader: jspb.BinaryReader): ListServiceAccountsResponse;
}

export namespace ListServiceAccountsResponse {
  export type AsObject = {
    accountsList: Array<ServiceAccount.AsObject>,
    nextPageToken: string,
  }
}

export class GetServiceAccountRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetServiceAccountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetServiceAccountRequest): GetServiceAccountRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetServiceAccountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetServiceAccountRequest;
  static deserializeBinaryFromReader(message: GetServiceAccountRequest, reader: jspb.BinaryReader): GetServiceAccountRequest;
}

export namespace GetServiceAccountRequest {
  export type AsObject = {
    name: string,
  }
}

export class DeleteServiceAccountRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteServiceAccountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteServiceAccountRequest): DeleteServiceAccountRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteServiceAccountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteServiceAccountRequest;
  static deserializeBinaryFromReader(message: DeleteServiceAccountRequest, reader: jspb.BinaryReader): DeleteServiceAccountRequest;
}

export namespace DeleteServiceAccountRequest {
  export type AsObject = {
    name: string,
  }
}

export class ListServiceAccountKeysRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  clearKeyTypesList(): void;
  getKeyTypesList(): Array<ListServiceAccountKeysRequest.KeyTypeMap[keyof ListServiceAccountKeysRequest.KeyTypeMap]>;
  setKeyTypesList(value: Array<ListServiceAccountKeysRequest.KeyTypeMap[keyof ListServiceAccountKeysRequest.KeyTypeMap]>): void;
  addKeyTypes(value: ListServiceAccountKeysRequest.KeyTypeMap[keyof ListServiceAccountKeysRequest.KeyTypeMap], index?: number): ListServiceAccountKeysRequest.KeyTypeMap[keyof ListServiceAccountKeysRequest.KeyTypeMap];

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListServiceAccountKeysRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListServiceAccountKeysRequest): ListServiceAccountKeysRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListServiceAccountKeysRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListServiceAccountKeysRequest;
  static deserializeBinaryFromReader(message: ListServiceAccountKeysRequest, reader: jspb.BinaryReader): ListServiceAccountKeysRequest;
}

export namespace ListServiceAccountKeysRequest {
  export type AsObject = {
    name: string,
    keyTypesList: Array<ListServiceAccountKeysRequest.KeyTypeMap[keyof ListServiceAccountKeysRequest.KeyTypeMap]>,
  }

  export interface KeyTypeMap {
    KEY_TYPE_UNSPECIFIED: 0;
    USER_MANAGED: 1;
    SYSTEM_MANAGED: 2;
  }

  export const KeyType: KeyTypeMap;
}

export class ListServiceAccountKeysResponse extends jspb.Message {
  clearKeysList(): void;
  getKeysList(): Array<ServiceAccountKey>;
  setKeysList(value: Array<ServiceAccountKey>): void;
  addKeys(value?: ServiceAccountKey, index?: number): ServiceAccountKey;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListServiceAccountKeysResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListServiceAccountKeysResponse): ListServiceAccountKeysResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListServiceAccountKeysResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListServiceAccountKeysResponse;
  static deserializeBinaryFromReader(message: ListServiceAccountKeysResponse, reader: jspb.BinaryReader): ListServiceAccountKeysResponse;
}

export namespace ListServiceAccountKeysResponse {
  export type AsObject = {
    keysList: Array<ServiceAccountKey.AsObject>,
  }
}

export class GetServiceAccountKeyRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getPublicKeyType(): ServiceAccountPublicKeyTypeMap[keyof ServiceAccountPublicKeyTypeMap];
  setPublicKeyType(value: ServiceAccountPublicKeyTypeMap[keyof ServiceAccountPublicKeyTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetServiceAccountKeyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetServiceAccountKeyRequest): GetServiceAccountKeyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetServiceAccountKeyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetServiceAccountKeyRequest;
  static deserializeBinaryFromReader(message: GetServiceAccountKeyRequest, reader: jspb.BinaryReader): GetServiceAccountKeyRequest;
}

export namespace GetServiceAccountKeyRequest {
  export type AsObject = {
    name: string,
    publicKeyType: ServiceAccountPublicKeyTypeMap[keyof ServiceAccountPublicKeyTypeMap],
  }
}

export class ServiceAccountKey extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getPrivateKeyType(): ServiceAccountPrivateKeyTypeMap[keyof ServiceAccountPrivateKeyTypeMap];
  setPrivateKeyType(value: ServiceAccountPrivateKeyTypeMap[keyof ServiceAccountPrivateKeyTypeMap]): void;

  getKeyAlgorithm(): ServiceAccountKeyAlgorithmMap[keyof ServiceAccountKeyAlgorithmMap];
  setKeyAlgorithm(value: ServiceAccountKeyAlgorithmMap[keyof ServiceAccountKeyAlgorithmMap]): void;

  getPrivateKeyData(): Uint8Array | string;
  getPrivateKeyData_asU8(): Uint8Array;
  getPrivateKeyData_asB64(): string;
  setPrivateKeyData(value: Uint8Array | string): void;

  getPublicKeyData(): Uint8Array | string;
  getPublicKeyData_asU8(): Uint8Array;
  getPublicKeyData_asB64(): string;
  setPublicKeyData(value: Uint8Array | string): void;

  hasValidAfterTime(): boolean;
  clearValidAfterTime(): void;
  getValidAfterTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setValidAfterTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasValidBeforeTime(): boolean;
  clearValidBeforeTime(): void;
  getValidBeforeTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setValidBeforeTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceAccountKey.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceAccountKey): ServiceAccountKey.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServiceAccountKey, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceAccountKey;
  static deserializeBinaryFromReader(message: ServiceAccountKey, reader: jspb.BinaryReader): ServiceAccountKey;
}

export namespace ServiceAccountKey {
  export type AsObject = {
    name: string,
    privateKeyType: ServiceAccountPrivateKeyTypeMap[keyof ServiceAccountPrivateKeyTypeMap],
    keyAlgorithm: ServiceAccountKeyAlgorithmMap[keyof ServiceAccountKeyAlgorithmMap],
    privateKeyData: Uint8Array | string,
    publicKeyData: Uint8Array | string,
    validAfterTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    validBeforeTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class CreateServiceAccountKeyRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getPrivateKeyType(): ServiceAccountPrivateKeyTypeMap[keyof ServiceAccountPrivateKeyTypeMap];
  setPrivateKeyType(value: ServiceAccountPrivateKeyTypeMap[keyof ServiceAccountPrivateKeyTypeMap]): void;

  getKeyAlgorithm(): ServiceAccountKeyAlgorithmMap[keyof ServiceAccountKeyAlgorithmMap];
  setKeyAlgorithm(value: ServiceAccountKeyAlgorithmMap[keyof ServiceAccountKeyAlgorithmMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateServiceAccountKeyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateServiceAccountKeyRequest): CreateServiceAccountKeyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateServiceAccountKeyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateServiceAccountKeyRequest;
  static deserializeBinaryFromReader(message: CreateServiceAccountKeyRequest, reader: jspb.BinaryReader): CreateServiceAccountKeyRequest;
}

export namespace CreateServiceAccountKeyRequest {
  export type AsObject = {
    name: string,
    privateKeyType: ServiceAccountPrivateKeyTypeMap[keyof ServiceAccountPrivateKeyTypeMap],
    keyAlgorithm: ServiceAccountKeyAlgorithmMap[keyof ServiceAccountKeyAlgorithmMap],
  }
}

export class DeleteServiceAccountKeyRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteServiceAccountKeyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteServiceAccountKeyRequest): DeleteServiceAccountKeyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteServiceAccountKeyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteServiceAccountKeyRequest;
  static deserializeBinaryFromReader(message: DeleteServiceAccountKeyRequest, reader: jspb.BinaryReader): DeleteServiceAccountKeyRequest;
}

export namespace DeleteServiceAccountKeyRequest {
  export type AsObject = {
    name: string,
  }
}

export class SignBlobRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getBytesToSign(): Uint8Array | string;
  getBytesToSign_asU8(): Uint8Array;
  getBytesToSign_asB64(): string;
  setBytesToSign(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignBlobRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SignBlobRequest): SignBlobRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SignBlobRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignBlobRequest;
  static deserializeBinaryFromReader(message: SignBlobRequest, reader: jspb.BinaryReader): SignBlobRequest;
}

export namespace SignBlobRequest {
  export type AsObject = {
    name: string,
    bytesToSign: Uint8Array | string,
  }
}

export class SignBlobResponse extends jspb.Message {
  getKeyId(): string;
  setKeyId(value: string): void;

  getSignature(): Uint8Array | string;
  getSignature_asU8(): Uint8Array;
  getSignature_asB64(): string;
  setSignature(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignBlobResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SignBlobResponse): SignBlobResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SignBlobResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignBlobResponse;
  static deserializeBinaryFromReader(message: SignBlobResponse, reader: jspb.BinaryReader): SignBlobResponse;
}

export namespace SignBlobResponse {
  export type AsObject = {
    keyId: string,
    signature: Uint8Array | string,
  }
}

export class SignJwtRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getPayload(): string;
  setPayload(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignJwtRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SignJwtRequest): SignJwtRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SignJwtRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignJwtRequest;
  static deserializeBinaryFromReader(message: SignJwtRequest, reader: jspb.BinaryReader): SignJwtRequest;
}

export namespace SignJwtRequest {
  export type AsObject = {
    name: string,
    payload: string,
  }
}

export class SignJwtResponse extends jspb.Message {
  getKeyId(): string;
  setKeyId(value: string): void;

  getSignedJwt(): string;
  setSignedJwt(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignJwtResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SignJwtResponse): SignJwtResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SignJwtResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignJwtResponse;
  static deserializeBinaryFromReader(message: SignJwtResponse, reader: jspb.BinaryReader): SignJwtResponse;
}

export namespace SignJwtResponse {
  export type AsObject = {
    keyId: string,
    signedJwt: string,
  }
}

export class Role extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getTitle(): string;
  setTitle(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  clearIncludedPermissionsList(): void;
  getIncludedPermissionsList(): Array<string>;
  setIncludedPermissionsList(value: Array<string>): void;
  addIncludedPermissions(value: string, index?: number): string;

  getStage(): Role.RoleLaunchStageMap[keyof Role.RoleLaunchStageMap];
  setStage(value: Role.RoleLaunchStageMap[keyof Role.RoleLaunchStageMap]): void;

  getEtag(): Uint8Array | string;
  getEtag_asU8(): Uint8Array;
  getEtag_asB64(): string;
  setEtag(value: Uint8Array | string): void;

  getDeleted(): boolean;
  setDeleted(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Role.AsObject;
  static toObject(includeInstance: boolean, msg: Role): Role.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Role, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Role;
  static deserializeBinaryFromReader(message: Role, reader: jspb.BinaryReader): Role;
}

export namespace Role {
  export type AsObject = {
    name: string,
    title: string,
    description: string,
    includedPermissionsList: Array<string>,
    stage: Role.RoleLaunchStageMap[keyof Role.RoleLaunchStageMap],
    etag: Uint8Array | string,
    deleted: boolean,
  }

  export interface RoleLaunchStageMap {
    ALPHA: 0;
    BETA: 1;
    GA: 2;
    DEPRECATED: 4;
    DISABLED: 5;
    EAP: 6;
  }

  export const RoleLaunchStage: RoleLaunchStageMap;
}

export class QueryGrantableRolesRequest extends jspb.Message {
  getFullResourceName(): string;
  setFullResourceName(value: string): void;

  getView(): RoleViewMap[keyof RoleViewMap];
  setView(value: RoleViewMap[keyof RoleViewMap]): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryGrantableRolesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryGrantableRolesRequest): QueryGrantableRolesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryGrantableRolesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryGrantableRolesRequest;
  static deserializeBinaryFromReader(message: QueryGrantableRolesRequest, reader: jspb.BinaryReader): QueryGrantableRolesRequest;
}

export namespace QueryGrantableRolesRequest {
  export type AsObject = {
    fullResourceName: string,
    view: RoleViewMap[keyof RoleViewMap],
    pageSize: number,
    pageToken: string,
  }
}

export class QueryGrantableRolesResponse extends jspb.Message {
  clearRolesList(): void;
  getRolesList(): Array<Role>;
  setRolesList(value: Array<Role>): void;
  addRoles(value?: Role, index?: number): Role;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryGrantableRolesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryGrantableRolesResponse): QueryGrantableRolesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryGrantableRolesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryGrantableRolesResponse;
  static deserializeBinaryFromReader(message: QueryGrantableRolesResponse, reader: jspb.BinaryReader): QueryGrantableRolesResponse;
}

export namespace QueryGrantableRolesResponse {
  export type AsObject = {
    rolesList: Array<Role.AsObject>,
    nextPageToken: string,
  }
}

export class ListRolesRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  getView(): RoleViewMap[keyof RoleViewMap];
  setView(value: RoleViewMap[keyof RoleViewMap]): void;

  getShowDeleted(): boolean;
  setShowDeleted(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRolesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListRolesRequest): ListRolesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListRolesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRolesRequest;
  static deserializeBinaryFromReader(message: ListRolesRequest, reader: jspb.BinaryReader): ListRolesRequest;
}

export namespace ListRolesRequest {
  export type AsObject = {
    parent: string,
    pageSize: number,
    pageToken: string,
    view: RoleViewMap[keyof RoleViewMap],
    showDeleted: boolean,
  }
}

export class ListRolesResponse extends jspb.Message {
  clearRolesList(): void;
  getRolesList(): Array<Role>;
  setRolesList(value: Array<Role>): void;
  addRoles(value?: Role, index?: number): Role;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRolesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListRolesResponse): ListRolesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListRolesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRolesResponse;
  static deserializeBinaryFromReader(message: ListRolesResponse, reader: jspb.BinaryReader): ListRolesResponse;
}

export namespace ListRolesResponse {
  export type AsObject = {
    rolesList: Array<Role.AsObject>,
    nextPageToken: string,
  }
}

export class GetRoleRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRoleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRoleRequest): GetRoleRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRoleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRoleRequest;
  static deserializeBinaryFromReader(message: GetRoleRequest, reader: jspb.BinaryReader): GetRoleRequest;
}

export namespace GetRoleRequest {
  export type AsObject = {
    name: string,
  }
}

export class CreateRoleRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getRoleId(): string;
  setRoleId(value: string): void;

  hasRole(): boolean;
  clearRole(): void;
  getRole(): Role | undefined;
  setRole(value?: Role): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateRoleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateRoleRequest): CreateRoleRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateRoleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateRoleRequest;
  static deserializeBinaryFromReader(message: CreateRoleRequest, reader: jspb.BinaryReader): CreateRoleRequest;
}

export namespace CreateRoleRequest {
  export type AsObject = {
    parent: string,
    roleId: string,
    role?: Role.AsObject,
  }
}

export class UpdateRoleRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasRole(): boolean;
  clearRole(): void;
  getRole(): Role | undefined;
  setRole(value?: Role): void;

  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRoleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRoleRequest): UpdateRoleRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateRoleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRoleRequest;
  static deserializeBinaryFromReader(message: UpdateRoleRequest, reader: jspb.BinaryReader): UpdateRoleRequest;
}

export namespace UpdateRoleRequest {
  export type AsObject = {
    name: string,
    role?: Role.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class DeleteRoleRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getEtag(): Uint8Array | string;
  getEtag_asU8(): Uint8Array;
  getEtag_asB64(): string;
  setEtag(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRoleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRoleRequest): DeleteRoleRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteRoleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRoleRequest;
  static deserializeBinaryFromReader(message: DeleteRoleRequest, reader: jspb.BinaryReader): DeleteRoleRequest;
}

export namespace DeleteRoleRequest {
  export type AsObject = {
    name: string,
    etag: Uint8Array | string,
  }
}

export class UndeleteRoleRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getEtag(): Uint8Array | string;
  getEtag_asU8(): Uint8Array;
  getEtag_asB64(): string;
  setEtag(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UndeleteRoleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UndeleteRoleRequest): UndeleteRoleRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UndeleteRoleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UndeleteRoleRequest;
  static deserializeBinaryFromReader(message: UndeleteRoleRequest, reader: jspb.BinaryReader): UndeleteRoleRequest;
}

export namespace UndeleteRoleRequest {
  export type AsObject = {
    name: string,
    etag: Uint8Array | string,
  }
}

export class Permission extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getTitle(): string;
  setTitle(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getOnlyInPredefinedRoles(): boolean;
  setOnlyInPredefinedRoles(value: boolean): void;

  getStage(): Permission.PermissionLaunchStageMap[keyof Permission.PermissionLaunchStageMap];
  setStage(value: Permission.PermissionLaunchStageMap[keyof Permission.PermissionLaunchStageMap]): void;

  getCustomRolesSupportLevel(): Permission.CustomRolesSupportLevelMap[keyof Permission.CustomRolesSupportLevelMap];
  setCustomRolesSupportLevel(value: Permission.CustomRolesSupportLevelMap[keyof Permission.CustomRolesSupportLevelMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Permission.AsObject;
  static toObject(includeInstance: boolean, msg: Permission): Permission.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Permission, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Permission;
  static deserializeBinaryFromReader(message: Permission, reader: jspb.BinaryReader): Permission;
}

export namespace Permission {
  export type AsObject = {
    name: string,
    title: string,
    description: string,
    onlyInPredefinedRoles: boolean,
    stage: Permission.PermissionLaunchStageMap[keyof Permission.PermissionLaunchStageMap],
    customRolesSupportLevel: Permission.CustomRolesSupportLevelMap[keyof Permission.CustomRolesSupportLevelMap],
  }

  export interface PermissionLaunchStageMap {
    ALPHA: 0;
    BETA: 1;
    GA: 2;
    DEPRECATED: 3;
  }

  export const PermissionLaunchStage: PermissionLaunchStageMap;

  export interface CustomRolesSupportLevelMap {
    SUPPORTED: 0;
    TESTING: 1;
    NOT_SUPPORTED: 2;
  }

  export const CustomRolesSupportLevel: CustomRolesSupportLevelMap;
}

export class QueryTestablePermissionsRequest extends jspb.Message {
  getFullResourceName(): string;
  setFullResourceName(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryTestablePermissionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryTestablePermissionsRequest): QueryTestablePermissionsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryTestablePermissionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryTestablePermissionsRequest;
  static deserializeBinaryFromReader(message: QueryTestablePermissionsRequest, reader: jspb.BinaryReader): QueryTestablePermissionsRequest;
}

export namespace QueryTestablePermissionsRequest {
  export type AsObject = {
    fullResourceName: string,
    pageSize: number,
    pageToken: string,
  }
}

export class QueryTestablePermissionsResponse extends jspb.Message {
  clearPermissionsList(): void;
  getPermissionsList(): Array<Permission>;
  setPermissionsList(value: Array<Permission>): void;
  addPermissions(value?: Permission, index?: number): Permission;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryTestablePermissionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryTestablePermissionsResponse): QueryTestablePermissionsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryTestablePermissionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryTestablePermissionsResponse;
  static deserializeBinaryFromReader(message: QueryTestablePermissionsResponse, reader: jspb.BinaryReader): QueryTestablePermissionsResponse;
}

export namespace QueryTestablePermissionsResponse {
  export type AsObject = {
    permissionsList: Array<Permission.AsObject>,
    nextPageToken: string,
  }
}

export interface ServiceAccountKeyAlgorithmMap {
  KEY_ALG_UNSPECIFIED: 0;
  KEY_ALG_RSA_1024: 1;
  KEY_ALG_RSA_2048: 2;
}

export const ServiceAccountKeyAlgorithm: ServiceAccountKeyAlgorithmMap;

export interface ServiceAccountPrivateKeyTypeMap {
  TYPE_UNSPECIFIED: 0;
  TYPE_PKCS12_FILE: 1;
  TYPE_GOOGLE_CREDENTIALS_FILE: 2;
}

export const ServiceAccountPrivateKeyType: ServiceAccountPrivateKeyTypeMap;

export interface ServiceAccountPublicKeyTypeMap {
  TYPE_NONE: 0;
  TYPE_X509_PEM_FILE: 1;
  TYPE_RAW_PUBLIC_KEY: 2;
}

export const ServiceAccountPublicKeyType: ServiceAccountPublicKeyTypeMap;

export interface RoleViewMap {
  BASIC: 0;
  FULL: 1;
}

export const RoleView: RoleViewMap;

