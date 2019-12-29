// package: google.cloud.datacatalog.v1beta1
// file: google/cloud/datacatalog/v1beta1/search.proto

import * as jspb from "google-protobuf";
import * as google_api_field_behavior_pb from "../../../../google/api/field_behavior_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class SearchCatalogResult extends jspb.Message {
  getSearchResultType(): SearchResultTypeMap[keyof SearchResultTypeMap];
  setSearchResultType(value: SearchResultTypeMap[keyof SearchResultTypeMap]): void;

  getSearchResultSubtype(): string;
  setSearchResultSubtype(value: string): void;

  getRelativeResourceName(): string;
  setRelativeResourceName(value: string): void;

  getLinkedResource(): string;
  setLinkedResource(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchCatalogResult.AsObject;
  static toObject(includeInstance: boolean, msg: SearchCatalogResult): SearchCatalogResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchCatalogResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchCatalogResult;
  static deserializeBinaryFromReader(message: SearchCatalogResult, reader: jspb.BinaryReader): SearchCatalogResult;
}

export namespace SearchCatalogResult {
  export type AsObject = {
    searchResultType: SearchResultTypeMap[keyof SearchResultTypeMap],
    searchResultSubtype: string,
    relativeResourceName: string,
    linkedResource: string,
  }
}

export interface SearchResultTypeMap {
  SEARCH_RESULT_TYPE_UNSPECIFIED: 0;
  ENTRY: 1;
  TAG_TEMPLATE: 2;
  ENTRY_GROUP: 3;
}

export const SearchResultType: SearchResultTypeMap;

