// GENERATED CODE -- DO NOT EDIT!

// package: google.cloud.bigquery.v2
// file: google/cloud/bigquery/v2/model.proto

import * as google_cloud_bigquery_v2_model_pb from "../../../../google/cloud/bigquery/v2/model_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "grpc";

interface IModelServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getModel: grpc.MethodDefinition<google_cloud_bigquery_v2_model_pb.GetModelRequest, google_cloud_bigquery_v2_model_pb.Model>;
  listModels: grpc.MethodDefinition<google_cloud_bigquery_v2_model_pb.ListModelsRequest, google_cloud_bigquery_v2_model_pb.ListModelsResponse>;
  patchModel: grpc.MethodDefinition<google_cloud_bigquery_v2_model_pb.PatchModelRequest, google_cloud_bigquery_v2_model_pb.Model>;
  deleteModel: grpc.MethodDefinition<google_cloud_bigquery_v2_model_pb.DeleteModelRequest, google_protobuf_empty_pb.Empty>;
}

export const ModelServiceService: IModelServiceService;

export class ModelServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getModel(argument: google_cloud_bigquery_v2_model_pb.GetModelRequest, callback: grpc.requestCallback<google_cloud_bigquery_v2_model_pb.Model>): grpc.ClientUnaryCall;
  getModel(argument: google_cloud_bigquery_v2_model_pb.GetModelRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_bigquery_v2_model_pb.Model>): grpc.ClientUnaryCall;
  getModel(argument: google_cloud_bigquery_v2_model_pb.GetModelRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_bigquery_v2_model_pb.Model>): grpc.ClientUnaryCall;
  listModels(argument: google_cloud_bigquery_v2_model_pb.ListModelsRequest, callback: grpc.requestCallback<google_cloud_bigquery_v2_model_pb.ListModelsResponse>): grpc.ClientUnaryCall;
  listModels(argument: google_cloud_bigquery_v2_model_pb.ListModelsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_bigquery_v2_model_pb.ListModelsResponse>): grpc.ClientUnaryCall;
  listModels(argument: google_cloud_bigquery_v2_model_pb.ListModelsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_bigquery_v2_model_pb.ListModelsResponse>): grpc.ClientUnaryCall;
  patchModel(argument: google_cloud_bigquery_v2_model_pb.PatchModelRequest, callback: grpc.requestCallback<google_cloud_bigquery_v2_model_pb.Model>): grpc.ClientUnaryCall;
  patchModel(argument: google_cloud_bigquery_v2_model_pb.PatchModelRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_bigquery_v2_model_pb.Model>): grpc.ClientUnaryCall;
  patchModel(argument: google_cloud_bigquery_v2_model_pb.PatchModelRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_bigquery_v2_model_pb.Model>): grpc.ClientUnaryCall;
  deleteModel(argument: google_cloud_bigquery_v2_model_pb.DeleteModelRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteModel(argument: google_cloud_bigquery_v2_model_pb.DeleteModelRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteModel(argument: google_cloud_bigquery_v2_model_pb.DeleteModelRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
}
