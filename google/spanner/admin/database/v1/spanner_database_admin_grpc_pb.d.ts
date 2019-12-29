// GENERATED CODE -- DO NOT EDIT!

// package: google.spanner.admin.database.v1
// file: google/spanner/admin/database/v1/spanner_database_admin.proto

import * as google_spanner_admin_database_v1_spanner_database_admin_pb from "../../../../../google/spanner/admin/database/v1/spanner_database_admin_pb";
import * as google_iam_v1_iam_policy_pb from "../../../../../google/iam/v1/iam_policy_pb";
import * as google_iam_v1_policy_pb from "../../../../../google/iam/v1/policy_pb";
import * as google_longrunning_operations_pb from "../../../../../google/longrunning/operations_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "grpc";

interface IDatabaseAdminService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  listDatabases: grpc.MethodDefinition<google_spanner_admin_database_v1_spanner_database_admin_pb.ListDatabasesRequest, google_spanner_admin_database_v1_spanner_database_admin_pb.ListDatabasesResponse>;
  createDatabase: grpc.MethodDefinition<google_spanner_admin_database_v1_spanner_database_admin_pb.CreateDatabaseRequest, google_longrunning_operations_pb.Operation>;
  getDatabase: grpc.MethodDefinition<google_spanner_admin_database_v1_spanner_database_admin_pb.GetDatabaseRequest, google_spanner_admin_database_v1_spanner_database_admin_pb.Database>;
  updateDatabaseDdl: grpc.MethodDefinition<google_spanner_admin_database_v1_spanner_database_admin_pb.UpdateDatabaseDdlRequest, google_longrunning_operations_pb.Operation>;
  dropDatabase: grpc.MethodDefinition<google_spanner_admin_database_v1_spanner_database_admin_pb.DropDatabaseRequest, google_protobuf_empty_pb.Empty>;
  getDatabaseDdl: grpc.MethodDefinition<google_spanner_admin_database_v1_spanner_database_admin_pb.GetDatabaseDdlRequest, google_spanner_admin_database_v1_spanner_database_admin_pb.GetDatabaseDdlResponse>;
  setIamPolicy: grpc.MethodDefinition<google_iam_v1_iam_policy_pb.SetIamPolicyRequest, google_iam_v1_policy_pb.Policy>;
  getIamPolicy: grpc.MethodDefinition<google_iam_v1_iam_policy_pb.GetIamPolicyRequest, google_iam_v1_policy_pb.Policy>;
  testIamPermissions: grpc.MethodDefinition<google_iam_v1_iam_policy_pb.TestIamPermissionsRequest, google_iam_v1_iam_policy_pb.TestIamPermissionsResponse>;
}

export const DatabaseAdminService: IDatabaseAdminService;

export class DatabaseAdminClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  listDatabases(argument: google_spanner_admin_database_v1_spanner_database_admin_pb.ListDatabasesRequest, callback: grpc.requestCallback<google_spanner_admin_database_v1_spanner_database_admin_pb.ListDatabasesResponse>): grpc.ClientUnaryCall;
  listDatabases(argument: google_spanner_admin_database_v1_spanner_database_admin_pb.ListDatabasesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_spanner_admin_database_v1_spanner_database_admin_pb.ListDatabasesResponse>): grpc.ClientUnaryCall;
  listDatabases(argument: google_spanner_admin_database_v1_spanner_database_admin_pb.ListDatabasesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_spanner_admin_database_v1_spanner_database_admin_pb.ListDatabasesResponse>): grpc.ClientUnaryCall;
  createDatabase(argument: google_spanner_admin_database_v1_spanner_database_admin_pb.CreateDatabaseRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  createDatabase(argument: google_spanner_admin_database_v1_spanner_database_admin_pb.CreateDatabaseRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  createDatabase(argument: google_spanner_admin_database_v1_spanner_database_admin_pb.CreateDatabaseRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  getDatabase(argument: google_spanner_admin_database_v1_spanner_database_admin_pb.GetDatabaseRequest, callback: grpc.requestCallback<google_spanner_admin_database_v1_spanner_database_admin_pb.Database>): grpc.ClientUnaryCall;
  getDatabase(argument: google_spanner_admin_database_v1_spanner_database_admin_pb.GetDatabaseRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_spanner_admin_database_v1_spanner_database_admin_pb.Database>): grpc.ClientUnaryCall;
  getDatabase(argument: google_spanner_admin_database_v1_spanner_database_admin_pb.GetDatabaseRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_spanner_admin_database_v1_spanner_database_admin_pb.Database>): grpc.ClientUnaryCall;
  updateDatabaseDdl(argument: google_spanner_admin_database_v1_spanner_database_admin_pb.UpdateDatabaseDdlRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  updateDatabaseDdl(argument: google_spanner_admin_database_v1_spanner_database_admin_pb.UpdateDatabaseDdlRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  updateDatabaseDdl(argument: google_spanner_admin_database_v1_spanner_database_admin_pb.UpdateDatabaseDdlRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  dropDatabase(argument: google_spanner_admin_database_v1_spanner_database_admin_pb.DropDatabaseRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  dropDatabase(argument: google_spanner_admin_database_v1_spanner_database_admin_pb.DropDatabaseRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  dropDatabase(argument: google_spanner_admin_database_v1_spanner_database_admin_pb.DropDatabaseRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  getDatabaseDdl(argument: google_spanner_admin_database_v1_spanner_database_admin_pb.GetDatabaseDdlRequest, callback: grpc.requestCallback<google_spanner_admin_database_v1_spanner_database_admin_pb.GetDatabaseDdlResponse>): grpc.ClientUnaryCall;
  getDatabaseDdl(argument: google_spanner_admin_database_v1_spanner_database_admin_pb.GetDatabaseDdlRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_spanner_admin_database_v1_spanner_database_admin_pb.GetDatabaseDdlResponse>): grpc.ClientUnaryCall;
  getDatabaseDdl(argument: google_spanner_admin_database_v1_spanner_database_admin_pb.GetDatabaseDdlRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_spanner_admin_database_v1_spanner_database_admin_pb.GetDatabaseDdlResponse>): grpc.ClientUnaryCall;
  setIamPolicy(argument: google_iam_v1_iam_policy_pb.SetIamPolicyRequest, callback: grpc.requestCallback<google_iam_v1_policy_pb.Policy>): grpc.ClientUnaryCall;
  setIamPolicy(argument: google_iam_v1_iam_policy_pb.SetIamPolicyRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_v1_policy_pb.Policy>): grpc.ClientUnaryCall;
  setIamPolicy(argument: google_iam_v1_iam_policy_pb.SetIamPolicyRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_v1_policy_pb.Policy>): grpc.ClientUnaryCall;
  getIamPolicy(argument: google_iam_v1_iam_policy_pb.GetIamPolicyRequest, callback: grpc.requestCallback<google_iam_v1_policy_pb.Policy>): grpc.ClientUnaryCall;
  getIamPolicy(argument: google_iam_v1_iam_policy_pb.GetIamPolicyRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_v1_policy_pb.Policy>): grpc.ClientUnaryCall;
  getIamPolicy(argument: google_iam_v1_iam_policy_pb.GetIamPolicyRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_v1_policy_pb.Policy>): grpc.ClientUnaryCall;
  testIamPermissions(argument: google_iam_v1_iam_policy_pb.TestIamPermissionsRequest, callback: grpc.requestCallback<google_iam_v1_iam_policy_pb.TestIamPermissionsResponse>): grpc.ClientUnaryCall;
  testIamPermissions(argument: google_iam_v1_iam_policy_pb.TestIamPermissionsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_v1_iam_policy_pb.TestIamPermissionsResponse>): grpc.ClientUnaryCall;
  testIamPermissions(argument: google_iam_v1_iam_policy_pb.TestIamPermissionsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_v1_iam_policy_pb.TestIamPermissionsResponse>): grpc.ClientUnaryCall;
}
