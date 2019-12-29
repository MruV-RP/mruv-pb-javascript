// package: google.cloud.datalabeling.v1beta1
// file: google/cloud/datalabeling/v1beta1/instruction.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";
import * as google_cloud_datalabeling_v1beta1_dataset_pb from "../../../../google/cloud/datalabeling/v1beta1/dataset_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Instruction extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDisplayName(): string;
  setDisplayName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  hasCreateTime(): boolean;
  clearCreateTime(): void;
  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdateTime(): boolean;
  clearUpdateTime(): void;
  getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getDataType(): google_cloud_datalabeling_v1beta1_dataset_pb.DataTypeMap[keyof google_cloud_datalabeling_v1beta1_dataset_pb.DataTypeMap];
  setDataType(value: google_cloud_datalabeling_v1beta1_dataset_pb.DataTypeMap[keyof google_cloud_datalabeling_v1beta1_dataset_pb.DataTypeMap]): void;

  hasCsvInstruction(): boolean;
  clearCsvInstruction(): void;
  getCsvInstruction(): CsvInstruction | undefined;
  setCsvInstruction(value?: CsvInstruction): void;

  hasPdfInstruction(): boolean;
  clearPdfInstruction(): void;
  getPdfInstruction(): PdfInstruction | undefined;
  setPdfInstruction(value?: PdfInstruction): void;

  clearBlockingResourcesList(): void;
  getBlockingResourcesList(): Array<string>;
  setBlockingResourcesList(value: Array<string>): void;
  addBlockingResources(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Instruction.AsObject;
  static toObject(includeInstance: boolean, msg: Instruction): Instruction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Instruction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Instruction;
  static deserializeBinaryFromReader(message: Instruction, reader: jspb.BinaryReader): Instruction;
}

export namespace Instruction {
  export type AsObject = {
    name: string,
    displayName: string,
    description: string,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    dataType: google_cloud_datalabeling_v1beta1_dataset_pb.DataTypeMap[keyof google_cloud_datalabeling_v1beta1_dataset_pb.DataTypeMap],
    csvInstruction?: CsvInstruction.AsObject,
    pdfInstruction?: PdfInstruction.AsObject,
    blockingResourcesList: Array<string>,
  }
}

export class CsvInstruction extends jspb.Message {
  getGcsFileUri(): string;
  setGcsFileUri(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CsvInstruction.AsObject;
  static toObject(includeInstance: boolean, msg: CsvInstruction): CsvInstruction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CsvInstruction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CsvInstruction;
  static deserializeBinaryFromReader(message: CsvInstruction, reader: jspb.BinaryReader): CsvInstruction;
}

export namespace CsvInstruction {
  export type AsObject = {
    gcsFileUri: string,
  }
}

export class PdfInstruction extends jspb.Message {
  getGcsFileUri(): string;
  setGcsFileUri(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PdfInstruction.AsObject;
  static toObject(includeInstance: boolean, msg: PdfInstruction): PdfInstruction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PdfInstruction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PdfInstruction;
  static deserializeBinaryFromReader(message: PdfInstruction, reader: jspb.BinaryReader): PdfInstruction;
}

export namespace PdfInstruction {
  export type AsObject = {
    gcsFileUri: string,
  }
}

