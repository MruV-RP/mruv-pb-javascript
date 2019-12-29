// GENERATED CODE -- DO NOT EDIT!

// package: google.cloud.talent.v4beta1
// file: google/cloud/talent/v4beta1/completion_service.proto

import * as google_cloud_talent_v4beta1_completion_service_pb from "../../../../google/cloud/talent/v4beta1/completion_service_pb";
import * as grpc from "grpc";

interface ICompletionService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  completeQuery: grpc.MethodDefinition<google_cloud_talent_v4beta1_completion_service_pb.CompleteQueryRequest, google_cloud_talent_v4beta1_completion_service_pb.CompleteQueryResponse>;
}

export const CompletionService: ICompletionService;

export class CompletionClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  completeQuery(argument: google_cloud_talent_v4beta1_completion_service_pb.CompleteQueryRequest, callback: grpc.requestCallback<google_cloud_talent_v4beta1_completion_service_pb.CompleteQueryResponse>): grpc.ClientUnaryCall;
  completeQuery(argument: google_cloud_talent_v4beta1_completion_service_pb.CompleteQueryRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_talent_v4beta1_completion_service_pb.CompleteQueryResponse>): grpc.ClientUnaryCall;
  completeQuery(argument: google_cloud_talent_v4beta1_completion_service_pb.CompleteQueryRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_talent_v4beta1_completion_service_pb.CompleteQueryResponse>): grpc.ClientUnaryCall;
}
