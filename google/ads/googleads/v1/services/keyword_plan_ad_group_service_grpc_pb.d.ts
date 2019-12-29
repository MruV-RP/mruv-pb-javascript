// GENERATED CODE -- DO NOT EDIT!

// package: google.ads.googleads.v1.services
// file: google/ads/googleads/v1/services/keyword_plan_ad_group_service.proto

import * as google_ads_googleads_v1_services_keyword_plan_ad_group_service_pb from "../../../../../google/ads/googleads/v1/services/keyword_plan_ad_group_service_pb";
import * as google_ads_googleads_v1_resources_keyword_plan_ad_group_pb from "../../../../../google/ads/googleads/v1/resources/keyword_plan_ad_group_pb";
import * as grpc from "grpc";

interface IKeywordPlanAdGroupServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getKeywordPlanAdGroup: grpc.MethodDefinition<google_ads_googleads_v1_services_keyword_plan_ad_group_service_pb.GetKeywordPlanAdGroupRequest, google_ads_googleads_v1_resources_keyword_plan_ad_group_pb.KeywordPlanAdGroup>;
  mutateKeywordPlanAdGroups: grpc.MethodDefinition<google_ads_googleads_v1_services_keyword_plan_ad_group_service_pb.MutateKeywordPlanAdGroupsRequest, google_ads_googleads_v1_services_keyword_plan_ad_group_service_pb.MutateKeywordPlanAdGroupsResponse>;
}

export const KeywordPlanAdGroupServiceService: IKeywordPlanAdGroupServiceService;

export class KeywordPlanAdGroupServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getKeywordPlanAdGroup(argument: google_ads_googleads_v1_services_keyword_plan_ad_group_service_pb.GetKeywordPlanAdGroupRequest, callback: grpc.requestCallback<google_ads_googleads_v1_resources_keyword_plan_ad_group_pb.KeywordPlanAdGroup>): grpc.ClientUnaryCall;
  getKeywordPlanAdGroup(argument: google_ads_googleads_v1_services_keyword_plan_ad_group_service_pb.GetKeywordPlanAdGroupRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_resources_keyword_plan_ad_group_pb.KeywordPlanAdGroup>): grpc.ClientUnaryCall;
  getKeywordPlanAdGroup(argument: google_ads_googleads_v1_services_keyword_plan_ad_group_service_pb.GetKeywordPlanAdGroupRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_resources_keyword_plan_ad_group_pb.KeywordPlanAdGroup>): grpc.ClientUnaryCall;
  mutateKeywordPlanAdGroups(argument: google_ads_googleads_v1_services_keyword_plan_ad_group_service_pb.MutateKeywordPlanAdGroupsRequest, callback: grpc.requestCallback<google_ads_googleads_v1_services_keyword_plan_ad_group_service_pb.MutateKeywordPlanAdGroupsResponse>): grpc.ClientUnaryCall;
  mutateKeywordPlanAdGroups(argument: google_ads_googleads_v1_services_keyword_plan_ad_group_service_pb.MutateKeywordPlanAdGroupsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_services_keyword_plan_ad_group_service_pb.MutateKeywordPlanAdGroupsResponse>): grpc.ClientUnaryCall;
  mutateKeywordPlanAdGroups(argument: google_ads_googleads_v1_services_keyword_plan_ad_group_service_pb.MutateKeywordPlanAdGroupsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_services_keyword_plan_ad_group_service_pb.MutateKeywordPlanAdGroupsResponse>): grpc.ClientUnaryCall;
}
