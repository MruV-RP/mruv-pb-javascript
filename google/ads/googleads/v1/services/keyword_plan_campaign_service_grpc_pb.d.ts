// GENERATED CODE -- DO NOT EDIT!

// package: google.ads.googleads.v1.services
// file: google/ads/googleads/v1/services/keyword_plan_campaign_service.proto

import * as google_ads_googleads_v1_services_keyword_plan_campaign_service_pb from "../../../../../google/ads/googleads/v1/services/keyword_plan_campaign_service_pb";
import * as google_ads_googleads_v1_resources_keyword_plan_campaign_pb from "../../../../../google/ads/googleads/v1/resources/keyword_plan_campaign_pb";
import * as grpc from "grpc";

interface IKeywordPlanCampaignServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getKeywordPlanCampaign: grpc.MethodDefinition<google_ads_googleads_v1_services_keyword_plan_campaign_service_pb.GetKeywordPlanCampaignRequest, google_ads_googleads_v1_resources_keyword_plan_campaign_pb.KeywordPlanCampaign>;
  mutateKeywordPlanCampaigns: grpc.MethodDefinition<google_ads_googleads_v1_services_keyword_plan_campaign_service_pb.MutateKeywordPlanCampaignsRequest, google_ads_googleads_v1_services_keyword_plan_campaign_service_pb.MutateKeywordPlanCampaignsResponse>;
}

export const KeywordPlanCampaignServiceService: IKeywordPlanCampaignServiceService;

export class KeywordPlanCampaignServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getKeywordPlanCampaign(argument: google_ads_googleads_v1_services_keyword_plan_campaign_service_pb.GetKeywordPlanCampaignRequest, callback: grpc.requestCallback<google_ads_googleads_v1_resources_keyword_plan_campaign_pb.KeywordPlanCampaign>): grpc.ClientUnaryCall;
  getKeywordPlanCampaign(argument: google_ads_googleads_v1_services_keyword_plan_campaign_service_pb.GetKeywordPlanCampaignRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_resources_keyword_plan_campaign_pb.KeywordPlanCampaign>): grpc.ClientUnaryCall;
  getKeywordPlanCampaign(argument: google_ads_googleads_v1_services_keyword_plan_campaign_service_pb.GetKeywordPlanCampaignRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_resources_keyword_plan_campaign_pb.KeywordPlanCampaign>): grpc.ClientUnaryCall;
  mutateKeywordPlanCampaigns(argument: google_ads_googleads_v1_services_keyword_plan_campaign_service_pb.MutateKeywordPlanCampaignsRequest, callback: grpc.requestCallback<google_ads_googleads_v1_services_keyword_plan_campaign_service_pb.MutateKeywordPlanCampaignsResponse>): grpc.ClientUnaryCall;
  mutateKeywordPlanCampaigns(argument: google_ads_googleads_v1_services_keyword_plan_campaign_service_pb.MutateKeywordPlanCampaignsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_services_keyword_plan_campaign_service_pb.MutateKeywordPlanCampaignsResponse>): grpc.ClientUnaryCall;
  mutateKeywordPlanCampaigns(argument: google_ads_googleads_v1_services_keyword_plan_campaign_service_pb.MutateKeywordPlanCampaignsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_services_keyword_plan_campaign_service_pb.MutateKeywordPlanCampaignsResponse>): grpc.ClientUnaryCall;
}
