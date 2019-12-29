// package: google.cloud.binaryauthorization.v1beta1
// file: google/cloud/binaryauthorization/v1beta1/service.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";
import * as google_api_client_pb from "../../../../google/api/client_pb";
import * as google_api_field_behavior_pb from "../../../../google/api/field_behavior_pb";
import * as google_api_resource_pb from "../../../../google/api/resource_pb";
import * as google_cloud_binaryauthorization_v1beta1_resources_pb from "../../../../google/cloud/binaryauthorization/v1beta1/resources_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class GetPolicyRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPolicyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPolicyRequest): GetPolicyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPolicyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPolicyRequest;
  static deserializeBinaryFromReader(message: GetPolicyRequest, reader: jspb.BinaryReader): GetPolicyRequest;
}

export namespace GetPolicyRequest {
  export type AsObject = {
    name: string,
  }
}

export class UpdatePolicyRequest extends jspb.Message {
  hasPolicy(): boolean;
  clearPolicy(): void;
  getPolicy(): google_cloud_binaryauthorization_v1beta1_resources_pb.Policy | undefined;
  setPolicy(value?: google_cloud_binaryauthorization_v1beta1_resources_pb.Policy): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdatePolicyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdatePolicyRequest): UpdatePolicyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdatePolicyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdatePolicyRequest;
  static deserializeBinaryFromReader(message: UpdatePolicyRequest, reader: jspb.BinaryReader): UpdatePolicyRequest;
}

export namespace UpdatePolicyRequest {
  export type AsObject = {
    policy?: google_cloud_binaryauthorization_v1beta1_resources_pb.Policy.AsObject,
  }
}

export class CreateAttestorRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getAttestorId(): string;
  setAttestorId(value: string): void;

  hasAttestor(): boolean;
  clearAttestor(): void;
  getAttestor(): google_cloud_binaryauthorization_v1beta1_resources_pb.Attestor | undefined;
  setAttestor(value?: google_cloud_binaryauthorization_v1beta1_resources_pb.Attestor): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAttestorRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAttestorRequest): CreateAttestorRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateAttestorRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAttestorRequest;
  static deserializeBinaryFromReader(message: CreateAttestorRequest, reader: jspb.BinaryReader): CreateAttestorRequest;
}

export namespace CreateAttestorRequest {
  export type AsObject = {
    parent: string,
    attestorId: string,
    attestor?: google_cloud_binaryauthorization_v1beta1_resources_pb.Attestor.AsObject,
  }
}

export class GetAttestorRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAttestorRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAttestorRequest): GetAttestorRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAttestorRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAttestorRequest;
  static deserializeBinaryFromReader(message: GetAttestorRequest, reader: jspb.BinaryReader): GetAttestorRequest;
}

export namespace GetAttestorRequest {
  export type AsObject = {
    name: string,
  }
}

export class UpdateAttestorRequest extends jspb.Message {
  hasAttestor(): boolean;
  clearAttestor(): void;
  getAttestor(): google_cloud_binaryauthorization_v1beta1_resources_pb.Attestor | undefined;
  setAttestor(value?: google_cloud_binaryauthorization_v1beta1_resources_pb.Attestor): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAttestorRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAttestorRequest): UpdateAttestorRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateAttestorRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAttestorRequest;
  static deserializeBinaryFromReader(message: UpdateAttestorRequest, reader: jspb.BinaryReader): UpdateAttestorRequest;
}

export namespace UpdateAttestorRequest {
  export type AsObject = {
    attestor?: google_cloud_binaryauthorization_v1beta1_resources_pb.Attestor.AsObject,
  }
}

export class ListAttestorsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAttestorsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListAttestorsRequest): ListAttestorsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAttestorsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAttestorsRequest;
  static deserializeBinaryFromReader(message: ListAttestorsRequest, reader: jspb.BinaryReader): ListAttestorsRequest;
}

export namespace ListAttestorsRequest {
  export type AsObject = {
    parent: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListAttestorsResponse extends jspb.Message {
  clearAttestorsList(): void;
  getAttestorsList(): Array<google_cloud_binaryauthorization_v1beta1_resources_pb.Attestor>;
  setAttestorsList(value: Array<google_cloud_binaryauthorization_v1beta1_resources_pb.Attestor>): void;
  addAttestors(value?: google_cloud_binaryauthorization_v1beta1_resources_pb.Attestor, index?: number): google_cloud_binaryauthorization_v1beta1_resources_pb.Attestor;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAttestorsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListAttestorsResponse): ListAttestorsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAttestorsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAttestorsResponse;
  static deserializeBinaryFromReader(message: ListAttestorsResponse, reader: jspb.BinaryReader): ListAttestorsResponse;
}

export namespace ListAttestorsResponse {
  export type AsObject = {
    attestorsList: Array<google_cloud_binaryauthorization_v1beta1_resources_pb.Attestor.AsObject>,
    nextPageToken: string,
  }
}

export class DeleteAttestorRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAttestorRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAttestorRequest): DeleteAttestorRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteAttestorRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAttestorRequest;
  static deserializeBinaryFromReader(message: DeleteAttestorRequest, reader: jspb.BinaryReader): DeleteAttestorRequest;
}

export namespace DeleteAttestorRequest {
  export type AsObject = {
    name: string,
  }
}

