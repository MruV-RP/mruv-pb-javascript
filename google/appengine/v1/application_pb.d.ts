// package: google.appengine.v1
// file: google/appengine/v1/application.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";

export class Application extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getId(): string;
  setId(value: string): void;

  clearDispatchRulesList(): void;
  getDispatchRulesList(): Array<UrlDispatchRule>;
  setDispatchRulesList(value: Array<UrlDispatchRule>): void;
  addDispatchRules(value?: UrlDispatchRule, index?: number): UrlDispatchRule;

  getAuthDomain(): string;
  setAuthDomain(value: string): void;

  getLocationId(): string;
  setLocationId(value: string): void;

  getCodeBucket(): string;
  setCodeBucket(value: string): void;

  hasDefaultCookieExpiration(): boolean;
  clearDefaultCookieExpiration(): void;
  getDefaultCookieExpiration(): google_protobuf_duration_pb.Duration | undefined;
  setDefaultCookieExpiration(value?: google_protobuf_duration_pb.Duration): void;

  getDefaultHostname(): string;
  setDefaultHostname(value: string): void;

  getDefaultBucket(): string;
  setDefaultBucket(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Application.AsObject;
  static toObject(includeInstance: boolean, msg: Application): Application.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Application, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Application;
  static deserializeBinaryFromReader(message: Application, reader: jspb.BinaryReader): Application;
}

export namespace Application {
  export type AsObject = {
    name: string,
    id: string,
    dispatchRulesList: Array<UrlDispatchRule.AsObject>,
    authDomain: string,
    locationId: string,
    codeBucket: string,
    defaultCookieExpiration?: google_protobuf_duration_pb.Duration.AsObject,
    defaultHostname: string,
    defaultBucket: string,
  }
}

export class UrlDispatchRule extends jspb.Message {
  getDomain(): string;
  setDomain(value: string): void;

  getPath(): string;
  setPath(value: string): void;

  getService(): string;
  setService(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UrlDispatchRule.AsObject;
  static toObject(includeInstance: boolean, msg: UrlDispatchRule): UrlDispatchRule.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UrlDispatchRule, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UrlDispatchRule;
  static deserializeBinaryFromReader(message: UrlDispatchRule, reader: jspb.BinaryReader): UrlDispatchRule;
}

export namespace UrlDispatchRule {
  export type AsObject = {
    domain: string,
    path: string,
    service: string,
  }
}

