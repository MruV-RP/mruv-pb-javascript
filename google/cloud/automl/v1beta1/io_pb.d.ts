// package: google.cloud.automl.v1beta1
// file: google/cloud/automl/v1beta1/io.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";

export class InputConfig extends jspb.Message {
  hasGcsSource(): boolean;
  clearGcsSource(): void;
  getGcsSource(): GcsSource | undefined;
  setGcsSource(value?: GcsSource): void;

  hasBigquerySource(): boolean;
  clearBigquerySource(): void;
  getBigquerySource(): BigQuerySource | undefined;
  setBigquerySource(value?: BigQuerySource): void;

  getParamsMap(): jspb.Map<string, string>;
  clearParamsMap(): void;
  getSourceCase(): InputConfig.SourceCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InputConfig.AsObject;
  static toObject(includeInstance: boolean, msg: InputConfig): InputConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InputConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InputConfig;
  static deserializeBinaryFromReader(message: InputConfig, reader: jspb.BinaryReader): InputConfig;
}

export namespace InputConfig {
  export type AsObject = {
    gcsSource?: GcsSource.AsObject,
    bigquerySource?: BigQuerySource.AsObject,
    paramsMap: Array<[string, string]>,
  }

  export enum SourceCase {
    SOURCE_NOT_SET = 0,
    GCS_SOURCE = 1,
    BIGQUERY_SOURCE = 3,
  }
}

export class BatchPredictInputConfig extends jspb.Message {
  hasGcsSource(): boolean;
  clearGcsSource(): void;
  getGcsSource(): GcsSource | undefined;
  setGcsSource(value?: GcsSource): void;

  hasBigquerySource(): boolean;
  clearBigquerySource(): void;
  getBigquerySource(): BigQuerySource | undefined;
  setBigquerySource(value?: BigQuerySource): void;

  getSourceCase(): BatchPredictInputConfig.SourceCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchPredictInputConfig.AsObject;
  static toObject(includeInstance: boolean, msg: BatchPredictInputConfig): BatchPredictInputConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BatchPredictInputConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchPredictInputConfig;
  static deserializeBinaryFromReader(message: BatchPredictInputConfig, reader: jspb.BinaryReader): BatchPredictInputConfig;
}

export namespace BatchPredictInputConfig {
  export type AsObject = {
    gcsSource?: GcsSource.AsObject,
    bigquerySource?: BigQuerySource.AsObject,
  }

  export enum SourceCase {
    SOURCE_NOT_SET = 0,
    GCS_SOURCE = 1,
    BIGQUERY_SOURCE = 2,
  }
}

export class DocumentInputConfig extends jspb.Message {
  hasGcsSource(): boolean;
  clearGcsSource(): void;
  getGcsSource(): GcsSource | undefined;
  setGcsSource(value?: GcsSource): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DocumentInputConfig.AsObject;
  static toObject(includeInstance: boolean, msg: DocumentInputConfig): DocumentInputConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DocumentInputConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DocumentInputConfig;
  static deserializeBinaryFromReader(message: DocumentInputConfig, reader: jspb.BinaryReader): DocumentInputConfig;
}

export namespace DocumentInputConfig {
  export type AsObject = {
    gcsSource?: GcsSource.AsObject,
  }
}

export class OutputConfig extends jspb.Message {
  hasGcsDestination(): boolean;
  clearGcsDestination(): void;
  getGcsDestination(): GcsDestination | undefined;
  setGcsDestination(value?: GcsDestination): void;

  hasBigqueryDestination(): boolean;
  clearBigqueryDestination(): void;
  getBigqueryDestination(): BigQueryDestination | undefined;
  setBigqueryDestination(value?: BigQueryDestination): void;

  getDestinationCase(): OutputConfig.DestinationCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OutputConfig.AsObject;
  static toObject(includeInstance: boolean, msg: OutputConfig): OutputConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OutputConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OutputConfig;
  static deserializeBinaryFromReader(message: OutputConfig, reader: jspb.BinaryReader): OutputConfig;
}

export namespace OutputConfig {
  export type AsObject = {
    gcsDestination?: GcsDestination.AsObject,
    bigqueryDestination?: BigQueryDestination.AsObject,
  }

  export enum DestinationCase {
    DESTINATION_NOT_SET = 0,
    GCS_DESTINATION = 1,
    BIGQUERY_DESTINATION = 2,
  }
}

export class BatchPredictOutputConfig extends jspb.Message {
  hasGcsDestination(): boolean;
  clearGcsDestination(): void;
  getGcsDestination(): GcsDestination | undefined;
  setGcsDestination(value?: GcsDestination): void;

  hasBigqueryDestination(): boolean;
  clearBigqueryDestination(): void;
  getBigqueryDestination(): BigQueryDestination | undefined;
  setBigqueryDestination(value?: BigQueryDestination): void;

  getDestinationCase(): BatchPredictOutputConfig.DestinationCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchPredictOutputConfig.AsObject;
  static toObject(includeInstance: boolean, msg: BatchPredictOutputConfig): BatchPredictOutputConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BatchPredictOutputConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchPredictOutputConfig;
  static deserializeBinaryFromReader(message: BatchPredictOutputConfig, reader: jspb.BinaryReader): BatchPredictOutputConfig;
}

export namespace BatchPredictOutputConfig {
  export type AsObject = {
    gcsDestination?: GcsDestination.AsObject,
    bigqueryDestination?: BigQueryDestination.AsObject,
  }

  export enum DestinationCase {
    DESTINATION_NOT_SET = 0,
    GCS_DESTINATION = 1,
    BIGQUERY_DESTINATION = 2,
  }
}

export class ModelExportOutputConfig extends jspb.Message {
  hasGcsDestination(): boolean;
  clearGcsDestination(): void;
  getGcsDestination(): GcsDestination | undefined;
  setGcsDestination(value?: GcsDestination): void;

  hasGcrDestination(): boolean;
  clearGcrDestination(): void;
  getGcrDestination(): GcrDestination | undefined;
  setGcrDestination(value?: GcrDestination): void;

  getModelFormat(): string;
  setModelFormat(value: string): void;

  getParamsMap(): jspb.Map<string, string>;
  clearParamsMap(): void;
  getDestinationCase(): ModelExportOutputConfig.DestinationCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelExportOutputConfig.AsObject;
  static toObject(includeInstance: boolean, msg: ModelExportOutputConfig): ModelExportOutputConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ModelExportOutputConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelExportOutputConfig;
  static deserializeBinaryFromReader(message: ModelExportOutputConfig, reader: jspb.BinaryReader): ModelExportOutputConfig;
}

export namespace ModelExportOutputConfig {
  export type AsObject = {
    gcsDestination?: GcsDestination.AsObject,
    gcrDestination?: GcrDestination.AsObject,
    modelFormat: string,
    paramsMap: Array<[string, string]>,
  }

  export enum DestinationCase {
    DESTINATION_NOT_SET = 0,
    GCS_DESTINATION = 1,
    GCR_DESTINATION = 3,
  }
}

export class ExportEvaluatedExamplesOutputConfig extends jspb.Message {
  hasBigqueryDestination(): boolean;
  clearBigqueryDestination(): void;
  getBigqueryDestination(): BigQueryDestination | undefined;
  setBigqueryDestination(value?: BigQueryDestination): void;

  getDestinationCase(): ExportEvaluatedExamplesOutputConfig.DestinationCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExportEvaluatedExamplesOutputConfig.AsObject;
  static toObject(includeInstance: boolean, msg: ExportEvaluatedExamplesOutputConfig): ExportEvaluatedExamplesOutputConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExportEvaluatedExamplesOutputConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExportEvaluatedExamplesOutputConfig;
  static deserializeBinaryFromReader(message: ExportEvaluatedExamplesOutputConfig, reader: jspb.BinaryReader): ExportEvaluatedExamplesOutputConfig;
}

export namespace ExportEvaluatedExamplesOutputConfig {
  export type AsObject = {
    bigqueryDestination?: BigQueryDestination.AsObject,
  }

  export enum DestinationCase {
    DESTINATION_NOT_SET = 0,
    BIGQUERY_DESTINATION = 2,
  }
}

export class GcsSource extends jspb.Message {
  clearInputUrisList(): void;
  getInputUrisList(): Array<string>;
  setInputUrisList(value: Array<string>): void;
  addInputUris(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GcsSource.AsObject;
  static toObject(includeInstance: boolean, msg: GcsSource): GcsSource.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GcsSource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GcsSource;
  static deserializeBinaryFromReader(message: GcsSource, reader: jspb.BinaryReader): GcsSource;
}

export namespace GcsSource {
  export type AsObject = {
    inputUrisList: Array<string>,
  }
}

export class BigQuerySource extends jspb.Message {
  getInputUri(): string;
  setInputUri(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BigQuerySource.AsObject;
  static toObject(includeInstance: boolean, msg: BigQuerySource): BigQuerySource.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BigQuerySource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BigQuerySource;
  static deserializeBinaryFromReader(message: BigQuerySource, reader: jspb.BinaryReader): BigQuerySource;
}

export namespace BigQuerySource {
  export type AsObject = {
    inputUri: string,
  }
}

export class GcsDestination extends jspb.Message {
  getOutputUriPrefix(): string;
  setOutputUriPrefix(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GcsDestination.AsObject;
  static toObject(includeInstance: boolean, msg: GcsDestination): GcsDestination.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GcsDestination, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GcsDestination;
  static deserializeBinaryFromReader(message: GcsDestination, reader: jspb.BinaryReader): GcsDestination;
}

export namespace GcsDestination {
  export type AsObject = {
    outputUriPrefix: string,
  }
}

export class BigQueryDestination extends jspb.Message {
  getOutputUri(): string;
  setOutputUri(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BigQueryDestination.AsObject;
  static toObject(includeInstance: boolean, msg: BigQueryDestination): BigQueryDestination.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BigQueryDestination, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BigQueryDestination;
  static deserializeBinaryFromReader(message: BigQueryDestination, reader: jspb.BinaryReader): BigQueryDestination;
}

export namespace BigQueryDestination {
  export type AsObject = {
    outputUri: string,
  }
}

export class GcrDestination extends jspb.Message {
  getOutputUri(): string;
  setOutputUri(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GcrDestination.AsObject;
  static toObject(includeInstance: boolean, msg: GcrDestination): GcrDestination.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GcrDestination, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GcrDestination;
  static deserializeBinaryFromReader(message: GcrDestination, reader: jspb.BinaryReader): GcrDestination;
}

export namespace GcrDestination {
  export type AsObject = {
    outputUri: string,
  }
}

