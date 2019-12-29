// GENERATED CODE -- DO NOT EDIT!

// package: google.spanner.v1
// file: google/spanner/v1/spanner.proto

import * as google_spanner_v1_spanner_pb from "../../../google/spanner/v1/spanner_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_spanner_v1_result_set_pb from "../../../google/spanner/v1/result_set_pb";
import * as google_spanner_v1_transaction_pb from "../../../google/spanner/v1/transaction_pb";
import * as grpc from "grpc";

interface ISpannerService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createSession: grpc.MethodDefinition<google_spanner_v1_spanner_pb.CreateSessionRequest, google_spanner_v1_spanner_pb.Session>;
  batchCreateSessions: grpc.MethodDefinition<google_spanner_v1_spanner_pb.BatchCreateSessionsRequest, google_spanner_v1_spanner_pb.BatchCreateSessionsResponse>;
  getSession: grpc.MethodDefinition<google_spanner_v1_spanner_pb.GetSessionRequest, google_spanner_v1_spanner_pb.Session>;
  listSessions: grpc.MethodDefinition<google_spanner_v1_spanner_pb.ListSessionsRequest, google_spanner_v1_spanner_pb.ListSessionsResponse>;
  deleteSession: grpc.MethodDefinition<google_spanner_v1_spanner_pb.DeleteSessionRequest, google_protobuf_empty_pb.Empty>;
  executeSql: grpc.MethodDefinition<google_spanner_v1_spanner_pb.ExecuteSqlRequest, google_spanner_v1_result_set_pb.ResultSet>;
  executeStreamingSql: grpc.MethodDefinition<google_spanner_v1_spanner_pb.ExecuteSqlRequest, google_spanner_v1_result_set_pb.PartialResultSet>;
  executeBatchDml: grpc.MethodDefinition<google_spanner_v1_spanner_pb.ExecuteBatchDmlRequest, google_spanner_v1_spanner_pb.ExecuteBatchDmlResponse>;
  read: grpc.MethodDefinition<google_spanner_v1_spanner_pb.ReadRequest, google_spanner_v1_result_set_pb.ResultSet>;
  streamingRead: grpc.MethodDefinition<google_spanner_v1_spanner_pb.ReadRequest, google_spanner_v1_result_set_pb.PartialResultSet>;
  beginTransaction: grpc.MethodDefinition<google_spanner_v1_spanner_pb.BeginTransactionRequest, google_spanner_v1_transaction_pb.Transaction>;
  commit: grpc.MethodDefinition<google_spanner_v1_spanner_pb.CommitRequest, google_spanner_v1_spanner_pb.CommitResponse>;
  rollback: grpc.MethodDefinition<google_spanner_v1_spanner_pb.RollbackRequest, google_protobuf_empty_pb.Empty>;
  partitionQuery: grpc.MethodDefinition<google_spanner_v1_spanner_pb.PartitionQueryRequest, google_spanner_v1_spanner_pb.PartitionResponse>;
  partitionRead: grpc.MethodDefinition<google_spanner_v1_spanner_pb.PartitionReadRequest, google_spanner_v1_spanner_pb.PartitionResponse>;
}

export const SpannerService: ISpannerService;

export class SpannerClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  createSession(argument: google_spanner_v1_spanner_pb.CreateSessionRequest, callback: grpc.requestCallback<google_spanner_v1_spanner_pb.Session>): grpc.ClientUnaryCall;
  createSession(argument: google_spanner_v1_spanner_pb.CreateSessionRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_spanner_v1_spanner_pb.Session>): grpc.ClientUnaryCall;
  createSession(argument: google_spanner_v1_spanner_pb.CreateSessionRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_spanner_v1_spanner_pb.Session>): grpc.ClientUnaryCall;
  batchCreateSessions(argument: google_spanner_v1_spanner_pb.BatchCreateSessionsRequest, callback: grpc.requestCallback<google_spanner_v1_spanner_pb.BatchCreateSessionsResponse>): grpc.ClientUnaryCall;
  batchCreateSessions(argument: google_spanner_v1_spanner_pb.BatchCreateSessionsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_spanner_v1_spanner_pb.BatchCreateSessionsResponse>): grpc.ClientUnaryCall;
  batchCreateSessions(argument: google_spanner_v1_spanner_pb.BatchCreateSessionsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_spanner_v1_spanner_pb.BatchCreateSessionsResponse>): grpc.ClientUnaryCall;
  getSession(argument: google_spanner_v1_spanner_pb.GetSessionRequest, callback: grpc.requestCallback<google_spanner_v1_spanner_pb.Session>): grpc.ClientUnaryCall;
  getSession(argument: google_spanner_v1_spanner_pb.GetSessionRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_spanner_v1_spanner_pb.Session>): grpc.ClientUnaryCall;
  getSession(argument: google_spanner_v1_spanner_pb.GetSessionRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_spanner_v1_spanner_pb.Session>): grpc.ClientUnaryCall;
  listSessions(argument: google_spanner_v1_spanner_pb.ListSessionsRequest, callback: grpc.requestCallback<google_spanner_v1_spanner_pb.ListSessionsResponse>): grpc.ClientUnaryCall;
  listSessions(argument: google_spanner_v1_spanner_pb.ListSessionsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_spanner_v1_spanner_pb.ListSessionsResponse>): grpc.ClientUnaryCall;
  listSessions(argument: google_spanner_v1_spanner_pb.ListSessionsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_spanner_v1_spanner_pb.ListSessionsResponse>): grpc.ClientUnaryCall;
  deleteSession(argument: google_spanner_v1_spanner_pb.DeleteSessionRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteSession(argument: google_spanner_v1_spanner_pb.DeleteSessionRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteSession(argument: google_spanner_v1_spanner_pb.DeleteSessionRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  executeSql(argument: google_spanner_v1_spanner_pb.ExecuteSqlRequest, callback: grpc.requestCallback<google_spanner_v1_result_set_pb.ResultSet>): grpc.ClientUnaryCall;
  executeSql(argument: google_spanner_v1_spanner_pb.ExecuteSqlRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_spanner_v1_result_set_pb.ResultSet>): grpc.ClientUnaryCall;
  executeSql(argument: google_spanner_v1_spanner_pb.ExecuteSqlRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_spanner_v1_result_set_pb.ResultSet>): grpc.ClientUnaryCall;
  executeStreamingSql(argument: google_spanner_v1_spanner_pb.ExecuteSqlRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<google_spanner_v1_result_set_pb.PartialResultSet>;
  executeStreamingSql(argument: google_spanner_v1_spanner_pb.ExecuteSqlRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<google_spanner_v1_result_set_pb.PartialResultSet>;
  executeBatchDml(argument: google_spanner_v1_spanner_pb.ExecuteBatchDmlRequest, callback: grpc.requestCallback<google_spanner_v1_spanner_pb.ExecuteBatchDmlResponse>): grpc.ClientUnaryCall;
  executeBatchDml(argument: google_spanner_v1_spanner_pb.ExecuteBatchDmlRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_spanner_v1_spanner_pb.ExecuteBatchDmlResponse>): grpc.ClientUnaryCall;
  executeBatchDml(argument: google_spanner_v1_spanner_pb.ExecuteBatchDmlRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_spanner_v1_spanner_pb.ExecuteBatchDmlResponse>): grpc.ClientUnaryCall;
  read(argument: google_spanner_v1_spanner_pb.ReadRequest, callback: grpc.requestCallback<google_spanner_v1_result_set_pb.ResultSet>): grpc.ClientUnaryCall;
  read(argument: google_spanner_v1_spanner_pb.ReadRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_spanner_v1_result_set_pb.ResultSet>): grpc.ClientUnaryCall;
  read(argument: google_spanner_v1_spanner_pb.ReadRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_spanner_v1_result_set_pb.ResultSet>): grpc.ClientUnaryCall;
  streamingRead(argument: google_spanner_v1_spanner_pb.ReadRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<google_spanner_v1_result_set_pb.PartialResultSet>;
  streamingRead(argument: google_spanner_v1_spanner_pb.ReadRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<google_spanner_v1_result_set_pb.PartialResultSet>;
  beginTransaction(argument: google_spanner_v1_spanner_pb.BeginTransactionRequest, callback: grpc.requestCallback<google_spanner_v1_transaction_pb.Transaction>): grpc.ClientUnaryCall;
  beginTransaction(argument: google_spanner_v1_spanner_pb.BeginTransactionRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_spanner_v1_transaction_pb.Transaction>): grpc.ClientUnaryCall;
  beginTransaction(argument: google_spanner_v1_spanner_pb.BeginTransactionRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_spanner_v1_transaction_pb.Transaction>): grpc.ClientUnaryCall;
  commit(argument: google_spanner_v1_spanner_pb.CommitRequest, callback: grpc.requestCallback<google_spanner_v1_spanner_pb.CommitResponse>): grpc.ClientUnaryCall;
  commit(argument: google_spanner_v1_spanner_pb.CommitRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_spanner_v1_spanner_pb.CommitResponse>): grpc.ClientUnaryCall;
  commit(argument: google_spanner_v1_spanner_pb.CommitRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_spanner_v1_spanner_pb.CommitResponse>): grpc.ClientUnaryCall;
  rollback(argument: google_spanner_v1_spanner_pb.RollbackRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  rollback(argument: google_spanner_v1_spanner_pb.RollbackRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  rollback(argument: google_spanner_v1_spanner_pb.RollbackRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  partitionQuery(argument: google_spanner_v1_spanner_pb.PartitionQueryRequest, callback: grpc.requestCallback<google_spanner_v1_spanner_pb.PartitionResponse>): grpc.ClientUnaryCall;
  partitionQuery(argument: google_spanner_v1_spanner_pb.PartitionQueryRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_spanner_v1_spanner_pb.PartitionResponse>): grpc.ClientUnaryCall;
  partitionQuery(argument: google_spanner_v1_spanner_pb.PartitionQueryRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_spanner_v1_spanner_pb.PartitionResponse>): grpc.ClientUnaryCall;
  partitionRead(argument: google_spanner_v1_spanner_pb.PartitionReadRequest, callback: grpc.requestCallback<google_spanner_v1_spanner_pb.PartitionResponse>): grpc.ClientUnaryCall;
  partitionRead(argument: google_spanner_v1_spanner_pb.PartitionReadRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_spanner_v1_spanner_pb.PartitionResponse>): grpc.ClientUnaryCall;
  partitionRead(argument: google_spanner_v1_spanner_pb.PartitionReadRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_spanner_v1_spanner_pb.PartitionResponse>): grpc.ClientUnaryCall;
}
