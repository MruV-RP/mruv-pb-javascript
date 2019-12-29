// GENERATED CODE -- DO NOT EDIT!

// package: google.ads.googleads.v1.services
// file: google/ads/googleads/v1/services/video_service.proto

import * as google_ads_googleads_v1_services_video_service_pb from "../../../../../google/ads/googleads/v1/services/video_service_pb";
import * as google_ads_googleads_v1_resources_video_pb from "../../../../../google/ads/googleads/v1/resources/video_pb";
import * as grpc from "grpc";

interface IVideoServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getVideo: grpc.MethodDefinition<google_ads_googleads_v1_services_video_service_pb.GetVideoRequest, google_ads_googleads_v1_resources_video_pb.Video>;
}

export const VideoServiceService: IVideoServiceService;

export class VideoServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getVideo(argument: google_ads_googleads_v1_services_video_service_pb.GetVideoRequest, callback: grpc.requestCallback<google_ads_googleads_v1_resources_video_pb.Video>): grpc.ClientUnaryCall;
  getVideo(argument: google_ads_googleads_v1_services_video_service_pb.GetVideoRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_resources_video_pb.Video>): grpc.ClientUnaryCall;
  getVideo(argument: google_ads_googleads_v1_services_video_service_pb.GetVideoRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_ads_googleads_v1_resources_video_pb.Video>): grpc.ClientUnaryCall;
}
