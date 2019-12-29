// GENERATED CODE -- DO NOT EDIT!

// package: google.bigtable.admin.v2
// file: google/bigtable/admin/v2/bigtable_table_admin.proto

import * as google_bigtable_admin_v2_bigtable_table_admin_pb from "../../../../google/bigtable/admin/v2/bigtable_table_admin_pb";
import * as google_bigtable_admin_v2_table_pb from "../../../../google/bigtable/admin/v2/table_pb";
import * as google_iam_v1_iam_policy_pb from "../../../../google/iam/v1/iam_policy_pb";
import * as google_iam_v1_policy_pb from "../../../../google/iam/v1/policy_pb";
import * as google_longrunning_operations_pb from "../../../../google/longrunning/operations_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "grpc";

interface IBigtableTableAdminService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createTable: grpc.MethodDefinition<google_bigtable_admin_v2_bigtable_table_admin_pb.CreateTableRequest, google_bigtable_admin_v2_table_pb.Table>;
  createTableFromSnapshot: grpc.MethodDefinition<google_bigtable_admin_v2_bigtable_table_admin_pb.CreateTableFromSnapshotRequest, google_longrunning_operations_pb.Operation>;
  listTables: grpc.MethodDefinition<google_bigtable_admin_v2_bigtable_table_admin_pb.ListTablesRequest, google_bigtable_admin_v2_bigtable_table_admin_pb.ListTablesResponse>;
  getTable: grpc.MethodDefinition<google_bigtable_admin_v2_bigtable_table_admin_pb.GetTableRequest, google_bigtable_admin_v2_table_pb.Table>;
  deleteTable: grpc.MethodDefinition<google_bigtable_admin_v2_bigtable_table_admin_pb.DeleteTableRequest, google_protobuf_empty_pb.Empty>;
  modifyColumnFamilies: grpc.MethodDefinition<google_bigtable_admin_v2_bigtable_table_admin_pb.ModifyColumnFamiliesRequest, google_bigtable_admin_v2_table_pb.Table>;
  dropRowRange: grpc.MethodDefinition<google_bigtable_admin_v2_bigtable_table_admin_pb.DropRowRangeRequest, google_protobuf_empty_pb.Empty>;
  generateConsistencyToken: grpc.MethodDefinition<google_bigtable_admin_v2_bigtable_table_admin_pb.GenerateConsistencyTokenRequest, google_bigtable_admin_v2_bigtable_table_admin_pb.GenerateConsistencyTokenResponse>;
  checkConsistency: grpc.MethodDefinition<google_bigtable_admin_v2_bigtable_table_admin_pb.CheckConsistencyRequest, google_bigtable_admin_v2_bigtable_table_admin_pb.CheckConsistencyResponse>;
  snapshotTable: grpc.MethodDefinition<google_bigtable_admin_v2_bigtable_table_admin_pb.SnapshotTableRequest, google_longrunning_operations_pb.Operation>;
  getSnapshot: grpc.MethodDefinition<google_bigtable_admin_v2_bigtable_table_admin_pb.GetSnapshotRequest, google_bigtable_admin_v2_table_pb.Snapshot>;
  listSnapshots: grpc.MethodDefinition<google_bigtable_admin_v2_bigtable_table_admin_pb.ListSnapshotsRequest, google_bigtable_admin_v2_bigtable_table_admin_pb.ListSnapshotsResponse>;
  deleteSnapshot: grpc.MethodDefinition<google_bigtable_admin_v2_bigtable_table_admin_pb.DeleteSnapshotRequest, google_protobuf_empty_pb.Empty>;
  getIamPolicy: grpc.MethodDefinition<google_iam_v1_iam_policy_pb.GetIamPolicyRequest, google_iam_v1_policy_pb.Policy>;
  setIamPolicy: grpc.MethodDefinition<google_iam_v1_iam_policy_pb.SetIamPolicyRequest, google_iam_v1_policy_pb.Policy>;
  testIamPermissions: grpc.MethodDefinition<google_iam_v1_iam_policy_pb.TestIamPermissionsRequest, google_iam_v1_iam_policy_pb.TestIamPermissionsResponse>;
}

export const BigtableTableAdminService: IBigtableTableAdminService;

export class BigtableTableAdminClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  createTable(argument: google_bigtable_admin_v2_bigtable_table_admin_pb.CreateTableRequest, callback: grpc.requestCallback<google_bigtable_admin_v2_table_pb.Table>): grpc.ClientUnaryCall;
  createTable(argument: google_bigtable_admin_v2_bigtable_table_admin_pb.CreateTableRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_bigtable_admin_v2_table_pb.Table>): grpc.ClientUnaryCall;
  createTable(argument: google_bigtable_admin_v2_bigtable_table_admin_pb.CreateTableRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_bigtable_admin_v2_table_pb.Table>): grpc.ClientUnaryCall;
  createTableFromSnapshot(argument: google_bigtable_admin_v2_bigtable_table_admin_pb.CreateTableFromSnapshotRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  createTableFromSnapshot(argument: google_bigtable_admin_v2_bigtable_table_admin_pb.CreateTableFromSnapshotRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  createTableFromSnapshot(argument: google_bigtable_admin_v2_bigtable_table_admin_pb.CreateTableFromSnapshotRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  listTables(argument: google_bigtable_admin_v2_bigtable_table_admin_pb.ListTablesRequest, callback: grpc.requestCallback<google_bigtable_admin_v2_bigtable_table_admin_pb.ListTablesResponse>): grpc.ClientUnaryCall;
  listTables(argument: google_bigtable_admin_v2_bigtable_table_admin_pb.ListTablesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_bigtable_admin_v2_bigtable_table_admin_pb.ListTablesResponse>): grpc.ClientUnaryCall;
  listTables(argument: google_bigtable_admin_v2_bigtable_table_admin_pb.ListTablesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_bigtable_admin_v2_bigtable_table_admin_pb.ListTablesResponse>): grpc.ClientUnaryCall;
  getTable(argument: google_bigtable_admin_v2_bigtable_table_admin_pb.GetTableRequest, callback: grpc.requestCallback<google_bigtable_admin_v2_table_pb.Table>): grpc.ClientUnaryCall;
  getTable(argument: google_bigtable_admin_v2_bigtable_table_admin_pb.GetTableRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_bigtable_admin_v2_table_pb.Table>): grpc.ClientUnaryCall;
  getTable(argument: google_bigtable_admin_v2_bigtable_table_admin_pb.GetTableRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_bigtable_admin_v2_table_pb.Table>): grpc.ClientUnaryCall;
  deleteTable(argument: google_bigtable_admin_v2_bigtable_table_admin_pb.DeleteTableRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteTable(argument: google_bigtable_admin_v2_bigtable_table_admin_pb.DeleteTableRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteTable(argument: google_bigtable_admin_v2_bigtable_table_admin_pb.DeleteTableRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  modifyColumnFamilies(argument: google_bigtable_admin_v2_bigtable_table_admin_pb.ModifyColumnFamiliesRequest, callback: grpc.requestCallback<google_bigtable_admin_v2_table_pb.Table>): grpc.ClientUnaryCall;
  modifyColumnFamilies(argument: google_bigtable_admin_v2_bigtable_table_admin_pb.ModifyColumnFamiliesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_bigtable_admin_v2_table_pb.Table>): grpc.ClientUnaryCall;
  modifyColumnFamilies(argument: google_bigtable_admin_v2_bigtable_table_admin_pb.ModifyColumnFamiliesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_bigtable_admin_v2_table_pb.Table>): grpc.ClientUnaryCall;
  dropRowRange(argument: google_bigtable_admin_v2_bigtable_table_admin_pb.DropRowRangeRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  dropRowRange(argument: google_bigtable_admin_v2_bigtable_table_admin_pb.DropRowRangeRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  dropRowRange(argument: google_bigtable_admin_v2_bigtable_table_admin_pb.DropRowRangeRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  generateConsistencyToken(argument: google_bigtable_admin_v2_bigtable_table_admin_pb.GenerateConsistencyTokenRequest, callback: grpc.requestCallback<google_bigtable_admin_v2_bigtable_table_admin_pb.GenerateConsistencyTokenResponse>): grpc.ClientUnaryCall;
  generateConsistencyToken(argument: google_bigtable_admin_v2_bigtable_table_admin_pb.GenerateConsistencyTokenRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_bigtable_admin_v2_bigtable_table_admin_pb.GenerateConsistencyTokenResponse>): grpc.ClientUnaryCall;
  generateConsistencyToken(argument: google_bigtable_admin_v2_bigtable_table_admin_pb.GenerateConsistencyTokenRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_bigtable_admin_v2_bigtable_table_admin_pb.GenerateConsistencyTokenResponse>): grpc.ClientUnaryCall;
  checkConsistency(argument: google_bigtable_admin_v2_bigtable_table_admin_pb.CheckConsistencyRequest, callback: grpc.requestCallback<google_bigtable_admin_v2_bigtable_table_admin_pb.CheckConsistencyResponse>): grpc.ClientUnaryCall;
  checkConsistency(argument: google_bigtable_admin_v2_bigtable_table_admin_pb.CheckConsistencyRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_bigtable_admin_v2_bigtable_table_admin_pb.CheckConsistencyResponse>): grpc.ClientUnaryCall;
  checkConsistency(argument: google_bigtable_admin_v2_bigtable_table_admin_pb.CheckConsistencyRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_bigtable_admin_v2_bigtable_table_admin_pb.CheckConsistencyResponse>): grpc.ClientUnaryCall;
  snapshotTable(argument: google_bigtable_admin_v2_bigtable_table_admin_pb.SnapshotTableRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  snapshotTable(argument: google_bigtable_admin_v2_bigtable_table_admin_pb.SnapshotTableRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  snapshotTable(argument: google_bigtable_admin_v2_bigtable_table_admin_pb.SnapshotTableRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  getSnapshot(argument: google_bigtable_admin_v2_bigtable_table_admin_pb.GetSnapshotRequest, callback: grpc.requestCallback<google_bigtable_admin_v2_table_pb.Snapshot>): grpc.ClientUnaryCall;
  getSnapshot(argument: google_bigtable_admin_v2_bigtable_table_admin_pb.GetSnapshotRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_bigtable_admin_v2_table_pb.Snapshot>): grpc.ClientUnaryCall;
  getSnapshot(argument: google_bigtable_admin_v2_bigtable_table_admin_pb.GetSnapshotRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_bigtable_admin_v2_table_pb.Snapshot>): grpc.ClientUnaryCall;
  listSnapshots(argument: google_bigtable_admin_v2_bigtable_table_admin_pb.ListSnapshotsRequest, callback: grpc.requestCallback<google_bigtable_admin_v2_bigtable_table_admin_pb.ListSnapshotsResponse>): grpc.ClientUnaryCall;
  listSnapshots(argument: google_bigtable_admin_v2_bigtable_table_admin_pb.ListSnapshotsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_bigtable_admin_v2_bigtable_table_admin_pb.ListSnapshotsResponse>): grpc.ClientUnaryCall;
  listSnapshots(argument: google_bigtable_admin_v2_bigtable_table_admin_pb.ListSnapshotsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_bigtable_admin_v2_bigtable_table_admin_pb.ListSnapshotsResponse>): grpc.ClientUnaryCall;
  deleteSnapshot(argument: google_bigtable_admin_v2_bigtable_table_admin_pb.DeleteSnapshotRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteSnapshot(argument: google_bigtable_admin_v2_bigtable_table_admin_pb.DeleteSnapshotRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteSnapshot(argument: google_bigtable_admin_v2_bigtable_table_admin_pb.DeleteSnapshotRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  getIamPolicy(argument: google_iam_v1_iam_policy_pb.GetIamPolicyRequest, callback: grpc.requestCallback<google_iam_v1_policy_pb.Policy>): grpc.ClientUnaryCall;
  getIamPolicy(argument: google_iam_v1_iam_policy_pb.GetIamPolicyRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_v1_policy_pb.Policy>): grpc.ClientUnaryCall;
  getIamPolicy(argument: google_iam_v1_iam_policy_pb.GetIamPolicyRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_v1_policy_pb.Policy>): grpc.ClientUnaryCall;
  setIamPolicy(argument: google_iam_v1_iam_policy_pb.SetIamPolicyRequest, callback: grpc.requestCallback<google_iam_v1_policy_pb.Policy>): grpc.ClientUnaryCall;
  setIamPolicy(argument: google_iam_v1_iam_policy_pb.SetIamPolicyRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_v1_policy_pb.Policy>): grpc.ClientUnaryCall;
  setIamPolicy(argument: google_iam_v1_iam_policy_pb.SetIamPolicyRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_v1_policy_pb.Policy>): grpc.ClientUnaryCall;
  testIamPermissions(argument: google_iam_v1_iam_policy_pb.TestIamPermissionsRequest, callback: grpc.requestCallback<google_iam_v1_iam_policy_pb.TestIamPermissionsResponse>): grpc.ClientUnaryCall;
  testIamPermissions(argument: google_iam_v1_iam_policy_pb.TestIamPermissionsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_v1_iam_policy_pb.TestIamPermissionsResponse>): grpc.ClientUnaryCall;
  testIamPermissions(argument: google_iam_v1_iam_policy_pb.TestIamPermissionsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_v1_iam_policy_pb.TestIamPermissionsResponse>): grpc.ClientUnaryCall;
}
