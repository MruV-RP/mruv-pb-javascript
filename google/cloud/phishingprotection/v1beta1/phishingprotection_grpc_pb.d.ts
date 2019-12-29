// GENERATED CODE -- DO NOT EDIT!

// package: google.cloud.phishingprotection.v1beta1
// file: google/cloud/phishingprotection/v1beta1/phishingprotection.proto

import * as google_cloud_phishingprotection_v1beta1_phishingprotection_pb from "../../../../google/cloud/phishingprotection/v1beta1/phishingprotection_pb";
import * as grpc from "grpc";

interface IPhishingProtectionServiceV1Beta1Service extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  reportPhishing: grpc.MethodDefinition<google_cloud_phishingprotection_v1beta1_phishingprotection_pb.ReportPhishingRequest, google_cloud_phishingprotection_v1beta1_phishingprotection_pb.ReportPhishingResponse>;
}

export const PhishingProtectionServiceV1Beta1Service: IPhishingProtectionServiceV1Beta1Service;

export class PhishingProtectionServiceV1Beta1Client extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  reportPhishing(argument: google_cloud_phishingprotection_v1beta1_phishingprotection_pb.ReportPhishingRequest, callback: grpc.requestCallback<google_cloud_phishingprotection_v1beta1_phishingprotection_pb.ReportPhishingResponse>): grpc.ClientUnaryCall;
  reportPhishing(argument: google_cloud_phishingprotection_v1beta1_phishingprotection_pb.ReportPhishingRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_phishingprotection_v1beta1_phishingprotection_pb.ReportPhishingResponse>): grpc.ClientUnaryCall;
  reportPhishing(argument: google_cloud_phishingprotection_v1beta1_phishingprotection_pb.ReportPhishingRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_phishingprotection_v1beta1_phishingprotection_pb.ReportPhishingResponse>): grpc.ClientUnaryCall;
}
