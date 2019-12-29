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
var google_cloud_securitycenter_v1_securitycenter_service_pb = require('../../../../google/cloud/securitycenter/v1/securitycenter_service_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_cloud_securitycenter_v1_asset_pb = require('../../../../google/cloud/securitycenter/v1/asset_pb.js');
var google_cloud_securitycenter_v1_finding_pb = require('../../../../google/cloud/securitycenter/v1/finding_pb.js');
var google_cloud_securitycenter_v1_organization_settings_pb = require('../../../../google/cloud/securitycenter/v1/organization_settings_pb.js');
var google_cloud_securitycenter_v1_run_asset_discovery_response_pb = require('../../../../google/cloud/securitycenter/v1/run_asset_discovery_response_pb.js');
var google_cloud_securitycenter_v1_security_marks_pb = require('../../../../google/cloud/securitycenter/v1/security_marks_pb.js');
var google_cloud_securitycenter_v1_source_pb = require('../../../../google/cloud/securitycenter/v1/source_pb.js');
var google_iam_v1_iam_policy_pb = require('../../../../google/iam/v1/iam_policy_pb.js');
var google_iam_v1_policy_pb = require('../../../../google/iam/v1/policy_pb.js');
var google_longrunning_operations_pb = require('../../../../google/longrunning/operations_pb.js');
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_google_cloud_securitycenter_v1_CreateFindingRequest(arg) {
  if (!(arg instanceof google_cloud_securitycenter_v1_securitycenter_service_pb.CreateFindingRequest)) {
    throw new Error('Expected argument of type google.cloud.securitycenter.v1.CreateFindingRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_securitycenter_v1_CreateFindingRequest(buffer_arg) {
  return google_cloud_securitycenter_v1_securitycenter_service_pb.CreateFindingRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_securitycenter_v1_CreateSourceRequest(arg) {
  if (!(arg instanceof google_cloud_securitycenter_v1_securitycenter_service_pb.CreateSourceRequest)) {
    throw new Error('Expected argument of type google.cloud.securitycenter.v1.CreateSourceRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_securitycenter_v1_CreateSourceRequest(buffer_arg) {
  return google_cloud_securitycenter_v1_securitycenter_service_pb.CreateSourceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_securitycenter_v1_Finding(arg) {
  if (!(arg instanceof google_cloud_securitycenter_v1_finding_pb.Finding)) {
    throw new Error('Expected argument of type google.cloud.securitycenter.v1.Finding');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_securitycenter_v1_Finding(buffer_arg) {
  return google_cloud_securitycenter_v1_finding_pb.Finding.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_securitycenter_v1_GetOrganizationSettingsRequest(arg) {
  if (!(arg instanceof google_cloud_securitycenter_v1_securitycenter_service_pb.GetOrganizationSettingsRequest)) {
    throw new Error('Expected argument of type google.cloud.securitycenter.v1.GetOrganizationSettingsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_securitycenter_v1_GetOrganizationSettingsRequest(buffer_arg) {
  return google_cloud_securitycenter_v1_securitycenter_service_pb.GetOrganizationSettingsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_securitycenter_v1_GetSourceRequest(arg) {
  if (!(arg instanceof google_cloud_securitycenter_v1_securitycenter_service_pb.GetSourceRequest)) {
    throw new Error('Expected argument of type google.cloud.securitycenter.v1.GetSourceRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_securitycenter_v1_GetSourceRequest(buffer_arg) {
  return google_cloud_securitycenter_v1_securitycenter_service_pb.GetSourceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_securitycenter_v1_GroupAssetsRequest(arg) {
  if (!(arg instanceof google_cloud_securitycenter_v1_securitycenter_service_pb.GroupAssetsRequest)) {
    throw new Error('Expected argument of type google.cloud.securitycenter.v1.GroupAssetsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_securitycenter_v1_GroupAssetsRequest(buffer_arg) {
  return google_cloud_securitycenter_v1_securitycenter_service_pb.GroupAssetsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_securitycenter_v1_GroupAssetsResponse(arg) {
  if (!(arg instanceof google_cloud_securitycenter_v1_securitycenter_service_pb.GroupAssetsResponse)) {
    throw new Error('Expected argument of type google.cloud.securitycenter.v1.GroupAssetsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_securitycenter_v1_GroupAssetsResponse(buffer_arg) {
  return google_cloud_securitycenter_v1_securitycenter_service_pb.GroupAssetsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_securitycenter_v1_GroupFindingsRequest(arg) {
  if (!(arg instanceof google_cloud_securitycenter_v1_securitycenter_service_pb.GroupFindingsRequest)) {
    throw new Error('Expected argument of type google.cloud.securitycenter.v1.GroupFindingsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_securitycenter_v1_GroupFindingsRequest(buffer_arg) {
  return google_cloud_securitycenter_v1_securitycenter_service_pb.GroupFindingsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_securitycenter_v1_GroupFindingsResponse(arg) {
  if (!(arg instanceof google_cloud_securitycenter_v1_securitycenter_service_pb.GroupFindingsResponse)) {
    throw new Error('Expected argument of type google.cloud.securitycenter.v1.GroupFindingsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_securitycenter_v1_GroupFindingsResponse(buffer_arg) {
  return google_cloud_securitycenter_v1_securitycenter_service_pb.GroupFindingsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_securitycenter_v1_ListAssetsRequest(arg) {
  if (!(arg instanceof google_cloud_securitycenter_v1_securitycenter_service_pb.ListAssetsRequest)) {
    throw new Error('Expected argument of type google.cloud.securitycenter.v1.ListAssetsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_securitycenter_v1_ListAssetsRequest(buffer_arg) {
  return google_cloud_securitycenter_v1_securitycenter_service_pb.ListAssetsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_securitycenter_v1_ListAssetsResponse(arg) {
  if (!(arg instanceof google_cloud_securitycenter_v1_securitycenter_service_pb.ListAssetsResponse)) {
    throw new Error('Expected argument of type google.cloud.securitycenter.v1.ListAssetsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_securitycenter_v1_ListAssetsResponse(buffer_arg) {
  return google_cloud_securitycenter_v1_securitycenter_service_pb.ListAssetsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_securitycenter_v1_ListFindingsRequest(arg) {
  if (!(arg instanceof google_cloud_securitycenter_v1_securitycenter_service_pb.ListFindingsRequest)) {
    throw new Error('Expected argument of type google.cloud.securitycenter.v1.ListFindingsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_securitycenter_v1_ListFindingsRequest(buffer_arg) {
  return google_cloud_securitycenter_v1_securitycenter_service_pb.ListFindingsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_securitycenter_v1_ListFindingsResponse(arg) {
  if (!(arg instanceof google_cloud_securitycenter_v1_securitycenter_service_pb.ListFindingsResponse)) {
    throw new Error('Expected argument of type google.cloud.securitycenter.v1.ListFindingsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_securitycenter_v1_ListFindingsResponse(buffer_arg) {
  return google_cloud_securitycenter_v1_securitycenter_service_pb.ListFindingsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_securitycenter_v1_ListSourcesRequest(arg) {
  if (!(arg instanceof google_cloud_securitycenter_v1_securitycenter_service_pb.ListSourcesRequest)) {
    throw new Error('Expected argument of type google.cloud.securitycenter.v1.ListSourcesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_securitycenter_v1_ListSourcesRequest(buffer_arg) {
  return google_cloud_securitycenter_v1_securitycenter_service_pb.ListSourcesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_securitycenter_v1_ListSourcesResponse(arg) {
  if (!(arg instanceof google_cloud_securitycenter_v1_securitycenter_service_pb.ListSourcesResponse)) {
    throw new Error('Expected argument of type google.cloud.securitycenter.v1.ListSourcesResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_securitycenter_v1_ListSourcesResponse(buffer_arg) {
  return google_cloud_securitycenter_v1_securitycenter_service_pb.ListSourcesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_securitycenter_v1_OrganizationSettings(arg) {
  if (!(arg instanceof google_cloud_securitycenter_v1_organization_settings_pb.OrganizationSettings)) {
    throw new Error('Expected argument of type google.cloud.securitycenter.v1.OrganizationSettings');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_securitycenter_v1_OrganizationSettings(buffer_arg) {
  return google_cloud_securitycenter_v1_organization_settings_pb.OrganizationSettings.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_securitycenter_v1_RunAssetDiscoveryRequest(arg) {
  if (!(arg instanceof google_cloud_securitycenter_v1_securitycenter_service_pb.RunAssetDiscoveryRequest)) {
    throw new Error('Expected argument of type google.cloud.securitycenter.v1.RunAssetDiscoveryRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_securitycenter_v1_RunAssetDiscoveryRequest(buffer_arg) {
  return google_cloud_securitycenter_v1_securitycenter_service_pb.RunAssetDiscoveryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_securitycenter_v1_SecurityMarks(arg) {
  if (!(arg instanceof google_cloud_securitycenter_v1_security_marks_pb.SecurityMarks)) {
    throw new Error('Expected argument of type google.cloud.securitycenter.v1.SecurityMarks');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_securitycenter_v1_SecurityMarks(buffer_arg) {
  return google_cloud_securitycenter_v1_security_marks_pb.SecurityMarks.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_securitycenter_v1_SetFindingStateRequest(arg) {
  if (!(arg instanceof google_cloud_securitycenter_v1_securitycenter_service_pb.SetFindingStateRequest)) {
    throw new Error('Expected argument of type google.cloud.securitycenter.v1.SetFindingStateRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_securitycenter_v1_SetFindingStateRequest(buffer_arg) {
  return google_cloud_securitycenter_v1_securitycenter_service_pb.SetFindingStateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_securitycenter_v1_Source(arg) {
  if (!(arg instanceof google_cloud_securitycenter_v1_source_pb.Source)) {
    throw new Error('Expected argument of type google.cloud.securitycenter.v1.Source');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_securitycenter_v1_Source(buffer_arg) {
  return google_cloud_securitycenter_v1_source_pb.Source.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_securitycenter_v1_UpdateFindingRequest(arg) {
  if (!(arg instanceof google_cloud_securitycenter_v1_securitycenter_service_pb.UpdateFindingRequest)) {
    throw new Error('Expected argument of type google.cloud.securitycenter.v1.UpdateFindingRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_securitycenter_v1_UpdateFindingRequest(buffer_arg) {
  return google_cloud_securitycenter_v1_securitycenter_service_pb.UpdateFindingRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_securitycenter_v1_UpdateOrganizationSettingsRequest(arg) {
  if (!(arg instanceof google_cloud_securitycenter_v1_securitycenter_service_pb.UpdateOrganizationSettingsRequest)) {
    throw new Error('Expected argument of type google.cloud.securitycenter.v1.UpdateOrganizationSettingsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_securitycenter_v1_UpdateOrganizationSettingsRequest(buffer_arg) {
  return google_cloud_securitycenter_v1_securitycenter_service_pb.UpdateOrganizationSettingsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_securitycenter_v1_UpdateSecurityMarksRequest(arg) {
  if (!(arg instanceof google_cloud_securitycenter_v1_securitycenter_service_pb.UpdateSecurityMarksRequest)) {
    throw new Error('Expected argument of type google.cloud.securitycenter.v1.UpdateSecurityMarksRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_securitycenter_v1_UpdateSecurityMarksRequest(buffer_arg) {
  return google_cloud_securitycenter_v1_securitycenter_service_pb.UpdateSecurityMarksRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_securitycenter_v1_UpdateSourceRequest(arg) {
  if (!(arg instanceof google_cloud_securitycenter_v1_securitycenter_service_pb.UpdateSourceRequest)) {
    throw new Error('Expected argument of type google.cloud.securitycenter.v1.UpdateSourceRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_securitycenter_v1_UpdateSourceRequest(buffer_arg) {
  return google_cloud_securitycenter_v1_securitycenter_service_pb.UpdateSourceRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


// V1 APIs for Security Center service.
var SecurityCenterService = exports.SecurityCenterService = {
  // Creates a source.
  createSource: {
    path: '/google.cloud.securitycenter.v1.SecurityCenter/CreateSource',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_securitycenter_v1_securitycenter_service_pb.CreateSourceRequest,
    responseType: google_cloud_securitycenter_v1_source_pb.Source,
    requestSerialize: serialize_google_cloud_securitycenter_v1_CreateSourceRequest,
    requestDeserialize: deserialize_google_cloud_securitycenter_v1_CreateSourceRequest,
    responseSerialize: serialize_google_cloud_securitycenter_v1_Source,
    responseDeserialize: deserialize_google_cloud_securitycenter_v1_Source,
  },
  // Creates a finding. The corresponding source must exist for finding creation
  // to succeed.
  createFinding: {
    path: '/google.cloud.securitycenter.v1.SecurityCenter/CreateFinding',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_securitycenter_v1_securitycenter_service_pb.CreateFindingRequest,
    responseType: google_cloud_securitycenter_v1_finding_pb.Finding,
    requestSerialize: serialize_google_cloud_securitycenter_v1_CreateFindingRequest,
    requestDeserialize: deserialize_google_cloud_securitycenter_v1_CreateFindingRequest,
    responseSerialize: serialize_google_cloud_securitycenter_v1_Finding,
    responseDeserialize: deserialize_google_cloud_securitycenter_v1_Finding,
  },
  // Gets the access control policy on the specified Source.
  getIamPolicy: {
    path: '/google.cloud.securitycenter.v1.SecurityCenter/GetIamPolicy',
    requestStream: false,
    responseStream: false,
    requestType: google_iam_v1_iam_policy_pb.GetIamPolicyRequest,
    responseType: google_iam_v1_policy_pb.Policy,
    requestSerialize: serialize_google_iam_v1_GetIamPolicyRequest,
    requestDeserialize: deserialize_google_iam_v1_GetIamPolicyRequest,
    responseSerialize: serialize_google_iam_v1_Policy,
    responseDeserialize: deserialize_google_iam_v1_Policy,
  },
  // Gets the settings for an organization.
  getOrganizationSettings: {
    path: '/google.cloud.securitycenter.v1.SecurityCenter/GetOrganizationSettings',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_securitycenter_v1_securitycenter_service_pb.GetOrganizationSettingsRequest,
    responseType: google_cloud_securitycenter_v1_organization_settings_pb.OrganizationSettings,
    requestSerialize: serialize_google_cloud_securitycenter_v1_GetOrganizationSettingsRequest,
    requestDeserialize: deserialize_google_cloud_securitycenter_v1_GetOrganizationSettingsRequest,
    responseSerialize: serialize_google_cloud_securitycenter_v1_OrganizationSettings,
    responseDeserialize: deserialize_google_cloud_securitycenter_v1_OrganizationSettings,
  },
  // Gets a source.
  getSource: {
    path: '/google.cloud.securitycenter.v1.SecurityCenter/GetSource',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_securitycenter_v1_securitycenter_service_pb.GetSourceRequest,
    responseType: google_cloud_securitycenter_v1_source_pb.Source,
    requestSerialize: serialize_google_cloud_securitycenter_v1_GetSourceRequest,
    requestDeserialize: deserialize_google_cloud_securitycenter_v1_GetSourceRequest,
    responseSerialize: serialize_google_cloud_securitycenter_v1_Source,
    responseDeserialize: deserialize_google_cloud_securitycenter_v1_Source,
  },
  // Filters an organization's assets and  groups them by their specified
  // properties.
  groupAssets: {
    path: '/google.cloud.securitycenter.v1.SecurityCenter/GroupAssets',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_securitycenter_v1_securitycenter_service_pb.GroupAssetsRequest,
    responseType: google_cloud_securitycenter_v1_securitycenter_service_pb.GroupAssetsResponse,
    requestSerialize: serialize_google_cloud_securitycenter_v1_GroupAssetsRequest,
    requestDeserialize: deserialize_google_cloud_securitycenter_v1_GroupAssetsRequest,
    responseSerialize: serialize_google_cloud_securitycenter_v1_GroupAssetsResponse,
    responseDeserialize: deserialize_google_cloud_securitycenter_v1_GroupAssetsResponse,
  },
  // Filters an organization or source's findings and  groups them by their
  // specified properties.
  //
  // To group across all sources provide a `-` as the source id.
  // Example: /v1/organizations/123/sources/-/findings
  groupFindings: {
    path: '/google.cloud.securitycenter.v1.SecurityCenter/GroupFindings',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_securitycenter_v1_securitycenter_service_pb.GroupFindingsRequest,
    responseType: google_cloud_securitycenter_v1_securitycenter_service_pb.GroupFindingsResponse,
    requestSerialize: serialize_google_cloud_securitycenter_v1_GroupFindingsRequest,
    requestDeserialize: deserialize_google_cloud_securitycenter_v1_GroupFindingsRequest,
    responseSerialize: serialize_google_cloud_securitycenter_v1_GroupFindingsResponse,
    responseDeserialize: deserialize_google_cloud_securitycenter_v1_GroupFindingsResponse,
  },
  // Lists an organization's assets.
  listAssets: {
    path: '/google.cloud.securitycenter.v1.SecurityCenter/ListAssets',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_securitycenter_v1_securitycenter_service_pb.ListAssetsRequest,
    responseType: google_cloud_securitycenter_v1_securitycenter_service_pb.ListAssetsResponse,
    requestSerialize: serialize_google_cloud_securitycenter_v1_ListAssetsRequest,
    requestDeserialize: deserialize_google_cloud_securitycenter_v1_ListAssetsRequest,
    responseSerialize: serialize_google_cloud_securitycenter_v1_ListAssetsResponse,
    responseDeserialize: deserialize_google_cloud_securitycenter_v1_ListAssetsResponse,
  },
  // Lists an organization or source's findings.
  //
  // To list across all sources provide a `-` as the source id.
  // Example: /v1/organizations/123/sources/-/findings
  listFindings: {
    path: '/google.cloud.securitycenter.v1.SecurityCenter/ListFindings',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_securitycenter_v1_securitycenter_service_pb.ListFindingsRequest,
    responseType: google_cloud_securitycenter_v1_securitycenter_service_pb.ListFindingsResponse,
    requestSerialize: serialize_google_cloud_securitycenter_v1_ListFindingsRequest,
    requestDeserialize: deserialize_google_cloud_securitycenter_v1_ListFindingsRequest,
    responseSerialize: serialize_google_cloud_securitycenter_v1_ListFindingsResponse,
    responseDeserialize: deserialize_google_cloud_securitycenter_v1_ListFindingsResponse,
  },
  // Lists all sources belonging to an organization.
  listSources: {
    path: '/google.cloud.securitycenter.v1.SecurityCenter/ListSources',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_securitycenter_v1_securitycenter_service_pb.ListSourcesRequest,
    responseType: google_cloud_securitycenter_v1_securitycenter_service_pb.ListSourcesResponse,
    requestSerialize: serialize_google_cloud_securitycenter_v1_ListSourcesRequest,
    requestDeserialize: deserialize_google_cloud_securitycenter_v1_ListSourcesRequest,
    responseSerialize: serialize_google_cloud_securitycenter_v1_ListSourcesResponse,
    responseDeserialize: deserialize_google_cloud_securitycenter_v1_ListSourcesResponse,
  },
  // Runs asset discovery. The discovery is tracked with a long-running
  // operation.
  //
  // This API can only be called with limited frequency for an organization. If
  // it is called too frequently the caller will receive a TOO_MANY_REQUESTS
  // error.
  runAssetDiscovery: {
    path: '/google.cloud.securitycenter.v1.SecurityCenter/RunAssetDiscovery',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_securitycenter_v1_securitycenter_service_pb.RunAssetDiscoveryRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_cloud_securitycenter_v1_RunAssetDiscoveryRequest,
    requestDeserialize: deserialize_google_cloud_securitycenter_v1_RunAssetDiscoveryRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Updates the state of a finding.
  setFindingState: {
    path: '/google.cloud.securitycenter.v1.SecurityCenter/SetFindingState',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_securitycenter_v1_securitycenter_service_pb.SetFindingStateRequest,
    responseType: google_cloud_securitycenter_v1_finding_pb.Finding,
    requestSerialize: serialize_google_cloud_securitycenter_v1_SetFindingStateRequest,
    requestDeserialize: deserialize_google_cloud_securitycenter_v1_SetFindingStateRequest,
    responseSerialize: serialize_google_cloud_securitycenter_v1_Finding,
    responseDeserialize: deserialize_google_cloud_securitycenter_v1_Finding,
  },
  // Sets the access control policy on the specified Source.
  setIamPolicy: {
    path: '/google.cloud.securitycenter.v1.SecurityCenter/SetIamPolicy',
    requestStream: false,
    responseStream: false,
    requestType: google_iam_v1_iam_policy_pb.SetIamPolicyRequest,
    responseType: google_iam_v1_policy_pb.Policy,
    requestSerialize: serialize_google_iam_v1_SetIamPolicyRequest,
    requestDeserialize: deserialize_google_iam_v1_SetIamPolicyRequest,
    responseSerialize: serialize_google_iam_v1_Policy,
    responseDeserialize: deserialize_google_iam_v1_Policy,
  },
  // Returns the permissions that a caller has on the specified source.
  testIamPermissions: {
    path: '/google.cloud.securitycenter.v1.SecurityCenter/TestIamPermissions',
    requestStream: false,
    responseStream: false,
    requestType: google_iam_v1_iam_policy_pb.TestIamPermissionsRequest,
    responseType: google_iam_v1_iam_policy_pb.TestIamPermissionsResponse,
    requestSerialize: serialize_google_iam_v1_TestIamPermissionsRequest,
    requestDeserialize: deserialize_google_iam_v1_TestIamPermissionsRequest,
    responseSerialize: serialize_google_iam_v1_TestIamPermissionsResponse,
    responseDeserialize: deserialize_google_iam_v1_TestIamPermissionsResponse,
  },
  // Creates or updates a finding. The corresponding source must exist for a
  // finding creation to succeed.
  updateFinding: {
    path: '/google.cloud.securitycenter.v1.SecurityCenter/UpdateFinding',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_securitycenter_v1_securitycenter_service_pb.UpdateFindingRequest,
    responseType: google_cloud_securitycenter_v1_finding_pb.Finding,
    requestSerialize: serialize_google_cloud_securitycenter_v1_UpdateFindingRequest,
    requestDeserialize: deserialize_google_cloud_securitycenter_v1_UpdateFindingRequest,
    responseSerialize: serialize_google_cloud_securitycenter_v1_Finding,
    responseDeserialize: deserialize_google_cloud_securitycenter_v1_Finding,
  },
  // Updates an organization's settings.
  updateOrganizationSettings: {
    path: '/google.cloud.securitycenter.v1.SecurityCenter/UpdateOrganizationSettings',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_securitycenter_v1_securitycenter_service_pb.UpdateOrganizationSettingsRequest,
    responseType: google_cloud_securitycenter_v1_organization_settings_pb.OrganizationSettings,
    requestSerialize: serialize_google_cloud_securitycenter_v1_UpdateOrganizationSettingsRequest,
    requestDeserialize: deserialize_google_cloud_securitycenter_v1_UpdateOrganizationSettingsRequest,
    responseSerialize: serialize_google_cloud_securitycenter_v1_OrganizationSettings,
    responseDeserialize: deserialize_google_cloud_securitycenter_v1_OrganizationSettings,
  },
  // Updates a source.
  updateSource: {
    path: '/google.cloud.securitycenter.v1.SecurityCenter/UpdateSource',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_securitycenter_v1_securitycenter_service_pb.UpdateSourceRequest,
    responseType: google_cloud_securitycenter_v1_source_pb.Source,
    requestSerialize: serialize_google_cloud_securitycenter_v1_UpdateSourceRequest,
    requestDeserialize: deserialize_google_cloud_securitycenter_v1_UpdateSourceRequest,
    responseSerialize: serialize_google_cloud_securitycenter_v1_Source,
    responseDeserialize: deserialize_google_cloud_securitycenter_v1_Source,
  },
  // Updates security marks.
  updateSecurityMarks: {
    path: '/google.cloud.securitycenter.v1.SecurityCenter/UpdateSecurityMarks',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_securitycenter_v1_securitycenter_service_pb.UpdateSecurityMarksRequest,
    responseType: google_cloud_securitycenter_v1_security_marks_pb.SecurityMarks,
    requestSerialize: serialize_google_cloud_securitycenter_v1_UpdateSecurityMarksRequest,
    requestDeserialize: deserialize_google_cloud_securitycenter_v1_UpdateSecurityMarksRequest,
    responseSerialize: serialize_google_cloud_securitycenter_v1_SecurityMarks,
    responseDeserialize: deserialize_google_cloud_securitycenter_v1_SecurityMarks,
  },
};

exports.SecurityCenterClient = grpc.makeGenericClientConstructor(SecurityCenterService);
