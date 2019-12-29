// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright 2019 Google LLC.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
//
'use strict';
var grpc = require('grpc');
var google_cloud_dataproc_v1beta2_clusters_pb = require('../../../../google/cloud/dataproc/v1beta2/clusters_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_api_client_pb = require('../../../../google/api/client_pb.js');
var google_api_field_behavior_pb = require('../../../../google/api/field_behavior_pb.js');
var google_cloud_dataproc_v1beta2_operations_pb = require('../../../../google/cloud/dataproc/v1beta2/operations_pb.js');
var google_cloud_dataproc_v1beta2_shared_pb = require('../../../../google/cloud/dataproc/v1beta2/shared_pb.js');
var google_longrunning_operations_pb = require('../../../../google/longrunning/operations_pb.js');
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_google_cloud_dataproc_v1beta2_Cluster(arg) {
  if (!(arg instanceof google_cloud_dataproc_v1beta2_clusters_pb.Cluster)) {
    throw new Error('Expected argument of type google.cloud.dataproc.v1beta2.Cluster');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_dataproc_v1beta2_Cluster(buffer_arg) {
  return google_cloud_dataproc_v1beta2_clusters_pb.Cluster.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_dataproc_v1beta2_CreateClusterRequest(arg) {
  if (!(arg instanceof google_cloud_dataproc_v1beta2_clusters_pb.CreateClusterRequest)) {
    throw new Error('Expected argument of type google.cloud.dataproc.v1beta2.CreateClusterRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_dataproc_v1beta2_CreateClusterRequest(buffer_arg) {
  return google_cloud_dataproc_v1beta2_clusters_pb.CreateClusterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_dataproc_v1beta2_DeleteClusterRequest(arg) {
  if (!(arg instanceof google_cloud_dataproc_v1beta2_clusters_pb.DeleteClusterRequest)) {
    throw new Error('Expected argument of type google.cloud.dataproc.v1beta2.DeleteClusterRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_dataproc_v1beta2_DeleteClusterRequest(buffer_arg) {
  return google_cloud_dataproc_v1beta2_clusters_pb.DeleteClusterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_dataproc_v1beta2_DiagnoseClusterRequest(arg) {
  if (!(arg instanceof google_cloud_dataproc_v1beta2_clusters_pb.DiagnoseClusterRequest)) {
    throw new Error('Expected argument of type google.cloud.dataproc.v1beta2.DiagnoseClusterRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_dataproc_v1beta2_DiagnoseClusterRequest(buffer_arg) {
  return google_cloud_dataproc_v1beta2_clusters_pb.DiagnoseClusterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_dataproc_v1beta2_GetClusterRequest(arg) {
  if (!(arg instanceof google_cloud_dataproc_v1beta2_clusters_pb.GetClusterRequest)) {
    throw new Error('Expected argument of type google.cloud.dataproc.v1beta2.GetClusterRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_dataproc_v1beta2_GetClusterRequest(buffer_arg) {
  return google_cloud_dataproc_v1beta2_clusters_pb.GetClusterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_dataproc_v1beta2_ListClustersRequest(arg) {
  if (!(arg instanceof google_cloud_dataproc_v1beta2_clusters_pb.ListClustersRequest)) {
    throw new Error('Expected argument of type google.cloud.dataproc.v1beta2.ListClustersRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_dataproc_v1beta2_ListClustersRequest(buffer_arg) {
  return google_cloud_dataproc_v1beta2_clusters_pb.ListClustersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_dataproc_v1beta2_ListClustersResponse(arg) {
  if (!(arg instanceof google_cloud_dataproc_v1beta2_clusters_pb.ListClustersResponse)) {
    throw new Error('Expected argument of type google.cloud.dataproc.v1beta2.ListClustersResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_dataproc_v1beta2_ListClustersResponse(buffer_arg) {
  return google_cloud_dataproc_v1beta2_clusters_pb.ListClustersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_dataproc_v1beta2_UpdateClusterRequest(arg) {
  if (!(arg instanceof google_cloud_dataproc_v1beta2_clusters_pb.UpdateClusterRequest)) {
    throw new Error('Expected argument of type google.cloud.dataproc.v1beta2.UpdateClusterRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_dataproc_v1beta2_UpdateClusterRequest(buffer_arg) {
  return google_cloud_dataproc_v1beta2_clusters_pb.UpdateClusterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_longrunning_Operation(arg) {
  if (!(arg instanceof google_longrunning_operations_pb.Operation)) {
    throw new Error('Expected argument of type google.longrunning.Operation');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_longrunning_Operation(buffer_arg) {
  return google_longrunning_operations_pb.Operation.deserializeBinary(new Uint8Array(buffer_arg));
}


// The ClusterControllerService provides methods to manage clusters
// of Compute Engine instances.
var ClusterControllerService = exports.ClusterControllerService = {
  // Creates a cluster in a project. The returned
  // [Operation.metadata][google.longrunning.Operation.metadata] will be
  // [ClusterOperationMetadata](/dataproc/docs/reference/rpc/google.cloud.dataproc.v1beta2#clusteroperationmetadata).
  createCluster: {
    path: '/google.cloud.dataproc.v1beta2.ClusterController/CreateCluster',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_dataproc_v1beta2_clusters_pb.CreateClusterRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_cloud_dataproc_v1beta2_CreateClusterRequest,
    requestDeserialize: deserialize_google_cloud_dataproc_v1beta2_CreateClusterRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Updates a cluster in a project. The returned
  // [Operation.metadata][google.longrunning.Operation.metadata] will be
  // [ClusterOperationMetadata](/dataproc/docs/reference/rpc/google.cloud.dataproc.v1beta2#clusteroperationmetadata).
  updateCluster: {
    path: '/google.cloud.dataproc.v1beta2.ClusterController/UpdateCluster',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_dataproc_v1beta2_clusters_pb.UpdateClusterRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_cloud_dataproc_v1beta2_UpdateClusterRequest,
    requestDeserialize: deserialize_google_cloud_dataproc_v1beta2_UpdateClusterRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Deletes a cluster in a project. The returned
  // [Operation.metadata][google.longrunning.Operation.metadata] will be
  // [ClusterOperationMetadata](/dataproc/docs/reference/rpc/google.cloud.dataproc.v1beta2#clusteroperationmetadata).
  deleteCluster: {
    path: '/google.cloud.dataproc.v1beta2.ClusterController/DeleteCluster',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_dataproc_v1beta2_clusters_pb.DeleteClusterRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_cloud_dataproc_v1beta2_DeleteClusterRequest,
    requestDeserialize: deserialize_google_cloud_dataproc_v1beta2_DeleteClusterRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Gets the resource representation for a cluster in a project.
  getCluster: {
    path: '/google.cloud.dataproc.v1beta2.ClusterController/GetCluster',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_dataproc_v1beta2_clusters_pb.GetClusterRequest,
    responseType: google_cloud_dataproc_v1beta2_clusters_pb.Cluster,
    requestSerialize: serialize_google_cloud_dataproc_v1beta2_GetClusterRequest,
    requestDeserialize: deserialize_google_cloud_dataproc_v1beta2_GetClusterRequest,
    responseSerialize: serialize_google_cloud_dataproc_v1beta2_Cluster,
    responseDeserialize: deserialize_google_cloud_dataproc_v1beta2_Cluster,
  },
  // Lists all regions/{region}/clusters in a project.
  listClusters: {
    path: '/google.cloud.dataproc.v1beta2.ClusterController/ListClusters',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_dataproc_v1beta2_clusters_pb.ListClustersRequest,
    responseType: google_cloud_dataproc_v1beta2_clusters_pb.ListClustersResponse,
    requestSerialize: serialize_google_cloud_dataproc_v1beta2_ListClustersRequest,
    requestDeserialize: deserialize_google_cloud_dataproc_v1beta2_ListClustersRequest,
    responseSerialize: serialize_google_cloud_dataproc_v1beta2_ListClustersResponse,
    responseDeserialize: deserialize_google_cloud_dataproc_v1beta2_ListClustersResponse,
  },
  // Gets cluster diagnostic information. The returned
  // [Operation.metadata][google.longrunning.Operation.metadata] will be
  // [ClusterOperationMetadata](/dataproc/docs/reference/rpc/google.cloud.dataproc.v1beta2#clusteroperationmetadata).
  // After the operation completes,
  // [Operation.response][google.longrunning.Operation.response]
  // contains
  // [Empty](google.protobuf.Empty).
  diagnoseCluster: {
    path: '/google.cloud.dataproc.v1beta2.ClusterController/DiagnoseCluster',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_dataproc_v1beta2_clusters_pb.DiagnoseClusterRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_cloud_dataproc_v1beta2_DiagnoseClusterRequest,
    requestDeserialize: deserialize_google_cloud_dataproc_v1beta2_DiagnoseClusterRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
};

exports.ClusterControllerClient = grpc.makeGenericClientConstructor(ClusterControllerService);
