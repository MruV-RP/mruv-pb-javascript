// package: grafeas.v1beta1.deployment
// file: google/devtools/containeranalysis/v1beta1/deployment/deployment.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Deployable extends jspb.Message {
  clearResourceUriList(): void;
  getResourceUriList(): Array<string>;
  setResourceUriList(value: Array<string>): void;
  addResourceUri(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Deployable.AsObject;
  static toObject(includeInstance: boolean, msg: Deployable): Deployable.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Deployable, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Deployable;
  static deserializeBinaryFromReader(message: Deployable, reader: jspb.BinaryReader): Deployable;
}

export namespace Deployable {
  export type AsObject = {
    resourceUriList: Array<string>,
  }
}

export class Details extends jspb.Message {
  hasDeployment(): boolean;
  clearDeployment(): void;
  getDeployment(): Deployment | undefined;
  setDeployment(value?: Deployment): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Details.AsObject;
  static toObject(includeInstance: boolean, msg: Details): Details.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Details, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Details;
  static deserializeBinaryFromReader(message: Details, reader: jspb.BinaryReader): Details;
}

export namespace Details {
  export type AsObject = {
    deployment?: Deployment.AsObject,
  }
}

export class Deployment extends jspb.Message {
  getUserEmail(): string;
  setUserEmail(value: string): void;

  hasDeployTime(): boolean;
  clearDeployTime(): void;
  getDeployTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDeployTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUndeployTime(): boolean;
  clearUndeployTime(): void;
  getUndeployTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUndeployTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getConfig(): string;
  setConfig(value: string): void;

  getAddress(): string;
  setAddress(value: string): void;

  clearResourceUriList(): void;
  getResourceUriList(): Array<string>;
  setResourceUriList(value: Array<string>): void;
  addResourceUri(value: string, index?: number): string;

  getPlatform(): Deployment.PlatformMap[keyof Deployment.PlatformMap];
  setPlatform(value: Deployment.PlatformMap[keyof Deployment.PlatformMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Deployment.AsObject;
  static toObject(includeInstance: boolean, msg: Deployment): Deployment.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Deployment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Deployment;
  static deserializeBinaryFromReader(message: Deployment, reader: jspb.BinaryReader): Deployment;
}

export namespace Deployment {
  export type AsObject = {
    userEmail: string,
    deployTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    undeployTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    config: string,
    address: string,
    resourceUriList: Array<string>,
    platform: Deployment.PlatformMap[keyof Deployment.PlatformMap],
  }

  export interface PlatformMap {
    PLATFORM_UNSPECIFIED: 0;
    GKE: 1;
    FLEX: 2;
    CUSTOM: 3;
  }

  export const Platform: PlatformMap;
}

