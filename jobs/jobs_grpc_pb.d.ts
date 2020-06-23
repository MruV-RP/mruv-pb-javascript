// GENERATED CODE -- DO NOT EDIT!

// package: mruv.jobs
// file: jobs/jobs.proto

import * as jobs_jobs_pb from "../jobs/jobs_pb";
import * as grpc from "grpc";

interface IMruVJobsServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createJob: grpc.MethodDefinition<jobs_jobs_pb.CreateJobRequest, jobs_jobs_pb.CreateJobResponse>;
  getJob: grpc.MethodDefinition<jobs_jobs_pb.GetJobRequest, jobs_jobs_pb.GetJobResponse>;
  updateJob: grpc.MethodDefinition<jobs_jobs_pb.UpdateJobRequest, jobs_jobs_pb.UpdateJobResponse>;
  deleteJob: grpc.MethodDefinition<jobs_jobs_pb.DeleteJobRequest, jobs_jobs_pb.DeleteJobResponse>;
}

export const MruVJobsServiceService: IMruVJobsServiceService;

export class MruVJobsServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  createJob(argument: jobs_jobs_pb.CreateJobRequest, callback: grpc.requestCallback<jobs_jobs_pb.CreateJobResponse>): grpc.ClientUnaryCall;
  createJob(argument: jobs_jobs_pb.CreateJobRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<jobs_jobs_pb.CreateJobResponse>): grpc.ClientUnaryCall;
  createJob(argument: jobs_jobs_pb.CreateJobRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<jobs_jobs_pb.CreateJobResponse>): grpc.ClientUnaryCall;
  getJob(argument: jobs_jobs_pb.GetJobRequest, callback: grpc.requestCallback<jobs_jobs_pb.GetJobResponse>): grpc.ClientUnaryCall;
  getJob(argument: jobs_jobs_pb.GetJobRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<jobs_jobs_pb.GetJobResponse>): grpc.ClientUnaryCall;
  getJob(argument: jobs_jobs_pb.GetJobRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<jobs_jobs_pb.GetJobResponse>): grpc.ClientUnaryCall;
  updateJob(argument: jobs_jobs_pb.UpdateJobRequest, callback: grpc.requestCallback<jobs_jobs_pb.UpdateJobResponse>): grpc.ClientUnaryCall;
  updateJob(argument: jobs_jobs_pb.UpdateJobRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<jobs_jobs_pb.UpdateJobResponse>): grpc.ClientUnaryCall;
  updateJob(argument: jobs_jobs_pb.UpdateJobRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<jobs_jobs_pb.UpdateJobResponse>): grpc.ClientUnaryCall;
  deleteJob(argument: jobs_jobs_pb.DeleteJobRequest, callback: grpc.requestCallback<jobs_jobs_pb.DeleteJobResponse>): grpc.ClientUnaryCall;
  deleteJob(argument: jobs_jobs_pb.DeleteJobRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<jobs_jobs_pb.DeleteJobResponse>): grpc.ClientUnaryCall;
  deleteJob(argument: jobs_jobs_pb.DeleteJobRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<jobs_jobs_pb.DeleteJobResponse>): grpc.ClientUnaryCall;
}
