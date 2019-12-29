// GENERATED CODE -- DO NOT EDIT!

// package: google.ads.googleads.v1.services
// file: google/ads/googleads/v1/services/paid_organic_search_term_view_service.proto

import * as google_ads_googleads_v1_services_paid_organic_search_term_view_service_pb from "../../../../../google/ads/googleads/v1/services/paid_organic_search_term_view_service_pb";
import * as google_ads_googleads_v1_resources_paid_organic_search_term_view_pb from "../../../../../google/ads/googleads/v1/resources/paid_organic_search_term_view_pb";
import * as grpc from "grpc";

interface IPaidOrganicSearchTermViewServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getPaidOrganicSearchTermView: grpc.MethodDefinition<google_ads_googleads_v1_services_paid_organic_search_term_view_service_pb.GetPaidOrganicSearchTermViewRequest, google_ads_googleads_v1_resources_paid_organic_search_term_view_pb.PaidOrganicSearchTermView>;
}

export const PaidOrganicSearchTermViewServiceService: IPaidOrganicSearchTermViewServiceService;

export class PaidOrganicSearchTermViewServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getPaidOrganicSearchTermView(argument: google_ads_googleads_v1_services_paid_organic_search_term_view_service_pb.GetPaidOrganicSearchTermViewRequest, callback: grpc.requestCallback<google_ads_googleads_v1_resources_paid_organic_search_term_view_pb.PaidOrganicSearchTermView>): grpc.ClientUnaryCall;
  getPaidOrganicSearchTermView(argument: google_ads_googleads_v1_services_paid_organic_search_term_view_service_pb.GetPaidOrganicSearchTermViewRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_resources_paid_organic_search_term_view_pb.PaidOrganicSearchTermView>): grpc.ClientUnaryCall;
  getPaidOrganicSearchTermView(argument: google_ads_googleads_v1_services_paid_organic_search_term_view_service_pb.GetPaidOrganicSearchTermViewRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_resources_paid_organic_search_term_view_pb.PaidOrganicSearchTermView>): grpc.ClientUnaryCall;
}
