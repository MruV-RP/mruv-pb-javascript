// GENERATED CODE -- DO NOT EDIT!

// package: google.cloud.texttospeech.v1
// file: google/cloud/texttospeech/v1/cloud_tts.proto

import * as google_cloud_texttospeech_v1_cloud_tts_pb from "../../../../google/cloud/texttospeech/v1/cloud_tts_pb";
import * as grpc from "grpc";

interface ITextToSpeechService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  listVoices: grpc.MethodDefinition<google_cloud_texttospeech_v1_cloud_tts_pb.ListVoicesRequest, google_cloud_texttospeech_v1_cloud_tts_pb.ListVoicesResponse>;
  synthesizeSpeech: grpc.MethodDefinition<google_cloud_texttospeech_v1_cloud_tts_pb.SynthesizeSpeechRequest, google_cloud_texttospeech_v1_cloud_tts_pb.SynthesizeSpeechResponse>;
}

export const TextToSpeechService: ITextToSpeechService;

export class TextToSpeechClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  listVoices(argument: google_cloud_texttospeech_v1_cloud_tts_pb.ListVoicesRequest, callback: grpc.requestCallback<google_cloud_texttospeech_v1_cloud_tts_pb.ListVoicesResponse>): grpc.ClientUnaryCall;
  listVoices(argument: google_cloud_texttospeech_v1_cloud_tts_pb.ListVoicesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_texttospeech_v1_cloud_tts_pb.ListVoicesResponse>): grpc.ClientUnaryCall;
  listVoices(argument: google_cloud_texttospeech_v1_cloud_tts_pb.ListVoicesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_texttospeech_v1_cloud_tts_pb.ListVoicesResponse>): grpc.ClientUnaryCall;
  synthesizeSpeech(argument: google_cloud_texttospeech_v1_cloud_tts_pb.SynthesizeSpeechRequest, callback: grpc.requestCallback<google_cloud_texttospeech_v1_cloud_tts_pb.SynthesizeSpeechResponse>): grpc.ClientUnaryCall;
  synthesizeSpeech(argument: google_cloud_texttospeech_v1_cloud_tts_pb.SynthesizeSpeechRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_texttospeech_v1_cloud_tts_pb.SynthesizeSpeechResponse>): grpc.ClientUnaryCall;
  synthesizeSpeech(argument: google_cloud_texttospeech_v1_cloud_tts_pb.SynthesizeSpeechRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_texttospeech_v1_cloud_tts_pb.SynthesizeSpeechResponse>): grpc.ClientUnaryCall;
}
