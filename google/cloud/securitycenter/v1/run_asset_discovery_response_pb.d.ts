// package: google.cloud.securitycenter.v1
// file: google/cloud/securitycenter/v1/run_asset_discovery_response.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";

export class RunAssetDiscoveryResponse extends jspb.Message {
  getState(): RunAssetDiscoveryResponse.StateMap[keyof RunAssetDiscoveryResponse.StateMap];
  setState(value: RunAssetDiscoveryResponse.StateMap[keyof RunAssetDiscoveryResponse.StateMap]): void;

  hasDuration(): boolean;
  clearDuration(): void;
  getDuration(): google_protobuf_duration_pb.Duration | undefined;
  setDuration(value?: google_protobuf_duration_pb.Duration): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RunAssetDiscoveryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RunAssetDiscoveryResponse): RunAssetDiscoveryResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RunAssetDiscoveryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RunAssetDiscoveryResponse;
  static deserializeBinaryFromReader(message: RunAssetDiscoveryResponse, reader: jspb.BinaryReader): RunAssetDiscoveryResponse;
}

export namespace RunAssetDiscoveryResponse {
  export type AsObject = {
    state: RunAssetDiscoveryResponse.StateMap[keyof RunAssetDiscoveryResponse.StateMap],
    duration?: google_protobuf_duration_pb.Duration.AsObject,
  }

  export interface StateMap {
    STATE_UNSPECIFIED: 0;
    COMPLETED: 1;
    SUPERSEDED: 2;
    TERMINATED: 3;
  }

  export const State: StateMap;
}

