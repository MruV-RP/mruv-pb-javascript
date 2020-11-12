// package: mruv.organizations
// file: organizations/organizations.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../google/api/annotations_pb";

export class CreateOrganizationRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateOrganizationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateOrganizationRequest): CreateOrganizationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateOrganizationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateOrganizationRequest;
  static deserializeBinaryFromReader(message: CreateOrganizationRequest, reader: jspb.BinaryReader): CreateOrganizationRequest;
}

export namespace CreateOrganizationRequest {
  export type AsObject = {
  }
}

export class CreateOrganizationResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateOrganizationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateOrganizationResponse): CreateOrganizationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateOrganizationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateOrganizationResponse;
  static deserializeBinaryFromReader(message: CreateOrganizationResponse, reader: jspb.BinaryReader): CreateOrganizationResponse;
}

export namespace CreateOrganizationResponse {
  export type AsObject = {
  }
}

export class GetOrganizationRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOrganizationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetOrganizationRequest): GetOrganizationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetOrganizationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOrganizationRequest;
  static deserializeBinaryFromReader(message: GetOrganizationRequest, reader: jspb.BinaryReader): GetOrganizationRequest;
}

export namespace GetOrganizationRequest {
  export type AsObject = {
    id: number,
  }
}

export class GetOrganizationResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOrganizationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetOrganizationResponse): GetOrganizationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetOrganizationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOrganizationResponse;
  static deserializeBinaryFromReader(message: GetOrganizationResponse, reader: jspb.BinaryReader): GetOrganizationResponse;
}

export namespace GetOrganizationResponse {
  export type AsObject = {
  }
}

export class UpdateOrganizationRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateOrganizationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateOrganizationRequest): UpdateOrganizationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateOrganizationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateOrganizationRequest;
  static deserializeBinaryFromReader(message: UpdateOrganizationRequest, reader: jspb.BinaryReader): UpdateOrganizationRequest;
}

export namespace UpdateOrganizationRequest {
  export type AsObject = {
    id: number,
  }
}

export class UpdateOrganizationResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateOrganizationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateOrganizationResponse): UpdateOrganizationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateOrganizationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateOrganizationResponse;
  static deserializeBinaryFromReader(message: UpdateOrganizationResponse, reader: jspb.BinaryReader): UpdateOrganizationResponse;
}

export namespace UpdateOrganizationResponse {
  export type AsObject = {
  }
}

export class DeleteOrganizationRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteOrganizationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteOrganizationRequest): DeleteOrganizationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteOrganizationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteOrganizationRequest;
  static deserializeBinaryFromReader(message: DeleteOrganizationRequest, reader: jspb.BinaryReader): DeleteOrganizationRequest;
}

export namespace DeleteOrganizationRequest {
  export type AsObject = {
    id: number,
  }
}

export class DeleteOrganizationResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteOrganizationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteOrganizationResponse): DeleteOrganizationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteOrganizationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteOrganizationResponse;
  static deserializeBinaryFromReader(message: DeleteOrganizationResponse, reader: jspb.BinaryReader): DeleteOrganizationResponse;
}

export namespace DeleteOrganizationResponse {
  export type AsObject = {
  }
}

export class AssignLeaderRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssignLeaderRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AssignLeaderRequest): AssignLeaderRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssignLeaderRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssignLeaderRequest;
  static deserializeBinaryFromReader(message: AssignLeaderRequest, reader: jspb.BinaryReader): AssignLeaderRequest;
}

export namespace AssignLeaderRequest {
  export type AsObject = {
    id: number,
  }
}

export class AssignLeaderResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssignLeaderResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AssignLeaderResponse): AssignLeaderResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssignLeaderResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssignLeaderResponse;
  static deserializeBinaryFromReader(message: AssignLeaderResponse, reader: jspb.BinaryReader): AssignLeaderResponse;
}

export namespace AssignLeaderResponse {
  export type AsObject = {
  }
}

export class UnassignLeaderRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnassignLeaderRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UnassignLeaderRequest): UnassignLeaderRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UnassignLeaderRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnassignLeaderRequest;
  static deserializeBinaryFromReader(message: UnassignLeaderRequest, reader: jspb.BinaryReader): UnassignLeaderRequest;
}

export namespace UnassignLeaderRequest {
  export type AsObject = {
    id: number,
  }
}

export class UnassignLeaderResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnassignLeaderResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UnassignLeaderResponse): UnassignLeaderResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UnassignLeaderResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnassignLeaderResponse;
  static deserializeBinaryFromReader(message: UnassignLeaderResponse, reader: jspb.BinaryReader): UnassignLeaderResponse;
}

export namespace UnassignLeaderResponse {
  export type AsObject = {
  }
}

