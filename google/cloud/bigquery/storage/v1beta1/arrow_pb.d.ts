// package: google.cloud.bigquery.storage.v1beta1
// file: google/cloud/bigquery/storage/v1beta1/arrow.proto

import * as jspb from "google-protobuf";

export class ArrowSchema extends jspb.Message {
  getSerializedSchema(): Uint8Array | string;
  getSerializedSchema_asU8(): Uint8Array;
  getSerializedSchema_asB64(): string;
  setSerializedSchema(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArrowSchema.AsObject;
  static toObject(includeInstance: boolean, msg: ArrowSchema): ArrowSchema.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ArrowSchema, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArrowSchema;
  static deserializeBinaryFromReader(message: ArrowSchema, reader: jspb.BinaryReader): ArrowSchema;
}

export namespace ArrowSchema {
  export type AsObject = {
    serializedSchema: Uint8Array | string,
  }
}

export class ArrowRecordBatch extends jspb.Message {
  getSerializedRecordBatch(): Uint8Array | string;
  getSerializedRecordBatch_asU8(): Uint8Array;
  getSerializedRecordBatch_asB64(): string;
  setSerializedRecordBatch(value: Uint8Array | string): void;

  getRowCount(): number;
  setRowCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArrowRecordBatch.AsObject;
  static toObject(includeInstance: boolean, msg: ArrowRecordBatch): ArrowRecordBatch.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ArrowRecordBatch, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArrowRecordBatch;
  static deserializeBinaryFromReader(message: ArrowRecordBatch, reader: jspb.BinaryReader): ArrowRecordBatch;
}

export namespace ArrowRecordBatch {
  export type AsObject = {
    serializedRecordBatch: Uint8Array | string,
    rowCount: number,
  }
}

