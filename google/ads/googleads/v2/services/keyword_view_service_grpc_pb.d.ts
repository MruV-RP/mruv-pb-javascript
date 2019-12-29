// GENERATED CODE -- DO NOT EDIT!

// package: google.ads.googleads.v2.services
// file: google/ads/googleads/v2/services/keyword_view_service.proto

import * as google_ads_googleads_v2_services_keyword_view_service_pb from "../../../../../google/ads/googleads/v2/services/keyword_view_service_pb";
import * as google_ads_googleads_v2_resources_keyword_view_pb from "../../../../../google/ads/googleads/v2/resources/keyword_view_pb";
import * as grpc from "grpc";

interface IKeywordViewServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getKeywordView: grpc.MethodDefinition<google_ads_googleads_v2_services_keyword_view_service_pb.GetKeywordViewRequest, google_ads_googleads_v2_resources_keyword_view_pb.KeywordView>;
}

export const KeywordViewServiceService: IKeywordViewServiceService;

export class KeywordViewServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getKeywordView(argument: google_ads_googleads_v2_services_keyword_view_service_pb.GetKeywordViewRequest, callback: grpc.requestCallback<google_ads_googleads_v2_resources_keyword_view_pb.KeywordView>): grpc.ClientUnaryCall;
  getKeywordView(argument: google_ads_googleads_v2_services_keyword_view_service_pb.GetKeywordViewRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_resources_keyword_view_pb.KeywordView>): grpc.ClientUnaryCall;
  getKeywordView(argument: google_ads_googleads_v2_services_keyword_view_service_pb.GetKeywordViewRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_resources_keyword_view_pb.KeywordView>): grpc.ClientUnaryCall;
}
