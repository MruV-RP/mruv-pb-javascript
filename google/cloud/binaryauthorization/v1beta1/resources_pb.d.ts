// package: google.cloud.binaryauthorization.v1beta1
// file: google/cloud/binaryauthorization/v1beta1/resources.proto

import * as jspb from "google-protobuf";
import * as google_api_field_behavior_pb from "../../../../google/api/field_behavior_pb";
import * as google_api_resource_pb from "../../../../google/api/resource_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";

export class Policy extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getGlobalPolicyEvaluationMode(): Policy.GlobalPolicyEvaluationModeMap[keyof Policy.GlobalPolicyEvaluationModeMap];
  setGlobalPolicyEvaluationMode(value: Policy.GlobalPolicyEvaluationModeMap[keyof Policy.GlobalPolicyEvaluationModeMap]): void;

  clearAdmissionWhitelistPatternsList(): void;
  getAdmissionWhitelistPatternsList(): Array<AdmissionWhitelistPattern>;
  setAdmissionWhitelistPatternsList(value: Array<AdmissionWhitelistPattern>): void;
  addAdmissionWhitelistPatterns(value?: AdmissionWhitelistPattern, index?: number): AdmissionWhitelistPattern;

  getClusterAdmissionRulesMap(): jspb.Map<string, AdmissionRule>;
  clearClusterAdmissionRulesMap(): void;
  hasDefaultAdmissionRule(): boolean;
  clearDefaultAdmissionRule(): void;
  getDefaultAdmissionRule(): AdmissionRule | undefined;
  setDefaultAdmissionRule(value?: AdmissionRule): void;

  hasUpdateTime(): boolean;
  clearUpdateTime(): void;
  getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Policy.AsObject;
  static toObject(includeInstance: boolean, msg: Policy): Policy.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Policy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Policy;
  static deserializeBinaryFromReader(message: Policy, reader: jspb.BinaryReader): Policy;
}

export namespace Policy {
  export type AsObject = {
    name: string,
    description: string,
    globalPolicyEvaluationMode: Policy.GlobalPolicyEvaluationModeMap[keyof Policy.GlobalPolicyEvaluationModeMap],
    admissionWhitelistPatternsList: Array<AdmissionWhitelistPattern.AsObject>,
    clusterAdmissionRulesMap: Array<[string, AdmissionRule.AsObject]>,
    defaultAdmissionRule?: AdmissionRule.AsObject,
    updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export interface GlobalPolicyEvaluationModeMap {
    GLOBAL_POLICY_EVALUATION_MODE_UNSPECIFIED: 0;
    ENABLE: 1;
    DISABLE: 2;
  }

  export const GlobalPolicyEvaluationMode: GlobalPolicyEvaluationModeMap;
}

export class AdmissionWhitelistPattern extends jspb.Message {
  getNamePattern(): string;
  setNamePattern(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdmissionWhitelistPattern.AsObject;
  static toObject(includeInstance: boolean, msg: AdmissionWhitelistPattern): AdmissionWhitelistPattern.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AdmissionWhitelistPattern, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdmissionWhitelistPattern;
  static deserializeBinaryFromReader(message: AdmissionWhitelistPattern, reader: jspb.BinaryReader): AdmissionWhitelistPattern;
}

export namespace AdmissionWhitelistPattern {
  export type AsObject = {
    namePattern: string,
  }
}

export class AdmissionRule extends jspb.Message {
  getEvaluationMode(): AdmissionRule.EvaluationModeMap[keyof AdmissionRule.EvaluationModeMap];
  setEvaluationMode(value: AdmissionRule.EvaluationModeMap[keyof AdmissionRule.EvaluationModeMap]): void;

  clearRequireAttestationsByList(): void;
  getRequireAttestationsByList(): Array<string>;
  setRequireAttestationsByList(value: Array<string>): void;
  addRequireAttestationsBy(value: string, index?: number): string;

  getEnforcementMode(): AdmissionRule.EnforcementModeMap[keyof AdmissionRule.EnforcementModeMap];
  setEnforcementMode(value: AdmissionRule.EnforcementModeMap[keyof AdmissionRule.EnforcementModeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdmissionRule.AsObject;
  static toObject(includeInstance: boolean, msg: AdmissionRule): AdmissionRule.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AdmissionRule, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdmissionRule;
  static deserializeBinaryFromReader(message: AdmissionRule, reader: jspb.BinaryReader): AdmissionRule;
}

export namespace AdmissionRule {
  export type AsObject = {
    evaluationMode: AdmissionRule.EvaluationModeMap[keyof AdmissionRule.EvaluationModeMap],
    requireAttestationsByList: Array<string>,
    enforcementMode: AdmissionRule.EnforcementModeMap[keyof AdmissionRule.EnforcementModeMap],
  }

  export interface EvaluationModeMap {
    EVALUATION_MODE_UNSPECIFIED: 0;
    ALWAYS_ALLOW: 1;
    REQUIRE_ATTESTATION: 2;
    ALWAYS_DENY: 3;
  }

  export const EvaluationMode: EvaluationModeMap;

  export interface EnforcementModeMap {
    ENFORCEMENT_MODE_UNSPECIFIED: 0;
    ENFORCED_BLOCK_AND_AUDIT_LOG: 1;
    DRYRUN_AUDIT_LOG_ONLY: 2;
  }

  export const EnforcementMode: EnforcementModeMap;
}

export class Attestor extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  hasUserOwnedDrydockNote(): boolean;
  clearUserOwnedDrydockNote(): void;
  getUserOwnedDrydockNote(): UserOwnedDrydockNote | undefined;
  setUserOwnedDrydockNote(value?: UserOwnedDrydockNote): void;

  hasUpdateTime(): boolean;
  clearUpdateTime(): void;
  getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getAttestorTypeCase(): Attestor.AttestorTypeCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Attestor.AsObject;
  static toObject(includeInstance: boolean, msg: Attestor): Attestor.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Attestor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Attestor;
  static deserializeBinaryFromReader(message: Attestor, reader: jspb.BinaryReader): Attestor;
}

export namespace Attestor {
  export type AsObject = {
    name: string,
    description: string,
    userOwnedDrydockNote?: UserOwnedDrydockNote.AsObject,
    updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export enum AttestorTypeCase {
    ATTESTOR_TYPE_NOT_SET = 0,
    USER_OWNED_DRYDOCK_NOTE = 3,
  }
}

export class UserOwnedDrydockNote extends jspb.Message {
  getNoteReference(): string;
  setNoteReference(value: string): void;

  clearPublicKeysList(): void;
  getPublicKeysList(): Array<AttestorPublicKey>;
  setPublicKeysList(value: Array<AttestorPublicKey>): void;
  addPublicKeys(value?: AttestorPublicKey, index?: number): AttestorPublicKey;

  getDelegationServiceAccountEmail(): string;
  setDelegationServiceAccountEmail(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserOwnedDrydockNote.AsObject;
  static toObject(includeInstance: boolean, msg: UserOwnedDrydockNote): UserOwnedDrydockNote.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserOwnedDrydockNote, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserOwnedDrydockNote;
  static deserializeBinaryFromReader(message: UserOwnedDrydockNote, reader: jspb.BinaryReader): UserOwnedDrydockNote;
}

export namespace UserOwnedDrydockNote {
  export type AsObject = {
    noteReference: string,
    publicKeysList: Array<AttestorPublicKey.AsObject>,
    delegationServiceAccountEmail: string,
  }
}

export class PkixPublicKey extends jspb.Message {
  getPublicKeyPem(): string;
  setPublicKeyPem(value: string): void;

  getSignatureAlgorithm(): PkixPublicKey.SignatureAlgorithmMap[keyof PkixPublicKey.SignatureAlgorithmMap];
  setSignatureAlgorithm(value: PkixPublicKey.SignatureAlgorithmMap[keyof PkixPublicKey.SignatureAlgorithmMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PkixPublicKey.AsObject;
  static toObject(includeInstance: boolean, msg: PkixPublicKey): PkixPublicKey.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PkixPublicKey, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PkixPublicKey;
  static deserializeBinaryFromReader(message: PkixPublicKey, reader: jspb.BinaryReader): PkixPublicKey;
}

export namespace PkixPublicKey {
  export type AsObject = {
    publicKeyPem: string,
    signatureAlgorithm: PkixPublicKey.SignatureAlgorithmMap[keyof PkixPublicKey.SignatureAlgorithmMap],
  }

  export interface SignatureAlgorithmMap {
    SIGNATURE_ALGORITHM_UNSPECIFIED: 0;
    RSA_PSS_2048_SHA256: 1;
    RSA_PSS_3072_SHA256: 2;
    RSA_PSS_4096_SHA256: 3;
    RSA_PSS_4096_SHA512: 4;
    RSA_SIGN_PKCS1_2048_SHA256: 5;
    RSA_SIGN_PKCS1_3072_SHA256: 6;
    RSA_SIGN_PKCS1_4096_SHA256: 7;
    RSA_SIGN_PKCS1_4096_SHA512: 8;
    ECDSA_P256_SHA256: 9;
    ECDSA_P384_SHA384: 10;
    ECDSA_P521_SHA512: 11;
  }

  export const SignatureAlgorithm: SignatureAlgorithmMap;
}

export class AttestorPublicKey extends jspb.Message {
  getComment(): string;
  setComment(value: string): void;

  getId(): string;
  setId(value: string): void;

  hasAsciiArmoredPgpPublicKey(): boolean;
  clearAsciiArmoredPgpPublicKey(): void;
  getAsciiArmoredPgpPublicKey(): string;
  setAsciiArmoredPgpPublicKey(value: string): void;

  hasPkixPublicKey(): boolean;
  clearPkixPublicKey(): void;
  getPkixPublicKey(): PkixPublicKey | undefined;
  setPkixPublicKey(value?: PkixPublicKey): void;

  getPublicKeyCase(): AttestorPublicKey.PublicKeyCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AttestorPublicKey.AsObject;
  static toObject(includeInstance: boolean, msg: AttestorPublicKey): AttestorPublicKey.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AttestorPublicKey, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AttestorPublicKey;
  static deserializeBinaryFromReader(message: AttestorPublicKey, reader: jspb.BinaryReader): AttestorPublicKey;
}

export namespace AttestorPublicKey {
  export type AsObject = {
    comment: string,
    id: string,
    asciiArmoredPgpPublicKey: string,
    pkixPublicKey?: PkixPublicKey.AsObject,
  }

  export enum PublicKeyCase {
    PUBLIC_KEY_NOT_SET = 0,
    ASCII_ARMORED_PGP_PUBLIC_KEY = 3,
    PKIX_PUBLIC_KEY = 5,
  }
}

