// GENERATED CODE -- DO NOT EDIT!

// package: google.assistant.embedded.v1alpha1
// file: google/assistant/embedded/v1alpha1/embedded_assistant.proto

import * as google_assistant_embedded_v1alpha1_embedded_assistant_pb from "../../../../google/assistant/embedded/v1alpha1/embedded_assistant_pb";
import * as grpc from "grpc";

interface IEmbeddedAssistantService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  converse: grpc.MethodDefinition<google_assistant_embedded_v1alpha1_embedded_assistant_pb.ConverseRequest, google_assistant_embedded_v1alpha1_embedded_assistant_pb.ConverseResponse>;
}

export const EmbeddedAssistantService: IEmbeddedAssistantService;

export class EmbeddedAssistantClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  converse(metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientDuplexStream<google_assistant_embedded_v1alpha1_embedded_assistant_pb.ConverseRequest, google_assistant_embedded_v1alpha1_embedded_assistant_pb.ConverseResponse>;
  converse(metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientDuplexStream<google_assistant_embedded_v1alpha1_embedded_assistant_pb.ConverseRequest, google_assistant_embedded_v1alpha1_embedded_assistant_pb.ConverseResponse>;
}
