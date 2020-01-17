// package: mruv
// file: server/server.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../google/api/annotations_pb";
import * as server_server_model_pb from "../server/server_model_pb";

export class RegisterServerRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterServerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterServerRequest): RegisterServerRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegisterServerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterServerRequest;
  static deserializeBinaryFromReader(message: RegisterServerRequest, reader: jspb.BinaryReader): RegisterServerRequest;
}

export namespace RegisterServerRequest {
  export type AsObject = {
  }
}

export class RegisterServerResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterServerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterServerResponse): RegisterServerResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegisterServerResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterServerResponse;
  static deserializeBinaryFromReader(message: RegisterServerResponse, reader: jspb.BinaryReader): RegisterServerResponse;
}

export namespace RegisterServerResponse {
  export type AsObject = {
  }
}

