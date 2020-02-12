// package: mruv
// file: groups/groups.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../google/api/annotations_pb";
import * as common_health_pb from "../common/health_pb";
import * as groups_groups_model_pb from "../groups/groups_model_pb";

export class GetGroupsRequest extends jspb.Message {
  getLimit(): number;
  setLimit(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetGroupsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetGroupsRequest): GetGroupsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetGroupsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetGroupsRequest;
  static deserializeBinaryFromReader(message: GetGroupsRequest, reader: jspb.BinaryReader): GetGroupsRequest;
}

export namespace GetGroupsRequest {
  export type AsObject = {
    limit: number,
  }
}

export class GetGroupsResponse extends jspb.Message {
  clearGroupsList(): void;
  getGroupsList(): Array<groups_groups_model_pb.Group>;
  setGroupsList(value: Array<groups_groups_model_pb.Group>): void;
  addGroups(value?: groups_groups_model_pb.Group, index?: number): groups_groups_model_pb.Group;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetGroupsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetGroupsResponse): GetGroupsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetGroupsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetGroupsResponse;
  static deserializeBinaryFromReader(message: GetGroupsResponse, reader: jspb.BinaryReader): GetGroupsResponse;
}

export namespace GetGroupsResponse {
  export type AsObject = {
    groupsList: Array<groups_groups_model_pb.Group.AsObject>,
  }
}

export class AddGroupMemberRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddGroupMemberRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddGroupMemberRequest): AddGroupMemberRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddGroupMemberRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddGroupMemberRequest;
  static deserializeBinaryFromReader(message: AddGroupMemberRequest, reader: jspb.BinaryReader): AddGroupMemberRequest;
}

export namespace AddGroupMemberRequest {
  export type AsObject = {
  }
}

export class AddGroupMemberResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddGroupMemberResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddGroupMemberResponse): AddGroupMemberResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddGroupMemberResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddGroupMemberResponse;
  static deserializeBinaryFromReader(message: AddGroupMemberResponse, reader: jspb.BinaryReader): AddGroupMemberResponse;
}

export namespace AddGroupMemberResponse {
  export type AsObject = {
  }
}

export class RemoveGroupMemberRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveGroupMemberRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveGroupMemberRequest): RemoveGroupMemberRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveGroupMemberRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveGroupMemberRequest;
  static deserializeBinaryFromReader(message: RemoveGroupMemberRequest, reader: jspb.BinaryReader): RemoveGroupMemberRequest;
}

export namespace RemoveGroupMemberRequest {
  export type AsObject = {
  }
}

export class RemoveGroupMemberResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveGroupMemberResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveGroupMemberResponse): RemoveGroupMemberResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveGroupMemberResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveGroupMemberResponse;
  static deserializeBinaryFromReader(message: RemoveGroupMemberResponse, reader: jspb.BinaryReader): RemoveGroupMemberResponse;
}

export namespace RemoveGroupMemberResponse {
  export type AsObject = {
  }
}

