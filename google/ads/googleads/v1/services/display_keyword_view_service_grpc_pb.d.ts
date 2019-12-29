// GENERATED CODE -- DO NOT EDIT!

// package: google.ads.googleads.v1.services
// file: google/ads/googleads/v1/services/display_keyword_view_service.proto

import * as google_ads_googleads_v1_services_display_keyword_view_service_pb from "../../../../../google/ads/googleads/v1/services/display_keyword_view_service_pb";
import * as google_ads_googleads_v1_resources_display_keyword_view_pb from "../../../../../google/ads/googleads/v1/resources/display_keyword_view_pb";
import * as grpc from "grpc";

interface IDisplayKeywordViewServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getDisplayKeywordView: grpc.MethodDefinition<google_ads_googleads_v1_services_display_keyword_view_service_pb.GetDisplayKeywordViewRequest, google_ads_googleads_v1_resources_display_keyword_view_pb.DisplayKeywordView>;
}

export const DisplayKeywordViewServiceService: IDisplayKeywordViewServiceService;

export class DisplayKeywordViewServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getDisplayKeywordView(argument: google_ads_googleads_v1_services_display_keyword_view_service_pb.GetDisplayKeywordViewRequest, callback: grpc.requestCallback<google_ads_googleads_v1_resources_display_keyword_view_pb.DisplayKeywordView>): grpc.ClientUnaryCall;
  getDisplayKeywordView(argument: google_ads_googleads_v1_services_display_keyword_view_service_pb.GetDisplayKeywordViewRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_resources_display_keyword_view_pb.DisplayKeywordView>): grpc.ClientUnaryCall;
  getDisplayKeywordView(argument: google_ads_googleads_v1_services_display_keyword_view_service_pb.GetDisplayKeywordViewRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_resources_display_keyword_view_pb.DisplayKeywordView>): grpc.ClientUnaryCall;
}
