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
var google_privacy_dlp_v2_dlp_pb = require('../../../../google/privacy/dlp/v2/dlp_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_api_field_behavior_pb = require('../../../../google/api/field_behavior_pb.js');
var google_api_resource_pb = require('../../../../google/api/resource_pb.js');
var google_privacy_dlp_v2_storage_pb = require('../../../../google/privacy/dlp/v2/storage_pb.js');
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_rpc_status_pb = require('../../../../google/rpc/status_pb.js');
var google_type_date_pb = require('../../../../google/type/date_pb.js');
var google_type_dayofweek_pb = require('../../../../google/type/dayofweek_pb.js');
var google_type_timeofday_pb = require('../../../../google/type/timeofday_pb.js');
var google_api_client_pb = require('../../../../google/api/client_pb.js');

function serialize_google_privacy_dlp_v2_ActivateJobTriggerRequest(arg) {
  if (!(arg instanceof google_privacy_dlp_v2_dlp_pb.ActivateJobTriggerRequest)) {
    throw new Error('Expected argument of type google.privacy.dlp.v2.ActivateJobTriggerRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_privacy_dlp_v2_ActivateJobTriggerRequest(buffer_arg) {
  return google_privacy_dlp_v2_dlp_pb.ActivateJobTriggerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_privacy_dlp_v2_CancelDlpJobRequest(arg) {
  if (!(arg instanceof google_privacy_dlp_v2_dlp_pb.CancelDlpJobRequest)) {
    throw new Error('Expected argument of type google.privacy.dlp.v2.CancelDlpJobRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_privacy_dlp_v2_CancelDlpJobRequest(buffer_arg) {
  return google_privacy_dlp_v2_dlp_pb.CancelDlpJobRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_privacy_dlp_v2_CreateDeidentifyTemplateRequest(arg) {
  if (!(arg instanceof google_privacy_dlp_v2_dlp_pb.CreateDeidentifyTemplateRequest)) {
    throw new Error('Expected argument of type google.privacy.dlp.v2.CreateDeidentifyTemplateRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_privacy_dlp_v2_CreateDeidentifyTemplateRequest(buffer_arg) {
  return google_privacy_dlp_v2_dlp_pb.CreateDeidentifyTemplateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_privacy_dlp_v2_CreateDlpJobRequest(arg) {
  if (!(arg instanceof google_privacy_dlp_v2_dlp_pb.CreateDlpJobRequest)) {
    throw new Error('Expected argument of type google.privacy.dlp.v2.CreateDlpJobRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_privacy_dlp_v2_CreateDlpJobRequest(buffer_arg) {
  return google_privacy_dlp_v2_dlp_pb.CreateDlpJobRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_privacy_dlp_v2_CreateInspectTemplateRequest(arg) {
  if (!(arg instanceof google_privacy_dlp_v2_dlp_pb.CreateInspectTemplateRequest)) {
    throw new Error('Expected argument of type google.privacy.dlp.v2.CreateInspectTemplateRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_privacy_dlp_v2_CreateInspectTemplateRequest(buffer_arg) {
  return google_privacy_dlp_v2_dlp_pb.CreateInspectTemplateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_privacy_dlp_v2_CreateJobTriggerRequest(arg) {
  if (!(arg instanceof google_privacy_dlp_v2_dlp_pb.CreateJobTriggerRequest)) {
    throw new Error('Expected argument of type google.privacy.dlp.v2.CreateJobTriggerRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_privacy_dlp_v2_CreateJobTriggerRequest(buffer_arg) {
  return google_privacy_dlp_v2_dlp_pb.CreateJobTriggerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_privacy_dlp_v2_CreateStoredInfoTypeRequest(arg) {
  if (!(arg instanceof google_privacy_dlp_v2_dlp_pb.CreateStoredInfoTypeRequest)) {
    throw new Error('Expected argument of type google.privacy.dlp.v2.CreateStoredInfoTypeRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_privacy_dlp_v2_CreateStoredInfoTypeRequest(buffer_arg) {
  return google_privacy_dlp_v2_dlp_pb.CreateStoredInfoTypeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_privacy_dlp_v2_DeidentifyContentRequest(arg) {
  if (!(arg instanceof google_privacy_dlp_v2_dlp_pb.DeidentifyContentRequest)) {
    throw new Error('Expected argument of type google.privacy.dlp.v2.DeidentifyContentRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_privacy_dlp_v2_DeidentifyContentRequest(buffer_arg) {
  return google_privacy_dlp_v2_dlp_pb.DeidentifyContentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_privacy_dlp_v2_DeidentifyContentResponse(arg) {
  if (!(arg instanceof google_privacy_dlp_v2_dlp_pb.DeidentifyContentResponse)) {
    throw new Error('Expected argument of type google.privacy.dlp.v2.DeidentifyContentResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_privacy_dlp_v2_DeidentifyContentResponse(buffer_arg) {
  return google_privacy_dlp_v2_dlp_pb.DeidentifyContentResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_privacy_dlp_v2_DeidentifyTemplate(arg) {
  if (!(arg instanceof google_privacy_dlp_v2_dlp_pb.DeidentifyTemplate)) {
    throw new Error('Expected argument of type google.privacy.dlp.v2.DeidentifyTemplate');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_privacy_dlp_v2_DeidentifyTemplate(buffer_arg) {
  return google_privacy_dlp_v2_dlp_pb.DeidentifyTemplate.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_privacy_dlp_v2_DeleteDeidentifyTemplateRequest(arg) {
  if (!(arg instanceof google_privacy_dlp_v2_dlp_pb.DeleteDeidentifyTemplateRequest)) {
    throw new Error('Expected argument of type google.privacy.dlp.v2.DeleteDeidentifyTemplateRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_privacy_dlp_v2_DeleteDeidentifyTemplateRequest(buffer_arg) {
  return google_privacy_dlp_v2_dlp_pb.DeleteDeidentifyTemplateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_privacy_dlp_v2_DeleteDlpJobRequest(arg) {
  if (!(arg instanceof google_privacy_dlp_v2_dlp_pb.DeleteDlpJobRequest)) {
    throw new Error('Expected argument of type google.privacy.dlp.v2.DeleteDlpJobRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_privacy_dlp_v2_DeleteDlpJobRequest(buffer_arg) {
  return google_privacy_dlp_v2_dlp_pb.DeleteDlpJobRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_privacy_dlp_v2_DeleteInspectTemplateRequest(arg) {
  if (!(arg instanceof google_privacy_dlp_v2_dlp_pb.DeleteInspectTemplateRequest)) {
    throw new Error('Expected argument of type google.privacy.dlp.v2.DeleteInspectTemplateRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_privacy_dlp_v2_DeleteInspectTemplateRequest(buffer_arg) {
  return google_privacy_dlp_v2_dlp_pb.DeleteInspectTemplateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_privacy_dlp_v2_DeleteJobTriggerRequest(arg) {
  if (!(arg instanceof google_privacy_dlp_v2_dlp_pb.DeleteJobTriggerRequest)) {
    throw new Error('Expected argument of type google.privacy.dlp.v2.DeleteJobTriggerRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_privacy_dlp_v2_DeleteJobTriggerRequest(buffer_arg) {
  return google_privacy_dlp_v2_dlp_pb.DeleteJobTriggerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_privacy_dlp_v2_DeleteStoredInfoTypeRequest(arg) {
  if (!(arg instanceof google_privacy_dlp_v2_dlp_pb.DeleteStoredInfoTypeRequest)) {
    throw new Error('Expected argument of type google.privacy.dlp.v2.DeleteStoredInfoTypeRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_privacy_dlp_v2_DeleteStoredInfoTypeRequest(buffer_arg) {
  return google_privacy_dlp_v2_dlp_pb.DeleteStoredInfoTypeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_privacy_dlp_v2_DlpJob(arg) {
  if (!(arg instanceof google_privacy_dlp_v2_dlp_pb.DlpJob)) {
    throw new Error('Expected argument of type google.privacy.dlp.v2.DlpJob');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_privacy_dlp_v2_DlpJob(buffer_arg) {
  return google_privacy_dlp_v2_dlp_pb.DlpJob.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_privacy_dlp_v2_GetDeidentifyTemplateRequest(arg) {
  if (!(arg instanceof google_privacy_dlp_v2_dlp_pb.GetDeidentifyTemplateRequest)) {
    throw new Error('Expected argument of type google.privacy.dlp.v2.GetDeidentifyTemplateRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_privacy_dlp_v2_GetDeidentifyTemplateRequest(buffer_arg) {
  return google_privacy_dlp_v2_dlp_pb.GetDeidentifyTemplateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_privacy_dlp_v2_GetDlpJobRequest(arg) {
  if (!(arg instanceof google_privacy_dlp_v2_dlp_pb.GetDlpJobRequest)) {
    throw new Error('Expected argument of type google.privacy.dlp.v2.GetDlpJobRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_privacy_dlp_v2_GetDlpJobRequest(buffer_arg) {
  return google_privacy_dlp_v2_dlp_pb.GetDlpJobRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_privacy_dlp_v2_GetInspectTemplateRequest(arg) {
  if (!(arg instanceof google_privacy_dlp_v2_dlp_pb.GetInspectTemplateRequest)) {
    throw new Error('Expected argument of type google.privacy.dlp.v2.GetInspectTemplateRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_privacy_dlp_v2_GetInspectTemplateRequest(buffer_arg) {
  return google_privacy_dlp_v2_dlp_pb.GetInspectTemplateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_privacy_dlp_v2_GetJobTriggerRequest(arg) {
  if (!(arg instanceof google_privacy_dlp_v2_dlp_pb.GetJobTriggerRequest)) {
    throw new Error('Expected argument of type google.privacy.dlp.v2.GetJobTriggerRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_privacy_dlp_v2_GetJobTriggerRequest(buffer_arg) {
  return google_privacy_dlp_v2_dlp_pb.GetJobTriggerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_privacy_dlp_v2_GetStoredInfoTypeRequest(arg) {
  if (!(arg instanceof google_privacy_dlp_v2_dlp_pb.GetStoredInfoTypeRequest)) {
    throw new Error('Expected argument of type google.privacy.dlp.v2.GetStoredInfoTypeRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_privacy_dlp_v2_GetStoredInfoTypeRequest(buffer_arg) {
  return google_privacy_dlp_v2_dlp_pb.GetStoredInfoTypeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_privacy_dlp_v2_InspectContentRequest(arg) {
  if (!(arg instanceof google_privacy_dlp_v2_dlp_pb.InspectContentRequest)) {
    throw new Error('Expected argument of type google.privacy.dlp.v2.InspectContentRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_privacy_dlp_v2_InspectContentRequest(buffer_arg) {
  return google_privacy_dlp_v2_dlp_pb.InspectContentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_privacy_dlp_v2_InspectContentResponse(arg) {
  if (!(arg instanceof google_privacy_dlp_v2_dlp_pb.InspectContentResponse)) {
    throw new Error('Expected argument of type google.privacy.dlp.v2.InspectContentResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_privacy_dlp_v2_InspectContentResponse(buffer_arg) {
  return google_privacy_dlp_v2_dlp_pb.InspectContentResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_privacy_dlp_v2_InspectTemplate(arg) {
  if (!(arg instanceof google_privacy_dlp_v2_dlp_pb.InspectTemplate)) {
    throw new Error('Expected argument of type google.privacy.dlp.v2.InspectTemplate');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_privacy_dlp_v2_InspectTemplate(buffer_arg) {
  return google_privacy_dlp_v2_dlp_pb.InspectTemplate.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_privacy_dlp_v2_JobTrigger(arg) {
  if (!(arg instanceof google_privacy_dlp_v2_dlp_pb.JobTrigger)) {
    throw new Error('Expected argument of type google.privacy.dlp.v2.JobTrigger');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_privacy_dlp_v2_JobTrigger(buffer_arg) {
  return google_privacy_dlp_v2_dlp_pb.JobTrigger.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_privacy_dlp_v2_ListDeidentifyTemplatesRequest(arg) {
  if (!(arg instanceof google_privacy_dlp_v2_dlp_pb.ListDeidentifyTemplatesRequest)) {
    throw new Error('Expected argument of type google.privacy.dlp.v2.ListDeidentifyTemplatesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_privacy_dlp_v2_ListDeidentifyTemplatesRequest(buffer_arg) {
  return google_privacy_dlp_v2_dlp_pb.ListDeidentifyTemplatesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_privacy_dlp_v2_ListDeidentifyTemplatesResponse(arg) {
  if (!(arg instanceof google_privacy_dlp_v2_dlp_pb.ListDeidentifyTemplatesResponse)) {
    throw new Error('Expected argument of type google.privacy.dlp.v2.ListDeidentifyTemplatesResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_privacy_dlp_v2_ListDeidentifyTemplatesResponse(buffer_arg) {
  return google_privacy_dlp_v2_dlp_pb.ListDeidentifyTemplatesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_privacy_dlp_v2_ListDlpJobsRequest(arg) {
  if (!(arg instanceof google_privacy_dlp_v2_dlp_pb.ListDlpJobsRequest)) {
    throw new Error('Expected argument of type google.privacy.dlp.v2.ListDlpJobsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_privacy_dlp_v2_ListDlpJobsRequest(buffer_arg) {
  return google_privacy_dlp_v2_dlp_pb.ListDlpJobsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_privacy_dlp_v2_ListDlpJobsResponse(arg) {
  if (!(arg instanceof google_privacy_dlp_v2_dlp_pb.ListDlpJobsResponse)) {
    throw new Error('Expected argument of type google.privacy.dlp.v2.ListDlpJobsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_privacy_dlp_v2_ListDlpJobsResponse(buffer_arg) {
  return google_privacy_dlp_v2_dlp_pb.ListDlpJobsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_privacy_dlp_v2_ListInfoTypesRequest(arg) {
  if (!(arg instanceof google_privacy_dlp_v2_dlp_pb.ListInfoTypesRequest)) {
    throw new Error('Expected argument of type google.privacy.dlp.v2.ListInfoTypesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_privacy_dlp_v2_ListInfoTypesRequest(buffer_arg) {
  return google_privacy_dlp_v2_dlp_pb.ListInfoTypesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_privacy_dlp_v2_ListInfoTypesResponse(arg) {
  if (!(arg instanceof google_privacy_dlp_v2_dlp_pb.ListInfoTypesResponse)) {
    throw new Error('Expected argument of type google.privacy.dlp.v2.ListInfoTypesResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_privacy_dlp_v2_ListInfoTypesResponse(buffer_arg) {
  return google_privacy_dlp_v2_dlp_pb.ListInfoTypesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_privacy_dlp_v2_ListInspectTemplatesRequest(arg) {
  if (!(arg instanceof google_privacy_dlp_v2_dlp_pb.ListInspectTemplatesRequest)) {
    throw new Error('Expected argument of type google.privacy.dlp.v2.ListInspectTemplatesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_privacy_dlp_v2_ListInspectTemplatesRequest(buffer_arg) {
  return google_privacy_dlp_v2_dlp_pb.ListInspectTemplatesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_privacy_dlp_v2_ListInspectTemplatesResponse(arg) {
  if (!(arg instanceof google_privacy_dlp_v2_dlp_pb.ListInspectTemplatesResponse)) {
    throw new Error('Expected argument of type google.privacy.dlp.v2.ListInspectTemplatesResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_privacy_dlp_v2_ListInspectTemplatesResponse(buffer_arg) {
  return google_privacy_dlp_v2_dlp_pb.ListInspectTemplatesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_privacy_dlp_v2_ListJobTriggersRequest(arg) {
  if (!(arg instanceof google_privacy_dlp_v2_dlp_pb.ListJobTriggersRequest)) {
    throw new Error('Expected argument of type google.privacy.dlp.v2.ListJobTriggersRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_privacy_dlp_v2_ListJobTriggersRequest(buffer_arg) {
  return google_privacy_dlp_v2_dlp_pb.ListJobTriggersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_privacy_dlp_v2_ListJobTriggersResponse(arg) {
  if (!(arg instanceof google_privacy_dlp_v2_dlp_pb.ListJobTriggersResponse)) {
    throw new Error('Expected argument of type google.privacy.dlp.v2.ListJobTriggersResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_privacy_dlp_v2_ListJobTriggersResponse(buffer_arg) {
  return google_privacy_dlp_v2_dlp_pb.ListJobTriggersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_privacy_dlp_v2_ListStoredInfoTypesRequest(arg) {
  if (!(arg instanceof google_privacy_dlp_v2_dlp_pb.ListStoredInfoTypesRequest)) {
    throw new Error('Expected argument of type google.privacy.dlp.v2.ListStoredInfoTypesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_privacy_dlp_v2_ListStoredInfoTypesRequest(buffer_arg) {
  return google_privacy_dlp_v2_dlp_pb.ListStoredInfoTypesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_privacy_dlp_v2_ListStoredInfoTypesResponse(arg) {
  if (!(arg instanceof google_privacy_dlp_v2_dlp_pb.ListStoredInfoTypesResponse)) {
    throw new Error('Expected argument of type google.privacy.dlp.v2.ListStoredInfoTypesResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_privacy_dlp_v2_ListStoredInfoTypesResponse(buffer_arg) {
  return google_privacy_dlp_v2_dlp_pb.ListStoredInfoTypesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_privacy_dlp_v2_RedactImageRequest(arg) {
  if (!(arg instanceof google_privacy_dlp_v2_dlp_pb.RedactImageRequest)) {
    throw new Error('Expected argument of type google.privacy.dlp.v2.RedactImageRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_privacy_dlp_v2_RedactImageRequest(buffer_arg) {
  return google_privacy_dlp_v2_dlp_pb.RedactImageRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_privacy_dlp_v2_RedactImageResponse(arg) {
  if (!(arg instanceof google_privacy_dlp_v2_dlp_pb.RedactImageResponse)) {
    throw new Error('Expected argument of type google.privacy.dlp.v2.RedactImageResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_privacy_dlp_v2_RedactImageResponse(buffer_arg) {
  return google_privacy_dlp_v2_dlp_pb.RedactImageResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_privacy_dlp_v2_ReidentifyContentRequest(arg) {
  if (!(arg instanceof google_privacy_dlp_v2_dlp_pb.ReidentifyContentRequest)) {
    throw new Error('Expected argument of type google.privacy.dlp.v2.ReidentifyContentRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_privacy_dlp_v2_ReidentifyContentRequest(buffer_arg) {
  return google_privacy_dlp_v2_dlp_pb.ReidentifyContentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_privacy_dlp_v2_ReidentifyContentResponse(arg) {
  if (!(arg instanceof google_privacy_dlp_v2_dlp_pb.ReidentifyContentResponse)) {
    throw new Error('Expected argument of type google.privacy.dlp.v2.ReidentifyContentResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_privacy_dlp_v2_ReidentifyContentResponse(buffer_arg) {
  return google_privacy_dlp_v2_dlp_pb.ReidentifyContentResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_privacy_dlp_v2_StoredInfoType(arg) {
  if (!(arg instanceof google_privacy_dlp_v2_dlp_pb.StoredInfoType)) {
    throw new Error('Expected argument of type google.privacy.dlp.v2.StoredInfoType');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_privacy_dlp_v2_StoredInfoType(buffer_arg) {
  return google_privacy_dlp_v2_dlp_pb.StoredInfoType.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_privacy_dlp_v2_UpdateDeidentifyTemplateRequest(arg) {
  if (!(arg instanceof google_privacy_dlp_v2_dlp_pb.UpdateDeidentifyTemplateRequest)) {
    throw new Error('Expected argument of type google.privacy.dlp.v2.UpdateDeidentifyTemplateRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_privacy_dlp_v2_UpdateDeidentifyTemplateRequest(buffer_arg) {
  return google_privacy_dlp_v2_dlp_pb.UpdateDeidentifyTemplateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_privacy_dlp_v2_UpdateInspectTemplateRequest(arg) {
  if (!(arg instanceof google_privacy_dlp_v2_dlp_pb.UpdateInspectTemplateRequest)) {
    throw new Error('Expected argument of type google.privacy.dlp.v2.UpdateInspectTemplateRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_privacy_dlp_v2_UpdateInspectTemplateRequest(buffer_arg) {
  return google_privacy_dlp_v2_dlp_pb.UpdateInspectTemplateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_privacy_dlp_v2_UpdateJobTriggerRequest(arg) {
  if (!(arg instanceof google_privacy_dlp_v2_dlp_pb.UpdateJobTriggerRequest)) {
    throw new Error('Expected argument of type google.privacy.dlp.v2.UpdateJobTriggerRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_privacy_dlp_v2_UpdateJobTriggerRequest(buffer_arg) {
  return google_privacy_dlp_v2_dlp_pb.UpdateJobTriggerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_privacy_dlp_v2_UpdateStoredInfoTypeRequest(arg) {
  if (!(arg instanceof google_privacy_dlp_v2_dlp_pb.UpdateStoredInfoTypeRequest)) {
    throw new Error('Expected argument of type google.privacy.dlp.v2.UpdateStoredInfoTypeRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_privacy_dlp_v2_UpdateStoredInfoTypeRequest(buffer_arg) {
  return google_privacy_dlp_v2_dlp_pb.UpdateStoredInfoTypeRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


// The Cloud Data Loss Prevention (DLP) API is a service that allows clients
// to detect the presence of Personally Identifiable Information (PII) and other
// privacy-sensitive data in user-supplied, unstructured data streams, like text
// blocks or images.
// The service also includes methods for sensitive data redaction and
// scheduling of data scans on Google Cloud Platform based data sets.
//
// To learn more about concepts and find how-to guides see
// https://cloud.google.com/dlp/docs/.
var DlpServiceService = exports.DlpServiceService = {
  // Finds potentially sensitive info in content.
  // This method has limits on input size, processing time, and output size.
  //
  // When no InfoTypes or CustomInfoTypes are specified in this request, the
  // system will automatically choose what detectors to run. By default this may
  // be all types, but may change over time as detectors are updated.
  //
  // For how to guides, see https://cloud.google.com/dlp/docs/inspecting-images
  // and https://cloud.google.com/dlp/docs/inspecting-text,
  inspectContent: {
    path: '/google.privacy.dlp.v2.DlpService/InspectContent',
    requestStream: false,
    responseStream: false,
    requestType: google_privacy_dlp_v2_dlp_pb.InspectContentRequest,
    responseType: google_privacy_dlp_v2_dlp_pb.InspectContentResponse,
    requestSerialize: serialize_google_privacy_dlp_v2_InspectContentRequest,
    requestDeserialize: deserialize_google_privacy_dlp_v2_InspectContentRequest,
    responseSerialize: serialize_google_privacy_dlp_v2_InspectContentResponse,
    responseDeserialize: deserialize_google_privacy_dlp_v2_InspectContentResponse,
  },
  // Redacts potentially sensitive info from an image.
  // This method has limits on input size, processing time, and output size.
  // See https://cloud.google.com/dlp/docs/redacting-sensitive-data-images to
  // learn more.
  //
  // When no InfoTypes or CustomInfoTypes are specified in this request, the
  // system will automatically choose what detectors to run. By default this may
  // be all types, but may change over time as detectors are updated.
  redactImage: {
    path: '/google.privacy.dlp.v2.DlpService/RedactImage',
    requestStream: false,
    responseStream: false,
    requestType: google_privacy_dlp_v2_dlp_pb.RedactImageRequest,
    responseType: google_privacy_dlp_v2_dlp_pb.RedactImageResponse,
    requestSerialize: serialize_google_privacy_dlp_v2_RedactImageRequest,
    requestDeserialize: deserialize_google_privacy_dlp_v2_RedactImageRequest,
    responseSerialize: serialize_google_privacy_dlp_v2_RedactImageResponse,
    responseDeserialize: deserialize_google_privacy_dlp_v2_RedactImageResponse,
  },
  // De-identifies potentially sensitive info from a ContentItem.
  // This method has limits on input size and output size.
  // See https://cloud.google.com/dlp/docs/deidentify-sensitive-data to
  // learn more.
  //
  // When no InfoTypes or CustomInfoTypes are specified in this request, the
  // system will automatically choose what detectors to run. By default this may
  // be all types, but may change over time as detectors are updated.
  deidentifyContent: {
    path: '/google.privacy.dlp.v2.DlpService/DeidentifyContent',
    requestStream: false,
    responseStream: false,
    requestType: google_privacy_dlp_v2_dlp_pb.DeidentifyContentRequest,
    responseType: google_privacy_dlp_v2_dlp_pb.DeidentifyContentResponse,
    requestSerialize: serialize_google_privacy_dlp_v2_DeidentifyContentRequest,
    requestDeserialize: deserialize_google_privacy_dlp_v2_DeidentifyContentRequest,
    responseSerialize: serialize_google_privacy_dlp_v2_DeidentifyContentResponse,
    responseDeserialize: deserialize_google_privacy_dlp_v2_DeidentifyContentResponse,
  },
  // Re-identifies content that has been de-identified.
  // See
  // https://cloud.google.com/dlp/docs/pseudonymization#re-identification_in_free_text_code_example
  // to learn more.
  reidentifyContent: {
    path: '/google.privacy.dlp.v2.DlpService/ReidentifyContent',
    requestStream: false,
    responseStream: false,
    requestType: google_privacy_dlp_v2_dlp_pb.ReidentifyContentRequest,
    responseType: google_privacy_dlp_v2_dlp_pb.ReidentifyContentResponse,
    requestSerialize: serialize_google_privacy_dlp_v2_ReidentifyContentRequest,
    requestDeserialize: deserialize_google_privacy_dlp_v2_ReidentifyContentRequest,
    responseSerialize: serialize_google_privacy_dlp_v2_ReidentifyContentResponse,
    responseDeserialize: deserialize_google_privacy_dlp_v2_ReidentifyContentResponse,
  },
  // Returns a list of the sensitive information types that the DLP API
  // supports. See https://cloud.google.com/dlp/docs/infotypes-reference to
  // learn more.
  listInfoTypes: {
    path: '/google.privacy.dlp.v2.DlpService/ListInfoTypes',
    requestStream: false,
    responseStream: false,
    requestType: google_privacy_dlp_v2_dlp_pb.ListInfoTypesRequest,
    responseType: google_privacy_dlp_v2_dlp_pb.ListInfoTypesResponse,
    requestSerialize: serialize_google_privacy_dlp_v2_ListInfoTypesRequest,
    requestDeserialize: deserialize_google_privacy_dlp_v2_ListInfoTypesRequest,
    responseSerialize: serialize_google_privacy_dlp_v2_ListInfoTypesResponse,
    responseDeserialize: deserialize_google_privacy_dlp_v2_ListInfoTypesResponse,
  },
  // Creates an InspectTemplate for re-using frequently used configuration
  // for inspecting content, images, and storage.
  // See https://cloud.google.com/dlp/docs/creating-templates to learn more.
  createInspectTemplate: {
    path: '/google.privacy.dlp.v2.DlpService/CreateInspectTemplate',
    requestStream: false,
    responseStream: false,
    requestType: google_privacy_dlp_v2_dlp_pb.CreateInspectTemplateRequest,
    responseType: google_privacy_dlp_v2_dlp_pb.InspectTemplate,
    requestSerialize: serialize_google_privacy_dlp_v2_CreateInspectTemplateRequest,
    requestDeserialize: deserialize_google_privacy_dlp_v2_CreateInspectTemplateRequest,
    responseSerialize: serialize_google_privacy_dlp_v2_InspectTemplate,
    responseDeserialize: deserialize_google_privacy_dlp_v2_InspectTemplate,
  },
  // Updates the InspectTemplate.
  // See https://cloud.google.com/dlp/docs/creating-templates to learn more.
  updateInspectTemplate: {
    path: '/google.privacy.dlp.v2.DlpService/UpdateInspectTemplate',
    requestStream: false,
    responseStream: false,
    requestType: google_privacy_dlp_v2_dlp_pb.UpdateInspectTemplateRequest,
    responseType: google_privacy_dlp_v2_dlp_pb.InspectTemplate,
    requestSerialize: serialize_google_privacy_dlp_v2_UpdateInspectTemplateRequest,
    requestDeserialize: deserialize_google_privacy_dlp_v2_UpdateInspectTemplateRequest,
    responseSerialize: serialize_google_privacy_dlp_v2_InspectTemplate,
    responseDeserialize: deserialize_google_privacy_dlp_v2_InspectTemplate,
  },
  // Gets an InspectTemplate.
  // See https://cloud.google.com/dlp/docs/creating-templates to learn more.
  getInspectTemplate: {
    path: '/google.privacy.dlp.v2.DlpService/GetInspectTemplate',
    requestStream: false,
    responseStream: false,
    requestType: google_privacy_dlp_v2_dlp_pb.GetInspectTemplateRequest,
    responseType: google_privacy_dlp_v2_dlp_pb.InspectTemplate,
    requestSerialize: serialize_google_privacy_dlp_v2_GetInspectTemplateRequest,
    requestDeserialize: deserialize_google_privacy_dlp_v2_GetInspectTemplateRequest,
    responseSerialize: serialize_google_privacy_dlp_v2_InspectTemplate,
    responseDeserialize: deserialize_google_privacy_dlp_v2_InspectTemplate,
  },
  // Lists InspectTemplates.
  // See https://cloud.google.com/dlp/docs/creating-templates to learn more.
  listInspectTemplates: {
    path: '/google.privacy.dlp.v2.DlpService/ListInspectTemplates',
    requestStream: false,
    responseStream: false,
    requestType: google_privacy_dlp_v2_dlp_pb.ListInspectTemplatesRequest,
    responseType: google_privacy_dlp_v2_dlp_pb.ListInspectTemplatesResponse,
    requestSerialize: serialize_google_privacy_dlp_v2_ListInspectTemplatesRequest,
    requestDeserialize: deserialize_google_privacy_dlp_v2_ListInspectTemplatesRequest,
    responseSerialize: serialize_google_privacy_dlp_v2_ListInspectTemplatesResponse,
    responseDeserialize: deserialize_google_privacy_dlp_v2_ListInspectTemplatesResponse,
  },
  // Deletes an InspectTemplate.
  // See https://cloud.google.com/dlp/docs/creating-templates to learn more.
  deleteInspectTemplate: {
    path: '/google.privacy.dlp.v2.DlpService/DeleteInspectTemplate',
    requestStream: false,
    responseStream: false,
    requestType: google_privacy_dlp_v2_dlp_pb.DeleteInspectTemplateRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_privacy_dlp_v2_DeleteInspectTemplateRequest,
    requestDeserialize: deserialize_google_privacy_dlp_v2_DeleteInspectTemplateRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Creates a DeidentifyTemplate for re-using frequently used configuration
  // for de-identifying content, images, and storage.
  // See https://cloud.google.com/dlp/docs/creating-templates-deid to learn
  // more.
  createDeidentifyTemplate: {
    path: '/google.privacy.dlp.v2.DlpService/CreateDeidentifyTemplate',
    requestStream: false,
    responseStream: false,
    requestType: google_privacy_dlp_v2_dlp_pb.CreateDeidentifyTemplateRequest,
    responseType: google_privacy_dlp_v2_dlp_pb.DeidentifyTemplate,
    requestSerialize: serialize_google_privacy_dlp_v2_CreateDeidentifyTemplateRequest,
    requestDeserialize: deserialize_google_privacy_dlp_v2_CreateDeidentifyTemplateRequest,
    responseSerialize: serialize_google_privacy_dlp_v2_DeidentifyTemplate,
    responseDeserialize: deserialize_google_privacy_dlp_v2_DeidentifyTemplate,
  },
  // Updates the DeidentifyTemplate.
  // See https://cloud.google.com/dlp/docs/creating-templates-deid to learn
  // more.
  updateDeidentifyTemplate: {
    path: '/google.privacy.dlp.v2.DlpService/UpdateDeidentifyTemplate',
    requestStream: false,
    responseStream: false,
    requestType: google_privacy_dlp_v2_dlp_pb.UpdateDeidentifyTemplateRequest,
    responseType: google_privacy_dlp_v2_dlp_pb.DeidentifyTemplate,
    requestSerialize: serialize_google_privacy_dlp_v2_UpdateDeidentifyTemplateRequest,
    requestDeserialize: deserialize_google_privacy_dlp_v2_UpdateDeidentifyTemplateRequest,
    responseSerialize: serialize_google_privacy_dlp_v2_DeidentifyTemplate,
    responseDeserialize: deserialize_google_privacy_dlp_v2_DeidentifyTemplate,
  },
  // Gets a DeidentifyTemplate.
  // See https://cloud.google.com/dlp/docs/creating-templates-deid to learn
  // more.
  getDeidentifyTemplate: {
    path: '/google.privacy.dlp.v2.DlpService/GetDeidentifyTemplate',
    requestStream: false,
    responseStream: false,
    requestType: google_privacy_dlp_v2_dlp_pb.GetDeidentifyTemplateRequest,
    responseType: google_privacy_dlp_v2_dlp_pb.DeidentifyTemplate,
    requestSerialize: serialize_google_privacy_dlp_v2_GetDeidentifyTemplateRequest,
    requestDeserialize: deserialize_google_privacy_dlp_v2_GetDeidentifyTemplateRequest,
    responseSerialize: serialize_google_privacy_dlp_v2_DeidentifyTemplate,
    responseDeserialize: deserialize_google_privacy_dlp_v2_DeidentifyTemplate,
  },
  // Lists DeidentifyTemplates.
  // See https://cloud.google.com/dlp/docs/creating-templates-deid to learn
  // more.
  listDeidentifyTemplates: {
    path: '/google.privacy.dlp.v2.DlpService/ListDeidentifyTemplates',
    requestStream: false,
    responseStream: false,
    requestType: google_privacy_dlp_v2_dlp_pb.ListDeidentifyTemplatesRequest,
    responseType: google_privacy_dlp_v2_dlp_pb.ListDeidentifyTemplatesResponse,
    requestSerialize: serialize_google_privacy_dlp_v2_ListDeidentifyTemplatesRequest,
    requestDeserialize: deserialize_google_privacy_dlp_v2_ListDeidentifyTemplatesRequest,
    responseSerialize: serialize_google_privacy_dlp_v2_ListDeidentifyTemplatesResponse,
    responseDeserialize: deserialize_google_privacy_dlp_v2_ListDeidentifyTemplatesResponse,
  },
  // Deletes a DeidentifyTemplate.
  // See https://cloud.google.com/dlp/docs/creating-templates-deid to learn
  // more.
  deleteDeidentifyTemplate: {
    path: '/google.privacy.dlp.v2.DlpService/DeleteDeidentifyTemplate',
    requestStream: false,
    responseStream: false,
    requestType: google_privacy_dlp_v2_dlp_pb.DeleteDeidentifyTemplateRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_privacy_dlp_v2_DeleteDeidentifyTemplateRequest,
    requestDeserialize: deserialize_google_privacy_dlp_v2_DeleteDeidentifyTemplateRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Creates a job trigger to run DLP actions such as scanning storage for
  // sensitive information on a set schedule.
  // See https://cloud.google.com/dlp/docs/creating-job-triggers to learn more.
  createJobTrigger: {
    path: '/google.privacy.dlp.v2.DlpService/CreateJobTrigger',
    requestStream: false,
    responseStream: false,
    requestType: google_privacy_dlp_v2_dlp_pb.CreateJobTriggerRequest,
    responseType: google_privacy_dlp_v2_dlp_pb.JobTrigger,
    requestSerialize: serialize_google_privacy_dlp_v2_CreateJobTriggerRequest,
    requestDeserialize: deserialize_google_privacy_dlp_v2_CreateJobTriggerRequest,
    responseSerialize: serialize_google_privacy_dlp_v2_JobTrigger,
    responseDeserialize: deserialize_google_privacy_dlp_v2_JobTrigger,
  },
  // Updates a job trigger.
  // See https://cloud.google.com/dlp/docs/creating-job-triggers to learn more.
  updateJobTrigger: {
    path: '/google.privacy.dlp.v2.DlpService/UpdateJobTrigger',
    requestStream: false,
    responseStream: false,
    requestType: google_privacy_dlp_v2_dlp_pb.UpdateJobTriggerRequest,
    responseType: google_privacy_dlp_v2_dlp_pb.JobTrigger,
    requestSerialize: serialize_google_privacy_dlp_v2_UpdateJobTriggerRequest,
    requestDeserialize: deserialize_google_privacy_dlp_v2_UpdateJobTriggerRequest,
    responseSerialize: serialize_google_privacy_dlp_v2_JobTrigger,
    responseDeserialize: deserialize_google_privacy_dlp_v2_JobTrigger,
  },
  // Gets a job trigger.
  // See https://cloud.google.com/dlp/docs/creating-job-triggers to learn more.
  getJobTrigger: {
    path: '/google.privacy.dlp.v2.DlpService/GetJobTrigger',
    requestStream: false,
    responseStream: false,
    requestType: google_privacy_dlp_v2_dlp_pb.GetJobTriggerRequest,
    responseType: google_privacy_dlp_v2_dlp_pb.JobTrigger,
    requestSerialize: serialize_google_privacy_dlp_v2_GetJobTriggerRequest,
    requestDeserialize: deserialize_google_privacy_dlp_v2_GetJobTriggerRequest,
    responseSerialize: serialize_google_privacy_dlp_v2_JobTrigger,
    responseDeserialize: deserialize_google_privacy_dlp_v2_JobTrigger,
  },
  // Lists job triggers.
  // See https://cloud.google.com/dlp/docs/creating-job-triggers to learn more.
  listJobTriggers: {
    path: '/google.privacy.dlp.v2.DlpService/ListJobTriggers',
    requestStream: false,
    responseStream: false,
    requestType: google_privacy_dlp_v2_dlp_pb.ListJobTriggersRequest,
    responseType: google_privacy_dlp_v2_dlp_pb.ListJobTriggersResponse,
    requestSerialize: serialize_google_privacy_dlp_v2_ListJobTriggersRequest,
    requestDeserialize: deserialize_google_privacy_dlp_v2_ListJobTriggersRequest,
    responseSerialize: serialize_google_privacy_dlp_v2_ListJobTriggersResponse,
    responseDeserialize: deserialize_google_privacy_dlp_v2_ListJobTriggersResponse,
  },
  // Deletes a job trigger.
  // See https://cloud.google.com/dlp/docs/creating-job-triggers to learn more.
  deleteJobTrigger: {
    path: '/google.privacy.dlp.v2.DlpService/DeleteJobTrigger',
    requestStream: false,
    responseStream: false,
    requestType: google_privacy_dlp_v2_dlp_pb.DeleteJobTriggerRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_privacy_dlp_v2_DeleteJobTriggerRequest,
    requestDeserialize: deserialize_google_privacy_dlp_v2_DeleteJobTriggerRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Activate a job trigger. Causes the immediate execute of a trigger
  // instead of waiting on the trigger event to occur.
  activateJobTrigger: {
    path: '/google.privacy.dlp.v2.DlpService/ActivateJobTrigger',
    requestStream: false,
    responseStream: false,
    requestType: google_privacy_dlp_v2_dlp_pb.ActivateJobTriggerRequest,
    responseType: google_privacy_dlp_v2_dlp_pb.DlpJob,
    requestSerialize: serialize_google_privacy_dlp_v2_ActivateJobTriggerRequest,
    requestDeserialize: deserialize_google_privacy_dlp_v2_ActivateJobTriggerRequest,
    responseSerialize: serialize_google_privacy_dlp_v2_DlpJob,
    responseDeserialize: deserialize_google_privacy_dlp_v2_DlpJob,
  },
  // Creates a new job to inspect storage or calculate risk metrics.
  // See https://cloud.google.com/dlp/docs/inspecting-storage and
  // https://cloud.google.com/dlp/docs/compute-risk-analysis to learn more.
  //
  // When no InfoTypes or CustomInfoTypes are specified in inspect jobs, the
  // system will automatically choose what detectors to run. By default this may
  // be all types, but may change over time as detectors are updated.
  createDlpJob: {
    path: '/google.privacy.dlp.v2.DlpService/CreateDlpJob',
    requestStream: false,
    responseStream: false,
    requestType: google_privacy_dlp_v2_dlp_pb.CreateDlpJobRequest,
    responseType: google_privacy_dlp_v2_dlp_pb.DlpJob,
    requestSerialize: serialize_google_privacy_dlp_v2_CreateDlpJobRequest,
    requestDeserialize: deserialize_google_privacy_dlp_v2_CreateDlpJobRequest,
    responseSerialize: serialize_google_privacy_dlp_v2_DlpJob,
    responseDeserialize: deserialize_google_privacy_dlp_v2_DlpJob,
  },
  // Lists DlpJobs that match the specified filter in the request.
  // See https://cloud.google.com/dlp/docs/inspecting-storage and
  // https://cloud.google.com/dlp/docs/compute-risk-analysis to learn more.
  listDlpJobs: {
    path: '/google.privacy.dlp.v2.DlpService/ListDlpJobs',
    requestStream: false,
    responseStream: false,
    requestType: google_privacy_dlp_v2_dlp_pb.ListDlpJobsRequest,
    responseType: google_privacy_dlp_v2_dlp_pb.ListDlpJobsResponse,
    requestSerialize: serialize_google_privacy_dlp_v2_ListDlpJobsRequest,
    requestDeserialize: deserialize_google_privacy_dlp_v2_ListDlpJobsRequest,
    responseSerialize: serialize_google_privacy_dlp_v2_ListDlpJobsResponse,
    responseDeserialize: deserialize_google_privacy_dlp_v2_ListDlpJobsResponse,
  },
  // Gets the latest state of a long-running DlpJob.
  // See https://cloud.google.com/dlp/docs/inspecting-storage and
  // https://cloud.google.com/dlp/docs/compute-risk-analysis to learn more.
  getDlpJob: {
    path: '/google.privacy.dlp.v2.DlpService/GetDlpJob',
    requestStream: false,
    responseStream: false,
    requestType: google_privacy_dlp_v2_dlp_pb.GetDlpJobRequest,
    responseType: google_privacy_dlp_v2_dlp_pb.DlpJob,
    requestSerialize: serialize_google_privacy_dlp_v2_GetDlpJobRequest,
    requestDeserialize: deserialize_google_privacy_dlp_v2_GetDlpJobRequest,
    responseSerialize: serialize_google_privacy_dlp_v2_DlpJob,
    responseDeserialize: deserialize_google_privacy_dlp_v2_DlpJob,
  },
  // Deletes a long-running DlpJob. This method indicates that the client is
  // no longer interested in the DlpJob result. The job will be cancelled if
  // possible.
  // See https://cloud.google.com/dlp/docs/inspecting-storage and
  // https://cloud.google.com/dlp/docs/compute-risk-analysis to learn more.
  deleteDlpJob: {
    path: '/google.privacy.dlp.v2.DlpService/DeleteDlpJob',
    requestStream: false,
    responseStream: false,
    requestType: google_privacy_dlp_v2_dlp_pb.DeleteDlpJobRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_privacy_dlp_v2_DeleteDlpJobRequest,
    requestDeserialize: deserialize_google_privacy_dlp_v2_DeleteDlpJobRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Starts asynchronous cancellation on a long-running DlpJob. The server
  // makes a best effort to cancel the DlpJob, but success is not
  // guaranteed.
  // See https://cloud.google.com/dlp/docs/inspecting-storage and
  // https://cloud.google.com/dlp/docs/compute-risk-analysis to learn more.
  cancelDlpJob: {
    path: '/google.privacy.dlp.v2.DlpService/CancelDlpJob',
    requestStream: false,
    responseStream: false,
    requestType: google_privacy_dlp_v2_dlp_pb.CancelDlpJobRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_privacy_dlp_v2_CancelDlpJobRequest,
    requestDeserialize: deserialize_google_privacy_dlp_v2_CancelDlpJobRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Creates a pre-built stored infoType to be used for inspection.
  // See https://cloud.google.com/dlp/docs/creating-stored-infotypes to
  // learn more.
  createStoredInfoType: {
    path: '/google.privacy.dlp.v2.DlpService/CreateStoredInfoType',
    requestStream: false,
    responseStream: false,
    requestType: google_privacy_dlp_v2_dlp_pb.CreateStoredInfoTypeRequest,
    responseType: google_privacy_dlp_v2_dlp_pb.StoredInfoType,
    requestSerialize: serialize_google_privacy_dlp_v2_CreateStoredInfoTypeRequest,
    requestDeserialize: deserialize_google_privacy_dlp_v2_CreateStoredInfoTypeRequest,
    responseSerialize: serialize_google_privacy_dlp_v2_StoredInfoType,
    responseDeserialize: deserialize_google_privacy_dlp_v2_StoredInfoType,
  },
  // Updates the stored infoType by creating a new version. The existing version
  // will continue to be used until the new version is ready.
  // See https://cloud.google.com/dlp/docs/creating-stored-infotypes to
  // learn more.
  updateStoredInfoType: {
    path: '/google.privacy.dlp.v2.DlpService/UpdateStoredInfoType',
    requestStream: false,
    responseStream: false,
    requestType: google_privacy_dlp_v2_dlp_pb.UpdateStoredInfoTypeRequest,
    responseType: google_privacy_dlp_v2_dlp_pb.StoredInfoType,
    requestSerialize: serialize_google_privacy_dlp_v2_UpdateStoredInfoTypeRequest,
    requestDeserialize: deserialize_google_privacy_dlp_v2_UpdateStoredInfoTypeRequest,
    responseSerialize: serialize_google_privacy_dlp_v2_StoredInfoType,
    responseDeserialize: deserialize_google_privacy_dlp_v2_StoredInfoType,
  },
  // Gets a stored infoType.
  // See https://cloud.google.com/dlp/docs/creating-stored-infotypes to
  // learn more.
  getStoredInfoType: {
    path: '/google.privacy.dlp.v2.DlpService/GetStoredInfoType',
    requestStream: false,
    responseStream: false,
    requestType: google_privacy_dlp_v2_dlp_pb.GetStoredInfoTypeRequest,
    responseType: google_privacy_dlp_v2_dlp_pb.StoredInfoType,
    requestSerialize: serialize_google_privacy_dlp_v2_GetStoredInfoTypeRequest,
    requestDeserialize: deserialize_google_privacy_dlp_v2_GetStoredInfoTypeRequest,
    responseSerialize: serialize_google_privacy_dlp_v2_StoredInfoType,
    responseDeserialize: deserialize_google_privacy_dlp_v2_StoredInfoType,
  },
  // Lists stored infoTypes.
  // See https://cloud.google.com/dlp/docs/creating-stored-infotypes to
  // learn more.
  listStoredInfoTypes: {
    path: '/google.privacy.dlp.v2.DlpService/ListStoredInfoTypes',
    requestStream: false,
    responseStream: false,
    requestType: google_privacy_dlp_v2_dlp_pb.ListStoredInfoTypesRequest,
    responseType: google_privacy_dlp_v2_dlp_pb.ListStoredInfoTypesResponse,
    requestSerialize: serialize_google_privacy_dlp_v2_ListStoredInfoTypesRequest,
    requestDeserialize: deserialize_google_privacy_dlp_v2_ListStoredInfoTypesRequest,
    responseSerialize: serialize_google_privacy_dlp_v2_ListStoredInfoTypesResponse,
    responseDeserialize: deserialize_google_privacy_dlp_v2_ListStoredInfoTypesResponse,
  },
  // Deletes a stored infoType.
  // See https://cloud.google.com/dlp/docs/creating-stored-infotypes to
  // learn more.
  deleteStoredInfoType: {
    path: '/google.privacy.dlp.v2.DlpService/DeleteStoredInfoType',
    requestStream: false,
    responseStream: false,
    requestType: google_privacy_dlp_v2_dlp_pb.DeleteStoredInfoTypeRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_privacy_dlp_v2_DeleteStoredInfoTypeRequest,
    requestDeserialize: deserialize_google_privacy_dlp_v2_DeleteStoredInfoTypeRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.DlpServiceClient = grpc.makeGenericClientConstructor(DlpServiceService);
