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
var google_cloud_bigquery_datatransfer_v1_datasource_pb = require('../../../../../google/cloud/bigquery/datatransfer/v1/datasource_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var google_cloud_bigquery_datatransfer_v1_datatransfer_pb = require('../../../../../google/cloud/bigquery/datatransfer/v1/datatransfer_pb.js');
var google_cloud_bigquery_datatransfer_v1_transfer_pb = require('../../../../../google/cloud/bigquery/datatransfer/v1/transfer_pb.js');
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
var google_api_client_pb = require('../../../../../google/api/client_pb.js');

function serialize_google_cloud_bigquery_datatransfer_v1_CreateDataSourceDefinitionRequest(arg) {
  if (!(arg instanceof google_cloud_bigquery_datatransfer_v1_datasource_pb.CreateDataSourceDefinitionRequest)) {
    throw new Error('Expected argument of type google.cloud.bigquery.datatransfer.v1.CreateDataSourceDefinitionRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_bigquery_datatransfer_v1_CreateDataSourceDefinitionRequest(buffer_arg) {
  return google_cloud_bigquery_datatransfer_v1_datasource_pb.CreateDataSourceDefinitionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_bigquery_datatransfer_v1_DataSourceDefinition(arg) {
  if (!(arg instanceof google_cloud_bigquery_datatransfer_v1_datasource_pb.DataSourceDefinition)) {
    throw new Error('Expected argument of type google.cloud.bigquery.datatransfer.v1.DataSourceDefinition');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_bigquery_datatransfer_v1_DataSourceDefinition(buffer_arg) {
  return google_cloud_bigquery_datatransfer_v1_datasource_pb.DataSourceDefinition.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_bigquery_datatransfer_v1_DeleteDataSourceDefinitionRequest(arg) {
  if (!(arg instanceof google_cloud_bigquery_datatransfer_v1_datasource_pb.DeleteDataSourceDefinitionRequest)) {
    throw new Error('Expected argument of type google.cloud.bigquery.datatransfer.v1.DeleteDataSourceDefinitionRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_bigquery_datatransfer_v1_DeleteDataSourceDefinitionRequest(buffer_arg) {
  return google_cloud_bigquery_datatransfer_v1_datasource_pb.DeleteDataSourceDefinitionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_bigquery_datatransfer_v1_FinishRunRequest(arg) {
  if (!(arg instanceof google_cloud_bigquery_datatransfer_v1_datasource_pb.FinishRunRequest)) {
    throw new Error('Expected argument of type google.cloud.bigquery.datatransfer.v1.FinishRunRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_bigquery_datatransfer_v1_FinishRunRequest(buffer_arg) {
  return google_cloud_bigquery_datatransfer_v1_datasource_pb.FinishRunRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_bigquery_datatransfer_v1_GetDataSourceDefinitionRequest(arg) {
  if (!(arg instanceof google_cloud_bigquery_datatransfer_v1_datasource_pb.GetDataSourceDefinitionRequest)) {
    throw new Error('Expected argument of type google.cloud.bigquery.datatransfer.v1.GetDataSourceDefinitionRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_bigquery_datatransfer_v1_GetDataSourceDefinitionRequest(buffer_arg) {
  return google_cloud_bigquery_datatransfer_v1_datasource_pb.GetDataSourceDefinitionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_bigquery_datatransfer_v1_ListDataSourceDefinitionsRequest(arg) {
  if (!(arg instanceof google_cloud_bigquery_datatransfer_v1_datasource_pb.ListDataSourceDefinitionsRequest)) {
    throw new Error('Expected argument of type google.cloud.bigquery.datatransfer.v1.ListDataSourceDefinitionsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_bigquery_datatransfer_v1_ListDataSourceDefinitionsRequest(buffer_arg) {
  return google_cloud_bigquery_datatransfer_v1_datasource_pb.ListDataSourceDefinitionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_bigquery_datatransfer_v1_ListDataSourceDefinitionsResponse(arg) {
  if (!(arg instanceof google_cloud_bigquery_datatransfer_v1_datasource_pb.ListDataSourceDefinitionsResponse)) {
    throw new Error('Expected argument of type google.cloud.bigquery.datatransfer.v1.ListDataSourceDefinitionsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_bigquery_datatransfer_v1_ListDataSourceDefinitionsResponse(buffer_arg) {
  return google_cloud_bigquery_datatransfer_v1_datasource_pb.ListDataSourceDefinitionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_bigquery_datatransfer_v1_LogTransferRunMessagesRequest(arg) {
  if (!(arg instanceof google_cloud_bigquery_datatransfer_v1_datasource_pb.LogTransferRunMessagesRequest)) {
    throw new Error('Expected argument of type google.cloud.bigquery.datatransfer.v1.LogTransferRunMessagesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_bigquery_datatransfer_v1_LogTransferRunMessagesRequest(buffer_arg) {
  return google_cloud_bigquery_datatransfer_v1_datasource_pb.LogTransferRunMessagesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_bigquery_datatransfer_v1_StartBigQueryJobsRequest(arg) {
  if (!(arg instanceof google_cloud_bigquery_datatransfer_v1_datasource_pb.StartBigQueryJobsRequest)) {
    throw new Error('Expected argument of type google.cloud.bigquery.datatransfer.v1.StartBigQueryJobsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_bigquery_datatransfer_v1_StartBigQueryJobsRequest(buffer_arg) {
  return google_cloud_bigquery_datatransfer_v1_datasource_pb.StartBigQueryJobsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_bigquery_datatransfer_v1_TransferRun(arg) {
  if (!(arg instanceof google_cloud_bigquery_datatransfer_v1_transfer_pb.TransferRun)) {
    throw new Error('Expected argument of type google.cloud.bigquery.datatransfer.v1.TransferRun');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_bigquery_datatransfer_v1_TransferRun(buffer_arg) {
  return google_cloud_bigquery_datatransfer_v1_transfer_pb.TransferRun.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_bigquery_datatransfer_v1_UpdateDataSourceDefinitionRequest(arg) {
  if (!(arg instanceof google_cloud_bigquery_datatransfer_v1_datasource_pb.UpdateDataSourceDefinitionRequest)) {
    throw new Error('Expected argument of type google.cloud.bigquery.datatransfer.v1.UpdateDataSourceDefinitionRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_bigquery_datatransfer_v1_UpdateDataSourceDefinitionRequest(buffer_arg) {
  return google_cloud_bigquery_datatransfer_v1_datasource_pb.UpdateDataSourceDefinitionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_bigquery_datatransfer_v1_UpdateTransferRunRequest(arg) {
  if (!(arg instanceof google_cloud_bigquery_datatransfer_v1_datasource_pb.UpdateTransferRunRequest)) {
    throw new Error('Expected argument of type google.cloud.bigquery.datatransfer.v1.UpdateTransferRunRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_bigquery_datatransfer_v1_UpdateTransferRunRequest(buffer_arg) {
  return google_cloud_bigquery_datatransfer_v1_datasource_pb.UpdateTransferRunRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


// The Google BigQuery Data Transfer API allows BigQuery users to
// configure transfer of their data from other Google Products into BigQuery.
// This service exposes methods that should be used by data source backend.
var DataSourceServiceService = exports.DataSourceServiceService = {
  // Update a transfer run. If successful, resets
  // data_source.update_deadline_seconds timer.
  updateTransferRun: {
    path: '/google.cloud.bigquery.datatransfer.v1.DataSourceService/UpdateTransferRun',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_bigquery_datatransfer_v1_datasource_pb.UpdateTransferRunRequest,
    responseType: google_cloud_bigquery_datatransfer_v1_transfer_pb.TransferRun,
    requestSerialize: serialize_google_cloud_bigquery_datatransfer_v1_UpdateTransferRunRequest,
    requestDeserialize: deserialize_google_cloud_bigquery_datatransfer_v1_UpdateTransferRunRequest,
    responseSerialize: serialize_google_cloud_bigquery_datatransfer_v1_TransferRun,
    responseDeserialize: deserialize_google_cloud_bigquery_datatransfer_v1_TransferRun,
  },
  // Log messages for a transfer run. If successful (at least 1 message), resets
  // data_source.update_deadline_seconds timer.
  logTransferRunMessages: {
    path: '/google.cloud.bigquery.datatransfer.v1.DataSourceService/LogTransferRunMessages',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_bigquery_datatransfer_v1_datasource_pb.LogTransferRunMessagesRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_cloud_bigquery_datatransfer_v1_LogTransferRunMessagesRequest,
    requestDeserialize: deserialize_google_cloud_bigquery_datatransfer_v1_LogTransferRunMessagesRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Notify the Data Transfer Service that data is ready for loading.
  // The Data Transfer Service will start and monitor multiple BigQuery Load
  // jobs for a transfer run. Monitored jobs will be automatically retried
  // and produce log messages when starting and finishing a job.
  // Can be called multiple times for the same transfer run.
  startBigQueryJobs: {
    path: '/google.cloud.bigquery.datatransfer.v1.DataSourceService/StartBigQueryJobs',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_bigquery_datatransfer_v1_datasource_pb.StartBigQueryJobsRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_cloud_bigquery_datatransfer_v1_StartBigQueryJobsRequest,
    requestDeserialize: deserialize_google_cloud_bigquery_datatransfer_v1_StartBigQueryJobsRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Notify the Data Transfer Service that the data source is done processing
  // the run. No more status updates or requests to start/monitor jobs will be
  // accepted. The run will be finalized by the Data Transfer Service when all
  // monitored jobs are completed.
  // Does not need to be called if the run is set to FAILED.
  finishRun: {
    path: '/google.cloud.bigquery.datatransfer.v1.DataSourceService/FinishRun',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_bigquery_datatransfer_v1_datasource_pb.FinishRunRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_cloud_bigquery_datatransfer_v1_FinishRunRequest,
    requestDeserialize: deserialize_google_cloud_bigquery_datatransfer_v1_FinishRunRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Creates a data source definition.  Calling this method will automatically
  // use your credentials to create the following Google Cloud resources in
  // YOUR Google Cloud project.
  // 1. OAuth client
  // 2. Pub/Sub Topics and Subscriptions in each supported_location_ids. e.g.,
  // projects/{project_id}/{topics|subscriptions}/bigquerydatatransfer.{data_source_id}.{location_id}.run
  // The field data_source.client_id should be left empty in the input request,
  // as the API will create a new OAuth client on behalf of the caller. On the
  // other hand data_source.scopes usually need to be set when there are OAuth
  // scopes that need to be granted by end users.
  // 3. We need a longer deadline due to the 60 seconds SLO from Pub/Sub admin
  // Operations. This also applies to update and delete data source definition.
  createDataSourceDefinition: {
    path: '/google.cloud.bigquery.datatransfer.v1.DataSourceService/CreateDataSourceDefinition',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_bigquery_datatransfer_v1_datasource_pb.CreateDataSourceDefinitionRequest,
    responseType: google_cloud_bigquery_datatransfer_v1_datasource_pb.DataSourceDefinition,
    requestSerialize: serialize_google_cloud_bigquery_datatransfer_v1_CreateDataSourceDefinitionRequest,
    requestDeserialize: deserialize_google_cloud_bigquery_datatransfer_v1_CreateDataSourceDefinitionRequest,
    responseSerialize: serialize_google_cloud_bigquery_datatransfer_v1_DataSourceDefinition,
    responseDeserialize: deserialize_google_cloud_bigquery_datatransfer_v1_DataSourceDefinition,
  },
  // Updates an existing data source definition. If changing
  // supported_location_ids, triggers same effects as mentioned in "Create a
  // data source definition."
  updateDataSourceDefinition: {
    path: '/google.cloud.bigquery.datatransfer.v1.DataSourceService/UpdateDataSourceDefinition',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_bigquery_datatransfer_v1_datasource_pb.UpdateDataSourceDefinitionRequest,
    responseType: google_cloud_bigquery_datatransfer_v1_datasource_pb.DataSourceDefinition,
    requestSerialize: serialize_google_cloud_bigquery_datatransfer_v1_UpdateDataSourceDefinitionRequest,
    requestDeserialize: deserialize_google_cloud_bigquery_datatransfer_v1_UpdateDataSourceDefinitionRequest,
    responseSerialize: serialize_google_cloud_bigquery_datatransfer_v1_DataSourceDefinition,
    responseDeserialize: deserialize_google_cloud_bigquery_datatransfer_v1_DataSourceDefinition,
  },
  // Deletes a data source definition, all of the transfer configs associated
  // with this data source definition (if any) must be deleted first by the user
  // in ALL regions, in order to delete the data source definition.
  // This method is primarily meant for deleting data sources created during
  // testing stage.
  // If the data source is referenced by transfer configs in the region
  // specified in the request URL, the method will fail immediately. If in the
  // current region (e.g., US) it's not used by any transfer configs, but in
  // another region (e.g., EU) it is, then although the method will succeed in
  // region US, but it will fail when the deletion operation is replicated to
  // region EU. And eventually, the system will replicate the data source
  // definition back from EU to US, in order to bring all regions to
  // consistency. The final effect is that the data source appears to be
  // 'undeleted' in the US region.
  deleteDataSourceDefinition: {
    path: '/google.cloud.bigquery.datatransfer.v1.DataSourceService/DeleteDataSourceDefinition',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_bigquery_datatransfer_v1_datasource_pb.DeleteDataSourceDefinitionRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_cloud_bigquery_datatransfer_v1_DeleteDataSourceDefinitionRequest,
    requestDeserialize: deserialize_google_cloud_bigquery_datatransfer_v1_DeleteDataSourceDefinitionRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Retrieves an existing data source definition.
  getDataSourceDefinition: {
    path: '/google.cloud.bigquery.datatransfer.v1.DataSourceService/GetDataSourceDefinition',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_bigquery_datatransfer_v1_datasource_pb.GetDataSourceDefinitionRequest,
    responseType: google_cloud_bigquery_datatransfer_v1_datasource_pb.DataSourceDefinition,
    requestSerialize: serialize_google_cloud_bigquery_datatransfer_v1_GetDataSourceDefinitionRequest,
    requestDeserialize: deserialize_google_cloud_bigquery_datatransfer_v1_GetDataSourceDefinitionRequest,
    responseSerialize: serialize_google_cloud_bigquery_datatransfer_v1_DataSourceDefinition,
    responseDeserialize: deserialize_google_cloud_bigquery_datatransfer_v1_DataSourceDefinition,
  },
  // Lists supported data source definitions.
  listDataSourceDefinitions: {
    path: '/google.cloud.bigquery.datatransfer.v1.DataSourceService/ListDataSourceDefinitions',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_bigquery_datatransfer_v1_datasource_pb.ListDataSourceDefinitionsRequest,
    responseType: google_cloud_bigquery_datatransfer_v1_datasource_pb.ListDataSourceDefinitionsResponse,
    requestSerialize: serialize_google_cloud_bigquery_datatransfer_v1_ListDataSourceDefinitionsRequest,
    requestDeserialize: deserialize_google_cloud_bigquery_datatransfer_v1_ListDataSourceDefinitionsRequest,
    responseSerialize: serialize_google_cloud_bigquery_datatransfer_v1_ListDataSourceDefinitionsResponse,
    responseDeserialize: deserialize_google_cloud_bigquery_datatransfer_v1_ListDataSourceDefinitionsResponse,
  },
};

exports.DataSourceServiceClient = grpc.makeGenericClientConstructor(DataSourceServiceService);
