// GENERATED CODE -- DO NOT EDIT!

// package: google.cloud.automl.v1beta1
// file: google/cloud/automl/v1beta1/service.proto

import * as google_cloud_automl_v1beta1_service_pb from "../../../../google/cloud/automl/v1beta1/service_pb";
import * as google_cloud_automl_v1beta1_annotation_spec_pb from "../../../../google/cloud/automl/v1beta1/annotation_spec_pb";
import * as google_cloud_automl_v1beta1_column_spec_pb from "../../../../google/cloud/automl/v1beta1/column_spec_pb";
import * as google_cloud_automl_v1beta1_dataset_pb from "../../../../google/cloud/automl/v1beta1/dataset_pb";
import * as google_cloud_automl_v1beta1_model_pb from "../../../../google/cloud/automl/v1beta1/model_pb";
import * as google_cloud_automl_v1beta1_model_evaluation_pb from "../../../../google/cloud/automl/v1beta1/model_evaluation_pb";
import * as google_cloud_automl_v1beta1_table_spec_pb from "../../../../google/cloud/automl/v1beta1/table_spec_pb";
import * as google_longrunning_operations_pb from "../../../../google/longrunning/operations_pb";
import * as grpc from "grpc";

interface IAutoMlService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createDataset: grpc.MethodDefinition<google_cloud_automl_v1beta1_service_pb.CreateDatasetRequest, google_cloud_automl_v1beta1_dataset_pb.Dataset>;
  getDataset: grpc.MethodDefinition<google_cloud_automl_v1beta1_service_pb.GetDatasetRequest, google_cloud_automl_v1beta1_dataset_pb.Dataset>;
  listDatasets: grpc.MethodDefinition<google_cloud_automl_v1beta1_service_pb.ListDatasetsRequest, google_cloud_automl_v1beta1_service_pb.ListDatasetsResponse>;
  updateDataset: grpc.MethodDefinition<google_cloud_automl_v1beta1_service_pb.UpdateDatasetRequest, google_cloud_automl_v1beta1_dataset_pb.Dataset>;
  deleteDataset: grpc.MethodDefinition<google_cloud_automl_v1beta1_service_pb.DeleteDatasetRequest, google_longrunning_operations_pb.Operation>;
  importData: grpc.MethodDefinition<google_cloud_automl_v1beta1_service_pb.ImportDataRequest, google_longrunning_operations_pb.Operation>;
  exportData: grpc.MethodDefinition<google_cloud_automl_v1beta1_service_pb.ExportDataRequest, google_longrunning_operations_pb.Operation>;
  getAnnotationSpec: grpc.MethodDefinition<google_cloud_automl_v1beta1_service_pb.GetAnnotationSpecRequest, google_cloud_automl_v1beta1_annotation_spec_pb.AnnotationSpec>;
  getTableSpec: grpc.MethodDefinition<google_cloud_automl_v1beta1_service_pb.GetTableSpecRequest, google_cloud_automl_v1beta1_table_spec_pb.TableSpec>;
  listTableSpecs: grpc.MethodDefinition<google_cloud_automl_v1beta1_service_pb.ListTableSpecsRequest, google_cloud_automl_v1beta1_service_pb.ListTableSpecsResponse>;
  updateTableSpec: grpc.MethodDefinition<google_cloud_automl_v1beta1_service_pb.UpdateTableSpecRequest, google_cloud_automl_v1beta1_table_spec_pb.TableSpec>;
  getColumnSpec: grpc.MethodDefinition<google_cloud_automl_v1beta1_service_pb.GetColumnSpecRequest, google_cloud_automl_v1beta1_column_spec_pb.ColumnSpec>;
  listColumnSpecs: grpc.MethodDefinition<google_cloud_automl_v1beta1_service_pb.ListColumnSpecsRequest, google_cloud_automl_v1beta1_service_pb.ListColumnSpecsResponse>;
  updateColumnSpec: grpc.MethodDefinition<google_cloud_automl_v1beta1_service_pb.UpdateColumnSpecRequest, google_cloud_automl_v1beta1_column_spec_pb.ColumnSpec>;
  createModel: grpc.MethodDefinition<google_cloud_automl_v1beta1_service_pb.CreateModelRequest, google_longrunning_operations_pb.Operation>;
  getModel: grpc.MethodDefinition<google_cloud_automl_v1beta1_service_pb.GetModelRequest, google_cloud_automl_v1beta1_model_pb.Model>;
  listModels: grpc.MethodDefinition<google_cloud_automl_v1beta1_service_pb.ListModelsRequest, google_cloud_automl_v1beta1_service_pb.ListModelsResponse>;
  deleteModel: grpc.MethodDefinition<google_cloud_automl_v1beta1_service_pb.DeleteModelRequest, google_longrunning_operations_pb.Operation>;
  deployModel: grpc.MethodDefinition<google_cloud_automl_v1beta1_service_pb.DeployModelRequest, google_longrunning_operations_pb.Operation>;
  undeployModel: grpc.MethodDefinition<google_cloud_automl_v1beta1_service_pb.UndeployModelRequest, google_longrunning_operations_pb.Operation>;
  exportModel: grpc.MethodDefinition<google_cloud_automl_v1beta1_service_pb.ExportModelRequest, google_longrunning_operations_pb.Operation>;
  exportEvaluatedExamples: grpc.MethodDefinition<google_cloud_automl_v1beta1_service_pb.ExportEvaluatedExamplesRequest, google_longrunning_operations_pb.Operation>;
  getModelEvaluation: grpc.MethodDefinition<google_cloud_automl_v1beta1_service_pb.GetModelEvaluationRequest, google_cloud_automl_v1beta1_model_evaluation_pb.ModelEvaluation>;
  listModelEvaluations: grpc.MethodDefinition<google_cloud_automl_v1beta1_service_pb.ListModelEvaluationsRequest, google_cloud_automl_v1beta1_service_pb.ListModelEvaluationsResponse>;
}

export const AutoMlService: IAutoMlService;

export class AutoMlClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  createDataset(argument: google_cloud_automl_v1beta1_service_pb.CreateDatasetRequest, callback: grpc.requestCallback<google_cloud_automl_v1beta1_dataset_pb.Dataset>): grpc.ClientUnaryCall;
  createDataset(argument: google_cloud_automl_v1beta1_service_pb.CreateDatasetRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_automl_v1beta1_dataset_pb.Dataset>): grpc.ClientUnaryCall;
  createDataset(argument: google_cloud_automl_v1beta1_service_pb.CreateDatasetRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_automl_v1beta1_dataset_pb.Dataset>): grpc.ClientUnaryCall;
  getDataset(argument: google_cloud_automl_v1beta1_service_pb.GetDatasetRequest, callback: grpc.requestCallback<google_cloud_automl_v1beta1_dataset_pb.Dataset>): grpc.ClientUnaryCall;
  getDataset(argument: google_cloud_automl_v1beta1_service_pb.GetDatasetRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_automl_v1beta1_dataset_pb.Dataset>): grpc.ClientUnaryCall;
  getDataset(argument: google_cloud_automl_v1beta1_service_pb.GetDatasetRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_automl_v1beta1_dataset_pb.Dataset>): grpc.ClientUnaryCall;
  listDatasets(argument: google_cloud_automl_v1beta1_service_pb.ListDatasetsRequest, callback: grpc.requestCallback<google_cloud_automl_v1beta1_service_pb.ListDatasetsResponse>): grpc.ClientUnaryCall;
  listDatasets(argument: google_cloud_automl_v1beta1_service_pb.ListDatasetsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_automl_v1beta1_service_pb.ListDatasetsResponse>): grpc.ClientUnaryCall;
  listDatasets(argument: google_cloud_automl_v1beta1_service_pb.ListDatasetsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_automl_v1beta1_service_pb.ListDatasetsResponse>): grpc.ClientUnaryCall;
  updateDataset(argument: google_cloud_automl_v1beta1_service_pb.UpdateDatasetRequest, callback: grpc.requestCallback<google_cloud_automl_v1beta1_dataset_pb.Dataset>): grpc.ClientUnaryCall;
  updateDataset(argument: google_cloud_automl_v1beta1_service_pb.UpdateDatasetRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_automl_v1beta1_dataset_pb.Dataset>): grpc.ClientUnaryCall;
  updateDataset(argument: google_cloud_automl_v1beta1_service_pb.UpdateDatasetRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_automl_v1beta1_dataset_pb.Dataset>): grpc.ClientUnaryCall;
  deleteDataset(argument: google_cloud_automl_v1beta1_service_pb.DeleteDatasetRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  deleteDataset(argument: google_cloud_automl_v1beta1_service_pb.DeleteDatasetRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  deleteDataset(argument: google_cloud_automl_v1beta1_service_pb.DeleteDatasetRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  importData(argument: google_cloud_automl_v1beta1_service_pb.ImportDataRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  importData(argument: google_cloud_automl_v1beta1_service_pb.ImportDataRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  importData(argument: google_cloud_automl_v1beta1_service_pb.ImportDataRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  exportData(argument: google_cloud_automl_v1beta1_service_pb.ExportDataRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  exportData(argument: google_cloud_automl_v1beta1_service_pb.ExportDataRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  exportData(argument: google_cloud_automl_v1beta1_service_pb.ExportDataRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  getAnnotationSpec(argument: google_cloud_automl_v1beta1_service_pb.GetAnnotationSpecRequest, callback: grpc.requestCallback<google_cloud_automl_v1beta1_annotation_spec_pb.AnnotationSpec>): grpc.ClientUnaryCall;
  getAnnotationSpec(argument: google_cloud_automl_v1beta1_service_pb.GetAnnotationSpecRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_automl_v1beta1_annotation_spec_pb.AnnotationSpec>): grpc.ClientUnaryCall;
  getAnnotationSpec(argument: google_cloud_automl_v1beta1_service_pb.GetAnnotationSpecRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_automl_v1beta1_annotation_spec_pb.AnnotationSpec>): grpc.ClientUnaryCall;
  getTableSpec(argument: google_cloud_automl_v1beta1_service_pb.GetTableSpecRequest, callback: grpc.requestCallback<google_cloud_automl_v1beta1_table_spec_pb.TableSpec>): grpc.ClientUnaryCall;
  getTableSpec(argument: google_cloud_automl_v1beta1_service_pb.GetTableSpecRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_automl_v1beta1_table_spec_pb.TableSpec>): grpc.ClientUnaryCall;
  getTableSpec(argument: google_cloud_automl_v1beta1_service_pb.GetTableSpecRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_automl_v1beta1_table_spec_pb.TableSpec>): grpc.ClientUnaryCall;
  listTableSpecs(argument: google_cloud_automl_v1beta1_service_pb.ListTableSpecsRequest, callback: grpc.requestCallback<google_cloud_automl_v1beta1_service_pb.ListTableSpecsResponse>): grpc.ClientUnaryCall;
  listTableSpecs(argument: google_cloud_automl_v1beta1_service_pb.ListTableSpecsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_automl_v1beta1_service_pb.ListTableSpecsResponse>): grpc.ClientUnaryCall;
  listTableSpecs(argument: google_cloud_automl_v1beta1_service_pb.ListTableSpecsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_automl_v1beta1_service_pb.ListTableSpecsResponse>): grpc.ClientUnaryCall;
  updateTableSpec(argument: google_cloud_automl_v1beta1_service_pb.UpdateTableSpecRequest, callback: grpc.requestCallback<google_cloud_automl_v1beta1_table_spec_pb.TableSpec>): grpc.ClientUnaryCall;
  updateTableSpec(argument: google_cloud_automl_v1beta1_service_pb.UpdateTableSpecRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_automl_v1beta1_table_spec_pb.TableSpec>): grpc.ClientUnaryCall;
  updateTableSpec(argument: google_cloud_automl_v1beta1_service_pb.UpdateTableSpecRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_automl_v1beta1_table_spec_pb.TableSpec>): grpc.ClientUnaryCall;
  getColumnSpec(argument: google_cloud_automl_v1beta1_service_pb.GetColumnSpecRequest, callback: grpc.requestCallback<google_cloud_automl_v1beta1_column_spec_pb.ColumnSpec>): grpc.ClientUnaryCall;
  getColumnSpec(argument: google_cloud_automl_v1beta1_service_pb.GetColumnSpecRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_automl_v1beta1_column_spec_pb.ColumnSpec>): grpc.ClientUnaryCall;
  getColumnSpec(argument: google_cloud_automl_v1beta1_service_pb.GetColumnSpecRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_automl_v1beta1_column_spec_pb.ColumnSpec>): grpc.ClientUnaryCall;
  listColumnSpecs(argument: google_cloud_automl_v1beta1_service_pb.ListColumnSpecsRequest, callback: grpc.requestCallback<google_cloud_automl_v1beta1_service_pb.ListColumnSpecsResponse>): grpc.ClientUnaryCall;
  listColumnSpecs(argument: google_cloud_automl_v1beta1_service_pb.ListColumnSpecsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_automl_v1beta1_service_pb.ListColumnSpecsResponse>): grpc.ClientUnaryCall;
  listColumnSpecs(argument: google_cloud_automl_v1beta1_service_pb.ListColumnSpecsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_automl_v1beta1_service_pb.ListColumnSpecsResponse>): grpc.ClientUnaryCall;
  updateColumnSpec(argument: google_cloud_automl_v1beta1_service_pb.UpdateColumnSpecRequest, callback: grpc.requestCallback<google_cloud_automl_v1beta1_column_spec_pb.ColumnSpec>): grpc.ClientUnaryCall;
  updateColumnSpec(argument: google_cloud_automl_v1beta1_service_pb.UpdateColumnSpecRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_automl_v1beta1_column_spec_pb.ColumnSpec>): grpc.ClientUnaryCall;
  updateColumnSpec(argument: google_cloud_automl_v1beta1_service_pb.UpdateColumnSpecRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_automl_v1beta1_column_spec_pb.ColumnSpec>): grpc.ClientUnaryCall;
  createModel(argument: google_cloud_automl_v1beta1_service_pb.CreateModelRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  createModel(argument: google_cloud_automl_v1beta1_service_pb.CreateModelRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  createModel(argument: google_cloud_automl_v1beta1_service_pb.CreateModelRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  getModel(argument: google_cloud_automl_v1beta1_service_pb.GetModelRequest, callback: grpc.requestCallback<google_cloud_automl_v1beta1_model_pb.Model>): grpc.ClientUnaryCall;
  getModel(argument: google_cloud_automl_v1beta1_service_pb.GetModelRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_automl_v1beta1_model_pb.Model>): grpc.ClientUnaryCall;
  getModel(argument: google_cloud_automl_v1beta1_service_pb.GetModelRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_automl_v1beta1_model_pb.Model>): grpc.ClientUnaryCall;
  listModels(argument: google_cloud_automl_v1beta1_service_pb.ListModelsRequest, callback: grpc.requestCallback<google_cloud_automl_v1beta1_service_pb.ListModelsResponse>): grpc.ClientUnaryCall;
  listModels(argument: google_cloud_automl_v1beta1_service_pb.ListModelsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_automl_v1beta1_service_pb.ListModelsResponse>): grpc.ClientUnaryCall;
  listModels(argument: google_cloud_automl_v1beta1_service_pb.ListModelsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_automl_v1beta1_service_pb.ListModelsResponse>): grpc.ClientUnaryCall;
  deleteModel(argument: google_cloud_automl_v1beta1_service_pb.DeleteModelRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  deleteModel(argument: google_cloud_automl_v1beta1_service_pb.DeleteModelRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  deleteModel(argument: google_cloud_automl_v1beta1_service_pb.DeleteModelRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  deployModel(argument: google_cloud_automl_v1beta1_service_pb.DeployModelRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  deployModel(argument: google_cloud_automl_v1beta1_service_pb.DeployModelRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  deployModel(argument: google_cloud_automl_v1beta1_service_pb.DeployModelRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  undeployModel(argument: google_cloud_automl_v1beta1_service_pb.UndeployModelRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  undeployModel(argument: google_cloud_automl_v1beta1_service_pb.UndeployModelRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  undeployModel(argument: google_cloud_automl_v1beta1_service_pb.UndeployModelRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  exportModel(argument: google_cloud_automl_v1beta1_service_pb.ExportModelRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  exportModel(argument: google_cloud_automl_v1beta1_service_pb.ExportModelRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  exportModel(argument: google_cloud_automl_v1beta1_service_pb.ExportModelRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  exportEvaluatedExamples(argument: google_cloud_automl_v1beta1_service_pb.ExportEvaluatedExamplesRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  exportEvaluatedExamples(argument: google_cloud_automl_v1beta1_service_pb.ExportEvaluatedExamplesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  exportEvaluatedExamples(argument: google_cloud_automl_v1beta1_service_pb.ExportEvaluatedExamplesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  getModelEvaluation(argument: google_cloud_automl_v1beta1_service_pb.GetModelEvaluationRequest, callback: grpc.requestCallback<google_cloud_automl_v1beta1_model_evaluation_pb.ModelEvaluation>): grpc.ClientUnaryCall;
  getModelEvaluation(argument: google_cloud_automl_v1beta1_service_pb.GetModelEvaluationRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_automl_v1beta1_model_evaluation_pb.ModelEvaluation>): grpc.ClientUnaryCall;
  getModelEvaluation(argument: google_cloud_automl_v1beta1_service_pb.GetModelEvaluationRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_automl_v1beta1_model_evaluation_pb.ModelEvaluation>): grpc.ClientUnaryCall;
  listModelEvaluations(argument: google_cloud_automl_v1beta1_service_pb.ListModelEvaluationsRequest, callback: grpc.requestCallback<google_cloud_automl_v1beta1_service_pb.ListModelEvaluationsResponse>): grpc.ClientUnaryCall;
  listModelEvaluations(argument: google_cloud_automl_v1beta1_service_pb.ListModelEvaluationsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_automl_v1beta1_service_pb.ListModelEvaluationsResponse>): grpc.ClientUnaryCall;
  listModelEvaluations(argument: google_cloud_automl_v1beta1_service_pb.ListModelEvaluationsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_automl_v1beta1_service_pb.ListModelEvaluationsResponse>): grpc.ClientUnaryCall;
}
