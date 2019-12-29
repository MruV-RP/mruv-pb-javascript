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
var google_cloud_datacatalog_v1beta1_datacatalog_pb = require('../../../../google/cloud/datacatalog/v1beta1/datacatalog_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_api_client_pb = require('../../../../google/api/client_pb.js');
var google_api_field_behavior_pb = require('../../../../google/api/field_behavior_pb.js');
var google_api_resource_pb = require('../../../../google/api/resource_pb.js');
var google_cloud_datacatalog_v1beta1_gcs_fileset_spec_pb = require('../../../../google/cloud/datacatalog/v1beta1/gcs_fileset_spec_pb.js');
var google_cloud_datacatalog_v1beta1_schema_pb = require('../../../../google/cloud/datacatalog/v1beta1/schema_pb.js');
var google_cloud_datacatalog_v1beta1_search_pb = require('../../../../google/cloud/datacatalog/v1beta1/search_pb.js');
var google_cloud_datacatalog_v1beta1_table_spec_pb = require('../../../../google/cloud/datacatalog/v1beta1/table_spec_pb.js');
var google_cloud_datacatalog_v1beta1_tags_pb = require('../../../../google/cloud/datacatalog/v1beta1/tags_pb.js');
var google_cloud_datacatalog_v1beta1_timestamps_pb = require('../../../../google/cloud/datacatalog/v1beta1/timestamps_pb.js');
var google_iam_v1_iam_policy_pb = require('../../../../google/iam/v1/iam_policy_pb.js');
var google_iam_v1_policy_pb = require('../../../../google/iam/v1/policy_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');

function serialize_google_cloud_datacatalog_v1beta1_CreateEntryGroupRequest(arg) {
  if (!(arg instanceof google_cloud_datacatalog_v1beta1_datacatalog_pb.CreateEntryGroupRequest)) {
    throw new Error('Expected argument of type google.cloud.datacatalog.v1beta1.CreateEntryGroupRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_datacatalog_v1beta1_CreateEntryGroupRequest(buffer_arg) {
  return google_cloud_datacatalog_v1beta1_datacatalog_pb.CreateEntryGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_datacatalog_v1beta1_CreateEntryRequest(arg) {
  if (!(arg instanceof google_cloud_datacatalog_v1beta1_datacatalog_pb.CreateEntryRequest)) {
    throw new Error('Expected argument of type google.cloud.datacatalog.v1beta1.CreateEntryRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_datacatalog_v1beta1_CreateEntryRequest(buffer_arg) {
  return google_cloud_datacatalog_v1beta1_datacatalog_pb.CreateEntryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_datacatalog_v1beta1_CreateTagRequest(arg) {
  if (!(arg instanceof google_cloud_datacatalog_v1beta1_datacatalog_pb.CreateTagRequest)) {
    throw new Error('Expected argument of type google.cloud.datacatalog.v1beta1.CreateTagRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_datacatalog_v1beta1_CreateTagRequest(buffer_arg) {
  return google_cloud_datacatalog_v1beta1_datacatalog_pb.CreateTagRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_datacatalog_v1beta1_CreateTagTemplateFieldRequest(arg) {
  if (!(arg instanceof google_cloud_datacatalog_v1beta1_datacatalog_pb.CreateTagTemplateFieldRequest)) {
    throw new Error('Expected argument of type google.cloud.datacatalog.v1beta1.CreateTagTemplateFieldRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_datacatalog_v1beta1_CreateTagTemplateFieldRequest(buffer_arg) {
  return google_cloud_datacatalog_v1beta1_datacatalog_pb.CreateTagTemplateFieldRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_datacatalog_v1beta1_CreateTagTemplateRequest(arg) {
  if (!(arg instanceof google_cloud_datacatalog_v1beta1_datacatalog_pb.CreateTagTemplateRequest)) {
    throw new Error('Expected argument of type google.cloud.datacatalog.v1beta1.CreateTagTemplateRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_datacatalog_v1beta1_CreateTagTemplateRequest(buffer_arg) {
  return google_cloud_datacatalog_v1beta1_datacatalog_pb.CreateTagTemplateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_datacatalog_v1beta1_DeleteEntryGroupRequest(arg) {
  if (!(arg instanceof google_cloud_datacatalog_v1beta1_datacatalog_pb.DeleteEntryGroupRequest)) {
    throw new Error('Expected argument of type google.cloud.datacatalog.v1beta1.DeleteEntryGroupRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_datacatalog_v1beta1_DeleteEntryGroupRequest(buffer_arg) {
  return google_cloud_datacatalog_v1beta1_datacatalog_pb.DeleteEntryGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_datacatalog_v1beta1_DeleteEntryRequest(arg) {
  if (!(arg instanceof google_cloud_datacatalog_v1beta1_datacatalog_pb.DeleteEntryRequest)) {
    throw new Error('Expected argument of type google.cloud.datacatalog.v1beta1.DeleteEntryRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_datacatalog_v1beta1_DeleteEntryRequest(buffer_arg) {
  return google_cloud_datacatalog_v1beta1_datacatalog_pb.DeleteEntryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_datacatalog_v1beta1_DeleteTagRequest(arg) {
  if (!(arg instanceof google_cloud_datacatalog_v1beta1_datacatalog_pb.DeleteTagRequest)) {
    throw new Error('Expected argument of type google.cloud.datacatalog.v1beta1.DeleteTagRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_datacatalog_v1beta1_DeleteTagRequest(buffer_arg) {
  return google_cloud_datacatalog_v1beta1_datacatalog_pb.DeleteTagRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_datacatalog_v1beta1_DeleteTagTemplateFieldRequest(arg) {
  if (!(arg instanceof google_cloud_datacatalog_v1beta1_datacatalog_pb.DeleteTagTemplateFieldRequest)) {
    throw new Error('Expected argument of type google.cloud.datacatalog.v1beta1.DeleteTagTemplateFieldRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_datacatalog_v1beta1_DeleteTagTemplateFieldRequest(buffer_arg) {
  return google_cloud_datacatalog_v1beta1_datacatalog_pb.DeleteTagTemplateFieldRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_datacatalog_v1beta1_DeleteTagTemplateRequest(arg) {
  if (!(arg instanceof google_cloud_datacatalog_v1beta1_datacatalog_pb.DeleteTagTemplateRequest)) {
    throw new Error('Expected argument of type google.cloud.datacatalog.v1beta1.DeleteTagTemplateRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_datacatalog_v1beta1_DeleteTagTemplateRequest(buffer_arg) {
  return google_cloud_datacatalog_v1beta1_datacatalog_pb.DeleteTagTemplateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_datacatalog_v1beta1_Entry(arg) {
  if (!(arg instanceof google_cloud_datacatalog_v1beta1_datacatalog_pb.Entry)) {
    throw new Error('Expected argument of type google.cloud.datacatalog.v1beta1.Entry');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_datacatalog_v1beta1_Entry(buffer_arg) {
  return google_cloud_datacatalog_v1beta1_datacatalog_pb.Entry.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_datacatalog_v1beta1_EntryGroup(arg) {
  if (!(arg instanceof google_cloud_datacatalog_v1beta1_datacatalog_pb.EntryGroup)) {
    throw new Error('Expected argument of type google.cloud.datacatalog.v1beta1.EntryGroup');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_datacatalog_v1beta1_EntryGroup(buffer_arg) {
  return google_cloud_datacatalog_v1beta1_datacatalog_pb.EntryGroup.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_datacatalog_v1beta1_GetEntryGroupRequest(arg) {
  if (!(arg instanceof google_cloud_datacatalog_v1beta1_datacatalog_pb.GetEntryGroupRequest)) {
    throw new Error('Expected argument of type google.cloud.datacatalog.v1beta1.GetEntryGroupRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_datacatalog_v1beta1_GetEntryGroupRequest(buffer_arg) {
  return google_cloud_datacatalog_v1beta1_datacatalog_pb.GetEntryGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_datacatalog_v1beta1_GetEntryRequest(arg) {
  if (!(arg instanceof google_cloud_datacatalog_v1beta1_datacatalog_pb.GetEntryRequest)) {
    throw new Error('Expected argument of type google.cloud.datacatalog.v1beta1.GetEntryRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_datacatalog_v1beta1_GetEntryRequest(buffer_arg) {
  return google_cloud_datacatalog_v1beta1_datacatalog_pb.GetEntryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_datacatalog_v1beta1_GetTagTemplateRequest(arg) {
  if (!(arg instanceof google_cloud_datacatalog_v1beta1_datacatalog_pb.GetTagTemplateRequest)) {
    throw new Error('Expected argument of type google.cloud.datacatalog.v1beta1.GetTagTemplateRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_datacatalog_v1beta1_GetTagTemplateRequest(buffer_arg) {
  return google_cloud_datacatalog_v1beta1_datacatalog_pb.GetTagTemplateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_datacatalog_v1beta1_ListTagsRequest(arg) {
  if (!(arg instanceof google_cloud_datacatalog_v1beta1_datacatalog_pb.ListTagsRequest)) {
    throw new Error('Expected argument of type google.cloud.datacatalog.v1beta1.ListTagsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_datacatalog_v1beta1_ListTagsRequest(buffer_arg) {
  return google_cloud_datacatalog_v1beta1_datacatalog_pb.ListTagsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_datacatalog_v1beta1_ListTagsResponse(arg) {
  if (!(arg instanceof google_cloud_datacatalog_v1beta1_datacatalog_pb.ListTagsResponse)) {
    throw new Error('Expected argument of type google.cloud.datacatalog.v1beta1.ListTagsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_datacatalog_v1beta1_ListTagsResponse(buffer_arg) {
  return google_cloud_datacatalog_v1beta1_datacatalog_pb.ListTagsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_datacatalog_v1beta1_LookupEntryRequest(arg) {
  if (!(arg instanceof google_cloud_datacatalog_v1beta1_datacatalog_pb.LookupEntryRequest)) {
    throw new Error('Expected argument of type google.cloud.datacatalog.v1beta1.LookupEntryRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_datacatalog_v1beta1_LookupEntryRequest(buffer_arg) {
  return google_cloud_datacatalog_v1beta1_datacatalog_pb.LookupEntryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_datacatalog_v1beta1_RenameTagTemplateFieldRequest(arg) {
  if (!(arg instanceof google_cloud_datacatalog_v1beta1_datacatalog_pb.RenameTagTemplateFieldRequest)) {
    throw new Error('Expected argument of type google.cloud.datacatalog.v1beta1.RenameTagTemplateFieldRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_datacatalog_v1beta1_RenameTagTemplateFieldRequest(buffer_arg) {
  return google_cloud_datacatalog_v1beta1_datacatalog_pb.RenameTagTemplateFieldRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_datacatalog_v1beta1_SearchCatalogRequest(arg) {
  if (!(arg instanceof google_cloud_datacatalog_v1beta1_datacatalog_pb.SearchCatalogRequest)) {
    throw new Error('Expected argument of type google.cloud.datacatalog.v1beta1.SearchCatalogRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_datacatalog_v1beta1_SearchCatalogRequest(buffer_arg) {
  return google_cloud_datacatalog_v1beta1_datacatalog_pb.SearchCatalogRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_datacatalog_v1beta1_SearchCatalogResponse(arg) {
  if (!(arg instanceof google_cloud_datacatalog_v1beta1_datacatalog_pb.SearchCatalogResponse)) {
    throw new Error('Expected argument of type google.cloud.datacatalog.v1beta1.SearchCatalogResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_datacatalog_v1beta1_SearchCatalogResponse(buffer_arg) {
  return google_cloud_datacatalog_v1beta1_datacatalog_pb.SearchCatalogResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_datacatalog_v1beta1_Tag(arg) {
  if (!(arg instanceof google_cloud_datacatalog_v1beta1_tags_pb.Tag)) {
    throw new Error('Expected argument of type google.cloud.datacatalog.v1beta1.Tag');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_datacatalog_v1beta1_Tag(buffer_arg) {
  return google_cloud_datacatalog_v1beta1_tags_pb.Tag.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_datacatalog_v1beta1_TagTemplate(arg) {
  if (!(arg instanceof google_cloud_datacatalog_v1beta1_tags_pb.TagTemplate)) {
    throw new Error('Expected argument of type google.cloud.datacatalog.v1beta1.TagTemplate');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_datacatalog_v1beta1_TagTemplate(buffer_arg) {
  return google_cloud_datacatalog_v1beta1_tags_pb.TagTemplate.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_datacatalog_v1beta1_TagTemplateField(arg) {
  if (!(arg instanceof google_cloud_datacatalog_v1beta1_tags_pb.TagTemplateField)) {
    throw new Error('Expected argument of type google.cloud.datacatalog.v1beta1.TagTemplateField');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_datacatalog_v1beta1_TagTemplateField(buffer_arg) {
  return google_cloud_datacatalog_v1beta1_tags_pb.TagTemplateField.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_datacatalog_v1beta1_UpdateEntryRequest(arg) {
  if (!(arg instanceof google_cloud_datacatalog_v1beta1_datacatalog_pb.UpdateEntryRequest)) {
    throw new Error('Expected argument of type google.cloud.datacatalog.v1beta1.UpdateEntryRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_datacatalog_v1beta1_UpdateEntryRequest(buffer_arg) {
  return google_cloud_datacatalog_v1beta1_datacatalog_pb.UpdateEntryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_datacatalog_v1beta1_UpdateTagRequest(arg) {
  if (!(arg instanceof google_cloud_datacatalog_v1beta1_datacatalog_pb.UpdateTagRequest)) {
    throw new Error('Expected argument of type google.cloud.datacatalog.v1beta1.UpdateTagRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_datacatalog_v1beta1_UpdateTagRequest(buffer_arg) {
  return google_cloud_datacatalog_v1beta1_datacatalog_pb.UpdateTagRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_datacatalog_v1beta1_UpdateTagTemplateFieldRequest(arg) {
  if (!(arg instanceof google_cloud_datacatalog_v1beta1_datacatalog_pb.UpdateTagTemplateFieldRequest)) {
    throw new Error('Expected argument of type google.cloud.datacatalog.v1beta1.UpdateTagTemplateFieldRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_datacatalog_v1beta1_UpdateTagTemplateFieldRequest(buffer_arg) {
  return google_cloud_datacatalog_v1beta1_datacatalog_pb.UpdateTagTemplateFieldRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_datacatalog_v1beta1_UpdateTagTemplateRequest(arg) {
  if (!(arg instanceof google_cloud_datacatalog_v1beta1_datacatalog_pb.UpdateTagTemplateRequest)) {
    throw new Error('Expected argument of type google.cloud.datacatalog.v1beta1.UpdateTagTemplateRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_datacatalog_v1beta1_UpdateTagTemplateRequest(buffer_arg) {
  return google_cloud_datacatalog_v1beta1_datacatalog_pb.UpdateTagTemplateRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


// Data Catalog API service allows clients to discover, understand, and manage
// their data.
var DataCatalogService = exports.DataCatalogService = {
  // Searches Data Catalog for multiple resources like entries, tags that
  // match a query.
  //
  // This is a custom method
  // (https://cloud.google.com/apis/design/custom_methods) and does not return
  // the complete resource, only the resource identifier and high level
  // fields. Clients can subsequentally call `Get` methods.
  //
  // Note that searches do not have full recall. There may be results that match
  // your query but are not returned, even in subsequent pages of results. These
  // missing results may vary across repeated calls to search. Do not rely on
  // this method if you need to guarantee full recall.
  //
  // See [Data Catalog Search
  // Syntax](/data-catalog/docs/how-to/search-reference) for more information.
  searchCatalog: {
    path: '/google.cloud.datacatalog.v1beta1.DataCatalog/SearchCatalog',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_datacatalog_v1beta1_datacatalog_pb.SearchCatalogRequest,
    responseType: google_cloud_datacatalog_v1beta1_datacatalog_pb.SearchCatalogResponse,
    requestSerialize: serialize_google_cloud_datacatalog_v1beta1_SearchCatalogRequest,
    requestDeserialize: deserialize_google_cloud_datacatalog_v1beta1_SearchCatalogRequest,
    responseSerialize: serialize_google_cloud_datacatalog_v1beta1_SearchCatalogResponse,
    responseDeserialize: deserialize_google_cloud_datacatalog_v1beta1_SearchCatalogResponse,
  },
  // Alpha feature.
  // Creates an EntryGroup.
  // The user should enable the Data Catalog API in the project identified by
  // the `parent` parameter (see [Data Catalog Resource Project]
  // (/data-catalog/docs/concepts/resource-project) for more information).
  createEntryGroup: {
    path: '/google.cloud.datacatalog.v1beta1.DataCatalog/CreateEntryGroup',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_datacatalog_v1beta1_datacatalog_pb.CreateEntryGroupRequest,
    responseType: google_cloud_datacatalog_v1beta1_datacatalog_pb.EntryGroup,
    requestSerialize: serialize_google_cloud_datacatalog_v1beta1_CreateEntryGroupRequest,
    requestDeserialize: deserialize_google_cloud_datacatalog_v1beta1_CreateEntryGroupRequest,
    responseSerialize: serialize_google_cloud_datacatalog_v1beta1_EntryGroup,
    responseDeserialize: deserialize_google_cloud_datacatalog_v1beta1_EntryGroup,
  },
  // Alpha feature.
  // Gets an EntryGroup.
  getEntryGroup: {
    path: '/google.cloud.datacatalog.v1beta1.DataCatalog/GetEntryGroup',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_datacatalog_v1beta1_datacatalog_pb.GetEntryGroupRequest,
    responseType: google_cloud_datacatalog_v1beta1_datacatalog_pb.EntryGroup,
    requestSerialize: serialize_google_cloud_datacatalog_v1beta1_GetEntryGroupRequest,
    requestDeserialize: deserialize_google_cloud_datacatalog_v1beta1_GetEntryGroupRequest,
    responseSerialize: serialize_google_cloud_datacatalog_v1beta1_EntryGroup,
    responseDeserialize: deserialize_google_cloud_datacatalog_v1beta1_EntryGroup,
  },
  // Alpha feature.
  // Deletes an EntryGroup. Only entry groups that do not contain entries can be
  // deleted. The user should enable the Data Catalog API in the project
  // identified by the `name` parameter (see [Data Catalog Resource Project]
  // (/data-catalog/docs/concepts/resource-project) for more information).
  deleteEntryGroup: {
    path: '/google.cloud.datacatalog.v1beta1.DataCatalog/DeleteEntryGroup',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_datacatalog_v1beta1_datacatalog_pb.DeleteEntryGroupRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_cloud_datacatalog_v1beta1_DeleteEntryGroupRequest,
    requestDeserialize: deserialize_google_cloud_datacatalog_v1beta1_DeleteEntryGroupRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Alpha feature.
  // Creates an entry. Currently only entries of 'FILESET' type can be created.
  // The user should enable the Data Catalog API in the project identified by
  // the `parent` parameter (see [Data Catalog Resource Project]
  // (/data-catalog/docs/concepts/resource-project) for more information).
  createEntry: {
    path: '/google.cloud.datacatalog.v1beta1.DataCatalog/CreateEntry',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_datacatalog_v1beta1_datacatalog_pb.CreateEntryRequest,
    responseType: google_cloud_datacatalog_v1beta1_datacatalog_pb.Entry,
    requestSerialize: serialize_google_cloud_datacatalog_v1beta1_CreateEntryRequest,
    requestDeserialize: deserialize_google_cloud_datacatalog_v1beta1_CreateEntryRequest,
    responseSerialize: serialize_google_cloud_datacatalog_v1beta1_Entry,
    responseDeserialize: deserialize_google_cloud_datacatalog_v1beta1_Entry,
  },
  // Updates an existing entry.
  // The user should enable the Data Catalog API in the project identified by
  // the `entry.name` parameter (see [Data Catalog Resource Project]
  // (/data-catalog/docs/concepts/resource-project) for more information).
  updateEntry: {
    path: '/google.cloud.datacatalog.v1beta1.DataCatalog/UpdateEntry',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_datacatalog_v1beta1_datacatalog_pb.UpdateEntryRequest,
    responseType: google_cloud_datacatalog_v1beta1_datacatalog_pb.Entry,
    requestSerialize: serialize_google_cloud_datacatalog_v1beta1_UpdateEntryRequest,
    requestDeserialize: deserialize_google_cloud_datacatalog_v1beta1_UpdateEntryRequest,
    responseSerialize: serialize_google_cloud_datacatalog_v1beta1_Entry,
    responseDeserialize: deserialize_google_cloud_datacatalog_v1beta1_Entry,
  },
  // Alpha feature.
  // Deletes an existing entry. Only entries created through
  // [CreateEntry][google.cloud.datacatalog.v1beta1.DataCatalog.CreateEntry]
  // method can be deleted.
  // The user should enable the Data Catalog API in the project identified by
  // the `name` parameter (see [Data Catalog Resource Project]
  // (/data-catalog/docs/concepts/resource-project) for more information).
  deleteEntry: {
    path: '/google.cloud.datacatalog.v1beta1.DataCatalog/DeleteEntry',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_datacatalog_v1beta1_datacatalog_pb.DeleteEntryRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_cloud_datacatalog_v1beta1_DeleteEntryRequest,
    requestDeserialize: deserialize_google_cloud_datacatalog_v1beta1_DeleteEntryRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Gets an entry.
  getEntry: {
    path: '/google.cloud.datacatalog.v1beta1.DataCatalog/GetEntry',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_datacatalog_v1beta1_datacatalog_pb.GetEntryRequest,
    responseType: google_cloud_datacatalog_v1beta1_datacatalog_pb.Entry,
    requestSerialize: serialize_google_cloud_datacatalog_v1beta1_GetEntryRequest,
    requestDeserialize: deserialize_google_cloud_datacatalog_v1beta1_GetEntryRequest,
    responseSerialize: serialize_google_cloud_datacatalog_v1beta1_Entry,
    responseDeserialize: deserialize_google_cloud_datacatalog_v1beta1_Entry,
  },
  // Get an entry by target resource name. This method allows clients to use
  // the resource name from the source Google Cloud Platform service to get the
  // Data Catalog Entry.
  lookupEntry: {
    path: '/google.cloud.datacatalog.v1beta1.DataCatalog/LookupEntry',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_datacatalog_v1beta1_datacatalog_pb.LookupEntryRequest,
    responseType: google_cloud_datacatalog_v1beta1_datacatalog_pb.Entry,
    requestSerialize: serialize_google_cloud_datacatalog_v1beta1_LookupEntryRequest,
    requestDeserialize: deserialize_google_cloud_datacatalog_v1beta1_LookupEntryRequest,
    responseSerialize: serialize_google_cloud_datacatalog_v1beta1_Entry,
    responseDeserialize: deserialize_google_cloud_datacatalog_v1beta1_Entry,
  },
  // Creates a tag template. The user should enable the Data Catalog API in
  // the project identified by the `parent` parameter (see [Data Catalog
  // Resource Project](/data-catalog/docs/concepts/resource-project) for more
  // information).
  createTagTemplate: {
    path: '/google.cloud.datacatalog.v1beta1.DataCatalog/CreateTagTemplate',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_datacatalog_v1beta1_datacatalog_pb.CreateTagTemplateRequest,
    responseType: google_cloud_datacatalog_v1beta1_tags_pb.TagTemplate,
    requestSerialize: serialize_google_cloud_datacatalog_v1beta1_CreateTagTemplateRequest,
    requestDeserialize: deserialize_google_cloud_datacatalog_v1beta1_CreateTagTemplateRequest,
    responseSerialize: serialize_google_cloud_datacatalog_v1beta1_TagTemplate,
    responseDeserialize: deserialize_google_cloud_datacatalog_v1beta1_TagTemplate,
  },
  // Gets a tag template.
  getTagTemplate: {
    path: '/google.cloud.datacatalog.v1beta1.DataCatalog/GetTagTemplate',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_datacatalog_v1beta1_datacatalog_pb.GetTagTemplateRequest,
    responseType: google_cloud_datacatalog_v1beta1_tags_pb.TagTemplate,
    requestSerialize: serialize_google_cloud_datacatalog_v1beta1_GetTagTemplateRequest,
    requestDeserialize: deserialize_google_cloud_datacatalog_v1beta1_GetTagTemplateRequest,
    responseSerialize: serialize_google_cloud_datacatalog_v1beta1_TagTemplate,
    responseDeserialize: deserialize_google_cloud_datacatalog_v1beta1_TagTemplate,
  },
  // Updates a tag template. This method cannot be used to update the fields of
  // a template. The tag template fields are represented as separate resources
  // and should be updated using their own create/update/delete methods.
  // The user should enable the Data Catalog API in the project identified by
  // the `tag_template.name` parameter (see [Data Catalog Resource Project]
  // (/data-catalog/docs/concepts/resource-project) for more information).
  updateTagTemplate: {
    path: '/google.cloud.datacatalog.v1beta1.DataCatalog/UpdateTagTemplate',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_datacatalog_v1beta1_datacatalog_pb.UpdateTagTemplateRequest,
    responseType: google_cloud_datacatalog_v1beta1_tags_pb.TagTemplate,
    requestSerialize: serialize_google_cloud_datacatalog_v1beta1_UpdateTagTemplateRequest,
    requestDeserialize: deserialize_google_cloud_datacatalog_v1beta1_UpdateTagTemplateRequest,
    responseSerialize: serialize_google_cloud_datacatalog_v1beta1_TagTemplate,
    responseDeserialize: deserialize_google_cloud_datacatalog_v1beta1_TagTemplate,
  },
  // Deletes a tag template and all tags using the template.
  // The user should enable the Data Catalog API in the project identified by
  // the `name` parameter (see [Data Catalog Resource Project]
  // (/data-catalog/docs/concepts/resource-project) for more information).
  deleteTagTemplate: {
    path: '/google.cloud.datacatalog.v1beta1.DataCatalog/DeleteTagTemplate',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_datacatalog_v1beta1_datacatalog_pb.DeleteTagTemplateRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_cloud_datacatalog_v1beta1_DeleteTagTemplateRequest,
    requestDeserialize: deserialize_google_cloud_datacatalog_v1beta1_DeleteTagTemplateRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Creates a field in a tag template. The user should enable the Data Catalog
  // API in the project identified by the `parent` parameter (see
  // [Data Catalog Resource
  // Project](/data-catalog/docs/concepts/resource-project) for more
  // information).
  createTagTemplateField: {
    path: '/google.cloud.datacatalog.v1beta1.DataCatalog/CreateTagTemplateField',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_datacatalog_v1beta1_datacatalog_pb.CreateTagTemplateFieldRequest,
    responseType: google_cloud_datacatalog_v1beta1_tags_pb.TagTemplateField,
    requestSerialize: serialize_google_cloud_datacatalog_v1beta1_CreateTagTemplateFieldRequest,
    requestDeserialize: deserialize_google_cloud_datacatalog_v1beta1_CreateTagTemplateFieldRequest,
    responseSerialize: serialize_google_cloud_datacatalog_v1beta1_TagTemplateField,
    responseDeserialize: deserialize_google_cloud_datacatalog_v1beta1_TagTemplateField,
  },
  // Updates a field in a tag template. This method cannot be used to update the
  // field type. The user should enable the Data Catalog API in the project
  // identified by the `name` parameter (see [Data Catalog Resource Project]
  // (/data-catalog/docs/concepts/resource-project) for more information).
  updateTagTemplateField: {
    path: '/google.cloud.datacatalog.v1beta1.DataCatalog/UpdateTagTemplateField',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_datacatalog_v1beta1_datacatalog_pb.UpdateTagTemplateFieldRequest,
    responseType: google_cloud_datacatalog_v1beta1_tags_pb.TagTemplateField,
    requestSerialize: serialize_google_cloud_datacatalog_v1beta1_UpdateTagTemplateFieldRequest,
    requestDeserialize: deserialize_google_cloud_datacatalog_v1beta1_UpdateTagTemplateFieldRequest,
    responseSerialize: serialize_google_cloud_datacatalog_v1beta1_TagTemplateField,
    responseDeserialize: deserialize_google_cloud_datacatalog_v1beta1_TagTemplateField,
  },
  // Renames a field in a tag template. The user should enable the Data Catalog
  // API in the project identified by the `name` parameter (see [Data Catalog
  // Resource Project](/data-catalog/docs/concepts/resource-project) for more
  // information).
  renameTagTemplateField: {
    path: '/google.cloud.datacatalog.v1beta1.DataCatalog/RenameTagTemplateField',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_datacatalog_v1beta1_datacatalog_pb.RenameTagTemplateFieldRequest,
    responseType: google_cloud_datacatalog_v1beta1_tags_pb.TagTemplateField,
    requestSerialize: serialize_google_cloud_datacatalog_v1beta1_RenameTagTemplateFieldRequest,
    requestDeserialize: deserialize_google_cloud_datacatalog_v1beta1_RenameTagTemplateFieldRequest,
    responseSerialize: serialize_google_cloud_datacatalog_v1beta1_TagTemplateField,
    responseDeserialize: deserialize_google_cloud_datacatalog_v1beta1_TagTemplateField,
  },
  // Deletes a field in a tag template and all uses of that field.
  // The user should enable the Data Catalog API in the project identified by
  // the `name` parameter (see [Data Catalog Resource Project]
  // (/data-catalog/docs/concepts/resource-project) for more information).
  deleteTagTemplateField: {
    path: '/google.cloud.datacatalog.v1beta1.DataCatalog/DeleteTagTemplateField',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_datacatalog_v1beta1_datacatalog_pb.DeleteTagTemplateFieldRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_cloud_datacatalog_v1beta1_DeleteTagTemplateFieldRequest,
    requestDeserialize: deserialize_google_cloud_datacatalog_v1beta1_DeleteTagTemplateFieldRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Creates a tag on an [Entry][google.cloud.datacatalog.v1beta1.Entry].
  // Note: The project identified by the `parent` parameter for the
  // [tag](/data-catalog/docs/reference/rest/v1beta1/projects.locations.entryGroups.entries.tags/create#path-parameters)
  // and the
  // [tag
  // template](/data-catalog/docs/reference/rest/v1beta1/projects.locations.tagTemplates/create#path-parameters)
  // used to create the tag must be from the same organization.
  createTag: {
    path: '/google.cloud.datacatalog.v1beta1.DataCatalog/CreateTag',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_datacatalog_v1beta1_datacatalog_pb.CreateTagRequest,
    responseType: google_cloud_datacatalog_v1beta1_tags_pb.Tag,
    requestSerialize: serialize_google_cloud_datacatalog_v1beta1_CreateTagRequest,
    requestDeserialize: deserialize_google_cloud_datacatalog_v1beta1_CreateTagRequest,
    responseSerialize: serialize_google_cloud_datacatalog_v1beta1_Tag,
    responseDeserialize: deserialize_google_cloud_datacatalog_v1beta1_Tag,
  },
  // Updates an existing tag.
  updateTag: {
    path: '/google.cloud.datacatalog.v1beta1.DataCatalog/UpdateTag',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_datacatalog_v1beta1_datacatalog_pb.UpdateTagRequest,
    responseType: google_cloud_datacatalog_v1beta1_tags_pb.Tag,
    requestSerialize: serialize_google_cloud_datacatalog_v1beta1_UpdateTagRequest,
    requestDeserialize: deserialize_google_cloud_datacatalog_v1beta1_UpdateTagRequest,
    responseSerialize: serialize_google_cloud_datacatalog_v1beta1_Tag,
    responseDeserialize: deserialize_google_cloud_datacatalog_v1beta1_Tag,
  },
  // Deletes a tag.
  deleteTag: {
    path: '/google.cloud.datacatalog.v1beta1.DataCatalog/DeleteTag',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_datacatalog_v1beta1_datacatalog_pb.DeleteTagRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_cloud_datacatalog_v1beta1_DeleteTagRequest,
    requestDeserialize: deserialize_google_cloud_datacatalog_v1beta1_DeleteTagRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Lists the tags on an [Entry][google.cloud.datacatalog.v1beta1.Entry].
  listTags: {
    path: '/google.cloud.datacatalog.v1beta1.DataCatalog/ListTags',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_datacatalog_v1beta1_datacatalog_pb.ListTagsRequest,
    responseType: google_cloud_datacatalog_v1beta1_datacatalog_pb.ListTagsResponse,
    requestSerialize: serialize_google_cloud_datacatalog_v1beta1_ListTagsRequest,
    requestDeserialize: deserialize_google_cloud_datacatalog_v1beta1_ListTagsRequest,
    responseSerialize: serialize_google_cloud_datacatalog_v1beta1_ListTagsResponse,
    responseDeserialize: deserialize_google_cloud_datacatalog_v1beta1_ListTagsResponse,
  },
  // Sets the access control policy for a resource. Replaces any existing
  // policy.
  // Supported resources are:
  //   - Tag templates.
  //   - Entries.
  //   - Entry groups.
  // Note, this method cannot be used to manage policies for BigQuery, Cloud
  // Pub/Sub and any external Google Cloud Platform resources synced to Cloud
  // Data Catalog.
  //
  // Callers must have following Google IAM permission
  //   - `datacatalog.tagTemplates.setIamPolicy` to set policies on tag
  //     templates.
  //   - `datacatalog.entries.setIamPolicy` to set policies on entries.
  //   - `datacatalog.entryGroups.setIamPolicy` to set policies on entry groups.
  setIamPolicy: {
    path: '/google.cloud.datacatalog.v1beta1.DataCatalog/SetIamPolicy',
    requestStream: false,
    responseStream: false,
    requestType: google_iam_v1_iam_policy_pb.SetIamPolicyRequest,
    responseType: google_iam_v1_policy_pb.Policy,
    requestSerialize: serialize_google_iam_v1_SetIamPolicyRequest,
    requestDeserialize: deserialize_google_iam_v1_SetIamPolicyRequest,
    responseSerialize: serialize_google_iam_v1_Policy,
    responseDeserialize: deserialize_google_iam_v1_Policy,
  },
  // Gets the access control policy for a resource. A `NOT_FOUND` error
  // is returned if the resource does not exist. An empty policy is returned
  // if the resource exists but does not have a policy set on it.
  //
  // Supported resources are:
  //   - Tag templates.
  //   - Entries.
  //   - Entry groups.
  // Note, this method cannot be used to manage policies for BigQuery, Cloud
  // Pub/Sub and any external Google Cloud Platform resources synced to Cloud
  // Data Catalog.
  //
  // Callers must have following Google IAM permission
  //   - `datacatalog.tagTemplates.getIamPolicy` to get policies on tag
  //     templates.
  //   - `datacatalog.entries.getIamPolicy` to get policies on entries.
  //   - `datacatalog.entryGroups.getIamPolicy` to get policies on entry groups.
  getIamPolicy: {
    path: '/google.cloud.datacatalog.v1beta1.DataCatalog/GetIamPolicy',
    requestStream: false,
    responseStream: false,
    requestType: google_iam_v1_iam_policy_pb.GetIamPolicyRequest,
    responseType: google_iam_v1_policy_pb.Policy,
    requestSerialize: serialize_google_iam_v1_GetIamPolicyRequest,
    requestDeserialize: deserialize_google_iam_v1_GetIamPolicyRequest,
    responseSerialize: serialize_google_iam_v1_Policy,
    responseDeserialize: deserialize_google_iam_v1_Policy,
  },
  // Returns the caller's permissions on a resource.
  // If the resource does not exist, an empty set of permissions is returned
  // (We don't return a `NOT_FOUND` error).
  //
  // Supported resources are:
  //   - Tag templates.
  //   - Entries.
  //   - Entry groups.
  // Note, this method cannot be used to manage policies for BigQuery, Cloud
  // Pub/Sub and any external Google Cloud Platform resources synced to Cloud
  // Data Catalog.
  //
  // A caller is not required to have Google IAM permission to make this
  // request.
  testIamPermissions: {
    path: '/google.cloud.datacatalog.v1beta1.DataCatalog/TestIamPermissions',
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

exports.DataCatalogClient = grpc.makeGenericClientConstructor(DataCatalogService);
