// package: google.devtools.containeranalysis.v1alpha1
// file: google/devtools/containeranalysis/v1alpha1/source_context.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";

export class SourceContext extends jspb.Message {
  hasCloudRepo(): boolean;
  clearCloudRepo(): void;
  getCloudRepo(): CloudRepoSourceContext | undefined;
  setCloudRepo(value?: CloudRepoSourceContext): void;

  hasGerrit(): boolean;
  clearGerrit(): void;
  getGerrit(): GerritSourceContext | undefined;
  setGerrit(value?: GerritSourceContext): void;

  hasGit(): boolean;
  clearGit(): void;
  getGit(): GitSourceContext | undefined;
  setGit(value?: GitSourceContext): void;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): void;
  getContextCase(): SourceContext.ContextCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SourceContext.AsObject;
  static toObject(includeInstance: boolean, msg: SourceContext): SourceContext.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SourceContext, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SourceContext;
  static deserializeBinaryFromReader(message: SourceContext, reader: jspb.BinaryReader): SourceContext;
}

export namespace SourceContext {
  export type AsObject = {
    cloudRepo?: CloudRepoSourceContext.AsObject,
    gerrit?: GerritSourceContext.AsObject,
    git?: GitSourceContext.AsObject,
    labelsMap: Array<[string, string]>,
  }

  export enum ContextCase {
    CONTEXT_NOT_SET = 0,
    CLOUD_REPO = 1,
    GERRIT = 2,
    GIT = 3,
  }
}

export class AliasContext extends jspb.Message {
  getKind(): AliasContext.KindMap[keyof AliasContext.KindMap];
  setKind(value: AliasContext.KindMap[keyof AliasContext.KindMap]): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AliasContext.AsObject;
  static toObject(includeInstance: boolean, msg: AliasContext): AliasContext.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AliasContext, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AliasContext;
  static deserializeBinaryFromReader(message: AliasContext, reader: jspb.BinaryReader): AliasContext;
}

export namespace AliasContext {
  export type AsObject = {
    kind: AliasContext.KindMap[keyof AliasContext.KindMap],
    name: string,
  }

  export interface KindMap {
    KIND_UNSPECIFIED: 0;
    FIXED: 1;
    MOVABLE: 2;
    OTHER: 4;
  }

  export const Kind: KindMap;
}

export class CloudRepoSourceContext extends jspb.Message {
  hasRepoId(): boolean;
  clearRepoId(): void;
  getRepoId(): RepoId | undefined;
  setRepoId(value?: RepoId): void;

  hasRevisionId(): boolean;
  clearRevisionId(): void;
  getRevisionId(): string;
  setRevisionId(value: string): void;

  hasAliasContext(): boolean;
  clearAliasContext(): void;
  getAliasContext(): AliasContext | undefined;
  setAliasContext(value?: AliasContext): void;

  getRevisionCase(): CloudRepoSourceContext.RevisionCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CloudRepoSourceContext.AsObject;
  static toObject(includeInstance: boolean, msg: CloudRepoSourceContext): CloudRepoSourceContext.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CloudRepoSourceContext, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CloudRepoSourceContext;
  static deserializeBinaryFromReader(message: CloudRepoSourceContext, reader: jspb.BinaryReader): CloudRepoSourceContext;
}

export namespace CloudRepoSourceContext {
  export type AsObject = {
    repoId?: RepoId.AsObject,
    revisionId: string,
    aliasContext?: AliasContext.AsObject,
  }

  export enum RevisionCase {
    REVISION_NOT_SET = 0,
    REVISION_ID = 2,
    ALIAS_CONTEXT = 3,
  }
}

export class GerritSourceContext extends jspb.Message {
  getHostUri(): string;
  setHostUri(value: string): void;

  getGerritProject(): string;
  setGerritProject(value: string): void;

  hasRevisionId(): boolean;
  clearRevisionId(): void;
  getRevisionId(): string;
  setRevisionId(value: string): void;

  hasAliasContext(): boolean;
  clearAliasContext(): void;
  getAliasContext(): AliasContext | undefined;
  setAliasContext(value?: AliasContext): void;

  getRevisionCase(): GerritSourceContext.RevisionCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GerritSourceContext.AsObject;
  static toObject(includeInstance: boolean, msg: GerritSourceContext): GerritSourceContext.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GerritSourceContext, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GerritSourceContext;
  static deserializeBinaryFromReader(message: GerritSourceContext, reader: jspb.BinaryReader): GerritSourceContext;
}

export namespace GerritSourceContext {
  export type AsObject = {
    hostUri: string,
    gerritProject: string,
    revisionId: string,
    aliasContext?: AliasContext.AsObject,
  }

  export enum RevisionCase {
    REVISION_NOT_SET = 0,
    REVISION_ID = 3,
    ALIAS_CONTEXT = 4,
  }
}

export class GitSourceContext extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): void;

  getRevisionId(): string;
  setRevisionId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GitSourceContext.AsObject;
  static toObject(includeInstance: boolean, msg: GitSourceContext): GitSourceContext.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GitSourceContext, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GitSourceContext;
  static deserializeBinaryFromReader(message: GitSourceContext, reader: jspb.BinaryReader): GitSourceContext;
}

export namespace GitSourceContext {
  export type AsObject = {
    url: string,
    revisionId: string,
  }
}

export class RepoId extends jspb.Message {
  hasProjectRepoId(): boolean;
  clearProjectRepoId(): void;
  getProjectRepoId(): ProjectRepoId | undefined;
  setProjectRepoId(value?: ProjectRepoId): void;

  hasUid(): boolean;
  clearUid(): void;
  getUid(): string;
  setUid(value: string): void;

  getIdCase(): RepoId.IdCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RepoId.AsObject;
  static toObject(includeInstance: boolean, msg: RepoId): RepoId.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RepoId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RepoId;
  static deserializeBinaryFromReader(message: RepoId, reader: jspb.BinaryReader): RepoId;
}

export namespace RepoId {
  export type AsObject = {
    projectRepoId?: ProjectRepoId.AsObject,
    uid: string,
  }

  export enum IdCase {
    ID_NOT_SET = 0,
    PROJECT_REPO_ID = 1,
    UID = 2,
  }
}

export class ProjectRepoId extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getRepoName(): string;
  setRepoName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProjectRepoId.AsObject;
  static toObject(includeInstance: boolean, msg: ProjectRepoId): ProjectRepoId.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProjectRepoId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProjectRepoId;
  static deserializeBinaryFromReader(message: ProjectRepoId, reader: jspb.BinaryReader): ProjectRepoId;
}

export namespace ProjectRepoId {
  export type AsObject = {
    projectId: string,
    repoName: string,
  }
}

