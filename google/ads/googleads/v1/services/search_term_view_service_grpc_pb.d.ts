// GENERATED CODE -- DO NOT EDIT!

// package: google.ads.googleads.v1.services
// file: google/ads/googleads/v1/services/search_term_view_service.proto

import * as google_ads_googleads_v1_services_search_term_view_service_pb from "../../../../../google/ads/googleads/v1/services/search_term_view_service_pb";
import * as google_ads_googleads_v1_resources_search_term_view_pb from "../../../../../google/ads/googleads/v1/resources/search_term_view_pb";
import * as grpc from "grpc";

interface ISearchTermViewServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getSearchTermView: grpc.MethodDefinition<google_ads_googleads_v1_services_search_term_view_service_pb.GetSearchTermViewRequest, google_ads_googleads_v1_resources_search_term_view_pb.SearchTermView>;
}

export const SearchTermViewServiceService: ISearchTermViewServiceService;

export class SearchTermViewServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getSearchTermView(argument: google_ads_googleads_v1_services_search_term_view_service_pb.GetSearchTermViewRequest, callback: grpc.requestCallback<google_ads_googleads_v1_resources_search_term_view_pb.SearchTermView>): grpc.ClientUnaryCall;
  getSearchTermView(argument: google_ads_googleads_v1_services_search_term_view_service_pb.GetSearchTermViewRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_resources_search_term_view_pb.SearchTermView>): grpc.ClientUnaryCall;
  getSearchTermView(argument: google_ads_googleads_v1_services_search_term_view_service_pb.GetSearchTermViewRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_resources_search_term_view_pb.SearchTermView>): grpc.ClientUnaryCall;
}
