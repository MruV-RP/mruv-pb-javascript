// package: google.appengine.v1
// file: google/appengine/v1/service.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";

export class Service extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getId(): string;
  setId(value: string): void;

  hasSplit(): boolean;
  clearSplit(): void;
  getSplit(): TrafficSplit | undefined;
  setSplit(value?: TrafficSplit): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Service.AsObject;
  static toObject(includeInstance: boolean, msg: Service): Service.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Service, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Service;
  static deserializeBinaryFromReader(message: Service, reader: jspb.BinaryReader): Service;
}

export namespace Service {
  export type AsObject = {
    name: string,
    id: string,
    split?: TrafficSplit.AsObject,
  }
}

export class TrafficSplit extends jspb.Message {
  getShardBy(): TrafficSplit.ShardByMap[keyof TrafficSplit.ShardByMap];
  setShardBy(value: TrafficSplit.ShardByMap[keyof TrafficSplit.ShardByMap]): void;

  getAllocationsMap(): jspb.Map<string, number>;
  clearAllocationsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TrafficSplit.AsObject;
  static toObject(includeInstance: boolean, msg: TrafficSplit): TrafficSplit.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TrafficSplit, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TrafficSplit;
  static deserializeBinaryFromReader(message: TrafficSplit, reader: jspb.BinaryReader): TrafficSplit;
}

export namespace TrafficSplit {
  export type AsObject = {
    shardBy: TrafficSplit.ShardByMap[keyof TrafficSplit.ShardByMap],
    allocationsMap: Array<[string, number]>,
  }

  export interface ShardByMap {
    UNSPECIFIED: 0;
    COOKIE: 1;
    IP: 2;
  }

  export const ShardBy: ShardByMap;
}

