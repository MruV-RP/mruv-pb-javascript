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
var google_cloud_billing_budgets_v1beta1_budget_service_pb = require('../../../../../google/cloud/billing/budgets/v1beta1/budget_service_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var google_api_client_pb = require('../../../../../google/api/client_pb.js');
var google_api_field_behavior_pb = require('../../../../../google/api/field_behavior_pb.js');
var google_api_resource_pb = require('../../../../../google/api/resource_pb.js');
var google_cloud_billing_budgets_v1beta1_budget_model_pb = require('../../../../../google/cloud/billing/budgets/v1beta1/budget_model_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');

function serialize_google_cloud_billing_budgets_v1beta1_Budget(arg) {
  if (!(arg instanceof google_cloud_billing_budgets_v1beta1_budget_model_pb.Budget)) {
    throw new Error('Expected argument of type google.cloud.billing.budgets.v1beta1.Budget');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_billing_budgets_v1beta1_Budget(buffer_arg) {
  return google_cloud_billing_budgets_v1beta1_budget_model_pb.Budget.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_billing_budgets_v1beta1_CreateBudgetRequest(arg) {
  if (!(arg instanceof google_cloud_billing_budgets_v1beta1_budget_service_pb.CreateBudgetRequest)) {
    throw new Error('Expected argument of type google.cloud.billing.budgets.v1beta1.CreateBudgetRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_billing_budgets_v1beta1_CreateBudgetRequest(buffer_arg) {
  return google_cloud_billing_budgets_v1beta1_budget_service_pb.CreateBudgetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_billing_budgets_v1beta1_DeleteBudgetRequest(arg) {
  if (!(arg instanceof google_cloud_billing_budgets_v1beta1_budget_service_pb.DeleteBudgetRequest)) {
    throw new Error('Expected argument of type google.cloud.billing.budgets.v1beta1.DeleteBudgetRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_billing_budgets_v1beta1_DeleteBudgetRequest(buffer_arg) {
  return google_cloud_billing_budgets_v1beta1_budget_service_pb.DeleteBudgetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_billing_budgets_v1beta1_GetBudgetRequest(arg) {
  if (!(arg instanceof google_cloud_billing_budgets_v1beta1_budget_service_pb.GetBudgetRequest)) {
    throw new Error('Expected argument of type google.cloud.billing.budgets.v1beta1.GetBudgetRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_billing_budgets_v1beta1_GetBudgetRequest(buffer_arg) {
  return google_cloud_billing_budgets_v1beta1_budget_service_pb.GetBudgetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_billing_budgets_v1beta1_ListBudgetsRequest(arg) {
  if (!(arg instanceof google_cloud_billing_budgets_v1beta1_budget_service_pb.ListBudgetsRequest)) {
    throw new Error('Expected argument of type google.cloud.billing.budgets.v1beta1.ListBudgetsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_billing_budgets_v1beta1_ListBudgetsRequest(buffer_arg) {
  return google_cloud_billing_budgets_v1beta1_budget_service_pb.ListBudgetsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_billing_budgets_v1beta1_ListBudgetsResponse(arg) {
  if (!(arg instanceof google_cloud_billing_budgets_v1beta1_budget_service_pb.ListBudgetsResponse)) {
    throw new Error('Expected argument of type google.cloud.billing.budgets.v1beta1.ListBudgetsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_billing_budgets_v1beta1_ListBudgetsResponse(buffer_arg) {
  return google_cloud_billing_budgets_v1beta1_budget_service_pb.ListBudgetsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_billing_budgets_v1beta1_UpdateBudgetRequest(arg) {
  if (!(arg instanceof google_cloud_billing_budgets_v1beta1_budget_service_pb.UpdateBudgetRequest)) {
    throw new Error('Expected argument of type google.cloud.billing.budgets.v1beta1.UpdateBudgetRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_billing_budgets_v1beta1_UpdateBudgetRequest(buffer_arg) {
  return google_cloud_billing_budgets_v1beta1_budget_service_pb.UpdateBudgetRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


// BudgetService stores Cloud Billing budgets, which define a
// budget plan and rules to execute as we track spend against that plan.
var BudgetServiceService = exports.BudgetServiceService = {
  // Creates a new budget. See
  // <a href="https://cloud.google.com/billing/quotas">Quotas and limits</a>
  // for more information on the limits of the number of budgets you can create.
  createBudget: {
    path: '/google.cloud.billing.budgets.v1beta1.BudgetService/CreateBudget',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_billing_budgets_v1beta1_budget_service_pb.CreateBudgetRequest,
    responseType: google_cloud_billing_budgets_v1beta1_budget_model_pb.Budget,
    requestSerialize: serialize_google_cloud_billing_budgets_v1beta1_CreateBudgetRequest,
    requestDeserialize: deserialize_google_cloud_billing_budgets_v1beta1_CreateBudgetRequest,
    responseSerialize: serialize_google_cloud_billing_budgets_v1beta1_Budget,
    responseDeserialize: deserialize_google_cloud_billing_budgets_v1beta1_Budget,
  },
  // Updates a budget and returns the updated budget.
  updateBudget: {
    path: '/google.cloud.billing.budgets.v1beta1.BudgetService/UpdateBudget',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_billing_budgets_v1beta1_budget_service_pb.UpdateBudgetRequest,
    responseType: google_cloud_billing_budgets_v1beta1_budget_model_pb.Budget,
    requestSerialize: serialize_google_cloud_billing_budgets_v1beta1_UpdateBudgetRequest,
    requestDeserialize: deserialize_google_cloud_billing_budgets_v1beta1_UpdateBudgetRequest,
    responseSerialize: serialize_google_cloud_billing_budgets_v1beta1_Budget,
    responseDeserialize: deserialize_google_cloud_billing_budgets_v1beta1_Budget,
  },
  // Returns a budget.
  getBudget: {
    path: '/google.cloud.billing.budgets.v1beta1.BudgetService/GetBudget',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_billing_budgets_v1beta1_budget_service_pb.GetBudgetRequest,
    responseType: google_cloud_billing_budgets_v1beta1_budget_model_pb.Budget,
    requestSerialize: serialize_google_cloud_billing_budgets_v1beta1_GetBudgetRequest,
    requestDeserialize: deserialize_google_cloud_billing_budgets_v1beta1_GetBudgetRequest,
    responseSerialize: serialize_google_cloud_billing_budgets_v1beta1_Budget,
    responseDeserialize: deserialize_google_cloud_billing_budgets_v1beta1_Budget,
  },
  // Returns a list of budgets for a billing account.
  listBudgets: {
    path: '/google.cloud.billing.budgets.v1beta1.BudgetService/ListBudgets',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_billing_budgets_v1beta1_budget_service_pb.ListBudgetsRequest,
    responseType: google_cloud_billing_budgets_v1beta1_budget_service_pb.ListBudgetsResponse,
    requestSerialize: serialize_google_cloud_billing_budgets_v1beta1_ListBudgetsRequest,
    requestDeserialize: deserialize_google_cloud_billing_budgets_v1beta1_ListBudgetsRequest,
    responseSerialize: serialize_google_cloud_billing_budgets_v1beta1_ListBudgetsResponse,
    responseDeserialize: deserialize_google_cloud_billing_budgets_v1beta1_ListBudgetsResponse,
  },
  // Deletes a budget. Returns successfully if already deleted.
  deleteBudget: {
    path: '/google.cloud.billing.budgets.v1beta1.BudgetService/DeleteBudget',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_billing_budgets_v1beta1_budget_service_pb.DeleteBudgetRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_cloud_billing_budgets_v1beta1_DeleteBudgetRequest,
    requestDeserialize: deserialize_google_cloud_billing_budgets_v1beta1_DeleteBudgetRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.BudgetServiceClient = grpc.makeGenericClientConstructor(BudgetServiceService);
