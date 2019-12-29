// package: google.devtools.cloudbuild.v1
// file: google/devtools/cloudbuild/v1/cloudbuild.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";
import * as google_api_client_pb from "../../../../google/api/client_pb";
import * as google_api_field_behavior_pb from "../../../../google/api/field_behavior_pb";
import * as google_longrunning_operations_pb from "../../../../google/longrunning/operations_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class RetryBuildRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RetryBuildRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RetryBuildRequest): RetryBuildRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RetryBuildRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RetryBuildRequest;
  static deserializeBinaryFromReader(message: RetryBuildRequest, reader: jspb.BinaryReader): RetryBuildRequest;
}

export namespace RetryBuildRequest {
  export type AsObject = {
    projectId: string,
    id: string,
  }
}

export class RunBuildTriggerRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getTriggerId(): string;
  setTriggerId(value: string): void;

  hasSource(): boolean;
  clearSource(): void;
  getSource(): RepoSource | undefined;
  setSource(value?: RepoSource): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RunBuildTriggerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RunBuildTriggerRequest): RunBuildTriggerRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RunBuildTriggerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RunBuildTriggerRequest;
  static deserializeBinaryFromReader(message: RunBuildTriggerRequest, reader: jspb.BinaryReader): RunBuildTriggerRequest;
}

export namespace RunBuildTriggerRequest {
  export type AsObject = {
    projectId: string,
    triggerId: string,
    source?: RepoSource.AsObject,
  }
}

export class StorageSource extends jspb.Message {
  getBucket(): string;
  setBucket(value: string): void;

  getObject(): string;
  setObject(value: string): void;

  getGeneration(): number;
  setGeneration(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StorageSource.AsObject;
  static toObject(includeInstance: boolean, msg: StorageSource): StorageSource.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StorageSource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StorageSource;
  static deserializeBinaryFromReader(message: StorageSource, reader: jspb.BinaryReader): StorageSource;
}

export namespace StorageSource {
  export type AsObject = {
    bucket: string,
    object: string,
    generation: number,
  }
}

export class RepoSource extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getRepoName(): string;
  setRepoName(value: string): void;

  hasBranchName(): boolean;
  clearBranchName(): void;
  getBranchName(): string;
  setBranchName(value: string): void;

  hasTagName(): boolean;
  clearTagName(): void;
  getTagName(): string;
  setTagName(value: string): void;

  hasCommitSha(): boolean;
  clearCommitSha(): void;
  getCommitSha(): string;
  setCommitSha(value: string): void;

  getDir(): string;
  setDir(value: string): void;

  getRevisionCase(): RepoSource.RevisionCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RepoSource.AsObject;
  static toObject(includeInstance: boolean, msg: RepoSource): RepoSource.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RepoSource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RepoSource;
  static deserializeBinaryFromReader(message: RepoSource, reader: jspb.BinaryReader): RepoSource;
}

export namespace RepoSource {
  export type AsObject = {
    projectId: string,
    repoName: string,
    branchName: string,
    tagName: string,
    commitSha: string,
    dir: string,
  }

  export enum RevisionCase {
    REVISION_NOT_SET = 0,
    BRANCH_NAME = 3,
    TAG_NAME = 4,
    COMMIT_SHA = 5,
  }
}

export class Source extends jspb.Message {
  hasStorageSource(): boolean;
  clearStorageSource(): void;
  getStorageSource(): StorageSource | undefined;
  setStorageSource(value?: StorageSource): void;

  hasRepoSource(): boolean;
  clearRepoSource(): void;
  getRepoSource(): RepoSource | undefined;
  setRepoSource(value?: RepoSource): void;

  getSourceCase(): Source.SourceCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Source.AsObject;
  static toObject(includeInstance: boolean, msg: Source): Source.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Source, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Source;
  static deserializeBinaryFromReader(message: Source, reader: jspb.BinaryReader): Source;
}

export namespace Source {
  export type AsObject = {
    storageSource?: StorageSource.AsObject,
    repoSource?: RepoSource.AsObject,
  }

  export enum SourceCase {
    SOURCE_NOT_SET = 0,
    STORAGE_SOURCE = 2,
    REPO_SOURCE = 3,
  }
}

export class BuiltImage extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDigest(): string;
  setDigest(value: string): void;

  hasPushTiming(): boolean;
  clearPushTiming(): void;
  getPushTiming(): TimeSpan | undefined;
  setPushTiming(value?: TimeSpan): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BuiltImage.AsObject;
  static toObject(includeInstance: boolean, msg: BuiltImage): BuiltImage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BuiltImage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BuiltImage;
  static deserializeBinaryFromReader(message: BuiltImage, reader: jspb.BinaryReader): BuiltImage;
}

export namespace BuiltImage {
  export type AsObject = {
    name: string,
    digest: string,
    pushTiming?: TimeSpan.AsObject,
  }
}

export class BuildStep extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  clearEnvList(): void;
  getEnvList(): Array<string>;
  setEnvList(value: Array<string>): void;
  addEnv(value: string, index?: number): string;

  clearArgsList(): void;
  getArgsList(): Array<string>;
  setArgsList(value: Array<string>): void;
  addArgs(value: string, index?: number): string;

  getDir(): string;
  setDir(value: string): void;

  getId(): string;
  setId(value: string): void;

  clearWaitForList(): void;
  getWaitForList(): Array<string>;
  setWaitForList(value: Array<string>): void;
  addWaitFor(value: string, index?: number): string;

  getEntrypoint(): string;
  setEntrypoint(value: string): void;

  clearSecretEnvList(): void;
  getSecretEnvList(): Array<string>;
  setSecretEnvList(value: Array<string>): void;
  addSecretEnv(value: string, index?: number): string;

  clearVolumesList(): void;
  getVolumesList(): Array<Volume>;
  setVolumesList(value: Array<Volume>): void;
  addVolumes(value?: Volume, index?: number): Volume;

  hasTiming(): boolean;
  clearTiming(): void;
  getTiming(): TimeSpan | undefined;
  setTiming(value?: TimeSpan): void;

  hasPullTiming(): boolean;
  clearPullTiming(): void;
  getPullTiming(): TimeSpan | undefined;
  setPullTiming(value?: TimeSpan): void;

  hasTimeout(): boolean;
  clearTimeout(): void;
  getTimeout(): google_protobuf_duration_pb.Duration | undefined;
  setTimeout(value?: google_protobuf_duration_pb.Duration): void;

  getStatus(): Build.StatusMap[keyof Build.StatusMap];
  setStatus(value: Build.StatusMap[keyof Build.StatusMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BuildStep.AsObject;
  static toObject(includeInstance: boolean, msg: BuildStep): BuildStep.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BuildStep, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BuildStep;
  static deserializeBinaryFromReader(message: BuildStep, reader: jspb.BinaryReader): BuildStep;
}

export namespace BuildStep {
  export type AsObject = {
    name: string,
    envList: Array<string>,
    argsList: Array<string>,
    dir: string,
    id: string,
    waitForList: Array<string>,
    entrypoint: string,
    secretEnvList: Array<string>,
    volumesList: Array<Volume.AsObject>,
    timing?: TimeSpan.AsObject,
    pullTiming?: TimeSpan.AsObject,
    timeout?: google_protobuf_duration_pb.Duration.AsObject,
    status: Build.StatusMap[keyof Build.StatusMap],
  }
}

export class Volume extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getPath(): string;
  setPath(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Volume.AsObject;
  static toObject(includeInstance: boolean, msg: Volume): Volume.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Volume, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Volume;
  static deserializeBinaryFromReader(message: Volume, reader: jspb.BinaryReader): Volume;
}

export namespace Volume {
  export type AsObject = {
    name: string,
    path: string,
  }
}

export class Results extends jspb.Message {
  clearImagesList(): void;
  getImagesList(): Array<BuiltImage>;
  setImagesList(value: Array<BuiltImage>): void;
  addImages(value?: BuiltImage, index?: number): BuiltImage;

  clearBuildStepImagesList(): void;
  getBuildStepImagesList(): Array<string>;
  setBuildStepImagesList(value: Array<string>): void;
  addBuildStepImages(value: string, index?: number): string;

  getArtifactManifest(): string;
  setArtifactManifest(value: string): void;

  getNumArtifacts(): number;
  setNumArtifacts(value: number): void;

  clearBuildStepOutputsList(): void;
  getBuildStepOutputsList(): Array<Uint8Array | string>;
  getBuildStepOutputsList_asU8(): Array<Uint8Array>;
  getBuildStepOutputsList_asB64(): Array<string>;
  setBuildStepOutputsList(value: Array<Uint8Array | string>): void;
  addBuildStepOutputs(value: Uint8Array | string, index?: number): Uint8Array | string;

  hasArtifactTiming(): boolean;
  clearArtifactTiming(): void;
  getArtifactTiming(): TimeSpan | undefined;
  setArtifactTiming(value?: TimeSpan): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Results.AsObject;
  static toObject(includeInstance: boolean, msg: Results): Results.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Results, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Results;
  static deserializeBinaryFromReader(message: Results, reader: jspb.BinaryReader): Results;
}

export namespace Results {
  export type AsObject = {
    imagesList: Array<BuiltImage.AsObject>,
    buildStepImagesList: Array<string>,
    artifactManifest: string,
    numArtifacts: number,
    buildStepOutputsList: Array<Uint8Array | string>,
    artifactTiming?: TimeSpan.AsObject,
  }
}

export class ArtifactResult extends jspb.Message {
  getLocation(): string;
  setLocation(value: string): void;

  clearFileHashList(): void;
  getFileHashList(): Array<FileHashes>;
  setFileHashList(value: Array<FileHashes>): void;
  addFileHash(value?: FileHashes, index?: number): FileHashes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArtifactResult.AsObject;
  static toObject(includeInstance: boolean, msg: ArtifactResult): ArtifactResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ArtifactResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArtifactResult;
  static deserializeBinaryFromReader(message: ArtifactResult, reader: jspb.BinaryReader): ArtifactResult;
}

export namespace ArtifactResult {
  export type AsObject = {
    location: string,
    fileHashList: Array<FileHashes.AsObject>,
  }
}

export class Build extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getProjectId(): string;
  setProjectId(value: string): void;

  getStatus(): Build.StatusMap[keyof Build.StatusMap];
  setStatus(value: Build.StatusMap[keyof Build.StatusMap]): void;

  getStatusDetail(): string;
  setStatusDetail(value: string): void;

  hasSource(): boolean;
  clearSource(): void;
  getSource(): Source | undefined;
  setSource(value?: Source): void;

  clearStepsList(): void;
  getStepsList(): Array<BuildStep>;
  setStepsList(value: Array<BuildStep>): void;
  addSteps(value?: BuildStep, index?: number): BuildStep;

  hasResults(): boolean;
  clearResults(): void;
  getResults(): Results | undefined;
  setResults(value?: Results): void;

  hasCreateTime(): boolean;
  clearCreateTime(): void;
  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasStartTime(): boolean;
  clearStartTime(): void;
  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasFinishTime(): boolean;
  clearFinishTime(): void;
  getFinishTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFinishTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasTimeout(): boolean;
  clearTimeout(): void;
  getTimeout(): google_protobuf_duration_pb.Duration | undefined;
  setTimeout(value?: google_protobuf_duration_pb.Duration): void;

  clearImagesList(): void;
  getImagesList(): Array<string>;
  setImagesList(value: Array<string>): void;
  addImages(value: string, index?: number): string;

  hasArtifacts(): boolean;
  clearArtifacts(): void;
  getArtifacts(): Artifacts | undefined;
  setArtifacts(value?: Artifacts): void;

  getLogsBucket(): string;
  setLogsBucket(value: string): void;

  hasSourceProvenance(): boolean;
  clearSourceProvenance(): void;
  getSourceProvenance(): SourceProvenance | undefined;
  setSourceProvenance(value?: SourceProvenance): void;

  getBuildTriggerId(): string;
  setBuildTriggerId(value: string): void;

  hasOptions(): boolean;
  clearOptions(): void;
  getOptions(): BuildOptions | undefined;
  setOptions(value?: BuildOptions): void;

  getLogUrl(): string;
  setLogUrl(value: string): void;

  getSubstitutionsMap(): jspb.Map<string, string>;
  clearSubstitutionsMap(): void;
  clearTagsList(): void;
  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): void;
  addTags(value: string, index?: number): string;

  clearSecretsList(): void;
  getSecretsList(): Array<Secret>;
  setSecretsList(value: Array<Secret>): void;
  addSecrets(value?: Secret, index?: number): Secret;

  getTimingMap(): jspb.Map<string, TimeSpan>;
  clearTimingMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Build.AsObject;
  static toObject(includeInstance: boolean, msg: Build): Build.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Build, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Build;
  static deserializeBinaryFromReader(message: Build, reader: jspb.BinaryReader): Build;
}

export namespace Build {
  export type AsObject = {
    id: string,
    projectId: string,
    status: Build.StatusMap[keyof Build.StatusMap],
    statusDetail: string,
    source?: Source.AsObject,
    stepsList: Array<BuildStep.AsObject>,
    results?: Results.AsObject,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    finishTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    timeout?: google_protobuf_duration_pb.Duration.AsObject,
    imagesList: Array<string>,
    artifacts?: Artifacts.AsObject,
    logsBucket: string,
    sourceProvenance?: SourceProvenance.AsObject,
    buildTriggerId: string,
    options?: BuildOptions.AsObject,
    logUrl: string,
    substitutionsMap: Array<[string, string]>,
    tagsList: Array<string>,
    secretsList: Array<Secret.AsObject>,
    timingMap: Array<[string, TimeSpan.AsObject]>,
  }

  export interface StatusMap {
    STATUS_UNKNOWN: 0;
    QUEUED: 1;
    WORKING: 2;
    SUCCESS: 3;
    FAILURE: 4;
    INTERNAL_ERROR: 5;
    TIMEOUT: 6;
    CANCELLED: 7;
  }

  export const Status: StatusMap;
}

export class Artifacts extends jspb.Message {
  clearImagesList(): void;
  getImagesList(): Array<string>;
  setImagesList(value: Array<string>): void;
  addImages(value: string, index?: number): string;

  hasObjects(): boolean;
  clearObjects(): void;
  getObjects(): Artifacts.ArtifactObjects | undefined;
  setObjects(value?: Artifacts.ArtifactObjects): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Artifacts.AsObject;
  static toObject(includeInstance: boolean, msg: Artifacts): Artifacts.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Artifacts, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Artifacts;
  static deserializeBinaryFromReader(message: Artifacts, reader: jspb.BinaryReader): Artifacts;
}

export namespace Artifacts {
  export type AsObject = {
    imagesList: Array<string>,
    objects?: Artifacts.ArtifactObjects.AsObject,
  }

  export class ArtifactObjects extends jspb.Message {
    getLocation(): string;
    setLocation(value: string): void;

    clearPathsList(): void;
    getPathsList(): Array<string>;
    setPathsList(value: Array<string>): void;
    addPaths(value: string, index?: number): string;

    hasTiming(): boolean;
    clearTiming(): void;
    getTiming(): TimeSpan | undefined;
    setTiming(value?: TimeSpan): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ArtifactObjects.AsObject;
    static toObject(includeInstance: boolean, msg: ArtifactObjects): ArtifactObjects.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ArtifactObjects, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ArtifactObjects;
    static deserializeBinaryFromReader(message: ArtifactObjects, reader: jspb.BinaryReader): ArtifactObjects;
  }

  export namespace ArtifactObjects {
    export type AsObject = {
      location: string,
      pathsList: Array<string>,
      timing?: TimeSpan.AsObject,
    }
  }
}

export class TimeSpan extends jspb.Message {
  hasStartTime(): boolean;
  clearStartTime(): void;
  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasEndTime(): boolean;
  clearEndTime(): void;
  getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TimeSpan.AsObject;
  static toObject(includeInstance: boolean, msg: TimeSpan): TimeSpan.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TimeSpan, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TimeSpan;
  static deserializeBinaryFromReader(message: TimeSpan, reader: jspb.BinaryReader): TimeSpan;
}

export namespace TimeSpan {
  export type AsObject = {
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class BuildOperationMetadata extends jspb.Message {
  hasBuild(): boolean;
  clearBuild(): void;
  getBuild(): Build | undefined;
  setBuild(value?: Build): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BuildOperationMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: BuildOperationMetadata): BuildOperationMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BuildOperationMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BuildOperationMetadata;
  static deserializeBinaryFromReader(message: BuildOperationMetadata, reader: jspb.BinaryReader): BuildOperationMetadata;
}

export namespace BuildOperationMetadata {
  export type AsObject = {
    build?: Build.AsObject,
  }
}

export class SourceProvenance extends jspb.Message {
  hasResolvedStorageSource(): boolean;
  clearResolvedStorageSource(): void;
  getResolvedStorageSource(): StorageSource | undefined;
  setResolvedStorageSource(value?: StorageSource): void;

  hasResolvedRepoSource(): boolean;
  clearResolvedRepoSource(): void;
  getResolvedRepoSource(): RepoSource | undefined;
  setResolvedRepoSource(value?: RepoSource): void;

  getFileHashesMap(): jspb.Map<string, FileHashes>;
  clearFileHashesMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SourceProvenance.AsObject;
  static toObject(includeInstance: boolean, msg: SourceProvenance): SourceProvenance.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SourceProvenance, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SourceProvenance;
  static deserializeBinaryFromReader(message: SourceProvenance, reader: jspb.BinaryReader): SourceProvenance;
}

export namespace SourceProvenance {
  export type AsObject = {
    resolvedStorageSource?: StorageSource.AsObject,
    resolvedRepoSource?: RepoSource.AsObject,
    fileHashesMap: Array<[string, FileHashes.AsObject]>,
  }
}

export class FileHashes extends jspb.Message {
  clearFileHashList(): void;
  getFileHashList(): Array<Hash>;
  setFileHashList(value: Array<Hash>): void;
  addFileHash(value?: Hash, index?: number): Hash;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileHashes.AsObject;
  static toObject(includeInstance: boolean, msg: FileHashes): FileHashes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FileHashes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileHashes;
  static deserializeBinaryFromReader(message: FileHashes, reader: jspb.BinaryReader): FileHashes;
}

export namespace FileHashes {
  export type AsObject = {
    fileHashList: Array<Hash.AsObject>,
  }
}

export class Hash extends jspb.Message {
  getType(): Hash.HashTypeMap[keyof Hash.HashTypeMap];
  setType(value: Hash.HashTypeMap[keyof Hash.HashTypeMap]): void;

  getValue(): Uint8Array | string;
  getValue_asU8(): Uint8Array;
  getValue_asB64(): string;
  setValue(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Hash.AsObject;
  static toObject(includeInstance: boolean, msg: Hash): Hash.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Hash, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Hash;
  static deserializeBinaryFromReader(message: Hash, reader: jspb.BinaryReader): Hash;
}

export namespace Hash {
  export type AsObject = {
    type: Hash.HashTypeMap[keyof Hash.HashTypeMap],
    value: Uint8Array | string,
  }

  export interface HashTypeMap {
    NONE: 0;
    SHA256: 1;
    MD5: 2;
  }

  export const HashType: HashTypeMap;
}

export class Secret extends jspb.Message {
  getKmsKeyName(): string;
  setKmsKeyName(value: string): void;

  getSecretEnvMap(): jspb.Map<string, Uint8Array | string>;
  clearSecretEnvMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Secret.AsObject;
  static toObject(includeInstance: boolean, msg: Secret): Secret.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Secret, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Secret;
  static deserializeBinaryFromReader(message: Secret, reader: jspb.BinaryReader): Secret;
}

export namespace Secret {
  export type AsObject = {
    kmsKeyName: string,
    secretEnvMap: Array<[string, Uint8Array | string]>,
  }
}

export class CreateBuildRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  hasBuild(): boolean;
  clearBuild(): void;
  getBuild(): Build | undefined;
  setBuild(value?: Build): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateBuildRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateBuildRequest): CreateBuildRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateBuildRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateBuildRequest;
  static deserializeBinaryFromReader(message: CreateBuildRequest, reader: jspb.BinaryReader): CreateBuildRequest;
}

export namespace CreateBuildRequest {
  export type AsObject = {
    projectId: string,
    build?: Build.AsObject,
  }
}

export class GetBuildRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBuildRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBuildRequest): GetBuildRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBuildRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBuildRequest;
  static deserializeBinaryFromReader(message: GetBuildRequest, reader: jspb.BinaryReader): GetBuildRequest;
}

export namespace GetBuildRequest {
  export type AsObject = {
    projectId: string,
    id: string,
  }
}

export class ListBuildsRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  getFilter(): string;
  setFilter(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListBuildsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListBuildsRequest): ListBuildsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListBuildsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListBuildsRequest;
  static deserializeBinaryFromReader(message: ListBuildsRequest, reader: jspb.BinaryReader): ListBuildsRequest;
}

export namespace ListBuildsRequest {
  export type AsObject = {
    projectId: string,
    pageSize: number,
    pageToken: string,
    filter: string,
  }
}

export class ListBuildsResponse extends jspb.Message {
  clearBuildsList(): void;
  getBuildsList(): Array<Build>;
  setBuildsList(value: Array<Build>): void;
  addBuilds(value?: Build, index?: number): Build;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListBuildsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListBuildsResponse): ListBuildsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListBuildsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListBuildsResponse;
  static deserializeBinaryFromReader(message: ListBuildsResponse, reader: jspb.BinaryReader): ListBuildsResponse;
}

export namespace ListBuildsResponse {
  export type AsObject = {
    buildsList: Array<Build.AsObject>,
    nextPageToken: string,
  }
}

export class CancelBuildRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelBuildRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CancelBuildRequest): CancelBuildRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CancelBuildRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelBuildRequest;
  static deserializeBinaryFromReader(message: CancelBuildRequest, reader: jspb.BinaryReader): CancelBuildRequest;
}

export namespace CancelBuildRequest {
  export type AsObject = {
    projectId: string,
    id: string,
  }
}

export class BuildTrigger extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getName(): string;
  setName(value: string): void;

  clearTagsList(): void;
  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): void;
  addTags(value: string, index?: number): string;

  hasTriggerTemplate(): boolean;
  clearTriggerTemplate(): void;
  getTriggerTemplate(): RepoSource | undefined;
  setTriggerTemplate(value?: RepoSource): void;

  hasGithub(): boolean;
  clearGithub(): void;
  getGithub(): GitHubEventsConfig | undefined;
  setGithub(value?: GitHubEventsConfig): void;

  hasBuild(): boolean;
  clearBuild(): void;
  getBuild(): Build | undefined;
  setBuild(value?: Build): void;

  hasFilename(): boolean;
  clearFilename(): void;
  getFilename(): string;
  setFilename(value: string): void;

  hasCreateTime(): boolean;
  clearCreateTime(): void;
  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getDisabled(): boolean;
  setDisabled(value: boolean): void;

  getSubstitutionsMap(): jspb.Map<string, string>;
  clearSubstitutionsMap(): void;
  clearIgnoredFilesList(): void;
  getIgnoredFilesList(): Array<string>;
  setIgnoredFilesList(value: Array<string>): void;
  addIgnoredFiles(value: string, index?: number): string;

  clearIncludedFilesList(): void;
  getIncludedFilesList(): Array<string>;
  setIncludedFilesList(value: Array<string>): void;
  addIncludedFiles(value: string, index?: number): string;

  getBuildTemplateCase(): BuildTrigger.BuildTemplateCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BuildTrigger.AsObject;
  static toObject(includeInstance: boolean, msg: BuildTrigger): BuildTrigger.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BuildTrigger, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BuildTrigger;
  static deserializeBinaryFromReader(message: BuildTrigger, reader: jspb.BinaryReader): BuildTrigger;
}

export namespace BuildTrigger {
  export type AsObject = {
    id: string,
    description: string,
    name: string,
    tagsList: Array<string>,
    triggerTemplate?: RepoSource.AsObject,
    github?: GitHubEventsConfig.AsObject,
    build?: Build.AsObject,
    filename: string,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    disabled: boolean,
    substitutionsMap: Array<[string, string]>,
    ignoredFilesList: Array<string>,
    includedFilesList: Array<string>,
  }

  export enum BuildTemplateCase {
    BUILD_TEMPLATE_NOT_SET = 0,
    BUILD = 4,
    FILENAME = 8,
  }
}

export class GitHubEventsConfig extends jspb.Message {
  getInstallationId(): number;
  setInstallationId(value: number): void;

  getOwner(): string;
  setOwner(value: string): void;

  getName(): string;
  setName(value: string): void;

  hasPullRequest(): boolean;
  clearPullRequest(): void;
  getPullRequest(): PullRequestFilter | undefined;
  setPullRequest(value?: PullRequestFilter): void;

  hasPush(): boolean;
  clearPush(): void;
  getPush(): PushFilter | undefined;
  setPush(value?: PushFilter): void;

  getEventCase(): GitHubEventsConfig.EventCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GitHubEventsConfig.AsObject;
  static toObject(includeInstance: boolean, msg: GitHubEventsConfig): GitHubEventsConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GitHubEventsConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GitHubEventsConfig;
  static deserializeBinaryFromReader(message: GitHubEventsConfig, reader: jspb.BinaryReader): GitHubEventsConfig;
}

export namespace GitHubEventsConfig {
  export type AsObject = {
    installationId: number,
    owner: string,
    name: string,
    pullRequest?: PullRequestFilter.AsObject,
    push?: PushFilter.AsObject,
  }

  export enum EventCase {
    EVENT_NOT_SET = 0,
    PULL_REQUEST = 4,
    PUSH = 5,
  }
}

export class PullRequestFilter extends jspb.Message {
  hasBranch(): boolean;
  clearBranch(): void;
  getBranch(): string;
  setBranch(value: string): void;

  getCommentControl(): PullRequestFilter.CommentControlMap[keyof PullRequestFilter.CommentControlMap];
  setCommentControl(value: PullRequestFilter.CommentControlMap[keyof PullRequestFilter.CommentControlMap]): void;

  getGitRefCase(): PullRequestFilter.GitRefCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PullRequestFilter.AsObject;
  static toObject(includeInstance: boolean, msg: PullRequestFilter): PullRequestFilter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PullRequestFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PullRequestFilter;
  static deserializeBinaryFromReader(message: PullRequestFilter, reader: jspb.BinaryReader): PullRequestFilter;
}

export namespace PullRequestFilter {
  export type AsObject = {
    branch: string,
    commentControl: PullRequestFilter.CommentControlMap[keyof PullRequestFilter.CommentControlMap],
  }

  export interface CommentControlMap {
    COMMENTS_DISABLED: 0;
    COMMENTS_ENABLED: 1;
  }

  export const CommentControl: CommentControlMap;

  export enum GitRefCase {
    GIT_REF_NOT_SET = 0,
    BRANCH = 2,
  }
}

export class PushFilter extends jspb.Message {
  hasBranch(): boolean;
  clearBranch(): void;
  getBranch(): string;
  setBranch(value: string): void;

  hasTag(): boolean;
  clearTag(): void;
  getTag(): string;
  setTag(value: string): void;

  getGitRefCase(): PushFilter.GitRefCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PushFilter.AsObject;
  static toObject(includeInstance: boolean, msg: PushFilter): PushFilter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PushFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PushFilter;
  static deserializeBinaryFromReader(message: PushFilter, reader: jspb.BinaryReader): PushFilter;
}

export namespace PushFilter {
  export type AsObject = {
    branch: string,
    tag: string,
  }

  export enum GitRefCase {
    GIT_REF_NOT_SET = 0,
    BRANCH = 2,
    TAG = 3,
  }
}

export class CreateBuildTriggerRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  hasTrigger(): boolean;
  clearTrigger(): void;
  getTrigger(): BuildTrigger | undefined;
  setTrigger(value?: BuildTrigger): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateBuildTriggerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateBuildTriggerRequest): CreateBuildTriggerRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateBuildTriggerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateBuildTriggerRequest;
  static deserializeBinaryFromReader(message: CreateBuildTriggerRequest, reader: jspb.BinaryReader): CreateBuildTriggerRequest;
}

export namespace CreateBuildTriggerRequest {
  export type AsObject = {
    projectId: string,
    trigger?: BuildTrigger.AsObject,
  }
}

export class GetBuildTriggerRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getTriggerId(): string;
  setTriggerId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBuildTriggerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBuildTriggerRequest): GetBuildTriggerRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBuildTriggerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBuildTriggerRequest;
  static deserializeBinaryFromReader(message: GetBuildTriggerRequest, reader: jspb.BinaryReader): GetBuildTriggerRequest;
}

export namespace GetBuildTriggerRequest {
  export type AsObject = {
    projectId: string,
    triggerId: string,
  }
}

export class ListBuildTriggersRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListBuildTriggersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListBuildTriggersRequest): ListBuildTriggersRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListBuildTriggersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListBuildTriggersRequest;
  static deserializeBinaryFromReader(message: ListBuildTriggersRequest, reader: jspb.BinaryReader): ListBuildTriggersRequest;
}

export namespace ListBuildTriggersRequest {
  export type AsObject = {
    projectId: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListBuildTriggersResponse extends jspb.Message {
  clearTriggersList(): void;
  getTriggersList(): Array<BuildTrigger>;
  setTriggersList(value: Array<BuildTrigger>): void;
  addTriggers(value?: BuildTrigger, index?: number): BuildTrigger;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListBuildTriggersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListBuildTriggersResponse): ListBuildTriggersResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListBuildTriggersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListBuildTriggersResponse;
  static deserializeBinaryFromReader(message: ListBuildTriggersResponse, reader: jspb.BinaryReader): ListBuildTriggersResponse;
}

export namespace ListBuildTriggersResponse {
  export type AsObject = {
    triggersList: Array<BuildTrigger.AsObject>,
    nextPageToken: string,
  }
}

export class DeleteBuildTriggerRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getTriggerId(): string;
  setTriggerId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteBuildTriggerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteBuildTriggerRequest): DeleteBuildTriggerRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteBuildTriggerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteBuildTriggerRequest;
  static deserializeBinaryFromReader(message: DeleteBuildTriggerRequest, reader: jspb.BinaryReader): DeleteBuildTriggerRequest;
}

export namespace DeleteBuildTriggerRequest {
  export type AsObject = {
    projectId: string,
    triggerId: string,
  }
}

export class UpdateBuildTriggerRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getTriggerId(): string;
  setTriggerId(value: string): void;

  hasTrigger(): boolean;
  clearTrigger(): void;
  getTrigger(): BuildTrigger | undefined;
  setTrigger(value?: BuildTrigger): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateBuildTriggerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateBuildTriggerRequest): UpdateBuildTriggerRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateBuildTriggerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateBuildTriggerRequest;
  static deserializeBinaryFromReader(message: UpdateBuildTriggerRequest, reader: jspb.BinaryReader): UpdateBuildTriggerRequest;
}

export namespace UpdateBuildTriggerRequest {
  export type AsObject = {
    projectId: string,
    triggerId: string,
    trigger?: BuildTrigger.AsObject,
  }
}

export class BuildOptions extends jspb.Message {
  clearSourceProvenanceHashList(): void;
  getSourceProvenanceHashList(): Array<Hash.HashTypeMap[keyof Hash.HashTypeMap]>;
  setSourceProvenanceHashList(value: Array<Hash.HashTypeMap[keyof Hash.HashTypeMap]>): void;
  addSourceProvenanceHash(value: Hash.HashTypeMap[keyof Hash.HashTypeMap], index?: number): Hash.HashTypeMap[keyof Hash.HashTypeMap];

  getRequestedVerifyOption(): BuildOptions.VerifyOptionMap[keyof BuildOptions.VerifyOptionMap];
  setRequestedVerifyOption(value: BuildOptions.VerifyOptionMap[keyof BuildOptions.VerifyOptionMap]): void;

  getMachineType(): BuildOptions.MachineTypeMap[keyof BuildOptions.MachineTypeMap];
  setMachineType(value: BuildOptions.MachineTypeMap[keyof BuildOptions.MachineTypeMap]): void;

  getDiskSizeGb(): number;
  setDiskSizeGb(value: number): void;

  getSubstitutionOption(): BuildOptions.SubstitutionOptionMap[keyof BuildOptions.SubstitutionOptionMap];
  setSubstitutionOption(value: BuildOptions.SubstitutionOptionMap[keyof BuildOptions.SubstitutionOptionMap]): void;

  getLogStreamingOption(): BuildOptions.LogStreamingOptionMap[keyof BuildOptions.LogStreamingOptionMap];
  setLogStreamingOption(value: BuildOptions.LogStreamingOptionMap[keyof BuildOptions.LogStreamingOptionMap]): void;

  getWorkerPool(): string;
  setWorkerPool(value: string): void;

  getLogging(): BuildOptions.LoggingModeMap[keyof BuildOptions.LoggingModeMap];
  setLogging(value: BuildOptions.LoggingModeMap[keyof BuildOptions.LoggingModeMap]): void;

  clearEnvList(): void;
  getEnvList(): Array<string>;
  setEnvList(value: Array<string>): void;
  addEnv(value: string, index?: number): string;

  clearSecretEnvList(): void;
  getSecretEnvList(): Array<string>;
  setSecretEnvList(value: Array<string>): void;
  addSecretEnv(value: string, index?: number): string;

  clearVolumesList(): void;
  getVolumesList(): Array<Volume>;
  setVolumesList(value: Array<Volume>): void;
  addVolumes(value?: Volume, index?: number): Volume;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BuildOptions.AsObject;
  static toObject(includeInstance: boolean, msg: BuildOptions): BuildOptions.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BuildOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BuildOptions;
  static deserializeBinaryFromReader(message: BuildOptions, reader: jspb.BinaryReader): BuildOptions;
}

export namespace BuildOptions {
  export type AsObject = {
    sourceProvenanceHashList: Array<Hash.HashTypeMap[keyof Hash.HashTypeMap]>,
    requestedVerifyOption: BuildOptions.VerifyOptionMap[keyof BuildOptions.VerifyOptionMap],
    machineType: BuildOptions.MachineTypeMap[keyof BuildOptions.MachineTypeMap],
    diskSizeGb: number,
    substitutionOption: BuildOptions.SubstitutionOptionMap[keyof BuildOptions.SubstitutionOptionMap],
    logStreamingOption: BuildOptions.LogStreamingOptionMap[keyof BuildOptions.LogStreamingOptionMap],
    workerPool: string,
    logging: BuildOptions.LoggingModeMap[keyof BuildOptions.LoggingModeMap],
    envList: Array<string>,
    secretEnvList: Array<string>,
    volumesList: Array<Volume.AsObject>,
  }

  export interface VerifyOptionMap {
    NOT_VERIFIED: 0;
    VERIFIED: 1;
  }

  export const VerifyOption: VerifyOptionMap;

  export interface MachineTypeMap {
    UNSPECIFIED: 0;
    N1_HIGHCPU_8: 1;
    N1_HIGHCPU_32: 2;
  }

  export const MachineType: MachineTypeMap;

  export interface SubstitutionOptionMap {
    MUST_MATCH: 0;
    ALLOW_LOOSE: 1;
  }

  export const SubstitutionOption: SubstitutionOptionMap;

  export interface LogStreamingOptionMap {
    STREAM_DEFAULT: 0;
    STREAM_ON: 1;
    STREAM_OFF: 2;
  }

  export const LogStreamingOption: LogStreamingOptionMap;

  export interface LoggingModeMap {
    LOGGING_UNSPECIFIED: 0;
    LEGACY: 1;
    GCS_ONLY: 2;
  }

  export const LoggingMode: LoggingModeMap;
}

export class WorkerPool extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getProjectId(): string;
  setProjectId(value: string): void;

  getServiceAccountEmail(): string;
  setServiceAccountEmail(value: string): void;

  getWorkerCount(): number;
  setWorkerCount(value: number): void;

  hasWorkerConfig(): boolean;
  clearWorkerConfig(): void;
  getWorkerConfig(): WorkerConfig | undefined;
  setWorkerConfig(value?: WorkerConfig): void;

  clearRegionsList(): void;
  getRegionsList(): Array<WorkerPool.RegionMap[keyof WorkerPool.RegionMap]>;
  setRegionsList(value: Array<WorkerPool.RegionMap[keyof WorkerPool.RegionMap]>): void;
  addRegions(value: WorkerPool.RegionMap[keyof WorkerPool.RegionMap], index?: number): WorkerPool.RegionMap[keyof WorkerPool.RegionMap];

  hasCreateTime(): boolean;
  clearCreateTime(): void;
  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdateTime(): boolean;
  clearUpdateTime(): void;
  getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasDeleteTime(): boolean;
  clearDeleteTime(): void;
  getDeleteTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDeleteTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getStatus(): WorkerPool.StatusMap[keyof WorkerPool.StatusMap];
  setStatus(value: WorkerPool.StatusMap[keyof WorkerPool.StatusMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WorkerPool.AsObject;
  static toObject(includeInstance: boolean, msg: WorkerPool): WorkerPool.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WorkerPool, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WorkerPool;
  static deserializeBinaryFromReader(message: WorkerPool, reader: jspb.BinaryReader): WorkerPool;
}

export namespace WorkerPool {
  export type AsObject = {
    name: string,
    projectId: string,
    serviceAccountEmail: string,
    workerCount: number,
    workerConfig?: WorkerConfig.AsObject,
    regionsList: Array<WorkerPool.RegionMap[keyof WorkerPool.RegionMap]>,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    deleteTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    status: WorkerPool.StatusMap[keyof WorkerPool.StatusMap],
  }

  export interface RegionMap {
    REGION_UNSPECIFIED: 0;
    US_CENTRAL1: 1;
    US_WEST1: 2;
    US_EAST1: 3;
    US_EAST4: 4;
  }

  export const Region: RegionMap;

  export interface StatusMap {
    STATUS_UNSPECIFIED: 0;
    CREATING: 1;
    RUNNING: 2;
    DELETING: 3;
    DELETED: 4;
  }

  export const Status: StatusMap;
}

export class WorkerConfig extends jspb.Message {
  getMachineType(): string;
  setMachineType(value: string): void;

  getDiskSizeGb(): number;
  setDiskSizeGb(value: number): void;

  hasNetwork(): boolean;
  clearNetwork(): void;
  getNetwork(): Network | undefined;
  setNetwork(value?: Network): void;

  getTag(): string;
  setTag(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WorkerConfig.AsObject;
  static toObject(includeInstance: boolean, msg: WorkerConfig): WorkerConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WorkerConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WorkerConfig;
  static deserializeBinaryFromReader(message: WorkerConfig, reader: jspb.BinaryReader): WorkerConfig;
}

export namespace WorkerConfig {
  export type AsObject = {
    machineType: string,
    diskSizeGb: number,
    network?: Network.AsObject,
    tag: string,
  }
}

export class Network extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getNetwork(): string;
  setNetwork(value: string): void;

  getSubnetwork(): string;
  setSubnetwork(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Network.AsObject;
  static toObject(includeInstance: boolean, msg: Network): Network.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Network, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Network;
  static deserializeBinaryFromReader(message: Network, reader: jspb.BinaryReader): Network;
}

export namespace Network {
  export type AsObject = {
    projectId: string,
    network: string,
    subnetwork: string,
  }
}

export class CreateWorkerPoolRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  hasWorkerPool(): boolean;
  clearWorkerPool(): void;
  getWorkerPool(): WorkerPool | undefined;
  setWorkerPool(value?: WorkerPool): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateWorkerPoolRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateWorkerPoolRequest): CreateWorkerPoolRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateWorkerPoolRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateWorkerPoolRequest;
  static deserializeBinaryFromReader(message: CreateWorkerPoolRequest, reader: jspb.BinaryReader): CreateWorkerPoolRequest;
}

export namespace CreateWorkerPoolRequest {
  export type AsObject = {
    parent: string,
    workerPool?: WorkerPool.AsObject,
  }
}

export class GetWorkerPoolRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetWorkerPoolRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetWorkerPoolRequest): GetWorkerPoolRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetWorkerPoolRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetWorkerPoolRequest;
  static deserializeBinaryFromReader(message: GetWorkerPoolRequest, reader: jspb.BinaryReader): GetWorkerPoolRequest;
}

export namespace GetWorkerPoolRequest {
  export type AsObject = {
    name: string,
  }
}

export class DeleteWorkerPoolRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteWorkerPoolRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteWorkerPoolRequest): DeleteWorkerPoolRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteWorkerPoolRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteWorkerPoolRequest;
  static deserializeBinaryFromReader(message: DeleteWorkerPoolRequest, reader: jspb.BinaryReader): DeleteWorkerPoolRequest;
}

export namespace DeleteWorkerPoolRequest {
  export type AsObject = {
    name: string,
  }
}

export class UpdateWorkerPoolRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasWorkerPool(): boolean;
  clearWorkerPool(): void;
  getWorkerPool(): WorkerPool | undefined;
  setWorkerPool(value?: WorkerPool): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateWorkerPoolRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateWorkerPoolRequest): UpdateWorkerPoolRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateWorkerPoolRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateWorkerPoolRequest;
  static deserializeBinaryFromReader(message: UpdateWorkerPoolRequest, reader: jspb.BinaryReader): UpdateWorkerPoolRequest;
}

export namespace UpdateWorkerPoolRequest {
  export type AsObject = {
    name: string,
    workerPool?: WorkerPool.AsObject,
  }
}

export class ListWorkerPoolsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListWorkerPoolsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListWorkerPoolsRequest): ListWorkerPoolsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListWorkerPoolsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListWorkerPoolsRequest;
  static deserializeBinaryFromReader(message: ListWorkerPoolsRequest, reader: jspb.BinaryReader): ListWorkerPoolsRequest;
}

export namespace ListWorkerPoolsRequest {
  export type AsObject = {
    parent: string,
  }
}

export class ListWorkerPoolsResponse extends jspb.Message {
  clearWorkerPoolsList(): void;
  getWorkerPoolsList(): Array<WorkerPool>;
  setWorkerPoolsList(value: Array<WorkerPool>): void;
  addWorkerPools(value?: WorkerPool, index?: number): WorkerPool;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListWorkerPoolsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListWorkerPoolsResponse): ListWorkerPoolsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListWorkerPoolsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListWorkerPoolsResponse;
  static deserializeBinaryFromReader(message: ListWorkerPoolsResponse, reader: jspb.BinaryReader): ListWorkerPoolsResponse;
}

export namespace ListWorkerPoolsResponse {
  export type AsObject = {
    workerPoolsList: Array<WorkerPool.AsObject>,
  }
}

