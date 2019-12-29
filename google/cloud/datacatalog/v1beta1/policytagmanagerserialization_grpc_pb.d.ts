// GENERATED CODE -- DO NOT EDIT!

// package: google.cloud.datacatalog.v1beta1
// file: google/cloud/datacatalog/v1beta1/policytagmanagerserialization.proto

import * as google_cloud_datacatalog_v1beta1_policytagmanagerserialization_pb from "../../../../google/cloud/datacatalog/v1beta1/policytagmanagerserialization_pb";
import * as grpc from "grpc";

interface IPolicyTagManagerSerializationService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  importTaxonomies: grpc.MethodDefinition<google_cloud_datacatalog_v1beta1_policytagmanagerserialization_pb.ImportTaxonomiesRequest, google_cloud_datacatalog_v1beta1_policytagmanagerserialization_pb.ImportTaxonomiesResponse>;
  exportTaxonomies: grpc.MethodDefinition<google_cloud_datacatalog_v1beta1_policytagmanagerserialization_pb.ExportTaxonomiesRequest, google_cloud_datacatalog_v1beta1_policytagmanagerserialization_pb.ExportTaxonomiesResponse>;
}

export const PolicyTagManagerSerializationService: IPolicyTagManagerSerializationService;

export class PolicyTagManagerSerializationClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  importTaxonomies(argument: google_cloud_datacatalog_v1beta1_policytagmanagerserialization_pb.ImportTaxonomiesRequest, callback: grpc.requestCallback<google_cloud_datacatalog_v1beta1_policytagmanagerserialization_pb.ImportTaxonomiesResponse>): grpc.ClientUnaryCall;
  importTaxonomies(argument: google_cloud_datacatalog_v1beta1_policytagmanagerserialization_pb.ImportTaxonomiesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_datacatalog_v1beta1_policytagmanagerserialization_pb.ImportTaxonomiesResponse>): grpc.ClientUnaryCall;
  importTaxonomies(argument: google_cloud_datacatalog_v1beta1_policytagmanagerserialization_pb.ImportTaxonomiesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_datacatalog_v1beta1_policytagmanagerserialization_pb.ImportTaxonomiesResponse>): grpc.ClientUnaryCall;
  exportTaxonomies(argument: google_cloud_datacatalog_v1beta1_policytagmanagerserialization_pb.ExportTaxonomiesRequest, callback: grpc.requestCallback<google_cloud_datacatalog_v1beta1_policytagmanagerserialization_pb.ExportTaxonomiesResponse>): grpc.ClientUnaryCall;
  exportTaxonomies(argument: google_cloud_datacatalog_v1beta1_policytagmanagerserialization_pb.ExportTaxonomiesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_datacatalog_v1beta1_policytagmanagerserialization_pb.ExportTaxonomiesResponse>): grpc.ClientUnaryCall;
  exportTaxonomies(argument: google_cloud_datacatalog_v1beta1_policytagmanagerserialization_pb.ExportTaxonomiesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_datacatalog_v1beta1_policytagmanagerserialization_pb.ExportTaxonomiesResponse>): grpc.ClientUnaryCall;
}
