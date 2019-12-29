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
var google_cloud_talent_v4beta1_event_service_pb = require('../../../../google/cloud/talent/v4beta1/event_service_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_api_client_pb = require('../../../../google/api/client_pb.js');
var google_api_field_behavior_pb = require('../../../../google/api/field_behavior_pb.js');
var google_cloud_talent_v4beta1_event_pb = require('../../../../google/cloud/talent/v4beta1/event_pb.js');

function serialize_google_cloud_talent_v4beta1_ClientEvent(arg) {
  if (!(arg instanceof google_cloud_talent_v4beta1_event_pb.ClientEvent)) {
    throw new Error('Expected argument of type google.cloud.talent.v4beta1.ClientEvent');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_talent_v4beta1_ClientEvent(buffer_arg) {
  return google_cloud_talent_v4beta1_event_pb.ClientEvent.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_talent_v4beta1_CreateClientEventRequest(arg) {
  if (!(arg instanceof google_cloud_talent_v4beta1_event_service_pb.CreateClientEventRequest)) {
    throw new Error('Expected argument of type google.cloud.talent.v4beta1.CreateClientEventRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_talent_v4beta1_CreateClientEventRequest(buffer_arg) {
  return google_cloud_talent_v4beta1_event_service_pb.CreateClientEventRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// A service handles client event report.
var EventServiceService = exports.EventServiceService = {
  // Report events issued when end user interacts with customer's application
  // that uses Cloud Talent Solution. You may inspect the created events in
  // [self service
  // tools](https://console.cloud.google.com/talent-solution/overview).
  // [Learn
  // more](https://cloud.google.com/talent-solution/docs/management-tools)
  // about self service tools.
  createClientEvent: {
    path: '/google.cloud.talent.v4beta1.EventService/CreateClientEvent',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_talent_v4beta1_event_service_pb.CreateClientEventRequest,
    responseType: google_cloud_talent_v4beta1_event_pb.ClientEvent,
    requestSerialize: serialize_google_cloud_talent_v4beta1_CreateClientEventRequest,
    requestDeserialize: deserialize_google_cloud_talent_v4beta1_CreateClientEventRequest,
    responseSerialize: serialize_google_cloud_talent_v4beta1_ClientEvent,
    responseDeserialize: deserialize_google_cloud_talent_v4beta1_ClientEvent,
  },
};

exports.EventServiceClient = grpc.makeGenericClientConstructor(EventServiceService);
