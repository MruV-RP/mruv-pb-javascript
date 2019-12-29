// package: google.genomics.v1
// file: google/genomics/v1/references.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";

export class Reference extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getLength(): number;
  setLength(value: number): void;

  getMd5checksum(): string;
  setMd5checksum(value: string): void;

  getName(): string;
  setName(value: string): void;

  getSourceUri(): string;
  setSourceUri(value: string): void;

  clearSourceAccessionsList(): void;
  getSourceAccessionsList(): Array<string>;
  setSourceAccessionsList(value: Array<string>): void;
  addSourceAccessions(value: string, index?: number): string;

  getNcbiTaxonId(): number;
  setNcbiTaxonId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Reference.AsObject;
  static toObject(includeInstance: boolean, msg: Reference): Reference.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Reference, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Reference;
  static deserializeBinaryFromReader(message: Reference, reader: jspb.BinaryReader): Reference;
}

export namespace Reference {
  export type AsObject = {
    id: string,
    length: number,
    md5checksum: string,
    name: string,
    sourceUri: string,
    sourceAccessionsList: Array<string>,
    ncbiTaxonId: number,
  }
}

export class ReferenceSet extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  clearReferenceIdsList(): void;
  getReferenceIdsList(): Array<string>;
  setReferenceIdsList(value: Array<string>): void;
  addReferenceIds(value: string, index?: number): string;

  getMd5checksum(): string;
  setMd5checksum(value: string): void;

  getNcbiTaxonId(): number;
  setNcbiTaxonId(value: number): void;

  getDescription(): string;
  setDescription(value: string): void;

  getAssemblyId(): string;
  setAssemblyId(value: string): void;

  getSourceUri(): string;
  setSourceUri(value: string): void;

  clearSourceAccessionsList(): void;
  getSourceAccessionsList(): Array<string>;
  setSourceAccessionsList(value: Array<string>): void;
  addSourceAccessions(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReferenceSet.AsObject;
  static toObject(includeInstance: boolean, msg: ReferenceSet): ReferenceSet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReferenceSet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReferenceSet;
  static deserializeBinaryFromReader(message: ReferenceSet, reader: jspb.BinaryReader): ReferenceSet;
}

export namespace ReferenceSet {
  export type AsObject = {
    id: string,
    referenceIdsList: Array<string>,
    md5checksum: string,
    ncbiTaxonId: number,
    description: string,
    assemblyId: string,
    sourceUri: string,
    sourceAccessionsList: Array<string>,
  }
}

export class SearchReferenceSetsRequest extends jspb.Message {
  clearMd5checksumsList(): void;
  getMd5checksumsList(): Array<string>;
  setMd5checksumsList(value: Array<string>): void;
  addMd5checksums(value: string, index?: number): string;

  clearAccessionsList(): void;
  getAccessionsList(): Array<string>;
  setAccessionsList(value: Array<string>): void;
  addAccessions(value: string, index?: number): string;

  getAssemblyId(): string;
  setAssemblyId(value: string): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchReferenceSetsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SearchReferenceSetsRequest): SearchReferenceSetsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchReferenceSetsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchReferenceSetsRequest;
  static deserializeBinaryFromReader(message: SearchReferenceSetsRequest, reader: jspb.BinaryReader): SearchReferenceSetsRequest;
}

export namespace SearchReferenceSetsRequest {
  export type AsObject = {
    md5checksumsList: Array<string>,
    accessionsList: Array<string>,
    assemblyId: string,
    pageToken: string,
    pageSize: number,
  }
}

export class SearchReferenceSetsResponse extends jspb.Message {
  clearReferenceSetsList(): void;
  getReferenceSetsList(): Array<ReferenceSet>;
  setReferenceSetsList(value: Array<ReferenceSet>): void;
  addReferenceSets(value?: ReferenceSet, index?: number): ReferenceSet;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchReferenceSetsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SearchReferenceSetsResponse): SearchReferenceSetsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchReferenceSetsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchReferenceSetsResponse;
  static deserializeBinaryFromReader(message: SearchReferenceSetsResponse, reader: jspb.BinaryReader): SearchReferenceSetsResponse;
}

export namespace SearchReferenceSetsResponse {
  export type AsObject = {
    referenceSetsList: Array<ReferenceSet.AsObject>,
    nextPageToken: string,
  }
}

export class GetReferenceSetRequest extends jspb.Message {
  getReferenceSetId(): string;
  setReferenceSetId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetReferenceSetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetReferenceSetRequest): GetReferenceSetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetReferenceSetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetReferenceSetRequest;
  static deserializeBinaryFromReader(message: GetReferenceSetRequest, reader: jspb.BinaryReader): GetReferenceSetRequest;
}

export namespace GetReferenceSetRequest {
  export type AsObject = {
    referenceSetId: string,
  }
}

export class SearchReferencesRequest extends jspb.Message {
  clearMd5checksumsList(): void;
  getMd5checksumsList(): Array<string>;
  setMd5checksumsList(value: Array<string>): void;
  addMd5checksums(value: string, index?: number): string;

  clearAccessionsList(): void;
  getAccessionsList(): Array<string>;
  setAccessionsList(value: Array<string>): void;
  addAccessions(value: string, index?: number): string;

  getReferenceSetId(): string;
  setReferenceSetId(value: string): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchReferencesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SearchReferencesRequest): SearchReferencesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchReferencesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchReferencesRequest;
  static deserializeBinaryFromReader(message: SearchReferencesRequest, reader: jspb.BinaryReader): SearchReferencesRequest;
}

export namespace SearchReferencesRequest {
  export type AsObject = {
    md5checksumsList: Array<string>,
    accessionsList: Array<string>,
    referenceSetId: string,
    pageToken: string,
    pageSize: number,
  }
}

export class SearchReferencesResponse extends jspb.Message {
  clearReferencesList(): void;
  getReferencesList(): Array<Reference>;
  setReferencesList(value: Array<Reference>): void;
  addReferences(value?: Reference, index?: number): Reference;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchReferencesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SearchReferencesResponse): SearchReferencesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchReferencesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchReferencesResponse;
  static deserializeBinaryFromReader(message: SearchReferencesResponse, reader: jspb.BinaryReader): SearchReferencesResponse;
}

export namespace SearchReferencesResponse {
  export type AsObject = {
    referencesList: Array<Reference.AsObject>,
    nextPageToken: string,
  }
}

export class GetReferenceRequest extends jspb.Message {
  getReferenceId(): string;
  setReferenceId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetReferenceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetReferenceRequest): GetReferenceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetReferenceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetReferenceRequest;
  static deserializeBinaryFromReader(message: GetReferenceRequest, reader: jspb.BinaryReader): GetReferenceRequest;
}

export namespace GetReferenceRequest {
  export type AsObject = {
    referenceId: string,
  }
}

export class ListBasesRequest extends jspb.Message {
  getReferenceId(): string;
  setReferenceId(value: string): void;

  getStart(): number;
  setStart(value: number): void;

  getEnd(): number;
  setEnd(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListBasesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListBasesRequest): ListBasesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListBasesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListBasesRequest;
  static deserializeBinaryFromReader(message: ListBasesRequest, reader: jspb.BinaryReader): ListBasesRequest;
}

export namespace ListBasesRequest {
  export type AsObject = {
    referenceId: string,
    start: number,
    end: number,
    pageToken: string,
    pageSize: number,
  }
}

export class ListBasesResponse extends jspb.Message {
  getOffset(): number;
  setOffset(value: number): void;

  getSequence(): string;
  setSequence(value: string): void;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListBasesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListBasesResponse): ListBasesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListBasesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListBasesResponse;
  static deserializeBinaryFromReader(message: ListBasesResponse, reader: jspb.BinaryReader): ListBasesResponse;
}

export namespace ListBasesResponse {
  export type AsObject = {
    offset: number,
    sequence: string,
    nextPageToken: string,
  }
}

