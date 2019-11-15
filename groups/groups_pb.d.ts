// package: mruv
// file: groups/groups.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../google/api/annotations_pb";
import * as common_health_pb from "../common/health_pb";
import * as groups_groups_model_pb from "../groups/groups_model_pb";

export class GroupID extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GroupID.AsObject;
  static toObject(includeInstance: boolean, msg: GroupID): GroupID.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GroupID, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GroupID;
  static deserializeBinaryFromReader(message: GroupID, reader: jspb.BinaryReader): GroupID;
}

export namespace GroupID {
  export type AsObject = {
    id: number,
  }
}

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

