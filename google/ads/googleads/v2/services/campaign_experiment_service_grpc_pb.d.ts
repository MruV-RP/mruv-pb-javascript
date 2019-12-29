// GENERATED CODE -- DO NOT EDIT!

// package: google.ads.googleads.v2.services
// file: google/ads/googleads/v2/services/campaign_experiment_service.proto

import * as google_ads_googleads_v2_services_campaign_experiment_service_pb from "../../../../../google/ads/googleads/v2/services/campaign_experiment_service_pb";
import * as google_ads_googleads_v2_resources_campaign_experiment_pb from "../../../../../google/ads/googleads/v2/resources/campaign_experiment_pb";
import * as google_longrunning_operations_pb from "../../../../../google/longrunning/operations_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "grpc";

interface ICampaignExperimentServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getCampaignExperiment: grpc.MethodDefinition<google_ads_googleads_v2_services_campaign_experiment_service_pb.GetCampaignExperimentRequest, google_ads_googleads_v2_resources_campaign_experiment_pb.CampaignExperiment>;
  createCampaignExperiment: grpc.MethodDefinition<google_ads_googleads_v2_services_campaign_experiment_service_pb.CreateCampaignExperimentRequest, google_longrunning_operations_pb.Operation>;
  mutateCampaignExperiments: grpc.MethodDefinition<google_ads_googleads_v2_services_campaign_experiment_service_pb.MutateCampaignExperimentsRequest, google_ads_googleads_v2_services_campaign_experiment_service_pb.MutateCampaignExperimentsResponse>;
  graduateCampaignExperiment: grpc.MethodDefinition<google_ads_googleads_v2_services_campaign_experiment_service_pb.GraduateCampaignExperimentRequest, google_ads_googleads_v2_services_campaign_experiment_service_pb.GraduateCampaignExperimentResponse>;
  promoteCampaignExperiment: grpc.MethodDefinition<google_ads_googleads_v2_services_campaign_experiment_service_pb.PromoteCampaignExperimentRequest, google_longrunning_operations_pb.Operation>;
  endCampaignExperiment: grpc.MethodDefinition<google_ads_googleads_v2_services_campaign_experiment_service_pb.EndCampaignExperimentRequest, google_protobuf_empty_pb.Empty>;
  listCampaignExperimentAsyncErrors: grpc.MethodDefinition<google_ads_googleads_v2_services_campaign_experiment_service_pb.ListCampaignExperimentAsyncErrorsRequest, google_ads_googleads_v2_services_campaign_experiment_service_pb.ListCampaignExperimentAsyncErrorsResponse>;
}

export const CampaignExperimentServiceService: ICampaignExperimentServiceService;

export class CampaignExperimentServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getCampaignExperiment(argument: google_ads_googleads_v2_services_campaign_experiment_service_pb.GetCampaignExperimentRequest, callback: grpc.requestCallback<google_ads_googleads_v2_resources_campaign_experiment_pb.CampaignExperiment>): grpc.ClientUnaryCall;
  getCampaignExperiment(argument: google_ads_googleads_v2_services_campaign_experiment_service_pb.GetCampaignExperimentRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_resources_campaign_experiment_pb.CampaignExperiment>): grpc.ClientUnaryCall;
  getCampaignExperiment(argument: google_ads_googleads_v2_services_campaign_experiment_service_pb.GetCampaignExperimentRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_resources_campaign_experiment_pb.CampaignExperiment>): grpc.ClientUnaryCall;
  createCampaignExperiment(argument: google_ads_googleads_v2_services_campaign_experiment_service_pb.CreateCampaignExperimentRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  createCampaignExperiment(argument: google_ads_googleads_v2_services_campaign_experiment_service_pb.CreateCampaignExperimentRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  createCampaignExperiment(argument: google_ads_googleads_v2_services_campaign_experiment_service_pb.CreateCampaignExperimentRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  mutateCampaignExperiments(argument: google_ads_googleads_v2_services_campaign_experiment_service_pb.MutateCampaignExperimentsRequest, callback: grpc.requestCallback<google_ads_googleads_v2_services_campaign_experiment_service_pb.MutateCampaignExperimentsResponse>): grpc.ClientUnaryCall;
  mutateCampaignExperiments(argument: google_ads_googleads_v2_services_campaign_experiment_service_pb.MutateCampaignExperimentsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_services_campaign_experiment_service_pb.MutateCampaignExperimentsResponse>): grpc.ClientUnaryCall;
  mutateCampaignExperiments(argument: google_ads_googleads_v2_services_campaign_experiment_service_pb.MutateCampaignExperimentsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_services_campaign_experiment_service_pb.MutateCampaignExperimentsResponse>): grpc.ClientUnaryCall;
  graduateCampaignExperiment(argument: google_ads_googleads_v2_services_campaign_experiment_service_pb.GraduateCampaignExperimentRequest, callback: grpc.requestCallback<google_ads_googleads_v2_services_campaign_experiment_service_pb.GraduateCampaignExperimentResponse>): grpc.ClientUnaryCall;
  graduateCampaignExperiment(argument: google_ads_googleads_v2_services_campaign_experiment_service_pb.GraduateCampaignExperimentRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_services_campaign_experiment_service_pb.GraduateCampaignExperimentResponse>): grpc.ClientUnaryCall;
  graduateCampaignExperiment(argument: google_ads_googleads_v2_services_campaign_experiment_service_pb.GraduateCampaignExperimentRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_services_campaign_experiment_service_pb.GraduateCampaignExperimentResponse>): grpc.ClientUnaryCall;
  promoteCampaignExperiment(argument: google_ads_googleads_v2_services_campaign_experiment_service_pb.PromoteCampaignExperimentRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  promoteCampaignExperiment(argument: google_ads_googleads_v2_services_campaign_experiment_service_pb.PromoteCampaignExperimentRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  promoteCampaignExperiment(argument: google_ads_googleads_v2_services_campaign_experiment_service_pb.PromoteCampaignExperimentRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  endCampaignExperiment(argument: google_ads_googleads_v2_services_campaign_experiment_service_pb.EndCampaignExperimentRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  endCampaignExperiment(argument: google_ads_googleads_v2_services_campaign_experiment_service_pb.EndCampaignExperimentRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  endCampaignExperiment(argument: google_ads_googleads_v2_services_campaign_experiment_service_pb.EndCampaignExperimentRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  listCampaignExperimentAsyncErrors(argument: google_ads_googleads_v2_services_campaign_experiment_service_pb.ListCampaignExperimentAsyncErrorsRequest, callback: grpc.requestCallback<google_ads_googleads_v2_services_campaign_experiment_service_pb.ListCampaignExperimentAsyncErrorsResponse>): grpc.ClientUnaryCall;
  listCampaignExperimentAsyncErrors(argument: google_ads_googleads_v2_services_campaign_experiment_service_pb.ListCampaignExperimentAsyncErrorsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_services_campaign_experiment_service_pb.ListCampaignExperimentAsyncErrorsResponse>): grpc.ClientUnaryCall;
  listCampaignExperimentAsyncErrors(argument: google_ads_googleads_v2_services_campaign_experiment_service_pb.ListCampaignExperimentAsyncErrorsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_services_campaign_experiment_service_pb.ListCampaignExperimentAsyncErrorsResponse>): grpc.ClientUnaryCall;
}
