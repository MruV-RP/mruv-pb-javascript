// package: google.cloud.vision.v1p1beta1
// file: google/cloud/vision/v1p1beta1/image_annotator.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";
import * as google_cloud_vision_v1p1beta1_geometry_pb from "../../../../google/cloud/vision/v1p1beta1/geometry_pb";
import * as google_cloud_vision_v1p1beta1_text_annotation_pb from "../../../../google/cloud/vision/v1p1beta1/text_annotation_pb";
import * as google_cloud_vision_v1p1beta1_web_detection_pb from "../../../../google/cloud/vision/v1p1beta1/web_detection_pb";
import * as google_rpc_status_pb from "../../../../google/rpc/status_pb";
import * as google_type_color_pb from "../../../../google/type/color_pb";
import * as google_type_latlng_pb from "../../../../google/type/latlng_pb";

export class Feature extends jspb.Message {
  getType(): Feature.TypeMap[keyof Feature.TypeMap];
  setType(value: Feature.TypeMap[keyof Feature.TypeMap]): void;

  getMaxResults(): number;
  setMaxResults(value: number): void;

  getModel(): string;
  setModel(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Feature.AsObject;
  static toObject(includeInstance: boolean, msg: Feature): Feature.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Feature, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Feature;
  static deserializeBinaryFromReader(message: Feature, reader: jspb.BinaryReader): Feature;
}

export namespace Feature {
  export type AsObject = {
    type: Feature.TypeMap[keyof Feature.TypeMap],
    maxResults: number,
    model: string,
  }

  export interface TypeMap {
    TYPE_UNSPECIFIED: 0;
    FACE_DETECTION: 1;
    LANDMARK_DETECTION: 2;
    LOGO_DETECTION: 3;
    LABEL_DETECTION: 4;
    TEXT_DETECTION: 5;
    DOCUMENT_TEXT_DETECTION: 11;
    SAFE_SEARCH_DETECTION: 6;
    IMAGE_PROPERTIES: 7;
    CROP_HINTS: 9;
    WEB_DETECTION: 10;
  }

  export const Type: TypeMap;
}

export class ImageSource extends jspb.Message {
  getGcsImageUri(): string;
  setGcsImageUri(value: string): void;

  getImageUri(): string;
  setImageUri(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImageSource.AsObject;
  static toObject(includeInstance: boolean, msg: ImageSource): ImageSource.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ImageSource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImageSource;
  static deserializeBinaryFromReader(message: ImageSource, reader: jspb.BinaryReader): ImageSource;
}

export namespace ImageSource {
  export type AsObject = {
    gcsImageUri: string,
    imageUri: string,
  }
}

export class Image extends jspb.Message {
  getContent(): Uint8Array | string;
  getContent_asU8(): Uint8Array;
  getContent_asB64(): string;
  setContent(value: Uint8Array | string): void;

  hasSource(): boolean;
  clearSource(): void;
  getSource(): ImageSource | undefined;
  setSource(value?: ImageSource): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Image.AsObject;
  static toObject(includeInstance: boolean, msg: Image): Image.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Image, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Image;
  static deserializeBinaryFromReader(message: Image, reader: jspb.BinaryReader): Image;
}

export namespace Image {
  export type AsObject = {
    content: Uint8Array | string,
    source?: ImageSource.AsObject,
  }
}

export class FaceAnnotation extends jspb.Message {
  hasBoundingPoly(): boolean;
  clearBoundingPoly(): void;
  getBoundingPoly(): google_cloud_vision_v1p1beta1_geometry_pb.BoundingPoly | undefined;
  setBoundingPoly(value?: google_cloud_vision_v1p1beta1_geometry_pb.BoundingPoly): void;

  hasFdBoundingPoly(): boolean;
  clearFdBoundingPoly(): void;
  getFdBoundingPoly(): google_cloud_vision_v1p1beta1_geometry_pb.BoundingPoly | undefined;
  setFdBoundingPoly(value?: google_cloud_vision_v1p1beta1_geometry_pb.BoundingPoly): void;

  clearLandmarksList(): void;
  getLandmarksList(): Array<FaceAnnotation.Landmark>;
  setLandmarksList(value: Array<FaceAnnotation.Landmark>): void;
  addLandmarks(value?: FaceAnnotation.Landmark, index?: number): FaceAnnotation.Landmark;

  getRollAngle(): number;
  setRollAngle(value: number): void;

  getPanAngle(): number;
  setPanAngle(value: number): void;

  getTiltAngle(): number;
  setTiltAngle(value: number): void;

  getDetectionConfidence(): number;
  setDetectionConfidence(value: number): void;

  getLandmarkingConfidence(): number;
  setLandmarkingConfidence(value: number): void;

  getJoyLikelihood(): LikelihoodMap[keyof LikelihoodMap];
  setJoyLikelihood(value: LikelihoodMap[keyof LikelihoodMap]): void;

  getSorrowLikelihood(): LikelihoodMap[keyof LikelihoodMap];
  setSorrowLikelihood(value: LikelihoodMap[keyof LikelihoodMap]): void;

  getAngerLikelihood(): LikelihoodMap[keyof LikelihoodMap];
  setAngerLikelihood(value: LikelihoodMap[keyof LikelihoodMap]): void;

  getSurpriseLikelihood(): LikelihoodMap[keyof LikelihoodMap];
  setSurpriseLikelihood(value: LikelihoodMap[keyof LikelihoodMap]): void;

  getUnderExposedLikelihood(): LikelihoodMap[keyof LikelihoodMap];
  setUnderExposedLikelihood(value: LikelihoodMap[keyof LikelihoodMap]): void;

  getBlurredLikelihood(): LikelihoodMap[keyof LikelihoodMap];
  setBlurredLikelihood(value: LikelihoodMap[keyof LikelihoodMap]): void;

  getHeadwearLikelihood(): LikelihoodMap[keyof LikelihoodMap];
  setHeadwearLikelihood(value: LikelihoodMap[keyof LikelihoodMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FaceAnnotation.AsObject;
  static toObject(includeInstance: boolean, msg: FaceAnnotation): FaceAnnotation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FaceAnnotation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FaceAnnotation;
  static deserializeBinaryFromReader(message: FaceAnnotation, reader: jspb.BinaryReader): FaceAnnotation;
}

export namespace FaceAnnotation {
  export type AsObject = {
    boundingPoly?: google_cloud_vision_v1p1beta1_geometry_pb.BoundingPoly.AsObject,
    fdBoundingPoly?: google_cloud_vision_v1p1beta1_geometry_pb.BoundingPoly.AsObject,
    landmarksList: Array<FaceAnnotation.Landmark.AsObject>,
    rollAngle: number,
    panAngle: number,
    tiltAngle: number,
    detectionConfidence: number,
    landmarkingConfidence: number,
    joyLikelihood: LikelihoodMap[keyof LikelihoodMap],
    sorrowLikelihood: LikelihoodMap[keyof LikelihoodMap],
    angerLikelihood: LikelihoodMap[keyof LikelihoodMap],
    surpriseLikelihood: LikelihoodMap[keyof LikelihoodMap],
    underExposedLikelihood: LikelihoodMap[keyof LikelihoodMap],
    blurredLikelihood: LikelihoodMap[keyof LikelihoodMap],
    headwearLikelihood: LikelihoodMap[keyof LikelihoodMap],
  }

  export class Landmark extends jspb.Message {
    getType(): FaceAnnotation.Landmark.TypeMap[keyof FaceAnnotation.Landmark.TypeMap];
    setType(value: FaceAnnotation.Landmark.TypeMap[keyof FaceAnnotation.Landmark.TypeMap]): void;

    hasPosition(): boolean;
    clearPosition(): void;
    getPosition(): google_cloud_vision_v1p1beta1_geometry_pb.Position | undefined;
    setPosition(value?: google_cloud_vision_v1p1beta1_geometry_pb.Position): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Landmark.AsObject;
    static toObject(includeInstance: boolean, msg: Landmark): Landmark.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Landmark, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Landmark;
    static deserializeBinaryFromReader(message: Landmark, reader: jspb.BinaryReader): Landmark;
  }

  export namespace Landmark {
    export type AsObject = {
      type: FaceAnnotation.Landmark.TypeMap[keyof FaceAnnotation.Landmark.TypeMap],
      position?: google_cloud_vision_v1p1beta1_geometry_pb.Position.AsObject,
    }

    export interface TypeMap {
      UNKNOWN_LANDMARK: 0;
      LEFT_EYE: 1;
      RIGHT_EYE: 2;
      LEFT_OF_LEFT_EYEBROW: 3;
      RIGHT_OF_LEFT_EYEBROW: 4;
      LEFT_OF_RIGHT_EYEBROW: 5;
      RIGHT_OF_RIGHT_EYEBROW: 6;
      MIDPOINT_BETWEEN_EYES: 7;
      NOSE_TIP: 8;
      UPPER_LIP: 9;
      LOWER_LIP: 10;
      MOUTH_LEFT: 11;
      MOUTH_RIGHT: 12;
      MOUTH_CENTER: 13;
      NOSE_BOTTOM_RIGHT: 14;
      NOSE_BOTTOM_LEFT: 15;
      NOSE_BOTTOM_CENTER: 16;
      LEFT_EYE_TOP_BOUNDARY: 17;
      LEFT_EYE_RIGHT_CORNER: 18;
      LEFT_EYE_BOTTOM_BOUNDARY: 19;
      LEFT_EYE_LEFT_CORNER: 20;
      RIGHT_EYE_TOP_BOUNDARY: 21;
      RIGHT_EYE_RIGHT_CORNER: 22;
      RIGHT_EYE_BOTTOM_BOUNDARY: 23;
      RIGHT_EYE_LEFT_CORNER: 24;
      LEFT_EYEBROW_UPPER_MIDPOINT: 25;
      RIGHT_EYEBROW_UPPER_MIDPOINT: 26;
      LEFT_EAR_TRAGION: 27;
      RIGHT_EAR_TRAGION: 28;
      LEFT_EYE_PUPIL: 29;
      RIGHT_EYE_PUPIL: 30;
      FOREHEAD_GLABELLA: 31;
      CHIN_GNATHION: 32;
      CHIN_LEFT_GONION: 33;
      CHIN_RIGHT_GONION: 34;
    }

    export const Type: TypeMap;
  }
}

export class LocationInfo extends jspb.Message {
  hasLatLng(): boolean;
  clearLatLng(): void;
  getLatLng(): google_type_latlng_pb.LatLng | undefined;
  setLatLng(value?: google_type_latlng_pb.LatLng): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LocationInfo.AsObject;
  static toObject(includeInstance: boolean, msg: LocationInfo): LocationInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LocationInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LocationInfo;
  static deserializeBinaryFromReader(message: LocationInfo, reader: jspb.BinaryReader): LocationInfo;
}

export namespace LocationInfo {
  export type AsObject = {
    latLng?: google_type_latlng_pb.LatLng.AsObject,
  }
}

export class Property extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getValue(): string;
  setValue(value: string): void;

  getUint64Value(): number;
  setUint64Value(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Property.AsObject;
  static toObject(includeInstance: boolean, msg: Property): Property.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Property, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Property;
  static deserializeBinaryFromReader(message: Property, reader: jspb.BinaryReader): Property;
}

export namespace Property {
  export type AsObject = {
    name: string,
    value: string,
    uint64Value: number,
  }
}

export class EntityAnnotation extends jspb.Message {
  getMid(): string;
  setMid(value: string): void;

  getLocale(): string;
  setLocale(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getScore(): number;
  setScore(value: number): void;

  getConfidence(): number;
  setConfidence(value: number): void;

  getTopicality(): number;
  setTopicality(value: number): void;

  hasBoundingPoly(): boolean;
  clearBoundingPoly(): void;
  getBoundingPoly(): google_cloud_vision_v1p1beta1_geometry_pb.BoundingPoly | undefined;
  setBoundingPoly(value?: google_cloud_vision_v1p1beta1_geometry_pb.BoundingPoly): void;

  clearLocationsList(): void;
  getLocationsList(): Array<LocationInfo>;
  setLocationsList(value: Array<LocationInfo>): void;
  addLocations(value?: LocationInfo, index?: number): LocationInfo;

  clearPropertiesList(): void;
  getPropertiesList(): Array<Property>;
  setPropertiesList(value: Array<Property>): void;
  addProperties(value?: Property, index?: number): Property;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EntityAnnotation.AsObject;
  static toObject(includeInstance: boolean, msg: EntityAnnotation): EntityAnnotation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EntityAnnotation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EntityAnnotation;
  static deserializeBinaryFromReader(message: EntityAnnotation, reader: jspb.BinaryReader): EntityAnnotation;
}

export namespace EntityAnnotation {
  export type AsObject = {
    mid: string,
    locale: string,
    description: string,
    score: number,
    confidence: number,
    topicality: number,
    boundingPoly?: google_cloud_vision_v1p1beta1_geometry_pb.BoundingPoly.AsObject,
    locationsList: Array<LocationInfo.AsObject>,
    propertiesList: Array<Property.AsObject>,
  }
}

export class SafeSearchAnnotation extends jspb.Message {
  getAdult(): LikelihoodMap[keyof LikelihoodMap];
  setAdult(value: LikelihoodMap[keyof LikelihoodMap]): void;

  getSpoof(): LikelihoodMap[keyof LikelihoodMap];
  setSpoof(value: LikelihoodMap[keyof LikelihoodMap]): void;

  getMedical(): LikelihoodMap[keyof LikelihoodMap];
  setMedical(value: LikelihoodMap[keyof LikelihoodMap]): void;

  getViolence(): LikelihoodMap[keyof LikelihoodMap];
  setViolence(value: LikelihoodMap[keyof LikelihoodMap]): void;

  getRacy(): LikelihoodMap[keyof LikelihoodMap];
  setRacy(value: LikelihoodMap[keyof LikelihoodMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SafeSearchAnnotation.AsObject;
  static toObject(includeInstance: boolean, msg: SafeSearchAnnotation): SafeSearchAnnotation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SafeSearchAnnotation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SafeSearchAnnotation;
  static deserializeBinaryFromReader(message: SafeSearchAnnotation, reader: jspb.BinaryReader): SafeSearchAnnotation;
}

export namespace SafeSearchAnnotation {
  export type AsObject = {
    adult: LikelihoodMap[keyof LikelihoodMap],
    spoof: LikelihoodMap[keyof LikelihoodMap],
    medical: LikelihoodMap[keyof LikelihoodMap],
    violence: LikelihoodMap[keyof LikelihoodMap],
    racy: LikelihoodMap[keyof LikelihoodMap],
  }
}

export class LatLongRect extends jspb.Message {
  hasMinLatLng(): boolean;
  clearMinLatLng(): void;
  getMinLatLng(): google_type_latlng_pb.LatLng | undefined;
  setMinLatLng(value?: google_type_latlng_pb.LatLng): void;

  hasMaxLatLng(): boolean;
  clearMaxLatLng(): void;
  getMaxLatLng(): google_type_latlng_pb.LatLng | undefined;
  setMaxLatLng(value?: google_type_latlng_pb.LatLng): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LatLongRect.AsObject;
  static toObject(includeInstance: boolean, msg: LatLongRect): LatLongRect.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LatLongRect, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LatLongRect;
  static deserializeBinaryFromReader(message: LatLongRect, reader: jspb.BinaryReader): LatLongRect;
}

export namespace LatLongRect {
  export type AsObject = {
    minLatLng?: google_type_latlng_pb.LatLng.AsObject,
    maxLatLng?: google_type_latlng_pb.LatLng.AsObject,
  }
}

export class ColorInfo extends jspb.Message {
  hasColor(): boolean;
  clearColor(): void;
  getColor(): google_type_color_pb.Color | undefined;
  setColor(value?: google_type_color_pb.Color): void;

  getScore(): number;
  setScore(value: number): void;

  getPixelFraction(): number;
  setPixelFraction(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ColorInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ColorInfo): ColorInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ColorInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ColorInfo;
  static deserializeBinaryFromReader(message: ColorInfo, reader: jspb.BinaryReader): ColorInfo;
}

export namespace ColorInfo {
  export type AsObject = {
    color?: google_type_color_pb.Color.AsObject,
    score: number,
    pixelFraction: number,
  }
}

export class DominantColorsAnnotation extends jspb.Message {
  clearColorsList(): void;
  getColorsList(): Array<ColorInfo>;
  setColorsList(value: Array<ColorInfo>): void;
  addColors(value?: ColorInfo, index?: number): ColorInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DominantColorsAnnotation.AsObject;
  static toObject(includeInstance: boolean, msg: DominantColorsAnnotation): DominantColorsAnnotation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DominantColorsAnnotation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DominantColorsAnnotation;
  static deserializeBinaryFromReader(message: DominantColorsAnnotation, reader: jspb.BinaryReader): DominantColorsAnnotation;
}

export namespace DominantColorsAnnotation {
  export type AsObject = {
    colorsList: Array<ColorInfo.AsObject>,
  }
}

export class ImageProperties extends jspb.Message {
  hasDominantColors(): boolean;
  clearDominantColors(): void;
  getDominantColors(): DominantColorsAnnotation | undefined;
  setDominantColors(value?: DominantColorsAnnotation): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImageProperties.AsObject;
  static toObject(includeInstance: boolean, msg: ImageProperties): ImageProperties.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ImageProperties, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImageProperties;
  static deserializeBinaryFromReader(message: ImageProperties, reader: jspb.BinaryReader): ImageProperties;
}

export namespace ImageProperties {
  export type AsObject = {
    dominantColors?: DominantColorsAnnotation.AsObject,
  }
}

export class CropHint extends jspb.Message {
  hasBoundingPoly(): boolean;
  clearBoundingPoly(): void;
  getBoundingPoly(): google_cloud_vision_v1p1beta1_geometry_pb.BoundingPoly | undefined;
  setBoundingPoly(value?: google_cloud_vision_v1p1beta1_geometry_pb.BoundingPoly): void;

  getConfidence(): number;
  setConfidence(value: number): void;

  getImportanceFraction(): number;
  setImportanceFraction(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CropHint.AsObject;
  static toObject(includeInstance: boolean, msg: CropHint): CropHint.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CropHint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CropHint;
  static deserializeBinaryFromReader(message: CropHint, reader: jspb.BinaryReader): CropHint;
}

export namespace CropHint {
  export type AsObject = {
    boundingPoly?: google_cloud_vision_v1p1beta1_geometry_pb.BoundingPoly.AsObject,
    confidence: number,
    importanceFraction: number,
  }
}

export class CropHintsAnnotation extends jspb.Message {
  clearCropHintsList(): void;
  getCropHintsList(): Array<CropHint>;
  setCropHintsList(value: Array<CropHint>): void;
  addCropHints(value?: CropHint, index?: number): CropHint;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CropHintsAnnotation.AsObject;
  static toObject(includeInstance: boolean, msg: CropHintsAnnotation): CropHintsAnnotation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CropHintsAnnotation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CropHintsAnnotation;
  static deserializeBinaryFromReader(message: CropHintsAnnotation, reader: jspb.BinaryReader): CropHintsAnnotation;
}

export namespace CropHintsAnnotation {
  export type AsObject = {
    cropHintsList: Array<CropHint.AsObject>,
  }
}

export class CropHintsParams extends jspb.Message {
  clearAspectRatiosList(): void;
  getAspectRatiosList(): Array<number>;
  setAspectRatiosList(value: Array<number>): void;
  addAspectRatios(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CropHintsParams.AsObject;
  static toObject(includeInstance: boolean, msg: CropHintsParams): CropHintsParams.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CropHintsParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CropHintsParams;
  static deserializeBinaryFromReader(message: CropHintsParams, reader: jspb.BinaryReader): CropHintsParams;
}

export namespace CropHintsParams {
  export type AsObject = {
    aspectRatiosList: Array<number>,
  }
}

export class WebDetectionParams extends jspb.Message {
  getIncludeGeoResults(): boolean;
  setIncludeGeoResults(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WebDetectionParams.AsObject;
  static toObject(includeInstance: boolean, msg: WebDetectionParams): WebDetectionParams.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WebDetectionParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WebDetectionParams;
  static deserializeBinaryFromReader(message: WebDetectionParams, reader: jspb.BinaryReader): WebDetectionParams;
}

export namespace WebDetectionParams {
  export type AsObject = {
    includeGeoResults: boolean,
  }
}

export class ImageContext extends jspb.Message {
  hasLatLongRect(): boolean;
  clearLatLongRect(): void;
  getLatLongRect(): LatLongRect | undefined;
  setLatLongRect(value?: LatLongRect): void;

  clearLanguageHintsList(): void;
  getLanguageHintsList(): Array<string>;
  setLanguageHintsList(value: Array<string>): void;
  addLanguageHints(value: string, index?: number): string;

  hasCropHintsParams(): boolean;
  clearCropHintsParams(): void;
  getCropHintsParams(): CropHintsParams | undefined;
  setCropHintsParams(value?: CropHintsParams): void;

  hasWebDetectionParams(): boolean;
  clearWebDetectionParams(): void;
  getWebDetectionParams(): WebDetectionParams | undefined;
  setWebDetectionParams(value?: WebDetectionParams): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImageContext.AsObject;
  static toObject(includeInstance: boolean, msg: ImageContext): ImageContext.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ImageContext, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImageContext;
  static deserializeBinaryFromReader(message: ImageContext, reader: jspb.BinaryReader): ImageContext;
}

export namespace ImageContext {
  export type AsObject = {
    latLongRect?: LatLongRect.AsObject,
    languageHintsList: Array<string>,
    cropHintsParams?: CropHintsParams.AsObject,
    webDetectionParams?: WebDetectionParams.AsObject,
  }
}

export class AnnotateImageRequest extends jspb.Message {
  hasImage(): boolean;
  clearImage(): void;
  getImage(): Image | undefined;
  setImage(value?: Image): void;

  clearFeaturesList(): void;
  getFeaturesList(): Array<Feature>;
  setFeaturesList(value: Array<Feature>): void;
  addFeatures(value?: Feature, index?: number): Feature;

  hasImageContext(): boolean;
  clearImageContext(): void;
  getImageContext(): ImageContext | undefined;
  setImageContext(value?: ImageContext): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AnnotateImageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AnnotateImageRequest): AnnotateImageRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AnnotateImageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AnnotateImageRequest;
  static deserializeBinaryFromReader(message: AnnotateImageRequest, reader: jspb.BinaryReader): AnnotateImageRequest;
}

export namespace AnnotateImageRequest {
  export type AsObject = {
    image?: Image.AsObject,
    featuresList: Array<Feature.AsObject>,
    imageContext?: ImageContext.AsObject,
  }
}

export class AnnotateImageResponse extends jspb.Message {
  clearFaceAnnotationsList(): void;
  getFaceAnnotationsList(): Array<FaceAnnotation>;
  setFaceAnnotationsList(value: Array<FaceAnnotation>): void;
  addFaceAnnotations(value?: FaceAnnotation, index?: number): FaceAnnotation;

  clearLandmarkAnnotationsList(): void;
  getLandmarkAnnotationsList(): Array<EntityAnnotation>;
  setLandmarkAnnotationsList(value: Array<EntityAnnotation>): void;
  addLandmarkAnnotations(value?: EntityAnnotation, index?: number): EntityAnnotation;

  clearLogoAnnotationsList(): void;
  getLogoAnnotationsList(): Array<EntityAnnotation>;
  setLogoAnnotationsList(value: Array<EntityAnnotation>): void;
  addLogoAnnotations(value?: EntityAnnotation, index?: number): EntityAnnotation;

  clearLabelAnnotationsList(): void;
  getLabelAnnotationsList(): Array<EntityAnnotation>;
  setLabelAnnotationsList(value: Array<EntityAnnotation>): void;
  addLabelAnnotations(value?: EntityAnnotation, index?: number): EntityAnnotation;

  clearTextAnnotationsList(): void;
  getTextAnnotationsList(): Array<EntityAnnotation>;
  setTextAnnotationsList(value: Array<EntityAnnotation>): void;
  addTextAnnotations(value?: EntityAnnotation, index?: number): EntityAnnotation;

  hasFullTextAnnotation(): boolean;
  clearFullTextAnnotation(): void;
  getFullTextAnnotation(): google_cloud_vision_v1p1beta1_text_annotation_pb.TextAnnotation | undefined;
  setFullTextAnnotation(value?: google_cloud_vision_v1p1beta1_text_annotation_pb.TextAnnotation): void;

  hasSafeSearchAnnotation(): boolean;
  clearSafeSearchAnnotation(): void;
  getSafeSearchAnnotation(): SafeSearchAnnotation | undefined;
  setSafeSearchAnnotation(value?: SafeSearchAnnotation): void;

  hasImagePropertiesAnnotation(): boolean;
  clearImagePropertiesAnnotation(): void;
  getImagePropertiesAnnotation(): ImageProperties | undefined;
  setImagePropertiesAnnotation(value?: ImageProperties): void;

  hasCropHintsAnnotation(): boolean;
  clearCropHintsAnnotation(): void;
  getCropHintsAnnotation(): CropHintsAnnotation | undefined;
  setCropHintsAnnotation(value?: CropHintsAnnotation): void;

  hasWebDetection(): boolean;
  clearWebDetection(): void;
  getWebDetection(): google_cloud_vision_v1p1beta1_web_detection_pb.WebDetection | undefined;
  setWebDetection(value?: google_cloud_vision_v1p1beta1_web_detection_pb.WebDetection): void;

  hasError(): boolean;
  clearError(): void;
  getError(): google_rpc_status_pb.Status | undefined;
  setError(value?: google_rpc_status_pb.Status): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AnnotateImageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AnnotateImageResponse): AnnotateImageResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AnnotateImageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AnnotateImageResponse;
  static deserializeBinaryFromReader(message: AnnotateImageResponse, reader: jspb.BinaryReader): AnnotateImageResponse;
}

export namespace AnnotateImageResponse {
  export type AsObject = {
    faceAnnotationsList: Array<FaceAnnotation.AsObject>,
    landmarkAnnotationsList: Array<EntityAnnotation.AsObject>,
    logoAnnotationsList: Array<EntityAnnotation.AsObject>,
    labelAnnotationsList: Array<EntityAnnotation.AsObject>,
    textAnnotationsList: Array<EntityAnnotation.AsObject>,
    fullTextAnnotation?: google_cloud_vision_v1p1beta1_text_annotation_pb.TextAnnotation.AsObject,
    safeSearchAnnotation?: SafeSearchAnnotation.AsObject,
    imagePropertiesAnnotation?: ImageProperties.AsObject,
    cropHintsAnnotation?: CropHintsAnnotation.AsObject,
    webDetection?: google_cloud_vision_v1p1beta1_web_detection_pb.WebDetection.AsObject,
    error?: google_rpc_status_pb.Status.AsObject,
  }
}

export class BatchAnnotateImagesRequest extends jspb.Message {
  clearRequestsList(): void;
  getRequestsList(): Array<AnnotateImageRequest>;
  setRequestsList(value: Array<AnnotateImageRequest>): void;
  addRequests(value?: AnnotateImageRequest, index?: number): AnnotateImageRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchAnnotateImagesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BatchAnnotateImagesRequest): BatchAnnotateImagesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BatchAnnotateImagesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchAnnotateImagesRequest;
  static deserializeBinaryFromReader(message: BatchAnnotateImagesRequest, reader: jspb.BinaryReader): BatchAnnotateImagesRequest;
}

export namespace BatchAnnotateImagesRequest {
  export type AsObject = {
    requestsList: Array<AnnotateImageRequest.AsObject>,
  }
}

export class BatchAnnotateImagesResponse extends jspb.Message {
  clearResponsesList(): void;
  getResponsesList(): Array<AnnotateImageResponse>;
  setResponsesList(value: Array<AnnotateImageResponse>): void;
  addResponses(value?: AnnotateImageResponse, index?: number): AnnotateImageResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchAnnotateImagesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BatchAnnotateImagesResponse): BatchAnnotateImagesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BatchAnnotateImagesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchAnnotateImagesResponse;
  static deserializeBinaryFromReader(message: BatchAnnotateImagesResponse, reader: jspb.BinaryReader): BatchAnnotateImagesResponse;
}

export namespace BatchAnnotateImagesResponse {
  export type AsObject = {
    responsesList: Array<AnnotateImageResponse.AsObject>,
  }
}

export interface LikelihoodMap {
  UNKNOWN: 0;
  VERY_UNLIKELY: 1;
  UNLIKELY: 2;
  POSSIBLE: 3;
  LIKELY: 4;
  VERY_LIKELY: 5;
}

export const Likelihood: LikelihoodMap;

