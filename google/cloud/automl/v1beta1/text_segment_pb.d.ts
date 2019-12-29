// package: google.cloud.automl.v1beta1
// file: google/cloud/automl/v1beta1/text_segment.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";

export class TextSegment extends jspb.Message {
  getContent(): string;
  setContent(value: string): void;

  getStartOffset(): number;
  setStartOffset(value: number): void;

  getEndOffset(): number;
  setEndOffset(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TextSegment.AsObject;
  static toObject(includeInstance: boolean, msg: TextSegment): TextSegment.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TextSegment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TextSegment;
  static deserializeBinaryFromReader(message: TextSegment, reader: jspb.BinaryReader): TextSegment;
}

export namespace TextSegment {
  export type AsObject = {
    content: string,
    startOffset: number,
    endOffset: number,
  }
}

