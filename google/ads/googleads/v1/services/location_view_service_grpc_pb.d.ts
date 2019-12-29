// GENERATED CODE -- DO NOT EDIT!

// package: google.ads.googleads.v1.services
// file: google/ads/googleads/v1/services/location_view_service.proto

import * as google_ads_googleads_v1_services_location_view_service_pb from "../../../../../google/ads/googleads/v1/services/location_view_service_pb";
import * as google_ads_googleads_v1_resources_location_view_pb from "../../../../../google/ads/googleads/v1/resources/location_view_pb";
import * as grpc from "grpc";

interface ILocationViewServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getLocationView: grpc.MethodDefinition<google_ads_googleads_v1_services_location_view_service_pb.GetLocationViewRequest, google_ads_googleads_v1_resources_location_view_pb.LocationView>;
}

export const LocationViewServiceService: ILocationViewServiceService;

export class LocationViewServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getLocationView(argument: google_ads_googleads_v1_services_location_view_service_pb.GetLocationViewRequest, callback: grpc.requestCallback<google_ads_googleads_v1_resources_location_view_pb.LocationView>): grpc.ClientUnaryCall;
  getLocationView(argument: google_ads_googleads_v1_services_location_view_service_pb.GetLocationViewRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_resources_location_view_pb.LocationView>): grpc.ClientUnaryCall;
  getLocationView(argument: google_ads_googleads_v1_services_location_view_service_pb.GetLocationViewRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_resources_location_view_pb.LocationView>): grpc.ClientUnaryCall;
}
