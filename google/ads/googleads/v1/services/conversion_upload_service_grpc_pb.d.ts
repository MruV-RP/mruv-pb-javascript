// GENERATED CODE -- DO NOT EDIT!

// package: google.ads.googleads.v1.services
// file: google/ads/googleads/v1/services/conversion_upload_service.proto

import * as google_ads_googleads_v1_services_conversion_upload_service_pb from "../../../../../google/ads/googleads/v1/services/conversion_upload_service_pb";
import * as grpc from "grpc";

interface IConversionUploadServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  uploadClickConversions: grpc.MethodDefinition<google_ads_googleads_v1_services_conversion_upload_service_pb.UploadClickConversionsRequest, google_ads_googleads_v1_services_conversion_upload_service_pb.UploadClickConversionsResponse>;
  uploadCallConversions: grpc.MethodDefinition<google_ads_googleads_v1_services_conversion_upload_service_pb.UploadCallConversionsRequest, google_ads_googleads_v1_services_conversion_upload_service_pb.UploadCallConversionsResponse>;
}

export const ConversionUploadServiceService: IConversionUploadServiceService;

export class ConversionUploadServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  uploadClickConversions(argument: google_ads_googleads_v1_services_conversion_upload_service_pb.UploadClickConversionsRequest, callback: grpc.requestCallback<google_ads_googleads_v1_services_conversion_upload_service_pb.UploadClickConversionsResponse>): grpc.ClientUnaryCall;
  uploadClickConversions(argument: google_ads_googleads_v1_services_conversion_upload_service_pb.UploadClickConversionsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_services_conversion_upload_service_pb.UploadClickConversionsResponse>): grpc.ClientUnaryCall;
  uploadClickConversions(argument: google_ads_googleads_v1_services_conversion_upload_service_pb.UploadClickConversionsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_services_conversion_upload_service_pb.UploadClickConversionsResponse>): grpc.ClientUnaryCall;
  uploadCallConversions(argument: google_ads_googleads_v1_services_conversion_upload_service_pb.UploadCallConversionsRequest, callback: grpc.requestCallback<google_ads_googleads_v1_services_conversion_upload_service_pb.UploadCallConversionsResponse>): grpc.ClientUnaryCall;
  uploadCallConversions(argument: google_ads_googleads_v1_services_conversion_upload_service_pb.UploadCallConversionsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_services_conversion_upload_service_pb.UploadCallConversionsResponse>): grpc.ClientUnaryCall;
  uploadCallConversions(argument: google_ads_googleads_v1_services_conversion_upload_service_pb.UploadCallConversionsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_services_conversion_upload_service_pb.UploadCallConversionsResponse>): grpc.ClientUnaryCall;
}
