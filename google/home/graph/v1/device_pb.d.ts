// package: google.home.graph.v1
// file: google/home/graph/v1/device.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";

export class Device extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getType(): string;
  setType(value: string): void;

  clearTraitsList(): void;
  getTraitsList(): Array<string>;
  setTraitsList(value: Array<string>): void;
  addTraits(value: string, index?: number): string;

  hasName(): boolean;
  clearName(): void;
  getName(): DeviceNames | undefined;
  setName(value?: DeviceNames): void;

  getWillReportState(): boolean;
  setWillReportState(value: boolean): void;

  getRoomHint(): string;
  setRoomHint(value: string): void;

  getStructureHint(): string;
  setStructureHint(value: string): void;

  hasDeviceInfo(): boolean;
  clearDeviceInfo(): void;
  getDeviceInfo(): DeviceInfo | undefined;
  setDeviceInfo(value?: DeviceInfo): void;

  hasAttributes(): boolean;
  clearAttributes(): void;
  getAttributes(): google_protobuf_struct_pb.Struct | undefined;
  setAttributes(value?: google_protobuf_struct_pb.Struct): void;

  getCustomData(): string;
  setCustomData(value: string): void;

  clearOtherDeviceIdsList(): void;
  getOtherDeviceIdsList(): Array<AgentOtherDeviceId>;
  setOtherDeviceIdsList(value: Array<AgentOtherDeviceId>): void;
  addOtherDeviceIds(value?: AgentOtherDeviceId, index?: number): AgentOtherDeviceId;

  getNotificationSupportedByAgent(): boolean;
  setNotificationSupportedByAgent(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Device.AsObject;
  static toObject(includeInstance: boolean, msg: Device): Device.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Device, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Device;
  static deserializeBinaryFromReader(message: Device, reader: jspb.BinaryReader): Device;
}

export namespace Device {
  export type AsObject = {
    id: string,
    type: string,
    traitsList: Array<string>,
    name?: DeviceNames.AsObject,
    willReportState: boolean,
    roomHint: string,
    structureHint: string,
    deviceInfo?: DeviceInfo.AsObject,
    attributes?: google_protobuf_struct_pb.Struct.AsObject,
    customData: string,
    otherDeviceIdsList: Array<AgentOtherDeviceId.AsObject>,
    notificationSupportedByAgent: boolean,
  }
}

export class DeviceNames extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  clearNicknamesList(): void;
  getNicknamesList(): Array<string>;
  setNicknamesList(value: Array<string>): void;
  addNicknames(value: string, index?: number): string;

  clearDefaultNamesList(): void;
  getDefaultNamesList(): Array<string>;
  setDefaultNamesList(value: Array<string>): void;
  addDefaultNames(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceNames.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceNames): DeviceNames.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeviceNames, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceNames;
  static deserializeBinaryFromReader(message: DeviceNames, reader: jspb.BinaryReader): DeviceNames;
}

export namespace DeviceNames {
  export type AsObject = {
    name: string,
    nicknamesList: Array<string>,
    defaultNamesList: Array<string>,
  }
}

export class DeviceInfo extends jspb.Message {
  getManufacturer(): string;
  setManufacturer(value: string): void;

  getModel(): string;
  setModel(value: string): void;

  getHwVersion(): string;
  setHwVersion(value: string): void;

  getSwVersion(): string;
  setSwVersion(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceInfo.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceInfo): DeviceInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeviceInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceInfo;
  static deserializeBinaryFromReader(message: DeviceInfo, reader: jspb.BinaryReader): DeviceInfo;
}

export namespace DeviceInfo {
  export type AsObject = {
    manufacturer: string,
    model: string,
    hwVersion: string,
    swVersion: string,
  }
}

export class AgentOtherDeviceId extends jspb.Message {
  getAgentId(): string;
  setAgentId(value: string): void;

  getDeviceId(): string;
  setDeviceId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentOtherDeviceId.AsObject;
  static toObject(includeInstance: boolean, msg: AgentOtherDeviceId): AgentOtherDeviceId.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AgentOtherDeviceId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentOtherDeviceId;
  static deserializeBinaryFromReader(message: AgentOtherDeviceId, reader: jspb.BinaryReader): AgentOtherDeviceId;
}

export namespace AgentOtherDeviceId {
  export type AsObject = {
    agentId: string,
    deviceId: string,
  }
}

