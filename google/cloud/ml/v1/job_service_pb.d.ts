// package: google.cloud.ml.v1
// file: google/cloud/ml/v1/job_service.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";
import * as google_api_auth_pb from "../../../../google/api/auth_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class TrainingInput extends jspb.Message {
  getScaleTier(): TrainingInput.ScaleTierMap[keyof TrainingInput.ScaleTierMap];
  setScaleTier(value: TrainingInput.ScaleTierMap[keyof TrainingInput.ScaleTierMap]): void;

  getMasterType(): string;
  setMasterType(value: string): void;

  getWorkerType(): string;
  setWorkerType(value: string): void;

  getParameterServerType(): string;
  setParameterServerType(value: string): void;

  getWorkerCount(): number;
  setWorkerCount(value: number): void;

  getParameterServerCount(): number;
  setParameterServerCount(value: number): void;

  clearPackageUrisList(): void;
  getPackageUrisList(): Array<string>;
  setPackageUrisList(value: Array<string>): void;
  addPackageUris(value: string, index?: number): string;

  getPythonModule(): string;
  setPythonModule(value: string): void;

  clearArgsList(): void;
  getArgsList(): Array<string>;
  setArgsList(value: Array<string>): void;
  addArgs(value: string, index?: number): string;

  hasHyperparameters(): boolean;
  clearHyperparameters(): void;
  getHyperparameters(): HyperparameterSpec | undefined;
  setHyperparameters(value?: HyperparameterSpec): void;

  getRegion(): string;
  setRegion(value: string): void;

  getJobDir(): string;
  setJobDir(value: string): void;

  getRuntimeVersion(): string;
  setRuntimeVersion(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TrainingInput.AsObject;
  static toObject(includeInstance: boolean, msg: TrainingInput): TrainingInput.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TrainingInput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TrainingInput;
  static deserializeBinaryFromReader(message: TrainingInput, reader: jspb.BinaryReader): TrainingInput;
}

export namespace TrainingInput {
  export type AsObject = {
    scaleTier: TrainingInput.ScaleTierMap[keyof TrainingInput.ScaleTierMap],
    masterType: string,
    workerType: string,
    parameterServerType: string,
    workerCount: number,
    parameterServerCount: number,
    packageUrisList: Array<string>,
    pythonModule: string,
    argsList: Array<string>,
    hyperparameters?: HyperparameterSpec.AsObject,
    region: string,
    jobDir: string,
    runtimeVersion: string,
  }

  export interface ScaleTierMap {
    BASIC: 0;
    STANDARD_1: 1;
    PREMIUM_1: 3;
    BASIC_GPU: 6;
    CUSTOM: 5;
  }

  export const ScaleTier: ScaleTierMap;
}

export class HyperparameterSpec extends jspb.Message {
  getGoal(): HyperparameterSpec.GoalTypeMap[keyof HyperparameterSpec.GoalTypeMap];
  setGoal(value: HyperparameterSpec.GoalTypeMap[keyof HyperparameterSpec.GoalTypeMap]): void;

  clearParamsList(): void;
  getParamsList(): Array<ParameterSpec>;
  setParamsList(value: Array<ParameterSpec>): void;
  addParams(value?: ParameterSpec, index?: number): ParameterSpec;

  getMaxTrials(): number;
  setMaxTrials(value: number): void;

  getMaxParallelTrials(): number;
  setMaxParallelTrials(value: number): void;

  getHyperparameterMetricTag(): string;
  setHyperparameterMetricTag(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HyperparameterSpec.AsObject;
  static toObject(includeInstance: boolean, msg: HyperparameterSpec): HyperparameterSpec.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HyperparameterSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HyperparameterSpec;
  static deserializeBinaryFromReader(message: HyperparameterSpec, reader: jspb.BinaryReader): HyperparameterSpec;
}

export namespace HyperparameterSpec {
  export type AsObject = {
    goal: HyperparameterSpec.GoalTypeMap[keyof HyperparameterSpec.GoalTypeMap],
    paramsList: Array<ParameterSpec.AsObject>,
    maxTrials: number,
    maxParallelTrials: number,
    hyperparameterMetricTag: string,
  }

  export interface GoalTypeMap {
    GOAL_TYPE_UNSPECIFIED: 0;
    MAXIMIZE: 1;
    MINIMIZE: 2;
  }

  export const GoalType: GoalTypeMap;
}

export class ParameterSpec extends jspb.Message {
  getParameterName(): string;
  setParameterName(value: string): void;

  getType(): ParameterSpec.ParameterTypeMap[keyof ParameterSpec.ParameterTypeMap];
  setType(value: ParameterSpec.ParameterTypeMap[keyof ParameterSpec.ParameterTypeMap]): void;

  getMinValue(): number;
  setMinValue(value: number): void;

  getMaxValue(): number;
  setMaxValue(value: number): void;

  clearCategoricalValuesList(): void;
  getCategoricalValuesList(): Array<string>;
  setCategoricalValuesList(value: Array<string>): void;
  addCategoricalValues(value: string, index?: number): string;

  clearDiscreteValuesList(): void;
  getDiscreteValuesList(): Array<number>;
  setDiscreteValuesList(value: Array<number>): void;
  addDiscreteValues(value: number, index?: number): number;

  getScaleType(): ParameterSpec.ScaleTypeMap[keyof ParameterSpec.ScaleTypeMap];
  setScaleType(value: ParameterSpec.ScaleTypeMap[keyof ParameterSpec.ScaleTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ParameterSpec.AsObject;
  static toObject(includeInstance: boolean, msg: ParameterSpec): ParameterSpec.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ParameterSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ParameterSpec;
  static deserializeBinaryFromReader(message: ParameterSpec, reader: jspb.BinaryReader): ParameterSpec;
}

export namespace ParameterSpec {
  export type AsObject = {
    parameterName: string,
    type: ParameterSpec.ParameterTypeMap[keyof ParameterSpec.ParameterTypeMap],
    minValue: number,
    maxValue: number,
    categoricalValuesList: Array<string>,
    discreteValuesList: Array<number>,
    scaleType: ParameterSpec.ScaleTypeMap[keyof ParameterSpec.ScaleTypeMap],
  }

  export interface ParameterTypeMap {
    PARAMETER_TYPE_UNSPECIFIED: 0;
    DOUBLE: 1;
    INTEGER: 2;
    CATEGORICAL: 3;
    DISCRETE: 4;
  }

  export const ParameterType: ParameterTypeMap;

  export interface ScaleTypeMap {
    NONE: 0;
    UNIT_LINEAR_SCALE: 1;
    UNIT_LOG_SCALE: 2;
    UNIT_REVERSE_LOG_SCALE: 3;
  }

  export const ScaleType: ScaleTypeMap;
}

export class HyperparameterOutput extends jspb.Message {
  getTrialId(): string;
  setTrialId(value: string): void;

  getHyperparametersMap(): jspb.Map<string, string>;
  clearHyperparametersMap(): void;
  hasFinalMetric(): boolean;
  clearFinalMetric(): void;
  getFinalMetric(): HyperparameterOutput.HyperparameterMetric | undefined;
  setFinalMetric(value?: HyperparameterOutput.HyperparameterMetric): void;

  clearAllMetricsList(): void;
  getAllMetricsList(): Array<HyperparameterOutput.HyperparameterMetric>;
  setAllMetricsList(value: Array<HyperparameterOutput.HyperparameterMetric>): void;
  addAllMetrics(value?: HyperparameterOutput.HyperparameterMetric, index?: number): HyperparameterOutput.HyperparameterMetric;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HyperparameterOutput.AsObject;
  static toObject(includeInstance: boolean, msg: HyperparameterOutput): HyperparameterOutput.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HyperparameterOutput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HyperparameterOutput;
  static deserializeBinaryFromReader(message: HyperparameterOutput, reader: jspb.BinaryReader): HyperparameterOutput;
}

export namespace HyperparameterOutput {
  export type AsObject = {
    trialId: string,
    hyperparametersMap: Array<[string, string]>,
    finalMetric?: HyperparameterOutput.HyperparameterMetric.AsObject,
    allMetricsList: Array<HyperparameterOutput.HyperparameterMetric.AsObject>,
  }

  export class HyperparameterMetric extends jspb.Message {
    getTrainingStep(): number;
    setTrainingStep(value: number): void;

    getObjectiveValue(): number;
    setObjectiveValue(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HyperparameterMetric.AsObject;
    static toObject(includeInstance: boolean, msg: HyperparameterMetric): HyperparameterMetric.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HyperparameterMetric, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HyperparameterMetric;
    static deserializeBinaryFromReader(message: HyperparameterMetric, reader: jspb.BinaryReader): HyperparameterMetric;
  }

  export namespace HyperparameterMetric {
    export type AsObject = {
      trainingStep: number,
      objectiveValue: number,
    }
  }
}

export class TrainingOutput extends jspb.Message {
  getCompletedTrialCount(): number;
  setCompletedTrialCount(value: number): void;

  clearTrialsList(): void;
  getTrialsList(): Array<HyperparameterOutput>;
  setTrialsList(value: Array<HyperparameterOutput>): void;
  addTrials(value?: HyperparameterOutput, index?: number): HyperparameterOutput;

  getConsumedMlUnits(): number;
  setConsumedMlUnits(value: number): void;

  getIsHyperparameterTuningJob(): boolean;
  setIsHyperparameterTuningJob(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TrainingOutput.AsObject;
  static toObject(includeInstance: boolean, msg: TrainingOutput): TrainingOutput.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TrainingOutput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TrainingOutput;
  static deserializeBinaryFromReader(message: TrainingOutput, reader: jspb.BinaryReader): TrainingOutput;
}

export namespace TrainingOutput {
  export type AsObject = {
    completedTrialCount: number,
    trialsList: Array<HyperparameterOutput.AsObject>,
    consumedMlUnits: number,
    isHyperparameterTuningJob: boolean,
  }
}

export class PredictionInput extends jspb.Message {
  hasModelName(): boolean;
  clearModelName(): void;
  getModelName(): string;
  setModelName(value: string): void;

  hasVersionName(): boolean;
  clearVersionName(): void;
  getVersionName(): string;
  setVersionName(value: string): void;

  hasUri(): boolean;
  clearUri(): void;
  getUri(): string;
  setUri(value: string): void;

  getDataFormat(): PredictionInput.DataFormatMap[keyof PredictionInput.DataFormatMap];
  setDataFormat(value: PredictionInput.DataFormatMap[keyof PredictionInput.DataFormatMap]): void;

  clearInputPathsList(): void;
  getInputPathsList(): Array<string>;
  setInputPathsList(value: Array<string>): void;
  addInputPaths(value: string, index?: number): string;

  getOutputPath(): string;
  setOutputPath(value: string): void;

  getMaxWorkerCount(): number;
  setMaxWorkerCount(value: number): void;

  getRegion(): string;
  setRegion(value: string): void;

  getRuntimeVersion(): string;
  setRuntimeVersion(value: string): void;

  getModelVersionCase(): PredictionInput.ModelVersionCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PredictionInput.AsObject;
  static toObject(includeInstance: boolean, msg: PredictionInput): PredictionInput.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PredictionInput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PredictionInput;
  static deserializeBinaryFromReader(message: PredictionInput, reader: jspb.BinaryReader): PredictionInput;
}

export namespace PredictionInput {
  export type AsObject = {
    modelName: string,
    versionName: string,
    uri: string,
    dataFormat: PredictionInput.DataFormatMap[keyof PredictionInput.DataFormatMap],
    inputPathsList: Array<string>,
    outputPath: string,
    maxWorkerCount: number,
    region: string,
    runtimeVersion: string,
  }

  export interface DataFormatMap {
    DATA_FORMAT_UNSPECIFIED: 0;
    TEXT: 1;
    TF_RECORD: 2;
    TF_RECORD_GZIP: 3;
  }

  export const DataFormat: DataFormatMap;

  export enum ModelVersionCase {
    MODEL_VERSION_NOT_SET = 0,
    MODEL_NAME = 1,
    VERSION_NAME = 2,
    URI = 9,
  }
}

export class PredictionOutput extends jspb.Message {
  getOutputPath(): string;
  setOutputPath(value: string): void;

  getPredictionCount(): number;
  setPredictionCount(value: number): void;

  getErrorCount(): number;
  setErrorCount(value: number): void;

  getNodeHours(): number;
  setNodeHours(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PredictionOutput.AsObject;
  static toObject(includeInstance: boolean, msg: PredictionOutput): PredictionOutput.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PredictionOutput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PredictionOutput;
  static deserializeBinaryFromReader(message: PredictionOutput, reader: jspb.BinaryReader): PredictionOutput;
}

export namespace PredictionOutput {
  export type AsObject = {
    outputPath: string,
    predictionCount: number,
    errorCount: number,
    nodeHours: number,
  }
}

export class Job extends jspb.Message {
  getJobId(): string;
  setJobId(value: string): void;

  hasTrainingInput(): boolean;
  clearTrainingInput(): void;
  getTrainingInput(): TrainingInput | undefined;
  setTrainingInput(value?: TrainingInput): void;

  hasPredictionInput(): boolean;
  clearPredictionInput(): void;
  getPredictionInput(): PredictionInput | undefined;
  setPredictionInput(value?: PredictionInput): void;

  hasCreateTime(): boolean;
  clearCreateTime(): void;
  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasStartTime(): boolean;
  clearStartTime(): void;
  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasEndTime(): boolean;
  clearEndTime(): void;
  getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getState(): Job.StateMap[keyof Job.StateMap];
  setState(value: Job.StateMap[keyof Job.StateMap]): void;

  getErrorMessage(): string;
  setErrorMessage(value: string): void;

  hasTrainingOutput(): boolean;
  clearTrainingOutput(): void;
  getTrainingOutput(): TrainingOutput | undefined;
  setTrainingOutput(value?: TrainingOutput): void;

  hasPredictionOutput(): boolean;
  clearPredictionOutput(): void;
  getPredictionOutput(): PredictionOutput | undefined;
  setPredictionOutput(value?: PredictionOutput): void;

  getInputCase(): Job.InputCase;
  getOutputCase(): Job.OutputCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Job.AsObject;
  static toObject(includeInstance: boolean, msg: Job): Job.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Job, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Job;
  static deserializeBinaryFromReader(message: Job, reader: jspb.BinaryReader): Job;
}

export namespace Job {
  export type AsObject = {
    jobId: string,
    trainingInput?: TrainingInput.AsObject,
    predictionInput?: PredictionInput.AsObject,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    state: Job.StateMap[keyof Job.StateMap],
    errorMessage: string,
    trainingOutput?: TrainingOutput.AsObject,
    predictionOutput?: PredictionOutput.AsObject,
  }

  export interface StateMap {
    STATE_UNSPECIFIED: 0;
    QUEUED: 1;
    PREPARING: 2;
    RUNNING: 3;
    SUCCEEDED: 4;
    FAILED: 5;
    CANCELLING: 6;
    CANCELLED: 7;
  }

  export const State: StateMap;

  export enum InputCase {
    INPUT_NOT_SET = 0,
    TRAINING_INPUT = 2,
    PREDICTION_INPUT = 3,
  }

  export enum OutputCase {
    OUTPUT_NOT_SET = 0,
    TRAINING_OUTPUT = 9,
    PREDICTION_OUTPUT = 10,
  }
}

export class CreateJobRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  hasJob(): boolean;
  clearJob(): void;
  getJob(): Job | undefined;
  setJob(value?: Job): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateJobRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateJobRequest): CreateJobRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateJobRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateJobRequest;
  static deserializeBinaryFromReader(message: CreateJobRequest, reader: jspb.BinaryReader): CreateJobRequest;
}

export namespace CreateJobRequest {
  export type AsObject = {
    parent: string,
    job?: Job.AsObject,
  }
}

export class ListJobsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getFilter(): string;
  setFilter(value: string): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListJobsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListJobsRequest): ListJobsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListJobsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListJobsRequest;
  static deserializeBinaryFromReader(message: ListJobsRequest, reader: jspb.BinaryReader): ListJobsRequest;
}

export namespace ListJobsRequest {
  export type AsObject = {
    parent: string,
    filter: string,
    pageToken: string,
    pageSize: number,
  }
}

export class ListJobsResponse extends jspb.Message {
  clearJobsList(): void;
  getJobsList(): Array<Job>;
  setJobsList(value: Array<Job>): void;
  addJobs(value?: Job, index?: number): Job;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListJobsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListJobsResponse): ListJobsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListJobsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListJobsResponse;
  static deserializeBinaryFromReader(message: ListJobsResponse, reader: jspb.BinaryReader): ListJobsResponse;
}

export namespace ListJobsResponse {
  export type AsObject = {
    jobsList: Array<Job.AsObject>,
    nextPageToken: string,
  }
}

export class GetJobRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetJobRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetJobRequest): GetJobRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetJobRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetJobRequest;
  static deserializeBinaryFromReader(message: GetJobRequest, reader: jspb.BinaryReader): GetJobRequest;
}

export namespace GetJobRequest {
  export type AsObject = {
    name: string,
  }
}

export class CancelJobRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelJobRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CancelJobRequest): CancelJobRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CancelJobRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelJobRequest;
  static deserializeBinaryFromReader(message: CancelJobRequest, reader: jspb.BinaryReader): CancelJobRequest;
}

export namespace CancelJobRequest {
  export type AsObject = {
    name: string,
  }
}

