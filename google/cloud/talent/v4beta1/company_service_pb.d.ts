// package: google.cloud.talent.v4beta1
// file: google/cloud/talent/v4beta1/company_service.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";
import * as google_api_client_pb from "../../../../google/api/client_pb";
import * as google_api_field_behavior_pb from "../../../../google/api/field_behavior_pb";
import * as google_cloud_talent_v4beta1_common_pb from "../../../../google/cloud/talent/v4beta1/common_pb";
import * as google_cloud_talent_v4beta1_company_pb from "../../../../google/cloud/talent/v4beta1/company_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";

export class CreateCompanyRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  hasCompany(): boolean;
  clearCompany(): void;
  getCompany(): google_cloud_talent_v4beta1_company_pb.Company | undefined;
  setCompany(value?: google_cloud_talent_v4beta1_company_pb.Company): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCompanyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCompanyRequest): CreateCompanyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateCompanyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCompanyRequest;
  static deserializeBinaryFromReader(message: CreateCompanyRequest, reader: jspb.BinaryReader): CreateCompanyRequest;
}

export namespace CreateCompanyRequest {
  export type AsObject = {
    parent: string,
    company?: google_cloud_talent_v4beta1_company_pb.Company.AsObject,
  }
}

export class GetCompanyRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCompanyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCompanyRequest): GetCompanyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCompanyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCompanyRequest;
  static deserializeBinaryFromReader(message: GetCompanyRequest, reader: jspb.BinaryReader): GetCompanyRequest;
}

export namespace GetCompanyRequest {
  export type AsObject = {
    name: string,
  }
}

export class UpdateCompanyRequest extends jspb.Message {
  hasCompany(): boolean;
  clearCompany(): void;
  getCompany(): google_cloud_talent_v4beta1_company_pb.Company | undefined;
  setCompany(value?: google_cloud_talent_v4beta1_company_pb.Company): void;

  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCompanyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCompanyRequest): UpdateCompanyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateCompanyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCompanyRequest;
  static deserializeBinaryFromReader(message: UpdateCompanyRequest, reader: jspb.BinaryReader): UpdateCompanyRequest;
}

export namespace UpdateCompanyRequest {
  export type AsObject = {
    company?: google_cloud_talent_v4beta1_company_pb.Company.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class DeleteCompanyRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCompanyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCompanyRequest): DeleteCompanyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteCompanyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCompanyRequest;
  static deserializeBinaryFromReader(message: DeleteCompanyRequest, reader: jspb.BinaryReader): DeleteCompanyRequest;
}

export namespace DeleteCompanyRequest {
  export type AsObject = {
    name: string,
  }
}

export class ListCompaniesRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getRequireOpenJobs(): boolean;
  setRequireOpenJobs(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCompaniesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListCompaniesRequest): ListCompaniesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListCompaniesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCompaniesRequest;
  static deserializeBinaryFromReader(message: ListCompaniesRequest, reader: jspb.BinaryReader): ListCompaniesRequest;
}

export namespace ListCompaniesRequest {
  export type AsObject = {
    parent: string,
    pageToken: string,
    pageSize: number,
    requireOpenJobs: boolean,
  }
}

export class ListCompaniesResponse extends jspb.Message {
  clearCompaniesList(): void;
  getCompaniesList(): Array<google_cloud_talent_v4beta1_company_pb.Company>;
  setCompaniesList(value: Array<google_cloud_talent_v4beta1_company_pb.Company>): void;
  addCompanies(value?: google_cloud_talent_v4beta1_company_pb.Company, index?: number): google_cloud_talent_v4beta1_company_pb.Company;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  hasMetadata(): boolean;
  clearMetadata(): void;
  getMetadata(): google_cloud_talent_v4beta1_common_pb.ResponseMetadata | undefined;
  setMetadata(value?: google_cloud_talent_v4beta1_common_pb.ResponseMetadata): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCompaniesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListCompaniesResponse): ListCompaniesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListCompaniesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCompaniesResponse;
  static deserializeBinaryFromReader(message: ListCompaniesResponse, reader: jspb.BinaryReader): ListCompaniesResponse;
}

export namespace ListCompaniesResponse {
  export type AsObject = {
    companiesList: Array<google_cloud_talent_v4beta1_company_pb.Company.AsObject>,
    nextPageToken: string,
    metadata?: google_cloud_talent_v4beta1_common_pb.ResponseMetadata.AsObject,
  }
}

