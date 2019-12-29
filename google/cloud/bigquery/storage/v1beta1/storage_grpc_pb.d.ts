// GENERATED CODE -- DO NOT EDIT!

// package: google.cloud.bigquery.storage.v1beta1
// file: google/cloud/bigquery/storage/v1beta1/storage.proto

import * as google_cloud_bigquery_storage_v1beta1_storage_pb from "../../../../../google/cloud/bigquery/storage/v1beta1/storage_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "grpc";

interface IBigQueryStorageService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createReadSession: grpc.MethodDefinition<google_cloud_bigquery_storage_v1beta1_storage_pb.CreateReadSessionRequest, google_cloud_bigquery_storage_v1beta1_storage_pb.ReadSession>;
  readRows: grpc.MethodDefinition<google_cloud_bigquery_storage_v1beta1_storage_pb.ReadRowsRequest, google_cloud_bigquery_storage_v1beta1_storage_pb.ReadRowsResponse>;
  batchCreateReadSessionStreams: grpc.MethodDefinition<google_cloud_bigquery_storage_v1beta1_storage_pb.BatchCreateReadSessionStreamsRequest, google_cloud_bigquery_storage_v1beta1_storage_pb.BatchCreateReadSessionStreamsResponse>;
  finalizeStream: grpc.MethodDefinition<google_cloud_bigquery_storage_v1beta1_storage_pb.FinalizeStreamRequest, google_protobuf_empty_pb.Empty>;
  splitReadStream: grpc.MethodDefinition<google_cloud_bigquery_storage_v1beta1_storage_pb.SplitReadStreamRequest, google_cloud_bigquery_storage_v1beta1_storage_pb.SplitReadStreamResponse>;
}

export const BigQueryStorageService: IBigQueryStorageService;

export class BigQueryStorageClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  createReadSession(argument: google_cloud_bigquery_storage_v1beta1_storage_pb.CreateReadSessionRequest, callback: grpc.requestCallback<google_cloud_bigquery_storage_v1beta1_storage_pb.ReadSession>): grpc.ClientUnaryCall;
  createReadSession(argument: google_cloud_bigquery_storage_v1beta1_storage_pb.CreateReadSessionRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_bigquery_storage_v1beta1_storage_pb.ReadSession>): grpc.ClientUnaryCall;
  createReadSession(argument: google_cloud_bigquery_storage_v1beta1_storage_pb.CreateReadSessionRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_bigquery_storage_v1beta1_storage_pb.ReadSession>): grpc.ClientUnaryCall;
  readRows(argument: google_cloud_bigquery_storage_v1beta1_storage_pb.ReadRowsRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<google_cloud_bigquery_storage_v1beta1_storage_pb.ReadRowsResponse>;
  readRows(argument: google_cloud_bigquery_storage_v1beta1_storage_pb.ReadRowsRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<google_cloud_bigquery_storage_v1beta1_storage_pb.ReadRowsResponse>;
  batchCreateReadSessionStreams(argument: google_cloud_bigquery_storage_v1beta1_storage_pb.BatchCreateReadSessionStreamsRequest, callback: grpc.requestCallback<google_cloud_bigquery_storage_v1beta1_storage_pb.BatchCreateReadSessionStreamsResponse>): grpc.ClientUnaryCall;
  batchCreateReadSessionStreams(argument: google_cloud_bigquery_storage_v1beta1_storage_pb.BatchCreateReadSessionStreamsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_bigquery_storage_v1beta1_storage_pb.BatchCreateReadSessionStreamsResponse>): grpc.ClientUnaryCall;
  batchCreateReadSessionStreams(argument: google_cloud_bigquery_storage_v1beta1_storage_pb.BatchCreateReadSessionStreamsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_bigquery_storage_v1beta1_storage_pb.BatchCreateReadSessionStreamsResponse>): grpc.ClientUnaryCall;
  finalizeStream(argument: google_cloud_bigquery_storage_v1beta1_storage_pb.FinalizeStreamRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  finalizeStream(argument: google_cloud_bigquery_storage_v1beta1_storage_pb.FinalizeStreamRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  finalizeStream(argument: google_cloud_bigquery_storage_v1beta1_storage_pb.FinalizeStreamRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  splitReadStream(argument: google_cloud_bigquery_storage_v1beta1_storage_pb.SplitReadStreamRequest, callback: grpc.requestCallback<google_cloud_bigquery_storage_v1beta1_storage_pb.SplitReadStreamResponse>): grpc.ClientUnaryCall;
  splitReadStream(argument: google_cloud_bigquery_storage_v1beta1_storage_pb.SplitReadStreamRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_bigquery_storage_v1beta1_storage_pb.SplitReadStreamResponse>): grpc.ClientUnaryCall;
  splitReadStream(argument: google_cloud_bigquery_storage_v1beta1_storage_pb.SplitReadStreamRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_bigquery_storage_v1beta1_storage_pb.SplitReadStreamResponse>): grpc.ClientUnaryCall;
}
