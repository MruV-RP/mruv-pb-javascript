// package: mruv
// file: groups/groups.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../google/api/annotations_pb";
import * as common_health_pb from "../common/health_pb";

export class CreateGroupRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateGroupRequest): CreateGroupRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateGroupRequest;
  static deserializeBinaryFromReader(message: CreateGroupRequest, reader: jspb.BinaryReader): CreateGroupRequest;
}

export namespace CreateGroupRequest {
  export type AsObject = {
    name: string,
  }
}

export class CreateGroupResponse extends jspb.Message {
  getGroupId(): number;
  setGroupId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateGroupResponse): CreateGroupResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateGroupResponse;
  static deserializeBinaryFromReader(message: CreateGroupResponse, reader: jspb.BinaryReader): CreateGroupResponse;
}

export namespace CreateGroupResponse {
  export type AsObject = {
    groupId: number,
  }
}

export class GetGroupRequest extends jspb.Message {
  getGroupId(): number;
  setGroupId(value: number): void;

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
    groupId: number,
  }
}

export class GetGroupResponse extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetGroupResponse): GetGroupResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetGroupResponse;
  static deserializeBinaryFromReader(message: GetGroupResponse, reader: jspb.BinaryReader): GetGroupResponse;
}

export namespace GetGroupResponse {
  export type AsObject = {
    name: string,
  }
}

export class UpdateGroupRequest extends jspb.Message {
  getGroupId(): number;
  setGroupId(value: number): void;

  getName(): string;
  setName(value: string): void;

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
    groupId: number,
    name: string,
  }
}

export class UpdateGroupResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateGroupResponse): UpdateGroupResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateGroupResponse;
  static deserializeBinaryFromReader(message: UpdateGroupResponse, reader: jspb.BinaryReader): UpdateGroupResponse;
}

export namespace UpdateGroupResponse {
  export type AsObject = {
  }
}

export class DeleteGroupRequest extends jspb.Message {
  getGroupId(): number;
  setGroupId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteGroupRequest): DeleteGroupRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteGroupRequest;
  static deserializeBinaryFromReader(message: DeleteGroupRequest, reader: jspb.BinaryReader): DeleteGroupRequest;
}

export namespace DeleteGroupRequest {
  export type AsObject = {
    groupId: number,
  }
}

export class DeleteGroupResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteGroupResponse): DeleteGroupResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteGroupResponse;
  static deserializeBinaryFromReader(message: DeleteGroupResponse, reader: jspb.BinaryReader): DeleteGroupResponse;
}

export namespace DeleteGroupResponse {
  export type AsObject = {
  }
}

export class GetGroupsRequest extends jspb.Message {
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
  }
}

export class GetGroupsResponse extends jspb.Message {
  clearGroupsList(): void;
  getGroupsList(): Array<GetGroupResponse>;
  setGroupsList(value: Array<GetGroupResponse>): void;
  addGroups(value?: GetGroupResponse, index?: number): GetGroupResponse;

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
    groupsList: Array<GetGroupResponse.AsObject>,
  }
}

export class AssignOwnerRequest extends jspb.Message {
  getGroupId(): number;
  setGroupId(value: number): void;

  getOwnerType(): OwnerTypeMap[keyof OwnerTypeMap];
  setOwnerType(value: OwnerTypeMap[keyof OwnerTypeMap]): void;

  getOwnerId(): number;
  setOwnerId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssignOwnerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AssignOwnerRequest): AssignOwnerRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssignOwnerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssignOwnerRequest;
  static deserializeBinaryFromReader(message: AssignOwnerRequest, reader: jspb.BinaryReader): AssignOwnerRequest;
}

export namespace AssignOwnerRequest {
  export type AsObject = {
    groupId: number,
    ownerType: OwnerTypeMap[keyof OwnerTypeMap],
    ownerId: number,
  }
}

export class AssignOwnerResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssignOwnerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AssignOwnerResponse): AssignOwnerResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssignOwnerResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssignOwnerResponse;
  static deserializeBinaryFromReader(message: AssignOwnerResponse, reader: jspb.BinaryReader): AssignOwnerResponse;
}

export namespace AssignOwnerResponse {
  export type AsObject = {
  }
}

export class GetOwnerRequest extends jspb.Message {
  getGroupId(): number;
  setGroupId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOwnerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetOwnerRequest): GetOwnerRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetOwnerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOwnerRequest;
  static deserializeBinaryFromReader(message: GetOwnerRequest, reader: jspb.BinaryReader): GetOwnerRequest;
}

export namespace GetOwnerRequest {
  export type AsObject = {
    groupId: number,
  }
}

export class GetOwnerResponse extends jspb.Message {
  getOwnerId(): number;
  setOwnerId(value: number): void;

  getOwnerType(): OwnerTypeMap[keyof OwnerTypeMap];
  setOwnerType(value: OwnerTypeMap[keyof OwnerTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOwnerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetOwnerResponse): GetOwnerResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetOwnerResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOwnerResponse;
  static deserializeBinaryFromReader(message: GetOwnerResponse, reader: jspb.BinaryReader): GetOwnerResponse;
}

export namespace GetOwnerResponse {
  export type AsObject = {
    ownerId: number,
    ownerType: OwnerTypeMap[keyof OwnerTypeMap],
  }
}

export class AddMemberRequest extends jspb.Message {
  getGroupId(): number;
  setGroupId(value: number): void;

  getMemberId(): number;
  setMemberId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddMemberRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddMemberRequest): AddMemberRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddMemberRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddMemberRequest;
  static deserializeBinaryFromReader(message: AddMemberRequest, reader: jspb.BinaryReader): AddMemberRequest;
}

export namespace AddMemberRequest {
  export type AsObject = {
    groupId: number,
    memberId: number,
  }
}

export class AddMemberResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddMemberResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddMemberResponse): AddMemberResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddMemberResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddMemberResponse;
  static deserializeBinaryFromReader(message: AddMemberResponse, reader: jspb.BinaryReader): AddMemberResponse;
}

export namespace AddMemberResponse {
  export type AsObject = {
  }
}

export class GetMembersRequest extends jspb.Message {
  getGroupId(): number;
  setGroupId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMembersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetMembersRequest): GetMembersRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMembersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMembersRequest;
  static deserializeBinaryFromReader(message: GetMembersRequest, reader: jspb.BinaryReader): GetMembersRequest;
}

export namespace GetMembersRequest {
  export type AsObject = {
    groupId: number,
  }
}

export class GetMembersResponse extends jspb.Message {
  getMemberType(): MemberTypeMap[keyof MemberTypeMap];
  setMemberType(value: MemberTypeMap[keyof MemberTypeMap]): void;

  clearMemberIdsList(): void;
  getMemberIdsList(): Array<number>;
  setMemberIdsList(value: Array<number>): void;
  addMemberIds(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMembersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetMembersResponse): GetMembersResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMembersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMembersResponse;
  static deserializeBinaryFromReader(message: GetMembersResponse, reader: jspb.BinaryReader): GetMembersResponse;
}

export namespace GetMembersResponse {
  export type AsObject = {
    memberType: MemberTypeMap[keyof MemberTypeMap],
    memberIdsList: Array<number>,
  }
}

export class RemoveMemberRequest extends jspb.Message {
  getGroupId(): number;
  setGroupId(value: number): void;

  getMemberId(): number;
  setMemberId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveMemberRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveMemberRequest): RemoveMemberRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveMemberRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveMemberRequest;
  static deserializeBinaryFromReader(message: RemoveMemberRequest, reader: jspb.BinaryReader): RemoveMemberRequest;
}

export namespace RemoveMemberRequest {
  export type AsObject = {
    groupId: number,
    memberId: number,
  }
}

export class RemoveMemberResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveMemberResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveMemberResponse): RemoveMemberResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveMemberResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveMemberResponse;
  static deserializeBinaryFromReader(message: RemoveMemberResponse, reader: jspb.BinaryReader): RemoveMemberResponse;
}

export namespace RemoveMemberResponse {
  export type AsObject = {
  }
}

export class AddPermissionRequest extends jspb.Message {
  getGroupId(): number;
  setGroupId(value: number): void;

  getName(): string;
  setName(value: string): void;

  getDefinition(): string;
  setDefinition(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddPermissionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddPermissionRequest): AddPermissionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddPermissionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddPermissionRequest;
  static deserializeBinaryFromReader(message: AddPermissionRequest, reader: jspb.BinaryReader): AddPermissionRequest;
}

export namespace AddPermissionRequest {
  export type AsObject = {
    groupId: number,
    name: string,
    definition: string,
  }
}

export class AddPermissionResponse extends jspb.Message {
  getPermissionId(): number;
  setPermissionId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddPermissionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddPermissionResponse): AddPermissionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddPermissionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddPermissionResponse;
  static deserializeBinaryFromReader(message: AddPermissionResponse, reader: jspb.BinaryReader): AddPermissionResponse;
}

export namespace AddPermissionResponse {
  export type AsObject = {
    permissionId: number,
  }
}

export class GetPermissionsRequest extends jspb.Message {
  getGroupId(): number;
  setGroupId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPermissionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPermissionsRequest): GetPermissionsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPermissionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPermissionsRequest;
  static deserializeBinaryFromReader(message: GetPermissionsRequest, reader: jspb.BinaryReader): GetPermissionsRequest;
}

export namespace GetPermissionsRequest {
  export type AsObject = {
    groupId: number,
  }
}

export class GetPermissionsResponse extends jspb.Message {
  clearPermissionsList(): void;
  getPermissionsList(): Array<GetPermissionsResponse.Permission>;
  setPermissionsList(value: Array<GetPermissionsResponse.Permission>): void;
  addPermissions(value?: GetPermissionsResponse.Permission, index?: number): GetPermissionsResponse.Permission;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPermissionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPermissionsResponse): GetPermissionsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPermissionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPermissionsResponse;
  static deserializeBinaryFromReader(message: GetPermissionsResponse, reader: jspb.BinaryReader): GetPermissionsResponse;
}

export namespace GetPermissionsResponse {
  export type AsObject = {
    permissionsList: Array<GetPermissionsResponse.Permission.AsObject>,
  }

  export class Permission extends jspb.Message {
    getId(): number;
    setId(value: number): void;

    getName(): string;
    setName(value: string): void;

    getDefinition(): string;
    setDefinition(value: string): void;

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
      definition: string,
    }
  }
}

export class RemovePermissionRequest extends jspb.Message {
  getGroupId(): number;
  setGroupId(value: number): void;

  getPermissionId(): number;
  setPermissionId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemovePermissionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemovePermissionRequest): RemovePermissionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemovePermissionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemovePermissionRequest;
  static deserializeBinaryFromReader(message: RemovePermissionRequest, reader: jspb.BinaryReader): RemovePermissionRequest;
}

export namespace RemovePermissionRequest {
  export type AsObject = {
    groupId: number,
    permissionId: number,
  }
}

export class RemovePermissionResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemovePermissionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RemovePermissionResponse): RemovePermissionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemovePermissionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemovePermissionResponse;
  static deserializeBinaryFromReader(message: RemovePermissionResponse, reader: jspb.BinaryReader): RemovePermissionResponse;
}

export namespace RemovePermissionResponse {
  export type AsObject = {
  }
}

export class AddSubgroupRequest extends jspb.Message {
  getGroupId(): number;
  setGroupId(value: number): void;

  getSubgroupId(): number;
  setSubgroupId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddSubgroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddSubgroupRequest): AddSubgroupRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddSubgroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddSubgroupRequest;
  static deserializeBinaryFromReader(message: AddSubgroupRequest, reader: jspb.BinaryReader): AddSubgroupRequest;
}

export namespace AddSubgroupRequest {
  export type AsObject = {
    groupId: number,
    subgroupId: number,
  }
}

export class AddSubgroupResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddSubgroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddSubgroupResponse): AddSubgroupResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddSubgroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddSubgroupResponse;
  static deserializeBinaryFromReader(message: AddSubgroupResponse, reader: jspb.BinaryReader): AddSubgroupResponse;
}

export namespace AddSubgroupResponse {
  export type AsObject = {
  }
}

export class GetSubgroupsRequest extends jspb.Message {
  getGroupId(): number;
  setGroupId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSubgroupsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSubgroupsRequest): GetSubgroupsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSubgroupsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSubgroupsRequest;
  static deserializeBinaryFromReader(message: GetSubgroupsRequest, reader: jspb.BinaryReader): GetSubgroupsRequest;
}

export namespace GetSubgroupsRequest {
  export type AsObject = {
    groupId: number,
  }
}

export class GetSubgroupsResponse extends jspb.Message {
  clearSubgroupIdsList(): void;
  getSubgroupIdsList(): Array<number>;
  setSubgroupIdsList(value: Array<number>): void;
  addSubgroupIds(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSubgroupsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetSubgroupsResponse): GetSubgroupsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSubgroupsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSubgroupsResponse;
  static deserializeBinaryFromReader(message: GetSubgroupsResponse, reader: jspb.BinaryReader): GetSubgroupsResponse;
}

export namespace GetSubgroupsResponse {
  export type AsObject = {
    subgroupIdsList: Array<number>,
  }
}

export class RemoveSubgroupRequest extends jspb.Message {
  getGroupId(): number;
  setGroupId(value: number): void;

  getSubgroupId(): number;
  setSubgroupId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveSubgroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveSubgroupRequest): RemoveSubgroupRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveSubgroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveSubgroupRequest;
  static deserializeBinaryFromReader(message: RemoveSubgroupRequest, reader: jspb.BinaryReader): RemoveSubgroupRequest;
}

export namespace RemoveSubgroupRequest {
  export type AsObject = {
    groupId: number,
    subgroupId: number,
  }
}

export class RemoveSubgroupResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveSubgroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveSubgroupResponse): RemoveSubgroupResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveSubgroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveSubgroupResponse;
  static deserializeBinaryFromReader(message: RemoveSubgroupResponse, reader: jspb.BinaryReader): RemoveSubgroupResponse;
}

export namespace RemoveSubgroupResponse {
  export type AsObject = {
  }
}

export class IsPermittedRequest extends jspb.Message {
  getMemberId(): number;
  setMemberId(value: number): void;

  getMemberType(): MemberTypeMap[keyof MemberTypeMap];
  setMemberType(value: MemberTypeMap[keyof MemberTypeMap]): void;

  getAction(): string;
  setAction(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IsPermittedRequest.AsObject;
  static toObject(includeInstance: boolean, msg: IsPermittedRequest): IsPermittedRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IsPermittedRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IsPermittedRequest;
  static deserializeBinaryFromReader(message: IsPermittedRequest, reader: jspb.BinaryReader): IsPermittedRequest;
}

export namespace IsPermittedRequest {
  export type AsObject = {
    memberId: number,
    memberType: MemberTypeMap[keyof MemberTypeMap],
    action: string,
  }
}

export class IsPermittedResponse extends jspb.Message {
  getPermitted(): boolean;
  setPermitted(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IsPermittedResponse.AsObject;
  static toObject(includeInstance: boolean, msg: IsPermittedResponse): IsPermittedResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IsPermittedResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IsPermittedResponse;
  static deserializeBinaryFromReader(message: IsPermittedResponse, reader: jspb.BinaryReader): IsPermittedResponse;
}

export namespace IsPermittedResponse {
  export type AsObject = {
    permitted: boolean,
  }
}

export interface OwnerTypeMap {
  OWNER_TYPE_UNKNOWN: 0;
  OWNER_TYPE_ACCOUNT: 1;
  OWNER_TYPE_CHARACTER: 2;
  OWNER_TYPE_GROUP: 3;
}

export const OwnerType: OwnerTypeMap;

export interface MemberTypeMap {
  MEMBER_TYPE_UNKNOWN: 0;
  MEMBER_TYPE_ACCOUNT: 1;
  MEMBER_TYPE_CHARACTER: 2;
}

export const MemberType: MemberTypeMap;

