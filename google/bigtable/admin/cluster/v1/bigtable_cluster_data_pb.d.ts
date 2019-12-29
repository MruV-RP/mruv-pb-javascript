// package: google.bigtable.admin.cluster.v1
// file: google/bigtable/admin/cluster/v1/bigtable_cluster_data.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";
import * as google_longrunning_operations_pb from "../../../../../google/longrunning/operations_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Zone extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDisplayName(): string;
  setDisplayName(value: string): void;

  getStatus(): Zone.StatusMap[keyof Zone.StatusMap];
  setStatus(value: Zone.StatusMap[keyof Zone.StatusMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Zone.AsObject;
  static toObject(includeInstance: boolean, msg: Zone): Zone.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Zone, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Zone;
  static deserializeBinaryFromReader(message: Zone, reader: jspb.BinaryReader): Zone;
}

export namespace Zone {
  export type AsObject = {
    name: string,
    displayName: string,
    status: Zone.StatusMap[keyof Zone.StatusMap],
  }

  export interface StatusMap {
    UNKNOWN: 0;
    OK: 1;
    PLANNED_MAINTENANCE: 2;
    EMERGENCY_MAINENANCE: 3;
  }

  export const Status: StatusMap;
}

export class Cluster extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasCurrentOperation(): boolean;
  clearCurrentOperation(): void;
  getCurrentOperation(): google_longrunning_operations_pb.Operation | undefined;
  setCurrentOperation(value?: google_longrunning_operations_pb.Operation): void;

  getDisplayName(): string;
  setDisplayName(value: string): void;

  getServeNodes(): number;
  setServeNodes(value: number): void;

  getDefaultStorageType(): StorageTypeMap[keyof StorageTypeMap];
  setDefaultStorageType(value: StorageTypeMap[keyof StorageTypeMap]): void;

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
    currentOperation?: google_longrunning_operations_pb.Operation.AsObject,
    displayName: string,
    serveNodes: number,
    defaultStorageType: StorageTypeMap[keyof StorageTypeMap],
  }
}

export interface StorageTypeMap {
  STORAGE_UNSPECIFIED: 0;
  STORAGE_SSD: 1;
  STORAGE_HDD: 2;
}

export const StorageType: StorageTypeMap;

