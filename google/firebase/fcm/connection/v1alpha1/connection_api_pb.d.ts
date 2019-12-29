// package: google.firebase.fcm.connection.v1alpha1
// file: google/firebase/fcm/connection/v1alpha1/connection_api.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class UpstreamRequest extends jspb.Message {
  hasAck(): boolean;
  clearAck(): void;
  getAck(): Ack | undefined;
  setAck(value?: Ack): void;

  getRequestTypeCase(): UpstreamRequest.RequestTypeCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpstreamRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpstreamRequest): UpstreamRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpstreamRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpstreamRequest;
  static deserializeBinaryFromReader(message: UpstreamRequest, reader: jspb.BinaryReader): UpstreamRequest;
}

export namespace UpstreamRequest {
  export type AsObject = {
    ack?: Ack.AsObject,
  }

  export enum RequestTypeCase {
    REQUEST_TYPE_NOT_SET = 0,
    ACK = 1,
  }
}

export class DownstreamResponse extends jspb.Message {
  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): Message | undefined;
  setMessage(value?: Message): void;

  getResponseTypeCase(): DownstreamResponse.ResponseTypeCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DownstreamResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DownstreamResponse): DownstreamResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DownstreamResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DownstreamResponse;
  static deserializeBinaryFromReader(message: DownstreamResponse, reader: jspb.BinaryReader): DownstreamResponse;
}

export namespace DownstreamResponse {
  export type AsObject = {
    message?: Message.AsObject,
  }

  export enum ResponseTypeCase {
    RESPONSE_TYPE_NOT_SET = 0,
    MESSAGE = 1,
  }
}

export class Ack extends jspb.Message {
  getMessageId(): string;
  setMessageId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Ack.AsObject;
  static toObject(includeInstance: boolean, msg: Ack): Ack.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Ack, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Ack;
  static deserializeBinaryFromReader(message: Ack, reader: jspb.BinaryReader): Ack;
}

export namespace Ack {
  export type AsObject = {
    messageId: string,
  }
}

export class Message extends jspb.Message {
  getMessageId(): string;
  setMessageId(value: string): void;

  hasCreateTime(): boolean;
  clearCreateTime(): void;
  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasExpireTime(): boolean;
  clearExpireTime(): void;
  getExpireTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpireTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getDataMap(): jspb.Map<string, string>;
  clearDataMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Message.AsObject;
  static toObject(includeInstance: boolean, msg: Message): Message.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Message, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Message;
  static deserializeBinaryFromReader(message: Message, reader: jspb.BinaryReader): Message;
}

export namespace Message {
  export type AsObject = {
    messageId: string,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    expireTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    dataMap: Array<[string, string]>,
  }
}

