// GENERATED CODE -- DO NOT EDIT!

// package: google.ads.googleads.v2.services
// file: google/ads/googleads/v2/services/expanded_landing_page_view_service.proto

import * as google_ads_googleads_v2_services_expanded_landing_page_view_service_pb from "../../../../../google/ads/googleads/v2/services/expanded_landing_page_view_service_pb";
import * as google_ads_googleads_v2_resources_expanded_landing_page_view_pb from "../../../../../google/ads/googleads/v2/resources/expanded_landing_page_view_pb";
import * as grpc from "grpc";

interface IExpandedLandingPageViewServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getExpandedLandingPageView: grpc.MethodDefinition<google_ads_googleads_v2_services_expanded_landing_page_view_service_pb.GetExpandedLandingPageViewRequest, google_ads_googleads_v2_resources_expanded_landing_page_view_pb.ExpandedLandingPageView>;
}

export const ExpandedLandingPageViewServiceService: IExpandedLandingPageViewServiceService;

export class ExpandedLandingPageViewServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getExpandedLandingPageView(argument: google_ads_googleads_v2_services_expanded_landing_page_view_service_pb.GetExpandedLandingPageViewRequest, callback: grpc.requestCallback<google_ads_googleads_v2_resources_expanded_landing_page_view_pb.ExpandedLandingPageView>): grpc.ClientUnaryCall;
  getExpandedLandingPageView(argument: google_ads_googleads_v2_services_expanded_landing_page_view_service_pb.GetExpandedLandingPageViewRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_resources_expanded_landing_page_view_pb.ExpandedLandingPageView>): grpc.ClientUnaryCall;
  getExpandedLandingPageView(argument: google_ads_googleads_v2_services_expanded_landing_page_view_service_pb.GetExpandedLandingPageViewRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_resources_expanded_landing_page_view_pb.ExpandedLandingPageView>): grpc.ClientUnaryCall;
}
