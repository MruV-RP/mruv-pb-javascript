// package: google.cloud.websecurityscanner.v1beta
// file: google/cloud/websecurityscanner/v1beta/scan_run_error_trace.proto

import * as jspb from "google-protobuf";
import * as google_cloud_websecurityscanner_v1beta_scan_config_error_pb from "../../../../google/cloud/websecurityscanner/v1beta/scan_config_error_pb";

export class ScanRunErrorTrace extends jspb.Message {
  getCode(): ScanRunErrorTrace.CodeMap[keyof ScanRunErrorTrace.CodeMap];
  setCode(value: ScanRunErrorTrace.CodeMap[keyof ScanRunErrorTrace.CodeMap]): void;

  hasScanConfigError(): boolean;
  clearScanConfigError(): void;
  getScanConfigError(): google_cloud_websecurityscanner_v1beta_scan_config_error_pb.ScanConfigError | undefined;
  setScanConfigError(value?: google_cloud_websecurityscanner_v1beta_scan_config_error_pb.ScanConfigError): void;

  getMostCommonHttpErrorCode(): number;
  setMostCommonHttpErrorCode(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScanRunErrorTrace.AsObject;
  static toObject(includeInstance: boolean, msg: ScanRunErrorTrace): ScanRunErrorTrace.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScanRunErrorTrace, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScanRunErrorTrace;
  static deserializeBinaryFromReader(message: ScanRunErrorTrace, reader: jspb.BinaryReader): ScanRunErrorTrace;
}

export namespace ScanRunErrorTrace {
  export type AsObject = {
    code: ScanRunErrorTrace.CodeMap[keyof ScanRunErrorTrace.CodeMap],
    scanConfigError?: google_cloud_websecurityscanner_v1beta_scan_config_error_pb.ScanConfigError.AsObject,
    mostCommonHttpErrorCode: number,
  }

  export interface CodeMap {
    CODE_UNSPECIFIED: 0;
    INTERNAL_ERROR: 1;
    SCAN_CONFIG_ISSUE: 2;
    AUTHENTICATION_CONFIG_ISSUE: 3;
    TIMED_OUT_WHILE_SCANNING: 4;
    TOO_MANY_REDIRECTS: 5;
    TOO_MANY_HTTP_ERRORS: 6;
  }

  export const Code: CodeMap;
}

