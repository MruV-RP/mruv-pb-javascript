// package: google.appengine.v1
// file: google/appengine/v1/version.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as google_appengine_v1_app_yaml_pb from "../../../google/appengine/v1/app_yaml_pb";
import * as google_appengine_v1_deploy_pb from "../../../google/appengine/v1/deploy_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Version extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getId(): string;
  setId(value: string): void;

  hasAutomaticScaling(): boolean;
  clearAutomaticScaling(): void;
  getAutomaticScaling(): AutomaticScaling | undefined;
  setAutomaticScaling(value?: AutomaticScaling): void;

  hasBasicScaling(): boolean;
  clearBasicScaling(): void;
  getBasicScaling(): BasicScaling | undefined;
  setBasicScaling(value?: BasicScaling): void;

  hasManualScaling(): boolean;
  clearManualScaling(): void;
  getManualScaling(): ManualScaling | undefined;
  setManualScaling(value?: ManualScaling): void;

  clearInboundServicesList(): void;
  getInboundServicesList(): Array<InboundServiceTypeMap[keyof InboundServiceTypeMap]>;
  setInboundServicesList(value: Array<InboundServiceTypeMap[keyof InboundServiceTypeMap]>): void;
  addInboundServices(value: InboundServiceTypeMap[keyof InboundServiceTypeMap], index?: number): InboundServiceTypeMap[keyof InboundServiceTypeMap];

  getInstanceClass(): string;
  setInstanceClass(value: string): void;

  hasNetwork(): boolean;
  clearNetwork(): void;
  getNetwork(): Network | undefined;
  setNetwork(value?: Network): void;

  hasResources(): boolean;
  clearResources(): void;
  getResources(): Resources | undefined;
  setResources(value?: Resources): void;

  getRuntime(): string;
  setRuntime(value: string): void;

  getThreadsafe(): boolean;
  setThreadsafe(value: boolean): void;

  getVm(): boolean;
  setVm(value: boolean): void;

  getBetaSettingsMap(): jspb.Map<string, string>;
  clearBetaSettingsMap(): void;
  getEnv(): string;
  setEnv(value: string): void;

  getServingStatus(): ServingStatusMap[keyof ServingStatusMap];
  setServingStatus(value: ServingStatusMap[keyof ServingStatusMap]): void;

  getCreatedBy(): string;
  setCreatedBy(value: string): void;

  hasCreateTime(): boolean;
  clearCreateTime(): void;
  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getDiskUsageBytes(): number;
  setDiskUsageBytes(value: number): void;

  clearHandlersList(): void;
  getHandlersList(): Array<google_appengine_v1_app_yaml_pb.UrlMap>;
  setHandlersList(value: Array<google_appengine_v1_app_yaml_pb.UrlMap>): void;
  addHandlers(value?: google_appengine_v1_app_yaml_pb.UrlMap, index?: number): google_appengine_v1_app_yaml_pb.UrlMap;

  clearErrorHandlersList(): void;
  getErrorHandlersList(): Array<google_appengine_v1_app_yaml_pb.ErrorHandler>;
  setErrorHandlersList(value: Array<google_appengine_v1_app_yaml_pb.ErrorHandler>): void;
  addErrorHandlers(value?: google_appengine_v1_app_yaml_pb.ErrorHandler, index?: number): google_appengine_v1_app_yaml_pb.ErrorHandler;

  clearLibrariesList(): void;
  getLibrariesList(): Array<google_appengine_v1_app_yaml_pb.Library>;
  setLibrariesList(value: Array<google_appengine_v1_app_yaml_pb.Library>): void;
  addLibraries(value?: google_appengine_v1_app_yaml_pb.Library, index?: number): google_appengine_v1_app_yaml_pb.Library;

  hasApiConfig(): boolean;
  clearApiConfig(): void;
  getApiConfig(): google_appengine_v1_app_yaml_pb.ApiConfigHandler | undefined;
  setApiConfig(value?: google_appengine_v1_app_yaml_pb.ApiConfigHandler): void;

  getEnvVariablesMap(): jspb.Map<string, string>;
  clearEnvVariablesMap(): void;
  hasDefaultExpiration(): boolean;
  clearDefaultExpiration(): void;
  getDefaultExpiration(): google_protobuf_duration_pb.Duration | undefined;
  setDefaultExpiration(value?: google_protobuf_duration_pb.Duration): void;

  hasHealthCheck(): boolean;
  clearHealthCheck(): void;
  getHealthCheck(): google_appengine_v1_app_yaml_pb.HealthCheck | undefined;
  setHealthCheck(value?: google_appengine_v1_app_yaml_pb.HealthCheck): void;

  getNobuildFilesRegex(): string;
  setNobuildFilesRegex(value: string): void;

  hasDeployment(): boolean;
  clearDeployment(): void;
  getDeployment(): google_appengine_v1_deploy_pb.Deployment | undefined;
  setDeployment(value?: google_appengine_v1_deploy_pb.Deployment): void;

  getVersionUrl(): string;
  setVersionUrl(value: string): void;

  getScalingCase(): Version.ScalingCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Version.AsObject;
  static toObject(includeInstance: boolean, msg: Version): Version.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Version, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Version;
  static deserializeBinaryFromReader(message: Version, reader: jspb.BinaryReader): Version;
}

export namespace Version {
  export type AsObject = {
    name: string,
    id: string,
    automaticScaling?: AutomaticScaling.AsObject,
    basicScaling?: BasicScaling.AsObject,
    manualScaling?: ManualScaling.AsObject,
    inboundServicesList: Array<InboundServiceTypeMap[keyof InboundServiceTypeMap]>,
    instanceClass: string,
    network?: Network.AsObject,
    resources?: Resources.AsObject,
    runtime: string,
    threadsafe: boolean,
    vm: boolean,
    betaSettingsMap: Array<[string, string]>,
    env: string,
    servingStatus: ServingStatusMap[keyof ServingStatusMap],
    createdBy: string,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    diskUsageBytes: number,
    handlersList: Array<google_appengine_v1_app_yaml_pb.UrlMap.AsObject>,
    errorHandlersList: Array<google_appengine_v1_app_yaml_pb.ErrorHandler.AsObject>,
    librariesList: Array<google_appengine_v1_app_yaml_pb.Library.AsObject>,
    apiConfig?: google_appengine_v1_app_yaml_pb.ApiConfigHandler.AsObject,
    envVariablesMap: Array<[string, string]>,
    defaultExpiration?: google_protobuf_duration_pb.Duration.AsObject,
    healthCheck?: google_appengine_v1_app_yaml_pb.HealthCheck.AsObject,
    nobuildFilesRegex: string,
    deployment?: google_appengine_v1_deploy_pb.Deployment.AsObject,
    versionUrl: string,
  }

  export enum ScalingCase {
    SCALING_NOT_SET = 0,
    AUTOMATIC_SCALING = 3,
    BASIC_SCALING = 4,
    MANUAL_SCALING = 5,
  }
}

export class AutomaticScaling extends jspb.Message {
  hasCoolDownPeriod(): boolean;
  clearCoolDownPeriod(): void;
  getCoolDownPeriod(): google_protobuf_duration_pb.Duration | undefined;
  setCoolDownPeriod(value?: google_protobuf_duration_pb.Duration): void;

  hasCpuUtilization(): boolean;
  clearCpuUtilization(): void;
  getCpuUtilization(): CpuUtilization | undefined;
  setCpuUtilization(value?: CpuUtilization): void;

  getMaxConcurrentRequests(): number;
  setMaxConcurrentRequests(value: number): void;

  getMaxIdleInstances(): number;
  setMaxIdleInstances(value: number): void;

  getMaxTotalInstances(): number;
  setMaxTotalInstances(value: number): void;

  hasMaxPendingLatency(): boolean;
  clearMaxPendingLatency(): void;
  getMaxPendingLatency(): google_protobuf_duration_pb.Duration | undefined;
  setMaxPendingLatency(value?: google_protobuf_duration_pb.Duration): void;

  getMinIdleInstances(): number;
  setMinIdleInstances(value: number): void;

  getMinTotalInstances(): number;
  setMinTotalInstances(value: number): void;

  hasMinPendingLatency(): boolean;
  clearMinPendingLatency(): void;
  getMinPendingLatency(): google_protobuf_duration_pb.Duration | undefined;
  setMinPendingLatency(value?: google_protobuf_duration_pb.Duration): void;

  hasRequestUtilization(): boolean;
  clearRequestUtilization(): void;
  getRequestUtilization(): RequestUtilization | undefined;
  setRequestUtilization(value?: RequestUtilization): void;

  hasDiskUtilization(): boolean;
  clearDiskUtilization(): void;
  getDiskUtilization(): DiskUtilization | undefined;
  setDiskUtilization(value?: DiskUtilization): void;

  hasNetworkUtilization(): boolean;
  clearNetworkUtilization(): void;
  getNetworkUtilization(): NetworkUtilization | undefined;
  setNetworkUtilization(value?: NetworkUtilization): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AutomaticScaling.AsObject;
  static toObject(includeInstance: boolean, msg: AutomaticScaling): AutomaticScaling.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AutomaticScaling, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AutomaticScaling;
  static deserializeBinaryFromReader(message: AutomaticScaling, reader: jspb.BinaryReader): AutomaticScaling;
}

export namespace AutomaticScaling {
  export type AsObject = {
    coolDownPeriod?: google_protobuf_duration_pb.Duration.AsObject,
    cpuUtilization?: CpuUtilization.AsObject,
    maxConcurrentRequests: number,
    maxIdleInstances: number,
    maxTotalInstances: number,
    maxPendingLatency?: google_protobuf_duration_pb.Duration.AsObject,
    minIdleInstances: number,
    minTotalInstances: number,
    minPendingLatency?: google_protobuf_duration_pb.Duration.AsObject,
    requestUtilization?: RequestUtilization.AsObject,
    diskUtilization?: DiskUtilization.AsObject,
    networkUtilization?: NetworkUtilization.AsObject,
  }
}

export class BasicScaling extends jspb.Message {
  hasIdleTimeout(): boolean;
  clearIdleTimeout(): void;
  getIdleTimeout(): google_protobuf_duration_pb.Duration | undefined;
  setIdleTimeout(value?: google_protobuf_duration_pb.Duration): void;

  getMaxInstances(): number;
  setMaxInstances(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BasicScaling.AsObject;
  static toObject(includeInstance: boolean, msg: BasicScaling): BasicScaling.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BasicScaling, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BasicScaling;
  static deserializeBinaryFromReader(message: BasicScaling, reader: jspb.BinaryReader): BasicScaling;
}

export namespace BasicScaling {
  export type AsObject = {
    idleTimeout?: google_protobuf_duration_pb.Duration.AsObject,
    maxInstances: number,
  }
}

export class ManualScaling extends jspb.Message {
  getInstances(): number;
  setInstances(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ManualScaling.AsObject;
  static toObject(includeInstance: boolean, msg: ManualScaling): ManualScaling.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ManualScaling, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ManualScaling;
  static deserializeBinaryFromReader(message: ManualScaling, reader: jspb.BinaryReader): ManualScaling;
}

export namespace ManualScaling {
  export type AsObject = {
    instances: number,
  }
}

export class CpuUtilization extends jspb.Message {
  hasAggregationWindowLength(): boolean;
  clearAggregationWindowLength(): void;
  getAggregationWindowLength(): google_protobuf_duration_pb.Duration | undefined;
  setAggregationWindowLength(value?: google_protobuf_duration_pb.Duration): void;

  getTargetUtilization(): number;
  setTargetUtilization(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CpuUtilization.AsObject;
  static toObject(includeInstance: boolean, msg: CpuUtilization): CpuUtilization.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CpuUtilization, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CpuUtilization;
  static deserializeBinaryFromReader(message: CpuUtilization, reader: jspb.BinaryReader): CpuUtilization;
}

export namespace CpuUtilization {
  export type AsObject = {
    aggregationWindowLength?: google_protobuf_duration_pb.Duration.AsObject,
    targetUtilization: number,
  }
}

export class RequestUtilization extends jspb.Message {
  getTargetRequestCountPerSecond(): number;
  setTargetRequestCountPerSecond(value: number): void;

  getTargetConcurrentRequests(): number;
  setTargetConcurrentRequests(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestUtilization.AsObject;
  static toObject(includeInstance: boolean, msg: RequestUtilization): RequestUtilization.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequestUtilization, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestUtilization;
  static deserializeBinaryFromReader(message: RequestUtilization, reader: jspb.BinaryReader): RequestUtilization;
}

export namespace RequestUtilization {
  export type AsObject = {
    targetRequestCountPerSecond: number,
    targetConcurrentRequests: number,
  }
}

export class DiskUtilization extends jspb.Message {
  getTargetWriteBytesPerSecond(): number;
  setTargetWriteBytesPerSecond(value: number): void;

  getTargetWriteOpsPerSecond(): number;
  setTargetWriteOpsPerSecond(value: number): void;

  getTargetReadBytesPerSecond(): number;
  setTargetReadBytesPerSecond(value: number): void;

  getTargetReadOpsPerSecond(): number;
  setTargetReadOpsPerSecond(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DiskUtilization.AsObject;
  static toObject(includeInstance: boolean, msg: DiskUtilization): DiskUtilization.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DiskUtilization, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DiskUtilization;
  static deserializeBinaryFromReader(message: DiskUtilization, reader: jspb.BinaryReader): DiskUtilization;
}

export namespace DiskUtilization {
  export type AsObject = {
    targetWriteBytesPerSecond: number,
    targetWriteOpsPerSecond: number,
    targetReadBytesPerSecond: number,
    targetReadOpsPerSecond: number,
  }
}

export class NetworkUtilization extends jspb.Message {
  getTargetSentBytesPerSecond(): number;
  setTargetSentBytesPerSecond(value: number): void;

  getTargetSentPacketsPerSecond(): number;
  setTargetSentPacketsPerSecond(value: number): void;

  getTargetReceivedBytesPerSecond(): number;
  setTargetReceivedBytesPerSecond(value: number): void;

  getTargetReceivedPacketsPerSecond(): number;
  setTargetReceivedPacketsPerSecond(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NetworkUtilization.AsObject;
  static toObject(includeInstance: boolean, msg: NetworkUtilization): NetworkUtilization.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NetworkUtilization, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NetworkUtilization;
  static deserializeBinaryFromReader(message: NetworkUtilization, reader: jspb.BinaryReader): NetworkUtilization;
}

export namespace NetworkUtilization {
  export type AsObject = {
    targetSentBytesPerSecond: number,
    targetSentPacketsPerSecond: number,
    targetReceivedBytesPerSecond: number,
    targetReceivedPacketsPerSecond: number,
  }
}

export class Network extends jspb.Message {
  clearForwardedPortsList(): void;
  getForwardedPortsList(): Array<string>;
  setForwardedPortsList(value: Array<string>): void;
  addForwardedPorts(value: string, index?: number): string;

  getInstanceTag(): string;
  setInstanceTag(value: string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Network.AsObject;
  static toObject(includeInstance: boolean, msg: Network): Network.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Network, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Network;
  static deserializeBinaryFromReader(message: Network, reader: jspb.BinaryReader): Network;
}

export namespace Network {
  export type AsObject = {
    forwardedPortsList: Array<string>,
    instanceTag: string,
    name: string,
  }
}

export class Resources extends jspb.Message {
  getCpu(): number;
  setCpu(value: number): void;

  getDiskGb(): number;
  setDiskGb(value: number): void;

  getMemoryGb(): number;
  setMemoryGb(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Resources.AsObject;
  static toObject(includeInstance: boolean, msg: Resources): Resources.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Resources, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Resources;
  static deserializeBinaryFromReader(message: Resources, reader: jspb.BinaryReader): Resources;
}

export namespace Resources {
  export type AsObject = {
    cpu: number,
    diskGb: number,
    memoryGb: number,
  }
}

export interface InboundServiceTypeMap {
  INBOUND_SERVICE_UNSPECIFIED: 0;
  INBOUND_SERVICE_MAIL: 1;
  INBOUND_SERVICE_MAIL_BOUNCE: 2;
  INBOUND_SERVICE_XMPP_ERROR: 3;
  INBOUND_SERVICE_XMPP_MESSAGE: 4;
  INBOUND_SERVICE_XMPP_SUBSCRIBE: 5;
  INBOUND_SERVICE_XMPP_PRESENCE: 6;
  INBOUND_SERVICE_CHANNEL_PRESENCE: 7;
  INBOUND_SERVICE_WARMUP: 9;
}

export const InboundServiceType: InboundServiceTypeMap;

export interface ServingStatusMap {
  SERVING_STATUS_UNSPECIFIED: 0;
  SERVING: 1;
  STOPPED: 2;
}

export const ServingStatus: ServingStatusMap;

