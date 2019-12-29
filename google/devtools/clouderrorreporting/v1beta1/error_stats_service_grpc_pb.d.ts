// GENERATED CODE -- DO NOT EDIT!

// package: google.devtools.clouderrorreporting.v1beta1
// file: google/devtools/clouderrorreporting/v1beta1/error_stats_service.proto

import * as google_devtools_clouderrorreporting_v1beta1_error_stats_service_pb from "../../../../google/devtools/clouderrorreporting/v1beta1/error_stats_service_pb";
import * as grpc from "grpc";

interface IErrorStatsServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  listGroupStats: grpc.MethodDefinition<google_devtools_clouderrorreporting_v1beta1_error_stats_service_pb.ListGroupStatsRequest, google_devtools_clouderrorreporting_v1beta1_error_stats_service_pb.ListGroupStatsResponse>;
  listEvents: grpc.MethodDefinition<google_devtools_clouderrorreporting_v1beta1_error_stats_service_pb.ListEventsRequest, google_devtools_clouderrorreporting_v1beta1_error_stats_service_pb.ListEventsResponse>;
  deleteEvents: grpc.MethodDefinition<google_devtools_clouderrorreporting_v1beta1_error_stats_service_pb.DeleteEventsRequest, google_devtools_clouderrorreporting_v1beta1_error_stats_service_pb.DeleteEventsResponse>;
}

export const ErrorStatsServiceService: IErrorStatsServiceService;

export class ErrorStatsServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  listGroupStats(argument: google_devtools_clouderrorreporting_v1beta1_error_stats_service_pb.ListGroupStatsRequest, callback: grpc.requestCallback<google_devtools_clouderrorreporting_v1beta1_error_stats_service_pb.ListGroupStatsResponse>): grpc.ClientUnaryCall;
  listGroupStats(argument: google_devtools_clouderrorreporting_v1beta1_error_stats_service_pb.ListGroupStatsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_clouderrorreporting_v1beta1_error_stats_service_pb.ListGroupStatsResponse>): grpc.ClientUnaryCall;
  listGroupStats(argument: google_devtools_clouderrorreporting_v1beta1_error_stats_service_pb.ListGroupStatsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_clouderrorreporting_v1beta1_error_stats_service_pb.ListGroupStatsResponse>): grpc.ClientUnaryCall;
  listEvents(argument: google_devtools_clouderrorreporting_v1beta1_error_stats_service_pb.ListEventsRequest, callback: grpc.requestCallback<google_devtools_clouderrorreporting_v1beta1_error_stats_service_pb.ListEventsResponse>): grpc.ClientUnaryCall;
  listEvents(argument: google_devtools_clouderrorreporting_v1beta1_error_stats_service_pb.ListEventsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_clouderrorreporting_v1beta1_error_stats_service_pb.ListEventsResponse>): grpc.ClientUnaryCall;
  listEvents(argument: google_devtools_clouderrorreporting_v1beta1_error_stats_service_pb.ListEventsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_clouderrorreporting_v1beta1_error_stats_service_pb.ListEventsResponse>): grpc.ClientUnaryCall;
  deleteEvents(argument: google_devtools_clouderrorreporting_v1beta1_error_stats_service_pb.DeleteEventsRequest, callback: grpc.requestCallback<google_devtools_clouderrorreporting_v1beta1_error_stats_service_pb.DeleteEventsResponse>): grpc.ClientUnaryCall;
  deleteEvents(argument: google_devtools_clouderrorreporting_v1beta1_error_stats_service_pb.DeleteEventsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_clouderrorreporting_v1beta1_error_stats_service_pb.DeleteEventsResponse>): grpc.ClientUnaryCall;
  deleteEvents(argument: google_devtools_clouderrorreporting_v1beta1_error_stats_service_pb.DeleteEventsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_clouderrorreporting_v1beta1_error_stats_service_pb.DeleteEventsResponse>): grpc.ClientUnaryCall;
}
