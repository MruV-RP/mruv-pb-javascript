// package: google.storagetransfer.v1
// file: google/storagetransfer/v1/transfer_types.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_rpc_code_pb from "../../../google/rpc/code_pb";
import * as google_type_date_pb from "../../../google/type/date_pb";
import * as google_type_timeofday_pb from "../../../google/type/timeofday_pb";

export class GoogleServiceAccount extends jspb.Message {
  getAccountEmail(): string;
  setAccountEmail(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GoogleServiceAccount.AsObject;
  static toObject(includeInstance: boolean, msg: GoogleServiceAccount): GoogleServiceAccount.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GoogleServiceAccount, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GoogleServiceAccount;
  static deserializeBinaryFromReader(message: GoogleServiceAccount, reader: jspb.BinaryReader): GoogleServiceAccount;
}

export namespace GoogleServiceAccount {
  export type AsObject = {
    accountEmail: string,
  }
}

export class AwsAccessKey extends jspb.Message {
  getAccessKeyId(): string;
  setAccessKeyId(value: string): void;

  getSecretAccessKey(): string;
  setSecretAccessKey(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AwsAccessKey.AsObject;
  static toObject(includeInstance: boolean, msg: AwsAccessKey): AwsAccessKey.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AwsAccessKey, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AwsAccessKey;
  static deserializeBinaryFromReader(message: AwsAccessKey, reader: jspb.BinaryReader): AwsAccessKey;
}

export namespace AwsAccessKey {
  export type AsObject = {
    accessKeyId: string,
    secretAccessKey: string,
  }
}

export class ObjectConditions extends jspb.Message {
  hasMinTimeElapsedSinceLastModification(): boolean;
  clearMinTimeElapsedSinceLastModification(): void;
  getMinTimeElapsedSinceLastModification(): google_protobuf_duration_pb.Duration | undefined;
  setMinTimeElapsedSinceLastModification(value?: google_protobuf_duration_pb.Duration): void;

  hasMaxTimeElapsedSinceLastModification(): boolean;
  clearMaxTimeElapsedSinceLastModification(): void;
  getMaxTimeElapsedSinceLastModification(): google_protobuf_duration_pb.Duration | undefined;
  setMaxTimeElapsedSinceLastModification(value?: google_protobuf_duration_pb.Duration): void;

  clearIncludePrefixesList(): void;
  getIncludePrefixesList(): Array<string>;
  setIncludePrefixesList(value: Array<string>): void;
  addIncludePrefixes(value: string, index?: number): string;

  clearExcludePrefixesList(): void;
  getExcludePrefixesList(): Array<string>;
  setExcludePrefixesList(value: Array<string>): void;
  addExcludePrefixes(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ObjectConditions.AsObject;
  static toObject(includeInstance: boolean, msg: ObjectConditions): ObjectConditions.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ObjectConditions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ObjectConditions;
  static deserializeBinaryFromReader(message: ObjectConditions, reader: jspb.BinaryReader): ObjectConditions;
}

export namespace ObjectConditions {
  export type AsObject = {
    minTimeElapsedSinceLastModification?: google_protobuf_duration_pb.Duration.AsObject,
    maxTimeElapsedSinceLastModification?: google_protobuf_duration_pb.Duration.AsObject,
    includePrefixesList: Array<string>,
    excludePrefixesList: Array<string>,
  }
}

export class GcsData extends jspb.Message {
  getBucketName(): string;
  setBucketName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GcsData.AsObject;
  static toObject(includeInstance: boolean, msg: GcsData): GcsData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GcsData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GcsData;
  static deserializeBinaryFromReader(message: GcsData, reader: jspb.BinaryReader): GcsData;
}

export namespace GcsData {
  export type AsObject = {
    bucketName: string,
  }
}

export class AwsS3Data extends jspb.Message {
  getBucketName(): string;
  setBucketName(value: string): void;

  hasAwsAccessKey(): boolean;
  clearAwsAccessKey(): void;
  getAwsAccessKey(): AwsAccessKey | undefined;
  setAwsAccessKey(value?: AwsAccessKey): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AwsS3Data.AsObject;
  static toObject(includeInstance: boolean, msg: AwsS3Data): AwsS3Data.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AwsS3Data, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AwsS3Data;
  static deserializeBinaryFromReader(message: AwsS3Data, reader: jspb.BinaryReader): AwsS3Data;
}

export namespace AwsS3Data {
  export type AsObject = {
    bucketName: string,
    awsAccessKey?: AwsAccessKey.AsObject,
  }
}

export class HttpData extends jspb.Message {
  getListUrl(): string;
  setListUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HttpData.AsObject;
  static toObject(includeInstance: boolean, msg: HttpData): HttpData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HttpData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HttpData;
  static deserializeBinaryFromReader(message: HttpData, reader: jspb.BinaryReader): HttpData;
}

export namespace HttpData {
  export type AsObject = {
    listUrl: string,
  }
}

export class TransferOptions extends jspb.Message {
  getOverwriteObjectsAlreadyExistingInSink(): boolean;
  setOverwriteObjectsAlreadyExistingInSink(value: boolean): void;

  getDeleteObjectsUniqueInSink(): boolean;
  setDeleteObjectsUniqueInSink(value: boolean): void;

  getDeleteObjectsFromSourceAfterTransfer(): boolean;
  setDeleteObjectsFromSourceAfterTransfer(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransferOptions.AsObject;
  static toObject(includeInstance: boolean, msg: TransferOptions): TransferOptions.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransferOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransferOptions;
  static deserializeBinaryFromReader(message: TransferOptions, reader: jspb.BinaryReader): TransferOptions;
}

export namespace TransferOptions {
  export type AsObject = {
    overwriteObjectsAlreadyExistingInSink: boolean,
    deleteObjectsUniqueInSink: boolean,
    deleteObjectsFromSourceAfterTransfer: boolean,
  }
}

export class TransferSpec extends jspb.Message {
  hasGcsDataSource(): boolean;
  clearGcsDataSource(): void;
  getGcsDataSource(): GcsData | undefined;
  setGcsDataSource(value?: GcsData): void;

  hasAwsS3DataSource(): boolean;
  clearAwsS3DataSource(): void;
  getAwsS3DataSource(): AwsS3Data | undefined;
  setAwsS3DataSource(value?: AwsS3Data): void;

  hasHttpDataSource(): boolean;
  clearHttpDataSource(): void;
  getHttpDataSource(): HttpData | undefined;
  setHttpDataSource(value?: HttpData): void;

  hasGcsDataSink(): boolean;
  clearGcsDataSink(): void;
  getGcsDataSink(): GcsData | undefined;
  setGcsDataSink(value?: GcsData): void;

  hasObjectConditions(): boolean;
  clearObjectConditions(): void;
  getObjectConditions(): ObjectConditions | undefined;
  setObjectConditions(value?: ObjectConditions): void;

  hasTransferOptions(): boolean;
  clearTransferOptions(): void;
  getTransferOptions(): TransferOptions | undefined;
  setTransferOptions(value?: TransferOptions): void;

  getDataSourceCase(): TransferSpec.DataSourceCase;
  getDataSinkCase(): TransferSpec.DataSinkCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransferSpec.AsObject;
  static toObject(includeInstance: boolean, msg: TransferSpec): TransferSpec.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransferSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransferSpec;
  static deserializeBinaryFromReader(message: TransferSpec, reader: jspb.BinaryReader): TransferSpec;
}

export namespace TransferSpec {
  export type AsObject = {
    gcsDataSource?: GcsData.AsObject,
    awsS3DataSource?: AwsS3Data.AsObject,
    httpDataSource?: HttpData.AsObject,
    gcsDataSink?: GcsData.AsObject,
    objectConditions?: ObjectConditions.AsObject,
    transferOptions?: TransferOptions.AsObject,
  }

  export enum DataSourceCase {
    DATA_SOURCE_NOT_SET = 0,
    GCS_DATA_SOURCE = 1,
    AWS_S3_DATA_SOURCE = 2,
    HTTP_DATA_SOURCE = 3,
  }

  export enum DataSinkCase {
    DATA_SINK_NOT_SET = 0,
    GCS_DATA_SINK = 4,
  }
}

export class Schedule extends jspb.Message {
  hasScheduleStartDate(): boolean;
  clearScheduleStartDate(): void;
  getScheduleStartDate(): google_type_date_pb.Date | undefined;
  setScheduleStartDate(value?: google_type_date_pb.Date): void;

  hasScheduleEndDate(): boolean;
  clearScheduleEndDate(): void;
  getScheduleEndDate(): google_type_date_pb.Date | undefined;
  setScheduleEndDate(value?: google_type_date_pb.Date): void;

  hasStartTimeOfDay(): boolean;
  clearStartTimeOfDay(): void;
  getStartTimeOfDay(): google_type_timeofday_pb.TimeOfDay | undefined;
  setStartTimeOfDay(value?: google_type_timeofday_pb.TimeOfDay): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Schedule.AsObject;
  static toObject(includeInstance: boolean, msg: Schedule): Schedule.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Schedule, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Schedule;
  static deserializeBinaryFromReader(message: Schedule, reader: jspb.BinaryReader): Schedule;
}

export namespace Schedule {
  export type AsObject = {
    scheduleStartDate?: google_type_date_pb.Date.AsObject,
    scheduleEndDate?: google_type_date_pb.Date.AsObject,
    startTimeOfDay?: google_type_timeofday_pb.TimeOfDay.AsObject,
  }
}

export class TransferJob extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getProjectId(): string;
  setProjectId(value: string): void;

  hasTransferSpec(): boolean;
  clearTransferSpec(): void;
  getTransferSpec(): TransferSpec | undefined;
  setTransferSpec(value?: TransferSpec): void;

  hasSchedule(): boolean;
  clearSchedule(): void;
  getSchedule(): Schedule | undefined;
  setSchedule(value?: Schedule): void;

  getStatus(): TransferJob.StatusMap[keyof TransferJob.StatusMap];
  setStatus(value: TransferJob.StatusMap[keyof TransferJob.StatusMap]): void;

  hasCreationTime(): boolean;
  clearCreationTime(): void;
  getCreationTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreationTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasLastModificationTime(): boolean;
  clearLastModificationTime(): void;
  getLastModificationTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastModificationTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasDeletionTime(): boolean;
  clearDeletionTime(): void;
  getDeletionTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDeletionTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransferJob.AsObject;
  static toObject(includeInstance: boolean, msg: TransferJob): TransferJob.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransferJob, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransferJob;
  static deserializeBinaryFromReader(message: TransferJob, reader: jspb.BinaryReader): TransferJob;
}

export namespace TransferJob {
  export type AsObject = {
    name: string,
    description: string,
    projectId: string,
    transferSpec?: TransferSpec.AsObject,
    schedule?: Schedule.AsObject,
    status: TransferJob.StatusMap[keyof TransferJob.StatusMap],
    creationTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    lastModificationTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    deletionTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export interface StatusMap {
    STATUS_UNSPECIFIED: 0;
    ENABLED: 1;
    DISABLED: 2;
    DELETED: 3;
  }

  export const Status: StatusMap;
}

export class ErrorLogEntry extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): void;

  clearErrorDetailsList(): void;
  getErrorDetailsList(): Array<string>;
  setErrorDetailsList(value: Array<string>): void;
  addErrorDetails(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ErrorLogEntry.AsObject;
  static toObject(includeInstance: boolean, msg: ErrorLogEntry): ErrorLogEntry.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ErrorLogEntry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ErrorLogEntry;
  static deserializeBinaryFromReader(message: ErrorLogEntry, reader: jspb.BinaryReader): ErrorLogEntry;
}

export namespace ErrorLogEntry {
  export type AsObject = {
    url: string,
    errorDetailsList: Array<string>,
  }
}

export class ErrorSummary extends jspb.Message {
  getErrorCode(): google_rpc_code_pb.CodeMap[keyof google_rpc_code_pb.CodeMap];
  setErrorCode(value: google_rpc_code_pb.CodeMap[keyof google_rpc_code_pb.CodeMap]): void;

  getErrorCount(): number;
  setErrorCount(value: number): void;

  clearErrorLogEntriesList(): void;
  getErrorLogEntriesList(): Array<ErrorLogEntry>;
  setErrorLogEntriesList(value: Array<ErrorLogEntry>): void;
  addErrorLogEntries(value?: ErrorLogEntry, index?: number): ErrorLogEntry;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ErrorSummary.AsObject;
  static toObject(includeInstance: boolean, msg: ErrorSummary): ErrorSummary.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ErrorSummary, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ErrorSummary;
  static deserializeBinaryFromReader(message: ErrorSummary, reader: jspb.BinaryReader): ErrorSummary;
}

export namespace ErrorSummary {
  export type AsObject = {
    errorCode: google_rpc_code_pb.CodeMap[keyof google_rpc_code_pb.CodeMap],
    errorCount: number,
    errorLogEntriesList: Array<ErrorLogEntry.AsObject>,
  }
}

export class TransferCounters extends jspb.Message {
  getObjectsFoundFromSource(): number;
  setObjectsFoundFromSource(value: number): void;

  getBytesFoundFromSource(): number;
  setBytesFoundFromSource(value: number): void;

  getObjectsFoundOnlyFromSink(): number;
  setObjectsFoundOnlyFromSink(value: number): void;

  getBytesFoundOnlyFromSink(): number;
  setBytesFoundOnlyFromSink(value: number): void;

  getObjectsFromSourceSkippedBySync(): number;
  setObjectsFromSourceSkippedBySync(value: number): void;

  getBytesFromSourceSkippedBySync(): number;
  setBytesFromSourceSkippedBySync(value: number): void;

  getObjectsCopiedToSink(): number;
  setObjectsCopiedToSink(value: number): void;

  getBytesCopiedToSink(): number;
  setBytesCopiedToSink(value: number): void;

  getObjectsDeletedFromSource(): number;
  setObjectsDeletedFromSource(value: number): void;

  getBytesDeletedFromSource(): number;
  setBytesDeletedFromSource(value: number): void;

  getObjectsDeletedFromSink(): number;
  setObjectsDeletedFromSink(value: number): void;

  getBytesDeletedFromSink(): number;
  setBytesDeletedFromSink(value: number): void;

  getObjectsFromSourceFailed(): number;
  setObjectsFromSourceFailed(value: number): void;

  getBytesFromSourceFailed(): number;
  setBytesFromSourceFailed(value: number): void;

  getObjectsFailedToDeleteFromSink(): number;
  setObjectsFailedToDeleteFromSink(value: number): void;

  getBytesFailedToDeleteFromSink(): number;
  setBytesFailedToDeleteFromSink(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransferCounters.AsObject;
  static toObject(includeInstance: boolean, msg: TransferCounters): TransferCounters.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransferCounters, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransferCounters;
  static deserializeBinaryFromReader(message: TransferCounters, reader: jspb.BinaryReader): TransferCounters;
}

export namespace TransferCounters {
  export type AsObject = {
    objectsFoundFromSource: number,
    bytesFoundFromSource: number,
    objectsFoundOnlyFromSink: number,
    bytesFoundOnlyFromSink: number,
    objectsFromSourceSkippedBySync: number,
    bytesFromSourceSkippedBySync: number,
    objectsCopiedToSink: number,
    bytesCopiedToSink: number,
    objectsDeletedFromSource: number,
    bytesDeletedFromSource: number,
    objectsDeletedFromSink: number,
    bytesDeletedFromSink: number,
    objectsFromSourceFailed: number,
    bytesFromSourceFailed: number,
    objectsFailedToDeleteFromSink: number,
    bytesFailedToDeleteFromSink: number,
  }
}

export class TransferOperation extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getProjectId(): string;
  setProjectId(value: string): void;

  hasTransferSpec(): boolean;
  clearTransferSpec(): void;
  getTransferSpec(): TransferSpec | undefined;
  setTransferSpec(value?: TransferSpec): void;

  hasStartTime(): boolean;
  clearStartTime(): void;
  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasEndTime(): boolean;
  clearEndTime(): void;
  getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getStatus(): TransferOperation.StatusMap[keyof TransferOperation.StatusMap];
  setStatus(value: TransferOperation.StatusMap[keyof TransferOperation.StatusMap]): void;

  hasCounters(): boolean;
  clearCounters(): void;
  getCounters(): TransferCounters | undefined;
  setCounters(value?: TransferCounters): void;

  clearErrorBreakdownsList(): void;
  getErrorBreakdownsList(): Array<ErrorSummary>;
  setErrorBreakdownsList(value: Array<ErrorSummary>): void;
  addErrorBreakdowns(value?: ErrorSummary, index?: number): ErrorSummary;

  getTransferJobName(): string;
  setTransferJobName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransferOperation.AsObject;
  static toObject(includeInstance: boolean, msg: TransferOperation): TransferOperation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransferOperation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransferOperation;
  static deserializeBinaryFromReader(message: TransferOperation, reader: jspb.BinaryReader): TransferOperation;
}

export namespace TransferOperation {
  export type AsObject = {
    name: string,
    projectId: string,
    transferSpec?: TransferSpec.AsObject,
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    status: TransferOperation.StatusMap[keyof TransferOperation.StatusMap],
    counters?: TransferCounters.AsObject,
    errorBreakdownsList: Array<ErrorSummary.AsObject>,
    transferJobName: string,
  }

  export interface StatusMap {
    STATUS_UNSPECIFIED: 0;
    IN_PROGRESS: 1;
    PAUSED: 2;
    SUCCESS: 3;
    FAILED: 4;
    ABORTED: 5;
  }

  export const Status: StatusMap;
}

