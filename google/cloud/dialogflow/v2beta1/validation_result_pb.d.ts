// package: google.cloud.dialogflow.v2beta1
// file: google/cloud/dialogflow/v2beta1/validation_result.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";

export class ValidationError extends jspb.Message {
  getSeverity(): ValidationError.SeverityMap[keyof ValidationError.SeverityMap];
  setSeverity(value: ValidationError.SeverityMap[keyof ValidationError.SeverityMap]): void;

  clearEntriesList(): void;
  getEntriesList(): Array<string>;
  setEntriesList(value: Array<string>): void;
  addEntries(value: string, index?: number): string;

  getErrorMessage(): string;
  setErrorMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidationError.AsObject;
  static toObject(includeInstance: boolean, msg: ValidationError): ValidationError.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValidationError, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidationError;
  static deserializeBinaryFromReader(message: ValidationError, reader: jspb.BinaryReader): ValidationError;
}

export namespace ValidationError {
  export type AsObject = {
    severity: ValidationError.SeverityMap[keyof ValidationError.SeverityMap],
    entriesList: Array<string>,
    errorMessage: string,
  }

  export interface SeverityMap {
    SEVERITY_UNSPECIFIED: 0;
    INFO: 1;
    WARNING: 2;
    ERROR: 3;
    CRITICAL: 4;
  }

  export const Severity: SeverityMap;
}

export class ValidationResult extends jspb.Message {
  clearValidationErrorsList(): void;
  getValidationErrorsList(): Array<ValidationError>;
  setValidationErrorsList(value: Array<ValidationError>): void;
  addValidationErrors(value?: ValidationError, index?: number): ValidationError;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidationResult.AsObject;
  static toObject(includeInstance: boolean, msg: ValidationResult): ValidationResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValidationResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidationResult;
  static deserializeBinaryFromReader(message: ValidationResult, reader: jspb.BinaryReader): ValidationResult;
}

export namespace ValidationResult {
  export type AsObject = {
    validationErrorsList: Array<ValidationError.AsObject>,
  }
}

