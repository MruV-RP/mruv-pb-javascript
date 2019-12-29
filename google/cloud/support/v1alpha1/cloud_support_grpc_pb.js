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
var google_cloud_support_v1alpha1_cloud_support_pb = require('../../../../google/cloud/support/v1alpha1/cloud_support_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_cloud_support_common_pb = require('../../../../google/cloud/support/common_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');

function serialize_google_cloud_support_common_Case(arg) {
  if (!(arg instanceof google_cloud_support_common_pb.Case)) {
    throw new Error('Expected argument of type google.cloud.support.common.Case');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_support_common_Case(buffer_arg) {
  return google_cloud_support_common_pb.Case.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_support_common_Comment(arg) {
  if (!(arg instanceof google_cloud_support_common_pb.Comment)) {
    throw new Error('Expected argument of type google.cloud.support.common.Comment');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_support_common_Comment(buffer_arg) {
  return google_cloud_support_common_pb.Comment.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_support_common_IssueTaxonomy(arg) {
  if (!(arg instanceof google_cloud_support_common_pb.IssueTaxonomy)) {
    throw new Error('Expected argument of type google.cloud.support.common.IssueTaxonomy');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_support_common_IssueTaxonomy(buffer_arg) {
  return google_cloud_support_common_pb.IssueTaxonomy.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_support_common_SupportAccount(arg) {
  if (!(arg instanceof google_cloud_support_common_pb.SupportAccount)) {
    throw new Error('Expected argument of type google.cloud.support.common.SupportAccount');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_support_common_SupportAccount(buffer_arg) {
  return google_cloud_support_common_pb.SupportAccount.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_support_v1alpha1_CreateCaseRequest(arg) {
  if (!(arg instanceof google_cloud_support_v1alpha1_cloud_support_pb.CreateCaseRequest)) {
    throw new Error('Expected argument of type google.cloud.support.v1alpha1.CreateCaseRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_support_v1alpha1_CreateCaseRequest(buffer_arg) {
  return google_cloud_support_v1alpha1_cloud_support_pb.CreateCaseRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_support_v1alpha1_CreateCommentRequest(arg) {
  if (!(arg instanceof google_cloud_support_v1alpha1_cloud_support_pb.CreateCommentRequest)) {
    throw new Error('Expected argument of type google.cloud.support.v1alpha1.CreateCommentRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_support_v1alpha1_CreateCommentRequest(buffer_arg) {
  return google_cloud_support_v1alpha1_cloud_support_pb.CreateCommentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_support_v1alpha1_GetCaseRequest(arg) {
  if (!(arg instanceof google_cloud_support_v1alpha1_cloud_support_pb.GetCaseRequest)) {
    throw new Error('Expected argument of type google.cloud.support.v1alpha1.GetCaseRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_support_v1alpha1_GetCaseRequest(buffer_arg) {
  return google_cloud_support_v1alpha1_cloud_support_pb.GetCaseRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_support_v1alpha1_GetIssueTaxonomyRequest(arg) {
  if (!(arg instanceof google_cloud_support_v1alpha1_cloud_support_pb.GetIssueTaxonomyRequest)) {
    throw new Error('Expected argument of type google.cloud.support.v1alpha1.GetIssueTaxonomyRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_support_v1alpha1_GetIssueTaxonomyRequest(buffer_arg) {
  return google_cloud_support_v1alpha1_cloud_support_pb.GetIssueTaxonomyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_support_v1alpha1_GetSupportAccountRequest(arg) {
  if (!(arg instanceof google_cloud_support_v1alpha1_cloud_support_pb.GetSupportAccountRequest)) {
    throw new Error('Expected argument of type google.cloud.support.v1alpha1.GetSupportAccountRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_support_v1alpha1_GetSupportAccountRequest(buffer_arg) {
  return google_cloud_support_v1alpha1_cloud_support_pb.GetSupportAccountRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_support_v1alpha1_ListCasesRequest(arg) {
  if (!(arg instanceof google_cloud_support_v1alpha1_cloud_support_pb.ListCasesRequest)) {
    throw new Error('Expected argument of type google.cloud.support.v1alpha1.ListCasesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_support_v1alpha1_ListCasesRequest(buffer_arg) {
  return google_cloud_support_v1alpha1_cloud_support_pb.ListCasesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_support_v1alpha1_ListCasesResponse(arg) {
  if (!(arg instanceof google_cloud_support_v1alpha1_cloud_support_pb.ListCasesResponse)) {
    throw new Error('Expected argument of type google.cloud.support.v1alpha1.ListCasesResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_support_v1alpha1_ListCasesResponse(buffer_arg) {
  return google_cloud_support_v1alpha1_cloud_support_pb.ListCasesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_support_v1alpha1_ListCommentsRequest(arg) {
  if (!(arg instanceof google_cloud_support_v1alpha1_cloud_support_pb.ListCommentsRequest)) {
    throw new Error('Expected argument of type google.cloud.support.v1alpha1.ListCommentsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_support_v1alpha1_ListCommentsRequest(buffer_arg) {
  return google_cloud_support_v1alpha1_cloud_support_pb.ListCommentsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_support_v1alpha1_ListCommentsResponse(arg) {
  if (!(arg instanceof google_cloud_support_v1alpha1_cloud_support_pb.ListCommentsResponse)) {
    throw new Error('Expected argument of type google.cloud.support.v1alpha1.ListCommentsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_support_v1alpha1_ListCommentsResponse(buffer_arg) {
  return google_cloud_support_v1alpha1_cloud_support_pb.ListCommentsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_support_v1alpha1_ListSupportAccountsRequest(arg) {
  if (!(arg instanceof google_cloud_support_v1alpha1_cloud_support_pb.ListSupportAccountsRequest)) {
    throw new Error('Expected argument of type google.cloud.support.v1alpha1.ListSupportAccountsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_support_v1alpha1_ListSupportAccountsRequest(buffer_arg) {
  return google_cloud_support_v1alpha1_cloud_support_pb.ListSupportAccountsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_support_v1alpha1_ListSupportAccountsResponse(arg) {
  if (!(arg instanceof google_cloud_support_v1alpha1_cloud_support_pb.ListSupportAccountsResponse)) {
    throw new Error('Expected argument of type google.cloud.support.v1alpha1.ListSupportAccountsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_support_v1alpha1_ListSupportAccountsResponse(buffer_arg) {
  return google_cloud_support_v1alpha1_cloud_support_pb.ListSupportAccountsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_support_v1alpha1_UpdateCaseRequest(arg) {
  if (!(arg instanceof google_cloud_support_v1alpha1_cloud_support_pb.UpdateCaseRequest)) {
    throw new Error('Expected argument of type google.cloud.support.v1alpha1.UpdateCaseRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_support_v1alpha1_UpdateCaseRequest(buffer_arg) {
  return google_cloud_support_v1alpha1_cloud_support_pb.UpdateCaseRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// Retrieves the list of Google Cloud Platform Support accounts and manages
// support cases associated with them.
var CloudSupportService = exports.CloudSupportService = {
  // Retrieves the support account details given an account identifier.
  // The authenticated user calling this method must be the account owner.
  getSupportAccount: {
    path: '/google.cloud.support.v1alpha1.CloudSupport/GetSupportAccount',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_support_v1alpha1_cloud_support_pb.GetSupportAccountRequest,
    responseType: google_cloud_support_common_pb.SupportAccount,
    requestSerialize: serialize_google_cloud_support_v1alpha1_GetSupportAccountRequest,
    requestDeserialize: deserialize_google_cloud_support_v1alpha1_GetSupportAccountRequest,
    responseSerialize: serialize_google_cloud_support_common_SupportAccount,
    responseDeserialize: deserialize_google_cloud_support_common_SupportAccount,
  },
  // Retrieves the list of accounts the current authenticated user has access
  // to.
  listSupportAccounts: {
    path: '/google.cloud.support.v1alpha1.CloudSupport/ListSupportAccounts',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_support_v1alpha1_cloud_support_pb.ListSupportAccountsRequest,
    responseType: google_cloud_support_v1alpha1_cloud_support_pb.ListSupportAccountsResponse,
    requestSerialize: serialize_google_cloud_support_v1alpha1_ListSupportAccountsRequest,
    requestDeserialize: deserialize_google_cloud_support_v1alpha1_ListSupportAccountsRequest,
    responseSerialize: serialize_google_cloud_support_v1alpha1_ListSupportAccountsResponse,
    responseDeserialize: deserialize_google_cloud_support_v1alpha1_ListSupportAccountsResponse,
  },
  // Retrieves the details for a support case. The current authenticated user
  // calling this method must have permissions to view this case.
  getCase: {
    path: '/google.cloud.support.v1alpha1.CloudSupport/GetCase',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_support_v1alpha1_cloud_support_pb.GetCaseRequest,
    responseType: google_cloud_support_common_pb.Case,
    requestSerialize: serialize_google_cloud_support_v1alpha1_GetCaseRequest,
    requestDeserialize: deserialize_google_cloud_support_v1alpha1_GetCaseRequest,
    responseSerialize: serialize_google_cloud_support_common_Case,
    responseDeserialize: deserialize_google_cloud_support_common_Case,
  },
  // Retrieves the list of support cases associated with an account. The current
  // authenticated user must have the permission to list and view these cases.
  listCases: {
    path: '/google.cloud.support.v1alpha1.CloudSupport/ListCases',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_support_v1alpha1_cloud_support_pb.ListCasesRequest,
    responseType: google_cloud_support_v1alpha1_cloud_support_pb.ListCasesResponse,
    requestSerialize: serialize_google_cloud_support_v1alpha1_ListCasesRequest,
    requestDeserialize: deserialize_google_cloud_support_v1alpha1_ListCasesRequest,
    responseSerialize: serialize_google_cloud_support_v1alpha1_ListCasesResponse,
    responseDeserialize: deserialize_google_cloud_support_v1alpha1_ListCasesResponse,
  },
  // Lists all comments from a case.
  listComments: {
    path: '/google.cloud.support.v1alpha1.CloudSupport/ListComments',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_support_v1alpha1_cloud_support_pb.ListCommentsRequest,
    responseType: google_cloud_support_v1alpha1_cloud_support_pb.ListCommentsResponse,
    requestSerialize: serialize_google_cloud_support_v1alpha1_ListCommentsRequest,
    requestDeserialize: deserialize_google_cloud_support_v1alpha1_ListCommentsRequest,
    responseSerialize: serialize_google_cloud_support_v1alpha1_ListCommentsResponse,
    responseDeserialize: deserialize_google_cloud_support_v1alpha1_ListCommentsResponse,
  },
  // Creates a case and associates it with a
  // [SupportAccount][google.cloud.support.v1alpha2.SupportAcccount]. The
  // authenticated user attempting this action must have permissions to create a
  // `Case` under that [SupportAccount].
  createCase: {
    path: '/google.cloud.support.v1alpha1.CloudSupport/CreateCase',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_support_v1alpha1_cloud_support_pb.CreateCaseRequest,
    responseType: google_cloud_support_common_pb.Case,
    requestSerialize: serialize_google_cloud_support_v1alpha1_CreateCaseRequest,
    requestDeserialize: deserialize_google_cloud_support_v1alpha1_CreateCaseRequest,
    responseSerialize: serialize_google_cloud_support_common_Case,
    responseDeserialize: deserialize_google_cloud_support_common_Case,
  },
  // Updates a support case. Only a small set of details (priority, subject and
  // cc_address) can be update after a case is created.
  updateCase: {
    path: '/google.cloud.support.v1alpha1.CloudSupport/UpdateCase',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_support_v1alpha1_cloud_support_pb.UpdateCaseRequest,
    responseType: google_cloud_support_common_pb.Case,
    requestSerialize: serialize_google_cloud_support_v1alpha1_UpdateCaseRequest,
    requestDeserialize: deserialize_google_cloud_support_v1alpha1_UpdateCaseRequest,
    responseSerialize: serialize_google_cloud_support_common_Case,
    responseDeserialize: deserialize_google_cloud_support_common_Case,
  },
  // Adds a new comment to a case.
  createComment: {
    path: '/google.cloud.support.v1alpha1.CloudSupport/CreateComment',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_support_v1alpha1_cloud_support_pb.CreateCommentRequest,
    responseType: google_cloud_support_common_pb.Comment,
    requestSerialize: serialize_google_cloud_support_v1alpha1_CreateCommentRequest,
    requestDeserialize: deserialize_google_cloud_support_v1alpha1_CreateCommentRequest,
    responseSerialize: serialize_google_cloud_support_common_Comment,
    responseDeserialize: deserialize_google_cloud_support_common_Comment,
  },
  // Retrieves the taxonomy of product categories and components to be used
  // while creating a support case.
  getIssueTaxonomy: {
    path: '/google.cloud.support.v1alpha1.CloudSupport/GetIssueTaxonomy',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_support_v1alpha1_cloud_support_pb.GetIssueTaxonomyRequest,
    responseType: google_cloud_support_common_pb.IssueTaxonomy,
    requestSerialize: serialize_google_cloud_support_v1alpha1_GetIssueTaxonomyRequest,
    requestDeserialize: deserialize_google_cloud_support_v1alpha1_GetIssueTaxonomyRequest,
    responseSerialize: serialize_google_cloud_support_common_IssueTaxonomy,
    responseDeserialize: deserialize_google_cloud_support_common_IssueTaxonomy,
  },
};

exports.CloudSupportClient = grpc.makeGenericClientConstructor(CloudSupportService);
