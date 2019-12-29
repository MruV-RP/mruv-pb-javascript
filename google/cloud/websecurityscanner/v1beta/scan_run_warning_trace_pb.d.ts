// package: google.cloud.websecurityscanner.v1beta
// file: google/cloud/websecurityscanner/v1beta/scan_run_warning_trace.proto

import * as jspb from "google-protobuf";

export class ScanRunWarningTrace extends jspb.Message {
  getCode(): ScanRunWarningTrace.CodeMap[keyof ScanRunWarningTrace.CodeMap];
  setCode(value: ScanRunWarningTrace.CodeMap[keyof ScanRunWarningTrace.CodeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScanRunWarningTrace.AsObject;
  static toObject(includeInstance: boolean, msg: ScanRunWarningTrace): ScanRunWarningTrace.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScanRunWarningTrace, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScanRunWarningTrace;
  static deserializeBinaryFromReader(message: ScanRunWarningTrace, reader: jspb.BinaryReader): ScanRunWarningTrace;
}

export namespace ScanRunWarningTrace {
  export type AsObject = {
    code: ScanRunWarningTrace.CodeMap[keyof ScanRunWarningTrace.CodeMap],
  }

  export interface CodeMap {
    CODE_UNSPECIFIED: 0;
    INSUFFICIENT_CRAWL_RESULTS: 1;
    TOO_MANY_CRAWL_RESULTS: 2;
    TOO_MANY_FUZZ_TASKS: 3;
    BLOCKED_BY_IAP: 4;
  }

  export const Code: CodeMap;
}

