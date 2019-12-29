// package: google.monitoring.v3
// file: google/monitoring/v3/group_service.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as google_api_monitored_resource_pb from "../../../google/api/monitored_resource_pb";
import * as google_monitoring_v3_common_pb from "../../../google/monitoring/v3/common_pb";
import * as google_monitoring_v3_group_pb from "../../../google/monitoring/v3/group_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_api_client_pb from "../../../google/api/client_pb";

export class ListGroupsRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasChildrenOfGroup(): boolean;
  clearChildrenOfGroup(): void;
  getChildrenOfGroup(): string;
  setChildrenOfGroup(value: string): void;

  hasAncestorsOfGroup(): boolean;
  clearAncestorsOfGroup(): void;
  getAncestorsOfGroup(): string;
  setAncestorsOfGroup(value: string): void;

  hasDescendantsOfGroup(): boolean;
  clearDescendantsOfGroup(): void;
  getDescendantsOfGroup(): string;
  setDescendantsOfGroup(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  getFilterCase(): ListGroupsRequest.FilterCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListGroupsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListGroupsRequest): ListGroupsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListGroupsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListGroupsRequest;
  static deserializeBinaryFromReader(message: ListGroupsRequest, reader: jspb.BinaryReader): ListGroupsRequest;
}

export namespace ListGroupsRequest {
  export type AsObject = {
    name: string,
    childrenOfGroup: string,
    ancestorsOfGroup: string,
    descendantsOfGroup: string,
    pageSize: number,
    pageToken: string,
  }

  export enum FilterCase {
    FILTER_NOT_SET = 0,
    CHILDREN_OF_GROUP = 2,
    ANCESTORS_OF_GROUP = 3,
    DESCENDANTS_OF_GROUP = 4,
  }
}

export class ListGroupsResponse extends jspb.Message {
  clearGroupList(): void;
  getGroupList(): Array<google_monitoring_v3_group_pb.Group>;
  setGroupList(value: Array<google_monitoring_v3_group_pb.Group>): void;
  addGroup(value?: google_monitoring_v3_group_pb.Group, index?: number): google_monitoring_v3_group_pb.Group;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListGroupsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListGroupsResponse): ListGroupsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListGroupsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListGroupsResponse;
  static deserializeBinaryFromReader(message: ListGroupsResponse, reader: jspb.BinaryReader): ListGroupsResponse;
}

export namespace ListGroupsResponse {
  export type AsObject = {
    groupList: Array<google_monitoring_v3_group_pb.Group.AsObject>,
    nextPageToken: string,
  }
}

export class GetGroupRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

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
    name: string,
  }
}

export class CreateGroupRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasGroup(): boolean;
  clearGroup(): void;
  getGroup(): google_monitoring_v3_group_pb.Group | undefined;
  setGroup(value?: google_monitoring_v3_group_pb.Group): void;

  getValidateOnly(): boolean;
  setValidateOnly(value: boolean): void;

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
    group?: google_monitoring_v3_group_pb.Group.AsObject,
    validateOnly: boolean,
  }
}

export class UpdateGroupRequest extends jspb.Message {
  hasGroup(): boolean;
  clearGroup(): void;
  getGroup(): google_monitoring_v3_group_pb.Group | undefined;
  setGroup(value?: google_monitoring_v3_group_pb.Group): void;

  getValidateOnly(): boolean;
  setValidateOnly(value: boolean): void;

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
    group?: google_monitoring_v3_group_pb.Group.AsObject,
    validateOnly: boolean,
  }
}

export class DeleteGroupRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getRecursive(): boolean;
  setRecursive(value: boolean): void;

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
    name: string,
    recursive: boolean,
  }
}

export class ListGroupMembersRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  getFilter(): string;
  setFilter(value: string): void;

  hasInterval(): boolean;
  clearInterval(): void;
  getInterval(): google_monitoring_v3_common_pb.TimeInterval | undefined;
  setInterval(value?: google_monitoring_v3_common_pb.TimeInterval): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListGroupMembersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListGroupMembersRequest): ListGroupMembersRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListGroupMembersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListGroupMembersRequest;
  static deserializeBinaryFromReader(message: ListGroupMembersRequest, reader: jspb.BinaryReader): ListGroupMembersRequest;
}

export namespace ListGroupMembersRequest {
  export type AsObject = {
    name: string,
    pageSize: number,
    pageToken: string,
    filter: string,
    interval?: google_monitoring_v3_common_pb.TimeInterval.AsObject,
  }
}

export class ListGroupMembersResponse extends jspb.Message {
  clearMembersList(): void;
  getMembersList(): Array<google_api_monitored_resource_pb.MonitoredResource>;
  setMembersList(value: Array<google_api_monitored_resource_pb.MonitoredResource>): void;
  addMembers(value?: google_api_monitored_resource_pb.MonitoredResource, index?: number): google_api_monitored_resource_pb.MonitoredResource;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  getTotalSize(): number;
  setTotalSize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListGroupMembersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListGroupMembersResponse): ListGroupMembersResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListGroupMembersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListGroupMembersResponse;
  static deserializeBinaryFromReader(message: ListGroupMembersResponse, reader: jspb.BinaryReader): ListGroupMembersResponse;
}

export namespace ListGroupMembersResponse {
  export type AsObject = {
    membersList: Array<google_api_monitored_resource_pb.MonitoredResource.AsObject>,
    nextPageToken: string,
    totalSize: number,
  }
}

