// GENERATED CODE -- DO NOT EDIT!

// package: google.cloud.webrisk.v1beta1
// file: google/cloud/webrisk/v1beta1/webrisk.proto

import * as google_cloud_webrisk_v1beta1_webrisk_pb from "../../../../google/cloud/webrisk/v1beta1/webrisk_pb";
import * as grpc from "grpc";

interface IWebRiskServiceV1Beta1Service extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  computeThreatListDiff: grpc.MethodDefinition<google_cloud_webrisk_v1beta1_webrisk_pb.ComputeThreatListDiffRequest, google_cloud_webrisk_v1beta1_webrisk_pb.ComputeThreatListDiffResponse>;
  searchUris: grpc.MethodDefinition<google_cloud_webrisk_v1beta1_webrisk_pb.SearchUrisRequest, google_cloud_webrisk_v1beta1_webrisk_pb.SearchUrisResponse>;
  searchHashes: grpc.MethodDefinition<google_cloud_webrisk_v1beta1_webrisk_pb.SearchHashesRequest, google_cloud_webrisk_v1beta1_webrisk_pb.SearchHashesResponse>;
}

export const WebRiskServiceV1Beta1Service: IWebRiskServiceV1Beta1Service;

export class WebRiskServiceV1Beta1Client extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  computeThreatListDiff(argument: google_cloud_webrisk_v1beta1_webrisk_pb.ComputeThreatListDiffRequest, callback: grpc.requestCallback<google_cloud_webrisk_v1beta1_webrisk_pb.ComputeThreatListDiffResponse>): grpc.ClientUnaryCall;
  computeThreatListDiff(argument: google_cloud_webrisk_v1beta1_webrisk_pb.ComputeThreatListDiffRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_webrisk_v1beta1_webrisk_pb.ComputeThreatListDiffResponse>): grpc.ClientUnaryCall;
  computeThreatListDiff(argument: google_cloud_webrisk_v1beta1_webrisk_pb.ComputeThreatListDiffRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_webrisk_v1beta1_webrisk_pb.ComputeThreatListDiffResponse>): grpc.ClientUnaryCall;
  searchUris(argument: google_cloud_webrisk_v1beta1_webrisk_pb.SearchUrisRequest, callback: grpc.requestCallback<google_cloud_webrisk_v1beta1_webrisk_pb.SearchUrisResponse>): grpc.ClientUnaryCall;
  searchUris(argument: google_cloud_webrisk_v1beta1_webrisk_pb.SearchUrisRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_webrisk_v1beta1_webrisk_pb.SearchUrisResponse>): grpc.ClientUnaryCall;
  searchUris(argument: google_cloud_webrisk_v1beta1_webrisk_pb.SearchUrisRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_webrisk_v1beta1_webrisk_pb.SearchUrisResponse>): grpc.ClientUnaryCall;
  searchHashes(argument: google_cloud_webrisk_v1beta1_webrisk_pb.SearchHashesRequest, callback: grpc.requestCallback<google_cloud_webrisk_v1beta1_webrisk_pb.SearchHashesResponse>): grpc.ClientUnaryCall;
  searchHashes(argument: google_cloud_webrisk_v1beta1_webrisk_pb.SearchHashesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_webrisk_v1beta1_webrisk_pb.SearchHashesResponse>): grpc.ClientUnaryCall;
  searchHashes(argument: google_cloud_webrisk_v1beta1_webrisk_pb.SearchHashesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_webrisk_v1beta1_webrisk_pb.SearchHashesResponse>): grpc.ClientUnaryCall;
}
