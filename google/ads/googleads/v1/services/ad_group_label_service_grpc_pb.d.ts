// GENERATED CODE -- DO NOT EDIT!

// package: google.ads.googleads.v1.services
// file: google/ads/googleads/v1/services/ad_group_label_service.proto

import * as google_ads_googleads_v1_services_ad_group_label_service_pb from "../../../../../google/ads/googleads/v1/services/ad_group_label_service_pb";
import * as google_ads_googleads_v1_resources_ad_group_label_pb from "../../../../../google/ads/googleads/v1/resources/ad_group_label_pb";
import * as grpc from "grpc";

interface IAdGroupLabelServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getAdGroupLabel: grpc.MethodDefinition<google_ads_googleads_v1_services_ad_group_label_service_pb.GetAdGroupLabelRequest, google_ads_googleads_v1_resources_ad_group_label_pb.AdGroupLabel>;
  mutateAdGroupLabels: grpc.MethodDefinition<google_ads_googleads_v1_services_ad_group_label_service_pb.MutateAdGroupLabelsRequest, google_ads_googleads_v1_services_ad_group_label_service_pb.MutateAdGroupLabelsResponse>;
}

export const AdGroupLabelServiceService: IAdGroupLabelServiceService;

export class AdGroupLabelServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getAdGroupLabel(argument: google_ads_googleads_v1_services_ad_group_label_service_pb.GetAdGroupLabelRequest, callback: grpc.requestCallback<google_ads_googleads_v1_resources_ad_group_label_pb.AdGroupLabel>): grpc.ClientUnaryCall;
  getAdGroupLabel(argument: google_ads_googleads_v1_services_ad_group_label_service_pb.GetAdGroupLabelRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_resources_ad_group_label_pb.AdGroupLabel>): grpc.ClientUnaryCall;
  getAdGroupLabel(argument: google_ads_googleads_v1_services_ad_group_label_service_pb.GetAdGroupLabelRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_resources_ad_group_label_pb.AdGroupLabel>): grpc.ClientUnaryCall;
  mutateAdGroupLabels(argument: google_ads_googleads_v1_services_ad_group_label_service_pb.MutateAdGroupLabelsRequest, callback: grpc.requestCallback<google_ads_googleads_v1_services_ad_group_label_service_pb.MutateAdGroupLabelsResponse>): grpc.ClientUnaryCall;
  mutateAdGroupLabels(argument: google_ads_googleads_v1_services_ad_group_label_service_pb.MutateAdGroupLabelsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_services_ad_group_label_service_pb.MutateAdGroupLabelsResponse>): grpc.ClientUnaryCall;
  mutateAdGroupLabels(argument: google_ads_googleads_v1_services_ad_group_label_service_pb.MutateAdGroupLabelsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_services_ad_group_label_service_pb.MutateAdGroupLabelsResponse>): grpc.ClientUnaryCall;
}
