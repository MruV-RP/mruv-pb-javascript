// package: mruv
// file: accounts/accounts.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../google/api/annotations_pb";
import * as characters_characters_pb from "../characters/characters_pb";

export class AccountID extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountID.AsObject;
  static toObject(includeInstance: boolean, msg: AccountID): AccountID.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AccountID, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountID;
  static deserializeBinaryFromReader(message: AccountID, reader: jspb.BinaryReader): AccountID;
}

export namespace AccountID {
  export type AsObject = {
    id: number,
  }
}

export class Account extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getLogin(): string;
  setLogin(value: string): void;

  getNick(): string;
  setNick(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Account.AsObject;
  static toObject(includeInstance: boolean, msg: Account): Account.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Account, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Account;
  static deserializeBinaryFromReader(message: Account, reader: jspb.BinaryReader): Account;
}

export namespace Account {
  export type AsObject = {
    id: number,
    login: string,
    nick: string,
    email: string,
  }
}

export class RegisterAccountRequest extends jspb.Message {
  hasAccount(): boolean;
  clearAccount(): void;
  getAccount(): Account | undefined;
  setAccount(value?: Account): void;

  getPassword(): string;
  setPassword(value: string): void;

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
    account?: Account.AsObject,
    password: string,
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

export class GetAccountCharactersResponse extends jspb.Message {
  clearCharactersList(): void;
  getCharactersList(): Array<characters_characters_pb.Character>;
  setCharactersList(value: Array<characters_characters_pb.Character>): void;
  addCharacters(value?: characters_characters_pb.Character, index?: number): characters_characters_pb.Character;

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
    charactersList: Array<characters_characters_pb.Character.AsObject>,
  }
}

