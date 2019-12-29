// package: google.cloud.datalabeling.v1beta1
// file: google/cloud/datalabeling/v1beta1/data_labeling_service.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";
import * as google_api_client_pb from "../../../../google/api/client_pb";
import * as google_cloud_datalabeling_v1beta1_annotation_pb from "../../../../google/cloud/datalabeling/v1beta1/annotation_pb";
import * as google_cloud_datalabeling_v1beta1_annotation_spec_set_pb from "../../../../google/cloud/datalabeling/v1beta1/annotation_spec_set_pb";
import * as google_cloud_datalabeling_v1beta1_dataset_pb from "../../../../google/cloud/datalabeling/v1beta1/dataset_pb";
import * as google_cloud_datalabeling_v1beta1_evaluation_pb from "../../../../google/cloud/datalabeling/v1beta1/evaluation_pb";
import * as google_cloud_datalabeling_v1beta1_evaluation_job_pb from "../../../../google/cloud/datalabeling/v1beta1/evaluation_job_pb";
import * as google_cloud_datalabeling_v1beta1_human_annotation_config_pb from "../../../../google/cloud/datalabeling/v1beta1/human_annotation_config_pb";
import * as google_cloud_datalabeling_v1beta1_instruction_pb from "../../../../google/cloud/datalabeling/v1beta1/instruction_pb";
import * as google_cloud_datalabeling_v1beta1_operations_pb from "../../../../google/cloud/datalabeling/v1beta1/operations_pb";
import * as google_longrunning_operations_pb from "../../../../google/longrunning/operations_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";

export class CreateDatasetRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  hasDataset(): boolean;
  clearDataset(): void;
  getDataset(): google_cloud_datalabeling_v1beta1_dataset_pb.Dataset | undefined;
  setDataset(value?: google_cloud_datalabeling_v1beta1_dataset_pb.Dataset): void;

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
    dataset?: google_cloud_datalabeling_v1beta1_dataset_pb.Dataset.AsObject,
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
  getDatasetsList(): Array<google_cloud_datalabeling_v1beta1_dataset_pb.Dataset>;
  setDatasetsList(value: Array<google_cloud_datalabeling_v1beta1_dataset_pb.Dataset>): void;
  addDatasets(value?: google_cloud_datalabeling_v1beta1_dataset_pb.Dataset, index?: number): google_cloud_datalabeling_v1beta1_dataset_pb.Dataset;

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
    datasetsList: Array<google_cloud_datalabeling_v1beta1_dataset_pb.Dataset.AsObject>,
    nextPageToken: string,
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
  getInputConfig(): google_cloud_datalabeling_v1beta1_dataset_pb.InputConfig | undefined;
  setInputConfig(value?: google_cloud_datalabeling_v1beta1_dataset_pb.InputConfig): void;

  getUserEmailAddress(): string;
  setUserEmailAddress(value: string): void;

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
    inputConfig?: google_cloud_datalabeling_v1beta1_dataset_pb.InputConfig.AsObject,
    userEmailAddress: string,
  }
}

export class ExportDataRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getAnnotatedDataset(): string;
  setAnnotatedDataset(value: string): void;

  getFilter(): string;
  setFilter(value: string): void;

  hasOutputConfig(): boolean;
  clearOutputConfig(): void;
  getOutputConfig(): google_cloud_datalabeling_v1beta1_dataset_pb.OutputConfig | undefined;
  setOutputConfig(value?: google_cloud_datalabeling_v1beta1_dataset_pb.OutputConfig): void;

  getUserEmailAddress(): string;
  setUserEmailAddress(value: string): void;

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
    annotatedDataset: string,
    filter: string,
    outputConfig?: google_cloud_datalabeling_v1beta1_dataset_pb.OutputConfig.AsObject,
    userEmailAddress: string,
  }
}

export class GetDataItemRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDataItemRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDataItemRequest): GetDataItemRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDataItemRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDataItemRequest;
  static deserializeBinaryFromReader(message: GetDataItemRequest, reader: jspb.BinaryReader): GetDataItemRequest;
}

export namespace GetDataItemRequest {
  export type AsObject = {
    name: string,
  }
}

export class ListDataItemsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getFilter(): string;
  setFilter(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDataItemsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListDataItemsRequest): ListDataItemsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListDataItemsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDataItemsRequest;
  static deserializeBinaryFromReader(message: ListDataItemsRequest, reader: jspb.BinaryReader): ListDataItemsRequest;
}

export namespace ListDataItemsRequest {
  export type AsObject = {
    parent: string,
    filter: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListDataItemsResponse extends jspb.Message {
  clearDataItemsList(): void;
  getDataItemsList(): Array<google_cloud_datalabeling_v1beta1_dataset_pb.DataItem>;
  setDataItemsList(value: Array<google_cloud_datalabeling_v1beta1_dataset_pb.DataItem>): void;
  addDataItems(value?: google_cloud_datalabeling_v1beta1_dataset_pb.DataItem, index?: number): google_cloud_datalabeling_v1beta1_dataset_pb.DataItem;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDataItemsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListDataItemsResponse): ListDataItemsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListDataItemsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDataItemsResponse;
  static deserializeBinaryFromReader(message: ListDataItemsResponse, reader: jspb.BinaryReader): ListDataItemsResponse;
}

export namespace ListDataItemsResponse {
  export type AsObject = {
    dataItemsList: Array<google_cloud_datalabeling_v1beta1_dataset_pb.DataItem.AsObject>,
    nextPageToken: string,
  }
}

export class GetAnnotatedDatasetRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAnnotatedDatasetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAnnotatedDatasetRequest): GetAnnotatedDatasetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAnnotatedDatasetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAnnotatedDatasetRequest;
  static deserializeBinaryFromReader(message: GetAnnotatedDatasetRequest, reader: jspb.BinaryReader): GetAnnotatedDatasetRequest;
}

export namespace GetAnnotatedDatasetRequest {
  export type AsObject = {
    name: string,
  }
}

export class ListAnnotatedDatasetsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getFilter(): string;
  setFilter(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAnnotatedDatasetsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListAnnotatedDatasetsRequest): ListAnnotatedDatasetsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAnnotatedDatasetsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAnnotatedDatasetsRequest;
  static deserializeBinaryFromReader(message: ListAnnotatedDatasetsRequest, reader: jspb.BinaryReader): ListAnnotatedDatasetsRequest;
}

export namespace ListAnnotatedDatasetsRequest {
  export type AsObject = {
    parent: string,
    filter: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListAnnotatedDatasetsResponse extends jspb.Message {
  clearAnnotatedDatasetsList(): void;
  getAnnotatedDatasetsList(): Array<google_cloud_datalabeling_v1beta1_dataset_pb.AnnotatedDataset>;
  setAnnotatedDatasetsList(value: Array<google_cloud_datalabeling_v1beta1_dataset_pb.AnnotatedDataset>): void;
  addAnnotatedDatasets(value?: google_cloud_datalabeling_v1beta1_dataset_pb.AnnotatedDataset, index?: number): google_cloud_datalabeling_v1beta1_dataset_pb.AnnotatedDataset;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAnnotatedDatasetsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListAnnotatedDatasetsResponse): ListAnnotatedDatasetsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAnnotatedDatasetsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAnnotatedDatasetsResponse;
  static deserializeBinaryFromReader(message: ListAnnotatedDatasetsResponse, reader: jspb.BinaryReader): ListAnnotatedDatasetsResponse;
}

export namespace ListAnnotatedDatasetsResponse {
  export type AsObject = {
    annotatedDatasetsList: Array<google_cloud_datalabeling_v1beta1_dataset_pb.AnnotatedDataset.AsObject>,
    nextPageToken: string,
  }
}

export class DeleteAnnotatedDatasetRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAnnotatedDatasetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAnnotatedDatasetRequest): DeleteAnnotatedDatasetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteAnnotatedDatasetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAnnotatedDatasetRequest;
  static deserializeBinaryFromReader(message: DeleteAnnotatedDatasetRequest, reader: jspb.BinaryReader): DeleteAnnotatedDatasetRequest;
}

export namespace DeleteAnnotatedDatasetRequest {
  export type AsObject = {
    name: string,
  }
}

export class LabelImageRequest extends jspb.Message {
  hasImageClassificationConfig(): boolean;
  clearImageClassificationConfig(): void;
  getImageClassificationConfig(): google_cloud_datalabeling_v1beta1_human_annotation_config_pb.ImageClassificationConfig | undefined;
  setImageClassificationConfig(value?: google_cloud_datalabeling_v1beta1_human_annotation_config_pb.ImageClassificationConfig): void;

  hasBoundingPolyConfig(): boolean;
  clearBoundingPolyConfig(): void;
  getBoundingPolyConfig(): google_cloud_datalabeling_v1beta1_human_annotation_config_pb.BoundingPolyConfig | undefined;
  setBoundingPolyConfig(value?: google_cloud_datalabeling_v1beta1_human_annotation_config_pb.BoundingPolyConfig): void;

  hasPolylineConfig(): boolean;
  clearPolylineConfig(): void;
  getPolylineConfig(): google_cloud_datalabeling_v1beta1_human_annotation_config_pb.PolylineConfig | undefined;
  setPolylineConfig(value?: google_cloud_datalabeling_v1beta1_human_annotation_config_pb.PolylineConfig): void;

  hasSegmentationConfig(): boolean;
  clearSegmentationConfig(): void;
  getSegmentationConfig(): google_cloud_datalabeling_v1beta1_human_annotation_config_pb.SegmentationConfig | undefined;
  setSegmentationConfig(value?: google_cloud_datalabeling_v1beta1_human_annotation_config_pb.SegmentationConfig): void;

  getParent(): string;
  setParent(value: string): void;

  hasBasicConfig(): boolean;
  clearBasicConfig(): void;
  getBasicConfig(): google_cloud_datalabeling_v1beta1_human_annotation_config_pb.HumanAnnotationConfig | undefined;
  setBasicConfig(value?: google_cloud_datalabeling_v1beta1_human_annotation_config_pb.HumanAnnotationConfig): void;

  getFeature(): LabelImageRequest.FeatureMap[keyof LabelImageRequest.FeatureMap];
  setFeature(value: LabelImageRequest.FeatureMap[keyof LabelImageRequest.FeatureMap]): void;

  getRequestConfigCase(): LabelImageRequest.RequestConfigCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LabelImageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LabelImageRequest): LabelImageRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LabelImageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LabelImageRequest;
  static deserializeBinaryFromReader(message: LabelImageRequest, reader: jspb.BinaryReader): LabelImageRequest;
}

export namespace LabelImageRequest {
  export type AsObject = {
    imageClassificationConfig?: google_cloud_datalabeling_v1beta1_human_annotation_config_pb.ImageClassificationConfig.AsObject,
    boundingPolyConfig?: google_cloud_datalabeling_v1beta1_human_annotation_config_pb.BoundingPolyConfig.AsObject,
    polylineConfig?: google_cloud_datalabeling_v1beta1_human_annotation_config_pb.PolylineConfig.AsObject,
    segmentationConfig?: google_cloud_datalabeling_v1beta1_human_annotation_config_pb.SegmentationConfig.AsObject,
    parent: string,
    basicConfig?: google_cloud_datalabeling_v1beta1_human_annotation_config_pb.HumanAnnotationConfig.AsObject,
    feature: LabelImageRequest.FeatureMap[keyof LabelImageRequest.FeatureMap],
  }

  export interface FeatureMap {
    FEATURE_UNSPECIFIED: 0;
    CLASSIFICATION: 1;
    BOUNDING_BOX: 2;
    ORIENTED_BOUNDING_BOX: 6;
    BOUNDING_POLY: 3;
    POLYLINE: 4;
    SEGMENTATION: 5;
  }

  export const Feature: FeatureMap;

  export enum RequestConfigCase {
    REQUEST_CONFIG_NOT_SET = 0,
    IMAGE_CLASSIFICATION_CONFIG = 4,
    BOUNDING_POLY_CONFIG = 5,
    POLYLINE_CONFIG = 6,
    SEGMENTATION_CONFIG = 7,
  }
}

export class LabelVideoRequest extends jspb.Message {
  hasVideoClassificationConfig(): boolean;
  clearVideoClassificationConfig(): void;
  getVideoClassificationConfig(): google_cloud_datalabeling_v1beta1_human_annotation_config_pb.VideoClassificationConfig | undefined;
  setVideoClassificationConfig(value?: google_cloud_datalabeling_v1beta1_human_annotation_config_pb.VideoClassificationConfig): void;

  hasObjectDetectionConfig(): boolean;
  clearObjectDetectionConfig(): void;
  getObjectDetectionConfig(): google_cloud_datalabeling_v1beta1_human_annotation_config_pb.ObjectDetectionConfig | undefined;
  setObjectDetectionConfig(value?: google_cloud_datalabeling_v1beta1_human_annotation_config_pb.ObjectDetectionConfig): void;

  hasObjectTrackingConfig(): boolean;
  clearObjectTrackingConfig(): void;
  getObjectTrackingConfig(): google_cloud_datalabeling_v1beta1_human_annotation_config_pb.ObjectTrackingConfig | undefined;
  setObjectTrackingConfig(value?: google_cloud_datalabeling_v1beta1_human_annotation_config_pb.ObjectTrackingConfig): void;

  hasEventConfig(): boolean;
  clearEventConfig(): void;
  getEventConfig(): google_cloud_datalabeling_v1beta1_human_annotation_config_pb.EventConfig | undefined;
  setEventConfig(value?: google_cloud_datalabeling_v1beta1_human_annotation_config_pb.EventConfig): void;

  getParent(): string;
  setParent(value: string): void;

  hasBasicConfig(): boolean;
  clearBasicConfig(): void;
  getBasicConfig(): google_cloud_datalabeling_v1beta1_human_annotation_config_pb.HumanAnnotationConfig | undefined;
  setBasicConfig(value?: google_cloud_datalabeling_v1beta1_human_annotation_config_pb.HumanAnnotationConfig): void;

  getFeature(): LabelVideoRequest.FeatureMap[keyof LabelVideoRequest.FeatureMap];
  setFeature(value: LabelVideoRequest.FeatureMap[keyof LabelVideoRequest.FeatureMap]): void;

  getRequestConfigCase(): LabelVideoRequest.RequestConfigCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LabelVideoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LabelVideoRequest): LabelVideoRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LabelVideoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LabelVideoRequest;
  static deserializeBinaryFromReader(message: LabelVideoRequest, reader: jspb.BinaryReader): LabelVideoRequest;
}

export namespace LabelVideoRequest {
  export type AsObject = {
    videoClassificationConfig?: google_cloud_datalabeling_v1beta1_human_annotation_config_pb.VideoClassificationConfig.AsObject,
    objectDetectionConfig?: google_cloud_datalabeling_v1beta1_human_annotation_config_pb.ObjectDetectionConfig.AsObject,
    objectTrackingConfig?: google_cloud_datalabeling_v1beta1_human_annotation_config_pb.ObjectTrackingConfig.AsObject,
    eventConfig?: google_cloud_datalabeling_v1beta1_human_annotation_config_pb.EventConfig.AsObject,
    parent: string,
    basicConfig?: google_cloud_datalabeling_v1beta1_human_annotation_config_pb.HumanAnnotationConfig.AsObject,
    feature: LabelVideoRequest.FeatureMap[keyof LabelVideoRequest.FeatureMap],
  }

  export interface FeatureMap {
    FEATURE_UNSPECIFIED: 0;
    CLASSIFICATION: 1;
    OBJECT_DETECTION: 2;
    OBJECT_TRACKING: 3;
    EVENT: 4;
  }

  export const Feature: FeatureMap;

  export enum RequestConfigCase {
    REQUEST_CONFIG_NOT_SET = 0,
    VIDEO_CLASSIFICATION_CONFIG = 4,
    OBJECT_DETECTION_CONFIG = 5,
    OBJECT_TRACKING_CONFIG = 6,
    EVENT_CONFIG = 7,
  }
}

export class LabelTextRequest extends jspb.Message {
  hasTextClassificationConfig(): boolean;
  clearTextClassificationConfig(): void;
  getTextClassificationConfig(): google_cloud_datalabeling_v1beta1_human_annotation_config_pb.TextClassificationConfig | undefined;
  setTextClassificationConfig(value?: google_cloud_datalabeling_v1beta1_human_annotation_config_pb.TextClassificationConfig): void;

  hasTextEntityExtractionConfig(): boolean;
  clearTextEntityExtractionConfig(): void;
  getTextEntityExtractionConfig(): google_cloud_datalabeling_v1beta1_human_annotation_config_pb.TextEntityExtractionConfig | undefined;
  setTextEntityExtractionConfig(value?: google_cloud_datalabeling_v1beta1_human_annotation_config_pb.TextEntityExtractionConfig): void;

  getParent(): string;
  setParent(value: string): void;

  hasBasicConfig(): boolean;
  clearBasicConfig(): void;
  getBasicConfig(): google_cloud_datalabeling_v1beta1_human_annotation_config_pb.HumanAnnotationConfig | undefined;
  setBasicConfig(value?: google_cloud_datalabeling_v1beta1_human_annotation_config_pb.HumanAnnotationConfig): void;

  getFeature(): LabelTextRequest.FeatureMap[keyof LabelTextRequest.FeatureMap];
  setFeature(value: LabelTextRequest.FeatureMap[keyof LabelTextRequest.FeatureMap]): void;

  getRequestConfigCase(): LabelTextRequest.RequestConfigCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LabelTextRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LabelTextRequest): LabelTextRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LabelTextRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LabelTextRequest;
  static deserializeBinaryFromReader(message: LabelTextRequest, reader: jspb.BinaryReader): LabelTextRequest;
}

export namespace LabelTextRequest {
  export type AsObject = {
    textClassificationConfig?: google_cloud_datalabeling_v1beta1_human_annotation_config_pb.TextClassificationConfig.AsObject,
    textEntityExtractionConfig?: google_cloud_datalabeling_v1beta1_human_annotation_config_pb.TextEntityExtractionConfig.AsObject,
    parent: string,
    basicConfig?: google_cloud_datalabeling_v1beta1_human_annotation_config_pb.HumanAnnotationConfig.AsObject,
    feature: LabelTextRequest.FeatureMap[keyof LabelTextRequest.FeatureMap],
  }

  export interface FeatureMap {
    FEATURE_UNSPECIFIED: 0;
    TEXT_CLASSIFICATION: 1;
    TEXT_ENTITY_EXTRACTION: 2;
  }

  export const Feature: FeatureMap;

  export enum RequestConfigCase {
    REQUEST_CONFIG_NOT_SET = 0,
    TEXT_CLASSIFICATION_CONFIG = 4,
    TEXT_ENTITY_EXTRACTION_CONFIG = 5,
  }
}

export class GetExampleRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getFilter(): string;
  setFilter(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetExampleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetExampleRequest): GetExampleRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetExampleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetExampleRequest;
  static deserializeBinaryFromReader(message: GetExampleRequest, reader: jspb.BinaryReader): GetExampleRequest;
}

export namespace GetExampleRequest {
  export type AsObject = {
    name: string,
    filter: string,
  }
}

export class ListExamplesRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getFilter(): string;
  setFilter(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListExamplesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListExamplesRequest): ListExamplesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListExamplesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListExamplesRequest;
  static deserializeBinaryFromReader(message: ListExamplesRequest, reader: jspb.BinaryReader): ListExamplesRequest;
}

export namespace ListExamplesRequest {
  export type AsObject = {
    parent: string,
    filter: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListExamplesResponse extends jspb.Message {
  clearExamplesList(): void;
  getExamplesList(): Array<google_cloud_datalabeling_v1beta1_dataset_pb.Example>;
  setExamplesList(value: Array<google_cloud_datalabeling_v1beta1_dataset_pb.Example>): void;
  addExamples(value?: google_cloud_datalabeling_v1beta1_dataset_pb.Example, index?: number): google_cloud_datalabeling_v1beta1_dataset_pb.Example;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListExamplesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListExamplesResponse): ListExamplesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListExamplesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListExamplesResponse;
  static deserializeBinaryFromReader(message: ListExamplesResponse, reader: jspb.BinaryReader): ListExamplesResponse;
}

export namespace ListExamplesResponse {
  export type AsObject = {
    examplesList: Array<google_cloud_datalabeling_v1beta1_dataset_pb.Example.AsObject>,
    nextPageToken: string,
  }
}

export class CreateAnnotationSpecSetRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  hasAnnotationSpecSet(): boolean;
  clearAnnotationSpecSet(): void;
  getAnnotationSpecSet(): google_cloud_datalabeling_v1beta1_annotation_spec_set_pb.AnnotationSpecSet | undefined;
  setAnnotationSpecSet(value?: google_cloud_datalabeling_v1beta1_annotation_spec_set_pb.AnnotationSpecSet): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAnnotationSpecSetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAnnotationSpecSetRequest): CreateAnnotationSpecSetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateAnnotationSpecSetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAnnotationSpecSetRequest;
  static deserializeBinaryFromReader(message: CreateAnnotationSpecSetRequest, reader: jspb.BinaryReader): CreateAnnotationSpecSetRequest;
}

export namespace CreateAnnotationSpecSetRequest {
  export type AsObject = {
    parent: string,
    annotationSpecSet?: google_cloud_datalabeling_v1beta1_annotation_spec_set_pb.AnnotationSpecSet.AsObject,
  }
}

export class GetAnnotationSpecSetRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAnnotationSpecSetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAnnotationSpecSetRequest): GetAnnotationSpecSetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAnnotationSpecSetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAnnotationSpecSetRequest;
  static deserializeBinaryFromReader(message: GetAnnotationSpecSetRequest, reader: jspb.BinaryReader): GetAnnotationSpecSetRequest;
}

export namespace GetAnnotationSpecSetRequest {
  export type AsObject = {
    name: string,
  }
}

export class ListAnnotationSpecSetsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getFilter(): string;
  setFilter(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAnnotationSpecSetsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListAnnotationSpecSetsRequest): ListAnnotationSpecSetsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAnnotationSpecSetsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAnnotationSpecSetsRequest;
  static deserializeBinaryFromReader(message: ListAnnotationSpecSetsRequest, reader: jspb.BinaryReader): ListAnnotationSpecSetsRequest;
}

export namespace ListAnnotationSpecSetsRequest {
  export type AsObject = {
    parent: string,
    filter: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListAnnotationSpecSetsResponse extends jspb.Message {
  clearAnnotationSpecSetsList(): void;
  getAnnotationSpecSetsList(): Array<google_cloud_datalabeling_v1beta1_annotation_spec_set_pb.AnnotationSpecSet>;
  setAnnotationSpecSetsList(value: Array<google_cloud_datalabeling_v1beta1_annotation_spec_set_pb.AnnotationSpecSet>): void;
  addAnnotationSpecSets(value?: google_cloud_datalabeling_v1beta1_annotation_spec_set_pb.AnnotationSpecSet, index?: number): google_cloud_datalabeling_v1beta1_annotation_spec_set_pb.AnnotationSpecSet;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAnnotationSpecSetsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListAnnotationSpecSetsResponse): ListAnnotationSpecSetsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAnnotationSpecSetsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAnnotationSpecSetsResponse;
  static deserializeBinaryFromReader(message: ListAnnotationSpecSetsResponse, reader: jspb.BinaryReader): ListAnnotationSpecSetsResponse;
}

export namespace ListAnnotationSpecSetsResponse {
  export type AsObject = {
    annotationSpecSetsList: Array<google_cloud_datalabeling_v1beta1_annotation_spec_set_pb.AnnotationSpecSet.AsObject>,
    nextPageToken: string,
  }
}

export class DeleteAnnotationSpecSetRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAnnotationSpecSetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAnnotationSpecSetRequest): DeleteAnnotationSpecSetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteAnnotationSpecSetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAnnotationSpecSetRequest;
  static deserializeBinaryFromReader(message: DeleteAnnotationSpecSetRequest, reader: jspb.BinaryReader): DeleteAnnotationSpecSetRequest;
}

export namespace DeleteAnnotationSpecSetRequest {
  export type AsObject = {
    name: string,
  }
}

export class CreateInstructionRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  hasInstruction(): boolean;
  clearInstruction(): void;
  getInstruction(): google_cloud_datalabeling_v1beta1_instruction_pb.Instruction | undefined;
  setInstruction(value?: google_cloud_datalabeling_v1beta1_instruction_pb.Instruction): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateInstructionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateInstructionRequest): CreateInstructionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateInstructionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateInstructionRequest;
  static deserializeBinaryFromReader(message: CreateInstructionRequest, reader: jspb.BinaryReader): CreateInstructionRequest;
}

export namespace CreateInstructionRequest {
  export type AsObject = {
    parent: string,
    instruction?: google_cloud_datalabeling_v1beta1_instruction_pb.Instruction.AsObject,
  }
}

export class GetInstructionRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetInstructionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetInstructionRequest): GetInstructionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetInstructionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetInstructionRequest;
  static deserializeBinaryFromReader(message: GetInstructionRequest, reader: jspb.BinaryReader): GetInstructionRequest;
}

export namespace GetInstructionRequest {
  export type AsObject = {
    name: string,
  }
}

export class DeleteInstructionRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteInstructionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteInstructionRequest): DeleteInstructionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteInstructionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteInstructionRequest;
  static deserializeBinaryFromReader(message: DeleteInstructionRequest, reader: jspb.BinaryReader): DeleteInstructionRequest;
}

export namespace DeleteInstructionRequest {
  export type AsObject = {
    name: string,
  }
}

export class ListInstructionsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getFilter(): string;
  setFilter(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListInstructionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListInstructionsRequest): ListInstructionsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListInstructionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListInstructionsRequest;
  static deserializeBinaryFromReader(message: ListInstructionsRequest, reader: jspb.BinaryReader): ListInstructionsRequest;
}

export namespace ListInstructionsRequest {
  export type AsObject = {
    parent: string,
    filter: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListInstructionsResponse extends jspb.Message {
  clearInstructionsList(): void;
  getInstructionsList(): Array<google_cloud_datalabeling_v1beta1_instruction_pb.Instruction>;
  setInstructionsList(value: Array<google_cloud_datalabeling_v1beta1_instruction_pb.Instruction>): void;
  addInstructions(value?: google_cloud_datalabeling_v1beta1_instruction_pb.Instruction, index?: number): google_cloud_datalabeling_v1beta1_instruction_pb.Instruction;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListInstructionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListInstructionsResponse): ListInstructionsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListInstructionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListInstructionsResponse;
  static deserializeBinaryFromReader(message: ListInstructionsResponse, reader: jspb.BinaryReader): ListInstructionsResponse;
}

export namespace ListInstructionsResponse {
  export type AsObject = {
    instructionsList: Array<google_cloud_datalabeling_v1beta1_instruction_pb.Instruction.AsObject>,
    nextPageToken: string,
  }
}

export class GetEvaluationRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEvaluationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetEvaluationRequest): GetEvaluationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetEvaluationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEvaluationRequest;
  static deserializeBinaryFromReader(message: GetEvaluationRequest, reader: jspb.BinaryReader): GetEvaluationRequest;
}

export namespace GetEvaluationRequest {
  export type AsObject = {
    name: string,
  }
}

export class SearchEvaluationsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getFilter(): string;
  setFilter(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchEvaluationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SearchEvaluationsRequest): SearchEvaluationsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchEvaluationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchEvaluationsRequest;
  static deserializeBinaryFromReader(message: SearchEvaluationsRequest, reader: jspb.BinaryReader): SearchEvaluationsRequest;
}

export namespace SearchEvaluationsRequest {
  export type AsObject = {
    parent: string,
    filter: string,
    pageSize: number,
    pageToken: string,
  }
}

export class SearchEvaluationsResponse extends jspb.Message {
  clearEvaluationsList(): void;
  getEvaluationsList(): Array<google_cloud_datalabeling_v1beta1_evaluation_pb.Evaluation>;
  setEvaluationsList(value: Array<google_cloud_datalabeling_v1beta1_evaluation_pb.Evaluation>): void;
  addEvaluations(value?: google_cloud_datalabeling_v1beta1_evaluation_pb.Evaluation, index?: number): google_cloud_datalabeling_v1beta1_evaluation_pb.Evaluation;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchEvaluationsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SearchEvaluationsResponse): SearchEvaluationsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchEvaluationsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchEvaluationsResponse;
  static deserializeBinaryFromReader(message: SearchEvaluationsResponse, reader: jspb.BinaryReader): SearchEvaluationsResponse;
}

export namespace SearchEvaluationsResponse {
  export type AsObject = {
    evaluationsList: Array<google_cloud_datalabeling_v1beta1_evaluation_pb.Evaluation.AsObject>,
    nextPageToken: string,
  }
}

export class SearchExampleComparisonsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchExampleComparisonsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SearchExampleComparisonsRequest): SearchExampleComparisonsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchExampleComparisonsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchExampleComparisonsRequest;
  static deserializeBinaryFromReader(message: SearchExampleComparisonsRequest, reader: jspb.BinaryReader): SearchExampleComparisonsRequest;
}

export namespace SearchExampleComparisonsRequest {
  export type AsObject = {
    parent: string,
    pageSize: number,
    pageToken: string,
  }
}

export class SearchExampleComparisonsResponse extends jspb.Message {
  clearExampleComparisonsList(): void;
  getExampleComparisonsList(): Array<SearchExampleComparisonsResponse.ExampleComparison>;
  setExampleComparisonsList(value: Array<SearchExampleComparisonsResponse.ExampleComparison>): void;
  addExampleComparisons(value?: SearchExampleComparisonsResponse.ExampleComparison, index?: number): SearchExampleComparisonsResponse.ExampleComparison;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchExampleComparisonsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SearchExampleComparisonsResponse): SearchExampleComparisonsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchExampleComparisonsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchExampleComparisonsResponse;
  static deserializeBinaryFromReader(message: SearchExampleComparisonsResponse, reader: jspb.BinaryReader): SearchExampleComparisonsResponse;
}

export namespace SearchExampleComparisonsResponse {
  export type AsObject = {
    exampleComparisonsList: Array<SearchExampleComparisonsResponse.ExampleComparison.AsObject>,
    nextPageToken: string,
  }

  export class ExampleComparison extends jspb.Message {
    hasGroundTruthExample(): boolean;
    clearGroundTruthExample(): void;
    getGroundTruthExample(): google_cloud_datalabeling_v1beta1_dataset_pb.Example | undefined;
    setGroundTruthExample(value?: google_cloud_datalabeling_v1beta1_dataset_pb.Example): void;

    clearModelCreatedExamplesList(): void;
    getModelCreatedExamplesList(): Array<google_cloud_datalabeling_v1beta1_dataset_pb.Example>;
    setModelCreatedExamplesList(value: Array<google_cloud_datalabeling_v1beta1_dataset_pb.Example>): void;
    addModelCreatedExamples(value?: google_cloud_datalabeling_v1beta1_dataset_pb.Example, index?: number): google_cloud_datalabeling_v1beta1_dataset_pb.Example;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExampleComparison.AsObject;
    static toObject(includeInstance: boolean, msg: ExampleComparison): ExampleComparison.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExampleComparison, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExampleComparison;
    static deserializeBinaryFromReader(message: ExampleComparison, reader: jspb.BinaryReader): ExampleComparison;
  }

  export namespace ExampleComparison {
    export type AsObject = {
      groundTruthExample?: google_cloud_datalabeling_v1beta1_dataset_pb.Example.AsObject,
      modelCreatedExamplesList: Array<google_cloud_datalabeling_v1beta1_dataset_pb.Example.AsObject>,
    }
  }
}

export class CreateEvaluationJobRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  hasJob(): boolean;
  clearJob(): void;
  getJob(): google_cloud_datalabeling_v1beta1_evaluation_job_pb.EvaluationJob | undefined;
  setJob(value?: google_cloud_datalabeling_v1beta1_evaluation_job_pb.EvaluationJob): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateEvaluationJobRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateEvaluationJobRequest): CreateEvaluationJobRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateEvaluationJobRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateEvaluationJobRequest;
  static deserializeBinaryFromReader(message: CreateEvaluationJobRequest, reader: jspb.BinaryReader): CreateEvaluationJobRequest;
}

export namespace CreateEvaluationJobRequest {
  export type AsObject = {
    parent: string,
    job?: google_cloud_datalabeling_v1beta1_evaluation_job_pb.EvaluationJob.AsObject,
  }
}

export class UpdateEvaluationJobRequest extends jspb.Message {
  hasEvaluationJob(): boolean;
  clearEvaluationJob(): void;
  getEvaluationJob(): google_cloud_datalabeling_v1beta1_evaluation_job_pb.EvaluationJob | undefined;
  setEvaluationJob(value?: google_cloud_datalabeling_v1beta1_evaluation_job_pb.EvaluationJob): void;

  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateEvaluationJobRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateEvaluationJobRequest): UpdateEvaluationJobRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateEvaluationJobRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateEvaluationJobRequest;
  static deserializeBinaryFromReader(message: UpdateEvaluationJobRequest, reader: jspb.BinaryReader): UpdateEvaluationJobRequest;
}

export namespace UpdateEvaluationJobRequest {
  export type AsObject = {
    evaluationJob?: google_cloud_datalabeling_v1beta1_evaluation_job_pb.EvaluationJob.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class GetEvaluationJobRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEvaluationJobRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetEvaluationJobRequest): GetEvaluationJobRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetEvaluationJobRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEvaluationJobRequest;
  static deserializeBinaryFromReader(message: GetEvaluationJobRequest, reader: jspb.BinaryReader): GetEvaluationJobRequest;
}

export namespace GetEvaluationJobRequest {
  export type AsObject = {
    name: string,
  }
}

export class PauseEvaluationJobRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PauseEvaluationJobRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PauseEvaluationJobRequest): PauseEvaluationJobRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PauseEvaluationJobRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PauseEvaluationJobRequest;
  static deserializeBinaryFromReader(message: PauseEvaluationJobRequest, reader: jspb.BinaryReader): PauseEvaluationJobRequest;
}

export namespace PauseEvaluationJobRequest {
  export type AsObject = {
    name: string,
  }
}

export class ResumeEvaluationJobRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResumeEvaluationJobRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ResumeEvaluationJobRequest): ResumeEvaluationJobRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResumeEvaluationJobRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResumeEvaluationJobRequest;
  static deserializeBinaryFromReader(message: ResumeEvaluationJobRequest, reader: jspb.BinaryReader): ResumeEvaluationJobRequest;
}

export namespace ResumeEvaluationJobRequest {
  export type AsObject = {
    name: string,
  }
}

export class DeleteEvaluationJobRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteEvaluationJobRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteEvaluationJobRequest): DeleteEvaluationJobRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteEvaluationJobRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteEvaluationJobRequest;
  static deserializeBinaryFromReader(message: DeleteEvaluationJobRequest, reader: jspb.BinaryReader): DeleteEvaluationJobRequest;
}

export namespace DeleteEvaluationJobRequest {
  export type AsObject = {
    name: string,
  }
}

export class ListEvaluationJobsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getFilter(): string;
  setFilter(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListEvaluationJobsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListEvaluationJobsRequest): ListEvaluationJobsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListEvaluationJobsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListEvaluationJobsRequest;
  static deserializeBinaryFromReader(message: ListEvaluationJobsRequest, reader: jspb.BinaryReader): ListEvaluationJobsRequest;
}

export namespace ListEvaluationJobsRequest {
  export type AsObject = {
    parent: string,
    filter: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListEvaluationJobsResponse extends jspb.Message {
  clearEvaluationJobsList(): void;
  getEvaluationJobsList(): Array<google_cloud_datalabeling_v1beta1_evaluation_job_pb.EvaluationJob>;
  setEvaluationJobsList(value: Array<google_cloud_datalabeling_v1beta1_evaluation_job_pb.EvaluationJob>): void;
  addEvaluationJobs(value?: google_cloud_datalabeling_v1beta1_evaluation_job_pb.EvaluationJob, index?: number): google_cloud_datalabeling_v1beta1_evaluation_job_pb.EvaluationJob;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListEvaluationJobsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListEvaluationJobsResponse): ListEvaluationJobsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListEvaluationJobsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListEvaluationJobsResponse;
  static deserializeBinaryFromReader(message: ListEvaluationJobsResponse, reader: jspb.BinaryReader): ListEvaluationJobsResponse;
}

export namespace ListEvaluationJobsResponse {
  export type AsObject = {
    evaluationJobsList: Array<google_cloud_datalabeling_v1beta1_evaluation_job_pb.EvaluationJob.AsObject>,
    nextPageToken: string,
  }
}

