// package: google.cloud.datalabeling.v1beta1
// file: google/cloud/datalabeling/v1beta1/human_annotation_config.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";

export class HumanAnnotationConfig extends jspb.Message {
  getInstruction(): string;
  setInstruction(value: string): void;

  getAnnotatedDatasetDisplayName(): string;
  setAnnotatedDatasetDisplayName(value: string): void;

  getAnnotatedDatasetDescription(): string;
  setAnnotatedDatasetDescription(value: string): void;

  getLabelGroup(): string;
  setLabelGroup(value: string): void;

  getLanguageCode(): string;
  setLanguageCode(value: string): void;

  getReplicaCount(): number;
  setReplicaCount(value: number): void;

  hasQuestionDuration(): boolean;
  clearQuestionDuration(): void;
  getQuestionDuration(): google_protobuf_duration_pb.Duration | undefined;
  setQuestionDuration(value?: google_protobuf_duration_pb.Duration): void;

  clearContributorEmailsList(): void;
  getContributorEmailsList(): Array<string>;
  setContributorEmailsList(value: Array<string>): void;
  addContributorEmails(value: string, index?: number): string;

  getUserEmailAddress(): string;
  setUserEmailAddress(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HumanAnnotationConfig.AsObject;
  static toObject(includeInstance: boolean, msg: HumanAnnotationConfig): HumanAnnotationConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HumanAnnotationConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HumanAnnotationConfig;
  static deserializeBinaryFromReader(message: HumanAnnotationConfig, reader: jspb.BinaryReader): HumanAnnotationConfig;
}

export namespace HumanAnnotationConfig {
  export type AsObject = {
    instruction: string,
    annotatedDatasetDisplayName: string,
    annotatedDatasetDescription: string,
    labelGroup: string,
    languageCode: string,
    replicaCount: number,
    questionDuration?: google_protobuf_duration_pb.Duration.AsObject,
    contributorEmailsList: Array<string>,
    userEmailAddress: string,
  }
}

export class ImageClassificationConfig extends jspb.Message {
  getAnnotationSpecSet(): string;
  setAnnotationSpecSet(value: string): void;

  getAllowMultiLabel(): boolean;
  setAllowMultiLabel(value: boolean): void;

  getAnswerAggregationType(): StringAggregationTypeMap[keyof StringAggregationTypeMap];
  setAnswerAggregationType(value: StringAggregationTypeMap[keyof StringAggregationTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImageClassificationConfig.AsObject;
  static toObject(includeInstance: boolean, msg: ImageClassificationConfig): ImageClassificationConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ImageClassificationConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImageClassificationConfig;
  static deserializeBinaryFromReader(message: ImageClassificationConfig, reader: jspb.BinaryReader): ImageClassificationConfig;
}

export namespace ImageClassificationConfig {
  export type AsObject = {
    annotationSpecSet: string,
    allowMultiLabel: boolean,
    answerAggregationType: StringAggregationTypeMap[keyof StringAggregationTypeMap],
  }
}

export class BoundingPolyConfig extends jspb.Message {
  getAnnotationSpecSet(): string;
  setAnnotationSpecSet(value: string): void;

  getInstructionMessage(): string;
  setInstructionMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BoundingPolyConfig.AsObject;
  static toObject(includeInstance: boolean, msg: BoundingPolyConfig): BoundingPolyConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BoundingPolyConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BoundingPolyConfig;
  static deserializeBinaryFromReader(message: BoundingPolyConfig, reader: jspb.BinaryReader): BoundingPolyConfig;
}

export namespace BoundingPolyConfig {
  export type AsObject = {
    annotationSpecSet: string,
    instructionMessage: string,
  }
}

export class PolylineConfig extends jspb.Message {
  getAnnotationSpecSet(): string;
  setAnnotationSpecSet(value: string): void;

  getInstructionMessage(): string;
  setInstructionMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PolylineConfig.AsObject;
  static toObject(includeInstance: boolean, msg: PolylineConfig): PolylineConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PolylineConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PolylineConfig;
  static deserializeBinaryFromReader(message: PolylineConfig, reader: jspb.BinaryReader): PolylineConfig;
}

export namespace PolylineConfig {
  export type AsObject = {
    annotationSpecSet: string,
    instructionMessage: string,
  }
}

export class SegmentationConfig extends jspb.Message {
  getAnnotationSpecSet(): string;
  setAnnotationSpecSet(value: string): void;

  getInstructionMessage(): string;
  setInstructionMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SegmentationConfig.AsObject;
  static toObject(includeInstance: boolean, msg: SegmentationConfig): SegmentationConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SegmentationConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SegmentationConfig;
  static deserializeBinaryFromReader(message: SegmentationConfig, reader: jspb.BinaryReader): SegmentationConfig;
}

export namespace SegmentationConfig {
  export type AsObject = {
    annotationSpecSet: string,
    instructionMessage: string,
  }
}

export class VideoClassificationConfig extends jspb.Message {
  clearAnnotationSpecSetConfigsList(): void;
  getAnnotationSpecSetConfigsList(): Array<VideoClassificationConfig.AnnotationSpecSetConfig>;
  setAnnotationSpecSetConfigsList(value: Array<VideoClassificationConfig.AnnotationSpecSetConfig>): void;
  addAnnotationSpecSetConfigs(value?: VideoClassificationConfig.AnnotationSpecSetConfig, index?: number): VideoClassificationConfig.AnnotationSpecSetConfig;

  getApplyShotDetection(): boolean;
  setApplyShotDetection(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VideoClassificationConfig.AsObject;
  static toObject(includeInstance: boolean, msg: VideoClassificationConfig): VideoClassificationConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VideoClassificationConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VideoClassificationConfig;
  static deserializeBinaryFromReader(message: VideoClassificationConfig, reader: jspb.BinaryReader): VideoClassificationConfig;
}

export namespace VideoClassificationConfig {
  export type AsObject = {
    annotationSpecSetConfigsList: Array<VideoClassificationConfig.AnnotationSpecSetConfig.AsObject>,
    applyShotDetection: boolean,
  }

  export class AnnotationSpecSetConfig extends jspb.Message {
    getAnnotationSpecSet(): string;
    setAnnotationSpecSet(value: string): void;

    getAllowMultiLabel(): boolean;
    setAllowMultiLabel(value: boolean): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AnnotationSpecSetConfig.AsObject;
    static toObject(includeInstance: boolean, msg: AnnotationSpecSetConfig): AnnotationSpecSetConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AnnotationSpecSetConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AnnotationSpecSetConfig;
    static deserializeBinaryFromReader(message: AnnotationSpecSetConfig, reader: jspb.BinaryReader): AnnotationSpecSetConfig;
  }

  export namespace AnnotationSpecSetConfig {
    export type AsObject = {
      annotationSpecSet: string,
      allowMultiLabel: boolean,
    }
  }
}

export class ObjectDetectionConfig extends jspb.Message {
  getAnnotationSpecSet(): string;
  setAnnotationSpecSet(value: string): void;

  getExtractionFrameRate(): number;
  setExtractionFrameRate(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ObjectDetectionConfig.AsObject;
  static toObject(includeInstance: boolean, msg: ObjectDetectionConfig): ObjectDetectionConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ObjectDetectionConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ObjectDetectionConfig;
  static deserializeBinaryFromReader(message: ObjectDetectionConfig, reader: jspb.BinaryReader): ObjectDetectionConfig;
}

export namespace ObjectDetectionConfig {
  export type AsObject = {
    annotationSpecSet: string,
    extractionFrameRate: number,
  }
}

export class ObjectTrackingConfig extends jspb.Message {
  getAnnotationSpecSet(): string;
  setAnnotationSpecSet(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ObjectTrackingConfig.AsObject;
  static toObject(includeInstance: boolean, msg: ObjectTrackingConfig): ObjectTrackingConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ObjectTrackingConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ObjectTrackingConfig;
  static deserializeBinaryFromReader(message: ObjectTrackingConfig, reader: jspb.BinaryReader): ObjectTrackingConfig;
}

export namespace ObjectTrackingConfig {
  export type AsObject = {
    annotationSpecSet: string,
  }
}

export class EventConfig extends jspb.Message {
  clearAnnotationSpecSetsList(): void;
  getAnnotationSpecSetsList(): Array<string>;
  setAnnotationSpecSetsList(value: Array<string>): void;
  addAnnotationSpecSets(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventConfig.AsObject;
  static toObject(includeInstance: boolean, msg: EventConfig): EventConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventConfig;
  static deserializeBinaryFromReader(message: EventConfig, reader: jspb.BinaryReader): EventConfig;
}

export namespace EventConfig {
  export type AsObject = {
    annotationSpecSetsList: Array<string>,
  }
}

export class TextClassificationConfig extends jspb.Message {
  getAllowMultiLabel(): boolean;
  setAllowMultiLabel(value: boolean): void;

  getAnnotationSpecSet(): string;
  setAnnotationSpecSet(value: string): void;

  hasSentimentConfig(): boolean;
  clearSentimentConfig(): void;
  getSentimentConfig(): SentimentConfig | undefined;
  setSentimentConfig(value?: SentimentConfig): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TextClassificationConfig.AsObject;
  static toObject(includeInstance: boolean, msg: TextClassificationConfig): TextClassificationConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TextClassificationConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TextClassificationConfig;
  static deserializeBinaryFromReader(message: TextClassificationConfig, reader: jspb.BinaryReader): TextClassificationConfig;
}

export namespace TextClassificationConfig {
  export type AsObject = {
    allowMultiLabel: boolean,
    annotationSpecSet: string,
    sentimentConfig?: SentimentConfig.AsObject,
  }
}

export class SentimentConfig extends jspb.Message {
  getEnableLabelSentimentSelection(): boolean;
  setEnableLabelSentimentSelection(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SentimentConfig.AsObject;
  static toObject(includeInstance: boolean, msg: SentimentConfig): SentimentConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SentimentConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SentimentConfig;
  static deserializeBinaryFromReader(message: SentimentConfig, reader: jspb.BinaryReader): SentimentConfig;
}

export namespace SentimentConfig {
  export type AsObject = {
    enableLabelSentimentSelection: boolean,
  }
}

export class TextEntityExtractionConfig extends jspb.Message {
  getAnnotationSpecSet(): string;
  setAnnotationSpecSet(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TextEntityExtractionConfig.AsObject;
  static toObject(includeInstance: boolean, msg: TextEntityExtractionConfig): TextEntityExtractionConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TextEntityExtractionConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TextEntityExtractionConfig;
  static deserializeBinaryFromReader(message: TextEntityExtractionConfig, reader: jspb.BinaryReader): TextEntityExtractionConfig;
}

export namespace TextEntityExtractionConfig {
  export type AsObject = {
    annotationSpecSet: string,
  }
}

export interface StringAggregationTypeMap {
  STRING_AGGREGATION_TYPE_UNSPECIFIED: 0;
  MAJORITY_VOTE: 1;
  UNANIMOUS_VOTE: 2;
  NO_AGGREGATION: 3;
}

export const StringAggregationType: StringAggregationTypeMap;

