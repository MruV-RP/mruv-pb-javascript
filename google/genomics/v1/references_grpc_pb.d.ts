// GENERATED CODE -- DO NOT EDIT!

// package: google.genomics.v1
// file: google/genomics/v1/references.proto

import * as google_genomics_v1_references_pb from "../../../google/genomics/v1/references_pb";
import * as grpc from "grpc";

interface IReferenceServiceV1Service extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  searchReferenceSets: grpc.MethodDefinition<google_genomics_v1_references_pb.SearchReferenceSetsRequest, google_genomics_v1_references_pb.SearchReferenceSetsResponse>;
  getReferenceSet: grpc.MethodDefinition<google_genomics_v1_references_pb.GetReferenceSetRequest, google_genomics_v1_references_pb.ReferenceSet>;
  searchReferences: grpc.MethodDefinition<google_genomics_v1_references_pb.SearchReferencesRequest, google_genomics_v1_references_pb.SearchReferencesResponse>;
  getReference: grpc.MethodDefinition<google_genomics_v1_references_pb.GetReferenceRequest, google_genomics_v1_references_pb.Reference>;
  listBases: grpc.MethodDefinition<google_genomics_v1_references_pb.ListBasesRequest, google_genomics_v1_references_pb.ListBasesResponse>;
}

export const ReferenceServiceV1Service: IReferenceServiceV1Service;

export class ReferenceServiceV1Client extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  searchReferenceSets(argument: google_genomics_v1_references_pb.SearchReferenceSetsRequest, callback: grpc.requestCallback<google_genomics_v1_references_pb.SearchReferenceSetsResponse>): grpc.ClientUnaryCall;
  searchReferenceSets(argument: google_genomics_v1_references_pb.SearchReferenceSetsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_genomics_v1_references_pb.SearchReferenceSetsResponse>): grpc.ClientUnaryCall;
  searchReferenceSets(argument: google_genomics_v1_references_pb.SearchReferenceSetsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_genomics_v1_references_pb.SearchReferenceSetsResponse>): grpc.ClientUnaryCall;
  getReferenceSet(argument: google_genomics_v1_references_pb.GetReferenceSetRequest, callback: grpc.requestCallback<google_genomics_v1_references_pb.ReferenceSet>): grpc.ClientUnaryCall;
  getReferenceSet(argument: google_genomics_v1_references_pb.GetReferenceSetRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_genomics_v1_references_pb.ReferenceSet>): grpc.ClientUnaryCall;
  getReferenceSet(argument: google_genomics_v1_references_pb.GetReferenceSetRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_genomics_v1_references_pb.ReferenceSet>): grpc.ClientUnaryCall;
  searchReferences(argument: google_genomics_v1_references_pb.SearchReferencesRequest, callback: grpc.requestCallback<google_genomics_v1_references_pb.SearchReferencesResponse>): grpc.ClientUnaryCall;
  searchReferences(argument: google_genomics_v1_references_pb.SearchReferencesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_genomics_v1_references_pb.SearchReferencesResponse>): grpc.ClientUnaryCall;
  searchReferences(argument: google_genomics_v1_references_pb.SearchReferencesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_genomics_v1_references_pb.SearchReferencesResponse>): grpc.ClientUnaryCall;
  getReference(argument: google_genomics_v1_references_pb.GetReferenceRequest, callback: grpc.requestCallback<google_genomics_v1_references_pb.Reference>): grpc.ClientUnaryCall;
  getReference(argument: google_genomics_v1_references_pb.GetReferenceRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_genomics_v1_references_pb.Reference>): grpc.ClientUnaryCall;
  getReference(argument: google_genomics_v1_references_pb.GetReferenceRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_genomics_v1_references_pb.Reference>): grpc.ClientUnaryCall;
  listBases(argument: google_genomics_v1_references_pb.ListBasesRequest, callback: grpc.requestCallback<google_genomics_v1_references_pb.ListBasesResponse>): grpc.ClientUnaryCall;
  listBases(argument: google_genomics_v1_references_pb.ListBasesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_genomics_v1_references_pb.ListBasesResponse>): grpc.ClientUnaryCall;
  listBases(argument: google_genomics_v1_references_pb.ListBasesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_genomics_v1_references_pb.ListBasesResponse>): grpc.ClientUnaryCall;
}
