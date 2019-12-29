// GENERATED CODE -- DO NOT EDIT!

// package: google.ads.googleads.v2.services
// file: google/ads/googleads/v2/services/product_group_view_service.proto

import * as google_ads_googleads_v2_services_product_group_view_service_pb from "../../../../../google/ads/googleads/v2/services/product_group_view_service_pb";
import * as google_ads_googleads_v2_resources_product_group_view_pb from "../../../../../google/ads/googleads/v2/resources/product_group_view_pb";
import * as grpc from "grpc";

interface IProductGroupViewServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getProductGroupView: grpc.MethodDefinition<google_ads_googleads_v2_services_product_group_view_service_pb.GetProductGroupViewRequest, google_ads_googleads_v2_resources_product_group_view_pb.ProductGroupView>;
}

export const ProductGroupViewServiceService: IProductGroupViewServiceService;

export class ProductGroupViewServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getProductGroupView(argument: google_ads_googleads_v2_services_product_group_view_service_pb.GetProductGroupViewRequest, callback: grpc.requestCallback<google_ads_googleads_v2_resources_product_group_view_pb.ProductGroupView>): grpc.ClientUnaryCall;
  getProductGroupView(argument: google_ads_googleads_v2_services_product_group_view_service_pb.GetProductGroupViewRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_resources_product_group_view_pb.ProductGroupView>): grpc.ClientUnaryCall;
  getProductGroupView(argument: google_ads_googleads_v2_services_product_group_view_service_pb.GetProductGroupViewRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_resources_product_group_view_pb.ProductGroupView>): grpc.ClientUnaryCall;
}
