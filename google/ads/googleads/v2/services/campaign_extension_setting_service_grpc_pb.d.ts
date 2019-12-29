// GENERATED CODE -- DO NOT EDIT!

// package: google.ads.googleads.v2.services
// file: google/ads/googleads/v2/services/campaign_extension_setting_service.proto

import * as google_ads_googleads_v2_services_campaign_extension_setting_service_pb from "../../../../../google/ads/googleads/v2/services/campaign_extension_setting_service_pb";
import * as google_ads_googleads_v2_resources_campaign_extension_setting_pb from "../../../../../google/ads/googleads/v2/resources/campaign_extension_setting_pb";
import * as grpc from "grpc";

interface ICampaignExtensionSettingServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getCampaignExtensionSetting: grpc.MethodDefinition<google_ads_googleads_v2_services_campaign_extension_setting_service_pb.GetCampaignExtensionSettingRequest, google_ads_googleads_v2_resources_campaign_extension_setting_pb.CampaignExtensionSetting>;
  mutateCampaignExtensionSettings: grpc.MethodDefinition<google_ads_googleads_v2_services_campaign_extension_setting_service_pb.MutateCampaignExtensionSettingsRequest, google_ads_googleads_v2_services_campaign_extension_setting_service_pb.MutateCampaignExtensionSettingsResponse>;
}

export const CampaignExtensionSettingServiceService: ICampaignExtensionSettingServiceService;

export class CampaignExtensionSettingServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getCampaignExtensionSetting(argument: google_ads_googleads_v2_services_campaign_extension_setting_service_pb.GetCampaignExtensionSettingRequest, callback: grpc.requestCallback<google_ads_googleads_v2_resources_campaign_extension_setting_pb.CampaignExtensionSetting>): grpc.ClientUnaryCall;
  getCampaignExtensionSetting(argument: google_ads_googleads_v2_services_campaign_extension_setting_service_pb.GetCampaignExtensionSettingRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_resources_campaign_extension_setting_pb.CampaignExtensionSetting>): grpc.ClientUnaryCall;
  getCampaignExtensionSetting(argument: google_ads_googleads_v2_services_campaign_extension_setting_service_pb.GetCampaignExtensionSettingRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_resources_campaign_extension_setting_pb.CampaignExtensionSetting>): grpc.ClientUnaryCall;
  mutateCampaignExtensionSettings(argument: google_ads_googleads_v2_services_campaign_extension_setting_service_pb.MutateCampaignExtensionSettingsRequest, callback: grpc.requestCallback<google_ads_googleads_v2_services_campaign_extension_setting_service_pb.MutateCampaignExtensionSettingsResponse>): grpc.ClientUnaryCall;
  mutateCampaignExtensionSettings(argument: google_ads_googleads_v2_services_campaign_extension_setting_service_pb.MutateCampaignExtensionSettingsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_services_campaign_extension_setting_service_pb.MutateCampaignExtensionSettingsResponse>): grpc.ClientUnaryCall;
  mutateCampaignExtensionSettings(argument: google_ads_googleads_v2_services_campaign_extension_setting_service_pb.MutateCampaignExtensionSettingsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_services_campaign_extension_setting_service_pb.MutateCampaignExtensionSettingsResponse>): grpc.ClientUnaryCall;
}
