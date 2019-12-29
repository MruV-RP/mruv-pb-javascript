// GENERATED CODE -- DO NOT EDIT!

// package: google.ads.googleads.v1.services
// file: google/ads/googleads/v1/services/ad_group_criterion_service.proto

import * as google_ads_googleads_v1_services_ad_group_criterion_service_pb from "../../../../../google/ads/googleads/v1/services/ad_group_criterion_service_pb";
import * as google_ads_googleads_v1_resources_ad_group_criterion_pb from "../../../../../google/ads/googleads/v1/resources/ad_group_criterion_pb";
import * as grpc from "grpc";

interface IAdGroupCriterionServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getAdGroupCriterion: grpc.MethodDefinition<google_ads_googleads_v1_services_ad_group_criterion_service_pb.GetAdGroupCriterionRequest, google_ads_googleads_v1_resources_ad_group_criterion_pb.AdGroupCriterion>;
  mutateAdGroupCriteria: grpc.MethodDefinition<google_ads_googleads_v1_services_ad_group_criterion_service_pb.MutateAdGroupCriteriaRequest, google_ads_googleads_v1_services_ad_group_criterion_service_pb.MutateAdGroupCriteriaResponse>;
}

export const AdGroupCriterionServiceService: IAdGroupCriterionServiceService;

export class AdGroupCriterionServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getAdGroupCriterion(argument: google_ads_googleads_v1_services_ad_group_criterion_service_pb.GetAdGroupCriterionRequest, callback: grpc.requestCallback<google_ads_googleads_v1_resources_ad_group_criterion_pb.AdGroupCriterion>): grpc.ClientUnaryCall;
  getAdGroupCriterion(argument: google_ads_googleads_v1_services_ad_group_criterion_service_pb.GetAdGroupCriterionRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_resources_ad_group_criterion_pb.AdGroupCriterion>): grpc.ClientUnaryCall;
  getAdGroupCriterion(argument: google_ads_googleads_v1_services_ad_group_criterion_service_pb.GetAdGroupCriterionRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_resources_ad_group_criterion_pb.AdGroupCriterion>): grpc.ClientUnaryCall;
  mutateAdGroupCriteria(argument: google_ads_googleads_v1_services_ad_group_criterion_service_pb.MutateAdGroupCriteriaRequest, callback: grpc.requestCallback<google_ads_googleads_v1_services_ad_group_criterion_service_pb.MutateAdGroupCriteriaResponse>): grpc.ClientUnaryCall;
  mutateAdGroupCriteria(argument: google_ads_googleads_v1_services_ad_group_criterion_service_pb.MutateAdGroupCriteriaRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_services_ad_group_criterion_service_pb.MutateAdGroupCriteriaResponse>): grpc.ClientUnaryCall;
  mutateAdGroupCriteria(argument: google_ads_googleads_v1_services_ad_group_criterion_service_pb.MutateAdGroupCriteriaRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_services_ad_group_criterion_service_pb.MutateAdGroupCriteriaResponse>): grpc.ClientUnaryCall;
}
