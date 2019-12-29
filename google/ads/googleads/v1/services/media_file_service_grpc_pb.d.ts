// GENERATED CODE -- DO NOT EDIT!

// package: google.ads.googleads.v1.services
// file: google/ads/googleads/v1/services/media_file_service.proto

import * as google_ads_googleads_v1_services_media_file_service_pb from "../../../../../google/ads/googleads/v1/services/media_file_service_pb";
import * as google_ads_googleads_v1_resources_media_file_pb from "../../../../../google/ads/googleads/v1/resources/media_file_pb";
import * as grpc from "grpc";

interface IMediaFileServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getMediaFile: grpc.MethodDefinition<google_ads_googleads_v1_services_media_file_service_pb.GetMediaFileRequest, google_ads_googleads_v1_resources_media_file_pb.MediaFile>;
  mutateMediaFiles: grpc.MethodDefinition<google_ads_googleads_v1_services_media_file_service_pb.MutateMediaFilesRequest, google_ads_googleads_v1_services_media_file_service_pb.MutateMediaFilesResponse>;
}

export const MediaFileServiceService: IMediaFileServiceService;

export class MediaFileServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getMediaFile(argument: google_ads_googleads_v1_services_media_file_service_pb.GetMediaFileRequest, callback: grpc.requestCallback<google_ads_googleads_v1_resources_media_file_pb.MediaFile>): grpc.ClientUnaryCall;
  getMediaFile(argument: google_ads_googleads_v1_services_media_file_service_pb.GetMediaFileRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_resources_media_file_pb.MediaFile>): grpc.ClientUnaryCall;
  getMediaFile(argument: google_ads_googleads_v1_services_media_file_service_pb.GetMediaFileRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_resources_media_file_pb.MediaFile>): grpc.ClientUnaryCall;
  mutateMediaFiles(argument: google_ads_googleads_v1_services_media_file_service_pb.MutateMediaFilesRequest, callback: grpc.requestCallback<google_ads_googleads_v1_services_media_file_service_pb.MutateMediaFilesResponse>): grpc.ClientUnaryCall;
  mutateMediaFiles(argument: google_ads_googleads_v1_services_media_file_service_pb.MutateMediaFilesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_services_media_file_service_pb.MutateMediaFilesResponse>): grpc.ClientUnaryCall;
  mutateMediaFiles(argument: google_ads_googleads_v1_services_media_file_service_pb.MutateMediaFilesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_services_media_file_service_pb.MutateMediaFilesResponse>): grpc.ClientUnaryCall;
}
