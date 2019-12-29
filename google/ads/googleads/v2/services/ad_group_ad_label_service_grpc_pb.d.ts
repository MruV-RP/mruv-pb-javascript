// GENERATED CODE -- DO NOT EDIT!

// package: google.ads.googleads.v2.services
// file: google/ads/googleads/v2/services/ad_group_ad_label_service.proto

import * as google_ads_googleads_v2_services_ad_group_ad_label_service_pb from "../../../../../google/ads/googleads/v2/services/ad_group_ad_label_service_pb";
import * as google_ads_googleads_v2_resources_ad_group_ad_label_pb from "../../../../../google/ads/googleads/v2/resources/ad_group_ad_label_pb";
import * as grpc from "grpc";

interface IAdGroupAdLabelServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getAdGroupAdLabel: grpc.MethodDefinition<google_ads_googleads_v2_services_ad_group_ad_label_service_pb.GetAdGroupAdLabelRequest, google_ads_googleads_v2_resources_ad_group_ad_label_pb.AdGroupAdLabel>;
  mutateAdGroupAdLabels: grpc.MethodDefinition<google_ads_googleads_v2_services_ad_group_ad_label_service_pb.MutateAdGroupAdLabelsRequest, google_ads_googleads_v2_services_ad_group_ad_label_service_pb.MutateAdGroupAdLabelsResponse>;
}

export const AdGroupAdLabelServiceService: IAdGroupAdLabelServiceService;

export class AdGroupAdLabelServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getAdGroupAdLabel(argument: google_ads_googleads_v2_services_ad_group_ad_label_service_pb.GetAdGroupAdLabelRequest, callback: grpc.requestCallback<google_ads_googleads_v2_resources_ad_group_ad_label_pb.AdGroupAdLabel>): grpc.ClientUnaryCall;
  getAdGroupAdLabel(argument: google_ads_googleads_v2_services_ad_group_ad_label_service_pb.GetAdGroupAdLabelRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_resources_ad_group_ad_label_pb.AdGroupAdLabel>): grpc.ClientUnaryCall;
  getAdGroupAdLabel(argument: google_ads_googleads_v2_services_ad_group_ad_label_service_pb.GetAdGroupAdLabelRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_resources_ad_group_ad_label_pb.AdGroupAdLabel>): grpc.ClientUnaryCall;
  mutateAdGroupAdLabels(argument: google_ads_googleads_v2_services_ad_group_ad_label_service_pb.MutateAdGroupAdLabelsRequest, callback: grpc.requestCallback<google_ads_googleads_v2_services_ad_group_ad_label_service_pb.MutateAdGroupAdLabelsResponse>): grpc.ClientUnaryCall;
  mutateAdGroupAdLabels(argument: google_ads_googleads_v2_services_ad_group_ad_label_service_pb.MutateAdGroupAdLabelsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_services_ad_group_ad_label_service_pb.MutateAdGroupAdLabelsResponse>): grpc.ClientUnaryCall;
  mutateAdGroupAdLabels(argument: google_ads_googleads_v2_services_ad_group_ad_label_service_pb.MutateAdGroupAdLabelsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_services_ad_group_ad_label_service_pb.MutateAdGroupAdLabelsResponse>): grpc.ClientUnaryCall;
}
