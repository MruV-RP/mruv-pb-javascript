// GENERATED CODE -- DO NOT EDIT!

// package: google.ads.googleads.v1.services
// file: google/ads/googleads/v1/services/ad_group_service.proto

import * as google_ads_googleads_v1_services_ad_group_service_pb from "../../../../../google/ads/googleads/v1/services/ad_group_service_pb";
import * as google_ads_googleads_v1_resources_ad_group_pb from "../../../../../google/ads/googleads/v1/resources/ad_group_pb";
import * as grpc from "grpc";

interface IAdGroupServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getAdGroup: grpc.MethodDefinition<google_ads_googleads_v1_services_ad_group_service_pb.GetAdGroupRequest, google_ads_googleads_v1_resources_ad_group_pb.AdGroup>;
  mutateAdGroups: grpc.MethodDefinition<google_ads_googleads_v1_services_ad_group_service_pb.MutateAdGroupsRequest, google_ads_googleads_v1_services_ad_group_service_pb.MutateAdGroupsResponse>;
}

export const AdGroupServiceService: IAdGroupServiceService;

export class AdGroupServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getAdGroup(argument: google_ads_googleads_v1_services_ad_group_service_pb.GetAdGroupRequest, callback: grpc.requestCallback<google_ads_googleads_v1_resources_ad_group_pb.AdGroup>): grpc.ClientUnaryCall;
  getAdGroup(argument: google_ads_googleads_v1_services_ad_group_service_pb.GetAdGroupRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_resources_ad_group_pb.AdGroup>): grpc.ClientUnaryCall;
  getAdGroup(argument: google_ads_googleads_v1_services_ad_group_service_pb.GetAdGroupRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_resources_ad_group_pb.AdGroup>): grpc.ClientUnaryCall;
  mutateAdGroups(argument: google_ads_googleads_v1_services_ad_group_service_pb.MutateAdGroupsRequest, callback: grpc.requestCallback<google_ads_googleads_v1_services_ad_group_service_pb.MutateAdGroupsResponse>): grpc.ClientUnaryCall;
  mutateAdGroups(argument: google_ads_googleads_v1_services_ad_group_service_pb.MutateAdGroupsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_services_ad_group_service_pb.MutateAdGroupsResponse>): grpc.ClientUnaryCall;
  mutateAdGroups(argument: google_ads_googleads_v1_services_ad_group_service_pb.MutateAdGroupsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_services_ad_group_service_pb.MutateAdGroupsResponse>): grpc.ClientUnaryCall;
}
