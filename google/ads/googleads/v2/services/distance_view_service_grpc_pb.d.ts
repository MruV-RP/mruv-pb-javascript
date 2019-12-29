// GENERATED CODE -- DO NOT EDIT!

// package: google.ads.googleads.v2.services
// file: google/ads/googleads/v2/services/distance_view_service.proto

import * as google_ads_googleads_v2_services_distance_view_service_pb from "../../../../../google/ads/googleads/v2/services/distance_view_service_pb";
import * as google_ads_googleads_v2_resources_distance_view_pb from "../../../../../google/ads/googleads/v2/resources/distance_view_pb";
import * as grpc from "grpc";

interface IDistanceViewServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getDistanceView: grpc.MethodDefinition<google_ads_googleads_v2_services_distance_view_service_pb.GetDistanceViewRequest, google_ads_googleads_v2_resources_distance_view_pb.DistanceView>;
}

export const DistanceViewServiceService: IDistanceViewServiceService;

export class DistanceViewServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getDistanceView(argument: google_ads_googleads_v2_services_distance_view_service_pb.GetDistanceViewRequest, callback: grpc.requestCallback<google_ads_googleads_v2_resources_distance_view_pb.DistanceView>): grpc.ClientUnaryCall;
  getDistanceView(argument: google_ads_googleads_v2_services_distance_view_service_pb.GetDistanceViewRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_resources_distance_view_pb.DistanceView>): grpc.ClientUnaryCall;
  getDistanceView(argument: google_ads_googleads_v2_services_distance_view_service_pb.GetDistanceViewRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_resources_distance_view_pb.DistanceView>): grpc.ClientUnaryCall;
}
