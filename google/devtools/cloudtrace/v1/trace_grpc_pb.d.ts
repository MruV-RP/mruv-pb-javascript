// GENERATED CODE -- DO NOT EDIT!

// package: google.devtools.cloudtrace.v1
// file: google/devtools/cloudtrace/v1/trace.proto

import * as google_devtools_cloudtrace_v1_trace_pb from "../../../../google/devtools/cloudtrace/v1/trace_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "grpc";

interface ITraceServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  listTraces: grpc.MethodDefinition<google_devtools_cloudtrace_v1_trace_pb.ListTracesRequest, google_devtools_cloudtrace_v1_trace_pb.ListTracesResponse>;
  getTrace: grpc.MethodDefinition<google_devtools_cloudtrace_v1_trace_pb.GetTraceRequest, google_devtools_cloudtrace_v1_trace_pb.Trace>;
  patchTraces: grpc.MethodDefinition<google_devtools_cloudtrace_v1_trace_pb.PatchTracesRequest, google_protobuf_empty_pb.Empty>;
}

export const TraceServiceService: ITraceServiceService;

export class TraceServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  listTraces(argument: google_devtools_cloudtrace_v1_trace_pb.ListTracesRequest, callback: grpc.requestCallback<google_devtools_cloudtrace_v1_trace_pb.ListTracesResponse>): grpc.ClientUnaryCall;
  listTraces(argument: google_devtools_cloudtrace_v1_trace_pb.ListTracesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_cloudtrace_v1_trace_pb.ListTracesResponse>): grpc.ClientUnaryCall;
  listTraces(argument: google_devtools_cloudtrace_v1_trace_pb.ListTracesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_cloudtrace_v1_trace_pb.ListTracesResponse>): grpc.ClientUnaryCall;
  getTrace(argument: google_devtools_cloudtrace_v1_trace_pb.GetTraceRequest, callback: grpc.requestCallback<google_devtools_cloudtrace_v1_trace_pb.Trace>): grpc.ClientUnaryCall;
  getTrace(argument: google_devtools_cloudtrace_v1_trace_pb.GetTraceRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_cloudtrace_v1_trace_pb.Trace>): grpc.ClientUnaryCall;
  getTrace(argument: google_devtools_cloudtrace_v1_trace_pb.GetTraceRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_cloudtrace_v1_trace_pb.Trace>): grpc.ClientUnaryCall;
  patchTraces(argument: google_devtools_cloudtrace_v1_trace_pb.PatchTracesRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  patchTraces(argument: google_devtools_cloudtrace_v1_trace_pb.PatchTracesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  patchTraces(argument: google_devtools_cloudtrace_v1_trace_pb.PatchTracesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
}
