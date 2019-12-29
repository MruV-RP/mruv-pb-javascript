// GENERATED CODE -- DO NOT EDIT!

// package: google.ads.googleads.v1.services
// file: google/ads/googleads/v1/services/hotel_group_view_service.proto

import * as google_ads_googleads_v1_services_hotel_group_view_service_pb from "../../../../../google/ads/googleads/v1/services/hotel_group_view_service_pb";
import * as google_ads_googleads_v1_resources_hotel_group_view_pb from "../../../../../google/ads/googleads/v1/resources/hotel_group_view_pb";
import * as grpc from "grpc";

interface IHotelGroupViewServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getHotelGroupView: grpc.MethodDefinition<google_ads_googleads_v1_services_hotel_group_view_service_pb.GetHotelGroupViewRequest, google_ads_googleads_v1_resources_hotel_group_view_pb.HotelGroupView>;
}

export const HotelGroupViewServiceService: IHotelGroupViewServiceService;

export class HotelGroupViewServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getHotelGroupView(argument: google_ads_googleads_v1_services_hotel_group_view_service_pb.GetHotelGroupViewRequest, callback: grpc.requestCallback<google_ads_googleads_v1_resources_hotel_group_view_pb.HotelGroupView>): grpc.ClientUnaryCall;
  getHotelGroupView(argument: google_ads_googleads_v1_services_hotel_group_view_service_pb.GetHotelGroupViewRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_resources_hotel_group_view_pb.HotelGroupView>): grpc.ClientUnaryCall;
  getHotelGroupView(argument: google_ads_googleads_v1_services_hotel_group_view_service_pb.GetHotelGroupViewRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_resources_hotel_group_view_pb.HotelGroupView>): grpc.ClientUnaryCall;
}
