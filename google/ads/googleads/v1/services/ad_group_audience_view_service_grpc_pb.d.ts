// GENERATED CODE -- DO NOT EDIT!

// package: google.ads.googleads.v1.services
// file: google/ads/googleads/v1/services/ad_group_audience_view_service.proto

import * as google_ads_googleads_v1_services_ad_group_audience_view_service_pb from "../../../../../google/ads/googleads/v1/services/ad_group_audience_view_service_pb";
import * as google_ads_googleads_v1_resources_ad_group_audience_view_pb from "../../../../../google/ads/googleads/v1/resources/ad_group_audience_view_pb";
import * as grpc from "grpc";

interface IAdGroupAudienceViewServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getAdGroupAudienceView: grpc.MethodDefinition<google_ads_googleads_v1_services_ad_group_audience_view_service_pb.GetAdGroupAudienceViewRequest, google_ads_googleads_v1_resources_ad_group_audience_view_pb.AdGroupAudienceView>;
}

export const AdGroupAudienceViewServiceService: IAdGroupAudienceViewServiceService;

export class AdGroupAudienceViewServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getAdGroupAudienceView(argument: google_ads_googleads_v1_services_ad_group_audience_view_service_pb.GetAdGroupAudienceViewRequest, callback: grpc.requestCallback<google_ads_googleads_v1_resources_ad_group_audience_view_pb.AdGroupAudienceView>): grpc.ClientUnaryCall;
  getAdGroupAudienceView(argument: google_ads_googleads_v1_services_ad_group_audience_view_service_pb.GetAdGroupAudienceViewRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_resources_ad_group_audience_view_pb.AdGroupAudienceView>): grpc.ClientUnaryCall;
  getAdGroupAudienceView(argument: google_ads_googleads_v1_services_ad_group_audience_view_service_pb.GetAdGroupAudienceViewRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_resources_ad_group_audience_view_pb.AdGroupAudienceView>): grpc.ClientUnaryCall;
}
