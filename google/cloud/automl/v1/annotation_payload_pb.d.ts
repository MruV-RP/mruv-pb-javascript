// package: google.cloud.automl.v1
// file: google/cloud/automl/v1/annotation_payload.proto

import * as jspb from "google-protobuf";
import * as google_cloud_automl_v1_classification_pb from "../../../../google/cloud/automl/v1/classification_pb";
import * as google_cloud_automl_v1_detection_pb from "../../../../google/cloud/automl/v1/detection_pb";
import * as google_cloud_automl_v1_text_extraction_pb from "../../../../google/cloud/automl/v1/text_extraction_pb";
import * as google_cloud_automl_v1_text_sentiment_pb from "../../../../google/cloud/automl/v1/text_sentiment_pb";
import * as google_cloud_automl_v1_translation_pb from "../../../../google/cloud/automl/v1/translation_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";

export class AnnotationPayload extends jspb.Message {
  hasTranslation(): boolean;
  clearTranslation(): void;
  getTranslation(): google_cloud_automl_v1_translation_pb.TranslationAnnotation | undefined;
  setTranslation(value?: google_cloud_automl_v1_translation_pb.TranslationAnnotation): void;

  hasClassification(): boolean;
  clearClassification(): void;
  getClassification(): google_cloud_automl_v1_classification_pb.ClassificationAnnotation | undefined;
  setClassification(value?: google_cloud_automl_v1_classification_pb.ClassificationAnnotation): void;

  hasImageObjectDetection(): boolean;
  clearImageObjectDetection(): void;
  getImageObjectDetection(): google_cloud_automl_v1_detection_pb.ImageObjectDetectionAnnotation | undefined;
  setImageObjectDetection(value?: google_cloud_automl_v1_detection_pb.ImageObjectDetectionAnnotation): void;

  hasTextExtraction(): boolean;
  clearTextExtraction(): void;
  getTextExtraction(): google_cloud_automl_v1_text_extraction_pb.TextExtractionAnnotation | undefined;
  setTextExtraction(value?: google_cloud_automl_v1_text_extraction_pb.TextExtractionAnnotation): void;

  hasTextSentiment(): boolean;
  clearTextSentiment(): void;
  getTextSentiment(): google_cloud_automl_v1_text_sentiment_pb.TextSentimentAnnotation | undefined;
  setTextSentiment(value?: google_cloud_automl_v1_text_sentiment_pb.TextSentimentAnnotation): void;

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
    translation?: google_cloud_automl_v1_translation_pb.TranslationAnnotation.AsObject,
    classification?: google_cloud_automl_v1_classification_pb.ClassificationAnnotation.AsObject,
    imageObjectDetection?: google_cloud_automl_v1_detection_pb.ImageObjectDetectionAnnotation.AsObject,
    textExtraction?: google_cloud_automl_v1_text_extraction_pb.TextExtractionAnnotation.AsObject,
    textSentiment?: google_cloud_automl_v1_text_sentiment_pb.TextSentimentAnnotation.AsObject,
    annotationSpecId: string,
    displayName: string,
  }

  export enum DetailCase {
    DETAIL_NOT_SET = 0,
    TRANSLATION = 2,
    CLASSIFICATION = 3,
    IMAGE_OBJECT_DETECTION = 4,
    TEXT_EXTRACTION = 6,
    TEXT_SENTIMENT = 7,
  }
}

