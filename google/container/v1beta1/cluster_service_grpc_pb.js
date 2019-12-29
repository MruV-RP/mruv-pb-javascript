// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright 2018 Google LLC.
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
var google_container_v1beta1_cluster_service_pb = require('../../../google/container/v1beta1/cluster_service_pb.js');
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
var google_iam_v1_iam_policy_pb = require('../../../google/iam/v1/iam_policy_pb.js');
var google_iam_v1_policy_pb = require('../../../google/iam/v1/policy_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_google_container_v1beta1_CancelOperationRequest(arg) {
  if (!(arg instanceof google_container_v1beta1_cluster_service_pb.CancelOperationRequest)) {
    throw new Error('Expected argument of type google.container.v1beta1.CancelOperationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_container_v1beta1_CancelOperationRequest(buffer_arg) {
  return google_container_v1beta1_cluster_service_pb.CancelOperationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_container_v1beta1_Cluster(arg) {
  if (!(arg instanceof google_container_v1beta1_cluster_service_pb.Cluster)) {
    throw new Error('Expected argument of type google.container.v1beta1.Cluster');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_container_v1beta1_Cluster(buffer_arg) {
  return google_container_v1beta1_cluster_service_pb.Cluster.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_container_v1beta1_CompleteIPRotationRequest(arg) {
  if (!(arg instanceof google_container_v1beta1_cluster_service_pb.CompleteIPRotationRequest)) {
    throw new Error('Expected argument of type google.container.v1beta1.CompleteIPRotationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_container_v1beta1_CompleteIPRotationRequest(buffer_arg) {
  return google_container_v1beta1_cluster_service_pb.CompleteIPRotationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_container_v1beta1_CreateClusterRequest(arg) {
  if (!(arg instanceof google_container_v1beta1_cluster_service_pb.CreateClusterRequest)) {
    throw new Error('Expected argument of type google.container.v1beta1.CreateClusterRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_container_v1beta1_CreateClusterRequest(buffer_arg) {
  return google_container_v1beta1_cluster_service_pb.CreateClusterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_container_v1beta1_CreateNodePoolRequest(arg) {
  if (!(arg instanceof google_container_v1beta1_cluster_service_pb.CreateNodePoolRequest)) {
    throw new Error('Expected argument of type google.container.v1beta1.CreateNodePoolRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_container_v1beta1_CreateNodePoolRequest(buffer_arg) {
  return google_container_v1beta1_cluster_service_pb.CreateNodePoolRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_container_v1beta1_DeleteClusterRequest(arg) {
  if (!(arg instanceof google_container_v1beta1_cluster_service_pb.DeleteClusterRequest)) {
    throw new Error('Expected argument of type google.container.v1beta1.DeleteClusterRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_container_v1beta1_DeleteClusterRequest(buffer_arg) {
  return google_container_v1beta1_cluster_service_pb.DeleteClusterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_container_v1beta1_DeleteNodePoolRequest(arg) {
  if (!(arg instanceof google_container_v1beta1_cluster_service_pb.DeleteNodePoolRequest)) {
    throw new Error('Expected argument of type google.container.v1beta1.DeleteNodePoolRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_container_v1beta1_DeleteNodePoolRequest(buffer_arg) {
  return google_container_v1beta1_cluster_service_pb.DeleteNodePoolRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_container_v1beta1_GetClusterRequest(arg) {
  if (!(arg instanceof google_container_v1beta1_cluster_service_pb.GetClusterRequest)) {
    throw new Error('Expected argument of type google.container.v1beta1.GetClusterRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_container_v1beta1_GetClusterRequest(buffer_arg) {
  return google_container_v1beta1_cluster_service_pb.GetClusterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_container_v1beta1_GetNodePoolRequest(arg) {
  if (!(arg instanceof google_container_v1beta1_cluster_service_pb.GetNodePoolRequest)) {
    throw new Error('Expected argument of type google.container.v1beta1.GetNodePoolRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_container_v1beta1_GetNodePoolRequest(buffer_arg) {
  return google_container_v1beta1_cluster_service_pb.GetNodePoolRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_container_v1beta1_GetOperationRequest(arg) {
  if (!(arg instanceof google_container_v1beta1_cluster_service_pb.GetOperationRequest)) {
    throw new Error('Expected argument of type google.container.v1beta1.GetOperationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_container_v1beta1_GetOperationRequest(buffer_arg) {
  return google_container_v1beta1_cluster_service_pb.GetOperationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_container_v1beta1_GetServerConfigRequest(arg) {
  if (!(arg instanceof google_container_v1beta1_cluster_service_pb.GetServerConfigRequest)) {
    throw new Error('Expected argument of type google.container.v1beta1.GetServerConfigRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_container_v1beta1_GetServerConfigRequest(buffer_arg) {
  return google_container_v1beta1_cluster_service_pb.GetServerConfigRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_container_v1beta1_ListClustersRequest(arg) {
  if (!(arg instanceof google_container_v1beta1_cluster_service_pb.ListClustersRequest)) {
    throw new Error('Expected argument of type google.container.v1beta1.ListClustersRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_container_v1beta1_ListClustersRequest(buffer_arg) {
  return google_container_v1beta1_cluster_service_pb.ListClustersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_container_v1beta1_ListClustersResponse(arg) {
  if (!(arg instanceof google_container_v1beta1_cluster_service_pb.ListClustersResponse)) {
    throw new Error('Expected argument of type google.container.v1beta1.ListClustersResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_container_v1beta1_ListClustersResponse(buffer_arg) {
  return google_container_v1beta1_cluster_service_pb.ListClustersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_container_v1beta1_ListLocationsRequest(arg) {
  if (!(arg instanceof google_container_v1beta1_cluster_service_pb.ListLocationsRequest)) {
    throw new Error('Expected argument of type google.container.v1beta1.ListLocationsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_container_v1beta1_ListLocationsRequest(buffer_arg) {
  return google_container_v1beta1_cluster_service_pb.ListLocationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_container_v1beta1_ListLocationsResponse(arg) {
  if (!(arg instanceof google_container_v1beta1_cluster_service_pb.ListLocationsResponse)) {
    throw new Error('Expected argument of type google.container.v1beta1.ListLocationsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_container_v1beta1_ListLocationsResponse(buffer_arg) {
  return google_container_v1beta1_cluster_service_pb.ListLocationsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_container_v1beta1_ListNodePoolsRequest(arg) {
  if (!(arg instanceof google_container_v1beta1_cluster_service_pb.ListNodePoolsRequest)) {
    throw new Error('Expected argument of type google.container.v1beta1.ListNodePoolsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_container_v1beta1_ListNodePoolsRequest(buffer_arg) {
  return google_container_v1beta1_cluster_service_pb.ListNodePoolsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_container_v1beta1_ListNodePoolsResponse(arg) {
  if (!(arg instanceof google_container_v1beta1_cluster_service_pb.ListNodePoolsResponse)) {
    throw new Error('Expected argument of type google.container.v1beta1.ListNodePoolsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_container_v1beta1_ListNodePoolsResponse(buffer_arg) {
  return google_container_v1beta1_cluster_service_pb.ListNodePoolsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_container_v1beta1_ListOperationsRequest(arg) {
  if (!(arg instanceof google_container_v1beta1_cluster_service_pb.ListOperationsRequest)) {
    throw new Error('Expected argument of type google.container.v1beta1.ListOperationsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_container_v1beta1_ListOperationsRequest(buffer_arg) {
  return google_container_v1beta1_cluster_service_pb.ListOperationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_container_v1beta1_ListOperationsResponse(arg) {
  if (!(arg instanceof google_container_v1beta1_cluster_service_pb.ListOperationsResponse)) {
    throw new Error('Expected argument of type google.container.v1beta1.ListOperationsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_container_v1beta1_ListOperationsResponse(buffer_arg) {
  return google_container_v1beta1_cluster_service_pb.ListOperationsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_container_v1beta1_ListUsableSubnetworksRequest(arg) {
  if (!(arg instanceof google_container_v1beta1_cluster_service_pb.ListUsableSubnetworksRequest)) {
    throw new Error('Expected argument of type google.container.v1beta1.ListUsableSubnetworksRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_container_v1beta1_ListUsableSubnetworksRequest(buffer_arg) {
  return google_container_v1beta1_cluster_service_pb.ListUsableSubnetworksRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_container_v1beta1_ListUsableSubnetworksResponse(arg) {
  if (!(arg instanceof google_container_v1beta1_cluster_service_pb.ListUsableSubnetworksResponse)) {
    throw new Error('Expected argument of type google.container.v1beta1.ListUsableSubnetworksResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_container_v1beta1_ListUsableSubnetworksResponse(buffer_arg) {
  return google_container_v1beta1_cluster_service_pb.ListUsableSubnetworksResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_container_v1beta1_NodePool(arg) {
  if (!(arg instanceof google_container_v1beta1_cluster_service_pb.NodePool)) {
    throw new Error('Expected argument of type google.container.v1beta1.NodePool');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_container_v1beta1_NodePool(buffer_arg) {
  return google_container_v1beta1_cluster_service_pb.NodePool.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_container_v1beta1_Operation(arg) {
  if (!(arg instanceof google_container_v1beta1_cluster_service_pb.Operation)) {
    throw new Error('Expected argument of type google.container.v1beta1.Operation');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_container_v1beta1_Operation(buffer_arg) {
  return google_container_v1beta1_cluster_service_pb.Operation.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_container_v1beta1_RollbackNodePoolUpgradeRequest(arg) {
  if (!(arg instanceof google_container_v1beta1_cluster_service_pb.RollbackNodePoolUpgradeRequest)) {
    throw new Error('Expected argument of type google.container.v1beta1.RollbackNodePoolUpgradeRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_container_v1beta1_RollbackNodePoolUpgradeRequest(buffer_arg) {
  return google_container_v1beta1_cluster_service_pb.RollbackNodePoolUpgradeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_container_v1beta1_ServerConfig(arg) {
  if (!(arg instanceof google_container_v1beta1_cluster_service_pb.ServerConfig)) {
    throw new Error('Expected argument of type google.container.v1beta1.ServerConfig');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_container_v1beta1_ServerConfig(buffer_arg) {
  return google_container_v1beta1_cluster_service_pb.ServerConfig.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_container_v1beta1_SetAddonsConfigRequest(arg) {
  if (!(arg instanceof google_container_v1beta1_cluster_service_pb.SetAddonsConfigRequest)) {
    throw new Error('Expected argument of type google.container.v1beta1.SetAddonsConfigRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_container_v1beta1_SetAddonsConfigRequest(buffer_arg) {
  return google_container_v1beta1_cluster_service_pb.SetAddonsConfigRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_container_v1beta1_SetLabelsRequest(arg) {
  if (!(arg instanceof google_container_v1beta1_cluster_service_pb.SetLabelsRequest)) {
    throw new Error('Expected argument of type google.container.v1beta1.SetLabelsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_container_v1beta1_SetLabelsRequest(buffer_arg) {
  return google_container_v1beta1_cluster_service_pb.SetLabelsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_container_v1beta1_SetLegacyAbacRequest(arg) {
  if (!(arg instanceof google_container_v1beta1_cluster_service_pb.SetLegacyAbacRequest)) {
    throw new Error('Expected argument of type google.container.v1beta1.SetLegacyAbacRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_container_v1beta1_SetLegacyAbacRequest(buffer_arg) {
  return google_container_v1beta1_cluster_service_pb.SetLegacyAbacRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_container_v1beta1_SetLocationsRequest(arg) {
  if (!(arg instanceof google_container_v1beta1_cluster_service_pb.SetLocationsRequest)) {
    throw new Error('Expected argument of type google.container.v1beta1.SetLocationsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_container_v1beta1_SetLocationsRequest(buffer_arg) {
  return google_container_v1beta1_cluster_service_pb.SetLocationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_container_v1beta1_SetLoggingServiceRequest(arg) {
  if (!(arg instanceof google_container_v1beta1_cluster_service_pb.SetLoggingServiceRequest)) {
    throw new Error('Expected argument of type google.container.v1beta1.SetLoggingServiceRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_container_v1beta1_SetLoggingServiceRequest(buffer_arg) {
  return google_container_v1beta1_cluster_service_pb.SetLoggingServiceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_container_v1beta1_SetMaintenancePolicyRequest(arg) {
  if (!(arg instanceof google_container_v1beta1_cluster_service_pb.SetMaintenancePolicyRequest)) {
    throw new Error('Expected argument of type google.container.v1beta1.SetMaintenancePolicyRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_container_v1beta1_SetMaintenancePolicyRequest(buffer_arg) {
  return google_container_v1beta1_cluster_service_pb.SetMaintenancePolicyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_container_v1beta1_SetMasterAuthRequest(arg) {
  if (!(arg instanceof google_container_v1beta1_cluster_service_pb.SetMasterAuthRequest)) {
    throw new Error('Expected argument of type google.container.v1beta1.SetMasterAuthRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_container_v1beta1_SetMasterAuthRequest(buffer_arg) {
  return google_container_v1beta1_cluster_service_pb.SetMasterAuthRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_container_v1beta1_SetMonitoringServiceRequest(arg) {
  if (!(arg instanceof google_container_v1beta1_cluster_service_pb.SetMonitoringServiceRequest)) {
    throw new Error('Expected argument of type google.container.v1beta1.SetMonitoringServiceRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_container_v1beta1_SetMonitoringServiceRequest(buffer_arg) {
  return google_container_v1beta1_cluster_service_pb.SetMonitoringServiceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_container_v1beta1_SetNetworkPolicyRequest(arg) {
  if (!(arg instanceof google_container_v1beta1_cluster_service_pb.SetNetworkPolicyRequest)) {
    throw new Error('Expected argument of type google.container.v1beta1.SetNetworkPolicyRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_container_v1beta1_SetNetworkPolicyRequest(buffer_arg) {
  return google_container_v1beta1_cluster_service_pb.SetNetworkPolicyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_container_v1beta1_SetNodePoolAutoscalingRequest(arg) {
  if (!(arg instanceof google_container_v1beta1_cluster_service_pb.SetNodePoolAutoscalingRequest)) {
    throw new Error('Expected argument of type google.container.v1beta1.SetNodePoolAutoscalingRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_container_v1beta1_SetNodePoolAutoscalingRequest(buffer_arg) {
  return google_container_v1beta1_cluster_service_pb.SetNodePoolAutoscalingRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_container_v1beta1_SetNodePoolManagementRequest(arg) {
  if (!(arg instanceof google_container_v1beta1_cluster_service_pb.SetNodePoolManagementRequest)) {
    throw new Error('Expected argument of type google.container.v1beta1.SetNodePoolManagementRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_container_v1beta1_SetNodePoolManagementRequest(buffer_arg) {
  return google_container_v1beta1_cluster_service_pb.SetNodePoolManagementRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_container_v1beta1_SetNodePoolSizeRequest(arg) {
  if (!(arg instanceof google_container_v1beta1_cluster_service_pb.SetNodePoolSizeRequest)) {
    throw new Error('Expected argument of type google.container.v1beta1.SetNodePoolSizeRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_container_v1beta1_SetNodePoolSizeRequest(buffer_arg) {
  return google_container_v1beta1_cluster_service_pb.SetNodePoolSizeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_container_v1beta1_StartIPRotationRequest(arg) {
  if (!(arg instanceof google_container_v1beta1_cluster_service_pb.StartIPRotationRequest)) {
    throw new Error('Expected argument of type google.container.v1beta1.StartIPRotationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_container_v1beta1_StartIPRotationRequest(buffer_arg) {
  return google_container_v1beta1_cluster_service_pb.StartIPRotationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_container_v1beta1_UpdateClusterRequest(arg) {
  if (!(arg instanceof google_container_v1beta1_cluster_service_pb.UpdateClusterRequest)) {
    throw new Error('Expected argument of type google.container.v1beta1.UpdateClusterRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_container_v1beta1_UpdateClusterRequest(buffer_arg) {
  return google_container_v1beta1_cluster_service_pb.UpdateClusterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_container_v1beta1_UpdateMasterRequest(arg) {
  if (!(arg instanceof google_container_v1beta1_cluster_service_pb.UpdateMasterRequest)) {
    throw new Error('Expected argument of type google.container.v1beta1.UpdateMasterRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_container_v1beta1_UpdateMasterRequest(buffer_arg) {
  return google_container_v1beta1_cluster_service_pb.UpdateMasterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_container_v1beta1_UpdateNodePoolRequest(arg) {
  if (!(arg instanceof google_container_v1beta1_cluster_service_pb.UpdateNodePoolRequest)) {
    throw new Error('Expected argument of type google.container.v1beta1.UpdateNodePoolRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_container_v1beta1_UpdateNodePoolRequest(buffer_arg) {
  return google_container_v1beta1_cluster_service_pb.UpdateNodePoolRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}


// Google Kubernetes Engine Cluster Manager v1beta1
var ClusterManagerService = exports.ClusterManagerService = {
  // Lists all clusters owned by a project in either the specified zone or all
  // zones.
  listClusters: {
    path: '/google.container.v1beta1.ClusterManager/ListClusters',
    requestStream: false,
    responseStream: false,
    requestType: google_container_v1beta1_cluster_service_pb.ListClustersRequest,
    responseType: google_container_v1beta1_cluster_service_pb.ListClustersResponse,
    requestSerialize: serialize_google_container_v1beta1_ListClustersRequest,
    requestDeserialize: deserialize_google_container_v1beta1_ListClustersRequest,
    responseSerialize: serialize_google_container_v1beta1_ListClustersResponse,
    responseDeserialize: deserialize_google_container_v1beta1_ListClustersResponse,
  },
  // Gets the details for a specific cluster.
  getCluster: {
    path: '/google.container.v1beta1.ClusterManager/GetCluster',
    requestStream: false,
    responseStream: false,
    requestType: google_container_v1beta1_cluster_service_pb.GetClusterRequest,
    responseType: google_container_v1beta1_cluster_service_pb.Cluster,
    requestSerialize: serialize_google_container_v1beta1_GetClusterRequest,
    requestDeserialize: deserialize_google_container_v1beta1_GetClusterRequest,
    responseSerialize: serialize_google_container_v1beta1_Cluster,
    responseDeserialize: deserialize_google_container_v1beta1_Cluster,
  },
  // Creates a cluster, consisting of the specified number and type of Google
  // Compute Engine instances.
  //
  // By default, the cluster is created in the project's
  // [default network](/compute/docs/networks-and-firewalls#networks).
  //
  // One firewall is added for the cluster. After cluster creation,
  // the cluster creates routes for each node to allow the containers
  // on that node to communicate with all other instances in the
  // cluster.
  //
  // Finally, an entry is added to the project's global metadata indicating
  // which CIDR range is being used by the cluster.
  createCluster: {
    path: '/google.container.v1beta1.ClusterManager/CreateCluster',
    requestStream: false,
    responseStream: false,
    requestType: google_container_v1beta1_cluster_service_pb.CreateClusterRequest,
    responseType: google_container_v1beta1_cluster_service_pb.Operation,
    requestSerialize: serialize_google_container_v1beta1_CreateClusterRequest,
    requestDeserialize: deserialize_google_container_v1beta1_CreateClusterRequest,
    responseSerialize: serialize_google_container_v1beta1_Operation,
    responseDeserialize: deserialize_google_container_v1beta1_Operation,
  },
  // Updates the settings for a specific cluster.
  updateCluster: {
    path: '/google.container.v1beta1.ClusterManager/UpdateCluster',
    requestStream: false,
    responseStream: false,
    requestType: google_container_v1beta1_cluster_service_pb.UpdateClusterRequest,
    responseType: google_container_v1beta1_cluster_service_pb.Operation,
    requestSerialize: serialize_google_container_v1beta1_UpdateClusterRequest,
    requestDeserialize: deserialize_google_container_v1beta1_UpdateClusterRequest,
    responseSerialize: serialize_google_container_v1beta1_Operation,
    responseDeserialize: deserialize_google_container_v1beta1_Operation,
  },
  // Updates the version and/or image type of a specific node pool.
  updateNodePool: {
    path: '/google.container.v1beta1.ClusterManager/UpdateNodePool',
    requestStream: false,
    responseStream: false,
    requestType: google_container_v1beta1_cluster_service_pb.UpdateNodePoolRequest,
    responseType: google_container_v1beta1_cluster_service_pb.Operation,
    requestSerialize: serialize_google_container_v1beta1_UpdateNodePoolRequest,
    requestDeserialize: deserialize_google_container_v1beta1_UpdateNodePoolRequest,
    responseSerialize: serialize_google_container_v1beta1_Operation,
    responseDeserialize: deserialize_google_container_v1beta1_Operation,
  },
  // Sets the autoscaling settings of a specific node pool.
  setNodePoolAutoscaling: {
    path: '/google.container.v1beta1.ClusterManager/SetNodePoolAutoscaling',
    requestStream: false,
    responseStream: false,
    requestType: google_container_v1beta1_cluster_service_pb.SetNodePoolAutoscalingRequest,
    responseType: google_container_v1beta1_cluster_service_pb.Operation,
    requestSerialize: serialize_google_container_v1beta1_SetNodePoolAutoscalingRequest,
    requestDeserialize: deserialize_google_container_v1beta1_SetNodePoolAutoscalingRequest,
    responseSerialize: serialize_google_container_v1beta1_Operation,
    responseDeserialize: deserialize_google_container_v1beta1_Operation,
  },
  // Sets the logging service for a specific cluster.
  setLoggingService: {
    path: '/google.container.v1beta1.ClusterManager/SetLoggingService',
    requestStream: false,
    responseStream: false,
    requestType: google_container_v1beta1_cluster_service_pb.SetLoggingServiceRequest,
    responseType: google_container_v1beta1_cluster_service_pb.Operation,
    requestSerialize: serialize_google_container_v1beta1_SetLoggingServiceRequest,
    requestDeserialize: deserialize_google_container_v1beta1_SetLoggingServiceRequest,
    responseSerialize: serialize_google_container_v1beta1_Operation,
    responseDeserialize: deserialize_google_container_v1beta1_Operation,
  },
  // Sets the monitoring service for a specific cluster.
  setMonitoringService: {
    path: '/google.container.v1beta1.ClusterManager/SetMonitoringService',
    requestStream: false,
    responseStream: false,
    requestType: google_container_v1beta1_cluster_service_pb.SetMonitoringServiceRequest,
    responseType: google_container_v1beta1_cluster_service_pb.Operation,
    requestSerialize: serialize_google_container_v1beta1_SetMonitoringServiceRequest,
    requestDeserialize: deserialize_google_container_v1beta1_SetMonitoringServiceRequest,
    responseSerialize: serialize_google_container_v1beta1_Operation,
    responseDeserialize: deserialize_google_container_v1beta1_Operation,
  },
  // Sets the addons for a specific cluster.
  setAddonsConfig: {
    path: '/google.container.v1beta1.ClusterManager/SetAddonsConfig',
    requestStream: false,
    responseStream: false,
    requestType: google_container_v1beta1_cluster_service_pb.SetAddonsConfigRequest,
    responseType: google_container_v1beta1_cluster_service_pb.Operation,
    requestSerialize: serialize_google_container_v1beta1_SetAddonsConfigRequest,
    requestDeserialize: deserialize_google_container_v1beta1_SetAddonsConfigRequest,
    responseSerialize: serialize_google_container_v1beta1_Operation,
    responseDeserialize: deserialize_google_container_v1beta1_Operation,
  },
  // Sets the locations for a specific cluster.
  setLocations: {
    path: '/google.container.v1beta1.ClusterManager/SetLocations',
    requestStream: false,
    responseStream: false,
    requestType: google_container_v1beta1_cluster_service_pb.SetLocationsRequest,
    responseType: google_container_v1beta1_cluster_service_pb.Operation,
    requestSerialize: serialize_google_container_v1beta1_SetLocationsRequest,
    requestDeserialize: deserialize_google_container_v1beta1_SetLocationsRequest,
    responseSerialize: serialize_google_container_v1beta1_Operation,
    responseDeserialize: deserialize_google_container_v1beta1_Operation,
  },
  // Updates the master for a specific cluster.
  updateMaster: {
    path: '/google.container.v1beta1.ClusterManager/UpdateMaster',
    requestStream: false,
    responseStream: false,
    requestType: google_container_v1beta1_cluster_service_pb.UpdateMasterRequest,
    responseType: google_container_v1beta1_cluster_service_pb.Operation,
    requestSerialize: serialize_google_container_v1beta1_UpdateMasterRequest,
    requestDeserialize: deserialize_google_container_v1beta1_UpdateMasterRequest,
    responseSerialize: serialize_google_container_v1beta1_Operation,
    responseDeserialize: deserialize_google_container_v1beta1_Operation,
  },
  // Used to set master auth materials. Currently supports :-
  // Changing the admin password for a specific cluster.
  // This can be either via password generation or explicitly set.
  // Modify basic_auth.csv and reset the K8S API server.
  setMasterAuth: {
    path: '/google.container.v1beta1.ClusterManager/SetMasterAuth',
    requestStream: false,
    responseStream: false,
    requestType: google_container_v1beta1_cluster_service_pb.SetMasterAuthRequest,
    responseType: google_container_v1beta1_cluster_service_pb.Operation,
    requestSerialize: serialize_google_container_v1beta1_SetMasterAuthRequest,
    requestDeserialize: deserialize_google_container_v1beta1_SetMasterAuthRequest,
    responseSerialize: serialize_google_container_v1beta1_Operation,
    responseDeserialize: deserialize_google_container_v1beta1_Operation,
  },
  // Deletes the cluster, including the Kubernetes endpoint and all worker
  // nodes.
  //
  // Firewalls and routes that were configured during cluster creation
  // are also deleted.
  //
  // Other Google Compute Engine resources that might be in use by the cluster
  // (e.g. load balancer resources) will not be deleted if they weren't present
  // at the initial create time.
  deleteCluster: {
    path: '/google.container.v1beta1.ClusterManager/DeleteCluster',
    requestStream: false,
    responseStream: false,
    requestType: google_container_v1beta1_cluster_service_pb.DeleteClusterRequest,
    responseType: google_container_v1beta1_cluster_service_pb.Operation,
    requestSerialize: serialize_google_container_v1beta1_DeleteClusterRequest,
    requestDeserialize: deserialize_google_container_v1beta1_DeleteClusterRequest,
    responseSerialize: serialize_google_container_v1beta1_Operation,
    responseDeserialize: deserialize_google_container_v1beta1_Operation,
  },
  // Lists all operations in a project in a specific zone or all zones.
  listOperations: {
    path: '/google.container.v1beta1.ClusterManager/ListOperations',
    requestStream: false,
    responseStream: false,
    requestType: google_container_v1beta1_cluster_service_pb.ListOperationsRequest,
    responseType: google_container_v1beta1_cluster_service_pb.ListOperationsResponse,
    requestSerialize: serialize_google_container_v1beta1_ListOperationsRequest,
    requestDeserialize: deserialize_google_container_v1beta1_ListOperationsRequest,
    responseSerialize: serialize_google_container_v1beta1_ListOperationsResponse,
    responseDeserialize: deserialize_google_container_v1beta1_ListOperationsResponse,
  },
  // Gets the specified operation.
  getOperation: {
    path: '/google.container.v1beta1.ClusterManager/GetOperation',
    requestStream: false,
    responseStream: false,
    requestType: google_container_v1beta1_cluster_service_pb.GetOperationRequest,
    responseType: google_container_v1beta1_cluster_service_pb.Operation,
    requestSerialize: serialize_google_container_v1beta1_GetOperationRequest,
    requestDeserialize: deserialize_google_container_v1beta1_GetOperationRequest,
    responseSerialize: serialize_google_container_v1beta1_Operation,
    responseDeserialize: deserialize_google_container_v1beta1_Operation,
  },
  // Cancels the specified operation.
  cancelOperation: {
    path: '/google.container.v1beta1.ClusterManager/CancelOperation',
    requestStream: false,
    responseStream: false,
    requestType: google_container_v1beta1_cluster_service_pb.CancelOperationRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_container_v1beta1_CancelOperationRequest,
    requestDeserialize: deserialize_google_container_v1beta1_CancelOperationRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Returns configuration info about the Kubernetes Engine service.
  getServerConfig: {
    path: '/google.container.v1beta1.ClusterManager/GetServerConfig',
    requestStream: false,
    responseStream: false,
    requestType: google_container_v1beta1_cluster_service_pb.GetServerConfigRequest,
    responseType: google_container_v1beta1_cluster_service_pb.ServerConfig,
    requestSerialize: serialize_google_container_v1beta1_GetServerConfigRequest,
    requestDeserialize: deserialize_google_container_v1beta1_GetServerConfigRequest,
    responseSerialize: serialize_google_container_v1beta1_ServerConfig,
    responseDeserialize: deserialize_google_container_v1beta1_ServerConfig,
  },
  // Lists the node pools for a cluster.
  listNodePools: {
    path: '/google.container.v1beta1.ClusterManager/ListNodePools',
    requestStream: false,
    responseStream: false,
    requestType: google_container_v1beta1_cluster_service_pb.ListNodePoolsRequest,
    responseType: google_container_v1beta1_cluster_service_pb.ListNodePoolsResponse,
    requestSerialize: serialize_google_container_v1beta1_ListNodePoolsRequest,
    requestDeserialize: deserialize_google_container_v1beta1_ListNodePoolsRequest,
    responseSerialize: serialize_google_container_v1beta1_ListNodePoolsResponse,
    responseDeserialize: deserialize_google_container_v1beta1_ListNodePoolsResponse,
  },
  // Retrieves the node pool requested.
  getNodePool: {
    path: '/google.container.v1beta1.ClusterManager/GetNodePool',
    requestStream: false,
    responseStream: false,
    requestType: google_container_v1beta1_cluster_service_pb.GetNodePoolRequest,
    responseType: google_container_v1beta1_cluster_service_pb.NodePool,
    requestSerialize: serialize_google_container_v1beta1_GetNodePoolRequest,
    requestDeserialize: deserialize_google_container_v1beta1_GetNodePoolRequest,
    responseSerialize: serialize_google_container_v1beta1_NodePool,
    responseDeserialize: deserialize_google_container_v1beta1_NodePool,
  },
  // Creates a node pool for a cluster.
  createNodePool: {
    path: '/google.container.v1beta1.ClusterManager/CreateNodePool',
    requestStream: false,
    responseStream: false,
    requestType: google_container_v1beta1_cluster_service_pb.CreateNodePoolRequest,
    responseType: google_container_v1beta1_cluster_service_pb.Operation,
    requestSerialize: serialize_google_container_v1beta1_CreateNodePoolRequest,
    requestDeserialize: deserialize_google_container_v1beta1_CreateNodePoolRequest,
    responseSerialize: serialize_google_container_v1beta1_Operation,
    responseDeserialize: deserialize_google_container_v1beta1_Operation,
  },
  // Deletes a node pool from a cluster.
  deleteNodePool: {
    path: '/google.container.v1beta1.ClusterManager/DeleteNodePool',
    requestStream: false,
    responseStream: false,
    requestType: google_container_v1beta1_cluster_service_pb.DeleteNodePoolRequest,
    responseType: google_container_v1beta1_cluster_service_pb.Operation,
    requestSerialize: serialize_google_container_v1beta1_DeleteNodePoolRequest,
    requestDeserialize: deserialize_google_container_v1beta1_DeleteNodePoolRequest,
    responseSerialize: serialize_google_container_v1beta1_Operation,
    responseDeserialize: deserialize_google_container_v1beta1_Operation,
  },
  // Roll back the previously Aborted or Failed NodePool upgrade.
  // This will be an no-op if the last upgrade successfully completed.
  rollbackNodePoolUpgrade: {
    path: '/google.container.v1beta1.ClusterManager/RollbackNodePoolUpgrade',
    requestStream: false,
    responseStream: false,
    requestType: google_container_v1beta1_cluster_service_pb.RollbackNodePoolUpgradeRequest,
    responseType: google_container_v1beta1_cluster_service_pb.Operation,
    requestSerialize: serialize_google_container_v1beta1_RollbackNodePoolUpgradeRequest,
    requestDeserialize: deserialize_google_container_v1beta1_RollbackNodePoolUpgradeRequest,
    responseSerialize: serialize_google_container_v1beta1_Operation,
    responseDeserialize: deserialize_google_container_v1beta1_Operation,
  },
  // Sets the NodeManagement options for a node pool.
  setNodePoolManagement: {
    path: '/google.container.v1beta1.ClusterManager/SetNodePoolManagement',
    requestStream: false,
    responseStream: false,
    requestType: google_container_v1beta1_cluster_service_pb.SetNodePoolManagementRequest,
    responseType: google_container_v1beta1_cluster_service_pb.Operation,
    requestSerialize: serialize_google_container_v1beta1_SetNodePoolManagementRequest,
    requestDeserialize: deserialize_google_container_v1beta1_SetNodePoolManagementRequest,
    responseSerialize: serialize_google_container_v1beta1_Operation,
    responseDeserialize: deserialize_google_container_v1beta1_Operation,
  },
  // Sets labels on a cluster.
  setLabels: {
    path: '/google.container.v1beta1.ClusterManager/SetLabels',
    requestStream: false,
    responseStream: false,
    requestType: google_container_v1beta1_cluster_service_pb.SetLabelsRequest,
    responseType: google_container_v1beta1_cluster_service_pb.Operation,
    requestSerialize: serialize_google_container_v1beta1_SetLabelsRequest,
    requestDeserialize: deserialize_google_container_v1beta1_SetLabelsRequest,
    responseSerialize: serialize_google_container_v1beta1_Operation,
    responseDeserialize: deserialize_google_container_v1beta1_Operation,
  },
  // Enables or disables the ABAC authorization mechanism on a cluster.
  setLegacyAbac: {
    path: '/google.container.v1beta1.ClusterManager/SetLegacyAbac',
    requestStream: false,
    responseStream: false,
    requestType: google_container_v1beta1_cluster_service_pb.SetLegacyAbacRequest,
    responseType: google_container_v1beta1_cluster_service_pb.Operation,
    requestSerialize: serialize_google_container_v1beta1_SetLegacyAbacRequest,
    requestDeserialize: deserialize_google_container_v1beta1_SetLegacyAbacRequest,
    responseSerialize: serialize_google_container_v1beta1_Operation,
    responseDeserialize: deserialize_google_container_v1beta1_Operation,
  },
  // Start master IP rotation.
  startIPRotation: {
    path: '/google.container.v1beta1.ClusterManager/StartIPRotation',
    requestStream: false,
    responseStream: false,
    requestType: google_container_v1beta1_cluster_service_pb.StartIPRotationRequest,
    responseType: google_container_v1beta1_cluster_service_pb.Operation,
    requestSerialize: serialize_google_container_v1beta1_StartIPRotationRequest,
    requestDeserialize: deserialize_google_container_v1beta1_StartIPRotationRequest,
    responseSerialize: serialize_google_container_v1beta1_Operation,
    responseDeserialize: deserialize_google_container_v1beta1_Operation,
  },
  // Completes master IP rotation.
  completeIPRotation: {
    path: '/google.container.v1beta1.ClusterManager/CompleteIPRotation',
    requestStream: false,
    responseStream: false,
    requestType: google_container_v1beta1_cluster_service_pb.CompleteIPRotationRequest,
    responseType: google_container_v1beta1_cluster_service_pb.Operation,
    requestSerialize: serialize_google_container_v1beta1_CompleteIPRotationRequest,
    requestDeserialize: deserialize_google_container_v1beta1_CompleteIPRotationRequest,
    responseSerialize: serialize_google_container_v1beta1_Operation,
    responseDeserialize: deserialize_google_container_v1beta1_Operation,
  },
  // Sets the size for a specific node pool.
  setNodePoolSize: {
    path: '/google.container.v1beta1.ClusterManager/SetNodePoolSize',
    requestStream: false,
    responseStream: false,
    requestType: google_container_v1beta1_cluster_service_pb.SetNodePoolSizeRequest,
    responseType: google_container_v1beta1_cluster_service_pb.Operation,
    requestSerialize: serialize_google_container_v1beta1_SetNodePoolSizeRequest,
    requestDeserialize: deserialize_google_container_v1beta1_SetNodePoolSizeRequest,
    responseSerialize: serialize_google_container_v1beta1_Operation,
    responseDeserialize: deserialize_google_container_v1beta1_Operation,
  },
  // Enables/Disables Network Policy for a cluster.
  setNetworkPolicy: {
    path: '/google.container.v1beta1.ClusterManager/SetNetworkPolicy',
    requestStream: false,
    responseStream: false,
    requestType: google_container_v1beta1_cluster_service_pb.SetNetworkPolicyRequest,
    responseType: google_container_v1beta1_cluster_service_pb.Operation,
    requestSerialize: serialize_google_container_v1beta1_SetNetworkPolicyRequest,
    requestDeserialize: deserialize_google_container_v1beta1_SetNetworkPolicyRequest,
    responseSerialize: serialize_google_container_v1beta1_Operation,
    responseDeserialize: deserialize_google_container_v1beta1_Operation,
  },
  // Sets the maintenance policy for a cluster.
  setMaintenancePolicy: {
    path: '/google.container.v1beta1.ClusterManager/SetMaintenancePolicy',
    requestStream: false,
    responseStream: false,
    requestType: google_container_v1beta1_cluster_service_pb.SetMaintenancePolicyRequest,
    responseType: google_container_v1beta1_cluster_service_pb.Operation,
    requestSerialize: serialize_google_container_v1beta1_SetMaintenancePolicyRequest,
    requestDeserialize: deserialize_google_container_v1beta1_SetMaintenancePolicyRequest,
    responseSerialize: serialize_google_container_v1beta1_Operation,
    responseDeserialize: deserialize_google_container_v1beta1_Operation,
  },
  // Lists subnetworks that are usable for creating clusters in a project.
  listUsableSubnetworks: {
    path: '/google.container.v1beta1.ClusterManager/ListUsableSubnetworks',
    requestStream: false,
    responseStream: false,
    requestType: google_container_v1beta1_cluster_service_pb.ListUsableSubnetworksRequest,
    responseType: google_container_v1beta1_cluster_service_pb.ListUsableSubnetworksResponse,
    requestSerialize: serialize_google_container_v1beta1_ListUsableSubnetworksRequest,
    requestDeserialize: deserialize_google_container_v1beta1_ListUsableSubnetworksRequest,
    responseSerialize: serialize_google_container_v1beta1_ListUsableSubnetworksResponse,
    responseDeserialize: deserialize_google_container_v1beta1_ListUsableSubnetworksResponse,
  },
  // Used to fetch locations that offer GKE.
  listLocations: {
    path: '/google.container.v1beta1.ClusterManager/ListLocations',
    requestStream: false,
    responseStream: false,
    requestType: google_container_v1beta1_cluster_service_pb.ListLocationsRequest,
    responseType: google_container_v1beta1_cluster_service_pb.ListLocationsResponse,
    requestSerialize: serialize_google_container_v1beta1_ListLocationsRequest,
    requestDeserialize: deserialize_google_container_v1beta1_ListLocationsRequest,
    responseSerialize: serialize_google_container_v1beta1_ListLocationsResponse,
    responseDeserialize: deserialize_google_container_v1beta1_ListLocationsResponse,
  },
};

exports.ClusterManagerClient = grpc.makeGenericClientConstructor(ClusterManagerService);
