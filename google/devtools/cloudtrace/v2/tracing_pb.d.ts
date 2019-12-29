// package: google.devtools.cloudtrace.v2
// file: google/devtools/cloudtrace/v2/tracing.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";
import * as google_api_client_pb from "../../../../google/api/client_pb";
import * as google_api_field_behavior_pb from "../../../../google/api/field_behavior_pb";
import * as google_api_resource_pb from "../../../../google/api/resource_pb";
import * as google_devtools_cloudtrace_v2_trace_pb from "../../../../google/devtools/cloudtrace/v2/trace_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class BatchWriteSpansRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  clearSpansList(): void;
  getSpansList(): Array<google_devtools_cloudtrace_v2_trace_pb.Span>;
  setSpansList(value: Array<google_devtools_cloudtrace_v2_trace_pb.Span>): void;
  addSpans(value?: google_devtools_cloudtrace_v2_trace_pb.Span, index?: number): google_devtools_cloudtrace_v2_trace_pb.Span;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchWriteSpansRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BatchWriteSpansRequest): BatchWriteSpansRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BatchWriteSpansRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchWriteSpansRequest;
  static deserializeBinaryFromReader(message: BatchWriteSpansRequest, reader: jspb.BinaryReader): BatchWriteSpansRequest;
}

export namespace BatchWriteSpansRequest {
  export type AsObject = {
    name: string,
    spansList: Array<google_devtools_cloudtrace_v2_trace_pb.Span.AsObject>,
  }
}

