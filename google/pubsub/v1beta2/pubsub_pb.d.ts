// package: google.pubsub.v1beta2
// file: google/pubsub/v1beta2/pubsub.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class Topic extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Topic.AsObject;
  static toObject(includeInstance: boolean, msg: Topic): Topic.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Topic, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Topic;
  static deserializeBinaryFromReader(message: Topic, reader: jspb.BinaryReader): Topic;
}

export namespace Topic {
  export type AsObject = {
    name: string,
  }
}

export class PubsubMessage extends jspb.Message {
  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  getAttributesMap(): jspb.Map<string, string>;
  clearAttributesMap(): void;
  getMessageId(): string;
  setMessageId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PubsubMessage.AsObject;
  static toObject(includeInstance: boolean, msg: PubsubMessage): PubsubMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PubsubMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PubsubMessage;
  static deserializeBinaryFromReader(message: PubsubMessage, reader: jspb.BinaryReader): PubsubMessage;
}

export namespace PubsubMessage {
  export type AsObject = {
    data: Uint8Array | string,
    attributesMap: Array<[string, string]>,
    messageId: string,
  }
}

export class GetTopicRequest extends jspb.Message {
  getTopic(): string;
  setTopic(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTopicRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTopicRequest): GetTopicRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTopicRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTopicRequest;
  static deserializeBinaryFromReader(message: GetTopicRequest, reader: jspb.BinaryReader): GetTopicRequest;
}

export namespace GetTopicRequest {
  export type AsObject = {
    topic: string,
  }
}

export class PublishRequest extends jspb.Message {
  getTopic(): string;
  setTopic(value: string): void;

  clearMessagesList(): void;
  getMessagesList(): Array<PubsubMessage>;
  setMessagesList(value: Array<PubsubMessage>): void;
  addMessages(value?: PubsubMessage, index?: number): PubsubMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublishRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PublishRequest): PublishRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PublishRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublishRequest;
  static deserializeBinaryFromReader(message: PublishRequest, reader: jspb.BinaryReader): PublishRequest;
}

export namespace PublishRequest {
  export type AsObject = {
    topic: string,
    messagesList: Array<PubsubMessage.AsObject>,
  }
}

export class PublishResponse extends jspb.Message {
  clearMessageIdsList(): void;
  getMessageIdsList(): Array<string>;
  setMessageIdsList(value: Array<string>): void;
  addMessageIds(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublishResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PublishResponse): PublishResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PublishResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublishResponse;
  static deserializeBinaryFromReader(message: PublishResponse, reader: jspb.BinaryReader): PublishResponse;
}

export namespace PublishResponse {
  export type AsObject = {
    messageIdsList: Array<string>,
  }
}

export class ListTopicsRequest extends jspb.Message {
  getProject(): string;
  setProject(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTopicsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListTopicsRequest): ListTopicsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListTopicsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTopicsRequest;
  static deserializeBinaryFromReader(message: ListTopicsRequest, reader: jspb.BinaryReader): ListTopicsRequest;
}

export namespace ListTopicsRequest {
  export type AsObject = {
    project: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListTopicsResponse extends jspb.Message {
  clearTopicsList(): void;
  getTopicsList(): Array<Topic>;
  setTopicsList(value: Array<Topic>): void;
  addTopics(value?: Topic, index?: number): Topic;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTopicsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListTopicsResponse): ListTopicsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListTopicsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTopicsResponse;
  static deserializeBinaryFromReader(message: ListTopicsResponse, reader: jspb.BinaryReader): ListTopicsResponse;
}

export namespace ListTopicsResponse {
  export type AsObject = {
    topicsList: Array<Topic.AsObject>,
    nextPageToken: string,
  }
}

export class ListTopicSubscriptionsRequest extends jspb.Message {
  getTopic(): string;
  setTopic(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTopicSubscriptionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListTopicSubscriptionsRequest): ListTopicSubscriptionsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListTopicSubscriptionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTopicSubscriptionsRequest;
  static deserializeBinaryFromReader(message: ListTopicSubscriptionsRequest, reader: jspb.BinaryReader): ListTopicSubscriptionsRequest;
}

export namespace ListTopicSubscriptionsRequest {
  export type AsObject = {
    topic: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListTopicSubscriptionsResponse extends jspb.Message {
  clearSubscriptionsList(): void;
  getSubscriptionsList(): Array<string>;
  setSubscriptionsList(value: Array<string>): void;
  addSubscriptions(value: string, index?: number): string;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTopicSubscriptionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListTopicSubscriptionsResponse): ListTopicSubscriptionsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListTopicSubscriptionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTopicSubscriptionsResponse;
  static deserializeBinaryFromReader(message: ListTopicSubscriptionsResponse, reader: jspb.BinaryReader): ListTopicSubscriptionsResponse;
}

export namespace ListTopicSubscriptionsResponse {
  export type AsObject = {
    subscriptionsList: Array<string>,
    nextPageToken: string,
  }
}

export class DeleteTopicRequest extends jspb.Message {
  getTopic(): string;
  setTopic(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteTopicRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteTopicRequest): DeleteTopicRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteTopicRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteTopicRequest;
  static deserializeBinaryFromReader(message: DeleteTopicRequest, reader: jspb.BinaryReader): DeleteTopicRequest;
}

export namespace DeleteTopicRequest {
  export type AsObject = {
    topic: string,
  }
}

export class Subscription extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getTopic(): string;
  setTopic(value: string): void;

  hasPushConfig(): boolean;
  clearPushConfig(): void;
  getPushConfig(): PushConfig | undefined;
  setPushConfig(value?: PushConfig): void;

  getAckDeadlineSeconds(): number;
  setAckDeadlineSeconds(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Subscription.AsObject;
  static toObject(includeInstance: boolean, msg: Subscription): Subscription.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Subscription, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Subscription;
  static deserializeBinaryFromReader(message: Subscription, reader: jspb.BinaryReader): Subscription;
}

export namespace Subscription {
  export type AsObject = {
    name: string,
    topic: string,
    pushConfig?: PushConfig.AsObject,
    ackDeadlineSeconds: number,
  }
}

export class PushConfig extends jspb.Message {
  getPushEndpoint(): string;
  setPushEndpoint(value: string): void;

  getAttributesMap(): jspb.Map<string, string>;
  clearAttributesMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PushConfig.AsObject;
  static toObject(includeInstance: boolean, msg: PushConfig): PushConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PushConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PushConfig;
  static deserializeBinaryFromReader(message: PushConfig, reader: jspb.BinaryReader): PushConfig;
}

export namespace PushConfig {
  export type AsObject = {
    pushEndpoint: string,
    attributesMap: Array<[string, string]>,
  }
}

export class ReceivedMessage extends jspb.Message {
  getAckId(): string;
  setAckId(value: string): void;

  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): PubsubMessage | undefined;
  setMessage(value?: PubsubMessage): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReceivedMessage.AsObject;
  static toObject(includeInstance: boolean, msg: ReceivedMessage): ReceivedMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReceivedMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReceivedMessage;
  static deserializeBinaryFromReader(message: ReceivedMessage, reader: jspb.BinaryReader): ReceivedMessage;
}

export namespace ReceivedMessage {
  export type AsObject = {
    ackId: string,
    message?: PubsubMessage.AsObject,
  }
}

export class GetSubscriptionRequest extends jspb.Message {
  getSubscription(): string;
  setSubscription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSubscriptionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSubscriptionRequest): GetSubscriptionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSubscriptionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSubscriptionRequest;
  static deserializeBinaryFromReader(message: GetSubscriptionRequest, reader: jspb.BinaryReader): GetSubscriptionRequest;
}

export namespace GetSubscriptionRequest {
  export type AsObject = {
    subscription: string,
  }
}

export class ListSubscriptionsRequest extends jspb.Message {
  getProject(): string;
  setProject(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSubscriptionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListSubscriptionsRequest): ListSubscriptionsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListSubscriptionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSubscriptionsRequest;
  static deserializeBinaryFromReader(message: ListSubscriptionsRequest, reader: jspb.BinaryReader): ListSubscriptionsRequest;
}

export namespace ListSubscriptionsRequest {
  export type AsObject = {
    project: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListSubscriptionsResponse extends jspb.Message {
  clearSubscriptionsList(): void;
  getSubscriptionsList(): Array<Subscription>;
  setSubscriptionsList(value: Array<Subscription>): void;
  addSubscriptions(value?: Subscription, index?: number): Subscription;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSubscriptionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListSubscriptionsResponse): ListSubscriptionsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListSubscriptionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSubscriptionsResponse;
  static deserializeBinaryFromReader(message: ListSubscriptionsResponse, reader: jspb.BinaryReader): ListSubscriptionsResponse;
}

export namespace ListSubscriptionsResponse {
  export type AsObject = {
    subscriptionsList: Array<Subscription.AsObject>,
    nextPageToken: string,
  }
}

export class DeleteSubscriptionRequest extends jspb.Message {
  getSubscription(): string;
  setSubscription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteSubscriptionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteSubscriptionRequest): DeleteSubscriptionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteSubscriptionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteSubscriptionRequest;
  static deserializeBinaryFromReader(message: DeleteSubscriptionRequest, reader: jspb.BinaryReader): DeleteSubscriptionRequest;
}

export namespace DeleteSubscriptionRequest {
  export type AsObject = {
    subscription: string,
  }
}

export class ModifyPushConfigRequest extends jspb.Message {
  getSubscription(): string;
  setSubscription(value: string): void;

  hasPushConfig(): boolean;
  clearPushConfig(): void;
  getPushConfig(): PushConfig | undefined;
  setPushConfig(value?: PushConfig): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModifyPushConfigRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ModifyPushConfigRequest): ModifyPushConfigRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ModifyPushConfigRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModifyPushConfigRequest;
  static deserializeBinaryFromReader(message: ModifyPushConfigRequest, reader: jspb.BinaryReader): ModifyPushConfigRequest;
}

export namespace ModifyPushConfigRequest {
  export type AsObject = {
    subscription: string,
    pushConfig?: PushConfig.AsObject,
  }
}

export class PullRequest extends jspb.Message {
  getSubscription(): string;
  setSubscription(value: string): void;

  getReturnImmediately(): boolean;
  setReturnImmediately(value: boolean): void;

  getMaxMessages(): number;
  setMaxMessages(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PullRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PullRequest): PullRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PullRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PullRequest;
  static deserializeBinaryFromReader(message: PullRequest, reader: jspb.BinaryReader): PullRequest;
}

export namespace PullRequest {
  export type AsObject = {
    subscription: string,
    returnImmediately: boolean,
    maxMessages: number,
  }
}

export class PullResponse extends jspb.Message {
  clearReceivedMessagesList(): void;
  getReceivedMessagesList(): Array<ReceivedMessage>;
  setReceivedMessagesList(value: Array<ReceivedMessage>): void;
  addReceivedMessages(value?: ReceivedMessage, index?: number): ReceivedMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PullResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PullResponse): PullResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PullResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PullResponse;
  static deserializeBinaryFromReader(message: PullResponse, reader: jspb.BinaryReader): PullResponse;
}

export namespace PullResponse {
  export type AsObject = {
    receivedMessagesList: Array<ReceivedMessage.AsObject>,
  }
}

export class ModifyAckDeadlineRequest extends jspb.Message {
  getSubscription(): string;
  setSubscription(value: string): void;

  getAckId(): string;
  setAckId(value: string): void;

  getAckDeadlineSeconds(): number;
  setAckDeadlineSeconds(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModifyAckDeadlineRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ModifyAckDeadlineRequest): ModifyAckDeadlineRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ModifyAckDeadlineRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModifyAckDeadlineRequest;
  static deserializeBinaryFromReader(message: ModifyAckDeadlineRequest, reader: jspb.BinaryReader): ModifyAckDeadlineRequest;
}

export namespace ModifyAckDeadlineRequest {
  export type AsObject = {
    subscription: string,
    ackId: string,
    ackDeadlineSeconds: number,
  }
}

export class AcknowledgeRequest extends jspb.Message {
  getSubscription(): string;
  setSubscription(value: string): void;

  clearAckIdsList(): void;
  getAckIdsList(): Array<string>;
  setAckIdsList(value: Array<string>): void;
  addAckIds(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AcknowledgeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AcknowledgeRequest): AcknowledgeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AcknowledgeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AcknowledgeRequest;
  static deserializeBinaryFromReader(message: AcknowledgeRequest, reader: jspb.BinaryReader): AcknowledgeRequest;
}

export namespace AcknowledgeRequest {
  export type AsObject = {
    subscription: string,
    ackIdsList: Array<string>,
  }
}

