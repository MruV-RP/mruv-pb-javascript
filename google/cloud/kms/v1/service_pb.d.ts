// package: google.cloud.kms.v1
// file: google/cloud/kms/v1/service.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";
import * as google_cloud_kms_v1_resources_pb from "../../../../google/cloud/kms/v1/resources_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_api_client_pb from "../../../../google/api/client_pb";

export class ListKeyRingsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  getFilter(): string;
  setFilter(value: string): void;

  getOrderBy(): string;
  setOrderBy(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListKeyRingsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListKeyRingsRequest): ListKeyRingsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListKeyRingsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListKeyRingsRequest;
  static deserializeBinaryFromReader(message: ListKeyRingsRequest, reader: jspb.BinaryReader): ListKeyRingsRequest;
}

export namespace ListKeyRingsRequest {
  export type AsObject = {
    parent: string,
    pageSize: number,
    pageToken: string,
    filter: string,
    orderBy: string,
  }
}

export class ListCryptoKeysRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  getVersionView(): google_cloud_kms_v1_resources_pb.CryptoKeyVersion.CryptoKeyVersionViewMap[keyof google_cloud_kms_v1_resources_pb.CryptoKeyVersion.CryptoKeyVersionViewMap];
  setVersionView(value: google_cloud_kms_v1_resources_pb.CryptoKeyVersion.CryptoKeyVersionViewMap[keyof google_cloud_kms_v1_resources_pb.CryptoKeyVersion.CryptoKeyVersionViewMap]): void;

  getFilter(): string;
  setFilter(value: string): void;

  getOrderBy(): string;
  setOrderBy(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCryptoKeysRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListCryptoKeysRequest): ListCryptoKeysRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListCryptoKeysRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCryptoKeysRequest;
  static deserializeBinaryFromReader(message: ListCryptoKeysRequest, reader: jspb.BinaryReader): ListCryptoKeysRequest;
}

export namespace ListCryptoKeysRequest {
  export type AsObject = {
    parent: string,
    pageSize: number,
    pageToken: string,
    versionView: google_cloud_kms_v1_resources_pb.CryptoKeyVersion.CryptoKeyVersionViewMap[keyof google_cloud_kms_v1_resources_pb.CryptoKeyVersion.CryptoKeyVersionViewMap],
    filter: string,
    orderBy: string,
  }
}

export class ListCryptoKeyVersionsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  getView(): google_cloud_kms_v1_resources_pb.CryptoKeyVersion.CryptoKeyVersionViewMap[keyof google_cloud_kms_v1_resources_pb.CryptoKeyVersion.CryptoKeyVersionViewMap];
  setView(value: google_cloud_kms_v1_resources_pb.CryptoKeyVersion.CryptoKeyVersionViewMap[keyof google_cloud_kms_v1_resources_pb.CryptoKeyVersion.CryptoKeyVersionViewMap]): void;

  getFilter(): string;
  setFilter(value: string): void;

  getOrderBy(): string;
  setOrderBy(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCryptoKeyVersionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListCryptoKeyVersionsRequest): ListCryptoKeyVersionsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListCryptoKeyVersionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCryptoKeyVersionsRequest;
  static deserializeBinaryFromReader(message: ListCryptoKeyVersionsRequest, reader: jspb.BinaryReader): ListCryptoKeyVersionsRequest;
}

export namespace ListCryptoKeyVersionsRequest {
  export type AsObject = {
    parent: string,
    pageSize: number,
    pageToken: string,
    view: google_cloud_kms_v1_resources_pb.CryptoKeyVersion.CryptoKeyVersionViewMap[keyof google_cloud_kms_v1_resources_pb.CryptoKeyVersion.CryptoKeyVersionViewMap],
    filter: string,
    orderBy: string,
  }
}

export class ListImportJobsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  getFilter(): string;
  setFilter(value: string): void;

  getOrderBy(): string;
  setOrderBy(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListImportJobsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListImportJobsRequest): ListImportJobsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListImportJobsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListImportJobsRequest;
  static deserializeBinaryFromReader(message: ListImportJobsRequest, reader: jspb.BinaryReader): ListImportJobsRequest;
}

export namespace ListImportJobsRequest {
  export type AsObject = {
    parent: string,
    pageSize: number,
    pageToken: string,
    filter: string,
    orderBy: string,
  }
}

export class ListKeyRingsResponse extends jspb.Message {
  clearKeyRingsList(): void;
  getKeyRingsList(): Array<google_cloud_kms_v1_resources_pb.KeyRing>;
  setKeyRingsList(value: Array<google_cloud_kms_v1_resources_pb.KeyRing>): void;
  addKeyRings(value?: google_cloud_kms_v1_resources_pb.KeyRing, index?: number): google_cloud_kms_v1_resources_pb.KeyRing;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  getTotalSize(): number;
  setTotalSize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListKeyRingsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListKeyRingsResponse): ListKeyRingsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListKeyRingsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListKeyRingsResponse;
  static deserializeBinaryFromReader(message: ListKeyRingsResponse, reader: jspb.BinaryReader): ListKeyRingsResponse;
}

export namespace ListKeyRingsResponse {
  export type AsObject = {
    keyRingsList: Array<google_cloud_kms_v1_resources_pb.KeyRing.AsObject>,
    nextPageToken: string,
    totalSize: number,
  }
}

export class ListCryptoKeysResponse extends jspb.Message {
  clearCryptoKeysList(): void;
  getCryptoKeysList(): Array<google_cloud_kms_v1_resources_pb.CryptoKey>;
  setCryptoKeysList(value: Array<google_cloud_kms_v1_resources_pb.CryptoKey>): void;
  addCryptoKeys(value?: google_cloud_kms_v1_resources_pb.CryptoKey, index?: number): google_cloud_kms_v1_resources_pb.CryptoKey;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  getTotalSize(): number;
  setTotalSize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCryptoKeysResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListCryptoKeysResponse): ListCryptoKeysResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListCryptoKeysResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCryptoKeysResponse;
  static deserializeBinaryFromReader(message: ListCryptoKeysResponse, reader: jspb.BinaryReader): ListCryptoKeysResponse;
}

export namespace ListCryptoKeysResponse {
  export type AsObject = {
    cryptoKeysList: Array<google_cloud_kms_v1_resources_pb.CryptoKey.AsObject>,
    nextPageToken: string,
    totalSize: number,
  }
}

export class ListCryptoKeyVersionsResponse extends jspb.Message {
  clearCryptoKeyVersionsList(): void;
  getCryptoKeyVersionsList(): Array<google_cloud_kms_v1_resources_pb.CryptoKeyVersion>;
  setCryptoKeyVersionsList(value: Array<google_cloud_kms_v1_resources_pb.CryptoKeyVersion>): void;
  addCryptoKeyVersions(value?: google_cloud_kms_v1_resources_pb.CryptoKeyVersion, index?: number): google_cloud_kms_v1_resources_pb.CryptoKeyVersion;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  getTotalSize(): number;
  setTotalSize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCryptoKeyVersionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListCryptoKeyVersionsResponse): ListCryptoKeyVersionsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListCryptoKeyVersionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCryptoKeyVersionsResponse;
  static deserializeBinaryFromReader(message: ListCryptoKeyVersionsResponse, reader: jspb.BinaryReader): ListCryptoKeyVersionsResponse;
}

export namespace ListCryptoKeyVersionsResponse {
  export type AsObject = {
    cryptoKeyVersionsList: Array<google_cloud_kms_v1_resources_pb.CryptoKeyVersion.AsObject>,
    nextPageToken: string,
    totalSize: number,
  }
}

export class ListImportJobsResponse extends jspb.Message {
  clearImportJobsList(): void;
  getImportJobsList(): Array<google_cloud_kms_v1_resources_pb.ImportJob>;
  setImportJobsList(value: Array<google_cloud_kms_v1_resources_pb.ImportJob>): void;
  addImportJobs(value?: google_cloud_kms_v1_resources_pb.ImportJob, index?: number): google_cloud_kms_v1_resources_pb.ImportJob;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  getTotalSize(): number;
  setTotalSize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListImportJobsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListImportJobsResponse): ListImportJobsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListImportJobsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListImportJobsResponse;
  static deserializeBinaryFromReader(message: ListImportJobsResponse, reader: jspb.BinaryReader): ListImportJobsResponse;
}

export namespace ListImportJobsResponse {
  export type AsObject = {
    importJobsList: Array<google_cloud_kms_v1_resources_pb.ImportJob.AsObject>,
    nextPageToken: string,
    totalSize: number,
  }
}

export class GetKeyRingRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetKeyRingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetKeyRingRequest): GetKeyRingRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetKeyRingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetKeyRingRequest;
  static deserializeBinaryFromReader(message: GetKeyRingRequest, reader: jspb.BinaryReader): GetKeyRingRequest;
}

export namespace GetKeyRingRequest {
  export type AsObject = {
    name: string,
  }
}

export class GetCryptoKeyRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCryptoKeyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCryptoKeyRequest): GetCryptoKeyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCryptoKeyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCryptoKeyRequest;
  static deserializeBinaryFromReader(message: GetCryptoKeyRequest, reader: jspb.BinaryReader): GetCryptoKeyRequest;
}

export namespace GetCryptoKeyRequest {
  export type AsObject = {
    name: string,
  }
}

export class GetCryptoKeyVersionRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCryptoKeyVersionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCryptoKeyVersionRequest): GetCryptoKeyVersionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCryptoKeyVersionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCryptoKeyVersionRequest;
  static deserializeBinaryFromReader(message: GetCryptoKeyVersionRequest, reader: jspb.BinaryReader): GetCryptoKeyVersionRequest;
}

export namespace GetCryptoKeyVersionRequest {
  export type AsObject = {
    name: string,
  }
}

export class GetPublicKeyRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPublicKeyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPublicKeyRequest): GetPublicKeyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPublicKeyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPublicKeyRequest;
  static deserializeBinaryFromReader(message: GetPublicKeyRequest, reader: jspb.BinaryReader): GetPublicKeyRequest;
}

export namespace GetPublicKeyRequest {
  export type AsObject = {
    name: string,
  }
}

export class GetImportJobRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetImportJobRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetImportJobRequest): GetImportJobRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetImportJobRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetImportJobRequest;
  static deserializeBinaryFromReader(message: GetImportJobRequest, reader: jspb.BinaryReader): GetImportJobRequest;
}

export namespace GetImportJobRequest {
  export type AsObject = {
    name: string,
  }
}

export class CreateKeyRingRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getKeyRingId(): string;
  setKeyRingId(value: string): void;

  hasKeyRing(): boolean;
  clearKeyRing(): void;
  getKeyRing(): google_cloud_kms_v1_resources_pb.KeyRing | undefined;
  setKeyRing(value?: google_cloud_kms_v1_resources_pb.KeyRing): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateKeyRingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateKeyRingRequest): CreateKeyRingRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateKeyRingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateKeyRingRequest;
  static deserializeBinaryFromReader(message: CreateKeyRingRequest, reader: jspb.BinaryReader): CreateKeyRingRequest;
}

export namespace CreateKeyRingRequest {
  export type AsObject = {
    parent: string,
    keyRingId: string,
    keyRing?: google_cloud_kms_v1_resources_pb.KeyRing.AsObject,
  }
}

export class CreateCryptoKeyRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getCryptoKeyId(): string;
  setCryptoKeyId(value: string): void;

  hasCryptoKey(): boolean;
  clearCryptoKey(): void;
  getCryptoKey(): google_cloud_kms_v1_resources_pb.CryptoKey | undefined;
  setCryptoKey(value?: google_cloud_kms_v1_resources_pb.CryptoKey): void;

  getSkipInitialVersionCreation(): boolean;
  setSkipInitialVersionCreation(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCryptoKeyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCryptoKeyRequest): CreateCryptoKeyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateCryptoKeyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCryptoKeyRequest;
  static deserializeBinaryFromReader(message: CreateCryptoKeyRequest, reader: jspb.BinaryReader): CreateCryptoKeyRequest;
}

export namespace CreateCryptoKeyRequest {
  export type AsObject = {
    parent: string,
    cryptoKeyId: string,
    cryptoKey?: google_cloud_kms_v1_resources_pb.CryptoKey.AsObject,
    skipInitialVersionCreation: boolean,
  }
}

export class CreateCryptoKeyVersionRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  hasCryptoKeyVersion(): boolean;
  clearCryptoKeyVersion(): void;
  getCryptoKeyVersion(): google_cloud_kms_v1_resources_pb.CryptoKeyVersion | undefined;
  setCryptoKeyVersion(value?: google_cloud_kms_v1_resources_pb.CryptoKeyVersion): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCryptoKeyVersionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCryptoKeyVersionRequest): CreateCryptoKeyVersionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateCryptoKeyVersionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCryptoKeyVersionRequest;
  static deserializeBinaryFromReader(message: CreateCryptoKeyVersionRequest, reader: jspb.BinaryReader): CreateCryptoKeyVersionRequest;
}

export namespace CreateCryptoKeyVersionRequest {
  export type AsObject = {
    parent: string,
    cryptoKeyVersion?: google_cloud_kms_v1_resources_pb.CryptoKeyVersion.AsObject,
  }
}

export class ImportCryptoKeyVersionRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getAlgorithm(): google_cloud_kms_v1_resources_pb.CryptoKeyVersion.CryptoKeyVersionAlgorithmMap[keyof google_cloud_kms_v1_resources_pb.CryptoKeyVersion.CryptoKeyVersionAlgorithmMap];
  setAlgorithm(value: google_cloud_kms_v1_resources_pb.CryptoKeyVersion.CryptoKeyVersionAlgorithmMap[keyof google_cloud_kms_v1_resources_pb.CryptoKeyVersion.CryptoKeyVersionAlgorithmMap]): void;

  getImportJob(): string;
  setImportJob(value: string): void;

  hasRsaAesWrappedKey(): boolean;
  clearRsaAesWrappedKey(): void;
  getRsaAesWrappedKey(): Uint8Array | string;
  getRsaAesWrappedKey_asU8(): Uint8Array;
  getRsaAesWrappedKey_asB64(): string;
  setRsaAesWrappedKey(value: Uint8Array | string): void;

  getWrappedKeyMaterialCase(): ImportCryptoKeyVersionRequest.WrappedKeyMaterialCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImportCryptoKeyVersionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ImportCryptoKeyVersionRequest): ImportCryptoKeyVersionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ImportCryptoKeyVersionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImportCryptoKeyVersionRequest;
  static deserializeBinaryFromReader(message: ImportCryptoKeyVersionRequest, reader: jspb.BinaryReader): ImportCryptoKeyVersionRequest;
}

export namespace ImportCryptoKeyVersionRequest {
  export type AsObject = {
    parent: string,
    algorithm: google_cloud_kms_v1_resources_pb.CryptoKeyVersion.CryptoKeyVersionAlgorithmMap[keyof google_cloud_kms_v1_resources_pb.CryptoKeyVersion.CryptoKeyVersionAlgorithmMap],
    importJob: string,
    rsaAesWrappedKey: Uint8Array | string,
  }

  export enum WrappedKeyMaterialCase {
    WRAPPED_KEY_MATERIAL_NOT_SET = 0,
    RSA_AES_WRAPPED_KEY = 5,
  }
}

export class CreateImportJobRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getImportJobId(): string;
  setImportJobId(value: string): void;

  hasImportJob(): boolean;
  clearImportJob(): void;
  getImportJob(): google_cloud_kms_v1_resources_pb.ImportJob | undefined;
  setImportJob(value?: google_cloud_kms_v1_resources_pb.ImportJob): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateImportJobRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateImportJobRequest): CreateImportJobRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateImportJobRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateImportJobRequest;
  static deserializeBinaryFromReader(message: CreateImportJobRequest, reader: jspb.BinaryReader): CreateImportJobRequest;
}

export namespace CreateImportJobRequest {
  export type AsObject = {
    parent: string,
    importJobId: string,
    importJob?: google_cloud_kms_v1_resources_pb.ImportJob.AsObject,
  }
}

export class UpdateCryptoKeyRequest extends jspb.Message {
  hasCryptoKey(): boolean;
  clearCryptoKey(): void;
  getCryptoKey(): google_cloud_kms_v1_resources_pb.CryptoKey | undefined;
  setCryptoKey(value?: google_cloud_kms_v1_resources_pb.CryptoKey): void;

  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCryptoKeyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCryptoKeyRequest): UpdateCryptoKeyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateCryptoKeyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCryptoKeyRequest;
  static deserializeBinaryFromReader(message: UpdateCryptoKeyRequest, reader: jspb.BinaryReader): UpdateCryptoKeyRequest;
}

export namespace UpdateCryptoKeyRequest {
  export type AsObject = {
    cryptoKey?: google_cloud_kms_v1_resources_pb.CryptoKey.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateCryptoKeyVersionRequest extends jspb.Message {
  hasCryptoKeyVersion(): boolean;
  clearCryptoKeyVersion(): void;
  getCryptoKeyVersion(): google_cloud_kms_v1_resources_pb.CryptoKeyVersion | undefined;
  setCryptoKeyVersion(value?: google_cloud_kms_v1_resources_pb.CryptoKeyVersion): void;

  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCryptoKeyVersionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCryptoKeyVersionRequest): UpdateCryptoKeyVersionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateCryptoKeyVersionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCryptoKeyVersionRequest;
  static deserializeBinaryFromReader(message: UpdateCryptoKeyVersionRequest, reader: jspb.BinaryReader): UpdateCryptoKeyVersionRequest;
}

export namespace UpdateCryptoKeyVersionRequest {
  export type AsObject = {
    cryptoKeyVersion?: google_cloud_kms_v1_resources_pb.CryptoKeyVersion.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class EncryptRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getPlaintext(): Uint8Array | string;
  getPlaintext_asU8(): Uint8Array;
  getPlaintext_asB64(): string;
  setPlaintext(value: Uint8Array | string): void;

  getAdditionalAuthenticatedData(): Uint8Array | string;
  getAdditionalAuthenticatedData_asU8(): Uint8Array;
  getAdditionalAuthenticatedData_asB64(): string;
  setAdditionalAuthenticatedData(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EncryptRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EncryptRequest): EncryptRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EncryptRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EncryptRequest;
  static deserializeBinaryFromReader(message: EncryptRequest, reader: jspb.BinaryReader): EncryptRequest;
}

export namespace EncryptRequest {
  export type AsObject = {
    name: string,
    plaintext: Uint8Array | string,
    additionalAuthenticatedData: Uint8Array | string,
  }
}

export class DecryptRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getCiphertext(): Uint8Array | string;
  getCiphertext_asU8(): Uint8Array;
  getCiphertext_asB64(): string;
  setCiphertext(value: Uint8Array | string): void;

  getAdditionalAuthenticatedData(): Uint8Array | string;
  getAdditionalAuthenticatedData_asU8(): Uint8Array;
  getAdditionalAuthenticatedData_asB64(): string;
  setAdditionalAuthenticatedData(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DecryptRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DecryptRequest): DecryptRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DecryptRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DecryptRequest;
  static deserializeBinaryFromReader(message: DecryptRequest, reader: jspb.BinaryReader): DecryptRequest;
}

export namespace DecryptRequest {
  export type AsObject = {
    name: string,
    ciphertext: Uint8Array | string,
    additionalAuthenticatedData: Uint8Array | string,
  }
}

export class AsymmetricSignRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasDigest(): boolean;
  clearDigest(): void;
  getDigest(): Digest | undefined;
  setDigest(value?: Digest): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AsymmetricSignRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AsymmetricSignRequest): AsymmetricSignRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AsymmetricSignRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AsymmetricSignRequest;
  static deserializeBinaryFromReader(message: AsymmetricSignRequest, reader: jspb.BinaryReader): AsymmetricSignRequest;
}

export namespace AsymmetricSignRequest {
  export type AsObject = {
    name: string,
    digest?: Digest.AsObject,
  }
}

export class AsymmetricDecryptRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getCiphertext(): Uint8Array | string;
  getCiphertext_asU8(): Uint8Array;
  getCiphertext_asB64(): string;
  setCiphertext(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AsymmetricDecryptRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AsymmetricDecryptRequest): AsymmetricDecryptRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AsymmetricDecryptRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AsymmetricDecryptRequest;
  static deserializeBinaryFromReader(message: AsymmetricDecryptRequest, reader: jspb.BinaryReader): AsymmetricDecryptRequest;
}

export namespace AsymmetricDecryptRequest {
  export type AsObject = {
    name: string,
    ciphertext: Uint8Array | string,
  }
}

export class DecryptResponse extends jspb.Message {
  getPlaintext(): Uint8Array | string;
  getPlaintext_asU8(): Uint8Array;
  getPlaintext_asB64(): string;
  setPlaintext(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DecryptResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DecryptResponse): DecryptResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DecryptResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DecryptResponse;
  static deserializeBinaryFromReader(message: DecryptResponse, reader: jspb.BinaryReader): DecryptResponse;
}

export namespace DecryptResponse {
  export type AsObject = {
    plaintext: Uint8Array | string,
  }
}

export class EncryptResponse extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getCiphertext(): Uint8Array | string;
  getCiphertext_asU8(): Uint8Array;
  getCiphertext_asB64(): string;
  setCiphertext(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EncryptResponse.AsObject;
  static toObject(includeInstance: boolean, msg: EncryptResponse): EncryptResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EncryptResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EncryptResponse;
  static deserializeBinaryFromReader(message: EncryptResponse, reader: jspb.BinaryReader): EncryptResponse;
}

export namespace EncryptResponse {
  export type AsObject = {
    name: string,
    ciphertext: Uint8Array | string,
  }
}

export class AsymmetricSignResponse extends jspb.Message {
  getSignature(): Uint8Array | string;
  getSignature_asU8(): Uint8Array;
  getSignature_asB64(): string;
  setSignature(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AsymmetricSignResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AsymmetricSignResponse): AsymmetricSignResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AsymmetricSignResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AsymmetricSignResponse;
  static deserializeBinaryFromReader(message: AsymmetricSignResponse, reader: jspb.BinaryReader): AsymmetricSignResponse;
}

export namespace AsymmetricSignResponse {
  export type AsObject = {
    signature: Uint8Array | string,
  }
}

export class AsymmetricDecryptResponse extends jspb.Message {
  getPlaintext(): Uint8Array | string;
  getPlaintext_asU8(): Uint8Array;
  getPlaintext_asB64(): string;
  setPlaintext(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AsymmetricDecryptResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AsymmetricDecryptResponse): AsymmetricDecryptResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AsymmetricDecryptResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AsymmetricDecryptResponse;
  static deserializeBinaryFromReader(message: AsymmetricDecryptResponse, reader: jspb.BinaryReader): AsymmetricDecryptResponse;
}

export namespace AsymmetricDecryptResponse {
  export type AsObject = {
    plaintext: Uint8Array | string,
  }
}

export class UpdateCryptoKeyPrimaryVersionRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getCryptoKeyVersionId(): string;
  setCryptoKeyVersionId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCryptoKeyPrimaryVersionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCryptoKeyPrimaryVersionRequest): UpdateCryptoKeyPrimaryVersionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateCryptoKeyPrimaryVersionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCryptoKeyPrimaryVersionRequest;
  static deserializeBinaryFromReader(message: UpdateCryptoKeyPrimaryVersionRequest, reader: jspb.BinaryReader): UpdateCryptoKeyPrimaryVersionRequest;
}

export namespace UpdateCryptoKeyPrimaryVersionRequest {
  export type AsObject = {
    name: string,
    cryptoKeyVersionId: string,
  }
}

export class DestroyCryptoKeyVersionRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DestroyCryptoKeyVersionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DestroyCryptoKeyVersionRequest): DestroyCryptoKeyVersionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DestroyCryptoKeyVersionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DestroyCryptoKeyVersionRequest;
  static deserializeBinaryFromReader(message: DestroyCryptoKeyVersionRequest, reader: jspb.BinaryReader): DestroyCryptoKeyVersionRequest;
}

export namespace DestroyCryptoKeyVersionRequest {
  export type AsObject = {
    name: string,
  }
}

export class RestoreCryptoKeyVersionRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RestoreCryptoKeyVersionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RestoreCryptoKeyVersionRequest): RestoreCryptoKeyVersionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RestoreCryptoKeyVersionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RestoreCryptoKeyVersionRequest;
  static deserializeBinaryFromReader(message: RestoreCryptoKeyVersionRequest, reader: jspb.BinaryReader): RestoreCryptoKeyVersionRequest;
}

export namespace RestoreCryptoKeyVersionRequest {
  export type AsObject = {
    name: string,
  }
}

export class Digest extends jspb.Message {
  hasSha256(): boolean;
  clearSha256(): void;
  getSha256(): Uint8Array | string;
  getSha256_asU8(): Uint8Array;
  getSha256_asB64(): string;
  setSha256(value: Uint8Array | string): void;

  hasSha384(): boolean;
  clearSha384(): void;
  getSha384(): Uint8Array | string;
  getSha384_asU8(): Uint8Array;
  getSha384_asB64(): string;
  setSha384(value: Uint8Array | string): void;

  hasSha512(): boolean;
  clearSha512(): void;
  getSha512(): Uint8Array | string;
  getSha512_asU8(): Uint8Array;
  getSha512_asB64(): string;
  setSha512(value: Uint8Array | string): void;

  getDigestCase(): Digest.DigestCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Digest.AsObject;
  static toObject(includeInstance: boolean, msg: Digest): Digest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Digest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Digest;
  static deserializeBinaryFromReader(message: Digest, reader: jspb.BinaryReader): Digest;
}

export namespace Digest {
  export type AsObject = {
    sha256: Uint8Array | string,
    sha384: Uint8Array | string,
    sha512: Uint8Array | string,
  }

  export enum DigestCase {
    DIGEST_NOT_SET = 0,
    SHA256 = 1,
    SHA384 = 2,
    SHA512 = 3,
  }
}

export class LocationMetadata extends jspb.Message {
  getHsmAvailable(): boolean;
  setHsmAvailable(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LocationMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: LocationMetadata): LocationMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LocationMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LocationMetadata;
  static deserializeBinaryFromReader(message: LocationMetadata, reader: jspb.BinaryReader): LocationMetadata;
}

export namespace LocationMetadata {
  export type AsObject = {
    hsmAvailable: boolean,
  }
}

