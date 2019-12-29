// GENERATED CODE -- DO NOT EDIT!

// package: google.bigtable.admin.cluster.v1
// file: google/bigtable/admin/cluster/v1/bigtable_cluster_service.proto

import * as google_bigtable_admin_cluster_v1_bigtable_cluster_service_pb from "../../../../../google/bigtable/admin/cluster/v1/bigtable_cluster_service_pb";
import * as google_bigtable_admin_cluster_v1_bigtable_cluster_data_pb from "../../../../../google/bigtable/admin/cluster/v1/bigtable_cluster_data_pb";
import * as google_bigtable_admin_cluster_v1_bigtable_cluster_service_messages_pb from "../../../../../google/bigtable/admin/cluster/v1/bigtable_cluster_service_messages_pb";
import * as google_longrunning_operations_pb from "../../../../../google/longrunning/operations_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "grpc";

interface IBigtableClusterServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  listZones: grpc.MethodDefinition<google_bigtable_admin_cluster_v1_bigtable_cluster_service_messages_pb.ListZonesRequest, google_bigtable_admin_cluster_v1_bigtable_cluster_service_messages_pb.ListZonesResponse>;
  getCluster: grpc.MethodDefinition<google_bigtable_admin_cluster_v1_bigtable_cluster_service_messages_pb.GetClusterRequest, google_bigtable_admin_cluster_v1_bigtable_cluster_data_pb.Cluster>;
  listClusters: grpc.MethodDefinition<google_bigtable_admin_cluster_v1_bigtable_cluster_service_messages_pb.ListClustersRequest, google_bigtable_admin_cluster_v1_bigtable_cluster_service_messages_pb.ListClustersResponse>;
  createCluster: grpc.MethodDefinition<google_bigtable_admin_cluster_v1_bigtable_cluster_service_messages_pb.CreateClusterRequest, google_bigtable_admin_cluster_v1_bigtable_cluster_data_pb.Cluster>;
  updateCluster: grpc.MethodDefinition<google_bigtable_admin_cluster_v1_bigtable_cluster_data_pb.Cluster, google_bigtable_admin_cluster_v1_bigtable_cluster_data_pb.Cluster>;
  deleteCluster: grpc.MethodDefinition<google_bigtable_admin_cluster_v1_bigtable_cluster_service_messages_pb.DeleteClusterRequest, google_protobuf_empty_pb.Empty>;
  undeleteCluster: grpc.MethodDefinition<google_bigtable_admin_cluster_v1_bigtable_cluster_service_messages_pb.UndeleteClusterRequest, google_longrunning_operations_pb.Operation>;
}

export const BigtableClusterServiceService: IBigtableClusterServiceService;

export class BigtableClusterServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  listZones(argument: google_bigtable_admin_cluster_v1_bigtable_cluster_service_messages_pb.ListZonesRequest, callback: grpc.requestCallback<google_bigtable_admin_cluster_v1_bigtable_cluster_service_messages_pb.ListZonesResponse>): grpc.ClientUnaryCall;
  listZones(argument: google_bigtable_admin_cluster_v1_bigtable_cluster_service_messages_pb.ListZonesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_bigtable_admin_cluster_v1_bigtable_cluster_service_messages_pb.ListZonesResponse>): grpc.ClientUnaryCall;
  listZones(argument: google_bigtable_admin_cluster_v1_bigtable_cluster_service_messages_pb.ListZonesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_bigtable_admin_cluster_v1_bigtable_cluster_service_messages_pb.ListZonesResponse>): grpc.ClientUnaryCall;
  getCluster(argument: google_bigtable_admin_cluster_v1_bigtable_cluster_service_messages_pb.GetClusterRequest, callback: grpc.requestCallback<google_bigtable_admin_cluster_v1_bigtable_cluster_data_pb.Cluster>): grpc.ClientUnaryCall;
  getCluster(argument: google_bigtable_admin_cluster_v1_bigtable_cluster_service_messages_pb.GetClusterRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_bigtable_admin_cluster_v1_bigtable_cluster_data_pb.Cluster>): grpc.ClientUnaryCall;
  getCluster(argument: google_bigtable_admin_cluster_v1_bigtable_cluster_service_messages_pb.GetClusterRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_bigtable_admin_cluster_v1_bigtable_cluster_data_pb.Cluster>): grpc.ClientUnaryCall;
  listClusters(argument: google_bigtable_admin_cluster_v1_bigtable_cluster_service_messages_pb.ListClustersRequest, callback: grpc.requestCallback<google_bigtable_admin_cluster_v1_bigtable_cluster_service_messages_pb.ListClustersResponse>): grpc.ClientUnaryCall;
  listClusters(argument: google_bigtable_admin_cluster_v1_bigtable_cluster_service_messages_pb.ListClustersRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_bigtable_admin_cluster_v1_bigtable_cluster_service_messages_pb.ListClustersResponse>): grpc.ClientUnaryCall;
  listClusters(argument: google_bigtable_admin_cluster_v1_bigtable_cluster_service_messages_pb.ListClustersRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_bigtable_admin_cluster_v1_bigtable_cluster_service_messages_pb.ListClustersResponse>): grpc.ClientUnaryCall;
  createCluster(argument: google_bigtable_admin_cluster_v1_bigtable_cluster_service_messages_pb.CreateClusterRequest, callback: grpc.requestCallback<google_bigtable_admin_cluster_v1_bigtable_cluster_data_pb.Cluster>): grpc.ClientUnaryCall;
  createCluster(argument: google_bigtable_admin_cluster_v1_bigtable_cluster_service_messages_pb.CreateClusterRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_bigtable_admin_cluster_v1_bigtable_cluster_data_pb.Cluster>): grpc.ClientUnaryCall;
  createCluster(argument: google_bigtable_admin_cluster_v1_bigtable_cluster_service_messages_pb.CreateClusterRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_bigtable_admin_cluster_v1_bigtable_cluster_data_pb.Cluster>): grpc.ClientUnaryCall;
  updateCluster(argument: google_bigtable_admin_cluster_v1_bigtable_cluster_data_pb.Cluster, callback: grpc.requestCallback<google_bigtable_admin_cluster_v1_bigtable_cluster_data_pb.Cluster>): grpc.ClientUnaryCall;
  updateCluster(argument: google_bigtable_admin_cluster_v1_bigtable_cluster_data_pb.Cluster, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_bigtable_admin_cluster_v1_bigtable_cluster_data_pb.Cluster>): grpc.ClientUnaryCall;
  updateCluster(argument: google_bigtable_admin_cluster_v1_bigtable_cluster_data_pb.Cluster, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_bigtable_admin_cluster_v1_bigtable_cluster_data_pb.Cluster>): grpc.ClientUnaryCall;
  deleteCluster(argument: google_bigtable_admin_cluster_v1_bigtable_cluster_service_messages_pb.DeleteClusterRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteCluster(argument: google_bigtable_admin_cluster_v1_bigtable_cluster_service_messages_pb.DeleteClusterRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteCluster(argument: google_bigtable_admin_cluster_v1_bigtable_cluster_service_messages_pb.DeleteClusterRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  undeleteCluster(argument: google_bigtable_admin_cluster_v1_bigtable_cluster_service_messages_pb.UndeleteClusterRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  undeleteCluster(argument: google_bigtable_admin_cluster_v1_bigtable_cluster_service_messages_pb.UndeleteClusterRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  undeleteCluster(argument: google_bigtable_admin_cluster_v1_bigtable_cluster_service_messages_pb.UndeleteClusterRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
}
