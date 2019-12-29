// package: google.cloud.securitycenter.v1beta1
// file: google/cloud/securitycenter/v1beta1/asset.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";
import * as google_cloud_securitycenter_v1beta1_security_marks_pb from "../../../../google/cloud/securitycenter/v1beta1/security_marks_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Asset extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasSecurityCenterProperties(): boolean;
  clearSecurityCenterProperties(): void;
  getSecurityCenterProperties(): Asset.SecurityCenterProperties | undefined;
  setSecurityCenterProperties(value?: Asset.SecurityCenterProperties): void;

  getResourcePropertiesMap(): jspb.Map<string, google_protobuf_struct_pb.Value>;
  clearResourcePropertiesMap(): void;
  hasSecurityMarks(): boolean;
  clearSecurityMarks(): void;
  getSecurityMarks(): google_cloud_securitycenter_v1beta1_security_marks_pb.SecurityMarks | undefined;
  setSecurityMarks(value?: google_cloud_securitycenter_v1beta1_security_marks_pb.SecurityMarks): void;

  hasCreateTime(): boolean;
  clearCreateTime(): void;
  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdateTime(): boolean;
  clearUpdateTime(): void;
  getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Asset.AsObject;
  static toObject(includeInstance: boolean, msg: Asset): Asset.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Asset, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Asset;
  static deserializeBinaryFromReader(message: Asset, reader: jspb.BinaryReader): Asset;
}

export namespace Asset {
  export type AsObject = {
    name: string,
    securityCenterProperties?: Asset.SecurityCenterProperties.AsObject,
    resourcePropertiesMap: Array<[string, google_protobuf_struct_pb.Value.AsObject]>,
    securityMarks?: google_cloud_securitycenter_v1beta1_security_marks_pb.SecurityMarks.AsObject,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export class SecurityCenterProperties extends jspb.Message {
    getResourceName(): string;
    setResourceName(value: string): void;

    getResourceType(): string;
    setResourceType(value: string): void;

    getResourceParent(): string;
    setResourceParent(value: string): void;

    getResourceProject(): string;
    setResourceProject(value: string): void;

    clearResourceOwnersList(): void;
    getResourceOwnersList(): Array<string>;
    setResourceOwnersList(value: Array<string>): void;
    addResourceOwners(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SecurityCenterProperties.AsObject;
    static toObject(includeInstance: boolean, msg: SecurityCenterProperties): SecurityCenterProperties.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SecurityCenterProperties, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SecurityCenterProperties;
    static deserializeBinaryFromReader(message: SecurityCenterProperties, reader: jspb.BinaryReader): SecurityCenterProperties;
  }

  export namespace SecurityCenterProperties {
    export type AsObject = {
      resourceName: string,
      resourceType: string,
      resourceParent: string,
      resourceProject: string,
      resourceOwnersList: Array<string>,
    }
  }
}

