// package: google.devtools.resultstore.v2
// file: google/devtools/resultstore/v2/upload_metadata.proto

import * as jspb from "google-protobuf";

export class UploadMetadata extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getResumeToken(): string;
  setResumeToken(value: string): void;

  getUploaderState(): Uint8Array | string;
  getUploaderState_asU8(): Uint8Array;
  getUploaderState_asB64(): string;
  setUploaderState(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UploadMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: UploadMetadata): UploadMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UploadMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UploadMetadata;
  static deserializeBinaryFromReader(message: UploadMetadata, reader: jspb.BinaryReader): UploadMetadata;
}

export namespace UploadMetadata {
  export type AsObject = {
    name: string,
    resumeToken: string,
    uploaderState: Uint8Array | string,
  }
}

