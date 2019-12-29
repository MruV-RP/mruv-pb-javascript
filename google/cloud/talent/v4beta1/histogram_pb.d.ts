// package: google.cloud.talent.v4beta1
// file: google/cloud/talent/v4beta1/histogram.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";

export class HistogramQuery extends jspb.Message {
  getHistogramQuery(): string;
  setHistogramQuery(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HistogramQuery.AsObject;
  static toObject(includeInstance: boolean, msg: HistogramQuery): HistogramQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HistogramQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HistogramQuery;
  static deserializeBinaryFromReader(message: HistogramQuery, reader: jspb.BinaryReader): HistogramQuery;
}

export namespace HistogramQuery {
  export type AsObject = {
    histogramQuery: string,
  }
}

export class HistogramQueryResult extends jspb.Message {
  getHistogramQuery(): string;
  setHistogramQuery(value: string): void;

  getHistogramMap(): jspb.Map<string, number>;
  clearHistogramMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HistogramQueryResult.AsObject;
  static toObject(includeInstance: boolean, msg: HistogramQueryResult): HistogramQueryResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HistogramQueryResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HistogramQueryResult;
  static deserializeBinaryFromReader(message: HistogramQueryResult, reader: jspb.BinaryReader): HistogramQueryResult;
}

export namespace HistogramQueryResult {
  export type AsObject = {
    histogramQuery: string,
    histogramMap: Array<[string, number]>,
  }
}

