// package: google.cloud.dataproc.v1
// file: google/cloud/dataproc/v1/autoscaling_policies.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";
import * as google_api_field_behavior_pb from "../../../../google/api/field_behavior_pb";
import * as google_api_resource_pb from "../../../../google/api/resource_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_api_client_pb from "../../../../google/api/client_pb";

export class AutoscalingPolicy extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  hasBasicAlgorithm(): boolean;
  clearBasicAlgorithm(): void;
  getBasicAlgorithm(): BasicAutoscalingAlgorithm | undefined;
  setBasicAlgorithm(value?: BasicAutoscalingAlgorithm): void;

  hasWorkerConfig(): boolean;
  clearWorkerConfig(): void;
  getWorkerConfig(): InstanceGroupAutoscalingPolicyConfig | undefined;
  setWorkerConfig(value?: InstanceGroupAutoscalingPolicyConfig): void;

  hasSecondaryWorkerConfig(): boolean;
  clearSecondaryWorkerConfig(): void;
  getSecondaryWorkerConfig(): InstanceGroupAutoscalingPolicyConfig | undefined;
  setSecondaryWorkerConfig(value?: InstanceGroupAutoscalingPolicyConfig): void;

  getAlgorithmCase(): AutoscalingPolicy.AlgorithmCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AutoscalingPolicy.AsObject;
  static toObject(includeInstance: boolean, msg: AutoscalingPolicy): AutoscalingPolicy.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AutoscalingPolicy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AutoscalingPolicy;
  static deserializeBinaryFromReader(message: AutoscalingPolicy, reader: jspb.BinaryReader): AutoscalingPolicy;
}

export namespace AutoscalingPolicy {
  export type AsObject = {
    id: string,
    name: string,
    basicAlgorithm?: BasicAutoscalingAlgorithm.AsObject,
    workerConfig?: InstanceGroupAutoscalingPolicyConfig.AsObject,
    secondaryWorkerConfig?: InstanceGroupAutoscalingPolicyConfig.AsObject,
  }

  export enum AlgorithmCase {
    ALGORITHM_NOT_SET = 0,
    BASIC_ALGORITHM = 3,
  }
}

export class BasicAutoscalingAlgorithm extends jspb.Message {
  hasYarnConfig(): boolean;
  clearYarnConfig(): void;
  getYarnConfig(): BasicYarnAutoscalingConfig | undefined;
  setYarnConfig(value?: BasicYarnAutoscalingConfig): void;

  hasCooldownPeriod(): boolean;
  clearCooldownPeriod(): void;
  getCooldownPeriod(): google_protobuf_duration_pb.Duration | undefined;
  setCooldownPeriod(value?: google_protobuf_duration_pb.Duration): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BasicAutoscalingAlgorithm.AsObject;
  static toObject(includeInstance: boolean, msg: BasicAutoscalingAlgorithm): BasicAutoscalingAlgorithm.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BasicAutoscalingAlgorithm, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BasicAutoscalingAlgorithm;
  static deserializeBinaryFromReader(message: BasicAutoscalingAlgorithm, reader: jspb.BinaryReader): BasicAutoscalingAlgorithm;
}

export namespace BasicAutoscalingAlgorithm {
  export type AsObject = {
    yarnConfig?: BasicYarnAutoscalingConfig.AsObject,
    cooldownPeriod?: google_protobuf_duration_pb.Duration.AsObject,
  }
}

export class BasicYarnAutoscalingConfig extends jspb.Message {
  hasGracefulDecommissionTimeout(): boolean;
  clearGracefulDecommissionTimeout(): void;
  getGracefulDecommissionTimeout(): google_protobuf_duration_pb.Duration | undefined;
  setGracefulDecommissionTimeout(value?: google_protobuf_duration_pb.Duration): void;

  getScaleUpFactor(): number;
  setScaleUpFactor(value: number): void;

  getScaleDownFactor(): number;
  setScaleDownFactor(value: number): void;

  getScaleUpMinWorkerFraction(): number;
  setScaleUpMinWorkerFraction(value: number): void;

  getScaleDownMinWorkerFraction(): number;
  setScaleDownMinWorkerFraction(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BasicYarnAutoscalingConfig.AsObject;
  static toObject(includeInstance: boolean, msg: BasicYarnAutoscalingConfig): BasicYarnAutoscalingConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BasicYarnAutoscalingConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BasicYarnAutoscalingConfig;
  static deserializeBinaryFromReader(message: BasicYarnAutoscalingConfig, reader: jspb.BinaryReader): BasicYarnAutoscalingConfig;
}

export namespace BasicYarnAutoscalingConfig {
  export type AsObject = {
    gracefulDecommissionTimeout?: google_protobuf_duration_pb.Duration.AsObject,
    scaleUpFactor: number,
    scaleDownFactor: number,
    scaleUpMinWorkerFraction: number,
    scaleDownMinWorkerFraction: number,
  }
}

export class InstanceGroupAutoscalingPolicyConfig extends jspb.Message {
  getMinInstances(): number;
  setMinInstances(value: number): void;

  getMaxInstances(): number;
  setMaxInstances(value: number): void;

  getWeight(): number;
  setWeight(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InstanceGroupAutoscalingPolicyConfig.AsObject;
  static toObject(includeInstance: boolean, msg: InstanceGroupAutoscalingPolicyConfig): InstanceGroupAutoscalingPolicyConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InstanceGroupAutoscalingPolicyConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InstanceGroupAutoscalingPolicyConfig;
  static deserializeBinaryFromReader(message: InstanceGroupAutoscalingPolicyConfig, reader: jspb.BinaryReader): InstanceGroupAutoscalingPolicyConfig;
}

export namespace InstanceGroupAutoscalingPolicyConfig {
  export type AsObject = {
    minInstances: number,
    maxInstances: number,
    weight: number,
  }
}

export class CreateAutoscalingPolicyRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  hasPolicy(): boolean;
  clearPolicy(): void;
  getPolicy(): AutoscalingPolicy | undefined;
  setPolicy(value?: AutoscalingPolicy): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAutoscalingPolicyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAutoscalingPolicyRequest): CreateAutoscalingPolicyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateAutoscalingPolicyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAutoscalingPolicyRequest;
  static deserializeBinaryFromReader(message: CreateAutoscalingPolicyRequest, reader: jspb.BinaryReader): CreateAutoscalingPolicyRequest;
}

export namespace CreateAutoscalingPolicyRequest {
  export type AsObject = {
    parent: string,
    policy?: AutoscalingPolicy.AsObject,
  }
}

export class GetAutoscalingPolicyRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAutoscalingPolicyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAutoscalingPolicyRequest): GetAutoscalingPolicyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAutoscalingPolicyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAutoscalingPolicyRequest;
  static deserializeBinaryFromReader(message: GetAutoscalingPolicyRequest, reader: jspb.BinaryReader): GetAutoscalingPolicyRequest;
}

export namespace GetAutoscalingPolicyRequest {
  export type AsObject = {
    name: string,
  }
}

export class UpdateAutoscalingPolicyRequest extends jspb.Message {
  hasPolicy(): boolean;
  clearPolicy(): void;
  getPolicy(): AutoscalingPolicy | undefined;
  setPolicy(value?: AutoscalingPolicy): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAutoscalingPolicyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAutoscalingPolicyRequest): UpdateAutoscalingPolicyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateAutoscalingPolicyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAutoscalingPolicyRequest;
  static deserializeBinaryFromReader(message: UpdateAutoscalingPolicyRequest, reader: jspb.BinaryReader): UpdateAutoscalingPolicyRequest;
}

export namespace UpdateAutoscalingPolicyRequest {
  export type AsObject = {
    policy?: AutoscalingPolicy.AsObject,
  }
}

export class DeleteAutoscalingPolicyRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAutoscalingPolicyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAutoscalingPolicyRequest): DeleteAutoscalingPolicyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteAutoscalingPolicyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAutoscalingPolicyRequest;
  static deserializeBinaryFromReader(message: DeleteAutoscalingPolicyRequest, reader: jspb.BinaryReader): DeleteAutoscalingPolicyRequest;
}

export namespace DeleteAutoscalingPolicyRequest {
  export type AsObject = {
    name: string,
  }
}

export class ListAutoscalingPoliciesRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAutoscalingPoliciesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListAutoscalingPoliciesRequest): ListAutoscalingPoliciesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAutoscalingPoliciesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAutoscalingPoliciesRequest;
  static deserializeBinaryFromReader(message: ListAutoscalingPoliciesRequest, reader: jspb.BinaryReader): ListAutoscalingPoliciesRequest;
}

export namespace ListAutoscalingPoliciesRequest {
  export type AsObject = {
    parent: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListAutoscalingPoliciesResponse extends jspb.Message {
  clearPoliciesList(): void;
  getPoliciesList(): Array<AutoscalingPolicy>;
  setPoliciesList(value: Array<AutoscalingPolicy>): void;
  addPolicies(value?: AutoscalingPolicy, index?: number): AutoscalingPolicy;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAutoscalingPoliciesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListAutoscalingPoliciesResponse): ListAutoscalingPoliciesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAutoscalingPoliciesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAutoscalingPoliciesResponse;
  static deserializeBinaryFromReader(message: ListAutoscalingPoliciesResponse, reader: jspb.BinaryReader): ListAutoscalingPoliciesResponse;
}

export namespace ListAutoscalingPoliciesResponse {
  export type AsObject = {
    policiesList: Array<AutoscalingPolicy.AsObject>,
    nextPageToken: string,
  }
}

