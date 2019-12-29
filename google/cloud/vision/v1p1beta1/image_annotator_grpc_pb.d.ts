// GENERATED CODE -- DO NOT EDIT!

// package: google.cloud.vision.v1p1beta1
// file: google/cloud/vision/v1p1beta1/image_annotator.proto

import * as google_cloud_vision_v1p1beta1_image_annotator_pb from "../../../../google/cloud/vision/v1p1beta1/image_annotator_pb";
import * as grpc from "grpc";

interface IImageAnnotatorService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  batchAnnotateImages: grpc.MethodDefinition<google_cloud_vision_v1p1beta1_image_annotator_pb.BatchAnnotateImagesRequest, google_cloud_vision_v1p1beta1_image_annotator_pb.BatchAnnotateImagesResponse>;
}

export const ImageAnnotatorService: IImageAnnotatorService;

export class ImageAnnotatorClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  batchAnnotateImages(argument: google_cloud_vision_v1p1beta1_image_annotator_pb.BatchAnnotateImagesRequest, callback: grpc.requestCallback<google_cloud_vision_v1p1beta1_image_annotator_pb.BatchAnnotateImagesResponse>): grpc.ClientUnaryCall;
  batchAnnotateImages(argument: google_cloud_vision_v1p1beta1_image_annotator_pb.BatchAnnotateImagesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_vision_v1p1beta1_image_annotator_pb.BatchAnnotateImagesResponse>): grpc.ClientUnaryCall;
  batchAnnotateImages(argument: google_cloud_vision_v1p1beta1_image_annotator_pb.BatchAnnotateImagesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_vision_v1p1beta1_image_annotator_pb.BatchAnnotateImagesResponse>): grpc.ClientUnaryCall;
}
