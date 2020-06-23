// package: mruv
// file: groups/groups.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../google/api/annotations_pb";
import * as common_health_pb from "../common/health_pb";

export class PermissionID extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PermissionID.AsObject;
  static toObject(includeInstance: boolean, msg: PermissionID): PermissionID.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PermissionID, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PermissionID;
  static deserializeBinaryFromReader(message: PermissionID, reader: jspb.BinaryReader): PermissionID;
}

export namespace PermissionID {
  export type AsObject = {
    id: number,
  }
}

export class Permission extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getName(): string;
  setName(value: string): void;

  getRole(): string;
  setRole(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Permission.AsObject;
  static toObject(includeInstance: boolean, msg: Permission): Permission.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Permission, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Permission;
  static deserializeBinaryFromReader(message: Permission, reader: jspb.BinaryReader): Permission;
}

export namespace Permission {
  export type AsObject = {
    id: number,
    name: string,
    role: string,
  }
}

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

export class Group extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  clearPermissionsList(): void;
  getPermissionsList(): Array<Permission>;
  setPermissionsList(value: Array<Permission>): void;
  addPermissions(value?: Permission, index?: number): Permission;

  clearMembersList(): void;
  getMembersList(): Array<number>;
  setMembersList(value: Array<number>): void;
  addMembers(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Group.AsObject;
  static toObject(includeInstance: boolean, msg: Group): Group.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Group, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Group;
  static deserializeBinaryFromReader(message: Group, reader: jspb.BinaryReader): Group;
}

export namespace Group {
  export type AsObject = {
    id: number,
    name: string,
    description: string,
    permissionsList: Array<Permission.AsObject>,
    membersList: Array<number>,
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
  getGroupsList(): Array<Group>;
  setGroupsList(value: Array<Group>): void;
  addGroups(value?: Group, index?: number): Group;

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
    groupsList: Array<Group.AsObject>,
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

