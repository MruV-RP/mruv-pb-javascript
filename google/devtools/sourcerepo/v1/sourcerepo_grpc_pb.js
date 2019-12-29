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
var google_devtools_sourcerepo_v1_sourcerepo_pb = require('../../../../google/devtools/sourcerepo/v1/sourcerepo_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_iam_v1_iam_policy_pb = require('../../../../google/iam/v1/iam_policy_pb.js');
var google_iam_v1_policy_pb = require('../../../../google/iam/v1/policy_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_google_devtools_sourcerepo_v1_CreateRepoRequest(arg) {
  if (!(arg instanceof google_devtools_sourcerepo_v1_sourcerepo_pb.CreateRepoRequest)) {
    throw new Error('Expected argument of type google.devtools.sourcerepo.v1.CreateRepoRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_sourcerepo_v1_CreateRepoRequest(buffer_arg) {
  return google_devtools_sourcerepo_v1_sourcerepo_pb.CreateRepoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_sourcerepo_v1_DeleteRepoRequest(arg) {
  if (!(arg instanceof google_devtools_sourcerepo_v1_sourcerepo_pb.DeleteRepoRequest)) {
    throw new Error('Expected argument of type google.devtools.sourcerepo.v1.DeleteRepoRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_sourcerepo_v1_DeleteRepoRequest(buffer_arg) {
  return google_devtools_sourcerepo_v1_sourcerepo_pb.DeleteRepoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_sourcerepo_v1_GetRepoRequest(arg) {
  if (!(arg instanceof google_devtools_sourcerepo_v1_sourcerepo_pb.GetRepoRequest)) {
    throw new Error('Expected argument of type google.devtools.sourcerepo.v1.GetRepoRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_sourcerepo_v1_GetRepoRequest(buffer_arg) {
  return google_devtools_sourcerepo_v1_sourcerepo_pb.GetRepoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_sourcerepo_v1_ListReposRequest(arg) {
  if (!(arg instanceof google_devtools_sourcerepo_v1_sourcerepo_pb.ListReposRequest)) {
    throw new Error('Expected argument of type google.devtools.sourcerepo.v1.ListReposRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_sourcerepo_v1_ListReposRequest(buffer_arg) {
  return google_devtools_sourcerepo_v1_sourcerepo_pb.ListReposRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_sourcerepo_v1_ListReposResponse(arg) {
  if (!(arg instanceof google_devtools_sourcerepo_v1_sourcerepo_pb.ListReposResponse)) {
    throw new Error('Expected argument of type google.devtools.sourcerepo.v1.ListReposResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_sourcerepo_v1_ListReposResponse(buffer_arg) {
  return google_devtools_sourcerepo_v1_sourcerepo_pb.ListReposResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_sourcerepo_v1_Repo(arg) {
  if (!(arg instanceof google_devtools_sourcerepo_v1_sourcerepo_pb.Repo)) {
    throw new Error('Expected argument of type google.devtools.sourcerepo.v1.Repo');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_sourcerepo_v1_Repo(buffer_arg) {
  return google_devtools_sourcerepo_v1_sourcerepo_pb.Repo.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}


// The Source Repo API service.
var SourceRepoService = exports.SourceRepoService = {
  // Returns all repos belonging to a project. The sizes of the repos are
  // not set by ListRepos.  To get the size of a repo, use GetRepo.
  listRepos: {
    path: '/google.devtools.sourcerepo.v1.SourceRepo/ListRepos',
    requestStream: false,
    responseStream: false,
    requestType: google_devtools_sourcerepo_v1_sourcerepo_pb.ListReposRequest,
    responseType: google_devtools_sourcerepo_v1_sourcerepo_pb.ListReposResponse,
    requestSerialize: serialize_google_devtools_sourcerepo_v1_ListReposRequest,
    requestDeserialize: deserialize_google_devtools_sourcerepo_v1_ListReposRequest,
    responseSerialize: serialize_google_devtools_sourcerepo_v1_ListReposResponse,
    responseDeserialize: deserialize_google_devtools_sourcerepo_v1_ListReposResponse,
  },
  // Returns information about a repo.
  getRepo: {
    path: '/google.devtools.sourcerepo.v1.SourceRepo/GetRepo',
    requestStream: false,
    responseStream: false,
    requestType: google_devtools_sourcerepo_v1_sourcerepo_pb.GetRepoRequest,
    responseType: google_devtools_sourcerepo_v1_sourcerepo_pb.Repo,
    requestSerialize: serialize_google_devtools_sourcerepo_v1_GetRepoRequest,
    requestDeserialize: deserialize_google_devtools_sourcerepo_v1_GetRepoRequest,
    responseSerialize: serialize_google_devtools_sourcerepo_v1_Repo,
    responseDeserialize: deserialize_google_devtools_sourcerepo_v1_Repo,
  },
  // Creates a repo in the given project with the given name.
  //
  // If the named repository already exists, `CreateRepo` returns
  // `ALREADY_EXISTS`.
  createRepo: {
    path: '/google.devtools.sourcerepo.v1.SourceRepo/CreateRepo',
    requestStream: false,
    responseStream: false,
    requestType: google_devtools_sourcerepo_v1_sourcerepo_pb.CreateRepoRequest,
    responseType: google_devtools_sourcerepo_v1_sourcerepo_pb.Repo,
    requestSerialize: serialize_google_devtools_sourcerepo_v1_CreateRepoRequest,
    requestDeserialize: deserialize_google_devtools_sourcerepo_v1_CreateRepoRequest,
    responseSerialize: serialize_google_devtools_sourcerepo_v1_Repo,
    responseDeserialize: deserialize_google_devtools_sourcerepo_v1_Repo,
  },
  // Deletes a repo.
  deleteRepo: {
    path: '/google.devtools.sourcerepo.v1.SourceRepo/DeleteRepo',
    requestStream: false,
    responseStream: false,
    requestType: google_devtools_sourcerepo_v1_sourcerepo_pb.DeleteRepoRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_devtools_sourcerepo_v1_DeleteRepoRequest,
    requestDeserialize: deserialize_google_devtools_sourcerepo_v1_DeleteRepoRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Sets the access control policy on the specified resource. Replaces any
  // existing policy.
  setIamPolicy: {
    path: '/google.devtools.sourcerepo.v1.SourceRepo/SetIamPolicy',
    requestStream: false,
    responseStream: false,
    requestType: google_iam_v1_iam_policy_pb.SetIamPolicyRequest,
    responseType: google_iam_v1_policy_pb.Policy,
    requestSerialize: serialize_google_iam_v1_SetIamPolicyRequest,
    requestDeserialize: deserialize_google_iam_v1_SetIamPolicyRequest,
    responseSerialize: serialize_google_iam_v1_Policy,
    responseDeserialize: deserialize_google_iam_v1_Policy,
  },
  // Gets the access control policy for a resource.
  // Returns an empty policy if the resource exists and does not have a policy
  // set.
  getIamPolicy: {
    path: '/google.devtools.sourcerepo.v1.SourceRepo/GetIamPolicy',
    requestStream: false,
    responseStream: false,
    requestType: google_iam_v1_iam_policy_pb.GetIamPolicyRequest,
    responseType: google_iam_v1_policy_pb.Policy,
    requestSerialize: serialize_google_iam_v1_GetIamPolicyRequest,
    requestDeserialize: deserialize_google_iam_v1_GetIamPolicyRequest,
    responseSerialize: serialize_google_iam_v1_Policy,
    responseDeserialize: deserialize_google_iam_v1_Policy,
  },
  // Returns permissions that a caller has on the specified resource.
  // If the resource does not exist, this will return an empty set of
  // permissions, not a NOT_FOUND error.
  testIamPermissions: {
    path: '/google.devtools.sourcerepo.v1.SourceRepo/TestIamPermissions',
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

exports.SourceRepoClient = grpc.makeGenericClientConstructor(SourceRepoService);
