// package: google.genomics.v1
// file: google/genomics/v1/variants.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as google_longrunning_operations_pb from "../../../google/longrunning/operations_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";

export class VariantSetMetadata extends jspb.Message {
  getKey(): string;
  setKey(value: string): void;

  getValue(): string;
  setValue(value: string): void;

  getId(): string;
  setId(value: string): void;

  getType(): VariantSetMetadata.TypeMap[keyof VariantSetMetadata.TypeMap];
  setType(value: VariantSetMetadata.TypeMap[keyof VariantSetMetadata.TypeMap]): void;

  getNumber(): string;
  setNumber(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getInfoMap(): jspb.Map<string, google_protobuf_struct_pb.ListValue>;
  clearInfoMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VariantSetMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: VariantSetMetadata): VariantSetMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VariantSetMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VariantSetMetadata;
  static deserializeBinaryFromReader(message: VariantSetMetadata, reader: jspb.BinaryReader): VariantSetMetadata;
}

export namespace VariantSetMetadata {
  export type AsObject = {
    key: string,
    value: string,
    id: string,
    type: VariantSetMetadata.TypeMap[keyof VariantSetMetadata.TypeMap],
    number: string,
    description: string,
    infoMap: Array<[string, google_protobuf_struct_pb.ListValue.AsObject]>,
  }

  export interface TypeMap {
    TYPE_UNSPECIFIED: 0;
    INTEGER: 1;
    FLOAT: 2;
    FLAG: 3;
    CHARACTER: 4;
    STRING: 5;
  }

  export const Type: TypeMap;
}

export class VariantSet extends jspb.Message {
  getDatasetId(): string;
  setDatasetId(value: string): void;

  getId(): string;
  setId(value: string): void;

  getReferenceSetId(): string;
  setReferenceSetId(value: string): void;

  clearReferenceBoundsList(): void;
  getReferenceBoundsList(): Array<ReferenceBound>;
  setReferenceBoundsList(value: Array<ReferenceBound>): void;
  addReferenceBounds(value?: ReferenceBound, index?: number): ReferenceBound;

  clearMetadataList(): void;
  getMetadataList(): Array<VariantSetMetadata>;
  setMetadataList(value: Array<VariantSetMetadata>): void;
  addMetadata(value?: VariantSetMetadata, index?: number): VariantSetMetadata;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VariantSet.AsObject;
  static toObject(includeInstance: boolean, msg: VariantSet): VariantSet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VariantSet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VariantSet;
  static deserializeBinaryFromReader(message: VariantSet, reader: jspb.BinaryReader): VariantSet;
}

export namespace VariantSet {
  export type AsObject = {
    datasetId: string,
    id: string,
    referenceSetId: string,
    referenceBoundsList: Array<ReferenceBound.AsObject>,
    metadataList: Array<VariantSetMetadata.AsObject>,
    name: string,
    description: string,
  }
}

export class Variant extends jspb.Message {
  getVariantSetId(): string;
  setVariantSetId(value: string): void;

  getId(): string;
  setId(value: string): void;

  clearNamesList(): void;
  getNamesList(): Array<string>;
  setNamesList(value: Array<string>): void;
  addNames(value: string, index?: number): string;

  getCreated(): number;
  setCreated(value: number): void;

  getReferenceName(): string;
  setReferenceName(value: string): void;

  getStart(): number;
  setStart(value: number): void;

  getEnd(): number;
  setEnd(value: number): void;

  getReferenceBases(): string;
  setReferenceBases(value: string): void;

  clearAlternateBasesList(): void;
  getAlternateBasesList(): Array<string>;
  setAlternateBasesList(value: Array<string>): void;
  addAlternateBases(value: string, index?: number): string;

  getQuality(): number;
  setQuality(value: number): void;

  clearFilterList(): void;
  getFilterList(): Array<string>;
  setFilterList(value: Array<string>): void;
  addFilter(value: string, index?: number): string;

  getInfoMap(): jspb.Map<string, google_protobuf_struct_pb.ListValue>;
  clearInfoMap(): void;
  clearCallsList(): void;
  getCallsList(): Array<VariantCall>;
  setCallsList(value: Array<VariantCall>): void;
  addCalls(value?: VariantCall, index?: number): VariantCall;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Variant.AsObject;
  static toObject(includeInstance: boolean, msg: Variant): Variant.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Variant, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Variant;
  static deserializeBinaryFromReader(message: Variant, reader: jspb.BinaryReader): Variant;
}

export namespace Variant {
  export type AsObject = {
    variantSetId: string,
    id: string,
    namesList: Array<string>,
    created: number,
    referenceName: string,
    start: number,
    end: number,
    referenceBases: string,
    alternateBasesList: Array<string>,
    quality: number,
    filterList: Array<string>,
    infoMap: Array<[string, google_protobuf_struct_pb.ListValue.AsObject]>,
    callsList: Array<VariantCall.AsObject>,
  }
}

export class VariantCall extends jspb.Message {
  getCallSetId(): string;
  setCallSetId(value: string): void;

  getCallSetName(): string;
  setCallSetName(value: string): void;

  clearGenotypeList(): void;
  getGenotypeList(): Array<number>;
  setGenotypeList(value: Array<number>): void;
  addGenotype(value: number, index?: number): number;

  getPhaseset(): string;
  setPhaseset(value: string): void;

  clearGenotypeLikelihoodList(): void;
  getGenotypeLikelihoodList(): Array<number>;
  setGenotypeLikelihoodList(value: Array<number>): void;
  addGenotypeLikelihood(value: number, index?: number): number;

  getInfoMap(): jspb.Map<string, google_protobuf_struct_pb.ListValue>;
  clearInfoMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VariantCall.AsObject;
  static toObject(includeInstance: boolean, msg: VariantCall): VariantCall.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VariantCall, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VariantCall;
  static deserializeBinaryFromReader(message: VariantCall, reader: jspb.BinaryReader): VariantCall;
}

export namespace VariantCall {
  export type AsObject = {
    callSetId: string,
    callSetName: string,
    genotypeList: Array<number>,
    phaseset: string,
    genotypeLikelihoodList: Array<number>,
    infoMap: Array<[string, google_protobuf_struct_pb.ListValue.AsObject]>,
  }
}

export class CallSet extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getSampleId(): string;
  setSampleId(value: string): void;

  clearVariantSetIdsList(): void;
  getVariantSetIdsList(): Array<string>;
  setVariantSetIdsList(value: Array<string>): void;
  addVariantSetIds(value: string, index?: number): string;

  getCreated(): number;
  setCreated(value: number): void;

  getInfoMap(): jspb.Map<string, google_protobuf_struct_pb.ListValue>;
  clearInfoMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CallSet.AsObject;
  static toObject(includeInstance: boolean, msg: CallSet): CallSet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CallSet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CallSet;
  static deserializeBinaryFromReader(message: CallSet, reader: jspb.BinaryReader): CallSet;
}

export namespace CallSet {
  export type AsObject = {
    id: string,
    name: string,
    sampleId: string,
    variantSetIdsList: Array<string>,
    created: number,
    infoMap: Array<[string, google_protobuf_struct_pb.ListValue.AsObject]>,
  }
}

export class ReferenceBound extends jspb.Message {
  getReferenceName(): string;
  setReferenceName(value: string): void;

  getUpperBound(): number;
  setUpperBound(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReferenceBound.AsObject;
  static toObject(includeInstance: boolean, msg: ReferenceBound): ReferenceBound.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReferenceBound, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReferenceBound;
  static deserializeBinaryFromReader(message: ReferenceBound, reader: jspb.BinaryReader): ReferenceBound;
}

export namespace ReferenceBound {
  export type AsObject = {
    referenceName: string,
    upperBound: number,
  }
}

export class ImportVariantsRequest extends jspb.Message {
  getVariantSetId(): string;
  setVariantSetId(value: string): void;

  clearSourceUrisList(): void;
  getSourceUrisList(): Array<string>;
  setSourceUrisList(value: Array<string>): void;
  addSourceUris(value: string, index?: number): string;

  getFormat(): ImportVariantsRequest.FormatMap[keyof ImportVariantsRequest.FormatMap];
  setFormat(value: ImportVariantsRequest.FormatMap[keyof ImportVariantsRequest.FormatMap]): void;

  getNormalizeReferenceNames(): boolean;
  setNormalizeReferenceNames(value: boolean): void;

  getInfoMergeConfigMap(): jspb.Map<string, InfoMergeOperationMap[keyof InfoMergeOperationMap]>;
  clearInfoMergeConfigMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImportVariantsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ImportVariantsRequest): ImportVariantsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ImportVariantsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImportVariantsRequest;
  static deserializeBinaryFromReader(message: ImportVariantsRequest, reader: jspb.BinaryReader): ImportVariantsRequest;
}

export namespace ImportVariantsRequest {
  export type AsObject = {
    variantSetId: string,
    sourceUrisList: Array<string>,
    format: ImportVariantsRequest.FormatMap[keyof ImportVariantsRequest.FormatMap],
    normalizeReferenceNames: boolean,
    infoMergeConfigMap: Array<[string, InfoMergeOperationMap[keyof InfoMergeOperationMap]]>,
  }

  export interface FormatMap {
    FORMAT_UNSPECIFIED: 0;
    FORMAT_VCF: 1;
    FORMAT_COMPLETE_GENOMICS: 2;
  }

  export const Format: FormatMap;
}

export class ImportVariantsResponse extends jspb.Message {
  clearCallSetIdsList(): void;
  getCallSetIdsList(): Array<string>;
  setCallSetIdsList(value: Array<string>): void;
  addCallSetIds(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImportVariantsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ImportVariantsResponse): ImportVariantsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ImportVariantsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImportVariantsResponse;
  static deserializeBinaryFromReader(message: ImportVariantsResponse, reader: jspb.BinaryReader): ImportVariantsResponse;
}

export namespace ImportVariantsResponse {
  export type AsObject = {
    callSetIdsList: Array<string>,
  }
}

export class CreateVariantSetRequest extends jspb.Message {
  hasVariantSet(): boolean;
  clearVariantSet(): void;
  getVariantSet(): VariantSet | undefined;
  setVariantSet(value?: VariantSet): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateVariantSetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateVariantSetRequest): CreateVariantSetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateVariantSetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateVariantSetRequest;
  static deserializeBinaryFromReader(message: CreateVariantSetRequest, reader: jspb.BinaryReader): CreateVariantSetRequest;
}

export namespace CreateVariantSetRequest {
  export type AsObject = {
    variantSet?: VariantSet.AsObject,
  }
}

export class ExportVariantSetRequest extends jspb.Message {
  getVariantSetId(): string;
  setVariantSetId(value: string): void;

  clearCallSetIdsList(): void;
  getCallSetIdsList(): Array<string>;
  setCallSetIdsList(value: Array<string>): void;
  addCallSetIds(value: string, index?: number): string;

  getProjectId(): string;
  setProjectId(value: string): void;

  getFormat(): ExportVariantSetRequest.FormatMap[keyof ExportVariantSetRequest.FormatMap];
  setFormat(value: ExportVariantSetRequest.FormatMap[keyof ExportVariantSetRequest.FormatMap]): void;

  getBigqueryDataset(): string;
  setBigqueryDataset(value: string): void;

  getBigqueryTable(): string;
  setBigqueryTable(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExportVariantSetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExportVariantSetRequest): ExportVariantSetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExportVariantSetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExportVariantSetRequest;
  static deserializeBinaryFromReader(message: ExportVariantSetRequest, reader: jspb.BinaryReader): ExportVariantSetRequest;
}

export namespace ExportVariantSetRequest {
  export type AsObject = {
    variantSetId: string,
    callSetIdsList: Array<string>,
    projectId: string,
    format: ExportVariantSetRequest.FormatMap[keyof ExportVariantSetRequest.FormatMap],
    bigqueryDataset: string,
    bigqueryTable: string,
  }

  export interface FormatMap {
    FORMAT_UNSPECIFIED: 0;
    FORMAT_BIGQUERY: 1;
  }

  export const Format: FormatMap;
}

export class GetVariantSetRequest extends jspb.Message {
  getVariantSetId(): string;
  setVariantSetId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVariantSetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetVariantSetRequest): GetVariantSetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetVariantSetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetVariantSetRequest;
  static deserializeBinaryFromReader(message: GetVariantSetRequest, reader: jspb.BinaryReader): GetVariantSetRequest;
}

export namespace GetVariantSetRequest {
  export type AsObject = {
    variantSetId: string,
  }
}

export class SearchVariantSetsRequest extends jspb.Message {
  clearDatasetIdsList(): void;
  getDatasetIdsList(): Array<string>;
  setDatasetIdsList(value: Array<string>): void;
  addDatasetIds(value: string, index?: number): string;

  getPageToken(): string;
  setPageToken(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchVariantSetsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SearchVariantSetsRequest): SearchVariantSetsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchVariantSetsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchVariantSetsRequest;
  static deserializeBinaryFromReader(message: SearchVariantSetsRequest, reader: jspb.BinaryReader): SearchVariantSetsRequest;
}

export namespace SearchVariantSetsRequest {
  export type AsObject = {
    datasetIdsList: Array<string>,
    pageToken: string,
    pageSize: number,
  }
}

export class SearchVariantSetsResponse extends jspb.Message {
  clearVariantSetsList(): void;
  getVariantSetsList(): Array<VariantSet>;
  setVariantSetsList(value: Array<VariantSet>): void;
  addVariantSets(value?: VariantSet, index?: number): VariantSet;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchVariantSetsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SearchVariantSetsResponse): SearchVariantSetsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchVariantSetsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchVariantSetsResponse;
  static deserializeBinaryFromReader(message: SearchVariantSetsResponse, reader: jspb.BinaryReader): SearchVariantSetsResponse;
}

export namespace SearchVariantSetsResponse {
  export type AsObject = {
    variantSetsList: Array<VariantSet.AsObject>,
    nextPageToken: string,
  }
}

export class DeleteVariantSetRequest extends jspb.Message {
  getVariantSetId(): string;
  setVariantSetId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteVariantSetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteVariantSetRequest): DeleteVariantSetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteVariantSetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteVariantSetRequest;
  static deserializeBinaryFromReader(message: DeleteVariantSetRequest, reader: jspb.BinaryReader): DeleteVariantSetRequest;
}

export namespace DeleteVariantSetRequest {
  export type AsObject = {
    variantSetId: string,
  }
}

export class UpdateVariantSetRequest extends jspb.Message {
  getVariantSetId(): string;
  setVariantSetId(value: string): void;

  hasVariantSet(): boolean;
  clearVariantSet(): void;
  getVariantSet(): VariantSet | undefined;
  setVariantSet(value?: VariantSet): void;

  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateVariantSetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateVariantSetRequest): UpdateVariantSetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateVariantSetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateVariantSetRequest;
  static deserializeBinaryFromReader(message: UpdateVariantSetRequest, reader: jspb.BinaryReader): UpdateVariantSetRequest;
}

export namespace UpdateVariantSetRequest {
  export type AsObject = {
    variantSetId: string,
    variantSet?: VariantSet.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class SearchVariantsRequest extends jspb.Message {
  clearVariantSetIdsList(): void;
  getVariantSetIdsList(): Array<string>;
  setVariantSetIdsList(value: Array<string>): void;
  addVariantSetIds(value: string, index?: number): string;

  getVariantName(): string;
  setVariantName(value: string): void;

  clearCallSetIdsList(): void;
  getCallSetIdsList(): Array<string>;
  setCallSetIdsList(value: Array<string>): void;
  addCallSetIds(value: string, index?: number): string;

  getReferenceName(): string;
  setReferenceName(value: string): void;

  getStart(): number;
  setStart(value: number): void;

  getEnd(): number;
  setEnd(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getMaxCalls(): number;
  setMaxCalls(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchVariantsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SearchVariantsRequest): SearchVariantsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchVariantsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchVariantsRequest;
  static deserializeBinaryFromReader(message: SearchVariantsRequest, reader: jspb.BinaryReader): SearchVariantsRequest;
}

export namespace SearchVariantsRequest {
  export type AsObject = {
    variantSetIdsList: Array<string>,
    variantName: string,
    callSetIdsList: Array<string>,
    referenceName: string,
    start: number,
    end: number,
    pageToken: string,
    pageSize: number,
    maxCalls: number,
  }
}

export class SearchVariantsResponse extends jspb.Message {
  clearVariantsList(): void;
  getVariantsList(): Array<Variant>;
  setVariantsList(value: Array<Variant>): void;
  addVariants(value?: Variant, index?: number): Variant;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchVariantsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SearchVariantsResponse): SearchVariantsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchVariantsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchVariantsResponse;
  static deserializeBinaryFromReader(message: SearchVariantsResponse, reader: jspb.BinaryReader): SearchVariantsResponse;
}

export namespace SearchVariantsResponse {
  export type AsObject = {
    variantsList: Array<Variant.AsObject>,
    nextPageToken: string,
  }
}

export class CreateVariantRequest extends jspb.Message {
  hasVariant(): boolean;
  clearVariant(): void;
  getVariant(): Variant | undefined;
  setVariant(value?: Variant): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateVariantRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateVariantRequest): CreateVariantRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateVariantRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateVariantRequest;
  static deserializeBinaryFromReader(message: CreateVariantRequest, reader: jspb.BinaryReader): CreateVariantRequest;
}

export namespace CreateVariantRequest {
  export type AsObject = {
    variant?: Variant.AsObject,
  }
}

export class UpdateVariantRequest extends jspb.Message {
  getVariantId(): string;
  setVariantId(value: string): void;

  hasVariant(): boolean;
  clearVariant(): void;
  getVariant(): Variant | undefined;
  setVariant(value?: Variant): void;

  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateVariantRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateVariantRequest): UpdateVariantRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateVariantRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateVariantRequest;
  static deserializeBinaryFromReader(message: UpdateVariantRequest, reader: jspb.BinaryReader): UpdateVariantRequest;
}

export namespace UpdateVariantRequest {
  export type AsObject = {
    variantId: string,
    variant?: Variant.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class DeleteVariantRequest extends jspb.Message {
  getVariantId(): string;
  setVariantId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteVariantRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteVariantRequest): DeleteVariantRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteVariantRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteVariantRequest;
  static deserializeBinaryFromReader(message: DeleteVariantRequest, reader: jspb.BinaryReader): DeleteVariantRequest;
}

export namespace DeleteVariantRequest {
  export type AsObject = {
    variantId: string,
  }
}

export class GetVariantRequest extends jspb.Message {
  getVariantId(): string;
  setVariantId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVariantRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetVariantRequest): GetVariantRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetVariantRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetVariantRequest;
  static deserializeBinaryFromReader(message: GetVariantRequest, reader: jspb.BinaryReader): GetVariantRequest;
}

export namespace GetVariantRequest {
  export type AsObject = {
    variantId: string,
  }
}

export class MergeVariantsRequest extends jspb.Message {
  getVariantSetId(): string;
  setVariantSetId(value: string): void;

  clearVariantsList(): void;
  getVariantsList(): Array<Variant>;
  setVariantsList(value: Array<Variant>): void;
  addVariants(value?: Variant, index?: number): Variant;

  getInfoMergeConfigMap(): jspb.Map<string, InfoMergeOperationMap[keyof InfoMergeOperationMap]>;
  clearInfoMergeConfigMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MergeVariantsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MergeVariantsRequest): MergeVariantsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MergeVariantsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MergeVariantsRequest;
  static deserializeBinaryFromReader(message: MergeVariantsRequest, reader: jspb.BinaryReader): MergeVariantsRequest;
}

export namespace MergeVariantsRequest {
  export type AsObject = {
    variantSetId: string,
    variantsList: Array<Variant.AsObject>,
    infoMergeConfigMap: Array<[string, InfoMergeOperationMap[keyof InfoMergeOperationMap]]>,
  }
}

export class SearchCallSetsRequest extends jspb.Message {
  clearVariantSetIdsList(): void;
  getVariantSetIdsList(): Array<string>;
  setVariantSetIdsList(value: Array<string>): void;
  addVariantSetIds(value: string, index?: number): string;

  getName(): string;
  setName(value: string): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchCallSetsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SearchCallSetsRequest): SearchCallSetsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchCallSetsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchCallSetsRequest;
  static deserializeBinaryFromReader(message: SearchCallSetsRequest, reader: jspb.BinaryReader): SearchCallSetsRequest;
}

export namespace SearchCallSetsRequest {
  export type AsObject = {
    variantSetIdsList: Array<string>,
    name: string,
    pageToken: string,
    pageSize: number,
  }
}

export class SearchCallSetsResponse extends jspb.Message {
  clearCallSetsList(): void;
  getCallSetsList(): Array<CallSet>;
  setCallSetsList(value: Array<CallSet>): void;
  addCallSets(value?: CallSet, index?: number): CallSet;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchCallSetsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SearchCallSetsResponse): SearchCallSetsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchCallSetsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchCallSetsResponse;
  static deserializeBinaryFromReader(message: SearchCallSetsResponse, reader: jspb.BinaryReader): SearchCallSetsResponse;
}

export namespace SearchCallSetsResponse {
  export type AsObject = {
    callSetsList: Array<CallSet.AsObject>,
    nextPageToken: string,
  }
}

export class CreateCallSetRequest extends jspb.Message {
  hasCallSet(): boolean;
  clearCallSet(): void;
  getCallSet(): CallSet | undefined;
  setCallSet(value?: CallSet): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCallSetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCallSetRequest): CreateCallSetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateCallSetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCallSetRequest;
  static deserializeBinaryFromReader(message: CreateCallSetRequest, reader: jspb.BinaryReader): CreateCallSetRequest;
}

export namespace CreateCallSetRequest {
  export type AsObject = {
    callSet?: CallSet.AsObject,
  }
}

export class UpdateCallSetRequest extends jspb.Message {
  getCallSetId(): string;
  setCallSetId(value: string): void;

  hasCallSet(): boolean;
  clearCallSet(): void;
  getCallSet(): CallSet | undefined;
  setCallSet(value?: CallSet): void;

  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCallSetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCallSetRequest): UpdateCallSetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateCallSetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCallSetRequest;
  static deserializeBinaryFromReader(message: UpdateCallSetRequest, reader: jspb.BinaryReader): UpdateCallSetRequest;
}

export namespace UpdateCallSetRequest {
  export type AsObject = {
    callSetId: string,
    callSet?: CallSet.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class DeleteCallSetRequest extends jspb.Message {
  getCallSetId(): string;
  setCallSetId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCallSetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCallSetRequest): DeleteCallSetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteCallSetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCallSetRequest;
  static deserializeBinaryFromReader(message: DeleteCallSetRequest, reader: jspb.BinaryReader): DeleteCallSetRequest;
}

export namespace DeleteCallSetRequest {
  export type AsObject = {
    callSetId: string,
  }
}

export class GetCallSetRequest extends jspb.Message {
  getCallSetId(): string;
  setCallSetId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCallSetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCallSetRequest): GetCallSetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCallSetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCallSetRequest;
  static deserializeBinaryFromReader(message: GetCallSetRequest, reader: jspb.BinaryReader): GetCallSetRequest;
}

export namespace GetCallSetRequest {
  export type AsObject = {
    callSetId: string,
  }
}

export class StreamVariantsRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getVariantSetId(): string;
  setVariantSetId(value: string): void;

  clearCallSetIdsList(): void;
  getCallSetIdsList(): Array<string>;
  setCallSetIdsList(value: Array<string>): void;
  addCallSetIds(value: string, index?: number): string;

  getReferenceName(): string;
  setReferenceName(value: string): void;

  getStart(): number;
  setStart(value: number): void;

  getEnd(): number;
  setEnd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamVariantsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StreamVariantsRequest): StreamVariantsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StreamVariantsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamVariantsRequest;
  static deserializeBinaryFromReader(message: StreamVariantsRequest, reader: jspb.BinaryReader): StreamVariantsRequest;
}

export namespace StreamVariantsRequest {
  export type AsObject = {
    projectId: string,
    variantSetId: string,
    callSetIdsList: Array<string>,
    referenceName: string,
    start: number,
    end: number,
  }
}

export class StreamVariantsResponse extends jspb.Message {
  clearVariantsList(): void;
  getVariantsList(): Array<Variant>;
  setVariantsList(value: Array<Variant>): void;
  addVariants(value?: Variant, index?: number): Variant;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamVariantsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StreamVariantsResponse): StreamVariantsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StreamVariantsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamVariantsResponse;
  static deserializeBinaryFromReader(message: StreamVariantsResponse, reader: jspb.BinaryReader): StreamVariantsResponse;
}

export namespace StreamVariantsResponse {
  export type AsObject = {
    variantsList: Array<Variant.AsObject>,
  }
}

export interface InfoMergeOperationMap {
  INFO_MERGE_OPERATION_UNSPECIFIED: 0;
  IGNORE_NEW: 1;
  MOVE_TO_CALLS: 2;
}

export const InfoMergeOperation: InfoMergeOperationMap;

