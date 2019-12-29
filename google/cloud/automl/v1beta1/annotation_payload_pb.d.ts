// package: google.cloud.automl.v1beta1
// file: google/cloud/automl/v1beta1/annotation_payload.proto

import * as jspb from "google-protobuf";
import * as google_cloud_automl_v1beta1_classification_pb from "../../../../google/cloud/automl/v1beta1/classification_pb";
import * as google_cloud_automl_v1beta1_detection_pb from "../../../../google/cloud/automl/v1beta1/detection_pb";
import * as google_cloud_automl_v1beta1_tables_pb from "../../../../google/cloud/automl/v1beta1/tables_pb";
import * as google_cloud_automl_v1beta1_text_extraction_pb from "../../../../google/cloud/automl/v1beta1/text_extraction_pb";
import * as google_cloud_automl_v1beta1_text_sentiment_pb from "../../../../google/cloud/automl/v1beta1/text_sentiment_pb";
import * as google_cloud_automl_v1beta1_translation_pb from "../../../../google/cloud/automl/v1beta1/translation_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";

export class AnnotationPayload extends jspb.Message {
  hasTranslation(): boolean;
  clearTranslation(): void;
  getTranslation(): google_cloud_automl_v1beta1_translation_pb.TranslationAnnotation | undefined;
  setTranslation(value?: google_cloud_automl_v1beta1_translation_pb.TranslationAnnotation): void;

  hasClassification(): boolean;
  clearClassification(): void;
  getClassification(): google_cloud_automl_v1beta1_classification_pb.ClassificationAnnotation | undefined;
  setClassification(value?: google_cloud_automl_v1beta1_classification_pb.ClassificationAnnotation): void;

  hasImageObjectDetection(): boolean;
  clearImageObjectDetection(): void;
  getImageObjectDetection(): google_cloud_automl_v1beta1_detection_pb.ImageObjectDetectionAnnotation | undefined;
  setImageObjectDetection(value?: google_cloud_automl_v1beta1_detection_pb.ImageObjectDetectionAnnotation): void;

  hasVideoClassification(): boolean;
  clearVideoClassification(): void;
  getVideoClassification(): google_cloud_automl_v1beta1_classification_pb.VideoClassificationAnnotation | undefined;
  setVideoClassification(value?: google_cloud_automl_v1beta1_classification_pb.VideoClassificationAnnotation): void;

  hasVideoObjectTracking(): boolean;
  clearVideoObjectTracking(): void;
  getVideoObjectTracking(): google_cloud_automl_v1beta1_detection_pb.VideoObjectTrackingAnnotation | undefined;
  setVideoObjectTracking(value?: google_cloud_automl_v1beta1_detection_pb.VideoObjectTrackingAnnotation): void;

  hasTextExtraction(): boolean;
  clearTextExtraction(): void;
  getTextExtraction(): google_cloud_automl_v1beta1_text_extraction_pb.TextExtractionAnnotation | undefined;
  setTextExtraction(value?: google_cloud_automl_v1beta1_text_extraction_pb.TextExtractionAnnotation): void;

  hasTextSentiment(): boolean;
  clearTextSentiment(): void;
  getTextSentiment(): google_cloud_automl_v1beta1_text_sentiment_pb.TextSentimentAnnotation | undefined;
  setTextSentiment(value?: google_cloud_automl_v1beta1_text_sentiment_pb.TextSentimentAnnotation): void;

  hasTables(): boolean;
  clearTables(): void;
  getTables(): google_cloud_automl_v1beta1_tables_pb.TablesAnnotation | undefined;
  setTables(value?: google_cloud_automl_v1beta1_tables_pb.TablesAnnotation): void;

  getAnnotationSpecId(): string;
  setAnnotationSpecId(value: string): void;

  getDisplayName(): string;
  setDisplayName(value: string): void;

  getDetailCase(): AnnotationPayload.DetailCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AnnotationPayload.AsObject;
  static toObject(includeInstance: boolean, msg: AnnotationPayload): AnnotationPayload.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AnnotationPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AnnotationPayload;
  static deserializeBinaryFromReader(message: AnnotationPayload, reader: jspb.BinaryReader): AnnotationPayload;
}

export namespace AnnotationPayload {
  export type AsObject = {
    translation?: google_cloud_automl_v1beta1_translation_pb.TranslationAnnotation.AsObject,
    classification?: google_cloud_automl_v1beta1_classification_pb.ClassificationAnnotation.AsObject,
    imageObjectDetection?: google_cloud_automl_v1beta1_detection_pb.ImageObjectDetectionAnnotation.AsObject,
    videoClassification?: google_cloud_automl_v1beta1_classification_pb.VideoClassificationAnnotation.AsObject,
    videoObjectTracking?: google_cloud_automl_v1beta1_detection_pb.VideoObjectTrackingAnnotation.AsObject,
    textExtraction?: google_cloud_automl_v1beta1_text_extraction_pb.TextExtractionAnnotation.AsObject,
    textSentiment?: google_cloud_automl_v1beta1_text_sentiment_pb.TextSentimentAnnotation.AsObject,
    tables?: google_cloud_automl_v1beta1_tables_pb.TablesAnnotation.AsObject,
    annotationSpecId: string,
    displayName: string,
  }

  export enum DetailCase {
    DETAIL_NOT_SET = 0,
    TRANSLATION = 2,
    CLASSIFICATION = 3,
    IMAGE_OBJECT_DETECTION = 4,
    VIDEO_CLASSIFICATION = 9,
    VIDEO_OBJECT_TRACKING = 8,
    TEXT_EXTRACTION = 6,
    TEXT_SENTIMENT = 7,
    TABLES = 10,
  }
}

