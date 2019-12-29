// package: google.cloud.automl.v1
// file: google/cloud/automl/v1/classification.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";

export class ClassificationAnnotation extends jspb.Message {
  getScore(): number;
  setScore(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClassificationAnnotation.AsObject;
  static toObject(includeInstance: boolean, msg: ClassificationAnnotation): ClassificationAnnotation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClassificationAnnotation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClassificationAnnotation;
  static deserializeBinaryFromReader(message: ClassificationAnnotation, reader: jspb.BinaryReader): ClassificationAnnotation;
}

export namespace ClassificationAnnotation {
  export type AsObject = {
    score: number,
  }
}

export class ClassificationEvaluationMetrics extends jspb.Message {
  getAuPrc(): number;
  setAuPrc(value: number): void;

  getAuRoc(): number;
  setAuRoc(value: number): void;

  getLogLoss(): number;
  setLogLoss(value: number): void;

  clearConfidenceMetricsEntryList(): void;
  getConfidenceMetricsEntryList(): Array<ClassificationEvaluationMetrics.ConfidenceMetricsEntry>;
  setConfidenceMetricsEntryList(value: Array<ClassificationEvaluationMetrics.ConfidenceMetricsEntry>): void;
  addConfidenceMetricsEntry(value?: ClassificationEvaluationMetrics.ConfidenceMetricsEntry, index?: number): ClassificationEvaluationMetrics.ConfidenceMetricsEntry;

  hasConfusionMatrix(): boolean;
  clearConfusionMatrix(): void;
  getConfusionMatrix(): ClassificationEvaluationMetrics.ConfusionMatrix | undefined;
  setConfusionMatrix(value?: ClassificationEvaluationMetrics.ConfusionMatrix): void;

  clearAnnotationSpecIdList(): void;
  getAnnotationSpecIdList(): Array<string>;
  setAnnotationSpecIdList(value: Array<string>): void;
  addAnnotationSpecId(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClassificationEvaluationMetrics.AsObject;
  static toObject(includeInstance: boolean, msg: ClassificationEvaluationMetrics): ClassificationEvaluationMetrics.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClassificationEvaluationMetrics, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClassificationEvaluationMetrics;
  static deserializeBinaryFromReader(message: ClassificationEvaluationMetrics, reader: jspb.BinaryReader): ClassificationEvaluationMetrics;
}

export namespace ClassificationEvaluationMetrics {
  export type AsObject = {
    auPrc: number,
    auRoc: number,
    logLoss: number,
    confidenceMetricsEntryList: Array<ClassificationEvaluationMetrics.ConfidenceMetricsEntry.AsObject>,
    confusionMatrix?: ClassificationEvaluationMetrics.ConfusionMatrix.AsObject,
    annotationSpecIdList: Array<string>,
  }

  export class ConfidenceMetricsEntry extends jspb.Message {
    getConfidenceThreshold(): number;
    setConfidenceThreshold(value: number): void;

    getPositionThreshold(): number;
    setPositionThreshold(value: number): void;

    getRecall(): number;
    setRecall(value: number): void;

    getPrecision(): number;
    setPrecision(value: number): void;

    getFalsePositiveRate(): number;
    setFalsePositiveRate(value: number): void;

    getF1Score(): number;
    setF1Score(value: number): void;

    getRecallAt1(): number;
    setRecallAt1(value: number): void;

    getPrecisionAt1(): number;
    setPrecisionAt1(value: number): void;

    getFalsePositiveRateAt1(): number;
    setFalsePositiveRateAt1(value: number): void;

    getF1ScoreAt1(): number;
    setF1ScoreAt1(value: number): void;

    getTruePositiveCount(): number;
    setTruePositiveCount(value: number): void;

    getFalsePositiveCount(): number;
    setFalsePositiveCount(value: number): void;

    getFalseNegativeCount(): number;
    setFalseNegativeCount(value: number): void;

    getTrueNegativeCount(): number;
    setTrueNegativeCount(value: number): void;

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
      positionThreshold: number,
      recall: number,
      precision: number,
      falsePositiveRate: number,
      f1Score: number,
      recallAt1: number,
      precisionAt1: number,
      falsePositiveRateAt1: number,
      f1ScoreAt1: number,
      truePositiveCount: number,
      falsePositiveCount: number,
      falseNegativeCount: number,
      trueNegativeCount: number,
    }
  }

  export class ConfusionMatrix extends jspb.Message {
    clearAnnotationSpecIdList(): void;
    getAnnotationSpecIdList(): Array<string>;
    setAnnotationSpecIdList(value: Array<string>): void;
    addAnnotationSpecId(value: string, index?: number): string;

    clearDisplayNameList(): void;
    getDisplayNameList(): Array<string>;
    setDisplayNameList(value: Array<string>): void;
    addDisplayName(value: string, index?: number): string;

    clearRowList(): void;
    getRowList(): Array<ClassificationEvaluationMetrics.ConfusionMatrix.Row>;
    setRowList(value: Array<ClassificationEvaluationMetrics.ConfusionMatrix.Row>): void;
    addRow(value?: ClassificationEvaluationMetrics.ConfusionMatrix.Row, index?: number): ClassificationEvaluationMetrics.ConfusionMatrix.Row;

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
      annotationSpecIdList: Array<string>,
      displayNameList: Array<string>,
      rowList: Array<ClassificationEvaluationMetrics.ConfusionMatrix.Row.AsObject>,
    }

    export class Row extends jspb.Message {
      clearExampleCountList(): void;
      getExampleCountList(): Array<number>;
      setExampleCountList(value: Array<number>): void;
      addExampleCount(value: number, index?: number): number;

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
        exampleCountList: Array<number>,
      }
    }
  }
}

export interface ClassificationTypeMap {
  CLASSIFICATION_TYPE_UNSPECIFIED: 0;
  MULTICLASS: 1;
  MULTILABEL: 2;
}

export const ClassificationType: ClassificationTypeMap;

