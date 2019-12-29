// GENERATED CODE -- DO NOT EDIT!

// package: google.cloud.talent.v4beta1
// file: google/cloud/talent/v4beta1/application_service.proto

import * as google_cloud_talent_v4beta1_application_service_pb from "../../../../google/cloud/talent/v4beta1/application_service_pb";
import * as google_cloud_talent_v4beta1_application_pb from "../../../../google/cloud/talent/v4beta1/application_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "grpc";

interface IApplicationServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createApplication: grpc.MethodDefinition<google_cloud_talent_v4beta1_application_service_pb.CreateApplicationRequest, google_cloud_talent_v4beta1_application_pb.Application>;
  getApplication: grpc.MethodDefinition<google_cloud_talent_v4beta1_application_service_pb.GetApplicationRequest, google_cloud_talent_v4beta1_application_pb.Application>;
  updateApplication: grpc.MethodDefinition<google_cloud_talent_v4beta1_application_service_pb.UpdateApplicationRequest, google_cloud_talent_v4beta1_application_pb.Application>;
  deleteApplication: grpc.MethodDefinition<google_cloud_talent_v4beta1_application_service_pb.DeleteApplicationRequest, google_protobuf_empty_pb.Empty>;
  listApplications: grpc.MethodDefinition<google_cloud_talent_v4beta1_application_service_pb.ListApplicationsRequest, google_cloud_talent_v4beta1_application_service_pb.ListApplicationsResponse>;
}

export const ApplicationServiceService: IApplicationServiceService;

export class ApplicationServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  createApplication(argument: google_cloud_talent_v4beta1_application_service_pb.CreateApplicationRequest, callback: grpc.requestCallback<google_cloud_talent_v4beta1_application_pb.Application>): grpc.ClientUnaryCall;
  createApplication(argument: google_cloud_talent_v4beta1_application_service_pb.CreateApplicationRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_talent_v4beta1_application_pb.Application>): grpc.ClientUnaryCall;
  createApplication(argument: google_cloud_talent_v4beta1_application_service_pb.CreateApplicationRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_talent_v4beta1_application_pb.Application>): grpc.ClientUnaryCall;
  getApplication(argument: google_cloud_talent_v4beta1_application_service_pb.GetApplicationRequest, callback: grpc.requestCallback<google_cloud_talent_v4beta1_application_pb.Application>): grpc.ClientUnaryCall;
  getApplication(argument: google_cloud_talent_v4beta1_application_service_pb.GetApplicationRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_talent_v4beta1_application_pb.Application>): grpc.ClientUnaryCall;
  getApplication(argument: google_cloud_talent_v4beta1_application_service_pb.GetApplicationRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_talent_v4beta1_application_pb.Application>): grpc.ClientUnaryCall;
  updateApplication(argument: google_cloud_talent_v4beta1_application_service_pb.UpdateApplicationRequest, callback: grpc.requestCallback<google_cloud_talent_v4beta1_application_pb.Application>): grpc.ClientUnaryCall;
  updateApplication(argument: google_cloud_talent_v4beta1_application_service_pb.UpdateApplicationRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_talent_v4beta1_application_pb.Application>): grpc.ClientUnaryCall;
  updateApplication(argument: google_cloud_talent_v4beta1_application_service_pb.UpdateApplicationRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_talent_v4beta1_application_pb.Application>): grpc.ClientUnaryCall;
  deleteApplication(argument: google_cloud_talent_v4beta1_application_service_pb.DeleteApplicationRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteApplication(argument: google_cloud_talent_v4beta1_application_service_pb.DeleteApplicationRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteApplication(argument: google_cloud_talent_v4beta1_application_service_pb.DeleteApplicationRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  listApplications(argument: google_cloud_talent_v4beta1_application_service_pb.ListApplicationsRequest, callback: grpc.requestCallback<google_cloud_talent_v4beta1_application_service_pb.ListApplicationsResponse>): grpc.ClientUnaryCall;
  listApplications(argument: google_cloud_talent_v4beta1_application_service_pb.ListApplicationsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_talent_v4beta1_application_service_pb.ListApplicationsResponse>): grpc.ClientUnaryCall;
  listApplications(argument: google_cloud_talent_v4beta1_application_service_pb.ListApplicationsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_talent_v4beta1_application_service_pb.ListApplicationsResponse>): grpc.ClientUnaryCall;
}
