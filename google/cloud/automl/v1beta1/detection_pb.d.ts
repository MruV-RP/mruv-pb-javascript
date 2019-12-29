// package: google.cloud.automl.v1beta1
// file: google/cloud/automl/v1beta1/detection.proto

import * as jspb from "google-protobuf";
import * as google_cloud_automl_v1beta1_geometry_pb from "../../../../google/cloud/automl/v1beta1/geometry_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";

export class ImageObjectDetectionAnnotation extends jspb.Message {
  hasBoundingBox(): boolean;
  clearBoundingBox(): void;
  getBoundingBox(): google_cloud_automl_v1beta1_geometry_pb.BoundingPoly | undefined;
  setBoundingBox(value?: google_cloud_automl_v1beta1_geometry_pb.BoundingPoly): void;

  getScore(): number;
  setScore(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImageObjectDetectionAnnotation.AsObject;
  static toObject(includeInstance: boolean, msg: ImageObjectDetectionAnnotation): ImageObjectDetectionAnnotation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ImageObjectDetectionAnnotation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImageObjectDetectionAnnotation;
  static deserializeBinaryFromReader(message: ImageObjectDetectionAnnotation, reader: jspb.BinaryReader): ImageObjectDetectionAnnotation;
}

export namespace ImageObjectDetectionAnnotation {
  export type AsObject = {
    boundingBox?: google_cloud_automl_v1beta1_geometry_pb.BoundingPoly.AsObject,
    score: number,
  }
}

export class VideoObjectTrackingAnnotation extends jspb.Message {
  getInstanceId(): string;
  setInstanceId(value: string): void;

  hasTimeOffset(): boolean;
  clearTimeOffset(): void;
  getTimeOffset(): google_protobuf_duration_pb.Duration | undefined;
  setTimeOffset(value?: google_protobuf_duration_pb.Duration): void;

  hasBoundingBox(): boolean;
  clearBoundingBox(): void;
  getBoundingBox(): google_cloud_automl_v1beta1_geometry_pb.BoundingPoly | undefined;
  setBoundingBox(value?: google_cloud_automl_v1beta1_geometry_pb.BoundingPoly): void;

  getScore(): number;
  setScore(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VideoObjectTrackingAnnotation.AsObject;
  static toObject(includeInstance: boolean, msg: VideoObjectTrackingAnnotation): VideoObjectTrackingAnnotation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VideoObjectTrackingAnnotation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VideoObjectTrackingAnnotation;
  static deserializeBinaryFromReader(message: VideoObjectTrackingAnnotation, reader: jspb.BinaryReader): VideoObjectTrackingAnnotation;
}

export namespace VideoObjectTrackingAnnotation {
  export type AsObject = {
    instanceId: string,
    timeOffset?: google_protobuf_duration_pb.Duration.AsObject,
    boundingBox?: google_cloud_automl_v1beta1_geometry_pb.BoundingPoly.AsObject,
    score: number,
  }
}

export class BoundingBoxMetricsEntry extends jspb.Message {
  getIouThreshold(): number;
  setIouThreshold(value: number): void;

  getMeanAveragePrecision(): number;
  setMeanAveragePrecision(value: number): void;

  clearConfidenceMetricsEntriesList(): void;
  getConfidenceMetricsEntriesList(): Array<BoundingBoxMetricsEntry.ConfidenceMetricsEntry>;
  setConfidenceMetricsEntriesList(value: Array<BoundingBoxMetricsEntry.ConfidenceMetricsEntry>): void;
  addConfidenceMetricsEntries(value?: BoundingBoxMetricsEntry.ConfidenceMetricsEntry, index?: number): BoundingBoxMetricsEntry.ConfidenceMetricsEntry;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BoundingBoxMetricsEntry.AsObject;
  static toObject(includeInstance: boolean, msg: BoundingBoxMetricsEntry): BoundingBoxMetricsEntry.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BoundingBoxMetricsEntry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BoundingBoxMetricsEntry;
  static deserializeBinaryFromReader(message: BoundingBoxMetricsEntry, reader: jspb.BinaryReader): BoundingBoxMetricsEntry;
}

export namespace BoundingBoxMetricsEntry {
  export type AsObject = {
    iouThreshold: number,
    meanAveragePrecision: number,
    confidenceMetricsEntriesList: Array<BoundingBoxMetricsEntry.ConfidenceMetricsEntry.AsObject>,
  }

  export class ConfidenceMetricsEntry extends jspb.Message {
    getConfidenceThreshold(): number;
    setConfidenceThreshold(value: number): void;

    getRecall(): number;
    setRecall(value: number): void;

    getPrecision(): number;
    setPrecision(value: number): void;

    getF1Score(): number;
    setF1Score(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ConfidenceMetricsEntry.AsObject;
    static toObject(includeInstance: boolean, msg: ConfidenceMetricsEntry): ConfidenceMetricsEntry.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ConfidenceMetricsEntry, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ConfidenceMetricsEntry;
    static deserializeBinaryFromReader(message: ConfidenceMetricsEntry, reader: jspb.BinaryReader): ConfidenceMetricsEntry;
  }

  export namespace ConfidenceMetricsEntry {
    export type AsObject = {
      confidenceThreshold: number,
      recall: number,
      precision: number,
      f1Score: number,
    }
  }
}

export class ImageObjectDetectionEvaluationMetrics extends jspb.Message {
  getEvaluatedBoundingBoxCount(): number;
  setEvaluatedBoundingBoxCount(value: number): void;

  clearBoundingBoxMetricsEntriesList(): void;
  getBoundingBoxMetricsEntriesList(): Array<BoundingBoxMetricsEntry>;
  setBoundingBoxMetricsEntriesList(value: Array<BoundingBoxMetricsEntry>): void;
  addBoundingBoxMetricsEntries(value?: BoundingBoxMetricsEntry, index?: number): BoundingBoxMetricsEntry;

  getBoundingBoxMeanAveragePrecision(): number;
  setBoundingBoxMeanAveragePrecision(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImageObjectDetectionEvaluationMetrics.AsObject;
  static toObject(includeInstance: boolean, msg: ImageObjectDetectionEvaluationMetrics): ImageObjectDetectionEvaluationMetrics.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ImageObjectDetectionEvaluationMetrics, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImageObjectDetectionEvaluationMetrics;
  static deserializeBinaryFromReader(message: ImageObjectDetectionEvaluationMetrics, reader: jspb.BinaryReader): ImageObjectDetectionEvaluationMetrics;
}

export namespace ImageObjectDetectionEvaluationMetrics {
  export type AsObject = {
    evaluatedBoundingBoxCount: number,
    boundingBoxMetricsEntriesList: Array<BoundingBoxMetricsEntry.AsObject>,
    boundingBoxMeanAveragePrecision: number,
  }
}

export class VideoObjectTrackingEvaluationMetrics extends jspb.Message {
  getEvaluatedFrameCount(): number;
  setEvaluatedFrameCount(value: number): void;

  getEvaluatedBoundingBoxCount(): number;
  setEvaluatedBoundingBoxCount(value: number): void;

  clearBoundingBoxMetricsEntriesList(): void;
  getBoundingBoxMetricsEntriesList(): Array<BoundingBoxMetricsEntry>;
  setBoundingBoxMetricsEntriesList(value: Array<BoundingBoxMetricsEntry>): void;
  addBoundingBoxMetricsEntries(value?: BoundingBoxMetricsEntry, index?: number): BoundingBoxMetricsEntry;

  getBoundingBoxMeanAveragePrecision(): number;
  setBoundingBoxMeanAveragePrecision(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VideoObjectTrackingEvaluationMetrics.AsObject;
  static toObject(includeInstance: boolean, msg: VideoObjectTrackingEvaluationMetrics): VideoObjectTrackingEvaluationMetrics.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VideoObjectTrackingEvaluationMetrics, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VideoObjectTrackingEvaluationMetrics;
  static deserializeBinaryFromReader(message: VideoObjectTrackingEvaluationMetrics, reader: jspb.BinaryReader): VideoObjectTrackingEvaluationMetrics;
}

export namespace VideoObjectTrackingEvaluationMetrics {
  export type AsObject = {
    evaluatedFrameCount: number,
    evaluatedBoundingBoxCount: number,
    boundingBoxMetricsEntriesList: Array<BoundingBoxMetricsEntry.AsObject>,
    boundingBoxMeanAveragePrecision: number,
  }
}

