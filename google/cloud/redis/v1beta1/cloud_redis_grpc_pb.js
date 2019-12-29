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
var google_cloud_redis_v1beta1_cloud_redis_pb = require('../../../../google/cloud/redis/v1beta1/cloud_redis_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_api_client_pb = require('../../../../google/api/client_pb.js');
var google_api_field_behavior_pb = require('../../../../google/api/field_behavior_pb.js');
var google_api_resource_pb = require('../../../../google/api/resource_pb.js');
var google_longrunning_operations_pb = require('../../../../google/longrunning/operations_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_google_cloud_redis_v1beta1_CreateInstanceRequest(arg) {
  if (!(arg instanceof google_cloud_redis_v1beta1_cloud_redis_pb.CreateInstanceRequest)) {
    throw new Error('Expected argument of type google.cloud.redis.v1beta1.CreateInstanceRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_redis_v1beta1_CreateInstanceRequest(buffer_arg) {
  return google_cloud_redis_v1beta1_cloud_redis_pb.CreateInstanceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_redis_v1beta1_DeleteInstanceRequest(arg) {
  if (!(arg instanceof google_cloud_redis_v1beta1_cloud_redis_pb.DeleteInstanceRequest)) {
    throw new Error('Expected argument of type google.cloud.redis.v1beta1.DeleteInstanceRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_redis_v1beta1_DeleteInstanceRequest(buffer_arg) {
  return google_cloud_redis_v1beta1_cloud_redis_pb.DeleteInstanceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_redis_v1beta1_ExportInstanceRequest(arg) {
  if (!(arg instanceof google_cloud_redis_v1beta1_cloud_redis_pb.ExportInstanceRequest)) {
    throw new Error('Expected argument of type google.cloud.redis.v1beta1.ExportInstanceRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_redis_v1beta1_ExportInstanceRequest(buffer_arg) {
  return google_cloud_redis_v1beta1_cloud_redis_pb.ExportInstanceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_redis_v1beta1_FailoverInstanceRequest(arg) {
  if (!(arg instanceof google_cloud_redis_v1beta1_cloud_redis_pb.FailoverInstanceRequest)) {
    throw new Error('Expected argument of type google.cloud.redis.v1beta1.FailoverInstanceRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_redis_v1beta1_FailoverInstanceRequest(buffer_arg) {
  return google_cloud_redis_v1beta1_cloud_redis_pb.FailoverInstanceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_redis_v1beta1_GetInstanceRequest(arg) {
  if (!(arg instanceof google_cloud_redis_v1beta1_cloud_redis_pb.GetInstanceRequest)) {
    throw new Error('Expected argument of type google.cloud.redis.v1beta1.GetInstanceRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_redis_v1beta1_GetInstanceRequest(buffer_arg) {
  return google_cloud_redis_v1beta1_cloud_redis_pb.GetInstanceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_redis_v1beta1_ImportInstanceRequest(arg) {
  if (!(arg instanceof google_cloud_redis_v1beta1_cloud_redis_pb.ImportInstanceRequest)) {
    throw new Error('Expected argument of type google.cloud.redis.v1beta1.ImportInstanceRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_redis_v1beta1_ImportInstanceRequest(buffer_arg) {
  return google_cloud_redis_v1beta1_cloud_redis_pb.ImportInstanceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_redis_v1beta1_Instance(arg) {
  if (!(arg instanceof google_cloud_redis_v1beta1_cloud_redis_pb.Instance)) {
    throw new Error('Expected argument of type google.cloud.redis.v1beta1.Instance');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_redis_v1beta1_Instance(buffer_arg) {
  return google_cloud_redis_v1beta1_cloud_redis_pb.Instance.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_redis_v1beta1_ListInstancesRequest(arg) {
  if (!(arg instanceof google_cloud_redis_v1beta1_cloud_redis_pb.ListInstancesRequest)) {
    throw new Error('Expected argument of type google.cloud.redis.v1beta1.ListInstancesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_redis_v1beta1_ListInstancesRequest(buffer_arg) {
  return google_cloud_redis_v1beta1_cloud_redis_pb.ListInstancesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_redis_v1beta1_ListInstancesResponse(arg) {
  if (!(arg instanceof google_cloud_redis_v1beta1_cloud_redis_pb.ListInstancesResponse)) {
    throw new Error('Expected argument of type google.cloud.redis.v1beta1.ListInstancesResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_redis_v1beta1_ListInstancesResponse(buffer_arg) {
  return google_cloud_redis_v1beta1_cloud_redis_pb.ListInstancesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_redis_v1beta1_UpdateInstanceRequest(arg) {
  if (!(arg instanceof google_cloud_redis_v1beta1_cloud_redis_pb.UpdateInstanceRequest)) {
    throw new Error('Expected argument of type google.cloud.redis.v1beta1.UpdateInstanceRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_redis_v1beta1_UpdateInstanceRequest(buffer_arg) {
  return google_cloud_redis_v1beta1_cloud_redis_pb.UpdateInstanceRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


// Configures and manages Cloud Memorystore for Redis instances
//
// Google Cloud Memorystore for Redis v1beta1
//
// The `redis.googleapis.com` service implements the Google Cloud Memorystore
// for Redis API and defines the following resource model for managing Redis
// instances:
// * The service works with a collection of cloud projects, named: `/projects/*`
// * Each project has a collection of available locations, named: `/locations/*`
// * Each location has a collection of Redis instances, named: `/instances/*`
// * As such, Redis instances are resources of the form:
//   `/projects/{project_id}/locations/{location_id}/instances/{instance_id}`
//
// Note that location_id must be refering to a GCP `region`; for example:
// * `projects/redpepper-1290/locations/us-central1/instances/my-redis`
var CloudRedisService = exports.CloudRedisService = {
  // Lists all Redis instances owned by a project in either the specified
  // location (region) or all locations.
  //
  // The location should have the following format:
  // * `projects/{project_id}/locations/{location_id}`
  //
  // If `location_id` is specified as `-` (wildcard), then all regions
  // available to the project are queried, and the results are aggregated.
  listInstances: {
    path: '/google.cloud.redis.v1beta1.CloudRedis/ListInstances',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_redis_v1beta1_cloud_redis_pb.ListInstancesRequest,
    responseType: google_cloud_redis_v1beta1_cloud_redis_pb.ListInstancesResponse,
    requestSerialize: serialize_google_cloud_redis_v1beta1_ListInstancesRequest,
    requestDeserialize: deserialize_google_cloud_redis_v1beta1_ListInstancesRequest,
    responseSerialize: serialize_google_cloud_redis_v1beta1_ListInstancesResponse,
    responseDeserialize: deserialize_google_cloud_redis_v1beta1_ListInstancesResponse,
  },
  // Gets the details of a specific Redis instance.
  getInstance: {
    path: '/google.cloud.redis.v1beta1.CloudRedis/GetInstance',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_redis_v1beta1_cloud_redis_pb.GetInstanceRequest,
    responseType: google_cloud_redis_v1beta1_cloud_redis_pb.Instance,
    requestSerialize: serialize_google_cloud_redis_v1beta1_GetInstanceRequest,
    requestDeserialize: deserialize_google_cloud_redis_v1beta1_GetInstanceRequest,
    responseSerialize: serialize_google_cloud_redis_v1beta1_Instance,
    responseDeserialize: deserialize_google_cloud_redis_v1beta1_Instance,
  },
  // Creates a Redis instance based on the specified tier and memory size.
  //
  // By default, the instance is accessible from the project's
  // [default network](/compute/docs/networks-and-firewalls#networks).
  //
  // The creation is executed asynchronously and callers may check the returned
  // operation to track its progress. Once the operation is completed the Redis
  // instance will be fully functional. Completed longrunning.Operation will
  // contain the new instance object in the response field.
  //
  // The returned operation is automatically deleted after a few hours, so there
  // is no need to call DeleteOperation.
  createInstance: {
    path: '/google.cloud.redis.v1beta1.CloudRedis/CreateInstance',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_redis_v1beta1_cloud_redis_pb.CreateInstanceRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_cloud_redis_v1beta1_CreateInstanceRequest,
    requestDeserialize: deserialize_google_cloud_redis_v1beta1_CreateInstanceRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Updates the metadata and configuration of a specific Redis instance.
  //
  // Completed longrunning.Operation will contain the new instance object
  // in the response field. The returned operation is automatically deleted
  // after a few hours, so there is no need to call DeleteOperation.
  updateInstance: {
    path: '/google.cloud.redis.v1beta1.CloudRedis/UpdateInstance',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_redis_v1beta1_cloud_redis_pb.UpdateInstanceRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_cloud_redis_v1beta1_UpdateInstanceRequest,
    requestDeserialize: deserialize_google_cloud_redis_v1beta1_UpdateInstanceRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Import a Redis RDB snapshot file from Cloud Storage into a Redis instance.
  //
  // Redis may stop serving during this operation. Instance state will be
  // IMPORTING for entire operation. When complete, the instance will contain
  // only data from the imported file.
  //
  // The returned operation is automatically deleted after a few hours, so
  // there is no need to call DeleteOperation.
  importInstance: {
    path: '/google.cloud.redis.v1beta1.CloudRedis/ImportInstance',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_redis_v1beta1_cloud_redis_pb.ImportInstanceRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_cloud_redis_v1beta1_ImportInstanceRequest,
    requestDeserialize: deserialize_google_cloud_redis_v1beta1_ImportInstanceRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Export Redis instance data into a Redis RDB format file in Cloud Storage.
  //
  // Redis will continue serving during this operation.
  //
  // The returned operation is automatically deleted after a few hours, so
  // there is no need to call DeleteOperation.
  exportInstance: {
    path: '/google.cloud.redis.v1beta1.CloudRedis/ExportInstance',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_redis_v1beta1_cloud_redis_pb.ExportInstanceRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_cloud_redis_v1beta1_ExportInstanceRequest,
    requestDeserialize: deserialize_google_cloud_redis_v1beta1_ExportInstanceRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Initiates a failover of the master node to current replica node for a
  // specific STANDARD tier Cloud Memorystore for Redis instance.
  failoverInstance: {
    path: '/google.cloud.redis.v1beta1.CloudRedis/FailoverInstance',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_redis_v1beta1_cloud_redis_pb.FailoverInstanceRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_cloud_redis_v1beta1_FailoverInstanceRequest,
    requestDeserialize: deserialize_google_cloud_redis_v1beta1_FailoverInstanceRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Deletes a specific Redis instance.  Instance stops serving and data is
  // deleted.
  deleteInstance: {
    path: '/google.cloud.redis.v1beta1.CloudRedis/DeleteInstance',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_redis_v1beta1_cloud_redis_pb.DeleteInstanceRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_cloud_redis_v1beta1_DeleteInstanceRequest,
    requestDeserialize: deserialize_google_cloud_redis_v1beta1_DeleteInstanceRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
};

exports.CloudRedisClient = grpc.makeGenericClientConstructor(CloudRedisService);
