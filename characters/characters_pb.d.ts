// package: mruv
// file: characters/characters.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../google/api/annotations_pb";
import * as common_health_pb from "../common/health_pb";
import * as characters_characters_model_pb from "../characters/characters_model_pb";

export class DeathStreamRequest extends jspb.Message {
  clearDeathTypesList(): void;
  getDeathTypesList(): Array<characters_characters_model_pb.DeathTypeMap[keyof characters_characters_model_pb.DeathTypeMap]>;
  setDeathTypesList(value: Array<characters_characters_model_pb.DeathTypeMap[keyof characters_characters_model_pb.DeathTypeMap]>): void;
  addDeathTypes(value: characters_characters_model_pb.DeathTypeMap[keyof characters_characters_model_pb.DeathTypeMap], index?: number): characters_characters_model_pb.DeathTypeMap[keyof characters_characters_model_pb.DeathTypeMap];

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeathStreamRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeathStreamRequest): DeathStreamRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeathStreamRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeathStreamRequest;
  static deserializeBinaryFromReader(message: DeathStreamRequest, reader: jspb.BinaryReader): DeathStreamRequest;
}

export namespace DeathStreamRequest {
  export type AsObject = {
    deathTypesList: Array<characters_characters_model_pb.DeathTypeMap[keyof characters_characters_model_pb.DeathTypeMap]>,
  }
}

export class DeathStreamResponse extends jspb.Message {
  hasCharacter(): boolean;
  clearCharacter(): void;
  getCharacter(): characters_characters_model_pb.Character | undefined;
  setCharacter(value?: characters_characters_model_pb.Character): void;

  getDeathType(): characters_characters_model_pb.DeathTypeMap[keyof characters_characters_model_pb.DeathTypeMap];
  setDeathType(value: characters_characters_model_pb.DeathTypeMap[keyof characters_characters_model_pb.DeathTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeathStreamResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeathStreamResponse): DeathStreamResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeathStreamResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeathStreamResponse;
  static deserializeBinaryFromReader(message: DeathStreamResponse, reader: jspb.BinaryReader): DeathStreamResponse;
}

export namespace DeathStreamResponse {
  export type AsObject = {
    character?: characters_characters_model_pb.Character.AsObject,
    deathType: characters_characters_model_pb.DeathTypeMap[keyof characters_characters_model_pb.DeathTypeMap],
  }
}

