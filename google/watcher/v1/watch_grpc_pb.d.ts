// GENERATED CODE -- DO NOT EDIT!

// package: google.watcher.v1
// file: google/watcher/v1/watch.proto

import * as google_watcher_v1_watch_pb from "../../../google/watcher/v1/watch_pb";
import * as grpc from "grpc";

interface IWatcherService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  watch: grpc.MethodDefinition<google_watcher_v1_watch_pb.Request, google_watcher_v1_watch_pb.ChangeBatch>;
}

export const WatcherService: IWatcherService;

export class WatcherClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  watch(argument: google_watcher_v1_watch_pb.Request, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<google_watcher_v1_watch_pb.ChangeBatch>;
  watch(argument: google_watcher_v1_watch_pb.Request, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<google_watcher_v1_watch_pb.ChangeBatch>;
}
