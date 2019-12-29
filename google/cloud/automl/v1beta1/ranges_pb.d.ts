// package: google.cloud.automl.v1beta1
// file: google/cloud/automl/v1beta1/ranges.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";

export class DoubleRange extends jspb.Message {
  getStart(): number;
  setStart(value: number): void;

  getEnd(): number;
  setEnd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DoubleRange.AsObject;
  static toObject(includeInstance: boolean, msg: DoubleRange): DoubleRange.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DoubleRange, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DoubleRange;
  static deserializeBinaryFromReader(message: DoubleRange, reader: jspb.BinaryReader): DoubleRange;
}

export namespace DoubleRange {
  export type AsObject = {
    start: number,
    end: number,
  }
}

