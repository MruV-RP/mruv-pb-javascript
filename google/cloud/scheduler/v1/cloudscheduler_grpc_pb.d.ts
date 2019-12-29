// GENERATED CODE -- DO NOT EDIT!

// package: google.cloud.scheduler.v1
// file: google/cloud/scheduler/v1/cloudscheduler.proto

import * as google_cloud_scheduler_v1_cloudscheduler_pb from "../../../../google/cloud/scheduler/v1/cloudscheduler_pb";
import * as google_cloud_scheduler_v1_job_pb from "../../../../google/cloud/scheduler/v1/job_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "grpc";

interface ICloudSchedulerService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  listJobs: grpc.MethodDefinition<google_cloud_scheduler_v1_cloudscheduler_pb.ListJobsRequest, google_cloud_scheduler_v1_cloudscheduler_pb.ListJobsResponse>;
  getJob: grpc.MethodDefinition<google_cloud_scheduler_v1_cloudscheduler_pb.GetJobRequest, google_cloud_scheduler_v1_job_pb.Job>;
  createJob: grpc.MethodDefinition<google_cloud_scheduler_v1_cloudscheduler_pb.CreateJobRequest, google_cloud_scheduler_v1_job_pb.Job>;
  updateJob: grpc.MethodDefinition<google_cloud_scheduler_v1_cloudscheduler_pb.UpdateJobRequest, google_cloud_scheduler_v1_job_pb.Job>;
  deleteJob: grpc.MethodDefinition<google_cloud_scheduler_v1_cloudscheduler_pb.DeleteJobRequest, google_protobuf_empty_pb.Empty>;
  pauseJob: grpc.MethodDefinition<google_cloud_scheduler_v1_cloudscheduler_pb.PauseJobRequest, google_cloud_scheduler_v1_job_pb.Job>;
  resumeJob: grpc.MethodDefinition<google_cloud_scheduler_v1_cloudscheduler_pb.ResumeJobRequest, google_cloud_scheduler_v1_job_pb.Job>;
  runJob: grpc.MethodDefinition<google_cloud_scheduler_v1_cloudscheduler_pb.RunJobRequest, google_cloud_scheduler_v1_job_pb.Job>;
}

export const CloudSchedulerService: ICloudSchedulerService;

export class CloudSchedulerClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  listJobs(argument: google_cloud_scheduler_v1_cloudscheduler_pb.ListJobsRequest, callback: grpc.requestCallback<google_cloud_scheduler_v1_cloudscheduler_pb.ListJobsResponse>): grpc.ClientUnaryCall;
  listJobs(argument: google_cloud_scheduler_v1_cloudscheduler_pb.ListJobsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_scheduler_v1_cloudscheduler_pb.ListJobsResponse>): grpc.ClientUnaryCall;
  listJobs(argument: google_cloud_scheduler_v1_cloudscheduler_pb.ListJobsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_scheduler_v1_cloudscheduler_pb.ListJobsResponse>): grpc.ClientUnaryCall;
  getJob(argument: google_cloud_scheduler_v1_cloudscheduler_pb.GetJobRequest, callback: grpc.requestCallback<google_cloud_scheduler_v1_job_pb.Job>): grpc.ClientUnaryCall;
  getJob(argument: google_cloud_scheduler_v1_cloudscheduler_pb.GetJobRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_scheduler_v1_job_pb.Job>): grpc.ClientUnaryCall;
  getJob(argument: google_cloud_scheduler_v1_cloudscheduler_pb.GetJobRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_scheduler_v1_job_pb.Job>): grpc.ClientUnaryCall;
  createJob(argument: google_cloud_scheduler_v1_cloudscheduler_pb.CreateJobRequest, callback: grpc.requestCallback<google_cloud_scheduler_v1_job_pb.Job>): grpc.ClientUnaryCall;
  createJob(argument: google_cloud_scheduler_v1_cloudscheduler_pb.CreateJobRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_scheduler_v1_job_pb.Job>): grpc.ClientUnaryCall;
  createJob(argument: google_cloud_scheduler_v1_cloudscheduler_pb.CreateJobRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_scheduler_v1_job_pb.Job>): grpc.ClientUnaryCall;
  updateJob(argument: google_cloud_scheduler_v1_cloudscheduler_pb.UpdateJobRequest, callback: grpc.requestCallback<google_cloud_scheduler_v1_job_pb.Job>): grpc.ClientUnaryCall;
  updateJob(argument: google_cloud_scheduler_v1_cloudscheduler_pb.UpdateJobRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_scheduler_v1_job_pb.Job>): grpc.ClientUnaryCall;
  updateJob(argument: google_cloud_scheduler_v1_cloudscheduler_pb.UpdateJobRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_scheduler_v1_job_pb.Job>): grpc.ClientUnaryCall;
  deleteJob(argument: google_cloud_scheduler_v1_cloudscheduler_pb.DeleteJobRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteJob(argument: google_cloud_scheduler_v1_cloudscheduler_pb.DeleteJobRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteJob(argument: google_cloud_scheduler_v1_cloudscheduler_pb.DeleteJobRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  pauseJob(argument: google_cloud_scheduler_v1_cloudscheduler_pb.PauseJobRequest, callback: grpc.requestCallback<google_cloud_scheduler_v1_job_pb.Job>): grpc.ClientUnaryCall;
  pauseJob(argument: google_cloud_scheduler_v1_cloudscheduler_pb.PauseJobRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_scheduler_v1_job_pb.Job>): grpc.ClientUnaryCall;
  pauseJob(argument: google_cloud_scheduler_v1_cloudscheduler_pb.PauseJobRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_scheduler_v1_job_pb.Job>): grpc.ClientUnaryCall;
  resumeJob(argument: google_cloud_scheduler_v1_cloudscheduler_pb.ResumeJobRequest, callback: grpc.requestCallback<google_cloud_scheduler_v1_job_pb.Job>): grpc.ClientUnaryCall;
  resumeJob(argument: google_cloud_scheduler_v1_cloudscheduler_pb.ResumeJobRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_scheduler_v1_job_pb.Job>): grpc.ClientUnaryCall;
  resumeJob(argument: google_cloud_scheduler_v1_cloudscheduler_pb.ResumeJobRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_scheduler_v1_job_pb.Job>): grpc.ClientUnaryCall;
  runJob(argument: google_cloud_scheduler_v1_cloudscheduler_pb.RunJobRequest, callback: grpc.requestCallback<google_cloud_scheduler_v1_job_pb.Job>): grpc.ClientUnaryCall;
  runJob(argument: google_cloud_scheduler_v1_cloudscheduler_pb.RunJobRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_scheduler_v1_job_pb.Job>): grpc.ClientUnaryCall;
  runJob(argument: google_cloud_scheduler_v1_cloudscheduler_pb.RunJobRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_scheduler_v1_job_pb.Job>): grpc.ClientUnaryCall;
}
