// package: google.cloud.automl.v1beta1
// file: google/cloud/automl/v1beta1/text_extraction.proto

import * as jspb from "google-protobuf";
import * as google_cloud_automl_v1beta1_text_segment_pb from "../../../../google/cloud/automl/v1beta1/text_segment_pb";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";

export class TextExtractionAnnotation extends jspb.Message {
  hasTextSegment(): boolean;
  clearTextSegment(): void;
  getTextSegment(): google_cloud_automl_v1beta1_text_segment_pb.TextSegment | undefined;
  setTextSegment(value?: google_cloud_automl_v1beta1_text_segment_pb.TextSegment): void;

  getScore(): number;
  setScore(value: number): void;

  getAnnotationCase(): TextExtractionAnnotation.AnnotationCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TextExtractionAnnotation.AsObject;
  static toObject(includeInstance: boolean, msg: TextExtractionAnnotation): TextExtractionAnnotation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TextExtractionAnnotation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TextExtractionAnnotation;
  static deserializeBinaryFromReader(message: TextExtractionAnnotation, reader: jspb.BinaryReader): TextExtractionAnnotation;
}

export namespace TextExtractionAnnotation {
  export type AsObject = {
    textSegment?: google_cloud_automl_v1beta1_text_segment_pb.TextSegment.AsObject,
    score: number,
  }

  export enum AnnotationCase {
    ANNOTATION_NOT_SET = 0,
    TEXT_SEGMENT = 3,
  }
}

export class TextExtractionEvaluationMetrics extends jspb.Message {
  getAuPrc(): number;
  setAuPrc(value: number): void;

  clearConfidenceMetricsEntriesList(): void;
  getConfidenceMetricsEntriesList(): Array<TextExtractionEvaluationMetrics.ConfidenceMetricsEntry>;
  setConfidenceMetricsEntriesList(value: Array<TextExtractionEvaluationMetrics.ConfidenceMetricsEntry>): void;
  addConfidenceMetricsEntries(value?: TextExtractionEvaluationMetrics.ConfidenceMetricsEntry, index?: number): TextExtractionEvaluationMetrics.ConfidenceMetricsEntry;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TextExtractionEvaluationMetrics.AsObject;
  static toObject(includeInstance: boolean, msg: TextExtractionEvaluationMetrics): TextExtractionEvaluationMetrics.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TextExtractionEvaluationMetrics, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TextExtractionEvaluationMetrics;
  static deserializeBinaryFromReader(message: TextExtractionEvaluationMetrics, reader: jspb.BinaryReader): TextExtractionEvaluationMetrics;
}

export namespace TextExtractionEvaluationMetrics {
  export type AsObject = {
    auPrc: number,
    confidenceMetricsEntriesList: Array<TextExtractionEvaluationMetrics.ConfidenceMetricsEntry.AsObject>,
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

