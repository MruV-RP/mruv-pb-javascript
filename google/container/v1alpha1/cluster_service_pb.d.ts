// package: google.container.v1alpha1
// file: google/container/v1alpha1/cluster_service.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class NodeConfig extends jspb.Message {
  getMachineType(): string;
  setMachineType(value: string): void;

  getDiskSizeGb(): number;
  setDiskSizeGb(value: number): void;

  clearOauthScopesList(): void;
  getOauthScopesList(): Array<string>;
  setOauthScopesList(value: Array<string>): void;
  addOauthScopes(value: string, index?: number): string;

  getServiceAccount(): string;
  setServiceAccount(value: string): void;

  getMetadataMap(): jspb.Map<string, string>;
  clearMetadataMap(): void;
  getImageType(): string;
  setImageType(value: string): void;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): void;
  getLocalSsdCount(): number;
  setLocalSsdCount(value: number): void;

  clearTagsList(): void;
  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): void;
  addTags(value: string, index?: number): string;

  getPreemptible(): boolean;
  setPreemptible(value: boolean): void;

  clearAcceleratorsList(): void;
  getAcceleratorsList(): Array<AcceleratorConfig>;
  setAcceleratorsList(value: Array<AcceleratorConfig>): void;
  addAccelerators(value?: AcceleratorConfig, index?: number): AcceleratorConfig;

  getMinCpuPlatform(): string;
  setMinCpuPlatform(value: string): void;

  clearTaintsList(): void;
  getTaintsList(): Array<NodeTaint>;
  setTaintsList(value: Array<NodeTaint>): void;
  addTaints(value?: NodeTaint, index?: number): NodeTaint;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NodeConfig.AsObject;
  static toObject(includeInstance: boolean, msg: NodeConfig): NodeConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NodeConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NodeConfig;
  static deserializeBinaryFromReader(message: NodeConfig, reader: jspb.BinaryReader): NodeConfig;
}

export namespace NodeConfig {
  export type AsObject = {
    machineType: string,
    diskSizeGb: number,
    oauthScopesList: Array<string>,
    serviceAccount: string,
    metadataMap: Array<[string, string]>,
    imageType: string,
    labelsMap: Array<[string, string]>,
    localSsdCount: number,
    tagsList: Array<string>,
    preemptible: boolean,
    acceleratorsList: Array<AcceleratorConfig.AsObject>,
    minCpuPlatform: string,
    taintsList: Array<NodeTaint.AsObject>,
  }
}

export class NodeTaint extends jspb.Message {
  getKey(): string;
  setKey(value: string): void;

  getValue(): string;
  setValue(value: string): void;

  getEffect(): NodeTaint.EffectMap[keyof NodeTaint.EffectMap];
  setEffect(value: NodeTaint.EffectMap[keyof NodeTaint.EffectMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NodeTaint.AsObject;
  static toObject(includeInstance: boolean, msg: NodeTaint): NodeTaint.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NodeTaint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NodeTaint;
  static deserializeBinaryFromReader(message: NodeTaint, reader: jspb.BinaryReader): NodeTaint;
}

export namespace NodeTaint {
  export type AsObject = {
    key: string,
    value: string,
    effect: NodeTaint.EffectMap[keyof NodeTaint.EffectMap],
  }

  export interface EffectMap {
    EFFECT_UNSPECIFIED: 0;
    NO_SCHEDULE: 1;
    PREFER_NO_SCHEDULE: 2;
    NO_EXECUTE: 3;
  }

  export const Effect: EffectMap;
}

export class MasterAuth extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  hasClientCertificateConfig(): boolean;
  clearClientCertificateConfig(): void;
  getClientCertificateConfig(): ClientCertificateConfig | undefined;
  setClientCertificateConfig(value?: ClientCertificateConfig): void;

  getClusterCaCertificate(): string;
  setClusterCaCertificate(value: string): void;

  getClientCertificate(): string;
  setClientCertificate(value: string): void;

  getClientKey(): string;
  setClientKey(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MasterAuth.AsObject;
  static toObject(includeInstance: boolean, msg: MasterAuth): MasterAuth.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MasterAuth, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MasterAuth;
  static deserializeBinaryFromReader(message: MasterAuth, reader: jspb.BinaryReader): MasterAuth;
}

export namespace MasterAuth {
  export type AsObject = {
    username: string,
    password: string,
    clientCertificateConfig?: ClientCertificateConfig.AsObject,
    clusterCaCertificate: string,
    clientCertificate: string,
    clientKey: string,
  }
}

export class ClientCertificateConfig extends jspb.Message {
  getIssueClientCertificate(): boolean;
  setIssueClientCertificate(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientCertificateConfig.AsObject;
  static toObject(includeInstance: boolean, msg: ClientCertificateConfig): ClientCertificateConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientCertificateConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientCertificateConfig;
  static deserializeBinaryFromReader(message: ClientCertificateConfig, reader: jspb.BinaryReader): ClientCertificateConfig;
}

export namespace ClientCertificateConfig {
  export type AsObject = {
    issueClientCertificate: boolean,
  }
}

export class AddonsConfig extends jspb.Message {
  hasHttpLoadBalancing(): boolean;
  clearHttpLoadBalancing(): void;
  getHttpLoadBalancing(): HttpLoadBalancing | undefined;
  setHttpLoadBalancing(value?: HttpLoadBalancing): void;

  hasHorizontalPodAutoscaling(): boolean;
  clearHorizontalPodAutoscaling(): void;
  getHorizontalPodAutoscaling(): HorizontalPodAutoscaling | undefined;
  setHorizontalPodAutoscaling(value?: HorizontalPodAutoscaling): void;

  hasKubernetesDashboard(): boolean;
  clearKubernetesDashboard(): void;
  getKubernetesDashboard(): KubernetesDashboard | undefined;
  setKubernetesDashboard(value?: KubernetesDashboard): void;

  hasNetworkPolicyConfig(): boolean;
  clearNetworkPolicyConfig(): void;
  getNetworkPolicyConfig(): NetworkPolicyConfig | undefined;
  setNetworkPolicyConfig(value?: NetworkPolicyConfig): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddonsConfig.AsObject;
  static toObject(includeInstance: boolean, msg: AddonsConfig): AddonsConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddonsConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddonsConfig;
  static deserializeBinaryFromReader(message: AddonsConfig, reader: jspb.BinaryReader): AddonsConfig;
}

export namespace AddonsConfig {
  export type AsObject = {
    httpLoadBalancing?: HttpLoadBalancing.AsObject,
    horizontalPodAutoscaling?: HorizontalPodAutoscaling.AsObject,
    kubernetesDashboard?: KubernetesDashboard.AsObject,
    networkPolicyConfig?: NetworkPolicyConfig.AsObject,
  }
}

export class HttpLoadBalancing extends jspb.Message {
  getDisabled(): boolean;
  setDisabled(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HttpLoadBalancing.AsObject;
  static toObject(includeInstance: boolean, msg: HttpLoadBalancing): HttpLoadBalancing.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HttpLoadBalancing, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HttpLoadBalancing;
  static deserializeBinaryFromReader(message: HttpLoadBalancing, reader: jspb.BinaryReader): HttpLoadBalancing;
}

export namespace HttpLoadBalancing {
  export type AsObject = {
    disabled: boolean,
  }
}

export class HorizontalPodAutoscaling extends jspb.Message {
  getDisabled(): boolean;
  setDisabled(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HorizontalPodAutoscaling.AsObject;
  static toObject(includeInstance: boolean, msg: HorizontalPodAutoscaling): HorizontalPodAutoscaling.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HorizontalPodAutoscaling, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HorizontalPodAutoscaling;
  static deserializeBinaryFromReader(message: HorizontalPodAutoscaling, reader: jspb.BinaryReader): HorizontalPodAutoscaling;
}

export namespace HorizontalPodAutoscaling {
  export type AsObject = {
    disabled: boolean,
  }
}

export class KubernetesDashboard extends jspb.Message {
  getDisabled(): boolean;
  setDisabled(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KubernetesDashboard.AsObject;
  static toObject(includeInstance: boolean, msg: KubernetesDashboard): KubernetesDashboard.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: KubernetesDashboard, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KubernetesDashboard;
  static deserializeBinaryFromReader(message: KubernetesDashboard, reader: jspb.BinaryReader): KubernetesDashboard;
}

export namespace KubernetesDashboard {
  export type AsObject = {
    disabled: boolean,
  }
}

export class NetworkPolicyConfig extends jspb.Message {
  getDisabled(): boolean;
  setDisabled(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NetworkPolicyConfig.AsObject;
  static toObject(includeInstance: boolean, msg: NetworkPolicyConfig): NetworkPolicyConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NetworkPolicyConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NetworkPolicyConfig;
  static deserializeBinaryFromReader(message: NetworkPolicyConfig, reader: jspb.BinaryReader): NetworkPolicyConfig;
}

export namespace NetworkPolicyConfig {
  export type AsObject = {
    disabled: boolean,
  }
}

export class MasterAuthorizedNetworksConfig extends jspb.Message {
  getEnabled(): boolean;
  setEnabled(value: boolean): void;

  clearCidrBlocksList(): void;
  getCidrBlocksList(): Array<MasterAuthorizedNetworksConfig.CidrBlock>;
  setCidrBlocksList(value: Array<MasterAuthorizedNetworksConfig.CidrBlock>): void;
  addCidrBlocks(value?: MasterAuthorizedNetworksConfig.CidrBlock, index?: number): MasterAuthorizedNetworksConfig.CidrBlock;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MasterAuthorizedNetworksConfig.AsObject;
  static toObject(includeInstance: boolean, msg: MasterAuthorizedNetworksConfig): MasterAuthorizedNetworksConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MasterAuthorizedNetworksConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MasterAuthorizedNetworksConfig;
  static deserializeBinaryFromReader(message: MasterAuthorizedNetworksConfig, reader: jspb.BinaryReader): MasterAuthorizedNetworksConfig;
}

export namespace MasterAuthorizedNetworksConfig {
  export type AsObject = {
    enabled: boolean,
    cidrBlocksList: Array<MasterAuthorizedNetworksConfig.CidrBlock.AsObject>,
  }

  export class CidrBlock extends jspb.Message {
    getDisplayName(): string;
    setDisplayName(value: string): void;

    getCidrBlock(): string;
    setCidrBlock(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CidrBlock.AsObject;
    static toObject(includeInstance: boolean, msg: CidrBlock): CidrBlock.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CidrBlock, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CidrBlock;
    static deserializeBinaryFromReader(message: CidrBlock, reader: jspb.BinaryReader): CidrBlock;
  }

  export namespace CidrBlock {
    export type AsObject = {
      displayName: string,
      cidrBlock: string,
    }
  }
}

export class NetworkPolicy extends jspb.Message {
  getProvider(): NetworkPolicy.ProviderMap[keyof NetworkPolicy.ProviderMap];
  setProvider(value: NetworkPolicy.ProviderMap[keyof NetworkPolicy.ProviderMap]): void;

  getEnabled(): boolean;
  setEnabled(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NetworkPolicy.AsObject;
  static toObject(includeInstance: boolean, msg: NetworkPolicy): NetworkPolicy.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NetworkPolicy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NetworkPolicy;
  static deserializeBinaryFromReader(message: NetworkPolicy, reader: jspb.BinaryReader): NetworkPolicy;
}

export namespace NetworkPolicy {
  export type AsObject = {
    provider: NetworkPolicy.ProviderMap[keyof NetworkPolicy.ProviderMap],
    enabled: boolean,
  }

  export interface ProviderMap {
    PROVIDER_UNSPECIFIED: 0;
    CALICO: 1;
  }

  export const Provider: ProviderMap;
}

export class IPAllocationPolicy extends jspb.Message {
  getUseIpAliases(): boolean;
  setUseIpAliases(value: boolean): void;

  getCreateSubnetwork(): boolean;
  setCreateSubnetwork(value: boolean): void;

  getSubnetworkName(): string;
  setSubnetworkName(value: string): void;

  getClusterIpv4Cidr(): string;
  setClusterIpv4Cidr(value: string): void;

  getNodeIpv4Cidr(): string;
  setNodeIpv4Cidr(value: string): void;

  getServicesIpv4Cidr(): string;
  setServicesIpv4Cidr(value: string): void;

  getClusterSecondaryRangeName(): string;
  setClusterSecondaryRangeName(value: string): void;

  getServicesSecondaryRangeName(): string;
  setServicesSecondaryRangeName(value: string): void;

  getClusterIpv4CidrBlock(): string;
  setClusterIpv4CidrBlock(value: string): void;

  getNodeIpv4CidrBlock(): string;
  setNodeIpv4CidrBlock(value: string): void;

  getServicesIpv4CidrBlock(): string;
  setServicesIpv4CidrBlock(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IPAllocationPolicy.AsObject;
  static toObject(includeInstance: boolean, msg: IPAllocationPolicy): IPAllocationPolicy.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IPAllocationPolicy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IPAllocationPolicy;
  static deserializeBinaryFromReader(message: IPAllocationPolicy, reader: jspb.BinaryReader): IPAllocationPolicy;
}

export namespace IPAllocationPolicy {
  export type AsObject = {
    useIpAliases: boolean,
    createSubnetwork: boolean,
    subnetworkName: string,
    clusterIpv4Cidr: string,
    nodeIpv4Cidr: string,
    servicesIpv4Cidr: string,
    clusterSecondaryRangeName: string,
    servicesSecondaryRangeName: string,
    clusterIpv4CidrBlock: string,
    nodeIpv4CidrBlock: string,
    servicesIpv4CidrBlock: string,
  }
}

export class PodSecurityPolicyConfig extends jspb.Message {
  getEnabled(): boolean;
  setEnabled(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PodSecurityPolicyConfig.AsObject;
  static toObject(includeInstance: boolean, msg: PodSecurityPolicyConfig): PodSecurityPolicyConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PodSecurityPolicyConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PodSecurityPolicyConfig;
  static deserializeBinaryFromReader(message: PodSecurityPolicyConfig, reader: jspb.BinaryReader): PodSecurityPolicyConfig;
}

export namespace PodSecurityPolicyConfig {
  export type AsObject = {
    enabled: boolean,
  }
}

export class Cluster extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getInitialNodeCount(): number;
  setInitialNodeCount(value: number): void;

  hasNodeConfig(): boolean;
  clearNodeConfig(): void;
  getNodeConfig(): NodeConfig | undefined;
  setNodeConfig(value?: NodeConfig): void;

  hasMasterAuth(): boolean;
  clearMasterAuth(): void;
  getMasterAuth(): MasterAuth | undefined;
  setMasterAuth(value?: MasterAuth): void;

  getLoggingService(): string;
  setLoggingService(value: string): void;

  getMonitoringService(): string;
  setMonitoringService(value: string): void;

  getNetwork(): string;
  setNetwork(value: string): void;

  getClusterIpv4Cidr(): string;
  setClusterIpv4Cidr(value: string): void;

  hasAddonsConfig(): boolean;
  clearAddonsConfig(): void;
  getAddonsConfig(): AddonsConfig | undefined;
  setAddonsConfig(value?: AddonsConfig): void;

  getSubnetwork(): string;
  setSubnetwork(value: string): void;

  clearNodePoolsList(): void;
  getNodePoolsList(): Array<NodePool>;
  setNodePoolsList(value: Array<NodePool>): void;
  addNodePools(value?: NodePool, index?: number): NodePool;

  clearLocationsList(): void;
  getLocationsList(): Array<string>;
  setLocationsList(value: Array<string>): void;
  addLocations(value: string, index?: number): string;

  getEnableKubernetesAlpha(): boolean;
  setEnableKubernetesAlpha(value: boolean): void;

  hasNetworkPolicy(): boolean;
  clearNetworkPolicy(): void;
  getNetworkPolicy(): NetworkPolicy | undefined;
  setNetworkPolicy(value?: NetworkPolicy): void;

  hasIpAllocationPolicy(): boolean;
  clearIpAllocationPolicy(): void;
  getIpAllocationPolicy(): IPAllocationPolicy | undefined;
  setIpAllocationPolicy(value?: IPAllocationPolicy): void;

  hasMasterAuthorizedNetworksConfig(): boolean;
  clearMasterAuthorizedNetworksConfig(): void;
  getMasterAuthorizedNetworksConfig(): MasterAuthorizedNetworksConfig | undefined;
  setMasterAuthorizedNetworksConfig(value?: MasterAuthorizedNetworksConfig): void;

  hasMaintenancePolicy(): boolean;
  clearMaintenancePolicy(): void;
  getMaintenancePolicy(): MaintenancePolicy | undefined;
  setMaintenancePolicy(value?: MaintenancePolicy): void;

  hasPodSecurityPolicyConfig(): boolean;
  clearPodSecurityPolicyConfig(): void;
  getPodSecurityPolicyConfig(): PodSecurityPolicyConfig | undefined;
  setPodSecurityPolicyConfig(value?: PodSecurityPolicyConfig): void;

  getSelfLink(): string;
  setSelfLink(value: string): void;

  getZone(): string;
  setZone(value: string): void;

  getEndpoint(): string;
  setEndpoint(value: string): void;

  getInitialClusterVersion(): string;
  setInitialClusterVersion(value: string): void;

  getCurrentMasterVersion(): string;
  setCurrentMasterVersion(value: string): void;

  getCurrentNodeVersion(): string;
  setCurrentNodeVersion(value: string): void;

  getCreateTime(): string;
  setCreateTime(value: string): void;

  getStatus(): Cluster.StatusMap[keyof Cluster.StatusMap];
  setStatus(value: Cluster.StatusMap[keyof Cluster.StatusMap]): void;

  getStatusMessage(): string;
  setStatusMessage(value: string): void;

  getNodeIpv4CidrSize(): number;
  setNodeIpv4CidrSize(value: number): void;

  getServicesIpv4Cidr(): string;
  setServicesIpv4Cidr(value: string): void;

  clearInstanceGroupUrlsList(): void;
  getInstanceGroupUrlsList(): Array<string>;
  setInstanceGroupUrlsList(value: Array<string>): void;
  addInstanceGroupUrls(value: string, index?: number): string;

  getCurrentNodeCount(): number;
  setCurrentNodeCount(value: number): void;

  getExpireTime(): string;
  setExpireTime(value: string): void;

  getLocation(): string;
  setLocation(value: string): void;

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
    name: string,
    description: string,
    initialNodeCount: number,
    nodeConfig?: NodeConfig.AsObject,
    masterAuth?: MasterAuth.AsObject,
    loggingService: string,
    monitoringService: string,
    network: string,
    clusterIpv4Cidr: string,
    addonsConfig?: AddonsConfig.AsObject,
    subnetwork: string,
    nodePoolsList: Array<NodePool.AsObject>,
    locationsList: Array<string>,
    enableKubernetesAlpha: boolean,
    networkPolicy?: NetworkPolicy.AsObject,
    ipAllocationPolicy?: IPAllocationPolicy.AsObject,
    masterAuthorizedNetworksConfig?: MasterAuthorizedNetworksConfig.AsObject,
    maintenancePolicy?: MaintenancePolicy.AsObject,
    podSecurityPolicyConfig?: PodSecurityPolicyConfig.AsObject,
    selfLink: string,
    zone: string,
    endpoint: string,
    initialClusterVersion: string,
    currentMasterVersion: string,
    currentNodeVersion: string,
    createTime: string,
    status: Cluster.StatusMap[keyof Cluster.StatusMap],
    statusMessage: string,
    nodeIpv4CidrSize: number,
    servicesIpv4Cidr: string,
    instanceGroupUrlsList: Array<string>,
    currentNodeCount: number,
    expireTime: string,
    location: string,
  }

  export interface StatusMap {
    STATUS_UNSPECIFIED: 0;
    PROVISIONING: 1;
    RUNNING: 2;
    RECONCILING: 3;
    STOPPING: 4;
    ERROR: 5;
  }

  export const Status: StatusMap;
}

export class ClusterUpdate extends jspb.Message {
  getDesiredNodeVersion(): string;
  setDesiredNodeVersion(value: string): void;

  getDesiredMonitoringService(): string;
  setDesiredMonitoringService(value: string): void;

  hasDesiredAddonsConfig(): boolean;
  clearDesiredAddonsConfig(): void;
  getDesiredAddonsConfig(): AddonsConfig | undefined;
  setDesiredAddonsConfig(value?: AddonsConfig): void;

  getDesiredNodePoolId(): string;
  setDesiredNodePoolId(value: string): void;

  getDesiredImageType(): string;
  setDesiredImageType(value: string): void;

  hasDesiredNodePoolAutoscaling(): boolean;
  clearDesiredNodePoolAutoscaling(): void;
  getDesiredNodePoolAutoscaling(): NodePoolAutoscaling | undefined;
  setDesiredNodePoolAutoscaling(value?: NodePoolAutoscaling): void;

  clearDesiredLocationsList(): void;
  getDesiredLocationsList(): Array<string>;
  setDesiredLocationsList(value: Array<string>): void;
  addDesiredLocations(value: string, index?: number): string;

  hasDesiredMasterAuthorizedNetworksConfig(): boolean;
  clearDesiredMasterAuthorizedNetworksConfig(): void;
  getDesiredMasterAuthorizedNetworksConfig(): MasterAuthorizedNetworksConfig | undefined;
  setDesiredMasterAuthorizedNetworksConfig(value?: MasterAuthorizedNetworksConfig): void;

  hasDesiredPodSecurityPolicyConfig(): boolean;
  clearDesiredPodSecurityPolicyConfig(): void;
  getDesiredPodSecurityPolicyConfig(): PodSecurityPolicyConfig | undefined;
  setDesiredPodSecurityPolicyConfig(value?: PodSecurityPolicyConfig): void;

  getDesiredMasterVersion(): string;
  setDesiredMasterVersion(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClusterUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: ClusterUpdate): ClusterUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClusterUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClusterUpdate;
  static deserializeBinaryFromReader(message: ClusterUpdate, reader: jspb.BinaryReader): ClusterUpdate;
}

export namespace ClusterUpdate {
  export type AsObject = {
    desiredNodeVersion: string,
    desiredMonitoringService: string,
    desiredAddonsConfig?: AddonsConfig.AsObject,
    desiredNodePoolId: string,
    desiredImageType: string,
    desiredNodePoolAutoscaling?: NodePoolAutoscaling.AsObject,
    desiredLocationsList: Array<string>,
    desiredMasterAuthorizedNetworksConfig?: MasterAuthorizedNetworksConfig.AsObject,
    desiredPodSecurityPolicyConfig?: PodSecurityPolicyConfig.AsObject,
    desiredMasterVersion: string,
  }
}

export class Operation extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getZone(): string;
  setZone(value: string): void;

  getOperationType(): Operation.TypeMap[keyof Operation.TypeMap];
  setOperationType(value: Operation.TypeMap[keyof Operation.TypeMap]): void;

  getStatus(): Operation.StatusMap[keyof Operation.StatusMap];
  setStatus(value: Operation.StatusMap[keyof Operation.StatusMap]): void;

  getDetail(): string;
  setDetail(value: string): void;

  getStatusMessage(): string;
  setStatusMessage(value: string): void;

  getSelfLink(): string;
  setSelfLink(value: string): void;

  getTargetLink(): string;
  setTargetLink(value: string): void;

  getLocation(): string;
  setLocation(value: string): void;

  getStartTime(): string;
  setStartTime(value: string): void;

  getEndTime(): string;
  setEndTime(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Operation.AsObject;
  static toObject(includeInstance: boolean, msg: Operation): Operation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Operation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Operation;
  static deserializeBinaryFromReader(message: Operation, reader: jspb.BinaryReader): Operation;
}

export namespace Operation {
  export type AsObject = {
    name: string,
    zone: string,
    operationType: Operation.TypeMap[keyof Operation.TypeMap],
    status: Operation.StatusMap[keyof Operation.StatusMap],
    detail: string,
    statusMessage: string,
    selfLink: string,
    targetLink: string,
    location: string,
    startTime: string,
    endTime: string,
  }

  export interface StatusMap {
    STATUS_UNSPECIFIED: 0;
    PENDING: 1;
    RUNNING: 2;
    DONE: 3;
    ABORTING: 4;
  }

  export const Status: StatusMap;

  export interface TypeMap {
    TYPE_UNSPECIFIED: 0;
    CREATE_CLUSTER: 1;
    DELETE_CLUSTER: 2;
    UPGRADE_MASTER: 3;
    UPGRADE_NODES: 4;
    REPAIR_CLUSTER: 5;
    UPDATE_CLUSTER: 6;
    CREATE_NODE_POOL: 7;
    DELETE_NODE_POOL: 8;
    SET_NODE_POOL_MANAGEMENT: 9;
    AUTO_REPAIR_NODES: 10;
    AUTO_UPGRADE_NODES: 11;
    SET_LABELS: 12;
    SET_MASTER_AUTH: 13;
    SET_NODE_POOL_SIZE: 14;
    SET_NETWORK_POLICY: 15;
    SET_MAINTENANCE_POLICY: 16;
  }

  export const Type: TypeMap;
}

export class CreateClusterRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getZone(): string;
  setZone(value: string): void;

  hasCluster(): boolean;
  clearCluster(): void;
  getCluster(): Cluster | undefined;
  setCluster(value?: Cluster): void;

  getParent(): string;
  setParent(value: string): void;

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
    zone: string,
    cluster?: Cluster.AsObject,
    parent: string,
  }
}

export class GetClusterRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getZone(): string;
  setZone(value: string): void;

  getClusterId(): string;
  setClusterId(value: string): void;

  getName(): string;
  setName(value: string): void;

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
    zone: string,
    clusterId: string,
    name: string,
  }
}

export class UpdateClusterRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getZone(): string;
  setZone(value: string): void;

  getClusterId(): string;
  setClusterId(value: string): void;

  hasUpdate(): boolean;
  clearUpdate(): void;
  getUpdate(): ClusterUpdate | undefined;
  setUpdate(value?: ClusterUpdate): void;

  getName(): string;
  setName(value: string): void;

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
    zone: string,
    clusterId: string,
    update?: ClusterUpdate.AsObject,
    name: string,
  }
}

export class UpdateNodePoolRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getZone(): string;
  setZone(value: string): void;

  getClusterId(): string;
  setClusterId(value: string): void;

  getNodePoolId(): string;
  setNodePoolId(value: string): void;

  getNodeVersion(): string;
  setNodeVersion(value: string): void;

  getImageType(): string;
  setImageType(value: string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateNodePoolRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateNodePoolRequest): UpdateNodePoolRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateNodePoolRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateNodePoolRequest;
  static deserializeBinaryFromReader(message: UpdateNodePoolRequest, reader: jspb.BinaryReader): UpdateNodePoolRequest;
}

export namespace UpdateNodePoolRequest {
  export type AsObject = {
    projectId: string,
    zone: string,
    clusterId: string,
    nodePoolId: string,
    nodeVersion: string,
    imageType: string,
    name: string,
  }
}

export class SetNodePoolAutoscalingRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getZone(): string;
  setZone(value: string): void;

  getClusterId(): string;
  setClusterId(value: string): void;

  getNodePoolId(): string;
  setNodePoolId(value: string): void;

  hasAutoscaling(): boolean;
  clearAutoscaling(): void;
  getAutoscaling(): NodePoolAutoscaling | undefined;
  setAutoscaling(value?: NodePoolAutoscaling): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetNodePoolAutoscalingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetNodePoolAutoscalingRequest): SetNodePoolAutoscalingRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetNodePoolAutoscalingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetNodePoolAutoscalingRequest;
  static deserializeBinaryFromReader(message: SetNodePoolAutoscalingRequest, reader: jspb.BinaryReader): SetNodePoolAutoscalingRequest;
}

export namespace SetNodePoolAutoscalingRequest {
  export type AsObject = {
    projectId: string,
    zone: string,
    clusterId: string,
    nodePoolId: string,
    autoscaling?: NodePoolAutoscaling.AsObject,
    name: string,
  }
}

export class SetLoggingServiceRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getZone(): string;
  setZone(value: string): void;

  getClusterId(): string;
  setClusterId(value: string): void;

  getLoggingService(): string;
  setLoggingService(value: string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetLoggingServiceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetLoggingServiceRequest): SetLoggingServiceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetLoggingServiceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetLoggingServiceRequest;
  static deserializeBinaryFromReader(message: SetLoggingServiceRequest, reader: jspb.BinaryReader): SetLoggingServiceRequest;
}

export namespace SetLoggingServiceRequest {
  export type AsObject = {
    projectId: string,
    zone: string,
    clusterId: string,
    loggingService: string,
    name: string,
  }
}

export class SetMonitoringServiceRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getZone(): string;
  setZone(value: string): void;

  getClusterId(): string;
  setClusterId(value: string): void;

  getMonitoringService(): string;
  setMonitoringService(value: string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetMonitoringServiceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetMonitoringServiceRequest): SetMonitoringServiceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetMonitoringServiceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetMonitoringServiceRequest;
  static deserializeBinaryFromReader(message: SetMonitoringServiceRequest, reader: jspb.BinaryReader): SetMonitoringServiceRequest;
}

export namespace SetMonitoringServiceRequest {
  export type AsObject = {
    projectId: string,
    zone: string,
    clusterId: string,
    monitoringService: string,
    name: string,
  }
}

export class SetAddonsConfigRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getZone(): string;
  setZone(value: string): void;

  getClusterId(): string;
  setClusterId(value: string): void;

  hasAddonsConfig(): boolean;
  clearAddonsConfig(): void;
  getAddonsConfig(): AddonsConfig | undefined;
  setAddonsConfig(value?: AddonsConfig): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetAddonsConfigRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetAddonsConfigRequest): SetAddonsConfigRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetAddonsConfigRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetAddonsConfigRequest;
  static deserializeBinaryFromReader(message: SetAddonsConfigRequest, reader: jspb.BinaryReader): SetAddonsConfigRequest;
}

export namespace SetAddonsConfigRequest {
  export type AsObject = {
    projectId: string,
    zone: string,
    clusterId: string,
    addonsConfig?: AddonsConfig.AsObject,
    name: string,
  }
}

export class SetLocationsRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getZone(): string;
  setZone(value: string): void;

  getClusterId(): string;
  setClusterId(value: string): void;

  clearLocationsList(): void;
  getLocationsList(): Array<string>;
  setLocationsList(value: Array<string>): void;
  addLocations(value: string, index?: number): string;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetLocationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetLocationsRequest): SetLocationsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetLocationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetLocationsRequest;
  static deserializeBinaryFromReader(message: SetLocationsRequest, reader: jspb.BinaryReader): SetLocationsRequest;
}

export namespace SetLocationsRequest {
  export type AsObject = {
    projectId: string,
    zone: string,
    clusterId: string,
    locationsList: Array<string>,
    name: string,
  }
}

export class UpdateMasterRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getZone(): string;
  setZone(value: string): void;

  getClusterId(): string;
  setClusterId(value: string): void;

  getMasterVersion(): string;
  setMasterVersion(value: string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateMasterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateMasterRequest): UpdateMasterRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateMasterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateMasterRequest;
  static deserializeBinaryFromReader(message: UpdateMasterRequest, reader: jspb.BinaryReader): UpdateMasterRequest;
}

export namespace UpdateMasterRequest {
  export type AsObject = {
    projectId: string,
    zone: string,
    clusterId: string,
    masterVersion: string,
    name: string,
  }
}

export class SetMasterAuthRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getZone(): string;
  setZone(value: string): void;

  getClusterId(): string;
  setClusterId(value: string): void;

  getAction(): SetMasterAuthRequest.ActionMap[keyof SetMasterAuthRequest.ActionMap];
  setAction(value: SetMasterAuthRequest.ActionMap[keyof SetMasterAuthRequest.ActionMap]): void;

  hasUpdate(): boolean;
  clearUpdate(): void;
  getUpdate(): MasterAuth | undefined;
  setUpdate(value?: MasterAuth): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetMasterAuthRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetMasterAuthRequest): SetMasterAuthRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetMasterAuthRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetMasterAuthRequest;
  static deserializeBinaryFromReader(message: SetMasterAuthRequest, reader: jspb.BinaryReader): SetMasterAuthRequest;
}

export namespace SetMasterAuthRequest {
  export type AsObject = {
    projectId: string,
    zone: string,
    clusterId: string,
    action: SetMasterAuthRequest.ActionMap[keyof SetMasterAuthRequest.ActionMap],
    update?: MasterAuth.AsObject,
    name: string,
  }

  export interface ActionMap {
    UNKNOWN: 0;
    SET_PASSWORD: 1;
    GENERATE_PASSWORD: 2;
    SET_USERNAME: 3;
  }

  export const Action: ActionMap;
}

export class DeleteClusterRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getZone(): string;
  setZone(value: string): void;

  getClusterId(): string;
  setClusterId(value: string): void;

  getName(): string;
  setName(value: string): void;

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
    zone: string,
    clusterId: string,
    name: string,
  }
}

export class ListClustersRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getZone(): string;
  setZone(value: string): void;

  getParent(): string;
  setParent(value: string): void;

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
    zone: string,
    parent: string,
  }
}

export class ListClustersResponse extends jspb.Message {
  clearClustersList(): void;
  getClustersList(): Array<Cluster>;
  setClustersList(value: Array<Cluster>): void;
  addClusters(value?: Cluster, index?: number): Cluster;

  clearMissingZonesList(): void;
  getMissingZonesList(): Array<string>;
  setMissingZonesList(value: Array<string>): void;
  addMissingZones(value: string, index?: number): string;

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
    missingZonesList: Array<string>,
  }
}

export class GetOperationRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getZone(): string;
  setZone(value: string): void;

  getOperationId(): string;
  setOperationId(value: string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOperationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetOperationRequest): GetOperationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetOperationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOperationRequest;
  static deserializeBinaryFromReader(message: GetOperationRequest, reader: jspb.BinaryReader): GetOperationRequest;
}

export namespace GetOperationRequest {
  export type AsObject = {
    projectId: string,
    zone: string,
    operationId: string,
    name: string,
  }
}

export class ListOperationsRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getZone(): string;
  setZone(value: string): void;

  getParent(): string;
  setParent(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListOperationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListOperationsRequest): ListOperationsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListOperationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListOperationsRequest;
  static deserializeBinaryFromReader(message: ListOperationsRequest, reader: jspb.BinaryReader): ListOperationsRequest;
}

export namespace ListOperationsRequest {
  export type AsObject = {
    projectId: string,
    zone: string,
    parent: string,
  }
}

export class CancelOperationRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getZone(): string;
  setZone(value: string): void;

  getOperationId(): string;
  setOperationId(value: string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelOperationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CancelOperationRequest): CancelOperationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CancelOperationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelOperationRequest;
  static deserializeBinaryFromReader(message: CancelOperationRequest, reader: jspb.BinaryReader): CancelOperationRequest;
}

export namespace CancelOperationRequest {
  export type AsObject = {
    projectId: string,
    zone: string,
    operationId: string,
    name: string,
  }
}

export class ListOperationsResponse extends jspb.Message {
  clearOperationsList(): void;
  getOperationsList(): Array<Operation>;
  setOperationsList(value: Array<Operation>): void;
  addOperations(value?: Operation, index?: number): Operation;

  clearMissingZonesList(): void;
  getMissingZonesList(): Array<string>;
  setMissingZonesList(value: Array<string>): void;
  addMissingZones(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListOperationsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListOperationsResponse): ListOperationsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListOperationsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListOperationsResponse;
  static deserializeBinaryFromReader(message: ListOperationsResponse, reader: jspb.BinaryReader): ListOperationsResponse;
}

export namespace ListOperationsResponse {
  export type AsObject = {
    operationsList: Array<Operation.AsObject>,
    missingZonesList: Array<string>,
  }
}

export class GetServerConfigRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getZone(): string;
  setZone(value: string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetServerConfigRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetServerConfigRequest): GetServerConfigRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetServerConfigRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetServerConfigRequest;
  static deserializeBinaryFromReader(message: GetServerConfigRequest, reader: jspb.BinaryReader): GetServerConfigRequest;
}

export namespace GetServerConfigRequest {
  export type AsObject = {
    projectId: string,
    zone: string,
    name: string,
  }
}

export class ServerConfig extends jspb.Message {
  getDefaultClusterVersion(): string;
  setDefaultClusterVersion(value: string): void;

  clearValidNodeVersionsList(): void;
  getValidNodeVersionsList(): Array<string>;
  setValidNodeVersionsList(value: Array<string>): void;
  addValidNodeVersions(value: string, index?: number): string;

  getDefaultImageType(): string;
  setDefaultImageType(value: string): void;

  clearValidImageTypesList(): void;
  getValidImageTypesList(): Array<string>;
  setValidImageTypesList(value: Array<string>): void;
  addValidImageTypes(value: string, index?: number): string;

  clearValidMasterVersionsList(): void;
  getValidMasterVersionsList(): Array<string>;
  setValidMasterVersionsList(value: Array<string>): void;
  addValidMasterVersions(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerConfig.AsObject;
  static toObject(includeInstance: boolean, msg: ServerConfig): ServerConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerConfig;
  static deserializeBinaryFromReader(message: ServerConfig, reader: jspb.BinaryReader): ServerConfig;
}

export namespace ServerConfig {
  export type AsObject = {
    defaultClusterVersion: string,
    validNodeVersionsList: Array<string>,
    defaultImageType: string,
    validImageTypesList: Array<string>,
    validMasterVersionsList: Array<string>,
  }
}

export class CreateNodePoolRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getZone(): string;
  setZone(value: string): void;

  getClusterId(): string;
  setClusterId(value: string): void;

  hasNodePool(): boolean;
  clearNodePool(): void;
  getNodePool(): NodePool | undefined;
  setNodePool(value?: NodePool): void;

  getParent(): string;
  setParent(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateNodePoolRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateNodePoolRequest): CreateNodePoolRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateNodePoolRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateNodePoolRequest;
  static deserializeBinaryFromReader(message: CreateNodePoolRequest, reader: jspb.BinaryReader): CreateNodePoolRequest;
}

export namespace CreateNodePoolRequest {
  export type AsObject = {
    projectId: string,
    zone: string,
    clusterId: string,
    nodePool?: NodePool.AsObject,
    parent: string,
  }
}

export class DeleteNodePoolRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getZone(): string;
  setZone(value: string): void;

  getClusterId(): string;
  setClusterId(value: string): void;

  getNodePoolId(): string;
  setNodePoolId(value: string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteNodePoolRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteNodePoolRequest): DeleteNodePoolRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteNodePoolRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteNodePoolRequest;
  static deserializeBinaryFromReader(message: DeleteNodePoolRequest, reader: jspb.BinaryReader): DeleteNodePoolRequest;
}

export namespace DeleteNodePoolRequest {
  export type AsObject = {
    projectId: string,
    zone: string,
    clusterId: string,
    nodePoolId: string,
    name: string,
  }
}

export class ListNodePoolsRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getZone(): string;
  setZone(value: string): void;

  getClusterId(): string;
  setClusterId(value: string): void;

  getParent(): string;
  setParent(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListNodePoolsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListNodePoolsRequest): ListNodePoolsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListNodePoolsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListNodePoolsRequest;
  static deserializeBinaryFromReader(message: ListNodePoolsRequest, reader: jspb.BinaryReader): ListNodePoolsRequest;
}

export namespace ListNodePoolsRequest {
  export type AsObject = {
    projectId: string,
    zone: string,
    clusterId: string,
    parent: string,
  }
}

export class GetNodePoolRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getZone(): string;
  setZone(value: string): void;

  getClusterId(): string;
  setClusterId(value: string): void;

  getNodePoolId(): string;
  setNodePoolId(value: string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNodePoolRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetNodePoolRequest): GetNodePoolRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetNodePoolRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNodePoolRequest;
  static deserializeBinaryFromReader(message: GetNodePoolRequest, reader: jspb.BinaryReader): GetNodePoolRequest;
}

export namespace GetNodePoolRequest {
  export type AsObject = {
    projectId: string,
    zone: string,
    clusterId: string,
    nodePoolId: string,
    name: string,
  }
}

export class NodePool extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasConfig(): boolean;
  clearConfig(): void;
  getConfig(): NodeConfig | undefined;
  setConfig(value?: NodeConfig): void;

  getInitialNodeCount(): number;
  setInitialNodeCount(value: number): void;

  hasAutoscaling(): boolean;
  clearAutoscaling(): void;
  getAutoscaling(): NodePoolAutoscaling | undefined;
  setAutoscaling(value?: NodePoolAutoscaling): void;

  hasManagement(): boolean;
  clearManagement(): void;
  getManagement(): NodeManagement | undefined;
  setManagement(value?: NodeManagement): void;

  getSelfLink(): string;
  setSelfLink(value: string): void;

  getVersion(): string;
  setVersion(value: string): void;

  clearInstanceGroupUrlsList(): void;
  getInstanceGroupUrlsList(): Array<string>;
  setInstanceGroupUrlsList(value: Array<string>): void;
  addInstanceGroupUrls(value: string, index?: number): string;

  getStatus(): NodePool.StatusMap[keyof NodePool.StatusMap];
  setStatus(value: NodePool.StatusMap[keyof NodePool.StatusMap]): void;

  getStatusMessage(): string;
  setStatusMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NodePool.AsObject;
  static toObject(includeInstance: boolean, msg: NodePool): NodePool.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NodePool, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NodePool;
  static deserializeBinaryFromReader(message: NodePool, reader: jspb.BinaryReader): NodePool;
}

export namespace NodePool {
  export type AsObject = {
    name: string,
    config?: NodeConfig.AsObject,
    initialNodeCount: number,
    autoscaling?: NodePoolAutoscaling.AsObject,
    management?: NodeManagement.AsObject,
    selfLink: string,
    version: string,
    instanceGroupUrlsList: Array<string>,
    status: NodePool.StatusMap[keyof NodePool.StatusMap],
    statusMessage: string,
  }

  export interface StatusMap {
    STATUS_UNSPECIFIED: 0;
    PROVISIONING: 1;
    RUNNING: 2;
    RUNNING_WITH_ERROR: 3;
    RECONCILING: 4;
    STOPPING: 5;
    ERROR: 6;
  }

  export const Status: StatusMap;
}

export class NodeManagement extends jspb.Message {
  getAutoUpgrade(): boolean;
  setAutoUpgrade(value: boolean): void;

  getAutoRepair(): boolean;
  setAutoRepair(value: boolean): void;

  hasUpgradeOptions(): boolean;
  clearUpgradeOptions(): void;
  getUpgradeOptions(): AutoUpgradeOptions | undefined;
  setUpgradeOptions(value?: AutoUpgradeOptions): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NodeManagement.AsObject;
  static toObject(includeInstance: boolean, msg: NodeManagement): NodeManagement.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NodeManagement, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NodeManagement;
  static deserializeBinaryFromReader(message: NodeManagement, reader: jspb.BinaryReader): NodeManagement;
}

export namespace NodeManagement {
  export type AsObject = {
    autoUpgrade: boolean,
    autoRepair: boolean,
    upgradeOptions?: AutoUpgradeOptions.AsObject,
  }
}

export class AutoUpgradeOptions extends jspb.Message {
  getAutoUpgradeStartTime(): string;
  setAutoUpgradeStartTime(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AutoUpgradeOptions.AsObject;
  static toObject(includeInstance: boolean, msg: AutoUpgradeOptions): AutoUpgradeOptions.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AutoUpgradeOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AutoUpgradeOptions;
  static deserializeBinaryFromReader(message: AutoUpgradeOptions, reader: jspb.BinaryReader): AutoUpgradeOptions;
}

export namespace AutoUpgradeOptions {
  export type AsObject = {
    autoUpgradeStartTime: string,
    description: string,
  }
}

export class MaintenancePolicy extends jspb.Message {
  hasWindow(): boolean;
  clearWindow(): void;
  getWindow(): MaintenanceWindow | undefined;
  setWindow(value?: MaintenanceWindow): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MaintenancePolicy.AsObject;
  static toObject(includeInstance: boolean, msg: MaintenancePolicy): MaintenancePolicy.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MaintenancePolicy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MaintenancePolicy;
  static deserializeBinaryFromReader(message: MaintenancePolicy, reader: jspb.BinaryReader): MaintenancePolicy;
}

export namespace MaintenancePolicy {
  export type AsObject = {
    window?: MaintenanceWindow.AsObject,
  }
}

export class MaintenanceWindow extends jspb.Message {
  hasDailyMaintenanceWindow(): boolean;
  clearDailyMaintenanceWindow(): void;
  getDailyMaintenanceWindow(): DailyMaintenanceWindow | undefined;
  setDailyMaintenanceWindow(value?: DailyMaintenanceWindow): void;

  getPolicyCase(): MaintenanceWindow.PolicyCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MaintenanceWindow.AsObject;
  static toObject(includeInstance: boolean, msg: MaintenanceWindow): MaintenanceWindow.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MaintenanceWindow, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MaintenanceWindow;
  static deserializeBinaryFromReader(message: MaintenanceWindow, reader: jspb.BinaryReader): MaintenanceWindow;
}

export namespace MaintenanceWindow {
  export type AsObject = {
    dailyMaintenanceWindow?: DailyMaintenanceWindow.AsObject,
  }

  export enum PolicyCase {
    POLICY_NOT_SET = 0,
    DAILY_MAINTENANCE_WINDOW = 2,
  }
}

export class DailyMaintenanceWindow extends jspb.Message {
  getStartTime(): string;
  setStartTime(value: string): void;

  getDuration(): string;
  setDuration(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DailyMaintenanceWindow.AsObject;
  static toObject(includeInstance: boolean, msg: DailyMaintenanceWindow): DailyMaintenanceWindow.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DailyMaintenanceWindow, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DailyMaintenanceWindow;
  static deserializeBinaryFromReader(message: DailyMaintenanceWindow, reader: jspb.BinaryReader): DailyMaintenanceWindow;
}

export namespace DailyMaintenanceWindow {
  export type AsObject = {
    startTime: string,
    duration: string,
  }
}

export class SetNodePoolManagementRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getZone(): string;
  setZone(value: string): void;

  getClusterId(): string;
  setClusterId(value: string): void;

  getNodePoolId(): string;
  setNodePoolId(value: string): void;

  hasManagement(): boolean;
  clearManagement(): void;
  getManagement(): NodeManagement | undefined;
  setManagement(value?: NodeManagement): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetNodePoolManagementRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetNodePoolManagementRequest): SetNodePoolManagementRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetNodePoolManagementRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetNodePoolManagementRequest;
  static deserializeBinaryFromReader(message: SetNodePoolManagementRequest, reader: jspb.BinaryReader): SetNodePoolManagementRequest;
}

export namespace SetNodePoolManagementRequest {
  export type AsObject = {
    projectId: string,
    zone: string,
    clusterId: string,
    nodePoolId: string,
    management?: NodeManagement.AsObject,
    name: string,
  }
}

export class SetNodePoolSizeRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getZone(): string;
  setZone(value: string): void;

  getClusterId(): string;
  setClusterId(value: string): void;

  getNodePoolId(): string;
  setNodePoolId(value: string): void;

  getNodeCount(): number;
  setNodeCount(value: number): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetNodePoolSizeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetNodePoolSizeRequest): SetNodePoolSizeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetNodePoolSizeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetNodePoolSizeRequest;
  static deserializeBinaryFromReader(message: SetNodePoolSizeRequest, reader: jspb.BinaryReader): SetNodePoolSizeRequest;
}

export namespace SetNodePoolSizeRequest {
  export type AsObject = {
    projectId: string,
    zone: string,
    clusterId: string,
    nodePoolId: string,
    nodeCount: number,
    name: string,
  }
}

export class RollbackNodePoolUpgradeRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getZone(): string;
  setZone(value: string): void;

  getClusterId(): string;
  setClusterId(value: string): void;

  getNodePoolId(): string;
  setNodePoolId(value: string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RollbackNodePoolUpgradeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RollbackNodePoolUpgradeRequest): RollbackNodePoolUpgradeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RollbackNodePoolUpgradeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RollbackNodePoolUpgradeRequest;
  static deserializeBinaryFromReader(message: RollbackNodePoolUpgradeRequest, reader: jspb.BinaryReader): RollbackNodePoolUpgradeRequest;
}

export namespace RollbackNodePoolUpgradeRequest {
  export type AsObject = {
    projectId: string,
    zone: string,
    clusterId: string,
    nodePoolId: string,
    name: string,
  }
}

export class ListNodePoolsResponse extends jspb.Message {
  clearNodePoolsList(): void;
  getNodePoolsList(): Array<NodePool>;
  setNodePoolsList(value: Array<NodePool>): void;
  addNodePools(value?: NodePool, index?: number): NodePool;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListNodePoolsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListNodePoolsResponse): ListNodePoolsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListNodePoolsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListNodePoolsResponse;
  static deserializeBinaryFromReader(message: ListNodePoolsResponse, reader: jspb.BinaryReader): ListNodePoolsResponse;
}

export namespace ListNodePoolsResponse {
  export type AsObject = {
    nodePoolsList: Array<NodePool.AsObject>,
  }
}

export class NodePoolAutoscaling extends jspb.Message {
  getEnabled(): boolean;
  setEnabled(value: boolean): void;

  getMinNodeCount(): number;
  setMinNodeCount(value: number): void;

  getMaxNodeCount(): number;
  setMaxNodeCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NodePoolAutoscaling.AsObject;
  static toObject(includeInstance: boolean, msg: NodePoolAutoscaling): NodePoolAutoscaling.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NodePoolAutoscaling, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NodePoolAutoscaling;
  static deserializeBinaryFromReader(message: NodePoolAutoscaling, reader: jspb.BinaryReader): NodePoolAutoscaling;
}

export namespace NodePoolAutoscaling {
  export type AsObject = {
    enabled: boolean,
    minNodeCount: number,
    maxNodeCount: number,
  }
}

export class SetLabelsRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getZone(): string;
  setZone(value: string): void;

  getClusterId(): string;
  setClusterId(value: string): void;

  getResourceLabelsMap(): jspb.Map<string, string>;
  clearResourceLabelsMap(): void;
  getLabelFingerprint(): string;
  setLabelFingerprint(value: string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetLabelsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetLabelsRequest): SetLabelsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetLabelsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetLabelsRequest;
  static deserializeBinaryFromReader(message: SetLabelsRequest, reader: jspb.BinaryReader): SetLabelsRequest;
}

export namespace SetLabelsRequest {
  export type AsObject = {
    projectId: string,
    zone: string,
    clusterId: string,
    resourceLabelsMap: Array<[string, string]>,
    labelFingerprint: string,
    name: string,
  }
}

export class SetLegacyAbacRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getZone(): string;
  setZone(value: string): void;

  getClusterId(): string;
  setClusterId(value: string): void;

  getEnabled(): boolean;
  setEnabled(value: boolean): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetLegacyAbacRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetLegacyAbacRequest): SetLegacyAbacRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetLegacyAbacRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetLegacyAbacRequest;
  static deserializeBinaryFromReader(message: SetLegacyAbacRequest, reader: jspb.BinaryReader): SetLegacyAbacRequest;
}

export namespace SetLegacyAbacRequest {
  export type AsObject = {
    projectId: string,
    zone: string,
    clusterId: string,
    enabled: boolean,
    name: string,
  }
}

export class StartIPRotationRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getZone(): string;
  setZone(value: string): void;

  getClusterId(): string;
  setClusterId(value: string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StartIPRotationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StartIPRotationRequest): StartIPRotationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StartIPRotationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StartIPRotationRequest;
  static deserializeBinaryFromReader(message: StartIPRotationRequest, reader: jspb.BinaryReader): StartIPRotationRequest;
}

export namespace StartIPRotationRequest {
  export type AsObject = {
    projectId: string,
    zone: string,
    clusterId: string,
    name: string,
  }
}

export class CompleteIPRotationRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getZone(): string;
  setZone(value: string): void;

  getClusterId(): string;
  setClusterId(value: string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompleteIPRotationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CompleteIPRotationRequest): CompleteIPRotationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CompleteIPRotationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompleteIPRotationRequest;
  static deserializeBinaryFromReader(message: CompleteIPRotationRequest, reader: jspb.BinaryReader): CompleteIPRotationRequest;
}

export namespace CompleteIPRotationRequest {
  export type AsObject = {
    projectId: string,
    zone: string,
    clusterId: string,
    name: string,
  }
}

export class AcceleratorConfig extends jspb.Message {
  getAcceleratorCount(): number;
  setAcceleratorCount(value: number): void;

  getAcceleratorType(): string;
  setAcceleratorType(value: string): void;

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
    acceleratorCount: number,
    acceleratorType: string,
  }
}

export class SetNetworkPolicyRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getZone(): string;
  setZone(value: string): void;

  getClusterId(): string;
  setClusterId(value: string): void;

  hasNetworkPolicy(): boolean;
  clearNetworkPolicy(): void;
  getNetworkPolicy(): NetworkPolicy | undefined;
  setNetworkPolicy(value?: NetworkPolicy): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetNetworkPolicyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetNetworkPolicyRequest): SetNetworkPolicyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetNetworkPolicyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetNetworkPolicyRequest;
  static deserializeBinaryFromReader(message: SetNetworkPolicyRequest, reader: jspb.BinaryReader): SetNetworkPolicyRequest;
}

export namespace SetNetworkPolicyRequest {
  export type AsObject = {
    projectId: string,
    zone: string,
    clusterId: string,
    networkPolicy?: NetworkPolicy.AsObject,
    name: string,
  }
}

export class SetMaintenancePolicyRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getZone(): string;
  setZone(value: string): void;

  getClusterId(): string;
  setClusterId(value: string): void;

  hasMaintenancePolicy(): boolean;
  clearMaintenancePolicy(): void;
  getMaintenancePolicy(): MaintenancePolicy | undefined;
  setMaintenancePolicy(value?: MaintenancePolicy): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetMaintenancePolicyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetMaintenancePolicyRequest): SetMaintenancePolicyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetMaintenancePolicyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetMaintenancePolicyRequest;
  static deserializeBinaryFromReader(message: SetMaintenancePolicyRequest, reader: jspb.BinaryReader): SetMaintenancePolicyRequest;
}

export namespace SetMaintenancePolicyRequest {
  export type AsObject = {
    projectId: string,
    zone: string,
    clusterId: string,
    maintenancePolicy?: MaintenancePolicy.AsObject,
    name: string,
  }
}

