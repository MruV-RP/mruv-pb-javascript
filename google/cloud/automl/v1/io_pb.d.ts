// package: google.cloud.automl.v1
// file: google/cloud/automl/v1/io.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";
import * as google_api_field_behavior_pb from "../../../../google/api/field_behavior_pb";

export class InputConfig extends jspb.Message {
  hasGcsSource(): boolean;
  clearGcsSource(): void;
  getGcsSource(): GcsSource | undefined;
  setGcsSource(value?: GcsSource): void;

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
    paramsMap: Array<[string, string]>,
  }

  export enum SourceCase {
    SOURCE_NOT_SET = 0,
    GCS_SOURCE = 1,
  }
}

export class BatchPredictInputConfig extends jspb.Message {
  hasGcsSource(): boolean;
  clearGcsSource(): void;
  getGcsSource(): GcsSource | undefined;
  setGcsSource(value?: GcsSource): void;

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
  }

  export enum SourceCase {
    SOURCE_NOT_SET = 0,
    GCS_SOURCE = 1,
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
  }

  export enum DestinationCase {
    DESTINATION_NOT_SET = 0,
    GCS_DESTINATION = 1,
  }
}

export class BatchPredictOutputConfig extends jspb.Message {
  hasGcsDestination(): boolean;
  clearGcsDestination(): void;
  getGcsDestination(): GcsDestination | undefined;
  setGcsDestination(value?: GcsDestination): void;

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
  }

  export enum DestinationCase {
    DESTINATION_NOT_SET = 0,
    GCS_DESTINATION = 1,
  }
}

export class ModelExportOutputConfig extends jspb.Message {
  hasGcsDestination(): boolean;
  clearGcsDestination(): void;
  getGcsDestination(): GcsDestination | undefined;
  setGcsDestination(value?: GcsDestination): void;

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
    modelFormat: string,
    paramsMap: Array<[string, string]>,
  }

  export enum DestinationCase {
    DESTINATION_NOT_SET = 0,
    GCS_DESTINATION = 1,
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

