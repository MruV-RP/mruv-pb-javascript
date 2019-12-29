// package: google.genomics.v1
// file: google/genomics/v1/cigar.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";

export class CigarUnit extends jspb.Message {
  getOperation(): CigarUnit.OperationMap[keyof CigarUnit.OperationMap];
  setOperation(value: CigarUnit.OperationMap[keyof CigarUnit.OperationMap]): void;

  getOperationLength(): number;
  setOperationLength(value: number): void;

  getReferenceSequence(): string;
  setReferenceSequence(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CigarUnit.AsObject;
  static toObject(includeInstance: boolean, msg: CigarUnit): CigarUnit.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CigarUnit, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CigarUnit;
  static deserializeBinaryFromReader(message: CigarUnit, reader: jspb.BinaryReader): CigarUnit;
}

export namespace CigarUnit {
  export type AsObject = {
    operation: CigarUnit.OperationMap[keyof CigarUnit.OperationMap],
    operationLength: number,
    referenceSequence: string,
  }

  export interface OperationMap {
    OPERATION_UNSPECIFIED: 0;
    ALIGNMENT_MATCH: 1;
    INSERT: 2;
    DELETE: 3;
    SKIP: 4;
    CLIP_SOFT: 5;
    CLIP_HARD: 6;
    PAD: 7;
    SEQUENCE_MATCH: 8;
    SEQUENCE_MISMATCH: 9;
  }

  export const Operation: OperationMap;
}

