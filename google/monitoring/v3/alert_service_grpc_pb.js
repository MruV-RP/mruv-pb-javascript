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
var google_monitoring_v3_alert_service_pb = require('../../../google/monitoring/v3/alert_service_pb.js');
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
var google_monitoring_v3_alert_pb = require('../../../google/monitoring/v3/alert_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_api_client_pb = require('../../../google/api/client_pb.js');

function serialize_google_monitoring_v3_AlertPolicy(arg) {
  if (!(arg instanceof google_monitoring_v3_alert_pb.AlertPolicy)) {
    throw new Error('Expected argument of type google.monitoring.v3.AlertPolicy');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_monitoring_v3_AlertPolicy(buffer_arg) {
  return google_monitoring_v3_alert_pb.AlertPolicy.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_monitoring_v3_CreateAlertPolicyRequest(arg) {
  if (!(arg instanceof google_monitoring_v3_alert_service_pb.CreateAlertPolicyRequest)) {
    throw new Error('Expected argument of type google.monitoring.v3.CreateAlertPolicyRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_monitoring_v3_CreateAlertPolicyRequest(buffer_arg) {
  return google_monitoring_v3_alert_service_pb.CreateAlertPolicyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_monitoring_v3_DeleteAlertPolicyRequest(arg) {
  if (!(arg instanceof google_monitoring_v3_alert_service_pb.DeleteAlertPolicyRequest)) {
    throw new Error('Expected argument of type google.monitoring.v3.DeleteAlertPolicyRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_monitoring_v3_DeleteAlertPolicyRequest(buffer_arg) {
  return google_monitoring_v3_alert_service_pb.DeleteAlertPolicyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_monitoring_v3_GetAlertPolicyRequest(arg) {
  if (!(arg instanceof google_monitoring_v3_alert_service_pb.GetAlertPolicyRequest)) {
    throw new Error('Expected argument of type google.monitoring.v3.GetAlertPolicyRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_monitoring_v3_GetAlertPolicyRequest(buffer_arg) {
  return google_monitoring_v3_alert_service_pb.GetAlertPolicyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_monitoring_v3_ListAlertPoliciesRequest(arg) {
  if (!(arg instanceof google_monitoring_v3_alert_service_pb.ListAlertPoliciesRequest)) {
    throw new Error('Expected argument of type google.monitoring.v3.ListAlertPoliciesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_monitoring_v3_ListAlertPoliciesRequest(buffer_arg) {
  return google_monitoring_v3_alert_service_pb.ListAlertPoliciesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_monitoring_v3_ListAlertPoliciesResponse(arg) {
  if (!(arg instanceof google_monitoring_v3_alert_service_pb.ListAlertPoliciesResponse)) {
    throw new Error('Expected argument of type google.monitoring.v3.ListAlertPoliciesResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_monitoring_v3_ListAlertPoliciesResponse(buffer_arg) {
  return google_monitoring_v3_alert_service_pb.ListAlertPoliciesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_monitoring_v3_UpdateAlertPolicyRequest(arg) {
  if (!(arg instanceof google_monitoring_v3_alert_service_pb.UpdateAlertPolicyRequest)) {
    throw new Error('Expected argument of type google.monitoring.v3.UpdateAlertPolicyRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_monitoring_v3_UpdateAlertPolicyRequest(buffer_arg) {
  return google_monitoring_v3_alert_service_pb.UpdateAlertPolicyRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


// The AlertPolicyService API is used to manage (list, create, delete,
// edit) alert policies in Stackdriver Monitoring. An alerting policy is
// a description of the conditions under which some aspect of your
// system is considered to be "unhealthy" and the ways to notify
// people or services about this state. In addition to using this API, alert
// policies can also be managed through
// [Stackdriver Monitoring](https://cloud.google.com/monitoring/docs/),
// which can be reached by clicking the "Monitoring" tab in
// [Cloud Console](https://console.cloud.google.com/).
var AlertPolicyServiceService = exports.AlertPolicyServiceService = {
  // Lists the existing alerting policies for the project.
  listAlertPolicies: {
    path: '/google.monitoring.v3.AlertPolicyService/ListAlertPolicies',
    requestStream: false,
    responseStream: false,
    requestType: google_monitoring_v3_alert_service_pb.ListAlertPoliciesRequest,
    responseType: google_monitoring_v3_alert_service_pb.ListAlertPoliciesResponse,
    requestSerialize: serialize_google_monitoring_v3_ListAlertPoliciesRequest,
    requestDeserialize: deserialize_google_monitoring_v3_ListAlertPoliciesRequest,
    responseSerialize: serialize_google_monitoring_v3_ListAlertPoliciesResponse,
    responseDeserialize: deserialize_google_monitoring_v3_ListAlertPoliciesResponse,
  },
  // Gets a single alerting policy.
  getAlertPolicy: {
    path: '/google.monitoring.v3.AlertPolicyService/GetAlertPolicy',
    requestStream: false,
    responseStream: false,
    requestType: google_monitoring_v3_alert_service_pb.GetAlertPolicyRequest,
    responseType: google_monitoring_v3_alert_pb.AlertPolicy,
    requestSerialize: serialize_google_monitoring_v3_GetAlertPolicyRequest,
    requestDeserialize: deserialize_google_monitoring_v3_GetAlertPolicyRequest,
    responseSerialize: serialize_google_monitoring_v3_AlertPolicy,
    responseDeserialize: deserialize_google_monitoring_v3_AlertPolicy,
  },
  // Creates a new alerting policy.
  createAlertPolicy: {
    path: '/google.monitoring.v3.AlertPolicyService/CreateAlertPolicy',
    requestStream: false,
    responseStream: false,
    requestType: google_monitoring_v3_alert_service_pb.CreateAlertPolicyRequest,
    responseType: google_monitoring_v3_alert_pb.AlertPolicy,
    requestSerialize: serialize_google_monitoring_v3_CreateAlertPolicyRequest,
    requestDeserialize: deserialize_google_monitoring_v3_CreateAlertPolicyRequest,
    responseSerialize: serialize_google_monitoring_v3_AlertPolicy,
    responseDeserialize: deserialize_google_monitoring_v3_AlertPolicy,
  },
  // Deletes an alerting policy.
  deleteAlertPolicy: {
    path: '/google.monitoring.v3.AlertPolicyService/DeleteAlertPolicy',
    requestStream: false,
    responseStream: false,
    requestType: google_monitoring_v3_alert_service_pb.DeleteAlertPolicyRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_monitoring_v3_DeleteAlertPolicyRequest,
    requestDeserialize: deserialize_google_monitoring_v3_DeleteAlertPolicyRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Updates an alerting policy. You can either replace the entire policy with
  // a new one or replace only certain fields in the current alerting policy by
  // specifying the fields to be updated via `updateMask`. Returns the
  // updated alerting policy.
  updateAlertPolicy: {
    path: '/google.monitoring.v3.AlertPolicyService/UpdateAlertPolicy',
    requestStream: false,
    responseStream: false,
    requestType: google_monitoring_v3_alert_service_pb.UpdateAlertPolicyRequest,
    responseType: google_monitoring_v3_alert_pb.AlertPolicy,
    requestSerialize: serialize_google_monitoring_v3_UpdateAlertPolicyRequest,
    requestDeserialize: deserialize_google_monitoring_v3_UpdateAlertPolicyRequest,
    responseSerialize: serialize_google_monitoring_v3_AlertPolicy,
    responseDeserialize: deserialize_google_monitoring_v3_AlertPolicy,
  },
};

exports.AlertPolicyServiceClient = grpc.makeGenericClientConstructor(AlertPolicyServiceService);
