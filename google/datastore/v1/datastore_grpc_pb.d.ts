// GENERATED CODE -- DO NOT EDIT!

// package: google.datastore.v1
// file: google/datastore/v1/datastore.proto

import * as google_datastore_v1_datastore_pb from "../../../google/datastore/v1/datastore_pb";
import * as grpc from "grpc";

interface IDatastoreService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  lookup: grpc.MethodDefinition<google_datastore_v1_datastore_pb.LookupRequest, google_datastore_v1_datastore_pb.LookupResponse>;
  runQuery: grpc.MethodDefinition<google_datastore_v1_datastore_pb.RunQueryRequest, google_datastore_v1_datastore_pb.RunQueryResponse>;
  beginTransaction: grpc.MethodDefinition<google_datastore_v1_datastore_pb.BeginTransactionRequest, google_datastore_v1_datastore_pb.BeginTransactionResponse>;
  commit: grpc.MethodDefinition<google_datastore_v1_datastore_pb.CommitRequest, google_datastore_v1_datastore_pb.CommitResponse>;
  rollback: grpc.MethodDefinition<google_datastore_v1_datastore_pb.RollbackRequest, google_datastore_v1_datastore_pb.RollbackResponse>;
  allocateIds: grpc.MethodDefinition<google_datastore_v1_datastore_pb.AllocateIdsRequest, google_datastore_v1_datastore_pb.AllocateIdsResponse>;
  reserveIds: grpc.MethodDefinition<google_datastore_v1_datastore_pb.ReserveIdsRequest, google_datastore_v1_datastore_pb.ReserveIdsResponse>;
}

export const DatastoreService: IDatastoreService;

export class DatastoreClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  lookup(argument: google_datastore_v1_datastore_pb.LookupRequest, callback: grpc.requestCallback<google_datastore_v1_datastore_pb.LookupResponse>): grpc.ClientUnaryCall;
  lookup(argument: google_datastore_v1_datastore_pb.LookupRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_datastore_v1_datastore_pb.LookupResponse>): grpc.ClientUnaryCall;
  lookup(argument: google_datastore_v1_datastore_pb.LookupRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_datastore_v1_datastore_pb.LookupResponse>): grpc.ClientUnaryCall;
  runQuery(argument: google_datastore_v1_datastore_pb.RunQueryRequest, callback: grpc.requestCallback<google_datastore_v1_datastore_pb.RunQueryResponse>): grpc.ClientUnaryCall;
  runQuery(argument: google_datastore_v1_datastore_pb.RunQueryRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_datastore_v1_datastore_pb.RunQueryResponse>): grpc.ClientUnaryCall;
  runQuery(argument: google_datastore_v1_datastore_pb.RunQueryRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_datastore_v1_datastore_pb.RunQueryResponse>): grpc.ClientUnaryCall;
  beginTransaction(argument: google_datastore_v1_datastore_pb.BeginTransactionRequest, callback: grpc.requestCallback<google_datastore_v1_datastore_pb.BeginTransactionResponse>): grpc.ClientUnaryCall;
  beginTransaction(argument: google_datastore_v1_datastore_pb.BeginTransactionRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_datastore_v1_datastore_pb.BeginTransactionResponse>): grpc.ClientUnaryCall;
  beginTransaction(argument: google_datastore_v1_datastore_pb.BeginTransactionRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_datastore_v1_datastore_pb.BeginTransactionResponse>): grpc.ClientUnaryCall;
  commit(argument: google_datastore_v1_datastore_pb.CommitRequest, callback: grpc.requestCallback<google_datastore_v1_datastore_pb.CommitResponse>): grpc.ClientUnaryCall;
  commit(argument: google_datastore_v1_datastore_pb.CommitRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_datastore_v1_datastore_pb.CommitResponse>): grpc.ClientUnaryCall;
  commit(argument: google_datastore_v1_datastore_pb.CommitRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_datastore_v1_datastore_pb.CommitResponse>): grpc.ClientUnaryCall;
  rollback(argument: google_datastore_v1_datastore_pb.RollbackRequest, callback: grpc.requestCallback<google_datastore_v1_datastore_pb.RollbackResponse>): grpc.ClientUnaryCall;
  rollback(argument: google_datastore_v1_datastore_pb.RollbackRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_datastore_v1_datastore_pb.RollbackResponse>): grpc.ClientUnaryCall;
  rollback(argument: google_datastore_v1_datastore_pb.RollbackRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_datastore_v1_datastore_pb.RollbackResponse>): grpc.ClientUnaryCall;
  allocateIds(argument: google_datastore_v1_datastore_pb.AllocateIdsRequest, callback: grpc.requestCallback<google_datastore_v1_datastore_pb.AllocateIdsResponse>): grpc.ClientUnaryCall;
  allocateIds(argument: google_datastore_v1_datastore_pb.AllocateIdsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_datastore_v1_datastore_pb.AllocateIdsResponse>): grpc.ClientUnaryCall;
  allocateIds(argument: google_datastore_v1_datastore_pb.AllocateIdsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_datastore_v1_datastore_pb.AllocateIdsResponse>): grpc.ClientUnaryCall;
  reserveIds(argument: google_datastore_v1_datastore_pb.ReserveIdsRequest, callback: grpc.requestCallback<google_datastore_v1_datastore_pb.ReserveIdsResponse>): grpc.ClientUnaryCall;
  reserveIds(argument: google_datastore_v1_datastore_pb.ReserveIdsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_datastore_v1_datastore_pb.ReserveIdsResponse>): grpc.ClientUnaryCall;
  reserveIds(argument: google_datastore_v1_datastore_pb.ReserveIdsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_datastore_v1_datastore_pb.ReserveIdsResponse>): grpc.ClientUnaryCall;
}
