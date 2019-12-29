// GENERATED CODE -- DO NOT EDIT!

// package: google.ads.googleads.v2.services
// file: google/ads/googleads/v2/services/mobile_device_constant_service.proto

import * as google_ads_googleads_v2_services_mobile_device_constant_service_pb from "../../../../../google/ads/googleads/v2/services/mobile_device_constant_service_pb";
import * as google_ads_googleads_v2_resources_mobile_device_constant_pb from "../../../../../google/ads/googleads/v2/resources/mobile_device_constant_pb";
import * as grpc from "grpc";

interface IMobileDeviceConstantServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getMobileDeviceConstant: grpc.MethodDefinition<google_ads_googleads_v2_services_mobile_device_constant_service_pb.GetMobileDeviceConstantRequest, google_ads_googleads_v2_resources_mobile_device_constant_pb.MobileDeviceConstant>;
}

export const MobileDeviceConstantServiceService: IMobileDeviceConstantServiceService;

export class MobileDeviceConstantServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getMobileDeviceConstant(argument: google_ads_googleads_v2_services_mobile_device_constant_service_pb.GetMobileDeviceConstantRequest, callback: grpc.requestCallback<google_ads_googleads_v2_resources_mobile_device_constant_pb.MobileDeviceConstant>): grpc.ClientUnaryCall;
  getMobileDeviceConstant(argument: google_ads_googleads_v2_services_mobile_device_constant_service_pb.GetMobileDeviceConstantRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_resources_mobile_device_constant_pb.MobileDeviceConstant>): grpc.ClientUnaryCall;
  getMobileDeviceConstant(argument: google_ads_googleads_v2_services_mobile_device_constant_service_pb.GetMobileDeviceConstantRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_resources_mobile_device_constant_pb.MobileDeviceConstant>): grpc.ClientUnaryCall;
}
