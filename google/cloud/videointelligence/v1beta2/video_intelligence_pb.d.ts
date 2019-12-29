// package: google.cloud.videointelligence.v1beta2
// file: google/cloud/videointelligence/v1beta2/video_intelligence.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";
import * as google_longrunning_operations_pb from "../../../../google/longrunning/operations_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_rpc_status_pb from "../../../../google/rpc/status_pb";

export class AnnotateVideoRequest extends jspb.Message {
  getInputUri(): string;
  setInputUri(value: string): void;

  getInputContent(): Uint8Array | string;
  getInputContent_asU8(): Uint8Array;
  getInputContent_asB64(): string;
  setInputContent(value: Uint8Array | string): void;

  clearFeaturesList(): void;
  getFeaturesList(): Array<FeatureMap[keyof FeatureMap]>;
  setFeaturesList(value: Array<FeatureMap[keyof FeatureMap]>): void;
  addFeatures(value: FeatureMap[keyof FeatureMap], index?: number): FeatureMap[keyof FeatureMap];

  hasVideoContext(): boolean;
  clearVideoContext(): void;
  getVideoContext(): VideoContext | undefined;
  setVideoContext(value?: VideoContext): void;

  getOutputUri(): string;
  setOutputUri(value: string): void;

  getLocationId(): string;
  setLocationId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AnnotateVideoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AnnotateVideoRequest): AnnotateVideoRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AnnotateVideoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AnnotateVideoRequest;
  static deserializeBinaryFromReader(message: AnnotateVideoRequest, reader: jspb.BinaryReader): AnnotateVideoRequest;
}

export namespace AnnotateVideoRequest {
  export type AsObject = {
    inputUri: string,
    inputContent: Uint8Array | string,
    featuresList: Array<FeatureMap[keyof FeatureMap]>,
    videoContext?: VideoContext.AsObject,
    outputUri: string,
    locationId: string,
  }
}

export class VideoContext extends jspb.Message {
  clearSegmentsList(): void;
  getSegmentsList(): Array<VideoSegment>;
  setSegmentsList(value: Array<VideoSegment>): void;
  addSegments(value?: VideoSegment, index?: number): VideoSegment;

  hasLabelDetectionConfig(): boolean;
  clearLabelDetectionConfig(): void;
  getLabelDetectionConfig(): LabelDetectionConfig | undefined;
  setLabelDetectionConfig(value?: LabelDetectionConfig): void;

  hasShotChangeDetectionConfig(): boolean;
  clearShotChangeDetectionConfig(): void;
  getShotChangeDetectionConfig(): ShotChangeDetectionConfig | undefined;
  setShotChangeDetectionConfig(value?: ShotChangeDetectionConfig): void;

  hasExplicitContentDetectionConfig(): boolean;
  clearExplicitContentDetectionConfig(): void;
  getExplicitContentDetectionConfig(): ExplicitContentDetectionConfig | undefined;
  setExplicitContentDetectionConfig(value?: ExplicitContentDetectionConfig): void;

  hasFaceDetectionConfig(): boolean;
  clearFaceDetectionConfig(): void;
  getFaceDetectionConfig(): FaceDetectionConfig | undefined;
  setFaceDetectionConfig(value?: FaceDetectionConfig): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VideoContext.AsObject;
  static toObject(includeInstance: boolean, msg: VideoContext): VideoContext.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VideoContext, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VideoContext;
  static deserializeBinaryFromReader(message: VideoContext, reader: jspb.BinaryReader): VideoContext;
}

export namespace VideoContext {
  export type AsObject = {
    segmentsList: Array<VideoSegment.AsObject>,
    labelDetectionConfig?: LabelDetectionConfig.AsObject,
    shotChangeDetectionConfig?: ShotChangeDetectionConfig.AsObject,
    explicitContentDetectionConfig?: ExplicitContentDetectionConfig.AsObject,
    faceDetectionConfig?: FaceDetectionConfig.AsObject,
  }
}

export class LabelDetectionConfig extends jspb.Message {
  getLabelDetectionMode(): LabelDetectionModeMap[keyof LabelDetectionModeMap];
  setLabelDetectionMode(value: LabelDetectionModeMap[keyof LabelDetectionModeMap]): void;

  getStationaryCamera(): boolean;
  setStationaryCamera(value: boolean): void;

  getModel(): string;
  setModel(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LabelDetectionConfig.AsObject;
  static toObject(includeInstance: boolean, msg: LabelDetectionConfig): LabelDetectionConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LabelDetectionConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LabelDetectionConfig;
  static deserializeBinaryFromReader(message: LabelDetectionConfig, reader: jspb.BinaryReader): LabelDetectionConfig;
}

export namespace LabelDetectionConfig {
  export type AsObject = {
    labelDetectionMode: LabelDetectionModeMap[keyof LabelDetectionModeMap],
    stationaryCamera: boolean,
    model: string,
  }
}

export class ShotChangeDetectionConfig extends jspb.Message {
  getModel(): string;
  setModel(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShotChangeDetectionConfig.AsObject;
  static toObject(includeInstance: boolean, msg: ShotChangeDetectionConfig): ShotChangeDetectionConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ShotChangeDetectionConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShotChangeDetectionConfig;
  static deserializeBinaryFromReader(message: ShotChangeDetectionConfig, reader: jspb.BinaryReader): ShotChangeDetectionConfig;
}

export namespace ShotChangeDetectionConfig {
  export type AsObject = {
    model: string,
  }
}

export class ExplicitContentDetectionConfig extends jspb.Message {
  getModel(): string;
  setModel(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExplicitContentDetectionConfig.AsObject;
  static toObject(includeInstance: boolean, msg: ExplicitContentDetectionConfig): ExplicitContentDetectionConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExplicitContentDetectionConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExplicitContentDetectionConfig;
  static deserializeBinaryFromReader(message: ExplicitContentDetectionConfig, reader: jspb.BinaryReader): ExplicitContentDetectionConfig;
}

export namespace ExplicitContentDetectionConfig {
  export type AsObject = {
    model: string,
  }
}

export class FaceDetectionConfig extends jspb.Message {
  getModel(): string;
  setModel(value: string): void;

  getIncludeBoundingBoxes(): boolean;
  setIncludeBoundingBoxes(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FaceDetectionConfig.AsObject;
  static toObject(includeInstance: boolean, msg: FaceDetectionConfig): FaceDetectionConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FaceDetectionConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FaceDetectionConfig;
  static deserializeBinaryFromReader(message: FaceDetectionConfig, reader: jspb.BinaryReader): FaceDetectionConfig;
}

export namespace FaceDetectionConfig {
  export type AsObject = {
    model: string,
    includeBoundingBoxes: boolean,
  }
}

export class VideoSegment extends jspb.Message {
  hasStartTimeOffset(): boolean;
  clearStartTimeOffset(): void;
  getStartTimeOffset(): google_protobuf_duration_pb.Duration | undefined;
  setStartTimeOffset(value?: google_protobuf_duration_pb.Duration): void;

  hasEndTimeOffset(): boolean;
  clearEndTimeOffset(): void;
  getEndTimeOffset(): google_protobuf_duration_pb.Duration | undefined;
  setEndTimeOffset(value?: google_protobuf_duration_pb.Duration): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VideoSegment.AsObject;
  static toObject(includeInstance: boolean, msg: VideoSegment): VideoSegment.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VideoSegment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VideoSegment;
  static deserializeBinaryFromReader(message: VideoSegment, reader: jspb.BinaryReader): VideoSegment;
}

export namespace VideoSegment {
  export type AsObject = {
    startTimeOffset?: google_protobuf_duration_pb.Duration.AsObject,
    endTimeOffset?: google_protobuf_duration_pb.Duration.AsObject,
  }
}

export class LabelSegment extends jspb.Message {
  hasSegment(): boolean;
  clearSegment(): void;
  getSegment(): VideoSegment | undefined;
  setSegment(value?: VideoSegment): void;

  getConfidence(): number;
  setConfidence(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LabelSegment.AsObject;
  static toObject(includeInstance: boolean, msg: LabelSegment): LabelSegment.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LabelSegment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LabelSegment;
  static deserializeBinaryFromReader(message: LabelSegment, reader: jspb.BinaryReader): LabelSegment;
}

export namespace LabelSegment {
  export type AsObject = {
    segment?: VideoSegment.AsObject,
    confidence: number,
  }
}

export class LabelFrame extends jspb.Message {
  hasTimeOffset(): boolean;
  clearTimeOffset(): void;
  getTimeOffset(): google_protobuf_duration_pb.Duration | undefined;
  setTimeOffset(value?: google_protobuf_duration_pb.Duration): void;

  getConfidence(): number;
  setConfidence(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LabelFrame.AsObject;
  static toObject(includeInstance: boolean, msg: LabelFrame): LabelFrame.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LabelFrame, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LabelFrame;
  static deserializeBinaryFromReader(message: LabelFrame, reader: jspb.BinaryReader): LabelFrame;
}

export namespace LabelFrame {
  export type AsObject = {
    timeOffset?: google_protobuf_duration_pb.Duration.AsObject,
    confidence: number,
  }
}

export class Entity extends jspb.Message {
  getEntityId(): string;
  setEntityId(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getLanguageCode(): string;
  setLanguageCode(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Entity.AsObject;
  static toObject(includeInstance: boolean, msg: Entity): Entity.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Entity, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Entity;
  static deserializeBinaryFromReader(message: Entity, reader: jspb.BinaryReader): Entity;
}

export namespace Entity {
  export type AsObject = {
    entityId: string,
    description: string,
    languageCode: string,
  }
}

export class LabelAnnotation extends jspb.Message {
  hasEntity(): boolean;
  clearEntity(): void;
  getEntity(): Entity | undefined;
  setEntity(value?: Entity): void;

  clearCategoryEntitiesList(): void;
  getCategoryEntitiesList(): Array<Entity>;
  setCategoryEntitiesList(value: Array<Entity>): void;
  addCategoryEntities(value?: Entity, index?: number): Entity;

  clearSegmentsList(): void;
  getSegmentsList(): Array<LabelSegment>;
  setSegmentsList(value: Array<LabelSegment>): void;
  addSegments(value?: LabelSegment, index?: number): LabelSegment;

  clearFramesList(): void;
  getFramesList(): Array<LabelFrame>;
  setFramesList(value: Array<LabelFrame>): void;
  addFrames(value?: LabelFrame, index?: number): LabelFrame;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LabelAnnotation.AsObject;
  static toObject(includeInstance: boolean, msg: LabelAnnotation): LabelAnnotation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LabelAnnotation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LabelAnnotation;
  static deserializeBinaryFromReader(message: LabelAnnotation, reader: jspb.BinaryReader): LabelAnnotation;
}

export namespace LabelAnnotation {
  export type AsObject = {
    entity?: Entity.AsObject,
    categoryEntitiesList: Array<Entity.AsObject>,
    segmentsList: Array<LabelSegment.AsObject>,
    framesList: Array<LabelFrame.AsObject>,
  }
}

export class ExplicitContentFrame extends jspb.Message {
  hasTimeOffset(): boolean;
  clearTimeOffset(): void;
  getTimeOffset(): google_protobuf_duration_pb.Duration | undefined;
  setTimeOffset(value?: google_protobuf_duration_pb.Duration): void;

  getPornographyLikelihood(): LikelihoodMap[keyof LikelihoodMap];
  setPornographyLikelihood(value: LikelihoodMap[keyof LikelihoodMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExplicitContentFrame.AsObject;
  static toObject(includeInstance: boolean, msg: ExplicitContentFrame): ExplicitContentFrame.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExplicitContentFrame, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExplicitContentFrame;
  static deserializeBinaryFromReader(message: ExplicitContentFrame, reader: jspb.BinaryReader): ExplicitContentFrame;
}

export namespace ExplicitContentFrame {
  export type AsObject = {
    timeOffset?: google_protobuf_duration_pb.Duration.AsObject,
    pornographyLikelihood: LikelihoodMap[keyof LikelihoodMap],
  }
}

export class ExplicitContentAnnotation extends jspb.Message {
  clearFramesList(): void;
  getFramesList(): Array<ExplicitContentFrame>;
  setFramesList(value: Array<ExplicitContentFrame>): void;
  addFrames(value?: ExplicitContentFrame, index?: number): ExplicitContentFrame;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExplicitContentAnnotation.AsObject;
  static toObject(includeInstance: boolean, msg: ExplicitContentAnnotation): ExplicitContentAnnotation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExplicitContentAnnotation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExplicitContentAnnotation;
  static deserializeBinaryFromReader(message: ExplicitContentAnnotation, reader: jspb.BinaryReader): ExplicitContentAnnotation;
}

export namespace ExplicitContentAnnotation {
  export type AsObject = {
    framesList: Array<ExplicitContentFrame.AsObject>,
  }
}

export class NormalizedBoundingBox extends jspb.Message {
  getLeft(): number;
  setLeft(value: number): void;

  getTop(): number;
  setTop(value: number): void;

  getRight(): number;
  setRight(value: number): void;

  getBottom(): number;
  setBottom(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NormalizedBoundingBox.AsObject;
  static toObject(includeInstance: boolean, msg: NormalizedBoundingBox): NormalizedBoundingBox.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NormalizedBoundingBox, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NormalizedBoundingBox;
  static deserializeBinaryFromReader(message: NormalizedBoundingBox, reader: jspb.BinaryReader): NormalizedBoundingBox;
}

export namespace NormalizedBoundingBox {
  export type AsObject = {
    left: number,
    top: number,
    right: number,
    bottom: number,
  }
}

export class FaceSegment extends jspb.Message {
  hasSegment(): boolean;
  clearSegment(): void;
  getSegment(): VideoSegment | undefined;
  setSegment(value?: VideoSegment): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FaceSegment.AsObject;
  static toObject(includeInstance: boolean, msg: FaceSegment): FaceSegment.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FaceSegment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FaceSegment;
  static deserializeBinaryFromReader(message: FaceSegment, reader: jspb.BinaryReader): FaceSegment;
}

export namespace FaceSegment {
  export type AsObject = {
    segment?: VideoSegment.AsObject,
  }
}

export class FaceFrame extends jspb.Message {
  clearNormalizedBoundingBoxesList(): void;
  getNormalizedBoundingBoxesList(): Array<NormalizedBoundingBox>;
  setNormalizedBoundingBoxesList(value: Array<NormalizedBoundingBox>): void;
  addNormalizedBoundingBoxes(value?: NormalizedBoundingBox, index?: number): NormalizedBoundingBox;

  hasTimeOffset(): boolean;
  clearTimeOffset(): void;
  getTimeOffset(): google_protobuf_duration_pb.Duration | undefined;
  setTimeOffset(value?: google_protobuf_duration_pb.Duration): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FaceFrame.AsObject;
  static toObject(includeInstance: boolean, msg: FaceFrame): FaceFrame.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FaceFrame, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FaceFrame;
  static deserializeBinaryFromReader(message: FaceFrame, reader: jspb.BinaryReader): FaceFrame;
}

export namespace FaceFrame {
  export type AsObject = {
    normalizedBoundingBoxesList: Array<NormalizedBoundingBox.AsObject>,
    timeOffset?: google_protobuf_duration_pb.Duration.AsObject,
  }
}

export class FaceAnnotation extends jspb.Message {
  getThumbnail(): Uint8Array | string;
  getThumbnail_asU8(): Uint8Array;
  getThumbnail_asB64(): string;
  setThumbnail(value: Uint8Array | string): void;

  clearSegmentsList(): void;
  getSegmentsList(): Array<FaceSegment>;
  setSegmentsList(value: Array<FaceSegment>): void;
  addSegments(value?: FaceSegment, index?: number): FaceSegment;

  clearFramesList(): void;
  getFramesList(): Array<FaceFrame>;
  setFramesList(value: Array<FaceFrame>): void;
  addFrames(value?: FaceFrame, index?: number): FaceFrame;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FaceAnnotation.AsObject;
  static toObject(includeInstance: boolean, msg: FaceAnnotation): FaceAnnotation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FaceAnnotation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FaceAnnotation;
  static deserializeBinaryFromReader(message: FaceAnnotation, reader: jspb.BinaryReader): FaceAnnotation;
}

export namespace FaceAnnotation {
  export type AsObject = {
    thumbnail: Uint8Array | string,
    segmentsList: Array<FaceSegment.AsObject>,
    framesList: Array<FaceFrame.AsObject>,
  }
}

export class VideoAnnotationResults extends jspb.Message {
  getInputUri(): string;
  setInputUri(value: string): void;

  clearSegmentLabelAnnotationsList(): void;
  getSegmentLabelAnnotationsList(): Array<LabelAnnotation>;
  setSegmentLabelAnnotationsList(value: Array<LabelAnnotation>): void;
  addSegmentLabelAnnotations(value?: LabelAnnotation, index?: number): LabelAnnotation;

  clearShotLabelAnnotationsList(): void;
  getShotLabelAnnotationsList(): Array<LabelAnnotation>;
  setShotLabelAnnotationsList(value: Array<LabelAnnotation>): void;
  addShotLabelAnnotations(value?: LabelAnnotation, index?: number): LabelAnnotation;

  clearFrameLabelAnnotationsList(): void;
  getFrameLabelAnnotationsList(): Array<LabelAnnotation>;
  setFrameLabelAnnotationsList(value: Array<LabelAnnotation>): void;
  addFrameLabelAnnotations(value?: LabelAnnotation, index?: number): LabelAnnotation;

  clearFaceAnnotationsList(): void;
  getFaceAnnotationsList(): Array<FaceAnnotation>;
  setFaceAnnotationsList(value: Array<FaceAnnotation>): void;
  addFaceAnnotations(value?: FaceAnnotation, index?: number): FaceAnnotation;

  clearShotAnnotationsList(): void;
  getShotAnnotationsList(): Array<VideoSegment>;
  setShotAnnotationsList(value: Array<VideoSegment>): void;
  addShotAnnotations(value?: VideoSegment, index?: number): VideoSegment;

  hasExplicitAnnotation(): boolean;
  clearExplicitAnnotation(): void;
  getExplicitAnnotation(): ExplicitContentAnnotation | undefined;
  setExplicitAnnotation(value?: ExplicitContentAnnotation): void;

  hasError(): boolean;
  clearError(): void;
  getError(): google_rpc_status_pb.Status | undefined;
  setError(value?: google_rpc_status_pb.Status): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VideoAnnotationResults.AsObject;
  static toObject(includeInstance: boolean, msg: VideoAnnotationResults): VideoAnnotationResults.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VideoAnnotationResults, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VideoAnnotationResults;
  static deserializeBinaryFromReader(message: VideoAnnotationResults, reader: jspb.BinaryReader): VideoAnnotationResults;
}

export namespace VideoAnnotationResults {
  export type AsObject = {
    inputUri: string,
    segmentLabelAnnotationsList: Array<LabelAnnotation.AsObject>,
    shotLabelAnnotationsList: Array<LabelAnnotation.AsObject>,
    frameLabelAnnotationsList: Array<LabelAnnotation.AsObject>,
    faceAnnotationsList: Array<FaceAnnotation.AsObject>,
    shotAnnotationsList: Array<VideoSegment.AsObject>,
    explicitAnnotation?: ExplicitContentAnnotation.AsObject,
    error?: google_rpc_status_pb.Status.AsObject,
  }
}

export class AnnotateVideoResponse extends jspb.Message {
  clearAnnotationResultsList(): void;
  getAnnotationResultsList(): Array<VideoAnnotationResults>;
  setAnnotationResultsList(value: Array<VideoAnnotationResults>): void;
  addAnnotationResults(value?: VideoAnnotationResults, index?: number): VideoAnnotationResults;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AnnotateVideoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AnnotateVideoResponse): AnnotateVideoResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AnnotateVideoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AnnotateVideoResponse;
  static deserializeBinaryFromReader(message: AnnotateVideoResponse, reader: jspb.BinaryReader): AnnotateVideoResponse;
}

export namespace AnnotateVideoResponse {
  export type AsObject = {
    annotationResultsList: Array<VideoAnnotationResults.AsObject>,
  }
}

export class VideoAnnotationProgress extends jspb.Message {
  getInputUri(): string;
  setInputUri(value: string): void;

  getProgressPercent(): number;
  setProgressPercent(value: number): void;

  hasStartTime(): boolean;
  clearStartTime(): void;
  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdateTime(): boolean;
  clearUpdateTime(): void;
  getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VideoAnnotationProgress.AsObject;
  static toObject(includeInstance: boolean, msg: VideoAnnotationProgress): VideoAnnotationProgress.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VideoAnnotationProgress, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VideoAnnotationProgress;
  static deserializeBinaryFromReader(message: VideoAnnotationProgress, reader: jspb.BinaryReader): VideoAnnotationProgress;
}

export namespace VideoAnnotationProgress {
  export type AsObject = {
    inputUri: string,
    progressPercent: number,
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class AnnotateVideoProgress extends jspb.Message {
  clearAnnotationProgressList(): void;
  getAnnotationProgressList(): Array<VideoAnnotationProgress>;
  setAnnotationProgressList(value: Array<VideoAnnotationProgress>): void;
  addAnnotationProgress(value?: VideoAnnotationProgress, index?: number): VideoAnnotationProgress;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AnnotateVideoProgress.AsObject;
  static toObject(includeInstance: boolean, msg: AnnotateVideoProgress): AnnotateVideoProgress.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AnnotateVideoProgress, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AnnotateVideoProgress;
  static deserializeBinaryFromReader(message: AnnotateVideoProgress, reader: jspb.BinaryReader): AnnotateVideoProgress;
}

export namespace AnnotateVideoProgress {
  export type AsObject = {
    annotationProgressList: Array<VideoAnnotationProgress.AsObject>,
  }
}

export interface FeatureMap {
  FEATURE_UNSPECIFIED: 0;
  LABEL_DETECTION: 1;
  SHOT_CHANGE_DETECTION: 2;
  EXPLICIT_CONTENT_DETECTION: 3;
  FACE_DETECTION: 4;
}

export const Feature: FeatureMap;

export interface LabelDetectionModeMap {
  LABEL_DETECTION_MODE_UNSPECIFIED: 0;
  SHOT_MODE: 1;
  FRAME_MODE: 2;
  SHOT_AND_FRAME_MODE: 3;
}

export const LabelDetectionMode: LabelDetectionModeMap;

export interface LikelihoodMap {
  LIKELIHOOD_UNSPECIFIED: 0;
  VERY_UNLIKELY: 1;
  UNLIKELY: 2;
  POSSIBLE: 3;
  LIKELY: 4;
  VERY_LIKELY: 5;
}

export const Likelihood: LikelihoodMap;

