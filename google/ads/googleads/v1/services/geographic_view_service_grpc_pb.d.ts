// GENERATED CODE -- DO NOT EDIT!

// package: google.ads.googleads.v1.services
// file: google/ads/googleads/v1/services/geographic_view_service.proto

import * as google_ads_googleads_v1_services_geographic_view_service_pb from "../../../../../google/ads/googleads/v1/services/geographic_view_service_pb";
import * as google_ads_googleads_v1_resources_geographic_view_pb from "../../../../../google/ads/googleads/v1/resources/geographic_view_pb";
import * as grpc from "grpc";

interface IGeographicViewServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getGeographicView: grpc.MethodDefinition<google_ads_googleads_v1_services_geographic_view_service_pb.GetGeographicViewRequest, google_ads_googleads_v1_resources_geographic_view_pb.GeographicView>;
}

export const GeographicViewServiceService: IGeographicViewServiceService;

export class GeographicViewServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getGeographicView(argument: google_ads_googleads_v1_services_geographic_view_service_pb.GetGeographicViewRequest, callback: grpc.requestCallback<google_ads_googleads_v1_resources_geographic_view_pb.GeographicView>): grpc.ClientUnaryCall;
  getGeographicView(argument: google_ads_googleads_v1_services_geographic_view_service_pb.GetGeographicViewRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_resources_geographic_view_pb.GeographicView>): grpc.ClientUnaryCall;
  getGeographicView(argument: google_ads_googleads_v1_services_geographic_view_service_pb.GetGeographicViewRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_resources_geographic_view_pb.GeographicView>): grpc.ClientUnaryCall;
}
