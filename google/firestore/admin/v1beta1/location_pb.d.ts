// package: google.firestore.admin.v1beta1
// file: google/firestore/admin/v1beta1/location.proto

import * as jspb from "google-protobuf";
import * as google_type_latlng_pb from "../../../../google/type/latlng_pb";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";

export class LocationMetadata extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LocationMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: LocationMetadata): LocationMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LocationMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LocationMetadata;
  static deserializeBinaryFromReader(message: LocationMetadata, reader: jspb.BinaryReader): LocationMetadata;
}

export namespace LocationMetadata {
  export type AsObject = {
  }
}

