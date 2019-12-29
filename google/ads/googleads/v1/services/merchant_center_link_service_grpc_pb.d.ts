// GENERATED CODE -- DO NOT EDIT!

// package: google.ads.googleads.v1.services
// file: google/ads/googleads/v1/services/merchant_center_link_service.proto

import * as google_ads_googleads_v1_services_merchant_center_link_service_pb from "../../../../../google/ads/googleads/v1/services/merchant_center_link_service_pb";
import * as google_ads_googleads_v1_resources_merchant_center_link_pb from "../../../../../google/ads/googleads/v1/resources/merchant_center_link_pb";
import * as grpc from "grpc";

interface IMerchantCenterLinkServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  listMerchantCenterLinks: grpc.MethodDefinition<google_ads_googleads_v1_services_merchant_center_link_service_pb.ListMerchantCenterLinksRequest, google_ads_googleads_v1_services_merchant_center_link_service_pb.ListMerchantCenterLinksResponse>;
  getMerchantCenterLink: grpc.MethodDefinition<google_ads_googleads_v1_services_merchant_center_link_service_pb.GetMerchantCenterLinkRequest, google_ads_googleads_v1_resources_merchant_center_link_pb.MerchantCenterLink>;
  mutateMerchantCenterLink: grpc.MethodDefinition<google_ads_googleads_v1_services_merchant_center_link_service_pb.MutateMerchantCenterLinkRequest, google_ads_googleads_v1_services_merchant_center_link_service_pb.MutateMerchantCenterLinkResponse>;
}

export const MerchantCenterLinkServiceService: IMerchantCenterLinkServiceService;

export class MerchantCenterLinkServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  listMerchantCenterLinks(argument: google_ads_googleads_v1_services_merchant_center_link_service_pb.ListMerchantCenterLinksRequest, callback: grpc.requestCallback<google_ads_googleads_v1_services_merchant_center_link_service_pb.ListMerchantCenterLinksResponse>): grpc.ClientUnaryCall;
  listMerchantCenterLinks(argument: google_ads_googleads_v1_services_merchant_center_link_service_pb.ListMerchantCenterLinksRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_services_merchant_center_link_service_pb.ListMerchantCenterLinksResponse>): grpc.ClientUnaryCall;
  listMerchantCenterLinks(argument: google_ads_googleads_v1_services_merchant_center_link_service_pb.ListMerchantCenterLinksRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_services_merchant_center_link_service_pb.ListMerchantCenterLinksResponse>): grpc.ClientUnaryCall;
  getMerchantCenterLink(argument: google_ads_googleads_v1_services_merchant_center_link_service_pb.GetMerchantCenterLinkRequest, callback: grpc.requestCallback<google_ads_googleads_v1_resources_merchant_center_link_pb.MerchantCenterLink>): grpc.ClientUnaryCall;
  getMerchantCenterLink(argument: google_ads_googleads_v1_services_merchant_center_link_service_pb.GetMerchantCenterLinkRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_resources_merchant_center_link_pb.MerchantCenterLink>): grpc.ClientUnaryCall;
  getMerchantCenterLink(argument: google_ads_googleads_v1_services_merchant_center_link_service_pb.GetMerchantCenterLinkRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_resources_merchant_center_link_pb.MerchantCenterLink>): grpc.ClientUnaryCall;
  mutateMerchantCenterLink(argument: google_ads_googleads_v1_services_merchant_center_link_service_pb.MutateMerchantCenterLinkRequest, callback: grpc.requestCallback<google_ads_googleads_v1_services_merchant_center_link_service_pb.MutateMerchantCenterLinkResponse>): grpc.ClientUnaryCall;
  mutateMerchantCenterLink(argument: google_ads_googleads_v1_services_merchant_center_link_service_pb.MutateMerchantCenterLinkRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_services_merchant_center_link_service_pb.MutateMerchantCenterLinkResponse>): grpc.ClientUnaryCall;
  mutateMerchantCenterLink(argument: google_ads_googleads_v1_services_merchant_center_link_service_pb.MutateMerchantCenterLinkRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_services_merchant_center_link_service_pb.MutateMerchantCenterLinkResponse>): grpc.ClientUnaryCall;
}
