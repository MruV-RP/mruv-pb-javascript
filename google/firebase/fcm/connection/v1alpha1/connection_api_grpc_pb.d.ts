// GENERATED CODE -- DO NOT EDIT!

// package: google.firebase.fcm.connection.v1alpha1
// file: google/firebase/fcm/connection/v1alpha1/connection_api.proto

import * as google_firebase_fcm_connection_v1alpha1_connection_api_pb from "../../../../../google/firebase/fcm/connection/v1alpha1/connection_api_pb";
import * as grpc from "grpc";

interface IConnectionApiService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  connect: grpc.MethodDefinition<google_firebase_fcm_connection_v1alpha1_connection_api_pb.UpstreamRequest, google_firebase_fcm_connection_v1alpha1_connection_api_pb.DownstreamResponse>;
}

export const ConnectionApiService: IConnectionApiService;

export class ConnectionApiClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  connect(metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientDuplexStream<google_firebase_fcm_connection_v1alpha1_connection_api_pb.UpstreamRequest, google_firebase_fcm_connection_v1alpha1_connection_api_pb.DownstreamResponse>;
  connect(metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientDuplexStream<google_firebase_fcm_connection_v1alpha1_connection_api_pb.UpstreamRequest, google_firebase_fcm_connection_v1alpha1_connection_api_pb.DownstreamResponse>;
}
