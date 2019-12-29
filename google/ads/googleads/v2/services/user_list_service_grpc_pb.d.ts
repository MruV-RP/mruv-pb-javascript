// GENERATED CODE -- DO NOT EDIT!

// package: google.ads.googleads.v2.services
// file: google/ads/googleads/v2/services/user_list_service.proto

import * as google_ads_googleads_v2_services_user_list_service_pb from "../../../../../google/ads/googleads/v2/services/user_list_service_pb";
import * as google_ads_googleads_v2_resources_user_list_pb from "../../../../../google/ads/googleads/v2/resources/user_list_pb";
import * as grpc from "grpc";

interface IUserListServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getUserList: grpc.MethodDefinition<google_ads_googleads_v2_services_user_list_service_pb.GetUserListRequest, google_ads_googleads_v2_resources_user_list_pb.UserList>;
  mutateUserLists: grpc.MethodDefinition<google_ads_googleads_v2_services_user_list_service_pb.MutateUserListsRequest, google_ads_googleads_v2_services_user_list_service_pb.MutateUserListsResponse>;
}

export const UserListServiceService: IUserListServiceService;

export class UserListServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getUserList(argument: google_ads_googleads_v2_services_user_list_service_pb.GetUserListRequest, callback: grpc.requestCallback<google_ads_googleads_v2_resources_user_list_pb.UserList>): grpc.ClientUnaryCall;
  getUserList(argument: google_ads_googleads_v2_services_user_list_service_pb.GetUserListRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_resources_user_list_pb.UserList>): grpc.ClientUnaryCall;
  getUserList(argument: google_ads_googleads_v2_services_user_list_service_pb.GetUserListRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_resources_user_list_pb.UserList>): grpc.ClientUnaryCall;
  mutateUserLists(argument: google_ads_googleads_v2_services_user_list_service_pb.MutateUserListsRequest, callback: grpc.requestCallback<google_ads_googleads_v2_services_user_list_service_pb.MutateUserListsResponse>): grpc.ClientUnaryCall;
  mutateUserLists(argument: google_ads_googleads_v2_services_user_list_service_pb.MutateUserListsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_services_user_list_service_pb.MutateUserListsResponse>): grpc.ClientUnaryCall;
  mutateUserLists(argument: google_ads_googleads_v2_services_user_list_service_pb.MutateUserListsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_services_user_list_service_pb.MutateUserListsResponse>): grpc.ClientUnaryCall;
}
