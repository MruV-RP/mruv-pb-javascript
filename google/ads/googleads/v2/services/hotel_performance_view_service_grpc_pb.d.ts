// GENERATED CODE -- DO NOT EDIT!

// package: google.ads.googleads.v2.services
// file: google/ads/googleads/v2/services/hotel_performance_view_service.proto

import * as google_ads_googleads_v2_services_hotel_performance_view_service_pb from "../../../../../google/ads/googleads/v2/services/hotel_performance_view_service_pb";
import * as google_ads_googleads_v2_resources_hotel_performance_view_pb from "../../../../../google/ads/googleads/v2/resources/hotel_performance_view_pb";
import * as grpc from "grpc";

interface IHotelPerformanceViewServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getHotelPerformanceView: grpc.MethodDefinition<google_ads_googleads_v2_services_hotel_performance_view_service_pb.GetHotelPerformanceViewRequest, google_ads_googleads_v2_resources_hotel_performance_view_pb.HotelPerformanceView>;
}

export const HotelPerformanceViewServiceService: IHotelPerformanceViewServiceService;

export class HotelPerformanceViewServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getHotelPerformanceView(argument: google_ads_googleads_v2_services_hotel_performance_view_service_pb.GetHotelPerformanceViewRequest, callback: grpc.requestCallback<google_ads_googleads_v2_resources_hotel_performance_view_pb.HotelPerformanceView>): grpc.ClientUnaryCall;
  getHotelPerformanceView(argument: google_ads_googleads_v2_services_hotel_performance_view_service_pb.GetHotelPerformanceViewRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_resources_hotel_performance_view_pb.HotelPerformanceView>): grpc.ClientUnaryCall;
  getHotelPerformanceView(argument: google_ads_googleads_v2_services_hotel_performance_view_service_pb.GetHotelPerformanceViewRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_resources_hotel_performance_view_pb.HotelPerformanceView>): grpc.ClientUnaryCall;
}
