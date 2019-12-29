// GENERATED CODE -- DO NOT EDIT!

// package: google.genomics.v1
// file: google/genomics/v1/datasets.proto

import * as google_genomics_v1_datasets_pb from "../../../google/genomics/v1/datasets_pb";
import * as google_iam_v1_iam_policy_pb from "../../../google/iam/v1/iam_policy_pb";
import * as google_iam_v1_policy_pb from "../../../google/iam/v1/policy_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "grpc";

interface IDatasetServiceV1Service extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  listDatasets: grpc.MethodDefinition<google_genomics_v1_datasets_pb.ListDatasetsRequest, google_genomics_v1_datasets_pb.ListDatasetsResponse>;
  createDataset: grpc.MethodDefinition<google_genomics_v1_datasets_pb.CreateDatasetRequest, google_genomics_v1_datasets_pb.Dataset>;
  getDataset: grpc.MethodDefinition<google_genomics_v1_datasets_pb.GetDatasetRequest, google_genomics_v1_datasets_pb.Dataset>;
  updateDataset: grpc.MethodDefinition<google_genomics_v1_datasets_pb.UpdateDatasetRequest, google_genomics_v1_datasets_pb.Dataset>;
  deleteDataset: grpc.MethodDefinition<google_genomics_v1_datasets_pb.DeleteDatasetRequest, google_protobuf_empty_pb.Empty>;
  undeleteDataset: grpc.MethodDefinition<google_genomics_v1_datasets_pb.UndeleteDatasetRequest, google_genomics_v1_datasets_pb.Dataset>;
  setIamPolicy: grpc.MethodDefinition<google_iam_v1_iam_policy_pb.SetIamPolicyRequest, google_iam_v1_policy_pb.Policy>;
  getIamPolicy: grpc.MethodDefinition<google_iam_v1_iam_policy_pb.GetIamPolicyRequest, google_iam_v1_policy_pb.Policy>;
  testIamPermissions: grpc.MethodDefinition<google_iam_v1_iam_policy_pb.TestIamPermissionsRequest, google_iam_v1_iam_policy_pb.TestIamPermissionsResponse>;
}

export const DatasetServiceV1Service: IDatasetServiceV1Service;

export class DatasetServiceV1Client extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  listDatasets(argument: google_genomics_v1_datasets_pb.ListDatasetsRequest, callback: grpc.requestCallback<google_genomics_v1_datasets_pb.ListDatasetsResponse>): grpc.ClientUnaryCall;
  listDatasets(argument: google_genomics_v1_datasets_pb.ListDatasetsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_genomics_v1_datasets_pb.ListDatasetsResponse>): grpc.ClientUnaryCall;
  listDatasets(argument: google_genomics_v1_datasets_pb.ListDatasetsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_genomics_v1_datasets_pb.ListDatasetsResponse>): grpc.ClientUnaryCall;
  createDataset(argument: google_genomics_v1_datasets_pb.CreateDatasetRequest, callback: grpc.requestCallback<google_genomics_v1_datasets_pb.Dataset>): grpc.ClientUnaryCall;
  createDataset(argument: google_genomics_v1_datasets_pb.CreateDatasetRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_genomics_v1_datasets_pb.Dataset>): grpc.ClientUnaryCall;
  createDataset(argument: google_genomics_v1_datasets_pb.CreateDatasetRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_genomics_v1_datasets_pb.Dataset>): grpc.ClientUnaryCall;
  getDataset(argument: google_genomics_v1_datasets_pb.GetDatasetRequest, callback: grpc.requestCallback<google_genomics_v1_datasets_pb.Dataset>): grpc.ClientUnaryCall;
  getDataset(argument: google_genomics_v1_datasets_pb.GetDatasetRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_genomics_v1_datasets_pb.Dataset>): grpc.ClientUnaryCall;
  getDataset(argument: google_genomics_v1_datasets_pb.GetDatasetRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_genomics_v1_datasets_pb.Dataset>): grpc.ClientUnaryCall;
  updateDataset(argument: google_genomics_v1_datasets_pb.UpdateDatasetRequest, callback: grpc.requestCallback<google_genomics_v1_datasets_pb.Dataset>): grpc.ClientUnaryCall;
  updateDataset(argument: google_genomics_v1_datasets_pb.UpdateDatasetRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_genomics_v1_datasets_pb.Dataset>): grpc.ClientUnaryCall;
  updateDataset(argument: google_genomics_v1_datasets_pb.UpdateDatasetRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_genomics_v1_datasets_pb.Dataset>): grpc.ClientUnaryCall;
  deleteDataset(argument: google_genomics_v1_datasets_pb.DeleteDatasetRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteDataset(argument: google_genomics_v1_datasets_pb.DeleteDatasetRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteDataset(argument: google_genomics_v1_datasets_pb.DeleteDatasetRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  undeleteDataset(argument: google_genomics_v1_datasets_pb.UndeleteDatasetRequest, callback: grpc.requestCallback<google_genomics_v1_datasets_pb.Dataset>): grpc.ClientUnaryCall;
  undeleteDataset(argument: google_genomics_v1_datasets_pb.UndeleteDatasetRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_genomics_v1_datasets_pb.Dataset>): grpc.ClientUnaryCall;
  undeleteDataset(argument: google_genomics_v1_datasets_pb.UndeleteDatasetRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_genomics_v1_datasets_pb.Dataset>): grpc.ClientUnaryCall;
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
