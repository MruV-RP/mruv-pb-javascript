// GENERATED CODE -- DO NOT EDIT!

// package: google.ads.googleads.v2.services
// file: google/ads/googleads/v2/services/ad_schedule_view_service.proto

import * as google_ads_googleads_v2_services_ad_schedule_view_service_pb from "../../../../../google/ads/googleads/v2/services/ad_schedule_view_service_pb";
import * as google_ads_googleads_v2_resources_ad_schedule_view_pb from "../../../../../google/ads/googleads/v2/resources/ad_schedule_view_pb";
import * as grpc from "grpc";

interface IAdScheduleViewServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getAdScheduleView: grpc.MethodDefinition<google_ads_googleads_v2_services_ad_schedule_view_service_pb.GetAdScheduleViewRequest, google_ads_googleads_v2_resources_ad_schedule_view_pb.AdScheduleView>;
}

export const AdScheduleViewServiceService: IAdScheduleViewServiceService;

export class AdScheduleViewServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getAdScheduleView(argument: google_ads_googleads_v2_services_ad_schedule_view_service_pb.GetAdScheduleViewRequest, callback: grpc.requestCallback<google_ads_googleads_v2_resources_ad_schedule_view_pb.AdScheduleView>): grpc.ClientUnaryCall;
  getAdScheduleView(argument: google_ads_googleads_v2_services_ad_schedule_view_service_pb.GetAdScheduleViewRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_resources_ad_schedule_view_pb.AdScheduleView>): grpc.ClientUnaryCall;
  getAdScheduleView(argument: google_ads_googleads_v2_services_ad_schedule_view_service_pb.GetAdScheduleViewRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_resources_ad_schedule_view_pb.AdScheduleView>): grpc.ClientUnaryCall;
}
