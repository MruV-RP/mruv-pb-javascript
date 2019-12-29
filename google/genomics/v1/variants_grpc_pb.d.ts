// GENERATED CODE -- DO NOT EDIT!

// package: google.genomics.v1
// file: google/genomics/v1/variants.proto

import * as google_genomics_v1_variants_pb from "../../../google/genomics/v1/variants_pb";
import * as google_longrunning_operations_pb from "../../../google/longrunning/operations_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "grpc";

interface IStreamingVariantServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  streamVariants: grpc.MethodDefinition<google_genomics_v1_variants_pb.StreamVariantsRequest, google_genomics_v1_variants_pb.StreamVariantsResponse>;
}

export const StreamingVariantServiceService: IStreamingVariantServiceService;

export class StreamingVariantServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  streamVariants(argument: google_genomics_v1_variants_pb.StreamVariantsRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<google_genomics_v1_variants_pb.StreamVariantsResponse>;
  streamVariants(argument: google_genomics_v1_variants_pb.StreamVariantsRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<google_genomics_v1_variants_pb.StreamVariantsResponse>;
}

interface IVariantServiceV1Service extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  importVariants: grpc.MethodDefinition<google_genomics_v1_variants_pb.ImportVariantsRequest, google_longrunning_operations_pb.Operation>;
  createVariantSet: grpc.MethodDefinition<google_genomics_v1_variants_pb.CreateVariantSetRequest, google_genomics_v1_variants_pb.VariantSet>;
  exportVariantSet: grpc.MethodDefinition<google_genomics_v1_variants_pb.ExportVariantSetRequest, google_longrunning_operations_pb.Operation>;
  getVariantSet: grpc.MethodDefinition<google_genomics_v1_variants_pb.GetVariantSetRequest, google_genomics_v1_variants_pb.VariantSet>;
  searchVariantSets: grpc.MethodDefinition<google_genomics_v1_variants_pb.SearchVariantSetsRequest, google_genomics_v1_variants_pb.SearchVariantSetsResponse>;
  deleteVariantSet: grpc.MethodDefinition<google_genomics_v1_variants_pb.DeleteVariantSetRequest, google_protobuf_empty_pb.Empty>;
  updateVariantSet: grpc.MethodDefinition<google_genomics_v1_variants_pb.UpdateVariantSetRequest, google_genomics_v1_variants_pb.VariantSet>;
  searchVariants: grpc.MethodDefinition<google_genomics_v1_variants_pb.SearchVariantsRequest, google_genomics_v1_variants_pb.SearchVariantsResponse>;
  createVariant: grpc.MethodDefinition<google_genomics_v1_variants_pb.CreateVariantRequest, google_genomics_v1_variants_pb.Variant>;
  updateVariant: grpc.MethodDefinition<google_genomics_v1_variants_pb.UpdateVariantRequest, google_genomics_v1_variants_pb.Variant>;
  deleteVariant: grpc.MethodDefinition<google_genomics_v1_variants_pb.DeleteVariantRequest, google_protobuf_empty_pb.Empty>;
  getVariant: grpc.MethodDefinition<google_genomics_v1_variants_pb.GetVariantRequest, google_genomics_v1_variants_pb.Variant>;
  mergeVariants: grpc.MethodDefinition<google_genomics_v1_variants_pb.MergeVariantsRequest, google_protobuf_empty_pb.Empty>;
  searchCallSets: grpc.MethodDefinition<google_genomics_v1_variants_pb.SearchCallSetsRequest, google_genomics_v1_variants_pb.SearchCallSetsResponse>;
  createCallSet: grpc.MethodDefinition<google_genomics_v1_variants_pb.CreateCallSetRequest, google_genomics_v1_variants_pb.CallSet>;
  updateCallSet: grpc.MethodDefinition<google_genomics_v1_variants_pb.UpdateCallSetRequest, google_genomics_v1_variants_pb.CallSet>;
  deleteCallSet: grpc.MethodDefinition<google_genomics_v1_variants_pb.DeleteCallSetRequest, google_protobuf_empty_pb.Empty>;
  getCallSet: grpc.MethodDefinition<google_genomics_v1_variants_pb.GetCallSetRequest, google_genomics_v1_variants_pb.CallSet>;
}

export const VariantServiceV1Service: IVariantServiceV1Service;

export class VariantServiceV1Client extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  importVariants(argument: google_genomics_v1_variants_pb.ImportVariantsRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  importVariants(argument: google_genomics_v1_variants_pb.ImportVariantsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  importVariants(argument: google_genomics_v1_variants_pb.ImportVariantsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  createVariantSet(argument: google_genomics_v1_variants_pb.CreateVariantSetRequest, callback: grpc.requestCallback<google_genomics_v1_variants_pb.VariantSet>): grpc.ClientUnaryCall;
  createVariantSet(argument: google_genomics_v1_variants_pb.CreateVariantSetRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_genomics_v1_variants_pb.VariantSet>): grpc.ClientUnaryCall;
  createVariantSet(argument: google_genomics_v1_variants_pb.CreateVariantSetRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_genomics_v1_variants_pb.VariantSet>): grpc.ClientUnaryCall;
  exportVariantSet(argument: google_genomics_v1_variants_pb.ExportVariantSetRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  exportVariantSet(argument: google_genomics_v1_variants_pb.ExportVariantSetRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  exportVariantSet(argument: google_genomics_v1_variants_pb.ExportVariantSetRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  getVariantSet(argument: google_genomics_v1_variants_pb.GetVariantSetRequest, callback: grpc.requestCallback<google_genomics_v1_variants_pb.VariantSet>): grpc.ClientUnaryCall;
  getVariantSet(argument: google_genomics_v1_variants_pb.GetVariantSetRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_genomics_v1_variants_pb.VariantSet>): grpc.ClientUnaryCall;
  getVariantSet(argument: google_genomics_v1_variants_pb.GetVariantSetRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_genomics_v1_variants_pb.VariantSet>): grpc.ClientUnaryCall;
  searchVariantSets(argument: google_genomics_v1_variants_pb.SearchVariantSetsRequest, callback: grpc.requestCallback<google_genomics_v1_variants_pb.SearchVariantSetsResponse>): grpc.ClientUnaryCall;
  searchVariantSets(argument: google_genomics_v1_variants_pb.SearchVariantSetsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_genomics_v1_variants_pb.SearchVariantSetsResponse>): grpc.ClientUnaryCall;
  searchVariantSets(argument: google_genomics_v1_variants_pb.SearchVariantSetsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_genomics_v1_variants_pb.SearchVariantSetsResponse>): grpc.ClientUnaryCall;
  deleteVariantSet(argument: google_genomics_v1_variants_pb.DeleteVariantSetRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteVariantSet(argument: google_genomics_v1_variants_pb.DeleteVariantSetRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteVariantSet(argument: google_genomics_v1_variants_pb.DeleteVariantSetRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  updateVariantSet(argument: google_genomics_v1_variants_pb.UpdateVariantSetRequest, callback: grpc.requestCallback<google_genomics_v1_variants_pb.VariantSet>): grpc.ClientUnaryCall;
  updateVariantSet(argument: google_genomics_v1_variants_pb.UpdateVariantSetRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_genomics_v1_variants_pb.VariantSet>): grpc.ClientUnaryCall;
  updateVariantSet(argument: google_genomics_v1_variants_pb.UpdateVariantSetRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_genomics_v1_variants_pb.VariantSet>): grpc.ClientUnaryCall;
  searchVariants(argument: google_genomics_v1_variants_pb.SearchVariantsRequest, callback: grpc.requestCallback<google_genomics_v1_variants_pb.SearchVariantsResponse>): grpc.ClientUnaryCall;
  searchVariants(argument: google_genomics_v1_variants_pb.SearchVariantsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_genomics_v1_variants_pb.SearchVariantsResponse>): grpc.ClientUnaryCall;
  searchVariants(argument: google_genomics_v1_variants_pb.SearchVariantsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_genomics_v1_variants_pb.SearchVariantsResponse>): grpc.ClientUnaryCall;
  createVariant(argument: google_genomics_v1_variants_pb.CreateVariantRequest, callback: grpc.requestCallback<google_genomics_v1_variants_pb.Variant>): grpc.ClientUnaryCall;
  createVariant(argument: google_genomics_v1_variants_pb.CreateVariantRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_genomics_v1_variants_pb.Variant>): grpc.ClientUnaryCall;
  createVariant(argument: google_genomics_v1_variants_pb.CreateVariantRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_genomics_v1_variants_pb.Variant>): grpc.ClientUnaryCall;
  updateVariant(argument: google_genomics_v1_variants_pb.UpdateVariantRequest, callback: grpc.requestCallback<google_genomics_v1_variants_pb.Variant>): grpc.ClientUnaryCall;
  updateVariant(argument: google_genomics_v1_variants_pb.UpdateVariantRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_genomics_v1_variants_pb.Variant>): grpc.ClientUnaryCall;
  updateVariant(argument: google_genomics_v1_variants_pb.UpdateVariantRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_genomics_v1_variants_pb.Variant>): grpc.ClientUnaryCall;
  deleteVariant(argument: google_genomics_v1_variants_pb.DeleteVariantRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteVariant(argument: google_genomics_v1_variants_pb.DeleteVariantRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteVariant(argument: google_genomics_v1_variants_pb.DeleteVariantRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  getVariant(argument: google_genomics_v1_variants_pb.GetVariantRequest, callback: grpc.requestCallback<google_genomics_v1_variants_pb.Variant>): grpc.ClientUnaryCall;
  getVariant(argument: google_genomics_v1_variants_pb.GetVariantRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_genomics_v1_variants_pb.Variant>): grpc.ClientUnaryCall;
  getVariant(argument: google_genomics_v1_variants_pb.GetVariantRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_genomics_v1_variants_pb.Variant>): grpc.ClientUnaryCall;
  mergeVariants(argument: google_genomics_v1_variants_pb.MergeVariantsRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  mergeVariants(argument: google_genomics_v1_variants_pb.MergeVariantsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  mergeVariants(argument: google_genomics_v1_variants_pb.MergeVariantsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  searchCallSets(argument: google_genomics_v1_variants_pb.SearchCallSetsRequest, callback: grpc.requestCallback<google_genomics_v1_variants_pb.SearchCallSetsResponse>): grpc.ClientUnaryCall;
  searchCallSets(argument: google_genomics_v1_variants_pb.SearchCallSetsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_genomics_v1_variants_pb.SearchCallSetsResponse>): grpc.ClientUnaryCall;
  searchCallSets(argument: google_genomics_v1_variants_pb.SearchCallSetsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_genomics_v1_variants_pb.SearchCallSetsResponse>): grpc.ClientUnaryCall;
  createCallSet(argument: google_genomics_v1_variants_pb.CreateCallSetRequest, callback: grpc.requestCallback<google_genomics_v1_variants_pb.CallSet>): grpc.ClientUnaryCall;
  createCallSet(argument: google_genomics_v1_variants_pb.CreateCallSetRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_genomics_v1_variants_pb.CallSet>): grpc.ClientUnaryCall;
  createCallSet(argument: google_genomics_v1_variants_pb.CreateCallSetRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_genomics_v1_variants_pb.CallSet>): grpc.ClientUnaryCall;
  updateCallSet(argument: google_genomics_v1_variants_pb.UpdateCallSetRequest, callback: grpc.requestCallback<google_genomics_v1_variants_pb.CallSet>): grpc.ClientUnaryCall;
  updateCallSet(argument: google_genomics_v1_variants_pb.UpdateCallSetRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_genomics_v1_variants_pb.CallSet>): grpc.ClientUnaryCall;
  updateCallSet(argument: google_genomics_v1_variants_pb.UpdateCallSetRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_genomics_v1_variants_pb.CallSet>): grpc.ClientUnaryCall;
  deleteCallSet(argument: google_genomics_v1_variants_pb.DeleteCallSetRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteCallSet(argument: google_genomics_v1_variants_pb.DeleteCallSetRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteCallSet(argument: google_genomics_v1_variants_pb.DeleteCallSetRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  getCallSet(argument: google_genomics_v1_variants_pb.GetCallSetRequest, callback: grpc.requestCallback<google_genomics_v1_variants_pb.CallSet>): grpc.ClientUnaryCall;
  getCallSet(argument: google_genomics_v1_variants_pb.GetCallSetRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_genomics_v1_variants_pb.CallSet>): grpc.ClientUnaryCall;
  getCallSet(argument: google_genomics_v1_variants_pb.GetCallSetRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_genomics_v1_variants_pb.CallSet>): grpc.ClientUnaryCall;
}
