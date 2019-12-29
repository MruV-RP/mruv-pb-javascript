// GENERATED CODE -- DO NOT EDIT!

// package: google.cloud.videointelligence.v1beta2
// file: google/cloud/videointelligence/v1beta2/video_intelligence.proto

import * as google_cloud_videointelligence_v1beta2_video_intelligence_pb from "../../../../google/cloud/videointelligence/v1beta2/video_intelligence_pb";
import * as google_longrunning_operations_pb from "../../../../google/longrunning/operations_pb";
import * as grpc from "grpc";

interface IVideoIntelligenceServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  annotateVideo: grpc.MethodDefinition<google_cloud_videointelligence_v1beta2_video_intelligence_pb.AnnotateVideoRequest, google_longrunning_operations_pb.Operation>;
}

export const VideoIntelligenceServiceService: IVideoIntelligenceServiceService;

export class VideoIntelligenceServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  annotateVideo(argument: google_cloud_videointelligence_v1beta2_video_intelligence_pb.AnnotateVideoRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  annotateVideo(argument: google_cloud_videointelligence_v1beta2_video_intelligence_pb.AnnotateVideoRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  annotateVideo(argument: google_cloud_videointelligence_v1beta2_video_intelligence_pb.AnnotateVideoRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
}
