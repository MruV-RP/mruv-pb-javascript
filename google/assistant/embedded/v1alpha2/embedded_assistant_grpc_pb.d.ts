// GENERATED CODE -- DO NOT EDIT!

// package: google.assistant.embedded.v1alpha2
// file: google/assistant/embedded/v1alpha2/embedded_assistant.proto

import * as google_assistant_embedded_v1alpha2_embedded_assistant_pb from "../../../../google/assistant/embedded/v1alpha2/embedded_assistant_pb";
import * as grpc from "grpc";

interface IEmbeddedAssistantService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  assist: grpc.MethodDefinition<google_assistant_embedded_v1alpha2_embedded_assistant_pb.AssistRequest, google_assistant_embedded_v1alpha2_embedded_assistant_pb.AssistResponse>;
}

export const EmbeddedAssistantService: IEmbeddedAssistantService;

export class EmbeddedAssistantClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  assist(metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientDuplexStream<google_assistant_embedded_v1alpha2_embedded_assistant_pb.AssistRequest, google_assistant_embedded_v1alpha2_embedded_assistant_pb.AssistResponse>;
  assist(metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientDuplexStream<google_assistant_embedded_v1alpha2_embedded_assistant_pb.AssistRequest, google_assistant_embedded_v1alpha2_embedded_assistant_pb.AssistResponse>;
}
