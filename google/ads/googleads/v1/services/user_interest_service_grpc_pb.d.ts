// GENERATED CODE -- DO NOT EDIT!

// package: google.ads.googleads.v1.services
// file: google/ads/googleads/v1/services/user_interest_service.proto

import * as google_ads_googleads_v1_services_user_interest_service_pb from "../../../../../google/ads/googleads/v1/services/user_interest_service_pb";
import * as google_ads_googleads_v1_resources_user_interest_pb from "../../../../../google/ads/googleads/v1/resources/user_interest_pb";
import * as grpc from "grpc";

interface IUserInterestServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getUserInterest: grpc.MethodDefinition<google_ads_googleads_v1_services_user_interest_service_pb.GetUserInterestRequest, google_ads_googleads_v1_resources_user_interest_pb.UserInterest>;
}

export const UserInterestServiceService: IUserInterestServiceService;

export class UserInterestServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getUserInterest(argument: google_ads_googleads_v1_services_user_interest_service_pb.GetUserInterestRequest, callback: grpc.requestCallback<google_ads_googleads_v1_resources_user_interest_pb.UserInterest>): grpc.ClientUnaryCall;
  getUserInterest(argument: google_ads_googleads_v1_services_user_interest_service_pb.GetUserInterestRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_resources_user_interest_pb.UserInterest>): grpc.ClientUnaryCall;
  getUserInterest(argument: google_ads_googleads_v1_services_user_interest_service_pb.GetUserInterestRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_resources_user_interest_pb.UserInterest>): grpc.ClientUnaryCall;
}
