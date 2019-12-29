// package: google.cloud.dataproc.v1
// file: google/cloud/dataproc/v1/workflow_templates.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";
import * as google_api_client_pb from "../../../../google/api/client_pb";
import * as google_api_field_behavior_pb from "../../../../google/api/field_behavior_pb";
import * as google_api_resource_pb from "../../../../google/api/resource_pb";
import * as google_cloud_dataproc_v1_clusters_pb from "../../../../google/cloud/dataproc/v1/clusters_pb";
import * as google_cloud_dataproc_v1_jobs_pb from "../../../../google/cloud/dataproc/v1/jobs_pb";
import * as google_longrunning_operations_pb from "../../../../google/longrunning/operations_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class WorkflowTemplate extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getVersion(): number;
  setVersion(value: number): void;

  hasCreateTime(): boolean;
  clearCreateTime(): void;
  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdateTime(): boolean;
  clearUpdateTime(): void;
  getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): void;
  hasPlacement(): boolean;
  clearPlacement(): void;
  getPlacement(): WorkflowTemplatePlacement | undefined;
  setPlacement(value?: WorkflowTemplatePlacement): void;

  clearJobsList(): void;
  getJobsList(): Array<OrderedJob>;
  setJobsList(value: Array<OrderedJob>): void;
  addJobs(value?: OrderedJob, index?: number): OrderedJob;

  clearParametersList(): void;
  getParametersList(): Array<TemplateParameter>;
  setParametersList(value: Array<TemplateParameter>): void;
  addParameters(value?: TemplateParameter, index?: number): TemplateParameter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WorkflowTemplate.AsObject;
  static toObject(includeInstance: boolean, msg: WorkflowTemplate): WorkflowTemplate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WorkflowTemplate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WorkflowTemplate;
  static deserializeBinaryFromReader(message: WorkflowTemplate, reader: jspb.BinaryReader): WorkflowTemplate;
}

export namespace WorkflowTemplate {
  export type AsObject = {
    id: string,
    name: string,
    version: number,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    labelsMap: Array<[string, string]>,
    placement?: WorkflowTemplatePlacement.AsObject,
    jobsList: Array<OrderedJob.AsObject>,
    parametersList: Array<TemplateParameter.AsObject>,
  }
}

export class WorkflowTemplatePlacement extends jspb.Message {
  hasManagedCluster(): boolean;
  clearManagedCluster(): void;
  getManagedCluster(): ManagedCluster | undefined;
  setManagedCluster(value?: ManagedCluster): void;

  hasClusterSelector(): boolean;
  clearClusterSelector(): void;
  getClusterSelector(): ClusterSelector | undefined;
  setClusterSelector(value?: ClusterSelector): void;

  getPlacementCase(): WorkflowTemplatePlacement.PlacementCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WorkflowTemplatePlacement.AsObject;
  static toObject(includeInstance: boolean, msg: WorkflowTemplatePlacement): WorkflowTemplatePlacement.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WorkflowTemplatePlacement, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WorkflowTemplatePlacement;
  static deserializeBinaryFromReader(message: WorkflowTemplatePlacement, reader: jspb.BinaryReader): WorkflowTemplatePlacement;
}

export namespace WorkflowTemplatePlacement {
  export type AsObject = {
    managedCluster?: ManagedCluster.AsObject,
    clusterSelector?: ClusterSelector.AsObject,
  }

  export enum PlacementCase {
    PLACEMENT_NOT_SET = 0,
    MANAGED_CLUSTER = 1,
    CLUSTER_SELECTOR = 2,
  }
}

export class ManagedCluster extends jspb.Message {
  getClusterName(): string;
  setClusterName(value: string): void;

  hasConfig(): boolean;
  clearConfig(): void;
  getConfig(): google_cloud_dataproc_v1_clusters_pb.ClusterConfig | undefined;
  setConfig(value?: google_cloud_dataproc_v1_clusters_pb.ClusterConfig): void;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ManagedCluster.AsObject;
  static toObject(includeInstance: boolean, msg: ManagedCluster): ManagedCluster.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ManagedCluster, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ManagedCluster;
  static deserializeBinaryFromReader(message: ManagedCluster, reader: jspb.BinaryReader): ManagedCluster;
}

export namespace ManagedCluster {
  export type AsObject = {
    clusterName: string,
    config?: google_cloud_dataproc_v1_clusters_pb.ClusterConfig.AsObject,
    labelsMap: Array<[string, string]>,
  }
}

export class ClusterSelector extends jspb.Message {
  getZone(): string;
  setZone(value: string): void;

  getClusterLabelsMap(): jspb.Map<string, string>;
  clearClusterLabelsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClusterSelector.AsObject;
  static toObject(includeInstance: boolean, msg: ClusterSelector): ClusterSelector.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClusterSelector, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClusterSelector;
  static deserializeBinaryFromReader(message: ClusterSelector, reader: jspb.BinaryReader): ClusterSelector;
}

export namespace ClusterSelector {
  export type AsObject = {
    zone: string,
    clusterLabelsMap: Array<[string, string]>,
  }
}

export class OrderedJob extends jspb.Message {
  getStepId(): string;
  setStepId(value: string): void;

  hasHadoopJob(): boolean;
  clearHadoopJob(): void;
  getHadoopJob(): google_cloud_dataproc_v1_jobs_pb.HadoopJob | undefined;
  setHadoopJob(value?: google_cloud_dataproc_v1_jobs_pb.HadoopJob): void;

  hasSparkJob(): boolean;
  clearSparkJob(): void;
  getSparkJob(): google_cloud_dataproc_v1_jobs_pb.SparkJob | undefined;
  setSparkJob(value?: google_cloud_dataproc_v1_jobs_pb.SparkJob): void;

  hasPysparkJob(): boolean;
  clearPysparkJob(): void;
  getPysparkJob(): google_cloud_dataproc_v1_jobs_pb.PySparkJob | undefined;
  setPysparkJob(value?: google_cloud_dataproc_v1_jobs_pb.PySparkJob): void;

  hasHiveJob(): boolean;
  clearHiveJob(): void;
  getHiveJob(): google_cloud_dataproc_v1_jobs_pb.HiveJob | undefined;
  setHiveJob(value?: google_cloud_dataproc_v1_jobs_pb.HiveJob): void;

  hasPigJob(): boolean;
  clearPigJob(): void;
  getPigJob(): google_cloud_dataproc_v1_jobs_pb.PigJob | undefined;
  setPigJob(value?: google_cloud_dataproc_v1_jobs_pb.PigJob): void;

  hasSparkSqlJob(): boolean;
  clearSparkSqlJob(): void;
  getSparkSqlJob(): google_cloud_dataproc_v1_jobs_pb.SparkSqlJob | undefined;
  setSparkSqlJob(value?: google_cloud_dataproc_v1_jobs_pb.SparkSqlJob): void;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): void;
  hasScheduling(): boolean;
  clearScheduling(): void;
  getScheduling(): google_cloud_dataproc_v1_jobs_pb.JobScheduling | undefined;
  setScheduling(value?: google_cloud_dataproc_v1_jobs_pb.JobScheduling): void;

  clearPrerequisiteStepIdsList(): void;
  getPrerequisiteStepIdsList(): Array<string>;
  setPrerequisiteStepIdsList(value: Array<string>): void;
  addPrerequisiteStepIds(value: string, index?: number): string;

  getJobTypeCase(): OrderedJob.JobTypeCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderedJob.AsObject;
  static toObject(includeInstance: boolean, msg: OrderedJob): OrderedJob.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrderedJob, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderedJob;
  static deserializeBinaryFromReader(message: OrderedJob, reader: jspb.BinaryReader): OrderedJob;
}

export namespace OrderedJob {
  export type AsObject = {
    stepId: string,
    hadoopJob?: google_cloud_dataproc_v1_jobs_pb.HadoopJob.AsObject,
    sparkJob?: google_cloud_dataproc_v1_jobs_pb.SparkJob.AsObject,
    pysparkJob?: google_cloud_dataproc_v1_jobs_pb.PySparkJob.AsObject,
    hiveJob?: google_cloud_dataproc_v1_jobs_pb.HiveJob.AsObject,
    pigJob?: google_cloud_dataproc_v1_jobs_pb.PigJob.AsObject,
    sparkSqlJob?: google_cloud_dataproc_v1_jobs_pb.SparkSqlJob.AsObject,
    labelsMap: Array<[string, string]>,
    scheduling?: google_cloud_dataproc_v1_jobs_pb.JobScheduling.AsObject,
    prerequisiteStepIdsList: Array<string>,
  }

  export enum JobTypeCase {
    JOB_TYPE_NOT_SET = 0,
    HADOOP_JOB = 2,
    SPARK_JOB = 3,
    PYSPARK_JOB = 4,
    HIVE_JOB = 5,
    PIG_JOB = 6,
    SPARK_SQL_JOB = 7,
  }
}

export class TemplateParameter extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  clearFieldsList(): void;
  getFieldsList(): Array<string>;
  setFieldsList(value: Array<string>): void;
  addFields(value: string, index?: number): string;

  getDescription(): string;
  setDescription(value: string): void;

  hasValidation(): boolean;
  clearValidation(): void;
  getValidation(): ParameterValidation | undefined;
  setValidation(value?: ParameterValidation): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TemplateParameter.AsObject;
  static toObject(includeInstance: boolean, msg: TemplateParameter): TemplateParameter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TemplateParameter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TemplateParameter;
  static deserializeBinaryFromReader(message: TemplateParameter, reader: jspb.BinaryReader): TemplateParameter;
}

export namespace TemplateParameter {
  export type AsObject = {
    name: string,
    fieldsList: Array<string>,
    description: string,
    validation?: ParameterValidation.AsObject,
  }
}

export class ParameterValidation extends jspb.Message {
  hasRegex(): boolean;
  clearRegex(): void;
  getRegex(): RegexValidation | undefined;
  setRegex(value?: RegexValidation): void;

  hasValues(): boolean;
  clearValues(): void;
  getValues(): ValueValidation | undefined;
  setValues(value?: ValueValidation): void;

  getValidationTypeCase(): ParameterValidation.ValidationTypeCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ParameterValidation.AsObject;
  static toObject(includeInstance: boolean, msg: ParameterValidation): ParameterValidation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ParameterValidation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ParameterValidation;
  static deserializeBinaryFromReader(message: ParameterValidation, reader: jspb.BinaryReader): ParameterValidation;
}

export namespace ParameterValidation {
  export type AsObject = {
    regex?: RegexValidation.AsObject,
    values?: ValueValidation.AsObject,
  }

  export enum ValidationTypeCase {
    VALIDATION_TYPE_NOT_SET = 0,
    REGEX = 1,
    VALUES = 2,
  }
}

export class RegexValidation extends jspb.Message {
  clearRegexesList(): void;
  getRegexesList(): Array<string>;
  setRegexesList(value: Array<string>): void;
  addRegexes(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegexValidation.AsObject;
  static toObject(includeInstance: boolean, msg: RegexValidation): RegexValidation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegexValidation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegexValidation;
  static deserializeBinaryFromReader(message: RegexValidation, reader: jspb.BinaryReader): RegexValidation;
}

export namespace RegexValidation {
  export type AsObject = {
    regexesList: Array<string>,
  }
}

export class ValueValidation extends jspb.Message {
  clearValuesList(): void;
  getValuesList(): Array<string>;
  setValuesList(value: Array<string>): void;
  addValues(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValueValidation.AsObject;
  static toObject(includeInstance: boolean, msg: ValueValidation): ValueValidation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValueValidation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValueValidation;
  static deserializeBinaryFromReader(message: ValueValidation, reader: jspb.BinaryReader): ValueValidation;
}

export namespace ValueValidation {
  export type AsObject = {
    valuesList: Array<string>,
  }
}

export class WorkflowMetadata extends jspb.Message {
  getTemplate(): string;
  setTemplate(value: string): void;

  getVersion(): number;
  setVersion(value: number): void;

  hasCreateCluster(): boolean;
  clearCreateCluster(): void;
  getCreateCluster(): ClusterOperation | undefined;
  setCreateCluster(value?: ClusterOperation): void;

  hasGraph(): boolean;
  clearGraph(): void;
  getGraph(): WorkflowGraph | undefined;
  setGraph(value?: WorkflowGraph): void;

  hasDeleteCluster(): boolean;
  clearDeleteCluster(): void;
  getDeleteCluster(): ClusterOperation | undefined;
  setDeleteCluster(value?: ClusterOperation): void;

  getState(): WorkflowMetadata.StateMap[keyof WorkflowMetadata.StateMap];
  setState(value: WorkflowMetadata.StateMap[keyof WorkflowMetadata.StateMap]): void;

  getClusterName(): string;
  setClusterName(value: string): void;

  getParametersMap(): jspb.Map<string, string>;
  clearParametersMap(): void;
  hasStartTime(): boolean;
  clearStartTime(): void;
  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasEndTime(): boolean;
  clearEndTime(): void;
  getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getClusterUuid(): string;
  setClusterUuid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WorkflowMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: WorkflowMetadata): WorkflowMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WorkflowMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WorkflowMetadata;
  static deserializeBinaryFromReader(message: WorkflowMetadata, reader: jspb.BinaryReader): WorkflowMetadata;
}

export namespace WorkflowMetadata {
  export type AsObject = {
    template: string,
    version: number,
    createCluster?: ClusterOperation.AsObject,
    graph?: WorkflowGraph.AsObject,
    deleteCluster?: ClusterOperation.AsObject,
    state: WorkflowMetadata.StateMap[keyof WorkflowMetadata.StateMap],
    clusterName: string,
    parametersMap: Array<[string, string]>,
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    clusterUuid: string,
  }

  export interface StateMap {
    UNKNOWN: 0;
    PENDING: 1;
    RUNNING: 2;
    DONE: 3;
  }

  export const State: StateMap;
}

export class ClusterOperation extends jspb.Message {
  getOperationId(): string;
  setOperationId(value: string): void;

  getError(): string;
  setError(value: string): void;

  getDone(): boolean;
  setDone(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClusterOperation.AsObject;
  static toObject(includeInstance: boolean, msg: ClusterOperation): ClusterOperation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClusterOperation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClusterOperation;
  static deserializeBinaryFromReader(message: ClusterOperation, reader: jspb.BinaryReader): ClusterOperation;
}

export namespace ClusterOperation {
  export type AsObject = {
    operationId: string,
    error: string,
    done: boolean,
  }
}

export class WorkflowGraph extends jspb.Message {
  clearNodesList(): void;
  getNodesList(): Array<WorkflowNode>;
  setNodesList(value: Array<WorkflowNode>): void;
  addNodes(value?: WorkflowNode, index?: number): WorkflowNode;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WorkflowGraph.AsObject;
  static toObject(includeInstance: boolean, msg: WorkflowGraph): WorkflowGraph.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WorkflowGraph, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WorkflowGraph;
  static deserializeBinaryFromReader(message: WorkflowGraph, reader: jspb.BinaryReader): WorkflowGraph;
}

export namespace WorkflowGraph {
  export type AsObject = {
    nodesList: Array<WorkflowNode.AsObject>,
  }
}

export class WorkflowNode extends jspb.Message {
  getStepId(): string;
  setStepId(value: string): void;

  clearPrerequisiteStepIdsList(): void;
  getPrerequisiteStepIdsList(): Array<string>;
  setPrerequisiteStepIdsList(value: Array<string>): void;
  addPrerequisiteStepIds(value: string, index?: number): string;

  getJobId(): string;
  setJobId(value: string): void;

  getState(): WorkflowNode.NodeStateMap[keyof WorkflowNode.NodeStateMap];
  setState(value: WorkflowNode.NodeStateMap[keyof WorkflowNode.NodeStateMap]): void;

  getError(): string;
  setError(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WorkflowNode.AsObject;
  static toObject(includeInstance: boolean, msg: WorkflowNode): WorkflowNode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WorkflowNode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WorkflowNode;
  static deserializeBinaryFromReader(message: WorkflowNode, reader: jspb.BinaryReader): WorkflowNode;
}

export namespace WorkflowNode {
  export type AsObject = {
    stepId: string,
    prerequisiteStepIdsList: Array<string>,
    jobId: string,
    state: WorkflowNode.NodeStateMap[keyof WorkflowNode.NodeStateMap],
    error: string,
  }

  export interface NodeStateMap {
    NODE_STATE_UNSPECIFIED: 0;
    BLOCKED: 1;
    RUNNABLE: 2;
    RUNNING: 3;
    COMPLETED: 4;
    FAILED: 5;
  }

  export const NodeState: NodeStateMap;
}

export class CreateWorkflowTemplateRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  hasTemplate(): boolean;
  clearTemplate(): void;
  getTemplate(): WorkflowTemplate | undefined;
  setTemplate(value?: WorkflowTemplate): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateWorkflowTemplateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateWorkflowTemplateRequest): CreateWorkflowTemplateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateWorkflowTemplateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateWorkflowTemplateRequest;
  static deserializeBinaryFromReader(message: CreateWorkflowTemplateRequest, reader: jspb.BinaryReader): CreateWorkflowTemplateRequest;
}

export namespace CreateWorkflowTemplateRequest {
  export type AsObject = {
    parent: string,
    template?: WorkflowTemplate.AsObject,
  }
}

export class GetWorkflowTemplateRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getVersion(): number;
  setVersion(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetWorkflowTemplateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetWorkflowTemplateRequest): GetWorkflowTemplateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetWorkflowTemplateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetWorkflowTemplateRequest;
  static deserializeBinaryFromReader(message: GetWorkflowTemplateRequest, reader: jspb.BinaryReader): GetWorkflowTemplateRequest;
}

export namespace GetWorkflowTemplateRequest {
  export type AsObject = {
    name: string,
    version: number,
  }
}

export class InstantiateWorkflowTemplateRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getVersion(): number;
  setVersion(value: number): void;

  getRequestId(): string;
  setRequestId(value: string): void;

  getParametersMap(): jspb.Map<string, string>;
  clearParametersMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InstantiateWorkflowTemplateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: InstantiateWorkflowTemplateRequest): InstantiateWorkflowTemplateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InstantiateWorkflowTemplateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InstantiateWorkflowTemplateRequest;
  static deserializeBinaryFromReader(message: InstantiateWorkflowTemplateRequest, reader: jspb.BinaryReader): InstantiateWorkflowTemplateRequest;
}

export namespace InstantiateWorkflowTemplateRequest {
  export type AsObject = {
    name: string,
    version: number,
    requestId: string,
    parametersMap: Array<[string, string]>,
  }
}

export class InstantiateInlineWorkflowTemplateRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  hasTemplate(): boolean;
  clearTemplate(): void;
  getTemplate(): WorkflowTemplate | undefined;
  setTemplate(value?: WorkflowTemplate): void;

  getRequestId(): string;
  setRequestId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InstantiateInlineWorkflowTemplateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: InstantiateInlineWorkflowTemplateRequest): InstantiateInlineWorkflowTemplateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InstantiateInlineWorkflowTemplateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InstantiateInlineWorkflowTemplateRequest;
  static deserializeBinaryFromReader(message: InstantiateInlineWorkflowTemplateRequest, reader: jspb.BinaryReader): InstantiateInlineWorkflowTemplateRequest;
}

export namespace InstantiateInlineWorkflowTemplateRequest {
  export type AsObject = {
    parent: string,
    template?: WorkflowTemplate.AsObject,
    requestId: string,
  }
}

export class UpdateWorkflowTemplateRequest extends jspb.Message {
  hasTemplate(): boolean;
  clearTemplate(): void;
  getTemplate(): WorkflowTemplate | undefined;
  setTemplate(value?: WorkflowTemplate): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateWorkflowTemplateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateWorkflowTemplateRequest): UpdateWorkflowTemplateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateWorkflowTemplateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateWorkflowTemplateRequest;
  static deserializeBinaryFromReader(message: UpdateWorkflowTemplateRequest, reader: jspb.BinaryReader): UpdateWorkflowTemplateRequest;
}

export namespace UpdateWorkflowTemplateRequest {
  export type AsObject = {
    template?: WorkflowTemplate.AsObject,
  }
}

export class ListWorkflowTemplatesRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListWorkflowTemplatesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListWorkflowTemplatesRequest): ListWorkflowTemplatesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListWorkflowTemplatesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListWorkflowTemplatesRequest;
  static deserializeBinaryFromReader(message: ListWorkflowTemplatesRequest, reader: jspb.BinaryReader): ListWorkflowTemplatesRequest;
}

export namespace ListWorkflowTemplatesRequest {
  export type AsObject = {
    parent: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListWorkflowTemplatesResponse extends jspb.Message {
  clearTemplatesList(): void;
  getTemplatesList(): Array<WorkflowTemplate>;
  setTemplatesList(value: Array<WorkflowTemplate>): void;
  addTemplates(value?: WorkflowTemplate, index?: number): WorkflowTemplate;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListWorkflowTemplatesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListWorkflowTemplatesResponse): ListWorkflowTemplatesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListWorkflowTemplatesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListWorkflowTemplatesResponse;
  static deserializeBinaryFromReader(message: ListWorkflowTemplatesResponse, reader: jspb.BinaryReader): ListWorkflowTemplatesResponse;
}

export namespace ListWorkflowTemplatesResponse {
  export type AsObject = {
    templatesList: Array<WorkflowTemplate.AsObject>,
    nextPageToken: string,
  }
}

export class DeleteWorkflowTemplateRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getVersion(): number;
  setVersion(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteWorkflowTemplateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteWorkflowTemplateRequest): DeleteWorkflowTemplateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteWorkflowTemplateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteWorkflowTemplateRequest;
  static deserializeBinaryFromReader(message: DeleteWorkflowTemplateRequest, reader: jspb.BinaryReader): DeleteWorkflowTemplateRequest;
}

export namespace DeleteWorkflowTemplateRequest {
  export type AsObject = {
    name: string,
    version: number,
  }
}

