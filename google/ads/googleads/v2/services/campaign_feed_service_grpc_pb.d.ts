// GENERATED CODE -- DO NOT EDIT!

// package: google.ads.googleads.v2.services
// file: google/ads/googleads/v2/services/campaign_feed_service.proto

import * as google_ads_googleads_v2_services_campaign_feed_service_pb from "../../../../../google/ads/googleads/v2/services/campaign_feed_service_pb";
import * as google_ads_googleads_v2_resources_campaign_feed_pb from "../../../../../google/ads/googleads/v2/resources/campaign_feed_pb";
import * as grpc from "grpc";

interface ICampaignFeedServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getCampaignFeed: grpc.MethodDefinition<google_ads_googleads_v2_services_campaign_feed_service_pb.GetCampaignFeedRequest, google_ads_googleads_v2_resources_campaign_feed_pb.CampaignFeed>;
  mutateCampaignFeeds: grpc.MethodDefinition<google_ads_googleads_v2_services_campaign_feed_service_pb.MutateCampaignFeedsRequest, google_ads_googleads_v2_services_campaign_feed_service_pb.MutateCampaignFeedsResponse>;
}

export const CampaignFeedServiceService: ICampaignFeedServiceService;

export class CampaignFeedServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getCampaignFeed(argument: google_ads_googleads_v2_services_campaign_feed_service_pb.GetCampaignFeedRequest, callback: grpc.requestCallback<google_ads_googleads_v2_resources_campaign_feed_pb.CampaignFeed>): grpc.ClientUnaryCall;
  getCampaignFeed(argument: google_ads_googleads_v2_services_campaign_feed_service_pb.GetCampaignFeedRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_resources_campaign_feed_pb.CampaignFeed>): grpc.ClientUnaryCall;
  getCampaignFeed(argument: google_ads_googleads_v2_services_campaign_feed_service_pb.GetCampaignFeedRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_resources_campaign_feed_pb.CampaignFeed>): grpc.ClientUnaryCall;
  mutateCampaignFeeds(argument: google_ads_googleads_v2_services_campaign_feed_service_pb.MutateCampaignFeedsRequest, callback: grpc.requestCallback<google_ads_googleads_v2_services_campaign_feed_service_pb.MutateCampaignFeedsResponse>): grpc.ClientUnaryCall;
  mutateCampaignFeeds(argument: google_ads_googleads_v2_services_campaign_feed_service_pb.MutateCampaignFeedsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_services_campaign_feed_service_pb.MutateCampaignFeedsResponse>): grpc.ClientUnaryCall;
  mutateCampaignFeeds(argument: google_ads_googleads_v2_services_campaign_feed_service_pb.MutateCampaignFeedsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_services_campaign_feed_service_pb.MutateCampaignFeedsResponse>): grpc.ClientUnaryCall;
}
