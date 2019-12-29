// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright 2018 Google Inc.
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
var google_devtools_containeranalysis_v1alpha1_containeranalysis_pb = require('../../../../google/devtools/containeranalysis/v1alpha1/containeranalysis_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_devtools_containeranalysis_v1alpha1_bill_of_materials_pb = require('../../../../google/devtools/containeranalysis/v1alpha1/bill_of_materials_pb.js');
var google_devtools_containeranalysis_v1alpha1_image_basis_pb = require('../../../../google/devtools/containeranalysis/v1alpha1/image_basis_pb.js');
var google_devtools_containeranalysis_v1alpha1_package_vulnerability_pb = require('../../../../google/devtools/containeranalysis/v1alpha1/package_vulnerability_pb.js');
var google_devtools_containeranalysis_v1alpha1_provenance_pb = require('../../../../google/devtools/containeranalysis/v1alpha1/provenance_pb.js');
var google_iam_v1_iam_policy_pb = require('../../../../google/iam/v1/iam_policy_pb.js');
var google_iam_v1_policy_pb = require('../../../../google/iam/v1/policy_pb.js');
var google_longrunning_operations_pb = require('../../../../google/longrunning/operations_pb.js');
var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_rpc_status_pb = require('../../../../google/rpc/status_pb.js');

function serialize_google_devtools_containeranalysis_v1alpha1_CreateNoteRequest(arg) {
  if (!(arg instanceof google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.CreateNoteRequest)) {
    throw new Error('Expected argument of type google.devtools.containeranalysis.v1alpha1.CreateNoteRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_containeranalysis_v1alpha1_CreateNoteRequest(buffer_arg) {
  return google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.CreateNoteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_containeranalysis_v1alpha1_CreateOccurrenceRequest(arg) {
  if (!(arg instanceof google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.CreateOccurrenceRequest)) {
    throw new Error('Expected argument of type google.devtools.containeranalysis.v1alpha1.CreateOccurrenceRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_containeranalysis_v1alpha1_CreateOccurrenceRequest(buffer_arg) {
  return google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.CreateOccurrenceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_containeranalysis_v1alpha1_CreateOperationRequest(arg) {
  if (!(arg instanceof google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.CreateOperationRequest)) {
    throw new Error('Expected argument of type google.devtools.containeranalysis.v1alpha1.CreateOperationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_containeranalysis_v1alpha1_CreateOperationRequest(buffer_arg) {
  return google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.CreateOperationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_containeranalysis_v1alpha1_DeleteNoteRequest(arg) {
  if (!(arg instanceof google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.DeleteNoteRequest)) {
    throw new Error('Expected argument of type google.devtools.containeranalysis.v1alpha1.DeleteNoteRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_containeranalysis_v1alpha1_DeleteNoteRequest(buffer_arg) {
  return google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.DeleteNoteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_containeranalysis_v1alpha1_DeleteOccurrenceRequest(arg) {
  if (!(arg instanceof google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.DeleteOccurrenceRequest)) {
    throw new Error('Expected argument of type google.devtools.containeranalysis.v1alpha1.DeleteOccurrenceRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_containeranalysis_v1alpha1_DeleteOccurrenceRequest(buffer_arg) {
  return google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.DeleteOccurrenceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_containeranalysis_v1alpha1_GetNoteRequest(arg) {
  if (!(arg instanceof google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.GetNoteRequest)) {
    throw new Error('Expected argument of type google.devtools.containeranalysis.v1alpha1.GetNoteRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_containeranalysis_v1alpha1_GetNoteRequest(buffer_arg) {
  return google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.GetNoteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_containeranalysis_v1alpha1_GetOccurrenceNoteRequest(arg) {
  if (!(arg instanceof google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.GetOccurrenceNoteRequest)) {
    throw new Error('Expected argument of type google.devtools.containeranalysis.v1alpha1.GetOccurrenceNoteRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_containeranalysis_v1alpha1_GetOccurrenceNoteRequest(buffer_arg) {
  return google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.GetOccurrenceNoteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_containeranalysis_v1alpha1_GetOccurrenceRequest(arg) {
  if (!(arg instanceof google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.GetOccurrenceRequest)) {
    throw new Error('Expected argument of type google.devtools.containeranalysis.v1alpha1.GetOccurrenceRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_containeranalysis_v1alpha1_GetOccurrenceRequest(buffer_arg) {
  return google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.GetOccurrenceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_containeranalysis_v1alpha1_GetScanConfigRequest(arg) {
  if (!(arg instanceof google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.GetScanConfigRequest)) {
    throw new Error('Expected argument of type google.devtools.containeranalysis.v1alpha1.GetScanConfigRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_containeranalysis_v1alpha1_GetScanConfigRequest(buffer_arg) {
  return google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.GetScanConfigRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_containeranalysis_v1alpha1_GetVulnzOccurrencesSummaryRequest(arg) {
  if (!(arg instanceof google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.GetVulnzOccurrencesSummaryRequest)) {
    throw new Error('Expected argument of type google.devtools.containeranalysis.v1alpha1.GetVulnzOccurrencesSummaryRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_containeranalysis_v1alpha1_GetVulnzOccurrencesSummaryRequest(buffer_arg) {
  return google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.GetVulnzOccurrencesSummaryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_containeranalysis_v1alpha1_GetVulnzOccurrencesSummaryResponse(arg) {
  if (!(arg instanceof google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.GetVulnzOccurrencesSummaryResponse)) {
    throw new Error('Expected argument of type google.devtools.containeranalysis.v1alpha1.GetVulnzOccurrencesSummaryResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_containeranalysis_v1alpha1_GetVulnzOccurrencesSummaryResponse(buffer_arg) {
  return google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.GetVulnzOccurrencesSummaryResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_containeranalysis_v1alpha1_ListNoteOccurrencesRequest(arg) {
  if (!(arg instanceof google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.ListNoteOccurrencesRequest)) {
    throw new Error('Expected argument of type google.devtools.containeranalysis.v1alpha1.ListNoteOccurrencesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_containeranalysis_v1alpha1_ListNoteOccurrencesRequest(buffer_arg) {
  return google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.ListNoteOccurrencesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_containeranalysis_v1alpha1_ListNoteOccurrencesResponse(arg) {
  if (!(arg instanceof google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.ListNoteOccurrencesResponse)) {
    throw new Error('Expected argument of type google.devtools.containeranalysis.v1alpha1.ListNoteOccurrencesResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_containeranalysis_v1alpha1_ListNoteOccurrencesResponse(buffer_arg) {
  return google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.ListNoteOccurrencesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_containeranalysis_v1alpha1_ListNotesRequest(arg) {
  if (!(arg instanceof google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.ListNotesRequest)) {
    throw new Error('Expected argument of type google.devtools.containeranalysis.v1alpha1.ListNotesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_containeranalysis_v1alpha1_ListNotesRequest(buffer_arg) {
  return google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.ListNotesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_containeranalysis_v1alpha1_ListNotesResponse(arg) {
  if (!(arg instanceof google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.ListNotesResponse)) {
    throw new Error('Expected argument of type google.devtools.containeranalysis.v1alpha1.ListNotesResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_containeranalysis_v1alpha1_ListNotesResponse(buffer_arg) {
  return google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.ListNotesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_containeranalysis_v1alpha1_ListOccurrencesRequest(arg) {
  if (!(arg instanceof google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.ListOccurrencesRequest)) {
    throw new Error('Expected argument of type google.devtools.containeranalysis.v1alpha1.ListOccurrencesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_containeranalysis_v1alpha1_ListOccurrencesRequest(buffer_arg) {
  return google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.ListOccurrencesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_containeranalysis_v1alpha1_ListOccurrencesResponse(arg) {
  if (!(arg instanceof google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.ListOccurrencesResponse)) {
    throw new Error('Expected argument of type google.devtools.containeranalysis.v1alpha1.ListOccurrencesResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_containeranalysis_v1alpha1_ListOccurrencesResponse(buffer_arg) {
  return google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.ListOccurrencesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_containeranalysis_v1alpha1_ListScanConfigsRequest(arg) {
  if (!(arg instanceof google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.ListScanConfigsRequest)) {
    throw new Error('Expected argument of type google.devtools.containeranalysis.v1alpha1.ListScanConfigsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_containeranalysis_v1alpha1_ListScanConfigsRequest(buffer_arg) {
  return google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.ListScanConfigsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_containeranalysis_v1alpha1_ListScanConfigsResponse(arg) {
  if (!(arg instanceof google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.ListScanConfigsResponse)) {
    throw new Error('Expected argument of type google.devtools.containeranalysis.v1alpha1.ListScanConfigsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_containeranalysis_v1alpha1_ListScanConfigsResponse(buffer_arg) {
  return google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.ListScanConfigsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_containeranalysis_v1alpha1_Note(arg) {
  if (!(arg instanceof google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.Note)) {
    throw new Error('Expected argument of type google.devtools.containeranalysis.v1alpha1.Note');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_containeranalysis_v1alpha1_Note(buffer_arg) {
  return google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.Note.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_containeranalysis_v1alpha1_Occurrence(arg) {
  if (!(arg instanceof google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.Occurrence)) {
    throw new Error('Expected argument of type google.devtools.containeranalysis.v1alpha1.Occurrence');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_containeranalysis_v1alpha1_Occurrence(buffer_arg) {
  return google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.Occurrence.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_containeranalysis_v1alpha1_ScanConfig(arg) {
  if (!(arg instanceof google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.ScanConfig)) {
    throw new Error('Expected argument of type google.devtools.containeranalysis.v1alpha1.ScanConfig');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_containeranalysis_v1alpha1_ScanConfig(buffer_arg) {
  return google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.ScanConfig.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_containeranalysis_v1alpha1_UpdateNoteRequest(arg) {
  if (!(arg instanceof google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.UpdateNoteRequest)) {
    throw new Error('Expected argument of type google.devtools.containeranalysis.v1alpha1.UpdateNoteRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_containeranalysis_v1alpha1_UpdateNoteRequest(buffer_arg) {
  return google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.UpdateNoteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_containeranalysis_v1alpha1_UpdateOccurrenceRequest(arg) {
  if (!(arg instanceof google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.UpdateOccurrenceRequest)) {
    throw new Error('Expected argument of type google.devtools.containeranalysis.v1alpha1.UpdateOccurrenceRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_containeranalysis_v1alpha1_UpdateOccurrenceRequest(buffer_arg) {
  return google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.UpdateOccurrenceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_containeranalysis_v1alpha1_UpdateOperationRequest(arg) {
  if (!(arg instanceof google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.UpdateOperationRequest)) {
    throw new Error('Expected argument of type google.devtools.containeranalysis.v1alpha1.UpdateOperationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_containeranalysis_v1alpha1_UpdateOperationRequest(buffer_arg) {
  return google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.UpdateOperationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_containeranalysis_v1alpha1_UpdateScanConfigRequest(arg) {
  if (!(arg instanceof google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.UpdateScanConfigRequest)) {
    throw new Error('Expected argument of type google.devtools.containeranalysis.v1alpha1.UpdateScanConfigRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_containeranalysis_v1alpha1_UpdateScanConfigRequest(buffer_arg) {
  return google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.UpdateScanConfigRequest.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_google_longrunning_Operation(arg) {
  if (!(arg instanceof google_longrunning_operations_pb.Operation)) {
    throw new Error('Expected argument of type google.longrunning.Operation');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_longrunning_Operation(buffer_arg) {
  return google_longrunning_operations_pb.Operation.deserializeBinary(new Uint8Array(buffer_arg));
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


// Retrieves the results of vulnerability scanning of cloud components such as
// container images. The Container Analysis API is an implementation of the
// [Grafeas](grafeas.io) API.
//
// The vulnerability results are stored as a series of Occurrences.
// An `Occurrence` contains information about a specific vulnerability in a
// resource. An `Occurrence` references a `Note`. A `Note` contains details
// about the vulnerability and is stored in a stored in a separate project.
// Multiple `Occurrences` can reference the same `Note`. For example, an SSL
// vulnerability could affect multiple packages in an image. In this case,
// there would be one `Note` for the vulnerability and an `Occurrence` for
// each package with the vulnerability referencing that `Note`.
var ContainerAnalysisService = exports.ContainerAnalysisService = {
  // Returns the requested `Occurrence`.
  getOccurrence: {
    path: '/google.devtools.containeranalysis.v1alpha1.ContainerAnalysis/GetOccurrence',
    requestStream: false,
    responseStream: false,
    requestType: google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.GetOccurrenceRequest,
    responseType: google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.Occurrence,
    requestSerialize: serialize_google_devtools_containeranalysis_v1alpha1_GetOccurrenceRequest,
    requestDeserialize: deserialize_google_devtools_containeranalysis_v1alpha1_GetOccurrenceRequest,
    responseSerialize: serialize_google_devtools_containeranalysis_v1alpha1_Occurrence,
    responseDeserialize: deserialize_google_devtools_containeranalysis_v1alpha1_Occurrence,
  },
  // Lists active `Occurrences` for a given project matching the filters.
  listOccurrences: {
    path: '/google.devtools.containeranalysis.v1alpha1.ContainerAnalysis/ListOccurrences',
    requestStream: false,
    responseStream: false,
    requestType: google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.ListOccurrencesRequest,
    responseType: google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.ListOccurrencesResponse,
    requestSerialize: serialize_google_devtools_containeranalysis_v1alpha1_ListOccurrencesRequest,
    requestDeserialize: deserialize_google_devtools_containeranalysis_v1alpha1_ListOccurrencesRequest,
    responseSerialize: serialize_google_devtools_containeranalysis_v1alpha1_ListOccurrencesResponse,
    responseDeserialize: deserialize_google_devtools_containeranalysis_v1alpha1_ListOccurrencesResponse,
  },
  // Deletes the given `Occurrence` from the system. Use this when
  // an `Occurrence` is no longer applicable for the given resource.
  deleteOccurrence: {
    path: '/google.devtools.containeranalysis.v1alpha1.ContainerAnalysis/DeleteOccurrence',
    requestStream: false,
    responseStream: false,
    requestType: google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.DeleteOccurrenceRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_devtools_containeranalysis_v1alpha1_DeleteOccurrenceRequest,
    requestDeserialize: deserialize_google_devtools_containeranalysis_v1alpha1_DeleteOccurrenceRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Creates a new `Occurrence`. Use this method to create `Occurrences`
  // for a resource.
  createOccurrence: {
    path: '/google.devtools.containeranalysis.v1alpha1.ContainerAnalysis/CreateOccurrence',
    requestStream: false,
    responseStream: false,
    requestType: google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.CreateOccurrenceRequest,
    responseType: google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.Occurrence,
    requestSerialize: serialize_google_devtools_containeranalysis_v1alpha1_CreateOccurrenceRequest,
    requestDeserialize: deserialize_google_devtools_containeranalysis_v1alpha1_CreateOccurrenceRequest,
    responseSerialize: serialize_google_devtools_containeranalysis_v1alpha1_Occurrence,
    responseDeserialize: deserialize_google_devtools_containeranalysis_v1alpha1_Occurrence,
  },
  // Updates an existing occurrence.
  updateOccurrence: {
    path: '/google.devtools.containeranalysis.v1alpha1.ContainerAnalysis/UpdateOccurrence',
    requestStream: false,
    responseStream: false,
    requestType: google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.UpdateOccurrenceRequest,
    responseType: google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.Occurrence,
    requestSerialize: serialize_google_devtools_containeranalysis_v1alpha1_UpdateOccurrenceRequest,
    requestDeserialize: deserialize_google_devtools_containeranalysis_v1alpha1_UpdateOccurrenceRequest,
    responseSerialize: serialize_google_devtools_containeranalysis_v1alpha1_Occurrence,
    responseDeserialize: deserialize_google_devtools_containeranalysis_v1alpha1_Occurrence,
  },
  // Gets the `Note` attached to the given `Occurrence`.
  getOccurrenceNote: {
    path: '/google.devtools.containeranalysis.v1alpha1.ContainerAnalysis/GetOccurrenceNote',
    requestStream: false,
    responseStream: false,
    requestType: google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.GetOccurrenceNoteRequest,
    responseType: google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.Note,
    requestSerialize: serialize_google_devtools_containeranalysis_v1alpha1_GetOccurrenceNoteRequest,
    requestDeserialize: deserialize_google_devtools_containeranalysis_v1alpha1_GetOccurrenceNoteRequest,
    responseSerialize: serialize_google_devtools_containeranalysis_v1alpha1_Note,
    responseDeserialize: deserialize_google_devtools_containeranalysis_v1alpha1_Note,
  },
  // Returns the requested `Note`.
  getNote: {
    path: '/google.devtools.containeranalysis.v1alpha1.ContainerAnalysis/GetNote',
    requestStream: false,
    responseStream: false,
    requestType: google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.GetNoteRequest,
    responseType: google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.Note,
    requestSerialize: serialize_google_devtools_containeranalysis_v1alpha1_GetNoteRequest,
    requestDeserialize: deserialize_google_devtools_containeranalysis_v1alpha1_GetNoteRequest,
    responseSerialize: serialize_google_devtools_containeranalysis_v1alpha1_Note,
    responseDeserialize: deserialize_google_devtools_containeranalysis_v1alpha1_Note,
  },
  // Lists all `Notes` for a given project.
  listNotes: {
    path: '/google.devtools.containeranalysis.v1alpha1.ContainerAnalysis/ListNotes',
    requestStream: false,
    responseStream: false,
    requestType: google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.ListNotesRequest,
    responseType: google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.ListNotesResponse,
    requestSerialize: serialize_google_devtools_containeranalysis_v1alpha1_ListNotesRequest,
    requestDeserialize: deserialize_google_devtools_containeranalysis_v1alpha1_ListNotesRequest,
    responseSerialize: serialize_google_devtools_containeranalysis_v1alpha1_ListNotesResponse,
    responseDeserialize: deserialize_google_devtools_containeranalysis_v1alpha1_ListNotesResponse,
  },
  // Deletes the given `Note` from the system.
  deleteNote: {
    path: '/google.devtools.containeranalysis.v1alpha1.ContainerAnalysis/DeleteNote',
    requestStream: false,
    responseStream: false,
    requestType: google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.DeleteNoteRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_devtools_containeranalysis_v1alpha1_DeleteNoteRequest,
    requestDeserialize: deserialize_google_devtools_containeranalysis_v1alpha1_DeleteNoteRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Creates a new `Note`.
  createNote: {
    path: '/google.devtools.containeranalysis.v1alpha1.ContainerAnalysis/CreateNote',
    requestStream: false,
    responseStream: false,
    requestType: google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.CreateNoteRequest,
    responseType: google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.Note,
    requestSerialize: serialize_google_devtools_containeranalysis_v1alpha1_CreateNoteRequest,
    requestDeserialize: deserialize_google_devtools_containeranalysis_v1alpha1_CreateNoteRequest,
    responseSerialize: serialize_google_devtools_containeranalysis_v1alpha1_Note,
    responseDeserialize: deserialize_google_devtools_containeranalysis_v1alpha1_Note,
  },
  // Updates an existing `Note`.
  updateNote: {
    path: '/google.devtools.containeranalysis.v1alpha1.ContainerAnalysis/UpdateNote',
    requestStream: false,
    responseStream: false,
    requestType: google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.UpdateNoteRequest,
    responseType: google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.Note,
    requestSerialize: serialize_google_devtools_containeranalysis_v1alpha1_UpdateNoteRequest,
    requestDeserialize: deserialize_google_devtools_containeranalysis_v1alpha1_UpdateNoteRequest,
    responseSerialize: serialize_google_devtools_containeranalysis_v1alpha1_Note,
    responseDeserialize: deserialize_google_devtools_containeranalysis_v1alpha1_Note,
  },
  // Lists `Occurrences` referencing the specified `Note`. Use this method to
  // get all occurrences referencing your `Note` across all your customer
  // projects.
  listNoteOccurrences: {
    path: '/google.devtools.containeranalysis.v1alpha1.ContainerAnalysis/ListNoteOccurrences',
    requestStream: false,
    responseStream: false,
    requestType: google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.ListNoteOccurrencesRequest,
    responseType: google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.ListNoteOccurrencesResponse,
    requestSerialize: serialize_google_devtools_containeranalysis_v1alpha1_ListNoteOccurrencesRequest,
    requestDeserialize: deserialize_google_devtools_containeranalysis_v1alpha1_ListNoteOccurrencesRequest,
    responseSerialize: serialize_google_devtools_containeranalysis_v1alpha1_ListNoteOccurrencesResponse,
    responseDeserialize: deserialize_google_devtools_containeranalysis_v1alpha1_ListNoteOccurrencesResponse,
  },
  // Gets a summary of the number and severity of occurrences.
  getVulnzOccurrencesSummary: {
    path: '/google.devtools.containeranalysis.v1alpha1.ContainerAnalysis/GetVulnzOccurrencesSummary',
    requestStream: false,
    responseStream: false,
    requestType: google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.GetVulnzOccurrencesSummaryRequest,
    responseType: google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.GetVulnzOccurrencesSummaryResponse,
    requestSerialize: serialize_google_devtools_containeranalysis_v1alpha1_GetVulnzOccurrencesSummaryRequest,
    requestDeserialize: deserialize_google_devtools_containeranalysis_v1alpha1_GetVulnzOccurrencesSummaryRequest,
    responseSerialize: serialize_google_devtools_containeranalysis_v1alpha1_GetVulnzOccurrencesSummaryResponse,
    responseDeserialize: deserialize_google_devtools_containeranalysis_v1alpha1_GetVulnzOccurrencesSummaryResponse,
  },
  // Sets the access control policy on the specified `Note` or `Occurrence`.
  // Requires `containeranalysis.notes.setIamPolicy` or
  // `containeranalysis.occurrences.setIamPolicy` permission if the resource is
  // a `Note` or an `Occurrence`, respectively.
  // Attempting to call this method without these permissions will result in a `
  // `PERMISSION_DENIED` error.
  // Attempting to call this method on a non-existent resource will result in a
  // `NOT_FOUND` error if the user has `containeranalysis.notes.list` permission
  // on a `Note` or `containeranalysis.occurrences.list` on an `Occurrence`, or
  // a `PERMISSION_DENIED` error otherwise. The resource takes the following
  // formats: `projects/{projectid}/occurrences/{occurrenceid}` for occurrences
  // and projects/{projectid}/notes/{noteid} for notes
  setIamPolicy: {
    path: '/google.devtools.containeranalysis.v1alpha1.ContainerAnalysis/SetIamPolicy',
    requestStream: false,
    responseStream: false,
    requestType: google_iam_v1_iam_policy_pb.SetIamPolicyRequest,
    responseType: google_iam_v1_policy_pb.Policy,
    requestSerialize: serialize_google_iam_v1_SetIamPolicyRequest,
    requestDeserialize: deserialize_google_iam_v1_SetIamPolicyRequest,
    responseSerialize: serialize_google_iam_v1_Policy,
    responseDeserialize: deserialize_google_iam_v1_Policy,
  },
  // Gets the access control policy for a note or an `Occurrence` resource.
  // Requires `containeranalysis.notes.setIamPolicy` or
  // `containeranalysis.occurrences.setIamPolicy` permission if the resource is
  // a note or occurrence, respectively.
  // Attempting to call this method on a resource without the required
  // permission will result in a `PERMISSION_DENIED` error. Attempting to call
  // this method on a non-existent resource will result in a `NOT_FOUND` error
  // if the user has list permission on the project, or a `PERMISSION_DENIED`
  // error otherwise. The resource takes the following formats:
  // `projects/{PROJECT_ID}/occurrences/{OCCURRENCE_ID}` for occurrences and
  // projects/{PROJECT_ID}/notes/{NOTE_ID} for notes
  getIamPolicy: {
    path: '/google.devtools.containeranalysis.v1alpha1.ContainerAnalysis/GetIamPolicy',
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
  // occurrence resource. Requires list permission on the project (for example,
  // "storage.objects.list" on the containing bucket for testing permission of
  // an object). Attempting to call this method on a non-existent resource will
  // result in a `NOT_FOUND` error if the user has list permission on the
  // project, or a `PERMISSION_DENIED` error otherwise. The resource takes the
  // following formats: `projects/{PROJECT_ID}/occurrences/{OCCURRENCE_ID}` for
  // `Occurrences` and `projects/{PROJECT_ID}/notes/{NOTE_ID}` for `Notes`
  testIamPermissions: {
    path: '/google.devtools.containeranalysis.v1alpha1.ContainerAnalysis/TestIamPermissions',
    requestStream: false,
    responseStream: false,
    requestType: google_iam_v1_iam_policy_pb.TestIamPermissionsRequest,
    responseType: google_iam_v1_iam_policy_pb.TestIamPermissionsResponse,
    requestSerialize: serialize_google_iam_v1_TestIamPermissionsRequest,
    requestDeserialize: deserialize_google_iam_v1_TestIamPermissionsRequest,
    responseSerialize: serialize_google_iam_v1_TestIamPermissionsResponse,
    responseDeserialize: deserialize_google_iam_v1_TestIamPermissionsResponse,
  },
  // Creates a new `Operation`.
  createOperation: {
    path: '/google.devtools.containeranalysis.v1alpha1.ContainerAnalysis/CreateOperation',
    requestStream: false,
    responseStream: false,
    requestType: google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.CreateOperationRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_devtools_containeranalysis_v1alpha1_CreateOperationRequest,
    requestDeserialize: deserialize_google_devtools_containeranalysis_v1alpha1_CreateOperationRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Updates an existing operation returns an error if operation
  //  does not exist. The only valid operations are to update mark the done bit
  // change the result.
  updateOperation: {
    path: '/google.devtools.containeranalysis.v1alpha1.ContainerAnalysis/UpdateOperation',
    requestStream: false,
    responseStream: false,
    requestType: google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.UpdateOperationRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_devtools_containeranalysis_v1alpha1_UpdateOperationRequest,
    requestDeserialize: deserialize_google_devtools_containeranalysis_v1alpha1_UpdateOperationRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Gets a specific scan configuration for a project.
  getScanConfig: {
    path: '/google.devtools.containeranalysis.v1alpha1.ContainerAnalysis/GetScanConfig',
    requestStream: false,
    responseStream: false,
    requestType: google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.GetScanConfigRequest,
    responseType: google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.ScanConfig,
    requestSerialize: serialize_google_devtools_containeranalysis_v1alpha1_GetScanConfigRequest,
    requestDeserialize: deserialize_google_devtools_containeranalysis_v1alpha1_GetScanConfigRequest,
    responseSerialize: serialize_google_devtools_containeranalysis_v1alpha1_ScanConfig,
    responseDeserialize: deserialize_google_devtools_containeranalysis_v1alpha1_ScanConfig,
  },
  // Lists scan configurations for a project.
  listScanConfigs: {
    path: '/google.devtools.containeranalysis.v1alpha1.ContainerAnalysis/ListScanConfigs',
    requestStream: false,
    responseStream: false,
    requestType: google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.ListScanConfigsRequest,
    responseType: google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.ListScanConfigsResponse,
    requestSerialize: serialize_google_devtools_containeranalysis_v1alpha1_ListScanConfigsRequest,
    requestDeserialize: deserialize_google_devtools_containeranalysis_v1alpha1_ListScanConfigsRequest,
    responseSerialize: serialize_google_devtools_containeranalysis_v1alpha1_ListScanConfigsResponse,
    responseDeserialize: deserialize_google_devtools_containeranalysis_v1alpha1_ListScanConfigsResponse,
  },
  // Updates the scan configuration to a new value.
  updateScanConfig: {
    path: '/google.devtools.containeranalysis.v1alpha1.ContainerAnalysis/UpdateScanConfig',
    requestStream: false,
    responseStream: false,
    requestType: google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.UpdateScanConfigRequest,
    responseType: google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.ScanConfig,
    requestSerialize: serialize_google_devtools_containeranalysis_v1alpha1_UpdateScanConfigRequest,
    requestDeserialize: deserialize_google_devtools_containeranalysis_v1alpha1_UpdateScanConfigRequest,
    responseSerialize: serialize_google_devtools_containeranalysis_v1alpha1_ScanConfig,
    responseDeserialize: deserialize_google_devtools_containeranalysis_v1alpha1_ScanConfig,
  },
};

exports.ContainerAnalysisClient = grpc.makeGenericClientConstructor(ContainerAnalysisService);
