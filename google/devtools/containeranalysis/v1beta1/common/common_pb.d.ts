// package: grafeas.v1beta1
// file: google/devtools/containeranalysis/v1beta1/common/common.proto

import * as jspb from "google-protobuf";

export class RelatedUrl extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): void;

  getLabel(): string;
  setLabel(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RelatedUrl.AsObject;
  static toObject(includeInstance: boolean, msg: RelatedUrl): RelatedUrl.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RelatedUrl, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RelatedUrl;
  static deserializeBinaryFromReader(message: RelatedUrl, reader: jspb.BinaryReader): RelatedUrl;
}

export namespace RelatedUrl {
  export type AsObject = {
    url: string,
    label: string,
  }
}

export interface NoteKindMap {
  NOTE_KIND_UNSPECIFIED: 0;
  VULNERABILITY: 1;
  BUILD: 2;
  IMAGE: 3;
  PACKAGE: 4;
  DEPLOYMENT: 5;
  DISCOVERY: 6;
  ATTESTATION: 7;
}

export const NoteKind: NoteKindMap;

