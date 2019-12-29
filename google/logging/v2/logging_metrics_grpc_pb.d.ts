// GENERATED CODE -- DO NOT EDIT!

// package: google.logging.v2
// file: google/logging/v2/logging_metrics.proto

import * as google_logging_v2_logging_metrics_pb from "../../../google/logging/v2/logging_metrics_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "grpc";

interface IMetricsServiceV2Service extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  listLogMetrics: grpc.MethodDefinition<google_logging_v2_logging_metrics_pb.ListLogMetricsRequest, google_logging_v2_logging_metrics_pb.ListLogMetricsResponse>;
  getLogMetric: grpc.MethodDefinition<google_logging_v2_logging_metrics_pb.GetLogMetricRequest, google_logging_v2_logging_metrics_pb.LogMetric>;
  createLogMetric: grpc.MethodDefinition<google_logging_v2_logging_metrics_pb.CreateLogMetricRequest, google_logging_v2_logging_metrics_pb.LogMetric>;
  updateLogMetric: grpc.MethodDefinition<google_logging_v2_logging_metrics_pb.UpdateLogMetricRequest, google_logging_v2_logging_metrics_pb.LogMetric>;
  deleteLogMetric: grpc.MethodDefinition<google_logging_v2_logging_metrics_pb.DeleteLogMetricRequest, google_protobuf_empty_pb.Empty>;
}

export const MetricsServiceV2Service: IMetricsServiceV2Service;

export class MetricsServiceV2Client extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  listLogMetrics(argument: google_logging_v2_logging_metrics_pb.ListLogMetricsRequest, callback: grpc.requestCallback<google_logging_v2_logging_metrics_pb.ListLogMetricsResponse>): grpc.ClientUnaryCall;
  listLogMetrics(argument: google_logging_v2_logging_metrics_pb.ListLogMetricsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_logging_v2_logging_metrics_pb.ListLogMetricsResponse>): grpc.ClientUnaryCall;
  listLogMetrics(argument: google_logging_v2_logging_metrics_pb.ListLogMetricsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_logging_v2_logging_metrics_pb.ListLogMetricsResponse>): grpc.ClientUnaryCall;
  getLogMetric(argument: google_logging_v2_logging_metrics_pb.GetLogMetricRequest, callback: grpc.requestCallback<google_logging_v2_logging_metrics_pb.LogMetric>): grpc.ClientUnaryCall;
  getLogMetric(argument: google_logging_v2_logging_metrics_pb.GetLogMetricRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_logging_v2_logging_metrics_pb.LogMetric>): grpc.ClientUnaryCall;
  getLogMetric(argument: google_logging_v2_logging_metrics_pb.GetLogMetricRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_logging_v2_logging_metrics_pb.LogMetric>): grpc.ClientUnaryCall;
  createLogMetric(argument: google_logging_v2_logging_metrics_pb.CreateLogMetricRequest, callback: grpc.requestCallback<google_logging_v2_logging_metrics_pb.LogMetric>): grpc.ClientUnaryCall;
  createLogMetric(argument: google_logging_v2_logging_metrics_pb.CreateLogMetricRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_logging_v2_logging_metrics_pb.LogMetric>): grpc.ClientUnaryCall;
  createLogMetric(argument: google_logging_v2_logging_metrics_pb.CreateLogMetricRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_logging_v2_logging_metrics_pb.LogMetric>): grpc.ClientUnaryCall;
  updateLogMetric(argument: google_logging_v2_logging_metrics_pb.UpdateLogMetricRequest, callback: grpc.requestCallback<google_logging_v2_logging_metrics_pb.LogMetric>): grpc.ClientUnaryCall;
  updateLogMetric(argument: google_logging_v2_logging_metrics_pb.UpdateLogMetricRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_logging_v2_logging_metrics_pb.LogMetric>): grpc.ClientUnaryCall;
  updateLogMetric(argument: google_logging_v2_logging_metrics_pb.UpdateLogMetricRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_logging_v2_logging_metrics_pb.LogMetric>): grpc.ClientUnaryCall;
  deleteLogMetric(argument: google_logging_v2_logging_metrics_pb.DeleteLogMetricRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteLogMetric(argument: google_logging_v2_logging_metrics_pb.DeleteLogMetricRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteLogMetric(argument: google_logging_v2_logging_metrics_pb.DeleteLogMetricRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
}
