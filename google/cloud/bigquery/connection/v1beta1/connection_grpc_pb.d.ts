// GENERATED CODE -- DO NOT EDIT!

// package: google.cloud.bigquery.connection.v1beta1
// file: google/cloud/bigquery/connection/v1beta1/connection.proto

import * as google_cloud_bigquery_connection_v1beta1_connection_pb from "../../../../../google/cloud/bigquery/connection/v1beta1/connection_pb";
import * as google_iam_v1_iam_policy_pb from "../../../../../google/iam/v1/iam_policy_pb";
import * as google_iam_v1_policy_pb from "../../../../../google/iam/v1/policy_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "grpc";

interface IConnectionServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createConnection: grpc.MethodDefinition<google_cloud_bigquery_connection_v1beta1_connection_pb.CreateConnectionRequest, google_cloud_bigquery_connection_v1beta1_connection_pb.Connection>;
  getConnection: grpc.MethodDefinition<google_cloud_bigquery_connection_v1beta1_connection_pb.GetConnectionRequest, google_cloud_bigquery_connection_v1beta1_connection_pb.Connection>;
  listConnections: grpc.MethodDefinition<google_cloud_bigquery_connection_v1beta1_connection_pb.ListConnectionsRequest, google_cloud_bigquery_connection_v1beta1_connection_pb.ListConnectionsResponse>;
  updateConnection: grpc.MethodDefinition<google_cloud_bigquery_connection_v1beta1_connection_pb.UpdateConnectionRequest, google_cloud_bigquery_connection_v1beta1_connection_pb.Connection>;
  updateConnectionCredential: grpc.MethodDefinition<google_cloud_bigquery_connection_v1beta1_connection_pb.UpdateConnectionCredentialRequest, google_protobuf_empty_pb.Empty>;
  deleteConnection: grpc.MethodDefinition<google_cloud_bigquery_connection_v1beta1_connection_pb.DeleteConnectionRequest, google_protobuf_empty_pb.Empty>;
  getIamPolicy: grpc.MethodDefinition<google_iam_v1_iam_policy_pb.GetIamPolicyRequest, google_iam_v1_policy_pb.Policy>;
  setIamPolicy: grpc.MethodDefinition<google_iam_v1_iam_policy_pb.SetIamPolicyRequest, google_iam_v1_policy_pb.Policy>;
  testIamPermissions: grpc.MethodDefinition<google_iam_v1_iam_policy_pb.TestIamPermissionsRequest, google_iam_v1_iam_policy_pb.TestIamPermissionsResponse>;
}

export const ConnectionServiceService: IConnectionServiceService;

export class ConnectionServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  createConnection(argument: google_cloud_bigquery_connection_v1beta1_connection_pb.CreateConnectionRequest, callback: grpc.requestCallback<google_cloud_bigquery_connection_v1beta1_connection_pb.Connection>): grpc.ClientUnaryCall;
  createConnection(argument: google_cloud_bigquery_connection_v1beta1_connection_pb.CreateConnectionRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_bigquery_connection_v1beta1_connection_pb.Connection>): grpc.ClientUnaryCall;
  createConnection(argument: google_cloud_bigquery_connection_v1beta1_connection_pb.CreateConnectionRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_bigquery_connection_v1beta1_connection_pb.Connection>): grpc.ClientUnaryCall;
  getConnection(argument: google_cloud_bigquery_connection_v1beta1_connection_pb.GetConnectionRequest, callback: grpc.requestCallback<google_cloud_bigquery_connection_v1beta1_connection_pb.Connection>): grpc.ClientUnaryCall;
  getConnection(argument: google_cloud_bigquery_connection_v1beta1_connection_pb.GetConnectionRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_bigquery_connection_v1beta1_connection_pb.Connection>): grpc.ClientUnaryCall;
  getConnection(argument: google_cloud_bigquery_connection_v1beta1_connection_pb.GetConnectionRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_bigquery_connection_v1beta1_connection_pb.Connection>): grpc.ClientUnaryCall;
  listConnections(argument: google_cloud_bigquery_connection_v1beta1_connection_pb.ListConnectionsRequest, callback: grpc.requestCallback<google_cloud_bigquery_connection_v1beta1_connection_pb.ListConnectionsResponse>): grpc.ClientUnaryCall;
  listConnections(argument: google_cloud_bigquery_connection_v1beta1_connection_pb.ListConnectionsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_bigquery_connection_v1beta1_connection_pb.ListConnectionsResponse>): grpc.ClientUnaryCall;
  listConnections(argument: google_cloud_bigquery_connection_v1beta1_connection_pb.ListConnectionsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_bigquery_connection_v1beta1_connection_pb.ListConnectionsResponse>): grpc.ClientUnaryCall;
  updateConnection(argument: google_cloud_bigquery_connection_v1beta1_connection_pb.UpdateConnectionRequest, callback: grpc.requestCallback<google_cloud_bigquery_connection_v1beta1_connection_pb.Connection>): grpc.ClientUnaryCall;
  updateConnection(argument: google_cloud_bigquery_connection_v1beta1_connection_pb.UpdateConnectionRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_bigquery_connection_v1beta1_connection_pb.Connection>): grpc.ClientUnaryCall;
  updateConnection(argument: google_cloud_bigquery_connection_v1beta1_connection_pb.UpdateConnectionRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_bigquery_connection_v1beta1_connection_pb.Connection>): grpc.ClientUnaryCall;
  updateConnectionCredential(argument: google_cloud_bigquery_connection_v1beta1_connection_pb.UpdateConnectionCredentialRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  updateConnectionCredential(argument: google_cloud_bigquery_connection_v1beta1_connection_pb.UpdateConnectionCredentialRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  updateConnectionCredential(argument: google_cloud_bigquery_connection_v1beta1_connection_pb.UpdateConnectionCredentialRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteConnection(argument: google_cloud_bigquery_connection_v1beta1_connection_pb.DeleteConnectionRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteConnection(argument: google_cloud_bigquery_connection_v1beta1_connection_pb.DeleteConnectionRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteConnection(argument: google_cloud_bigquery_connection_v1beta1_connection_pb.DeleteConnectionRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
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
