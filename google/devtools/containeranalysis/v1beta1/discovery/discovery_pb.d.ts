// package: grafeas.v1beta1.discovery
// file: google/devtools/containeranalysis/v1beta1/discovery/discovery.proto

import * as jspb from "google-protobuf";
import * as google_devtools_containeranalysis_v1beta1_common_common_pb from "../../../../../google/devtools/containeranalysis/v1beta1/common/common_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_rpc_status_pb from "../../../../../google/rpc/status_pb";

export class Discovery extends jspb.Message {
  getAnalysisKind(): google_devtools_containeranalysis_v1beta1_common_common_pb.NoteKindMap[keyof google_devtools_containeranalysis_v1beta1_common_common_pb.NoteKindMap];
  setAnalysisKind(value: google_devtools_containeranalysis_v1beta1_common_common_pb.NoteKindMap[keyof google_devtools_containeranalysis_v1beta1_common_common_pb.NoteKindMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Discovery.AsObject;
  static toObject(includeInstance: boolean, msg: Discovery): Discovery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Discovery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Discovery;
  static deserializeBinaryFromReader(message: Discovery, reader: jspb.BinaryReader): Discovery;
}

export namespace Discovery {
  export type AsObject = {
    analysisKind: google_devtools_containeranalysis_v1beta1_common_common_pb.NoteKindMap[keyof google_devtools_containeranalysis_v1beta1_common_common_pb.NoteKindMap],
  }
}

export class Details extends jspb.Message {
  hasDiscovered(): boolean;
  clearDiscovered(): void;
  getDiscovered(): Discovered | undefined;
  setDiscovered(value?: Discovered): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Details.AsObject;
  static toObject(includeInstance: boolean, msg: Details): Details.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Details, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Details;
  static deserializeBinaryFromReader(message: Details, reader: jspb.BinaryReader): Details;
}

export namespace Details {
  export type AsObject = {
    discovered?: Discovered.AsObject,
  }
}

export class Discovered extends jspb.Message {
  getContinuousAnalysis(): Discovered.ContinuousAnalysisMap[keyof Discovered.ContinuousAnalysisMap];
  setContinuousAnalysis(value: Discovered.ContinuousAnalysisMap[keyof Discovered.ContinuousAnalysisMap]): void;

  hasLastAnalysisTime(): boolean;
  clearLastAnalysisTime(): void;
  getLastAnalysisTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastAnalysisTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getAnalysisStatus(): Discovered.AnalysisStatusMap[keyof Discovered.AnalysisStatusMap];
  setAnalysisStatus(value: Discovered.AnalysisStatusMap[keyof Discovered.AnalysisStatusMap]): void;

  hasAnalysisStatusError(): boolean;
  clearAnalysisStatusError(): void;
  getAnalysisStatusError(): google_rpc_status_pb.Status | undefined;
  setAnalysisStatusError(value?: google_rpc_status_pb.Status): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Discovered.AsObject;
  static toObject(includeInstance: boolean, msg: Discovered): Discovered.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Discovered, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Discovered;
  static deserializeBinaryFromReader(message: Discovered, reader: jspb.BinaryReader): Discovered;
}

export namespace Discovered {
  export type AsObject = {
    continuousAnalysis: Discovered.ContinuousAnalysisMap[keyof Discovered.ContinuousAnalysisMap],
    lastAnalysisTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    analysisStatus: Discovered.AnalysisStatusMap[keyof Discovered.AnalysisStatusMap],
    analysisStatusError?: google_rpc_status_pb.Status.AsObject,
  }

  export interface ContinuousAnalysisMap {
    CONTINUOUS_ANALYSIS_UNSPECIFIED: 0;
    ACTIVE: 1;
    INACTIVE: 2;
  }

  export const ContinuousAnalysis: ContinuousAnalysisMap;

  export interface AnalysisStatusMap {
    ANALYSIS_STATUS_UNSPECIFIED: 0;
    PENDING: 1;
    SCANNING: 2;
    FINISHED_SUCCESS: 3;
    FINISHED_FAILED: 4;
    FINISHED_UNSUPPORTED: 5;
  }

  export const AnalysisStatus: AnalysisStatusMap;
}

