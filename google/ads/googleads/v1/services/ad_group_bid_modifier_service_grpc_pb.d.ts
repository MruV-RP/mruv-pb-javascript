// GENERATED CODE -- DO NOT EDIT!

// package: google.ads.googleads.v1.services
// file: google/ads/googleads/v1/services/ad_group_bid_modifier_service.proto

import * as google_ads_googleads_v1_services_ad_group_bid_modifier_service_pb from "../../../../../google/ads/googleads/v1/services/ad_group_bid_modifier_service_pb";
import * as google_ads_googleads_v1_resources_ad_group_bid_modifier_pb from "../../../../../google/ads/googleads/v1/resources/ad_group_bid_modifier_pb";
import * as grpc from "grpc";

interface IAdGroupBidModifierServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getAdGroupBidModifier: grpc.MethodDefinition<google_ads_googleads_v1_services_ad_group_bid_modifier_service_pb.GetAdGroupBidModifierRequest, google_ads_googleads_v1_resources_ad_group_bid_modifier_pb.AdGroupBidModifier>;
  mutateAdGroupBidModifiers: grpc.MethodDefinition<google_ads_googleads_v1_services_ad_group_bid_modifier_service_pb.MutateAdGroupBidModifiersRequest, google_ads_googleads_v1_services_ad_group_bid_modifier_service_pb.MutateAdGroupBidModifiersResponse>;
}

export const AdGroupBidModifierServiceService: IAdGroupBidModifierServiceService;

export class AdGroupBidModifierServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getAdGroupBidModifier(argument: google_ads_googleads_v1_services_ad_group_bid_modifier_service_pb.GetAdGroupBidModifierRequest, callback: grpc.requestCallback<google_ads_googleads_v1_resources_ad_group_bid_modifier_pb.AdGroupBidModifier>): grpc.ClientUnaryCall;
  getAdGroupBidModifier(argument: google_ads_googleads_v1_services_ad_group_bid_modifier_service_pb.GetAdGroupBidModifierRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_resources_ad_group_bid_modifier_pb.AdGroupBidModifier>): grpc.ClientUnaryCall;
  getAdGroupBidModifier(argument: google_ads_googleads_v1_services_ad_group_bid_modifier_service_pb.GetAdGroupBidModifierRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_resources_ad_group_bid_modifier_pb.AdGroupBidModifier>): grpc.ClientUnaryCall;
  mutateAdGroupBidModifiers(argument: google_ads_googleads_v1_services_ad_group_bid_modifier_service_pb.MutateAdGroupBidModifiersRequest, callback: grpc.requestCallback<google_ads_googleads_v1_services_ad_group_bid_modifier_service_pb.MutateAdGroupBidModifiersResponse>): grpc.ClientUnaryCall;
  mutateAdGroupBidModifiers(argument: google_ads_googleads_v1_services_ad_group_bid_modifier_service_pb.MutateAdGroupBidModifiersRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_services_ad_group_bid_modifier_service_pb.MutateAdGroupBidModifiersResponse>): grpc.ClientUnaryCall;
  mutateAdGroupBidModifiers(argument: google_ads_googleads_v1_services_ad_group_bid_modifier_service_pb.MutateAdGroupBidModifiersRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_services_ad_group_bid_modifier_service_pb.MutateAdGroupBidModifiersResponse>): grpc.ClientUnaryCall;
}
