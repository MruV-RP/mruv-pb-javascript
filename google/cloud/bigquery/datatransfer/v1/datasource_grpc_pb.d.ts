// GENERATED CODE -- DO NOT EDIT!

// package: google.cloud.bigquery.datatransfer.v1
// file: google/cloud/bigquery/datatransfer/v1/datasource.proto

import * as google_cloud_bigquery_datatransfer_v1_datasource_pb from "../../../../../google/cloud/bigquery/datatransfer/v1/datasource_pb";
import * as google_cloud_bigquery_datatransfer_v1_transfer_pb from "../../../../../google/cloud/bigquery/datatransfer/v1/transfer_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "grpc";

interface IDataSourceServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  updateTransferRun: grpc.MethodDefinition<google_cloud_bigquery_datatransfer_v1_datasource_pb.UpdateTransferRunRequest, google_cloud_bigquery_datatransfer_v1_transfer_pb.TransferRun>;
  logTransferRunMessages: grpc.MethodDefinition<google_cloud_bigquery_datatransfer_v1_datasource_pb.LogTransferRunMessagesRequest, google_protobuf_empty_pb.Empty>;
  startBigQueryJobs: grpc.MethodDefinition<google_cloud_bigquery_datatransfer_v1_datasource_pb.StartBigQueryJobsRequest, google_protobuf_empty_pb.Empty>;
  finishRun: grpc.MethodDefinition<google_cloud_bigquery_datatransfer_v1_datasource_pb.FinishRunRequest, google_protobuf_empty_pb.Empty>;
  createDataSourceDefinition: grpc.MethodDefinition<google_cloud_bigquery_datatransfer_v1_datasource_pb.CreateDataSourceDefinitionRequest, google_cloud_bigquery_datatransfer_v1_datasource_pb.DataSourceDefinition>;
  updateDataSourceDefinition: grpc.MethodDefinition<google_cloud_bigquery_datatransfer_v1_datasource_pb.UpdateDataSourceDefinitionRequest, google_cloud_bigquery_datatransfer_v1_datasource_pb.DataSourceDefinition>;
  deleteDataSourceDefinition: grpc.MethodDefinition<google_cloud_bigquery_datatransfer_v1_datasource_pb.DeleteDataSourceDefinitionRequest, google_protobuf_empty_pb.Empty>;
  getDataSourceDefinition: grpc.MethodDefinition<google_cloud_bigquery_datatransfer_v1_datasource_pb.GetDataSourceDefinitionRequest, google_cloud_bigquery_datatransfer_v1_datasource_pb.DataSourceDefinition>;
  listDataSourceDefinitions: grpc.MethodDefinition<google_cloud_bigquery_datatransfer_v1_datasource_pb.ListDataSourceDefinitionsRequest, google_cloud_bigquery_datatransfer_v1_datasource_pb.ListDataSourceDefinitionsResponse>;
}

export const DataSourceServiceService: IDataSourceServiceService;

export class DataSourceServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  updateTransferRun(argument: google_cloud_bigquery_datatransfer_v1_datasource_pb.UpdateTransferRunRequest, callback: grpc.requestCallback<google_cloud_bigquery_datatransfer_v1_transfer_pb.TransferRun>): grpc.ClientUnaryCall;
  updateTransferRun(argument: google_cloud_bigquery_datatransfer_v1_datasource_pb.UpdateTransferRunRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_bigquery_datatransfer_v1_transfer_pb.TransferRun>): grpc.ClientUnaryCall;
  updateTransferRun(argument: google_cloud_bigquery_datatransfer_v1_datasource_pb.UpdateTransferRunRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_bigquery_datatransfer_v1_transfer_pb.TransferRun>): grpc.ClientUnaryCall;
  logTransferRunMessages(argument: google_cloud_bigquery_datatransfer_v1_datasource_pb.LogTransferRunMessagesRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  logTransferRunMessages(argument: google_cloud_bigquery_datatransfer_v1_datasource_pb.LogTransferRunMessagesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  logTransferRunMessages(argument: google_cloud_bigquery_datatransfer_v1_datasource_pb.LogTransferRunMessagesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  startBigQueryJobs(argument: google_cloud_bigquery_datatransfer_v1_datasource_pb.StartBigQueryJobsRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  startBigQueryJobs(argument: google_cloud_bigquery_datatransfer_v1_datasource_pb.StartBigQueryJobsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  startBigQueryJobs(argument: google_cloud_bigquery_datatransfer_v1_datasource_pb.StartBigQueryJobsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  finishRun(argument: google_cloud_bigquery_datatransfer_v1_datasource_pb.FinishRunRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  finishRun(argument: google_cloud_bigquery_datatransfer_v1_datasource_pb.FinishRunRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  finishRun(argument: google_cloud_bigquery_datatransfer_v1_datasource_pb.FinishRunRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  createDataSourceDefinition(argument: google_cloud_bigquery_datatransfer_v1_datasource_pb.CreateDataSourceDefinitionRequest, callback: grpc.requestCallback<google_cloud_bigquery_datatransfer_v1_datasource_pb.DataSourceDefinition>): grpc.ClientUnaryCall;
  createDataSourceDefinition(argument: google_cloud_bigquery_datatransfer_v1_datasource_pb.CreateDataSourceDefinitionRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_bigquery_datatransfer_v1_datasource_pb.DataSourceDefinition>): grpc.ClientUnaryCall;
  createDataSourceDefinition(argument: google_cloud_bigquery_datatransfer_v1_datasource_pb.CreateDataSourceDefinitionRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_bigquery_datatransfer_v1_datasource_pb.DataSourceDefinition>): grpc.ClientUnaryCall;
  updateDataSourceDefinition(argument: google_cloud_bigquery_datatransfer_v1_datasource_pb.UpdateDataSourceDefinitionRequest, callback: grpc.requestCallback<google_cloud_bigquery_datatransfer_v1_datasource_pb.DataSourceDefinition>): grpc.ClientUnaryCall;
  updateDataSourceDefinition(argument: google_cloud_bigquery_datatransfer_v1_datasource_pb.UpdateDataSourceDefinitionRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_bigquery_datatransfer_v1_datasource_pb.DataSourceDefinition>): grpc.ClientUnaryCall;
  updateDataSourceDefinition(argument: google_cloud_bigquery_datatransfer_v1_datasource_pb.UpdateDataSourceDefinitionRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_bigquery_datatransfer_v1_datasource_pb.DataSourceDefinition>): grpc.ClientUnaryCall;
  deleteDataSourceDefinition(argument: google_cloud_bigquery_datatransfer_v1_datasource_pb.DeleteDataSourceDefinitionRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteDataSourceDefinition(argument: google_cloud_bigquery_datatransfer_v1_datasource_pb.DeleteDataSourceDefinitionRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteDataSourceDefinition(argument: google_cloud_bigquery_datatransfer_v1_datasource_pb.DeleteDataSourceDefinitionRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  getDataSourceDefinition(argument: google_cloud_bigquery_datatransfer_v1_datasource_pb.GetDataSourceDefinitionRequest, callback: grpc.requestCallback<google_cloud_bigquery_datatransfer_v1_datasource_pb.DataSourceDefinition>): grpc.ClientUnaryCall;
  getDataSourceDefinition(argument: google_cloud_bigquery_datatransfer_v1_datasource_pb.GetDataSourceDefinitionRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_bigquery_datatransfer_v1_datasource_pb.DataSourceDefinition>): grpc.ClientUnaryCall;
  getDataSourceDefinition(argument: google_cloud_bigquery_datatransfer_v1_datasource_pb.GetDataSourceDefinitionRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_bigquery_datatransfer_v1_datasource_pb.DataSourceDefinition>): grpc.ClientUnaryCall;
  listDataSourceDefinitions(argument: google_cloud_bigquery_datatransfer_v1_datasource_pb.ListDataSourceDefinitionsRequest, callback: grpc.requestCallback<google_cloud_bigquery_datatransfer_v1_datasource_pb.ListDataSourceDefinitionsResponse>): grpc.ClientUnaryCall;
  listDataSourceDefinitions(argument: google_cloud_bigquery_datatransfer_v1_datasource_pb.ListDataSourceDefinitionsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_bigquery_datatransfer_v1_datasource_pb.ListDataSourceDefinitionsResponse>): grpc.ClientUnaryCall;
  listDataSourceDefinitions(argument: google_cloud_bigquery_datatransfer_v1_datasource_pb.ListDataSourceDefinitionsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_bigquery_datatransfer_v1_datasource_pb.ListDataSourceDefinitionsResponse>): grpc.ClientUnaryCall;
}
