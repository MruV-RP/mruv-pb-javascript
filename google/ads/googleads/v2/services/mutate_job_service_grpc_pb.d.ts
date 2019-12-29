// GENERATED CODE -- DO NOT EDIT!

// package: google.ads.googleads.v2.services
// file: google/ads/googleads/v2/services/mutate_job_service.proto

import * as google_ads_googleads_v2_services_mutate_job_service_pb from "../../../../../google/ads/googleads/v2/services/mutate_job_service_pb";
import * as google_ads_googleads_v2_resources_mutate_job_pb from "../../../../../google/ads/googleads/v2/resources/mutate_job_pb";
import * as google_longrunning_operations_pb from "../../../../../google/longrunning/operations_pb";
import * as grpc from "grpc";

interface IMutateJobServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createMutateJob: grpc.MethodDefinition<google_ads_googleads_v2_services_mutate_job_service_pb.CreateMutateJobRequest, google_ads_googleads_v2_services_mutate_job_service_pb.CreateMutateJobResponse>;
  getMutateJob: grpc.MethodDefinition<google_ads_googleads_v2_services_mutate_job_service_pb.GetMutateJobRequest, google_ads_googleads_v2_resources_mutate_job_pb.MutateJob>;
  listMutateJobResults: grpc.MethodDefinition<google_ads_googleads_v2_services_mutate_job_service_pb.ListMutateJobResultsRequest, google_ads_googleads_v2_services_mutate_job_service_pb.ListMutateJobResultsResponse>;
  runMutateJob: grpc.MethodDefinition<google_ads_googleads_v2_services_mutate_job_service_pb.RunMutateJobRequest, google_longrunning_operations_pb.Operation>;
  addMutateJobOperations: grpc.MethodDefinition<google_ads_googleads_v2_services_mutate_job_service_pb.AddMutateJobOperationsRequest, google_ads_googleads_v2_services_mutate_job_service_pb.AddMutateJobOperationsResponse>;
}

export const MutateJobServiceService: IMutateJobServiceService;

export class MutateJobServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  createMutateJob(argument: google_ads_googleads_v2_services_mutate_job_service_pb.CreateMutateJobRequest, callback: grpc.requestCallback<google_ads_googleads_v2_services_mutate_job_service_pb.CreateMutateJobResponse>): grpc.ClientUnaryCall;
  createMutateJob(argument: google_ads_googleads_v2_services_mutate_job_service_pb.CreateMutateJobRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_services_mutate_job_service_pb.CreateMutateJobResponse>): grpc.ClientUnaryCall;
  createMutateJob(argument: google_ads_googleads_v2_services_mutate_job_service_pb.CreateMutateJobRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_services_mutate_job_service_pb.CreateMutateJobResponse>): grpc.ClientUnaryCall;
  getMutateJob(argument: google_ads_googleads_v2_services_mutate_job_service_pb.GetMutateJobRequest, callback: grpc.requestCallback<google_ads_googleads_v2_resources_mutate_job_pb.MutateJob>): grpc.ClientUnaryCall;
  getMutateJob(argument: google_ads_googleads_v2_services_mutate_job_service_pb.GetMutateJobRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_resources_mutate_job_pb.MutateJob>): grpc.ClientUnaryCall;
  getMutateJob(argument: google_ads_googleads_v2_services_mutate_job_service_pb.GetMutateJobRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_resources_mutate_job_pb.MutateJob>): grpc.ClientUnaryCall;
  listMutateJobResults(argument: google_ads_googleads_v2_services_mutate_job_service_pb.ListMutateJobResultsRequest, callback: grpc.requestCallback<google_ads_googleads_v2_services_mutate_job_service_pb.ListMutateJobResultsResponse>): grpc.ClientUnaryCall;
  listMutateJobResults(argument: google_ads_googleads_v2_services_mutate_job_service_pb.ListMutateJobResultsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_services_mutate_job_service_pb.ListMutateJobResultsResponse>): grpc.ClientUnaryCall;
  listMutateJobResults(argument: google_ads_googleads_v2_services_mutate_job_service_pb.ListMutateJobResultsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_services_mutate_job_service_pb.ListMutateJobResultsResponse>): grpc.ClientUnaryCall;
  runMutateJob(argument: google_ads_googleads_v2_services_mutate_job_service_pb.RunMutateJobRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  runMutateJob(argument: google_ads_googleads_v2_services_mutate_job_service_pb.RunMutateJobRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  runMutateJob(argument: google_ads_googleads_v2_services_mutate_job_service_pb.RunMutateJobRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  addMutateJobOperations(argument: google_ads_googleads_v2_services_mutate_job_service_pb.AddMutateJobOperationsRequest, callback: grpc.requestCallback<google_ads_googleads_v2_services_mutate_job_service_pb.AddMutateJobOperationsResponse>): grpc.ClientUnaryCall;
  addMutateJobOperations(argument: google_ads_googleads_v2_services_mutate_job_service_pb.AddMutateJobOperationsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_services_mutate_job_service_pb.AddMutateJobOperationsResponse>): grpc.ClientUnaryCall;
  addMutateJobOperations(argument: google_ads_googleads_v2_services_mutate_job_service_pb.AddMutateJobOperationsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_services_mutate_job_service_pb.AddMutateJobOperationsResponse>): grpc.ClientUnaryCall;
}
