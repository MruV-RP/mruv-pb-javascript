// package: google.monitoring.v3
// file: google/monitoring/v3/notification.proto

import * as jspb from "google-protobuf";
import * as google_api_label_pb from "../../../google/api/label_pb";
import * as google_api_launch_stage_pb from "../../../google/api/launch_stage_pb";
import * as google_monitoring_v3_common_pb from "../../../google/monitoring/v3/common_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

export class NotificationChannelDescriptor extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getType(): string;
  setType(value: string): void;

  getDisplayName(): string;
  setDisplayName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  clearLabelsList(): void;
  getLabelsList(): Array<google_api_label_pb.LabelDescriptor>;
  setLabelsList(value: Array<google_api_label_pb.LabelDescriptor>): void;
  addLabels(value?: google_api_label_pb.LabelDescriptor, index?: number): google_api_label_pb.LabelDescriptor;

  clearSupportedTiersList(): void;
  getSupportedTiersList(): Array<google_monitoring_v3_common_pb.ServiceTierMap[keyof google_monitoring_v3_common_pb.ServiceTierMap]>;
  setSupportedTiersList(value: Array<google_monitoring_v3_common_pb.ServiceTierMap[keyof google_monitoring_v3_common_pb.ServiceTierMap]>): void;
  addSupportedTiers(value: google_monitoring_v3_common_pb.ServiceTierMap[keyof google_monitoring_v3_common_pb.ServiceTierMap], index?: number): google_monitoring_v3_common_pb.ServiceTierMap[keyof google_monitoring_v3_common_pb.ServiceTierMap];

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NotificationChannelDescriptor.AsObject;
  static toObject(includeInstance: boolean, msg: NotificationChannelDescriptor): NotificationChannelDescriptor.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NotificationChannelDescriptor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NotificationChannelDescriptor;
  static deserializeBinaryFromReader(message: NotificationChannelDescriptor, reader: jspb.BinaryReader): NotificationChannelDescriptor;
}

export namespace NotificationChannelDescriptor {
  export type AsObject = {
    name: string,
    type: string,
    displayName: string,
    description: string,
    labelsList: Array<google_api_label_pb.LabelDescriptor.AsObject>,
    supportedTiersList: Array<google_monitoring_v3_common_pb.ServiceTierMap[keyof google_monitoring_v3_common_pb.ServiceTierMap]>,
  }
}

export class NotificationChannel extends jspb.Message {
  getType(): string;
  setType(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDisplayName(): string;
  setDisplayName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): void;
  getUserLabelsMap(): jspb.Map<string, string>;
  clearUserLabelsMap(): void;
  getVerificationStatus(): NotificationChannel.VerificationStatusMap[keyof NotificationChannel.VerificationStatusMap];
  setVerificationStatus(value: NotificationChannel.VerificationStatusMap[keyof NotificationChannel.VerificationStatusMap]): void;

  hasEnabled(): boolean;
  clearEnabled(): void;
  getEnabled(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setEnabled(value?: google_protobuf_wrappers_pb.BoolValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NotificationChannel.AsObject;
  static toObject(includeInstance: boolean, msg: NotificationChannel): NotificationChannel.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NotificationChannel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NotificationChannel;
  static deserializeBinaryFromReader(message: NotificationChannel, reader: jspb.BinaryReader): NotificationChannel;
}

export namespace NotificationChannel {
  export type AsObject = {
    type: string,
    name: string,
    displayName: string,
    description: string,
    labelsMap: Array<[string, string]>,
    userLabelsMap: Array<[string, string]>,
    verificationStatus: NotificationChannel.VerificationStatusMap[keyof NotificationChannel.VerificationStatusMap],
    enabled?: google_protobuf_wrappers_pb.BoolValue.AsObject,
  }

  export interface VerificationStatusMap {
    VERIFICATION_STATUS_UNSPECIFIED: 0;
    UNVERIFIED: 1;
    VERIFIED: 2;
  }

  export const VerificationStatus: VerificationStatusMap;
}

