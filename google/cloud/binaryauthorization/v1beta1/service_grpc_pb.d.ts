// GENERATED CODE -- DO NOT EDIT!

// package: google.cloud.binaryauthorization.v1beta1
// file: google/cloud/binaryauthorization/v1beta1/service.proto

import * as google_cloud_binaryauthorization_v1beta1_service_pb from "../../../../google/cloud/binaryauthorization/v1beta1/service_pb";
import * as google_cloud_binaryauthorization_v1beta1_resources_pb from "../../../../google/cloud/binaryauthorization/v1beta1/resources_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "grpc";

interface IBinauthzManagementServiceV1Beta1Service extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getPolicy: grpc.MethodDefinition<google_cloud_binaryauthorization_v1beta1_service_pb.GetPolicyRequest, google_cloud_binaryauthorization_v1beta1_resources_pb.Policy>;
  updatePolicy: grpc.MethodDefinition<google_cloud_binaryauthorization_v1beta1_service_pb.UpdatePolicyRequest, google_cloud_binaryauthorization_v1beta1_resources_pb.Policy>;
  createAttestor: grpc.MethodDefinition<google_cloud_binaryauthorization_v1beta1_service_pb.CreateAttestorRequest, google_cloud_binaryauthorization_v1beta1_resources_pb.Attestor>;
  getAttestor: grpc.MethodDefinition<google_cloud_binaryauthorization_v1beta1_service_pb.GetAttestorRequest, google_cloud_binaryauthorization_v1beta1_resources_pb.Attestor>;
  updateAttestor: grpc.MethodDefinition<google_cloud_binaryauthorization_v1beta1_service_pb.UpdateAttestorRequest, google_cloud_binaryauthorization_v1beta1_resources_pb.Attestor>;
  listAttestors: grpc.MethodDefinition<google_cloud_binaryauthorization_v1beta1_service_pb.ListAttestorsRequest, google_cloud_binaryauthorization_v1beta1_service_pb.ListAttestorsResponse>;
  deleteAttestor: grpc.MethodDefinition<google_cloud_binaryauthorization_v1beta1_service_pb.DeleteAttestorRequest, google_protobuf_empty_pb.Empty>;
}

export const BinauthzManagementServiceV1Beta1Service: IBinauthzManagementServiceV1Beta1Service;

export class BinauthzManagementServiceV1Beta1Client extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getPolicy(argument: google_cloud_binaryauthorization_v1beta1_service_pb.GetPolicyRequest, callback: grpc.requestCallback<google_cloud_binaryauthorization_v1beta1_resources_pb.Policy>): grpc.ClientUnaryCall;
  getPolicy(argument: google_cloud_binaryauthorization_v1beta1_service_pb.GetPolicyRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_binaryauthorization_v1beta1_resources_pb.Policy>): grpc.ClientUnaryCall;
  getPolicy(argument: google_cloud_binaryauthorization_v1beta1_service_pb.GetPolicyRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_binaryauthorization_v1beta1_resources_pb.Policy>): grpc.ClientUnaryCall;
  updatePolicy(argument: google_cloud_binaryauthorization_v1beta1_service_pb.UpdatePolicyRequest, callback: grpc.requestCallback<google_cloud_binaryauthorization_v1beta1_resources_pb.Policy>): grpc.ClientUnaryCall;
  updatePolicy(argument: google_cloud_binaryauthorization_v1beta1_service_pb.UpdatePolicyRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_binaryauthorization_v1beta1_resources_pb.Policy>): grpc.ClientUnaryCall;
  updatePolicy(argument: google_cloud_binaryauthorization_v1beta1_service_pb.UpdatePolicyRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_binaryauthorization_v1beta1_resources_pb.Policy>): grpc.ClientUnaryCall;
  createAttestor(argument: google_cloud_binaryauthorization_v1beta1_service_pb.CreateAttestorRequest, callback: grpc.requestCallback<google_cloud_binaryauthorization_v1beta1_resources_pb.Attestor>): grpc.ClientUnaryCall;
  createAttestor(argument: google_cloud_binaryauthorization_v1beta1_service_pb.CreateAttestorRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_binaryauthorization_v1beta1_resources_pb.Attestor>): grpc.ClientUnaryCall;
  createAttestor(argument: google_cloud_binaryauthorization_v1beta1_service_pb.CreateAttestorRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_binaryauthorization_v1beta1_resources_pb.Attestor>): grpc.ClientUnaryCall;
  getAttestor(argument: google_cloud_binaryauthorization_v1beta1_service_pb.GetAttestorRequest, callback: grpc.requestCallback<google_cloud_binaryauthorization_v1beta1_resources_pb.Attestor>): grpc.ClientUnaryCall;
  getAttestor(argument: google_cloud_binaryauthorization_v1beta1_service_pb.GetAttestorRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_binaryauthorization_v1beta1_resources_pb.Attestor>): grpc.ClientUnaryCall;
  getAttestor(argument: google_cloud_binaryauthorization_v1beta1_service_pb.GetAttestorRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_binaryauthorization_v1beta1_resources_pb.Attestor>): grpc.ClientUnaryCall;
  updateAttestor(argument: google_cloud_binaryauthorization_v1beta1_service_pb.UpdateAttestorRequest, callback: grpc.requestCallback<google_cloud_binaryauthorization_v1beta1_resources_pb.Attestor>): grpc.ClientUnaryCall;
  updateAttestor(argument: google_cloud_binaryauthorization_v1beta1_service_pb.UpdateAttestorRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_binaryauthorization_v1beta1_resources_pb.Attestor>): grpc.ClientUnaryCall;
  updateAttestor(argument: google_cloud_binaryauthorization_v1beta1_service_pb.UpdateAttestorRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_binaryauthorization_v1beta1_resources_pb.Attestor>): grpc.ClientUnaryCall;
  listAttestors(argument: google_cloud_binaryauthorization_v1beta1_service_pb.ListAttestorsRequest, callback: grpc.requestCallback<google_cloud_binaryauthorization_v1beta1_service_pb.ListAttestorsResponse>): grpc.ClientUnaryCall;
  listAttestors(argument: google_cloud_binaryauthorization_v1beta1_service_pb.ListAttestorsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_binaryauthorization_v1beta1_service_pb.ListAttestorsResponse>): grpc.ClientUnaryCall;
  listAttestors(argument: google_cloud_binaryauthorization_v1beta1_service_pb.ListAttestorsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_binaryauthorization_v1beta1_service_pb.ListAttestorsResponse>): grpc.ClientUnaryCall;
  deleteAttestor(argument: google_cloud_binaryauthorization_v1beta1_service_pb.DeleteAttestorRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteAttestor(argument: google_cloud_binaryauthorization_v1beta1_service_pb.DeleteAttestorRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteAttestor(argument: google_cloud_binaryauthorization_v1beta1_service_pb.DeleteAttestorRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
}
