// GENERATED CODE -- DO NOT EDIT!

// package: google.cloud.ml.v1
// file: google/cloud/ml/v1/job_service.proto

import * as google_cloud_ml_v1_job_service_pb from "../../../../google/cloud/ml/v1/job_service_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "grpc";

interface IJobServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createJob: grpc.MethodDefinition<google_cloud_ml_v1_job_service_pb.CreateJobRequest, google_cloud_ml_v1_job_service_pb.Job>;
  listJobs: grpc.MethodDefinition<google_cloud_ml_v1_job_service_pb.ListJobsRequest, google_cloud_ml_v1_job_service_pb.ListJobsResponse>;
  getJob: grpc.MethodDefinition<google_cloud_ml_v1_job_service_pb.GetJobRequest, google_cloud_ml_v1_job_service_pb.Job>;
  cancelJob: grpc.MethodDefinition<google_cloud_ml_v1_job_service_pb.CancelJobRequest, google_protobuf_empty_pb.Empty>;
}

export const JobServiceService: IJobServiceService;

export class JobServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  createJob(argument: google_cloud_ml_v1_job_service_pb.CreateJobRequest, callback: grpc.requestCallback<google_cloud_ml_v1_job_service_pb.Job>): grpc.ClientUnaryCall;
  createJob(argument: google_cloud_ml_v1_job_service_pb.CreateJobRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_ml_v1_job_service_pb.Job>): grpc.ClientUnaryCall;
  createJob(argument: google_cloud_ml_v1_job_service_pb.CreateJobRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_ml_v1_job_service_pb.Job>): grpc.ClientUnaryCall;
  listJobs(argument: google_cloud_ml_v1_job_service_pb.ListJobsRequest, callback: grpc.requestCallback<google_cloud_ml_v1_job_service_pb.ListJobsResponse>): grpc.ClientUnaryCall;
  listJobs(argument: google_cloud_ml_v1_job_service_pb.ListJobsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_ml_v1_job_service_pb.ListJobsResponse>): grpc.ClientUnaryCall;
  listJobs(argument: google_cloud_ml_v1_job_service_pb.ListJobsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_ml_v1_job_service_pb.ListJobsResponse>): grpc.ClientUnaryCall;
  getJob(argument: google_cloud_ml_v1_job_service_pb.GetJobRequest, callback: grpc.requestCallback<google_cloud_ml_v1_job_service_pb.Job>): grpc.ClientUnaryCall;
  getJob(argument: google_cloud_ml_v1_job_service_pb.GetJobRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_ml_v1_job_service_pb.Job>): grpc.ClientUnaryCall;
  getJob(argument: google_cloud_ml_v1_job_service_pb.GetJobRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_ml_v1_job_service_pb.Job>): grpc.ClientUnaryCall;
  cancelJob(argument: google_cloud_ml_v1_job_service_pb.CancelJobRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  cancelJob(argument: google_cloud_ml_v1_job_service_pb.CancelJobRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  cancelJob(argument: google_cloud_ml_v1_job_service_pb.CancelJobRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
}
