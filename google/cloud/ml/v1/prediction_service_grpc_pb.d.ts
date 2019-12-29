// GENERATED CODE -- DO NOT EDIT!

// package: google.cloud.ml.v1
// file: google/cloud/ml/v1/prediction_service.proto

import * as google_cloud_ml_v1_prediction_service_pb from "../../../../google/cloud/ml/v1/prediction_service_pb";
import * as google_api_httpbody_pb from "../../../../google/api/httpbody_pb";
import * as grpc from "grpc";

interface IOnlinePredictionServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  predict: grpc.MethodDefinition<google_cloud_ml_v1_prediction_service_pb.PredictRequest, google_api_httpbody_pb.HttpBody>;
}

export const OnlinePredictionServiceService: IOnlinePredictionServiceService;

export class OnlinePredictionServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  predict(argument: google_cloud_ml_v1_prediction_service_pb.PredictRequest, callback: grpc.requestCallback<google_api_httpbody_pb.HttpBody>): grpc.ClientUnaryCall;
  predict(argument: google_cloud_ml_v1_prediction_service_pb.PredictRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_api_httpbody_pb.HttpBody>): grpc.ClientUnaryCall;
  predict(argument: google_cloud_ml_v1_prediction_service_pb.PredictRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_api_httpbody_pb.HttpBody>): grpc.ClientUnaryCall;
}
