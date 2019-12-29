// package: google.monitoring.v3
// file: google/monitoring/v3/span_context.proto

import * as jspb from "google-protobuf";

export class SpanContext extends jspb.Message {
  getSpanName(): string;
  setSpanName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SpanContext.AsObject;
  static toObject(includeInstance: boolean, msg: SpanContext): SpanContext.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SpanContext, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SpanContext;
  static deserializeBinaryFromReader(message: SpanContext, reader: jspb.BinaryReader): SpanContext;
}

export namespace SpanContext {
  export type AsObject = {
    spanName: string,
  }
}

