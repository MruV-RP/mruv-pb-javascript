// GENERATED CODE -- DO NOT EDIT!

// package: google.ads.googleads.v2.services
// file: google/ads/googleads/v2/services/campaign_budget_service.proto

import * as google_ads_googleads_v2_services_campaign_budget_service_pb from "../../../../../google/ads/googleads/v2/services/campaign_budget_service_pb";
import * as google_ads_googleads_v2_resources_campaign_budget_pb from "../../../../../google/ads/googleads/v2/resources/campaign_budget_pb";
import * as grpc from "grpc";

interface ICampaignBudgetServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getCampaignBudget: grpc.MethodDefinition<google_ads_googleads_v2_services_campaign_budget_service_pb.GetCampaignBudgetRequest, google_ads_googleads_v2_resources_campaign_budget_pb.CampaignBudget>;
  mutateCampaignBudgets: grpc.MethodDefinition<google_ads_googleads_v2_services_campaign_budget_service_pb.MutateCampaignBudgetsRequest, google_ads_googleads_v2_services_campaign_budget_service_pb.MutateCampaignBudgetsResponse>;
}

export const CampaignBudgetServiceService: ICampaignBudgetServiceService;

export class CampaignBudgetServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getCampaignBudget(argument: google_ads_googleads_v2_services_campaign_budget_service_pb.GetCampaignBudgetRequest, callback: grpc.requestCallback<google_ads_googleads_v2_resources_campaign_budget_pb.CampaignBudget>): grpc.ClientUnaryCall;
  getCampaignBudget(argument: google_ads_googleads_v2_services_campaign_budget_service_pb.GetCampaignBudgetRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_resources_campaign_budget_pb.CampaignBudget>): grpc.ClientUnaryCall;
  getCampaignBudget(argument: google_ads_googleads_v2_services_campaign_budget_service_pb.GetCampaignBudgetRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_resources_campaign_budget_pb.CampaignBudget>): grpc.ClientUnaryCall;
  mutateCampaignBudgets(argument: google_ads_googleads_v2_services_campaign_budget_service_pb.MutateCampaignBudgetsRequest, callback: grpc.requestCallback<google_ads_googleads_v2_services_campaign_budget_service_pb.MutateCampaignBudgetsResponse>): grpc.ClientUnaryCall;
  mutateCampaignBudgets(argument: google_ads_googleads_v2_services_campaign_budget_service_pb.MutateCampaignBudgetsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_services_campaign_budget_service_pb.MutateCampaignBudgetsResponse>): grpc.ClientUnaryCall;
  mutateCampaignBudgets(argument: google_ads_googleads_v2_services_campaign_budget_service_pb.MutateCampaignBudgetsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_services_campaign_budget_service_pb.MutateCampaignBudgetsResponse>): grpc.ClientUnaryCall;
}
