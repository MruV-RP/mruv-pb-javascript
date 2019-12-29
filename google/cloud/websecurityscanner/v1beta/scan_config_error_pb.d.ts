// package: google.cloud.websecurityscanner.v1beta
// file: google/cloud/websecurityscanner/v1beta/scan_config_error.proto

import * as jspb from "google-protobuf";

export class ScanConfigError extends jspb.Message {
  getCode(): ScanConfigError.CodeMap[keyof ScanConfigError.CodeMap];
  setCode(value: ScanConfigError.CodeMap[keyof ScanConfigError.CodeMap]): void;

  getFieldName(): string;
  setFieldName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScanConfigError.AsObject;
  static toObject(includeInstance: boolean, msg: ScanConfigError): ScanConfigError.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScanConfigError, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScanConfigError;
  static deserializeBinaryFromReader(message: ScanConfigError, reader: jspb.BinaryReader): ScanConfigError;
}

export namespace ScanConfigError {
  export type AsObject = {
    code: ScanConfigError.CodeMap[keyof ScanConfigError.CodeMap],
    fieldName: string,
  }

  export interface CodeMap {
    CODE_UNSPECIFIED: 0;
    OK: 0;
    INTERNAL_ERROR: 1;
    APPENGINE_API_BACKEND_ERROR: 2;
    APPENGINE_API_NOT_ACCESSIBLE: 3;
    APPENGINE_DEFAULT_HOST_MISSING: 4;
    CANNOT_USE_GOOGLE_COM_ACCOUNT: 6;
    CANNOT_USE_OWNER_ACCOUNT: 7;
    COMPUTE_API_BACKEND_ERROR: 8;
    COMPUTE_API_NOT_ACCESSIBLE: 9;
    CUSTOM_LOGIN_URL_DOES_NOT_BELONG_TO_CURRENT_PROJECT: 10;
    CUSTOM_LOGIN_URL_MALFORMED: 11;
    CUSTOM_LOGIN_URL_MAPPED_TO_NON_ROUTABLE_ADDRESS: 12;
    CUSTOM_LOGIN_URL_MAPPED_TO_UNRESERVED_ADDRESS: 13;
    CUSTOM_LOGIN_URL_HAS_NON_ROUTABLE_IP_ADDRESS: 14;
    CUSTOM_LOGIN_URL_HAS_UNRESERVED_IP_ADDRESS: 15;
    DUPLICATE_SCAN_NAME: 16;
    INVALID_FIELD_VALUE: 18;
    FAILED_TO_AUTHENTICATE_TO_TARGET: 19;
    FINDING_TYPE_UNSPECIFIED: 20;
    FORBIDDEN_TO_SCAN_COMPUTE: 21;
    FORBIDDEN_UPDATE_TO_MANAGED_SCAN: 43;
    MALFORMED_FILTER: 22;
    MALFORMED_RESOURCE_NAME: 23;
    PROJECT_INACTIVE: 24;
    REQUIRED_FIELD: 25;
    RESOURCE_NAME_INCONSISTENT: 26;
    SCAN_ALREADY_RUNNING: 27;
    SCAN_NOT_RUNNING: 28;
    SEED_URL_DOES_NOT_BELONG_TO_CURRENT_PROJECT: 29;
    SEED_URL_MALFORMED: 30;
    SEED_URL_MAPPED_TO_NON_ROUTABLE_ADDRESS: 31;
    SEED_URL_MAPPED_TO_UNRESERVED_ADDRESS: 32;
    SEED_URL_HAS_NON_ROUTABLE_IP_ADDRESS: 33;
    SEED_URL_HAS_UNRESERVED_IP_ADDRESS: 35;
    SERVICE_ACCOUNT_NOT_CONFIGURED: 36;
    TOO_MANY_SCANS: 37;
    UNABLE_TO_RESOLVE_PROJECT_INFO: 38;
    UNSUPPORTED_BLACKLIST_PATTERN_FORMAT: 39;
    UNSUPPORTED_FILTER: 40;
    UNSUPPORTED_FINDING_TYPE: 41;
    UNSUPPORTED_URL_SCHEME: 42;
  }

  export const Code: CodeMap;
}

