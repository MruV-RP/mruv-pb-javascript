// package: google.iam.credentials.v1
// file: google/iam/credentials/v1/common.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class GenerateAccessTokenRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  clearDelegatesList(): void;
  getDelegatesList(): Array<string>;
  setDelegatesList(value: Array<string>): void;
  addDelegates(value: string, index?: number): string;

  clearScopeList(): void;
  getScopeList(): Array<string>;
  setScopeList(value: Array<string>): void;
  addScope(value: string, index?: number): string;

  hasLifetime(): boolean;
  clearLifetime(): void;
  getLifetime(): google_protobuf_duration_pb.Duration | undefined;
  setLifetime(value?: google_protobuf_duration_pb.Duration): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateAccessTokenRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateAccessTokenRequest): GenerateAccessTokenRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GenerateAccessTokenRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateAccessTokenRequest;
  static deserializeBinaryFromReader(message: GenerateAccessTokenRequest, reader: jspb.BinaryReader): GenerateAccessTokenRequest;
}

export namespace GenerateAccessTokenRequest {
  export type AsObject = {
    name: string,
    delegatesList: Array<string>,
    scopeList: Array<string>,
    lifetime?: google_protobuf_duration_pb.Duration.AsObject,
  }
}

export class GenerateAccessTokenResponse extends jspb.Message {
  getAccessToken(): string;
  setAccessToken(value: string): void;

  hasExpireTime(): boolean;
  clearExpireTime(): void;
  getExpireTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpireTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateAccessTokenResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateAccessTokenResponse): GenerateAccessTokenResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GenerateAccessTokenResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateAccessTokenResponse;
  static deserializeBinaryFromReader(message: GenerateAccessTokenResponse, reader: jspb.BinaryReader): GenerateAccessTokenResponse;
}

export namespace GenerateAccessTokenResponse {
  export type AsObject = {
    accessToken: string,
    expireTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class SignBlobRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  clearDelegatesList(): void;
  getDelegatesList(): Array<string>;
  setDelegatesList(value: Array<string>): void;
  addDelegates(value: string, index?: number): string;

  getPayload(): Uint8Array | string;
  getPayload_asU8(): Uint8Array;
  getPayload_asB64(): string;
  setPayload(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignBlobRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SignBlobRequest): SignBlobRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SignBlobRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignBlobRequest;
  static deserializeBinaryFromReader(message: SignBlobRequest, reader: jspb.BinaryReader): SignBlobRequest;
}

export namespace SignBlobRequest {
  export type AsObject = {
    name: string,
    delegatesList: Array<string>,
    payload: Uint8Array | string,
  }
}

export class SignBlobResponse extends jspb.Message {
  getKeyId(): string;
  setKeyId(value: string): void;

  getSignedBlob(): Uint8Array | string;
  getSignedBlob_asU8(): Uint8Array;
  getSignedBlob_asB64(): string;
  setSignedBlob(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignBlobResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SignBlobResponse): SignBlobResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SignBlobResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignBlobResponse;
  static deserializeBinaryFromReader(message: SignBlobResponse, reader: jspb.BinaryReader): SignBlobResponse;
}

export namespace SignBlobResponse {
  export type AsObject = {
    keyId: string,
    signedBlob: Uint8Array | string,
  }
}

export class SignJwtRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  clearDelegatesList(): void;
  getDelegatesList(): Array<string>;
  setDelegatesList(value: Array<string>): void;
  addDelegates(value: string, index?: number): string;

  getPayload(): string;
  setPayload(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignJwtRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SignJwtRequest): SignJwtRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SignJwtRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignJwtRequest;
  static deserializeBinaryFromReader(message: SignJwtRequest, reader: jspb.BinaryReader): SignJwtRequest;
}

export namespace SignJwtRequest {
  export type AsObject = {
    name: string,
    delegatesList: Array<string>,
    payload: string,
  }
}

export class SignJwtResponse extends jspb.Message {
  getKeyId(): string;
  setKeyId(value: string): void;

  getSignedJwt(): string;
  setSignedJwt(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignJwtResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SignJwtResponse): SignJwtResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SignJwtResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignJwtResponse;
  static deserializeBinaryFromReader(message: SignJwtResponse, reader: jspb.BinaryReader): SignJwtResponse;
}

export namespace SignJwtResponse {
  export type AsObject = {
    keyId: string,
    signedJwt: string,
  }
}

export class GenerateIdTokenRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  clearDelegatesList(): void;
  getDelegatesList(): Array<string>;
  setDelegatesList(value: Array<string>): void;
  addDelegates(value: string, index?: number): string;

  getAudience(): string;
  setAudience(value: string): void;

  getIncludeEmail(): boolean;
  setIncludeEmail(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateIdTokenRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateIdTokenRequest): GenerateIdTokenRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GenerateIdTokenRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateIdTokenRequest;
  static deserializeBinaryFromReader(message: GenerateIdTokenRequest, reader: jspb.BinaryReader): GenerateIdTokenRequest;
}

export namespace GenerateIdTokenRequest {
  export type AsObject = {
    name: string,
    delegatesList: Array<string>,
    audience: string,
    includeEmail: boolean,
  }
}

export class GenerateIdTokenResponse extends jspb.Message {
  getToken(): string;
  setToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateIdTokenResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateIdTokenResponse): GenerateIdTokenResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GenerateIdTokenResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateIdTokenResponse;
  static deserializeBinaryFromReader(message: GenerateIdTokenResponse, reader: jspb.BinaryReader): GenerateIdTokenResponse;
}

export namespace GenerateIdTokenResponse {
  export type AsObject = {
    token: string,
  }
}

