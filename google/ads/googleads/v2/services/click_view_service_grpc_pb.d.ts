// GENERATED CODE -- DO NOT EDIT!

// package: google.ads.googleads.v2.services
// file: google/ads/googleads/v2/services/click_view_service.proto

import * as google_ads_googleads_v2_services_click_view_service_pb from "../../../../../google/ads/googleads/v2/services/click_view_service_pb";
import * as google_ads_googleads_v2_resources_click_view_pb from "../../../../../google/ads/googleads/v2/resources/click_view_pb";
import * as grpc from "grpc";

interface IClickViewServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getClickView: grpc.MethodDefinition<google_ads_googleads_v2_services_click_view_service_pb.GetClickViewRequest, google_ads_googleads_v2_resources_click_view_pb.ClickView>;
}

export const ClickViewServiceService: IClickViewServiceService;

export class ClickViewServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getClickView(argument: google_ads_googleads_v2_services_click_view_service_pb.GetClickViewRequest, callback: grpc.requestCallback<google_ads_googleads_v2_resources_click_view_pb.ClickView>): grpc.ClientUnaryCall;
  getClickView(argument: google_ads_googleads_v2_services_click_view_service_pb.GetClickViewRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_resources_click_view_pb.ClickView>): grpc.ClientUnaryCall;
  getClickView(argument: google_ads_googleads_v2_services_click_view_service_pb.GetClickViewRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_resources_click_view_pb.ClickView>): grpc.ClientUnaryCall;
}
