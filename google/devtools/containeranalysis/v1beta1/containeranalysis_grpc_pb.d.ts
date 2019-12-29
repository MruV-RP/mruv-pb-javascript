// GENERATED CODE -- DO NOT EDIT!

// package: google.devtools.containeranalysis.v1beta1
// file: google/devtools/containeranalysis/v1beta1/containeranalysis.proto

import * as google_devtools_containeranalysis_v1beta1_containeranalysis_pb from "../../../../google/devtools/containeranalysis/v1beta1/containeranalysis_pb";
import * as google_iam_v1_iam_policy_pb from "../../../../google/iam/v1/iam_policy_pb";
import * as google_iam_v1_policy_pb from "../../../../google/iam/v1/policy_pb";
import * as grpc from "grpc";

interface IContainerAnalysisV1Beta1Service extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  setIamPolicy: grpc.MethodDefinition<google_iam_v1_iam_policy_pb.SetIamPolicyRequest, google_iam_v1_policy_pb.Policy>;
  getIamPolicy: grpc.MethodDefinition<google_iam_v1_iam_policy_pb.GetIamPolicyRequest, google_iam_v1_policy_pb.Policy>;
  testIamPermissions: grpc.MethodDefinition<google_iam_v1_iam_policy_pb.TestIamPermissionsRequest, google_iam_v1_iam_policy_pb.TestIamPermissionsResponse>;
  getScanConfig: grpc.MethodDefinition<google_devtools_containeranalysis_v1beta1_containeranalysis_pb.GetScanConfigRequest, google_devtools_containeranalysis_v1beta1_containeranalysis_pb.ScanConfig>;
  listScanConfigs: grpc.MethodDefinition<google_devtools_containeranalysis_v1beta1_containeranalysis_pb.ListScanConfigsRequest, google_devtools_containeranalysis_v1beta1_containeranalysis_pb.ListScanConfigsResponse>;
  updateScanConfig: grpc.MethodDefinition<google_devtools_containeranalysis_v1beta1_containeranalysis_pb.UpdateScanConfigRequest, google_devtools_containeranalysis_v1beta1_containeranalysis_pb.ScanConfig>;
}

export const ContainerAnalysisV1Beta1Service: IContainerAnalysisV1Beta1Service;

export class ContainerAnalysisV1Beta1Client extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  setIamPolicy(argument: google_iam_v1_iam_policy_pb.SetIamPolicyRequest, callback: grpc.requestCallback<google_iam_v1_policy_pb.Policy>): grpc.ClientUnaryCall;
  setIamPolicy(argument: google_iam_v1_iam_policy_pb.SetIamPolicyRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_v1_policy_pb.Policy>): grpc.ClientUnaryCall;
  setIamPolicy(argument: google_iam_v1_iam_policy_pb.SetIamPolicyRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_v1_policy_pb.Policy>): grpc.ClientUnaryCall;
  getIamPolicy(argument: google_iam_v1_iam_policy_pb.GetIamPolicyRequest, callback: grpc.requestCallback<google_iam_v1_policy_pb.Policy>): grpc.ClientUnaryCall;
  getIamPolicy(argument: google_iam_v1_iam_policy_pb.GetIamPolicyRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_v1_policy_pb.Policy>): grpc.ClientUnaryCall;
  getIamPolicy(argument: google_iam_v1_iam_policy_pb.GetIamPolicyRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_v1_policy_pb.Policy>): grpc.ClientUnaryCall;
  testIamPermissions(argument: google_iam_v1_iam_policy_pb.TestIamPermissionsRequest, callback: grpc.requestCallback<google_iam_v1_iam_policy_pb.TestIamPermissionsResponse>): grpc.ClientUnaryCall;
  testIamPermissions(argument: google_iam_v1_iam_policy_pb.TestIamPermissionsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_v1_iam_policy_pb.TestIamPermissionsResponse>): grpc.ClientUnaryCall;
  testIamPermissions(argument: google_iam_v1_iam_policy_pb.TestIamPermissionsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_v1_iam_policy_pb.TestIamPermissionsResponse>): grpc.ClientUnaryCall;
  getScanConfig(argument: google_devtools_containeranalysis_v1beta1_containeranalysis_pb.GetScanConfigRequest, callback: grpc.requestCallback<google_devtools_containeranalysis_v1beta1_containeranalysis_pb.ScanConfig>): grpc.ClientUnaryCall;
  getScanConfig(argument: google_devtools_containeranalysis_v1beta1_containeranalysis_pb.GetScanConfigRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_containeranalysis_v1beta1_containeranalysis_pb.ScanConfig>): grpc.ClientUnaryCall;
  getScanConfig(argument: google_devtools_containeranalysis_v1beta1_containeranalysis_pb.GetScanConfigRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_containeranalysis_v1beta1_containeranalysis_pb.ScanConfig>): grpc.ClientUnaryCall;
  listScanConfigs(argument: google_devtools_containeranalysis_v1beta1_containeranalysis_pb.ListScanConfigsRequest, callback: grpc.requestCallback<google_devtools_containeranalysis_v1beta1_containeranalysis_pb.ListScanConfigsResponse>): grpc.ClientUnaryCall;
  listScanConfigs(argument: google_devtools_containeranalysis_v1beta1_containeranalysis_pb.ListScanConfigsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_containeranalysis_v1beta1_containeranalysis_pb.ListScanConfigsResponse>): grpc.ClientUnaryCall;
  listScanConfigs(argument: google_devtools_containeranalysis_v1beta1_containeranalysis_pb.ListScanConfigsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_containeranalysis_v1beta1_containeranalysis_pb.ListScanConfigsResponse>): grpc.ClientUnaryCall;
  updateScanConfig(argument: google_devtools_containeranalysis_v1beta1_containeranalysis_pb.UpdateScanConfigRequest, callback: grpc.requestCallback<google_devtools_containeranalysis_v1beta1_containeranalysis_pb.ScanConfig>): grpc.ClientUnaryCall;
  updateScanConfig(argument: google_devtools_containeranalysis_v1beta1_containeranalysis_pb.UpdateScanConfigRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_containeranalysis_v1beta1_containeranalysis_pb.ScanConfig>): grpc.ClientUnaryCall;
  updateScanConfig(argument: google_devtools_containeranalysis_v1beta1_containeranalysis_pb.UpdateScanConfigRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_containeranalysis_v1beta1_containeranalysis_pb.ScanConfig>): grpc.ClientUnaryCall;
}
