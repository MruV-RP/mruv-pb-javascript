// GENERATED CODE -- DO NOT EDIT!

// package: google.cloud.securitycenter.v1
// file: google/cloud/securitycenter/v1/securitycenter_service.proto

import * as google_cloud_securitycenter_v1_securitycenter_service_pb from "../../../../google/cloud/securitycenter/v1/securitycenter_service_pb";
import * as google_cloud_securitycenter_v1_finding_pb from "../../../../google/cloud/securitycenter/v1/finding_pb";
import * as google_cloud_securitycenter_v1_organization_settings_pb from "../../../../google/cloud/securitycenter/v1/organization_settings_pb";
import * as google_cloud_securitycenter_v1_security_marks_pb from "../../../../google/cloud/securitycenter/v1/security_marks_pb";
import * as google_cloud_securitycenter_v1_source_pb from "../../../../google/cloud/securitycenter/v1/source_pb";
import * as google_iam_v1_iam_policy_pb from "../../../../google/iam/v1/iam_policy_pb";
import * as google_iam_v1_policy_pb from "../../../../google/iam/v1/policy_pb";
import * as google_longrunning_operations_pb from "../../../../google/longrunning/operations_pb";
import * as grpc from "grpc";

interface ISecurityCenterService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createSource: grpc.MethodDefinition<google_cloud_securitycenter_v1_securitycenter_service_pb.CreateSourceRequest, google_cloud_securitycenter_v1_source_pb.Source>;
  createFinding: grpc.MethodDefinition<google_cloud_securitycenter_v1_securitycenter_service_pb.CreateFindingRequest, google_cloud_securitycenter_v1_finding_pb.Finding>;
  getIamPolicy: grpc.MethodDefinition<google_iam_v1_iam_policy_pb.GetIamPolicyRequest, google_iam_v1_policy_pb.Policy>;
  getOrganizationSettings: grpc.MethodDefinition<google_cloud_securitycenter_v1_securitycenter_service_pb.GetOrganizationSettingsRequest, google_cloud_securitycenter_v1_organization_settings_pb.OrganizationSettings>;
  getSource: grpc.MethodDefinition<google_cloud_securitycenter_v1_securitycenter_service_pb.GetSourceRequest, google_cloud_securitycenter_v1_source_pb.Source>;
  groupAssets: grpc.MethodDefinition<google_cloud_securitycenter_v1_securitycenter_service_pb.GroupAssetsRequest, google_cloud_securitycenter_v1_securitycenter_service_pb.GroupAssetsResponse>;
  groupFindings: grpc.MethodDefinition<google_cloud_securitycenter_v1_securitycenter_service_pb.GroupFindingsRequest, google_cloud_securitycenter_v1_securitycenter_service_pb.GroupFindingsResponse>;
  listAssets: grpc.MethodDefinition<google_cloud_securitycenter_v1_securitycenter_service_pb.ListAssetsRequest, google_cloud_securitycenter_v1_securitycenter_service_pb.ListAssetsResponse>;
  listFindings: grpc.MethodDefinition<google_cloud_securitycenter_v1_securitycenter_service_pb.ListFindingsRequest, google_cloud_securitycenter_v1_securitycenter_service_pb.ListFindingsResponse>;
  listSources: grpc.MethodDefinition<google_cloud_securitycenter_v1_securitycenter_service_pb.ListSourcesRequest, google_cloud_securitycenter_v1_securitycenter_service_pb.ListSourcesResponse>;
  runAssetDiscovery: grpc.MethodDefinition<google_cloud_securitycenter_v1_securitycenter_service_pb.RunAssetDiscoveryRequest, google_longrunning_operations_pb.Operation>;
  setFindingState: grpc.MethodDefinition<google_cloud_securitycenter_v1_securitycenter_service_pb.SetFindingStateRequest, google_cloud_securitycenter_v1_finding_pb.Finding>;
  setIamPolicy: grpc.MethodDefinition<google_iam_v1_iam_policy_pb.SetIamPolicyRequest, google_iam_v1_policy_pb.Policy>;
  testIamPermissions: grpc.MethodDefinition<google_iam_v1_iam_policy_pb.TestIamPermissionsRequest, google_iam_v1_iam_policy_pb.TestIamPermissionsResponse>;
  updateFinding: grpc.MethodDefinition<google_cloud_securitycenter_v1_securitycenter_service_pb.UpdateFindingRequest, google_cloud_securitycenter_v1_finding_pb.Finding>;
  updateOrganizationSettings: grpc.MethodDefinition<google_cloud_securitycenter_v1_securitycenter_service_pb.UpdateOrganizationSettingsRequest, google_cloud_securitycenter_v1_organization_settings_pb.OrganizationSettings>;
  updateSource: grpc.MethodDefinition<google_cloud_securitycenter_v1_securitycenter_service_pb.UpdateSourceRequest, google_cloud_securitycenter_v1_source_pb.Source>;
  updateSecurityMarks: grpc.MethodDefinition<google_cloud_securitycenter_v1_securitycenter_service_pb.UpdateSecurityMarksRequest, google_cloud_securitycenter_v1_security_marks_pb.SecurityMarks>;
}

export const SecurityCenterService: ISecurityCenterService;

export class SecurityCenterClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  createSource(argument: google_cloud_securitycenter_v1_securitycenter_service_pb.CreateSourceRequest, callback: grpc.requestCallback<google_cloud_securitycenter_v1_source_pb.Source>): grpc.ClientUnaryCall;
  createSource(argument: google_cloud_securitycenter_v1_securitycenter_service_pb.CreateSourceRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_securitycenter_v1_source_pb.Source>): grpc.ClientUnaryCall;
  createSource(argument: google_cloud_securitycenter_v1_securitycenter_service_pb.CreateSourceRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_securitycenter_v1_source_pb.Source>): grpc.ClientUnaryCall;
  createFinding(argument: google_cloud_securitycenter_v1_securitycenter_service_pb.CreateFindingRequest, callback: grpc.requestCallback<google_cloud_securitycenter_v1_finding_pb.Finding>): grpc.ClientUnaryCall;
  createFinding(argument: google_cloud_securitycenter_v1_securitycenter_service_pb.CreateFindingRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_securitycenter_v1_finding_pb.Finding>): grpc.ClientUnaryCall;
  createFinding(argument: google_cloud_securitycenter_v1_securitycenter_service_pb.CreateFindingRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_securitycenter_v1_finding_pb.Finding>): grpc.ClientUnaryCall;
  getIamPolicy(argument: google_iam_v1_iam_policy_pb.GetIamPolicyRequest, callback: grpc.requestCallback<google_iam_v1_policy_pb.Policy>): grpc.ClientUnaryCall;
  getIamPolicy(argument: google_iam_v1_iam_policy_pb.GetIamPolicyRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_v1_policy_pb.Policy>): grpc.ClientUnaryCall;
  getIamPolicy(argument: google_iam_v1_iam_policy_pb.GetIamPolicyRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_v1_policy_pb.Policy>): grpc.ClientUnaryCall;
  getOrganizationSettings(argument: google_cloud_securitycenter_v1_securitycenter_service_pb.GetOrganizationSettingsRequest, callback: grpc.requestCallback<google_cloud_securitycenter_v1_organization_settings_pb.OrganizationSettings>): grpc.ClientUnaryCall;
  getOrganizationSettings(argument: google_cloud_securitycenter_v1_securitycenter_service_pb.GetOrganizationSettingsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_securitycenter_v1_organization_settings_pb.OrganizationSettings>): grpc.ClientUnaryCall;
  getOrganizationSettings(argument: google_cloud_securitycenter_v1_securitycenter_service_pb.GetOrganizationSettingsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_securitycenter_v1_organization_settings_pb.OrganizationSettings>): grpc.ClientUnaryCall;
  getSource(argument: google_cloud_securitycenter_v1_securitycenter_service_pb.GetSourceRequest, callback: grpc.requestCallback<google_cloud_securitycenter_v1_source_pb.Source>): grpc.ClientUnaryCall;
  getSource(argument: google_cloud_securitycenter_v1_securitycenter_service_pb.GetSourceRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_securitycenter_v1_source_pb.Source>): grpc.ClientUnaryCall;
  getSource(argument: google_cloud_securitycenter_v1_securitycenter_service_pb.GetSourceRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_securitycenter_v1_source_pb.Source>): grpc.ClientUnaryCall;
  groupAssets(argument: google_cloud_securitycenter_v1_securitycenter_service_pb.GroupAssetsRequest, callback: grpc.requestCallback<google_cloud_securitycenter_v1_securitycenter_service_pb.GroupAssetsResponse>): grpc.ClientUnaryCall;
  groupAssets(argument: google_cloud_securitycenter_v1_securitycenter_service_pb.GroupAssetsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_securitycenter_v1_securitycenter_service_pb.GroupAssetsResponse>): grpc.ClientUnaryCall;
  groupAssets(argument: google_cloud_securitycenter_v1_securitycenter_service_pb.GroupAssetsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_securitycenter_v1_securitycenter_service_pb.GroupAssetsResponse>): grpc.ClientUnaryCall;
  groupFindings(argument: google_cloud_securitycenter_v1_securitycenter_service_pb.GroupFindingsRequest, callback: grpc.requestCallback<google_cloud_securitycenter_v1_securitycenter_service_pb.GroupFindingsResponse>): grpc.ClientUnaryCall;
  groupFindings(argument: google_cloud_securitycenter_v1_securitycenter_service_pb.GroupFindingsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_securitycenter_v1_securitycenter_service_pb.GroupFindingsResponse>): grpc.ClientUnaryCall;
  groupFindings(argument: google_cloud_securitycenter_v1_securitycenter_service_pb.GroupFindingsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_securitycenter_v1_securitycenter_service_pb.GroupFindingsResponse>): grpc.ClientUnaryCall;
  listAssets(argument: google_cloud_securitycenter_v1_securitycenter_service_pb.ListAssetsRequest, callback: grpc.requestCallback<google_cloud_securitycenter_v1_securitycenter_service_pb.ListAssetsResponse>): grpc.ClientUnaryCall;
  listAssets(argument: google_cloud_securitycenter_v1_securitycenter_service_pb.ListAssetsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_securitycenter_v1_securitycenter_service_pb.ListAssetsResponse>): grpc.ClientUnaryCall;
  listAssets(argument: google_cloud_securitycenter_v1_securitycenter_service_pb.ListAssetsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_securitycenter_v1_securitycenter_service_pb.ListAssetsResponse>): grpc.ClientUnaryCall;
  listFindings(argument: google_cloud_securitycenter_v1_securitycenter_service_pb.ListFindingsRequest, callback: grpc.requestCallback<google_cloud_securitycenter_v1_securitycenter_service_pb.ListFindingsResponse>): grpc.ClientUnaryCall;
  listFindings(argument: google_cloud_securitycenter_v1_securitycenter_service_pb.ListFindingsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_securitycenter_v1_securitycenter_service_pb.ListFindingsResponse>): grpc.ClientUnaryCall;
  listFindings(argument: google_cloud_securitycenter_v1_securitycenter_service_pb.ListFindingsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_securitycenter_v1_securitycenter_service_pb.ListFindingsResponse>): grpc.ClientUnaryCall;
  listSources(argument: google_cloud_securitycenter_v1_securitycenter_service_pb.ListSourcesRequest, callback: grpc.requestCallback<google_cloud_securitycenter_v1_securitycenter_service_pb.ListSourcesResponse>): grpc.ClientUnaryCall;
  listSources(argument: google_cloud_securitycenter_v1_securitycenter_service_pb.ListSourcesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_securitycenter_v1_securitycenter_service_pb.ListSourcesResponse>): grpc.ClientUnaryCall;
  listSources(argument: google_cloud_securitycenter_v1_securitycenter_service_pb.ListSourcesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_securitycenter_v1_securitycenter_service_pb.ListSourcesResponse>): grpc.ClientUnaryCall;
  runAssetDiscovery(argument: google_cloud_securitycenter_v1_securitycenter_service_pb.RunAssetDiscoveryRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  runAssetDiscovery(argument: google_cloud_securitycenter_v1_securitycenter_service_pb.RunAssetDiscoveryRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  runAssetDiscovery(argument: google_cloud_securitycenter_v1_securitycenter_service_pb.RunAssetDiscoveryRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  setFindingState(argument: google_cloud_securitycenter_v1_securitycenter_service_pb.SetFindingStateRequest, callback: grpc.requestCallback<google_cloud_securitycenter_v1_finding_pb.Finding>): grpc.ClientUnaryCall;
  setFindingState(argument: google_cloud_securitycenter_v1_securitycenter_service_pb.SetFindingStateRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_securitycenter_v1_finding_pb.Finding>): grpc.ClientUnaryCall;
  setFindingState(argument: google_cloud_securitycenter_v1_securitycenter_service_pb.SetFindingStateRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_securitycenter_v1_finding_pb.Finding>): grpc.ClientUnaryCall;
  setIamPolicy(argument: google_iam_v1_iam_policy_pb.SetIamPolicyRequest, callback: grpc.requestCallback<google_iam_v1_policy_pb.Policy>): grpc.ClientUnaryCall;
  setIamPolicy(argument: google_iam_v1_iam_policy_pb.SetIamPolicyRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_v1_policy_pb.Policy>): grpc.ClientUnaryCall;
  setIamPolicy(argument: google_iam_v1_iam_policy_pb.SetIamPolicyRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_v1_policy_pb.Policy>): grpc.ClientUnaryCall;
  testIamPermissions(argument: google_iam_v1_iam_policy_pb.TestIamPermissionsRequest, callback: grpc.requestCallback<google_iam_v1_iam_policy_pb.TestIamPermissionsResponse>): grpc.ClientUnaryCall;
  testIamPermissions(argument: google_iam_v1_iam_policy_pb.TestIamPermissionsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_v1_iam_policy_pb.TestIamPermissionsResponse>): grpc.ClientUnaryCall;
  testIamPermissions(argument: google_iam_v1_iam_policy_pb.TestIamPermissionsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_v1_iam_policy_pb.TestIamPermissionsResponse>): grpc.ClientUnaryCall;
  updateFinding(argument: google_cloud_securitycenter_v1_securitycenter_service_pb.UpdateFindingRequest, callback: grpc.requestCallback<google_cloud_securitycenter_v1_finding_pb.Finding>): grpc.ClientUnaryCall;
  updateFinding(argument: google_cloud_securitycenter_v1_securitycenter_service_pb.UpdateFindingRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_securitycenter_v1_finding_pb.Finding>): grpc.ClientUnaryCall;
  updateFinding(argument: google_cloud_securitycenter_v1_securitycenter_service_pb.UpdateFindingRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_securitycenter_v1_finding_pb.Finding>): grpc.ClientUnaryCall;
  updateOrganizationSettings(argument: google_cloud_securitycenter_v1_securitycenter_service_pb.UpdateOrganizationSettingsRequest, callback: grpc.requestCallback<google_cloud_securitycenter_v1_organization_settings_pb.OrganizationSettings>): grpc.ClientUnaryCall;
  updateOrganizationSettings(argument: google_cloud_securitycenter_v1_securitycenter_service_pb.UpdateOrganizationSettingsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_securitycenter_v1_organization_settings_pb.OrganizationSettings>): grpc.ClientUnaryCall;
  updateOrganizationSettings(argument: google_cloud_securitycenter_v1_securitycenter_service_pb.UpdateOrganizationSettingsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_securitycenter_v1_organization_settings_pb.OrganizationSettings>): grpc.ClientUnaryCall;
  updateSource(argument: google_cloud_securitycenter_v1_securitycenter_service_pb.UpdateSourceRequest, callback: grpc.requestCallback<google_cloud_securitycenter_v1_source_pb.Source>): grpc.ClientUnaryCall;
  updateSource(argument: google_cloud_securitycenter_v1_securitycenter_service_pb.UpdateSourceRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_securitycenter_v1_source_pb.Source>): grpc.ClientUnaryCall;
  updateSource(argument: google_cloud_securitycenter_v1_securitycenter_service_pb.UpdateSourceRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_securitycenter_v1_source_pb.Source>): grpc.ClientUnaryCall;
  updateSecurityMarks(argument: google_cloud_securitycenter_v1_securitycenter_service_pb.UpdateSecurityMarksRequest, callback: grpc.requestCallback<google_cloud_securitycenter_v1_security_marks_pb.SecurityMarks>): grpc.ClientUnaryCall;
  updateSecurityMarks(argument: google_cloud_securitycenter_v1_securitycenter_service_pb.UpdateSecurityMarksRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_securitycenter_v1_security_marks_pb.SecurityMarks>): grpc.ClientUnaryCall;
  updateSecurityMarks(argument: google_cloud_securitycenter_v1_securitycenter_service_pb.UpdateSecurityMarksRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_securitycenter_v1_security_marks_pb.SecurityMarks>): grpc.ClientUnaryCall;
}
