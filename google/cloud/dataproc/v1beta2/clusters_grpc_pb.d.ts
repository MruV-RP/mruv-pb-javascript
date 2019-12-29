// GENERATED CODE -- DO NOT EDIT!

// package: google.cloud.dataproc.v1beta2
// file: google/cloud/dataproc/v1beta2/clusters.proto

import * as google_cloud_dataproc_v1beta2_clusters_pb from "../../../../google/cloud/dataproc/v1beta2/clusters_pb";
import * as google_longrunning_operations_pb from "../../../../google/longrunning/operations_pb";
import * as grpc from "grpc";

interface IClusterControllerService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createCluster: grpc.MethodDefinition<google_cloud_dataproc_v1beta2_clusters_pb.CreateClusterRequest, google_longrunning_operations_pb.Operation>;
  updateCluster: grpc.MethodDefinition<google_cloud_dataproc_v1beta2_clusters_pb.UpdateClusterRequest, google_longrunning_operations_pb.Operation>;
  deleteCluster: grpc.MethodDefinition<google_cloud_dataproc_v1beta2_clusters_pb.DeleteClusterRequest, google_longrunning_operations_pb.Operation>;
  getCluster: grpc.MethodDefinition<google_cloud_dataproc_v1beta2_clusters_pb.GetClusterRequest, google_cloud_dataproc_v1beta2_clusters_pb.Cluster>;
  listClusters: grpc.MethodDefinition<google_cloud_dataproc_v1beta2_clusters_pb.ListClustersRequest, google_cloud_dataproc_v1beta2_clusters_pb.ListClustersResponse>;
  diagnoseCluster: grpc.MethodDefinition<google_cloud_dataproc_v1beta2_clusters_pb.DiagnoseClusterRequest, google_longrunning_operations_pb.Operation>;
}

export const ClusterControllerService: IClusterControllerService;

export class ClusterControllerClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  createCluster(argument: google_cloud_dataproc_v1beta2_clusters_pb.CreateClusterRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  createCluster(argument: google_cloud_dataproc_v1beta2_clusters_pb.CreateClusterRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  createCluster(argument: google_cloud_dataproc_v1beta2_clusters_pb.CreateClusterRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  updateCluster(argument: google_cloud_dataproc_v1beta2_clusters_pb.UpdateClusterRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  updateCluster(argument: google_cloud_dataproc_v1beta2_clusters_pb.UpdateClusterRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  updateCluster(argument: google_cloud_dataproc_v1beta2_clusters_pb.UpdateClusterRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  deleteCluster(argument: google_cloud_dataproc_v1beta2_clusters_pb.DeleteClusterRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  deleteCluster(argument: google_cloud_dataproc_v1beta2_clusters_pb.DeleteClusterRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  deleteCluster(argument: google_cloud_dataproc_v1beta2_clusters_pb.DeleteClusterRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  getCluster(argument: google_cloud_dataproc_v1beta2_clusters_pb.GetClusterRequest, callback: grpc.requestCallback<google_cloud_dataproc_v1beta2_clusters_pb.Cluster>): grpc.ClientUnaryCall;
  getCluster(argument: google_cloud_dataproc_v1beta2_clusters_pb.GetClusterRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_dataproc_v1beta2_clusters_pb.Cluster>): grpc.ClientUnaryCall;
  getCluster(argument: google_cloud_dataproc_v1beta2_clusters_pb.GetClusterRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_dataproc_v1beta2_clusters_pb.Cluster>): grpc.ClientUnaryCall;
  listClusters(argument: google_cloud_dataproc_v1beta2_clusters_pb.ListClustersRequest, callback: grpc.requestCallback<google_cloud_dataproc_v1beta2_clusters_pb.ListClustersResponse>): grpc.ClientUnaryCall;
  listClusters(argument: google_cloud_dataproc_v1beta2_clusters_pb.ListClustersRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_dataproc_v1beta2_clusters_pb.ListClustersResponse>): grpc.ClientUnaryCall;
  listClusters(argument: google_cloud_dataproc_v1beta2_clusters_pb.ListClustersRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_dataproc_v1beta2_clusters_pb.ListClustersResponse>): grpc.ClientUnaryCall;
  diagnoseCluster(argument: google_cloud_dataproc_v1beta2_clusters_pb.DiagnoseClusterRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  diagnoseCluster(argument: google_cloud_dataproc_v1beta2_clusters_pb.DiagnoseClusterRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  diagnoseCluster(argument: google_cloud_dataproc_v1beta2_clusters_pb.DiagnoseClusterRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
}
