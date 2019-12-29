// GENERATED CODE -- DO NOT EDIT!

// package: google.streetview.publish.v1
// file: google/streetview/publish/v1/streetview_publish.proto

import * as google_streetview_publish_v1_streetview_publish_pb from "../../../../google/streetview/publish/v1/streetview_publish_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_streetview_publish_v1_resources_pb from "../../../../google/streetview/publish/v1/resources_pb";
import * as google_streetview_publish_v1_rpcmessages_pb from "../../../../google/streetview/publish/v1/rpcmessages_pb";
import * as grpc from "grpc";

interface IStreetViewPublishServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  startUpload: grpc.MethodDefinition<google_protobuf_empty_pb.Empty, google_streetview_publish_v1_resources_pb.UploadRef>;
  createPhoto: grpc.MethodDefinition<google_streetview_publish_v1_rpcmessages_pb.CreatePhotoRequest, google_streetview_publish_v1_resources_pb.Photo>;
  getPhoto: grpc.MethodDefinition<google_streetview_publish_v1_rpcmessages_pb.GetPhotoRequest, google_streetview_publish_v1_resources_pb.Photo>;
  batchGetPhotos: grpc.MethodDefinition<google_streetview_publish_v1_rpcmessages_pb.BatchGetPhotosRequest, google_streetview_publish_v1_rpcmessages_pb.BatchGetPhotosResponse>;
  listPhotos: grpc.MethodDefinition<google_streetview_publish_v1_rpcmessages_pb.ListPhotosRequest, google_streetview_publish_v1_rpcmessages_pb.ListPhotosResponse>;
  updatePhoto: grpc.MethodDefinition<google_streetview_publish_v1_rpcmessages_pb.UpdatePhotoRequest, google_streetview_publish_v1_resources_pb.Photo>;
  batchUpdatePhotos: grpc.MethodDefinition<google_streetview_publish_v1_rpcmessages_pb.BatchUpdatePhotosRequest, google_streetview_publish_v1_rpcmessages_pb.BatchUpdatePhotosResponse>;
  deletePhoto: grpc.MethodDefinition<google_streetview_publish_v1_rpcmessages_pb.DeletePhotoRequest, google_protobuf_empty_pb.Empty>;
  batchDeletePhotos: grpc.MethodDefinition<google_streetview_publish_v1_rpcmessages_pb.BatchDeletePhotosRequest, google_streetview_publish_v1_rpcmessages_pb.BatchDeletePhotosResponse>;
}

export const StreetViewPublishServiceService: IStreetViewPublishServiceService;

export class StreetViewPublishServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  startUpload(argument: google_protobuf_empty_pb.Empty, callback: grpc.requestCallback<google_streetview_publish_v1_resources_pb.UploadRef>): grpc.ClientUnaryCall;
  startUpload(argument: google_protobuf_empty_pb.Empty, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_streetview_publish_v1_resources_pb.UploadRef>): grpc.ClientUnaryCall;
  startUpload(argument: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_streetview_publish_v1_resources_pb.UploadRef>): grpc.ClientUnaryCall;
  createPhoto(argument: google_streetview_publish_v1_rpcmessages_pb.CreatePhotoRequest, callback: grpc.requestCallback<google_streetview_publish_v1_resources_pb.Photo>): grpc.ClientUnaryCall;
  createPhoto(argument: google_streetview_publish_v1_rpcmessages_pb.CreatePhotoRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_streetview_publish_v1_resources_pb.Photo>): grpc.ClientUnaryCall;
  createPhoto(argument: google_streetview_publish_v1_rpcmessages_pb.CreatePhotoRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_streetview_publish_v1_resources_pb.Photo>): grpc.ClientUnaryCall;
  getPhoto(argument: google_streetview_publish_v1_rpcmessages_pb.GetPhotoRequest, callback: grpc.requestCallback<google_streetview_publish_v1_resources_pb.Photo>): grpc.ClientUnaryCall;
  getPhoto(argument: google_streetview_publish_v1_rpcmessages_pb.GetPhotoRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_streetview_publish_v1_resources_pb.Photo>): grpc.ClientUnaryCall;
  getPhoto(argument: google_streetview_publish_v1_rpcmessages_pb.GetPhotoRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_streetview_publish_v1_resources_pb.Photo>): grpc.ClientUnaryCall;
  batchGetPhotos(argument: google_streetview_publish_v1_rpcmessages_pb.BatchGetPhotosRequest, callback: grpc.requestCallback<google_streetview_publish_v1_rpcmessages_pb.BatchGetPhotosResponse>): grpc.ClientUnaryCall;
  batchGetPhotos(argument: google_streetview_publish_v1_rpcmessages_pb.BatchGetPhotosRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_streetview_publish_v1_rpcmessages_pb.BatchGetPhotosResponse>): grpc.ClientUnaryCall;
  batchGetPhotos(argument: google_streetview_publish_v1_rpcmessages_pb.BatchGetPhotosRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_streetview_publish_v1_rpcmessages_pb.BatchGetPhotosResponse>): grpc.ClientUnaryCall;
  listPhotos(argument: google_streetview_publish_v1_rpcmessages_pb.ListPhotosRequest, callback: grpc.requestCallback<google_streetview_publish_v1_rpcmessages_pb.ListPhotosResponse>): grpc.ClientUnaryCall;
  listPhotos(argument: google_streetview_publish_v1_rpcmessages_pb.ListPhotosRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_streetview_publish_v1_rpcmessages_pb.ListPhotosResponse>): grpc.ClientUnaryCall;
  listPhotos(argument: google_streetview_publish_v1_rpcmessages_pb.ListPhotosRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_streetview_publish_v1_rpcmessages_pb.ListPhotosResponse>): grpc.ClientUnaryCall;
  updatePhoto(argument: google_streetview_publish_v1_rpcmessages_pb.UpdatePhotoRequest, callback: grpc.requestCallback<google_streetview_publish_v1_resources_pb.Photo>): grpc.ClientUnaryCall;
  updatePhoto(argument: google_streetview_publish_v1_rpcmessages_pb.UpdatePhotoRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_streetview_publish_v1_resources_pb.Photo>): grpc.ClientUnaryCall;
  updatePhoto(argument: google_streetview_publish_v1_rpcmessages_pb.UpdatePhotoRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_streetview_publish_v1_resources_pb.Photo>): grpc.ClientUnaryCall;
  batchUpdatePhotos(argument: google_streetview_publish_v1_rpcmessages_pb.BatchUpdatePhotosRequest, callback: grpc.requestCallback<google_streetview_publish_v1_rpcmessages_pb.BatchUpdatePhotosResponse>): grpc.ClientUnaryCall;
  batchUpdatePhotos(argument: google_streetview_publish_v1_rpcmessages_pb.BatchUpdatePhotosRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_streetview_publish_v1_rpcmessages_pb.BatchUpdatePhotosResponse>): grpc.ClientUnaryCall;
  batchUpdatePhotos(argument: google_streetview_publish_v1_rpcmessages_pb.BatchUpdatePhotosRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_streetview_publish_v1_rpcmessages_pb.BatchUpdatePhotosResponse>): grpc.ClientUnaryCall;
  deletePhoto(argument: google_streetview_publish_v1_rpcmessages_pb.DeletePhotoRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deletePhoto(argument: google_streetview_publish_v1_rpcmessages_pb.DeletePhotoRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deletePhoto(argument: google_streetview_publish_v1_rpcmessages_pb.DeletePhotoRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  batchDeletePhotos(argument: google_streetview_publish_v1_rpcmessages_pb.BatchDeletePhotosRequest, callback: grpc.requestCallback<google_streetview_publish_v1_rpcmessages_pb.BatchDeletePhotosResponse>): grpc.ClientUnaryCall;
  batchDeletePhotos(argument: google_streetview_publish_v1_rpcmessages_pb.BatchDeletePhotosRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_streetview_publish_v1_rpcmessages_pb.BatchDeletePhotosResponse>): grpc.ClientUnaryCall;
  batchDeletePhotos(argument: google_streetview_publish_v1_rpcmessages_pb.BatchDeletePhotosRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_streetview_publish_v1_rpcmessages_pb.BatchDeletePhotosResponse>): grpc.ClientUnaryCall;
}
