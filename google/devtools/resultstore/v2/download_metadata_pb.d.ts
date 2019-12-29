// package: google.devtools.resultstore.v2
// file: google/devtools/resultstore/v2/download_metadata.proto

import * as jspb from "google-protobuf";
import * as google_devtools_resultstore_v2_common_pb from "../../../../google/devtools/resultstore/v2/common_pb";

export class DownloadMetadata extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getUploadStatus(): google_devtools_resultstore_v2_common_pb.UploadStatusMap[keyof google_devtools_resultstore_v2_common_pb.UploadStatusMap];
  setUploadStatus(value: google_devtools_resultstore_v2_common_pb.UploadStatusMap[keyof google_devtools_resultstore_v2_common_pb.UploadStatusMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DownloadMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: DownloadMetadata): DownloadMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DownloadMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DownloadMetadata;
  static deserializeBinaryFromReader(message: DownloadMetadata, reader: jspb.BinaryReader): DownloadMetadata;
}

export namespace DownloadMetadata {
  export type AsObject = {
    name: string,
    uploadStatus: google_devtools_resultstore_v2_common_pb.UploadStatusMap[keyof google_devtools_resultstore_v2_common_pb.UploadStatusMap],
  }
}

