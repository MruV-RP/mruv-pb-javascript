// package: google.monitoring.v3
// file: google/monitoring/v3/alert_service.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as google_monitoring_v3_alert_pb from "../../../google/monitoring/v3/alert_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_api_client_pb from "../../../google/api/client_pb";

export class CreateAlertPolicyRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasAlertPolicy(): boolean;
  clearAlertPolicy(): void;
  getAlertPolicy(): google_monitoring_v3_alert_pb.AlertPolicy | undefined;
  setAlertPolicy(value?: google_monitoring_v3_alert_pb.AlertPolicy): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAlertPolicyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAlertPolicyRequest): CreateAlertPolicyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateAlertPolicyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAlertPolicyRequest;
  static deserializeBinaryFromReader(message: CreateAlertPolicyRequest, reader: jspb.BinaryReader): CreateAlertPolicyRequest;
}

export namespace CreateAlertPolicyRequest {
  export type AsObject = {
    name: string,
    alertPolicy?: google_monitoring_v3_alert_pb.AlertPolicy.AsObject,
  }
}

export class GetAlertPolicyRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAlertPolicyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAlertPolicyRequest): GetAlertPolicyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAlertPolicyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAlertPolicyRequest;
  static deserializeBinaryFromReader(message: GetAlertPolicyRequest, reader: jspb.BinaryReader): GetAlertPolicyRequest;
}

export namespace GetAlertPolicyRequest {
  export type AsObject = {
    name: string,
  }
}

export class ListAlertPoliciesRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getFilter(): string;
  setFilter(value: string): void;

  getOrderBy(): string;
  setOrderBy(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAlertPoliciesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListAlertPoliciesRequest): ListAlertPoliciesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAlertPoliciesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAlertPoliciesRequest;
  static deserializeBinaryFromReader(message: ListAlertPoliciesRequest, reader: jspb.BinaryReader): ListAlertPoliciesRequest;
}

export namespace ListAlertPoliciesRequest {
  export type AsObject = {
    name: string,
    filter: string,
    orderBy: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListAlertPoliciesResponse extends jspb.Message {
  clearAlertPoliciesList(): void;
  getAlertPoliciesList(): Array<google_monitoring_v3_alert_pb.AlertPolicy>;
  setAlertPoliciesList(value: Array<google_monitoring_v3_alert_pb.AlertPolicy>): void;
  addAlertPolicies(value?: google_monitoring_v3_alert_pb.AlertPolicy, index?: number): google_monitoring_v3_alert_pb.AlertPolicy;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAlertPoliciesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListAlertPoliciesResponse): ListAlertPoliciesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAlertPoliciesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAlertPoliciesResponse;
  static deserializeBinaryFromReader(message: ListAlertPoliciesResponse, reader: jspb.BinaryReader): ListAlertPoliciesResponse;
}

export namespace ListAlertPoliciesResponse {
  export type AsObject = {
    alertPoliciesList: Array<google_monitoring_v3_alert_pb.AlertPolicy.AsObject>,
    nextPageToken: string,
  }
}

export class UpdateAlertPolicyRequest extends jspb.Message {
  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  hasAlertPolicy(): boolean;
  clearAlertPolicy(): void;
  getAlertPolicy(): google_monitoring_v3_alert_pb.AlertPolicy | undefined;
  setAlertPolicy(value?: google_monitoring_v3_alert_pb.AlertPolicy): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAlertPolicyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAlertPolicyRequest): UpdateAlertPolicyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateAlertPolicyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAlertPolicyRequest;
  static deserializeBinaryFromReader(message: UpdateAlertPolicyRequest, reader: jspb.BinaryReader): UpdateAlertPolicyRequest;
}

export namespace UpdateAlertPolicyRequest {
  export type AsObject = {
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    alertPolicy?: google_monitoring_v3_alert_pb.AlertPolicy.AsObject,
  }
}

export class DeleteAlertPolicyRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAlertPolicyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAlertPolicyRequest): DeleteAlertPolicyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteAlertPolicyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAlertPolicyRequest;
  static deserializeBinaryFromReader(message: DeleteAlertPolicyRequest, reader: jspb.BinaryReader): DeleteAlertPolicyRequest;
}

export namespace DeleteAlertPolicyRequest {
  export type AsObject = {
    name: string,
  }
}

