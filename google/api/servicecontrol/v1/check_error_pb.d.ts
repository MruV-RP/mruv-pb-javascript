// package: google.api.servicecontrol.v1
// file: google/api/servicecontrol/v1/check_error.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";

export class CheckError extends jspb.Message {
  getCode(): CheckError.CodeMap[keyof CheckError.CodeMap];
  setCode(value: CheckError.CodeMap[keyof CheckError.CodeMap]): void;

  getDetail(): string;
  setDetail(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckError.AsObject;
  static toObject(includeInstance: boolean, msg: CheckError): CheckError.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CheckError, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckError;
  static deserializeBinaryFromReader(message: CheckError, reader: jspb.BinaryReader): CheckError;
}

export namespace CheckError {
  export type AsObject = {
    code: CheckError.CodeMap[keyof CheckError.CodeMap],
    detail: string,
  }

  export interface CodeMap {
    ERROR_CODE_UNSPECIFIED: 0;
    NOT_FOUND: 5;
    PERMISSION_DENIED: 7;
    RESOURCE_EXHAUSTED: 8;
    ABUSER_DETECTED: 103;
    SERVICE_NOT_ACTIVATED: 104;
    BILLING_DISABLED: 107;
    PROJECT_DELETED: 108;
    PROJECT_INVALID: 114;
    IP_ADDRESS_BLOCKED: 109;
    REFERER_BLOCKED: 110;
    CLIENT_APP_BLOCKED: 111;
    API_TARGET_BLOCKED: 122;
    API_KEY_INVALID: 105;
    API_KEY_EXPIRED: 112;
    API_KEY_NOT_FOUND: 113;
    SECURITY_POLICY_VIOLATED: 121;
    INVALID_CREDENTIAL: 123;
    LOCATION_POLICY_VIOLATED: 124;
    CONSUMER_INVALID: 125;
    NAMESPACE_LOOKUP_UNAVAILABLE: 300;
    SERVICE_STATUS_UNAVAILABLE: 301;
    BILLING_STATUS_UNAVAILABLE: 302;
    QUOTA_CHECK_UNAVAILABLE: 303;
    CLOUD_RESOURCE_MANAGER_BACKEND_UNAVAILABLE: 305;
    SECURITY_POLICY_BACKEND_UNAVAILABLE: 306;
    LOCATION_POLICY_BACKEND_UNAVAILABLE: 307;
  }

  export const Code: CodeMap;
}

