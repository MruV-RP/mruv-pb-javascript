// GENERATED CODE -- DO NOT EDIT!

// package: google.cloud.dialogflow.v2
// file: google/cloud/dialogflow/v2/session.proto

import * as google_cloud_dialogflow_v2_session_pb from "../../../../google/cloud/dialogflow/v2/session_pb";
import * as grpc from "grpc";

interface ISessionsService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  detectIntent: grpc.MethodDefinition<google_cloud_dialogflow_v2_session_pb.DetectIntentRequest, google_cloud_dialogflow_v2_session_pb.DetectIntentResponse>;
  streamingDetectIntent: grpc.MethodDefinition<google_cloud_dialogflow_v2_session_pb.StreamingDetectIntentRequest, google_cloud_dialogflow_v2_session_pb.StreamingDetectIntentResponse>;
}

export const SessionsService: ISessionsService;

export class SessionsClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  detectIntent(argument: google_cloud_dialogflow_v2_session_pb.DetectIntentRequest, callback: grpc.requestCallback<google_cloud_dialogflow_v2_session_pb.DetectIntentResponse>): grpc.ClientUnaryCall;
  detectIntent(argument: google_cloud_dialogflow_v2_session_pb.DetectIntentRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_dialogflow_v2_session_pb.DetectIntentResponse>): grpc.ClientUnaryCall;
  detectIntent(argument: google_cloud_dialogflow_v2_session_pb.DetectIntentRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_dialogflow_v2_session_pb.DetectIntentResponse>): grpc.ClientUnaryCall;
  streamingDetectIntent(metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientDuplexStream<google_cloud_dialogflow_v2_session_pb.StreamingDetectIntentRequest, google_cloud_dialogflow_v2_session_pb.StreamingDetectIntentResponse>;
  streamingDetectIntent(metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientDuplexStream<google_cloud_dialogflow_v2_session_pb.StreamingDetectIntentRequest, google_cloud_dialogflow_v2_session_pb.StreamingDetectIntentResponse>;
}
