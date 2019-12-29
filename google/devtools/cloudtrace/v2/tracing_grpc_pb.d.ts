// GENERATED CODE -- DO NOT EDIT!

// package: google.devtools.cloudtrace.v2
// file: google/devtools/cloudtrace/v2/tracing.proto

import * as google_devtools_cloudtrace_v2_tracing_pb from "../../../../google/devtools/cloudtrace/v2/tracing_pb";
import * as google_devtools_cloudtrace_v2_trace_pb from "../../../../google/devtools/cloudtrace/v2/trace_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "grpc";

interface ITraceServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  batchWriteSpans: grpc.MethodDefinition<google_devtools_cloudtrace_v2_tracing_pb.BatchWriteSpansRequest, google_protobuf_empty_pb.Empty>;
  createSpan: grpc.MethodDefinition<google_devtools_cloudtrace_v2_trace_pb.Span, google_devtools_cloudtrace_v2_trace_pb.Span>;
}

export const TraceServiceService: ITraceServiceService;

export class TraceServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  batchWriteSpans(argument: google_devtools_cloudtrace_v2_tracing_pb.BatchWriteSpansRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  batchWriteSpans(argument: google_devtools_cloudtrace_v2_tracing_pb.BatchWriteSpansRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  batchWriteSpans(argument: google_devtools_cloudtrace_v2_tracing_pb.BatchWriteSpansRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  createSpan(argument: google_devtools_cloudtrace_v2_trace_pb.Span, callback: grpc.requestCallback<google_devtools_cloudtrace_v2_trace_pb.Span>): grpc.ClientUnaryCall;
  createSpan(argument: google_devtools_cloudtrace_v2_trace_pb.Span, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_cloudtrace_v2_trace_pb.Span>): grpc.ClientUnaryCall;
  createSpan(argument: google_devtools_cloudtrace_v2_trace_pb.Span, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_cloudtrace_v2_trace_pb.Span>): grpc.ClientUnaryCall;
}
