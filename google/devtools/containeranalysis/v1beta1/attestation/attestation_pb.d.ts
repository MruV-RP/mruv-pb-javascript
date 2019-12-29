// package: grafeas.v1beta1.attestation
// file: google/devtools/containeranalysis/v1beta1/attestation/attestation.proto

import * as jspb from "google-protobuf";

export class PgpSignedAttestation extends jspb.Message {
  getSignature(): string;
  setSignature(value: string): void;

  getContentType(): PgpSignedAttestation.ContentTypeMap[keyof PgpSignedAttestation.ContentTypeMap];
  setContentType(value: PgpSignedAttestation.ContentTypeMap[keyof PgpSignedAttestation.ContentTypeMap]): void;

  hasPgpKeyId(): boolean;
  clearPgpKeyId(): void;
  getPgpKeyId(): string;
  setPgpKeyId(value: string): void;

  getKeyIdCase(): PgpSignedAttestation.KeyIdCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PgpSignedAttestation.AsObject;
  static toObject(includeInstance: boolean, msg: PgpSignedAttestation): PgpSignedAttestation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PgpSignedAttestation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PgpSignedAttestation;
  static deserializeBinaryFromReader(message: PgpSignedAttestation, reader: jspb.BinaryReader): PgpSignedAttestation;
}

export namespace PgpSignedAttestation {
  export type AsObject = {
    signature: string,
    contentType: PgpSignedAttestation.ContentTypeMap[keyof PgpSignedAttestation.ContentTypeMap],
    pgpKeyId: string,
  }

  export interface ContentTypeMap {
    CONTENT_TYPE_UNSPECIFIED: 0;
    SIMPLE_SIGNING_JSON: 1;
  }

  export const ContentType: ContentTypeMap;

  export enum KeyIdCase {
    KEY_ID_NOT_SET = 0,
    PGP_KEY_ID = 2,
  }
}

export class Authority extends jspb.Message {
  hasHint(): boolean;
  clearHint(): void;
  getHint(): Authority.Hint | undefined;
  setHint(value?: Authority.Hint): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Authority.AsObject;
  static toObject(includeInstance: boolean, msg: Authority): Authority.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Authority, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Authority;
  static deserializeBinaryFromReader(message: Authority, reader: jspb.BinaryReader): Authority;
}

export namespace Authority {
  export type AsObject = {
    hint?: Authority.Hint.AsObject,
  }

  export class Hint extends jspb.Message {
    getHumanReadableName(): string;
    setHumanReadableName(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Hint.AsObject;
    static toObject(includeInstance: boolean, msg: Hint): Hint.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Hint, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Hint;
    static deserializeBinaryFromReader(message: Hint, reader: jspb.BinaryReader): Hint;
  }

  export namespace Hint {
    export type AsObject = {
      humanReadableName: string,
    }
  }
}

export class Details extends jspb.Message {
  hasAttestation(): boolean;
  clearAttestation(): void;
  getAttestation(): Attestation | undefined;
  setAttestation(value?: Attestation): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Details.AsObject;
  static toObject(includeInstance: boolean, msg: Details): Details.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Details, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Details;
  static deserializeBinaryFromReader(message: Details, reader: jspb.BinaryReader): Details;
}

export namespace Details {
  export type AsObject = {
    attestation?: Attestation.AsObject,
  }
}

export class Attestation extends jspb.Message {
  hasPgpSignedAttestation(): boolean;
  clearPgpSignedAttestation(): void;
  getPgpSignedAttestation(): PgpSignedAttestation | undefined;
  setPgpSignedAttestation(value?: PgpSignedAttestation): void;

  getSignatureCase(): Attestation.SignatureCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Attestation.AsObject;
  static toObject(includeInstance: boolean, msg: Attestation): Attestation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Attestation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Attestation;
  static deserializeBinaryFromReader(message: Attestation, reader: jspb.BinaryReader): Attestation;
}

export namespace Attestation {
  export type AsObject = {
    pgpSignedAttestation?: PgpSignedAttestation.AsObject,
  }

  export enum SignatureCase {
    SIGNATURE_NOT_SET = 0,
    PGP_SIGNED_ATTESTATION = 1,
  }
}

