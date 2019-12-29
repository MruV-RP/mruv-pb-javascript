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
var google_devtools_resultstore_v2_resultstore_upload_pb = require('../../../../google/devtools/resultstore/v2/resultstore_upload_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_devtools_resultstore_v2_action_pb = require('../../../../google/devtools/resultstore/v2/action_pb.js');
var google_devtools_resultstore_v2_configuration_pb = require('../../../../google/devtools/resultstore/v2/configuration_pb.js');
var google_devtools_resultstore_v2_configured_target_pb = require('../../../../google/devtools/resultstore/v2/configured_target_pb.js');
var google_devtools_resultstore_v2_file_set_pb = require('../../../../google/devtools/resultstore/v2/file_set_pb.js');
var google_devtools_resultstore_v2_invocation_pb = require('../../../../google/devtools/resultstore/v2/invocation_pb.js');
var google_devtools_resultstore_v2_target_pb = require('../../../../google/devtools/resultstore/v2/target_pb.js');
var google_devtools_resultstore_v2_upload_metadata_pb = require('../../../../google/devtools/resultstore/v2/upload_metadata_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_api_client_pb = require('../../../../google/api/client_pb.js');

function serialize_google_devtools_resultstore_v2_Action(arg) {
  if (!(arg instanceof google_devtools_resultstore_v2_action_pb.Action)) {
    throw new Error('Expected argument of type google.devtools.resultstore.v2.Action');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_resultstore_v2_Action(buffer_arg) {
  return google_devtools_resultstore_v2_action_pb.Action.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_resultstore_v2_Configuration(arg) {
  if (!(arg instanceof google_devtools_resultstore_v2_configuration_pb.Configuration)) {
    throw new Error('Expected argument of type google.devtools.resultstore.v2.Configuration');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_resultstore_v2_Configuration(buffer_arg) {
  return google_devtools_resultstore_v2_configuration_pb.Configuration.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_resultstore_v2_ConfiguredTarget(arg) {
  if (!(arg instanceof google_devtools_resultstore_v2_configured_target_pb.ConfiguredTarget)) {
    throw new Error('Expected argument of type google.devtools.resultstore.v2.ConfiguredTarget');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_resultstore_v2_ConfiguredTarget(buffer_arg) {
  return google_devtools_resultstore_v2_configured_target_pb.ConfiguredTarget.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_resultstore_v2_CreateActionRequest(arg) {
  if (!(arg instanceof google_devtools_resultstore_v2_resultstore_upload_pb.CreateActionRequest)) {
    throw new Error('Expected argument of type google.devtools.resultstore.v2.CreateActionRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_resultstore_v2_CreateActionRequest(buffer_arg) {
  return google_devtools_resultstore_v2_resultstore_upload_pb.CreateActionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_resultstore_v2_CreateConfigurationRequest(arg) {
  if (!(arg instanceof google_devtools_resultstore_v2_resultstore_upload_pb.CreateConfigurationRequest)) {
    throw new Error('Expected argument of type google.devtools.resultstore.v2.CreateConfigurationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_resultstore_v2_CreateConfigurationRequest(buffer_arg) {
  return google_devtools_resultstore_v2_resultstore_upload_pb.CreateConfigurationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_resultstore_v2_CreateConfiguredTargetRequest(arg) {
  if (!(arg instanceof google_devtools_resultstore_v2_resultstore_upload_pb.CreateConfiguredTargetRequest)) {
    throw new Error('Expected argument of type google.devtools.resultstore.v2.CreateConfiguredTargetRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_resultstore_v2_CreateConfiguredTargetRequest(buffer_arg) {
  return google_devtools_resultstore_v2_resultstore_upload_pb.CreateConfiguredTargetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_resultstore_v2_CreateFileSetRequest(arg) {
  if (!(arg instanceof google_devtools_resultstore_v2_resultstore_upload_pb.CreateFileSetRequest)) {
    throw new Error('Expected argument of type google.devtools.resultstore.v2.CreateFileSetRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_resultstore_v2_CreateFileSetRequest(buffer_arg) {
  return google_devtools_resultstore_v2_resultstore_upload_pb.CreateFileSetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_resultstore_v2_CreateInvocationRequest(arg) {
  if (!(arg instanceof google_devtools_resultstore_v2_resultstore_upload_pb.CreateInvocationRequest)) {
    throw new Error('Expected argument of type google.devtools.resultstore.v2.CreateInvocationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_resultstore_v2_CreateInvocationRequest(buffer_arg) {
  return google_devtools_resultstore_v2_resultstore_upload_pb.CreateInvocationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_resultstore_v2_CreateTargetRequest(arg) {
  if (!(arg instanceof google_devtools_resultstore_v2_resultstore_upload_pb.CreateTargetRequest)) {
    throw new Error('Expected argument of type google.devtools.resultstore.v2.CreateTargetRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_resultstore_v2_CreateTargetRequest(buffer_arg) {
  return google_devtools_resultstore_v2_resultstore_upload_pb.CreateTargetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_resultstore_v2_DeleteInvocationRequest(arg) {
  if (!(arg instanceof google_devtools_resultstore_v2_resultstore_upload_pb.DeleteInvocationRequest)) {
    throw new Error('Expected argument of type google.devtools.resultstore.v2.DeleteInvocationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_resultstore_v2_DeleteInvocationRequest(buffer_arg) {
  return google_devtools_resultstore_v2_resultstore_upload_pb.DeleteInvocationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_resultstore_v2_FileSet(arg) {
  if (!(arg instanceof google_devtools_resultstore_v2_file_set_pb.FileSet)) {
    throw new Error('Expected argument of type google.devtools.resultstore.v2.FileSet');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_resultstore_v2_FileSet(buffer_arg) {
  return google_devtools_resultstore_v2_file_set_pb.FileSet.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_resultstore_v2_FinalizeConfiguredTargetRequest(arg) {
  if (!(arg instanceof google_devtools_resultstore_v2_resultstore_upload_pb.FinalizeConfiguredTargetRequest)) {
    throw new Error('Expected argument of type google.devtools.resultstore.v2.FinalizeConfiguredTargetRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_resultstore_v2_FinalizeConfiguredTargetRequest(buffer_arg) {
  return google_devtools_resultstore_v2_resultstore_upload_pb.FinalizeConfiguredTargetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_resultstore_v2_FinalizeConfiguredTargetResponse(arg) {
  if (!(arg instanceof google_devtools_resultstore_v2_resultstore_upload_pb.FinalizeConfiguredTargetResponse)) {
    throw new Error('Expected argument of type google.devtools.resultstore.v2.FinalizeConfiguredTargetResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_resultstore_v2_FinalizeConfiguredTargetResponse(buffer_arg) {
  return google_devtools_resultstore_v2_resultstore_upload_pb.FinalizeConfiguredTargetResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_resultstore_v2_FinalizeInvocationRequest(arg) {
  if (!(arg instanceof google_devtools_resultstore_v2_resultstore_upload_pb.FinalizeInvocationRequest)) {
    throw new Error('Expected argument of type google.devtools.resultstore.v2.FinalizeInvocationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_resultstore_v2_FinalizeInvocationRequest(buffer_arg) {
  return google_devtools_resultstore_v2_resultstore_upload_pb.FinalizeInvocationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_resultstore_v2_FinalizeInvocationResponse(arg) {
  if (!(arg instanceof google_devtools_resultstore_v2_resultstore_upload_pb.FinalizeInvocationResponse)) {
    throw new Error('Expected argument of type google.devtools.resultstore.v2.FinalizeInvocationResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_resultstore_v2_FinalizeInvocationResponse(buffer_arg) {
  return google_devtools_resultstore_v2_resultstore_upload_pb.FinalizeInvocationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_resultstore_v2_FinalizeTargetRequest(arg) {
  if (!(arg instanceof google_devtools_resultstore_v2_resultstore_upload_pb.FinalizeTargetRequest)) {
    throw new Error('Expected argument of type google.devtools.resultstore.v2.FinalizeTargetRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_resultstore_v2_FinalizeTargetRequest(buffer_arg) {
  return google_devtools_resultstore_v2_resultstore_upload_pb.FinalizeTargetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_resultstore_v2_FinalizeTargetResponse(arg) {
  if (!(arg instanceof google_devtools_resultstore_v2_resultstore_upload_pb.FinalizeTargetResponse)) {
    throw new Error('Expected argument of type google.devtools.resultstore.v2.FinalizeTargetResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_resultstore_v2_FinalizeTargetResponse(buffer_arg) {
  return google_devtools_resultstore_v2_resultstore_upload_pb.FinalizeTargetResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_resultstore_v2_GetInvocationUploadMetadataRequest(arg) {
  if (!(arg instanceof google_devtools_resultstore_v2_resultstore_upload_pb.GetInvocationUploadMetadataRequest)) {
    throw new Error('Expected argument of type google.devtools.resultstore.v2.GetInvocationUploadMetadataRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_resultstore_v2_GetInvocationUploadMetadataRequest(buffer_arg) {
  return google_devtools_resultstore_v2_resultstore_upload_pb.GetInvocationUploadMetadataRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_resultstore_v2_Invocation(arg) {
  if (!(arg instanceof google_devtools_resultstore_v2_invocation_pb.Invocation)) {
    throw new Error('Expected argument of type google.devtools.resultstore.v2.Invocation');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_resultstore_v2_Invocation(buffer_arg) {
  return google_devtools_resultstore_v2_invocation_pb.Invocation.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_resultstore_v2_MergeActionRequest(arg) {
  if (!(arg instanceof google_devtools_resultstore_v2_resultstore_upload_pb.MergeActionRequest)) {
    throw new Error('Expected argument of type google.devtools.resultstore.v2.MergeActionRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_resultstore_v2_MergeActionRequest(buffer_arg) {
  return google_devtools_resultstore_v2_resultstore_upload_pb.MergeActionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_resultstore_v2_MergeConfiguredTargetRequest(arg) {
  if (!(arg instanceof google_devtools_resultstore_v2_resultstore_upload_pb.MergeConfiguredTargetRequest)) {
    throw new Error('Expected argument of type google.devtools.resultstore.v2.MergeConfiguredTargetRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_resultstore_v2_MergeConfiguredTargetRequest(buffer_arg) {
  return google_devtools_resultstore_v2_resultstore_upload_pb.MergeConfiguredTargetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_resultstore_v2_MergeFileSetRequest(arg) {
  if (!(arg instanceof google_devtools_resultstore_v2_resultstore_upload_pb.MergeFileSetRequest)) {
    throw new Error('Expected argument of type google.devtools.resultstore.v2.MergeFileSetRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_resultstore_v2_MergeFileSetRequest(buffer_arg) {
  return google_devtools_resultstore_v2_resultstore_upload_pb.MergeFileSetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_resultstore_v2_MergeInvocationRequest(arg) {
  if (!(arg instanceof google_devtools_resultstore_v2_resultstore_upload_pb.MergeInvocationRequest)) {
    throw new Error('Expected argument of type google.devtools.resultstore.v2.MergeInvocationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_resultstore_v2_MergeInvocationRequest(buffer_arg) {
  return google_devtools_resultstore_v2_resultstore_upload_pb.MergeInvocationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_resultstore_v2_MergeTargetRequest(arg) {
  if (!(arg instanceof google_devtools_resultstore_v2_resultstore_upload_pb.MergeTargetRequest)) {
    throw new Error('Expected argument of type google.devtools.resultstore.v2.MergeTargetRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_resultstore_v2_MergeTargetRequest(buffer_arg) {
  return google_devtools_resultstore_v2_resultstore_upload_pb.MergeTargetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_resultstore_v2_Target(arg) {
  if (!(arg instanceof google_devtools_resultstore_v2_target_pb.Target)) {
    throw new Error('Expected argument of type google.devtools.resultstore.v2.Target');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_resultstore_v2_Target(buffer_arg) {
  return google_devtools_resultstore_v2_target_pb.Target.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_resultstore_v2_TouchInvocationRequest(arg) {
  if (!(arg instanceof google_devtools_resultstore_v2_resultstore_upload_pb.TouchInvocationRequest)) {
    throw new Error('Expected argument of type google.devtools.resultstore.v2.TouchInvocationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_resultstore_v2_TouchInvocationRequest(buffer_arg) {
  return google_devtools_resultstore_v2_resultstore_upload_pb.TouchInvocationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_resultstore_v2_TouchInvocationResponse(arg) {
  if (!(arg instanceof google_devtools_resultstore_v2_resultstore_upload_pb.TouchInvocationResponse)) {
    throw new Error('Expected argument of type google.devtools.resultstore.v2.TouchInvocationResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_resultstore_v2_TouchInvocationResponse(buffer_arg) {
  return google_devtools_resultstore_v2_resultstore_upload_pb.TouchInvocationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_resultstore_v2_UpdateActionRequest(arg) {
  if (!(arg instanceof google_devtools_resultstore_v2_resultstore_upload_pb.UpdateActionRequest)) {
    throw new Error('Expected argument of type google.devtools.resultstore.v2.UpdateActionRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_resultstore_v2_UpdateActionRequest(buffer_arg) {
  return google_devtools_resultstore_v2_resultstore_upload_pb.UpdateActionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_resultstore_v2_UpdateConfigurationRequest(arg) {
  if (!(arg instanceof google_devtools_resultstore_v2_resultstore_upload_pb.UpdateConfigurationRequest)) {
    throw new Error('Expected argument of type google.devtools.resultstore.v2.UpdateConfigurationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_resultstore_v2_UpdateConfigurationRequest(buffer_arg) {
  return google_devtools_resultstore_v2_resultstore_upload_pb.UpdateConfigurationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_resultstore_v2_UpdateConfiguredTargetRequest(arg) {
  if (!(arg instanceof google_devtools_resultstore_v2_resultstore_upload_pb.UpdateConfiguredTargetRequest)) {
    throw new Error('Expected argument of type google.devtools.resultstore.v2.UpdateConfiguredTargetRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_resultstore_v2_UpdateConfiguredTargetRequest(buffer_arg) {
  return google_devtools_resultstore_v2_resultstore_upload_pb.UpdateConfiguredTargetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_resultstore_v2_UpdateFileSetRequest(arg) {
  if (!(arg instanceof google_devtools_resultstore_v2_resultstore_upload_pb.UpdateFileSetRequest)) {
    throw new Error('Expected argument of type google.devtools.resultstore.v2.UpdateFileSetRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_resultstore_v2_UpdateFileSetRequest(buffer_arg) {
  return google_devtools_resultstore_v2_resultstore_upload_pb.UpdateFileSetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_resultstore_v2_UpdateInvocationRequest(arg) {
  if (!(arg instanceof google_devtools_resultstore_v2_resultstore_upload_pb.UpdateInvocationRequest)) {
    throw new Error('Expected argument of type google.devtools.resultstore.v2.UpdateInvocationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_resultstore_v2_UpdateInvocationRequest(buffer_arg) {
  return google_devtools_resultstore_v2_resultstore_upload_pb.UpdateInvocationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_resultstore_v2_UpdateTargetRequest(arg) {
  if (!(arg instanceof google_devtools_resultstore_v2_resultstore_upload_pb.UpdateTargetRequest)) {
    throw new Error('Expected argument of type google.devtools.resultstore.v2.UpdateTargetRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_resultstore_v2_UpdateTargetRequest(buffer_arg) {
  return google_devtools_resultstore_v2_resultstore_upload_pb.UpdateTargetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_resultstore_v2_UploadBatchRequest(arg) {
  if (!(arg instanceof google_devtools_resultstore_v2_resultstore_upload_pb.UploadBatchRequest)) {
    throw new Error('Expected argument of type google.devtools.resultstore.v2.UploadBatchRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_resultstore_v2_UploadBatchRequest(buffer_arg) {
  return google_devtools_resultstore_v2_resultstore_upload_pb.UploadBatchRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_resultstore_v2_UploadBatchResponse(arg) {
  if (!(arg instanceof google_devtools_resultstore_v2_resultstore_upload_pb.UploadBatchResponse)) {
    throw new Error('Expected argument of type google.devtools.resultstore.v2.UploadBatchResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_resultstore_v2_UploadBatchResponse(buffer_arg) {
  return google_devtools_resultstore_v2_resultstore_upload_pb.UploadBatchResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_resultstore_v2_UploadMetadata(arg) {
  if (!(arg instanceof google_devtools_resultstore_v2_upload_metadata_pb.UploadMetadata)) {
    throw new Error('Expected argument of type google.devtools.resultstore.v2.UploadMetadata');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_resultstore_v2_UploadMetadata(buffer_arg) {
  return google_devtools_resultstore_v2_upload_metadata_pb.UploadMetadata.deserializeBinary(new Uint8Array(buffer_arg));
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


// This is the interface used to upload information to the ResultStore database,
// to update that information as necessary, and to make it immutable at the end.
//
// This interface intentionally does not support user read-modify-write
// operations. They may corrupt data, and are too expensive. For the same
// reason, all upload RPCs will return no resource fields except name and ID. An
// uploader should hold as little state as possible in memory to avoid running
// out of memory.
var ResultStoreUploadService = exports.ResultStoreUploadService = {
  // Creates the given invocation.
  //
  // This is not an implicitly idempotent API, so a request id is required to
  // make it idempotent.
  //
  // Returns an empty Invocation proto with only the name and ID fields
  // populated.
  //
  // An error will be reported in the following cases:
  // - If an invocation with the same ID already exists.
  createInvocation: {
    path: '/google.devtools.resultstore.v2.ResultStoreUpload/CreateInvocation',
    requestStream: false,
    responseStream: false,
    requestType: google_devtools_resultstore_v2_resultstore_upload_pb.CreateInvocationRequest,
    responseType: google_devtools_resultstore_v2_invocation_pb.Invocation,
    requestSerialize: serialize_google_devtools_resultstore_v2_CreateInvocationRequest,
    requestDeserialize: deserialize_google_devtools_resultstore_v2_CreateInvocationRequest,
    responseSerialize: serialize_google_devtools_resultstore_v2_Invocation,
    responseDeserialize: deserialize_google_devtools_resultstore_v2_Invocation,
  },
  // Applies a standard update to the invocation identified by the given proto's
  // name.  For all types of fields (primitive, message, or repeated), replaces
  // them with the given proto fields if they are under the given field mask
  // paths.  Fields that match the mask but aren't populated in the given
  // invocation are cleared. This is an implicitly idempotent API.
  //
  // Returns an empty Invocation proto with only the name and ID fields
  // populated.
  //
  // An error will be reported in the following cases:
  // - If the invocation does not exist.
  // - If the invocation is finalized.
  // - If no field mask was given.
  updateInvocation: {
    path: '/google.devtools.resultstore.v2.ResultStoreUpload/UpdateInvocation',
    requestStream: false,
    responseStream: false,
    requestType: google_devtools_resultstore_v2_resultstore_upload_pb.UpdateInvocationRequest,
    responseType: google_devtools_resultstore_v2_invocation_pb.Invocation,
    requestSerialize: serialize_google_devtools_resultstore_v2_UpdateInvocationRequest,
    requestDeserialize: deserialize_google_devtools_resultstore_v2_UpdateInvocationRequest,
    responseSerialize: serialize_google_devtools_resultstore_v2_Invocation,
    responseDeserialize: deserialize_google_devtools_resultstore_v2_Invocation,
  },
  // Applies a merge update to the invocation identified by the given proto's
  // name.  For primitive and message fields, replaces them with the ones in
  // the given proto if they are covered under the field mask paths.  For
  // repeated fields, merges to them with the given ones if they are covered
  // under the field mask paths. This is not an implicitly idempotent API, so a
  // request id is required to make it idempotent.
  //
  // Returns an empty Invocation proto with only the name and ID fields
  // populated.
  //
  //
  // An error will be reported in the following cases:
  // - If the invocation does not exist.
  // - If the invocation is finalized.
  // - If no field mask was given.
  mergeInvocation: {
    path: '/google.devtools.resultstore.v2.ResultStoreUpload/MergeInvocation',
    requestStream: false,
    responseStream: false,
    requestType: google_devtools_resultstore_v2_resultstore_upload_pb.MergeInvocationRequest,
    responseType: google_devtools_resultstore_v2_invocation_pb.Invocation,
    requestSerialize: serialize_google_devtools_resultstore_v2_MergeInvocationRequest,
    requestDeserialize: deserialize_google_devtools_resultstore_v2_MergeInvocationRequest,
    responseSerialize: serialize_google_devtools_resultstore_v2_Invocation,
    responseDeserialize: deserialize_google_devtools_resultstore_v2_Invocation,
  },
  // Touches the invocation identified by the given proto's name.
  //
  // This is useful when you need to notify ResultStore that you haven't
  // abandoned the upload, since abandoned uploads will be automatically
  // finalized after a set period.
  //
  // An error will be reported in the following cases:
  // - If the invocation does not exist.
  // - If the invocation is finalized.
  touchInvocation: {
    path: '/google.devtools.resultstore.v2.ResultStoreUpload/TouchInvocation',
    requestStream: false,
    responseStream: false,
    requestType: google_devtools_resultstore_v2_resultstore_upload_pb.TouchInvocationRequest,
    responseType: google_devtools_resultstore_v2_resultstore_upload_pb.TouchInvocationResponse,
    requestSerialize: serialize_google_devtools_resultstore_v2_TouchInvocationRequest,
    requestDeserialize: deserialize_google_devtools_resultstore_v2_TouchInvocationRequest,
    responseSerialize: serialize_google_devtools_resultstore_v2_TouchInvocationResponse,
    responseDeserialize: deserialize_google_devtools_resultstore_v2_TouchInvocationResponse,
  },
  // Declares the invocation with the given name as finalized and immutable by
  // the user. It may still be mutated by post-processing. This is an implicitly
  // idempotent API.
  //
  // If an Invocation is not updated for 24 hours, some time after that
  // this will be called automatically.
  //
  // An error will be reported in the following cases:
  // - If the invocation does not exist.
  finalizeInvocation: {
    path: '/google.devtools.resultstore.v2.ResultStoreUpload/FinalizeInvocation',
    requestStream: false,
    responseStream: false,
    requestType: google_devtools_resultstore_v2_resultstore_upload_pb.FinalizeInvocationRequest,
    responseType: google_devtools_resultstore_v2_resultstore_upload_pb.FinalizeInvocationResponse,
    requestSerialize: serialize_google_devtools_resultstore_v2_FinalizeInvocationRequest,
    requestDeserialize: deserialize_google_devtools_resultstore_v2_FinalizeInvocationRequest,
    responseSerialize: serialize_google_devtools_resultstore_v2_FinalizeInvocationResponse,
    responseDeserialize: deserialize_google_devtools_resultstore_v2_FinalizeInvocationResponse,
  },
  // Deletes an immutable invocation (permanently)
  // Note: this does not delete indirect data, e.g. files stored in other
  // services.
  //
  // An error will be reported in the following cases:
  // - If the invocation does not exist.
  // - If the invocation is not finalized.  This can be retried until it is.
  deleteInvocation: {
    path: '/google.devtools.resultstore.v2.ResultStoreUpload/DeleteInvocation',
    requestStream: false,
    responseStream: false,
    requestType: google_devtools_resultstore_v2_resultstore_upload_pb.DeleteInvocationRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_devtools_resultstore_v2_DeleteInvocationRequest,
    requestDeserialize: deserialize_google_devtools_resultstore_v2_DeleteInvocationRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Creates the given target under the given parent invocation. The given
  // target ID is URL encoded, converted to the full resource name, and assigned
  // to the target's name field. This is not an implicitly idempotent API, so a
  // request id is required to make it idempotent.
  //
  // Returns an empty Target proto with only the name and ID fields populated.
  //
  // An error will be reported in the following cases:
  // - If no target ID is provided.
  // - If the parent invocation does not exist.
  // - If the parent invocation is finalized.
  // - If a target with the same name already exists.
  createTarget: {
    path: '/google.devtools.resultstore.v2.ResultStoreUpload/CreateTarget',
    requestStream: false,
    responseStream: false,
    requestType: google_devtools_resultstore_v2_resultstore_upload_pb.CreateTargetRequest,
    responseType: google_devtools_resultstore_v2_target_pb.Target,
    requestSerialize: serialize_google_devtools_resultstore_v2_CreateTargetRequest,
    requestDeserialize: deserialize_google_devtools_resultstore_v2_CreateTargetRequest,
    responseSerialize: serialize_google_devtools_resultstore_v2_Target,
    responseDeserialize: deserialize_google_devtools_resultstore_v2_Target,
  },
  // Applies a standard update to the target identified by the given proto's
  // name. For all types of fields (primitive, message, or repeated), replaces
  // them with the given proto fields if they are under the given field mask
  // paths. Fields that match the mask but aren't populated in the given
  // target are cleared. This is an implicitly idempotent API.
  //
  // Returns an empty Target proto with only the name and ID fields populated.
  //
  // An error will be reported in the following cases:
  // - If the target does not exist.
  // - If the target or parent invocation is finalized.
  // - If no field mask was given.
  updateTarget: {
    path: '/google.devtools.resultstore.v2.ResultStoreUpload/UpdateTarget',
    requestStream: false,
    responseStream: false,
    requestType: google_devtools_resultstore_v2_resultstore_upload_pb.UpdateTargetRequest,
    responseType: google_devtools_resultstore_v2_target_pb.Target,
    requestSerialize: serialize_google_devtools_resultstore_v2_UpdateTargetRequest,
    requestDeserialize: deserialize_google_devtools_resultstore_v2_UpdateTargetRequest,
    responseSerialize: serialize_google_devtools_resultstore_v2_Target,
    responseDeserialize: deserialize_google_devtools_resultstore_v2_Target,
  },
  // Applies a merge update to the target identified by the given proto's
  // name. For primitive and message fields, replaces them with the ones in the
  // given proto if they are covered under the field mask paths.  For repeated
  // fields, merges to them with the given ones if they are covered under the
  // field mask paths. This is not an implicitly idempotent API, so a request
  // id is required to make it idempotent.
  //
  // Returns an empty Target proto with only the name and ID fields populated.
  //
  //
  // An error will be reported in the following cases:
  // - If the target does not exist.
  // - If the target or parent invocation is finalized.
  // - If no field mask was given.
  mergeTarget: {
    path: '/google.devtools.resultstore.v2.ResultStoreUpload/MergeTarget',
    requestStream: false,
    responseStream: false,
    requestType: google_devtools_resultstore_v2_resultstore_upload_pb.MergeTargetRequest,
    responseType: google_devtools_resultstore_v2_target_pb.Target,
    requestSerialize: serialize_google_devtools_resultstore_v2_MergeTargetRequest,
    requestDeserialize: deserialize_google_devtools_resultstore_v2_MergeTargetRequest,
    responseSerialize: serialize_google_devtools_resultstore_v2_Target,
    responseDeserialize: deserialize_google_devtools_resultstore_v2_Target,
  },
  // Declares the target with the given name as finalized and immutable by the
  // user. It may still be mutated by post-processing. This is an implicitly
  // idempotent API.
  //
  // An error will be reported in the following cases:
  // - If the target does not exist.
  finalizeTarget: {
    path: '/google.devtools.resultstore.v2.ResultStoreUpload/FinalizeTarget',
    requestStream: false,
    responseStream: false,
    requestType: google_devtools_resultstore_v2_resultstore_upload_pb.FinalizeTargetRequest,
    responseType: google_devtools_resultstore_v2_resultstore_upload_pb.FinalizeTargetResponse,
    requestSerialize: serialize_google_devtools_resultstore_v2_FinalizeTargetRequest,
    requestDeserialize: deserialize_google_devtools_resultstore_v2_FinalizeTargetRequest,
    responseSerialize: serialize_google_devtools_resultstore_v2_FinalizeTargetResponse,
    responseDeserialize: deserialize_google_devtools_resultstore_v2_FinalizeTargetResponse,
  },
  // Creates the given configured target under the given parent target.
  // The given configured target ID is URL encoded, converted to the full
  // resource name, and assigned to the configured target's name field.
  // This is not an implicitly idempotent API, so a request id is required
  // to make it idempotent.
  //
  // Returns an empty ConfiguredTarget proto with only the name and ID fields
  // populated.
  //
  // An error will be reported in the following cases:
  // - If no config ID is provided.
  // - If a configured target with the same ID already exists.
  // - If the parent target does not exist.
  // - If the parent target or invocation is finalized.
  createConfiguredTarget: {
    path: '/google.devtools.resultstore.v2.ResultStoreUpload/CreateConfiguredTarget',
    requestStream: false,
    responseStream: false,
    requestType: google_devtools_resultstore_v2_resultstore_upload_pb.CreateConfiguredTargetRequest,
    responseType: google_devtools_resultstore_v2_configured_target_pb.ConfiguredTarget,
    requestSerialize: serialize_google_devtools_resultstore_v2_CreateConfiguredTargetRequest,
    requestDeserialize: deserialize_google_devtools_resultstore_v2_CreateConfiguredTargetRequest,
    responseSerialize: serialize_google_devtools_resultstore_v2_ConfiguredTarget,
    responseDeserialize: deserialize_google_devtools_resultstore_v2_ConfiguredTarget,
  },
  // Applies a standard update to the configured target identified by the given
  // proto's name. For all types of fields (primitive, message, or repeated),
  // replaces them with the given proto fields if they are under the given
  // field mask paths. Fields that match the mask but aren't populated in the
  // given configured target are cleared. This is an implicitly idempotent API.
  //
  // Returns an empty ConfiguredTarget proto with only the name and ID fields
  // populated.
  //
  // An error will be reported in the following cases:
  // - If the configured target does not exist.
  // - If the parent target or invocation is finalized.
  // - If no field mask was given.
  updateConfiguredTarget: {
    path: '/google.devtools.resultstore.v2.ResultStoreUpload/UpdateConfiguredTarget',
    requestStream: false,
    responseStream: false,
    requestType: google_devtools_resultstore_v2_resultstore_upload_pb.UpdateConfiguredTargetRequest,
    responseType: google_devtools_resultstore_v2_configured_target_pb.ConfiguredTarget,
    requestSerialize: serialize_google_devtools_resultstore_v2_UpdateConfiguredTargetRequest,
    requestDeserialize: deserialize_google_devtools_resultstore_v2_UpdateConfiguredTargetRequest,
    responseSerialize: serialize_google_devtools_resultstore_v2_ConfiguredTarget,
    responseDeserialize: deserialize_google_devtools_resultstore_v2_ConfiguredTarget,
  },
  // Applies a merge update to the configured target identified by the given
  // proto's name. For primitive and message fields, replaces them with the
  // ones in the given proto if they are covered under the field mask paths.
  // For repeated fields, merges to them with the given ones if they are
  // covered under the field mask paths. This is not an implicitly idempotent
  // API, so a request id is required to make it idempotent.
  //
  // Returns an empty ConfiguredTarget proto with only the name and ID fields
  // populated.
  //
  //
  // An error will be reported in the following cases:
  // - If the configured target does not exist.
  // - If the parent target or invocation is finalized.
  // - If no field mask was given.
  mergeConfiguredTarget: {
    path: '/google.devtools.resultstore.v2.ResultStoreUpload/MergeConfiguredTarget',
    requestStream: false,
    responseStream: false,
    requestType: google_devtools_resultstore_v2_resultstore_upload_pb.MergeConfiguredTargetRequest,
    responseType: google_devtools_resultstore_v2_configured_target_pb.ConfiguredTarget,
    requestSerialize: serialize_google_devtools_resultstore_v2_MergeConfiguredTargetRequest,
    requestDeserialize: deserialize_google_devtools_resultstore_v2_MergeConfiguredTargetRequest,
    responseSerialize: serialize_google_devtools_resultstore_v2_ConfiguredTarget,
    responseDeserialize: deserialize_google_devtools_resultstore_v2_ConfiguredTarget,
  },
  // Declares the configured target with the given name as finalized and
  // immutable by the user. It may still be mutated by post-processing. This is
  // an implicitly idempotent API.
  //
  // An error will be reported in the following cases:
  // - If the configured target does not exist.
  finalizeConfiguredTarget: {
    path: '/google.devtools.resultstore.v2.ResultStoreUpload/FinalizeConfiguredTarget',
    requestStream: false,
    responseStream: false,
    requestType: google_devtools_resultstore_v2_resultstore_upload_pb.FinalizeConfiguredTargetRequest,
    responseType: google_devtools_resultstore_v2_resultstore_upload_pb.FinalizeConfiguredTargetResponse,
    requestSerialize: serialize_google_devtools_resultstore_v2_FinalizeConfiguredTargetRequest,
    requestDeserialize: deserialize_google_devtools_resultstore_v2_FinalizeConfiguredTargetRequest,
    responseSerialize: serialize_google_devtools_resultstore_v2_FinalizeConfiguredTargetResponse,
    responseDeserialize: deserialize_google_devtools_resultstore_v2_FinalizeConfiguredTargetResponse,
  },
  // Creates the given action under the given configured target. The given
  // action ID is URL encoded, converted to the full resource name, and
  // assigned to the action's name field. This is not an implicitly
  // idempotent API, so a request id is required to make it idempotent.
  //
  // Returns an empty Action proto with only the name and ID fields populated.
  //
  // An error will be reported in the following cases:
  // - If no action ID provided.
  // - If the parent configured target does not exist.
  // - If the parent target or invocation is finalized.
  // - If an action  with the same name already exists.
  createAction: {
    path: '/google.devtools.resultstore.v2.ResultStoreUpload/CreateAction',
    requestStream: false,
    responseStream: false,
    requestType: google_devtools_resultstore_v2_resultstore_upload_pb.CreateActionRequest,
    responseType: google_devtools_resultstore_v2_action_pb.Action,
    requestSerialize: serialize_google_devtools_resultstore_v2_CreateActionRequest,
    requestDeserialize: deserialize_google_devtools_resultstore_v2_CreateActionRequest,
    responseSerialize: serialize_google_devtools_resultstore_v2_Action,
    responseDeserialize: deserialize_google_devtools_resultstore_v2_Action,
  },
  // Applies a standard update to the action identified by the given
  // proto's name.  For all types of fields (primitive, message, or repeated),
  // replaces them with the given proto fields if they are under the given
  // field mask paths.  Fields that match the mask but aren't populated in the
  // given action are cleared.  This is an implicitly idempotent API.
  //
  // Returns an empty Action proto with only the name and ID fields populated.
  //
  // An error will be reported in the following cases:
  // - If the action does not exist.
  // - If the parent target or invocation is finalized.
  // - If no field mask was given.
  updateAction: {
    path: '/google.devtools.resultstore.v2.ResultStoreUpload/UpdateAction',
    requestStream: false,
    responseStream: false,
    requestType: google_devtools_resultstore_v2_resultstore_upload_pb.UpdateActionRequest,
    responseType: google_devtools_resultstore_v2_action_pb.Action,
    requestSerialize: serialize_google_devtools_resultstore_v2_UpdateActionRequest,
    requestDeserialize: deserialize_google_devtools_resultstore_v2_UpdateActionRequest,
    responseSerialize: serialize_google_devtools_resultstore_v2_Action,
    responseDeserialize: deserialize_google_devtools_resultstore_v2_Action,
  },
  // Applies a merge update to the action identified by the given
  // proto's name.  For primitive and message fields, replaces them with the
  // ones in the given proto if they are covered under the field mask paths.
  // For repeated fields, merges to them with the given ones if they are
  // covered under the field mask paths. This is not an implicitly idempotent
  // API, so a request id is required to make it idempotent.
  //
  // Returns an empty Action proto with only the name and ID fields populated.
  //
  //
  // An error will be reported in the following cases:
  // - If the action does not exist.
  // - If the parent target or invocation is finalized.
  // - If no field mask was given.
  mergeAction: {
    path: '/google.devtools.resultstore.v2.ResultStoreUpload/MergeAction',
    requestStream: false,
    responseStream: false,
    requestType: google_devtools_resultstore_v2_resultstore_upload_pb.MergeActionRequest,
    responseType: google_devtools_resultstore_v2_action_pb.Action,
    requestSerialize: serialize_google_devtools_resultstore_v2_MergeActionRequest,
    requestDeserialize: deserialize_google_devtools_resultstore_v2_MergeActionRequest,
    responseSerialize: serialize_google_devtools_resultstore_v2_Action,
    responseDeserialize: deserialize_google_devtools_resultstore_v2_Action,
  },
  // Creates the given configuration under the given parent invocation. The
  // given configuration ID is URL encoded, converted to the full resource name,
  // and assigned to the configuration's name field. The configuration ID of
  // "default" should be preferred for the default configuration in a
  // single-config invocation. This is not an implicitly idempotent API, so a
  // request id is required to make it idempotent.
  //
  // Returns an empty Configuration proto with only the name and ID fields
  // populated.
  //
  // An error will be reported in the following cases:
  // - If no configuration ID is provided.
  // - If the parent invocation does not exist.
  // - If the parent invocation is finalized.
  // - If a configuration with the same name already exists.
  createConfiguration: {
    path: '/google.devtools.resultstore.v2.ResultStoreUpload/CreateConfiguration',
    requestStream: false,
    responseStream: false,
    requestType: google_devtools_resultstore_v2_resultstore_upload_pb.CreateConfigurationRequest,
    responseType: google_devtools_resultstore_v2_configuration_pb.Configuration,
    requestSerialize: serialize_google_devtools_resultstore_v2_CreateConfigurationRequest,
    requestDeserialize: deserialize_google_devtools_resultstore_v2_CreateConfigurationRequest,
    responseSerialize: serialize_google_devtools_resultstore_v2_Configuration,
    responseDeserialize: deserialize_google_devtools_resultstore_v2_Configuration,
  },
  // Applies a standard update to the configuration identified by the given
  // proto's name. For all types of fields (primitive, message, or repeated),
  // replaces them with the given proto fields if they are under the given field
  // mask paths. Fields that match the mask but aren't populated in the given
  // configuration are cleared. This is an implicitly idempotent API.
  //
  // Returns an empty Configuration proto with only the name and ID fields
  // populated.
  //
  // An error will be reported in the following cases:
  // - If the configuration does not exist.
  // - If the parent invocation is finalized.
  // - If no field mask was given.
  // - If a given field mask path is not valid.
  updateConfiguration: {
    path: '/google.devtools.resultstore.v2.ResultStoreUpload/UpdateConfiguration',
    requestStream: false,
    responseStream: false,
    requestType: google_devtools_resultstore_v2_resultstore_upload_pb.UpdateConfigurationRequest,
    responseType: google_devtools_resultstore_v2_configuration_pb.Configuration,
    requestSerialize: serialize_google_devtools_resultstore_v2_UpdateConfigurationRequest,
    requestDeserialize: deserialize_google_devtools_resultstore_v2_UpdateConfigurationRequest,
    responseSerialize: serialize_google_devtools_resultstore_v2_Configuration,
    responseDeserialize: deserialize_google_devtools_resultstore_v2_Configuration,
  },
  // Creates the given file set under the given parent invocation. The given
  // file set ID is URL encoded, converted to the full resource name, and
  // assigned to the file set's name field. This is not an implicitly idempotent
  // API, so a request id is required to make it idempotent.
  //
  // Returns an empty FileSet proto with only the name and ID fields populated.
  //
  // An error will be reported in the following cases:
  // - If no file set ID is provided.
  // - If a file set with the same name already exists.
  // - If the parent invocation does not exist.
  // - If the parent invocation is finalized.
  createFileSet: {
    path: '/google.devtools.resultstore.v2.ResultStoreUpload/CreateFileSet',
    requestStream: false,
    responseStream: false,
    requestType: google_devtools_resultstore_v2_resultstore_upload_pb.CreateFileSetRequest,
    responseType: google_devtools_resultstore_v2_file_set_pb.FileSet,
    requestSerialize: serialize_google_devtools_resultstore_v2_CreateFileSetRequest,
    requestDeserialize: deserialize_google_devtools_resultstore_v2_CreateFileSetRequest,
    responseSerialize: serialize_google_devtools_resultstore_v2_FileSet,
    responseDeserialize: deserialize_google_devtools_resultstore_v2_FileSet,
  },
  // Applies a standard update to the file set identified by the given proto's
  // name. For all types of fields (primitive, message, or repeated), replaces
  // them with the given proto fields if they are under the given field mask
  // paths. Fields that match the mask but aren't populated in the given
  // configuration are cleared. This is an implicitly idempotent API.
  //
  // Returns an empty FileSet proto with only the name and ID fields populated.
  //
  // An error will be reported in the following cases:
  // - If the file set does not exist.
  // - If the parent invocation is finalized.
  // - If no field mask was given.
  // - If a given field mask path is not valid.
  updateFileSet: {
    path: '/google.devtools.resultstore.v2.ResultStoreUpload/UpdateFileSet',
    requestStream: false,
    responseStream: false,
    requestType: google_devtools_resultstore_v2_resultstore_upload_pb.UpdateFileSetRequest,
    responseType: google_devtools_resultstore_v2_file_set_pb.FileSet,
    requestSerialize: serialize_google_devtools_resultstore_v2_UpdateFileSetRequest,
    requestDeserialize: deserialize_google_devtools_resultstore_v2_UpdateFileSetRequest,
    responseSerialize: serialize_google_devtools_resultstore_v2_FileSet,
    responseDeserialize: deserialize_google_devtools_resultstore_v2_FileSet,
  },
  // Applies a merge update to the file set identified by the given proto's
  // name. For primitive and message fields, updates them with the ones in the
  // given proto if they are covered under the field mask paths. For repeated
  // fields, merges to them with the given ones if they are covered under the
  // field mask paths. This is not an implicitly idempotent API, so a request
  // id is required to make it idempotent.
  //
  // Returns an empty FileSet proto with only the name and ID fields populated.
  //
  //
  // An error will be reported in the following cases:
  // - If the file set does not exist.
  // - If the parent invocation is finalized.
  // - If a given field mask path is not valid.
  // - If no field mask was given.
  mergeFileSet: {
    path: '/google.devtools.resultstore.v2.ResultStoreUpload/MergeFileSet',
    requestStream: false,
    responseStream: false,
    requestType: google_devtools_resultstore_v2_resultstore_upload_pb.MergeFileSetRequest,
    responseType: google_devtools_resultstore_v2_file_set_pb.FileSet,
    requestSerialize: serialize_google_devtools_resultstore_v2_MergeFileSetRequest,
    requestDeserialize: deserialize_google_devtools_resultstore_v2_MergeFileSetRequest,
    responseSerialize: serialize_google_devtools_resultstore_v2_FileSet,
    responseDeserialize: deserialize_google_devtools_resultstore_v2_FileSet,
  },
  // This is the RPC used for batch upload. It supports uploading multiple
  // resources for an invocation in a transaction safe manner.
  //
  // To use this RPC, the CreateInvocationRequest must have been provided a
  // resume_token.
  //
  // Combining batch upload with normal upload on a single Invocation is not
  // supported. If an Invocation is created with a resume_token, all further
  // calls must be through UploadBatch. If an Invocation is created without
  // resume_token normal upload, all further upload calls must be through normal
  // upload RPCs.
  uploadBatch: {
    path: '/google.devtools.resultstore.v2.ResultStoreUpload/UploadBatch',
    requestStream: false,
    responseStream: false,
    requestType: google_devtools_resultstore_v2_resultstore_upload_pb.UploadBatchRequest,
    responseType: google_devtools_resultstore_v2_resultstore_upload_pb.UploadBatchResponse,
    requestSerialize: serialize_google_devtools_resultstore_v2_UploadBatchRequest,
    requestDeserialize: deserialize_google_devtools_resultstore_v2_UploadBatchRequest,
    responseSerialize: serialize_google_devtools_resultstore_v2_UploadBatchResponse,
    responseDeserialize: deserialize_google_devtools_resultstore_v2_UploadBatchResponse,
  },
  // Provides a way to read the metadata for an invocation.
  // The UploadMetadata could still be retrieved by this RPC even the Invocation
  // has been finalized.
  // This API requires setting a response FieldMask via 'fields' URL query
  // parameter or X-Goog-FieldMask HTTP/gRPC header.
  //
  // An error will be reported in the following case:
  // - If the invocation does not exist.
  // - If no field mask was given.
  getInvocationUploadMetadata: {
    path: '/google.devtools.resultstore.v2.ResultStoreUpload/GetInvocationUploadMetadata',
    requestStream: false,
    responseStream: false,
    requestType: google_devtools_resultstore_v2_resultstore_upload_pb.GetInvocationUploadMetadataRequest,
    responseType: google_devtools_resultstore_v2_upload_metadata_pb.UploadMetadata,
    requestSerialize: serialize_google_devtools_resultstore_v2_GetInvocationUploadMetadataRequest,
    requestDeserialize: deserialize_google_devtools_resultstore_v2_GetInvocationUploadMetadataRequest,
    responseSerialize: serialize_google_devtools_resultstore_v2_UploadMetadata,
    responseDeserialize: deserialize_google_devtools_resultstore_v2_UploadMetadata,
  },
};

exports.ResultStoreUploadClient = grpc.makeGenericClientConstructor(ResultStoreUploadService);
