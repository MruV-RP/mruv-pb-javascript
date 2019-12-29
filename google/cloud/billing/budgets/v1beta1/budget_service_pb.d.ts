// package: google.cloud.billing.budgets.v1beta1
// file: google/cloud/billing/budgets/v1beta1/budget_service.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";
import * as google_api_client_pb from "../../../../../google/api/client_pb";
import * as google_api_field_behavior_pb from "../../../../../google/api/field_behavior_pb";
import * as google_api_resource_pb from "../../../../../google/api/resource_pb";
import * as google_cloud_billing_budgets_v1beta1_budget_model_pb from "../../../../../google/cloud/billing/budgets/v1beta1/budget_model_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";

export class CreateBudgetRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  hasBudget(): boolean;
  clearBudget(): void;
  getBudget(): google_cloud_billing_budgets_v1beta1_budget_model_pb.Budget | undefined;
  setBudget(value?: google_cloud_billing_budgets_v1beta1_budget_model_pb.Budget): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateBudgetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateBudgetRequest): CreateBudgetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateBudgetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateBudgetRequest;
  static deserializeBinaryFromReader(message: CreateBudgetRequest, reader: jspb.BinaryReader): CreateBudgetRequest;
}

export namespace CreateBudgetRequest {
  export type AsObject = {
    parent: string,
    budget?: google_cloud_billing_budgets_v1beta1_budget_model_pb.Budget.AsObject,
  }
}

export class UpdateBudgetRequest extends jspb.Message {
  hasBudget(): boolean;
  clearBudget(): void;
  getBudget(): google_cloud_billing_budgets_v1beta1_budget_model_pb.Budget | undefined;
  setBudget(value?: google_cloud_billing_budgets_v1beta1_budget_model_pb.Budget): void;

  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateBudgetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateBudgetRequest): UpdateBudgetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateBudgetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateBudgetRequest;
  static deserializeBinaryFromReader(message: UpdateBudgetRequest, reader: jspb.BinaryReader): UpdateBudgetRequest;
}

export namespace UpdateBudgetRequest {
  export type AsObject = {
    budget?: google_cloud_billing_budgets_v1beta1_budget_model_pb.Budget.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class GetBudgetRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBudgetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBudgetRequest): GetBudgetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBudgetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBudgetRequest;
  static deserializeBinaryFromReader(message: GetBudgetRequest, reader: jspb.BinaryReader): GetBudgetRequest;
}

export namespace GetBudgetRequest {
  export type AsObject = {
    name: string,
  }
}

export class ListBudgetsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListBudgetsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListBudgetsRequest): ListBudgetsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListBudgetsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListBudgetsRequest;
  static deserializeBinaryFromReader(message: ListBudgetsRequest, reader: jspb.BinaryReader): ListBudgetsRequest;
}

export namespace ListBudgetsRequest {
  export type AsObject = {
    parent: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListBudgetsResponse extends jspb.Message {
  clearBudgetsList(): void;
  getBudgetsList(): Array<google_cloud_billing_budgets_v1beta1_budget_model_pb.Budget>;
  setBudgetsList(value: Array<google_cloud_billing_budgets_v1beta1_budget_model_pb.Budget>): void;
  addBudgets(value?: google_cloud_billing_budgets_v1beta1_budget_model_pb.Budget, index?: number): google_cloud_billing_budgets_v1beta1_budget_model_pb.Budget;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListBudgetsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListBudgetsResponse): ListBudgetsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListBudgetsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListBudgetsResponse;
  static deserializeBinaryFromReader(message: ListBudgetsResponse, reader: jspb.BinaryReader): ListBudgetsResponse;
}

export namespace ListBudgetsResponse {
  export type AsObject = {
    budgetsList: Array<google_cloud_billing_budgets_v1beta1_budget_model_pb.Budget.AsObject>,
    nextPageToken: string,
  }
}

export class DeleteBudgetRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteBudgetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteBudgetRequest): DeleteBudgetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteBudgetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteBudgetRequest;
  static deserializeBinaryFromReader(message: DeleteBudgetRequest, reader: jspb.BinaryReader): DeleteBudgetRequest;
}

export namespace DeleteBudgetRequest {
  export type AsObject = {
    name: string,
  }
}

