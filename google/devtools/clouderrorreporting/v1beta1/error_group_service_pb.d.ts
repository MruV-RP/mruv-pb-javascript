// package: google.devtools.clouderrorreporting.v1beta1
// file: google/devtools/clouderrorreporting/v1beta1/error_group_service.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";
import * as google_api_client_pb from "../../../../google/api/client_pb";
import * as google_api_field_behavior_pb from "../../../../google/api/field_behavior_pb";
import * as google_api_resource_pb from "../../../../google/api/resource_pb";
import * as google_devtools_clouderrorreporting_v1beta1_common_pb from "../../../../google/devtools/clouderrorreporting/v1beta1/common_pb";

export class GetGroupRequest extends jspb.Message {
  getGroupName(): string;
  setGroupName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetGroupRequest): GetGroupRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetGroupRequest;
  static deserializeBinaryFromReader(message: GetGroupRequest, reader: jspb.BinaryReader): GetGroupRequest;
}

export namespace GetGroupRequest {
  export type AsObject = {
    groupName: string,
  }
}

export class UpdateGroupRequest extends jspb.Message {
  hasGroup(): boolean;
  clearGroup(): void;
  getGroup(): google_devtools_clouderrorreporting_v1beta1_common_pb.ErrorGroup | undefined;
  setGroup(value?: google_devtools_clouderrorreporting_v1beta1_common_pb.ErrorGroup): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateGroupRequest): UpdateGroupRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateGroupRequest;
  static deserializeBinaryFromReader(message: UpdateGroupRequest, reader: jspb.BinaryReader): UpdateGroupRequest;
}

export namespace UpdateGroupRequest {
  export type AsObject = {
    group?: google_devtools_clouderrorreporting_v1beta1_common_pb.ErrorGroup.AsObject,
  }
}

