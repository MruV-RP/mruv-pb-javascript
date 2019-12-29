// package: google.cloud.bigquery.storage.v1beta1
// file: google/cloud/bigquery/storage/v1beta1/read_options.proto

import * as jspb from "google-protobuf";

export class TableReadOptions extends jspb.Message {
  clearSelectedFieldsList(): void;
  getSelectedFieldsList(): Array<string>;
  setSelectedFieldsList(value: Array<string>): void;
  addSelectedFields(value: string, index?: number): string;

  getRowRestriction(): string;
  setRowRestriction(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TableReadOptions.AsObject;
  static toObject(includeInstance: boolean, msg: TableReadOptions): TableReadOptions.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TableReadOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TableReadOptions;
  static deserializeBinaryFromReader(message: TableReadOptions, reader: jspb.BinaryReader): TableReadOptions;
}

export namespace TableReadOptions {
  export type AsObject = {
    selectedFieldsList: Array<string>,
    rowRestriction: string,
  }
}

