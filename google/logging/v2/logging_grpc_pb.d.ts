// GENERATED CODE -- DO NOT EDIT!

// package: google.logging.v2
// file: google/logging/v2/logging.proto

import * as google_logging_v2_logging_pb from "../../../google/logging/v2/logging_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "grpc";

interface ILoggingServiceV2Service extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  deleteLog: grpc.MethodDefinition<google_logging_v2_logging_pb.DeleteLogRequest, google_protobuf_empty_pb.Empty>;
  writeLogEntries: grpc.MethodDefinition<google_logging_v2_logging_pb.WriteLogEntriesRequest, google_logging_v2_logging_pb.WriteLogEntriesResponse>;
  listLogEntries: grpc.MethodDefinition<google_logging_v2_logging_pb.ListLogEntriesRequest, google_logging_v2_logging_pb.ListLogEntriesResponse>;
  listMonitoredResourceDescriptors: grpc.MethodDefinition<google_logging_v2_logging_pb.ListMonitoredResourceDescriptorsRequest, google_logging_v2_logging_pb.ListMonitoredResourceDescriptorsResponse>;
  listLogs: grpc.MethodDefinition<google_logging_v2_logging_pb.ListLogsRequest, google_logging_v2_logging_pb.ListLogsResponse>;
}

export const LoggingServiceV2Service: ILoggingServiceV2Service;

export class LoggingServiceV2Client extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  deleteLog(argument: google_logging_v2_logging_pb.DeleteLogRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteLog(argument: google_logging_v2_logging_pb.DeleteLogRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteLog(argument: google_logging_v2_logging_pb.DeleteLogRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  writeLogEntries(argument: google_logging_v2_logging_pb.WriteLogEntriesRequest, callback: grpc.requestCallback<google_logging_v2_logging_pb.WriteLogEntriesResponse>): grpc.ClientUnaryCall;
  writeLogEntries(argument: google_logging_v2_logging_pb.WriteLogEntriesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_logging_v2_logging_pb.WriteLogEntriesResponse>): grpc.ClientUnaryCall;
  writeLogEntries(argument: google_logging_v2_logging_pb.WriteLogEntriesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_logging_v2_logging_pb.WriteLogEntriesResponse>): grpc.ClientUnaryCall;
  listLogEntries(argument: google_logging_v2_logging_pb.ListLogEntriesRequest, callback: grpc.requestCallback<google_logging_v2_logging_pb.ListLogEntriesResponse>): grpc.ClientUnaryCall;
  listLogEntries(argument: google_logging_v2_logging_pb.ListLogEntriesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_logging_v2_logging_pb.ListLogEntriesResponse>): grpc.ClientUnaryCall;
  listLogEntries(argument: google_logging_v2_logging_pb.ListLogEntriesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_logging_v2_logging_pb.ListLogEntriesResponse>): grpc.ClientUnaryCall;
  listMonitoredResourceDescriptors(argument: google_logging_v2_logging_pb.ListMonitoredResourceDescriptorsRequest, callback: grpc.requestCallback<google_logging_v2_logging_pb.ListMonitoredResourceDescriptorsResponse>): grpc.ClientUnaryCall;
  listMonitoredResourceDescriptors(argument: google_logging_v2_logging_pb.ListMonitoredResourceDescriptorsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_logging_v2_logging_pb.ListMonitoredResourceDescriptorsResponse>): grpc.ClientUnaryCall;
  listMonitoredResourceDescriptors(argument: google_logging_v2_logging_pb.ListMonitoredResourceDescriptorsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_logging_v2_logging_pb.ListMonitoredResourceDescriptorsResponse>): grpc.ClientUnaryCall;
  listLogs(argument: google_logging_v2_logging_pb.ListLogsRequest, callback: grpc.requestCallback<google_logging_v2_logging_pb.ListLogsResponse>): grpc.ClientUnaryCall;
  listLogs(argument: google_logging_v2_logging_pb.ListLogsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_logging_v2_logging_pb.ListLogsResponse>): grpc.ClientUnaryCall;
  listLogs(argument: google_logging_v2_logging_pb.ListLogsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_logging_v2_logging_pb.ListLogsResponse>): grpc.ClientUnaryCall;
}
