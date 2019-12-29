// package: google.devtools.resultstore.v2
// file: google/devtools/resultstore/v2/file_processing_error.proto

import * as jspb from "google-protobuf";

export class FileProcessingErrors extends jspb.Message {
  getFileUid(): string;
  setFileUid(value: string): void;

  clearFileProcessingErrorsList(): void;
  getFileProcessingErrorsList(): Array<FileProcessingError>;
  setFileProcessingErrorsList(value: Array<FileProcessingError>): void;
  addFileProcessingErrors(value?: FileProcessingError, index?: number): FileProcessingError;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileProcessingErrors.AsObject;
  static toObject(includeInstance: boolean, msg: FileProcessingErrors): FileProcessingErrors.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FileProcessingErrors, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileProcessingErrors;
  static deserializeBinaryFromReader(message: FileProcessingErrors, reader: jspb.BinaryReader): FileProcessingErrors;
}

export namespace FileProcessingErrors {
  export type AsObject = {
    fileUid: string,
    fileProcessingErrorsList: Array<FileProcessingError.AsObject>,
  }
}

export class FileProcessingError extends jspb.Message {
  getType(): FileProcessingErrorTypeMap[keyof FileProcessingErrorTypeMap];
  setType(value: FileProcessingErrorTypeMap[keyof FileProcessingErrorTypeMap]): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileProcessingError.AsObject;
  static toObject(includeInstance: boolean, msg: FileProcessingError): FileProcessingError.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FileProcessingError, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileProcessingError;
  static deserializeBinaryFromReader(message: FileProcessingError, reader: jspb.BinaryReader): FileProcessingError;
}

export namespace FileProcessingError {
  export type AsObject = {
    type: FileProcessingErrorTypeMap[keyof FileProcessingErrorTypeMap],
    message: string,
  }
}

export interface FileProcessingErrorTypeMap {
  FILE_PROCESSING_ERROR_TYPE_UNSPECIFIED: 0;
  GENERIC_READ_ERROR: 1;
  GENERIC_PARSE_ERROR: 2;
  FILE_TOO_LARGE: 3;
  OUTPUT_TOO_LARGE: 4;
  ACCESS_DENIED: 5;
  DEADLINE_EXCEEDED: 6;
  NOT_FOUND: 7;
  FILE_EMPTY: 8;
}

export const FileProcessingErrorType: FileProcessingErrorTypeMap;

