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
var google_cloud_datalabeling_v1beta1_data_labeling_service_pb = require('../../../../google/cloud/datalabeling/v1beta1/data_labeling_service_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_api_client_pb = require('../../../../google/api/client_pb.js');
var google_cloud_datalabeling_v1beta1_annotation_pb = require('../../../../google/cloud/datalabeling/v1beta1/annotation_pb.js');
var google_cloud_datalabeling_v1beta1_annotation_spec_set_pb = require('../../../../google/cloud/datalabeling/v1beta1/annotation_spec_set_pb.js');
var google_cloud_datalabeling_v1beta1_dataset_pb = require('../../../../google/cloud/datalabeling/v1beta1/dataset_pb.js');
var google_cloud_datalabeling_v1beta1_evaluation_pb = require('../../../../google/cloud/datalabeling/v1beta1/evaluation_pb.js');
var google_cloud_datalabeling_v1beta1_evaluation_job_pb = require('../../../../google/cloud/datalabeling/v1beta1/evaluation_job_pb.js');
var google_cloud_datalabeling_v1beta1_human_annotation_config_pb = require('../../../../google/cloud/datalabeling/v1beta1/human_annotation_config_pb.js');
var google_cloud_datalabeling_v1beta1_instruction_pb = require('../../../../google/cloud/datalabeling/v1beta1/instruction_pb.js');
var google_cloud_datalabeling_v1beta1_operations_pb = require('../../../../google/cloud/datalabeling/v1beta1/operations_pb.js');
var google_longrunning_operations_pb = require('../../../../google/longrunning/operations_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');

function serialize_google_cloud_datalabeling_v1beta1_AnnotatedDataset(arg) {
  if (!(arg instanceof google_cloud_datalabeling_v1beta1_dataset_pb.AnnotatedDataset)) {
    throw new Error('Expected argument of type google.cloud.datalabeling.v1beta1.AnnotatedDataset');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_datalabeling_v1beta1_AnnotatedDataset(buffer_arg) {
  return google_cloud_datalabeling_v1beta1_dataset_pb.AnnotatedDataset.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_datalabeling_v1beta1_AnnotationSpecSet(arg) {
  if (!(arg instanceof google_cloud_datalabeling_v1beta1_annotation_spec_set_pb.AnnotationSpecSet)) {
    throw new Error('Expected argument of type google.cloud.datalabeling.v1beta1.AnnotationSpecSet');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_datalabeling_v1beta1_AnnotationSpecSet(buffer_arg) {
  return google_cloud_datalabeling_v1beta1_annotation_spec_set_pb.AnnotationSpecSet.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_datalabeling_v1beta1_CreateAnnotationSpecSetRequest(arg) {
  if (!(arg instanceof google_cloud_datalabeling_v1beta1_data_labeling_service_pb.CreateAnnotationSpecSetRequest)) {
    throw new Error('Expected argument of type google.cloud.datalabeling.v1beta1.CreateAnnotationSpecSetRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_datalabeling_v1beta1_CreateAnnotationSpecSetRequest(buffer_arg) {
  return google_cloud_datalabeling_v1beta1_data_labeling_service_pb.CreateAnnotationSpecSetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_datalabeling_v1beta1_CreateDatasetRequest(arg) {
  if (!(arg instanceof google_cloud_datalabeling_v1beta1_data_labeling_service_pb.CreateDatasetRequest)) {
    throw new Error('Expected argument of type google.cloud.datalabeling.v1beta1.CreateDatasetRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_datalabeling_v1beta1_CreateDatasetRequest(buffer_arg) {
  return google_cloud_datalabeling_v1beta1_data_labeling_service_pb.CreateDatasetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_datalabeling_v1beta1_CreateEvaluationJobRequest(arg) {
  if (!(arg instanceof google_cloud_datalabeling_v1beta1_data_labeling_service_pb.CreateEvaluationJobRequest)) {
    throw new Error('Expected argument of type google.cloud.datalabeling.v1beta1.CreateEvaluationJobRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_datalabeling_v1beta1_CreateEvaluationJobRequest(buffer_arg) {
  return google_cloud_datalabeling_v1beta1_data_labeling_service_pb.CreateEvaluationJobRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_datalabeling_v1beta1_CreateInstructionRequest(arg) {
  if (!(arg instanceof google_cloud_datalabeling_v1beta1_data_labeling_service_pb.CreateInstructionRequest)) {
    throw new Error('Expected argument of type google.cloud.datalabeling.v1beta1.CreateInstructionRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_datalabeling_v1beta1_CreateInstructionRequest(buffer_arg) {
  return google_cloud_datalabeling_v1beta1_data_labeling_service_pb.CreateInstructionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_datalabeling_v1beta1_DataItem(arg) {
  if (!(arg instanceof google_cloud_datalabeling_v1beta1_dataset_pb.DataItem)) {
    throw new Error('Expected argument of type google.cloud.datalabeling.v1beta1.DataItem');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_datalabeling_v1beta1_DataItem(buffer_arg) {
  return google_cloud_datalabeling_v1beta1_dataset_pb.DataItem.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_datalabeling_v1beta1_Dataset(arg) {
  if (!(arg instanceof google_cloud_datalabeling_v1beta1_dataset_pb.Dataset)) {
    throw new Error('Expected argument of type google.cloud.datalabeling.v1beta1.Dataset');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_datalabeling_v1beta1_Dataset(buffer_arg) {
  return google_cloud_datalabeling_v1beta1_dataset_pb.Dataset.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_datalabeling_v1beta1_DeleteAnnotatedDatasetRequest(arg) {
  if (!(arg instanceof google_cloud_datalabeling_v1beta1_data_labeling_service_pb.DeleteAnnotatedDatasetRequest)) {
    throw new Error('Expected argument of type google.cloud.datalabeling.v1beta1.DeleteAnnotatedDatasetRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_datalabeling_v1beta1_DeleteAnnotatedDatasetRequest(buffer_arg) {
  return google_cloud_datalabeling_v1beta1_data_labeling_service_pb.DeleteAnnotatedDatasetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_datalabeling_v1beta1_DeleteAnnotationSpecSetRequest(arg) {
  if (!(arg instanceof google_cloud_datalabeling_v1beta1_data_labeling_service_pb.DeleteAnnotationSpecSetRequest)) {
    throw new Error('Expected argument of type google.cloud.datalabeling.v1beta1.DeleteAnnotationSpecSetRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_datalabeling_v1beta1_DeleteAnnotationSpecSetRequest(buffer_arg) {
  return google_cloud_datalabeling_v1beta1_data_labeling_service_pb.DeleteAnnotationSpecSetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_datalabeling_v1beta1_DeleteDatasetRequest(arg) {
  if (!(arg instanceof google_cloud_datalabeling_v1beta1_data_labeling_service_pb.DeleteDatasetRequest)) {
    throw new Error('Expected argument of type google.cloud.datalabeling.v1beta1.DeleteDatasetRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_datalabeling_v1beta1_DeleteDatasetRequest(buffer_arg) {
  return google_cloud_datalabeling_v1beta1_data_labeling_service_pb.DeleteDatasetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_datalabeling_v1beta1_DeleteEvaluationJobRequest(arg) {
  if (!(arg instanceof google_cloud_datalabeling_v1beta1_data_labeling_service_pb.DeleteEvaluationJobRequest)) {
    throw new Error('Expected argument of type google.cloud.datalabeling.v1beta1.DeleteEvaluationJobRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_datalabeling_v1beta1_DeleteEvaluationJobRequest(buffer_arg) {
  return google_cloud_datalabeling_v1beta1_data_labeling_service_pb.DeleteEvaluationJobRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_datalabeling_v1beta1_DeleteInstructionRequest(arg) {
  if (!(arg instanceof google_cloud_datalabeling_v1beta1_data_labeling_service_pb.DeleteInstructionRequest)) {
    throw new Error('Expected argument of type google.cloud.datalabeling.v1beta1.DeleteInstructionRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_datalabeling_v1beta1_DeleteInstructionRequest(buffer_arg) {
  return google_cloud_datalabeling_v1beta1_data_labeling_service_pb.DeleteInstructionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_datalabeling_v1beta1_Evaluation(arg) {
  if (!(arg instanceof google_cloud_datalabeling_v1beta1_evaluation_pb.Evaluation)) {
    throw new Error('Expected argument of type google.cloud.datalabeling.v1beta1.Evaluation');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_datalabeling_v1beta1_Evaluation(buffer_arg) {
  return google_cloud_datalabeling_v1beta1_evaluation_pb.Evaluation.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_datalabeling_v1beta1_EvaluationJob(arg) {
  if (!(arg instanceof google_cloud_datalabeling_v1beta1_evaluation_job_pb.EvaluationJob)) {
    throw new Error('Expected argument of type google.cloud.datalabeling.v1beta1.EvaluationJob');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_datalabeling_v1beta1_EvaluationJob(buffer_arg) {
  return google_cloud_datalabeling_v1beta1_evaluation_job_pb.EvaluationJob.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_datalabeling_v1beta1_Example(arg) {
  if (!(arg instanceof google_cloud_datalabeling_v1beta1_dataset_pb.Example)) {
    throw new Error('Expected argument of type google.cloud.datalabeling.v1beta1.Example');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_datalabeling_v1beta1_Example(buffer_arg) {
  return google_cloud_datalabeling_v1beta1_dataset_pb.Example.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_datalabeling_v1beta1_ExportDataRequest(arg) {
  if (!(arg instanceof google_cloud_datalabeling_v1beta1_data_labeling_service_pb.ExportDataRequest)) {
    throw new Error('Expected argument of type google.cloud.datalabeling.v1beta1.ExportDataRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_datalabeling_v1beta1_ExportDataRequest(buffer_arg) {
  return google_cloud_datalabeling_v1beta1_data_labeling_service_pb.ExportDataRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_datalabeling_v1beta1_GetAnnotatedDatasetRequest(arg) {
  if (!(arg instanceof google_cloud_datalabeling_v1beta1_data_labeling_service_pb.GetAnnotatedDatasetRequest)) {
    throw new Error('Expected argument of type google.cloud.datalabeling.v1beta1.GetAnnotatedDatasetRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_datalabeling_v1beta1_GetAnnotatedDatasetRequest(buffer_arg) {
  return google_cloud_datalabeling_v1beta1_data_labeling_service_pb.GetAnnotatedDatasetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_datalabeling_v1beta1_GetAnnotationSpecSetRequest(arg) {
  if (!(arg instanceof google_cloud_datalabeling_v1beta1_data_labeling_service_pb.GetAnnotationSpecSetRequest)) {
    throw new Error('Expected argument of type google.cloud.datalabeling.v1beta1.GetAnnotationSpecSetRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_datalabeling_v1beta1_GetAnnotationSpecSetRequest(buffer_arg) {
  return google_cloud_datalabeling_v1beta1_data_labeling_service_pb.GetAnnotationSpecSetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_datalabeling_v1beta1_GetDataItemRequest(arg) {
  if (!(arg instanceof google_cloud_datalabeling_v1beta1_data_labeling_service_pb.GetDataItemRequest)) {
    throw new Error('Expected argument of type google.cloud.datalabeling.v1beta1.GetDataItemRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_datalabeling_v1beta1_GetDataItemRequest(buffer_arg) {
  return google_cloud_datalabeling_v1beta1_data_labeling_service_pb.GetDataItemRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_datalabeling_v1beta1_GetDatasetRequest(arg) {
  if (!(arg instanceof google_cloud_datalabeling_v1beta1_data_labeling_service_pb.GetDatasetRequest)) {
    throw new Error('Expected argument of type google.cloud.datalabeling.v1beta1.GetDatasetRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_datalabeling_v1beta1_GetDatasetRequest(buffer_arg) {
  return google_cloud_datalabeling_v1beta1_data_labeling_service_pb.GetDatasetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_datalabeling_v1beta1_GetEvaluationJobRequest(arg) {
  if (!(arg instanceof google_cloud_datalabeling_v1beta1_data_labeling_service_pb.GetEvaluationJobRequest)) {
    throw new Error('Expected argument of type google.cloud.datalabeling.v1beta1.GetEvaluationJobRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_datalabeling_v1beta1_GetEvaluationJobRequest(buffer_arg) {
  return google_cloud_datalabeling_v1beta1_data_labeling_service_pb.GetEvaluationJobRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_datalabeling_v1beta1_GetEvaluationRequest(arg) {
  if (!(arg instanceof google_cloud_datalabeling_v1beta1_data_labeling_service_pb.GetEvaluationRequest)) {
    throw new Error('Expected argument of type google.cloud.datalabeling.v1beta1.GetEvaluationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_datalabeling_v1beta1_GetEvaluationRequest(buffer_arg) {
  return google_cloud_datalabeling_v1beta1_data_labeling_service_pb.GetEvaluationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_datalabeling_v1beta1_GetExampleRequest(arg) {
  if (!(arg instanceof google_cloud_datalabeling_v1beta1_data_labeling_service_pb.GetExampleRequest)) {
    throw new Error('Expected argument of type google.cloud.datalabeling.v1beta1.GetExampleRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_datalabeling_v1beta1_GetExampleRequest(buffer_arg) {
  return google_cloud_datalabeling_v1beta1_data_labeling_service_pb.GetExampleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_datalabeling_v1beta1_GetInstructionRequest(arg) {
  if (!(arg instanceof google_cloud_datalabeling_v1beta1_data_labeling_service_pb.GetInstructionRequest)) {
    throw new Error('Expected argument of type google.cloud.datalabeling.v1beta1.GetInstructionRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_datalabeling_v1beta1_GetInstructionRequest(buffer_arg) {
  return google_cloud_datalabeling_v1beta1_data_labeling_service_pb.GetInstructionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_datalabeling_v1beta1_ImportDataRequest(arg) {
  if (!(arg instanceof google_cloud_datalabeling_v1beta1_data_labeling_service_pb.ImportDataRequest)) {
    throw new Error('Expected argument of type google.cloud.datalabeling.v1beta1.ImportDataRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_datalabeling_v1beta1_ImportDataRequest(buffer_arg) {
  return google_cloud_datalabeling_v1beta1_data_labeling_service_pb.ImportDataRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_datalabeling_v1beta1_Instruction(arg) {
  if (!(arg instanceof google_cloud_datalabeling_v1beta1_instruction_pb.Instruction)) {
    throw new Error('Expected argument of type google.cloud.datalabeling.v1beta1.Instruction');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_datalabeling_v1beta1_Instruction(buffer_arg) {
  return google_cloud_datalabeling_v1beta1_instruction_pb.Instruction.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_datalabeling_v1beta1_LabelImageRequest(arg) {
  if (!(arg instanceof google_cloud_datalabeling_v1beta1_data_labeling_service_pb.LabelImageRequest)) {
    throw new Error('Expected argument of type google.cloud.datalabeling.v1beta1.LabelImageRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_datalabeling_v1beta1_LabelImageRequest(buffer_arg) {
  return google_cloud_datalabeling_v1beta1_data_labeling_service_pb.LabelImageRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_datalabeling_v1beta1_LabelTextRequest(arg) {
  if (!(arg instanceof google_cloud_datalabeling_v1beta1_data_labeling_service_pb.LabelTextRequest)) {
    throw new Error('Expected argument of type google.cloud.datalabeling.v1beta1.LabelTextRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_datalabeling_v1beta1_LabelTextRequest(buffer_arg) {
  return google_cloud_datalabeling_v1beta1_data_labeling_service_pb.LabelTextRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_datalabeling_v1beta1_LabelVideoRequest(arg) {
  if (!(arg instanceof google_cloud_datalabeling_v1beta1_data_labeling_service_pb.LabelVideoRequest)) {
    throw new Error('Expected argument of type google.cloud.datalabeling.v1beta1.LabelVideoRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_datalabeling_v1beta1_LabelVideoRequest(buffer_arg) {
  return google_cloud_datalabeling_v1beta1_data_labeling_service_pb.LabelVideoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_datalabeling_v1beta1_ListAnnotatedDatasetsRequest(arg) {
  if (!(arg instanceof google_cloud_datalabeling_v1beta1_data_labeling_service_pb.ListAnnotatedDatasetsRequest)) {
    throw new Error('Expected argument of type google.cloud.datalabeling.v1beta1.ListAnnotatedDatasetsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_datalabeling_v1beta1_ListAnnotatedDatasetsRequest(buffer_arg) {
  return google_cloud_datalabeling_v1beta1_data_labeling_service_pb.ListAnnotatedDatasetsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_datalabeling_v1beta1_ListAnnotatedDatasetsResponse(arg) {
  if (!(arg instanceof google_cloud_datalabeling_v1beta1_data_labeling_service_pb.ListAnnotatedDatasetsResponse)) {
    throw new Error('Expected argument of type google.cloud.datalabeling.v1beta1.ListAnnotatedDatasetsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_datalabeling_v1beta1_ListAnnotatedDatasetsResponse(buffer_arg) {
  return google_cloud_datalabeling_v1beta1_data_labeling_service_pb.ListAnnotatedDatasetsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_datalabeling_v1beta1_ListAnnotationSpecSetsRequest(arg) {
  if (!(arg instanceof google_cloud_datalabeling_v1beta1_data_labeling_service_pb.ListAnnotationSpecSetsRequest)) {
    throw new Error('Expected argument of type google.cloud.datalabeling.v1beta1.ListAnnotationSpecSetsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_datalabeling_v1beta1_ListAnnotationSpecSetsRequest(buffer_arg) {
  return google_cloud_datalabeling_v1beta1_data_labeling_service_pb.ListAnnotationSpecSetsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_datalabeling_v1beta1_ListAnnotationSpecSetsResponse(arg) {
  if (!(arg instanceof google_cloud_datalabeling_v1beta1_data_labeling_service_pb.ListAnnotationSpecSetsResponse)) {
    throw new Error('Expected argument of type google.cloud.datalabeling.v1beta1.ListAnnotationSpecSetsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_datalabeling_v1beta1_ListAnnotationSpecSetsResponse(buffer_arg) {
  return google_cloud_datalabeling_v1beta1_data_labeling_service_pb.ListAnnotationSpecSetsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_datalabeling_v1beta1_ListDataItemsRequest(arg) {
  if (!(arg instanceof google_cloud_datalabeling_v1beta1_data_labeling_service_pb.ListDataItemsRequest)) {
    throw new Error('Expected argument of type google.cloud.datalabeling.v1beta1.ListDataItemsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_datalabeling_v1beta1_ListDataItemsRequest(buffer_arg) {
  return google_cloud_datalabeling_v1beta1_data_labeling_service_pb.ListDataItemsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_datalabeling_v1beta1_ListDataItemsResponse(arg) {
  if (!(arg instanceof google_cloud_datalabeling_v1beta1_data_labeling_service_pb.ListDataItemsResponse)) {
    throw new Error('Expected argument of type google.cloud.datalabeling.v1beta1.ListDataItemsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_datalabeling_v1beta1_ListDataItemsResponse(buffer_arg) {
  return google_cloud_datalabeling_v1beta1_data_labeling_service_pb.ListDataItemsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_datalabeling_v1beta1_ListDatasetsRequest(arg) {
  if (!(arg instanceof google_cloud_datalabeling_v1beta1_data_labeling_service_pb.ListDatasetsRequest)) {
    throw new Error('Expected argument of type google.cloud.datalabeling.v1beta1.ListDatasetsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_datalabeling_v1beta1_ListDatasetsRequest(buffer_arg) {
  return google_cloud_datalabeling_v1beta1_data_labeling_service_pb.ListDatasetsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_datalabeling_v1beta1_ListDatasetsResponse(arg) {
  if (!(arg instanceof google_cloud_datalabeling_v1beta1_data_labeling_service_pb.ListDatasetsResponse)) {
    throw new Error('Expected argument of type google.cloud.datalabeling.v1beta1.ListDatasetsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_datalabeling_v1beta1_ListDatasetsResponse(buffer_arg) {
  return google_cloud_datalabeling_v1beta1_data_labeling_service_pb.ListDatasetsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_datalabeling_v1beta1_ListEvaluationJobsRequest(arg) {
  if (!(arg instanceof google_cloud_datalabeling_v1beta1_data_labeling_service_pb.ListEvaluationJobsRequest)) {
    throw new Error('Expected argument of type google.cloud.datalabeling.v1beta1.ListEvaluationJobsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_datalabeling_v1beta1_ListEvaluationJobsRequest(buffer_arg) {
  return google_cloud_datalabeling_v1beta1_data_labeling_service_pb.ListEvaluationJobsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_datalabeling_v1beta1_ListEvaluationJobsResponse(arg) {
  if (!(arg instanceof google_cloud_datalabeling_v1beta1_data_labeling_service_pb.ListEvaluationJobsResponse)) {
    throw new Error('Expected argument of type google.cloud.datalabeling.v1beta1.ListEvaluationJobsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_datalabeling_v1beta1_ListEvaluationJobsResponse(buffer_arg) {
  return google_cloud_datalabeling_v1beta1_data_labeling_service_pb.ListEvaluationJobsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_datalabeling_v1beta1_ListExamplesRequest(arg) {
  if (!(arg instanceof google_cloud_datalabeling_v1beta1_data_labeling_service_pb.ListExamplesRequest)) {
    throw new Error('Expected argument of type google.cloud.datalabeling.v1beta1.ListExamplesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_datalabeling_v1beta1_ListExamplesRequest(buffer_arg) {
  return google_cloud_datalabeling_v1beta1_data_labeling_service_pb.ListExamplesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_datalabeling_v1beta1_ListExamplesResponse(arg) {
  if (!(arg instanceof google_cloud_datalabeling_v1beta1_data_labeling_service_pb.ListExamplesResponse)) {
    throw new Error('Expected argument of type google.cloud.datalabeling.v1beta1.ListExamplesResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_datalabeling_v1beta1_ListExamplesResponse(buffer_arg) {
  return google_cloud_datalabeling_v1beta1_data_labeling_service_pb.ListExamplesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_datalabeling_v1beta1_ListInstructionsRequest(arg) {
  if (!(arg instanceof google_cloud_datalabeling_v1beta1_data_labeling_service_pb.ListInstructionsRequest)) {
    throw new Error('Expected argument of type google.cloud.datalabeling.v1beta1.ListInstructionsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_datalabeling_v1beta1_ListInstructionsRequest(buffer_arg) {
  return google_cloud_datalabeling_v1beta1_data_labeling_service_pb.ListInstructionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_datalabeling_v1beta1_ListInstructionsResponse(arg) {
  if (!(arg instanceof google_cloud_datalabeling_v1beta1_data_labeling_service_pb.ListInstructionsResponse)) {
    throw new Error('Expected argument of type google.cloud.datalabeling.v1beta1.ListInstructionsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_datalabeling_v1beta1_ListInstructionsResponse(buffer_arg) {
  return google_cloud_datalabeling_v1beta1_data_labeling_service_pb.ListInstructionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_datalabeling_v1beta1_PauseEvaluationJobRequest(arg) {
  if (!(arg instanceof google_cloud_datalabeling_v1beta1_data_labeling_service_pb.PauseEvaluationJobRequest)) {
    throw new Error('Expected argument of type google.cloud.datalabeling.v1beta1.PauseEvaluationJobRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_datalabeling_v1beta1_PauseEvaluationJobRequest(buffer_arg) {
  return google_cloud_datalabeling_v1beta1_data_labeling_service_pb.PauseEvaluationJobRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_datalabeling_v1beta1_ResumeEvaluationJobRequest(arg) {
  if (!(arg instanceof google_cloud_datalabeling_v1beta1_data_labeling_service_pb.ResumeEvaluationJobRequest)) {
    throw new Error('Expected argument of type google.cloud.datalabeling.v1beta1.ResumeEvaluationJobRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_datalabeling_v1beta1_ResumeEvaluationJobRequest(buffer_arg) {
  return google_cloud_datalabeling_v1beta1_data_labeling_service_pb.ResumeEvaluationJobRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_datalabeling_v1beta1_SearchEvaluationsRequest(arg) {
  if (!(arg instanceof google_cloud_datalabeling_v1beta1_data_labeling_service_pb.SearchEvaluationsRequest)) {
    throw new Error('Expected argument of type google.cloud.datalabeling.v1beta1.SearchEvaluationsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_datalabeling_v1beta1_SearchEvaluationsRequest(buffer_arg) {
  return google_cloud_datalabeling_v1beta1_data_labeling_service_pb.SearchEvaluationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_datalabeling_v1beta1_SearchEvaluationsResponse(arg) {
  if (!(arg instanceof google_cloud_datalabeling_v1beta1_data_labeling_service_pb.SearchEvaluationsResponse)) {
    throw new Error('Expected argument of type google.cloud.datalabeling.v1beta1.SearchEvaluationsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_datalabeling_v1beta1_SearchEvaluationsResponse(buffer_arg) {
  return google_cloud_datalabeling_v1beta1_data_labeling_service_pb.SearchEvaluationsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_datalabeling_v1beta1_SearchExampleComparisonsRequest(arg) {
  if (!(arg instanceof google_cloud_datalabeling_v1beta1_data_labeling_service_pb.SearchExampleComparisonsRequest)) {
    throw new Error('Expected argument of type google.cloud.datalabeling.v1beta1.SearchExampleComparisonsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_datalabeling_v1beta1_SearchExampleComparisonsRequest(buffer_arg) {
  return google_cloud_datalabeling_v1beta1_data_labeling_service_pb.SearchExampleComparisonsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_datalabeling_v1beta1_SearchExampleComparisonsResponse(arg) {
  if (!(arg instanceof google_cloud_datalabeling_v1beta1_data_labeling_service_pb.SearchExampleComparisonsResponse)) {
    throw new Error('Expected argument of type google.cloud.datalabeling.v1beta1.SearchExampleComparisonsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_datalabeling_v1beta1_SearchExampleComparisonsResponse(buffer_arg) {
  return google_cloud_datalabeling_v1beta1_data_labeling_service_pb.SearchExampleComparisonsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_datalabeling_v1beta1_UpdateEvaluationJobRequest(arg) {
  if (!(arg instanceof google_cloud_datalabeling_v1beta1_data_labeling_service_pb.UpdateEvaluationJobRequest)) {
    throw new Error('Expected argument of type google.cloud.datalabeling.v1beta1.UpdateEvaluationJobRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_datalabeling_v1beta1_UpdateEvaluationJobRequest(buffer_arg) {
  return google_cloud_datalabeling_v1beta1_data_labeling_service_pb.UpdateEvaluationJobRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


var DataLabelingServiceService = exports.DataLabelingServiceService = {
  // Creates dataset. If success return a Dataset resource.
  createDataset: {
    path: '/google.cloud.datalabeling.v1beta1.DataLabelingService/CreateDataset',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_datalabeling_v1beta1_data_labeling_service_pb.CreateDatasetRequest,
    responseType: google_cloud_datalabeling_v1beta1_dataset_pb.Dataset,
    requestSerialize: serialize_google_cloud_datalabeling_v1beta1_CreateDatasetRequest,
    requestDeserialize: deserialize_google_cloud_datalabeling_v1beta1_CreateDatasetRequest,
    responseSerialize: serialize_google_cloud_datalabeling_v1beta1_Dataset,
    responseDeserialize: deserialize_google_cloud_datalabeling_v1beta1_Dataset,
  },
  // Gets dataset by resource name.
  getDataset: {
    path: '/google.cloud.datalabeling.v1beta1.DataLabelingService/GetDataset',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_datalabeling_v1beta1_data_labeling_service_pb.GetDatasetRequest,
    responseType: google_cloud_datalabeling_v1beta1_dataset_pb.Dataset,
    requestSerialize: serialize_google_cloud_datalabeling_v1beta1_GetDatasetRequest,
    requestDeserialize: deserialize_google_cloud_datalabeling_v1beta1_GetDatasetRequest,
    responseSerialize: serialize_google_cloud_datalabeling_v1beta1_Dataset,
    responseDeserialize: deserialize_google_cloud_datalabeling_v1beta1_Dataset,
  },
  // Lists datasets under a project. Pagination is supported.
  listDatasets: {
    path: '/google.cloud.datalabeling.v1beta1.DataLabelingService/ListDatasets',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_datalabeling_v1beta1_data_labeling_service_pb.ListDatasetsRequest,
    responseType: google_cloud_datalabeling_v1beta1_data_labeling_service_pb.ListDatasetsResponse,
    requestSerialize: serialize_google_cloud_datalabeling_v1beta1_ListDatasetsRequest,
    requestDeserialize: deserialize_google_cloud_datalabeling_v1beta1_ListDatasetsRequest,
    responseSerialize: serialize_google_cloud_datalabeling_v1beta1_ListDatasetsResponse,
    responseDeserialize: deserialize_google_cloud_datalabeling_v1beta1_ListDatasetsResponse,
  },
  // Deletes a dataset by resource name.
  deleteDataset: {
    path: '/google.cloud.datalabeling.v1beta1.DataLabelingService/DeleteDataset',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_datalabeling_v1beta1_data_labeling_service_pb.DeleteDatasetRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_cloud_datalabeling_v1beta1_DeleteDatasetRequest,
    requestDeserialize: deserialize_google_cloud_datalabeling_v1beta1_DeleteDatasetRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Imports data into dataset based on source locations defined in request.
  // It can be called multiple times for the same dataset. Each dataset can
  // only have one long running operation running on it. For example, no
  // labeling task (also long running operation) can be started while
  // importing is still ongoing. Vice versa.
  importData: {
    path: '/google.cloud.datalabeling.v1beta1.DataLabelingService/ImportData',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_datalabeling_v1beta1_data_labeling_service_pb.ImportDataRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_cloud_datalabeling_v1beta1_ImportDataRequest,
    requestDeserialize: deserialize_google_cloud_datalabeling_v1beta1_ImportDataRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Exports data and annotations from dataset.
  exportData: {
    path: '/google.cloud.datalabeling.v1beta1.DataLabelingService/ExportData',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_datalabeling_v1beta1_data_labeling_service_pb.ExportDataRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_cloud_datalabeling_v1beta1_ExportDataRequest,
    requestDeserialize: deserialize_google_cloud_datalabeling_v1beta1_ExportDataRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Gets a data item in a dataset by resource name. This API can be
  // called after data are imported into dataset.
  getDataItem: {
    path: '/google.cloud.datalabeling.v1beta1.DataLabelingService/GetDataItem',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_datalabeling_v1beta1_data_labeling_service_pb.GetDataItemRequest,
    responseType: google_cloud_datalabeling_v1beta1_dataset_pb.DataItem,
    requestSerialize: serialize_google_cloud_datalabeling_v1beta1_GetDataItemRequest,
    requestDeserialize: deserialize_google_cloud_datalabeling_v1beta1_GetDataItemRequest,
    responseSerialize: serialize_google_cloud_datalabeling_v1beta1_DataItem,
    responseDeserialize: deserialize_google_cloud_datalabeling_v1beta1_DataItem,
  },
  // Lists data items in a dataset. This API can be called after data
  // are imported into dataset. Pagination is supported.
  listDataItems: {
    path: '/google.cloud.datalabeling.v1beta1.DataLabelingService/ListDataItems',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_datalabeling_v1beta1_data_labeling_service_pb.ListDataItemsRequest,
    responseType: google_cloud_datalabeling_v1beta1_data_labeling_service_pb.ListDataItemsResponse,
    requestSerialize: serialize_google_cloud_datalabeling_v1beta1_ListDataItemsRequest,
    requestDeserialize: deserialize_google_cloud_datalabeling_v1beta1_ListDataItemsRequest,
    responseSerialize: serialize_google_cloud_datalabeling_v1beta1_ListDataItemsResponse,
    responseDeserialize: deserialize_google_cloud_datalabeling_v1beta1_ListDataItemsResponse,
  },
  // Gets an annotated dataset by resource name.
  getAnnotatedDataset: {
    path: '/google.cloud.datalabeling.v1beta1.DataLabelingService/GetAnnotatedDataset',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_datalabeling_v1beta1_data_labeling_service_pb.GetAnnotatedDatasetRequest,
    responseType: google_cloud_datalabeling_v1beta1_dataset_pb.AnnotatedDataset,
    requestSerialize: serialize_google_cloud_datalabeling_v1beta1_GetAnnotatedDatasetRequest,
    requestDeserialize: deserialize_google_cloud_datalabeling_v1beta1_GetAnnotatedDatasetRequest,
    responseSerialize: serialize_google_cloud_datalabeling_v1beta1_AnnotatedDataset,
    responseDeserialize: deserialize_google_cloud_datalabeling_v1beta1_AnnotatedDataset,
  },
  // Lists annotated datasets for a dataset. Pagination is supported.
  listAnnotatedDatasets: {
    path: '/google.cloud.datalabeling.v1beta1.DataLabelingService/ListAnnotatedDatasets',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_datalabeling_v1beta1_data_labeling_service_pb.ListAnnotatedDatasetsRequest,
    responseType: google_cloud_datalabeling_v1beta1_data_labeling_service_pb.ListAnnotatedDatasetsResponse,
    requestSerialize: serialize_google_cloud_datalabeling_v1beta1_ListAnnotatedDatasetsRequest,
    requestDeserialize: deserialize_google_cloud_datalabeling_v1beta1_ListAnnotatedDatasetsRequest,
    responseSerialize: serialize_google_cloud_datalabeling_v1beta1_ListAnnotatedDatasetsResponse,
    responseDeserialize: deserialize_google_cloud_datalabeling_v1beta1_ListAnnotatedDatasetsResponse,
  },
  // Deletes an annotated dataset by resource name.
  deleteAnnotatedDataset: {
    path: '/google.cloud.datalabeling.v1beta1.DataLabelingService/DeleteAnnotatedDataset',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_datalabeling_v1beta1_data_labeling_service_pb.DeleteAnnotatedDatasetRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_cloud_datalabeling_v1beta1_DeleteAnnotatedDatasetRequest,
    requestDeserialize: deserialize_google_cloud_datalabeling_v1beta1_DeleteAnnotatedDatasetRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Starts a labeling task for image. The type of image labeling task is
  // configured by feature in the request.
  labelImage: {
    path: '/google.cloud.datalabeling.v1beta1.DataLabelingService/LabelImage',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_datalabeling_v1beta1_data_labeling_service_pb.LabelImageRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_cloud_datalabeling_v1beta1_LabelImageRequest,
    requestDeserialize: deserialize_google_cloud_datalabeling_v1beta1_LabelImageRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Starts a labeling task for video. The type of video labeling task is
  // configured by feature in the request.
  labelVideo: {
    path: '/google.cloud.datalabeling.v1beta1.DataLabelingService/LabelVideo',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_datalabeling_v1beta1_data_labeling_service_pb.LabelVideoRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_cloud_datalabeling_v1beta1_LabelVideoRequest,
    requestDeserialize: deserialize_google_cloud_datalabeling_v1beta1_LabelVideoRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Starts a labeling task for text. The type of text labeling task is
  // configured by feature in the request.
  labelText: {
    path: '/google.cloud.datalabeling.v1beta1.DataLabelingService/LabelText',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_datalabeling_v1beta1_data_labeling_service_pb.LabelTextRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_cloud_datalabeling_v1beta1_LabelTextRequest,
    requestDeserialize: deserialize_google_cloud_datalabeling_v1beta1_LabelTextRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Gets an example by resource name, including both data and annotation.
  getExample: {
    path: '/google.cloud.datalabeling.v1beta1.DataLabelingService/GetExample',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_datalabeling_v1beta1_data_labeling_service_pb.GetExampleRequest,
    responseType: google_cloud_datalabeling_v1beta1_dataset_pb.Example,
    requestSerialize: serialize_google_cloud_datalabeling_v1beta1_GetExampleRequest,
    requestDeserialize: deserialize_google_cloud_datalabeling_v1beta1_GetExampleRequest,
    responseSerialize: serialize_google_cloud_datalabeling_v1beta1_Example,
    responseDeserialize: deserialize_google_cloud_datalabeling_v1beta1_Example,
  },
  // Lists examples in an annotated dataset. Pagination is supported.
  listExamples: {
    path: '/google.cloud.datalabeling.v1beta1.DataLabelingService/ListExamples',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_datalabeling_v1beta1_data_labeling_service_pb.ListExamplesRequest,
    responseType: google_cloud_datalabeling_v1beta1_data_labeling_service_pb.ListExamplesResponse,
    requestSerialize: serialize_google_cloud_datalabeling_v1beta1_ListExamplesRequest,
    requestDeserialize: deserialize_google_cloud_datalabeling_v1beta1_ListExamplesRequest,
    responseSerialize: serialize_google_cloud_datalabeling_v1beta1_ListExamplesResponse,
    responseDeserialize: deserialize_google_cloud_datalabeling_v1beta1_ListExamplesResponse,
  },
  // Creates an annotation spec set by providing a set of labels.
  createAnnotationSpecSet: {
    path: '/google.cloud.datalabeling.v1beta1.DataLabelingService/CreateAnnotationSpecSet',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_datalabeling_v1beta1_data_labeling_service_pb.CreateAnnotationSpecSetRequest,
    responseType: google_cloud_datalabeling_v1beta1_annotation_spec_set_pb.AnnotationSpecSet,
    requestSerialize: serialize_google_cloud_datalabeling_v1beta1_CreateAnnotationSpecSetRequest,
    requestDeserialize: deserialize_google_cloud_datalabeling_v1beta1_CreateAnnotationSpecSetRequest,
    responseSerialize: serialize_google_cloud_datalabeling_v1beta1_AnnotationSpecSet,
    responseDeserialize: deserialize_google_cloud_datalabeling_v1beta1_AnnotationSpecSet,
  },
  // Gets an annotation spec set by resource name.
  getAnnotationSpecSet: {
    path: '/google.cloud.datalabeling.v1beta1.DataLabelingService/GetAnnotationSpecSet',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_datalabeling_v1beta1_data_labeling_service_pb.GetAnnotationSpecSetRequest,
    responseType: google_cloud_datalabeling_v1beta1_annotation_spec_set_pb.AnnotationSpecSet,
    requestSerialize: serialize_google_cloud_datalabeling_v1beta1_GetAnnotationSpecSetRequest,
    requestDeserialize: deserialize_google_cloud_datalabeling_v1beta1_GetAnnotationSpecSetRequest,
    responseSerialize: serialize_google_cloud_datalabeling_v1beta1_AnnotationSpecSet,
    responseDeserialize: deserialize_google_cloud_datalabeling_v1beta1_AnnotationSpecSet,
  },
  // Lists annotation spec sets for a project. Pagination is supported.
  listAnnotationSpecSets: {
    path: '/google.cloud.datalabeling.v1beta1.DataLabelingService/ListAnnotationSpecSets',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_datalabeling_v1beta1_data_labeling_service_pb.ListAnnotationSpecSetsRequest,
    responseType: google_cloud_datalabeling_v1beta1_data_labeling_service_pb.ListAnnotationSpecSetsResponse,
    requestSerialize: serialize_google_cloud_datalabeling_v1beta1_ListAnnotationSpecSetsRequest,
    requestDeserialize: deserialize_google_cloud_datalabeling_v1beta1_ListAnnotationSpecSetsRequest,
    responseSerialize: serialize_google_cloud_datalabeling_v1beta1_ListAnnotationSpecSetsResponse,
    responseDeserialize: deserialize_google_cloud_datalabeling_v1beta1_ListAnnotationSpecSetsResponse,
  },
  // Deletes an annotation spec set by resource name.
  deleteAnnotationSpecSet: {
    path: '/google.cloud.datalabeling.v1beta1.DataLabelingService/DeleteAnnotationSpecSet',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_datalabeling_v1beta1_data_labeling_service_pb.DeleteAnnotationSpecSetRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_cloud_datalabeling_v1beta1_DeleteAnnotationSpecSetRequest,
    requestDeserialize: deserialize_google_cloud_datalabeling_v1beta1_DeleteAnnotationSpecSetRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Creates an instruction for how data should be labeled.
  createInstruction: {
    path: '/google.cloud.datalabeling.v1beta1.DataLabelingService/CreateInstruction',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_datalabeling_v1beta1_data_labeling_service_pb.CreateInstructionRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_cloud_datalabeling_v1beta1_CreateInstructionRequest,
    requestDeserialize: deserialize_google_cloud_datalabeling_v1beta1_CreateInstructionRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Gets an instruction by resource name.
  getInstruction: {
    path: '/google.cloud.datalabeling.v1beta1.DataLabelingService/GetInstruction',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_datalabeling_v1beta1_data_labeling_service_pb.GetInstructionRequest,
    responseType: google_cloud_datalabeling_v1beta1_instruction_pb.Instruction,
    requestSerialize: serialize_google_cloud_datalabeling_v1beta1_GetInstructionRequest,
    requestDeserialize: deserialize_google_cloud_datalabeling_v1beta1_GetInstructionRequest,
    responseSerialize: serialize_google_cloud_datalabeling_v1beta1_Instruction,
    responseDeserialize: deserialize_google_cloud_datalabeling_v1beta1_Instruction,
  },
  // Lists instructions for a project. Pagination is supported.
  listInstructions: {
    path: '/google.cloud.datalabeling.v1beta1.DataLabelingService/ListInstructions',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_datalabeling_v1beta1_data_labeling_service_pb.ListInstructionsRequest,
    responseType: google_cloud_datalabeling_v1beta1_data_labeling_service_pb.ListInstructionsResponse,
    requestSerialize: serialize_google_cloud_datalabeling_v1beta1_ListInstructionsRequest,
    requestDeserialize: deserialize_google_cloud_datalabeling_v1beta1_ListInstructionsRequest,
    responseSerialize: serialize_google_cloud_datalabeling_v1beta1_ListInstructionsResponse,
    responseDeserialize: deserialize_google_cloud_datalabeling_v1beta1_ListInstructionsResponse,
  },
  // Deletes an instruction object by resource name.
  deleteInstruction: {
    path: '/google.cloud.datalabeling.v1beta1.DataLabelingService/DeleteInstruction',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_datalabeling_v1beta1_data_labeling_service_pb.DeleteInstructionRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_cloud_datalabeling_v1beta1_DeleteInstructionRequest,
    requestDeserialize: deserialize_google_cloud_datalabeling_v1beta1_DeleteInstructionRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Gets an evaluation by resource name.
  getEvaluation: {
    path: '/google.cloud.datalabeling.v1beta1.DataLabelingService/GetEvaluation',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_datalabeling_v1beta1_data_labeling_service_pb.GetEvaluationRequest,
    responseType: google_cloud_datalabeling_v1beta1_evaluation_pb.Evaluation,
    requestSerialize: serialize_google_cloud_datalabeling_v1beta1_GetEvaluationRequest,
    requestDeserialize: deserialize_google_cloud_datalabeling_v1beta1_GetEvaluationRequest,
    responseSerialize: serialize_google_cloud_datalabeling_v1beta1_Evaluation,
    responseDeserialize: deserialize_google_cloud_datalabeling_v1beta1_Evaluation,
  },
  // Searchs evaluations within a project. Supported filter: evaluation_job,
  // evaluation_time.
  searchEvaluations: {
    path: '/google.cloud.datalabeling.v1beta1.DataLabelingService/SearchEvaluations',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_datalabeling_v1beta1_data_labeling_service_pb.SearchEvaluationsRequest,
    responseType: google_cloud_datalabeling_v1beta1_data_labeling_service_pb.SearchEvaluationsResponse,
    requestSerialize: serialize_google_cloud_datalabeling_v1beta1_SearchEvaluationsRequest,
    requestDeserialize: deserialize_google_cloud_datalabeling_v1beta1_SearchEvaluationsRequest,
    responseSerialize: serialize_google_cloud_datalabeling_v1beta1_SearchEvaluationsResponse,
    responseDeserialize: deserialize_google_cloud_datalabeling_v1beta1_SearchEvaluationsResponse,
  },
  // Searchs example comparisons in evaluation, in format of examples
  // of both ground truth and prediction(s). It is represented as a search with
  // evaluation id.
  searchExampleComparisons: {
    path: '/google.cloud.datalabeling.v1beta1.DataLabelingService/SearchExampleComparisons',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_datalabeling_v1beta1_data_labeling_service_pb.SearchExampleComparisonsRequest,
    responseType: google_cloud_datalabeling_v1beta1_data_labeling_service_pb.SearchExampleComparisonsResponse,
    requestSerialize: serialize_google_cloud_datalabeling_v1beta1_SearchExampleComparisonsRequest,
    requestDeserialize: deserialize_google_cloud_datalabeling_v1beta1_SearchExampleComparisonsRequest,
    responseSerialize: serialize_google_cloud_datalabeling_v1beta1_SearchExampleComparisonsResponse,
    responseDeserialize: deserialize_google_cloud_datalabeling_v1beta1_SearchExampleComparisonsResponse,
  },
  // Creates an evaluation job.
  createEvaluationJob: {
    path: '/google.cloud.datalabeling.v1beta1.DataLabelingService/CreateEvaluationJob',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_datalabeling_v1beta1_data_labeling_service_pb.CreateEvaluationJobRequest,
    responseType: google_cloud_datalabeling_v1beta1_evaluation_job_pb.EvaluationJob,
    requestSerialize: serialize_google_cloud_datalabeling_v1beta1_CreateEvaluationJobRequest,
    requestDeserialize: deserialize_google_cloud_datalabeling_v1beta1_CreateEvaluationJobRequest,
    responseSerialize: serialize_google_cloud_datalabeling_v1beta1_EvaluationJob,
    responseDeserialize: deserialize_google_cloud_datalabeling_v1beta1_EvaluationJob,
  },
  // Updates an evaluation job.
  updateEvaluationJob: {
    path: '/google.cloud.datalabeling.v1beta1.DataLabelingService/UpdateEvaluationJob',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_datalabeling_v1beta1_data_labeling_service_pb.UpdateEvaluationJobRequest,
    responseType: google_cloud_datalabeling_v1beta1_evaluation_job_pb.EvaluationJob,
    requestSerialize: serialize_google_cloud_datalabeling_v1beta1_UpdateEvaluationJobRequest,
    requestDeserialize: deserialize_google_cloud_datalabeling_v1beta1_UpdateEvaluationJobRequest,
    responseSerialize: serialize_google_cloud_datalabeling_v1beta1_EvaluationJob,
    responseDeserialize: deserialize_google_cloud_datalabeling_v1beta1_EvaluationJob,
  },
  // Gets an evaluation job by resource name.
  getEvaluationJob: {
    path: '/google.cloud.datalabeling.v1beta1.DataLabelingService/GetEvaluationJob',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_datalabeling_v1beta1_data_labeling_service_pb.GetEvaluationJobRequest,
    responseType: google_cloud_datalabeling_v1beta1_evaluation_job_pb.EvaluationJob,
    requestSerialize: serialize_google_cloud_datalabeling_v1beta1_GetEvaluationJobRequest,
    requestDeserialize: deserialize_google_cloud_datalabeling_v1beta1_GetEvaluationJobRequest,
    responseSerialize: serialize_google_cloud_datalabeling_v1beta1_EvaluationJob,
    responseDeserialize: deserialize_google_cloud_datalabeling_v1beta1_EvaluationJob,
  },
  // Pauses an evaluation job. Pausing a evaluation job that is already in
  // PAUSED state will be a no-op.
  pauseEvaluationJob: {
    path: '/google.cloud.datalabeling.v1beta1.DataLabelingService/PauseEvaluationJob',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_datalabeling_v1beta1_data_labeling_service_pb.PauseEvaluationJobRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_cloud_datalabeling_v1beta1_PauseEvaluationJobRequest,
    requestDeserialize: deserialize_google_cloud_datalabeling_v1beta1_PauseEvaluationJobRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Resumes a paused evaluation job. Deleted evaluation job can't be resumed.
  // Resuming a running evaluation job will be a no-op.
  resumeEvaluationJob: {
    path: '/google.cloud.datalabeling.v1beta1.DataLabelingService/ResumeEvaluationJob',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_datalabeling_v1beta1_data_labeling_service_pb.ResumeEvaluationJobRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_cloud_datalabeling_v1beta1_ResumeEvaluationJobRequest,
    requestDeserialize: deserialize_google_cloud_datalabeling_v1beta1_ResumeEvaluationJobRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Stops and deletes an evaluation job.
  deleteEvaluationJob: {
    path: '/google.cloud.datalabeling.v1beta1.DataLabelingService/DeleteEvaluationJob',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_datalabeling_v1beta1_data_labeling_service_pb.DeleteEvaluationJobRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_cloud_datalabeling_v1beta1_DeleteEvaluationJobRequest,
    requestDeserialize: deserialize_google_cloud_datalabeling_v1beta1_DeleteEvaluationJobRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Lists all evaluation jobs within a project with possible filters.
  // Pagination is supported.
  listEvaluationJobs: {
    path: '/google.cloud.datalabeling.v1beta1.DataLabelingService/ListEvaluationJobs',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_datalabeling_v1beta1_data_labeling_service_pb.ListEvaluationJobsRequest,
    responseType: google_cloud_datalabeling_v1beta1_data_labeling_service_pb.ListEvaluationJobsResponse,
    requestSerialize: serialize_google_cloud_datalabeling_v1beta1_ListEvaluationJobsRequest,
    requestDeserialize: deserialize_google_cloud_datalabeling_v1beta1_ListEvaluationJobsRequest,
    responseSerialize: serialize_google_cloud_datalabeling_v1beta1_ListEvaluationJobsResponse,
    responseDeserialize: deserialize_google_cloud_datalabeling_v1beta1_ListEvaluationJobsResponse,
  },
};

exports.DataLabelingServiceClient = grpc.makeGenericClientConstructor(DataLabelingServiceService);
