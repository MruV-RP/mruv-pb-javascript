// package: google.cloud.websecurityscanner.v1alpha
// file: google/cloud/websecurityscanner/v1alpha/finding.proto

import * as jspb from "google-protobuf";
import * as google_api_resource_pb from "../../../../google/api/resource_pb";
import * as google_cloud_websecurityscanner_v1alpha_finding_addon_pb from "../../../../google/cloud/websecurityscanner/v1alpha/finding_addon_pb";

export class Finding extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getFindingType(): Finding.FindingTypeMap[keyof Finding.FindingTypeMap];
  setFindingType(value: Finding.FindingTypeMap[keyof Finding.FindingTypeMap]): void;

  getHttpMethod(): string;
  setHttpMethod(value: string): void;

  getFuzzedUrl(): string;
  setFuzzedUrl(value: string): void;

  getBody(): string;
  setBody(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getReproductionUrl(): string;
  setReproductionUrl(value: string): void;

  getFrameUrl(): string;
  setFrameUrl(value: string): void;

  getFinalUrl(): string;
  setFinalUrl(value: string): void;

  getTrackingId(): string;
  setTrackingId(value: string): void;

  hasOutdatedLibrary(): boolean;
  clearOutdatedLibrary(): void;
  getOutdatedLibrary(): google_cloud_websecurityscanner_v1alpha_finding_addon_pb.OutdatedLibrary | undefined;
  setOutdatedLibrary(value?: google_cloud_websecurityscanner_v1alpha_finding_addon_pb.OutdatedLibrary): void;

  hasViolatingResource(): boolean;
  clearViolatingResource(): void;
  getViolatingResource(): google_cloud_websecurityscanner_v1alpha_finding_addon_pb.ViolatingResource | undefined;
  setViolatingResource(value?: google_cloud_websecurityscanner_v1alpha_finding_addon_pb.ViolatingResource): void;

  hasVulnerableHeaders(): boolean;
  clearVulnerableHeaders(): void;
  getVulnerableHeaders(): google_cloud_websecurityscanner_v1alpha_finding_addon_pb.VulnerableHeaders | undefined;
  setVulnerableHeaders(value?: google_cloud_websecurityscanner_v1alpha_finding_addon_pb.VulnerableHeaders): void;

  hasVulnerableParameters(): boolean;
  clearVulnerableParameters(): void;
  getVulnerableParameters(): google_cloud_websecurityscanner_v1alpha_finding_addon_pb.VulnerableParameters | undefined;
  setVulnerableParameters(value?: google_cloud_websecurityscanner_v1alpha_finding_addon_pb.VulnerableParameters): void;

  hasXss(): boolean;
  clearXss(): void;
  getXss(): google_cloud_websecurityscanner_v1alpha_finding_addon_pb.Xss | undefined;
  setXss(value?: google_cloud_websecurityscanner_v1alpha_finding_addon_pb.Xss): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Finding.AsObject;
  static toObject(includeInstance: boolean, msg: Finding): Finding.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Finding, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Finding;
  static deserializeBinaryFromReader(message: Finding, reader: jspb.BinaryReader): Finding;
}

export namespace Finding {
  export type AsObject = {
    name: string,
    findingType: Finding.FindingTypeMap[keyof Finding.FindingTypeMap],
    httpMethod: string,
    fuzzedUrl: string,
    body: string,
    description: string,
    reproductionUrl: string,
    frameUrl: string,
    finalUrl: string,
    trackingId: string,
    outdatedLibrary?: google_cloud_websecurityscanner_v1alpha_finding_addon_pb.OutdatedLibrary.AsObject,
    violatingResource?: google_cloud_websecurityscanner_v1alpha_finding_addon_pb.ViolatingResource.AsObject,
    vulnerableHeaders?: google_cloud_websecurityscanner_v1alpha_finding_addon_pb.VulnerableHeaders.AsObject,
    vulnerableParameters?: google_cloud_websecurityscanner_v1alpha_finding_addon_pb.VulnerableParameters.AsObject,
    xss?: google_cloud_websecurityscanner_v1alpha_finding_addon_pb.Xss.AsObject,
  }

  export interface FindingTypeMap {
    FINDING_TYPE_UNSPECIFIED: 0;
    MIXED_CONTENT: 1;
    OUTDATED_LIBRARY: 2;
    ROSETTA_FLASH: 5;
    XSS_CALLBACK: 3;
    XSS_ERROR: 4;
    CLEAR_TEXT_PASSWORD: 6;
    INVALID_CONTENT_TYPE: 7;
    XSS_ANGULAR_CALLBACK: 8;
    INVALID_HEADER: 9;
    MISSPELLED_SECURITY_HEADER_NAME: 10;
    MISMATCHING_SECURITY_HEADER_VALUES: 11;
  }

  export const FindingType: FindingTypeMap;
}

