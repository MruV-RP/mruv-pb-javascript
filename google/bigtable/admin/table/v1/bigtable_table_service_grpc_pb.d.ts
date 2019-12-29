// GENERATED CODE -- DO NOT EDIT!

// package: google.bigtable.admin.table.v1
// file: google/bigtable/admin/table/v1/bigtable_table_service.proto

import * as google_bigtable_admin_table_v1_bigtable_table_service_pb from "../../../../../google/bigtable/admin/table/v1/bigtable_table_service_pb";
import * as google_bigtable_admin_table_v1_bigtable_table_data_pb from "../../../../../google/bigtable/admin/table/v1/bigtable_table_data_pb";
import * as google_bigtable_admin_table_v1_bigtable_table_service_messages_pb from "../../../../../google/bigtable/admin/table/v1/bigtable_table_service_messages_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "grpc";

interface IBigtableTableServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createTable: grpc.MethodDefinition<google_bigtable_admin_table_v1_bigtable_table_service_messages_pb.CreateTableRequest, google_bigtable_admin_table_v1_bigtable_table_data_pb.Table>;
  listTables: grpc.MethodDefinition<google_bigtable_admin_table_v1_bigtable_table_service_messages_pb.ListTablesRequest, google_bigtable_admin_table_v1_bigtable_table_service_messages_pb.ListTablesResponse>;
  getTable: grpc.MethodDefinition<google_bigtable_admin_table_v1_bigtable_table_service_messages_pb.GetTableRequest, google_bigtable_admin_table_v1_bigtable_table_data_pb.Table>;
  deleteTable: grpc.MethodDefinition<google_bigtable_admin_table_v1_bigtable_table_service_messages_pb.DeleteTableRequest, google_protobuf_empty_pb.Empty>;
  renameTable: grpc.MethodDefinition<google_bigtable_admin_table_v1_bigtable_table_service_messages_pb.RenameTableRequest, google_protobuf_empty_pb.Empty>;
  createColumnFamily: grpc.MethodDefinition<google_bigtable_admin_table_v1_bigtable_table_service_messages_pb.CreateColumnFamilyRequest, google_bigtable_admin_table_v1_bigtable_table_data_pb.ColumnFamily>;
  updateColumnFamily: grpc.MethodDefinition<google_bigtable_admin_table_v1_bigtable_table_data_pb.ColumnFamily, google_bigtable_admin_table_v1_bigtable_table_data_pb.ColumnFamily>;
  deleteColumnFamily: grpc.MethodDefinition<google_bigtable_admin_table_v1_bigtable_table_service_messages_pb.DeleteColumnFamilyRequest, google_protobuf_empty_pb.Empty>;
  bulkDeleteRows: grpc.MethodDefinition<google_bigtable_admin_table_v1_bigtable_table_service_messages_pb.BulkDeleteRowsRequest, google_protobuf_empty_pb.Empty>;
}

export const BigtableTableServiceService: IBigtableTableServiceService;

export class BigtableTableServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  createTable(argument: google_bigtable_admin_table_v1_bigtable_table_service_messages_pb.CreateTableRequest, callback: grpc.requestCallback<google_bigtable_admin_table_v1_bigtable_table_data_pb.Table>): grpc.ClientUnaryCall;
  createTable(argument: google_bigtable_admin_table_v1_bigtable_table_service_messages_pb.CreateTableRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_bigtable_admin_table_v1_bigtable_table_data_pb.Table>): grpc.ClientUnaryCall;
  createTable(argument: google_bigtable_admin_table_v1_bigtable_table_service_messages_pb.CreateTableRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_bigtable_admin_table_v1_bigtable_table_data_pb.Table>): grpc.ClientUnaryCall;
  listTables(argument: google_bigtable_admin_table_v1_bigtable_table_service_messages_pb.ListTablesRequest, callback: grpc.requestCallback<google_bigtable_admin_table_v1_bigtable_table_service_messages_pb.ListTablesResponse>): grpc.ClientUnaryCall;
  listTables(argument: google_bigtable_admin_table_v1_bigtable_table_service_messages_pb.ListTablesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_bigtable_admin_table_v1_bigtable_table_service_messages_pb.ListTablesResponse>): grpc.ClientUnaryCall;
  listTables(argument: google_bigtable_admin_table_v1_bigtable_table_service_messages_pb.ListTablesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_bigtable_admin_table_v1_bigtable_table_service_messages_pb.ListTablesResponse>): grpc.ClientUnaryCall;
  getTable(argument: google_bigtable_admin_table_v1_bigtable_table_service_messages_pb.GetTableRequest, callback: grpc.requestCallback<google_bigtable_admin_table_v1_bigtable_table_data_pb.Table>): grpc.ClientUnaryCall;
  getTable(argument: google_bigtable_admin_table_v1_bigtable_table_service_messages_pb.GetTableRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_bigtable_admin_table_v1_bigtable_table_data_pb.Table>): grpc.ClientUnaryCall;
  getTable(argument: google_bigtable_admin_table_v1_bigtable_table_service_messages_pb.GetTableRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_bigtable_admin_table_v1_bigtable_table_data_pb.Table>): grpc.ClientUnaryCall;
  deleteTable(argument: google_bigtable_admin_table_v1_bigtable_table_service_messages_pb.DeleteTableRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteTable(argument: google_bigtable_admin_table_v1_bigtable_table_service_messages_pb.DeleteTableRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteTable(argument: google_bigtable_admin_table_v1_bigtable_table_service_messages_pb.DeleteTableRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  renameTable(argument: google_bigtable_admin_table_v1_bigtable_table_service_messages_pb.RenameTableRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  renameTable(argument: google_bigtable_admin_table_v1_bigtable_table_service_messages_pb.RenameTableRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  renameTable(argument: google_bigtable_admin_table_v1_bigtable_table_service_messages_pb.RenameTableRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  createColumnFamily(argument: google_bigtable_admin_table_v1_bigtable_table_service_messages_pb.CreateColumnFamilyRequest, callback: grpc.requestCallback<google_bigtable_admin_table_v1_bigtable_table_data_pb.ColumnFamily>): grpc.ClientUnaryCall;
  createColumnFamily(argument: google_bigtable_admin_table_v1_bigtable_table_service_messages_pb.CreateColumnFamilyRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_bigtable_admin_table_v1_bigtable_table_data_pb.ColumnFamily>): grpc.ClientUnaryCall;
  createColumnFamily(argument: google_bigtable_admin_table_v1_bigtable_table_service_messages_pb.CreateColumnFamilyRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_bigtable_admin_table_v1_bigtable_table_data_pb.ColumnFamily>): grpc.ClientUnaryCall;
  updateColumnFamily(argument: google_bigtable_admin_table_v1_bigtable_table_data_pb.ColumnFamily, callback: grpc.requestCallback<google_bigtable_admin_table_v1_bigtable_table_data_pb.ColumnFamily>): grpc.ClientUnaryCall;
  updateColumnFamily(argument: google_bigtable_admin_table_v1_bigtable_table_data_pb.ColumnFamily, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_bigtable_admin_table_v1_bigtable_table_data_pb.ColumnFamily>): grpc.ClientUnaryCall;
  updateColumnFamily(argument: google_bigtable_admin_table_v1_bigtable_table_data_pb.ColumnFamily, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_bigtable_admin_table_v1_bigtable_table_data_pb.ColumnFamily>): grpc.ClientUnaryCall;
  deleteColumnFamily(argument: google_bigtable_admin_table_v1_bigtable_table_service_messages_pb.DeleteColumnFamilyRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteColumnFamily(argument: google_bigtable_admin_table_v1_bigtable_table_service_messages_pb.DeleteColumnFamilyRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteColumnFamily(argument: google_bigtable_admin_table_v1_bigtable_table_service_messages_pb.DeleteColumnFamilyRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  bulkDeleteRows(argument: google_bigtable_admin_table_v1_bigtable_table_service_messages_pb.BulkDeleteRowsRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  bulkDeleteRows(argument: google_bigtable_admin_table_v1_bigtable_table_service_messages_pb.BulkDeleteRowsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  bulkDeleteRows(argument: google_bigtable_admin_table_v1_bigtable_table_service_messages_pb.BulkDeleteRowsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
}
