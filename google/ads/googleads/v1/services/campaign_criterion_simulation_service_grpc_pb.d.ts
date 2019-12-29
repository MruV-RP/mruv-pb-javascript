// GENERATED CODE -- DO NOT EDIT!

// package: google.ads.googleads.v1.services
// file: google/ads/googleads/v1/services/campaign_criterion_simulation_service.proto

import * as google_ads_googleads_v1_services_campaign_criterion_simulation_service_pb from "../../../../../google/ads/googleads/v1/services/campaign_criterion_simulation_service_pb";
import * as google_ads_googleads_v1_resources_campaign_criterion_simulation_pb from "../../../../../google/ads/googleads/v1/resources/campaign_criterion_simulation_pb";
import * as grpc from "grpc";

interface ICampaignCriterionSimulationServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getCampaignCriterionSimulation: grpc.MethodDefinition<google_ads_googleads_v1_services_campaign_criterion_simulation_service_pb.GetCampaignCriterionSimulationRequest, google_ads_googleads_v1_resources_campaign_criterion_simulation_pb.CampaignCriterionSimulation>;
}

export const CampaignCriterionSimulationServiceService: ICampaignCriterionSimulationServiceService;

export class CampaignCriterionSimulationServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getCampaignCriterionSimulation(argument: google_ads_googleads_v1_services_campaign_criterion_simulation_service_pb.GetCampaignCriterionSimulationRequest, callback: grpc.requestCallback<google_ads_googleads_v1_resources_campaign_criterion_simulation_pb.CampaignCriterionSimulation>): grpc.ClientUnaryCall;
  getCampaignCriterionSimulation(argument: google_ads_googleads_v1_services_campaign_criterion_simulation_service_pb.GetCampaignCriterionSimulationRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_resources_campaign_criterion_simulation_pb.CampaignCriterionSimulation>): grpc.ClientUnaryCall;
  getCampaignCriterionSimulation(argument: google_ads_googleads_v1_services_campaign_criterion_simulation_service_pb.GetCampaignCriterionSimulationRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_resources_campaign_criterion_simulation_pb.CampaignCriterionSimulation>): grpc.ClientUnaryCall;
}
