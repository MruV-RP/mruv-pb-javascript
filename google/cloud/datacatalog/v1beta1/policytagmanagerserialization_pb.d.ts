// package: google.cloud.datacatalog.v1beta1
// file: google/cloud/datacatalog/v1beta1/policytagmanagerserialization.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";
import * as google_api_client_pb from "../../../../google/api/client_pb";
import * as google_api_field_behavior_pb from "../../../../google/api/field_behavior_pb";
import * as google_api_resource_pb from "../../../../google/api/resource_pb";
import * as google_cloud_datacatalog_v1beta1_policytagmanager_pb from "../../../../google/cloud/datacatalog/v1beta1/policytagmanager_pb";
import * as google_iam_v1_policy_pb from "../../../../google/iam/v1/policy_pb";

export class SerializedTaxonomy extends jspb.Message {
  getDisplayName(): string;
  setDisplayName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  clearPolicyTagsList(): void;
  getPolicyTagsList(): Array<SerializedPolicyTag>;
  setPolicyTagsList(value: Array<SerializedPolicyTag>): void;
  addPolicyTags(value?: SerializedPolicyTag, index?: number): SerializedPolicyTag;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SerializedTaxonomy.AsObject;
  static toObject(includeInstance: boolean, msg: SerializedTaxonomy): SerializedTaxonomy.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SerializedTaxonomy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SerializedTaxonomy;
  static deserializeBinaryFromReader(message: SerializedTaxonomy, reader: jspb.BinaryReader): SerializedTaxonomy;
}

export namespace SerializedTaxonomy {
  export type AsObject = {
    displayName: string,
    description: string,
    policyTagsList: Array<SerializedPolicyTag.AsObject>,
  }
}

export class SerializedPolicyTag extends jspb.Message {
  getDisplayName(): string;
  setDisplayName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  clearChildPolicyTagsList(): void;
  getChildPolicyTagsList(): Array<SerializedPolicyTag>;
  setChildPolicyTagsList(value: Array<SerializedPolicyTag>): void;
  addChildPolicyTags(value?: SerializedPolicyTag, index?: number): SerializedPolicyTag;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SerializedPolicyTag.AsObject;
  static toObject(includeInstance: boolean, msg: SerializedPolicyTag): SerializedPolicyTag.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SerializedPolicyTag, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SerializedPolicyTag;
  static deserializeBinaryFromReader(message: SerializedPolicyTag, reader: jspb.BinaryReader): SerializedPolicyTag;
}

export namespace SerializedPolicyTag {
  export type AsObject = {
    displayName: string,
    description: string,
    childPolicyTagsList: Array<SerializedPolicyTag.AsObject>,
  }
}

export class ImportTaxonomiesRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  hasInlineSource(): boolean;
  clearInlineSource(): void;
  getInlineSource(): InlineSource | undefined;
  setInlineSource(value?: InlineSource): void;

  getSourceCase(): ImportTaxonomiesRequest.SourceCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImportTaxonomiesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ImportTaxonomiesRequest): ImportTaxonomiesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ImportTaxonomiesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImportTaxonomiesRequest;
  static deserializeBinaryFromReader(message: ImportTaxonomiesRequest, reader: jspb.BinaryReader): ImportTaxonomiesRequest;
}

export namespace ImportTaxonomiesRequest {
  export type AsObject = {
    parent: string,
    inlineSource?: InlineSource.AsObject,
  }

  export enum SourceCase {
    SOURCE_NOT_SET = 0,
    INLINE_SOURCE = 2,
  }
}

export class InlineSource extends jspb.Message {
  clearTaxonomiesList(): void;
  getTaxonomiesList(): Array<SerializedTaxonomy>;
  setTaxonomiesList(value: Array<SerializedTaxonomy>): void;
  addTaxonomies(value?: SerializedTaxonomy, index?: number): SerializedTaxonomy;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InlineSource.AsObject;
  static toObject(includeInstance: boolean, msg: InlineSource): InlineSource.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InlineSource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InlineSource;
  static deserializeBinaryFromReader(message: InlineSource, reader: jspb.BinaryReader): InlineSource;
}

export namespace InlineSource {
  export type AsObject = {
    taxonomiesList: Array<SerializedTaxonomy.AsObject>,
  }
}

export class ImportTaxonomiesResponse extends jspb.Message {
  clearTaxonomiesList(): void;
  getTaxonomiesList(): Array<google_cloud_datacatalog_v1beta1_policytagmanager_pb.Taxonomy>;
  setTaxonomiesList(value: Array<google_cloud_datacatalog_v1beta1_policytagmanager_pb.Taxonomy>): void;
  addTaxonomies(value?: google_cloud_datacatalog_v1beta1_policytagmanager_pb.Taxonomy, index?: number): google_cloud_datacatalog_v1beta1_policytagmanager_pb.Taxonomy;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImportTaxonomiesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ImportTaxonomiesResponse): ImportTaxonomiesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ImportTaxonomiesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImportTaxonomiesResponse;
  static deserializeBinaryFromReader(message: ImportTaxonomiesResponse, reader: jspb.BinaryReader): ImportTaxonomiesResponse;
}

export namespace ImportTaxonomiesResponse {
  export type AsObject = {
    taxonomiesList: Array<google_cloud_datacatalog_v1beta1_policytagmanager_pb.Taxonomy.AsObject>,
  }
}

export class ExportTaxonomiesRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  clearTaxonomiesList(): void;
  getTaxonomiesList(): Array<string>;
  setTaxonomiesList(value: Array<string>): void;
  addTaxonomies(value: string, index?: number): string;

  hasSerializedTaxonomies(): boolean;
  clearSerializedTaxonomies(): void;
  getSerializedTaxonomies(): boolean;
  setSerializedTaxonomies(value: boolean): void;

  getDestinationCase(): ExportTaxonomiesRequest.DestinationCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExportTaxonomiesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExportTaxonomiesRequest): ExportTaxonomiesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExportTaxonomiesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExportTaxonomiesRequest;
  static deserializeBinaryFromReader(message: ExportTaxonomiesRequest, reader: jspb.BinaryReader): ExportTaxonomiesRequest;
}

export namespace ExportTaxonomiesRequest {
  export type AsObject = {
    parent: string,
    taxonomiesList: Array<string>,
    serializedTaxonomies: boolean,
  }

  export enum DestinationCase {
    DESTINATION_NOT_SET = 0,
    SERIALIZED_TAXONOMIES = 3,
  }
}

export class ExportTaxonomiesResponse extends jspb.Message {
  clearTaxonomiesList(): void;
  getTaxonomiesList(): Array<SerializedTaxonomy>;
  setTaxonomiesList(value: Array<SerializedTaxonomy>): void;
  addTaxonomies(value?: SerializedTaxonomy, index?: number): SerializedTaxonomy;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExportTaxonomiesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ExportTaxonomiesResponse): ExportTaxonomiesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExportTaxonomiesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExportTaxonomiesResponse;
  static deserializeBinaryFromReader(message: ExportTaxonomiesResponse, reader: jspb.BinaryReader): ExportTaxonomiesResponse;
}

export namespace ExportTaxonomiesResponse {
  export type AsObject = {
    taxonomiesList: Array<SerializedTaxonomy.AsObject>,
  }
}

