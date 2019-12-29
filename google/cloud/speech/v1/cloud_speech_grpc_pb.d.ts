// GENERATED CODE -- DO NOT EDIT!

// package: google.cloud.speech.v1
// file: google/cloud/speech/v1/cloud_speech.proto

import * as google_cloud_speech_v1_cloud_speech_pb from "../../../../google/cloud/speech/v1/cloud_speech_pb";
import * as google_longrunning_operations_pb from "../../../../google/longrunning/operations_pb";
import * as grpc from "grpc";

interface ISpeechService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  recognize: grpc.MethodDefinition<google_cloud_speech_v1_cloud_speech_pb.RecognizeRequest, google_cloud_speech_v1_cloud_speech_pb.RecognizeResponse>;
  longRunningRecognize: grpc.MethodDefinition<google_cloud_speech_v1_cloud_speech_pb.LongRunningRecognizeRequest, google_longrunning_operations_pb.Operation>;
  streamingRecognize: grpc.MethodDefinition<google_cloud_speech_v1_cloud_speech_pb.StreamingRecognizeRequest, google_cloud_speech_v1_cloud_speech_pb.StreamingRecognizeResponse>;
}

export const SpeechService: ISpeechService;

export class SpeechClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  recognize(argument: google_cloud_speech_v1_cloud_speech_pb.RecognizeRequest, callback: grpc.requestCallback<google_cloud_speech_v1_cloud_speech_pb.RecognizeResponse>): grpc.ClientUnaryCall;
  recognize(argument: google_cloud_speech_v1_cloud_speech_pb.RecognizeRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_speech_v1_cloud_speech_pb.RecognizeResponse>): grpc.ClientUnaryCall;
  recognize(argument: google_cloud_speech_v1_cloud_speech_pb.RecognizeRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_speech_v1_cloud_speech_pb.RecognizeResponse>): grpc.ClientUnaryCall;
  longRunningRecognize(argument: google_cloud_speech_v1_cloud_speech_pb.LongRunningRecognizeRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  longRunningRecognize(argument: google_cloud_speech_v1_cloud_speech_pb.LongRunningRecognizeRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  longRunningRecognize(argument: google_cloud_speech_v1_cloud_speech_pb.LongRunningRecognizeRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  streamingRecognize(metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientDuplexStream<google_cloud_speech_v1_cloud_speech_pb.StreamingRecognizeRequest, google_cloud_speech_v1_cloud_speech_pb.StreamingRecognizeResponse>;
  streamingRecognize(metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientDuplexStream<google_cloud_speech_v1_cloud_speech_pb.StreamingRecognizeRequest, google_cloud_speech_v1_cloud_speech_pb.StreamingRecognizeResponse>;
}
