// GENERATED CODE -- DO NOT EDIT!

// package: google.cloud.documentai.v1beta1
// file: google/cloud/documentai/v1beta1/document_understanding.proto

import * as google_cloud_documentai_v1beta1_document_understanding_pb from "../../../../google/cloud/documentai/v1beta1/document_understanding_pb";
import * as google_longrunning_operations_pb from "../../../../google/longrunning/operations_pb";
import * as grpc from "grpc";

interface IDocumentUnderstandingServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  batchProcessDocuments: grpc.MethodDefinition<google_cloud_documentai_v1beta1_document_understanding_pb.BatchProcessDocumentsRequest, google_longrunning_operations_pb.Operation>;
}

export const DocumentUnderstandingServiceService: IDocumentUnderstandingServiceService;

export class DocumentUnderstandingServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  batchProcessDocuments(argument: google_cloud_documentai_v1beta1_document_understanding_pb.BatchProcessDocumentsRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  batchProcessDocuments(argument: google_cloud_documentai_v1beta1_document_understanding_pb.BatchProcessDocumentsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  batchProcessDocuments(argument: google_cloud_documentai_v1beta1_document_understanding_pb.BatchProcessDocumentsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
}
