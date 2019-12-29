// package: google.cloud.automl.v1beta1
// file: google/cloud/automl/v1beta1/service.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";
import * as google_cloud_automl_v1beta1_annotation_payload_pb from "../../../../google/cloud/automl/v1beta1/annotation_payload_pb";
import * as google_cloud_automl_v1beta1_annotation_spec_pb from "../../../../google/cloud/automl/v1beta1/annotation_spec_pb";
import * as google_cloud_automl_v1beta1_column_spec_pb from "../../../../google/cloud/automl/v1beta1/column_spec_pb";
import * as google_cloud_automl_v1beta1_dataset_pb from "../../../../google/cloud/automl/v1beta1/dataset_pb";
import * as google_cloud_automl_v1beta1_image_pb from "../../../../google/cloud/automl/v1beta1/image_pb";
import * as google_cloud_automl_v1beta1_io_pb from "../../../../google/cloud/automl/v1beta1/io_pb";
import * as google_cloud_automl_v1beta1_model_pb from "../../../../google/cloud/automl/v1beta1/model_pb";
import * as google_cloud_automl_v1beta1_model_evaluation_pb from "../../../../google/cloud/automl/v1beta1/model_evaluation_pb";
import * as google_cloud_automl_v1beta1_operations_pb from "../../../../google/cloud/automl/v1beta1/operations_pb";
import * as google_cloud_automl_v1beta1_table_spec_pb from "../../../../google/cloud/automl/v1beta1/table_spec_pb";
import * as google_longrunning_operations_pb from "../../../../google/longrunning/operations_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_api_client_pb from "../../../../google/api/client_pb";

export class CreateDatasetRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  hasDataset(): boolean;
  clearDataset(): void;
  getDataset(): google_cloud_automl_v1beta1_dataset_pb.Dataset | undefined;
  setDataset(value?: google_cloud_automl_v1beta1_dataset_pb.Dataset): void;

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
    parent: string,
    dataset?: google_cloud_automl_v1beta1_dataset_pb.Dataset.AsObject,
  }
}

export class GetDatasetRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

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
    name: string,
  }
}

export class ListDatasetsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getFilter(): string;
  setFilter(value: string): void;

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
    parent: string,
    filter: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListDatasetsResponse extends jspb.Message {
  clearDatasetsList(): void;
  getDatasetsList(): Array<google_cloud_automl_v1beta1_dataset_pb.Dataset>;
  setDatasetsList(value: Array<google_cloud_automl_v1beta1_dataset_pb.Dataset>): void;
  addDatasets(value?: google_cloud_automl_v1beta1_dataset_pb.Dataset, index?: number): google_cloud_automl_v1beta1_dataset_pb.Dataset;

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
    datasetsList: Array<google_cloud_automl_v1beta1_dataset_pb.Dataset.AsObject>,
    nextPageToken: string,
  }
}

export class UpdateDatasetRequest extends jspb.Message {
  hasDataset(): boolean;
  clearDataset(): void;
  getDataset(): google_cloud_automl_v1beta1_dataset_pb.Dataset | undefined;
  setDataset(value?: google_cloud_automl_v1beta1_dataset_pb.Dataset): void;

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
    dataset?: google_cloud_automl_v1beta1_dataset_pb.Dataset.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class DeleteDatasetRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

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
    name: string,
  }
}

export class ImportDataRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasInputConfig(): boolean;
  clearInputConfig(): void;
  getInputConfig(): google_cloud_automl_v1beta1_io_pb.InputConfig | undefined;
  setInputConfig(value?: google_cloud_automl_v1beta1_io_pb.InputConfig): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImportDataRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ImportDataRequest): ImportDataRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ImportDataRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImportDataRequest;
  static deserializeBinaryFromReader(message: ImportDataRequest, reader: jspb.BinaryReader): ImportDataRequest;
}

export namespace ImportDataRequest {
  export type AsObject = {
    name: string,
    inputConfig?: google_cloud_automl_v1beta1_io_pb.InputConfig.AsObject,
  }
}

export class ExportDataRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasOutputConfig(): boolean;
  clearOutputConfig(): void;
  getOutputConfig(): google_cloud_automl_v1beta1_io_pb.OutputConfig | undefined;
  setOutputConfig(value?: google_cloud_automl_v1beta1_io_pb.OutputConfig): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExportDataRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExportDataRequest): ExportDataRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExportDataRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExportDataRequest;
  static deserializeBinaryFromReader(message: ExportDataRequest, reader: jspb.BinaryReader): ExportDataRequest;
}

export namespace ExportDataRequest {
  export type AsObject = {
    name: string,
    outputConfig?: google_cloud_automl_v1beta1_io_pb.OutputConfig.AsObject,
  }
}

export class GetAnnotationSpecRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAnnotationSpecRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAnnotationSpecRequest): GetAnnotationSpecRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAnnotationSpecRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAnnotationSpecRequest;
  static deserializeBinaryFromReader(message: GetAnnotationSpecRequest, reader: jspb.BinaryReader): GetAnnotationSpecRequest;
}

export namespace GetAnnotationSpecRequest {
  export type AsObject = {
    name: string,
  }
}

export class GetTableSpecRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTableSpecRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTableSpecRequest): GetTableSpecRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTableSpecRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTableSpecRequest;
  static deserializeBinaryFromReader(message: GetTableSpecRequest, reader: jspb.BinaryReader): GetTableSpecRequest;
}

export namespace GetTableSpecRequest {
  export type AsObject = {
    name: string,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class ListTableSpecsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  getFilter(): string;
  setFilter(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTableSpecsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListTableSpecsRequest): ListTableSpecsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListTableSpecsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTableSpecsRequest;
  static deserializeBinaryFromReader(message: ListTableSpecsRequest, reader: jspb.BinaryReader): ListTableSpecsRequest;
}

export namespace ListTableSpecsRequest {
  export type AsObject = {
    parent: string,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    filter: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListTableSpecsResponse extends jspb.Message {
  clearTableSpecsList(): void;
  getTableSpecsList(): Array<google_cloud_automl_v1beta1_table_spec_pb.TableSpec>;
  setTableSpecsList(value: Array<google_cloud_automl_v1beta1_table_spec_pb.TableSpec>): void;
  addTableSpecs(value?: google_cloud_automl_v1beta1_table_spec_pb.TableSpec, index?: number): google_cloud_automl_v1beta1_table_spec_pb.TableSpec;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTableSpecsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListTableSpecsResponse): ListTableSpecsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListTableSpecsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTableSpecsResponse;
  static deserializeBinaryFromReader(message: ListTableSpecsResponse, reader: jspb.BinaryReader): ListTableSpecsResponse;
}

export namespace ListTableSpecsResponse {
  export type AsObject = {
    tableSpecsList: Array<google_cloud_automl_v1beta1_table_spec_pb.TableSpec.AsObject>,
    nextPageToken: string,
  }
}

export class UpdateTableSpecRequest extends jspb.Message {
  hasTableSpec(): boolean;
  clearTableSpec(): void;
  getTableSpec(): google_cloud_automl_v1beta1_table_spec_pb.TableSpec | undefined;
  setTableSpec(value?: google_cloud_automl_v1beta1_table_spec_pb.TableSpec): void;

  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateTableSpecRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateTableSpecRequest): UpdateTableSpecRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateTableSpecRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateTableSpecRequest;
  static deserializeBinaryFromReader(message: UpdateTableSpecRequest, reader: jspb.BinaryReader): UpdateTableSpecRequest;
}

export namespace UpdateTableSpecRequest {
  export type AsObject = {
    tableSpec?: google_cloud_automl_v1beta1_table_spec_pb.TableSpec.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class GetColumnSpecRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetColumnSpecRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetColumnSpecRequest): GetColumnSpecRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetColumnSpecRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetColumnSpecRequest;
  static deserializeBinaryFromReader(message: GetColumnSpecRequest, reader: jspb.BinaryReader): GetColumnSpecRequest;
}

export namespace GetColumnSpecRequest {
  export type AsObject = {
    name: string,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class ListColumnSpecsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  getFilter(): string;
  setFilter(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListColumnSpecsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListColumnSpecsRequest): ListColumnSpecsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListColumnSpecsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListColumnSpecsRequest;
  static deserializeBinaryFromReader(message: ListColumnSpecsRequest, reader: jspb.BinaryReader): ListColumnSpecsRequest;
}

export namespace ListColumnSpecsRequest {
  export type AsObject = {
    parent: string,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    filter: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListColumnSpecsResponse extends jspb.Message {
  clearColumnSpecsList(): void;
  getColumnSpecsList(): Array<google_cloud_automl_v1beta1_column_spec_pb.ColumnSpec>;
  setColumnSpecsList(value: Array<google_cloud_automl_v1beta1_column_spec_pb.ColumnSpec>): void;
  addColumnSpecs(value?: google_cloud_automl_v1beta1_column_spec_pb.ColumnSpec, index?: number): google_cloud_automl_v1beta1_column_spec_pb.ColumnSpec;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListColumnSpecsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListColumnSpecsResponse): ListColumnSpecsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListColumnSpecsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListColumnSpecsResponse;
  static deserializeBinaryFromReader(message: ListColumnSpecsResponse, reader: jspb.BinaryReader): ListColumnSpecsResponse;
}

export namespace ListColumnSpecsResponse {
  export type AsObject = {
    columnSpecsList: Array<google_cloud_automl_v1beta1_column_spec_pb.ColumnSpec.AsObject>,
    nextPageToken: string,
  }
}

export class UpdateColumnSpecRequest extends jspb.Message {
  hasColumnSpec(): boolean;
  clearColumnSpec(): void;
  getColumnSpec(): google_cloud_automl_v1beta1_column_spec_pb.ColumnSpec | undefined;
  setColumnSpec(value?: google_cloud_automl_v1beta1_column_spec_pb.ColumnSpec): void;

  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateColumnSpecRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateColumnSpecRequest): UpdateColumnSpecRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateColumnSpecRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateColumnSpecRequest;
  static deserializeBinaryFromReader(message: UpdateColumnSpecRequest, reader: jspb.BinaryReader): UpdateColumnSpecRequest;
}

export namespace UpdateColumnSpecRequest {
  export type AsObject = {
    columnSpec?: google_cloud_automl_v1beta1_column_spec_pb.ColumnSpec.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class CreateModelRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  hasModel(): boolean;
  clearModel(): void;
  getModel(): google_cloud_automl_v1beta1_model_pb.Model | undefined;
  setModel(value?: google_cloud_automl_v1beta1_model_pb.Model): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateModelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateModelRequest): CreateModelRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateModelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateModelRequest;
  static deserializeBinaryFromReader(message: CreateModelRequest, reader: jspb.BinaryReader): CreateModelRequest;
}

export namespace CreateModelRequest {
  export type AsObject = {
    parent: string,
    model?: google_cloud_automl_v1beta1_model_pb.Model.AsObject,
  }
}

export class GetModelRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetModelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetModelRequest): GetModelRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetModelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetModelRequest;
  static deserializeBinaryFromReader(message: GetModelRequest, reader: jspb.BinaryReader): GetModelRequest;
}

export namespace GetModelRequest {
  export type AsObject = {
    name: string,
  }
}

export class ListModelsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getFilter(): string;
  setFilter(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListModelsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListModelsRequest): ListModelsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListModelsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListModelsRequest;
  static deserializeBinaryFromReader(message: ListModelsRequest, reader: jspb.BinaryReader): ListModelsRequest;
}

export namespace ListModelsRequest {
  export type AsObject = {
    parent: string,
    filter: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListModelsResponse extends jspb.Message {
  clearModelList(): void;
  getModelList(): Array<google_cloud_automl_v1beta1_model_pb.Model>;
  setModelList(value: Array<google_cloud_automl_v1beta1_model_pb.Model>): void;
  addModel(value?: google_cloud_automl_v1beta1_model_pb.Model, index?: number): google_cloud_automl_v1beta1_model_pb.Model;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListModelsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListModelsResponse): ListModelsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListModelsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListModelsResponse;
  static deserializeBinaryFromReader(message: ListModelsResponse, reader: jspb.BinaryReader): ListModelsResponse;
}

export namespace ListModelsResponse {
  export type AsObject = {
    modelList: Array<google_cloud_automl_v1beta1_model_pb.Model.AsObject>,
    nextPageToken: string,
  }
}

export class DeleteModelRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteModelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteModelRequest): DeleteModelRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteModelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteModelRequest;
  static deserializeBinaryFromReader(message: DeleteModelRequest, reader: jspb.BinaryReader): DeleteModelRequest;
}

export namespace DeleteModelRequest {
  export type AsObject = {
    name: string,
  }
}

export class DeployModelRequest extends jspb.Message {
  hasImageObjectDetectionModelDeploymentMetadata(): boolean;
  clearImageObjectDetectionModelDeploymentMetadata(): void;
  getImageObjectDetectionModelDeploymentMetadata(): google_cloud_automl_v1beta1_image_pb.ImageObjectDetectionModelDeploymentMetadata | undefined;
  setImageObjectDetectionModelDeploymentMetadata(value?: google_cloud_automl_v1beta1_image_pb.ImageObjectDetectionModelDeploymentMetadata): void;

  hasImageClassificationModelDeploymentMetadata(): boolean;
  clearImageClassificationModelDeploymentMetadata(): void;
  getImageClassificationModelDeploymentMetadata(): google_cloud_automl_v1beta1_image_pb.ImageClassificationModelDeploymentMetadata | undefined;
  setImageClassificationModelDeploymentMetadata(value?: google_cloud_automl_v1beta1_image_pb.ImageClassificationModelDeploymentMetadata): void;

  getName(): string;
  setName(value: string): void;

  getModelDeploymentMetadataCase(): DeployModelRequest.ModelDeploymentMetadataCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeployModelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeployModelRequest): DeployModelRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeployModelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeployModelRequest;
  static deserializeBinaryFromReader(message: DeployModelRequest, reader: jspb.BinaryReader): DeployModelRequest;
}

export namespace DeployModelRequest {
  export type AsObject = {
    imageObjectDetectionModelDeploymentMetadata?: google_cloud_automl_v1beta1_image_pb.ImageObjectDetectionModelDeploymentMetadata.AsObject,
    imageClassificationModelDeploymentMetadata?: google_cloud_automl_v1beta1_image_pb.ImageClassificationModelDeploymentMetadata.AsObject,
    name: string,
  }

  export enum ModelDeploymentMetadataCase {
    MODEL_DEPLOYMENT_METADATA_NOT_SET = 0,
    IMAGE_OBJECT_DETECTION_MODEL_DEPLOYMENT_METADATA = 2,
    IMAGE_CLASSIFICATION_MODEL_DEPLOYMENT_METADATA = 4,
  }
}

export class UndeployModelRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UndeployModelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UndeployModelRequest): UndeployModelRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UndeployModelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UndeployModelRequest;
  static deserializeBinaryFromReader(message: UndeployModelRequest, reader: jspb.BinaryReader): UndeployModelRequest;
}

export namespace UndeployModelRequest {
  export type AsObject = {
    name: string,
  }
}

export class ExportModelRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasOutputConfig(): boolean;
  clearOutputConfig(): void;
  getOutputConfig(): google_cloud_automl_v1beta1_io_pb.ModelExportOutputConfig | undefined;
  setOutputConfig(value?: google_cloud_automl_v1beta1_io_pb.ModelExportOutputConfig): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExportModelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExportModelRequest): ExportModelRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExportModelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExportModelRequest;
  static deserializeBinaryFromReader(message: ExportModelRequest, reader: jspb.BinaryReader): ExportModelRequest;
}

export namespace ExportModelRequest {
  export type AsObject = {
    name: string,
    outputConfig?: google_cloud_automl_v1beta1_io_pb.ModelExportOutputConfig.AsObject,
  }
}

export class ExportEvaluatedExamplesRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasOutputConfig(): boolean;
  clearOutputConfig(): void;
  getOutputConfig(): google_cloud_automl_v1beta1_io_pb.ExportEvaluatedExamplesOutputConfig | undefined;
  setOutputConfig(value?: google_cloud_automl_v1beta1_io_pb.ExportEvaluatedExamplesOutputConfig): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExportEvaluatedExamplesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExportEvaluatedExamplesRequest): ExportEvaluatedExamplesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExportEvaluatedExamplesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExportEvaluatedExamplesRequest;
  static deserializeBinaryFromReader(message: ExportEvaluatedExamplesRequest, reader: jspb.BinaryReader): ExportEvaluatedExamplesRequest;
}

export namespace ExportEvaluatedExamplesRequest {
  export type AsObject = {
    name: string,
    outputConfig?: google_cloud_automl_v1beta1_io_pb.ExportEvaluatedExamplesOutputConfig.AsObject,
  }
}

export class GetModelEvaluationRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetModelEvaluationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetModelEvaluationRequest): GetModelEvaluationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetModelEvaluationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetModelEvaluationRequest;
  static deserializeBinaryFromReader(message: GetModelEvaluationRequest, reader: jspb.BinaryReader): GetModelEvaluationRequest;
}

export namespace GetModelEvaluationRequest {
  export type AsObject = {
    name: string,
  }
}

export class ListModelEvaluationsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getFilter(): string;
  setFilter(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListModelEvaluationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListModelEvaluationsRequest): ListModelEvaluationsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListModelEvaluationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListModelEvaluationsRequest;
  static deserializeBinaryFromReader(message: ListModelEvaluationsRequest, reader: jspb.BinaryReader): ListModelEvaluationsRequest;
}

export namespace ListModelEvaluationsRequest {
  export type AsObject = {
    parent: string,
    filter: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListModelEvaluationsResponse extends jspb.Message {
  clearModelEvaluationList(): void;
  getModelEvaluationList(): Array<google_cloud_automl_v1beta1_model_evaluation_pb.ModelEvaluation>;
  setModelEvaluationList(value: Array<google_cloud_automl_v1beta1_model_evaluation_pb.ModelEvaluation>): void;
  addModelEvaluation(value?: google_cloud_automl_v1beta1_model_evaluation_pb.ModelEvaluation, index?: number): google_cloud_automl_v1beta1_model_evaluation_pb.ModelEvaluation;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListModelEvaluationsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListModelEvaluationsResponse): ListModelEvaluationsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListModelEvaluationsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListModelEvaluationsResponse;
  static deserializeBinaryFromReader(message: ListModelEvaluationsResponse, reader: jspb.BinaryReader): ListModelEvaluationsResponse;
}

export namespace ListModelEvaluationsResponse {
  export type AsObject = {
    modelEvaluationList: Array<google_cloud_automl_v1beta1_model_evaluation_pb.ModelEvaluation.AsObject>,
    nextPageToken: string,
  }
}

