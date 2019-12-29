// package: google.devtools.containeranalysis.v1alpha1
// file: google/devtools/containeranalysis/v1alpha1/containeranalysis.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";
import * as google_devtools_containeranalysis_v1alpha1_bill_of_materials_pb from "../../../../google/devtools/containeranalysis/v1alpha1/bill_of_materials_pb";
import * as google_devtools_containeranalysis_v1alpha1_image_basis_pb from "../../../../google/devtools/containeranalysis/v1alpha1/image_basis_pb";
import * as google_devtools_containeranalysis_v1alpha1_package_vulnerability_pb from "../../../../google/devtools/containeranalysis/v1alpha1/package_vulnerability_pb";
import * as google_devtools_containeranalysis_v1alpha1_provenance_pb from "../../../../google/devtools/containeranalysis/v1alpha1/provenance_pb";
import * as google_iam_v1_iam_policy_pb from "../../../../google/iam/v1/iam_policy_pb";
import * as google_iam_v1_policy_pb from "../../../../google/iam/v1/policy_pb";
import * as google_longrunning_operations_pb from "../../../../google/longrunning/operations_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_rpc_status_pb from "../../../../google/rpc/status_pb";

export class Occurrence extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getResourceUrl(): string;
  setResourceUrl(value: string): void;

  hasResource(): boolean;
  clearResource(): void;
  getResource(): Resource | undefined;
  setResource(value?: Resource): void;

  getNoteName(): string;
  setNoteName(value: string): void;

  getKind(): Note.KindMap[keyof Note.KindMap];
  setKind(value: Note.KindMap[keyof Note.KindMap]): void;

  hasVulnerabilityDetails(): boolean;
  clearVulnerabilityDetails(): void;
  getVulnerabilityDetails(): google_devtools_containeranalysis_v1alpha1_package_vulnerability_pb.VulnerabilityType.VulnerabilityDetails | undefined;
  setVulnerabilityDetails(value?: google_devtools_containeranalysis_v1alpha1_package_vulnerability_pb.VulnerabilityType.VulnerabilityDetails): void;

  hasBuildDetails(): boolean;
  clearBuildDetails(): void;
  getBuildDetails(): BuildDetails | undefined;
  setBuildDetails(value?: BuildDetails): void;

  hasDerivedImage(): boolean;
  clearDerivedImage(): void;
  getDerivedImage(): google_devtools_containeranalysis_v1alpha1_image_basis_pb.DockerImage.Derived | undefined;
  setDerivedImage(value?: google_devtools_containeranalysis_v1alpha1_image_basis_pb.DockerImage.Derived): void;

  hasInstallation(): boolean;
  clearInstallation(): void;
  getInstallation(): google_devtools_containeranalysis_v1alpha1_bill_of_materials_pb.PackageManager.Installation | undefined;
  setInstallation(value?: google_devtools_containeranalysis_v1alpha1_bill_of_materials_pb.PackageManager.Installation): void;

  hasDeployment(): boolean;
  clearDeployment(): void;
  getDeployment(): Deployable.Deployment | undefined;
  setDeployment(value?: Deployable.Deployment): void;

  hasDiscovered(): boolean;
  clearDiscovered(): void;
  getDiscovered(): Discovery.Discovered | undefined;
  setDiscovered(value?: Discovery.Discovered): void;

  hasAttestation(): boolean;
  clearAttestation(): void;
  getAttestation(): AttestationAuthority.Attestation | undefined;
  setAttestation(value?: AttestationAuthority.Attestation): void;

  getRemediation(): string;
  setRemediation(value: string): void;

  hasCreateTime(): boolean;
  clearCreateTime(): void;
  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdateTime(): boolean;
  clearUpdateTime(): void;
  getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getDetailsCase(): Occurrence.DetailsCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Occurrence.AsObject;
  static toObject(includeInstance: boolean, msg: Occurrence): Occurrence.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Occurrence, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Occurrence;
  static deserializeBinaryFromReader(message: Occurrence, reader: jspb.BinaryReader): Occurrence;
}

export namespace Occurrence {
  export type AsObject = {
    name: string,
    resourceUrl: string,
    resource?: Resource.AsObject,
    noteName: string,
    kind: Note.KindMap[keyof Note.KindMap],
    vulnerabilityDetails?: google_devtools_containeranalysis_v1alpha1_package_vulnerability_pb.VulnerabilityType.VulnerabilityDetails.AsObject,
    buildDetails?: BuildDetails.AsObject,
    derivedImage?: google_devtools_containeranalysis_v1alpha1_image_basis_pb.DockerImage.Derived.AsObject,
    installation?: google_devtools_containeranalysis_v1alpha1_bill_of_materials_pb.PackageManager.Installation.AsObject,
    deployment?: Deployable.Deployment.AsObject,
    discovered?: Discovery.Discovered.AsObject,
    attestation?: AttestationAuthority.Attestation.AsObject,
    remediation: string,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export enum DetailsCase {
    DETAILS_NOT_SET = 0,
    VULNERABILITY_DETAILS = 8,
    BUILD_DETAILS = 7,
    DERIVED_IMAGE = 11,
    INSTALLATION = 12,
    DEPLOYMENT = 14,
    DISCOVERED = 15,
    ATTESTATION = 16,
  }
}

export class Resource extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getUri(): string;
  setUri(value: string): void;

  hasContentHash(): boolean;
  clearContentHash(): void;
  getContentHash(): google_devtools_containeranalysis_v1alpha1_provenance_pb.Hash | undefined;
  setContentHash(value?: google_devtools_containeranalysis_v1alpha1_provenance_pb.Hash): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Resource.AsObject;
  static toObject(includeInstance: boolean, msg: Resource): Resource.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Resource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Resource;
  static deserializeBinaryFromReader(message: Resource, reader: jspb.BinaryReader): Resource;
}

export namespace Resource {
  export type AsObject = {
    name: string,
    uri: string,
    contentHash?: google_devtools_containeranalysis_v1alpha1_provenance_pb.Hash.AsObject,
  }
}

export class Note extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getShortDescription(): string;
  setShortDescription(value: string): void;

  getLongDescription(): string;
  setLongDescription(value: string): void;

  getKind(): Note.KindMap[keyof Note.KindMap];
  setKind(value: Note.KindMap[keyof Note.KindMap]): void;

  hasVulnerabilityType(): boolean;
  clearVulnerabilityType(): void;
  getVulnerabilityType(): google_devtools_containeranalysis_v1alpha1_package_vulnerability_pb.VulnerabilityType | undefined;
  setVulnerabilityType(value?: google_devtools_containeranalysis_v1alpha1_package_vulnerability_pb.VulnerabilityType): void;

  hasBuildType(): boolean;
  clearBuildType(): void;
  getBuildType(): BuildType | undefined;
  setBuildType(value?: BuildType): void;

  hasBaseImage(): boolean;
  clearBaseImage(): void;
  getBaseImage(): google_devtools_containeranalysis_v1alpha1_image_basis_pb.DockerImage.Basis | undefined;
  setBaseImage(value?: google_devtools_containeranalysis_v1alpha1_image_basis_pb.DockerImage.Basis): void;

  hasPackage(): boolean;
  clearPackage(): void;
  getPackage(): google_devtools_containeranalysis_v1alpha1_bill_of_materials_pb.PackageManager.Package | undefined;
  setPackage(value?: google_devtools_containeranalysis_v1alpha1_bill_of_materials_pb.PackageManager.Package): void;

  hasDeployable(): boolean;
  clearDeployable(): void;
  getDeployable(): Deployable | undefined;
  setDeployable(value?: Deployable): void;

  hasDiscovery(): boolean;
  clearDiscovery(): void;
  getDiscovery(): Discovery | undefined;
  setDiscovery(value?: Discovery): void;

  hasAttestationAuthority(): boolean;
  clearAttestationAuthority(): void;
  getAttestationAuthority(): AttestationAuthority | undefined;
  setAttestationAuthority(value?: AttestationAuthority): void;

  clearRelatedUrlList(): void;
  getRelatedUrlList(): Array<Note.RelatedUrl>;
  setRelatedUrlList(value: Array<Note.RelatedUrl>): void;
  addRelatedUrl(value?: Note.RelatedUrl, index?: number): Note.RelatedUrl;

  hasExpirationTime(): boolean;
  clearExpirationTime(): void;
  getExpirationTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpirationTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasCreateTime(): boolean;
  clearCreateTime(): void;
  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdateTime(): boolean;
  clearUpdateTime(): void;
  getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getNoteTypeCase(): Note.NoteTypeCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Note.AsObject;
  static toObject(includeInstance: boolean, msg: Note): Note.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Note, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Note;
  static deserializeBinaryFromReader(message: Note, reader: jspb.BinaryReader): Note;
}

export namespace Note {
  export type AsObject = {
    name: string,
    shortDescription: string,
    longDescription: string,
    kind: Note.KindMap[keyof Note.KindMap],
    vulnerabilityType?: google_devtools_containeranalysis_v1alpha1_package_vulnerability_pb.VulnerabilityType.AsObject,
    buildType?: BuildType.AsObject,
    baseImage?: google_devtools_containeranalysis_v1alpha1_image_basis_pb.DockerImage.Basis.AsObject,
    pb_package?: google_devtools_containeranalysis_v1alpha1_bill_of_materials_pb.PackageManager.Package.AsObject,
    deployable?: Deployable.AsObject,
    discovery?: Discovery.AsObject,
    attestationAuthority?: AttestationAuthority.AsObject,
    relatedUrlList: Array<Note.RelatedUrl.AsObject>,
    expirationTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

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

  export interface KindMap {
    KIND_UNSPECIFIED: 0;
    PACKAGE_VULNERABILITY: 2;
    BUILD_DETAILS: 3;
    IMAGE_BASIS: 4;
    PACKAGE_MANAGER: 5;
    DEPLOYABLE: 6;
    DISCOVERY: 7;
    ATTESTATION_AUTHORITY: 8;
  }

  export const Kind: KindMap;

  export enum NoteTypeCase {
    NOTE_TYPE_NOT_SET = 0,
    VULNERABILITY_TYPE = 6,
    BUILD_TYPE = 8,
    BASE_IMAGE = 13,
    PACKAGE = 14,
    DEPLOYABLE = 17,
    DISCOVERY = 18,
    ATTESTATION_AUTHORITY = 19,
  }
}

export class Deployable extends jspb.Message {
  clearResourceUriList(): void;
  getResourceUriList(): Array<string>;
  setResourceUriList(value: Array<string>): void;
  addResourceUri(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Deployable.AsObject;
  static toObject(includeInstance: boolean, msg: Deployable): Deployable.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Deployable, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Deployable;
  static deserializeBinaryFromReader(message: Deployable, reader: jspb.BinaryReader): Deployable;
}

export namespace Deployable {
  export type AsObject = {
    resourceUriList: Array<string>,
  }

  export class Deployment extends jspb.Message {
    getUserEmail(): string;
    setUserEmail(value: string): void;

    hasDeployTime(): boolean;
    clearDeployTime(): void;
    getDeployTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setDeployTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

    hasUndeployTime(): boolean;
    clearUndeployTime(): void;
    getUndeployTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUndeployTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

    getConfig(): string;
    setConfig(value: string): void;

    getAddress(): string;
    setAddress(value: string): void;

    clearResourceUriList(): void;
    getResourceUriList(): Array<string>;
    setResourceUriList(value: Array<string>): void;
    addResourceUri(value: string, index?: number): string;

    getPlatform(): Deployable.Deployment.PlatformMap[keyof Deployable.Deployment.PlatformMap];
    setPlatform(value: Deployable.Deployment.PlatformMap[keyof Deployable.Deployment.PlatformMap]): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Deployment.AsObject;
    static toObject(includeInstance: boolean, msg: Deployment): Deployment.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Deployment, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Deployment;
    static deserializeBinaryFromReader(message: Deployment, reader: jspb.BinaryReader): Deployment;
  }

  export namespace Deployment {
    export type AsObject = {
      userEmail: string,
      deployTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      undeployTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      config: string,
      address: string,
      resourceUriList: Array<string>,
      platform: Deployable.Deployment.PlatformMap[keyof Deployable.Deployment.PlatformMap],
    }

    export interface PlatformMap {
      PLATFORM_UNSPECIFIED: 0;
      GKE: 1;
      FLEX: 2;
      CUSTOM: 3;
    }

    export const Platform: PlatformMap;
  }
}

export class Discovery extends jspb.Message {
  getAnalysisKind(): Note.KindMap[keyof Note.KindMap];
  setAnalysisKind(value: Note.KindMap[keyof Note.KindMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Discovery.AsObject;
  static toObject(includeInstance: boolean, msg: Discovery): Discovery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Discovery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Discovery;
  static deserializeBinaryFromReader(message: Discovery, reader: jspb.BinaryReader): Discovery;
}

export namespace Discovery {
  export type AsObject = {
    analysisKind: Note.KindMap[keyof Note.KindMap],
  }

  export class Discovered extends jspb.Message {
    hasOperation(): boolean;
    clearOperation(): void;
    getOperation(): google_longrunning_operations_pb.Operation | undefined;
    setOperation(value?: google_longrunning_operations_pb.Operation): void;

    getAnalysisStatus(): Discovery.Discovered.AnalysisStatusMap[keyof Discovery.Discovered.AnalysisStatusMap];
    setAnalysisStatus(value: Discovery.Discovered.AnalysisStatusMap[keyof Discovery.Discovered.AnalysisStatusMap]): void;

    hasAnalysisStatusError(): boolean;
    clearAnalysisStatusError(): void;
    getAnalysisStatusError(): google_rpc_status_pb.Status | undefined;
    setAnalysisStatusError(value?: google_rpc_status_pb.Status): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Discovered.AsObject;
    static toObject(includeInstance: boolean, msg: Discovered): Discovered.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Discovered, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Discovered;
    static deserializeBinaryFromReader(message: Discovered, reader: jspb.BinaryReader): Discovered;
  }

  export namespace Discovered {
    export type AsObject = {
      operation?: google_longrunning_operations_pb.Operation.AsObject,
      analysisStatus: Discovery.Discovered.AnalysisStatusMap[keyof Discovery.Discovered.AnalysisStatusMap],
      analysisStatusError?: google_rpc_status_pb.Status.AsObject,
    }

    export interface AnalysisStatusMap {
      ANALYSIS_STATUS_UNSPECIFIED: 0;
      PENDING: 1;
      SCANNING: 2;
      FINISHED_SUCCESS: 3;
      FINISHED_FAILED: 4;
      UNSUPPORTED_RESOURCE: 5;
    }

    export const AnalysisStatus: AnalysisStatusMap;
  }
}

export class BuildType extends jspb.Message {
  getBuilderVersion(): string;
  setBuilderVersion(value: string): void;

  hasSignature(): boolean;
  clearSignature(): void;
  getSignature(): BuildSignature | undefined;
  setSignature(value?: BuildSignature): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BuildType.AsObject;
  static toObject(includeInstance: boolean, msg: BuildType): BuildType.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BuildType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BuildType;
  static deserializeBinaryFromReader(message: BuildType, reader: jspb.BinaryReader): BuildType;
}

export namespace BuildType {
  export type AsObject = {
    builderVersion: string,
    signature?: BuildSignature.AsObject,
  }
}

export class BuildSignature extends jspb.Message {
  getPublicKey(): string;
  setPublicKey(value: string): void;

  getSignature(): string;
  setSignature(value: string): void;

  getKeyId(): string;
  setKeyId(value: string): void;

  getKeyType(): BuildSignature.KeyTypeMap[keyof BuildSignature.KeyTypeMap];
  setKeyType(value: BuildSignature.KeyTypeMap[keyof BuildSignature.KeyTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BuildSignature.AsObject;
  static toObject(includeInstance: boolean, msg: BuildSignature): BuildSignature.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BuildSignature, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BuildSignature;
  static deserializeBinaryFromReader(message: BuildSignature, reader: jspb.BinaryReader): BuildSignature;
}

export namespace BuildSignature {
  export type AsObject = {
    publicKey: string,
    signature: string,
    keyId: string,
    keyType: BuildSignature.KeyTypeMap[keyof BuildSignature.KeyTypeMap],
  }

  export interface KeyTypeMap {
    KEY_TYPE_UNSPECIFIED: 0;
    PGP_ASCII_ARMORED: 1;
    PKIX_PEM: 2;
  }

  export const KeyType: KeyTypeMap;
}

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

export class AttestationAuthority extends jspb.Message {
  hasHint(): boolean;
  clearHint(): void;
  getHint(): AttestationAuthority.AttestationAuthorityHint | undefined;
  setHint(value?: AttestationAuthority.AttestationAuthorityHint): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AttestationAuthority.AsObject;
  static toObject(includeInstance: boolean, msg: AttestationAuthority): AttestationAuthority.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AttestationAuthority, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AttestationAuthority;
  static deserializeBinaryFromReader(message: AttestationAuthority, reader: jspb.BinaryReader): AttestationAuthority;
}

export namespace AttestationAuthority {
  export type AsObject = {
    hint?: AttestationAuthority.AttestationAuthorityHint.AsObject,
  }

  export class AttestationAuthorityHint extends jspb.Message {
    getHumanReadableName(): string;
    setHumanReadableName(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AttestationAuthorityHint.AsObject;
    static toObject(includeInstance: boolean, msg: AttestationAuthorityHint): AttestationAuthorityHint.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AttestationAuthorityHint, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AttestationAuthorityHint;
    static deserializeBinaryFromReader(message: AttestationAuthorityHint, reader: jspb.BinaryReader): AttestationAuthorityHint;
  }

  export namespace AttestationAuthorityHint {
    export type AsObject = {
      humanReadableName: string,
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
}

export class BuildDetails extends jspb.Message {
  hasProvenance(): boolean;
  clearProvenance(): void;
  getProvenance(): google_devtools_containeranalysis_v1alpha1_provenance_pb.BuildProvenance | undefined;
  setProvenance(value?: google_devtools_containeranalysis_v1alpha1_provenance_pb.BuildProvenance): void;

  getProvenanceBytes(): string;
  setProvenanceBytes(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BuildDetails.AsObject;
  static toObject(includeInstance: boolean, msg: BuildDetails): BuildDetails.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BuildDetails, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BuildDetails;
  static deserializeBinaryFromReader(message: BuildDetails, reader: jspb.BinaryReader): BuildDetails;
}

export namespace BuildDetails {
  export type AsObject = {
    provenance?: google_devtools_containeranalysis_v1alpha1_provenance_pb.BuildProvenance.AsObject,
    provenanceBytes: string,
  }
}

export class ScanConfig extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getEnabled(): boolean;
  setEnabled(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScanConfig.AsObject;
  static toObject(includeInstance: boolean, msg: ScanConfig): ScanConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScanConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScanConfig;
  static deserializeBinaryFromReader(message: ScanConfig, reader: jspb.BinaryReader): ScanConfig;
}

export namespace ScanConfig {
  export type AsObject = {
    name: string,
    description: string,
    enabled: boolean,
  }
}

export class GetOccurrenceRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOccurrenceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetOccurrenceRequest): GetOccurrenceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetOccurrenceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOccurrenceRequest;
  static deserializeBinaryFromReader(message: GetOccurrenceRequest, reader: jspb.BinaryReader): GetOccurrenceRequest;
}

export namespace GetOccurrenceRequest {
  export type AsObject = {
    name: string,
  }
}

export class ListOccurrencesRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getParent(): string;
  setParent(value: string): void;

  getFilter(): string;
  setFilter(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  getKind(): Note.KindMap[keyof Note.KindMap];
  setKind(value: Note.KindMap[keyof Note.KindMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListOccurrencesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListOccurrencesRequest): ListOccurrencesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListOccurrencesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListOccurrencesRequest;
  static deserializeBinaryFromReader(message: ListOccurrencesRequest, reader: jspb.BinaryReader): ListOccurrencesRequest;
}

export namespace ListOccurrencesRequest {
  export type AsObject = {
    name: string,
    parent: string,
    filter: string,
    pageSize: number,
    pageToken: string,
    kind: Note.KindMap[keyof Note.KindMap],
  }
}

export class ListOccurrencesResponse extends jspb.Message {
  clearOccurrencesList(): void;
  getOccurrencesList(): Array<Occurrence>;
  setOccurrencesList(value: Array<Occurrence>): void;
  addOccurrences(value?: Occurrence, index?: number): Occurrence;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListOccurrencesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListOccurrencesResponse): ListOccurrencesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListOccurrencesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListOccurrencesResponse;
  static deserializeBinaryFromReader(message: ListOccurrencesResponse, reader: jspb.BinaryReader): ListOccurrencesResponse;
}

export namespace ListOccurrencesResponse {
  export type AsObject = {
    occurrencesList: Array<Occurrence.AsObject>,
    nextPageToken: string,
  }
}

export class DeleteOccurrenceRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteOccurrenceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteOccurrenceRequest): DeleteOccurrenceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteOccurrenceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteOccurrenceRequest;
  static deserializeBinaryFromReader(message: DeleteOccurrenceRequest, reader: jspb.BinaryReader): DeleteOccurrenceRequest;
}

export namespace DeleteOccurrenceRequest {
  export type AsObject = {
    name: string,
  }
}

export class CreateOccurrenceRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getParent(): string;
  setParent(value: string): void;

  hasOccurrence(): boolean;
  clearOccurrence(): void;
  getOccurrence(): Occurrence | undefined;
  setOccurrence(value?: Occurrence): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateOccurrenceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateOccurrenceRequest): CreateOccurrenceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateOccurrenceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateOccurrenceRequest;
  static deserializeBinaryFromReader(message: CreateOccurrenceRequest, reader: jspb.BinaryReader): CreateOccurrenceRequest;
}

export namespace CreateOccurrenceRequest {
  export type AsObject = {
    name: string,
    parent: string,
    occurrence?: Occurrence.AsObject,
  }
}

export class UpdateOccurrenceRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasOccurrence(): boolean;
  clearOccurrence(): void;
  getOccurrence(): Occurrence | undefined;
  setOccurrence(value?: Occurrence): void;

  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateOccurrenceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateOccurrenceRequest): UpdateOccurrenceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateOccurrenceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateOccurrenceRequest;
  static deserializeBinaryFromReader(message: UpdateOccurrenceRequest, reader: jspb.BinaryReader): UpdateOccurrenceRequest;
}

export namespace UpdateOccurrenceRequest {
  export type AsObject = {
    name: string,
    occurrence?: Occurrence.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class GetNoteRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNoteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetNoteRequest): GetNoteRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetNoteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNoteRequest;
  static deserializeBinaryFromReader(message: GetNoteRequest, reader: jspb.BinaryReader): GetNoteRequest;
}

export namespace GetNoteRequest {
  export type AsObject = {
    name: string,
  }
}

export class GetOccurrenceNoteRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOccurrenceNoteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetOccurrenceNoteRequest): GetOccurrenceNoteRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetOccurrenceNoteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOccurrenceNoteRequest;
  static deserializeBinaryFromReader(message: GetOccurrenceNoteRequest, reader: jspb.BinaryReader): GetOccurrenceNoteRequest;
}

export namespace GetOccurrenceNoteRequest {
  export type AsObject = {
    name: string,
  }
}

export class ListNotesRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getParent(): string;
  setParent(value: string): void;

  getFilter(): string;
  setFilter(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListNotesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListNotesRequest): ListNotesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListNotesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListNotesRequest;
  static deserializeBinaryFromReader(message: ListNotesRequest, reader: jspb.BinaryReader): ListNotesRequest;
}

export namespace ListNotesRequest {
  export type AsObject = {
    name: string,
    parent: string,
    filter: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListNotesResponse extends jspb.Message {
  clearNotesList(): void;
  getNotesList(): Array<Note>;
  setNotesList(value: Array<Note>): void;
  addNotes(value?: Note, index?: number): Note;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListNotesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListNotesResponse): ListNotesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListNotesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListNotesResponse;
  static deserializeBinaryFromReader(message: ListNotesResponse, reader: jspb.BinaryReader): ListNotesResponse;
}

export namespace ListNotesResponse {
  export type AsObject = {
    notesList: Array<Note.AsObject>,
    nextPageToken: string,
  }
}

export class DeleteNoteRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteNoteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteNoteRequest): DeleteNoteRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteNoteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteNoteRequest;
  static deserializeBinaryFromReader(message: DeleteNoteRequest, reader: jspb.BinaryReader): DeleteNoteRequest;
}

export namespace DeleteNoteRequest {
  export type AsObject = {
    name: string,
  }
}

export class CreateNoteRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getParent(): string;
  setParent(value: string): void;

  getNoteId(): string;
  setNoteId(value: string): void;

  hasNote(): boolean;
  clearNote(): void;
  getNote(): Note | undefined;
  setNote(value?: Note): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateNoteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateNoteRequest): CreateNoteRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateNoteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateNoteRequest;
  static deserializeBinaryFromReader(message: CreateNoteRequest, reader: jspb.BinaryReader): CreateNoteRequest;
}

export namespace CreateNoteRequest {
  export type AsObject = {
    name: string,
    parent: string,
    noteId: string,
    note?: Note.AsObject,
  }
}

export class UpdateNoteRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasNote(): boolean;
  clearNote(): void;
  getNote(): Note | undefined;
  setNote(value?: Note): void;

  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateNoteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateNoteRequest): UpdateNoteRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateNoteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateNoteRequest;
  static deserializeBinaryFromReader(message: UpdateNoteRequest, reader: jspb.BinaryReader): UpdateNoteRequest;
}

export namespace UpdateNoteRequest {
  export type AsObject = {
    name: string,
    note?: Note.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class ListNoteOccurrencesRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getFilter(): string;
  setFilter(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListNoteOccurrencesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListNoteOccurrencesRequest): ListNoteOccurrencesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListNoteOccurrencesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListNoteOccurrencesRequest;
  static deserializeBinaryFromReader(message: ListNoteOccurrencesRequest, reader: jspb.BinaryReader): ListNoteOccurrencesRequest;
}

export namespace ListNoteOccurrencesRequest {
  export type AsObject = {
    name: string,
    filter: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListNoteOccurrencesResponse extends jspb.Message {
  clearOccurrencesList(): void;
  getOccurrencesList(): Array<Occurrence>;
  setOccurrencesList(value: Array<Occurrence>): void;
  addOccurrences(value?: Occurrence, index?: number): Occurrence;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListNoteOccurrencesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListNoteOccurrencesResponse): ListNoteOccurrencesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListNoteOccurrencesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListNoteOccurrencesResponse;
  static deserializeBinaryFromReader(message: ListNoteOccurrencesResponse, reader: jspb.BinaryReader): ListNoteOccurrencesResponse;
}

export namespace ListNoteOccurrencesResponse {
  export type AsObject = {
    occurrencesList: Array<Occurrence.AsObject>,
    nextPageToken: string,
  }
}

export class CreateOperationRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getOperationId(): string;
  setOperationId(value: string): void;

  hasOperation(): boolean;
  clearOperation(): void;
  getOperation(): google_longrunning_operations_pb.Operation | undefined;
  setOperation(value?: google_longrunning_operations_pb.Operation): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateOperationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateOperationRequest): CreateOperationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateOperationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateOperationRequest;
  static deserializeBinaryFromReader(message: CreateOperationRequest, reader: jspb.BinaryReader): CreateOperationRequest;
}

export namespace CreateOperationRequest {
  export type AsObject = {
    parent: string,
    operationId: string,
    operation?: google_longrunning_operations_pb.Operation.AsObject,
  }
}

export class UpdateOperationRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasOperation(): boolean;
  clearOperation(): void;
  getOperation(): google_longrunning_operations_pb.Operation | undefined;
  setOperation(value?: google_longrunning_operations_pb.Operation): void;

  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateOperationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateOperationRequest): UpdateOperationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateOperationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateOperationRequest;
  static deserializeBinaryFromReader(message: UpdateOperationRequest, reader: jspb.BinaryReader): UpdateOperationRequest;
}

export namespace UpdateOperationRequest {
  export type AsObject = {
    name: string,
    operation?: google_longrunning_operations_pb.Operation.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class OperationMetadata extends jspb.Message {
  hasCreateTime(): boolean;
  clearCreateTime(): void;
  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasEndTime(): boolean;
  clearEndTime(): void;
  getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OperationMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: OperationMetadata): OperationMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OperationMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OperationMetadata;
  static deserializeBinaryFromReader(message: OperationMetadata, reader: jspb.BinaryReader): OperationMetadata;
}

export namespace OperationMetadata {
  export type AsObject = {
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class GetVulnzOccurrencesSummaryRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getFilter(): string;
  setFilter(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVulnzOccurrencesSummaryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetVulnzOccurrencesSummaryRequest): GetVulnzOccurrencesSummaryRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetVulnzOccurrencesSummaryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetVulnzOccurrencesSummaryRequest;
  static deserializeBinaryFromReader(message: GetVulnzOccurrencesSummaryRequest, reader: jspb.BinaryReader): GetVulnzOccurrencesSummaryRequest;
}

export namespace GetVulnzOccurrencesSummaryRequest {
  export type AsObject = {
    parent: string,
    filter: string,
  }
}

export class GetVulnzOccurrencesSummaryResponse extends jspb.Message {
  clearCountsList(): void;
  getCountsList(): Array<GetVulnzOccurrencesSummaryResponse.SeverityCount>;
  setCountsList(value: Array<GetVulnzOccurrencesSummaryResponse.SeverityCount>): void;
  addCounts(value?: GetVulnzOccurrencesSummaryResponse.SeverityCount, index?: number): GetVulnzOccurrencesSummaryResponse.SeverityCount;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVulnzOccurrencesSummaryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetVulnzOccurrencesSummaryResponse): GetVulnzOccurrencesSummaryResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetVulnzOccurrencesSummaryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetVulnzOccurrencesSummaryResponse;
  static deserializeBinaryFromReader(message: GetVulnzOccurrencesSummaryResponse, reader: jspb.BinaryReader): GetVulnzOccurrencesSummaryResponse;
}

export namespace GetVulnzOccurrencesSummaryResponse {
  export type AsObject = {
    countsList: Array<GetVulnzOccurrencesSummaryResponse.SeverityCount.AsObject>,
  }

  export class SeverityCount extends jspb.Message {
    getSeverity(): google_devtools_containeranalysis_v1alpha1_package_vulnerability_pb.VulnerabilityType.SeverityMap[keyof google_devtools_containeranalysis_v1alpha1_package_vulnerability_pb.VulnerabilityType.SeverityMap];
    setSeverity(value: google_devtools_containeranalysis_v1alpha1_package_vulnerability_pb.VulnerabilityType.SeverityMap[keyof google_devtools_containeranalysis_v1alpha1_package_vulnerability_pb.VulnerabilityType.SeverityMap]): void;

    getCount(): number;
    setCount(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SeverityCount.AsObject;
    static toObject(includeInstance: boolean, msg: SeverityCount): SeverityCount.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SeverityCount, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SeverityCount;
    static deserializeBinaryFromReader(message: SeverityCount, reader: jspb.BinaryReader): SeverityCount;
  }

  export namespace SeverityCount {
    export type AsObject = {
      severity: google_devtools_containeranalysis_v1alpha1_package_vulnerability_pb.VulnerabilityType.SeverityMap[keyof google_devtools_containeranalysis_v1alpha1_package_vulnerability_pb.VulnerabilityType.SeverityMap],
      count: number,
    }
  }
}

export class GetScanConfigRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetScanConfigRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetScanConfigRequest): GetScanConfigRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetScanConfigRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetScanConfigRequest;
  static deserializeBinaryFromReader(message: GetScanConfigRequest, reader: jspb.BinaryReader): GetScanConfigRequest;
}

export namespace GetScanConfigRequest {
  export type AsObject = {
    name: string,
  }
}

export class ListScanConfigsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getFilter(): string;
  setFilter(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListScanConfigsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListScanConfigsRequest): ListScanConfigsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListScanConfigsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListScanConfigsRequest;
  static deserializeBinaryFromReader(message: ListScanConfigsRequest, reader: jspb.BinaryReader): ListScanConfigsRequest;
}

export namespace ListScanConfigsRequest {
  export type AsObject = {
    parent: string,
    filter: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListScanConfigsResponse extends jspb.Message {
  clearScanConfigsList(): void;
  getScanConfigsList(): Array<ScanConfig>;
  setScanConfigsList(value: Array<ScanConfig>): void;
  addScanConfigs(value?: ScanConfig, index?: number): ScanConfig;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListScanConfigsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListScanConfigsResponse): ListScanConfigsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListScanConfigsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListScanConfigsResponse;
  static deserializeBinaryFromReader(message: ListScanConfigsResponse, reader: jspb.BinaryReader): ListScanConfigsResponse;
}

export namespace ListScanConfigsResponse {
  export type AsObject = {
    scanConfigsList: Array<ScanConfig.AsObject>,
    nextPageToken: string,
  }
}

export class UpdateScanConfigRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasScanConfig(): boolean;
  clearScanConfig(): void;
  getScanConfig(): ScanConfig | undefined;
  setScanConfig(value?: ScanConfig): void;

  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateScanConfigRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateScanConfigRequest): UpdateScanConfigRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateScanConfigRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateScanConfigRequest;
  static deserializeBinaryFromReader(message: UpdateScanConfigRequest, reader: jspb.BinaryReader): UpdateScanConfigRequest;
}

export namespace UpdateScanConfigRequest {
  export type AsObject = {
    name: string,
    scanConfig?: ScanConfig.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

