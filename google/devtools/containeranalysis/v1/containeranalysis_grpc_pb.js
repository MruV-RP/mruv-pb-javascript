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
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_iam_v1_iam_policy_pb = require('../../../../google/iam/v1/iam_policy_pb.js');
var google_iam_v1_policy_pb = require('../../../../google/iam/v1/policy_pb.js');
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


// Retrieves analysis results of Cloud components such as Docker container
// images. The Container Analysis API is an implementation of the
// [Grafeas](https://grafeas.io) API.
//
// Analysis results are stored as a series of occurrences. An `Occurrence`
// contains information about a specific analysis instance on a resource. An
// occurrence refers to a `Note`. A note contains details describing the
// analysis and is generally stored in a separate project, called a `Provider`.
// Multiple occurrences can refer to the same note.
//
// For example, an SSL vulnerability could affect multiple images. In this case,
// there would be one note for the vulnerability and an occurrence for each
// image with the vulnerability referring to that note.
var ContainerAnalysisService = exports.ContainerAnalysisService = {
  // Sets the access control policy on the specified note or occurrence.
  // Requires `containeranalysis.notes.setIamPolicy` or
  // `containeranalysis.occurrences.setIamPolicy` permission if the resource is
  // a note or an occurrence, respectively.
  //
  // The resource takes the format `projects/[PROJECT_ID]/notes/[NOTE_ID]` for
  // notes and `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]` for
  // occurrences.
  setIamPolicy: {
    path: '/google.devtools.containeranalysis.v1.ContainerAnalysis/SetIamPolicy',
    requestStream: false,
    responseStream: false,
    requestType: google_iam_v1_iam_policy_pb.SetIamPolicyRequest,
    responseType: google_iam_v1_policy_pb.Policy,
    requestSerialize: serialize_google_iam_v1_SetIamPolicyRequest,
    requestDeserialize: deserialize_google_iam_v1_SetIamPolicyRequest,
    responseSerialize: serialize_google_iam_v1_Policy,
    responseDeserialize: deserialize_google_iam_v1_Policy,
  },
  // Gets the access control policy for a note or an occurrence resource.
  // Requires `containeranalysis.notes.setIamPolicy` or
  // `containeranalysis.occurrences.setIamPolicy` permission if the resource is
  // a note or occurrence, respectively.
  //
  // The resource takes the format `projects/[PROJECT_ID]/notes/[NOTE_ID]` for
  // notes and `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]` for
  // occurrences.
  getIamPolicy: {
    path: '/google.devtools.containeranalysis.v1.ContainerAnalysis/GetIamPolicy',
    requestStream: false,
    responseStream: false,
    requestType: google_iam_v1_iam_policy_pb.GetIamPolicyRequest,
    responseType: google_iam_v1_policy_pb.Policy,
    requestSerialize: serialize_google_iam_v1_GetIamPolicyRequest,
    requestDeserialize: deserialize_google_iam_v1_GetIamPolicyRequest,
    responseSerialize: serialize_google_iam_v1_Policy,
    responseDeserialize: deserialize_google_iam_v1_Policy,
  },
  // Returns the permissions that a caller has on the specified note or
  // occurrence. Requires list permission on the project (for example,
  // `containeranalysis.notes.list`).
  //
  // The resource takes the format `projects/[PROJECT_ID]/notes/[NOTE_ID]` for
  // notes and `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]` for
  // occurrences.
  testIamPermissions: {
    path: '/google.devtools.containeranalysis.v1.ContainerAnalysis/TestIamPermissions',
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

exports.ContainerAnalysisClient = grpc.makeGenericClientConstructor(ContainerAnalysisService);
