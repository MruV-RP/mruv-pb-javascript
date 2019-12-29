// GENERATED CODE -- DO NOT EDIT!

// package: google.ads.googleads.v1.services
// file: google/ads/googleads/v1/services/mobile_app_category_constant_service.proto

import * as google_ads_googleads_v1_services_mobile_app_category_constant_service_pb from "../../../../../google/ads/googleads/v1/services/mobile_app_category_constant_service_pb";
import * as google_ads_googleads_v1_resources_mobile_app_category_constant_pb from "../../../../../google/ads/googleads/v1/resources/mobile_app_category_constant_pb";
import * as grpc from "grpc";

interface IMobileAppCategoryConstantServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getMobileAppCategoryConstant: grpc.MethodDefinition<google_ads_googleads_v1_services_mobile_app_category_constant_service_pb.GetMobileAppCategoryConstantRequest, google_ads_googleads_v1_resources_mobile_app_category_constant_pb.MobileAppCategoryConstant>;
}

export const MobileAppCategoryConstantServiceService: IMobileAppCategoryConstantServiceService;

export class MobileAppCategoryConstantServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getMobileAppCategoryConstant(argument: google_ads_googleads_v1_services_mobile_app_category_constant_service_pb.GetMobileAppCategoryConstantRequest, callback: grpc.requestCallback<google_ads_googleads_v1_resources_mobile_app_category_constant_pb.MobileAppCategoryConstant>): grpc.ClientUnaryCall;
  getMobileAppCategoryConstant(argument: google_ads_googleads_v1_services_mobile_app_category_constant_service_pb.GetMobileAppCategoryConstantRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_resources_mobile_app_category_constant_pb.MobileAppCategoryConstant>): grpc.ClientUnaryCall;
  getMobileAppCategoryConstant(argument: google_ads_googleads_v1_services_mobile_app_category_constant_service_pb.GetMobileAppCategoryConstantRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_resources_mobile_app_category_constant_pb.MobileAppCategoryConstant>): grpc.ClientUnaryCall;
}
