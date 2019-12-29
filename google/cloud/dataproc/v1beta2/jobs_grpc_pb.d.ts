// GENERATED CODE -- DO NOT EDIT!

// package: google.cloud.dataproc.v1beta2
// file: google/cloud/dataproc/v1beta2/jobs.proto

import * as google_cloud_dataproc_v1beta2_jobs_pb from "../../../../google/cloud/dataproc/v1beta2/jobs_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "grpc";

interface IJobControllerService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  submitJob: grpc.MethodDefinition<google_cloud_dataproc_v1beta2_jobs_pb.SubmitJobRequest, google_cloud_dataproc_v1beta2_jobs_pb.Job>;
  getJob: grpc.MethodDefinition<google_cloud_dataproc_v1beta2_jobs_pb.GetJobRequest, google_cloud_dataproc_v1beta2_jobs_pb.Job>;
  listJobs: grpc.MethodDefinition<google_cloud_dataproc_v1beta2_jobs_pb.ListJobsRequest, google_cloud_dataproc_v1beta2_jobs_pb.ListJobsResponse>;
  updateJob: grpc.MethodDefinition<google_cloud_dataproc_v1beta2_jobs_pb.UpdateJobRequest, google_cloud_dataproc_v1beta2_jobs_pb.Job>;
  cancelJob: grpc.MethodDefinition<google_cloud_dataproc_v1beta2_jobs_pb.CancelJobRequest, google_cloud_dataproc_v1beta2_jobs_pb.Job>;
  deleteJob: grpc.MethodDefinition<google_cloud_dataproc_v1beta2_jobs_pb.DeleteJobRequest, google_protobuf_empty_pb.Empty>;
}

export const JobControllerService: IJobControllerService;

export class JobControllerClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  submitJob(argument: google_cloud_dataproc_v1beta2_jobs_pb.SubmitJobRequest, callback: grpc.requestCallback<google_cloud_dataproc_v1beta2_jobs_pb.Job>): grpc.ClientUnaryCall;
  submitJob(argument: google_cloud_dataproc_v1beta2_jobs_pb.SubmitJobRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_dataproc_v1beta2_jobs_pb.Job>): grpc.ClientUnaryCall;
  submitJob(argument: google_cloud_dataproc_v1beta2_jobs_pb.SubmitJobRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_dataproc_v1beta2_jobs_pb.Job>): grpc.ClientUnaryCall;
  getJob(argument: google_cloud_dataproc_v1beta2_jobs_pb.GetJobRequest, callback: grpc.requestCallback<google_cloud_dataproc_v1beta2_jobs_pb.Job>): grpc.ClientUnaryCall;
  getJob(argument: google_cloud_dataproc_v1beta2_jobs_pb.GetJobRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_dataproc_v1beta2_jobs_pb.Job>): grpc.ClientUnaryCall;
  getJob(argument: google_cloud_dataproc_v1beta2_jobs_pb.GetJobRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_dataproc_v1beta2_jobs_pb.Job>): grpc.ClientUnaryCall;
  listJobs(argument: google_cloud_dataproc_v1beta2_jobs_pb.ListJobsRequest, callback: grpc.requestCallback<google_cloud_dataproc_v1beta2_jobs_pb.ListJobsResponse>): grpc.ClientUnaryCall;
  listJobs(argument: google_cloud_dataproc_v1beta2_jobs_pb.ListJobsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_dataproc_v1beta2_jobs_pb.ListJobsResponse>): grpc.ClientUnaryCall;
  listJobs(argument: google_cloud_dataproc_v1beta2_jobs_pb.ListJobsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_dataproc_v1beta2_jobs_pb.ListJobsResponse>): grpc.ClientUnaryCall;
  updateJob(argument: google_cloud_dataproc_v1beta2_jobs_pb.UpdateJobRequest, callback: grpc.requestCallback<google_cloud_dataproc_v1beta2_jobs_pb.Job>): grpc.ClientUnaryCall;
  updateJob(argument: google_cloud_dataproc_v1beta2_jobs_pb.UpdateJobRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_dataproc_v1beta2_jobs_pb.Job>): grpc.ClientUnaryCall;
  updateJob(argument: google_cloud_dataproc_v1beta2_jobs_pb.UpdateJobRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_dataproc_v1beta2_jobs_pb.Job>): grpc.ClientUnaryCall;
  cancelJob(argument: google_cloud_dataproc_v1beta2_jobs_pb.CancelJobRequest, callback: grpc.requestCallback<google_cloud_dataproc_v1beta2_jobs_pb.Job>): grpc.ClientUnaryCall;
  cancelJob(argument: google_cloud_dataproc_v1beta2_jobs_pb.CancelJobRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_dataproc_v1beta2_jobs_pb.Job>): grpc.ClientUnaryCall;
  cancelJob(argument: google_cloud_dataproc_v1beta2_jobs_pb.CancelJobRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_dataproc_v1beta2_jobs_pb.Job>): grpc.ClientUnaryCall;
  deleteJob(argument: google_cloud_dataproc_v1beta2_jobs_pb.DeleteJobRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteJob(argument: google_cloud_dataproc_v1beta2_jobs_pb.DeleteJobRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteJob(argument: google_cloud_dataproc_v1beta2_jobs_pb.DeleteJobRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
}
