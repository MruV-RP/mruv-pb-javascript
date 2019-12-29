// package: google.monitoring.v3
// file: google/monitoring/v3/group.proto

import * as jspb from "google-protobuf";

export class Group extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDisplayName(): string;
  setDisplayName(value: string): void;

  getParentName(): string;
  setParentName(value: string): void;

  getFilter(): string;
  setFilter(value: string): void;

  getIsCluster(): boolean;
  setIsCluster(value: boolean): void;

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
    name: string,
    displayName: string,
    parentName: string,
    filter: string,
    isCluster: boolean,
  }
}

