// GENERATED CODE -- DO NOT EDIT!

// package: google.genomics.v1
// file: google/genomics/v1/annotations.proto

import * as google_genomics_v1_annotations_pb from "../../../google/genomics/v1/annotations_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "grpc";

interface IAnnotationServiceV1Service extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createAnnotationSet: grpc.MethodDefinition<google_genomics_v1_annotations_pb.CreateAnnotationSetRequest, google_genomics_v1_annotations_pb.AnnotationSet>;
  getAnnotationSet: grpc.MethodDefinition<google_genomics_v1_annotations_pb.GetAnnotationSetRequest, google_genomics_v1_annotations_pb.AnnotationSet>;
  updateAnnotationSet: grpc.MethodDefinition<google_genomics_v1_annotations_pb.UpdateAnnotationSetRequest, google_genomics_v1_annotations_pb.AnnotationSet>;
  deleteAnnotationSet: grpc.MethodDefinition<google_genomics_v1_annotations_pb.DeleteAnnotationSetRequest, google_protobuf_empty_pb.Empty>;
  searchAnnotationSets: grpc.MethodDefinition<google_genomics_v1_annotations_pb.SearchAnnotationSetsRequest, google_genomics_v1_annotations_pb.SearchAnnotationSetsResponse>;
  createAnnotation: grpc.MethodDefinition<google_genomics_v1_annotations_pb.CreateAnnotationRequest, google_genomics_v1_annotations_pb.Annotation>;
  batchCreateAnnotations: grpc.MethodDefinition<google_genomics_v1_annotations_pb.BatchCreateAnnotationsRequest, google_genomics_v1_annotations_pb.BatchCreateAnnotationsResponse>;
  getAnnotation: grpc.MethodDefinition<google_genomics_v1_annotations_pb.GetAnnotationRequest, google_genomics_v1_annotations_pb.Annotation>;
  updateAnnotation: grpc.MethodDefinition<google_genomics_v1_annotations_pb.UpdateAnnotationRequest, google_genomics_v1_annotations_pb.Annotation>;
  deleteAnnotation: grpc.MethodDefinition<google_genomics_v1_annotations_pb.DeleteAnnotationRequest, google_protobuf_empty_pb.Empty>;
  searchAnnotations: grpc.MethodDefinition<google_genomics_v1_annotations_pb.SearchAnnotationsRequest, google_genomics_v1_annotations_pb.SearchAnnotationsResponse>;
}

export const AnnotationServiceV1Service: IAnnotationServiceV1Service;

export class AnnotationServiceV1Client extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  createAnnotationSet(argument: google_genomics_v1_annotations_pb.CreateAnnotationSetRequest, callback: grpc.requestCallback<google_genomics_v1_annotations_pb.AnnotationSet>): grpc.ClientUnaryCall;
  createAnnotationSet(argument: google_genomics_v1_annotations_pb.CreateAnnotationSetRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_genomics_v1_annotations_pb.AnnotationSet>): grpc.ClientUnaryCall;
  createAnnotationSet(argument: google_genomics_v1_annotations_pb.CreateAnnotationSetRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_genomics_v1_annotations_pb.AnnotationSet>): grpc.ClientUnaryCall;
  getAnnotationSet(argument: google_genomics_v1_annotations_pb.GetAnnotationSetRequest, callback: grpc.requestCallback<google_genomics_v1_annotations_pb.AnnotationSet>): grpc.ClientUnaryCall;
  getAnnotationSet(argument: google_genomics_v1_annotations_pb.GetAnnotationSetRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_genomics_v1_annotations_pb.AnnotationSet>): grpc.ClientUnaryCall;
  getAnnotationSet(argument: google_genomics_v1_annotations_pb.GetAnnotationSetRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_genomics_v1_annotations_pb.AnnotationSet>): grpc.ClientUnaryCall;
  updateAnnotationSet(argument: google_genomics_v1_annotations_pb.UpdateAnnotationSetRequest, callback: grpc.requestCallback<google_genomics_v1_annotations_pb.AnnotationSet>): grpc.ClientUnaryCall;
  updateAnnotationSet(argument: google_genomics_v1_annotations_pb.UpdateAnnotationSetRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_genomics_v1_annotations_pb.AnnotationSet>): grpc.ClientUnaryCall;
  updateAnnotationSet(argument: google_genomics_v1_annotations_pb.UpdateAnnotationSetRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_genomics_v1_annotations_pb.AnnotationSet>): grpc.ClientUnaryCall;
  deleteAnnotationSet(argument: google_genomics_v1_annotations_pb.DeleteAnnotationSetRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteAnnotationSet(argument: google_genomics_v1_annotations_pb.DeleteAnnotationSetRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteAnnotationSet(argument: google_genomics_v1_annotations_pb.DeleteAnnotationSetRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  searchAnnotationSets(argument: google_genomics_v1_annotations_pb.SearchAnnotationSetsRequest, callback: grpc.requestCallback<google_genomics_v1_annotations_pb.SearchAnnotationSetsResponse>): grpc.ClientUnaryCall;
  searchAnnotationSets(argument: google_genomics_v1_annotations_pb.SearchAnnotationSetsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_genomics_v1_annotations_pb.SearchAnnotationSetsResponse>): grpc.ClientUnaryCall;
  searchAnnotationSets(argument: google_genomics_v1_annotations_pb.SearchAnnotationSetsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_genomics_v1_annotations_pb.SearchAnnotationSetsResponse>): grpc.ClientUnaryCall;
  createAnnotation(argument: google_genomics_v1_annotations_pb.CreateAnnotationRequest, callback: grpc.requestCallback<google_genomics_v1_annotations_pb.Annotation>): grpc.ClientUnaryCall;
  createAnnotation(argument: google_genomics_v1_annotations_pb.CreateAnnotationRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_genomics_v1_annotations_pb.Annotation>): grpc.ClientUnaryCall;
  createAnnotation(argument: google_genomics_v1_annotations_pb.CreateAnnotationRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_genomics_v1_annotations_pb.Annotation>): grpc.ClientUnaryCall;
  batchCreateAnnotations(argument: google_genomics_v1_annotations_pb.BatchCreateAnnotationsRequest, callback: grpc.requestCallback<google_genomics_v1_annotations_pb.BatchCreateAnnotationsResponse>): grpc.ClientUnaryCall;
  batchCreateAnnotations(argument: google_genomics_v1_annotations_pb.BatchCreateAnnotationsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_genomics_v1_annotations_pb.BatchCreateAnnotationsResponse>): grpc.ClientUnaryCall;
  batchCreateAnnotations(argument: google_genomics_v1_annotations_pb.BatchCreateAnnotationsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_genomics_v1_annotations_pb.BatchCreateAnnotationsResponse>): grpc.ClientUnaryCall;
  getAnnotation(argument: google_genomics_v1_annotations_pb.GetAnnotationRequest, callback: grpc.requestCallback<google_genomics_v1_annotations_pb.Annotation>): grpc.ClientUnaryCall;
  getAnnotation(argument: google_genomics_v1_annotations_pb.GetAnnotationRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_genomics_v1_annotations_pb.Annotation>): grpc.ClientUnaryCall;
  getAnnotation(argument: google_genomics_v1_annotations_pb.GetAnnotationRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_genomics_v1_annotations_pb.Annotation>): grpc.ClientUnaryCall;
  updateAnnotation(argument: google_genomics_v1_annotations_pb.UpdateAnnotationRequest, callback: grpc.requestCallback<google_genomics_v1_annotations_pb.Annotation>): grpc.ClientUnaryCall;
  updateAnnotation(argument: google_genomics_v1_annotations_pb.UpdateAnnotationRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_genomics_v1_annotations_pb.Annotation>): grpc.ClientUnaryCall;
  updateAnnotation(argument: google_genomics_v1_annotations_pb.UpdateAnnotationRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_genomics_v1_annotations_pb.Annotation>): grpc.ClientUnaryCall;
  deleteAnnotation(argument: google_genomics_v1_annotations_pb.DeleteAnnotationRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteAnnotation(argument: google_genomics_v1_annotations_pb.DeleteAnnotationRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteAnnotation(argument: google_genomics_v1_annotations_pb.DeleteAnnotationRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  searchAnnotations(argument: google_genomics_v1_annotations_pb.SearchAnnotationsRequest, callback: grpc.requestCallback<google_genomics_v1_annotations_pb.SearchAnnotationsResponse>): grpc.ClientUnaryCall;
  searchAnnotations(argument: google_genomics_v1_annotations_pb.SearchAnnotationsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_genomics_v1_annotations_pb.SearchAnnotationsResponse>): grpc.ClientUnaryCall;
  searchAnnotations(argument: google_genomics_v1_annotations_pb.SearchAnnotationsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_genomics_v1_annotations_pb.SearchAnnotationsResponse>): grpc.ClientUnaryCall;
}
