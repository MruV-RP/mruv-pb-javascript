// package: google.cloud.bigquery.storage.v1beta1
// file: google/cloud/bigquery/storage/v1beta1/table_reference.proto

import * as jspb from "google-protobuf";
import * as google_api_resource_pb from "../../../../../google/api/resource_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class TableReference extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getDatasetId(): string;
  setDatasetId(value: string): void;

  getTableId(): string;
  setTableId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TableReference.AsObject;
  static toObject(includeInstance: boolean, msg: TableReference): TableReference.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TableReference, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TableReference;
  static deserializeBinaryFromReader(message: TableReference, reader: jspb.BinaryReader): TableReference;
}

export namespace TableReference {
  export type AsObject = {
    projectId: string,
    datasetId: string,
    tableId: string,
  }
}

export class TableModifiers extends jspb.Message {
  hasSnapshotTime(): boolean;
  clearSnapshotTime(): void;
  getSnapshotTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setSnapshotTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TableModifiers.AsObject;
  static toObject(includeInstance: boolean, msg: TableModifiers): TableModifiers.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TableModifiers, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TableModifiers;
  static deserializeBinaryFromReader(message: TableModifiers, reader: jspb.BinaryReader): TableModifiers;
}

export namespace TableModifiers {
  export type AsObject = {
    snapshotTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

