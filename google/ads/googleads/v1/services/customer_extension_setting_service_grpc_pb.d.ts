// GENERATED CODE -- DO NOT EDIT!

// package: google.ads.googleads.v1.services
// file: google/ads/googleads/v1/services/customer_extension_setting_service.proto

import * as google_ads_googleads_v1_services_customer_extension_setting_service_pb from "../../../../../google/ads/googleads/v1/services/customer_extension_setting_service_pb";
import * as google_ads_googleads_v1_resources_customer_extension_setting_pb from "../../../../../google/ads/googleads/v1/resources/customer_extension_setting_pb";
import * as grpc from "grpc";

interface ICustomerExtensionSettingServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getCustomerExtensionSetting: grpc.MethodDefinition<google_ads_googleads_v1_services_customer_extension_setting_service_pb.GetCustomerExtensionSettingRequest, google_ads_googleads_v1_resources_customer_extension_setting_pb.CustomerExtensionSetting>;
  mutateCustomerExtensionSettings: grpc.MethodDefinition<google_ads_googleads_v1_services_customer_extension_setting_service_pb.MutateCustomerExtensionSettingsRequest, google_ads_googleads_v1_services_customer_extension_setting_service_pb.MutateCustomerExtensionSettingsResponse>;
}

export const CustomerExtensionSettingServiceService: ICustomerExtensionSettingServiceService;

export class CustomerExtensionSettingServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getCustomerExtensionSetting(argument: google_ads_googleads_v1_services_customer_extension_setting_service_pb.GetCustomerExtensionSettingRequest, callback: grpc.requestCallback<google_ads_googleads_v1_resources_customer_extension_setting_pb.CustomerExtensionSetting>): grpc.ClientUnaryCall;
  getCustomerExtensionSetting(argument: google_ads_googleads_v1_services_customer_extension_setting_service_pb.GetCustomerExtensionSettingRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_resources_customer_extension_setting_pb.CustomerExtensionSetting>): grpc.ClientUnaryCall;
  getCustomerExtensionSetting(argument: google_ads_googleads_v1_services_customer_extension_setting_service_pb.GetCustomerExtensionSettingRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_resources_customer_extension_setting_pb.CustomerExtensionSetting>): grpc.ClientUnaryCall;
  mutateCustomerExtensionSettings(argument: google_ads_googleads_v1_services_customer_extension_setting_service_pb.MutateCustomerExtensionSettingsRequest, callback: grpc.requestCallback<google_ads_googleads_v1_services_customer_extension_setting_service_pb.MutateCustomerExtensionSettingsResponse>): grpc.ClientUnaryCall;
  mutateCustomerExtensionSettings(argument: google_ads_googleads_v1_services_customer_extension_setting_service_pb.MutateCustomerExtensionSettingsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_services_customer_extension_setting_service_pb.MutateCustomerExtensionSettingsResponse>): grpc.ClientUnaryCall;
  mutateCustomerExtensionSettings(argument: google_ads_googleads_v1_services_customer_extension_setting_service_pb.MutateCustomerExtensionSettingsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_services_customer_extension_setting_service_pb.MutateCustomerExtensionSettingsResponse>): grpc.ClientUnaryCall;
}
