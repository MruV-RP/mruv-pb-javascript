// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright 2016 Google Inc.
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
var google_cloud_billing_v1_cloud_billing_pb = require('../../../../google/cloud/billing/v1/cloud_billing_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');

function serialize_google_cloud_billing_v1_BillingAccount(arg) {
  if (!(arg instanceof google_cloud_billing_v1_cloud_billing_pb.BillingAccount)) {
    throw new Error('Expected argument of type google.cloud.billing.v1.BillingAccount');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_billing_v1_BillingAccount(buffer_arg) {
  return google_cloud_billing_v1_cloud_billing_pb.BillingAccount.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_billing_v1_GetBillingAccountRequest(arg) {
  if (!(arg instanceof google_cloud_billing_v1_cloud_billing_pb.GetBillingAccountRequest)) {
    throw new Error('Expected argument of type google.cloud.billing.v1.GetBillingAccountRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_billing_v1_GetBillingAccountRequest(buffer_arg) {
  return google_cloud_billing_v1_cloud_billing_pb.GetBillingAccountRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_billing_v1_GetProjectBillingInfoRequest(arg) {
  if (!(arg instanceof google_cloud_billing_v1_cloud_billing_pb.GetProjectBillingInfoRequest)) {
    throw new Error('Expected argument of type google.cloud.billing.v1.GetProjectBillingInfoRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_billing_v1_GetProjectBillingInfoRequest(buffer_arg) {
  return google_cloud_billing_v1_cloud_billing_pb.GetProjectBillingInfoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_billing_v1_ListBillingAccountsRequest(arg) {
  if (!(arg instanceof google_cloud_billing_v1_cloud_billing_pb.ListBillingAccountsRequest)) {
    throw new Error('Expected argument of type google.cloud.billing.v1.ListBillingAccountsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_billing_v1_ListBillingAccountsRequest(buffer_arg) {
  return google_cloud_billing_v1_cloud_billing_pb.ListBillingAccountsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_billing_v1_ListBillingAccountsResponse(arg) {
  if (!(arg instanceof google_cloud_billing_v1_cloud_billing_pb.ListBillingAccountsResponse)) {
    throw new Error('Expected argument of type google.cloud.billing.v1.ListBillingAccountsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_billing_v1_ListBillingAccountsResponse(buffer_arg) {
  return google_cloud_billing_v1_cloud_billing_pb.ListBillingAccountsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_billing_v1_ListProjectBillingInfoRequest(arg) {
  if (!(arg instanceof google_cloud_billing_v1_cloud_billing_pb.ListProjectBillingInfoRequest)) {
    throw new Error('Expected argument of type google.cloud.billing.v1.ListProjectBillingInfoRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_billing_v1_ListProjectBillingInfoRequest(buffer_arg) {
  return google_cloud_billing_v1_cloud_billing_pb.ListProjectBillingInfoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_billing_v1_ListProjectBillingInfoResponse(arg) {
  if (!(arg instanceof google_cloud_billing_v1_cloud_billing_pb.ListProjectBillingInfoResponse)) {
    throw new Error('Expected argument of type google.cloud.billing.v1.ListProjectBillingInfoResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_billing_v1_ListProjectBillingInfoResponse(buffer_arg) {
  return google_cloud_billing_v1_cloud_billing_pb.ListProjectBillingInfoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_billing_v1_ProjectBillingInfo(arg) {
  if (!(arg instanceof google_cloud_billing_v1_cloud_billing_pb.ProjectBillingInfo)) {
    throw new Error('Expected argument of type google.cloud.billing.v1.ProjectBillingInfo');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_billing_v1_ProjectBillingInfo(buffer_arg) {
  return google_cloud_billing_v1_cloud_billing_pb.ProjectBillingInfo.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_billing_v1_UpdateProjectBillingInfoRequest(arg) {
  if (!(arg instanceof google_cloud_billing_v1_cloud_billing_pb.UpdateProjectBillingInfoRequest)) {
    throw new Error('Expected argument of type google.cloud.billing.v1.UpdateProjectBillingInfoRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_billing_v1_UpdateProjectBillingInfoRequest(buffer_arg) {
  return google_cloud_billing_v1_cloud_billing_pb.UpdateProjectBillingInfoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// Retrieves Google Cloud Console billing accounts and associates them with
// projects.
var CloudBillingService = exports.CloudBillingService = {
  // Gets information about a billing account. The current authenticated user
  // must be an [owner of the billing
  // account](https://support.google.com/cloud/answer/4430947).
  getBillingAccount: {
    path: '/google.cloud.billing.v1.CloudBilling/GetBillingAccount',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_billing_v1_cloud_billing_pb.GetBillingAccountRequest,
    responseType: google_cloud_billing_v1_cloud_billing_pb.BillingAccount,
    requestSerialize: serialize_google_cloud_billing_v1_GetBillingAccountRequest,
    requestDeserialize: deserialize_google_cloud_billing_v1_GetBillingAccountRequest,
    responseSerialize: serialize_google_cloud_billing_v1_BillingAccount,
    responseDeserialize: deserialize_google_cloud_billing_v1_BillingAccount,
  },
  // Lists the billing accounts that the current authenticated user
  // [owns](https://support.google.com/cloud/answer/4430947).
  listBillingAccounts: {
    path: '/google.cloud.billing.v1.CloudBilling/ListBillingAccounts',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_billing_v1_cloud_billing_pb.ListBillingAccountsRequest,
    responseType: google_cloud_billing_v1_cloud_billing_pb.ListBillingAccountsResponse,
    requestSerialize: serialize_google_cloud_billing_v1_ListBillingAccountsRequest,
    requestDeserialize: deserialize_google_cloud_billing_v1_ListBillingAccountsRequest,
    responseSerialize: serialize_google_cloud_billing_v1_ListBillingAccountsResponse,
    responseDeserialize: deserialize_google_cloud_billing_v1_ListBillingAccountsResponse,
  },
  // Lists the projects associated with a billing account. The current
  // authenticated user must be an [owner of the billing
  // account](https://support.google.com/cloud/answer/4430947).
  listProjectBillingInfo: {
    path: '/google.cloud.billing.v1.CloudBilling/ListProjectBillingInfo',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_billing_v1_cloud_billing_pb.ListProjectBillingInfoRequest,
    responseType: google_cloud_billing_v1_cloud_billing_pb.ListProjectBillingInfoResponse,
    requestSerialize: serialize_google_cloud_billing_v1_ListProjectBillingInfoRequest,
    requestDeserialize: deserialize_google_cloud_billing_v1_ListProjectBillingInfoRequest,
    responseSerialize: serialize_google_cloud_billing_v1_ListProjectBillingInfoResponse,
    responseDeserialize: deserialize_google_cloud_billing_v1_ListProjectBillingInfoResponse,
  },
  // Gets the billing information for a project. The current authenticated user
  // must have [permission to view the
  // project](https://cloud.google.com/docs/permissions-overview#h.bgs0oxofvnoo
  // ).
  getProjectBillingInfo: {
    path: '/google.cloud.billing.v1.CloudBilling/GetProjectBillingInfo',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_billing_v1_cloud_billing_pb.GetProjectBillingInfoRequest,
    responseType: google_cloud_billing_v1_cloud_billing_pb.ProjectBillingInfo,
    requestSerialize: serialize_google_cloud_billing_v1_GetProjectBillingInfoRequest,
    requestDeserialize: deserialize_google_cloud_billing_v1_GetProjectBillingInfoRequest,
    responseSerialize: serialize_google_cloud_billing_v1_ProjectBillingInfo,
    responseDeserialize: deserialize_google_cloud_billing_v1_ProjectBillingInfo,
  },
  // Sets or updates the billing account associated with a project. You specify
  // the new billing account by setting the `billing_account_name` in the
  // `ProjectBillingInfo` resource to the resource name of a billing account.
  // Associating a project with an open billing account enables billing on the
  // project and allows charges for resource usage. If the project already had a
  // billing account, this method changes the billing account used for resource
  // usage charges.
  //
  // *Note:* Incurred charges that have not yet been reported in the transaction
  // history of the Google Cloud Console may be billed to the new billing
  // account, even if the charge occurred before the new billing account was
  // assigned to the project.
  //
  // The current authenticated user must have ownership privileges for both the
  // [project](https://cloud.google.com/docs/permissions-overview#h.bgs0oxofvnoo
  // ) and the [billing
  // account](https://support.google.com/cloud/answer/4430947).
  //
  // You can disable billing on the project by setting the
  // `billing_account_name` field to empty. This action disassociates the
  // current billing account from the project. Any billable activity of your
  // in-use services will stop, and your application could stop functioning as
  // expected. Any unbilled charges to date will be billed to the previously
  // associated account. The current authenticated user must be either an owner
  // of the project or an owner of the billing account for the project.
  //
  // Note that associating a project with a *closed* billing account will have
  // much the same effect as disabling billing on the project: any paid
  // resources used by the project will be shut down. Thus, unless you wish to
  // disable billing, you should always call this method with the name of an
  // *open* billing account.
  updateProjectBillingInfo: {
    path: '/google.cloud.billing.v1.CloudBilling/UpdateProjectBillingInfo',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_billing_v1_cloud_billing_pb.UpdateProjectBillingInfoRequest,
    responseType: google_cloud_billing_v1_cloud_billing_pb.ProjectBillingInfo,
    requestSerialize: serialize_google_cloud_billing_v1_UpdateProjectBillingInfoRequest,
    requestDeserialize: deserialize_google_cloud_billing_v1_UpdateProjectBillingInfoRequest,
    responseSerialize: serialize_google_cloud_billing_v1_ProjectBillingInfo,
    responseDeserialize: deserialize_google_cloud_billing_v1_ProjectBillingInfo,
  },
};

exports.CloudBillingClient = grpc.makeGenericClientConstructor(CloudBillingService);
