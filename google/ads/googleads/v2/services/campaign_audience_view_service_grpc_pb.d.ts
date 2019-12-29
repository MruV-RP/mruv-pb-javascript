// GENERATED CODE -- DO NOT EDIT!

// package: google.ads.googleads.v2.services
// file: google/ads/googleads/v2/services/campaign_audience_view_service.proto

import * as google_ads_googleads_v2_services_campaign_audience_view_service_pb from "../../../../../google/ads/googleads/v2/services/campaign_audience_view_service_pb";
import * as google_ads_googleads_v2_resources_campaign_audience_view_pb from "../../../../../google/ads/googleads/v2/resources/campaign_audience_view_pb";
import * as grpc from "grpc";

interface ICampaignAudienceViewServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getCampaignAudienceView: grpc.MethodDefinition<google_ads_googleads_v2_services_campaign_audience_view_service_pb.GetCampaignAudienceViewRequest, google_ads_googleads_v2_resources_campaign_audience_view_pb.CampaignAudienceView>;
}

export const CampaignAudienceViewServiceService: ICampaignAudienceViewServiceService;

export class CampaignAudienceViewServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getCampaignAudienceView(argument: google_ads_googleads_v2_services_campaign_audience_view_service_pb.GetCampaignAudienceViewRequest, callback: grpc.requestCallback<google_ads_googleads_v2_resources_campaign_audience_view_pb.CampaignAudienceView>): grpc.ClientUnaryCall;
  getCampaignAudienceView(argument: google_ads_googleads_v2_services_campaign_audience_view_service_pb.GetCampaignAudienceViewRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_resources_campaign_audience_view_pb.CampaignAudienceView>): grpc.ClientUnaryCall;
  getCampaignAudienceView(argument: google_ads_googleads_v2_services_campaign_audience_view_service_pb.GetCampaignAudienceViewRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_resources_campaign_audience_view_pb.CampaignAudienceView>): grpc.ClientUnaryCall;
}
