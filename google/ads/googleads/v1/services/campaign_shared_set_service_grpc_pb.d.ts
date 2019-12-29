// GENERATED CODE -- DO NOT EDIT!

// package: google.ads.googleads.v1.services
// file: google/ads/googleads/v1/services/campaign_shared_set_service.proto

import * as google_ads_googleads_v1_services_campaign_shared_set_service_pb from "../../../../../google/ads/googleads/v1/services/campaign_shared_set_service_pb";
import * as google_ads_googleads_v1_resources_campaign_shared_set_pb from "../../../../../google/ads/googleads/v1/resources/campaign_shared_set_pb";
import * as grpc from "grpc";

interface ICampaignSharedSetServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getCampaignSharedSet: grpc.MethodDefinition<google_ads_googleads_v1_services_campaign_shared_set_service_pb.GetCampaignSharedSetRequest, google_ads_googleads_v1_resources_campaign_shared_set_pb.CampaignSharedSet>;
  mutateCampaignSharedSets: grpc.MethodDefinition<google_ads_googleads_v1_services_campaign_shared_set_service_pb.MutateCampaignSharedSetsRequest, google_ads_googleads_v1_services_campaign_shared_set_service_pb.MutateCampaignSharedSetsResponse>;
}

export const CampaignSharedSetServiceService: ICampaignSharedSetServiceService;

export class CampaignSharedSetServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getCampaignSharedSet(argument: google_ads_googleads_v1_services_campaign_shared_set_service_pb.GetCampaignSharedSetRequest, callback: grpc.requestCallback<google_ads_googleads_v1_resources_campaign_shared_set_pb.CampaignSharedSet>): grpc.ClientUnaryCall;
  getCampaignSharedSet(argument: google_ads_googleads_v1_services_campaign_shared_set_service_pb.GetCampaignSharedSetRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_resources_campaign_shared_set_pb.CampaignSharedSet>): grpc.ClientUnaryCall;
  getCampaignSharedSet(argument: google_ads_googleads_v1_services_campaign_shared_set_service_pb.GetCampaignSharedSetRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_resources_campaign_shared_set_pb.CampaignSharedSet>): grpc.ClientUnaryCall;
  mutateCampaignSharedSets(argument: google_ads_googleads_v1_services_campaign_shared_set_service_pb.MutateCampaignSharedSetsRequest, callback: grpc.requestCallback<google_ads_googleads_v1_services_campaign_shared_set_service_pb.MutateCampaignSharedSetsResponse>): grpc.ClientUnaryCall;
  mutateCampaignSharedSets(argument: google_ads_googleads_v1_services_campaign_shared_set_service_pb.MutateCampaignSharedSetsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_services_campaign_shared_set_service_pb.MutateCampaignSharedSetsResponse>): grpc.ClientUnaryCall;
  mutateCampaignSharedSets(argument: google_ads_googleads_v1_services_campaign_shared_set_service_pb.MutateCampaignSharedSetsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_services_campaign_shared_set_service_pb.MutateCampaignSharedSetsResponse>): grpc.ClientUnaryCall;
}
