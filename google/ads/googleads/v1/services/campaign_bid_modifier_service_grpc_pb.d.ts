// GENERATED CODE -- DO NOT EDIT!

// package: google.ads.googleads.v1.services
// file: google/ads/googleads/v1/services/campaign_bid_modifier_service.proto

import * as google_ads_googleads_v1_services_campaign_bid_modifier_service_pb from "../../../../../google/ads/googleads/v1/services/campaign_bid_modifier_service_pb";
import * as google_ads_googleads_v1_resources_campaign_bid_modifier_pb from "../../../../../google/ads/googleads/v1/resources/campaign_bid_modifier_pb";
import * as grpc from "grpc";

interface ICampaignBidModifierServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getCampaignBidModifier: grpc.MethodDefinition<google_ads_googleads_v1_services_campaign_bid_modifier_service_pb.GetCampaignBidModifierRequest, google_ads_googleads_v1_resources_campaign_bid_modifier_pb.CampaignBidModifier>;
  mutateCampaignBidModifiers: grpc.MethodDefinition<google_ads_googleads_v1_services_campaign_bid_modifier_service_pb.MutateCampaignBidModifiersRequest, google_ads_googleads_v1_services_campaign_bid_modifier_service_pb.MutateCampaignBidModifiersResponse>;
}

export const CampaignBidModifierServiceService: ICampaignBidModifierServiceService;

export class CampaignBidModifierServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getCampaignBidModifier(argument: google_ads_googleads_v1_services_campaign_bid_modifier_service_pb.GetCampaignBidModifierRequest, callback: grpc.requestCallback<google_ads_googleads_v1_resources_campaign_bid_modifier_pb.CampaignBidModifier>): grpc.ClientUnaryCall;
  getCampaignBidModifier(argument: google_ads_googleads_v1_services_campaign_bid_modifier_service_pb.GetCampaignBidModifierRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_resources_campaign_bid_modifier_pb.CampaignBidModifier>): grpc.ClientUnaryCall;
  getCampaignBidModifier(argument: google_ads_googleads_v1_services_campaign_bid_modifier_service_pb.GetCampaignBidModifierRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_resources_campaign_bid_modifier_pb.CampaignBidModifier>): grpc.ClientUnaryCall;
  mutateCampaignBidModifiers(argument: google_ads_googleads_v1_services_campaign_bid_modifier_service_pb.MutateCampaignBidModifiersRequest, callback: grpc.requestCallback<google_ads_googleads_v1_services_campaign_bid_modifier_service_pb.MutateCampaignBidModifiersResponse>): grpc.ClientUnaryCall;
  mutateCampaignBidModifiers(argument: google_ads_googleads_v1_services_campaign_bid_modifier_service_pb.MutateCampaignBidModifiersRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_services_campaign_bid_modifier_service_pb.MutateCampaignBidModifiersResponse>): grpc.ClientUnaryCall;
  mutateCampaignBidModifiers(argument: google_ads_googleads_v1_services_campaign_bid_modifier_service_pb.MutateCampaignBidModifiersRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_services_campaign_bid_modifier_service_pb.MutateCampaignBidModifiersResponse>): grpc.ClientUnaryCall;
}
