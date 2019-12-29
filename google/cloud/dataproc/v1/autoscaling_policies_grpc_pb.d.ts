// GENERATED CODE -- DO NOT EDIT!

// package: google.cloud.dataproc.v1
// file: google/cloud/dataproc/v1/autoscaling_policies.proto

import * as google_cloud_dataproc_v1_autoscaling_policies_pb from "../../../../google/cloud/dataproc/v1/autoscaling_policies_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "grpc";

interface IAutoscalingPolicyServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createAutoscalingPolicy: grpc.MethodDefinition<google_cloud_dataproc_v1_autoscaling_policies_pb.CreateAutoscalingPolicyRequest, google_cloud_dataproc_v1_autoscaling_policies_pb.AutoscalingPolicy>;
  updateAutoscalingPolicy: grpc.MethodDefinition<google_cloud_dataproc_v1_autoscaling_policies_pb.UpdateAutoscalingPolicyRequest, google_cloud_dataproc_v1_autoscaling_policies_pb.AutoscalingPolicy>;
  getAutoscalingPolicy: grpc.MethodDefinition<google_cloud_dataproc_v1_autoscaling_policies_pb.GetAutoscalingPolicyRequest, google_cloud_dataproc_v1_autoscaling_policies_pb.AutoscalingPolicy>;
  listAutoscalingPolicies: grpc.MethodDefinition<google_cloud_dataproc_v1_autoscaling_policies_pb.ListAutoscalingPoliciesRequest, google_cloud_dataproc_v1_autoscaling_policies_pb.ListAutoscalingPoliciesResponse>;
  deleteAutoscalingPolicy: grpc.MethodDefinition<google_cloud_dataproc_v1_autoscaling_policies_pb.DeleteAutoscalingPolicyRequest, google_protobuf_empty_pb.Empty>;
}

export const AutoscalingPolicyServiceService: IAutoscalingPolicyServiceService;

export class AutoscalingPolicyServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  createAutoscalingPolicy(argument: google_cloud_dataproc_v1_autoscaling_policies_pb.CreateAutoscalingPolicyRequest, callback: grpc.requestCallback<google_cloud_dataproc_v1_autoscaling_policies_pb.AutoscalingPolicy>): grpc.ClientUnaryCall;
  createAutoscalingPolicy(argument: google_cloud_dataproc_v1_autoscaling_policies_pb.CreateAutoscalingPolicyRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_dataproc_v1_autoscaling_policies_pb.AutoscalingPolicy>): grpc.ClientUnaryCall;
  createAutoscalingPolicy(argument: google_cloud_dataproc_v1_autoscaling_policies_pb.CreateAutoscalingPolicyRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_dataproc_v1_autoscaling_policies_pb.AutoscalingPolicy>): grpc.ClientUnaryCall;
  updateAutoscalingPolicy(argument: google_cloud_dataproc_v1_autoscaling_policies_pb.UpdateAutoscalingPolicyRequest, callback: grpc.requestCallback<google_cloud_dataproc_v1_autoscaling_policies_pb.AutoscalingPolicy>): grpc.ClientUnaryCall;
  updateAutoscalingPolicy(argument: google_cloud_dataproc_v1_autoscaling_policies_pb.UpdateAutoscalingPolicyRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_dataproc_v1_autoscaling_policies_pb.AutoscalingPolicy>): grpc.ClientUnaryCall;
  updateAutoscalingPolicy(argument: google_cloud_dataproc_v1_autoscaling_policies_pb.UpdateAutoscalingPolicyRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_dataproc_v1_autoscaling_policies_pb.AutoscalingPolicy>): grpc.ClientUnaryCall;
  getAutoscalingPolicy(argument: google_cloud_dataproc_v1_autoscaling_policies_pb.GetAutoscalingPolicyRequest, callback: grpc.requestCallback<google_cloud_dataproc_v1_autoscaling_policies_pb.AutoscalingPolicy>): grpc.ClientUnaryCall;
  getAutoscalingPolicy(argument: google_cloud_dataproc_v1_autoscaling_policies_pb.GetAutoscalingPolicyRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_dataproc_v1_autoscaling_policies_pb.AutoscalingPolicy>): grpc.ClientUnaryCall;
  getAutoscalingPolicy(argument: google_cloud_dataproc_v1_autoscaling_policies_pb.GetAutoscalingPolicyRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_dataproc_v1_autoscaling_policies_pb.AutoscalingPolicy>): grpc.ClientUnaryCall;
  listAutoscalingPolicies(argument: google_cloud_dataproc_v1_autoscaling_policies_pb.ListAutoscalingPoliciesRequest, callback: grpc.requestCallback<google_cloud_dataproc_v1_autoscaling_policies_pb.ListAutoscalingPoliciesResponse>): grpc.ClientUnaryCall;
  listAutoscalingPolicies(argument: google_cloud_dataproc_v1_autoscaling_policies_pb.ListAutoscalingPoliciesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_dataproc_v1_autoscaling_policies_pb.ListAutoscalingPoliciesResponse>): grpc.ClientUnaryCall;
  listAutoscalingPolicies(argument: google_cloud_dataproc_v1_autoscaling_policies_pb.ListAutoscalingPoliciesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_dataproc_v1_autoscaling_policies_pb.ListAutoscalingPoliciesResponse>): grpc.ClientUnaryCall;
  deleteAutoscalingPolicy(argument: google_cloud_dataproc_v1_autoscaling_policies_pb.DeleteAutoscalingPolicyRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteAutoscalingPolicy(argument: google_cloud_dataproc_v1_autoscaling_policies_pb.DeleteAutoscalingPolicyRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteAutoscalingPolicy(argument: google_cloud_dataproc_v1_autoscaling_policies_pb.DeleteAutoscalingPolicyRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
}
