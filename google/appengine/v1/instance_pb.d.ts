// package: google.appengine.v1
// file: google/appengine/v1/instance.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Instance extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getId(): string;
  setId(value: string): void;

  getAppEngineRelease(): string;
  setAppEngineRelease(value: string): void;

  getAvailability(): Instance.AvailabilityMap[keyof Instance.AvailabilityMap];
  setAvailability(value: Instance.AvailabilityMap[keyof Instance.AvailabilityMap]): void;

  getVmName(): string;
  setVmName(value: string): void;

  getVmZoneName(): string;
  setVmZoneName(value: string): void;

  getVmId(): string;
  setVmId(value: string): void;

  hasStartTime(): boolean;
  clearStartTime(): void;
  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getRequests(): number;
  setRequests(value: number): void;

  getErrors(): number;
  setErrors(value: number): void;

  getQps(): number;
  setQps(value: number): void;

  getAverageLatency(): number;
  setAverageLatency(value: number): void;

  getMemoryUsage(): number;
  setMemoryUsage(value: number): void;

  getVmStatus(): string;
  setVmStatus(value: string): void;

  getVmDebugEnabled(): boolean;
  setVmDebugEnabled(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Instance.AsObject;
  static toObject(includeInstance: boolean, msg: Instance): Instance.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Instance, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Instance;
  static deserializeBinaryFromReader(message: Instance, reader: jspb.BinaryReader): Instance;
}

export namespace Instance {
  export type AsObject = {
    name: string,
    id: string,
    appEngineRelease: string,
    availability: Instance.AvailabilityMap[keyof Instance.AvailabilityMap],
    vmName: string,
    vmZoneName: string,
    vmId: string,
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    requests: number,
    errors: number,
    qps: number,
    averageLatency: number,
    memoryUsage: number,
    vmStatus: string,
    vmDebugEnabled: boolean,
  }

  export interface AvailabilityMap {
    UNSPECIFIED: 0;
    RESIDENT: 1;
    DYNAMIC: 2;
  }

  export const Availability: AvailabilityMap;
}

