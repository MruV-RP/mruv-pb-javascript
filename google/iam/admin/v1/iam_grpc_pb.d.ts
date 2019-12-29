// GENERATED CODE -- DO NOT EDIT!

// package: google.iam.admin.v1
// file: google/iam/admin/v1/iam.proto

import * as google_iam_admin_v1_iam_pb from "../../../../google/iam/admin/v1/iam_pb";
import * as google_iam_v1_iam_policy_pb from "../../../../google/iam/v1/iam_policy_pb";
import * as google_iam_v1_policy_pb from "../../../../google/iam/v1/policy_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "grpc";

interface IIAMService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  listServiceAccounts: grpc.MethodDefinition<google_iam_admin_v1_iam_pb.ListServiceAccountsRequest, google_iam_admin_v1_iam_pb.ListServiceAccountsResponse>;
  getServiceAccount: grpc.MethodDefinition<google_iam_admin_v1_iam_pb.GetServiceAccountRequest, google_iam_admin_v1_iam_pb.ServiceAccount>;
  createServiceAccount: grpc.MethodDefinition<google_iam_admin_v1_iam_pb.CreateServiceAccountRequest, google_iam_admin_v1_iam_pb.ServiceAccount>;
  updateServiceAccount: grpc.MethodDefinition<google_iam_admin_v1_iam_pb.ServiceAccount, google_iam_admin_v1_iam_pb.ServiceAccount>;
  deleteServiceAccount: grpc.MethodDefinition<google_iam_admin_v1_iam_pb.DeleteServiceAccountRequest, google_protobuf_empty_pb.Empty>;
  listServiceAccountKeys: grpc.MethodDefinition<google_iam_admin_v1_iam_pb.ListServiceAccountKeysRequest, google_iam_admin_v1_iam_pb.ListServiceAccountKeysResponse>;
  getServiceAccountKey: grpc.MethodDefinition<google_iam_admin_v1_iam_pb.GetServiceAccountKeyRequest, google_iam_admin_v1_iam_pb.ServiceAccountKey>;
  createServiceAccountKey: grpc.MethodDefinition<google_iam_admin_v1_iam_pb.CreateServiceAccountKeyRequest, google_iam_admin_v1_iam_pb.ServiceAccountKey>;
  deleteServiceAccountKey: grpc.MethodDefinition<google_iam_admin_v1_iam_pb.DeleteServiceAccountKeyRequest, google_protobuf_empty_pb.Empty>;
  signBlob: grpc.MethodDefinition<google_iam_admin_v1_iam_pb.SignBlobRequest, google_iam_admin_v1_iam_pb.SignBlobResponse>;
  signJwt: grpc.MethodDefinition<google_iam_admin_v1_iam_pb.SignJwtRequest, google_iam_admin_v1_iam_pb.SignJwtResponse>;
  getIamPolicy: grpc.MethodDefinition<google_iam_v1_iam_policy_pb.GetIamPolicyRequest, google_iam_v1_policy_pb.Policy>;
  setIamPolicy: grpc.MethodDefinition<google_iam_v1_iam_policy_pb.SetIamPolicyRequest, google_iam_v1_policy_pb.Policy>;
  testIamPermissions: grpc.MethodDefinition<google_iam_v1_iam_policy_pb.TestIamPermissionsRequest, google_iam_v1_iam_policy_pb.TestIamPermissionsResponse>;
  queryGrantableRoles: grpc.MethodDefinition<google_iam_admin_v1_iam_pb.QueryGrantableRolesRequest, google_iam_admin_v1_iam_pb.QueryGrantableRolesResponse>;
  listRoles: grpc.MethodDefinition<google_iam_admin_v1_iam_pb.ListRolesRequest, google_iam_admin_v1_iam_pb.ListRolesResponse>;
  getRole: grpc.MethodDefinition<google_iam_admin_v1_iam_pb.GetRoleRequest, google_iam_admin_v1_iam_pb.Role>;
  createRole: grpc.MethodDefinition<google_iam_admin_v1_iam_pb.CreateRoleRequest, google_iam_admin_v1_iam_pb.Role>;
  updateRole: grpc.MethodDefinition<google_iam_admin_v1_iam_pb.UpdateRoleRequest, google_iam_admin_v1_iam_pb.Role>;
  deleteRole: grpc.MethodDefinition<google_iam_admin_v1_iam_pb.DeleteRoleRequest, google_iam_admin_v1_iam_pb.Role>;
  undeleteRole: grpc.MethodDefinition<google_iam_admin_v1_iam_pb.UndeleteRoleRequest, google_iam_admin_v1_iam_pb.Role>;
  queryTestablePermissions: grpc.MethodDefinition<google_iam_admin_v1_iam_pb.QueryTestablePermissionsRequest, google_iam_admin_v1_iam_pb.QueryTestablePermissionsResponse>;
}

export const IAMService: IIAMService;

export class IAMClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  listServiceAccounts(argument: google_iam_admin_v1_iam_pb.ListServiceAccountsRequest, callback: grpc.requestCallback<google_iam_admin_v1_iam_pb.ListServiceAccountsResponse>): grpc.ClientUnaryCall;
  listServiceAccounts(argument: google_iam_admin_v1_iam_pb.ListServiceAccountsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_admin_v1_iam_pb.ListServiceAccountsResponse>): grpc.ClientUnaryCall;
  listServiceAccounts(argument: google_iam_admin_v1_iam_pb.ListServiceAccountsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_admin_v1_iam_pb.ListServiceAccountsResponse>): grpc.ClientUnaryCall;
  getServiceAccount(argument: google_iam_admin_v1_iam_pb.GetServiceAccountRequest, callback: grpc.requestCallback<google_iam_admin_v1_iam_pb.ServiceAccount>): grpc.ClientUnaryCall;
  getServiceAccount(argument: google_iam_admin_v1_iam_pb.GetServiceAccountRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_admin_v1_iam_pb.ServiceAccount>): grpc.ClientUnaryCall;
  getServiceAccount(argument: google_iam_admin_v1_iam_pb.GetServiceAccountRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_admin_v1_iam_pb.ServiceAccount>): grpc.ClientUnaryCall;
  createServiceAccount(argument: google_iam_admin_v1_iam_pb.CreateServiceAccountRequest, callback: grpc.requestCallback<google_iam_admin_v1_iam_pb.ServiceAccount>): grpc.ClientUnaryCall;
  createServiceAccount(argument: google_iam_admin_v1_iam_pb.CreateServiceAccountRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_admin_v1_iam_pb.ServiceAccount>): grpc.ClientUnaryCall;
  createServiceAccount(argument: google_iam_admin_v1_iam_pb.CreateServiceAccountRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_admin_v1_iam_pb.ServiceAccount>): grpc.ClientUnaryCall;
  updateServiceAccount(argument: google_iam_admin_v1_iam_pb.ServiceAccount, callback: grpc.requestCallback<google_iam_admin_v1_iam_pb.ServiceAccount>): grpc.ClientUnaryCall;
  updateServiceAccount(argument: google_iam_admin_v1_iam_pb.ServiceAccount, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_admin_v1_iam_pb.ServiceAccount>): grpc.ClientUnaryCall;
  updateServiceAccount(argument: google_iam_admin_v1_iam_pb.ServiceAccount, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_admin_v1_iam_pb.ServiceAccount>): grpc.ClientUnaryCall;
  deleteServiceAccount(argument: google_iam_admin_v1_iam_pb.DeleteServiceAccountRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteServiceAccount(argument: google_iam_admin_v1_iam_pb.DeleteServiceAccountRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteServiceAccount(argument: google_iam_admin_v1_iam_pb.DeleteServiceAccountRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  listServiceAccountKeys(argument: google_iam_admin_v1_iam_pb.ListServiceAccountKeysRequest, callback: grpc.requestCallback<google_iam_admin_v1_iam_pb.ListServiceAccountKeysResponse>): grpc.ClientUnaryCall;
  listServiceAccountKeys(argument: google_iam_admin_v1_iam_pb.ListServiceAccountKeysRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_admin_v1_iam_pb.ListServiceAccountKeysResponse>): grpc.ClientUnaryCall;
  listServiceAccountKeys(argument: google_iam_admin_v1_iam_pb.ListServiceAccountKeysRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_admin_v1_iam_pb.ListServiceAccountKeysResponse>): grpc.ClientUnaryCall;
  getServiceAccountKey(argument: google_iam_admin_v1_iam_pb.GetServiceAccountKeyRequest, callback: grpc.requestCallback<google_iam_admin_v1_iam_pb.ServiceAccountKey>): grpc.ClientUnaryCall;
  getServiceAccountKey(argument: google_iam_admin_v1_iam_pb.GetServiceAccountKeyRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_admin_v1_iam_pb.ServiceAccountKey>): grpc.ClientUnaryCall;
  getServiceAccountKey(argument: google_iam_admin_v1_iam_pb.GetServiceAccountKeyRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_admin_v1_iam_pb.ServiceAccountKey>): grpc.ClientUnaryCall;
  createServiceAccountKey(argument: google_iam_admin_v1_iam_pb.CreateServiceAccountKeyRequest, callback: grpc.requestCallback<google_iam_admin_v1_iam_pb.ServiceAccountKey>): grpc.ClientUnaryCall;
  createServiceAccountKey(argument: google_iam_admin_v1_iam_pb.CreateServiceAccountKeyRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_admin_v1_iam_pb.ServiceAccountKey>): grpc.ClientUnaryCall;
  createServiceAccountKey(argument: google_iam_admin_v1_iam_pb.CreateServiceAccountKeyRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_admin_v1_iam_pb.ServiceAccountKey>): grpc.ClientUnaryCall;
  deleteServiceAccountKey(argument: google_iam_admin_v1_iam_pb.DeleteServiceAccountKeyRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteServiceAccountKey(argument: google_iam_admin_v1_iam_pb.DeleteServiceAccountKeyRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteServiceAccountKey(argument: google_iam_admin_v1_iam_pb.DeleteServiceAccountKeyRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  signBlob(argument: google_iam_admin_v1_iam_pb.SignBlobRequest, callback: grpc.requestCallback<google_iam_admin_v1_iam_pb.SignBlobResponse>): grpc.ClientUnaryCall;
  signBlob(argument: google_iam_admin_v1_iam_pb.SignBlobRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_admin_v1_iam_pb.SignBlobResponse>): grpc.ClientUnaryCall;
  signBlob(argument: google_iam_admin_v1_iam_pb.SignBlobRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_admin_v1_iam_pb.SignBlobResponse>): grpc.ClientUnaryCall;
  signJwt(argument: google_iam_admin_v1_iam_pb.SignJwtRequest, callback: grpc.requestCallback<google_iam_admin_v1_iam_pb.SignJwtResponse>): grpc.ClientUnaryCall;
  signJwt(argument: google_iam_admin_v1_iam_pb.SignJwtRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_admin_v1_iam_pb.SignJwtResponse>): grpc.ClientUnaryCall;
  signJwt(argument: google_iam_admin_v1_iam_pb.SignJwtRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_admin_v1_iam_pb.SignJwtResponse>): grpc.ClientUnaryCall;
  getIamPolicy(argument: google_iam_v1_iam_policy_pb.GetIamPolicyRequest, callback: grpc.requestCallback<google_iam_v1_policy_pb.Policy>): grpc.ClientUnaryCall;
  getIamPolicy(argument: google_iam_v1_iam_policy_pb.GetIamPolicyRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_v1_policy_pb.Policy>): grpc.ClientUnaryCall;
  getIamPolicy(argument: google_iam_v1_iam_policy_pb.GetIamPolicyRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_v1_policy_pb.Policy>): grpc.ClientUnaryCall;
  setIamPolicy(argument: google_iam_v1_iam_policy_pb.SetIamPolicyRequest, callback: grpc.requestCallback<google_iam_v1_policy_pb.Policy>): grpc.ClientUnaryCall;
  setIamPolicy(argument: google_iam_v1_iam_policy_pb.SetIamPolicyRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_v1_policy_pb.Policy>): grpc.ClientUnaryCall;
  setIamPolicy(argument: google_iam_v1_iam_policy_pb.SetIamPolicyRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_v1_policy_pb.Policy>): grpc.ClientUnaryCall;
  testIamPermissions(argument: google_iam_v1_iam_policy_pb.TestIamPermissionsRequest, callback: grpc.requestCallback<google_iam_v1_iam_policy_pb.TestIamPermissionsResponse>): grpc.ClientUnaryCall;
  testIamPermissions(argument: google_iam_v1_iam_policy_pb.TestIamPermissionsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_v1_iam_policy_pb.TestIamPermissionsResponse>): grpc.ClientUnaryCall;
  testIamPermissions(argument: google_iam_v1_iam_policy_pb.TestIamPermissionsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_v1_iam_policy_pb.TestIamPermissionsResponse>): grpc.ClientUnaryCall;
  queryGrantableRoles(argument: google_iam_admin_v1_iam_pb.QueryGrantableRolesRequest, callback: grpc.requestCallback<google_iam_admin_v1_iam_pb.QueryGrantableRolesResponse>): grpc.ClientUnaryCall;
  queryGrantableRoles(argument: google_iam_admin_v1_iam_pb.QueryGrantableRolesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_admin_v1_iam_pb.QueryGrantableRolesResponse>): grpc.ClientUnaryCall;
  queryGrantableRoles(argument: google_iam_admin_v1_iam_pb.QueryGrantableRolesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_admin_v1_iam_pb.QueryGrantableRolesResponse>): grpc.ClientUnaryCall;
  listRoles(argument: google_iam_admin_v1_iam_pb.ListRolesRequest, callback: grpc.requestCallback<google_iam_admin_v1_iam_pb.ListRolesResponse>): grpc.ClientUnaryCall;
  listRoles(argument: google_iam_admin_v1_iam_pb.ListRolesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_admin_v1_iam_pb.ListRolesResponse>): grpc.ClientUnaryCall;
  listRoles(argument: google_iam_admin_v1_iam_pb.ListRolesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_admin_v1_iam_pb.ListRolesResponse>): grpc.ClientUnaryCall;
  getRole(argument: google_iam_admin_v1_iam_pb.GetRoleRequest, callback: grpc.requestCallback<google_iam_admin_v1_iam_pb.Role>): grpc.ClientUnaryCall;
  getRole(argument: google_iam_admin_v1_iam_pb.GetRoleRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_admin_v1_iam_pb.Role>): grpc.ClientUnaryCall;
  getRole(argument: google_iam_admin_v1_iam_pb.GetRoleRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_admin_v1_iam_pb.Role>): grpc.ClientUnaryCall;
  createRole(argument: google_iam_admin_v1_iam_pb.CreateRoleRequest, callback: grpc.requestCallback<google_iam_admin_v1_iam_pb.Role>): grpc.ClientUnaryCall;
  createRole(argument: google_iam_admin_v1_iam_pb.CreateRoleRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_admin_v1_iam_pb.Role>): grpc.ClientUnaryCall;
  createRole(argument: google_iam_admin_v1_iam_pb.CreateRoleRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_admin_v1_iam_pb.Role>): grpc.ClientUnaryCall;
  updateRole(argument: google_iam_admin_v1_iam_pb.UpdateRoleRequest, callback: grpc.requestCallback<google_iam_admin_v1_iam_pb.Role>): grpc.ClientUnaryCall;
  updateRole(argument: google_iam_admin_v1_iam_pb.UpdateRoleRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_admin_v1_iam_pb.Role>): grpc.ClientUnaryCall;
  updateRole(argument: google_iam_admin_v1_iam_pb.UpdateRoleRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_admin_v1_iam_pb.Role>): grpc.ClientUnaryCall;
  deleteRole(argument: google_iam_admin_v1_iam_pb.DeleteRoleRequest, callback: grpc.requestCallback<google_iam_admin_v1_iam_pb.Role>): grpc.ClientUnaryCall;
  deleteRole(argument: google_iam_admin_v1_iam_pb.DeleteRoleRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_admin_v1_iam_pb.Role>): grpc.ClientUnaryCall;
  deleteRole(argument: google_iam_admin_v1_iam_pb.DeleteRoleRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_admin_v1_iam_pb.Role>): grpc.ClientUnaryCall;
  undeleteRole(argument: google_iam_admin_v1_iam_pb.UndeleteRoleRequest, callback: grpc.requestCallback<google_iam_admin_v1_iam_pb.Role>): grpc.ClientUnaryCall;
  undeleteRole(argument: google_iam_admin_v1_iam_pb.UndeleteRoleRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_admin_v1_iam_pb.Role>): grpc.ClientUnaryCall;
  undeleteRole(argument: google_iam_admin_v1_iam_pb.UndeleteRoleRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_admin_v1_iam_pb.Role>): grpc.ClientUnaryCall;
  queryTestablePermissions(argument: google_iam_admin_v1_iam_pb.QueryTestablePermissionsRequest, callback: grpc.requestCallback<google_iam_admin_v1_iam_pb.QueryTestablePermissionsResponse>): grpc.ClientUnaryCall;
  queryTestablePermissions(argument: google_iam_admin_v1_iam_pb.QueryTestablePermissionsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_admin_v1_iam_pb.QueryTestablePermissionsResponse>): grpc.ClientUnaryCall;
  queryTestablePermissions(argument: google_iam_admin_v1_iam_pb.QueryTestablePermissionsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_admin_v1_iam_pb.QueryTestablePermissionsResponse>): grpc.ClientUnaryCall;
}
