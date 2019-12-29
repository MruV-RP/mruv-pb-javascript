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
var google_cloud_dataproc_v1_autoscaling_policies_pb = require('../../../../google/cloud/dataproc/v1/autoscaling_policies_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_api_field_behavior_pb = require('../../../../google/api/field_behavior_pb.js');
var google_api_resource_pb = require('../../../../google/api/resource_pb.js');
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_api_client_pb = require('../../../../google/api/client_pb.js');

function serialize_google_cloud_dataproc_v1_AutoscalingPolicy(arg) {
  if (!(arg instanceof google_cloud_dataproc_v1_autoscaling_policies_pb.AutoscalingPolicy)) {
    throw new Error('Expected argument of type google.cloud.dataproc.v1.AutoscalingPolicy');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_dataproc_v1_AutoscalingPolicy(buffer_arg) {
  return google_cloud_dataproc_v1_autoscaling_policies_pb.AutoscalingPolicy.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_dataproc_v1_CreateAutoscalingPolicyRequest(arg) {
  if (!(arg instanceof google_cloud_dataproc_v1_autoscaling_policies_pb.CreateAutoscalingPolicyRequest)) {
    throw new Error('Expected argument of type google.cloud.dataproc.v1.CreateAutoscalingPolicyRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_dataproc_v1_CreateAutoscalingPolicyRequest(buffer_arg) {
  return google_cloud_dataproc_v1_autoscaling_policies_pb.CreateAutoscalingPolicyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_dataproc_v1_DeleteAutoscalingPolicyRequest(arg) {
  if (!(arg instanceof google_cloud_dataproc_v1_autoscaling_policies_pb.DeleteAutoscalingPolicyRequest)) {
    throw new Error('Expected argument of type google.cloud.dataproc.v1.DeleteAutoscalingPolicyRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_dataproc_v1_DeleteAutoscalingPolicyRequest(buffer_arg) {
  return google_cloud_dataproc_v1_autoscaling_policies_pb.DeleteAutoscalingPolicyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_dataproc_v1_GetAutoscalingPolicyRequest(arg) {
  if (!(arg instanceof google_cloud_dataproc_v1_autoscaling_policies_pb.GetAutoscalingPolicyRequest)) {
    throw new Error('Expected argument of type google.cloud.dataproc.v1.GetAutoscalingPolicyRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_dataproc_v1_GetAutoscalingPolicyRequest(buffer_arg) {
  return google_cloud_dataproc_v1_autoscaling_policies_pb.GetAutoscalingPolicyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_dataproc_v1_ListAutoscalingPoliciesRequest(arg) {
  if (!(arg instanceof google_cloud_dataproc_v1_autoscaling_policies_pb.ListAutoscalingPoliciesRequest)) {
    throw new Error('Expected argument of type google.cloud.dataproc.v1.ListAutoscalingPoliciesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_dataproc_v1_ListAutoscalingPoliciesRequest(buffer_arg) {
  return google_cloud_dataproc_v1_autoscaling_policies_pb.ListAutoscalingPoliciesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_dataproc_v1_ListAutoscalingPoliciesResponse(arg) {
  if (!(arg instanceof google_cloud_dataproc_v1_autoscaling_policies_pb.ListAutoscalingPoliciesResponse)) {
    throw new Error('Expected argument of type google.cloud.dataproc.v1.ListAutoscalingPoliciesResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_dataproc_v1_ListAutoscalingPoliciesResponse(buffer_arg) {
  return google_cloud_dataproc_v1_autoscaling_policies_pb.ListAutoscalingPoliciesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_dataproc_v1_UpdateAutoscalingPolicyRequest(arg) {
  if (!(arg instanceof google_cloud_dataproc_v1_autoscaling_policies_pb.UpdateAutoscalingPolicyRequest)) {
    throw new Error('Expected argument of type google.cloud.dataproc.v1.UpdateAutoscalingPolicyRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_dataproc_v1_UpdateAutoscalingPolicyRequest(buffer_arg) {
  return google_cloud_dataproc_v1_autoscaling_policies_pb.UpdateAutoscalingPolicyRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


// The API interface for managing autoscaling policies in the
// Google Cloud Dataproc API.
var AutoscalingPolicyServiceService = exports.AutoscalingPolicyServiceService = {
  // Creates new autoscaling policy.
  createAutoscalingPolicy: {
    path: '/google.cloud.dataproc.v1.AutoscalingPolicyService/CreateAutoscalingPolicy',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_dataproc_v1_autoscaling_policies_pb.CreateAutoscalingPolicyRequest,
    responseType: google_cloud_dataproc_v1_autoscaling_policies_pb.AutoscalingPolicy,
    requestSerialize: serialize_google_cloud_dataproc_v1_CreateAutoscalingPolicyRequest,
    requestDeserialize: deserialize_google_cloud_dataproc_v1_CreateAutoscalingPolicyRequest,
    responseSerialize: serialize_google_cloud_dataproc_v1_AutoscalingPolicy,
    responseDeserialize: deserialize_google_cloud_dataproc_v1_AutoscalingPolicy,
  },
  // Updates (replaces) autoscaling policy.
  //
  // Disabled check for update_mask, because all updates will be full
  // replacements.
  updateAutoscalingPolicy: {
    path: '/google.cloud.dataproc.v1.AutoscalingPolicyService/UpdateAutoscalingPolicy',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_dataproc_v1_autoscaling_policies_pb.UpdateAutoscalingPolicyRequest,
    responseType: google_cloud_dataproc_v1_autoscaling_policies_pb.AutoscalingPolicy,
    requestSerialize: serialize_google_cloud_dataproc_v1_UpdateAutoscalingPolicyRequest,
    requestDeserialize: deserialize_google_cloud_dataproc_v1_UpdateAutoscalingPolicyRequest,
    responseSerialize: serialize_google_cloud_dataproc_v1_AutoscalingPolicy,
    responseDeserialize: deserialize_google_cloud_dataproc_v1_AutoscalingPolicy,
  },
  // Retrieves autoscaling policy.
  getAutoscalingPolicy: {
    path: '/google.cloud.dataproc.v1.AutoscalingPolicyService/GetAutoscalingPolicy',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_dataproc_v1_autoscaling_policies_pb.GetAutoscalingPolicyRequest,
    responseType: google_cloud_dataproc_v1_autoscaling_policies_pb.AutoscalingPolicy,
    requestSerialize: serialize_google_cloud_dataproc_v1_GetAutoscalingPolicyRequest,
    requestDeserialize: deserialize_google_cloud_dataproc_v1_GetAutoscalingPolicyRequest,
    responseSerialize: serialize_google_cloud_dataproc_v1_AutoscalingPolicy,
    responseDeserialize: deserialize_google_cloud_dataproc_v1_AutoscalingPolicy,
  },
  // Lists autoscaling policies in the project.
  listAutoscalingPolicies: {
    path: '/google.cloud.dataproc.v1.AutoscalingPolicyService/ListAutoscalingPolicies',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_dataproc_v1_autoscaling_policies_pb.ListAutoscalingPoliciesRequest,
    responseType: google_cloud_dataproc_v1_autoscaling_policies_pb.ListAutoscalingPoliciesResponse,
    requestSerialize: serialize_google_cloud_dataproc_v1_ListAutoscalingPoliciesRequest,
    requestDeserialize: deserialize_google_cloud_dataproc_v1_ListAutoscalingPoliciesRequest,
    responseSerialize: serialize_google_cloud_dataproc_v1_ListAutoscalingPoliciesResponse,
    responseDeserialize: deserialize_google_cloud_dataproc_v1_ListAutoscalingPoliciesResponse,
  },
  // Deletes an autoscaling policy. It is an error to delete an autoscaling
  // policy that is in use by one or more clusters.
  deleteAutoscalingPolicy: {
    path: '/google.cloud.dataproc.v1.AutoscalingPolicyService/DeleteAutoscalingPolicy',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_dataproc_v1_autoscaling_policies_pb.DeleteAutoscalingPolicyRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_cloud_dataproc_v1_DeleteAutoscalingPolicyRequest,
    requestDeserialize: deserialize_google_cloud_dataproc_v1_DeleteAutoscalingPolicyRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.AutoscalingPolicyServiceClient = grpc.makeGenericClientConstructor(AutoscalingPolicyServiceService);
