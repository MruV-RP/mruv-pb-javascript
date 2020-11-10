// package: mruv
// file: accounts/accounts.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../google/api/annotations_pb";

export class RegisterAccountRequest extends jspb.Message {
  getLogin(): string;
  setLogin(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterAccountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterAccountRequest): RegisterAccountRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegisterAccountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterAccountRequest;
  static deserializeBinaryFromReader(message: RegisterAccountRequest, reader: jspb.BinaryReader): RegisterAccountRequest;
}

export namespace RegisterAccountRequest {
  export type AsObject = {
    login: string,
    password: string,
    email: string,
  }
}

export class RegisterAccountResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  getAccountId(): number;
  setAccountId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterAccountResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterAccountResponse): RegisterAccountResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegisterAccountResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterAccountResponse;
  static deserializeBinaryFromReader(message: RegisterAccountResponse, reader: jspb.BinaryReader): RegisterAccountResponse;
}

export namespace RegisterAccountResponse {
  export type AsObject = {
    success: boolean,
    accountId: number,
  }
}

export class LogInRequest extends jspb.Message {
  getLogin(): string;
  setLogin(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LogInRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LogInRequest): LogInRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LogInRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LogInRequest;
  static deserializeBinaryFromReader(message: LogInRequest, reader: jspb.BinaryReader): LogInRequest;
}

export namespace LogInRequest {
  export type AsObject = {
    login: string,
    password: string,
  }
}

export class LogInResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  getAccountId(): number;
  setAccountId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LogInResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LogInResponse): LogInResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LogInResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LogInResponse;
  static deserializeBinaryFromReader(message: LogInResponse, reader: jspb.BinaryReader): LogInResponse;
}

export namespace LogInResponse {
  export type AsObject = {
    success: boolean,
    accountId: number,
  }
}

export class GetAccountRequest extends jspb.Message {
  getLogin(): string;
  setLogin(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAccountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAccountRequest): GetAccountRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAccountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAccountRequest;
  static deserializeBinaryFromReader(message: GetAccountRequest, reader: jspb.BinaryReader): GetAccountRequest;
}

export namespace GetAccountRequest {
  export type AsObject = {
    login: string,
  }
}

export class GetAccountResponse extends jspb.Message {
  getLogin(): string;
  setLogin(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAccountResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAccountResponse): GetAccountResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAccountResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAccountResponse;
  static deserializeBinaryFromReader(message: GetAccountResponse, reader: jspb.BinaryReader): GetAccountResponse;
}

export namespace GetAccountResponse {
  export type AsObject = {
    login: string,
    email: string,
  }
}

export class GetAccountCharactersRequest extends jspb.Message {
  getLogin(): string;
  setLogin(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAccountCharactersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAccountCharactersRequest): GetAccountCharactersRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAccountCharactersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAccountCharactersRequest;
  static deserializeBinaryFromReader(message: GetAccountCharactersRequest, reader: jspb.BinaryReader): GetAccountCharactersRequest;
}

export namespace GetAccountCharactersRequest {
  export type AsObject = {
    login: string,
  }
}

export class GetAccountCharactersResponse extends jspb.Message {
  clearCharacterIdsList(): void;
  getCharacterIdsList(): Array<number>;
  setCharacterIdsList(value: Array<number>): void;
  addCharacterIds(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAccountCharactersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAccountCharactersResponse): GetAccountCharactersResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAccountCharactersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAccountCharactersResponse;
  static deserializeBinaryFromReader(message: GetAccountCharactersResponse, reader: jspb.BinaryReader): GetAccountCharactersResponse;
}

export namespace GetAccountCharactersResponse {
  export type AsObject = {
    characterIdsList: Array<number>,
  }
}

export class IsAccountExistRequest extends jspb.Message {
  getLogin(): string;
  setLogin(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IsAccountExistRequest.AsObject;
  static toObject(includeInstance: boolean, msg: IsAccountExistRequest): IsAccountExistRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IsAccountExistRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IsAccountExistRequest;
  static deserializeBinaryFromReader(message: IsAccountExistRequest, reader: jspb.BinaryReader): IsAccountExistRequest;
}

export namespace IsAccountExistRequest {
  export type AsObject = {
    login: string,
  }
}

export class IsAccountExistResponse extends jspb.Message {
  getExists(): boolean;
  setExists(value: boolean): void;

  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IsAccountExistResponse.AsObject;
  static toObject(includeInstance: boolean, msg: IsAccountExistResponse): IsAccountExistResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IsAccountExistResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IsAccountExistResponse;
  static deserializeBinaryFromReader(message: IsAccountExistResponse, reader: jspb.BinaryReader): IsAccountExistResponse;
}

export namespace IsAccountExistResponse {
  export type AsObject = {
    exists: boolean,
    id: number,
  }
}

