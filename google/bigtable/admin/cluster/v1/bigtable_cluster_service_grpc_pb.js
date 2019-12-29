// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright 2017 Google Inc.
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
'use strict';
var grpc = require('grpc');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var google_bigtable_admin_cluster_v1_bigtable_cluster_data_pb = require('../../../../../google/bigtable/admin/cluster/v1/bigtable_cluster_data_pb.js');
var google_bigtable_admin_cluster_v1_bigtable_cluster_service_messages_pb = require('../../../../../google/bigtable/admin/cluster/v1/bigtable_cluster_service_messages_pb.js');
var google_longrunning_operations_pb = require('../../../../../google/longrunning/operations_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_google_bigtable_admin_cluster_v1_Cluster(arg) {
  if (!(arg instanceof google_bigtable_admin_cluster_v1_bigtable_cluster_data_pb.Cluster)) {
    throw new Error('Expected argument of type google.bigtable.admin.cluster.v1.Cluster');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_bigtable_admin_cluster_v1_Cluster(buffer_arg) {
  return google_bigtable_admin_cluster_v1_bigtable_cluster_data_pb.Cluster.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_bigtable_admin_cluster_v1_CreateClusterRequest(arg) {
  if (!(arg instanceof google_bigtable_admin_cluster_v1_bigtable_cluster_service_messages_pb.CreateClusterRequest)) {
    throw new Error('Expected argument of type google.bigtable.admin.cluster.v1.CreateClusterRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_bigtable_admin_cluster_v1_CreateClusterRequest(buffer_arg) {
  return google_bigtable_admin_cluster_v1_bigtable_cluster_service_messages_pb.CreateClusterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_bigtable_admin_cluster_v1_DeleteClusterRequest(arg) {
  if (!(arg instanceof google_bigtable_admin_cluster_v1_bigtable_cluster_service_messages_pb.DeleteClusterRequest)) {
    throw new Error('Expected argument of type google.bigtable.admin.cluster.v1.DeleteClusterRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_bigtable_admin_cluster_v1_DeleteClusterRequest(buffer_arg) {
  return google_bigtable_admin_cluster_v1_bigtable_cluster_service_messages_pb.DeleteClusterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_bigtable_admin_cluster_v1_GetClusterRequest(arg) {
  if (!(arg instanceof google_bigtable_admin_cluster_v1_bigtable_cluster_service_messages_pb.GetClusterRequest)) {
    throw new Error('Expected argument of type google.bigtable.admin.cluster.v1.GetClusterRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_bigtable_admin_cluster_v1_GetClusterRequest(buffer_arg) {
  return google_bigtable_admin_cluster_v1_bigtable_cluster_service_messages_pb.GetClusterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_bigtable_admin_cluster_v1_ListClustersRequest(arg) {
  if (!(arg instanceof google_bigtable_admin_cluster_v1_bigtable_cluster_service_messages_pb.ListClustersRequest)) {
    throw new Error('Expected argument of type google.bigtable.admin.cluster.v1.ListClustersRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_bigtable_admin_cluster_v1_ListClustersRequest(buffer_arg) {
  return google_bigtable_admin_cluster_v1_bigtable_cluster_service_messages_pb.ListClustersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_bigtable_admin_cluster_v1_ListClustersResponse(arg) {
  if (!(arg instanceof google_bigtable_admin_cluster_v1_bigtable_cluster_service_messages_pb.ListClustersResponse)) {
    throw new Error('Expected argument of type google.bigtable.admin.cluster.v1.ListClustersResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_bigtable_admin_cluster_v1_ListClustersResponse(buffer_arg) {
  return google_bigtable_admin_cluster_v1_bigtable_cluster_service_messages_pb.ListClustersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_bigtable_admin_cluster_v1_ListZonesRequest(arg) {
  if (!(arg instanceof google_bigtable_admin_cluster_v1_bigtable_cluster_service_messages_pb.ListZonesRequest)) {
    throw new Error('Expected argument of type google.bigtable.admin.cluster.v1.ListZonesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_bigtable_admin_cluster_v1_ListZonesRequest(buffer_arg) {
  return google_bigtable_admin_cluster_v1_bigtable_cluster_service_messages_pb.ListZonesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_bigtable_admin_cluster_v1_ListZonesResponse(arg) {
  if (!(arg instanceof google_bigtable_admin_cluster_v1_bigtable_cluster_service_messages_pb.ListZonesResponse)) {
    throw new Error('Expected argument of type google.bigtable.admin.cluster.v1.ListZonesResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_bigtable_admin_cluster_v1_ListZonesResponse(buffer_arg) {
  return google_bigtable_admin_cluster_v1_bigtable_cluster_service_messages_pb.ListZonesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_bigtable_admin_cluster_v1_UndeleteClusterRequest(arg) {
  if (!(arg instanceof google_bigtable_admin_cluster_v1_bigtable_cluster_service_messages_pb.UndeleteClusterRequest)) {
    throw new Error('Expected argument of type google.bigtable.admin.cluster.v1.UndeleteClusterRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_bigtable_admin_cluster_v1_UndeleteClusterRequest(buffer_arg) {
  return google_bigtable_admin_cluster_v1_bigtable_cluster_service_messages_pb.UndeleteClusterRequest.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}


// Service for managing zonal Cloud Bigtable resources.
var BigtableClusterServiceService = exports.BigtableClusterServiceService = {
  // Lists the supported zones for the given project.
  listZones: {
    path: '/google.bigtable.admin.cluster.v1.BigtableClusterService/ListZones',
    requestStream: false,
    responseStream: false,
    requestType: google_bigtable_admin_cluster_v1_bigtable_cluster_service_messages_pb.ListZonesRequest,
    responseType: google_bigtable_admin_cluster_v1_bigtable_cluster_service_messages_pb.ListZonesResponse,
    requestSerialize: serialize_google_bigtable_admin_cluster_v1_ListZonesRequest,
    requestDeserialize: deserialize_google_bigtable_admin_cluster_v1_ListZonesRequest,
    responseSerialize: serialize_google_bigtable_admin_cluster_v1_ListZonesResponse,
    responseDeserialize: deserialize_google_bigtable_admin_cluster_v1_ListZonesResponse,
  },
  // Gets information about a particular cluster.
  getCluster: {
    path: '/google.bigtable.admin.cluster.v1.BigtableClusterService/GetCluster',
    requestStream: false,
    responseStream: false,
    requestType: google_bigtable_admin_cluster_v1_bigtable_cluster_service_messages_pb.GetClusterRequest,
    responseType: google_bigtable_admin_cluster_v1_bigtable_cluster_data_pb.Cluster,
    requestSerialize: serialize_google_bigtable_admin_cluster_v1_GetClusterRequest,
    requestDeserialize: deserialize_google_bigtable_admin_cluster_v1_GetClusterRequest,
    responseSerialize: serialize_google_bigtable_admin_cluster_v1_Cluster,
    responseDeserialize: deserialize_google_bigtable_admin_cluster_v1_Cluster,
  },
  // Lists all clusters in the given project, along with any zones for which
  // cluster information could not be retrieved.
  listClusters: {
    path: '/google.bigtable.admin.cluster.v1.BigtableClusterService/ListClusters',
    requestStream: false,
    responseStream: false,
    requestType: google_bigtable_admin_cluster_v1_bigtable_cluster_service_messages_pb.ListClustersRequest,
    responseType: google_bigtable_admin_cluster_v1_bigtable_cluster_service_messages_pb.ListClustersResponse,
    requestSerialize: serialize_google_bigtable_admin_cluster_v1_ListClustersRequest,
    requestDeserialize: deserialize_google_bigtable_admin_cluster_v1_ListClustersRequest,
    responseSerialize: serialize_google_bigtable_admin_cluster_v1_ListClustersResponse,
    responseDeserialize: deserialize_google_bigtable_admin_cluster_v1_ListClustersResponse,
  },
  // Creates a cluster and begins preparing it to begin serving. The returned
  // cluster embeds as its "current_operation" a long-running operation which
  // can be used to track the progress of turning up the new cluster.
  // Immediately upon completion of this request:
  //  * The cluster will be readable via the API, with all requested attributes
  //    but no allocated resources.
  // Until completion of the embedded operation:
  //  * Cancelling the operation will render the cluster immediately unreadable
  //    via the API.
  //  * All other attempts to modify or delete the cluster will be rejected.
  // Upon completion of the embedded operation:
  //  * Billing for all successfully-allocated resources will begin (some types
  //    may have lower than the requested levels).
  //  * New tables can be created in the cluster.
  //  * The cluster's allocated resource levels will be readable via the API.
  // The embedded operation's "metadata" field type is
  // [CreateClusterMetadata][google.bigtable.admin.cluster.v1.CreateClusterMetadata]
  // The embedded operation's "response" field type is
  // [Cluster][google.bigtable.admin.cluster.v1.Cluster], if successful.
  createCluster: {
    path: '/google.bigtable.admin.cluster.v1.BigtableClusterService/CreateCluster',
    requestStream: false,
    responseStream: false,
    requestType: google_bigtable_admin_cluster_v1_bigtable_cluster_service_messages_pb.CreateClusterRequest,
    responseType: google_bigtable_admin_cluster_v1_bigtable_cluster_data_pb.Cluster,
    requestSerialize: serialize_google_bigtable_admin_cluster_v1_CreateClusterRequest,
    requestDeserialize: deserialize_google_bigtable_admin_cluster_v1_CreateClusterRequest,
    responseSerialize: serialize_google_bigtable_admin_cluster_v1_Cluster,
    responseDeserialize: deserialize_google_bigtable_admin_cluster_v1_Cluster,
  },
  // Updates a cluster, and begins allocating or releasing resources as
  // requested. The returned cluster embeds as its "current_operation" a
  // long-running operation which can be used to track the progress of updating
  // the cluster.
  // Immediately upon completion of this request:
  //  * For resource types where a decrease in the cluster's allocation has been
  //    requested, billing will be based on the newly-requested level.
  // Until completion of the embedded operation:
  //  * Cancelling the operation will set its metadata's "cancelled_at_time",
  //    and begin restoring resources to their pre-request values. The operation
  //    is guaranteed to succeed at undoing all resource changes, after which
  //    point it will terminate with a CANCELLED status.
  //  * All other attempts to modify or delete the cluster will be rejected.
  //  * Reading the cluster via the API will continue to give the pre-request
  //    resource levels.
  // Upon completion of the embedded operation:
  //  * Billing will begin for all successfully-allocated resources (some types
  //    may have lower than the requested levels).
  //  * All newly-reserved resources will be available for serving the cluster's
  //    tables.
  //  * The cluster's new resource levels will be readable via the API.
  // [UpdateClusterMetadata][google.bigtable.admin.cluster.v1.UpdateClusterMetadata]
  // The embedded operation's "response" field type is
  // [Cluster][google.bigtable.admin.cluster.v1.Cluster], if successful.
  updateCluster: {
    path: '/google.bigtable.admin.cluster.v1.BigtableClusterService/UpdateCluster',
    requestStream: false,
    responseStream: false,
    requestType: google_bigtable_admin_cluster_v1_bigtable_cluster_data_pb.Cluster,
    responseType: google_bigtable_admin_cluster_v1_bigtable_cluster_data_pb.Cluster,
    requestSerialize: serialize_google_bigtable_admin_cluster_v1_Cluster,
    requestDeserialize: deserialize_google_bigtable_admin_cluster_v1_Cluster,
    responseSerialize: serialize_google_bigtable_admin_cluster_v1_Cluster,
    responseDeserialize: deserialize_google_bigtable_admin_cluster_v1_Cluster,
  },
  // Marks a cluster and all of its tables for permanent deletion in 7 days.
  // Immediately upon completion of the request:
  //  * Billing will cease for all of the cluster's reserved resources.
  //  * The cluster's "delete_time" field will be set 7 days in the future.
  // Soon afterward:
  //  * All tables within the cluster will become unavailable.
  // Prior to the cluster's "delete_time":
  //  * The cluster can be recovered with a call to UndeleteCluster.
  //  * All other attempts to modify or delete the cluster will be rejected.
  // At the cluster's "delete_time":
  //  * The cluster and *all of its tables* will immediately and irrevocably
  //    disappear from the API, and their data will be permanently deleted.
  deleteCluster: {
    path: '/google.bigtable.admin.cluster.v1.BigtableClusterService/DeleteCluster',
    requestStream: false,
    responseStream: false,
    requestType: google_bigtable_admin_cluster_v1_bigtable_cluster_service_messages_pb.DeleteClusterRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_bigtable_admin_cluster_v1_DeleteClusterRequest,
    requestDeserialize: deserialize_google_bigtable_admin_cluster_v1_DeleteClusterRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Cancels the scheduled deletion of an cluster and begins preparing it to
  // resume serving. The returned operation will also be embedded as the
  // cluster's "current_operation".
  // Immediately upon completion of this request:
  //  * The cluster's "delete_time" field will be unset, protecting it from
  //    automatic deletion.
  // Until completion of the returned operation:
  //  * The operation cannot be cancelled.
  // Upon completion of the returned operation:
  //  * Billing for the cluster's resources will resume.
  //  * All tables within the cluster will be available.
  // [UndeleteClusterMetadata][google.bigtable.admin.cluster.v1.UndeleteClusterMetadata]
  // The embedded operation's "response" field type is
  // [Cluster][google.bigtable.admin.cluster.v1.Cluster], if successful.
  undeleteCluster: {
    path: '/google.bigtable.admin.cluster.v1.BigtableClusterService/UndeleteCluster',
    requestStream: false,
    responseStream: false,
    requestType: google_bigtable_admin_cluster_v1_bigtable_cluster_service_messages_pb.UndeleteClusterRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_bigtable_admin_cluster_v1_UndeleteClusterRequest,
    requestDeserialize: deserialize_google_bigtable_admin_cluster_v1_UndeleteClusterRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
};

exports.BigtableClusterServiceClient = grpc.makeGenericClientConstructor(BigtableClusterServiceService);
