// package: google.cloud.dataproc.v1
// file: google/cloud/dataproc/v1/clusters.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";
import * as google_api_client_pb from "../../../../google/api/client_pb";
import * as google_api_field_behavior_pb from "../../../../google/api/field_behavior_pb";
import * as google_cloud_dataproc_v1_operations_pb from "../../../../google/cloud/dataproc/v1/operations_pb";
import * as google_cloud_dataproc_v1_shared_pb from "../../../../google/cloud/dataproc/v1/shared_pb";
import * as google_longrunning_operations_pb from "../../../../google/longrunning/operations_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Cluster extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getClusterName(): string;
  setClusterName(value: string): void;

  hasConfig(): boolean;
  clearConfig(): void;
  getConfig(): ClusterConfig | undefined;
  setConfig(value?: ClusterConfig): void;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): void;
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): ClusterStatus | undefined;
  setStatus(value?: ClusterStatus): void;

  clearStatusHistoryList(): void;
  getStatusHistoryList(): Array<ClusterStatus>;
  setStatusHistoryList(value: Array<ClusterStatus>): void;
  addStatusHistory(value?: ClusterStatus, index?: number): ClusterStatus;

  getClusterUuid(): string;
  setClusterUuid(value: string): void;

  hasMetrics(): boolean;
  clearMetrics(): void;
  getMetrics(): ClusterMetrics | undefined;
  setMetrics(value?: ClusterMetrics): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Cluster.AsObject;
  static toObject(includeInstance: boolean, msg: Cluster): Cluster.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Cluster, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Cluster;
  static deserializeBinaryFromReader(message: Cluster, reader: jspb.BinaryReader): Cluster;
}

export namespace Cluster {
  export type AsObject = {
    projectId: string,
    clusterName: string,
    config?: ClusterConfig.AsObject,
    labelsMap: Array<[string, string]>,
    status?: ClusterStatus.AsObject,
    statusHistoryList: Array<ClusterStatus.AsObject>,
    clusterUuid: string,
    metrics?: ClusterMetrics.AsObject,
  }
}

export class ClusterConfig extends jspb.Message {
  getConfigBucket(): string;
  setConfigBucket(value: string): void;

  hasGceClusterConfig(): boolean;
  clearGceClusterConfig(): void;
  getGceClusterConfig(): GceClusterConfig | undefined;
  setGceClusterConfig(value?: GceClusterConfig): void;

  hasMasterConfig(): boolean;
  clearMasterConfig(): void;
  getMasterConfig(): InstanceGroupConfig | undefined;
  setMasterConfig(value?: InstanceGroupConfig): void;

  hasWorkerConfig(): boolean;
  clearWorkerConfig(): void;
  getWorkerConfig(): InstanceGroupConfig | undefined;
  setWorkerConfig(value?: InstanceGroupConfig): void;

  hasSecondaryWorkerConfig(): boolean;
  clearSecondaryWorkerConfig(): void;
  getSecondaryWorkerConfig(): InstanceGroupConfig | undefined;
  setSecondaryWorkerConfig(value?: InstanceGroupConfig): void;

  hasSoftwareConfig(): boolean;
  clearSoftwareConfig(): void;
  getSoftwareConfig(): SoftwareConfig | undefined;
  setSoftwareConfig(value?: SoftwareConfig): void;

  clearInitializationActionsList(): void;
  getInitializationActionsList(): Array<NodeInitializationAction>;
  setInitializationActionsList(value: Array<NodeInitializationAction>): void;
  addInitializationActions(value?: NodeInitializationAction, index?: number): NodeInitializationAction;

  hasEncryptionConfig(): boolean;
  clearEncryptionConfig(): void;
  getEncryptionConfig(): EncryptionConfig | undefined;
  setEncryptionConfig(value?: EncryptionConfig): void;

  hasAutoscalingConfig(): boolean;
  clearAutoscalingConfig(): void;
  getAutoscalingConfig(): AutoscalingConfig | undefined;
  setAutoscalingConfig(value?: AutoscalingConfig): void;

  hasSecurityConfig(): boolean;
  clearSecurityConfig(): void;
  getSecurityConfig(): SecurityConfig | undefined;
  setSecurityConfig(value?: SecurityConfig): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClusterConfig.AsObject;
  static toObject(includeInstance: boolean, msg: ClusterConfig): ClusterConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClusterConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClusterConfig;
  static deserializeBinaryFromReader(message: ClusterConfig, reader: jspb.BinaryReader): ClusterConfig;
}

export namespace ClusterConfig {
  export type AsObject = {
    configBucket: string,
    gceClusterConfig?: GceClusterConfig.AsObject,
    masterConfig?: InstanceGroupConfig.AsObject,
    workerConfig?: InstanceGroupConfig.AsObject,
    secondaryWorkerConfig?: InstanceGroupConfig.AsObject,
    softwareConfig?: SoftwareConfig.AsObject,
    initializationActionsList: Array<NodeInitializationAction.AsObject>,
    encryptionConfig?: EncryptionConfig.AsObject,
    autoscalingConfig?: AutoscalingConfig.AsObject,
    securityConfig?: SecurityConfig.AsObject,
  }
}

export class AutoscalingConfig extends jspb.Message {
  getPolicyUri(): string;
  setPolicyUri(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AutoscalingConfig.AsObject;
  static toObject(includeInstance: boolean, msg: AutoscalingConfig): AutoscalingConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AutoscalingConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AutoscalingConfig;
  static deserializeBinaryFromReader(message: AutoscalingConfig, reader: jspb.BinaryReader): AutoscalingConfig;
}

export namespace AutoscalingConfig {
  export type AsObject = {
    policyUri: string,
  }
}

export class EncryptionConfig extends jspb.Message {
  getGcePdKmsKeyName(): string;
  setGcePdKmsKeyName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EncryptionConfig.AsObject;
  static toObject(includeInstance: boolean, msg: EncryptionConfig): EncryptionConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EncryptionConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EncryptionConfig;
  static deserializeBinaryFromReader(message: EncryptionConfig, reader: jspb.BinaryReader): EncryptionConfig;
}

export namespace EncryptionConfig {
  export type AsObject = {
    gcePdKmsKeyName: string,
  }
}

export class GceClusterConfig extends jspb.Message {
  getZoneUri(): string;
  setZoneUri(value: string): void;

  getNetworkUri(): string;
  setNetworkUri(value: string): void;

  getSubnetworkUri(): string;
  setSubnetworkUri(value: string): void;

  getInternalIpOnly(): boolean;
  setInternalIpOnly(value: boolean): void;

  getServiceAccount(): string;
  setServiceAccount(value: string): void;

  clearServiceAccountScopesList(): void;
  getServiceAccountScopesList(): Array<string>;
  setServiceAccountScopesList(value: Array<string>): void;
  addServiceAccountScopes(value: string, index?: number): string;

  clearTagsList(): void;
  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): void;
  addTags(value: string, index?: number): string;

  getMetadataMap(): jspb.Map<string, string>;
  clearMetadataMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GceClusterConfig.AsObject;
  static toObject(includeInstance: boolean, msg: GceClusterConfig): GceClusterConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GceClusterConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GceClusterConfig;
  static deserializeBinaryFromReader(message: GceClusterConfig, reader: jspb.BinaryReader): GceClusterConfig;
}

export namespace GceClusterConfig {
  export type AsObject = {
    zoneUri: string,
    networkUri: string,
    subnetworkUri: string,
    internalIpOnly: boolean,
    serviceAccount: string,
    serviceAccountScopesList: Array<string>,
    tagsList: Array<string>,
    metadataMap: Array<[string, string]>,
  }
}

export class InstanceGroupConfig extends jspb.Message {
  getNumInstances(): number;
  setNumInstances(value: number): void;

  clearInstanceNamesList(): void;
  getInstanceNamesList(): Array<string>;
  setInstanceNamesList(value: Array<string>): void;
  addInstanceNames(value: string, index?: number): string;

  getImageUri(): string;
  setImageUri(value: string): void;

  getMachineTypeUri(): string;
  setMachineTypeUri(value: string): void;

  hasDiskConfig(): boolean;
  clearDiskConfig(): void;
  getDiskConfig(): DiskConfig | undefined;
  setDiskConfig(value?: DiskConfig): void;

  getIsPreemptible(): boolean;
  setIsPreemptible(value: boolean): void;

  hasManagedGroupConfig(): boolean;
  clearManagedGroupConfig(): void;
  getManagedGroupConfig(): ManagedGroupConfig | undefined;
  setManagedGroupConfig(value?: ManagedGroupConfig): void;

  clearAcceleratorsList(): void;
  getAcceleratorsList(): Array<AcceleratorConfig>;
  setAcceleratorsList(value: Array<AcceleratorConfig>): void;
  addAccelerators(value?: AcceleratorConfig, index?: number): AcceleratorConfig;

  getMinCpuPlatform(): string;
  setMinCpuPlatform(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InstanceGroupConfig.AsObject;
  static toObject(includeInstance: boolean, msg: InstanceGroupConfig): InstanceGroupConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InstanceGroupConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InstanceGroupConfig;
  static deserializeBinaryFromReader(message: InstanceGroupConfig, reader: jspb.BinaryReader): InstanceGroupConfig;
}

export namespace InstanceGroupConfig {
  export type AsObject = {
    numInstances: number,
    instanceNamesList: Array<string>,
    imageUri: string,
    machineTypeUri: string,
    diskConfig?: DiskConfig.AsObject,
    isPreemptible: boolean,
    managedGroupConfig?: ManagedGroupConfig.AsObject,
    acceleratorsList: Array<AcceleratorConfig.AsObject>,
    minCpuPlatform: string,
  }
}

export class ManagedGroupConfig extends jspb.Message {
  getInstanceTemplateName(): string;
  setInstanceTemplateName(value: string): void;

  getInstanceGroupManagerName(): string;
  setInstanceGroupManagerName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ManagedGroupConfig.AsObject;
  static toObject(includeInstance: boolean, msg: ManagedGroupConfig): ManagedGroupConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ManagedGroupConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ManagedGroupConfig;
  static deserializeBinaryFromReader(message: ManagedGroupConfig, reader: jspb.BinaryReader): ManagedGroupConfig;
}

export namespace ManagedGroupConfig {
  export type AsObject = {
    instanceTemplateName: string,
    instanceGroupManagerName: string,
  }
}

export class AcceleratorConfig extends jspb.Message {
  getAcceleratorTypeUri(): string;
  setAcceleratorTypeUri(value: string): void;

  getAcceleratorCount(): number;
  setAcceleratorCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AcceleratorConfig.AsObject;
  static toObject(includeInstance: boolean, msg: AcceleratorConfig): AcceleratorConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AcceleratorConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AcceleratorConfig;
  static deserializeBinaryFromReader(message: AcceleratorConfig, reader: jspb.BinaryReader): AcceleratorConfig;
}

export namespace AcceleratorConfig {
  export type AsObject = {
    acceleratorTypeUri: string,
    acceleratorCount: number,
  }
}

export class DiskConfig extends jspb.Message {
  getBootDiskType(): string;
  setBootDiskType(value: string): void;

  getBootDiskSizeGb(): number;
  setBootDiskSizeGb(value: number): void;

  getNumLocalSsds(): number;
  setNumLocalSsds(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DiskConfig.AsObject;
  static toObject(includeInstance: boolean, msg: DiskConfig): DiskConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DiskConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DiskConfig;
  static deserializeBinaryFromReader(message: DiskConfig, reader: jspb.BinaryReader): DiskConfig;
}

export namespace DiskConfig {
  export type AsObject = {
    bootDiskType: string,
    bootDiskSizeGb: number,
    numLocalSsds: number,
  }
}

export class NodeInitializationAction extends jspb.Message {
  getExecutableFile(): string;
  setExecutableFile(value: string): void;

  hasExecutionTimeout(): boolean;
  clearExecutionTimeout(): void;
  getExecutionTimeout(): google_protobuf_duration_pb.Duration | undefined;
  setExecutionTimeout(value?: google_protobuf_duration_pb.Duration): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NodeInitializationAction.AsObject;
  static toObject(includeInstance: boolean, msg: NodeInitializationAction): NodeInitializationAction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NodeInitializationAction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NodeInitializationAction;
  static deserializeBinaryFromReader(message: NodeInitializationAction, reader: jspb.BinaryReader): NodeInitializationAction;
}

export namespace NodeInitializationAction {
  export type AsObject = {
    executableFile: string,
    executionTimeout?: google_protobuf_duration_pb.Duration.AsObject,
  }
}

export class ClusterStatus extends jspb.Message {
  getState(): ClusterStatus.StateMap[keyof ClusterStatus.StateMap];
  setState(value: ClusterStatus.StateMap[keyof ClusterStatus.StateMap]): void;

  getDetail(): string;
  setDetail(value: string): void;

  hasStateStartTime(): boolean;
  clearStateStartTime(): void;
  getStateStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStateStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getSubstate(): ClusterStatus.SubstateMap[keyof ClusterStatus.SubstateMap];
  setSubstate(value: ClusterStatus.SubstateMap[keyof ClusterStatus.SubstateMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClusterStatus.AsObject;
  static toObject(includeInstance: boolean, msg: ClusterStatus): ClusterStatus.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClusterStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClusterStatus;
  static deserializeBinaryFromReader(message: ClusterStatus, reader: jspb.BinaryReader): ClusterStatus;
}

export namespace ClusterStatus {
  export type AsObject = {
    state: ClusterStatus.StateMap[keyof ClusterStatus.StateMap],
    detail: string,
    stateStartTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    substate: ClusterStatus.SubstateMap[keyof ClusterStatus.SubstateMap],
  }

  export interface StateMap {
    UNKNOWN: 0;
    CREATING: 1;
    RUNNING: 2;
    ERROR: 3;
    DELETING: 4;
    UPDATING: 5;
  }

  export const State: StateMap;

  export interface SubstateMap {
    UNSPECIFIED: 0;
    UNHEALTHY: 1;
    STALE_STATUS: 2;
  }

  export const Substate: SubstateMap;
}

export class SecurityConfig extends jspb.Message {
  hasKerberosConfig(): boolean;
  clearKerberosConfig(): void;
  getKerberosConfig(): KerberosConfig | undefined;
  setKerberosConfig(value?: KerberosConfig): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SecurityConfig.AsObject;
  static toObject(includeInstance: boolean, msg: SecurityConfig): SecurityConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SecurityConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SecurityConfig;
  static deserializeBinaryFromReader(message: SecurityConfig, reader: jspb.BinaryReader): SecurityConfig;
}

export namespace SecurityConfig {
  export type AsObject = {
    kerberosConfig?: KerberosConfig.AsObject,
  }
}

export class KerberosConfig extends jspb.Message {
  getEnableKerberos(): boolean;
  setEnableKerberos(value: boolean): void;

  getRootPrincipalPasswordUri(): string;
  setRootPrincipalPasswordUri(value: string): void;

  getKmsKeyUri(): string;
  setKmsKeyUri(value: string): void;

  getKeystoreUri(): string;
  setKeystoreUri(value: string): void;

  getTruststoreUri(): string;
  setTruststoreUri(value: string): void;

  getKeystorePasswordUri(): string;
  setKeystorePasswordUri(value: string): void;

  getKeyPasswordUri(): string;
  setKeyPasswordUri(value: string): void;

  getTruststorePasswordUri(): string;
  setTruststorePasswordUri(value: string): void;

  getCrossRealmTrustRealm(): string;
  setCrossRealmTrustRealm(value: string): void;

  getCrossRealmTrustKdc(): string;
  setCrossRealmTrustKdc(value: string): void;

  getCrossRealmTrustAdminServer(): string;
  setCrossRealmTrustAdminServer(value: string): void;

  getCrossRealmTrustSharedPasswordUri(): string;
  setCrossRealmTrustSharedPasswordUri(value: string): void;

  getKdcDbKeyUri(): string;
  setKdcDbKeyUri(value: string): void;

  getTgtLifetimeHours(): number;
  setTgtLifetimeHours(value: number): void;

  getRealm(): string;
  setRealm(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KerberosConfig.AsObject;
  static toObject(includeInstance: boolean, msg: KerberosConfig): KerberosConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: KerberosConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KerberosConfig;
  static deserializeBinaryFromReader(message: KerberosConfig, reader: jspb.BinaryReader): KerberosConfig;
}

export namespace KerberosConfig {
  export type AsObject = {
    enableKerberos: boolean,
    rootPrincipalPasswordUri: string,
    kmsKeyUri: string,
    keystoreUri: string,
    truststoreUri: string,
    keystorePasswordUri: string,
    keyPasswordUri: string,
    truststorePasswordUri: string,
    crossRealmTrustRealm: string,
    crossRealmTrustKdc: string,
    crossRealmTrustAdminServer: string,
    crossRealmTrustSharedPasswordUri: string,
    kdcDbKeyUri: string,
    tgtLifetimeHours: number,
    realm: string,
  }
}

export class SoftwareConfig extends jspb.Message {
  getImageVersion(): string;
  setImageVersion(value: string): void;

  getPropertiesMap(): jspb.Map<string, string>;
  clearPropertiesMap(): void;
  clearOptionalComponentsList(): void;
  getOptionalComponentsList(): Array<google_cloud_dataproc_v1_shared_pb.ComponentMap[keyof google_cloud_dataproc_v1_shared_pb.ComponentMap]>;
  setOptionalComponentsList(value: Array<google_cloud_dataproc_v1_shared_pb.ComponentMap[keyof google_cloud_dataproc_v1_shared_pb.ComponentMap]>): void;
  addOptionalComponents(value: google_cloud_dataproc_v1_shared_pb.ComponentMap[keyof google_cloud_dataproc_v1_shared_pb.ComponentMap], index?: number): google_cloud_dataproc_v1_shared_pb.ComponentMap[keyof google_cloud_dataproc_v1_shared_pb.ComponentMap];

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SoftwareConfig.AsObject;
  static toObject(includeInstance: boolean, msg: SoftwareConfig): SoftwareConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SoftwareConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SoftwareConfig;
  static deserializeBinaryFromReader(message: SoftwareConfig, reader: jspb.BinaryReader): SoftwareConfig;
}

export namespace SoftwareConfig {
  export type AsObject = {
    imageVersion: string,
    propertiesMap: Array<[string, string]>,
    optionalComponentsList: Array<google_cloud_dataproc_v1_shared_pb.ComponentMap[keyof google_cloud_dataproc_v1_shared_pb.ComponentMap]>,
  }
}

export class ClusterMetrics extends jspb.Message {
  getHdfsMetricsMap(): jspb.Map<string, number>;
  clearHdfsMetricsMap(): void;
  getYarnMetricsMap(): jspb.Map<string, number>;
  clearYarnMetricsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClusterMetrics.AsObject;
  static toObject(includeInstance: boolean, msg: ClusterMetrics): ClusterMetrics.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClusterMetrics, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClusterMetrics;
  static deserializeBinaryFromReader(message: ClusterMetrics, reader: jspb.BinaryReader): ClusterMetrics;
}

export namespace ClusterMetrics {
  export type AsObject = {
    hdfsMetricsMap: Array<[string, number]>,
    yarnMetricsMap: Array<[string, number]>,
  }
}

export class CreateClusterRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getRegion(): string;
  setRegion(value: string): void;

  hasCluster(): boolean;
  clearCluster(): void;
  getCluster(): Cluster | undefined;
  setCluster(value?: Cluster): void;

  getRequestId(): string;
  setRequestId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateClusterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateClusterRequest): CreateClusterRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateClusterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateClusterRequest;
  static deserializeBinaryFromReader(message: CreateClusterRequest, reader: jspb.BinaryReader): CreateClusterRequest;
}

export namespace CreateClusterRequest {
  export type AsObject = {
    projectId: string,
    region: string,
    cluster?: Cluster.AsObject,
    requestId: string,
  }
}

export class UpdateClusterRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getRegion(): string;
  setRegion(value: string): void;

  getClusterName(): string;
  setClusterName(value: string): void;

  hasCluster(): boolean;
  clearCluster(): void;
  getCluster(): Cluster | undefined;
  setCluster(value?: Cluster): void;

  hasGracefulDecommissionTimeout(): boolean;
  clearGracefulDecommissionTimeout(): void;
  getGracefulDecommissionTimeout(): google_protobuf_duration_pb.Duration | undefined;
  setGracefulDecommissionTimeout(value?: google_protobuf_duration_pb.Duration): void;

  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  getRequestId(): string;
  setRequestId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateClusterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateClusterRequest): UpdateClusterRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateClusterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateClusterRequest;
  static deserializeBinaryFromReader(message: UpdateClusterRequest, reader: jspb.BinaryReader): UpdateClusterRequest;
}

export namespace UpdateClusterRequest {
  export type AsObject = {
    projectId: string,
    region: string,
    clusterName: string,
    cluster?: Cluster.AsObject,
    gracefulDecommissionTimeout?: google_protobuf_duration_pb.Duration.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    requestId: string,
  }
}

export class DeleteClusterRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getRegion(): string;
  setRegion(value: string): void;

  getClusterName(): string;
  setClusterName(value: string): void;

  getClusterUuid(): string;
  setClusterUuid(value: string): void;

  getRequestId(): string;
  setRequestId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteClusterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteClusterRequest): DeleteClusterRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteClusterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteClusterRequest;
  static deserializeBinaryFromReader(message: DeleteClusterRequest, reader: jspb.BinaryReader): DeleteClusterRequest;
}

export namespace DeleteClusterRequest {
  export type AsObject = {
    projectId: string,
    region: string,
    clusterName: string,
    clusterUuid: string,
    requestId: string,
  }
}

export class GetClusterRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getRegion(): string;
  setRegion(value: string): void;

  getClusterName(): string;
  setClusterName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetClusterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetClusterRequest): GetClusterRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetClusterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetClusterRequest;
  static deserializeBinaryFromReader(message: GetClusterRequest, reader: jspb.BinaryReader): GetClusterRequest;
}

export namespace GetClusterRequest {
  export type AsObject = {
    projectId: string,
    region: string,
    clusterName: string,
  }
}

export class ListClustersRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getRegion(): string;
  setRegion(value: string): void;

  getFilter(): string;
  setFilter(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListClustersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListClustersRequest): ListClustersRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListClustersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListClustersRequest;
  static deserializeBinaryFromReader(message: ListClustersRequest, reader: jspb.BinaryReader): ListClustersRequest;
}

export namespace ListClustersRequest {
  export type AsObject = {
    projectId: string,
    region: string,
    filter: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListClustersResponse extends jspb.Message {
  clearClustersList(): void;
  getClustersList(): Array<Cluster>;
  setClustersList(value: Array<Cluster>): void;
  addClusters(value?: Cluster, index?: number): Cluster;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListClustersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListClustersResponse): ListClustersResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListClustersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListClustersResponse;
  static deserializeBinaryFromReader(message: ListClustersResponse, reader: jspb.BinaryReader): ListClustersResponse;
}

export namespace ListClustersResponse {
  export type AsObject = {
    clustersList: Array<Cluster.AsObject>,
    nextPageToken: string,
  }
}

export class DiagnoseClusterRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getRegion(): string;
  setRegion(value: string): void;

  getClusterName(): string;
  setClusterName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DiagnoseClusterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DiagnoseClusterRequest): DiagnoseClusterRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DiagnoseClusterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DiagnoseClusterRequest;
  static deserializeBinaryFromReader(message: DiagnoseClusterRequest, reader: jspb.BinaryReader): DiagnoseClusterRequest;
}

export namespace DiagnoseClusterRequest {
  export type AsObject = {
    projectId: string,
    region: string,
    clusterName: string,
  }
}

export class DiagnoseClusterResults extends jspb.Message {
  getOutputUri(): string;
  setOutputUri(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DiagnoseClusterResults.AsObject;
  static toObject(includeInstance: boolean, msg: DiagnoseClusterResults): DiagnoseClusterResults.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DiagnoseClusterResults, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DiagnoseClusterResults;
  static deserializeBinaryFromReader(message: DiagnoseClusterResults, reader: jspb.BinaryReader): DiagnoseClusterResults;
}

export namespace DiagnoseClusterResults {
  export type AsObject = {
    outputUri: string,
  }
}

