// GENERATED CODE -- DO NOT EDIT!

// package: google.ads.googleads.v1.services
// file: google/ads/googleads/v1/services/domain_category_service.proto

import * as google_ads_googleads_v1_services_domain_category_service_pb from "../../../../../google/ads/googleads/v1/services/domain_category_service_pb";
import * as google_ads_googleads_v1_resources_domain_category_pb from "../../../../../google/ads/googleads/v1/resources/domain_category_pb";
import * as grpc from "grpc";

interface IDomainCategoryServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getDomainCategory: grpc.MethodDefinition<google_ads_googleads_v1_services_domain_category_service_pb.GetDomainCategoryRequest, google_ads_googleads_v1_resources_domain_category_pb.DomainCategory>;
}

export const DomainCategoryServiceService: IDomainCategoryServiceService;

export class DomainCategoryServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getDomainCategory(argument: google_ads_googleads_v1_services_domain_category_service_pb.GetDomainCategoryRequest, callback: grpc.requestCallback<google_ads_googleads_v1_resources_domain_category_pb.DomainCategory>): grpc.ClientUnaryCall;
  getDomainCategory(argument: google_ads_googleads_v1_services_domain_category_service_pb.GetDomainCategoryRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_resources_domain_category_pb.DomainCategory>): grpc.ClientUnaryCall;
  getDomainCategory(argument: google_ads_googleads_v1_services_domain_category_service_pb.GetDomainCategoryRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_resources_domain_category_pb.DomainCategory>): grpc.ClientUnaryCall;
}
