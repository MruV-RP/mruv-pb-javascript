// package: google.cloud.datalabeling.v1beta1
// file: google/cloud/datalabeling/v1beta1/evaluation_job.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";
import * as google_cloud_datalabeling_v1beta1_dataset_pb from "../../../../google/cloud/datalabeling/v1beta1/dataset_pb";
import * as google_cloud_datalabeling_v1beta1_evaluation_pb from "../../../../google/cloud/datalabeling/v1beta1/evaluation_pb";
import * as google_cloud_datalabeling_v1beta1_human_annotation_config_pb from "../../../../google/cloud/datalabeling/v1beta1/human_annotation_config_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_rpc_status_pb from "../../../../google/rpc/status_pb";

export class EvaluationJob extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getState(): EvaluationJob.StateMap[keyof EvaluationJob.StateMap];
  setState(value: EvaluationJob.StateMap[keyof EvaluationJob.StateMap]): void;

  getSchedule(): string;
  setSchedule(value: string): void;

  getModelVersion(): string;
  setModelVersion(value: string): void;

  hasEvaluationJobConfig(): boolean;
  clearEvaluationJobConfig(): void;
  getEvaluationJobConfig(): EvaluationJobConfig | undefined;
  setEvaluationJobConfig(value?: EvaluationJobConfig): void;

  getAnnotationSpecSet(): string;
  setAnnotationSpecSet(value: string): void;

  getLabelMissingGroundTruth(): boolean;
  setLabelMissingGroundTruth(value: boolean): void;

  clearAttemptsList(): void;
  getAttemptsList(): Array<Attempt>;
  setAttemptsList(value: Array<Attempt>): void;
  addAttempts(value?: Attempt, index?: number): Attempt;

  hasCreateTime(): boolean;
  clearCreateTime(): void;
  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EvaluationJob.AsObject;
  static toObject(includeInstance: boolean, msg: EvaluationJob): EvaluationJob.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EvaluationJob, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EvaluationJob;
  static deserializeBinaryFromReader(message: EvaluationJob, reader: jspb.BinaryReader): EvaluationJob;
}

export namespace EvaluationJob {
  export type AsObject = {
    name: string,
    description: string,
    state: EvaluationJob.StateMap[keyof EvaluationJob.StateMap],
    schedule: string,
    modelVersion: string,
    evaluationJobConfig?: EvaluationJobConfig.AsObject,
    annotationSpecSet: string,
    labelMissingGroundTruth: boolean,
    attemptsList: Array<Attempt.AsObject>,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export interface StateMap {
    STATE_UNSPECIFIED: 0;
    SCHEDULED: 1;
    RUNNING: 2;
    PAUSED: 3;
    STOPPED: 4;
  }

  export const State: StateMap;
}

export class EvaluationJobConfig extends jspb.Message {
  hasImageClassificationConfig(): boolean;
  clearImageClassificationConfig(): void;
  getImageClassificationConfig(): google_cloud_datalabeling_v1beta1_human_annotation_config_pb.ImageClassificationConfig | undefined;
  setImageClassificationConfig(value?: google_cloud_datalabeling_v1beta1_human_annotation_config_pb.ImageClassificationConfig): void;

  hasBoundingPolyConfig(): boolean;
  clearBoundingPolyConfig(): void;
  getBoundingPolyConfig(): google_cloud_datalabeling_v1beta1_human_annotation_config_pb.BoundingPolyConfig | undefined;
  setBoundingPolyConfig(value?: google_cloud_datalabeling_v1beta1_human_annotation_config_pb.BoundingPolyConfig): void;

  hasVideoClassificationConfig(): boolean;
  clearVideoClassificationConfig(): void;
  getVideoClassificationConfig(): google_cloud_datalabeling_v1beta1_human_annotation_config_pb.VideoClassificationConfig | undefined;
  setVideoClassificationConfig(value?: google_cloud_datalabeling_v1beta1_human_annotation_config_pb.VideoClassificationConfig): void;

  hasObjectDetectionConfig(): boolean;
  clearObjectDetectionConfig(): void;
  getObjectDetectionConfig(): google_cloud_datalabeling_v1beta1_human_annotation_config_pb.ObjectDetectionConfig | undefined;
  setObjectDetectionConfig(value?: google_cloud_datalabeling_v1beta1_human_annotation_config_pb.ObjectDetectionConfig): void;

  hasTextClassificationConfig(): boolean;
  clearTextClassificationConfig(): void;
  getTextClassificationConfig(): google_cloud_datalabeling_v1beta1_human_annotation_config_pb.TextClassificationConfig | undefined;
  setTextClassificationConfig(value?: google_cloud_datalabeling_v1beta1_human_annotation_config_pb.TextClassificationConfig): void;

  hasObjectTrackingConfig(): boolean;
  clearObjectTrackingConfig(): void;
  getObjectTrackingConfig(): google_cloud_datalabeling_v1beta1_human_annotation_config_pb.ObjectTrackingConfig | undefined;
  setObjectTrackingConfig(value?: google_cloud_datalabeling_v1beta1_human_annotation_config_pb.ObjectTrackingConfig): void;

  hasInputConfig(): boolean;
  clearInputConfig(): void;
  getInputConfig(): google_cloud_datalabeling_v1beta1_dataset_pb.InputConfig | undefined;
  setInputConfig(value?: google_cloud_datalabeling_v1beta1_dataset_pb.InputConfig): void;

  hasEvaluationConfig(): boolean;
  clearEvaluationConfig(): void;
  getEvaluationConfig(): google_cloud_datalabeling_v1beta1_evaluation_pb.EvaluationConfig | undefined;
  setEvaluationConfig(value?: google_cloud_datalabeling_v1beta1_evaluation_pb.EvaluationConfig): void;

  hasHumanAnnotationConfig(): boolean;
  clearHumanAnnotationConfig(): void;
  getHumanAnnotationConfig(): google_cloud_datalabeling_v1beta1_human_annotation_config_pb.HumanAnnotationConfig | undefined;
  setHumanAnnotationConfig(value?: google_cloud_datalabeling_v1beta1_human_annotation_config_pb.HumanAnnotationConfig): void;

  getBigqueryImportKeysMap(): jspb.Map<string, string>;
  clearBigqueryImportKeysMap(): void;
  getExampleCount(): number;
  setExampleCount(value: number): void;

  getExampleSamplePercentage(): number;
  setExampleSamplePercentage(value: number): void;

  hasEvaluationJobAlertConfig(): boolean;
  clearEvaluationJobAlertConfig(): void;
  getEvaluationJobAlertConfig(): EvaluationJobAlertConfig | undefined;
  setEvaluationJobAlertConfig(value?: EvaluationJobAlertConfig): void;

  getHumanAnnotationRequestConfigCase(): EvaluationJobConfig.HumanAnnotationRequestConfigCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EvaluationJobConfig.AsObject;
  static toObject(includeInstance: boolean, msg: EvaluationJobConfig): EvaluationJobConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EvaluationJobConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EvaluationJobConfig;
  static deserializeBinaryFromReader(message: EvaluationJobConfig, reader: jspb.BinaryReader): EvaluationJobConfig;
}

export namespace EvaluationJobConfig {
  export type AsObject = {
    imageClassificationConfig?: google_cloud_datalabeling_v1beta1_human_annotation_config_pb.ImageClassificationConfig.AsObject,
    boundingPolyConfig?: google_cloud_datalabeling_v1beta1_human_annotation_config_pb.BoundingPolyConfig.AsObject,
    videoClassificationConfig?: google_cloud_datalabeling_v1beta1_human_annotation_config_pb.VideoClassificationConfig.AsObject,
    objectDetectionConfig?: google_cloud_datalabeling_v1beta1_human_annotation_config_pb.ObjectDetectionConfig.AsObject,
    textClassificationConfig?: google_cloud_datalabeling_v1beta1_human_annotation_config_pb.TextClassificationConfig.AsObject,
    objectTrackingConfig?: google_cloud_datalabeling_v1beta1_human_annotation_config_pb.ObjectTrackingConfig.AsObject,
    inputConfig?: google_cloud_datalabeling_v1beta1_dataset_pb.InputConfig.AsObject,
    evaluationConfig?: google_cloud_datalabeling_v1beta1_evaluation_pb.EvaluationConfig.AsObject,
    humanAnnotationConfig?: google_cloud_datalabeling_v1beta1_human_annotation_config_pb.HumanAnnotationConfig.AsObject,
    bigqueryImportKeysMap: Array<[string, string]>,
    exampleCount: number,
    exampleSamplePercentage: number,
    evaluationJobAlertConfig?: EvaluationJobAlertConfig.AsObject,
  }

  export enum HumanAnnotationRequestConfigCase {
    HUMAN_ANNOTATION_REQUEST_CONFIG_NOT_SET = 0,
    IMAGE_CLASSIFICATION_CONFIG = 4,
    BOUNDING_POLY_CONFIG = 5,
    VIDEO_CLASSIFICATION_CONFIG = 6,
    OBJECT_DETECTION_CONFIG = 7,
    TEXT_CLASSIFICATION_CONFIG = 8,
    OBJECT_TRACKING_CONFIG = 12,
  }
}

export class EvaluationJobAlertConfig extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): void;

  getMinAcceptableMeanAveragePrecision(): number;
  setMinAcceptableMeanAveragePrecision(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EvaluationJobAlertConfig.AsObject;
  static toObject(includeInstance: boolean, msg: EvaluationJobAlertConfig): EvaluationJobAlertConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EvaluationJobAlertConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EvaluationJobAlertConfig;
  static deserializeBinaryFromReader(message: EvaluationJobAlertConfig, reader: jspb.BinaryReader): EvaluationJobAlertConfig;
}

export namespace EvaluationJobAlertConfig {
  export type AsObject = {
    email: string,
    minAcceptableMeanAveragePrecision: number,
  }
}

export class Attempt extends jspb.Message {
  hasAttemptTime(): boolean;
  clearAttemptTime(): void;
  getAttemptTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setAttemptTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  clearPartialFailuresList(): void;
  getPartialFailuresList(): Array<google_rpc_status_pb.Status>;
  setPartialFailuresList(value: Array<google_rpc_status_pb.Status>): void;
  addPartialFailures(value?: google_rpc_status_pb.Status, index?: number): google_rpc_status_pb.Status;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Attempt.AsObject;
  static toObject(includeInstance: boolean, msg: Attempt): Attempt.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Attempt, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Attempt;
  static deserializeBinaryFromReader(message: Attempt, reader: jspb.BinaryReader): Attempt;
}

export namespace Attempt {
  export type AsObject = {
    attemptTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    partialFailuresList: Array<google_rpc_status_pb.Status.AsObject>,
  }
}

