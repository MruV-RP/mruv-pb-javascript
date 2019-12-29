// package: google.cloud.dataproc.v1beta2
// file: google/cloud/dataproc/v1beta2/jobs.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";
import * as google_api_client_pb from "../../../../google/api/client_pb";
import * as google_api_field_behavior_pb from "../../../../google/api/field_behavior_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class LoggingConfig extends jspb.Message {
  getDriverLogLevelsMap(): jspb.Map<string, LoggingConfig.LevelMap[keyof LoggingConfig.LevelMap]>;
  clearDriverLogLevelsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoggingConfig.AsObject;
  static toObject(includeInstance: boolean, msg: LoggingConfig): LoggingConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LoggingConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoggingConfig;
  static deserializeBinaryFromReader(message: LoggingConfig, reader: jspb.BinaryReader): LoggingConfig;
}

export namespace LoggingConfig {
  export type AsObject = {
    driverLogLevelsMap: Array<[string, LoggingConfig.LevelMap[keyof LoggingConfig.LevelMap]]>,
  }

  export interface LevelMap {
    LEVEL_UNSPECIFIED: 0;
    ALL: 1;
    TRACE: 2;
    DEBUG: 3;
    INFO: 4;
    WARN: 5;
    ERROR: 6;
    FATAL: 7;
    OFF: 8;
  }

  export const Level: LevelMap;
}

export class HadoopJob extends jspb.Message {
  hasMainJarFileUri(): boolean;
  clearMainJarFileUri(): void;
  getMainJarFileUri(): string;
  setMainJarFileUri(value: string): void;

  hasMainClass(): boolean;
  clearMainClass(): void;
  getMainClass(): string;
  setMainClass(value: string): void;

  clearArgsList(): void;
  getArgsList(): Array<string>;
  setArgsList(value: Array<string>): void;
  addArgs(value: string, index?: number): string;

  clearJarFileUrisList(): void;
  getJarFileUrisList(): Array<string>;
  setJarFileUrisList(value: Array<string>): void;
  addJarFileUris(value: string, index?: number): string;

  clearFileUrisList(): void;
  getFileUrisList(): Array<string>;
  setFileUrisList(value: Array<string>): void;
  addFileUris(value: string, index?: number): string;

  clearArchiveUrisList(): void;
  getArchiveUrisList(): Array<string>;
  setArchiveUrisList(value: Array<string>): void;
  addArchiveUris(value: string, index?: number): string;

  getPropertiesMap(): jspb.Map<string, string>;
  clearPropertiesMap(): void;
  hasLoggingConfig(): boolean;
  clearLoggingConfig(): void;
  getLoggingConfig(): LoggingConfig | undefined;
  setLoggingConfig(value?: LoggingConfig): void;

  getDriverCase(): HadoopJob.DriverCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HadoopJob.AsObject;
  static toObject(includeInstance: boolean, msg: HadoopJob): HadoopJob.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HadoopJob, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HadoopJob;
  static deserializeBinaryFromReader(message: HadoopJob, reader: jspb.BinaryReader): HadoopJob;
}

export namespace HadoopJob {
  export type AsObject = {
    mainJarFileUri: string,
    mainClass: string,
    argsList: Array<string>,
    jarFileUrisList: Array<string>,
    fileUrisList: Array<string>,
    archiveUrisList: Array<string>,
    propertiesMap: Array<[string, string]>,
    loggingConfig?: LoggingConfig.AsObject,
  }

  export enum DriverCase {
    DRIVER_NOT_SET = 0,
    MAIN_JAR_FILE_URI = 1,
    MAIN_CLASS = 2,
  }
}

export class SparkJob extends jspb.Message {
  hasMainJarFileUri(): boolean;
  clearMainJarFileUri(): void;
  getMainJarFileUri(): string;
  setMainJarFileUri(value: string): void;

  hasMainClass(): boolean;
  clearMainClass(): void;
  getMainClass(): string;
  setMainClass(value: string): void;

  clearArgsList(): void;
  getArgsList(): Array<string>;
  setArgsList(value: Array<string>): void;
  addArgs(value: string, index?: number): string;

  clearJarFileUrisList(): void;
  getJarFileUrisList(): Array<string>;
  setJarFileUrisList(value: Array<string>): void;
  addJarFileUris(value: string, index?: number): string;

  clearFileUrisList(): void;
  getFileUrisList(): Array<string>;
  setFileUrisList(value: Array<string>): void;
  addFileUris(value: string, index?: number): string;

  clearArchiveUrisList(): void;
  getArchiveUrisList(): Array<string>;
  setArchiveUrisList(value: Array<string>): void;
  addArchiveUris(value: string, index?: number): string;

  getPropertiesMap(): jspb.Map<string, string>;
  clearPropertiesMap(): void;
  hasLoggingConfig(): boolean;
  clearLoggingConfig(): void;
  getLoggingConfig(): LoggingConfig | undefined;
  setLoggingConfig(value?: LoggingConfig): void;

  getDriverCase(): SparkJob.DriverCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SparkJob.AsObject;
  static toObject(includeInstance: boolean, msg: SparkJob): SparkJob.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SparkJob, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SparkJob;
  static deserializeBinaryFromReader(message: SparkJob, reader: jspb.BinaryReader): SparkJob;
}

export namespace SparkJob {
  export type AsObject = {
    mainJarFileUri: string,
    mainClass: string,
    argsList: Array<string>,
    jarFileUrisList: Array<string>,
    fileUrisList: Array<string>,
    archiveUrisList: Array<string>,
    propertiesMap: Array<[string, string]>,
    loggingConfig?: LoggingConfig.AsObject,
  }

  export enum DriverCase {
    DRIVER_NOT_SET = 0,
    MAIN_JAR_FILE_URI = 1,
    MAIN_CLASS = 2,
  }
}

export class PySparkJob extends jspb.Message {
  getMainPythonFileUri(): string;
  setMainPythonFileUri(value: string): void;

  clearArgsList(): void;
  getArgsList(): Array<string>;
  setArgsList(value: Array<string>): void;
  addArgs(value: string, index?: number): string;

  clearPythonFileUrisList(): void;
  getPythonFileUrisList(): Array<string>;
  setPythonFileUrisList(value: Array<string>): void;
  addPythonFileUris(value: string, index?: number): string;

  clearJarFileUrisList(): void;
  getJarFileUrisList(): Array<string>;
  setJarFileUrisList(value: Array<string>): void;
  addJarFileUris(value: string, index?: number): string;

  clearFileUrisList(): void;
  getFileUrisList(): Array<string>;
  setFileUrisList(value: Array<string>): void;
  addFileUris(value: string, index?: number): string;

  clearArchiveUrisList(): void;
  getArchiveUrisList(): Array<string>;
  setArchiveUrisList(value: Array<string>): void;
  addArchiveUris(value: string, index?: number): string;

  getPropertiesMap(): jspb.Map<string, string>;
  clearPropertiesMap(): void;
  hasLoggingConfig(): boolean;
  clearLoggingConfig(): void;
  getLoggingConfig(): LoggingConfig | undefined;
  setLoggingConfig(value?: LoggingConfig): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PySparkJob.AsObject;
  static toObject(includeInstance: boolean, msg: PySparkJob): PySparkJob.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PySparkJob, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PySparkJob;
  static deserializeBinaryFromReader(message: PySparkJob, reader: jspb.BinaryReader): PySparkJob;
}

export namespace PySparkJob {
  export type AsObject = {
    mainPythonFileUri: string,
    argsList: Array<string>,
    pythonFileUrisList: Array<string>,
    jarFileUrisList: Array<string>,
    fileUrisList: Array<string>,
    archiveUrisList: Array<string>,
    propertiesMap: Array<[string, string]>,
    loggingConfig?: LoggingConfig.AsObject,
  }
}

export class QueryList extends jspb.Message {
  clearQueriesList(): void;
  getQueriesList(): Array<string>;
  setQueriesList(value: Array<string>): void;
  addQueries(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryList.AsObject;
  static toObject(includeInstance: boolean, msg: QueryList): QueryList.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryList;
  static deserializeBinaryFromReader(message: QueryList, reader: jspb.BinaryReader): QueryList;
}

export namespace QueryList {
  export type AsObject = {
    queriesList: Array<string>,
  }
}

export class HiveJob extends jspb.Message {
  hasQueryFileUri(): boolean;
  clearQueryFileUri(): void;
  getQueryFileUri(): string;
  setQueryFileUri(value: string): void;

  hasQueryList(): boolean;
  clearQueryList(): void;
  getQueryList(): QueryList | undefined;
  setQueryList(value?: QueryList): void;

  getContinueOnFailure(): boolean;
  setContinueOnFailure(value: boolean): void;

  getScriptVariablesMap(): jspb.Map<string, string>;
  clearScriptVariablesMap(): void;
  getPropertiesMap(): jspb.Map<string, string>;
  clearPropertiesMap(): void;
  clearJarFileUrisList(): void;
  getJarFileUrisList(): Array<string>;
  setJarFileUrisList(value: Array<string>): void;
  addJarFileUris(value: string, index?: number): string;

  getQueriesCase(): HiveJob.QueriesCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HiveJob.AsObject;
  static toObject(includeInstance: boolean, msg: HiveJob): HiveJob.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HiveJob, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HiveJob;
  static deserializeBinaryFromReader(message: HiveJob, reader: jspb.BinaryReader): HiveJob;
}

export namespace HiveJob {
  export type AsObject = {
    queryFileUri: string,
    queryList?: QueryList.AsObject,
    continueOnFailure: boolean,
    scriptVariablesMap: Array<[string, string]>,
    propertiesMap: Array<[string, string]>,
    jarFileUrisList: Array<string>,
  }

  export enum QueriesCase {
    QUERIES_NOT_SET = 0,
    QUERY_FILE_URI = 1,
    QUERY_LIST = 2,
  }
}

export class SparkSqlJob extends jspb.Message {
  hasQueryFileUri(): boolean;
  clearQueryFileUri(): void;
  getQueryFileUri(): string;
  setQueryFileUri(value: string): void;

  hasQueryList(): boolean;
  clearQueryList(): void;
  getQueryList(): QueryList | undefined;
  setQueryList(value?: QueryList): void;

  getScriptVariablesMap(): jspb.Map<string, string>;
  clearScriptVariablesMap(): void;
  getPropertiesMap(): jspb.Map<string, string>;
  clearPropertiesMap(): void;
  clearJarFileUrisList(): void;
  getJarFileUrisList(): Array<string>;
  setJarFileUrisList(value: Array<string>): void;
  addJarFileUris(value: string, index?: number): string;

  hasLoggingConfig(): boolean;
  clearLoggingConfig(): void;
  getLoggingConfig(): LoggingConfig | undefined;
  setLoggingConfig(value?: LoggingConfig): void;

  getQueriesCase(): SparkSqlJob.QueriesCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SparkSqlJob.AsObject;
  static toObject(includeInstance: boolean, msg: SparkSqlJob): SparkSqlJob.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SparkSqlJob, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SparkSqlJob;
  static deserializeBinaryFromReader(message: SparkSqlJob, reader: jspb.BinaryReader): SparkSqlJob;
}

export namespace SparkSqlJob {
  export type AsObject = {
    queryFileUri: string,
    queryList?: QueryList.AsObject,
    scriptVariablesMap: Array<[string, string]>,
    propertiesMap: Array<[string, string]>,
    jarFileUrisList: Array<string>,
    loggingConfig?: LoggingConfig.AsObject,
  }

  export enum QueriesCase {
    QUERIES_NOT_SET = 0,
    QUERY_FILE_URI = 1,
    QUERY_LIST = 2,
  }
}

export class PigJob extends jspb.Message {
  hasQueryFileUri(): boolean;
  clearQueryFileUri(): void;
  getQueryFileUri(): string;
  setQueryFileUri(value: string): void;

  hasQueryList(): boolean;
  clearQueryList(): void;
  getQueryList(): QueryList | undefined;
  setQueryList(value?: QueryList): void;

  getContinueOnFailure(): boolean;
  setContinueOnFailure(value: boolean): void;

  getScriptVariablesMap(): jspb.Map<string, string>;
  clearScriptVariablesMap(): void;
  getPropertiesMap(): jspb.Map<string, string>;
  clearPropertiesMap(): void;
  clearJarFileUrisList(): void;
  getJarFileUrisList(): Array<string>;
  setJarFileUrisList(value: Array<string>): void;
  addJarFileUris(value: string, index?: number): string;

  hasLoggingConfig(): boolean;
  clearLoggingConfig(): void;
  getLoggingConfig(): LoggingConfig | undefined;
  setLoggingConfig(value?: LoggingConfig): void;

  getQueriesCase(): PigJob.QueriesCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PigJob.AsObject;
  static toObject(includeInstance: boolean, msg: PigJob): PigJob.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PigJob, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PigJob;
  static deserializeBinaryFromReader(message: PigJob, reader: jspb.BinaryReader): PigJob;
}

export namespace PigJob {
  export type AsObject = {
    queryFileUri: string,
    queryList?: QueryList.AsObject,
    continueOnFailure: boolean,
    scriptVariablesMap: Array<[string, string]>,
    propertiesMap: Array<[string, string]>,
    jarFileUrisList: Array<string>,
    loggingConfig?: LoggingConfig.AsObject,
  }

  export enum QueriesCase {
    QUERIES_NOT_SET = 0,
    QUERY_FILE_URI = 1,
    QUERY_LIST = 2,
  }
}

export class SparkRJob extends jspb.Message {
  getMainRFileUri(): string;
  setMainRFileUri(value: string): void;

  clearArgsList(): void;
  getArgsList(): Array<string>;
  setArgsList(value: Array<string>): void;
  addArgs(value: string, index?: number): string;

  clearFileUrisList(): void;
  getFileUrisList(): Array<string>;
  setFileUrisList(value: Array<string>): void;
  addFileUris(value: string, index?: number): string;

  clearArchiveUrisList(): void;
  getArchiveUrisList(): Array<string>;
  setArchiveUrisList(value: Array<string>): void;
  addArchiveUris(value: string, index?: number): string;

  getPropertiesMap(): jspb.Map<string, string>;
  clearPropertiesMap(): void;
  hasLoggingConfig(): boolean;
  clearLoggingConfig(): void;
  getLoggingConfig(): LoggingConfig | undefined;
  setLoggingConfig(value?: LoggingConfig): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SparkRJob.AsObject;
  static toObject(includeInstance: boolean, msg: SparkRJob): SparkRJob.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SparkRJob, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SparkRJob;
  static deserializeBinaryFromReader(message: SparkRJob, reader: jspb.BinaryReader): SparkRJob;
}

export namespace SparkRJob {
  export type AsObject = {
    mainRFileUri: string,
    argsList: Array<string>,
    fileUrisList: Array<string>,
    archiveUrisList: Array<string>,
    propertiesMap: Array<[string, string]>,
    loggingConfig?: LoggingConfig.AsObject,
  }
}

export class JobPlacement extends jspb.Message {
  getClusterName(): string;
  setClusterName(value: string): void;

  getClusterUuid(): string;
  setClusterUuid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JobPlacement.AsObject;
  static toObject(includeInstance: boolean, msg: JobPlacement): JobPlacement.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: JobPlacement, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JobPlacement;
  static deserializeBinaryFromReader(message: JobPlacement, reader: jspb.BinaryReader): JobPlacement;
}

export namespace JobPlacement {
  export type AsObject = {
    clusterName: string,
    clusterUuid: string,
  }
}

export class JobStatus extends jspb.Message {
  getState(): JobStatus.StateMap[keyof JobStatus.StateMap];
  setState(value: JobStatus.StateMap[keyof JobStatus.StateMap]): void;

  getDetails(): string;
  setDetails(value: string): void;

  hasStateStartTime(): boolean;
  clearStateStartTime(): void;
  getStateStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStateStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getSubstate(): JobStatus.SubstateMap[keyof JobStatus.SubstateMap];
  setSubstate(value: JobStatus.SubstateMap[keyof JobStatus.SubstateMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JobStatus.AsObject;
  static toObject(includeInstance: boolean, msg: JobStatus): JobStatus.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: JobStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JobStatus;
  static deserializeBinaryFromReader(message: JobStatus, reader: jspb.BinaryReader): JobStatus;
}

export namespace JobStatus {
  export type AsObject = {
    state: JobStatus.StateMap[keyof JobStatus.StateMap],
    details: string,
    stateStartTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    substate: JobStatus.SubstateMap[keyof JobStatus.SubstateMap],
  }

  export interface StateMap {
    STATE_UNSPECIFIED: 0;
    PENDING: 1;
    SETUP_DONE: 8;
    RUNNING: 2;
    CANCEL_PENDING: 3;
    CANCEL_STARTED: 7;
    CANCELLED: 4;
    DONE: 5;
    ERROR: 6;
    ATTEMPT_FAILURE: 9;
  }

  export const State: StateMap;

  export interface SubstateMap {
    UNSPECIFIED: 0;
    SUBMITTED: 1;
    QUEUED: 2;
    STALE_STATUS: 3;
  }

  export const Substate: SubstateMap;
}

export class JobReference extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getJobId(): string;
  setJobId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JobReference.AsObject;
  static toObject(includeInstance: boolean, msg: JobReference): JobReference.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: JobReference, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JobReference;
  static deserializeBinaryFromReader(message: JobReference, reader: jspb.BinaryReader): JobReference;
}

export namespace JobReference {
  export type AsObject = {
    projectId: string,
    jobId: string,
  }
}

export class YarnApplication extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getState(): YarnApplication.StateMap[keyof YarnApplication.StateMap];
  setState(value: YarnApplication.StateMap[keyof YarnApplication.StateMap]): void;

  getProgress(): number;
  setProgress(value: number): void;

  getTrackingUrl(): string;
  setTrackingUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): YarnApplication.AsObject;
  static toObject(includeInstance: boolean, msg: YarnApplication): YarnApplication.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: YarnApplication, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): YarnApplication;
  static deserializeBinaryFromReader(message: YarnApplication, reader: jspb.BinaryReader): YarnApplication;
}

export namespace YarnApplication {
  export type AsObject = {
    name: string,
    state: YarnApplication.StateMap[keyof YarnApplication.StateMap],
    progress: number,
    trackingUrl: string,
  }

  export interface StateMap {
    STATE_UNSPECIFIED: 0;
    NEW: 1;
    NEW_SAVING: 2;
    SUBMITTED: 3;
    ACCEPTED: 4;
    RUNNING: 5;
    FINISHED: 6;
    FAILED: 7;
    KILLED: 8;
  }

  export const State: StateMap;
}

export class Job extends jspb.Message {
  hasReference(): boolean;
  clearReference(): void;
  getReference(): JobReference | undefined;
  setReference(value?: JobReference): void;

  hasPlacement(): boolean;
  clearPlacement(): void;
  getPlacement(): JobPlacement | undefined;
  setPlacement(value?: JobPlacement): void;

  hasHadoopJob(): boolean;
  clearHadoopJob(): void;
  getHadoopJob(): HadoopJob | undefined;
  setHadoopJob(value?: HadoopJob): void;

  hasSparkJob(): boolean;
  clearSparkJob(): void;
  getSparkJob(): SparkJob | undefined;
  setSparkJob(value?: SparkJob): void;

  hasPysparkJob(): boolean;
  clearPysparkJob(): void;
  getPysparkJob(): PySparkJob | undefined;
  setPysparkJob(value?: PySparkJob): void;

  hasHiveJob(): boolean;
  clearHiveJob(): void;
  getHiveJob(): HiveJob | undefined;
  setHiveJob(value?: HiveJob): void;

  hasPigJob(): boolean;
  clearPigJob(): void;
  getPigJob(): PigJob | undefined;
  setPigJob(value?: PigJob): void;

  hasSparkRJob(): boolean;
  clearSparkRJob(): void;
  getSparkRJob(): SparkRJob | undefined;
  setSparkRJob(value?: SparkRJob): void;

  hasSparkSqlJob(): boolean;
  clearSparkSqlJob(): void;
  getSparkSqlJob(): SparkSqlJob | undefined;
  setSparkSqlJob(value?: SparkSqlJob): void;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): JobStatus | undefined;
  setStatus(value?: JobStatus): void;

  clearStatusHistoryList(): void;
  getStatusHistoryList(): Array<JobStatus>;
  setStatusHistoryList(value: Array<JobStatus>): void;
  addStatusHistory(value?: JobStatus, index?: number): JobStatus;

  clearYarnApplicationsList(): void;
  getYarnApplicationsList(): Array<YarnApplication>;
  setYarnApplicationsList(value: Array<YarnApplication>): void;
  addYarnApplications(value?: YarnApplication, index?: number): YarnApplication;

  getSubmittedBy(): string;
  setSubmittedBy(value: string): void;

  getDriverOutputResourceUri(): string;
  setDriverOutputResourceUri(value: string): void;

  getDriverControlFilesUri(): string;
  setDriverControlFilesUri(value: string): void;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): void;
  hasScheduling(): boolean;
  clearScheduling(): void;
  getScheduling(): JobScheduling | undefined;
  setScheduling(value?: JobScheduling): void;

  getJobUuid(): string;
  setJobUuid(value: string): void;

  getTypeJobCase(): Job.TypeJobCase;
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
    reference?: JobReference.AsObject,
    placement?: JobPlacement.AsObject,
    hadoopJob?: HadoopJob.AsObject,
    sparkJob?: SparkJob.AsObject,
    pysparkJob?: PySparkJob.AsObject,
    hiveJob?: HiveJob.AsObject,
    pigJob?: PigJob.AsObject,
    sparkRJob?: SparkRJob.AsObject,
    sparkSqlJob?: SparkSqlJob.AsObject,
    status?: JobStatus.AsObject,
    statusHistoryList: Array<JobStatus.AsObject>,
    yarnApplicationsList: Array<YarnApplication.AsObject>,
    submittedBy: string,
    driverOutputResourceUri: string,
    driverControlFilesUri: string,
    labelsMap: Array<[string, string]>,
    scheduling?: JobScheduling.AsObject,
    jobUuid: string,
  }

  export enum TypeJobCase {
    TYPE_JOB_NOT_SET = 0,
    HADOOP_JOB = 3,
    SPARK_JOB = 4,
    PYSPARK_JOB = 5,
    HIVE_JOB = 6,
    PIG_JOB = 7,
    SPARK_R_JOB = 21,
    SPARK_SQL_JOB = 12,
  }
}

export class JobScheduling extends jspb.Message {
  getMaxFailuresPerHour(): number;
  setMaxFailuresPerHour(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JobScheduling.AsObject;
  static toObject(includeInstance: boolean, msg: JobScheduling): JobScheduling.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: JobScheduling, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JobScheduling;
  static deserializeBinaryFromReader(message: JobScheduling, reader: jspb.BinaryReader): JobScheduling;
}

export namespace JobScheduling {
  export type AsObject = {
    maxFailuresPerHour: number,
  }
}

export class SubmitJobRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getRegion(): string;
  setRegion(value: string): void;

  hasJob(): boolean;
  clearJob(): void;
  getJob(): Job | undefined;
  setJob(value?: Job): void;

  getRequestId(): string;
  setRequestId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubmitJobRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SubmitJobRequest): SubmitJobRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubmitJobRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubmitJobRequest;
  static deserializeBinaryFromReader(message: SubmitJobRequest, reader: jspb.BinaryReader): SubmitJobRequest;
}

export namespace SubmitJobRequest {
  export type AsObject = {
    projectId: string,
    region: string,
    job?: Job.AsObject,
    requestId: string,
  }
}

export class GetJobRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getRegion(): string;
  setRegion(value: string): void;

  getJobId(): string;
  setJobId(value: string): void;

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
    projectId: string,
    region: string,
    jobId: string,
  }
}

export class ListJobsRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getRegion(): string;
  setRegion(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  getClusterName(): string;
  setClusterName(value: string): void;

  getJobStateMatcher(): ListJobsRequest.JobStateMatcherMap[keyof ListJobsRequest.JobStateMatcherMap];
  setJobStateMatcher(value: ListJobsRequest.JobStateMatcherMap[keyof ListJobsRequest.JobStateMatcherMap]): void;

  getFilter(): string;
  setFilter(value: string): void;

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
    projectId: string,
    region: string,
    pageSize: number,
    pageToken: string,
    clusterName: string,
    jobStateMatcher: ListJobsRequest.JobStateMatcherMap[keyof ListJobsRequest.JobStateMatcherMap],
    filter: string,
  }

  export interface JobStateMatcherMap {
    ALL: 0;
    ACTIVE: 1;
    NON_ACTIVE: 2;
  }

  export const JobStateMatcher: JobStateMatcherMap;
}

export class UpdateJobRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getRegion(): string;
  setRegion(value: string): void;

  getJobId(): string;
  setJobId(value: string): void;

  hasJob(): boolean;
  clearJob(): void;
  getJob(): Job | undefined;
  setJob(value?: Job): void;

  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateJobRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateJobRequest): UpdateJobRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateJobRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateJobRequest;
  static deserializeBinaryFromReader(message: UpdateJobRequest, reader: jspb.BinaryReader): UpdateJobRequest;
}

export namespace UpdateJobRequest {
  export type AsObject = {
    projectId: string,
    region: string,
    jobId: string,
    job?: Job.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
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

export class CancelJobRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getRegion(): string;
  setRegion(value: string): void;

  getJobId(): string;
  setJobId(value: string): void;

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
    projectId: string,
    region: string,
    jobId: string,
  }
}

export class DeleteJobRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getRegion(): string;
  setRegion(value: string): void;

  getJobId(): string;
  setJobId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteJobRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteJobRequest): DeleteJobRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteJobRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteJobRequest;
  static deserializeBinaryFromReader(message: DeleteJobRequest, reader: jspb.BinaryReader): DeleteJobRequest;
}

export namespace DeleteJobRequest {
  export type AsObject = {
    projectId: string,
    region: string,
    jobId: string,
  }
}

