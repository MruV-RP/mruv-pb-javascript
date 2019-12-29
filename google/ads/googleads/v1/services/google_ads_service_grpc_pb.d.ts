// GENERATED CODE -- DO NOT EDIT!

// package: google.ads.googleads.v1.services
// file: google/ads/googleads/v1/services/google_ads_service.proto

import * as google_ads_googleads_v1_services_google_ads_service_pb from "../../../../../google/ads/googleads/v1/services/google_ads_service_pb";
import * as grpc from "grpc";

interface IGoogleAdsServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  search: grpc.MethodDefinition<google_ads_googleads_v1_services_google_ads_service_pb.SearchGoogleAdsRequest, google_ads_googleads_v1_services_google_ads_service_pb.SearchGoogleAdsResponse>;
  mutate: grpc.MethodDefinition<google_ads_googleads_v1_services_google_ads_service_pb.MutateGoogleAdsRequest, google_ads_googleads_v1_services_google_ads_service_pb.MutateGoogleAdsResponse>;
}

export const GoogleAdsServiceService: IGoogleAdsServiceService;

export class GoogleAdsServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  search(argument: google_ads_googleads_v1_services_google_ads_service_pb.SearchGoogleAdsRequest, callback: grpc.requestCallback<google_ads_googleads_v1_services_google_ads_service_pb.SearchGoogleAdsResponse>): grpc.ClientUnaryCall;
  search(argument: google_ads_googleads_v1_services_google_ads_service_pb.SearchGoogleAdsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_services_google_ads_service_pb.SearchGoogleAdsResponse>): grpc.ClientUnaryCall;
  search(argument: google_ads_googleads_v1_services_google_ads_service_pb.SearchGoogleAdsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_services_google_ads_service_pb.SearchGoogleAdsResponse>): grpc.ClientUnaryCall;
  mutate(argument: google_ads_googleads_v1_services_google_ads_service_pb.MutateGoogleAdsRequest, callback: grpc.requestCallback<google_ads_googleads_v1_services_google_ads_service_pb.MutateGoogleAdsResponse>): grpc.ClientUnaryCall;
  mutate(argument: google_ads_googleads_v1_services_google_ads_service_pb.MutateGoogleAdsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_services_google_ads_service_pb.MutateGoogleAdsResponse>): grpc.ClientUnaryCall;
  mutate(argument: google_ads_googleads_v1_services_google_ads_service_pb.MutateGoogleAdsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_services_google_ads_service_pb.MutateGoogleAdsResponse>): grpc.ClientUnaryCall;
}
