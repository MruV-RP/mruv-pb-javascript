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
var google_cloud_resourcemanager_v2_folders_pb = require('../../../../google/cloud/resourcemanager/v2/folders_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_api_client_pb = require('../../../../google/api/client_pb.js');
var google_api_field_behavior_pb = require('../../../../google/api/field_behavior_pb.js');
var google_api_resource_pb = require('../../../../google/api/resource_pb.js');
var google_iam_v1_iam_policy_pb = require('../../../../google/iam/v1/iam_policy_pb.js');
var google_iam_v1_policy_pb = require('../../../../google/iam/v1/policy_pb.js');
var google_longrunning_operations_pb = require('../../../../google/longrunning/operations_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_google_cloud_resourcemanager_v2_CreateFolderRequest(arg) {
  if (!(arg instanceof google_cloud_resourcemanager_v2_folders_pb.CreateFolderRequest)) {
    throw new Error('Expected argument of type google.cloud.resourcemanager.v2.CreateFolderRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_resourcemanager_v2_CreateFolderRequest(buffer_arg) {
  return google_cloud_resourcemanager_v2_folders_pb.CreateFolderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_resourcemanager_v2_DeleteFolderRequest(arg) {
  if (!(arg instanceof google_cloud_resourcemanager_v2_folders_pb.DeleteFolderRequest)) {
    throw new Error('Expected argument of type google.cloud.resourcemanager.v2.DeleteFolderRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_resourcemanager_v2_DeleteFolderRequest(buffer_arg) {
  return google_cloud_resourcemanager_v2_folders_pb.DeleteFolderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_resourcemanager_v2_Folder(arg) {
  if (!(arg instanceof google_cloud_resourcemanager_v2_folders_pb.Folder)) {
    throw new Error('Expected argument of type google.cloud.resourcemanager.v2.Folder');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_resourcemanager_v2_Folder(buffer_arg) {
  return google_cloud_resourcemanager_v2_folders_pb.Folder.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_resourcemanager_v2_GetFolderRequest(arg) {
  if (!(arg instanceof google_cloud_resourcemanager_v2_folders_pb.GetFolderRequest)) {
    throw new Error('Expected argument of type google.cloud.resourcemanager.v2.GetFolderRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_resourcemanager_v2_GetFolderRequest(buffer_arg) {
  return google_cloud_resourcemanager_v2_folders_pb.GetFolderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_resourcemanager_v2_ListFoldersRequest(arg) {
  if (!(arg instanceof google_cloud_resourcemanager_v2_folders_pb.ListFoldersRequest)) {
    throw new Error('Expected argument of type google.cloud.resourcemanager.v2.ListFoldersRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_resourcemanager_v2_ListFoldersRequest(buffer_arg) {
  return google_cloud_resourcemanager_v2_folders_pb.ListFoldersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_resourcemanager_v2_ListFoldersResponse(arg) {
  if (!(arg instanceof google_cloud_resourcemanager_v2_folders_pb.ListFoldersResponse)) {
    throw new Error('Expected argument of type google.cloud.resourcemanager.v2.ListFoldersResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_resourcemanager_v2_ListFoldersResponse(buffer_arg) {
  return google_cloud_resourcemanager_v2_folders_pb.ListFoldersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_resourcemanager_v2_MoveFolderRequest(arg) {
  if (!(arg instanceof google_cloud_resourcemanager_v2_folders_pb.MoveFolderRequest)) {
    throw new Error('Expected argument of type google.cloud.resourcemanager.v2.MoveFolderRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_resourcemanager_v2_MoveFolderRequest(buffer_arg) {
  return google_cloud_resourcemanager_v2_folders_pb.MoveFolderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_resourcemanager_v2_SearchFoldersRequest(arg) {
  if (!(arg instanceof google_cloud_resourcemanager_v2_folders_pb.SearchFoldersRequest)) {
    throw new Error('Expected argument of type google.cloud.resourcemanager.v2.SearchFoldersRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_resourcemanager_v2_SearchFoldersRequest(buffer_arg) {
  return google_cloud_resourcemanager_v2_folders_pb.SearchFoldersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_resourcemanager_v2_SearchFoldersResponse(arg) {
  if (!(arg instanceof google_cloud_resourcemanager_v2_folders_pb.SearchFoldersResponse)) {
    throw new Error('Expected argument of type google.cloud.resourcemanager.v2.SearchFoldersResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_resourcemanager_v2_SearchFoldersResponse(buffer_arg) {
  return google_cloud_resourcemanager_v2_folders_pb.SearchFoldersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_resourcemanager_v2_UndeleteFolderRequest(arg) {
  if (!(arg instanceof google_cloud_resourcemanager_v2_folders_pb.UndeleteFolderRequest)) {
    throw new Error('Expected argument of type google.cloud.resourcemanager.v2.UndeleteFolderRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_resourcemanager_v2_UndeleteFolderRequest(buffer_arg) {
  return google_cloud_resourcemanager_v2_folders_pb.UndeleteFolderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_resourcemanager_v2_UpdateFolderRequest(arg) {
  if (!(arg instanceof google_cloud_resourcemanager_v2_folders_pb.UpdateFolderRequest)) {
    throw new Error('Expected argument of type google.cloud.resourcemanager.v2.UpdateFolderRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_resourcemanager_v2_UpdateFolderRequest(buffer_arg) {
  return google_cloud_resourcemanager_v2_folders_pb.UpdateFolderRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


// Manages Cloud Resource Folders.
// Cloud Resource Folders can be used to organize the resources under an
// organization and to control the IAM policies applied to groups of resources.
var FoldersService = exports.FoldersService = {
  // Lists the Folders that are direct descendants of supplied parent resource.
  // List provides a strongly consistent view of the Folders underneath
  // the specified parent resource.
  // List returns Folders sorted based upon the (ascending) lexical ordering
  // of their display_name.
  // The caller must have `resourcemanager.folders.list` permission on the
  // identified parent.
  listFolders: {
    path: '/google.cloud.resourcemanager.v2.Folders/ListFolders',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_resourcemanager_v2_folders_pb.ListFoldersRequest,
    responseType: google_cloud_resourcemanager_v2_folders_pb.ListFoldersResponse,
    requestSerialize: serialize_google_cloud_resourcemanager_v2_ListFoldersRequest,
    requestDeserialize: deserialize_google_cloud_resourcemanager_v2_ListFoldersRequest,
    responseSerialize: serialize_google_cloud_resourcemanager_v2_ListFoldersResponse,
    responseDeserialize: deserialize_google_cloud_resourcemanager_v2_ListFoldersResponse,
  },
  // Search for folders that match specific filter criteria.
  // Search provides an eventually consistent view of the folders a user has
  // access to which meet the specified filter criteria.
  //
  // This will only return folders on which the caller has the
  // permission `resourcemanager.folders.get`.
  searchFolders: {
    path: '/google.cloud.resourcemanager.v2.Folders/SearchFolders',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_resourcemanager_v2_folders_pb.SearchFoldersRequest,
    responseType: google_cloud_resourcemanager_v2_folders_pb.SearchFoldersResponse,
    requestSerialize: serialize_google_cloud_resourcemanager_v2_SearchFoldersRequest,
    requestDeserialize: deserialize_google_cloud_resourcemanager_v2_SearchFoldersRequest,
    responseSerialize: serialize_google_cloud_resourcemanager_v2_SearchFoldersResponse,
    responseDeserialize: deserialize_google_cloud_resourcemanager_v2_SearchFoldersResponse,
  },
  // Retrieves a Folder identified by the supplied resource name.
  // Valid Folder resource names have the format `folders/{folder_id}`
  // (for example, `folders/1234`).
  // The caller must have `resourcemanager.folders.get` permission on the
  // identified folder.
  getFolder: {
    path: '/google.cloud.resourcemanager.v2.Folders/GetFolder',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_resourcemanager_v2_folders_pb.GetFolderRequest,
    responseType: google_cloud_resourcemanager_v2_folders_pb.Folder,
    requestSerialize: serialize_google_cloud_resourcemanager_v2_GetFolderRequest,
    requestDeserialize: deserialize_google_cloud_resourcemanager_v2_GetFolderRequest,
    responseSerialize: serialize_google_cloud_resourcemanager_v2_Folder,
    responseDeserialize: deserialize_google_cloud_resourcemanager_v2_Folder,
  },
  // Creates a Folder in the resource hierarchy.
  // Returns an Operation which can be used to track the progress of the
  // folder creation workflow.
  // Upon success the Operation.response field will be populated with the
  // created Folder.
  //
  // In order to succeed, the addition of this new Folder must not violate
  // the Folder naming, height or fanout constraints.
  //
  // + The Folder's display_name must be distinct from all other Folder's that
  // share its parent.
  // + The addition of the Folder must not cause the active Folder hierarchy
  // to exceed a height of 4. Note, the full active + deleted Folder hierarchy
  // is allowed to reach a height of 8; this provides additional headroom when
  // moving folders that contain deleted folders.
  // + The addition of the Folder must not cause the total number of Folders
  // under its parent to exceed 100.
  //
  // If the operation fails due to a folder constraint violation, some errors
  // may be returned by the CreateFolder request, with status code
  // FAILED_PRECONDITION and an error description. Other folder constraint
  // violations will be communicated in the Operation, with the specific
  // PreconditionFailure returned via the details list in the Operation.error
  // field.
  //
  // The caller must have `resourcemanager.folders.create` permission on the
  // identified parent.
  createFolder: {
    path: '/google.cloud.resourcemanager.v2.Folders/CreateFolder',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_resourcemanager_v2_folders_pb.CreateFolderRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_cloud_resourcemanager_v2_CreateFolderRequest,
    requestDeserialize: deserialize_google_cloud_resourcemanager_v2_CreateFolderRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Updates a Folder, changing its display_name.
  // Changes to the folder display_name will be rejected if they violate either
  // the display_name formatting rules or naming constraints described in
  // the [CreateFolder][google.cloud.resourcemanager.v2.Folders.CreateFolder] documentation.
  //
  // The Folder's display name must start and end with a letter or digit,
  // may contain letters, digits, spaces, hyphens and underscores and can be
  // no longer than 30 characters. This is captured by the regular expression:
  // [\p{L}\p{N}]([\p{L}\p{N}_- ]{0,28}[\p{L}\p{N}])?.
  // The caller must have `resourcemanager.folders.update` permission on the
  // identified folder.
  //
  // If the update fails due to the unique name constraint then a
  // PreconditionFailure explaining this violation will be returned
  // in the Status.details field.
  updateFolder: {
    path: '/google.cloud.resourcemanager.v2.Folders/UpdateFolder',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_resourcemanager_v2_folders_pb.UpdateFolderRequest,
    responseType: google_cloud_resourcemanager_v2_folders_pb.Folder,
    requestSerialize: serialize_google_cloud_resourcemanager_v2_UpdateFolderRequest,
    requestDeserialize: deserialize_google_cloud_resourcemanager_v2_UpdateFolderRequest,
    responseSerialize: serialize_google_cloud_resourcemanager_v2_Folder,
    responseDeserialize: deserialize_google_cloud_resourcemanager_v2_Folder,
  },
  // Moves a Folder under a new resource parent.
  // Returns an Operation which can be used to track the progress of the
  // folder move workflow.
  // Upon success the Operation.response field will be populated with the
  // moved Folder.
  // Upon failure, a FolderOperationError categorizing the failure cause will
  // be returned - if the failure occurs synchronously then the
  // FolderOperationError will be returned via the Status.details field
  // and if it occurs asynchronously then the FolderOperation will be returned
  // via the Operation.error field.
  // In addition, the Operation.metadata field will be populated with a
  // FolderOperation message as an aid to stateless clients.
  // Folder moves will be rejected if they violate either the naming, height
  // or fanout constraints described in the
  // [CreateFolder][google.cloud.resourcemanager.v2.Folders.CreateFolder] documentation.
  // The caller must have `resourcemanager.folders.move` permission on the
  // folder's current and proposed new parent.
  moveFolder: {
    path: '/google.cloud.resourcemanager.v2.Folders/MoveFolder',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_resourcemanager_v2_folders_pb.MoveFolderRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_cloud_resourcemanager_v2_MoveFolderRequest,
    requestDeserialize: deserialize_google_cloud_resourcemanager_v2_MoveFolderRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Requests deletion of a Folder. The Folder is moved into the
  // [DELETE_REQUESTED][google.cloud.resourcemanager.v2.Folder.LifecycleState.DELETE_REQUESTED] state
  // immediately, and is deleted approximately 30 days later. This method may
  // only be called on an empty Folder in the
  // [ACTIVE][google.cloud.resourcemanager.v2.Folder.LifecycleState.ACTIVE] state, where a Folder is empty if
  // it doesn't contain any Folders or Projects in the
  // [ACTIVE][google.cloud.resourcemanager.v2.Folder.LifecycleState.ACTIVE] state.
  // The caller must have `resourcemanager.folders.delete` permission on the
  // identified folder.
  deleteFolder: {
    path: '/google.cloud.resourcemanager.v2.Folders/DeleteFolder',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_resourcemanager_v2_folders_pb.DeleteFolderRequest,
    responseType: google_cloud_resourcemanager_v2_folders_pb.Folder,
    requestSerialize: serialize_google_cloud_resourcemanager_v2_DeleteFolderRequest,
    requestDeserialize: deserialize_google_cloud_resourcemanager_v2_DeleteFolderRequest,
    responseSerialize: serialize_google_cloud_resourcemanager_v2_Folder,
    responseDeserialize: deserialize_google_cloud_resourcemanager_v2_Folder,
  },
  // Cancels the deletion request for a Folder. This method may only be
  // called on a Folder in the
  // [DELETE_REQUESTED][google.cloud.resourcemanager.v2.Folder.LifecycleState.DELETE_REQUESTED] state.
  // In order to succeed, the Folder's parent must be in the
  // [ACTIVE][google.cloud.resourcemanager.v2.Folder.LifecycleState.ACTIVE] state.
  // In addition, reintroducing the folder into the tree must not violate
  // folder naming, height and fanout constraints described in the
  // [CreateFolder][google.cloud.resourcemanager.v2.Folders.CreateFolder] documentation.
  // The caller must have `resourcemanager.folders.undelete` permission on the
  // identified folder.
  undeleteFolder: {
    path: '/google.cloud.resourcemanager.v2.Folders/UndeleteFolder',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_resourcemanager_v2_folders_pb.UndeleteFolderRequest,
    responseType: google_cloud_resourcemanager_v2_folders_pb.Folder,
    requestSerialize: serialize_google_cloud_resourcemanager_v2_UndeleteFolderRequest,
    requestDeserialize: deserialize_google_cloud_resourcemanager_v2_UndeleteFolderRequest,
    responseSerialize: serialize_google_cloud_resourcemanager_v2_Folder,
    responseDeserialize: deserialize_google_cloud_resourcemanager_v2_Folder,
  },
  // Gets the access control policy for a Folder. The returned policy may be
  // empty if no such policy or resource exists. The `resource` field should
  // be the Folder's resource name, e.g. "folders/1234".
  // The caller must have `resourcemanager.folders.getIamPolicy` permission
  // on the identified folder.
  getIamPolicy: {
    path: '/google.cloud.resourcemanager.v2.Folders/GetIamPolicy',
    requestStream: false,
    responseStream: false,
    requestType: google_iam_v1_iam_policy_pb.GetIamPolicyRequest,
    responseType: google_iam_v1_policy_pb.Policy,
    requestSerialize: serialize_google_iam_v1_GetIamPolicyRequest,
    requestDeserialize: deserialize_google_iam_v1_GetIamPolicyRequest,
    responseSerialize: serialize_google_iam_v1_Policy,
    responseDeserialize: deserialize_google_iam_v1_Policy,
  },
  // Sets the access control policy on a Folder, replacing any existing policy.
  // The `resource` field should be the Folder's resource name, e.g.
  // "folders/1234".
  // The caller must have `resourcemanager.folders.setIamPolicy` permission
  // on the identified folder.
  setIamPolicy: {
    path: '/google.cloud.resourcemanager.v2.Folders/SetIamPolicy',
    requestStream: false,
    responseStream: false,
    requestType: google_iam_v1_iam_policy_pb.SetIamPolicyRequest,
    responseType: google_iam_v1_policy_pb.Policy,
    requestSerialize: serialize_google_iam_v1_SetIamPolicyRequest,
    requestDeserialize: deserialize_google_iam_v1_SetIamPolicyRequest,
    responseSerialize: serialize_google_iam_v1_Policy,
    responseDeserialize: deserialize_google_iam_v1_Policy,
  },
  // Returns permissions that a caller has on the specified Folder.
  // The `resource` field should be the Folder's resource name,
  // e.g. "folders/1234".
  //
  // There are no permissions required for making this API call.
  testIamPermissions: {
    path: '/google.cloud.resourcemanager.v2.Folders/TestIamPermissions',
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

exports.FoldersClient = grpc.makeGenericClientConstructor(FoldersService);
