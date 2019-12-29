// package: google.cloud.talent.v4beta1
// file: google/cloud/talent/v4beta1/tenant.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";
import * as google_api_field_behavior_pb from "../../../../google/api/field_behavior_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Tenant extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getExternalId(): string;
  setExternalId(value: string): void;

  getUsageType(): Tenant.DataUsageTypeMap[keyof Tenant.DataUsageTypeMap];
  setUsageType(value: Tenant.DataUsageTypeMap[keyof Tenant.DataUsageTypeMap]): void;

  clearKeywordSearchableProfileCustomAttributesList(): void;
  getKeywordSearchableProfileCustomAttributesList(): Array<string>;
  setKeywordSearchableProfileCustomAttributesList(value: Array<string>): void;
  addKeywordSearchableProfileCustomAttributes(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Tenant.AsObject;
  static toObject(includeInstance: boolean, msg: Tenant): Tenant.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Tenant, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Tenant;
  static deserializeBinaryFromReader(message: Tenant, reader: jspb.BinaryReader): Tenant;
}

export namespace Tenant {
  export type AsObject = {
    name: string,
    externalId: string,
    usageType: Tenant.DataUsageTypeMap[keyof Tenant.DataUsageTypeMap],
    keywordSearchableProfileCustomAttributesList: Array<string>,
  }

  export interface DataUsageTypeMap {
    DATA_USAGE_TYPE_UNSPECIFIED: 0;
    AGGREGATED: 1;
    ISOLATED: 2;
  }

  export const DataUsageType: DataUsageTypeMap;
}

