// GENERATED CODE -- DO NOT EDIT!

// package: google.ads.googleads.v1.services
// file: google/ads/googleads/v1/services/campaign_criterion_service.proto

import * as google_ads_googleads_v1_services_campaign_criterion_service_pb from "../../../../../google/ads/googleads/v1/services/campaign_criterion_service_pb";
import * as google_ads_googleads_v1_resources_campaign_criterion_pb from "../../../../../google/ads/googleads/v1/resources/campaign_criterion_pb";
import * as grpc from "grpc";

interface ICampaignCriterionServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getCampaignCriterion: grpc.MethodDefinition<google_ads_googleads_v1_services_campaign_criterion_service_pb.GetCampaignCriterionRequest, google_ads_googleads_v1_resources_campaign_criterion_pb.CampaignCriterion>;
  mutateCampaignCriteria: grpc.MethodDefinition<google_ads_googleads_v1_services_campaign_criterion_service_pb.MutateCampaignCriteriaRequest, google_ads_googleads_v1_services_campaign_criterion_service_pb.MutateCampaignCriteriaResponse>;
}

export const CampaignCriterionServiceService: ICampaignCriterionServiceService;

export class CampaignCriterionServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getCampaignCriterion(argument: google_ads_googleads_v1_services_campaign_criterion_service_pb.GetCampaignCriterionRequest, callback: grpc.requestCallback<google_ads_googleads_v1_resources_campaign_criterion_pb.CampaignCriterion>): grpc.ClientUnaryCall;
  getCampaignCriterion(argument: google_ads_googleads_v1_services_campaign_criterion_service_pb.GetCampaignCriterionRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_resources_campaign_criterion_pb.CampaignCriterion>): grpc.ClientUnaryCall;
  getCampaignCriterion(argument: google_ads_googleads_v1_services_campaign_criterion_service_pb.GetCampaignCriterionRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_resources_campaign_criterion_pb.CampaignCriterion>): grpc.ClientUnaryCall;
  mutateCampaignCriteria(argument: google_ads_googleads_v1_services_campaign_criterion_service_pb.MutateCampaignCriteriaRequest, callback: grpc.requestCallback<google_ads_googleads_v1_services_campaign_criterion_service_pb.MutateCampaignCriteriaResponse>): grpc.ClientUnaryCall;
  mutateCampaignCriteria(argument: google_ads_googleads_v1_services_campaign_criterion_service_pb.MutateCampaignCriteriaRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_services_campaign_criterion_service_pb.MutateCampaignCriteriaResponse>): grpc.ClientUnaryCall;
  mutateCampaignCriteria(argument: google_ads_googleads_v1_services_campaign_criterion_service_pb.MutateCampaignCriteriaRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_services_campaign_criterion_service_pb.MutateCampaignCriteriaResponse>): grpc.ClientUnaryCall;
}
