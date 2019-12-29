// package: google.cloud.talent.v4beta1
// file: google/cloud/talent/v4beta1/tenant_service.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";
import * as google_api_client_pb from "../../../../google/api/client_pb";
import * as google_api_field_behavior_pb from "../../../../google/api/field_behavior_pb";
import * as google_cloud_talent_v4beta1_common_pb from "../../../../google/cloud/talent/v4beta1/common_pb";
import * as google_cloud_talent_v4beta1_tenant_pb from "../../../../google/cloud/talent/v4beta1/tenant_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";

export class CreateTenantRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  hasTenant(): boolean;
  clearTenant(): void;
  getTenant(): google_cloud_talent_v4beta1_tenant_pb.Tenant | undefined;
  setTenant(value?: google_cloud_talent_v4beta1_tenant_pb.Tenant): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTenantRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTenantRequest): CreateTenantRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateTenantRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTenantRequest;
  static deserializeBinaryFromReader(message: CreateTenantRequest, reader: jspb.BinaryReader): CreateTenantRequest;
}

export namespace CreateTenantRequest {
  export type AsObject = {
    parent: string,
    tenant?: google_cloud_talent_v4beta1_tenant_pb.Tenant.AsObject,
  }
}

export class GetTenantRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTenantRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTenantRequest): GetTenantRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTenantRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTenantRequest;
  static deserializeBinaryFromReader(message: GetTenantRequest, reader: jspb.BinaryReader): GetTenantRequest;
}

export namespace GetTenantRequest {
  export type AsObject = {
    name: string,
  }
}

export class UpdateTenantRequest extends jspb.Message {
  hasTenant(): boolean;
  clearTenant(): void;
  getTenant(): google_cloud_talent_v4beta1_tenant_pb.Tenant | undefined;
  setTenant(value?: google_cloud_talent_v4beta1_tenant_pb.Tenant): void;

  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateTenantRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateTenantRequest): UpdateTenantRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateTenantRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateTenantRequest;
  static deserializeBinaryFromReader(message: UpdateTenantRequest, reader: jspb.BinaryReader): UpdateTenantRequest;
}

export namespace UpdateTenantRequest {
  export type AsObject = {
    tenant?: google_cloud_talent_v4beta1_tenant_pb.Tenant.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class DeleteTenantRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteTenantRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteTenantRequest): DeleteTenantRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteTenantRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteTenantRequest;
  static deserializeBinaryFromReader(message: DeleteTenantRequest, reader: jspb.BinaryReader): DeleteTenantRequest;
}

export namespace DeleteTenantRequest {
  export type AsObject = {
    name: string,
  }
}

export class ListTenantsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTenantsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListTenantsRequest): ListTenantsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListTenantsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTenantsRequest;
  static deserializeBinaryFromReader(message: ListTenantsRequest, reader: jspb.BinaryReader): ListTenantsRequest;
}

export namespace ListTenantsRequest {
  export type AsObject = {
    parent: string,
    pageToken: string,
    pageSize: number,
  }
}

export class ListTenantsResponse extends jspb.Message {
  clearTenantsList(): void;
  getTenantsList(): Array<google_cloud_talent_v4beta1_tenant_pb.Tenant>;
  setTenantsList(value: Array<google_cloud_talent_v4beta1_tenant_pb.Tenant>): void;
  addTenants(value?: google_cloud_talent_v4beta1_tenant_pb.Tenant, index?: number): google_cloud_talent_v4beta1_tenant_pb.Tenant;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  hasMetadata(): boolean;
  clearMetadata(): void;
  getMetadata(): google_cloud_talent_v4beta1_common_pb.ResponseMetadata | undefined;
  setMetadata(value?: google_cloud_talent_v4beta1_common_pb.ResponseMetadata): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTenantsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListTenantsResponse): ListTenantsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListTenantsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTenantsResponse;
  static deserializeBinaryFromReader(message: ListTenantsResponse, reader: jspb.BinaryReader): ListTenantsResponse;
}

export namespace ListTenantsResponse {
  export type AsObject = {
    tenantsList: Array<google_cloud_talent_v4beta1_tenant_pb.Tenant.AsObject>,
    nextPageToken: string,
    metadata?: google_cloud_talent_v4beta1_common_pb.ResponseMetadata.AsObject,
  }
}

