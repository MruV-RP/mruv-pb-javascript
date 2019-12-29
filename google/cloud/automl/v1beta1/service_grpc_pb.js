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
var google_cloud_automl_v1beta1_service_pb = require('../../../../google/cloud/automl/v1beta1/service_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_cloud_automl_v1beta1_annotation_payload_pb = require('../../../../google/cloud/automl/v1beta1/annotation_payload_pb.js');
var google_cloud_automl_v1beta1_annotation_spec_pb = require('../../../../google/cloud/automl/v1beta1/annotation_spec_pb.js');
var google_cloud_automl_v1beta1_column_spec_pb = require('../../../../google/cloud/automl/v1beta1/column_spec_pb.js');
var google_cloud_automl_v1beta1_dataset_pb = require('../../../../google/cloud/automl/v1beta1/dataset_pb.js');
var google_cloud_automl_v1beta1_image_pb = require('../../../../google/cloud/automl/v1beta1/image_pb.js');
var google_cloud_automl_v1beta1_io_pb = require('../../../../google/cloud/automl/v1beta1/io_pb.js');
var google_cloud_automl_v1beta1_model_pb = require('../../../../google/cloud/automl/v1beta1/model_pb.js');
var google_cloud_automl_v1beta1_model_evaluation_pb = require('../../../../google/cloud/automl/v1beta1/model_evaluation_pb.js');
var google_cloud_automl_v1beta1_operations_pb = require('../../../../google/cloud/automl/v1beta1/operations_pb.js');
var google_cloud_automl_v1beta1_table_spec_pb = require('../../../../google/cloud/automl/v1beta1/table_spec_pb.js');
var google_longrunning_operations_pb = require('../../../../google/longrunning/operations_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_api_client_pb = require('../../../../google/api/client_pb.js');

function serialize_google_cloud_automl_v1beta1_AnnotationSpec(arg) {
  if (!(arg instanceof google_cloud_automl_v1beta1_annotation_spec_pb.AnnotationSpec)) {
    throw new Error('Expected argument of type google.cloud.automl.v1beta1.AnnotationSpec');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_automl_v1beta1_AnnotationSpec(buffer_arg) {
  return google_cloud_automl_v1beta1_annotation_spec_pb.AnnotationSpec.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_automl_v1beta1_ColumnSpec(arg) {
  if (!(arg instanceof google_cloud_automl_v1beta1_column_spec_pb.ColumnSpec)) {
    throw new Error('Expected argument of type google.cloud.automl.v1beta1.ColumnSpec');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_automl_v1beta1_ColumnSpec(buffer_arg) {
  return google_cloud_automl_v1beta1_column_spec_pb.ColumnSpec.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_automl_v1beta1_CreateDatasetRequest(arg) {
  if (!(arg instanceof google_cloud_automl_v1beta1_service_pb.CreateDatasetRequest)) {
    throw new Error('Expected argument of type google.cloud.automl.v1beta1.CreateDatasetRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_automl_v1beta1_CreateDatasetRequest(buffer_arg) {
  return google_cloud_automl_v1beta1_service_pb.CreateDatasetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_automl_v1beta1_CreateModelRequest(arg) {
  if (!(arg instanceof google_cloud_automl_v1beta1_service_pb.CreateModelRequest)) {
    throw new Error('Expected argument of type google.cloud.automl.v1beta1.CreateModelRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_automl_v1beta1_CreateModelRequest(buffer_arg) {
  return google_cloud_automl_v1beta1_service_pb.CreateModelRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_automl_v1beta1_Dataset(arg) {
  if (!(arg instanceof google_cloud_automl_v1beta1_dataset_pb.Dataset)) {
    throw new Error('Expected argument of type google.cloud.automl.v1beta1.Dataset');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_automl_v1beta1_Dataset(buffer_arg) {
  return google_cloud_automl_v1beta1_dataset_pb.Dataset.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_automl_v1beta1_DeleteDatasetRequest(arg) {
  if (!(arg instanceof google_cloud_automl_v1beta1_service_pb.DeleteDatasetRequest)) {
    throw new Error('Expected argument of type google.cloud.automl.v1beta1.DeleteDatasetRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_automl_v1beta1_DeleteDatasetRequest(buffer_arg) {
  return google_cloud_automl_v1beta1_service_pb.DeleteDatasetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_automl_v1beta1_DeleteModelRequest(arg) {
  if (!(arg instanceof google_cloud_automl_v1beta1_service_pb.DeleteModelRequest)) {
    throw new Error('Expected argument of type google.cloud.automl.v1beta1.DeleteModelRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_automl_v1beta1_DeleteModelRequest(buffer_arg) {
  return google_cloud_automl_v1beta1_service_pb.DeleteModelRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_automl_v1beta1_DeployModelRequest(arg) {
  if (!(arg instanceof google_cloud_automl_v1beta1_service_pb.DeployModelRequest)) {
    throw new Error('Expected argument of type google.cloud.automl.v1beta1.DeployModelRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_automl_v1beta1_DeployModelRequest(buffer_arg) {
  return google_cloud_automl_v1beta1_service_pb.DeployModelRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_automl_v1beta1_ExportDataRequest(arg) {
  if (!(arg instanceof google_cloud_automl_v1beta1_service_pb.ExportDataRequest)) {
    throw new Error('Expected argument of type google.cloud.automl.v1beta1.ExportDataRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_automl_v1beta1_ExportDataRequest(buffer_arg) {
  return google_cloud_automl_v1beta1_service_pb.ExportDataRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_automl_v1beta1_ExportEvaluatedExamplesRequest(arg) {
  if (!(arg instanceof google_cloud_automl_v1beta1_service_pb.ExportEvaluatedExamplesRequest)) {
    throw new Error('Expected argument of type google.cloud.automl.v1beta1.ExportEvaluatedExamplesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_automl_v1beta1_ExportEvaluatedExamplesRequest(buffer_arg) {
  return google_cloud_automl_v1beta1_service_pb.ExportEvaluatedExamplesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_automl_v1beta1_ExportModelRequest(arg) {
  if (!(arg instanceof google_cloud_automl_v1beta1_service_pb.ExportModelRequest)) {
    throw new Error('Expected argument of type google.cloud.automl.v1beta1.ExportModelRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_automl_v1beta1_ExportModelRequest(buffer_arg) {
  return google_cloud_automl_v1beta1_service_pb.ExportModelRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_automl_v1beta1_GetAnnotationSpecRequest(arg) {
  if (!(arg instanceof google_cloud_automl_v1beta1_service_pb.GetAnnotationSpecRequest)) {
    throw new Error('Expected argument of type google.cloud.automl.v1beta1.GetAnnotationSpecRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_automl_v1beta1_GetAnnotationSpecRequest(buffer_arg) {
  return google_cloud_automl_v1beta1_service_pb.GetAnnotationSpecRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_automl_v1beta1_GetColumnSpecRequest(arg) {
  if (!(arg instanceof google_cloud_automl_v1beta1_service_pb.GetColumnSpecRequest)) {
    throw new Error('Expected argument of type google.cloud.automl.v1beta1.GetColumnSpecRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_automl_v1beta1_GetColumnSpecRequest(buffer_arg) {
  return google_cloud_automl_v1beta1_service_pb.GetColumnSpecRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_automl_v1beta1_GetDatasetRequest(arg) {
  if (!(arg instanceof google_cloud_automl_v1beta1_service_pb.GetDatasetRequest)) {
    throw new Error('Expected argument of type google.cloud.automl.v1beta1.GetDatasetRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_automl_v1beta1_GetDatasetRequest(buffer_arg) {
  return google_cloud_automl_v1beta1_service_pb.GetDatasetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_automl_v1beta1_GetModelEvaluationRequest(arg) {
  if (!(arg instanceof google_cloud_automl_v1beta1_service_pb.GetModelEvaluationRequest)) {
    throw new Error('Expected argument of type google.cloud.automl.v1beta1.GetModelEvaluationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_automl_v1beta1_GetModelEvaluationRequest(buffer_arg) {
  return google_cloud_automl_v1beta1_service_pb.GetModelEvaluationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_automl_v1beta1_GetModelRequest(arg) {
  if (!(arg instanceof google_cloud_automl_v1beta1_service_pb.GetModelRequest)) {
    throw new Error('Expected argument of type google.cloud.automl.v1beta1.GetModelRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_automl_v1beta1_GetModelRequest(buffer_arg) {
  return google_cloud_automl_v1beta1_service_pb.GetModelRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_automl_v1beta1_GetTableSpecRequest(arg) {
  if (!(arg instanceof google_cloud_automl_v1beta1_service_pb.GetTableSpecRequest)) {
    throw new Error('Expected argument of type google.cloud.automl.v1beta1.GetTableSpecRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_automl_v1beta1_GetTableSpecRequest(buffer_arg) {
  return google_cloud_automl_v1beta1_service_pb.GetTableSpecRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_automl_v1beta1_ImportDataRequest(arg) {
  if (!(arg instanceof google_cloud_automl_v1beta1_service_pb.ImportDataRequest)) {
    throw new Error('Expected argument of type google.cloud.automl.v1beta1.ImportDataRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_automl_v1beta1_ImportDataRequest(buffer_arg) {
  return google_cloud_automl_v1beta1_service_pb.ImportDataRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_automl_v1beta1_ListColumnSpecsRequest(arg) {
  if (!(arg instanceof google_cloud_automl_v1beta1_service_pb.ListColumnSpecsRequest)) {
    throw new Error('Expected argument of type google.cloud.automl.v1beta1.ListColumnSpecsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_automl_v1beta1_ListColumnSpecsRequest(buffer_arg) {
  return google_cloud_automl_v1beta1_service_pb.ListColumnSpecsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_automl_v1beta1_ListColumnSpecsResponse(arg) {
  if (!(arg instanceof google_cloud_automl_v1beta1_service_pb.ListColumnSpecsResponse)) {
    throw new Error('Expected argument of type google.cloud.automl.v1beta1.ListColumnSpecsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_automl_v1beta1_ListColumnSpecsResponse(buffer_arg) {
  return google_cloud_automl_v1beta1_service_pb.ListColumnSpecsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_automl_v1beta1_ListDatasetsRequest(arg) {
  if (!(arg instanceof google_cloud_automl_v1beta1_service_pb.ListDatasetsRequest)) {
    throw new Error('Expected argument of type google.cloud.automl.v1beta1.ListDatasetsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_automl_v1beta1_ListDatasetsRequest(buffer_arg) {
  return google_cloud_automl_v1beta1_service_pb.ListDatasetsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_automl_v1beta1_ListDatasetsResponse(arg) {
  if (!(arg instanceof google_cloud_automl_v1beta1_service_pb.ListDatasetsResponse)) {
    throw new Error('Expected argument of type google.cloud.automl.v1beta1.ListDatasetsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_automl_v1beta1_ListDatasetsResponse(buffer_arg) {
  return google_cloud_automl_v1beta1_service_pb.ListDatasetsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_automl_v1beta1_ListModelEvaluationsRequest(arg) {
  if (!(arg instanceof google_cloud_automl_v1beta1_service_pb.ListModelEvaluationsRequest)) {
    throw new Error('Expected argument of type google.cloud.automl.v1beta1.ListModelEvaluationsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_automl_v1beta1_ListModelEvaluationsRequest(buffer_arg) {
  return google_cloud_automl_v1beta1_service_pb.ListModelEvaluationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_automl_v1beta1_ListModelEvaluationsResponse(arg) {
  if (!(arg instanceof google_cloud_automl_v1beta1_service_pb.ListModelEvaluationsResponse)) {
    throw new Error('Expected argument of type google.cloud.automl.v1beta1.ListModelEvaluationsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_automl_v1beta1_ListModelEvaluationsResponse(buffer_arg) {
  return google_cloud_automl_v1beta1_service_pb.ListModelEvaluationsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_automl_v1beta1_ListModelsRequest(arg) {
  if (!(arg instanceof google_cloud_automl_v1beta1_service_pb.ListModelsRequest)) {
    throw new Error('Expected argument of type google.cloud.automl.v1beta1.ListModelsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_automl_v1beta1_ListModelsRequest(buffer_arg) {
  return google_cloud_automl_v1beta1_service_pb.ListModelsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_automl_v1beta1_ListModelsResponse(arg) {
  if (!(arg instanceof google_cloud_automl_v1beta1_service_pb.ListModelsResponse)) {
    throw new Error('Expected argument of type google.cloud.automl.v1beta1.ListModelsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_automl_v1beta1_ListModelsResponse(buffer_arg) {
  return google_cloud_automl_v1beta1_service_pb.ListModelsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_automl_v1beta1_ListTableSpecsRequest(arg) {
  if (!(arg instanceof google_cloud_automl_v1beta1_service_pb.ListTableSpecsRequest)) {
    throw new Error('Expected argument of type google.cloud.automl.v1beta1.ListTableSpecsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_automl_v1beta1_ListTableSpecsRequest(buffer_arg) {
  return google_cloud_automl_v1beta1_service_pb.ListTableSpecsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_automl_v1beta1_ListTableSpecsResponse(arg) {
  if (!(arg instanceof google_cloud_automl_v1beta1_service_pb.ListTableSpecsResponse)) {
    throw new Error('Expected argument of type google.cloud.automl.v1beta1.ListTableSpecsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_automl_v1beta1_ListTableSpecsResponse(buffer_arg) {
  return google_cloud_automl_v1beta1_service_pb.ListTableSpecsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_automl_v1beta1_Model(arg) {
  if (!(arg instanceof google_cloud_automl_v1beta1_model_pb.Model)) {
    throw new Error('Expected argument of type google.cloud.automl.v1beta1.Model');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_automl_v1beta1_Model(buffer_arg) {
  return google_cloud_automl_v1beta1_model_pb.Model.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_automl_v1beta1_ModelEvaluation(arg) {
  if (!(arg instanceof google_cloud_automl_v1beta1_model_evaluation_pb.ModelEvaluation)) {
    throw new Error('Expected argument of type google.cloud.automl.v1beta1.ModelEvaluation');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_automl_v1beta1_ModelEvaluation(buffer_arg) {
  return google_cloud_automl_v1beta1_model_evaluation_pb.ModelEvaluation.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_automl_v1beta1_TableSpec(arg) {
  if (!(arg instanceof google_cloud_automl_v1beta1_table_spec_pb.TableSpec)) {
    throw new Error('Expected argument of type google.cloud.automl.v1beta1.TableSpec');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_automl_v1beta1_TableSpec(buffer_arg) {
  return google_cloud_automl_v1beta1_table_spec_pb.TableSpec.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_automl_v1beta1_UndeployModelRequest(arg) {
  if (!(arg instanceof google_cloud_automl_v1beta1_service_pb.UndeployModelRequest)) {
    throw new Error('Expected argument of type google.cloud.automl.v1beta1.UndeployModelRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_automl_v1beta1_UndeployModelRequest(buffer_arg) {
  return google_cloud_automl_v1beta1_service_pb.UndeployModelRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_automl_v1beta1_UpdateColumnSpecRequest(arg) {
  if (!(arg instanceof google_cloud_automl_v1beta1_service_pb.UpdateColumnSpecRequest)) {
    throw new Error('Expected argument of type google.cloud.automl.v1beta1.UpdateColumnSpecRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_automl_v1beta1_UpdateColumnSpecRequest(buffer_arg) {
  return google_cloud_automl_v1beta1_service_pb.UpdateColumnSpecRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_automl_v1beta1_UpdateDatasetRequest(arg) {
  if (!(arg instanceof google_cloud_automl_v1beta1_service_pb.UpdateDatasetRequest)) {
    throw new Error('Expected argument of type google.cloud.automl.v1beta1.UpdateDatasetRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_automl_v1beta1_UpdateDatasetRequest(buffer_arg) {
  return google_cloud_automl_v1beta1_service_pb.UpdateDatasetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_automl_v1beta1_UpdateTableSpecRequest(arg) {
  if (!(arg instanceof google_cloud_automl_v1beta1_service_pb.UpdateTableSpecRequest)) {
    throw new Error('Expected argument of type google.cloud.automl.v1beta1.UpdateTableSpecRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_automl_v1beta1_UpdateTableSpecRequest(buffer_arg) {
  return google_cloud_automl_v1beta1_service_pb.UpdateTableSpecRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


// AutoML Server API.
//
// The resource names are assigned by the server.
// The server never reuses names that it has created after the resources with
// those names are deleted.
//
// An ID of a resource is the last element of the item's resource name. For
// `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}`, then
// the id for the item is `{dataset_id}`.
//
// Currently the only supported `location_id` is "us-central1".
//
// On any input that is documented to expect a string parameter in
// snake_case or kebab-case, either of those cases is accepted.
var AutoMlService = exports.AutoMlService = {
  // Creates a dataset.
  createDataset: {
    path: '/google.cloud.automl.v1beta1.AutoMl/CreateDataset',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_automl_v1beta1_service_pb.CreateDatasetRequest,
    responseType: google_cloud_automl_v1beta1_dataset_pb.Dataset,
    requestSerialize: serialize_google_cloud_automl_v1beta1_CreateDatasetRequest,
    requestDeserialize: deserialize_google_cloud_automl_v1beta1_CreateDatasetRequest,
    responseSerialize: serialize_google_cloud_automl_v1beta1_Dataset,
    responseDeserialize: deserialize_google_cloud_automl_v1beta1_Dataset,
  },
  // Gets a dataset.
  getDataset: {
    path: '/google.cloud.automl.v1beta1.AutoMl/GetDataset',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_automl_v1beta1_service_pb.GetDatasetRequest,
    responseType: google_cloud_automl_v1beta1_dataset_pb.Dataset,
    requestSerialize: serialize_google_cloud_automl_v1beta1_GetDatasetRequest,
    requestDeserialize: deserialize_google_cloud_automl_v1beta1_GetDatasetRequest,
    responseSerialize: serialize_google_cloud_automl_v1beta1_Dataset,
    responseDeserialize: deserialize_google_cloud_automl_v1beta1_Dataset,
  },
  // Lists datasets in a project.
  listDatasets: {
    path: '/google.cloud.automl.v1beta1.AutoMl/ListDatasets',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_automl_v1beta1_service_pb.ListDatasetsRequest,
    responseType: google_cloud_automl_v1beta1_service_pb.ListDatasetsResponse,
    requestSerialize: serialize_google_cloud_automl_v1beta1_ListDatasetsRequest,
    requestDeserialize: deserialize_google_cloud_automl_v1beta1_ListDatasetsRequest,
    responseSerialize: serialize_google_cloud_automl_v1beta1_ListDatasetsResponse,
    responseDeserialize: deserialize_google_cloud_automl_v1beta1_ListDatasetsResponse,
  },
  // Updates a dataset.
  updateDataset: {
    path: '/google.cloud.automl.v1beta1.AutoMl/UpdateDataset',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_automl_v1beta1_service_pb.UpdateDatasetRequest,
    responseType: google_cloud_automl_v1beta1_dataset_pb.Dataset,
    requestSerialize: serialize_google_cloud_automl_v1beta1_UpdateDatasetRequest,
    requestDeserialize: deserialize_google_cloud_automl_v1beta1_UpdateDatasetRequest,
    responseSerialize: serialize_google_cloud_automl_v1beta1_Dataset,
    responseDeserialize: deserialize_google_cloud_automl_v1beta1_Dataset,
  },
  // Deletes a dataset and all of its contents.
  // Returns empty response in the
  // [response][google.longrunning.Operation.response] field when it completes,
  // and `delete_details` in the
  // [metadata][google.longrunning.Operation.metadata] field.
  deleteDataset: {
    path: '/google.cloud.automl.v1beta1.AutoMl/DeleteDataset',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_automl_v1beta1_service_pb.DeleteDatasetRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_cloud_automl_v1beta1_DeleteDatasetRequest,
    requestDeserialize: deserialize_google_cloud_automl_v1beta1_DeleteDatasetRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Imports data into a dataset.
  // For Tables this method can only be called on an empty Dataset.
  //
  // For Tables:
  // *   A
  // [schema_inference_version][google.cloud.automl.v1beta1.InputConfig.params]
  //     parameter must be explicitly set.
  // Returns an empty response in the
  // [response][google.longrunning.Operation.response] field when it completes.
  importData: {
    path: '/google.cloud.automl.v1beta1.AutoMl/ImportData',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_automl_v1beta1_service_pb.ImportDataRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_cloud_automl_v1beta1_ImportDataRequest,
    requestDeserialize: deserialize_google_cloud_automl_v1beta1_ImportDataRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Exports dataset's data to the provided output location.
  // Returns an empty response in the
  // [response][google.longrunning.Operation.response] field when it completes.
  exportData: {
    path: '/google.cloud.automl.v1beta1.AutoMl/ExportData',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_automl_v1beta1_service_pb.ExportDataRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_cloud_automl_v1beta1_ExportDataRequest,
    requestDeserialize: deserialize_google_cloud_automl_v1beta1_ExportDataRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Gets an annotation spec.
  getAnnotationSpec: {
    path: '/google.cloud.automl.v1beta1.AutoMl/GetAnnotationSpec',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_automl_v1beta1_service_pb.GetAnnotationSpecRequest,
    responseType: google_cloud_automl_v1beta1_annotation_spec_pb.AnnotationSpec,
    requestSerialize: serialize_google_cloud_automl_v1beta1_GetAnnotationSpecRequest,
    requestDeserialize: deserialize_google_cloud_automl_v1beta1_GetAnnotationSpecRequest,
    responseSerialize: serialize_google_cloud_automl_v1beta1_AnnotationSpec,
    responseDeserialize: deserialize_google_cloud_automl_v1beta1_AnnotationSpec,
  },
  // Gets a table spec.
  getTableSpec: {
    path: '/google.cloud.automl.v1beta1.AutoMl/GetTableSpec',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_automl_v1beta1_service_pb.GetTableSpecRequest,
    responseType: google_cloud_automl_v1beta1_table_spec_pb.TableSpec,
    requestSerialize: serialize_google_cloud_automl_v1beta1_GetTableSpecRequest,
    requestDeserialize: deserialize_google_cloud_automl_v1beta1_GetTableSpecRequest,
    responseSerialize: serialize_google_cloud_automl_v1beta1_TableSpec,
    responseDeserialize: deserialize_google_cloud_automl_v1beta1_TableSpec,
  },
  // Lists table specs in a dataset.
  listTableSpecs: {
    path: '/google.cloud.automl.v1beta1.AutoMl/ListTableSpecs',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_automl_v1beta1_service_pb.ListTableSpecsRequest,
    responseType: google_cloud_automl_v1beta1_service_pb.ListTableSpecsResponse,
    requestSerialize: serialize_google_cloud_automl_v1beta1_ListTableSpecsRequest,
    requestDeserialize: deserialize_google_cloud_automl_v1beta1_ListTableSpecsRequest,
    responseSerialize: serialize_google_cloud_automl_v1beta1_ListTableSpecsResponse,
    responseDeserialize: deserialize_google_cloud_automl_v1beta1_ListTableSpecsResponse,
  },
  // Updates a table spec.
  updateTableSpec: {
    path: '/google.cloud.automl.v1beta1.AutoMl/UpdateTableSpec',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_automl_v1beta1_service_pb.UpdateTableSpecRequest,
    responseType: google_cloud_automl_v1beta1_table_spec_pb.TableSpec,
    requestSerialize: serialize_google_cloud_automl_v1beta1_UpdateTableSpecRequest,
    requestDeserialize: deserialize_google_cloud_automl_v1beta1_UpdateTableSpecRequest,
    responseSerialize: serialize_google_cloud_automl_v1beta1_TableSpec,
    responseDeserialize: deserialize_google_cloud_automl_v1beta1_TableSpec,
  },
  // Gets a column spec.
  getColumnSpec: {
    path: '/google.cloud.automl.v1beta1.AutoMl/GetColumnSpec',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_automl_v1beta1_service_pb.GetColumnSpecRequest,
    responseType: google_cloud_automl_v1beta1_column_spec_pb.ColumnSpec,
    requestSerialize: serialize_google_cloud_automl_v1beta1_GetColumnSpecRequest,
    requestDeserialize: deserialize_google_cloud_automl_v1beta1_GetColumnSpecRequest,
    responseSerialize: serialize_google_cloud_automl_v1beta1_ColumnSpec,
    responseDeserialize: deserialize_google_cloud_automl_v1beta1_ColumnSpec,
  },
  // Lists column specs in a table spec.
  listColumnSpecs: {
    path: '/google.cloud.automl.v1beta1.AutoMl/ListColumnSpecs',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_automl_v1beta1_service_pb.ListColumnSpecsRequest,
    responseType: google_cloud_automl_v1beta1_service_pb.ListColumnSpecsResponse,
    requestSerialize: serialize_google_cloud_automl_v1beta1_ListColumnSpecsRequest,
    requestDeserialize: deserialize_google_cloud_automl_v1beta1_ListColumnSpecsRequest,
    responseSerialize: serialize_google_cloud_automl_v1beta1_ListColumnSpecsResponse,
    responseDeserialize: deserialize_google_cloud_automl_v1beta1_ListColumnSpecsResponse,
  },
  // Updates a column spec.
  updateColumnSpec: {
    path: '/google.cloud.automl.v1beta1.AutoMl/UpdateColumnSpec',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_automl_v1beta1_service_pb.UpdateColumnSpecRequest,
    responseType: google_cloud_automl_v1beta1_column_spec_pb.ColumnSpec,
    requestSerialize: serialize_google_cloud_automl_v1beta1_UpdateColumnSpecRequest,
    requestDeserialize: deserialize_google_cloud_automl_v1beta1_UpdateColumnSpecRequest,
    responseSerialize: serialize_google_cloud_automl_v1beta1_ColumnSpec,
    responseDeserialize: deserialize_google_cloud_automl_v1beta1_ColumnSpec,
  },
  // Creates a model.
  // Returns a Model in the [response][google.longrunning.Operation.response]
  // field when it completes.
  // When you create a model, several model evaluations are created for it:
  // a global evaluation, and one evaluation for each annotation spec.
  createModel: {
    path: '/google.cloud.automl.v1beta1.AutoMl/CreateModel',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_automl_v1beta1_service_pb.CreateModelRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_cloud_automl_v1beta1_CreateModelRequest,
    requestDeserialize: deserialize_google_cloud_automl_v1beta1_CreateModelRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Gets a model.
  getModel: {
    path: '/google.cloud.automl.v1beta1.AutoMl/GetModel',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_automl_v1beta1_service_pb.GetModelRequest,
    responseType: google_cloud_automl_v1beta1_model_pb.Model,
    requestSerialize: serialize_google_cloud_automl_v1beta1_GetModelRequest,
    requestDeserialize: deserialize_google_cloud_automl_v1beta1_GetModelRequest,
    responseSerialize: serialize_google_cloud_automl_v1beta1_Model,
    responseDeserialize: deserialize_google_cloud_automl_v1beta1_Model,
  },
  // Lists models.
  listModels: {
    path: '/google.cloud.automl.v1beta1.AutoMl/ListModels',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_automl_v1beta1_service_pb.ListModelsRequest,
    responseType: google_cloud_automl_v1beta1_service_pb.ListModelsResponse,
    requestSerialize: serialize_google_cloud_automl_v1beta1_ListModelsRequest,
    requestDeserialize: deserialize_google_cloud_automl_v1beta1_ListModelsRequest,
    responseSerialize: serialize_google_cloud_automl_v1beta1_ListModelsResponse,
    responseDeserialize: deserialize_google_cloud_automl_v1beta1_ListModelsResponse,
  },
  // Deletes a model.
  // Returns `google.protobuf.Empty` in the
  // [response][google.longrunning.Operation.response] field when it completes,
  // and `delete_details` in the
  // [metadata][google.longrunning.Operation.metadata] field.
  deleteModel: {
    path: '/google.cloud.automl.v1beta1.AutoMl/DeleteModel',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_automl_v1beta1_service_pb.DeleteModelRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_cloud_automl_v1beta1_DeleteModelRequest,
    requestDeserialize: deserialize_google_cloud_automl_v1beta1_DeleteModelRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Deploys a model. If a model is already deployed, deploying it with the
  // same parameters has no effect. Deploying with different parametrs
  // (as e.g. changing
  //
  // [node_number][google.cloud.automl.v1beta1.ImageObjectDetectionModelDeploymentMetadata.node_number])
  //  will reset the deployment state without pausing the model's availability.
  //
  // Only applicable for Text Classification, Image Object Detection and Tables; all other domains manage deployment automatically.
  //
  // Returns an empty response in the
  // [response][google.longrunning.Operation.response] field when it completes.
  deployModel: {
    path: '/google.cloud.automl.v1beta1.AutoMl/DeployModel',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_automl_v1beta1_service_pb.DeployModelRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_cloud_automl_v1beta1_DeployModelRequest,
    requestDeserialize: deserialize_google_cloud_automl_v1beta1_DeployModelRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Undeploys a model. If the model is not deployed this method has no effect.
  //
  // Only applicable for Text Classification, Image Object Detection and Tables;
  // all other domains manage deployment automatically.
  //
  // Returns an empty response in the
  // [response][google.longrunning.Operation.response] field when it completes.
  undeployModel: {
    path: '/google.cloud.automl.v1beta1.AutoMl/UndeployModel',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_automl_v1beta1_service_pb.UndeployModelRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_cloud_automl_v1beta1_UndeployModelRequest,
    requestDeserialize: deserialize_google_cloud_automl_v1beta1_UndeployModelRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Exports a trained, "export-able", model to a user specified Google Cloud
  // Storage location. A model is considered export-able if and only if it has
  // an export format defined for it in
  //
  // [ModelExportOutputConfig][google.cloud.automl.v1beta1.ModelExportOutputConfig].
  //
  // Returns an empty response in the
  // [response][google.longrunning.Operation.response] field when it completes.
  exportModel: {
    path: '/google.cloud.automl.v1beta1.AutoMl/ExportModel',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_automl_v1beta1_service_pb.ExportModelRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_cloud_automl_v1beta1_ExportModelRequest,
    requestDeserialize: deserialize_google_cloud_automl_v1beta1_ExportModelRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Exports examples on which the model was evaluated (i.e. which were in the
  // TEST set of the dataset the model was created from), together with their
  // ground truth annotations and the annotations created (predicted) by the
  // model.
  // The examples, ground truth and predictions are exported in the state
  // they were at the moment the model was evaluated.
  //
  // This export is available only for 30 days since the model evaluation is
  // created.
  //
  // Currently only available for Tables.
  //
  // Returns an empty response in the
  // [response][google.longrunning.Operation.response] field when it completes.
  exportEvaluatedExamples: {
    path: '/google.cloud.automl.v1beta1.AutoMl/ExportEvaluatedExamples',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_automl_v1beta1_service_pb.ExportEvaluatedExamplesRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_cloud_automl_v1beta1_ExportEvaluatedExamplesRequest,
    requestDeserialize: deserialize_google_cloud_automl_v1beta1_ExportEvaluatedExamplesRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Gets a model evaluation.
  getModelEvaluation: {
    path: '/google.cloud.automl.v1beta1.AutoMl/GetModelEvaluation',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_automl_v1beta1_service_pb.GetModelEvaluationRequest,
    responseType: google_cloud_automl_v1beta1_model_evaluation_pb.ModelEvaluation,
    requestSerialize: serialize_google_cloud_automl_v1beta1_GetModelEvaluationRequest,
    requestDeserialize: deserialize_google_cloud_automl_v1beta1_GetModelEvaluationRequest,
    responseSerialize: serialize_google_cloud_automl_v1beta1_ModelEvaluation,
    responseDeserialize: deserialize_google_cloud_automl_v1beta1_ModelEvaluation,
  },
  // Lists model evaluations.
  listModelEvaluations: {
    path: '/google.cloud.automl.v1beta1.AutoMl/ListModelEvaluations',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_automl_v1beta1_service_pb.ListModelEvaluationsRequest,
    responseType: google_cloud_automl_v1beta1_service_pb.ListModelEvaluationsResponse,
    requestSerialize: serialize_google_cloud_automl_v1beta1_ListModelEvaluationsRequest,
    requestDeserialize: deserialize_google_cloud_automl_v1beta1_ListModelEvaluationsRequest,
    responseSerialize: serialize_google_cloud_automl_v1beta1_ListModelEvaluationsResponse,
    responseDeserialize: deserialize_google_cloud_automl_v1beta1_ListModelEvaluationsResponse,
  },
};

exports.AutoMlClient = grpc.makeGenericClientConstructor(AutoMlService);
