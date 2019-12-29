// package: google.genomics.v1
// file: google/genomics/v1/readalignment.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as google_genomics_v1_cigar_pb from "../../../google/genomics/v1/cigar_pb";
import * as google_genomics_v1_position_pb from "../../../google/genomics/v1/position_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";

export class LinearAlignment extends jspb.Message {
  hasPosition(): boolean;
  clearPosition(): void;
  getPosition(): google_genomics_v1_position_pb.Position | undefined;
  setPosition(value?: google_genomics_v1_position_pb.Position): void;

  getMappingQuality(): number;
  setMappingQuality(value: number): void;

  clearCigarList(): void;
  getCigarList(): Array<google_genomics_v1_cigar_pb.CigarUnit>;
  setCigarList(value: Array<google_genomics_v1_cigar_pb.CigarUnit>): void;
  addCigar(value?: google_genomics_v1_cigar_pb.CigarUnit, index?: number): google_genomics_v1_cigar_pb.CigarUnit;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LinearAlignment.AsObject;
  static toObject(includeInstance: boolean, msg: LinearAlignment): LinearAlignment.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LinearAlignment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LinearAlignment;
  static deserializeBinaryFromReader(message: LinearAlignment, reader: jspb.BinaryReader): LinearAlignment;
}

export namespace LinearAlignment {
  export type AsObject = {
    position?: google_genomics_v1_position_pb.Position.AsObject,
    mappingQuality: number,
    cigarList: Array<google_genomics_v1_cigar_pb.CigarUnit.AsObject>,
  }
}

export class Read extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getReadGroupId(): string;
  setReadGroupId(value: string): void;

  getReadGroupSetId(): string;
  setReadGroupSetId(value: string): void;

  getFragmentName(): string;
  setFragmentName(value: string): void;

  getProperPlacement(): boolean;
  setProperPlacement(value: boolean): void;

  getDuplicateFragment(): boolean;
  setDuplicateFragment(value: boolean): void;

  getFragmentLength(): number;
  setFragmentLength(value: number): void;

  getReadNumber(): number;
  setReadNumber(value: number): void;

  getNumberReads(): number;
  setNumberReads(value: number): void;

  getFailedVendorQualityChecks(): boolean;
  setFailedVendorQualityChecks(value: boolean): void;

  hasAlignment(): boolean;
  clearAlignment(): void;
  getAlignment(): LinearAlignment | undefined;
  setAlignment(value?: LinearAlignment): void;

  getSecondaryAlignment(): boolean;
  setSecondaryAlignment(value: boolean): void;

  getSupplementaryAlignment(): boolean;
  setSupplementaryAlignment(value: boolean): void;

  getAlignedSequence(): string;
  setAlignedSequence(value: string): void;

  clearAlignedQualityList(): void;
  getAlignedQualityList(): Array<number>;
  setAlignedQualityList(value: Array<number>): void;
  addAlignedQuality(value: number, index?: number): number;

  hasNextMatePosition(): boolean;
  clearNextMatePosition(): void;
  getNextMatePosition(): google_genomics_v1_position_pb.Position | undefined;
  setNextMatePosition(value?: google_genomics_v1_position_pb.Position): void;

  getInfoMap(): jspb.Map<string, google_protobuf_struct_pb.ListValue>;
  clearInfoMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Read.AsObject;
  static toObject(includeInstance: boolean, msg: Read): Read.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Read, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Read;
  static deserializeBinaryFromReader(message: Read, reader: jspb.BinaryReader): Read;
}

export namespace Read {
  export type AsObject = {
    id: string,
    readGroupId: string,
    readGroupSetId: string,
    fragmentName: string,
    properPlacement: boolean,
    duplicateFragment: boolean,
    fragmentLength: number,
    readNumber: number,
    numberReads: number,
    failedVendorQualityChecks: boolean,
    alignment?: LinearAlignment.AsObject,
    secondaryAlignment: boolean,
    supplementaryAlignment: boolean,
    alignedSequence: string,
    alignedQualityList: Array<number>,
    nextMatePosition?: google_genomics_v1_position_pb.Position.AsObject,
    infoMap: Array<[string, google_protobuf_struct_pb.ListValue.AsObject]>,
  }
}

