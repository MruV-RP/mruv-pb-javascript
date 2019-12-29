// GENERATED CODE -- DO NOT EDIT!

// package: google.ads.googleads.v2.services
// file: google/ads/googleads/v2/services/campaign_label_service.proto

import * as google_ads_googleads_v2_services_campaign_label_service_pb from "../../../../../google/ads/googleads/v2/services/campaign_label_service_pb";
import * as google_ads_googleads_v2_resources_campaign_label_pb from "../../../../../google/ads/googleads/v2/resources/campaign_label_pb";
import * as grpc from "grpc";

interface ICampaignLabelServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getCampaignLabel: grpc.MethodDefinition<google_ads_googleads_v2_services_campaign_label_service_pb.GetCampaignLabelRequest, google_ads_googleads_v2_resources_campaign_label_pb.CampaignLabel>;
  mutateCampaignLabels: grpc.MethodDefinition<google_ads_googleads_v2_services_campaign_label_service_pb.MutateCampaignLabelsRequest, google_ads_googleads_v2_services_campaign_label_service_pb.MutateCampaignLabelsResponse>;
}

export const CampaignLabelServiceService: ICampaignLabelServiceService;

export class CampaignLabelServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getCampaignLabel(argument: google_ads_googleads_v2_services_campaign_label_service_pb.GetCampaignLabelRequest, callback: grpc.requestCallback<google_ads_googleads_v2_resources_campaign_label_pb.CampaignLabel>): grpc.ClientUnaryCall;
  getCampaignLabel(argument: google_ads_googleads_v2_services_campaign_label_service_pb.GetCampaignLabelRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_resources_campaign_label_pb.CampaignLabel>): grpc.ClientUnaryCall;
  getCampaignLabel(argument: google_ads_googleads_v2_services_campaign_label_service_pb.GetCampaignLabelRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_resources_campaign_label_pb.CampaignLabel>): grpc.ClientUnaryCall;
  mutateCampaignLabels(argument: google_ads_googleads_v2_services_campaign_label_service_pb.MutateCampaignLabelsRequest, callback: grpc.requestCallback<google_ads_googleads_v2_services_campaign_label_service_pb.MutateCampaignLabelsResponse>): grpc.ClientUnaryCall;
  mutateCampaignLabels(argument: google_ads_googleads_v2_services_campaign_label_service_pb.MutateCampaignLabelsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_services_campaign_label_service_pb.MutateCampaignLabelsResponse>): grpc.ClientUnaryCall;
  mutateCampaignLabels(argument: google_ads_googleads_v2_services_campaign_label_service_pb.MutateCampaignLabelsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_services_campaign_label_service_pb.MutateCampaignLabelsResponse>): grpc.ClientUnaryCall;
}
