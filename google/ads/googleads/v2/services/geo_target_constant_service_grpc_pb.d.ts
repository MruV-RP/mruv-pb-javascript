// GENERATED CODE -- DO NOT EDIT!

// package: google.ads.googleads.v2.services
// file: google/ads/googleads/v2/services/geo_target_constant_service.proto

import * as google_ads_googleads_v2_services_geo_target_constant_service_pb from "../../../../../google/ads/googleads/v2/services/geo_target_constant_service_pb";
import * as google_ads_googleads_v2_resources_geo_target_constant_pb from "../../../../../google/ads/googleads/v2/resources/geo_target_constant_pb";
import * as grpc from "grpc";

interface IGeoTargetConstantServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getGeoTargetConstant: grpc.MethodDefinition<google_ads_googleads_v2_services_geo_target_constant_service_pb.GetGeoTargetConstantRequest, google_ads_googleads_v2_resources_geo_target_constant_pb.GeoTargetConstant>;
  suggestGeoTargetConstants: grpc.MethodDefinition<google_ads_googleads_v2_services_geo_target_constant_service_pb.SuggestGeoTargetConstantsRequest, google_ads_googleads_v2_services_geo_target_constant_service_pb.SuggestGeoTargetConstantsResponse>;
}

export const GeoTargetConstantServiceService: IGeoTargetConstantServiceService;

export class GeoTargetConstantServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getGeoTargetConstant(argument: google_ads_googleads_v2_services_geo_target_constant_service_pb.GetGeoTargetConstantRequest, callback: grpc.requestCallback<google_ads_googleads_v2_resources_geo_target_constant_pb.GeoTargetConstant>): grpc.ClientUnaryCall;
  getGeoTargetConstant(argument: google_ads_googleads_v2_services_geo_target_constant_service_pb.GetGeoTargetConstantRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_resources_geo_target_constant_pb.GeoTargetConstant>): grpc.ClientUnaryCall;
  getGeoTargetConstant(argument: google_ads_googleads_v2_services_geo_target_constant_service_pb.GetGeoTargetConstantRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_resources_geo_target_constant_pb.GeoTargetConstant>): grpc.ClientUnaryCall;
  suggestGeoTargetConstants(argument: google_ads_googleads_v2_services_geo_target_constant_service_pb.SuggestGeoTargetConstantsRequest, callback: grpc.requestCallback<google_ads_googleads_v2_services_geo_target_constant_service_pb.SuggestGeoTargetConstantsResponse>): grpc.ClientUnaryCall;
  suggestGeoTargetConstants(argument: google_ads_googleads_v2_services_geo_target_constant_service_pb.SuggestGeoTargetConstantsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_services_geo_target_constant_service_pb.SuggestGeoTargetConstantsResponse>): grpc.ClientUnaryCall;
  suggestGeoTargetConstants(argument: google_ads_googleads_v2_services_geo_target_constant_service_pb.SuggestGeoTargetConstantsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_services_geo_target_constant_service_pb.SuggestGeoTargetConstantsResponse>): grpc.ClientUnaryCall;
}
