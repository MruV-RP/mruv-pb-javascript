// GENERATED CODE -- DO NOT EDIT!

// package: google.ads.googleads.v1.services
// file: google/ads/googleads/v1/services/conversion_adjustment_upload_service.proto

import * as google_ads_googleads_v1_services_conversion_adjustment_upload_service_pb from "../../../../../google/ads/googleads/v1/services/conversion_adjustment_upload_service_pb";
import * as grpc from "grpc";

interface IConversionAdjustmentUploadServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  uploadConversionAdjustments: grpc.MethodDefinition<google_ads_googleads_v1_services_conversion_adjustment_upload_service_pb.UploadConversionAdjustmentsRequest, google_ads_googleads_v1_services_conversion_adjustment_upload_service_pb.UploadConversionAdjustmentsResponse>;
}

export const ConversionAdjustmentUploadServiceService: IConversionAdjustmentUploadServiceService;

export class ConversionAdjustmentUploadServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  uploadConversionAdjustments(argument: google_ads_googleads_v1_services_conversion_adjustment_upload_service_pb.UploadConversionAdjustmentsRequest, callback: grpc.requestCallback<google_ads_googleads_v1_services_conversion_adjustment_upload_service_pb.UploadConversionAdjustmentsResponse>): grpc.ClientUnaryCall;
  uploadConversionAdjustments(argument: google_ads_googleads_v1_services_conversion_adjustment_upload_service_pb.UploadConversionAdjustmentsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_services_conversion_adjustment_upload_service_pb.UploadConversionAdjustmentsResponse>): grpc.ClientUnaryCall;
  uploadConversionAdjustments(argument: google_ads_googleads_v1_services_conversion_adjustment_upload_service_pb.UploadConversionAdjustmentsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_services_conversion_adjustment_upload_service_pb.UploadConversionAdjustmentsResponse>): grpc.ClientUnaryCall;
}
