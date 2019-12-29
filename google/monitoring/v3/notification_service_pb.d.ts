// package: google.monitoring.v3
// file: google/monitoring/v3/notification_service.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as google_monitoring_v3_notification_pb from "../../../google/monitoring/v3/notification_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_api_client_pb from "../../../google/api/client_pb";

export class ListNotificationChannelDescriptorsRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListNotificationChannelDescriptorsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListNotificationChannelDescriptorsRequest): ListNotificationChannelDescriptorsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListNotificationChannelDescriptorsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListNotificationChannelDescriptorsRequest;
  static deserializeBinaryFromReader(message: ListNotificationChannelDescriptorsRequest, reader: jspb.BinaryReader): ListNotificationChannelDescriptorsRequest;
}

export namespace ListNotificationChannelDescriptorsRequest {
  export type AsObject = {
    name: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListNotificationChannelDescriptorsResponse extends jspb.Message {
  clearChannelDescriptorsList(): void;
  getChannelDescriptorsList(): Array<google_monitoring_v3_notification_pb.NotificationChannelDescriptor>;
  setChannelDescriptorsList(value: Array<google_monitoring_v3_notification_pb.NotificationChannelDescriptor>): void;
  addChannelDescriptors(value?: google_monitoring_v3_notification_pb.NotificationChannelDescriptor, index?: number): google_monitoring_v3_notification_pb.NotificationChannelDescriptor;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListNotificationChannelDescriptorsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListNotificationChannelDescriptorsResponse): ListNotificationChannelDescriptorsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListNotificationChannelDescriptorsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListNotificationChannelDescriptorsResponse;
  static deserializeBinaryFromReader(message: ListNotificationChannelDescriptorsResponse, reader: jspb.BinaryReader): ListNotificationChannelDescriptorsResponse;
}

export namespace ListNotificationChannelDescriptorsResponse {
  export type AsObject = {
    channelDescriptorsList: Array<google_monitoring_v3_notification_pb.NotificationChannelDescriptor.AsObject>,
    nextPageToken: string,
  }
}

export class GetNotificationChannelDescriptorRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNotificationChannelDescriptorRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetNotificationChannelDescriptorRequest): GetNotificationChannelDescriptorRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetNotificationChannelDescriptorRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNotificationChannelDescriptorRequest;
  static deserializeBinaryFromReader(message: GetNotificationChannelDescriptorRequest, reader: jspb.BinaryReader): GetNotificationChannelDescriptorRequest;
}

export namespace GetNotificationChannelDescriptorRequest {
  export type AsObject = {
    name: string,
  }
}

export class CreateNotificationChannelRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasNotificationChannel(): boolean;
  clearNotificationChannel(): void;
  getNotificationChannel(): google_monitoring_v3_notification_pb.NotificationChannel | undefined;
  setNotificationChannel(value?: google_monitoring_v3_notification_pb.NotificationChannel): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateNotificationChannelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateNotificationChannelRequest): CreateNotificationChannelRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateNotificationChannelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateNotificationChannelRequest;
  static deserializeBinaryFromReader(message: CreateNotificationChannelRequest, reader: jspb.BinaryReader): CreateNotificationChannelRequest;
}

export namespace CreateNotificationChannelRequest {
  export type AsObject = {
    name: string,
    notificationChannel?: google_monitoring_v3_notification_pb.NotificationChannel.AsObject,
  }
}

export class ListNotificationChannelsRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getFilter(): string;
  setFilter(value: string): void;

  getOrderBy(): string;
  setOrderBy(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListNotificationChannelsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListNotificationChannelsRequest): ListNotificationChannelsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListNotificationChannelsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListNotificationChannelsRequest;
  static deserializeBinaryFromReader(message: ListNotificationChannelsRequest, reader: jspb.BinaryReader): ListNotificationChannelsRequest;
}

export namespace ListNotificationChannelsRequest {
  export type AsObject = {
    name: string,
    filter: string,
    orderBy: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListNotificationChannelsResponse extends jspb.Message {
  clearNotificationChannelsList(): void;
  getNotificationChannelsList(): Array<google_monitoring_v3_notification_pb.NotificationChannel>;
  setNotificationChannelsList(value: Array<google_monitoring_v3_notification_pb.NotificationChannel>): void;
  addNotificationChannels(value?: google_monitoring_v3_notification_pb.NotificationChannel, index?: number): google_monitoring_v3_notification_pb.NotificationChannel;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListNotificationChannelsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListNotificationChannelsResponse): ListNotificationChannelsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListNotificationChannelsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListNotificationChannelsResponse;
  static deserializeBinaryFromReader(message: ListNotificationChannelsResponse, reader: jspb.BinaryReader): ListNotificationChannelsResponse;
}

export namespace ListNotificationChannelsResponse {
  export type AsObject = {
    notificationChannelsList: Array<google_monitoring_v3_notification_pb.NotificationChannel.AsObject>,
    nextPageToken: string,
  }
}

export class GetNotificationChannelRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNotificationChannelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetNotificationChannelRequest): GetNotificationChannelRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetNotificationChannelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNotificationChannelRequest;
  static deserializeBinaryFromReader(message: GetNotificationChannelRequest, reader: jspb.BinaryReader): GetNotificationChannelRequest;
}

export namespace GetNotificationChannelRequest {
  export type AsObject = {
    name: string,
  }
}

export class UpdateNotificationChannelRequest extends jspb.Message {
  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  hasNotificationChannel(): boolean;
  clearNotificationChannel(): void;
  getNotificationChannel(): google_monitoring_v3_notification_pb.NotificationChannel | undefined;
  setNotificationChannel(value?: google_monitoring_v3_notification_pb.NotificationChannel): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateNotificationChannelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateNotificationChannelRequest): UpdateNotificationChannelRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateNotificationChannelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateNotificationChannelRequest;
  static deserializeBinaryFromReader(message: UpdateNotificationChannelRequest, reader: jspb.BinaryReader): UpdateNotificationChannelRequest;
}

export namespace UpdateNotificationChannelRequest {
  export type AsObject = {
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    notificationChannel?: google_monitoring_v3_notification_pb.NotificationChannel.AsObject,
  }
}

export class DeleteNotificationChannelRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getForce(): boolean;
  setForce(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteNotificationChannelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteNotificationChannelRequest): DeleteNotificationChannelRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteNotificationChannelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteNotificationChannelRequest;
  static deserializeBinaryFromReader(message: DeleteNotificationChannelRequest, reader: jspb.BinaryReader): DeleteNotificationChannelRequest;
}

export namespace DeleteNotificationChannelRequest {
  export type AsObject = {
    name: string,
    force: boolean,
  }
}

export class SendNotificationChannelVerificationCodeRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendNotificationChannelVerificationCodeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SendNotificationChannelVerificationCodeRequest): SendNotificationChannelVerificationCodeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SendNotificationChannelVerificationCodeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendNotificationChannelVerificationCodeRequest;
  static deserializeBinaryFromReader(message: SendNotificationChannelVerificationCodeRequest, reader: jspb.BinaryReader): SendNotificationChannelVerificationCodeRequest;
}

export namespace SendNotificationChannelVerificationCodeRequest {
  export type AsObject = {
    name: string,
  }
}

export class GetNotificationChannelVerificationCodeRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasExpireTime(): boolean;
  clearExpireTime(): void;
  getExpireTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpireTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNotificationChannelVerificationCodeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetNotificationChannelVerificationCodeRequest): GetNotificationChannelVerificationCodeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetNotificationChannelVerificationCodeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNotificationChannelVerificationCodeRequest;
  static deserializeBinaryFromReader(message: GetNotificationChannelVerificationCodeRequest, reader: jspb.BinaryReader): GetNotificationChannelVerificationCodeRequest;
}

export namespace GetNotificationChannelVerificationCodeRequest {
  export type AsObject = {
    name: string,
    expireTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class GetNotificationChannelVerificationCodeResponse extends jspb.Message {
  getCode(): string;
  setCode(value: string): void;

  hasExpireTime(): boolean;
  clearExpireTime(): void;
  getExpireTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpireTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNotificationChannelVerificationCodeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetNotificationChannelVerificationCodeResponse): GetNotificationChannelVerificationCodeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetNotificationChannelVerificationCodeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNotificationChannelVerificationCodeResponse;
  static deserializeBinaryFromReader(message: GetNotificationChannelVerificationCodeResponse, reader: jspb.BinaryReader): GetNotificationChannelVerificationCodeResponse;
}

export namespace GetNotificationChannelVerificationCodeResponse {
  export type AsObject = {
    code: string,
    expireTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class VerifyNotificationChannelRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getCode(): string;
  setCode(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyNotificationChannelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyNotificationChannelRequest): VerifyNotificationChannelRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VerifyNotificationChannelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyNotificationChannelRequest;
  static deserializeBinaryFromReader(message: VerifyNotificationChannelRequest, reader: jspb.BinaryReader): VerifyNotificationChannelRequest;
}

export namespace VerifyNotificationChannelRequest {
  export type AsObject = {
    name: string,
    code: string,
  }
}

