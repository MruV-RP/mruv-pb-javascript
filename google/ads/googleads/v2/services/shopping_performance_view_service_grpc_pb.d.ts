// GENERATED CODE -- DO NOT EDIT!

// package: google.ads.googleads.v2.services
// file: google/ads/googleads/v2/services/shopping_performance_view_service.proto

import * as google_ads_googleads_v2_services_shopping_performance_view_service_pb from "../../../../../google/ads/googleads/v2/services/shopping_performance_view_service_pb";
import * as google_ads_googleads_v2_resources_shopping_performance_view_pb from "../../../../../google/ads/googleads/v2/resources/shopping_performance_view_pb";
import * as grpc from "grpc";

interface IShoppingPerformanceViewServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getShoppingPerformanceView: grpc.MethodDefinition<google_ads_googleads_v2_services_shopping_performance_view_service_pb.GetShoppingPerformanceViewRequest, google_ads_googleads_v2_resources_shopping_performance_view_pb.ShoppingPerformanceView>;
}

export const ShoppingPerformanceViewServiceService: IShoppingPerformanceViewServiceService;

export class ShoppingPerformanceViewServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getShoppingPerformanceView(argument: google_ads_googleads_v2_services_shopping_performance_view_service_pb.GetShoppingPerformanceViewRequest, callback: grpc.requestCallback<google_ads_googleads_v2_resources_shopping_performance_view_pb.ShoppingPerformanceView>): grpc.ClientUnaryCall;
  getShoppingPerformanceView(argument: google_ads_googleads_v2_services_shopping_performance_view_service_pb.GetShoppingPerformanceViewRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_resources_shopping_performance_view_pb.ShoppingPerformanceView>): grpc.ClientUnaryCall;
  getShoppingPerformanceView(argument: google_ads_googleads_v2_services_shopping_performance_view_service_pb.GetShoppingPerformanceViewRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_resources_shopping_performance_view_pb.ShoppingPerformanceView>): grpc.ClientUnaryCall;
}
