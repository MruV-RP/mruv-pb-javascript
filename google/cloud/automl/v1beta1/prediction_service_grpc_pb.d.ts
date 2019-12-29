// GENERATED CODE -- DO NOT EDIT!

// package: google.cloud.automl.v1beta1
// file: google/cloud/automl/v1beta1/prediction_service.proto

import * as google_cloud_automl_v1beta1_prediction_service_pb from "../../../../google/cloud/automl/v1beta1/prediction_service_pb";
import * as google_longrunning_operations_pb from "../../../../google/longrunning/operations_pb";
import * as grpc from "grpc";

interface IPredictionServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  predict: grpc.MethodDefinition<google_cloud_automl_v1beta1_prediction_service_pb.PredictRequest, google_cloud_automl_v1beta1_prediction_service_pb.PredictResponse>;
  batchPredict: grpc.MethodDefinition<google_cloud_automl_v1beta1_prediction_service_pb.BatchPredictRequest, google_longrunning_operations_pb.Operation>;
}

export const PredictionServiceService: IPredictionServiceService;

export class PredictionServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  predict(argument: google_cloud_automl_v1beta1_prediction_service_pb.PredictRequest, callback: grpc.requestCallback<google_cloud_automl_v1beta1_prediction_service_pb.PredictResponse>): grpc.ClientUnaryCall;
  predict(argument: google_cloud_automl_v1beta1_prediction_service_pb.PredictRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_automl_v1beta1_prediction_service_pb.PredictResponse>): grpc.ClientUnaryCall;
  predict(argument: google_cloud_automl_v1beta1_prediction_service_pb.PredictRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_automl_v1beta1_prediction_service_pb.PredictResponse>): grpc.ClientUnaryCall;
  batchPredict(argument: google_cloud_automl_v1beta1_prediction_service_pb.BatchPredictRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  batchPredict(argument: google_cloud_automl_v1beta1_prediction_service_pb.BatchPredictRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  batchPredict(argument: google_cloud_automl_v1beta1_prediction_service_pb.BatchPredictRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
}
