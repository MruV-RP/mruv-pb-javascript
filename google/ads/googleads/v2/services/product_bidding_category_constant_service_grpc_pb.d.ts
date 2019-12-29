// GENERATED CODE -- DO NOT EDIT!

// package: google.ads.googleads.v2.services
// file: google/ads/googleads/v2/services/product_bidding_category_constant_service.proto

import * as google_ads_googleads_v2_services_product_bidding_category_constant_service_pb from "../../../../../google/ads/googleads/v2/services/product_bidding_category_constant_service_pb";
import * as google_ads_googleads_v2_resources_product_bidding_category_constant_pb from "../../../../../google/ads/googleads/v2/resources/product_bidding_category_constant_pb";
import * as grpc from "grpc";

interface IProductBiddingCategoryConstantServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getProductBiddingCategoryConstant: grpc.MethodDefinition<google_ads_googleads_v2_services_product_bidding_category_constant_service_pb.GetProductBiddingCategoryConstantRequest, google_ads_googleads_v2_resources_product_bidding_category_constant_pb.ProductBiddingCategoryConstant>;
}

export const ProductBiddingCategoryConstantServiceService: IProductBiddingCategoryConstantServiceService;

export class ProductBiddingCategoryConstantServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getProductBiddingCategoryConstant(argument: google_ads_googleads_v2_services_product_bidding_category_constant_service_pb.GetProductBiddingCategoryConstantRequest, callback: grpc.requestCallback<google_ads_googleads_v2_resources_product_bidding_category_constant_pb.ProductBiddingCategoryConstant>): grpc.ClientUnaryCall;
  getProductBiddingCategoryConstant(argument: google_ads_googleads_v2_services_product_bidding_category_constant_service_pb.GetProductBiddingCategoryConstantRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_resources_product_bidding_category_constant_pb.ProductBiddingCategoryConstant>): grpc.ClientUnaryCall;
  getProductBiddingCategoryConstant(argument: google_ads_googleads_v2_services_product_bidding_category_constant_service_pb.GetProductBiddingCategoryConstantRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v2_resources_product_bidding_category_constant_pb.ProductBiddingCategoryConstant>): grpc.ClientUnaryCall;
}
