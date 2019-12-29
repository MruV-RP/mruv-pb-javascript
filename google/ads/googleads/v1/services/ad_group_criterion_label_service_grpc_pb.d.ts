// GENERATED CODE -- DO NOT EDIT!

// package: google.ads.googleads.v1.services
// file: google/ads/googleads/v1/services/ad_group_criterion_label_service.proto

import * as google_ads_googleads_v1_services_ad_group_criterion_label_service_pb from "../../../../../google/ads/googleads/v1/services/ad_group_criterion_label_service_pb";
import * as google_ads_googleads_v1_resources_ad_group_criterion_label_pb from "../../../../../google/ads/googleads/v1/resources/ad_group_criterion_label_pb";
import * as grpc from "grpc";

interface IAdGroupCriterionLabelServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getAdGroupCriterionLabel: grpc.MethodDefinition<google_ads_googleads_v1_services_ad_group_criterion_label_service_pb.GetAdGroupCriterionLabelRequest, google_ads_googleads_v1_resources_ad_group_criterion_label_pb.AdGroupCriterionLabel>;
  mutateAdGroupCriterionLabels: grpc.MethodDefinition<google_ads_googleads_v1_services_ad_group_criterion_label_service_pb.MutateAdGroupCriterionLabelsRequest, google_ads_googleads_v1_services_ad_group_criterion_label_service_pb.MutateAdGroupCriterionLabelsResponse>;
}

export const AdGroupCriterionLabelServiceService: IAdGroupCriterionLabelServiceService;

export class AdGroupCriterionLabelServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getAdGroupCriterionLabel(argument: google_ads_googleads_v1_services_ad_group_criterion_label_service_pb.GetAdGroupCriterionLabelRequest, callback: grpc.requestCallback<google_ads_googleads_v1_resources_ad_group_criterion_label_pb.AdGroupCriterionLabel>): grpc.ClientUnaryCall;
  getAdGroupCriterionLabel(argument: google_ads_googleads_v1_services_ad_group_criterion_label_service_pb.GetAdGroupCriterionLabelRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_resources_ad_group_criterion_label_pb.AdGroupCriterionLabel>): grpc.ClientUnaryCall;
  getAdGroupCriterionLabel(argument: google_ads_googleads_v1_services_ad_group_criterion_label_service_pb.GetAdGroupCriterionLabelRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_resources_ad_group_criterion_label_pb.AdGroupCriterionLabel>): grpc.ClientUnaryCall;
  mutateAdGroupCriterionLabels(argument: google_ads_googleads_v1_services_ad_group_criterion_label_service_pb.MutateAdGroupCriterionLabelsRequest, callback: grpc.requestCallback<google_ads_googleads_v1_services_ad_group_criterion_label_service_pb.MutateAdGroupCriterionLabelsResponse>): grpc.ClientUnaryCall;
  mutateAdGroupCriterionLabels(argument: google_ads_googleads_v1_services_ad_group_criterion_label_service_pb.MutateAdGroupCriterionLabelsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_services_ad_group_criterion_label_service_pb.MutateAdGroupCriterionLabelsResponse>): grpc.ClientUnaryCall;
  mutateAdGroupCriterionLabels(argument: google_ads_googleads_v1_services_ad_group_criterion_label_service_pb.MutateAdGroupCriterionLabelsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_services_ad_group_criterion_label_service_pb.MutateAdGroupCriterionLabelsResponse>): grpc.ClientUnaryCall;
}
