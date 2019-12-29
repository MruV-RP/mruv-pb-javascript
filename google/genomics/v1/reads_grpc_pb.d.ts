// GENERATED CODE -- DO NOT EDIT!

// package: google.genomics.v1
// file: google/genomics/v1/reads.proto

import * as google_genomics_v1_reads_pb from "../../../google/genomics/v1/reads_pb";
import * as google_genomics_v1_readgroupset_pb from "../../../google/genomics/v1/readgroupset_pb";
import * as google_longrunning_operations_pb from "../../../google/longrunning/operations_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "grpc";

interface IStreamingReadServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  streamReads: grpc.MethodDefinition<google_genomics_v1_reads_pb.StreamReadsRequest, google_genomics_v1_reads_pb.StreamReadsResponse>;
}

export const StreamingReadServiceService: IStreamingReadServiceService;

export class StreamingReadServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  streamReads(argument: google_genomics_v1_reads_pb.StreamReadsRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<google_genomics_v1_reads_pb.StreamReadsResponse>;
  streamReads(argument: google_genomics_v1_reads_pb.StreamReadsRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<google_genomics_v1_reads_pb.StreamReadsResponse>;
}

interface IReadServiceV1Service extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  importReadGroupSets: grpc.MethodDefinition<google_genomics_v1_reads_pb.ImportReadGroupSetsRequest, google_longrunning_operations_pb.Operation>;
  exportReadGroupSet: grpc.MethodDefinition<google_genomics_v1_reads_pb.ExportReadGroupSetRequest, google_longrunning_operations_pb.Operation>;
  searchReadGroupSets: grpc.MethodDefinition<google_genomics_v1_reads_pb.SearchReadGroupSetsRequest, google_genomics_v1_reads_pb.SearchReadGroupSetsResponse>;
  updateReadGroupSet: grpc.MethodDefinition<google_genomics_v1_reads_pb.UpdateReadGroupSetRequest, google_genomics_v1_readgroupset_pb.ReadGroupSet>;
  deleteReadGroupSet: grpc.MethodDefinition<google_genomics_v1_reads_pb.DeleteReadGroupSetRequest, google_protobuf_empty_pb.Empty>;
  getReadGroupSet: grpc.MethodDefinition<google_genomics_v1_reads_pb.GetReadGroupSetRequest, google_genomics_v1_readgroupset_pb.ReadGroupSet>;
  listCoverageBuckets: grpc.MethodDefinition<google_genomics_v1_reads_pb.ListCoverageBucketsRequest, google_genomics_v1_reads_pb.ListCoverageBucketsResponse>;
  searchReads: grpc.MethodDefinition<google_genomics_v1_reads_pb.SearchReadsRequest, google_genomics_v1_reads_pb.SearchReadsResponse>;
}

export const ReadServiceV1Service: IReadServiceV1Service;

export class ReadServiceV1Client extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  importReadGroupSets(argument: google_genomics_v1_reads_pb.ImportReadGroupSetsRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  importReadGroupSets(argument: google_genomics_v1_reads_pb.ImportReadGroupSetsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  importReadGroupSets(argument: google_genomics_v1_reads_pb.ImportReadGroupSetsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  exportReadGroupSet(argument: google_genomics_v1_reads_pb.ExportReadGroupSetRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  exportReadGroupSet(argument: google_genomics_v1_reads_pb.ExportReadGroupSetRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  exportReadGroupSet(argument: google_genomics_v1_reads_pb.ExportReadGroupSetRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  searchReadGroupSets(argument: google_genomics_v1_reads_pb.SearchReadGroupSetsRequest, callback: grpc.requestCallback<google_genomics_v1_reads_pb.SearchReadGroupSetsResponse>): grpc.ClientUnaryCall;
  searchReadGroupSets(argument: google_genomics_v1_reads_pb.SearchReadGroupSetsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_genomics_v1_reads_pb.SearchReadGroupSetsResponse>): grpc.ClientUnaryCall;
  searchReadGroupSets(argument: google_genomics_v1_reads_pb.SearchReadGroupSetsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_genomics_v1_reads_pb.SearchReadGroupSetsResponse>): grpc.ClientUnaryCall;
  updateReadGroupSet(argument: google_genomics_v1_reads_pb.UpdateReadGroupSetRequest, callback: grpc.requestCallback<google_genomics_v1_readgroupset_pb.ReadGroupSet>): grpc.ClientUnaryCall;
  updateReadGroupSet(argument: google_genomics_v1_reads_pb.UpdateReadGroupSetRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_genomics_v1_readgroupset_pb.ReadGroupSet>): grpc.ClientUnaryCall;
  updateReadGroupSet(argument: google_genomics_v1_reads_pb.UpdateReadGroupSetRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_genomics_v1_readgroupset_pb.ReadGroupSet>): grpc.ClientUnaryCall;
  deleteReadGroupSet(argument: google_genomics_v1_reads_pb.DeleteReadGroupSetRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteReadGroupSet(argument: google_genomics_v1_reads_pb.DeleteReadGroupSetRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteReadGroupSet(argument: google_genomics_v1_reads_pb.DeleteReadGroupSetRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  getReadGroupSet(argument: google_genomics_v1_reads_pb.GetReadGroupSetRequest, callback: grpc.requestCallback<google_genomics_v1_readgroupset_pb.ReadGroupSet>): grpc.ClientUnaryCall;
  getReadGroupSet(argument: google_genomics_v1_reads_pb.GetReadGroupSetRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_genomics_v1_readgroupset_pb.ReadGroupSet>): grpc.ClientUnaryCall;
  getReadGroupSet(argument: google_genomics_v1_reads_pb.GetReadGroupSetRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_genomics_v1_readgroupset_pb.ReadGroupSet>): grpc.ClientUnaryCall;
  listCoverageBuckets(argument: google_genomics_v1_reads_pb.ListCoverageBucketsRequest, callback: grpc.requestCallback<google_genomics_v1_reads_pb.ListCoverageBucketsResponse>): grpc.ClientUnaryCall;
  listCoverageBuckets(argument: google_genomics_v1_reads_pb.ListCoverageBucketsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_genomics_v1_reads_pb.ListCoverageBucketsResponse>): grpc.ClientUnaryCall;
  listCoverageBuckets(argument: google_genomics_v1_reads_pb.ListCoverageBucketsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_genomics_v1_reads_pb.ListCoverageBucketsResponse>): grpc.ClientUnaryCall;
  searchReads(argument: google_genomics_v1_reads_pb.SearchReadsRequest, callback: grpc.requestCallback<google_genomics_v1_reads_pb.SearchReadsResponse>): grpc.ClientUnaryCall;
  searchReads(argument: google_genomics_v1_reads_pb.SearchReadsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_genomics_v1_reads_pb.SearchReadsResponse>): grpc.ClientUnaryCall;
  searchReads(argument: google_genomics_v1_reads_pb.SearchReadsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_genomics_v1_reads_pb.SearchReadsResponse>): grpc.ClientUnaryCall;
}
