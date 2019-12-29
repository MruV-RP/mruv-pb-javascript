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
var google_devtools_resultstore_v2_resultstore_download_pb = require('../../../../google/devtools/resultstore/v2/resultstore_download_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_devtools_resultstore_v2_action_pb = require('../../../../google/devtools/resultstore/v2/action_pb.js');
var google_devtools_resultstore_v2_configuration_pb = require('../../../../google/devtools/resultstore/v2/configuration_pb.js');
var google_devtools_resultstore_v2_configured_target_pb = require('../../../../google/devtools/resultstore/v2/configured_target_pb.js');
var google_devtools_resultstore_v2_download_metadata_pb = require('../../../../google/devtools/resultstore/v2/download_metadata_pb.js');
var google_devtools_resultstore_v2_file_set_pb = require('../../../../google/devtools/resultstore/v2/file_set_pb.js');
var google_devtools_resultstore_v2_invocation_pb = require('../../../../google/devtools/resultstore/v2/invocation_pb.js');
var google_devtools_resultstore_v2_target_pb = require('../../../../google/devtools/resultstore/v2/target_pb.js');
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

function serialize_google_devtools_resultstore_v2_DownloadMetadata(arg) {
  if (!(arg instanceof google_devtools_resultstore_v2_download_metadata_pb.DownloadMetadata)) {
    throw new Error('Expected argument of type google.devtools.resultstore.v2.DownloadMetadata');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_resultstore_v2_DownloadMetadata(buffer_arg) {
  return google_devtools_resultstore_v2_download_metadata_pb.DownloadMetadata.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_google_devtools_resultstore_v2_GetActionRequest(arg) {
  if (!(arg instanceof google_devtools_resultstore_v2_resultstore_download_pb.GetActionRequest)) {
    throw new Error('Expected argument of type google.devtools.resultstore.v2.GetActionRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_resultstore_v2_GetActionRequest(buffer_arg) {
  return google_devtools_resultstore_v2_resultstore_download_pb.GetActionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_resultstore_v2_GetConfigurationRequest(arg) {
  if (!(arg instanceof google_devtools_resultstore_v2_resultstore_download_pb.GetConfigurationRequest)) {
    throw new Error('Expected argument of type google.devtools.resultstore.v2.GetConfigurationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_resultstore_v2_GetConfigurationRequest(buffer_arg) {
  return google_devtools_resultstore_v2_resultstore_download_pb.GetConfigurationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_resultstore_v2_GetConfiguredTargetRequest(arg) {
  if (!(arg instanceof google_devtools_resultstore_v2_resultstore_download_pb.GetConfiguredTargetRequest)) {
    throw new Error('Expected argument of type google.devtools.resultstore.v2.GetConfiguredTargetRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_resultstore_v2_GetConfiguredTargetRequest(buffer_arg) {
  return google_devtools_resultstore_v2_resultstore_download_pb.GetConfiguredTargetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_resultstore_v2_GetFileSetRequest(arg) {
  if (!(arg instanceof google_devtools_resultstore_v2_resultstore_download_pb.GetFileSetRequest)) {
    throw new Error('Expected argument of type google.devtools.resultstore.v2.GetFileSetRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_resultstore_v2_GetFileSetRequest(buffer_arg) {
  return google_devtools_resultstore_v2_resultstore_download_pb.GetFileSetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_resultstore_v2_GetInvocationDownloadMetadataRequest(arg) {
  if (!(arg instanceof google_devtools_resultstore_v2_resultstore_download_pb.GetInvocationDownloadMetadataRequest)) {
    throw new Error('Expected argument of type google.devtools.resultstore.v2.GetInvocationDownloadMetadataRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_resultstore_v2_GetInvocationDownloadMetadataRequest(buffer_arg) {
  return google_devtools_resultstore_v2_resultstore_download_pb.GetInvocationDownloadMetadataRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_resultstore_v2_GetInvocationRequest(arg) {
  if (!(arg instanceof google_devtools_resultstore_v2_resultstore_download_pb.GetInvocationRequest)) {
    throw new Error('Expected argument of type google.devtools.resultstore.v2.GetInvocationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_resultstore_v2_GetInvocationRequest(buffer_arg) {
  return google_devtools_resultstore_v2_resultstore_download_pb.GetInvocationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_resultstore_v2_GetTargetRequest(arg) {
  if (!(arg instanceof google_devtools_resultstore_v2_resultstore_download_pb.GetTargetRequest)) {
    throw new Error('Expected argument of type google.devtools.resultstore.v2.GetTargetRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_resultstore_v2_GetTargetRequest(buffer_arg) {
  return google_devtools_resultstore_v2_resultstore_download_pb.GetTargetRequest.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_google_devtools_resultstore_v2_ListActionsRequest(arg) {
  if (!(arg instanceof google_devtools_resultstore_v2_resultstore_download_pb.ListActionsRequest)) {
    throw new Error('Expected argument of type google.devtools.resultstore.v2.ListActionsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_resultstore_v2_ListActionsRequest(buffer_arg) {
  return google_devtools_resultstore_v2_resultstore_download_pb.ListActionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_resultstore_v2_ListActionsResponse(arg) {
  if (!(arg instanceof google_devtools_resultstore_v2_resultstore_download_pb.ListActionsResponse)) {
    throw new Error('Expected argument of type google.devtools.resultstore.v2.ListActionsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_resultstore_v2_ListActionsResponse(buffer_arg) {
  return google_devtools_resultstore_v2_resultstore_download_pb.ListActionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_resultstore_v2_ListConfigurationsRequest(arg) {
  if (!(arg instanceof google_devtools_resultstore_v2_resultstore_download_pb.ListConfigurationsRequest)) {
    throw new Error('Expected argument of type google.devtools.resultstore.v2.ListConfigurationsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_resultstore_v2_ListConfigurationsRequest(buffer_arg) {
  return google_devtools_resultstore_v2_resultstore_download_pb.ListConfigurationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_resultstore_v2_ListConfigurationsResponse(arg) {
  if (!(arg instanceof google_devtools_resultstore_v2_resultstore_download_pb.ListConfigurationsResponse)) {
    throw new Error('Expected argument of type google.devtools.resultstore.v2.ListConfigurationsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_resultstore_v2_ListConfigurationsResponse(buffer_arg) {
  return google_devtools_resultstore_v2_resultstore_download_pb.ListConfigurationsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_resultstore_v2_ListConfiguredTargetsRequest(arg) {
  if (!(arg instanceof google_devtools_resultstore_v2_resultstore_download_pb.ListConfiguredTargetsRequest)) {
    throw new Error('Expected argument of type google.devtools.resultstore.v2.ListConfiguredTargetsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_resultstore_v2_ListConfiguredTargetsRequest(buffer_arg) {
  return google_devtools_resultstore_v2_resultstore_download_pb.ListConfiguredTargetsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_resultstore_v2_ListConfiguredTargetsResponse(arg) {
  if (!(arg instanceof google_devtools_resultstore_v2_resultstore_download_pb.ListConfiguredTargetsResponse)) {
    throw new Error('Expected argument of type google.devtools.resultstore.v2.ListConfiguredTargetsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_resultstore_v2_ListConfiguredTargetsResponse(buffer_arg) {
  return google_devtools_resultstore_v2_resultstore_download_pb.ListConfiguredTargetsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_resultstore_v2_ListFileSetsRequest(arg) {
  if (!(arg instanceof google_devtools_resultstore_v2_resultstore_download_pb.ListFileSetsRequest)) {
    throw new Error('Expected argument of type google.devtools.resultstore.v2.ListFileSetsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_resultstore_v2_ListFileSetsRequest(buffer_arg) {
  return google_devtools_resultstore_v2_resultstore_download_pb.ListFileSetsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_resultstore_v2_ListFileSetsResponse(arg) {
  if (!(arg instanceof google_devtools_resultstore_v2_resultstore_download_pb.ListFileSetsResponse)) {
    throw new Error('Expected argument of type google.devtools.resultstore.v2.ListFileSetsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_resultstore_v2_ListFileSetsResponse(buffer_arg) {
  return google_devtools_resultstore_v2_resultstore_download_pb.ListFileSetsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_resultstore_v2_ListTargetsRequest(arg) {
  if (!(arg instanceof google_devtools_resultstore_v2_resultstore_download_pb.ListTargetsRequest)) {
    throw new Error('Expected argument of type google.devtools.resultstore.v2.ListTargetsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_resultstore_v2_ListTargetsRequest(buffer_arg) {
  return google_devtools_resultstore_v2_resultstore_download_pb.ListTargetsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_resultstore_v2_ListTargetsResponse(arg) {
  if (!(arg instanceof google_devtools_resultstore_v2_resultstore_download_pb.ListTargetsResponse)) {
    throw new Error('Expected argument of type google.devtools.resultstore.v2.ListTargetsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_resultstore_v2_ListTargetsResponse(buffer_arg) {
  return google_devtools_resultstore_v2_resultstore_download_pb.ListTargetsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_resultstore_v2_SearchInvocationsRequest(arg) {
  if (!(arg instanceof google_devtools_resultstore_v2_resultstore_download_pb.SearchInvocationsRequest)) {
    throw new Error('Expected argument of type google.devtools.resultstore.v2.SearchInvocationsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_resultstore_v2_SearchInvocationsRequest(buffer_arg) {
  return google_devtools_resultstore_v2_resultstore_download_pb.SearchInvocationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_resultstore_v2_SearchInvocationsResponse(arg) {
  if (!(arg instanceof google_devtools_resultstore_v2_resultstore_download_pb.SearchInvocationsResponse)) {
    throw new Error('Expected argument of type google.devtools.resultstore.v2.SearchInvocationsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_resultstore_v2_SearchInvocationsResponse(buffer_arg) {
  return google_devtools_resultstore_v2_resultstore_download_pb.SearchInvocationsResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_google_devtools_resultstore_v2_TraverseFileSetsRequest(arg) {
  if (!(arg instanceof google_devtools_resultstore_v2_resultstore_download_pb.TraverseFileSetsRequest)) {
    throw new Error('Expected argument of type google.devtools.resultstore.v2.TraverseFileSetsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_resultstore_v2_TraverseFileSetsRequest(buffer_arg) {
  return google_devtools_resultstore_v2_resultstore_download_pb.TraverseFileSetsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_resultstore_v2_TraverseFileSetsResponse(arg) {
  if (!(arg instanceof google_devtools_resultstore_v2_resultstore_download_pb.TraverseFileSetsResponse)) {
    throw new Error('Expected argument of type google.devtools.resultstore.v2.TraverseFileSetsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_resultstore_v2_TraverseFileSetsResponse(buffer_arg) {
  return google_devtools_resultstore_v2_resultstore_download_pb.TraverseFileSetsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// This is the interface used to download information from the ResultStore
// database.
//
// Most APIs require setting a response FieldMask via the 'fields' URL query
// parameter or the X-Goog-FieldMask HTTP/gRPC header.
var ResultStoreDownloadService = exports.ResultStoreDownloadService = {
  // Retrieves the invocation with the given name.
  //
  // An error will be reported in the following cases:
  // - If the invocation is not found.
  // - If the given invocation name is badly formatted.
  // - If no field mask was given.
  getInvocation: {
    path: '/google.devtools.resultstore.v2.ResultStoreDownload/GetInvocation',
    requestStream: false,
    responseStream: false,
    requestType: google_devtools_resultstore_v2_resultstore_download_pb.GetInvocationRequest,
    responseType: google_devtools_resultstore_v2_invocation_pb.Invocation,
    requestSerialize: serialize_google_devtools_resultstore_v2_GetInvocationRequest,
    requestDeserialize: deserialize_google_devtools_resultstore_v2_GetInvocationRequest,
    responseSerialize: serialize_google_devtools_resultstore_v2_Invocation,
    responseDeserialize: deserialize_google_devtools_resultstore_v2_Invocation,
  },
  // Searches for invocations matching the given query parameters. Results will
  // be ordered by timing.start_time with most recent first, but total ordering
  // of results is not guaranteed when difference in timestamps is very small.
  // Results may be stale.
  //
  //
  // An error will be reported in the following cases:
  // - If a query string is not provided
  // - If no field mask was given.
  searchInvocations: {
    path: '/google.devtools.resultstore.v2.ResultStoreDownload/SearchInvocations',
    requestStream: false,
    responseStream: false,
    requestType: google_devtools_resultstore_v2_resultstore_download_pb.SearchInvocationsRequest,
    responseType: google_devtools_resultstore_v2_resultstore_download_pb.SearchInvocationsResponse,
    requestSerialize: serialize_google_devtools_resultstore_v2_SearchInvocationsRequest,
    requestDeserialize: deserialize_google_devtools_resultstore_v2_SearchInvocationsRequest,
    responseSerialize: serialize_google_devtools_resultstore_v2_SearchInvocationsResponse,
    responseDeserialize: deserialize_google_devtools_resultstore_v2_SearchInvocationsResponse,
  },
  // Retrieves the metadata for an invocation with the given name.
  //
  // An error will be reported in the following cases:
  // - If the invocation is not found.
  // - If the given invocation name is badly formatted.
  getInvocationDownloadMetadata: {
    path: '/google.devtools.resultstore.v2.ResultStoreDownload/GetInvocationDownloadMetadata',
    requestStream: false,
    responseStream: false,
    requestType: google_devtools_resultstore_v2_resultstore_download_pb.GetInvocationDownloadMetadataRequest,
    responseType: google_devtools_resultstore_v2_download_metadata_pb.DownloadMetadata,
    requestSerialize: serialize_google_devtools_resultstore_v2_GetInvocationDownloadMetadataRequest,
    requestDeserialize: deserialize_google_devtools_resultstore_v2_GetInvocationDownloadMetadataRequest,
    responseSerialize: serialize_google_devtools_resultstore_v2_DownloadMetadata,
    responseDeserialize: deserialize_google_devtools_resultstore_v2_DownloadMetadata,
  },
  // Retrieves the configuration with the given name.
  //
  // An error will be reported in the following cases:
  // - If the configuration or its parent invocation is not found.
  // - If the given configuration name is badly formatted.
  // - If no field mask was given.
  getConfiguration: {
    path: '/google.devtools.resultstore.v2.ResultStoreDownload/GetConfiguration',
    requestStream: false,
    responseStream: false,
    requestType: google_devtools_resultstore_v2_resultstore_download_pb.GetConfigurationRequest,
    responseType: google_devtools_resultstore_v2_configuration_pb.Configuration,
    requestSerialize: serialize_google_devtools_resultstore_v2_GetConfigurationRequest,
    requestDeserialize: deserialize_google_devtools_resultstore_v2_GetConfigurationRequest,
    responseSerialize: serialize_google_devtools_resultstore_v2_Configuration,
    responseDeserialize: deserialize_google_devtools_resultstore_v2_Configuration,
  },
  // Retrieves all configurations for a parent invocation.
  // This might be limited by user or server,
  // in which case a continuation token is provided.
  // The order in which results are returned is undefined, but stable.
  //
  // An error will be reported in the following cases:
  // - If the parent invocation is not found.
  // - If the given parent invocation name is badly formatted.
  // - If no field mask was given.
  listConfigurations: {
    path: '/google.devtools.resultstore.v2.ResultStoreDownload/ListConfigurations',
    requestStream: false,
    responseStream: false,
    requestType: google_devtools_resultstore_v2_resultstore_download_pb.ListConfigurationsRequest,
    responseType: google_devtools_resultstore_v2_resultstore_download_pb.ListConfigurationsResponse,
    requestSerialize: serialize_google_devtools_resultstore_v2_ListConfigurationsRequest,
    requestDeserialize: deserialize_google_devtools_resultstore_v2_ListConfigurationsRequest,
    responseSerialize: serialize_google_devtools_resultstore_v2_ListConfigurationsResponse,
    responseDeserialize: deserialize_google_devtools_resultstore_v2_ListConfigurationsResponse,
  },
  // Retrieves the target with the given name.
  //
  // An error will be reported in the following cases:
  // - If the target or its parent invocation is not found.
  // - If the given target name is badly formatted.
  // - If no field mask was given.
  getTarget: {
    path: '/google.devtools.resultstore.v2.ResultStoreDownload/GetTarget',
    requestStream: false,
    responseStream: false,
    requestType: google_devtools_resultstore_v2_resultstore_download_pb.GetTargetRequest,
    responseType: google_devtools_resultstore_v2_target_pb.Target,
    requestSerialize: serialize_google_devtools_resultstore_v2_GetTargetRequest,
    requestDeserialize: deserialize_google_devtools_resultstore_v2_GetTargetRequest,
    responseSerialize: serialize_google_devtools_resultstore_v2_Target,
    responseDeserialize: deserialize_google_devtools_resultstore_v2_Target,
  },
  // Retrieves all targets for a parent invocation.  This might be limited by
  // user or server, in which case a continuation token is provided.
  // The order in which results are returned is undefined, but stable.
  //
  // An error will be reported in the following cases:
  // - If the parent is not found.
  // - If the given parent name is badly formatted.
  // - If no field mask was given.
  listTargets: {
    path: '/google.devtools.resultstore.v2.ResultStoreDownload/ListTargets',
    requestStream: false,
    responseStream: false,
    requestType: google_devtools_resultstore_v2_resultstore_download_pb.ListTargetsRequest,
    responseType: google_devtools_resultstore_v2_resultstore_download_pb.ListTargetsResponse,
    requestSerialize: serialize_google_devtools_resultstore_v2_ListTargetsRequest,
    requestDeserialize: deserialize_google_devtools_resultstore_v2_ListTargetsRequest,
    responseSerialize: serialize_google_devtools_resultstore_v2_ListTargetsResponse,
    responseDeserialize: deserialize_google_devtools_resultstore_v2_ListTargetsResponse,
  },
  // Retrieves the configured target with the given name.
  //
  // An error will be reported in the following cases:
  // - If the configured target is not found.
  // - If the given name is badly formatted.
  // - If no field mask was given.
  getConfiguredTarget: {
    path: '/google.devtools.resultstore.v2.ResultStoreDownload/GetConfiguredTarget',
    requestStream: false,
    responseStream: false,
    requestType: google_devtools_resultstore_v2_resultstore_download_pb.GetConfiguredTargetRequest,
    responseType: google_devtools_resultstore_v2_configured_target_pb.ConfiguredTarget,
    requestSerialize: serialize_google_devtools_resultstore_v2_GetConfiguredTargetRequest,
    requestDeserialize: deserialize_google_devtools_resultstore_v2_GetConfiguredTargetRequest,
    responseSerialize: serialize_google_devtools_resultstore_v2_ConfiguredTarget,
    responseDeserialize: deserialize_google_devtools_resultstore_v2_ConfiguredTarget,
  },
  // Retrieves all configured targets for a parent invocation/target.
  // This might be limited by user or server, in which case a continuation
  // token is provided.  Supports '-' for targetId meaning all targets.
  // The order in which results are returned is undefined, but stable.
  //
  // An error will be reported in the following cases:
  // - If the parent is not found.
  // - If the given parent name is badly formatted.
  // - If no field mask was given.
  listConfiguredTargets: {
    path: '/google.devtools.resultstore.v2.ResultStoreDownload/ListConfiguredTargets',
    requestStream: false,
    responseStream: false,
    requestType: google_devtools_resultstore_v2_resultstore_download_pb.ListConfiguredTargetsRequest,
    responseType: google_devtools_resultstore_v2_resultstore_download_pb.ListConfiguredTargetsResponse,
    requestSerialize: serialize_google_devtools_resultstore_v2_ListConfiguredTargetsRequest,
    requestDeserialize: deserialize_google_devtools_resultstore_v2_ListConfiguredTargetsRequest,
    responseSerialize: serialize_google_devtools_resultstore_v2_ListConfiguredTargetsResponse,
    responseDeserialize: deserialize_google_devtools_resultstore_v2_ListConfiguredTargetsResponse,
  },
  // Retrieves the action with the given name.
  //
  // An error will be reported in the following cases:
  // - If the action is not found.
  // - If the given name is badly formatted.
  // - If no field mask was given.
  getAction: {
    path: '/google.devtools.resultstore.v2.ResultStoreDownload/GetAction',
    requestStream: false,
    responseStream: false,
    requestType: google_devtools_resultstore_v2_resultstore_download_pb.GetActionRequest,
    responseType: google_devtools_resultstore_v2_action_pb.Action,
    requestSerialize: serialize_google_devtools_resultstore_v2_GetActionRequest,
    requestDeserialize: deserialize_google_devtools_resultstore_v2_GetActionRequest,
    responseSerialize: serialize_google_devtools_resultstore_v2_Action,
    responseDeserialize: deserialize_google_devtools_resultstore_v2_Action,
  },
  // Retrieves all actions for a parent invocation/target/configuration.
  // This might be limited by user or server, in which case a continuation
  // token is provided.  Supports '-' for configurationId to mean all
  // actions for all configurations for a target, or '-' for targetId and
  // configurationId to mean all actions for all configurations and all targets.
  // Does not support targetId '-' with a specified configuration.
  // The order in which results are returned is undefined, but stable.
  //
  // An error will be reported in the following cases:
  // - If the parent is not found.
  // - If the given parent name is badly formatted.
  // - If no field mask was given.
  listActions: {
    path: '/google.devtools.resultstore.v2.ResultStoreDownload/ListActions',
    requestStream: false,
    responseStream: false,
    requestType: google_devtools_resultstore_v2_resultstore_download_pb.ListActionsRequest,
    responseType: google_devtools_resultstore_v2_resultstore_download_pb.ListActionsResponse,
    requestSerialize: serialize_google_devtools_resultstore_v2_ListActionsRequest,
    requestDeserialize: deserialize_google_devtools_resultstore_v2_ListActionsRequest,
    responseSerialize: serialize_google_devtools_resultstore_v2_ListActionsResponse,
    responseDeserialize: deserialize_google_devtools_resultstore_v2_ListActionsResponse,
  },
  // Retrieves the file set with the given name.
  //
  // An error will be reported in the following cases:
  // - If the file set or its parent invocation is not found.
  // - If the given file set name is badly formatted.
  // - If no field mask was given.
  getFileSet: {
    path: '/google.devtools.resultstore.v2.ResultStoreDownload/GetFileSet',
    requestStream: false,
    responseStream: false,
    requestType: google_devtools_resultstore_v2_resultstore_download_pb.GetFileSetRequest,
    responseType: google_devtools_resultstore_v2_file_set_pb.FileSet,
    requestSerialize: serialize_google_devtools_resultstore_v2_GetFileSetRequest,
    requestDeserialize: deserialize_google_devtools_resultstore_v2_GetFileSetRequest,
    responseSerialize: serialize_google_devtools_resultstore_v2_FileSet,
    responseDeserialize: deserialize_google_devtools_resultstore_v2_FileSet,
  },
  // Retrieves all file sets for a parent invocation.
  // This might be limited by user or server,
  // in which case a continuation token is provided.
  // The order in which results are returned is undefined, but stable.
  //
  // An error will be reported in the following cases:
  // - If the parent invocation is not found.
  // - If the given parent invocation name is badly formatted.
  // - If no field mask was given.
  listFileSets: {
    path: '/google.devtools.resultstore.v2.ResultStoreDownload/ListFileSets',
    requestStream: false,
    responseStream: false,
    requestType: google_devtools_resultstore_v2_resultstore_download_pb.ListFileSetsRequest,
    responseType: google_devtools_resultstore_v2_resultstore_download_pb.ListFileSetsResponse,
    requestSerialize: serialize_google_devtools_resultstore_v2_ListFileSetsRequest,
    requestDeserialize: deserialize_google_devtools_resultstore_v2_ListFileSetsRequest,
    responseSerialize: serialize_google_devtools_resultstore_v2_ListFileSetsResponse,
    responseDeserialize: deserialize_google_devtools_resultstore_v2_ListFileSetsResponse,
  },
  // Returns the transitive closure of FileSets. This might be limited by user
  // or server, in which case a continuation token is provided.
  // The order in which results are returned is undefined, and unstable.
  //
  // An error will be reported in the following cases:
  // - If page_token is too large to continue the calculation.
  // - If the resource is not found.
  // - If the given resource name is badly formatted.
  // - If no field mask was given.
  traverseFileSets: {
    path: '/google.devtools.resultstore.v2.ResultStoreDownload/TraverseFileSets',
    requestStream: false,
    responseStream: false,
    requestType: google_devtools_resultstore_v2_resultstore_download_pb.TraverseFileSetsRequest,
    responseType: google_devtools_resultstore_v2_resultstore_download_pb.TraverseFileSetsResponse,
    requestSerialize: serialize_google_devtools_resultstore_v2_TraverseFileSetsRequest,
    requestDeserialize: deserialize_google_devtools_resultstore_v2_TraverseFileSetsRequest,
    responseSerialize: serialize_google_devtools_resultstore_v2_TraverseFileSetsResponse,
    responseDeserialize: deserialize_google_devtools_resultstore_v2_TraverseFileSetsResponse,
  },
};

exports.ResultStoreDownloadClient = grpc.makeGenericClientConstructor(ResultStoreDownloadService);
