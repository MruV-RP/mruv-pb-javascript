// package: google.cloud.bigquery.storage.v1beta1
// file: google/cloud/bigquery/storage/v1beta1/avro.proto

import * as jspb from "google-protobuf";

export class AvroSchema extends jspb.Message {
  getSchema(): string;
  setSchema(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AvroSchema.AsObject;
  static toObject(includeInstance: boolean, msg: AvroSchema): AvroSchema.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AvroSchema, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AvroSchema;
  static deserializeBinaryFromReader(message: AvroSchema, reader: jspb.BinaryReader): AvroSchema;
}

export namespace AvroSchema {
  export type AsObject = {
    schema: string,
  }
}

export class AvroRows extends jspb.Message {
  getSerializedBinaryRows(): Uint8Array | string;
  getSerializedBinaryRows_asU8(): Uint8Array;
  getSerializedBinaryRows_asB64(): string;
  setSerializedBinaryRows(value: Uint8Array | string): void;

  getRowCount(): number;
  setRowCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AvroRows.AsObject;
  static toObject(includeInstance: boolean, msg: AvroRows): AvroRows.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AvroRows, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AvroRows;
  static deserializeBinaryFromReader(message: AvroRows, reader: jspb.BinaryReader): AvroRows;
}

export namespace AvroRows {
  export type AsObject = {
    serializedBinaryRows: Uint8Array | string,
    rowCount: number,
  }
}

