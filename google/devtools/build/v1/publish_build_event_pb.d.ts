// package: google.devtools.build.v1
// file: google/devtools/build/v1/publish_build_event.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";
import * as google_devtools_build_v1_build_events_pb from "../../../../google/devtools/build/v1/build_events_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class PublishLifecycleEventRequest extends jspb.Message {
  getServiceLevel(): PublishLifecycleEventRequest.ServiceLevelMap[keyof PublishLifecycleEventRequest.ServiceLevelMap];
  setServiceLevel(value: PublishLifecycleEventRequest.ServiceLevelMap[keyof PublishLifecycleEventRequest.ServiceLevelMap]): void;

  hasBuildEvent(): boolean;
  clearBuildEvent(): void;
  getBuildEvent(): OrderedBuildEvent | undefined;
  setBuildEvent(value?: OrderedBuildEvent): void;

  hasStreamTimeout(): boolean;
  clearStreamTimeout(): void;
  getStreamTimeout(): google_protobuf_duration_pb.Duration | undefined;
  setStreamTimeout(value?: google_protobuf_duration_pb.Duration): void;

  clearNotificationKeywordsList(): void;
  getNotificationKeywordsList(): Array<string>;
  setNotificationKeywordsList(value: Array<string>): void;
  addNotificationKeywords(value: string, index?: number): string;

  getProjectId(): string;
  setProjectId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublishLifecycleEventRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PublishLifecycleEventRequest): PublishLifecycleEventRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PublishLifecycleEventRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublishLifecycleEventRequest;
  static deserializeBinaryFromReader(message: PublishLifecycleEventRequest, reader: jspb.BinaryReader): PublishLifecycleEventRequest;
}

export namespace PublishLifecycleEventRequest {
  export type AsObject = {
    serviceLevel: PublishLifecycleEventRequest.ServiceLevelMap[keyof PublishLifecycleEventRequest.ServiceLevelMap],
    buildEvent?: OrderedBuildEvent.AsObject,
    streamTimeout?: google_protobuf_duration_pb.Duration.AsObject,
    notificationKeywordsList: Array<string>,
    projectId: string,
  }

  export interface ServiceLevelMap {
    NONINTERACTIVE: 0;
    INTERACTIVE: 1;
  }

  export const ServiceLevel: ServiceLevelMap;
}

export class PublishBuildToolEventStreamResponse extends jspb.Message {
  hasStreamId(): boolean;
  clearStreamId(): void;
  getStreamId(): google_devtools_build_v1_build_events_pb.StreamId | undefined;
  setStreamId(value?: google_devtools_build_v1_build_events_pb.StreamId): void;

  getSequenceNumber(): number;
  setSequenceNumber(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublishBuildToolEventStreamResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PublishBuildToolEventStreamResponse): PublishBuildToolEventStreamResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PublishBuildToolEventStreamResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublishBuildToolEventStreamResponse;
  static deserializeBinaryFromReader(message: PublishBuildToolEventStreamResponse, reader: jspb.BinaryReader): PublishBuildToolEventStreamResponse;
}

export namespace PublishBuildToolEventStreamResponse {
  export type AsObject = {
    streamId?: google_devtools_build_v1_build_events_pb.StreamId.AsObject,
    sequenceNumber: number,
  }
}

export class OrderedBuildEvent extends jspb.Message {
  hasStreamId(): boolean;
  clearStreamId(): void;
  getStreamId(): google_devtools_build_v1_build_events_pb.StreamId | undefined;
  setStreamId(value?: google_devtools_build_v1_build_events_pb.StreamId): void;

  getSequenceNumber(): number;
  setSequenceNumber(value: number): void;

  hasEvent(): boolean;
  clearEvent(): void;
  getEvent(): google_devtools_build_v1_build_events_pb.BuildEvent | undefined;
  setEvent(value?: google_devtools_build_v1_build_events_pb.BuildEvent): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderedBuildEvent.AsObject;
  static toObject(includeInstance: boolean, msg: OrderedBuildEvent): OrderedBuildEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrderedBuildEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderedBuildEvent;
  static deserializeBinaryFromReader(message: OrderedBuildEvent, reader: jspb.BinaryReader): OrderedBuildEvent;
}

export namespace OrderedBuildEvent {
  export type AsObject = {
    streamId?: google_devtools_build_v1_build_events_pb.StreamId.AsObject,
    sequenceNumber: number,
    event?: google_devtools_build_v1_build_events_pb.BuildEvent.AsObject,
  }
}

export class PublishBuildToolEventStreamRequest extends jspb.Message {
  hasOrderedBuildEvent(): boolean;
  clearOrderedBuildEvent(): void;
  getOrderedBuildEvent(): OrderedBuildEvent | undefined;
  setOrderedBuildEvent(value?: OrderedBuildEvent): void;

  clearNotificationKeywordsList(): void;
  getNotificationKeywordsList(): Array<string>;
  setNotificationKeywordsList(value: Array<string>): void;
  addNotificationKeywords(value: string, index?: number): string;

  getProjectId(): string;
  setProjectId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublishBuildToolEventStreamRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PublishBuildToolEventStreamRequest): PublishBuildToolEventStreamRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PublishBuildToolEventStreamRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublishBuildToolEventStreamRequest;
  static deserializeBinaryFromReader(message: PublishBuildToolEventStreamRequest, reader: jspb.BinaryReader): PublishBuildToolEventStreamRequest;
}

export namespace PublishBuildToolEventStreamRequest {
  export type AsObject = {
    orderedBuildEvent?: OrderedBuildEvent.AsObject,
    notificationKeywordsList: Array<string>,
    projectId: string,
  }
}

