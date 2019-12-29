// GENERATED CODE -- DO NOT EDIT!

// package: google.bigtable.v2
// file: google/bigtable/v2/bigtable.proto

import * as google_bigtable_v2_bigtable_pb from "../../../google/bigtable/v2/bigtable_pb";
import * as grpc from "grpc";

interface IBigtableService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  readRows: grpc.MethodDefinition<google_bigtable_v2_bigtable_pb.ReadRowsRequest, google_bigtable_v2_bigtable_pb.ReadRowsResponse>;
  sampleRowKeys: grpc.MethodDefinition<google_bigtable_v2_bigtable_pb.SampleRowKeysRequest, google_bigtable_v2_bigtable_pb.SampleRowKeysResponse>;
  mutateRow: grpc.MethodDefinition<google_bigtable_v2_bigtable_pb.MutateRowRequest, google_bigtable_v2_bigtable_pb.MutateRowResponse>;
  mutateRows: grpc.MethodDefinition<google_bigtable_v2_bigtable_pb.MutateRowsRequest, google_bigtable_v2_bigtable_pb.MutateRowsResponse>;
  checkAndMutateRow: grpc.MethodDefinition<google_bigtable_v2_bigtable_pb.CheckAndMutateRowRequest, google_bigtable_v2_bigtable_pb.CheckAndMutateRowResponse>;
  readModifyWriteRow: grpc.MethodDefinition<google_bigtable_v2_bigtable_pb.ReadModifyWriteRowRequest, google_bigtable_v2_bigtable_pb.ReadModifyWriteRowResponse>;
}

export const BigtableService: IBigtableService;

export class BigtableClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  readRows(argument: google_bigtable_v2_bigtable_pb.ReadRowsRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<google_bigtable_v2_bigtable_pb.ReadRowsResponse>;
  readRows(argument: google_bigtable_v2_bigtable_pb.ReadRowsRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<google_bigtable_v2_bigtable_pb.ReadRowsResponse>;
  sampleRowKeys(argument: google_bigtable_v2_bigtable_pb.SampleRowKeysRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<google_bigtable_v2_bigtable_pb.SampleRowKeysResponse>;
  sampleRowKeys(argument: google_bigtable_v2_bigtable_pb.SampleRowKeysRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<google_bigtable_v2_bigtable_pb.SampleRowKeysResponse>;
  mutateRow(argument: google_bigtable_v2_bigtable_pb.MutateRowRequest, callback: grpc.requestCallback<google_bigtable_v2_bigtable_pb.MutateRowResponse>): grpc.ClientUnaryCall;
  mutateRow(argument: google_bigtable_v2_bigtable_pb.MutateRowRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_bigtable_v2_bigtable_pb.MutateRowResponse>): grpc.ClientUnaryCall;
  mutateRow(argument: google_bigtable_v2_bigtable_pb.MutateRowRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_bigtable_v2_bigtable_pb.MutateRowResponse>): grpc.ClientUnaryCall;
  mutateRows(argument: google_bigtable_v2_bigtable_pb.MutateRowsRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<google_bigtable_v2_bigtable_pb.MutateRowsResponse>;
  mutateRows(argument: google_bigtable_v2_bigtable_pb.MutateRowsRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<google_bigtable_v2_bigtable_pb.MutateRowsResponse>;
  checkAndMutateRow(argument: google_bigtable_v2_bigtable_pb.CheckAndMutateRowRequest, callback: grpc.requestCallback<google_bigtable_v2_bigtable_pb.CheckAndMutateRowResponse>): grpc.ClientUnaryCall;
  checkAndMutateRow(argument: google_bigtable_v2_bigtable_pb.CheckAndMutateRowRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_bigtable_v2_bigtable_pb.CheckAndMutateRowResponse>): grpc.ClientUnaryCall;
  checkAndMutateRow(argument: google_bigtable_v2_bigtable_pb.CheckAndMutateRowRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_bigtable_v2_bigtable_pb.CheckAndMutateRowResponse>): grpc.ClientUnaryCall;
  readModifyWriteRow(argument: google_bigtable_v2_bigtable_pb.ReadModifyWriteRowRequest, callback: grpc.requestCallback<google_bigtable_v2_bigtable_pb.ReadModifyWriteRowResponse>): grpc.ClientUnaryCall;
  readModifyWriteRow(argument: google_bigtable_v2_bigtable_pb.ReadModifyWriteRowRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_bigtable_v2_bigtable_pb.ReadModifyWriteRowResponse>): grpc.ClientUnaryCall;
  readModifyWriteRow(argument: google_bigtable_v2_bigtable_pb.ReadModifyWriteRowRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_bigtable_v2_bigtable_pb.ReadModifyWriteRowResponse>): grpc.ClientUnaryCall;
}
