// package: google.cloud.automl.v1
// file: google/cloud/automl/v1/data_items.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";
import * as google_cloud_automl_v1_geometry_pb from "../../../../google/cloud/automl/v1/geometry_pb";
import * as google_cloud_automl_v1_io_pb from "../../../../google/cloud/automl/v1/io_pb";
import * as google_cloud_automl_v1_text_segment_pb from "../../../../google/cloud/automl/v1/text_segment_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";

export class Image extends jspb.Message {
  hasImageBytes(): boolean;
  clearImageBytes(): void;
  getImageBytes(): Uint8Array | string;
  getImageBytes_asU8(): Uint8Array;
  getImageBytes_asB64(): string;
  setImageBytes(value: Uint8Array | string): void;

  getThumbnailUri(): string;
  setThumbnailUri(value: string): void;

  getDataCase(): Image.DataCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Image.AsObject;
  static toObject(includeInstance: boolean, msg: Image): Image.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Image, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Image;
  static deserializeBinaryFromReader(message: Image, reader: jspb.BinaryReader): Image;
}

export namespace Image {
  export type AsObject = {
    imageBytes: Uint8Array | string,
    thumbnailUri: string,
  }

  export enum DataCase {
    DATA_NOT_SET = 0,
    IMAGE_BYTES = 1,
  }
}

export class TextSnippet extends jspb.Message {
  getContent(): string;
  setContent(value: string): void;

  getMimeType(): string;
  setMimeType(value: string): void;

  getContentUri(): string;
  setContentUri(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TextSnippet.AsObject;
  static toObject(includeInstance: boolean, msg: TextSnippet): TextSnippet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TextSnippet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TextSnippet;
  static deserializeBinaryFromReader(message: TextSnippet, reader: jspb.BinaryReader): TextSnippet;
}

export namespace TextSnippet {
  export type AsObject = {
    content: string,
    mimeType: string,
    contentUri: string,
  }
}

export class DocumentDimensions extends jspb.Message {
  getUnit(): DocumentDimensions.DocumentDimensionUnitMap[keyof DocumentDimensions.DocumentDimensionUnitMap];
  setUnit(value: DocumentDimensions.DocumentDimensionUnitMap[keyof DocumentDimensions.DocumentDimensionUnitMap]): void;

  getWidth(): number;
  setWidth(value: number): void;

  getHeight(): number;
  setHeight(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DocumentDimensions.AsObject;
  static toObject(includeInstance: boolean, msg: DocumentDimensions): DocumentDimensions.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DocumentDimensions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DocumentDimensions;
  static deserializeBinaryFromReader(message: DocumentDimensions, reader: jspb.BinaryReader): DocumentDimensions;
}

export namespace DocumentDimensions {
  export type AsObject = {
    unit: DocumentDimensions.DocumentDimensionUnitMap[keyof DocumentDimensions.DocumentDimensionUnitMap],
    width: number,
    height: number,
  }

  export interface DocumentDimensionUnitMap {
    DOCUMENT_DIMENSION_UNIT_UNSPECIFIED: 0;
    INCH: 1;
    CENTIMETER: 2;
    POINT: 3;
  }

  export const DocumentDimensionUnit: DocumentDimensionUnitMap;
}

export class Document extends jspb.Message {
  hasInputConfig(): boolean;
  clearInputConfig(): void;
  getInputConfig(): google_cloud_automl_v1_io_pb.DocumentInputConfig | undefined;
  setInputConfig(value?: google_cloud_automl_v1_io_pb.DocumentInputConfig): void;

  hasDocumentText(): boolean;
  clearDocumentText(): void;
  getDocumentText(): TextSnippet | undefined;
  setDocumentText(value?: TextSnippet): void;

  clearLayoutList(): void;
  getLayoutList(): Array<Document.Layout>;
  setLayoutList(value: Array<Document.Layout>): void;
  addLayout(value?: Document.Layout, index?: number): Document.Layout;

  hasDocumentDimensions(): boolean;
  clearDocumentDimensions(): void;
  getDocumentDimensions(): DocumentDimensions | undefined;
  setDocumentDimensions(value?: DocumentDimensions): void;

  getPageCount(): number;
  setPageCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Document.AsObject;
  static toObject(includeInstance: boolean, msg: Document): Document.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Document, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Document;
  static deserializeBinaryFromReader(message: Document, reader: jspb.BinaryReader): Document;
}

export namespace Document {
  export type AsObject = {
    inputConfig?: google_cloud_automl_v1_io_pb.DocumentInputConfig.AsObject,
    documentText?: TextSnippet.AsObject,
    layoutList: Array<Document.Layout.AsObject>,
    documentDimensions?: DocumentDimensions.AsObject,
    pageCount: number,
  }

  export class Layout extends jspb.Message {
    hasTextSegment(): boolean;
    clearTextSegment(): void;
    getTextSegment(): google_cloud_automl_v1_text_segment_pb.TextSegment | undefined;
    setTextSegment(value?: google_cloud_automl_v1_text_segment_pb.TextSegment): void;

    getPageNumber(): number;
    setPageNumber(value: number): void;

    hasBoundingPoly(): boolean;
    clearBoundingPoly(): void;
    getBoundingPoly(): google_cloud_automl_v1_geometry_pb.BoundingPoly | undefined;
    setBoundingPoly(value?: google_cloud_automl_v1_geometry_pb.BoundingPoly): void;

    getTextSegmentType(): Document.Layout.TextSegmentTypeMap[keyof Document.Layout.TextSegmentTypeMap];
    setTextSegmentType(value: Document.Layout.TextSegmentTypeMap[keyof Document.Layout.TextSegmentTypeMap]): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Layout.AsObject;
    static toObject(includeInstance: boolean, msg: Layout): Layout.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Layout, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Layout;
    static deserializeBinaryFromReader(message: Layout, reader: jspb.BinaryReader): Layout;
  }

  export namespace Layout {
    export type AsObject = {
      textSegment?: google_cloud_automl_v1_text_segment_pb.TextSegment.AsObject,
      pageNumber: number,
      boundingPoly?: google_cloud_automl_v1_geometry_pb.BoundingPoly.AsObject,
      textSegmentType: Document.Layout.TextSegmentTypeMap[keyof Document.Layout.TextSegmentTypeMap],
    }

    export interface TextSegmentTypeMap {
      TEXT_SEGMENT_TYPE_UNSPECIFIED: 0;
      TOKEN: 1;
      PARAGRAPH: 2;
      FORM_FIELD: 3;
      FORM_FIELD_NAME: 4;
      FORM_FIELD_CONTENTS: 5;
      TABLE: 6;
      TABLE_HEADER: 7;
      TABLE_ROW: 8;
      TABLE_CELL: 9;
    }

    export const TextSegmentType: TextSegmentTypeMap;
  }
}

export class ExamplePayload extends jspb.Message {
  hasImage(): boolean;
  clearImage(): void;
  getImage(): Image | undefined;
  setImage(value?: Image): void;

  hasTextSnippet(): boolean;
  clearTextSnippet(): void;
  getTextSnippet(): TextSnippet | undefined;
  setTextSnippet(value?: TextSnippet): void;

  hasDocument(): boolean;
  clearDocument(): void;
  getDocument(): Document | undefined;
  setDocument(value?: Document): void;

  getPayloadCase(): ExamplePayload.PayloadCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExamplePayload.AsObject;
  static toObject(includeInstance: boolean, msg: ExamplePayload): ExamplePayload.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExamplePayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExamplePayload;
  static deserializeBinaryFromReader(message: ExamplePayload, reader: jspb.BinaryReader): ExamplePayload;
}

export namespace ExamplePayload {
  export type AsObject = {
    image?: Image.AsObject,
    textSnippet?: TextSnippet.AsObject,
    document?: Document.AsObject,
  }

  export enum PayloadCase {
    PAYLOAD_NOT_SET = 0,
    IMAGE = 1,
    TEXT_SNIPPET = 2,
    DOCUMENT = 4,
  }
}

