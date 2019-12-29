// GENERATED CODE -- DO NOT EDIT!

// package: google.ads.googleads.v1.services
// file: google/ads/googleads/v1/services/ad_group_extension_setting_service.proto

import * as google_ads_googleads_v1_services_ad_group_extension_setting_service_pb from "../../../../../google/ads/googleads/v1/services/ad_group_extension_setting_service_pb";
import * as google_ads_googleads_v1_resources_ad_group_extension_setting_pb from "../../../../../google/ads/googleads/v1/resources/ad_group_extension_setting_pb";
import * as grpc from "grpc";

interface IAdGroupExtensionSettingServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getAdGroupExtensionSetting: grpc.MethodDefinition<google_ads_googleads_v1_services_ad_group_extension_setting_service_pb.GetAdGroupExtensionSettingRequest, google_ads_googleads_v1_resources_ad_group_extension_setting_pb.AdGroupExtensionSetting>;
  mutateAdGroupExtensionSettings: grpc.MethodDefinition<google_ads_googleads_v1_services_ad_group_extension_setting_service_pb.MutateAdGroupExtensionSettingsRequest, google_ads_googleads_v1_services_ad_group_extension_setting_service_pb.MutateAdGroupExtensionSettingsResponse>;
}

export const AdGroupExtensionSettingServiceService: IAdGroupExtensionSettingServiceService;

export class AdGroupExtensionSettingServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getAdGroupExtensionSetting(argument: google_ads_googleads_v1_services_ad_group_extension_setting_service_pb.GetAdGroupExtensionSettingRequest, callback: grpc.requestCallback<google_ads_googleads_v1_resources_ad_group_extension_setting_pb.AdGroupExtensionSetting>): grpc.ClientUnaryCall;
  getAdGroupExtensionSetting(argument: google_ads_googleads_v1_services_ad_group_extension_setting_service_pb.GetAdGroupExtensionSettingRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_resources_ad_group_extension_setting_pb.AdGroupExtensionSetting>): grpc.ClientUnaryCall;
  getAdGroupExtensionSetting(argument: google_ads_googleads_v1_services_ad_group_extension_setting_service_pb.GetAdGroupExtensionSettingRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_resources_ad_group_extension_setting_pb.AdGroupExtensionSetting>): grpc.ClientUnaryCall;
  mutateAdGroupExtensionSettings(argument: google_ads_googleads_v1_services_ad_group_extension_setting_service_pb.MutateAdGroupExtensionSettingsRequest, callback: grpc.requestCallback<google_ads_googleads_v1_services_ad_group_extension_setting_service_pb.MutateAdGroupExtensionSettingsResponse>): grpc.ClientUnaryCall;
  mutateAdGroupExtensionSettings(argument: google_ads_googleads_v1_services_ad_group_extension_setting_service_pb.MutateAdGroupExtensionSettingsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_services_ad_group_extension_setting_service_pb.MutateAdGroupExtensionSettingsResponse>): grpc.ClientUnaryCall;
  mutateAdGroupExtensionSettings(argument: google_ads_googleads_v1_services_ad_group_extension_setting_service_pb.MutateAdGroupExtensionSettingsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_services_ad_group_extension_setting_service_pb.MutateAdGroupExtensionSettingsResponse>): grpc.ClientUnaryCall;
}
