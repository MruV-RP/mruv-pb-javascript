// GENERATED CODE -- DO NOT EDIT!

// package: google.ads.googleads.v1.services
// file: google/ads/googleads/v1/services/campaign_service.proto

import * as google_ads_googleads_v1_services_campaign_service_pb from "../../../../../google/ads/googleads/v1/services/campaign_service_pb";
import * as google_ads_googleads_v1_resources_campaign_pb from "../../../../../google/ads/googleads/v1/resources/campaign_pb";
import * as grpc from "grpc";

interface ICampaignServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getCampaign: grpc.MethodDefinition<google_ads_googleads_v1_services_campaign_service_pb.GetCampaignRequest, google_ads_googleads_v1_resources_campaign_pb.Campaign>;
  mutateCampaigns: grpc.MethodDefinition<google_ads_googleads_v1_services_campaign_service_pb.MutateCampaignsRequest, google_ads_googleads_v1_services_campaign_service_pb.MutateCampaignsResponse>;
}

export const CampaignServiceService: ICampaignServiceService;

export class CampaignServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getCampaign(argument: google_ads_googleads_v1_services_campaign_service_pb.GetCampaignRequest, callback: grpc.requestCallback<google_ads_googleads_v1_resources_campaign_pb.Campaign>): grpc.ClientUnaryCall;
  getCampaign(argument: google_ads_googleads_v1_services_campaign_service_pb.GetCampaignRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_resources_campaign_pb.Campaign>): grpc.ClientUnaryCall;
  getCampaign(argument: google_ads_googleads_v1_services_campaign_service_pb.GetCampaignRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_resources_campaign_pb.Campaign>): grpc.ClientUnaryCall;
  mutateCampaigns(argument: google_ads_googleads_v1_services_campaign_service_pb.MutateCampaignsRequest, callback: grpc.requestCallback<google_ads_googleads_v1_services_campaign_service_pb.MutateCampaignsResponse>): grpc.ClientUnaryCall;
  mutateCampaigns(argument: google_ads_googleads_v1_services_campaign_service_pb.MutateCampaignsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_services_campaign_service_pb.MutateCampaignsResponse>): grpc.ClientUnaryCall;
  mutateCampaigns(argument: google_ads_googleads_v1_services_campaign_service_pb.MutateCampaignsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_services_campaign_service_pb.MutateCampaignsResponse>): grpc.ClientUnaryCall;
}
