// package: google.cloud.automl.v1beta1
// file: google/cloud/automl/v1beta1/operations.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";
import * as google_cloud_automl_v1beta1_io_pb from "../../../../google/cloud/automl/v1beta1/io_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_rpc_status_pb from "../../../../google/rpc/status_pb";

export class OperationMetadata extends jspb.Message {
  hasDeleteDetails(): boolean;
  clearDeleteDetails(): void;
  getDeleteDetails(): DeleteOperationMetadata | undefined;
  setDeleteDetails(value?: DeleteOperationMetadata): void;

  hasDeployModelDetails(): boolean;
  clearDeployModelDetails(): void;
  getDeployModelDetails(): DeployModelOperationMetadata | undefined;
  setDeployModelDetails(value?: DeployModelOperationMetadata): void;

  hasUndeployModelDetails(): boolean;
  clearUndeployModelDetails(): void;
  getUndeployModelDetails(): UndeployModelOperationMetadata | undefined;
  setUndeployModelDetails(value?: UndeployModelOperationMetadata): void;

  hasCreateModelDetails(): boolean;
  clearCreateModelDetails(): void;
  getCreateModelDetails(): CreateModelOperationMetadata | undefined;
  setCreateModelDetails(value?: CreateModelOperationMetadata): void;

  hasImportDataDetails(): boolean;
  clearImportDataDetails(): void;
  getImportDataDetails(): ImportDataOperationMetadata | undefined;
  setImportDataDetails(value?: ImportDataOperationMetadata): void;

  hasBatchPredictDetails(): boolean;
  clearBatchPredictDetails(): void;
  getBatchPredictDetails(): BatchPredictOperationMetadata | undefined;
  setBatchPredictDetails(value?: BatchPredictOperationMetadata): void;

  hasExportDataDetails(): boolean;
  clearExportDataDetails(): void;
  getExportDataDetails(): ExportDataOperationMetadata | undefined;
  setExportDataDetails(value?: ExportDataOperationMetadata): void;

  hasExportModelDetails(): boolean;
  clearExportModelDetails(): void;
  getExportModelDetails(): ExportModelOperationMetadata | undefined;
  setExportModelDetails(value?: ExportModelOperationMetadata): void;

  hasExportEvaluatedExamplesDetails(): boolean;
  clearExportEvaluatedExamplesDetails(): void;
  getExportEvaluatedExamplesDetails(): ExportEvaluatedExamplesOperationMetadata | undefined;
  setExportEvaluatedExamplesDetails(value?: ExportEvaluatedExamplesOperationMetadata): void;

  getProgressPercent(): number;
  setProgressPercent(value: number): void;

  clearPartialFailuresList(): void;
  getPartialFailuresList(): Array<google_rpc_status_pb.Status>;
  setPartialFailuresList(value: Array<google_rpc_status_pb.Status>): void;
  addPartialFailures(value?: google_rpc_status_pb.Status, index?: number): google_rpc_status_pb.Status;

  hasCreateTime(): boolean;
  clearCreateTime(): void;
  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdateTime(): boolean;
  clearUpdateTime(): void;
  getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getDetailsCase(): OperationMetadata.DetailsCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OperationMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: OperationMetadata): OperationMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OperationMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OperationMetadata;
  static deserializeBinaryFromReader(message: OperationMetadata, reader: jspb.BinaryReader): OperationMetadata;
}

export namespace OperationMetadata {
  export type AsObject = {
    deleteDetails?: DeleteOperationMetadata.AsObject,
    deployModelDetails?: DeployModelOperationMetadata.AsObject,
    undeployModelDetails?: UndeployModelOperationMetadata.AsObject,
    createModelDetails?: CreateModelOperationMetadata.AsObject,
    importDataDetails?: ImportDataOperationMetadata.AsObject,
    batchPredictDetails?: BatchPredictOperationMetadata.AsObject,
    exportDataDetails?: ExportDataOperationMetadata.AsObject,
    exportModelDetails?: ExportModelOperationMetadata.AsObject,
    exportEvaluatedExamplesDetails?: ExportEvaluatedExamplesOperationMetadata.AsObject,
    progressPercent: number,
    partialFailuresList: Array<google_rpc_status_pb.Status.AsObject>,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export enum DetailsCase {
    DETAILS_NOT_SET = 0,
    DELETE_DETAILS = 8,
    DEPLOY_MODEL_DETAILS = 24,
    UNDEPLOY_MODEL_DETAILS = 25,
    CREATE_MODEL_DETAILS = 10,
    IMPORT_DATA_DETAILS = 15,
    BATCH_PREDICT_DETAILS = 16,
    EXPORT_DATA_DETAILS = 21,
    EXPORT_MODEL_DETAILS = 22,
    EXPORT_EVALUATED_EXAMPLES_DETAILS = 26,
  }
}

export class DeleteOperationMetadata extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteOperationMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteOperationMetadata): DeleteOperationMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteOperationMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteOperationMetadata;
  static deserializeBinaryFromReader(message: DeleteOperationMetadata, reader: jspb.BinaryReader): DeleteOperationMetadata;
}

export namespace DeleteOperationMetadata {
  export type AsObject = {
  }
}

export class DeployModelOperationMetadata extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeployModelOperationMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: DeployModelOperationMetadata): DeployModelOperationMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeployModelOperationMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeployModelOperationMetadata;
  static deserializeBinaryFromReader(message: DeployModelOperationMetadata, reader: jspb.BinaryReader): DeployModelOperationMetadata;
}

export namespace DeployModelOperationMetadata {
  export type AsObject = {
  }
}

export class UndeployModelOperationMetadata extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UndeployModelOperationMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: UndeployModelOperationMetadata): UndeployModelOperationMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UndeployModelOperationMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UndeployModelOperationMetadata;
  static deserializeBinaryFromReader(message: UndeployModelOperationMetadata, reader: jspb.BinaryReader): UndeployModelOperationMetadata;
}

export namespace UndeployModelOperationMetadata {
  export type AsObject = {
  }
}

export class CreateModelOperationMetadata extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateModelOperationMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: CreateModelOperationMetadata): CreateModelOperationMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateModelOperationMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateModelOperationMetadata;
  static deserializeBinaryFromReader(message: CreateModelOperationMetadata, reader: jspb.BinaryReader): CreateModelOperationMetadata;
}

export namespace CreateModelOperationMetadata {
  export type AsObject = {
  }
}

export class ImportDataOperationMetadata extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImportDataOperationMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: ImportDataOperationMetadata): ImportDataOperationMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ImportDataOperationMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImportDataOperationMetadata;
  static deserializeBinaryFromReader(message: ImportDataOperationMetadata, reader: jspb.BinaryReader): ImportDataOperationMetadata;
}

export namespace ImportDataOperationMetadata {
  export type AsObject = {
  }
}

export class ExportDataOperationMetadata extends jspb.Message {
  hasOutputInfo(): boolean;
  clearOutputInfo(): void;
  getOutputInfo(): ExportDataOperationMetadata.ExportDataOutputInfo | undefined;
  setOutputInfo(value?: ExportDataOperationMetadata.ExportDataOutputInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExportDataOperationMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: ExportDataOperationMetadata): ExportDataOperationMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExportDataOperationMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExportDataOperationMetadata;
  static deserializeBinaryFromReader(message: ExportDataOperationMetadata, reader: jspb.BinaryReader): ExportDataOperationMetadata;
}

export namespace ExportDataOperationMetadata {
  export type AsObject = {
    outputInfo?: ExportDataOperationMetadata.ExportDataOutputInfo.AsObject,
  }

  export class ExportDataOutputInfo extends jspb.Message {
    hasGcsOutputDirectory(): boolean;
    clearGcsOutputDirectory(): void;
    getGcsOutputDirectory(): string;
    setGcsOutputDirectory(value: string): void;

    hasBigqueryOutputDataset(): boolean;
    clearBigqueryOutputDataset(): void;
    getBigqueryOutputDataset(): string;
    setBigqueryOutputDataset(value: string): void;

    getOutputLocationCase(): ExportDataOutputInfo.OutputLocationCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExportDataOutputInfo.AsObject;
    static toObject(includeInstance: boolean, msg: ExportDataOutputInfo): ExportDataOutputInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExportDataOutputInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExportDataOutputInfo;
    static deserializeBinaryFromReader(message: ExportDataOutputInfo, reader: jspb.BinaryReader): ExportDataOutputInfo;
  }

  export namespace ExportDataOutputInfo {
    export type AsObject = {
      gcsOutputDirectory: string,
      bigqueryOutputDataset: string,
    }

    export enum OutputLocationCase {
      OUTPUT_LOCATION_NOT_SET = 0,
      GCS_OUTPUT_DIRECTORY = 1,
      BIGQUERY_OUTPUT_DATASET = 2,
    }
  }
}

export class BatchPredictOperationMetadata extends jspb.Message {
  hasInputConfig(): boolean;
  clearInputConfig(): void;
  getInputConfig(): google_cloud_automl_v1beta1_io_pb.BatchPredictInputConfig | undefined;
  setInputConfig(value?: google_cloud_automl_v1beta1_io_pb.BatchPredictInputConfig): void;

  hasOutputInfo(): boolean;
  clearOutputInfo(): void;
  getOutputInfo(): BatchPredictOperationMetadata.BatchPredictOutputInfo | undefined;
  setOutputInfo(value?: BatchPredictOperationMetadata.BatchPredictOutputInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchPredictOperationMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: BatchPredictOperationMetadata): BatchPredictOperationMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BatchPredictOperationMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchPredictOperationMetadata;
  static deserializeBinaryFromReader(message: BatchPredictOperationMetadata, reader: jspb.BinaryReader): BatchPredictOperationMetadata;
}

export namespace BatchPredictOperationMetadata {
  export type AsObject = {
    inputConfig?: google_cloud_automl_v1beta1_io_pb.BatchPredictInputConfig.AsObject,
    outputInfo?: BatchPredictOperationMetadata.BatchPredictOutputInfo.AsObject,
  }

  export class BatchPredictOutputInfo extends jspb.Message {
    hasGcsOutputDirectory(): boolean;
    clearGcsOutputDirectory(): void;
    getGcsOutputDirectory(): string;
    setGcsOutputDirectory(value: string): void;

    hasBigqueryOutputDataset(): boolean;
    clearBigqueryOutputDataset(): void;
    getBigqueryOutputDataset(): string;
    setBigqueryOutputDataset(value: string): void;

    getOutputLocationCase(): BatchPredictOutputInfo.OutputLocationCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BatchPredictOutputInfo.AsObject;
    static toObject(includeInstance: boolean, msg: BatchPredictOutputInfo): BatchPredictOutputInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BatchPredictOutputInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BatchPredictOutputInfo;
    static deserializeBinaryFromReader(message: BatchPredictOutputInfo, reader: jspb.BinaryReader): BatchPredictOutputInfo;
  }

  export namespace BatchPredictOutputInfo {
    export type AsObject = {
      gcsOutputDirectory: string,
      bigqueryOutputDataset: string,
    }

    export enum OutputLocationCase {
      OUTPUT_LOCATION_NOT_SET = 0,
      GCS_OUTPUT_DIRECTORY = 1,
      BIGQUERY_OUTPUT_DATASET = 2,
    }
  }
}

export class ExportModelOperationMetadata extends jspb.Message {
  hasOutputInfo(): boolean;
  clearOutputInfo(): void;
  getOutputInfo(): ExportModelOperationMetadata.ExportModelOutputInfo | undefined;
  setOutputInfo(value?: ExportModelOperationMetadata.ExportModelOutputInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExportModelOperationMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: ExportModelOperationMetadata): ExportModelOperationMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExportModelOperationMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExportModelOperationMetadata;
  static deserializeBinaryFromReader(message: ExportModelOperationMetadata, reader: jspb.BinaryReader): ExportModelOperationMetadata;
}

export namespace ExportModelOperationMetadata {
  export type AsObject = {
    outputInfo?: ExportModelOperationMetadata.ExportModelOutputInfo.AsObject,
  }

  export class ExportModelOutputInfo extends jspb.Message {
    getGcsOutputDirectory(): string;
    setGcsOutputDirectory(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExportModelOutputInfo.AsObject;
    static toObject(includeInstance: boolean, msg: ExportModelOutputInfo): ExportModelOutputInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExportModelOutputInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExportModelOutputInfo;
    static deserializeBinaryFromReader(message: ExportModelOutputInfo, reader: jspb.BinaryReader): ExportModelOutputInfo;
  }

  export namespace ExportModelOutputInfo {
    export type AsObject = {
      gcsOutputDirectory: string,
    }
  }
}

export class ExportEvaluatedExamplesOperationMetadata extends jspb.Message {
  hasOutputInfo(): boolean;
  clearOutputInfo(): void;
  getOutputInfo(): ExportEvaluatedExamplesOperationMetadata.ExportEvaluatedExamplesOutputInfo | undefined;
  setOutputInfo(value?: ExportEvaluatedExamplesOperationMetadata.ExportEvaluatedExamplesOutputInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExportEvaluatedExamplesOperationMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: ExportEvaluatedExamplesOperationMetadata): ExportEvaluatedExamplesOperationMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExportEvaluatedExamplesOperationMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExportEvaluatedExamplesOperationMetadata;
  static deserializeBinaryFromReader(message: ExportEvaluatedExamplesOperationMetadata, reader: jspb.BinaryReader): ExportEvaluatedExamplesOperationMetadata;
}

export namespace ExportEvaluatedExamplesOperationMetadata {
  export type AsObject = {
    outputInfo?: ExportEvaluatedExamplesOperationMetadata.ExportEvaluatedExamplesOutputInfo.AsObject,
  }

  export class ExportEvaluatedExamplesOutputInfo extends jspb.Message {
    getBigqueryOutputDataset(): string;
    setBigqueryOutputDataset(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExportEvaluatedExamplesOutputInfo.AsObject;
    static toObject(includeInstance: boolean, msg: ExportEvaluatedExamplesOutputInfo): ExportEvaluatedExamplesOutputInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExportEvaluatedExamplesOutputInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExportEvaluatedExamplesOutputInfo;
    static deserializeBinaryFromReader(message: ExportEvaluatedExamplesOutputInfo, reader: jspb.BinaryReader): ExportEvaluatedExamplesOutputInfo;
  }

  export namespace ExportEvaluatedExamplesOutputInfo {
    export type AsObject = {
      bigqueryOutputDataset: string,
    }
  }
}

