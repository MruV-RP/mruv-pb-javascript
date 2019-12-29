// package: google.streetview.publish.v1
// file: google/streetview/publish/v1/resources.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_type_latlng_pb from "../../../../google/type/latlng_pb";

export class UploadRef extends jspb.Message {
  getUploadUrl(): string;
  setUploadUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UploadRef.AsObject;
  static toObject(includeInstance: boolean, msg: UploadRef): UploadRef.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UploadRef, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UploadRef;
  static deserializeBinaryFromReader(message: UploadRef, reader: jspb.BinaryReader): UploadRef;
}

export namespace UploadRef {
  export type AsObject = {
    uploadUrl: string,
  }
}

export class PhotoId extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PhotoId.AsObject;
  static toObject(includeInstance: boolean, msg: PhotoId): PhotoId.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PhotoId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PhotoId;
  static deserializeBinaryFromReader(message: PhotoId, reader: jspb.BinaryReader): PhotoId;
}

export namespace PhotoId {
  export type AsObject = {
    id: string,
  }
}

export class Level extends jspb.Message {
  getNumber(): number;
  setNumber(value: number): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Level.AsObject;
  static toObject(includeInstance: boolean, msg: Level): Level.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Level, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Level;
  static deserializeBinaryFromReader(message: Level, reader: jspb.BinaryReader): Level;
}

export namespace Level {
  export type AsObject = {
    number: number,
    name: string,
  }
}

export class Pose extends jspb.Message {
  hasLatLngPair(): boolean;
  clearLatLngPair(): void;
  getLatLngPair(): google_type_latlng_pb.LatLng | undefined;
  setLatLngPair(value?: google_type_latlng_pb.LatLng): void;

  getAltitude(): number;
  setAltitude(value: number): void;

  getHeading(): number;
  setHeading(value: number): void;

  getPitch(): number;
  setPitch(value: number): void;

  getRoll(): number;
  setRoll(value: number): void;

  hasLevel(): boolean;
  clearLevel(): void;
  getLevel(): Level | undefined;
  setLevel(value?: Level): void;

  getAccuracyMeters(): number;
  setAccuracyMeters(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Pose.AsObject;
  static toObject(includeInstance: boolean, msg: Pose): Pose.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Pose, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Pose;
  static deserializeBinaryFromReader(message: Pose, reader: jspb.BinaryReader): Pose;
}

export namespace Pose {
  export type AsObject = {
    latLngPair?: google_type_latlng_pb.LatLng.AsObject,
    altitude: number,
    heading: number,
    pitch: number,
    roll: number,
    level?: Level.AsObject,
    accuracyMeters: number,
  }
}

export class Place extends jspb.Message {
  getPlaceId(): string;
  setPlaceId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getLanguageCode(): string;
  setLanguageCode(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Place.AsObject;
  static toObject(includeInstance: boolean, msg: Place): Place.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Place, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Place;
  static deserializeBinaryFromReader(message: Place, reader: jspb.BinaryReader): Place;
}

export namespace Place {
  export type AsObject = {
    placeId: string,
    name: string,
    languageCode: string,
  }
}

export class Connection extends jspb.Message {
  hasTarget(): boolean;
  clearTarget(): void;
  getTarget(): PhotoId | undefined;
  setTarget(value?: PhotoId): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Connection.AsObject;
  static toObject(includeInstance: boolean, msg: Connection): Connection.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Connection, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Connection;
  static deserializeBinaryFromReader(message: Connection, reader: jspb.BinaryReader): Connection;
}

export namespace Connection {
  export type AsObject = {
    target?: PhotoId.AsObject,
  }
}

export class Photo extends jspb.Message {
  hasPhotoId(): boolean;
  clearPhotoId(): void;
  getPhotoId(): PhotoId | undefined;
  setPhotoId(value?: PhotoId): void;

  hasUploadReference(): boolean;
  clearUploadReference(): void;
  getUploadReference(): UploadRef | undefined;
  setUploadReference(value?: UploadRef): void;

  getDownloadUrl(): string;
  setDownloadUrl(value: string): void;

  getThumbnailUrl(): string;
  setThumbnailUrl(value: string): void;

  getShareLink(): string;
  setShareLink(value: string): void;

  hasPose(): boolean;
  clearPose(): void;
  getPose(): Pose | undefined;
  setPose(value?: Pose): void;

  clearConnectionsList(): void;
  getConnectionsList(): Array<Connection>;
  setConnectionsList(value: Array<Connection>): void;
  addConnections(value?: Connection, index?: number): Connection;

  hasCaptureTime(): boolean;
  clearCaptureTime(): void;
  getCaptureTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCaptureTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  clearPlacesList(): void;
  getPlacesList(): Array<Place>;
  setPlacesList(value: Array<Place>): void;
  addPlaces(value?: Place, index?: number): Place;

  getViewCount(): number;
  setViewCount(value: number): void;

  getTransferStatus(): Photo.TransferStatusMap[keyof Photo.TransferStatusMap];
  setTransferStatus(value: Photo.TransferStatusMap[keyof Photo.TransferStatusMap]): void;

  getMapsPublishStatus(): Photo.MapsPublishStatusMap[keyof Photo.MapsPublishStatusMap];
  setMapsPublishStatus(value: Photo.MapsPublishStatusMap[keyof Photo.MapsPublishStatusMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Photo.AsObject;
  static toObject(includeInstance: boolean, msg: Photo): Photo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Photo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Photo;
  static deserializeBinaryFromReader(message: Photo, reader: jspb.BinaryReader): Photo;
}

export namespace Photo {
  export type AsObject = {
    photoId?: PhotoId.AsObject,
    uploadReference?: UploadRef.AsObject,
    downloadUrl: string,
    thumbnailUrl: string,
    shareLink: string,
    pose?: Pose.AsObject,
    connectionsList: Array<Connection.AsObject>,
    captureTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    placesList: Array<Place.AsObject>,
    viewCount: number,
    transferStatus: Photo.TransferStatusMap[keyof Photo.TransferStatusMap],
    mapsPublishStatus: Photo.MapsPublishStatusMap[keyof Photo.MapsPublishStatusMap],
  }

  export interface TransferStatusMap {
    TRANSFER_STATUS_UNKNOWN: 0;
    NEVER_TRANSFERRED: 1;
    PENDING: 2;
    COMPLETED: 3;
    REJECTED: 4;
    EXPIRED: 5;
    CANCELLED: 6;
    RECEIVED_VIA_TRANSFER: 7;
  }

  export const TransferStatus: TransferStatusMap;

  export interface MapsPublishStatusMap {
    UNSPECIFIED_MAPS_PUBLISH_STATUS: 0;
    PUBLISHED: 1;
    REJECTED_UNKNOWN: 2;
  }

  export const MapsPublishStatus: MapsPublishStatusMap;
}

