// GENERATED CODE -- DO NOT EDIT!

// package: google.logging.v2
// file: google/logging/v2/logging_config.proto

import * as google_logging_v2_logging_config_pb from "../../../google/logging/v2/logging_config_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "grpc";

interface IConfigServiceV2Service extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  listSinks: grpc.MethodDefinition<google_logging_v2_logging_config_pb.ListSinksRequest, google_logging_v2_logging_config_pb.ListSinksResponse>;
  getSink: grpc.MethodDefinition<google_logging_v2_logging_config_pb.GetSinkRequest, google_logging_v2_logging_config_pb.LogSink>;
  createSink: grpc.MethodDefinition<google_logging_v2_logging_config_pb.CreateSinkRequest, google_logging_v2_logging_config_pb.LogSink>;
  updateSink: grpc.MethodDefinition<google_logging_v2_logging_config_pb.UpdateSinkRequest, google_logging_v2_logging_config_pb.LogSink>;
  deleteSink: grpc.MethodDefinition<google_logging_v2_logging_config_pb.DeleteSinkRequest, google_protobuf_empty_pb.Empty>;
  listExclusions: grpc.MethodDefinition<google_logging_v2_logging_config_pb.ListExclusionsRequest, google_logging_v2_logging_config_pb.ListExclusionsResponse>;
  getExclusion: grpc.MethodDefinition<google_logging_v2_logging_config_pb.GetExclusionRequest, google_logging_v2_logging_config_pb.LogExclusion>;
  createExclusion: grpc.MethodDefinition<google_logging_v2_logging_config_pb.CreateExclusionRequest, google_logging_v2_logging_config_pb.LogExclusion>;
  updateExclusion: grpc.MethodDefinition<google_logging_v2_logging_config_pb.UpdateExclusionRequest, google_logging_v2_logging_config_pb.LogExclusion>;
  deleteExclusion: grpc.MethodDefinition<google_logging_v2_logging_config_pb.DeleteExclusionRequest, google_protobuf_empty_pb.Empty>;
}

export const ConfigServiceV2Service: IConfigServiceV2Service;

export class ConfigServiceV2Client extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  listSinks(argument: google_logging_v2_logging_config_pb.ListSinksRequest, callback: grpc.requestCallback<google_logging_v2_logging_config_pb.ListSinksResponse>): grpc.ClientUnaryCall;
  listSinks(argument: google_logging_v2_logging_config_pb.ListSinksRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_logging_v2_logging_config_pb.ListSinksResponse>): grpc.ClientUnaryCall;
  listSinks(argument: google_logging_v2_logging_config_pb.ListSinksRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_logging_v2_logging_config_pb.ListSinksResponse>): grpc.ClientUnaryCall;
  getSink(argument: google_logging_v2_logging_config_pb.GetSinkRequest, callback: grpc.requestCallback<google_logging_v2_logging_config_pb.LogSink>): grpc.ClientUnaryCall;
  getSink(argument: google_logging_v2_logging_config_pb.GetSinkRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_logging_v2_logging_config_pb.LogSink>): grpc.ClientUnaryCall;
  getSink(argument: google_logging_v2_logging_config_pb.GetSinkRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_logging_v2_logging_config_pb.LogSink>): grpc.ClientUnaryCall;
  createSink(argument: google_logging_v2_logging_config_pb.CreateSinkRequest, callback: grpc.requestCallback<google_logging_v2_logging_config_pb.LogSink>): grpc.ClientUnaryCall;
  createSink(argument: google_logging_v2_logging_config_pb.CreateSinkRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_logging_v2_logging_config_pb.LogSink>): grpc.ClientUnaryCall;
  createSink(argument: google_logging_v2_logging_config_pb.CreateSinkRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_logging_v2_logging_config_pb.LogSink>): grpc.ClientUnaryCall;
  updateSink(argument: google_logging_v2_logging_config_pb.UpdateSinkRequest, callback: grpc.requestCallback<google_logging_v2_logging_config_pb.LogSink>): grpc.ClientUnaryCall;
  updateSink(argument: google_logging_v2_logging_config_pb.UpdateSinkRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_logging_v2_logging_config_pb.LogSink>): grpc.ClientUnaryCall;
  updateSink(argument: google_logging_v2_logging_config_pb.UpdateSinkRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_logging_v2_logging_config_pb.LogSink>): grpc.ClientUnaryCall;
  deleteSink(argument: google_logging_v2_logging_config_pb.DeleteSinkRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteSink(argument: google_logging_v2_logging_config_pb.DeleteSinkRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteSink(argument: google_logging_v2_logging_config_pb.DeleteSinkRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  listExclusions(argument: google_logging_v2_logging_config_pb.ListExclusionsRequest, callback: grpc.requestCallback<google_logging_v2_logging_config_pb.ListExclusionsResponse>): grpc.ClientUnaryCall;
  listExclusions(argument: google_logging_v2_logging_config_pb.ListExclusionsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_logging_v2_logging_config_pb.ListExclusionsResponse>): grpc.ClientUnaryCall;
  listExclusions(argument: google_logging_v2_logging_config_pb.ListExclusionsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_logging_v2_logging_config_pb.ListExclusionsResponse>): grpc.ClientUnaryCall;
  getExclusion(argument: google_logging_v2_logging_config_pb.GetExclusionRequest, callback: grpc.requestCallback<google_logging_v2_logging_config_pb.LogExclusion>): grpc.ClientUnaryCall;
  getExclusion(argument: google_logging_v2_logging_config_pb.GetExclusionRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_logging_v2_logging_config_pb.LogExclusion>): grpc.ClientUnaryCall;
  getExclusion(argument: google_logging_v2_logging_config_pb.GetExclusionRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_logging_v2_logging_config_pb.LogExclusion>): grpc.ClientUnaryCall;
  createExclusion(argument: google_logging_v2_logging_config_pb.CreateExclusionRequest, callback: grpc.requestCallback<google_logging_v2_logging_config_pb.LogExclusion>): grpc.ClientUnaryCall;
  createExclusion(argument: google_logging_v2_logging_config_pb.CreateExclusionRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_logging_v2_logging_config_pb.LogExclusion>): grpc.ClientUnaryCall;
  createExclusion(argument: google_logging_v2_logging_config_pb.CreateExclusionRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_logging_v2_logging_config_pb.LogExclusion>): grpc.ClientUnaryCall;
  updateExclusion(argument: google_logging_v2_logging_config_pb.UpdateExclusionRequest, callback: grpc.requestCallback<google_logging_v2_logging_config_pb.LogExclusion>): grpc.ClientUnaryCall;
  updateExclusion(argument: google_logging_v2_logging_config_pb.UpdateExclusionRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_logging_v2_logging_config_pb.LogExclusion>): grpc.ClientUnaryCall;
  updateExclusion(argument: google_logging_v2_logging_config_pb.UpdateExclusionRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_logging_v2_logging_config_pb.LogExclusion>): grpc.ClientUnaryCall;
  deleteExclusion(argument: google_logging_v2_logging_config_pb.DeleteExclusionRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteExclusion(argument: google_logging_v2_logging_config_pb.DeleteExclusionRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteExclusion(argument: google_logging_v2_logging_config_pb.DeleteExclusionRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
}
