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
var google_bigtable_admin_v2_bigtable_instance_admin_pb = require('../../../../google/bigtable/admin/v2/bigtable_instance_admin_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_bigtable_admin_v2_instance_pb = require('../../../../google/bigtable/admin/v2/instance_pb.js');
var google_iam_v1_iam_policy_pb = require('../../../../google/iam/v1/iam_policy_pb.js');
var google_iam_v1_policy_pb = require('../../../../google/iam/v1/policy_pb.js');
var google_longrunning_operations_pb = require('../../../../google/longrunning/operations_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_google_bigtable_admin_v2_AppProfile(arg) {
  if (!(arg instanceof google_bigtable_admin_v2_instance_pb.AppProfile)) {
    throw new Error('Expected argument of type google.bigtable.admin.v2.AppProfile');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_bigtable_admin_v2_AppProfile(buffer_arg) {
  return google_bigtable_admin_v2_instance_pb.AppProfile.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_bigtable_admin_v2_Cluster(arg) {
  if (!(arg instanceof google_bigtable_admin_v2_instance_pb.Cluster)) {
    throw new Error('Expected argument of type google.bigtable.admin.v2.Cluster');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_bigtable_admin_v2_Cluster(buffer_arg) {
  return google_bigtable_admin_v2_instance_pb.Cluster.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_bigtable_admin_v2_CreateAppProfileRequest(arg) {
  if (!(arg instanceof google_bigtable_admin_v2_bigtable_instance_admin_pb.CreateAppProfileRequest)) {
    throw new Error('Expected argument of type google.bigtable.admin.v2.CreateAppProfileRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_bigtable_admin_v2_CreateAppProfileRequest(buffer_arg) {
  return google_bigtable_admin_v2_bigtable_instance_admin_pb.CreateAppProfileRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_bigtable_admin_v2_CreateClusterRequest(arg) {
  if (!(arg instanceof google_bigtable_admin_v2_bigtable_instance_admin_pb.CreateClusterRequest)) {
    throw new Error('Expected argument of type google.bigtable.admin.v2.CreateClusterRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_bigtable_admin_v2_CreateClusterRequest(buffer_arg) {
  return google_bigtable_admin_v2_bigtable_instance_admin_pb.CreateClusterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_bigtable_admin_v2_CreateInstanceRequest(arg) {
  if (!(arg instanceof google_bigtable_admin_v2_bigtable_instance_admin_pb.CreateInstanceRequest)) {
    throw new Error('Expected argument of type google.bigtable.admin.v2.CreateInstanceRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_bigtable_admin_v2_CreateInstanceRequest(buffer_arg) {
  return google_bigtable_admin_v2_bigtable_instance_admin_pb.CreateInstanceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_bigtable_admin_v2_DeleteAppProfileRequest(arg) {
  if (!(arg instanceof google_bigtable_admin_v2_bigtable_instance_admin_pb.DeleteAppProfileRequest)) {
    throw new Error('Expected argument of type google.bigtable.admin.v2.DeleteAppProfileRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_bigtable_admin_v2_DeleteAppProfileRequest(buffer_arg) {
  return google_bigtable_admin_v2_bigtable_instance_admin_pb.DeleteAppProfileRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_bigtable_admin_v2_DeleteClusterRequest(arg) {
  if (!(arg instanceof google_bigtable_admin_v2_bigtable_instance_admin_pb.DeleteClusterRequest)) {
    throw new Error('Expected argument of type google.bigtable.admin.v2.DeleteClusterRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_bigtable_admin_v2_DeleteClusterRequest(buffer_arg) {
  return google_bigtable_admin_v2_bigtable_instance_admin_pb.DeleteClusterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_bigtable_admin_v2_DeleteInstanceRequest(arg) {
  if (!(arg instanceof google_bigtable_admin_v2_bigtable_instance_admin_pb.DeleteInstanceRequest)) {
    throw new Error('Expected argument of type google.bigtable.admin.v2.DeleteInstanceRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_bigtable_admin_v2_DeleteInstanceRequest(buffer_arg) {
  return google_bigtable_admin_v2_bigtable_instance_admin_pb.DeleteInstanceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_bigtable_admin_v2_GetAppProfileRequest(arg) {
  if (!(arg instanceof google_bigtable_admin_v2_bigtable_instance_admin_pb.GetAppProfileRequest)) {
    throw new Error('Expected argument of type google.bigtable.admin.v2.GetAppProfileRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_bigtable_admin_v2_GetAppProfileRequest(buffer_arg) {
  return google_bigtable_admin_v2_bigtable_instance_admin_pb.GetAppProfileRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_bigtable_admin_v2_GetClusterRequest(arg) {
  if (!(arg instanceof google_bigtable_admin_v2_bigtable_instance_admin_pb.GetClusterRequest)) {
    throw new Error('Expected argument of type google.bigtable.admin.v2.GetClusterRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_bigtable_admin_v2_GetClusterRequest(buffer_arg) {
  return google_bigtable_admin_v2_bigtable_instance_admin_pb.GetClusterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_bigtable_admin_v2_GetInstanceRequest(arg) {
  if (!(arg instanceof google_bigtable_admin_v2_bigtable_instance_admin_pb.GetInstanceRequest)) {
    throw new Error('Expected argument of type google.bigtable.admin.v2.GetInstanceRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_bigtable_admin_v2_GetInstanceRequest(buffer_arg) {
  return google_bigtable_admin_v2_bigtable_instance_admin_pb.GetInstanceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_bigtable_admin_v2_Instance(arg) {
  if (!(arg instanceof google_bigtable_admin_v2_instance_pb.Instance)) {
    throw new Error('Expected argument of type google.bigtable.admin.v2.Instance');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_bigtable_admin_v2_Instance(buffer_arg) {
  return google_bigtable_admin_v2_instance_pb.Instance.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_bigtable_admin_v2_ListAppProfilesRequest(arg) {
  if (!(arg instanceof google_bigtable_admin_v2_bigtable_instance_admin_pb.ListAppProfilesRequest)) {
    throw new Error('Expected argument of type google.bigtable.admin.v2.ListAppProfilesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_bigtable_admin_v2_ListAppProfilesRequest(buffer_arg) {
  return google_bigtable_admin_v2_bigtable_instance_admin_pb.ListAppProfilesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_bigtable_admin_v2_ListAppProfilesResponse(arg) {
  if (!(arg instanceof google_bigtable_admin_v2_bigtable_instance_admin_pb.ListAppProfilesResponse)) {
    throw new Error('Expected argument of type google.bigtable.admin.v2.ListAppProfilesResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_bigtable_admin_v2_ListAppProfilesResponse(buffer_arg) {
  return google_bigtable_admin_v2_bigtable_instance_admin_pb.ListAppProfilesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_bigtable_admin_v2_ListClustersRequest(arg) {
  if (!(arg instanceof google_bigtable_admin_v2_bigtable_instance_admin_pb.ListClustersRequest)) {
    throw new Error('Expected argument of type google.bigtable.admin.v2.ListClustersRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_bigtable_admin_v2_ListClustersRequest(buffer_arg) {
  return google_bigtable_admin_v2_bigtable_instance_admin_pb.ListClustersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_bigtable_admin_v2_ListClustersResponse(arg) {
  if (!(arg instanceof google_bigtable_admin_v2_bigtable_instance_admin_pb.ListClustersResponse)) {
    throw new Error('Expected argument of type google.bigtable.admin.v2.ListClustersResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_bigtable_admin_v2_ListClustersResponse(buffer_arg) {
  return google_bigtable_admin_v2_bigtable_instance_admin_pb.ListClustersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_bigtable_admin_v2_ListInstancesRequest(arg) {
  if (!(arg instanceof google_bigtable_admin_v2_bigtable_instance_admin_pb.ListInstancesRequest)) {
    throw new Error('Expected argument of type google.bigtable.admin.v2.ListInstancesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_bigtable_admin_v2_ListInstancesRequest(buffer_arg) {
  return google_bigtable_admin_v2_bigtable_instance_admin_pb.ListInstancesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_bigtable_admin_v2_ListInstancesResponse(arg) {
  if (!(arg instanceof google_bigtable_admin_v2_bigtable_instance_admin_pb.ListInstancesResponse)) {
    throw new Error('Expected argument of type google.bigtable.admin.v2.ListInstancesResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_bigtable_admin_v2_ListInstancesResponse(buffer_arg) {
  return google_bigtable_admin_v2_bigtable_instance_admin_pb.ListInstancesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_bigtable_admin_v2_PartialUpdateInstanceRequest(arg) {
  if (!(arg instanceof google_bigtable_admin_v2_bigtable_instance_admin_pb.PartialUpdateInstanceRequest)) {
    throw new Error('Expected argument of type google.bigtable.admin.v2.PartialUpdateInstanceRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_bigtable_admin_v2_PartialUpdateInstanceRequest(buffer_arg) {
  return google_bigtable_admin_v2_bigtable_instance_admin_pb.PartialUpdateInstanceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_bigtable_admin_v2_UpdateAppProfileRequest(arg) {
  if (!(arg instanceof google_bigtable_admin_v2_bigtable_instance_admin_pb.UpdateAppProfileRequest)) {
    throw new Error('Expected argument of type google.bigtable.admin.v2.UpdateAppProfileRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_bigtable_admin_v2_UpdateAppProfileRequest(buffer_arg) {
  return google_bigtable_admin_v2_bigtable_instance_admin_pb.UpdateAppProfileRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_v1_GetIamPolicyRequest(arg) {
  if (!(arg instanceof google_iam_v1_iam_policy_pb.GetIamPolicyRequest)) {
    throw new Error('Expected argument of type google.iam.v1.GetIamPolicyRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_iam_v1_GetIamPolicyRequest(buffer_arg) {
  return google_iam_v1_iam_policy_pb.GetIamPolicyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_v1_Policy(arg) {
  if (!(arg instanceof google_iam_v1_policy_pb.Policy)) {
    throw new Error('Expected argument of type google.iam.v1.Policy');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_iam_v1_Policy(buffer_arg) {
  return google_iam_v1_policy_pb.Policy.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_v1_SetIamPolicyRequest(arg) {
  if (!(arg instanceof google_iam_v1_iam_policy_pb.SetIamPolicyRequest)) {
    throw new Error('Expected argument of type google.iam.v1.SetIamPolicyRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_iam_v1_SetIamPolicyRequest(buffer_arg) {
  return google_iam_v1_iam_policy_pb.SetIamPolicyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_v1_TestIamPermissionsRequest(arg) {
  if (!(arg instanceof google_iam_v1_iam_policy_pb.TestIamPermissionsRequest)) {
    throw new Error('Expected argument of type google.iam.v1.TestIamPermissionsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_iam_v1_TestIamPermissionsRequest(buffer_arg) {
  return google_iam_v1_iam_policy_pb.TestIamPermissionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_v1_TestIamPermissionsResponse(arg) {
  if (!(arg instanceof google_iam_v1_iam_policy_pb.TestIamPermissionsResponse)) {
    throw new Error('Expected argument of type google.iam.v1.TestIamPermissionsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_iam_v1_TestIamPermissionsResponse(buffer_arg) {
  return google_iam_v1_iam_policy_pb.TestIamPermissionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
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


// Service for creating, configuring, and deleting Cloud Bigtable Instances and
// Clusters. Provides access to the Instance and Cluster schemas only, not the
// tables' metadata or data stored in those tables.
var BigtableInstanceAdminService = exports.BigtableInstanceAdminService = {
  // Create an instance within a project.
  createInstance: {
    path: '/google.bigtable.admin.v2.BigtableInstanceAdmin/CreateInstance',
    requestStream: false,
    responseStream: false,
    requestType: google_bigtable_admin_v2_bigtable_instance_admin_pb.CreateInstanceRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_bigtable_admin_v2_CreateInstanceRequest,
    requestDeserialize: deserialize_google_bigtable_admin_v2_CreateInstanceRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Gets information about an instance.
  getInstance: {
    path: '/google.bigtable.admin.v2.BigtableInstanceAdmin/GetInstance',
    requestStream: false,
    responseStream: false,
    requestType: google_bigtable_admin_v2_bigtable_instance_admin_pb.GetInstanceRequest,
    responseType: google_bigtable_admin_v2_instance_pb.Instance,
    requestSerialize: serialize_google_bigtable_admin_v2_GetInstanceRequest,
    requestDeserialize: deserialize_google_bigtable_admin_v2_GetInstanceRequest,
    responseSerialize: serialize_google_bigtable_admin_v2_Instance,
    responseDeserialize: deserialize_google_bigtable_admin_v2_Instance,
  },
  // Lists information about instances in a project.
  listInstances: {
    path: '/google.bigtable.admin.v2.BigtableInstanceAdmin/ListInstances',
    requestStream: false,
    responseStream: false,
    requestType: google_bigtable_admin_v2_bigtable_instance_admin_pb.ListInstancesRequest,
    responseType: google_bigtable_admin_v2_bigtable_instance_admin_pb.ListInstancesResponse,
    requestSerialize: serialize_google_bigtable_admin_v2_ListInstancesRequest,
    requestDeserialize: deserialize_google_bigtable_admin_v2_ListInstancesRequest,
    responseSerialize: serialize_google_bigtable_admin_v2_ListInstancesResponse,
    responseDeserialize: deserialize_google_bigtable_admin_v2_ListInstancesResponse,
  },
  // Updates an instance within a project.
  updateInstance: {
    path: '/google.bigtable.admin.v2.BigtableInstanceAdmin/UpdateInstance',
    requestStream: false,
    responseStream: false,
    requestType: google_bigtable_admin_v2_instance_pb.Instance,
    responseType: google_bigtable_admin_v2_instance_pb.Instance,
    requestSerialize: serialize_google_bigtable_admin_v2_Instance,
    requestDeserialize: deserialize_google_bigtable_admin_v2_Instance,
    responseSerialize: serialize_google_bigtable_admin_v2_Instance,
    responseDeserialize: deserialize_google_bigtable_admin_v2_Instance,
  },
  // Partially updates an instance within a project.
  partialUpdateInstance: {
    path: '/google.bigtable.admin.v2.BigtableInstanceAdmin/PartialUpdateInstance',
    requestStream: false,
    responseStream: false,
    requestType: google_bigtable_admin_v2_bigtable_instance_admin_pb.PartialUpdateInstanceRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_bigtable_admin_v2_PartialUpdateInstanceRequest,
    requestDeserialize: deserialize_google_bigtable_admin_v2_PartialUpdateInstanceRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Delete an instance from a project.
  deleteInstance: {
    path: '/google.bigtable.admin.v2.BigtableInstanceAdmin/DeleteInstance',
    requestStream: false,
    responseStream: false,
    requestType: google_bigtable_admin_v2_bigtable_instance_admin_pb.DeleteInstanceRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_bigtable_admin_v2_DeleteInstanceRequest,
    requestDeserialize: deserialize_google_bigtable_admin_v2_DeleteInstanceRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Creates a cluster within an instance.
  createCluster: {
    path: '/google.bigtable.admin.v2.BigtableInstanceAdmin/CreateCluster',
    requestStream: false,
    responseStream: false,
    requestType: google_bigtable_admin_v2_bigtable_instance_admin_pb.CreateClusterRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_bigtable_admin_v2_CreateClusterRequest,
    requestDeserialize: deserialize_google_bigtable_admin_v2_CreateClusterRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Gets information about a cluster.
  getCluster: {
    path: '/google.bigtable.admin.v2.BigtableInstanceAdmin/GetCluster',
    requestStream: false,
    responseStream: false,
    requestType: google_bigtable_admin_v2_bigtable_instance_admin_pb.GetClusterRequest,
    responseType: google_bigtable_admin_v2_instance_pb.Cluster,
    requestSerialize: serialize_google_bigtable_admin_v2_GetClusterRequest,
    requestDeserialize: deserialize_google_bigtable_admin_v2_GetClusterRequest,
    responseSerialize: serialize_google_bigtable_admin_v2_Cluster,
    responseDeserialize: deserialize_google_bigtable_admin_v2_Cluster,
  },
  // Lists information about clusters in an instance.
  listClusters: {
    path: '/google.bigtable.admin.v2.BigtableInstanceAdmin/ListClusters',
    requestStream: false,
    responseStream: false,
    requestType: google_bigtable_admin_v2_bigtable_instance_admin_pb.ListClustersRequest,
    responseType: google_bigtable_admin_v2_bigtable_instance_admin_pb.ListClustersResponse,
    requestSerialize: serialize_google_bigtable_admin_v2_ListClustersRequest,
    requestDeserialize: deserialize_google_bigtable_admin_v2_ListClustersRequest,
    responseSerialize: serialize_google_bigtable_admin_v2_ListClustersResponse,
    responseDeserialize: deserialize_google_bigtable_admin_v2_ListClustersResponse,
  },
  // Updates a cluster within an instance.
  updateCluster: {
    path: '/google.bigtable.admin.v2.BigtableInstanceAdmin/UpdateCluster',
    requestStream: false,
    responseStream: false,
    requestType: google_bigtable_admin_v2_instance_pb.Cluster,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_bigtable_admin_v2_Cluster,
    requestDeserialize: deserialize_google_bigtable_admin_v2_Cluster,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Deletes a cluster from an instance.
  deleteCluster: {
    path: '/google.bigtable.admin.v2.BigtableInstanceAdmin/DeleteCluster',
    requestStream: false,
    responseStream: false,
    requestType: google_bigtable_admin_v2_bigtable_instance_admin_pb.DeleteClusterRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_bigtable_admin_v2_DeleteClusterRequest,
    requestDeserialize: deserialize_google_bigtable_admin_v2_DeleteClusterRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Creates an app profile within an instance.
  createAppProfile: {
    path: '/google.bigtable.admin.v2.BigtableInstanceAdmin/CreateAppProfile',
    requestStream: false,
    responseStream: false,
    requestType: google_bigtable_admin_v2_bigtable_instance_admin_pb.CreateAppProfileRequest,
    responseType: google_bigtable_admin_v2_instance_pb.AppProfile,
    requestSerialize: serialize_google_bigtable_admin_v2_CreateAppProfileRequest,
    requestDeserialize: deserialize_google_bigtable_admin_v2_CreateAppProfileRequest,
    responseSerialize: serialize_google_bigtable_admin_v2_AppProfile,
    responseDeserialize: deserialize_google_bigtable_admin_v2_AppProfile,
  },
  // Gets information about an app profile.
  getAppProfile: {
    path: '/google.bigtable.admin.v2.BigtableInstanceAdmin/GetAppProfile',
    requestStream: false,
    responseStream: false,
    requestType: google_bigtable_admin_v2_bigtable_instance_admin_pb.GetAppProfileRequest,
    responseType: google_bigtable_admin_v2_instance_pb.AppProfile,
    requestSerialize: serialize_google_bigtable_admin_v2_GetAppProfileRequest,
    requestDeserialize: deserialize_google_bigtable_admin_v2_GetAppProfileRequest,
    responseSerialize: serialize_google_bigtable_admin_v2_AppProfile,
    responseDeserialize: deserialize_google_bigtable_admin_v2_AppProfile,
  },
  // Lists information about app profiles in an instance.
  listAppProfiles: {
    path: '/google.bigtable.admin.v2.BigtableInstanceAdmin/ListAppProfiles',
    requestStream: false,
    responseStream: false,
    requestType: google_bigtable_admin_v2_bigtable_instance_admin_pb.ListAppProfilesRequest,
    responseType: google_bigtable_admin_v2_bigtable_instance_admin_pb.ListAppProfilesResponse,
    requestSerialize: serialize_google_bigtable_admin_v2_ListAppProfilesRequest,
    requestDeserialize: deserialize_google_bigtable_admin_v2_ListAppProfilesRequest,
    responseSerialize: serialize_google_bigtable_admin_v2_ListAppProfilesResponse,
    responseDeserialize: deserialize_google_bigtable_admin_v2_ListAppProfilesResponse,
  },
  // Updates an app profile within an instance.
  updateAppProfile: {
    path: '/google.bigtable.admin.v2.BigtableInstanceAdmin/UpdateAppProfile',
    requestStream: false,
    responseStream: false,
    requestType: google_bigtable_admin_v2_bigtable_instance_admin_pb.UpdateAppProfileRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_bigtable_admin_v2_UpdateAppProfileRequest,
    requestDeserialize: deserialize_google_bigtable_admin_v2_UpdateAppProfileRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Deletes an app profile from an instance.
  deleteAppProfile: {
    path: '/google.bigtable.admin.v2.BigtableInstanceAdmin/DeleteAppProfile',
    requestStream: false,
    responseStream: false,
    requestType: google_bigtable_admin_v2_bigtable_instance_admin_pb.DeleteAppProfileRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_bigtable_admin_v2_DeleteAppProfileRequest,
    requestDeserialize: deserialize_google_bigtable_admin_v2_DeleteAppProfileRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Gets the access control policy for an instance resource. Returns an empty
  // policy if an instance exists but does not have a policy set.
  getIamPolicy: {
    path: '/google.bigtable.admin.v2.BigtableInstanceAdmin/GetIamPolicy',
    requestStream: false,
    responseStream: false,
    requestType: google_iam_v1_iam_policy_pb.GetIamPolicyRequest,
    responseType: google_iam_v1_policy_pb.Policy,
    requestSerialize: serialize_google_iam_v1_GetIamPolicyRequest,
    requestDeserialize: deserialize_google_iam_v1_GetIamPolicyRequest,
    responseSerialize: serialize_google_iam_v1_Policy,
    responseDeserialize: deserialize_google_iam_v1_Policy,
  },
  // Sets the access control policy on an instance resource. Replaces any
  // existing policy.
  setIamPolicy: {
    path: '/google.bigtable.admin.v2.BigtableInstanceAdmin/SetIamPolicy',
    requestStream: false,
    responseStream: false,
    requestType: google_iam_v1_iam_policy_pb.SetIamPolicyRequest,
    responseType: google_iam_v1_policy_pb.Policy,
    requestSerialize: serialize_google_iam_v1_SetIamPolicyRequest,
    requestDeserialize: deserialize_google_iam_v1_SetIamPolicyRequest,
    responseSerialize: serialize_google_iam_v1_Policy,
    responseDeserialize: deserialize_google_iam_v1_Policy,
  },
  // Returns permissions that the caller has on the specified instance resource.
  testIamPermissions: {
    path: '/google.bigtable.admin.v2.BigtableInstanceAdmin/TestIamPermissions',
    requestStream: false,
    responseStream: false,
    requestType: google_iam_v1_iam_policy_pb.TestIamPermissionsRequest,
    responseType: google_iam_v1_iam_policy_pb.TestIamPermissionsResponse,
    requestSerialize: serialize_google_iam_v1_TestIamPermissionsRequest,
    requestDeserialize: deserialize_google_iam_v1_TestIamPermissionsRequest,
    responseSerialize: serialize_google_iam_v1_TestIamPermissionsResponse,
    responseDeserialize: deserialize_google_iam_v1_TestIamPermissionsResponse,
  },
};

exports.BigtableInstanceAdminClient = grpc.makeGenericClientConstructor(BigtableInstanceAdminService);
