// package: google.genomics.v1
// file: google/genomics/v1/datasets.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as google_iam_v1_iam_policy_pb from "../../../google/iam/v1/iam_policy_pb";
import * as google_iam_v1_policy_pb from "../../../google/iam/v1/policy_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Dataset extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getProjectId(): string;
  setProjectId(value: string): void;

  getName(): string;
  setName(value: string): void;

  hasCreateTime(): boolean;
  clearCreateTime(): void;
  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dataset.AsObject;
  static toObject(includeInstance: boolean, msg: Dataset): Dataset.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Dataset, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dataset;
  static deserializeBinaryFromReader(message: Dataset, reader: jspb.BinaryReader): Dataset;
}

export namespace Dataset {
  export type AsObject = {
    id: string,
    projectId: string,
    name: string,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class ListDatasetsRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDatasetsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListDatasetsRequest): ListDatasetsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListDatasetsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDatasetsRequest;
  static deserializeBinaryFromReader(message: ListDatasetsRequest, reader: jspb.BinaryReader): ListDatasetsRequest;
}

export namespace ListDatasetsRequest {
  export type AsObject = {
    projectId: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListDatasetsResponse extends jspb.Message {
  clearDatasetsList(): void;
  getDatasetsList(): Array<Dataset>;
  setDatasetsList(value: Array<Dataset>): void;
  addDatasets(value?: Dataset, index?: number): Dataset;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDatasetsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListDatasetsResponse): ListDatasetsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListDatasetsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDatasetsResponse;
  static deserializeBinaryFromReader(message: ListDatasetsResponse, reader: jspb.BinaryReader): ListDatasetsResponse;
}

export namespace ListDatasetsResponse {
  export type AsObject = {
    datasetsList: Array<Dataset.AsObject>,
    nextPageToken: string,
  }
}

export class CreateDatasetRequest extends jspb.Message {
  hasDataset(): boolean;
  clearDataset(): void;
  getDataset(): Dataset | undefined;
  setDataset(value?: Dataset): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDatasetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDatasetRequest): CreateDatasetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateDatasetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDatasetRequest;
  static deserializeBinaryFromReader(message: CreateDatasetRequest, reader: jspb.BinaryReader): CreateDatasetRequest;
}

export namespace CreateDatasetRequest {
  export type AsObject = {
    dataset?: Dataset.AsObject,
  }
}

export class UpdateDatasetRequest extends jspb.Message {
  getDatasetId(): string;
  setDatasetId(value: string): void;

  hasDataset(): boolean;
  clearDataset(): void;
  getDataset(): Dataset | undefined;
  setDataset(value?: Dataset): void;

  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateDatasetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateDatasetRequest): UpdateDatasetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateDatasetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateDatasetRequest;
  static deserializeBinaryFromReader(message: UpdateDatasetRequest, reader: jspb.BinaryReader): UpdateDatasetRequest;
}

export namespace UpdateDatasetRequest {
  export type AsObject = {
    datasetId: string,
    dataset?: Dataset.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class DeleteDatasetRequest extends jspb.Message {
  getDatasetId(): string;
  setDatasetId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteDatasetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteDatasetRequest): DeleteDatasetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteDatasetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteDatasetRequest;
  static deserializeBinaryFromReader(message: DeleteDatasetRequest, reader: jspb.BinaryReader): DeleteDatasetRequest;
}

export namespace DeleteDatasetRequest {
  export type AsObject = {
    datasetId: string,
  }
}

export class UndeleteDatasetRequest extends jspb.Message {
  getDatasetId(): string;
  setDatasetId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UndeleteDatasetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UndeleteDatasetRequest): UndeleteDatasetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UndeleteDatasetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UndeleteDatasetRequest;
  static deserializeBinaryFromReader(message: UndeleteDatasetRequest, reader: jspb.BinaryReader): UndeleteDatasetRequest;
}

export namespace UndeleteDatasetRequest {
  export type AsObject = {
    datasetId: string,
  }
}

export class GetDatasetRequest extends jspb.Message {
  getDatasetId(): string;
  setDatasetId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDatasetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDatasetRequest): GetDatasetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDatasetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDatasetRequest;
  static deserializeBinaryFromReader(message: GetDatasetRequest, reader: jspb.BinaryReader): GetDatasetRequest;
}

export namespace GetDatasetRequest {
  export type AsObject = {
    datasetId: string,
  }
}

