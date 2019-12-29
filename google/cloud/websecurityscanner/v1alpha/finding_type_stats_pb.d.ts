// package: google.cloud.websecurityscanner.v1alpha
// file: google/cloud/websecurityscanner/v1alpha/finding_type_stats.proto

import * as jspb from "google-protobuf";
import * as google_cloud_websecurityscanner_v1alpha_finding_pb from "../../../../google/cloud/websecurityscanner/v1alpha/finding_pb";

export class FindingTypeStats extends jspb.Message {
  getFindingType(): google_cloud_websecurityscanner_v1alpha_finding_pb.Finding.FindingTypeMap[keyof google_cloud_websecurityscanner_v1alpha_finding_pb.Finding.FindingTypeMap];
  setFindingType(value: google_cloud_websecurityscanner_v1alpha_finding_pb.Finding.FindingTypeMap[keyof google_cloud_websecurityscanner_v1alpha_finding_pb.Finding.FindingTypeMap]): void;

  getFindingCount(): number;
  setFindingCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindingTypeStats.AsObject;
  static toObject(includeInstance: boolean, msg: FindingTypeStats): FindingTypeStats.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FindingTypeStats, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindingTypeStats;
  static deserializeBinaryFromReader(message: FindingTypeStats, reader: jspb.BinaryReader): FindingTypeStats;
}

export namespace FindingTypeStats {
  export type AsObject = {
    findingType: google_cloud_websecurityscanner_v1alpha_finding_pb.Finding.FindingTypeMap[keyof google_cloud_websecurityscanner_v1alpha_finding_pb.Finding.FindingTypeMap],
    findingCount: number,
  }
}

