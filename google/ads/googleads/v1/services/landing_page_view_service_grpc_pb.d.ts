// GENERATED CODE -- DO NOT EDIT!

// package: google.ads.googleads.v1.services
// file: google/ads/googleads/v1/services/landing_page_view_service.proto

import * as google_ads_googleads_v1_services_landing_page_view_service_pb from "../../../../../google/ads/googleads/v1/services/landing_page_view_service_pb";
import * as google_ads_googleads_v1_resources_landing_page_view_pb from "../../../../../google/ads/googleads/v1/resources/landing_page_view_pb";
import * as grpc from "grpc";

interface ILandingPageViewServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getLandingPageView: grpc.MethodDefinition<google_ads_googleads_v1_services_landing_page_view_service_pb.GetLandingPageViewRequest, google_ads_googleads_v1_resources_landing_page_view_pb.LandingPageView>;
}

export const LandingPageViewServiceService: ILandingPageViewServiceService;

export class LandingPageViewServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getLandingPageView(argument: google_ads_googleads_v1_services_landing_page_view_service_pb.GetLandingPageViewRequest, callback: grpc.requestCallback<google_ads_googleads_v1_resources_landing_page_view_pb.LandingPageView>): grpc.ClientUnaryCall;
  getLandingPageView(argument: google_ads_googleads_v1_services_landing_page_view_service_pb.GetLandingPageViewRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_resources_landing_page_view_pb.LandingPageView>): grpc.ClientUnaryCall;
  getLandingPageView(argument: google_ads_googleads_v1_services_landing_page_view_service_pb.GetLandingPageViewRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_resources_landing_page_view_pb.LandingPageView>): grpc.ClientUnaryCall;
}
