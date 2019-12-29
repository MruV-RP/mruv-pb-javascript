// package: google.devtools.clouderrorreporting.v1beta1
// file: google/devtools/clouderrorreporting/v1beta1/report_errors_service.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";
import * as google_api_client_pb from "../../../../google/api/client_pb";
import * as google_api_field_behavior_pb from "../../../../google/api/field_behavior_pb";
import * as google_api_resource_pb from "../../../../google/api/resource_pb";
import * as google_devtools_clouderrorreporting_v1beta1_common_pb from "../../../../google/devtools/clouderrorreporting/v1beta1/common_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class ReportErrorEventRequest extends jspb.Message {
  getProjectName(): string;
  setProjectName(value: string): void;

  hasEvent(): boolean;
  clearEvent(): void;
  getEvent(): ReportedErrorEvent | undefined;
  setEvent(value?: ReportedErrorEvent): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReportErrorEventRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReportErrorEventRequest): ReportErrorEventRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReportErrorEventRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReportErrorEventRequest;
  static deserializeBinaryFromReader(message: ReportErrorEventRequest, reader: jspb.BinaryReader): ReportErrorEventRequest;
}

export namespace ReportErrorEventRequest {
  export type AsObject = {
    projectName: string,
    event?: ReportedErrorEvent.AsObject,
  }
}

export class ReportErrorEventResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReportErrorEventResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ReportErrorEventResponse): ReportErrorEventResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReportErrorEventResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReportErrorEventResponse;
  static deserializeBinaryFromReader(message: ReportErrorEventResponse, reader: jspb.BinaryReader): ReportErrorEventResponse;
}

export namespace ReportErrorEventResponse {
  export type AsObject = {
  }
}

export class ReportedErrorEvent extends jspb.Message {
  hasEventTime(): boolean;
  clearEventTime(): void;
  getEventTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEventTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasServiceContext(): boolean;
  clearServiceContext(): void;
  getServiceContext(): google_devtools_clouderrorreporting_v1beta1_common_pb.ServiceContext | undefined;
  setServiceContext(value?: google_devtools_clouderrorreporting_v1beta1_common_pb.ServiceContext): void;

  getMessage(): string;
  setMessage(value: string): void;

  hasContext(): boolean;
  clearContext(): void;
  getContext(): google_devtools_clouderrorreporting_v1beta1_common_pb.ErrorContext | undefined;
  setContext(value?: google_devtools_clouderrorreporting_v1beta1_common_pb.ErrorContext): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReportedErrorEvent.AsObject;
  static toObject(includeInstance: boolean, msg: ReportedErrorEvent): ReportedErrorEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReportedErrorEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReportedErrorEvent;
  static deserializeBinaryFromReader(message: ReportedErrorEvent, reader: jspb.BinaryReader): ReportedErrorEvent;
}

export namespace ReportedErrorEvent {
  export type AsObject = {
    eventTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    serviceContext?: google_devtools_clouderrorreporting_v1beta1_common_pb.ServiceContext.AsObject,
    message: string,
    context?: google_devtools_clouderrorreporting_v1beta1_common_pb.ErrorContext.AsObject,
  }
}

