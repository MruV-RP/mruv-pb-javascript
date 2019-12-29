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
var google_genomics_v1_datasets_pb = require('../../../google/genomics/v1/datasets_pb.js');
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
var google_iam_v1_iam_policy_pb = require('../../../google/iam/v1/iam_policy_pb.js');
var google_iam_v1_policy_pb = require('../../../google/iam/v1/policy_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_google_genomics_v1_CreateDatasetRequest(arg) {
  if (!(arg instanceof google_genomics_v1_datasets_pb.CreateDatasetRequest)) {
    throw new Error('Expected argument of type google.genomics.v1.CreateDatasetRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_genomics_v1_CreateDatasetRequest(buffer_arg) {
  return google_genomics_v1_datasets_pb.CreateDatasetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_genomics_v1_Dataset(arg) {
  if (!(arg instanceof google_genomics_v1_datasets_pb.Dataset)) {
    throw new Error('Expected argument of type google.genomics.v1.Dataset');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_genomics_v1_Dataset(buffer_arg) {
  return google_genomics_v1_datasets_pb.Dataset.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_genomics_v1_DeleteDatasetRequest(arg) {
  if (!(arg instanceof google_genomics_v1_datasets_pb.DeleteDatasetRequest)) {
    throw new Error('Expected argument of type google.genomics.v1.DeleteDatasetRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_genomics_v1_DeleteDatasetRequest(buffer_arg) {
  return google_genomics_v1_datasets_pb.DeleteDatasetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_genomics_v1_GetDatasetRequest(arg) {
  if (!(arg instanceof google_genomics_v1_datasets_pb.GetDatasetRequest)) {
    throw new Error('Expected argument of type google.genomics.v1.GetDatasetRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_genomics_v1_GetDatasetRequest(buffer_arg) {
  return google_genomics_v1_datasets_pb.GetDatasetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_genomics_v1_ListDatasetsRequest(arg) {
  if (!(arg instanceof google_genomics_v1_datasets_pb.ListDatasetsRequest)) {
    throw new Error('Expected argument of type google.genomics.v1.ListDatasetsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_genomics_v1_ListDatasetsRequest(buffer_arg) {
  return google_genomics_v1_datasets_pb.ListDatasetsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_genomics_v1_ListDatasetsResponse(arg) {
  if (!(arg instanceof google_genomics_v1_datasets_pb.ListDatasetsResponse)) {
    throw new Error('Expected argument of type google.genomics.v1.ListDatasetsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_genomics_v1_ListDatasetsResponse(buffer_arg) {
  return google_genomics_v1_datasets_pb.ListDatasetsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_genomics_v1_UndeleteDatasetRequest(arg) {
  if (!(arg instanceof google_genomics_v1_datasets_pb.UndeleteDatasetRequest)) {
    throw new Error('Expected argument of type google.genomics.v1.UndeleteDatasetRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_genomics_v1_UndeleteDatasetRequest(buffer_arg) {
  return google_genomics_v1_datasets_pb.UndeleteDatasetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_genomics_v1_UpdateDatasetRequest(arg) {
  if (!(arg instanceof google_genomics_v1_datasets_pb.UpdateDatasetRequest)) {
    throw new Error('Expected argument of type google.genomics.v1.UpdateDatasetRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_genomics_v1_UpdateDatasetRequest(buffer_arg) {
  return google_genomics_v1_datasets_pb.UpdateDatasetRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


// This service manages datasets, which are collections of genomic data.
var DatasetServiceV1Service = exports.DatasetServiceV1Service = {
  // Lists datasets within a project.
  //
  // For the definitions of datasets and other genomics resources, see
  // [Fundamentals of Google
  // Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
  listDatasets: {
    path: '/google.genomics.v1.DatasetServiceV1/ListDatasets',
    requestStream: false,
    responseStream: false,
    requestType: google_genomics_v1_datasets_pb.ListDatasetsRequest,
    responseType: google_genomics_v1_datasets_pb.ListDatasetsResponse,
    requestSerialize: serialize_google_genomics_v1_ListDatasetsRequest,
    requestDeserialize: deserialize_google_genomics_v1_ListDatasetsRequest,
    responseSerialize: serialize_google_genomics_v1_ListDatasetsResponse,
    responseDeserialize: deserialize_google_genomics_v1_ListDatasetsResponse,
  },
  // Creates a new dataset.
  //
  // For the definitions of datasets and other genomics resources, see
  // [Fundamentals of Google
  // Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
  createDataset: {
    path: '/google.genomics.v1.DatasetServiceV1/CreateDataset',
    requestStream: false,
    responseStream: false,
    requestType: google_genomics_v1_datasets_pb.CreateDatasetRequest,
    responseType: google_genomics_v1_datasets_pb.Dataset,
    requestSerialize: serialize_google_genomics_v1_CreateDatasetRequest,
    requestDeserialize: deserialize_google_genomics_v1_CreateDatasetRequest,
    responseSerialize: serialize_google_genomics_v1_Dataset,
    responseDeserialize: deserialize_google_genomics_v1_Dataset,
  },
  // Gets a dataset by ID.
  //
  // For the definitions of datasets and other genomics resources, see
  // [Fundamentals of Google
  // Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
  getDataset: {
    path: '/google.genomics.v1.DatasetServiceV1/GetDataset',
    requestStream: false,
    responseStream: false,
    requestType: google_genomics_v1_datasets_pb.GetDatasetRequest,
    responseType: google_genomics_v1_datasets_pb.Dataset,
    requestSerialize: serialize_google_genomics_v1_GetDatasetRequest,
    requestDeserialize: deserialize_google_genomics_v1_GetDatasetRequest,
    responseSerialize: serialize_google_genomics_v1_Dataset,
    responseDeserialize: deserialize_google_genomics_v1_Dataset,
  },
  // Updates a dataset.
  //
  // For the definitions of datasets and other genomics resources, see
  // [Fundamentals of Google
  // Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
  //
  // This method supports patch semantics.
  updateDataset: {
    path: '/google.genomics.v1.DatasetServiceV1/UpdateDataset',
    requestStream: false,
    responseStream: false,
    requestType: google_genomics_v1_datasets_pb.UpdateDatasetRequest,
    responseType: google_genomics_v1_datasets_pb.Dataset,
    requestSerialize: serialize_google_genomics_v1_UpdateDatasetRequest,
    requestDeserialize: deserialize_google_genomics_v1_UpdateDatasetRequest,
    responseSerialize: serialize_google_genomics_v1_Dataset,
    responseDeserialize: deserialize_google_genomics_v1_Dataset,
  },
  // Deletes a dataset and all of its contents (all read group sets,
  // reference sets, variant sets, call sets, annotation sets, etc.)
  // This is reversible (up to one week after the deletion) via
  // the
  // [datasets.undelete][google.genomics.v1.DatasetServiceV1.UndeleteDataset]
  // operation.
  //
  // For the definitions of datasets and other genomics resources, see
  // [Fundamentals of Google
  // Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
  deleteDataset: {
    path: '/google.genomics.v1.DatasetServiceV1/DeleteDataset',
    requestStream: false,
    responseStream: false,
    requestType: google_genomics_v1_datasets_pb.DeleteDatasetRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_genomics_v1_DeleteDatasetRequest,
    requestDeserialize: deserialize_google_genomics_v1_DeleteDatasetRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Undeletes a dataset by restoring a dataset which was deleted via this API.
  //
  // For the definitions of datasets and other genomics resources, see
  // [Fundamentals of Google
  // Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
  //
  // This operation is only possible for a week after the deletion occurred.
  undeleteDataset: {
    path: '/google.genomics.v1.DatasetServiceV1/UndeleteDataset',
    requestStream: false,
    responseStream: false,
    requestType: google_genomics_v1_datasets_pb.UndeleteDatasetRequest,
    responseType: google_genomics_v1_datasets_pb.Dataset,
    requestSerialize: serialize_google_genomics_v1_UndeleteDatasetRequest,
    requestDeserialize: deserialize_google_genomics_v1_UndeleteDatasetRequest,
    responseSerialize: serialize_google_genomics_v1_Dataset,
    responseDeserialize: deserialize_google_genomics_v1_Dataset,
  },
  // Sets the access control policy on the specified dataset. Replaces any
  // existing policy.
  //
  // For the definitions of datasets and other genomics resources, see
  // [Fundamentals of Google
  // Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
  //
  // See <a href="/iam/docs/managing-policies#setting_a_policy">Setting a
  // Policy</a> for more information.
  setIamPolicy: {
    path: '/google.genomics.v1.DatasetServiceV1/SetIamPolicy',
    requestStream: false,
    responseStream: false,
    requestType: google_iam_v1_iam_policy_pb.SetIamPolicyRequest,
    responseType: google_iam_v1_policy_pb.Policy,
    requestSerialize: serialize_google_iam_v1_SetIamPolicyRequest,
    requestDeserialize: deserialize_google_iam_v1_SetIamPolicyRequest,
    responseSerialize: serialize_google_iam_v1_Policy,
    responseDeserialize: deserialize_google_iam_v1_Policy,
  },
  // Gets the access control policy for the dataset. This is empty if the
  // policy or resource does not exist.
  //
  // See <a href="/iam/docs/managing-policies#getting_a_policy">Getting a
  // Policy</a> for more information.
  //
  // For the definitions of datasets and other genomics resources, see
  // [Fundamentals of Google
  // Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
  getIamPolicy: {
    path: '/google.genomics.v1.DatasetServiceV1/GetIamPolicy',
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
  // See <a href="/iam/docs/managing-policies#testing_permissions">Testing
  // Permissions</a> for more information.
  //
  // For the definitions of datasets and other genomics resources, see
  // [Fundamentals of Google
  // Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
  testIamPermissions: {
    path: '/google.genomics.v1.DatasetServiceV1/TestIamPermissions',
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

exports.DatasetServiceV1Client = grpc.makeGenericClientConstructor(DatasetServiceV1Service);
