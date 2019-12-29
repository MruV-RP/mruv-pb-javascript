// package: google.cloud.datalabeling.v1beta1
// file: google/cloud/datalabeling/v1beta1/data_payloads.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class ImagePayload extends jspb.Message {
  getMimeType(): string;
  setMimeType(value: string): void;

  getImageThumbnail(): Uint8Array | string;
  getImageThumbnail_asU8(): Uint8Array;
  getImageThumbnail_asB64(): string;
  setImageThumbnail(value: Uint8Array | string): void;

  getImageUri(): string;
  setImageUri(value: string): void;

  getSignedUri(): string;
  setSignedUri(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImagePayload.AsObject;
  static toObject(includeInstance: boolean, msg: ImagePayload): ImagePayload.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ImagePayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImagePayload;
  static deserializeBinaryFromReader(message: ImagePayload, reader: jspb.BinaryReader): ImagePayload;
}

export namespace ImagePayload {
  export type AsObject = {
    mimeType: string,
    imageThumbnail: Uint8Array | string,
    imageUri: string,
    signedUri: string,
  }
}

export class TextPayload extends jspb.Message {
  getTextContent(): string;
  setTextContent(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TextPayload.AsObject;
  static toObject(includeInstance: boolean, msg: TextPayload): TextPayload.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TextPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TextPayload;
  static deserializeBinaryFromReader(message: TextPayload, reader: jspb.BinaryReader): TextPayload;
}

export namespace TextPayload {
  export type AsObject = {
    textContent: string,
  }
}

export class VideoThumbnail extends jspb.Message {
  getThumbnail(): Uint8Array | string;
  getThumbnail_asU8(): Uint8Array;
  getThumbnail_asB64(): string;
  setThumbnail(value: Uint8Array | string): void;

  hasTimeOffset(): boolean;
  clearTimeOffset(): void;
  getTimeOffset(): google_protobuf_duration_pb.Duration | undefined;
  setTimeOffset(value?: google_protobuf_duration_pb.Duration): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VideoThumbnail.AsObject;
  static toObject(includeInstance: boolean, msg: VideoThumbnail): VideoThumbnail.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VideoThumbnail, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VideoThumbnail;
  static deserializeBinaryFromReader(message: VideoThumbnail, reader: jspb.BinaryReader): VideoThumbnail;
}

export namespace VideoThumbnail {
  export type AsObject = {
    thumbnail: Uint8Array | string,
    timeOffset?: google_protobuf_duration_pb.Duration.AsObject,
  }
}

export class VideoPayload extends jspb.Message {
  getMimeType(): string;
  setMimeType(value: string): void;

  getVideoUri(): string;
  setVideoUri(value: string): void;

  clearVideoThumbnailsList(): void;
  getVideoThumbnailsList(): Array<VideoThumbnail>;
  setVideoThumbnailsList(value: Array<VideoThumbnail>): void;
  addVideoThumbnails(value?: VideoThumbnail, index?: number): VideoThumbnail;

  getFrameRate(): number;
  setFrameRate(value: number): void;

  getSignedUri(): string;
  setSignedUri(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VideoPayload.AsObject;
  static toObject(includeInstance: boolean, msg: VideoPayload): VideoPayload.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VideoPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VideoPayload;
  static deserializeBinaryFromReader(message: VideoPayload, reader: jspb.BinaryReader): VideoPayload;
}

export namespace VideoPayload {
  export type AsObject = {
    mimeType: string,
    videoUri: string,
    videoThumbnailsList: Array<VideoThumbnail.AsObject>,
    frameRate: number,
    signedUri: string,
  }
}

