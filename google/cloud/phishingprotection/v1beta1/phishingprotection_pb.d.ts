// package: google.cloud.phishingprotection.v1beta1
// file: google/cloud/phishingprotection/v1beta1/phishingprotection.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";
import * as google_api_client_pb from "../../../../google/api/client_pb";
import * as google_api_field_behavior_pb from "../../../../google/api/field_behavior_pb";
import * as google_api_resource_pb from "../../../../google/api/resource_pb";

export class ReportPhishingRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getUri(): string;
  setUri(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReportPhishingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReportPhishingRequest): ReportPhishingRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReportPhishingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReportPhishingRequest;
  static deserializeBinaryFromReader(message: ReportPhishingRequest, reader: jspb.BinaryReader): ReportPhishingRequest;
}

export namespace ReportPhishingRequest {
  export type AsObject = {
    parent: string,
    uri: string,
  }
}

export class ReportPhishingResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReportPhishingResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ReportPhishingResponse): ReportPhishingResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReportPhishingResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReportPhishingResponse;
  static deserializeBinaryFromReader(message: ReportPhishingResponse, reader: jspb.BinaryReader): ReportPhishingResponse;
}

export namespace ReportPhishingResponse {
  export type AsObject = {
  }
}

