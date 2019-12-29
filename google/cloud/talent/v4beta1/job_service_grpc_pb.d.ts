// GENERATED CODE -- DO NOT EDIT!

// package: google.cloud.talent.v4beta1
// file: google/cloud/talent/v4beta1/job_service.proto

import * as google_cloud_talent_v4beta1_job_service_pb from "../../../../google/cloud/talent/v4beta1/job_service_pb";
import * as google_cloud_talent_v4beta1_job_pb from "../../../../google/cloud/talent/v4beta1/job_pb";
import * as google_longrunning_operations_pb from "../../../../google/longrunning/operations_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "grpc";

interface IJobServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createJob: grpc.MethodDefinition<google_cloud_talent_v4beta1_job_service_pb.CreateJobRequest, google_cloud_talent_v4beta1_job_pb.Job>;
  batchCreateJobs: grpc.MethodDefinition<google_cloud_talent_v4beta1_job_service_pb.BatchCreateJobsRequest, google_longrunning_operations_pb.Operation>;
  getJob: grpc.MethodDefinition<google_cloud_talent_v4beta1_job_service_pb.GetJobRequest, google_cloud_talent_v4beta1_job_pb.Job>;
  updateJob: grpc.MethodDefinition<google_cloud_talent_v4beta1_job_service_pb.UpdateJobRequest, google_cloud_talent_v4beta1_job_pb.Job>;
  batchUpdateJobs: grpc.MethodDefinition<google_cloud_talent_v4beta1_job_service_pb.BatchUpdateJobsRequest, google_longrunning_operations_pb.Operation>;
  deleteJob: grpc.MethodDefinition<google_cloud_talent_v4beta1_job_service_pb.DeleteJobRequest, google_protobuf_empty_pb.Empty>;
  batchDeleteJobs: grpc.MethodDefinition<google_cloud_talent_v4beta1_job_service_pb.BatchDeleteJobsRequest, google_protobuf_empty_pb.Empty>;
  listJobs: grpc.MethodDefinition<google_cloud_talent_v4beta1_job_service_pb.ListJobsRequest, google_cloud_talent_v4beta1_job_service_pb.ListJobsResponse>;
  searchJobs: grpc.MethodDefinition<google_cloud_talent_v4beta1_job_service_pb.SearchJobsRequest, google_cloud_talent_v4beta1_job_service_pb.SearchJobsResponse>;
  searchJobsForAlert: grpc.MethodDefinition<google_cloud_talent_v4beta1_job_service_pb.SearchJobsRequest, google_cloud_talent_v4beta1_job_service_pb.SearchJobsResponse>;
}

export const JobServiceService: IJobServiceService;

export class JobServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  createJob(argument: google_cloud_talent_v4beta1_job_service_pb.CreateJobRequest, callback: grpc.requestCallback<google_cloud_talent_v4beta1_job_pb.Job>): grpc.ClientUnaryCall;
  createJob(argument: google_cloud_talent_v4beta1_job_service_pb.CreateJobRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_talent_v4beta1_job_pb.Job>): grpc.ClientUnaryCall;
  createJob(argument: google_cloud_talent_v4beta1_job_service_pb.CreateJobRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_talent_v4beta1_job_pb.Job>): grpc.ClientUnaryCall;
  batchCreateJobs(argument: google_cloud_talent_v4beta1_job_service_pb.BatchCreateJobsRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  batchCreateJobs(argument: google_cloud_talent_v4beta1_job_service_pb.BatchCreateJobsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  batchCreateJobs(argument: google_cloud_talent_v4beta1_job_service_pb.BatchCreateJobsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  getJob(argument: google_cloud_talent_v4beta1_job_service_pb.GetJobRequest, callback: grpc.requestCallback<google_cloud_talent_v4beta1_job_pb.Job>): grpc.ClientUnaryCall;
  getJob(argument: google_cloud_talent_v4beta1_job_service_pb.GetJobRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_talent_v4beta1_job_pb.Job>): grpc.ClientUnaryCall;
  getJob(argument: google_cloud_talent_v4beta1_job_service_pb.GetJobRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_talent_v4beta1_job_pb.Job>): grpc.ClientUnaryCall;
  updateJob(argument: google_cloud_talent_v4beta1_job_service_pb.UpdateJobRequest, callback: grpc.requestCallback<google_cloud_talent_v4beta1_job_pb.Job>): grpc.ClientUnaryCall;
  updateJob(argument: google_cloud_talent_v4beta1_job_service_pb.UpdateJobRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_talent_v4beta1_job_pb.Job>): grpc.ClientUnaryCall;
  updateJob(argument: google_cloud_talent_v4beta1_job_service_pb.UpdateJobRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_talent_v4beta1_job_pb.Job>): grpc.ClientUnaryCall;
  batchUpdateJobs(argument: google_cloud_talent_v4beta1_job_service_pb.BatchUpdateJobsRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  batchUpdateJobs(argument: google_cloud_talent_v4beta1_job_service_pb.BatchUpdateJobsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  batchUpdateJobs(argument: google_cloud_talent_v4beta1_job_service_pb.BatchUpdateJobsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  deleteJob(argument: google_cloud_talent_v4beta1_job_service_pb.DeleteJobRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteJob(argument: google_cloud_talent_v4beta1_job_service_pb.DeleteJobRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteJob(argument: google_cloud_talent_v4beta1_job_service_pb.DeleteJobRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  batchDeleteJobs(argument: google_cloud_talent_v4beta1_job_service_pb.BatchDeleteJobsRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  batchDeleteJobs(argument: google_cloud_talent_v4beta1_job_service_pb.BatchDeleteJobsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  batchDeleteJobs(argument: google_cloud_talent_v4beta1_job_service_pb.BatchDeleteJobsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  listJobs(argument: google_cloud_talent_v4beta1_job_service_pb.ListJobsRequest, callback: grpc.requestCallback<google_cloud_talent_v4beta1_job_service_pb.ListJobsResponse>): grpc.ClientUnaryCall;
  listJobs(argument: google_cloud_talent_v4beta1_job_service_pb.ListJobsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_talent_v4beta1_job_service_pb.ListJobsResponse>): grpc.ClientUnaryCall;
  listJobs(argument: google_cloud_talent_v4beta1_job_service_pb.ListJobsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_talent_v4beta1_job_service_pb.ListJobsResponse>): grpc.ClientUnaryCall;
  searchJobs(argument: google_cloud_talent_v4beta1_job_service_pb.SearchJobsRequest, callback: grpc.requestCallback<google_cloud_talent_v4beta1_job_service_pb.SearchJobsResponse>): grpc.ClientUnaryCall;
  searchJobs(argument: google_cloud_talent_v4beta1_job_service_pb.SearchJobsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_talent_v4beta1_job_service_pb.SearchJobsResponse>): grpc.ClientUnaryCall;
  searchJobs(argument: google_cloud_talent_v4beta1_job_service_pb.SearchJobsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_talent_v4beta1_job_service_pb.SearchJobsResponse>): grpc.ClientUnaryCall;
  searchJobsForAlert(argument: google_cloud_talent_v4beta1_job_service_pb.SearchJobsRequest, callback: grpc.requestCallback<google_cloud_talent_v4beta1_job_service_pb.SearchJobsResponse>): grpc.ClientUnaryCall;
  searchJobsForAlert(argument: google_cloud_talent_v4beta1_job_service_pb.SearchJobsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_talent_v4beta1_job_service_pb.SearchJobsResponse>): grpc.ClientUnaryCall;
  searchJobsForAlert(argument: google_cloud_talent_v4beta1_job_service_pb.SearchJobsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_talent_v4beta1_job_service_pb.SearchJobsResponse>): grpc.ClientUnaryCall;
}
