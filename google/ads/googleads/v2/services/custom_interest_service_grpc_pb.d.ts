// GENERATED CODE -- DO NOT EDIT!

// package: google.ads.googleads.v2.services
// file: google/ads/googleads/v2/services/custom_interest_service.proto

import * as google_ads_googleads_v2_services_custom_interest_service_pb from "../../../../../google/ads/googleads/v2/services/custom_interest_service_pb";
import * as google_ads_googleads_v2_resources_custom_interest_pb from "../../../../../google/ads/googleads/v2/resources/custom_interest_pb";
import * as grpc from "grpc";

interface ICustomInterestServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getCustomInterest: grpc.MethodDefinition<google_ads_googleads_v2_services_custom_interest_service_pb.GetCustomInterestRequest, google_ads_googleads_v2_resources_custom_interest_pb.CustomInterest>;
  mutateCustomInterests: grpc.MethodDefinition<google_ads_googleads_v2_services_custom_interest_service_pb.MutateCustomInterestsRequest, google_ads_googleads_v2_services_custom_interest_service_pb.MutateCustomInterestsResponse>;
}

export const CustomInterestServiceService: ICustomInterestServiceService;

export class CustomInterestServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getCustomInterest(argument: google_ads_googleads_v2_services_custom_interest_service_pb.GetCustomInterestRequest, callback: grpc.requestCallback<google_ads_googleads_v2_resources_custom_interest_pb.CustomInterest>): grpc.ClientUnaryCall;
  getCustomInterest(argument: google_ads_googleads_v2_services_custom_interest_service_pb.GetCustomInterestRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_resources_custom_interest_pb.CustomInterest>): grpc.ClientUnaryCall;
  getCustomInterest(argument: google_ads_googleads_v2_services_custom_interest_service_pb.GetCustomInterestRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_resources_custom_interest_pb.CustomInterest>): grpc.ClientUnaryCall;
  mutateCustomInterests(argument: google_ads_googleads_v2_services_custom_interest_service_pb.MutateCustomInterestsRequest, callback: grpc.requestCallback<google_ads_googleads_v2_services_custom_interest_service_pb.MutateCustomInterestsResponse>): grpc.ClientUnaryCall;
  mutateCustomInterests(argument: google_ads_googleads_v2_services_custom_interest_service_pb.MutateCustomInterestsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_services_custom_interest_service_pb.MutateCustomInterestsResponse>): grpc.ClientUnaryCall;
  mutateCustomInterests(argument: google_ads_googleads_v2_services_custom_interest_service_pb.MutateCustomInterestsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_services_custom_interest_service_pb.MutateCustomInterestsResponse>): grpc.ClientUnaryCall;
}
