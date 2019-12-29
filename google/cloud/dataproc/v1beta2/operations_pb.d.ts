// package: google.cloud.dataproc.v1beta2
// file: google/cloud/dataproc/v1beta2/operations.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";

export class ClusterOperationStatus extends jspb.Message {
  getState(): ClusterOperationStatus.StateMap[keyof ClusterOperationStatus.StateMap];
  setState(value: ClusterOperationStatus.StateMap[keyof ClusterOperationStatus.StateMap]): void;

  getInnerState(): string;
  setInnerState(value: string): void;

  getDetails(): string;
  setDetails(value: string): void;

  hasStateStartTime(): boolean;
  clearStateStartTime(): void;
  getStateStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStateStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClusterOperationStatus.AsObject;
  static toObject(includeInstance: boolean, msg: ClusterOperationStatus): ClusterOperationStatus.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClusterOperationStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClusterOperationStatus;
  static deserializeBinaryFromReader(message: ClusterOperationStatus, reader: jspb.BinaryReader): ClusterOperationStatus;
}

export namespace ClusterOperationStatus {
  export type AsObject = {
    state: ClusterOperationStatus.StateMap[keyof ClusterOperationStatus.StateMap],
    innerState: string,
    details: string,
    stateStartTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export interface StateMap {
    UNKNOWN: 0;
    PENDING: 1;
    RUNNING: 2;
    DONE: 3;
  }

  export const State: StateMap;
}

export class ClusterOperationMetadata extends jspb.Message {
  getClusterName(): string;
  setClusterName(value: string): void;

  getClusterUuid(): string;
  setClusterUuid(value: string): void;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): ClusterOperationStatus | undefined;
  setStatus(value?: ClusterOperationStatus): void;

  clearStatusHistoryList(): void;
  getStatusHistoryList(): Array<ClusterOperationStatus>;
  setStatusHistoryList(value: Array<ClusterOperationStatus>): void;
  addStatusHistory(value?: ClusterOperationStatus, index?: number): ClusterOperationStatus;

  getOperationType(): string;
  setOperationType(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): void;
  clearWarningsList(): void;
  getWarningsList(): Array<string>;
  setWarningsList(value: Array<string>): void;
  addWarnings(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClusterOperationMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: ClusterOperationMetadata): ClusterOperationMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClusterOperationMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClusterOperationMetadata;
  static deserializeBinaryFromReader(message: ClusterOperationMetadata, reader: jspb.BinaryReader): ClusterOperationMetadata;
}

export namespace ClusterOperationMetadata {
  export type AsObject = {
    clusterName: string,
    clusterUuid: string,
    status?: ClusterOperationStatus.AsObject,
    statusHistoryList: Array<ClusterOperationStatus.AsObject>,
    operationType: string,
    description: string,
    labelsMap: Array<[string, string]>,
    warningsList: Array<string>,
  }
}

