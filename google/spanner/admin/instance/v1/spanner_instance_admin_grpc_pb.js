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
var google_spanner_admin_instance_v1_spanner_instance_admin_pb = require('../../../../../google/spanner/admin/instance/v1/spanner_instance_admin_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var google_api_client_pb = require('../../../../../google/api/client_pb.js');
var google_api_field_behavior_pb = require('../../../../../google/api/field_behavior_pb.js');
var google_api_resource_pb = require('../../../../../google/api/resource_pb.js');
var google_iam_v1_iam_policy_pb = require('../../../../../google/iam/v1/iam_policy_pb.js');
var google_iam_v1_policy_pb = require('../../../../../google/iam/v1/policy_pb.js');
var google_longrunning_operations_pb = require('../../../../../google/longrunning/operations_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

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

function serialize_google_spanner_admin_instance_v1_CreateInstanceRequest(arg) {
  if (!(arg instanceof google_spanner_admin_instance_v1_spanner_instance_admin_pb.CreateInstanceRequest)) {
    throw new Error('Expected argument of type google.spanner.admin.instance.v1.CreateInstanceRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_spanner_admin_instance_v1_CreateInstanceRequest(buffer_arg) {
  return google_spanner_admin_instance_v1_spanner_instance_admin_pb.CreateInstanceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_spanner_admin_instance_v1_DeleteInstanceRequest(arg) {
  if (!(arg instanceof google_spanner_admin_instance_v1_spanner_instance_admin_pb.DeleteInstanceRequest)) {
    throw new Error('Expected argument of type google.spanner.admin.instance.v1.DeleteInstanceRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_spanner_admin_instance_v1_DeleteInstanceRequest(buffer_arg) {
  return google_spanner_admin_instance_v1_spanner_instance_admin_pb.DeleteInstanceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_spanner_admin_instance_v1_GetInstanceConfigRequest(arg) {
  if (!(arg instanceof google_spanner_admin_instance_v1_spanner_instance_admin_pb.GetInstanceConfigRequest)) {
    throw new Error('Expected argument of type google.spanner.admin.instance.v1.GetInstanceConfigRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_spanner_admin_instance_v1_GetInstanceConfigRequest(buffer_arg) {
  return google_spanner_admin_instance_v1_spanner_instance_admin_pb.GetInstanceConfigRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_spanner_admin_instance_v1_GetInstanceRequest(arg) {
  if (!(arg instanceof google_spanner_admin_instance_v1_spanner_instance_admin_pb.GetInstanceRequest)) {
    throw new Error('Expected argument of type google.spanner.admin.instance.v1.GetInstanceRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_spanner_admin_instance_v1_GetInstanceRequest(buffer_arg) {
  return google_spanner_admin_instance_v1_spanner_instance_admin_pb.GetInstanceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_spanner_admin_instance_v1_Instance(arg) {
  if (!(arg instanceof google_spanner_admin_instance_v1_spanner_instance_admin_pb.Instance)) {
    throw new Error('Expected argument of type google.spanner.admin.instance.v1.Instance');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_spanner_admin_instance_v1_Instance(buffer_arg) {
  return google_spanner_admin_instance_v1_spanner_instance_admin_pb.Instance.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_spanner_admin_instance_v1_InstanceConfig(arg) {
  if (!(arg instanceof google_spanner_admin_instance_v1_spanner_instance_admin_pb.InstanceConfig)) {
    throw new Error('Expected argument of type google.spanner.admin.instance.v1.InstanceConfig');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_spanner_admin_instance_v1_InstanceConfig(buffer_arg) {
  return google_spanner_admin_instance_v1_spanner_instance_admin_pb.InstanceConfig.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_spanner_admin_instance_v1_ListInstanceConfigsRequest(arg) {
  if (!(arg instanceof google_spanner_admin_instance_v1_spanner_instance_admin_pb.ListInstanceConfigsRequest)) {
    throw new Error('Expected argument of type google.spanner.admin.instance.v1.ListInstanceConfigsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_spanner_admin_instance_v1_ListInstanceConfigsRequest(buffer_arg) {
  return google_spanner_admin_instance_v1_spanner_instance_admin_pb.ListInstanceConfigsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_spanner_admin_instance_v1_ListInstanceConfigsResponse(arg) {
  if (!(arg instanceof google_spanner_admin_instance_v1_spanner_instance_admin_pb.ListInstanceConfigsResponse)) {
    throw new Error('Expected argument of type google.spanner.admin.instance.v1.ListInstanceConfigsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_spanner_admin_instance_v1_ListInstanceConfigsResponse(buffer_arg) {
  return google_spanner_admin_instance_v1_spanner_instance_admin_pb.ListInstanceConfigsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_spanner_admin_instance_v1_ListInstancesRequest(arg) {
  if (!(arg instanceof google_spanner_admin_instance_v1_spanner_instance_admin_pb.ListInstancesRequest)) {
    throw new Error('Expected argument of type google.spanner.admin.instance.v1.ListInstancesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_spanner_admin_instance_v1_ListInstancesRequest(buffer_arg) {
  return google_spanner_admin_instance_v1_spanner_instance_admin_pb.ListInstancesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_spanner_admin_instance_v1_ListInstancesResponse(arg) {
  if (!(arg instanceof google_spanner_admin_instance_v1_spanner_instance_admin_pb.ListInstancesResponse)) {
    throw new Error('Expected argument of type google.spanner.admin.instance.v1.ListInstancesResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_spanner_admin_instance_v1_ListInstancesResponse(buffer_arg) {
  return google_spanner_admin_instance_v1_spanner_instance_admin_pb.ListInstancesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_spanner_admin_instance_v1_UpdateInstanceRequest(arg) {
  if (!(arg instanceof google_spanner_admin_instance_v1_spanner_instance_admin_pb.UpdateInstanceRequest)) {
    throw new Error('Expected argument of type google.spanner.admin.instance.v1.UpdateInstanceRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_spanner_admin_instance_v1_UpdateInstanceRequest(buffer_arg) {
  return google_spanner_admin_instance_v1_spanner_instance_admin_pb.UpdateInstanceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// Cloud Spanner Instance Admin API
//
// The Cloud Spanner Instance Admin API can be used to create, delete,
// modify and list instances. Instances are dedicated Cloud Spanner serving
// and storage resources to be used by Cloud Spanner databases.
//
// Each instance has a "configuration", which dictates where the
// serving resources for the Cloud Spanner instance are located (e.g.,
// US-central, Europe). Configurations are created by Google based on
// resource availability.
//
// Cloud Spanner billing is based on the instances that exist and their
// sizes. After an instance exists, there are no additional
// per-database or per-operation charges for use of the instance
// (though there may be additional network bandwidth charges).
// Instances offer isolation: problems with databases in one instance
// will not affect other instances. However, within an instance
// databases can affect each other. For example, if one database in an
// instance receives a lot of requests and consumes most of the
// instance resources, fewer resources are available for other
// databases in that instance, and their performance may suffer.
var InstanceAdminService = exports.InstanceAdminService = {
  // Lists the supported instance configurations for a given project.
  listInstanceConfigs: {
    path: '/google.spanner.admin.instance.v1.InstanceAdmin/ListInstanceConfigs',
    requestStream: false,
    responseStream: false,
    requestType: google_spanner_admin_instance_v1_spanner_instance_admin_pb.ListInstanceConfigsRequest,
    responseType: google_spanner_admin_instance_v1_spanner_instance_admin_pb.ListInstanceConfigsResponse,
    requestSerialize: serialize_google_spanner_admin_instance_v1_ListInstanceConfigsRequest,
    requestDeserialize: deserialize_google_spanner_admin_instance_v1_ListInstanceConfigsRequest,
    responseSerialize: serialize_google_spanner_admin_instance_v1_ListInstanceConfigsResponse,
    responseDeserialize: deserialize_google_spanner_admin_instance_v1_ListInstanceConfigsResponse,
  },
  // Gets information about a particular instance configuration.
  getInstanceConfig: {
    path: '/google.spanner.admin.instance.v1.InstanceAdmin/GetInstanceConfig',
    requestStream: false,
    responseStream: false,
    requestType: google_spanner_admin_instance_v1_spanner_instance_admin_pb.GetInstanceConfigRequest,
    responseType: google_spanner_admin_instance_v1_spanner_instance_admin_pb.InstanceConfig,
    requestSerialize: serialize_google_spanner_admin_instance_v1_GetInstanceConfigRequest,
    requestDeserialize: deserialize_google_spanner_admin_instance_v1_GetInstanceConfigRequest,
    responseSerialize: serialize_google_spanner_admin_instance_v1_InstanceConfig,
    responseDeserialize: deserialize_google_spanner_admin_instance_v1_InstanceConfig,
  },
  // Lists all instances in the given project.
  listInstances: {
    path: '/google.spanner.admin.instance.v1.InstanceAdmin/ListInstances',
    requestStream: false,
    responseStream: false,
    requestType: google_spanner_admin_instance_v1_spanner_instance_admin_pb.ListInstancesRequest,
    responseType: google_spanner_admin_instance_v1_spanner_instance_admin_pb.ListInstancesResponse,
    requestSerialize: serialize_google_spanner_admin_instance_v1_ListInstancesRequest,
    requestDeserialize: deserialize_google_spanner_admin_instance_v1_ListInstancesRequest,
    responseSerialize: serialize_google_spanner_admin_instance_v1_ListInstancesResponse,
    responseDeserialize: deserialize_google_spanner_admin_instance_v1_ListInstancesResponse,
  },
  // Gets information about a particular instance.
  getInstance: {
    path: '/google.spanner.admin.instance.v1.InstanceAdmin/GetInstance',
    requestStream: false,
    responseStream: false,
    requestType: google_spanner_admin_instance_v1_spanner_instance_admin_pb.GetInstanceRequest,
    responseType: google_spanner_admin_instance_v1_spanner_instance_admin_pb.Instance,
    requestSerialize: serialize_google_spanner_admin_instance_v1_GetInstanceRequest,
    requestDeserialize: deserialize_google_spanner_admin_instance_v1_GetInstanceRequest,
    responseSerialize: serialize_google_spanner_admin_instance_v1_Instance,
    responseDeserialize: deserialize_google_spanner_admin_instance_v1_Instance,
  },
  // Creates an instance and begins preparing it to begin serving. The
  // returned [long-running operation][google.longrunning.Operation]
  // can be used to track the progress of preparing the new
  // instance. The instance name is assigned by the caller. If the
  // named instance already exists, `CreateInstance` returns
  // `ALREADY_EXISTS`.
  //
  // Immediately upon completion of this request:
  //
  //   * The instance is readable via the API, with all requested attributes
  //     but no allocated resources. Its state is `CREATING`.
  //
  // Until completion of the returned operation:
  //
  //   * Cancelling the operation renders the instance immediately unreadable
  //     via the API.
  //   * The instance can be deleted.
  //   * All other attempts to modify the instance are rejected.
  //
  // Upon completion of the returned operation:
  //
  //   * Billing for all successfully-allocated resources begins (some types
  //     may have lower than the requested levels).
  //   * Databases can be created in the instance.
  //   * The instance's allocated resource levels are readable via the API.
  //   * The instance's state becomes `READY`.
  //
  // The returned [long-running operation][google.longrunning.Operation] will
  // have a name of the format `<instance_name>/operations/<operation_id>` and
  // can be used to track creation of the instance.  The
  // [metadata][google.longrunning.Operation.metadata] field type is
  // [CreateInstanceMetadata][google.spanner.admin.instance.v1.CreateInstanceMetadata].
  // The [response][google.longrunning.Operation.response] field type is
  // [Instance][google.spanner.admin.instance.v1.Instance], if successful.
  createInstance: {
    path: '/google.spanner.admin.instance.v1.InstanceAdmin/CreateInstance',
    requestStream: false,
    responseStream: false,
    requestType: google_spanner_admin_instance_v1_spanner_instance_admin_pb.CreateInstanceRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_spanner_admin_instance_v1_CreateInstanceRequest,
    requestDeserialize: deserialize_google_spanner_admin_instance_v1_CreateInstanceRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Updates an instance, and begins allocating or releasing resources
  // as requested. The returned [long-running
  // operation][google.longrunning.Operation] can be used to track the
  // progress of updating the instance. If the named instance does not
  // exist, returns `NOT_FOUND`.
  //
  // Immediately upon completion of this request:
  //
  //   * For resource types for which a decrease in the instance's allocation
  //     has been requested, billing is based on the newly-requested level.
  //
  // Until completion of the returned operation:
  //
  //   * Cancelling the operation sets its metadata's
  //     [cancel_time][google.spanner.admin.instance.v1.UpdateInstanceMetadata.cancel_time], and begins
  //     restoring resources to their pre-request values. The operation
  //     is guaranteed to succeed at undoing all resource changes,
  //     after which point it terminates with a `CANCELLED` status.
  //   * All other attempts to modify the instance are rejected.
  //   * Reading the instance via the API continues to give the pre-request
  //     resource levels.
  //
  // Upon completion of the returned operation:
  //
  //   * Billing begins for all successfully-allocated resources (some types
  //     may have lower than the requested levels).
  //   * All newly-reserved resources are available for serving the instance's
  //     tables.
  //   * The instance's new resource levels are readable via the API.
  //
  // The returned [long-running operation][google.longrunning.Operation] will
  // have a name of the format `<instance_name>/operations/<operation_id>` and
  // can be used to track the instance modification.  The
  // [metadata][google.longrunning.Operation.metadata] field type is
  // [UpdateInstanceMetadata][google.spanner.admin.instance.v1.UpdateInstanceMetadata].
  // The [response][google.longrunning.Operation.response] field type is
  // [Instance][google.spanner.admin.instance.v1.Instance], if successful.
  //
  // Authorization requires `spanner.instances.update` permission on
  // resource [name][google.spanner.admin.instance.v1.Instance.name].
  updateInstance: {
    path: '/google.spanner.admin.instance.v1.InstanceAdmin/UpdateInstance',
    requestStream: false,
    responseStream: false,
    requestType: google_spanner_admin_instance_v1_spanner_instance_admin_pb.UpdateInstanceRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_spanner_admin_instance_v1_UpdateInstanceRequest,
    requestDeserialize: deserialize_google_spanner_admin_instance_v1_UpdateInstanceRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Deletes an instance.
  //
  // Immediately upon completion of the request:
  //
  //   * Billing ceases for all of the instance's reserved resources.
  //
  // Soon afterward:
  //
  //   * The instance and *all of its databases* immediately and
  //     irrevocably disappear from the API. All data in the databases
  //     is permanently deleted.
  deleteInstance: {
    path: '/google.spanner.admin.instance.v1.InstanceAdmin/DeleteInstance',
    requestStream: false,
    responseStream: false,
    requestType: google_spanner_admin_instance_v1_spanner_instance_admin_pb.DeleteInstanceRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_spanner_admin_instance_v1_DeleteInstanceRequest,
    requestDeserialize: deserialize_google_spanner_admin_instance_v1_DeleteInstanceRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Sets the access control policy on an instance resource. Replaces any
  // existing policy.
  //
  // Authorization requires `spanner.instances.setIamPolicy` on
  // [resource][google.iam.v1.SetIamPolicyRequest.resource].
  setIamPolicy: {
    path: '/google.spanner.admin.instance.v1.InstanceAdmin/SetIamPolicy',
    requestStream: false,
    responseStream: false,
    requestType: google_iam_v1_iam_policy_pb.SetIamPolicyRequest,
    responseType: google_iam_v1_policy_pb.Policy,
    requestSerialize: serialize_google_iam_v1_SetIamPolicyRequest,
    requestDeserialize: deserialize_google_iam_v1_SetIamPolicyRequest,
    responseSerialize: serialize_google_iam_v1_Policy,
    responseDeserialize: deserialize_google_iam_v1_Policy,
  },
  // Gets the access control policy for an instance resource. Returns an empty
  // policy if an instance exists but does not have a policy set.
  //
  // Authorization requires `spanner.instances.getIamPolicy` on
  // [resource][google.iam.v1.GetIamPolicyRequest.resource].
  getIamPolicy: {
    path: '/google.spanner.admin.instance.v1.InstanceAdmin/GetIamPolicy',
    requestStream: false,
    responseStream: false,
    requestType: google_iam_v1_iam_policy_pb.GetIamPolicyRequest,
    responseType: google_iam_v1_policy_pb.Policy,
    requestSerialize: serialize_google_iam_v1_GetIamPolicyRequest,
    requestDeserialize: deserialize_google_iam_v1_GetIamPolicyRequest,
    responseSerialize: serialize_google_iam_v1_Policy,
    responseDeserialize: deserialize_google_iam_v1_Policy,
  },
  // Returns permissions that the caller has on the specified instance resource.
  //
  // Attempting this RPC on a non-existent Cloud Spanner instance resource will
  // result in a NOT_FOUND error if the user has `spanner.instances.list`
  // permission on the containing Google Cloud Project. Otherwise returns an
  // empty set of permissions.
  testIamPermissions: {
    path: '/google.spanner.admin.instance.v1.InstanceAdmin/TestIamPermissions',
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

exports.InstanceAdminClient = grpc.makeGenericClientConstructor(InstanceAdminService);
