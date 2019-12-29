// GENERATED CODE -- DO NOT EDIT!

// package: google.cloud.ml.v1
// file: google/cloud/ml/v1/model_service.proto

import * as google_cloud_ml_v1_model_service_pb from "../../../../google/cloud/ml/v1/model_service_pb";
import * as google_longrunning_operations_pb from "../../../../google/longrunning/operations_pb";
import * as grpc from "grpc";

interface IModelServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createModel: grpc.MethodDefinition<google_cloud_ml_v1_model_service_pb.CreateModelRequest, google_cloud_ml_v1_model_service_pb.Model>;
  listModels: grpc.MethodDefinition<google_cloud_ml_v1_model_service_pb.ListModelsRequest, google_cloud_ml_v1_model_service_pb.ListModelsResponse>;
  getModel: grpc.MethodDefinition<google_cloud_ml_v1_model_service_pb.GetModelRequest, google_cloud_ml_v1_model_service_pb.Model>;
  deleteModel: grpc.MethodDefinition<google_cloud_ml_v1_model_service_pb.DeleteModelRequest, google_longrunning_operations_pb.Operation>;
  createVersion: grpc.MethodDefinition<google_cloud_ml_v1_model_service_pb.CreateVersionRequest, google_longrunning_operations_pb.Operation>;
  listVersions: grpc.MethodDefinition<google_cloud_ml_v1_model_service_pb.ListVersionsRequest, google_cloud_ml_v1_model_service_pb.ListVersionsResponse>;
  getVersion: grpc.MethodDefinition<google_cloud_ml_v1_model_service_pb.GetVersionRequest, google_cloud_ml_v1_model_service_pb.Version>;
  deleteVersion: grpc.MethodDefinition<google_cloud_ml_v1_model_service_pb.DeleteVersionRequest, google_longrunning_operations_pb.Operation>;
  setDefaultVersion: grpc.MethodDefinition<google_cloud_ml_v1_model_service_pb.SetDefaultVersionRequest, google_cloud_ml_v1_model_service_pb.Version>;
}

export const ModelServiceService: IModelServiceService;

export class ModelServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  createModel(argument: google_cloud_ml_v1_model_service_pb.CreateModelRequest, callback: grpc.requestCallback<google_cloud_ml_v1_model_service_pb.Model>): grpc.ClientUnaryCall;
  createModel(argument: google_cloud_ml_v1_model_service_pb.CreateModelRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_ml_v1_model_service_pb.Model>): grpc.ClientUnaryCall;
  createModel(argument: google_cloud_ml_v1_model_service_pb.CreateModelRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_ml_v1_model_service_pb.Model>): grpc.ClientUnaryCall;
  listModels(argument: google_cloud_ml_v1_model_service_pb.ListModelsRequest, callback: grpc.requestCallback<google_cloud_ml_v1_model_service_pb.ListModelsResponse>): grpc.ClientUnaryCall;
  listModels(argument: google_cloud_ml_v1_model_service_pb.ListModelsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_ml_v1_model_service_pb.ListModelsResponse>): grpc.ClientUnaryCall;
  listModels(argument: google_cloud_ml_v1_model_service_pb.ListModelsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_ml_v1_model_service_pb.ListModelsResponse>): grpc.ClientUnaryCall;
  getModel(argument: google_cloud_ml_v1_model_service_pb.GetModelRequest, callback: grpc.requestCallback<google_cloud_ml_v1_model_service_pb.Model>): grpc.ClientUnaryCall;
  getModel(argument: google_cloud_ml_v1_model_service_pb.GetModelRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_ml_v1_model_service_pb.Model>): grpc.ClientUnaryCall;
  getModel(argument: google_cloud_ml_v1_model_service_pb.GetModelRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_ml_v1_model_service_pb.Model>): grpc.ClientUnaryCall;
  deleteModel(argument: google_cloud_ml_v1_model_service_pb.DeleteModelRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  deleteModel(argument: google_cloud_ml_v1_model_service_pb.DeleteModelRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  deleteModel(argument: google_cloud_ml_v1_model_service_pb.DeleteModelRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  createVersion(argument: google_cloud_ml_v1_model_service_pb.CreateVersionRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  createVersion(argument: google_cloud_ml_v1_model_service_pb.CreateVersionRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  createVersion(argument: google_cloud_ml_v1_model_service_pb.CreateVersionRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  listVersions(argument: google_cloud_ml_v1_model_service_pb.ListVersionsRequest, callback: grpc.requestCallback<google_cloud_ml_v1_model_service_pb.ListVersionsResponse>): grpc.ClientUnaryCall;
  listVersions(argument: google_cloud_ml_v1_model_service_pb.ListVersionsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_ml_v1_model_service_pb.ListVersionsResponse>): grpc.ClientUnaryCall;
  listVersions(argument: google_cloud_ml_v1_model_service_pb.ListVersionsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_ml_v1_model_service_pb.ListVersionsResponse>): grpc.ClientUnaryCall;
  getVersion(argument: google_cloud_ml_v1_model_service_pb.GetVersionRequest, callback: grpc.requestCallback<google_cloud_ml_v1_model_service_pb.Version>): grpc.ClientUnaryCall;
  getVersion(argument: google_cloud_ml_v1_model_service_pb.GetVersionRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_ml_v1_model_service_pb.Version>): grpc.ClientUnaryCall;
  getVersion(argument: google_cloud_ml_v1_model_service_pb.GetVersionRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_ml_v1_model_service_pb.Version>): grpc.ClientUnaryCall;
  deleteVersion(argument: google_cloud_ml_v1_model_service_pb.DeleteVersionRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  deleteVersion(argument: google_cloud_ml_v1_model_service_pb.DeleteVersionRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  deleteVersion(argument: google_cloud_ml_v1_model_service_pb.DeleteVersionRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  setDefaultVersion(argument: google_cloud_ml_v1_model_service_pb.SetDefaultVersionRequest, callback: grpc.requestCallback<google_cloud_ml_v1_model_service_pb.Version>): grpc.ClientUnaryCall;
  setDefaultVersion(argument: google_cloud_ml_v1_model_service_pb.SetDefaultVersionRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_ml_v1_model_service_pb.Version>): grpc.ClientUnaryCall;
  setDefaultVersion(argument: google_cloud_ml_v1_model_service_pb.SetDefaultVersionRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_ml_v1_model_service_pb.Version>): grpc.ClientUnaryCall;
}
