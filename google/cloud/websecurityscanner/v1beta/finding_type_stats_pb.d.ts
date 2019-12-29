// package: google.cloud.websecurityscanner.v1beta
// file: google/cloud/websecurityscanner/v1beta/finding_type_stats.proto

import * as jspb from "google-protobuf";

export class FindingTypeStats extends jspb.Message {
  getFindingType(): string;
  setFindingType(value: string): void;

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
    findingType: string,
    findingCount: number,
  }
}

