// GENERATED CODE -- DO NOT EDIT!

// package: google.bigtable.v1
// file: google/bigtable/v1/bigtable_service.proto

import * as google_bigtable_v1_bigtable_service_pb from "../../../google/bigtable/v1/bigtable_service_pb";
import * as google_bigtable_v1_bigtable_data_pb from "../../../google/bigtable/v1/bigtable_data_pb";
import * as google_bigtable_v1_bigtable_service_messages_pb from "../../../google/bigtable/v1/bigtable_service_messages_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "grpc";

interface IBigtableServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  readRows: grpc.MethodDefinition<google_bigtable_v1_bigtable_service_messages_pb.ReadRowsRequest, google_bigtable_v1_bigtable_service_messages_pb.ReadRowsResponse>;
  sampleRowKeys: grpc.MethodDefinition<google_bigtable_v1_bigtable_service_messages_pb.SampleRowKeysRequest, google_bigtable_v1_bigtable_service_messages_pb.SampleRowKeysResponse>;
  mutateRow: grpc.MethodDefinition<google_bigtable_v1_bigtable_service_messages_pb.MutateRowRequest, google_protobuf_empty_pb.Empty>;
  mutateRows: grpc.MethodDefinition<google_bigtable_v1_bigtable_service_messages_pb.MutateRowsRequest, google_bigtable_v1_bigtable_service_messages_pb.MutateRowsResponse>;
  checkAndMutateRow: grpc.MethodDefinition<google_bigtable_v1_bigtable_service_messages_pb.CheckAndMutateRowRequest, google_bigtable_v1_bigtable_service_messages_pb.CheckAndMutateRowResponse>;
  readModifyWriteRow: grpc.MethodDefinition<google_bigtable_v1_bigtable_service_messages_pb.ReadModifyWriteRowRequest, google_bigtable_v1_bigtable_data_pb.Row>;
}

export const BigtableServiceService: IBigtableServiceService;

export class BigtableServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  readRows(argument: google_bigtable_v1_bigtable_service_messages_pb.ReadRowsRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<google_bigtable_v1_bigtable_service_messages_pb.ReadRowsResponse>;
  readRows(argument: google_bigtable_v1_bigtable_service_messages_pb.ReadRowsRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<google_bigtable_v1_bigtable_service_messages_pb.ReadRowsResponse>;
  sampleRowKeys(argument: google_bigtable_v1_bigtable_service_messages_pb.SampleRowKeysRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<google_bigtable_v1_bigtable_service_messages_pb.SampleRowKeysResponse>;
  sampleRowKeys(argument: google_bigtable_v1_bigtable_service_messages_pb.SampleRowKeysRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<google_bigtable_v1_bigtable_service_messages_pb.SampleRowKeysResponse>;
  mutateRow(argument: google_bigtable_v1_bigtable_service_messages_pb.MutateRowRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  mutateRow(argument: google_bigtable_v1_bigtable_service_messages_pb.MutateRowRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  mutateRow(argument: google_bigtable_v1_bigtable_service_messages_pb.MutateRowRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  mutateRows(argument: google_bigtable_v1_bigtable_service_messages_pb.MutateRowsRequest, callback: grpc.requestCallback<google_bigtable_v1_bigtable_service_messages_pb.MutateRowsResponse>): grpc.ClientUnaryCall;
  mutateRows(argument: google_bigtable_v1_bigtable_service_messages_pb.MutateRowsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_bigtable_v1_bigtable_service_messages_pb.MutateRowsResponse>): grpc.ClientUnaryCall;
  mutateRows(argument: google_bigtable_v1_bigtable_service_messages_pb.MutateRowsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_bigtable_v1_bigtable_service_messages_pb.MutateRowsResponse>): grpc.ClientUnaryCall;
  checkAndMutateRow(argument: google_bigtable_v1_bigtable_service_messages_pb.CheckAndMutateRowRequest, callback: grpc.requestCallback<google_bigtable_v1_bigtable_service_messages_pb.CheckAndMutateRowResponse>): grpc.ClientUnaryCall;
  checkAndMutateRow(argument: google_bigtable_v1_bigtable_service_messages_pb.CheckAndMutateRowRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_bigtable_v1_bigtable_service_messages_pb.CheckAndMutateRowResponse>): grpc.ClientUnaryCall;
  checkAndMutateRow(argument: google_bigtable_v1_bigtable_service_messages_pb.CheckAndMutateRowRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_bigtable_v1_bigtable_service_messages_pb.CheckAndMutateRowResponse>): grpc.ClientUnaryCall;
  readModifyWriteRow(argument: google_bigtable_v1_bigtable_service_messages_pb.ReadModifyWriteRowRequest, callback: grpc.requestCallback<google_bigtable_v1_bigtable_data_pb.Row>): grpc.ClientUnaryCall;
  readModifyWriteRow(argument: google_bigtable_v1_bigtable_service_messages_pb.ReadModifyWriteRowRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_bigtable_v1_bigtable_data_pb.Row>): grpc.ClientUnaryCall;
  readModifyWriteRow(argument: google_bigtable_v1_bigtable_service_messages_pb.ReadModifyWriteRowRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_bigtable_v1_bigtable_data_pb.Row>): grpc.ClientUnaryCall;
}
