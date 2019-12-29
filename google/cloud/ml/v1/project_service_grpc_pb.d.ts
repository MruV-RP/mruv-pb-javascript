// GENERATED CODE -- DO NOT EDIT!

// package: google.cloud.ml.v1
// file: google/cloud/ml/v1/project_service.proto

import * as google_cloud_ml_v1_project_service_pb from "../../../../google/cloud/ml/v1/project_service_pb";
import * as grpc from "grpc";

interface IProjectManagementServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getConfig: grpc.MethodDefinition<google_cloud_ml_v1_project_service_pb.GetConfigRequest, google_cloud_ml_v1_project_service_pb.GetConfigResponse>;
}

export const ProjectManagementServiceService: IProjectManagementServiceService;

export class ProjectManagementServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getConfig(argument: google_cloud_ml_v1_project_service_pb.GetConfigRequest, callback: grpc.requestCallback<google_cloud_ml_v1_project_service_pb.GetConfigResponse>): grpc.ClientUnaryCall;
  getConfig(argument: google_cloud_ml_v1_project_service_pb.GetConfigRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_ml_v1_project_service_pb.GetConfigResponse>): grpc.ClientUnaryCall;
  getConfig(argument: google_cloud_ml_v1_project_service_pb.GetConfigRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_ml_v1_project_service_pb.GetConfigResponse>): grpc.ClientUnaryCall;
}
