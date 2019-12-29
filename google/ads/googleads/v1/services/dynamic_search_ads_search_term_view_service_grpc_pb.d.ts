// GENERATED CODE -- DO NOT EDIT!

// package: google.ads.googleads.v1.services
// file: google/ads/googleads/v1/services/dynamic_search_ads_search_term_view_service.proto

import * as google_ads_googleads_v1_services_dynamic_search_ads_search_term_view_service_pb from "../../../../../google/ads/googleads/v1/services/dynamic_search_ads_search_term_view_service_pb";
import * as google_ads_googleads_v1_resources_dynamic_search_ads_search_term_view_pb from "../../../../../google/ads/googleads/v1/resources/dynamic_search_ads_search_term_view_pb";
import * as grpc from "grpc";

interface IDynamicSearchAdsSearchTermViewServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getDynamicSearchAdsSearchTermView: grpc.MethodDefinition<google_ads_googleads_v1_services_dynamic_search_ads_search_term_view_service_pb.GetDynamicSearchAdsSearchTermViewRequest, google_ads_googleads_v1_resources_dynamic_search_ads_search_term_view_pb.DynamicSearchAdsSearchTermView>;
}

export const DynamicSearchAdsSearchTermViewServiceService: IDynamicSearchAdsSearchTermViewServiceService;

export class DynamicSearchAdsSearchTermViewServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getDynamicSearchAdsSearchTermView(argument: google_ads_googleads_v1_services_dynamic_search_ads_search_term_view_service_pb.GetDynamicSearchAdsSearchTermViewRequest, callback: grpc.requestCallback<google_ads_googleads_v1_resources_dynamic_search_ads_search_term_view_pb.DynamicSearchAdsSearchTermView>): grpc.ClientUnaryCall;
  getDynamicSearchAdsSearchTermView(argument: google_ads_googleads_v1_services_dynamic_search_ads_search_term_view_service_pb.GetDynamicSearchAdsSearchTermViewRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_resources_dynamic_search_ads_search_term_view_pb.DynamicSearchAdsSearchTermView>): grpc.ClientUnaryCall;
  getDynamicSearchAdsSearchTermView(argument: google_ads_googleads_v1_services_dynamic_search_ads_search_term_view_service_pb.GetDynamicSearchAdsSearchTermViewRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_resources_dynamic_search_ads_search_term_view_pb.DynamicSearchAdsSearchTermView>): grpc.ClientUnaryCall;
}
