// GENERATED CODE -- DO NOT EDIT!

// package: google.devtools.build.v1
// file: google/devtools/build/v1/publish_build_event.proto

import * as google_devtools_build_v1_publish_build_event_pb from "../../../../google/devtools/build/v1/publish_build_event_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "grpc";

interface IPublishBuildEventService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  publishLifecycleEvent: grpc.MethodDefinition<google_devtools_build_v1_publish_build_event_pb.PublishLifecycleEventRequest, google_protobuf_empty_pb.Empty>;
  publishBuildToolEventStream: grpc.MethodDefinition<google_devtools_build_v1_publish_build_event_pb.PublishBuildToolEventStreamRequest, google_devtools_build_v1_publish_build_event_pb.PublishBuildToolEventStreamResponse>;
}

export const PublishBuildEventService: IPublishBuildEventService;

export class PublishBuildEventClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  publishLifecycleEvent(argument: google_devtools_build_v1_publish_build_event_pb.PublishLifecycleEventRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  publishLifecycleEvent(argument: google_devtools_build_v1_publish_build_event_pb.PublishLifecycleEventRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  publishLifecycleEvent(argument: google_devtools_build_v1_publish_build_event_pb.PublishLifecycleEventRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  publishBuildToolEventStream(metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientDuplexStream<google_devtools_build_v1_publish_build_event_pb.PublishBuildToolEventStreamRequest, google_devtools_build_v1_publish_build_event_pb.PublishBuildToolEventStreamResponse>;
  publishBuildToolEventStream(metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientDuplexStream<google_devtools_build_v1_publish_build_event_pb.PublishBuildToolEventStreamRequest, google_devtools_build_v1_publish_build_event_pb.PublishBuildToolEventStreamResponse>;
}
