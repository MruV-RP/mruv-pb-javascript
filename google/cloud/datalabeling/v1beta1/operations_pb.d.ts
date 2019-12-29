// package: google.cloud.datalabeling.v1beta1
// file: google/cloud/datalabeling/v1beta1/operations.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";
import * as google_cloud_datalabeling_v1beta1_dataset_pb from "../../../../google/cloud/datalabeling/v1beta1/dataset_pb";
import * as google_cloud_datalabeling_v1beta1_human_annotation_config_pb from "../../../../google/cloud/datalabeling/v1beta1/human_annotation_config_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_rpc_status_pb from "../../../../google/rpc/status_pb";

export class ImportDataOperationResponse extends jspb.Message {
  getDataset(): string;
  setDataset(value: string): void;

  getTotalCount(): number;
  setTotalCount(value: number): void;

  getImportCount(): number;
  setImportCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImportDataOperationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ImportDataOperationResponse): ImportDataOperationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ImportDataOperationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImportDataOperationResponse;
  static deserializeBinaryFromReader(message: ImportDataOperationResponse, reader: jspb.BinaryReader): ImportDataOperationResponse;
}

export namespace ImportDataOperationResponse {
  export type AsObject = {
    dataset: string,
    totalCount: number,
    importCount: number,
  }
}

export class ExportDataOperationResponse extends jspb.Message {
  getDataset(): string;
  setDataset(value: string): void;

  getTotalCount(): number;
  setTotalCount(value: number): void;

  getExportCount(): number;
  setExportCount(value: number): void;

  hasLabelStats(): boolean;
  clearLabelStats(): void;
  getLabelStats(): google_cloud_datalabeling_v1beta1_dataset_pb.LabelStats | undefined;
  setLabelStats(value?: google_cloud_datalabeling_v1beta1_dataset_pb.LabelStats): void;

  hasOutputConfig(): boolean;
  clearOutputConfig(): void;
  getOutputConfig(): google_cloud_datalabeling_v1beta1_dataset_pb.OutputConfig | undefined;
  setOutputConfig(value?: google_cloud_datalabeling_v1beta1_dataset_pb.OutputConfig): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExportDataOperationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ExportDataOperationResponse): ExportDataOperationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExportDataOperationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExportDataOperationResponse;
  static deserializeBinaryFromReader(message: ExportDataOperationResponse, reader: jspb.BinaryReader): ExportDataOperationResponse;
}

export namespace ExportDataOperationResponse {
  export type AsObject = {
    dataset: string,
    totalCount: number,
    exportCount: number,
    labelStats?: google_cloud_datalabeling_v1beta1_dataset_pb.LabelStats.AsObject,
    outputConfig?: google_cloud_datalabeling_v1beta1_dataset_pb.OutputConfig.AsObject,
  }
}

export class ImportDataOperationMetadata extends jspb.Message {
  getDataset(): string;
  setDataset(value: string): void;

  clearPartialFailuresList(): void;
  getPartialFailuresList(): Array<google_rpc_status_pb.Status>;
  setPartialFailuresList(value: Array<google_rpc_status_pb.Status>): void;
  addPartialFailures(value?: google_rpc_status_pb.Status, index?: number): google_rpc_status_pb.Status;

  hasCreateTime(): boolean;
  clearCreateTime(): void;
  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImportDataOperationMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: ImportDataOperationMetadata): ImportDataOperationMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ImportDataOperationMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImportDataOperationMetadata;
  static deserializeBinaryFromReader(message: ImportDataOperationMetadata, reader: jspb.BinaryReader): ImportDataOperationMetadata;
}

export namespace ImportDataOperationMetadata {
  export type AsObject = {
    dataset: string,
    partialFailuresList: Array<google_rpc_status_pb.Status.AsObject>,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class ExportDataOperationMetadata extends jspb.Message {
  getDataset(): string;
  setDataset(value: string): void;

  clearPartialFailuresList(): void;
  getPartialFailuresList(): Array<google_rpc_status_pb.Status>;
  setPartialFailuresList(value: Array<google_rpc_status_pb.Status>): void;
  addPartialFailures(value?: google_rpc_status_pb.Status, index?: number): google_rpc_status_pb.Status;

  hasCreateTime(): boolean;
  clearCreateTime(): void;
  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExportDataOperationMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: ExportDataOperationMetadata): ExportDataOperationMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExportDataOperationMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExportDataOperationMetadata;
  static deserializeBinaryFromReader(message: ExportDataOperationMetadata, reader: jspb.BinaryReader): ExportDataOperationMetadata;
}

export namespace ExportDataOperationMetadata {
  export type AsObject = {
    dataset: string,
    partialFailuresList: Array<google_rpc_status_pb.Status.AsObject>,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class LabelOperationMetadata extends jspb.Message {
  hasImageClassificationDetails(): boolean;
  clearImageClassificationDetails(): void;
  getImageClassificationDetails(): LabelImageClassificationOperationMetadata | undefined;
  setImageClassificationDetails(value?: LabelImageClassificationOperationMetadata): void;

  hasImageBoundingBoxDetails(): boolean;
  clearImageBoundingBoxDetails(): void;
  getImageBoundingBoxDetails(): LabelImageBoundingBoxOperationMetadata | undefined;
  setImageBoundingBoxDetails(value?: LabelImageBoundingBoxOperationMetadata): void;

  hasImageBoundingPolyDetails(): boolean;
  clearImageBoundingPolyDetails(): void;
  getImageBoundingPolyDetails(): LabelImageBoundingPolyOperationMetadata | undefined;
  setImageBoundingPolyDetails(value?: LabelImageBoundingPolyOperationMetadata): void;

  hasImageOrientedBoundingBoxDetails(): boolean;
  clearImageOrientedBoundingBoxDetails(): void;
  getImageOrientedBoundingBoxDetails(): LabelImageOrientedBoundingBoxOperationMetadata | undefined;
  setImageOrientedBoundingBoxDetails(value?: LabelImageOrientedBoundingBoxOperationMetadata): void;

  hasImagePolylineDetails(): boolean;
  clearImagePolylineDetails(): void;
  getImagePolylineDetails(): LabelImagePolylineOperationMetadata | undefined;
  setImagePolylineDetails(value?: LabelImagePolylineOperationMetadata): void;

  hasImageSegmentationDetails(): boolean;
  clearImageSegmentationDetails(): void;
  getImageSegmentationDetails(): LabelImageSegmentationOperationMetadata | undefined;
  setImageSegmentationDetails(value?: LabelImageSegmentationOperationMetadata): void;

  hasVideoClassificationDetails(): boolean;
  clearVideoClassificationDetails(): void;
  getVideoClassificationDetails(): LabelVideoClassificationOperationMetadata | undefined;
  setVideoClassificationDetails(value?: LabelVideoClassificationOperationMetadata): void;

  hasVideoObjectDetectionDetails(): boolean;
  clearVideoObjectDetectionDetails(): void;
  getVideoObjectDetectionDetails(): LabelVideoObjectDetectionOperationMetadata | undefined;
  setVideoObjectDetectionDetails(value?: LabelVideoObjectDetectionOperationMetadata): void;

  hasVideoObjectTrackingDetails(): boolean;
  clearVideoObjectTrackingDetails(): void;
  getVideoObjectTrackingDetails(): LabelVideoObjectTrackingOperationMetadata | undefined;
  setVideoObjectTrackingDetails(value?: LabelVideoObjectTrackingOperationMetadata): void;

  hasVideoEventDetails(): boolean;
  clearVideoEventDetails(): void;
  getVideoEventDetails(): LabelVideoEventOperationMetadata | undefined;
  setVideoEventDetails(value?: LabelVideoEventOperationMetadata): void;

  hasTextClassificationDetails(): boolean;
  clearTextClassificationDetails(): void;
  getTextClassificationDetails(): LabelTextClassificationOperationMetadata | undefined;
  setTextClassificationDetails(value?: LabelTextClassificationOperationMetadata): void;

  hasTextEntityExtractionDetails(): boolean;
  clearTextEntityExtractionDetails(): void;
  getTextEntityExtractionDetails(): LabelTextEntityExtractionOperationMetadata | undefined;
  setTextEntityExtractionDetails(value?: LabelTextEntityExtractionOperationMetadata): void;

  getProgressPercent(): number;
  setProgressPercent(value: number): void;

  clearPartialFailuresList(): void;
  getPartialFailuresList(): Array<google_rpc_status_pb.Status>;
  setPartialFailuresList(value: Array<google_rpc_status_pb.Status>): void;
  addPartialFailures(value?: google_rpc_status_pb.Status, index?: number): google_rpc_status_pb.Status;

  hasCreateTime(): boolean;
  clearCreateTime(): void;
  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getDetailsCase(): LabelOperationMetadata.DetailsCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LabelOperationMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: LabelOperationMetadata): LabelOperationMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LabelOperationMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LabelOperationMetadata;
  static deserializeBinaryFromReader(message: LabelOperationMetadata, reader: jspb.BinaryReader): LabelOperationMetadata;
}

export namespace LabelOperationMetadata {
  export type AsObject = {
    imageClassificationDetails?: LabelImageClassificationOperationMetadata.AsObject,
    imageBoundingBoxDetails?: LabelImageBoundingBoxOperationMetadata.AsObject,
    imageBoundingPolyDetails?: LabelImageBoundingPolyOperationMetadata.AsObject,
    imageOrientedBoundingBoxDetails?: LabelImageOrientedBoundingBoxOperationMetadata.AsObject,
    imagePolylineDetails?: LabelImagePolylineOperationMetadata.AsObject,
    imageSegmentationDetails?: LabelImageSegmentationOperationMetadata.AsObject,
    videoClassificationDetails?: LabelVideoClassificationOperationMetadata.AsObject,
    videoObjectDetectionDetails?: LabelVideoObjectDetectionOperationMetadata.AsObject,
    videoObjectTrackingDetails?: LabelVideoObjectTrackingOperationMetadata.AsObject,
    videoEventDetails?: LabelVideoEventOperationMetadata.AsObject,
    textClassificationDetails?: LabelTextClassificationOperationMetadata.AsObject,
    textEntityExtractionDetails?: LabelTextEntityExtractionOperationMetadata.AsObject,
    progressPercent: number,
    partialFailuresList: Array<google_rpc_status_pb.Status.AsObject>,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export enum DetailsCase {
    DETAILS_NOT_SET = 0,
    IMAGE_CLASSIFICATION_DETAILS = 3,
    IMAGE_BOUNDING_BOX_DETAILS = 4,
    IMAGE_BOUNDING_POLY_DETAILS = 11,
    IMAGE_ORIENTED_BOUNDING_BOX_DETAILS = 14,
    IMAGE_POLYLINE_DETAILS = 12,
    IMAGE_SEGMENTATION_DETAILS = 15,
    VIDEO_CLASSIFICATION_DETAILS = 5,
    VIDEO_OBJECT_DETECTION_DETAILS = 6,
    VIDEO_OBJECT_TRACKING_DETAILS = 7,
    VIDEO_EVENT_DETAILS = 8,
    TEXT_CLASSIFICATION_DETAILS = 9,
    TEXT_ENTITY_EXTRACTION_DETAILS = 13,
  }
}

export class LabelImageClassificationOperationMetadata extends jspb.Message {
  hasBasicConfig(): boolean;
  clearBasicConfig(): void;
  getBasicConfig(): google_cloud_datalabeling_v1beta1_human_annotation_config_pb.HumanAnnotationConfig | undefined;
  setBasicConfig(value?: google_cloud_datalabeling_v1beta1_human_annotation_config_pb.HumanAnnotationConfig): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LabelImageClassificationOperationMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: LabelImageClassificationOperationMetadata): LabelImageClassificationOperationMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LabelImageClassificationOperationMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LabelImageClassificationOperationMetadata;
  static deserializeBinaryFromReader(message: LabelImageClassificationOperationMetadata, reader: jspb.BinaryReader): LabelImageClassificationOperationMetadata;
}

export namespace LabelImageClassificationOperationMetadata {
  export type AsObject = {
    basicConfig?: google_cloud_datalabeling_v1beta1_human_annotation_config_pb.HumanAnnotationConfig.AsObject,
  }
}

export class LabelImageBoundingBoxOperationMetadata extends jspb.Message {
  hasBasicConfig(): boolean;
  clearBasicConfig(): void;
  getBasicConfig(): google_cloud_datalabeling_v1beta1_human_annotation_config_pb.HumanAnnotationConfig | undefined;
  setBasicConfig(value?: google_cloud_datalabeling_v1beta1_human_annotation_config_pb.HumanAnnotationConfig): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LabelImageBoundingBoxOperationMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: LabelImageBoundingBoxOperationMetadata): LabelImageBoundingBoxOperationMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LabelImageBoundingBoxOperationMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LabelImageBoundingBoxOperationMetadata;
  static deserializeBinaryFromReader(message: LabelImageBoundingBoxOperationMetadata, reader: jspb.BinaryReader): LabelImageBoundingBoxOperationMetadata;
}

export namespace LabelImageBoundingBoxOperationMetadata {
  export type AsObject = {
    basicConfig?: google_cloud_datalabeling_v1beta1_human_annotation_config_pb.HumanAnnotationConfig.AsObject,
  }
}

export class LabelImageOrientedBoundingBoxOperationMetadata extends jspb.Message {
  hasBasicConfig(): boolean;
  clearBasicConfig(): void;
  getBasicConfig(): google_cloud_datalabeling_v1beta1_human_annotation_config_pb.HumanAnnotationConfig | undefined;
  setBasicConfig(value?: google_cloud_datalabeling_v1beta1_human_annotation_config_pb.HumanAnnotationConfig): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LabelImageOrientedBoundingBoxOperationMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: LabelImageOrientedBoundingBoxOperationMetadata): LabelImageOrientedBoundingBoxOperationMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LabelImageOrientedBoundingBoxOperationMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LabelImageOrientedBoundingBoxOperationMetadata;
  static deserializeBinaryFromReader(message: LabelImageOrientedBoundingBoxOperationMetadata, reader: jspb.BinaryReader): LabelImageOrientedBoundingBoxOperationMetadata;
}

export namespace LabelImageOrientedBoundingBoxOperationMetadata {
  export type AsObject = {
    basicConfig?: google_cloud_datalabeling_v1beta1_human_annotation_config_pb.HumanAnnotationConfig.AsObject,
  }
}

export class LabelImageBoundingPolyOperationMetadata extends jspb.Message {
  hasBasicConfig(): boolean;
  clearBasicConfig(): void;
  getBasicConfig(): google_cloud_datalabeling_v1beta1_human_annotation_config_pb.HumanAnnotationConfig | undefined;
  setBasicConfig(value?: google_cloud_datalabeling_v1beta1_human_annotation_config_pb.HumanAnnotationConfig): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LabelImageBoundingPolyOperationMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: LabelImageBoundingPolyOperationMetadata): LabelImageBoundingPolyOperationMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LabelImageBoundingPolyOperationMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LabelImageBoundingPolyOperationMetadata;
  static deserializeBinaryFromReader(message: LabelImageBoundingPolyOperationMetadata, reader: jspb.BinaryReader): LabelImageBoundingPolyOperationMetadata;
}

export namespace LabelImageBoundingPolyOperationMetadata {
  export type AsObject = {
    basicConfig?: google_cloud_datalabeling_v1beta1_human_annotation_config_pb.HumanAnnotationConfig.AsObject,
  }
}

export class LabelImagePolylineOperationMetadata extends jspb.Message {
  hasBasicConfig(): boolean;
  clearBasicConfig(): void;
  getBasicConfig(): google_cloud_datalabeling_v1beta1_human_annotation_config_pb.HumanAnnotationConfig | undefined;
  setBasicConfig(value?: google_cloud_datalabeling_v1beta1_human_annotation_config_pb.HumanAnnotationConfig): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LabelImagePolylineOperationMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: LabelImagePolylineOperationMetadata): LabelImagePolylineOperationMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LabelImagePolylineOperationMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LabelImagePolylineOperationMetadata;
  static deserializeBinaryFromReader(message: LabelImagePolylineOperationMetadata, reader: jspb.BinaryReader): LabelImagePolylineOperationMetadata;
}

export namespace LabelImagePolylineOperationMetadata {
  export type AsObject = {
    basicConfig?: google_cloud_datalabeling_v1beta1_human_annotation_config_pb.HumanAnnotationConfig.AsObject,
  }
}

export class LabelImageSegmentationOperationMetadata extends jspb.Message {
  hasBasicConfig(): boolean;
  clearBasicConfig(): void;
  getBasicConfig(): google_cloud_datalabeling_v1beta1_human_annotation_config_pb.HumanAnnotationConfig | undefined;
  setBasicConfig(value?: google_cloud_datalabeling_v1beta1_human_annotation_config_pb.HumanAnnotationConfig): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LabelImageSegmentationOperationMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: LabelImageSegmentationOperationMetadata): LabelImageSegmentationOperationMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LabelImageSegmentationOperationMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LabelImageSegmentationOperationMetadata;
  static deserializeBinaryFromReader(message: LabelImageSegmentationOperationMetadata, reader: jspb.BinaryReader): LabelImageSegmentationOperationMetadata;
}

export namespace LabelImageSegmentationOperationMetadata {
  export type AsObject = {
    basicConfig?: google_cloud_datalabeling_v1beta1_human_annotation_config_pb.HumanAnnotationConfig.AsObject,
  }
}

export class LabelVideoClassificationOperationMetadata extends jspb.Message {
  hasBasicConfig(): boolean;
  clearBasicConfig(): void;
  getBasicConfig(): google_cloud_datalabeling_v1beta1_human_annotation_config_pb.HumanAnnotationConfig | undefined;
  setBasicConfig(value?: google_cloud_datalabeling_v1beta1_human_annotation_config_pb.HumanAnnotationConfig): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LabelVideoClassificationOperationMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: LabelVideoClassificationOperationMetadata): LabelVideoClassificationOperationMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LabelVideoClassificationOperationMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LabelVideoClassificationOperationMetadata;
  static deserializeBinaryFromReader(message: LabelVideoClassificationOperationMetadata, reader: jspb.BinaryReader): LabelVideoClassificationOperationMetadata;
}

export namespace LabelVideoClassificationOperationMetadata {
  export type AsObject = {
    basicConfig?: google_cloud_datalabeling_v1beta1_human_annotation_config_pb.HumanAnnotationConfig.AsObject,
  }
}

export class LabelVideoObjectDetectionOperationMetadata extends jspb.Message {
  hasBasicConfig(): boolean;
  clearBasicConfig(): void;
  getBasicConfig(): google_cloud_datalabeling_v1beta1_human_annotation_config_pb.HumanAnnotationConfig | undefined;
  setBasicConfig(value?: google_cloud_datalabeling_v1beta1_human_annotation_config_pb.HumanAnnotationConfig): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LabelVideoObjectDetectionOperationMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: LabelVideoObjectDetectionOperationMetadata): LabelVideoObjectDetectionOperationMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LabelVideoObjectDetectionOperationMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LabelVideoObjectDetectionOperationMetadata;
  static deserializeBinaryFromReader(message: LabelVideoObjectDetectionOperationMetadata, reader: jspb.BinaryReader): LabelVideoObjectDetectionOperationMetadata;
}

export namespace LabelVideoObjectDetectionOperationMetadata {
  export type AsObject = {
    basicConfig?: google_cloud_datalabeling_v1beta1_human_annotation_config_pb.HumanAnnotationConfig.AsObject,
  }
}

export class LabelVideoObjectTrackingOperationMetadata extends jspb.Message {
  hasBasicConfig(): boolean;
  clearBasicConfig(): void;
  getBasicConfig(): google_cloud_datalabeling_v1beta1_human_annotation_config_pb.HumanAnnotationConfig | undefined;
  setBasicConfig(value?: google_cloud_datalabeling_v1beta1_human_annotation_config_pb.HumanAnnotationConfig): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LabelVideoObjectTrackingOperationMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: LabelVideoObjectTrackingOperationMetadata): LabelVideoObjectTrackingOperationMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LabelVideoObjectTrackingOperationMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LabelVideoObjectTrackingOperationMetadata;
  static deserializeBinaryFromReader(message: LabelVideoObjectTrackingOperationMetadata, reader: jspb.BinaryReader): LabelVideoObjectTrackingOperationMetadata;
}

export namespace LabelVideoObjectTrackingOperationMetadata {
  export type AsObject = {
    basicConfig?: google_cloud_datalabeling_v1beta1_human_annotation_config_pb.HumanAnnotationConfig.AsObject,
  }
}

export class LabelVideoEventOperationMetadata extends jspb.Message {
  hasBasicConfig(): boolean;
  clearBasicConfig(): void;
  getBasicConfig(): google_cloud_datalabeling_v1beta1_human_annotation_config_pb.HumanAnnotationConfig | undefined;
  setBasicConfig(value?: google_cloud_datalabeling_v1beta1_human_annotation_config_pb.HumanAnnotationConfig): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LabelVideoEventOperationMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: LabelVideoEventOperationMetadata): LabelVideoEventOperationMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LabelVideoEventOperationMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LabelVideoEventOperationMetadata;
  static deserializeBinaryFromReader(message: LabelVideoEventOperationMetadata, reader: jspb.BinaryReader): LabelVideoEventOperationMetadata;
}

export namespace LabelVideoEventOperationMetadata {
  export type AsObject = {
    basicConfig?: google_cloud_datalabeling_v1beta1_human_annotation_config_pb.HumanAnnotationConfig.AsObject,
  }
}

export class LabelTextClassificationOperationMetadata extends jspb.Message {
  hasBasicConfig(): boolean;
  clearBasicConfig(): void;
  getBasicConfig(): google_cloud_datalabeling_v1beta1_human_annotation_config_pb.HumanAnnotationConfig | undefined;
  setBasicConfig(value?: google_cloud_datalabeling_v1beta1_human_annotation_config_pb.HumanAnnotationConfig): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LabelTextClassificationOperationMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: LabelTextClassificationOperationMetadata): LabelTextClassificationOperationMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LabelTextClassificationOperationMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LabelTextClassificationOperationMetadata;
  static deserializeBinaryFromReader(message: LabelTextClassificationOperationMetadata, reader: jspb.BinaryReader): LabelTextClassificationOperationMetadata;
}

export namespace LabelTextClassificationOperationMetadata {
  export type AsObject = {
    basicConfig?: google_cloud_datalabeling_v1beta1_human_annotation_config_pb.HumanAnnotationConfig.AsObject,
  }
}

export class LabelTextEntityExtractionOperationMetadata extends jspb.Message {
  hasBasicConfig(): boolean;
  clearBasicConfig(): void;
  getBasicConfig(): google_cloud_datalabeling_v1beta1_human_annotation_config_pb.HumanAnnotationConfig | undefined;
  setBasicConfig(value?: google_cloud_datalabeling_v1beta1_human_annotation_config_pb.HumanAnnotationConfig): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LabelTextEntityExtractionOperationMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: LabelTextEntityExtractionOperationMetadata): LabelTextEntityExtractionOperationMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LabelTextEntityExtractionOperationMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LabelTextEntityExtractionOperationMetadata;
  static deserializeBinaryFromReader(message: LabelTextEntityExtractionOperationMetadata, reader: jspb.BinaryReader): LabelTextEntityExtractionOperationMetadata;
}

export namespace LabelTextEntityExtractionOperationMetadata {
  export type AsObject = {
    basicConfig?: google_cloud_datalabeling_v1beta1_human_annotation_config_pb.HumanAnnotationConfig.AsObject,
  }
}

export class CreateInstructionMetadata extends jspb.Message {
  getInstruction(): string;
  setInstruction(value: string): void;

  clearPartialFailuresList(): void;
  getPartialFailuresList(): Array<google_rpc_status_pb.Status>;
  setPartialFailuresList(value: Array<google_rpc_status_pb.Status>): void;
  addPartialFailures(value?: google_rpc_status_pb.Status, index?: number): google_rpc_status_pb.Status;

  hasCreateTime(): boolean;
  clearCreateTime(): void;
  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateInstructionMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: CreateInstructionMetadata): CreateInstructionMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateInstructionMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateInstructionMetadata;
  static deserializeBinaryFromReader(message: CreateInstructionMetadata, reader: jspb.BinaryReader): CreateInstructionMetadata;
}

export namespace CreateInstructionMetadata {
  export type AsObject = {
    instruction: string,
    partialFailuresList: Array<google_rpc_status_pb.Status.AsObject>,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

