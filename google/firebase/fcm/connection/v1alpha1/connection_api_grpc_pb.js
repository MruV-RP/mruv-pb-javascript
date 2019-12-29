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
var google_firebase_fcm_connection_v1alpha1_connection_api_pb = require('../../../../../google/firebase/fcm/connection/v1alpha1/connection_api_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_google_firebase_fcm_connection_v1alpha1_DownstreamResponse(arg) {
  if (!(arg instanceof google_firebase_fcm_connection_v1alpha1_connection_api_pb.DownstreamResponse)) {
    throw new Error('Expected argument of type google.firebase.fcm.connection.v1alpha1.DownstreamResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_firebase_fcm_connection_v1alpha1_DownstreamResponse(buffer_arg) {
  return google_firebase_fcm_connection_v1alpha1_connection_api_pb.DownstreamResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_firebase_fcm_connection_v1alpha1_UpstreamRequest(arg) {
  if (!(arg instanceof google_firebase_fcm_connection_v1alpha1_connection_api_pb.UpstreamRequest)) {
    throw new Error('Expected argument of type google.firebase.fcm.connection.v1alpha1.UpstreamRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_firebase_fcm_connection_v1alpha1_UpstreamRequest(buffer_arg) {
  return google_firebase_fcm_connection_v1alpha1_connection_api_pb.UpstreamRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// FCM's service to create client connections to send/receive messages.
var ConnectionApiService = exports.ConnectionApiService = {
  // Creates a streaming connection with FCM to send messages and their
  // respective ACKs.
  //
  // The client credentials need to be passed in the [gRPC
  // Metadata](https://grpc.io/docs/guides/concepts.html#metadata). The Format
  // of the header is:
  //   Key: "authorization"
  //   Value: "Checkin [client_id:secret]"
  //
  //
  // The project's API key also needs to be sent to authorize the project.
  // That can be set in the X-Goog-Api-Key Metadata header.
  connect: {
    path: '/google.firebase.fcm.connection.v1alpha1.ConnectionApi/Connect',
    requestStream: true,
    responseStream: true,
    requestType: google_firebase_fcm_connection_v1alpha1_connection_api_pb.UpstreamRequest,
    responseType: google_firebase_fcm_connection_v1alpha1_connection_api_pb.DownstreamResponse,
    requestSerialize: serialize_google_firebase_fcm_connection_v1alpha1_UpstreamRequest,
    requestDeserialize: deserialize_google_firebase_fcm_connection_v1alpha1_UpstreamRequest,
    responseSerialize: serialize_google_firebase_fcm_connection_v1alpha1_DownstreamResponse,
    responseDeserialize: deserialize_google_firebase_fcm_connection_v1alpha1_DownstreamResponse,
  },
};

exports.ConnectionApiClient = grpc.makeGenericClientConstructor(ConnectionApiService);
