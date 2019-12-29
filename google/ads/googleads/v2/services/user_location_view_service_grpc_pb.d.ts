// GENERATED CODE -- DO NOT EDIT!

// package: google.ads.googleads.v2.services
// file: google/ads/googleads/v2/services/user_location_view_service.proto

import * as google_ads_googleads_v2_services_user_location_view_service_pb from "../../../../../google/ads/googleads/v2/services/user_location_view_service_pb";
import * as google_ads_googleads_v2_resources_user_location_view_pb from "../../../../../google/ads/googleads/v2/resources/user_location_view_pb";
import * as grpc from "grpc";

interface IUserLocationViewServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getUserLocationView: grpc.MethodDefinition<google_ads_googleads_v2_services_user_location_view_service_pb.GetUserLocationViewRequest, google_ads_googleads_v2_resources_user_location_view_pb.UserLocationView>;
}

export const UserLocationViewServiceService: IUserLocationViewServiceService;

export class UserLocationViewServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getUserLocationView(argument: google_ads_googleads_v2_services_user_location_view_service_pb.GetUserLocationViewRequest, callback: grpc.requestCallback<google_ads_googleads_v2_resources_user_location_view_pb.UserLocationView>): grpc.ClientUnaryCall;
  getUserLocationView(argument: google_ads_googleads_v2_services_user_location_view_service_pb.GetUserLocationViewRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_resources_user_location_view_pb.UserLocationView>): grpc.ClientUnaryCall;
  getUserLocationView(argument: google_ads_googleads_v2_services_user_location_view_service_pb.GetUserLocationViewRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_resources_user_location_view_pb.UserLocationView>): grpc.ClientUnaryCall;
}
