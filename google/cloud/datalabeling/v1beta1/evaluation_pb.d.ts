// package: google.cloud.datalabeling.v1beta1
// file: google/cloud/datalabeling/v1beta1/evaluation.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";
import * as google_cloud_datalabeling_v1beta1_annotation_pb from "../../../../google/cloud/datalabeling/v1beta1/annotation_pb";
import * as google_cloud_datalabeling_v1beta1_annotation_spec_set_pb from "../../../../google/cloud/datalabeling/v1beta1/annotation_spec_set_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Evaluation extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasConfig(): boolean;
  clearConfig(): void;
  getConfig(): EvaluationConfig | undefined;
  setConfig(value?: EvaluationConfig): void;

  hasEvaluationJobRunTime(): boolean;
  clearEvaluationJobRunTime(): void;
  getEvaluationJobRunTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEvaluationJobRunTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasCreateTime(): boolean;
  clearCreateTime(): void;
  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasEvaluationMetrics(): boolean;
  clearEvaluationMetrics(): void;
  getEvaluationMetrics(): EvaluationMetrics | undefined;
  setEvaluationMetrics(value?: EvaluationMetrics): void;

  getAnnotationType(): google_cloud_datalabeling_v1beta1_annotation_pb.AnnotationTypeMap[keyof google_cloud_datalabeling_v1beta1_annotation_pb.AnnotationTypeMap];
  setAnnotationType(value: google_cloud_datalabeling_v1beta1_annotation_pb.AnnotationTypeMap[keyof google_cloud_datalabeling_v1beta1_annotation_pb.AnnotationTypeMap]): void;

  getEvaluatedItemCount(): number;
  setEvaluatedItemCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Evaluation.AsObject;
  static toObject(includeInstance: boolean, msg: Evaluation): Evaluation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Evaluation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Evaluation;
  static deserializeBinaryFromReader(message: Evaluation, reader: jspb.BinaryReader): Evaluation;
}

export namespace Evaluation {
  export type AsObject = {
    name: string,
    config?: EvaluationConfig.AsObject,
    evaluationJobRunTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    evaluationMetrics?: EvaluationMetrics.AsObject,
    annotationType: google_cloud_datalabeling_v1beta1_annotation_pb.AnnotationTypeMap[keyof google_cloud_datalabeling_v1beta1_annotation_pb.AnnotationTypeMap],
    evaluatedItemCount: number,
  }
}

export class EvaluationConfig extends jspb.Message {
  hasBoundingBoxEvaluationOptions(): boolean;
  clearBoundingBoxEvaluationOptions(): void;
  getBoundingBoxEvaluationOptions(): BoundingBoxEvaluationOptions | undefined;
  setBoundingBoxEvaluationOptions(value?: BoundingBoxEvaluationOptions): void;

  getVerticalOptionCase(): EvaluationConfig.VerticalOptionCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EvaluationConfig.AsObject;
  static toObject(includeInstance: boolean, msg: EvaluationConfig): EvaluationConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EvaluationConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EvaluationConfig;
  static deserializeBinaryFromReader(message: EvaluationConfig, reader: jspb.BinaryReader): EvaluationConfig;
}

export namespace EvaluationConfig {
  export type AsObject = {
    boundingBoxEvaluationOptions?: BoundingBoxEvaluationOptions.AsObject,
  }

  export enum VerticalOptionCase {
    VERTICAL_OPTION_NOT_SET = 0,
    BOUNDING_BOX_EVALUATION_OPTIONS = 1,
  }
}

export class BoundingBoxEvaluationOptions extends jspb.Message {
  getIouThreshold(): number;
  setIouThreshold(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BoundingBoxEvaluationOptions.AsObject;
  static toObject(includeInstance: boolean, msg: BoundingBoxEvaluationOptions): BoundingBoxEvaluationOptions.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BoundingBoxEvaluationOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BoundingBoxEvaluationOptions;
  static deserializeBinaryFromReader(message: BoundingBoxEvaluationOptions, reader: jspb.BinaryReader): BoundingBoxEvaluationOptions;
}

export namespace BoundingBoxEvaluationOptions {
  export type AsObject = {
    iouThreshold: number,
  }
}

export class EvaluationMetrics extends jspb.Message {
  hasClassificationMetrics(): boolean;
  clearClassificationMetrics(): void;
  getClassificationMetrics(): ClassificationMetrics | undefined;
  setClassificationMetrics(value?: ClassificationMetrics): void;

  hasObjectDetectionMetrics(): boolean;
  clearObjectDetectionMetrics(): void;
  getObjectDetectionMetrics(): ObjectDetectionMetrics | undefined;
  setObjectDetectionMetrics(value?: ObjectDetectionMetrics): void;

  getMetricsCase(): EvaluationMetrics.MetricsCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EvaluationMetrics.AsObject;
  static toObject(includeInstance: boolean, msg: EvaluationMetrics): EvaluationMetrics.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EvaluationMetrics, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EvaluationMetrics;
  static deserializeBinaryFromReader(message: EvaluationMetrics, reader: jspb.BinaryReader): EvaluationMetrics;
}

export namespace EvaluationMetrics {
  export type AsObject = {
    classificationMetrics?: ClassificationMetrics.AsObject,
    objectDetectionMetrics?: ObjectDetectionMetrics.AsObject,
  }

  export enum MetricsCase {
    METRICS_NOT_SET = 0,
    CLASSIFICATION_METRICS = 1,
    OBJECT_DETECTION_METRICS = 2,
  }
}

export class ClassificationMetrics extends jspb.Message {
  hasPrCurve(): boolean;
  clearPrCurve(): void;
  getPrCurve(): PrCurve | undefined;
  setPrCurve(value?: PrCurve): void;

  hasConfusionMatrix(): boolean;
  clearConfusionMatrix(): void;
  getConfusionMatrix(): ConfusionMatrix | undefined;
  setConfusionMatrix(value?: ConfusionMatrix): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClassificationMetrics.AsObject;
  static toObject(includeInstance: boolean, msg: ClassificationMetrics): ClassificationMetrics.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClassificationMetrics, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClassificationMetrics;
  static deserializeBinaryFromReader(message: ClassificationMetrics, reader: jspb.BinaryReader): ClassificationMetrics;
}

export namespace ClassificationMetrics {
  export type AsObject = {
    prCurve?: PrCurve.AsObject,
    confusionMatrix?: ConfusionMatrix.AsObject,
  }
}

export class ObjectDetectionMetrics extends jspb.Message {
  hasPrCurve(): boolean;
  clearPrCurve(): void;
  getPrCurve(): PrCurve | undefined;
  setPrCurve(value?: PrCurve): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ObjectDetectionMetrics.AsObject;
  static toObject(includeInstance: boolean, msg: ObjectDetectionMetrics): ObjectDetectionMetrics.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ObjectDetectionMetrics, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ObjectDetectionMetrics;
  static deserializeBinaryFromReader(message: ObjectDetectionMetrics, reader: jspb.BinaryReader): ObjectDetectionMetrics;
}

export namespace ObjectDetectionMetrics {
  export type AsObject = {
    prCurve?: PrCurve.AsObject,
  }
}

export class PrCurve extends jspb.Message {
  hasAnnotationSpec(): boolean;
  clearAnnotationSpec(): void;
  getAnnotationSpec(): google_cloud_datalabeling_v1beta1_annotation_spec_set_pb.AnnotationSpec | undefined;
  setAnnotationSpec(value?: google_cloud_datalabeling_v1beta1_annotation_spec_set_pb.AnnotationSpec): void;

  getAreaUnderCurve(): number;
  setAreaUnderCurve(value: number): void;

  clearConfidenceMetricsEntriesList(): void;
  getConfidenceMetricsEntriesList(): Array<PrCurve.ConfidenceMetricsEntry>;
  setConfidenceMetricsEntriesList(value: Array<PrCurve.ConfidenceMetricsEntry>): void;
  addConfidenceMetricsEntries(value?: PrCurve.ConfidenceMetricsEntry, index?: number): PrCurve.ConfidenceMetricsEntry;

  getMeanAveragePrecision(): number;
  setMeanAveragePrecision(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PrCurve.AsObject;
  static toObject(includeInstance: boolean, msg: PrCurve): PrCurve.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PrCurve, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PrCurve;
  static deserializeBinaryFromReader(message: PrCurve, reader: jspb.BinaryReader): PrCurve;
}

export namespace PrCurve {
  export type AsObject = {
    annotationSpec?: google_cloud_datalabeling_v1beta1_annotation_spec_set_pb.AnnotationSpec.AsObject,
    areaUnderCurve: number,
    confidenceMetricsEntriesList: Array<PrCurve.ConfidenceMetricsEntry.AsObject>,
    meanAveragePrecision: number,
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

    getRecallAt1(): number;
    setRecallAt1(value: number): void;

    getPrecisionAt1(): number;
    setPrecisionAt1(value: number): void;

    getF1ScoreAt1(): number;
    setF1ScoreAt1(value: number): void;

    getRecallAt5(): number;
    setRecallAt5(value: number): void;

    getPrecisionAt5(): number;
    setPrecisionAt5(value: number): void;

    getF1ScoreAt5(): number;
    setF1ScoreAt5(value: number): void;

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
      recallAt1: number,
      precisionAt1: number,
      f1ScoreAt1: number,
      recallAt5: number,
      precisionAt5: number,
      f1ScoreAt5: number,
    }
  }
}

export class ConfusionMatrix extends jspb.Message {
  clearRowList(): void;
  getRowList(): Array<ConfusionMatrix.Row>;
  setRowList(value: Array<ConfusionMatrix.Row>): void;
  addRow(value?: ConfusionMatrix.Row, index?: number): ConfusionMatrix.Row;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfusionMatrix.AsObject;
  static toObject(includeInstance: boolean, msg: ConfusionMatrix): ConfusionMatrix.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConfusionMatrix, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfusionMatrix;
  static deserializeBinaryFromReader(message: ConfusionMatrix, reader: jspb.BinaryReader): ConfusionMatrix;
}

export namespace ConfusionMatrix {
  export type AsObject = {
    rowList: Array<ConfusionMatrix.Row.AsObject>,
  }

  export class ConfusionMatrixEntry extends jspb.Message {
    hasAnnotationSpec(): boolean;
    clearAnnotationSpec(): void;
    getAnnotationSpec(): google_cloud_datalabeling_v1beta1_annotation_spec_set_pb.AnnotationSpec | undefined;
    setAnnotationSpec(value?: google_cloud_datalabeling_v1beta1_annotation_spec_set_pb.AnnotationSpec): void;

    getItemCount(): number;
    setItemCount(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ConfusionMatrixEntry.AsObject;
    static toObject(includeInstance: boolean, msg: ConfusionMatrixEntry): ConfusionMatrixEntry.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ConfusionMatrixEntry, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ConfusionMatrixEntry;
    static deserializeBinaryFromReader(message: ConfusionMatrixEntry, reader: jspb.BinaryReader): ConfusionMatrixEntry;
  }

  export namespace ConfusionMatrixEntry {
    export type AsObject = {
      annotationSpec?: google_cloud_datalabeling_v1beta1_annotation_spec_set_pb.AnnotationSpec.AsObject,
      itemCount: number,
    }
  }

  export class Row extends jspb.Message {
    hasAnnotationSpec(): boolean;
    clearAnnotationSpec(): void;
    getAnnotationSpec(): google_cloud_datalabeling_v1beta1_annotation_spec_set_pb.AnnotationSpec | undefined;
    setAnnotationSpec(value?: google_cloud_datalabeling_v1beta1_annotation_spec_set_pb.AnnotationSpec): void;

    clearEntriesList(): void;
    getEntriesList(): Array<ConfusionMatrix.ConfusionMatrixEntry>;
    setEntriesList(value: Array<ConfusionMatrix.ConfusionMatrixEntry>): void;
    addEntries(value?: ConfusionMatrix.ConfusionMatrixEntry, index?: number): ConfusionMatrix.ConfusionMatrixEntry;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Row.AsObject;
    static toObject(includeInstance: boolean, msg: Row): Row.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Row, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Row;
    static deserializeBinaryFromReader(message: Row, reader: jspb.BinaryReader): Row;
  }

  export namespace Row {
    export type AsObject = {
      annotationSpec?: google_cloud_datalabeling_v1beta1_annotation_spec_set_pb.AnnotationSpec.AsObject,
      entriesList: Array<ConfusionMatrix.ConfusionMatrixEntry.AsObject>,
    }
  }
}

