// GENERATED CODE -- DO NOT EDIT!

// package: google.ads.googleads.v2.services
// file: google/ads/googleads/v2/services/age_range_view_service.proto

import * as google_ads_googleads_v2_services_age_range_view_service_pb from "../../../../../google/ads/googleads/v2/services/age_range_view_service_pb";
import * as google_ads_googleads_v2_resources_age_range_view_pb from "../../../../../google/ads/googleads/v2/resources/age_range_view_pb";
import * as grpc from "grpc";

interface IAgeRangeViewServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getAgeRangeView: grpc.MethodDefinition<google_ads_googleads_v2_services_age_range_view_service_pb.GetAgeRangeViewRequest, google_ads_googleads_v2_resources_age_range_view_pb.AgeRangeView>;
}

export const AgeRangeViewServiceService: IAgeRangeViewServiceService;

export class AgeRangeViewServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getAgeRangeView(argument: google_ads_googleads_v2_services_age_range_view_service_pb.GetAgeRangeViewRequest, callback: grpc.requestCallback<google_ads_googleads_v2_resources_age_range_view_pb.AgeRangeView>): grpc.ClientUnaryCall;
  getAgeRangeView(argument: google_ads_googleads_v2_services_age_range_view_service_pb.GetAgeRangeViewRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_resources_age_range_view_pb.AgeRangeView>): grpc.ClientUnaryCall;
  getAgeRangeView(argument: google_ads_googleads_v2_services_age_range_view_service_pb.GetAgeRangeViewRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_resources_age_range_view_pb.AgeRangeView>): grpc.ClientUnaryCall;
}
